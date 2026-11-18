/**
 * Student accounts stored on the server in a JSON file (data/accounts.json, git-ignored).
 * - Passwords are hashed with scrypt + per-user salt; plain passwords are never stored.
 * - Session tokens are random 32-byte values; only their SHA-256 hash is stored.
 * - Login attempts are rate-limited per username and per IP.
 */
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

export interface StudentProfile {
  fullName: string;
  classLevel?: string;
  board?: string;
  stateName?: string;
  school?: string;
  district?: string;
  language?: string;
  role?: 'student' | 'teacher' | 'parent';
}

interface AccountRecord {
  id: string;
  username: string;
  passwordHash: string; // scrypt$N$salt$hash
  profile: StudentProfile;
  snapshot: Record<string, string>;
  snapshotUpdatedAt: string | null;
  createdAt: string;
  lastLoginAt: string | null;
}

interface SessionRecord {
  tokenHash: string;
  accountId: string;
  expiresAt: number;
}

interface DbShape {
  accounts: AccountRecord[];
  sessions: SessionRecord[];
}

export interface PublicAccount {
  id: string;
  username: string;
  profile: StudentProfile;
  createdAt: string;
  snapshotUpdatedAt: string | null;
}

const DATA_DIR = process.env.ACCOUNTS_DIR || path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'accounts.json');
const SESSION_DAYS = 90;
export const MAX_SNAPSHOT_BYTES = 2_000_000;

let db: DbShape | null = null;
let writeChain: Promise<void> = Promise.resolve();

function load(): DbShape {
  if (db) return db;
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    const parsed = JSON.parse(raw) as DbShape;
    db = { accounts: parsed.accounts ?? [], sessions: parsed.sessions ?? [] };
  } catch {
    db = { accounts: [], sessions: [] };
  }
  return db;
}

/** Atomic write (temp file + rename), serialized so two requests never interleave. */
function persist(): Promise<void> {
  const snapshot = JSON.stringify(load());
  writeChain = writeChain.then(async () => {
    await fs.promises.mkdir(DATA_DIR, { recursive: true });
    const tmp = `${DB_FILE}.${process.pid}.tmp`;
    await fs.promises.writeFile(tmp, snapshot, { mode: 0o600 });
    await fs.promises.rename(tmp, DB_FILE);
  });
  return writeChain;
}

const sha256 = (s: string) => crypto.createHash('sha256').update(s).digest('hex');

function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64, { N: 16384 }).toString('hex');
  return `scrypt$16384$${salt}$${hash}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const [, n, salt, hash] = stored.split('$');
  if (!salt || !hash) return false;
  const test = crypto.scryptSync(password, salt, 64, { N: Number(n) || 16384 });
  const expected = Buffer.from(hash, 'hex');
  return expected.length === test.length && crypto.timingSafeEqual(expected, test);
}

// A dummy hash so unknown usernames take the same time as wrong passwords.
const DUMMY_HASH = hashPassword(crypto.randomBytes(8).toString('hex'));

export function normalizeUsername(raw: unknown): string {
  return String(raw ?? '').trim().toLowerCase().replace(/\s+/g, '');
}

/** Username: 3–30 of a–z, 0–9, dot, underscore; or a 10-digit mobile number. */
export function validateUsername(u: string): string | null {
  if (/^[0-9]{10}$/.test(u)) return null;
  if (/^[a-z0-9._]{3,30}$/.test(u)) return null;
  return 'Use 3–30 letters, numbers, dot or underscore — or a 10-digit mobile number.';
}

export function validatePassword(p: unknown): string | null {
  if (typeof p !== 'string' || p.length < 6) return 'Password must be at least 6 characters.';
  if (p.length > 128) return 'Password is too long.';
  return null;
}

const PROFILE_FIELDS: (keyof StudentProfile)[] = [
  'fullName',
  'classLevel',
  'board',
  'stateName',
  'school',
  'district',
  'language',
  'role',
];

export function cleanProfile(input: unknown): StudentProfile {
  const src = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>;
  const out: Record<string, string> = {};
  for (const k of PROFILE_FIELDS) {
    const v = src[k];
    if (typeof v === 'string' && v.trim()) out[k] = v.trim().slice(0, 120);
  }
  if (out.role && !['student', 'teacher', 'parent'].includes(out.role)) delete out.role;
  return { fullName: out.fullName ?? '', ...out } as StudentProfile;
}

/** Only keep string values under the app's own storage prefix. */
export function cleanSnapshot(input: unknown): Record<string, string> | null {
  if (!input || typeof input !== 'object') return null;
  const out: Record<string, string> = {};
  let size = 0;
  for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
    if (!k.startsWith('stem-saathi-') || typeof v !== 'string') continue;
    size += k.length + v.length;
    if (size > MAX_SNAPSHOT_BYTES) return null;
    out[k] = v;
  }
  return out;
}

const toPublic = (a: AccountRecord): PublicAccount => ({
  id: a.id,
  username: a.username,
  profile: a.profile,
  createdAt: a.createdAt,
  snapshotUpdatedAt: a.snapshotUpdatedAt,
});

function newSession(accountId: string): string {
  const token = crypto.randomBytes(32).toString('base64url');
  const d = load();
  const now = Date.now();
  d.sessions = d.sessions.filter((s) => s.expiresAt > now);
  d.sessions.push({ tokenHash: sha256(token), accountId, expiresAt: now + SESSION_DAYS * 86_400_000 });
  return token;
}

export async function createAccount(
  username: string,
  password: string,
  profile: StudentProfile,
  snapshot: Record<string, string> | null
): Promise<{ token: string; account: PublicAccount } | { error: string; status: number }> {
  const d = load();
  if (d.accounts.some((a) => a.username === username)) {
    return { error: 'This username is already taken. Try another or log in.', status: 409 };
  }
  const now = new Date().toISOString();
  const rec: AccountRecord = {
    id: crypto.randomUUID(),
    username,
    passwordHash: hashPassword(password),
    profile,
    snapshot: snapshot ?? {},
    snapshotUpdatedAt: snapshot ? now : null,
    createdAt: now,
    lastLoginAt: now,
  };
  d.accounts.push(rec);
  const token = newSession(rec.id);
  await persist();
  return { token, account: toPublic(rec) };
}

export async function login(
  username: string,
  password: string
): Promise<{ token: string; account: PublicAccount; snapshot: Record<string, string> } | null> {
  const rec = load().accounts.find((a) => a.username === username);
  const ok = verifyPassword(password, rec?.passwordHash ?? DUMMY_HASH);
  if (!rec || !ok) return null;
  rec.lastLoginAt = new Date().toISOString();
  const token = newSession(rec.id);
  await persist();
  return { token, account: toPublic(rec), snapshot: rec.snapshot };
}

function accountForToken(token: string | undefined): AccountRecord | null {
  if (!token) return null;
  const d = load();
  const h = sha256(token);
  const s = d.sessions.find((x) => x.tokenHash === h && x.expiresAt > Date.now());
  return s ? d.accounts.find((a) => a.id === s.accountId) ?? null : null;
}

export function getAccount(token: string | undefined) {
  const rec = accountForToken(token);
  return rec ? { account: toPublic(rec), snapshot: rec.snapshot } : null;
}

export async function updateProfile(token: string | undefined, profile: StudentProfile) {
  const rec = accountForToken(token);
  if (!rec) return null;
  rec.profile = profile;
  await persist();
  return toPublic(rec);
}

export async function saveSnapshot(token: string | undefined, snapshot: Record<string, string>) {
  const rec = accountForToken(token);
  if (!rec) return null;
  rec.snapshot = snapshot;
  rec.snapshotUpdatedAt = new Date().toISOString();
  await persist();
  return rec.snapshotUpdatedAt;
}

export async function changePassword(token: string | undefined, oldPw: string, newPw: string) {
  const rec = accountForToken(token);
  if (!rec) return 'auth';
  if (!verifyPassword(oldPw, rec.passwordHash)) return 'wrong';
  rec.passwordHash = hashPassword(newPw);
  const keep = sha256(token!);
  // Sign out every other device after a password change.
  load().sessions = load().sessions.filter((s) => s.accountId !== rec.id || s.tokenHash === keep);
  await persist();
  return 'ok';
}

export async function logout(token: string | undefined) {
  if (!token) return;
  const d = load();
  const h = sha256(token);
  d.sessions = d.sessions.filter((s) => s.tokenHash !== h);
  await persist();
}

// ---- simple in-memory limiter: blocks a key after too many failures ----
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_FAILS = 10;
const WINDOW_MS = 15 * 60_000;
export function isBlocked(key: string, max = MAX_FAILS): boolean {
  const e = attempts.get(key);
  if (!e) return false;
  if (e.resetAt < Date.now()) {
    attempts.delete(key);
    return false;
  }
  return e.count >= max;
}
export function recordFailure(key: string) {
  const now = Date.now();
  const e = attempts.get(key);
  if (!e || e.resetAt < now) attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
  else e.count += 1;
}
export function clearFailures(key: string) {
  attempts.delete(key);
}

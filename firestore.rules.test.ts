/**
 * STEM Saathi Security TDD Harness ("Dirty Dozen" Red Team Matrix)
 * Verifies alignment between firebase-blueprint.json invariants and firestore.rules.
 */

export interface SecurityTestCase {
  id: number;
  name: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  path: string;
  auth: { uid: string; emailVerified: boolean } | null;
  payload?: Record<string, unknown>;
  expectedOutcome: 'ALLOW' | 'PERMISSION_DENIED';
}

export const DIRTY_DOZEN_SECURITY_CASES: SecurityTestCase[] = [
  {
    id: 1,
    name: 'Unauthenticated read/write to user progress',
    operation: 'get',
    path: '/users/uid1/progress/main',
    auth: null,
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 2,
    name: 'Cross-user write to another learner progress',
    operation: 'create',
    path: '/users/uid2/progress/main',
    auth: { uid: 'uid1', emailVerified: true },
    payload: { uid: 'uid2', xp: 9999 },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 3,
    name: 'Unverified email attempting progress write',
    operation: 'create',
    path: '/users/uid1/progress/main',
    auth: { uid: 'uid1', emailVerified: false },
    payload: { uid: 'uid1', xp: 100 },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 4,
    name: 'Shadow field injection (isAdmin: true) on public profile',
    operation: 'create',
    path: '/users/uid1/public/profile',
    auth: { uid: 'uid1', emailVerified: true },
    payload: {
      uid: 'uid1',
      displayName: 'Aarav',
      preferredLanguage: 'en',
      role: 'student',
      isAdmin: true,
    },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 5,
    name: 'Self-escalating role to admin on public profile',
    operation: 'create',
    path: '/users/uid1/public/profile',
    auth: { uid: 'uid1', emailVerified: true },
    payload: {
      uid: 'uid1',
      displayName: 'Aarav',
      preferredLanguage: 'en',
      role: 'admin',
    },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 6,
    name: 'Oversized displayName (>80 chars) on public profile',
    operation: 'create',
    path: '/users/uid1/public/profile',
    auth: { uid: 'uid1', emailVerified: true },
    payload: {
      uid: 'uid1',
      displayName: 'A'.repeat(120),
      preferredLanguage: 'en',
      role: 'student',
    },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 7,
    name: 'Unbounded completedModules array (>50 items)',
    operation: 'create',
    path: '/users/uid1/progress/main',
    auth: { uid: 'uid1', emailVerified: true },
    payload: {
      uid: 'uid1',
      completedModules: Array.from({ length: 55 }, (_, i) => `mod-${i}`),
    },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 8,
    name: 'Client-spoofed updatedAt timestamp != request.time',
    operation: 'update',
    path: '/users/uid1/progress/main',
    auth: { uid: 'uid1', emailVerified: true },
    payload: {
      uid: 'uid1',
      xp: 500,
      updatedAt: '2020-01-01T00:00:00Z',
    },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 9,
    name: 'Non-owner reading private PII info document',
    operation: 'get',
    path: '/users/uid2/private/info',
    auth: { uid: 'uid1', emailVerified: true },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 10,
    name: 'Invalid assignmentId exceeding 128 chars or bad charset',
    operation: 'create',
    path: `/assignments/${'x'.repeat(150)}`,
    auth: { uid: 'uid1', emailVerified: true },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 11,
    name: 'Spoofed authorUid on assignment create',
    operation: 'create',
    path: '/assignments/asgn-1',
    auth: { uid: 'uid1', emailVerified: true },
    payload: {
      id: 'asgn-1',
      authorUid: 'teacher-victim',
      title: 'Optics Lab',
      subject: 'Physics',
      targetGrade: 'Grade 10',
      dueDate: '2026-12-01',
      completionRate: 0,
    },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 12,
    name: 'Modifying immutable createdAt or authorUid on assignment update',
    operation: 'update',
    path: '/assignments/asgn-1',
    auth: { uid: 'uid1', emailVerified: true },
    payload: {
      authorUid: 'uid2',
      createdAt: '2025-01-01T00:00:00Z',
    },
    expectedOutcome: 'PERMISSION_DENIED',
  },
  {
    id: 13,
    name: 'Invalid classLevel (99) on MyLearningState document',
    operation: 'create',
    path: '/users/uid1/learning/state',
    auth: { uid: 'uid1', emailVerified: true },
    payload: {
      uid: 'uid1',
      classLevel: 99,
      board: 'cbse',
      stateName: '',
      session: '2025-26',
      configured: true,
    },
    expectedOutcome: 'PERMISSION_DENIED',
  },
];

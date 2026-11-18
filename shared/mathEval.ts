/**
 * Small, safe arithmetic evaluator (no eval / Function). Used to re-check the final
 * number an AI solver gives, because language models often slip on arithmetic.
 *
 * Supports: numbers (incl. 1.6e-19), + - * / ^ (or **), parentheses, unary minus,
 * functions sqrt cbrt abs exp ln log log10 sin cos tan asin acos atan (radians),
 * sind cosd tand (degrees), and constants pi.
 */
const FUNCS: Record<string, (x: number) => number> = {
  sqrt: Math.sqrt,
  cbrt: Math.cbrt,
  abs: Math.abs,
  exp: Math.exp,
  ln: Math.log,
  log: Math.log10,
  log10: Math.log10,
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  sind: (d) => Math.sin((d * Math.PI) / 180),
  cosd: (d) => Math.cos((d * Math.PI) / 180),
  tand: (d) => Math.tan((d * Math.PI) / 180),
};
const CONSTS: Record<string, number> = { pi: Math.PI };

type Tok = { t: 'num'; v: number } | { t: 'id'; v: string } | { t: 'op'; v: string };

function tokenize(src: string): Tok[] {
  const s = src
    .replace(/×|·|⋅/g, '*')
    .replace(/÷/g, '/')
    .replace(/−|–/g, '-')
    .replace(/π/g, 'pi')
    .replace(/√/g, 'sqrt')
    .replace(/\*\*/g, '^');
  const out: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) {
      i += 1;
      continue;
    }
    const num = /^(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?/.exec(s.slice(i));
    if (num) {
      out.push({ t: 'num', v: parseFloat(num[0]) });
      i += num[0].length;
      continue;
    }
    const id = /^[a-zA-Z_][a-zA-Z0-9_]*/.exec(s.slice(i));
    if (id) {
      out.push({ t: 'id', v: id[0].toLowerCase() });
      i += id[0].length;
      continue;
    }
    if ('+-*/^(),'.includes(c)) {
      out.push({ t: 'op', v: c });
      i += 1;
      continue;
    }
    throw new Error(`Unexpected character "${c}"`);
  }
  return out;
}

export function evaluateExpression(src: string): number {
  if (src.length > 500) throw new Error('Expression too long');
  const toks = tokenize(src);
  let p = 0;
  const peek = () => toks[p];
  const isOp = (v: string) => peek()?.t === 'op' && peek()!.v === v;
  const expect = (v: string) => {
    if (!isOp(v)) throw new Error(`Expected "${v}"`);
    p += 1;
  };

  // expr := term (('+'|'-') term)*
  function expr(): number {
    let v = term();
    while (isOp('+') || isOp('-')) {
      const op = toks[p++].v;
      const r = term();
      v = op === '+' ? v + r : v - r;
    }
    return v;
  }
  // term := unary (('*'|'/') unary | implicit-multiply)*
  function term(): number {
    let v = unary();
    for (;;) {
      if (isOp('*') || isOp('/')) {
        const op = toks[p++].v;
        const r = unary();
        v = op === '*' ? v * r : v / r;
      } else if (peek() && (peek()!.t === 'num' || peek()!.t === 'id' || isOp('('))) {
        v *= unary(); // 2pi, 3(4+5)
      } else return v;
    }
  }
  // unary := '-' unary | '+' unary | power
  function unary(): number {
    if (isOp('-')) {
      p += 1;
      return -unary();
    }
    if (isOp('+')) {
      p += 1;
      return unary();
    }
    return power();
  }
  // power := primary ('^' unary)?   (right-associative, so -2^2 = -4 and 2^-1 = 0.5)
  function power(): number {
    const base = primary();
    if (isOp('^')) {
      p += 1;
      return Math.pow(base, unary());
    }
    return base;
  }
  function primary(): number {
    const tk = peek();
    if (!tk) throw new Error('Unexpected end');
    if (tk.t === 'num') {
      p += 1;
      return tk.v;
    }
    if (tk.t === 'id') {
      p += 1;
      if (tk.v in FUNCS) {
        expect('(');
        const a = expr();
        expect(')');
        return FUNCS[tk.v](a);
      }
      if (tk.v in CONSTS) return CONSTS[tk.v];
      throw new Error(`Unknown name "${tk.v}"`);
    }
    if (isOp('(')) {
      p += 1;
      const v = expr();
      expect(')');
      return v;
    }
    throw new Error(`Unexpected "${tk.v}"`);
  }

  const v = expr();
  if (p !== toks.length) throw new Error('Extra input after expression');
  return v;
}

/** Format to n significant figures; scientific notation for very large/small values. */
export function formatSig(x: number, sig = 4): string {
  if (!Number.isFinite(x)) return String(x);
  if (x === 0) return '0';
  const a = Math.abs(x);
  if (a >= 1e6 || a < 1e-3) {
    const [m, e] = x.toExponential(sig - 1).split('e');
    return `${parseFloat(m)} × 10^${parseInt(e, 10)}`;
  }
  return String(parseFloat(x.toPrecision(sig)));
}

/** Pull the first number out of text like "4.9 m/s" or "1.6 × 10^-19". */
export function parseLooseNumber(text: string): number | null {
  const t = text.replace(/,/g, '').replace(/−/g, '-');
  const sci = /(-?\d+(?:\.\d+)?)\s*(?:×|x|\*)\s*10\s*\^\s*\(?\s*([+-]?\d+)/.exec(t);
  if (sci) return parseFloat(sci[1]) * Math.pow(10, parseInt(sci[2], 10));
  const m = /-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/.exec(t);
  return m ? parseFloat(m[0]) : null;
}

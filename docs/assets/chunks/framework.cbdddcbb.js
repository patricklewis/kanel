function Vn(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const te = {},
  ft = [],
  Ie = () => {},
  Ei = () => !1,
  Ti = /^on[^a-z]/,
  Nt = (e) => Ti.test(e),
  qn = (e) => e.startsWith("onUpdate:"),
  ie = Object.assign,
  zn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ai = Object.prototype.hasOwnProperty,
  q = (e, t) => Ai.call(e, t),
  L = Array.isArray,
  at = (e) => on(e) === "[object Map]",
  ar = (e) => on(e) === "[object Set]",
  j = (e) => typeof e == "function",
  se = (e) => typeof e == "string",
  Yn = (e) => typeof e == "symbol",
  ee = (e) => e !== null && typeof e == "object",
  ur = (e) => ee(e) && j(e.then) && j(e.catch),
  dr = Object.prototype.toString,
  on = (e) => dr.call(e),
  Pi = (e) => on(e).slice(8, -1),
  hr = (e) => on(e) === "[object Object]",
  Jn = (e) =>
    se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Et = Vn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  ln = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ii = /-(\w)/g,
  Me = ln((e) => e.replace(Ii, (t, n) => (n ? n.toUpperCase() : ""))),
  Oi = /\B([A-Z])/g,
  rt = ln((e) => e.replace(Oi, "-$1").toLowerCase()),
  cn = ln((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  zt = ln((e) => (e ? `on${cn(e)}` : "")),
  Ot = (e, t) => !Object.is(e, t),
  Cn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Zt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Ri = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Fi = (e) => {
    const t = se(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let bs;
const Fn = () =>
  bs ||
  (bs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Xn(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = se(s) ? Ni(s) : Xn(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else {
    if (se(e)) return e;
    if (ee(e)) return e;
  }
}
const Si = /;(?![^(]*\))/g,
  Mi = /:([^]+)/,
  Li = /\/\*[^]*?\*\//g;
function Ni(e) {
  const t = {};
  return (
    e
      .replace(Li, "")
      .split(Si)
      .forEach((n) => {
        if (n) {
          const s = n.split(Mi);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Zn(e) {
  let t = "";
  if (se(e)) t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const s = Zn(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const $i =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Hi = Vn($i);
function pr(e) {
  return !!e || e === "";
}
const Pc = (e) =>
    se(e)
      ? e
      : e == null
      ? ""
      : L(e) || (ee(e) && (e.toString === dr || !j(e.toString)))
      ? JSON.stringify(e, gr, 2)
      : String(e),
  gr = (e, t) =>
    t && t.__v_isRef
      ? gr(e, t.value)
      : at(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {},
          ),
        }
      : ar(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ee(t) && !L(t) && !hr(t)
      ? String(t)
      : t;
let _e;
class Bi {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = _e),
      !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = _e;
      try {
        return (_e = this), t();
      } finally {
        _e = n;
      }
    }
  }
  on() {
    _e = this;
  }
  off() {
    _e = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Ui(e, t = _e) {
  t && t.active && t.effects.push(e);
}
function ji() {
  return _e;
}
function Ic(e) {
  _e && _e.cleanups.push(e);
}
const Qn = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  mr = (e) => (e.w & Ve) > 0,
  _r = (e) => (e.n & Ve) > 0,
  Di = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ve;
  },
  Ki = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        mr(r) && !_r(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~Ve),
          (r.n &= ~Ve);
      }
      t.length = n;
    }
  },
  Sn = new WeakMap();
let Ct = 0,
  Ve = 1;
const Mn = 30;
let Ae;
const nt = Symbol(""),
  Ln = Symbol("");
class Gn {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Ui(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ae,
      n = ke;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ae),
        (Ae = this),
        (ke = !0),
        (Ve = 1 << ++Ct),
        Ct <= Mn ? Di(this) : ys(this),
        this.fn()
      );
    } finally {
      Ct <= Mn && Ki(this),
        (Ve = 1 << --Ct),
        (Ae = this.parent),
        (ke = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ae === this
      ? (this.deferStop = !0)
      : this.active &&
        (ys(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function ys(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let ke = !0;
const br = [];
function bt() {
  br.push(ke), (ke = !1);
}
function yt() {
  const e = br.pop();
  ke = e === void 0 ? !0 : e;
}
function pe(e, t, n) {
  if (ke && Ae) {
    let s = Sn.get(e);
    s || Sn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Qn())), yr(r);
  }
}
function yr(e, t) {
  let n = !1;
  Ct <= Mn ? _r(e) || ((e.n |= Ve), (n = !mr(e))) : (n = !e.has(Ae)),
    n && (e.add(Ae), Ae.deps.push(e));
}
function $e(e, t, n, s, r, i) {
  const o = Sn.get(e);
  if (!o) return;
  let l = [];
  if (t === "clear") l = [...o.values()];
  else if (n === "length" && L(e)) {
    const c = Number(s);
    o.forEach((a, d) => {
      (d === "length" || d >= c) && l.push(a);
    });
  } else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case "add":
        L(e)
          ? Jn(n) && l.push(o.get("length"))
          : (l.push(o.get(nt)), at(e) && l.push(o.get(Ln)));
        break;
      case "delete":
        L(e) || (l.push(o.get(nt)), at(e) && l.push(o.get(Ln)));
        break;
      case "set":
        at(e) && l.push(o.get(nt));
        break;
    }
  if (l.length === 1) l[0] && Nn(l[0]);
  else {
    const c = [];
    for (const a of l) a && c.push(...a);
    Nn(Qn(c));
  }
}
function Nn(e, t) {
  const n = L(e) ? e : [...e];
  for (const s of n) s.computed && ws(s);
  for (const s of n) s.computed || ws(s);
}
function ws(e, t) {
  (e !== Ae || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ki = Vn("__proto__,__v_isRef,__isVue"),
  wr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Yn),
  ),
  Wi = es(),
  Vi = es(!1, !0),
  qi = es(!0),
  xs = zi();
function zi() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = Y(this);
        for (let i = 0, o = this.length; i < o; i++) pe(s, "get", i + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(Y)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        bt();
        const s = Y(this)[t].apply(this, n);
        return yt(), s;
      };
    }),
    e
  );
}
function Yi(e) {
  const t = Y(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
function es(e = !1, t = !1) {
  return function (s, r, i) {
    if (r === "__v_isReactive") return !e;
    if (r === "__v_isReadonly") return e;
    if (r === "__v_isShallow") return t;
    if (r === "__v_raw" && i === (e ? (t ? ao : Tr) : t ? Er : vr).get(s))
      return s;
    const o = L(s);
    if (!e) {
      if (o && q(xs, r)) return Reflect.get(xs, r, i);
      if (r === "hasOwnProperty") return Yi;
    }
    const l = Reflect.get(s, r, i);
    return (Yn(r) ? wr.has(r) : ki(r)) || (e || pe(s, "get", r), t)
      ? l
      : fe(l)
      ? o && Jn(r)
        ? l
        : l.value
      : ee(l)
      ? e
        ? Ar(l)
        : an(l)
      : l;
  };
}
const Ji = xr(),
  Xi = xr(!0);
function xr(e = !1) {
  return function (n, s, r, i) {
    let o = n[s];
    if (gt(o) && fe(o) && !fe(r)) return !1;
    if (
      !e &&
      (!Qt(r) && !gt(r) && ((o = Y(o)), (r = Y(r))), !L(n) && fe(o) && !fe(r))
    )
      return (o.value = r), !0;
    const l = L(n) && Jn(s) ? Number(s) < n.length : q(n, s),
      c = Reflect.set(n, s, r, i);
    return (
      n === Y(i) && (l ? Ot(r, o) && $e(n, "set", s, r) : $e(n, "add", s, r)), c
    );
  };
}
function Zi(e, t) {
  const n = q(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && $e(e, "delete", t, void 0), s;
}
function Qi(e, t) {
  const n = Reflect.has(e, t);
  return (!Yn(t) || !wr.has(t)) && pe(e, "has", t), n;
}
function Gi(e) {
  return pe(e, "iterate", L(e) ? "length" : nt), Reflect.ownKeys(e);
}
const Cr = { get: Wi, set: Ji, deleteProperty: Zi, has: Qi, ownKeys: Gi },
  eo = {
    get: qi,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  to = ie({}, Cr, { get: Vi, set: Xi }),
  ts = (e) => e,
  fn = (e) => Reflect.getPrototypeOf(e);
function Bt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = Y(e),
    i = Y(t);
  n || (t !== i && pe(r, "get", t), pe(r, "get", i));
  const { has: o } = fn(r),
    l = s ? ts : n ? rs : Rt;
  if (o.call(r, t)) return l(e.get(t));
  if (o.call(r, i)) return l(e.get(i));
  e !== r && e.get(t);
}
function Ut(e, t = !1) {
  const n = this.__v_raw,
    s = Y(n),
    r = Y(e);
  return (
    t || (e !== r && pe(s, "has", e), pe(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function jt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && pe(Y(e), "iterate", nt), Reflect.get(e, "size", e)
  );
}
function Cs(e) {
  e = Y(e);
  const t = Y(this);
  return fn(t).has.call(t, e) || (t.add(e), $e(t, "add", e, e)), this;
}
function vs(e, t) {
  t = Y(t);
  const n = Y(this),
    { has: s, get: r } = fn(n);
  let i = s.call(n, e);
  i || ((e = Y(e)), (i = s.call(n, e)));
  const o = r.call(n, e);
  return (
    n.set(e, t), i ? Ot(t, o) && $e(n, "set", e, t) : $e(n, "add", e, t), this
  );
}
function Es(e) {
  const t = Y(this),
    { has: n, get: s } = fn(t);
  let r = n.call(t, e);
  r || ((e = Y(e)), (r = n.call(t, e))), s && s.call(t, e);
  const i = t.delete(e);
  return r && $e(t, "delete", e, void 0), i;
}
function Ts() {
  const e = Y(this),
    t = e.size !== 0,
    n = e.clear();
  return t && $e(e, "clear", void 0, void 0), n;
}
function Dt(e, t) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      l = Y(o),
      c = t ? ts : e ? rs : Rt;
    return (
      !e && pe(l, "iterate", nt), o.forEach((a, d) => s.call(r, c(a), c(d), i))
    );
  };
}
function Kt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = Y(r),
      o = at(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      c = e === "keys" && o,
      a = r[e](...s),
      d = n ? ts : t ? rs : Rt;
    return (
      !t && pe(i, "iterate", c ? Ln : nt),
      {
        next() {
          const { value: p, done: y } = a.next();
          return y
            ? { value: p, done: y }
            : { value: l ? [d(p[0]), d(p[1])] : d(p), done: y };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Be(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function no() {
  const e = {
      get(i) {
        return Bt(this, i);
      },
      get size() {
        return jt(this);
      },
      has: Ut,
      add: Cs,
      set: vs,
      delete: Es,
      clear: Ts,
      forEach: Dt(!1, !1),
    },
    t = {
      get(i) {
        return Bt(this, i, !1, !0);
      },
      get size() {
        return jt(this);
      },
      has: Ut,
      add: Cs,
      set: vs,
      delete: Es,
      clear: Ts,
      forEach: Dt(!1, !0),
    },
    n = {
      get(i) {
        return Bt(this, i, !0);
      },
      get size() {
        return jt(this, !0);
      },
      has(i) {
        return Ut.call(this, i, !0);
      },
      add: Be("add"),
      set: Be("set"),
      delete: Be("delete"),
      clear: Be("clear"),
      forEach: Dt(!0, !1),
    },
    s = {
      get(i) {
        return Bt(this, i, !0, !0);
      },
      get size() {
        return jt(this, !0);
      },
      has(i) {
        return Ut.call(this, i, !0);
      },
      add: Be("add"),
      set: Be("set"),
      delete: Be("delete"),
      clear: Be("clear"),
      forEach: Dt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = Kt(i, !1, !1)),
        (n[i] = Kt(i, !0, !1)),
        (t[i] = Kt(i, !1, !0)),
        (s[i] = Kt(i, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [so, ro, io, oo] = no();
function ns(e, t) {
  const n = t ? (e ? oo : io) : e ? ro : so;
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(q(n, r) && r in s ? n : s, r, i);
}
const lo = { get: ns(!1, !1) },
  co = { get: ns(!1, !0) },
  fo = { get: ns(!0, !1) },
  vr = new WeakMap(),
  Er = new WeakMap(),
  Tr = new WeakMap(),
  ao = new WeakMap();
function uo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ho(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : uo(Pi(e));
}
function an(e) {
  return gt(e) ? e : ss(e, !1, Cr, lo, vr);
}
function po(e) {
  return ss(e, !1, to, co, Er);
}
function Ar(e) {
  return ss(e, !0, eo, fo, Tr);
}
function ss(e, t, n, s, r) {
  if (!ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const o = ho(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return r.set(e, l), l;
}
function ut(e) {
  return gt(e) ? ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gt(e) {
  return !!(e && e.__v_isReadonly);
}
function Qt(e) {
  return !!(e && e.__v_isShallow);
}
function Pr(e) {
  return ut(e) || gt(e);
}
function Y(e) {
  const t = e && e.__v_raw;
  return t ? Y(t) : e;
}
function Tt(e) {
  return Zt(e, "__v_skip", !0), e;
}
const Rt = (e) => (ee(e) ? an(e) : e),
  rs = (e) => (ee(e) ? Ar(e) : e);
function Ir(e) {
  ke && Ae && ((e = Y(e)), yr(e.dep || (e.dep = Qn())));
}
function Or(e, t) {
  e = Y(e);
  const n = e.dep;
  n && Nn(n);
}
function fe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Rr(e) {
  return Fr(e, !1);
}
function go(e) {
  return Fr(e, !0);
}
function Fr(e, t) {
  return fe(e) ? e : new mo(e, t);
}
class mo {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Y(t)),
      (this._value = n ? t : Rt(t));
  }
  get value() {
    return Ir(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Qt(t) || gt(t);
    (t = n ? t : Y(t)),
      Ot(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Rt(t)), Or(this));
  }
}
function _o(e) {
  return fe(e) ? e.value : e;
}
const bo = {
  get: (e, t, n) => _o(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Sr(e) {
  return ut(e) ? e : new Proxy(e, bo);
}
class yo {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new Gn(t, () => {
        this._dirty || ((this._dirty = !0), Or(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = Y(this);
    return (
      Ir(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function wo(e, t, n = !1) {
  let s, r;
  const i = j(e);
  return (
    i ? ((s = e), (r = Ie)) : ((s = e.get), (r = e.set)),
    new yo(s, r, i || !r, n)
  );
}
function We(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (i) {
    un(i, t, n);
  }
  return r;
}
function Ce(e, t, n, s) {
  if (j(e)) {
    const i = We(e, t, n, s);
    return (
      i &&
        ur(i) &&
        i.catch((o) => {
          un(o, t, n);
        }),
      i
    );
  }
  const r = [];
  for (let i = 0; i < e.length; i++) r.push(Ce(e[i], t, n, s));
  return r;
}
function un(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const o = t.proxy,
      l = n;
    for (; i; ) {
      const a = i.ec;
      if (a) {
        for (let d = 0; d < a.length; d++) if (a[d](e, o, l) === !1) return;
      }
      i = i.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      We(c, null, 10, [e, o, l]);
      return;
    }
  }
  xo(e, n, r, s);
}
function xo(e, t, n, s = !0) {
  console.error(e);
}
let Ft = !1,
  $n = !1;
const ce = [];
let Se = 0;
const dt = [];
let Ne = null,
  Qe = 0;
const Mr = Promise.resolve();
let is = null;
function Lr(e) {
  const t = is || Mr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Co(e) {
  let t = Se + 1,
    n = ce.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    St(ce[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function os(e) {
  (!ce.length || !ce.includes(e, Ft && e.allowRecurse ? Se + 1 : Se)) &&
    (e.id == null ? ce.push(e) : ce.splice(Co(e.id), 0, e), Nr());
}
function Nr() {
  !Ft && !$n && (($n = !0), (is = Mr.then($r)));
}
function vo(e) {
  const t = ce.indexOf(e);
  t > Se && ce.splice(t, 1);
}
function Eo(e) {
  L(e)
    ? dt.push(...e)
    : (!Ne || !Ne.includes(e, e.allowRecurse ? Qe + 1 : Qe)) && dt.push(e),
    Nr();
}
function As(e, t = Ft ? Se + 1 : 0) {
  for (; t < ce.length; t++) {
    const n = ce[t];
    n && n.pre && (ce.splice(t, 1), t--, n());
  }
}
function Gt(e) {
  if (dt.length) {
    const t = [...new Set(dt)];
    if (((dt.length = 0), Ne)) {
      Ne.push(...t);
      return;
    }
    for (Ne = t, Ne.sort((n, s) => St(n) - St(s)), Qe = 0; Qe < Ne.length; Qe++)
      Ne[Qe]();
    (Ne = null), (Qe = 0);
  }
}
const St = (e) => (e.id == null ? 1 / 0 : e.id),
  To = (e, t) => {
    const n = St(e) - St(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function $r(e) {
  ($n = !1), (Ft = !0), ce.sort(To);
  const t = Ie;
  try {
    for (Se = 0; Se < ce.length; Se++) {
      const n = ce[Se];
      n && n.active !== !1 && We(n, null, 14);
    }
  } finally {
    (Se = 0),
      (ce.length = 0),
      Gt(),
      (Ft = !1),
      (is = null),
      (ce.length || dt.length) && $r();
  }
}
function Ao(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || te;
  let r = n;
  const i = t.startsWith("update:"),
    o = i && t.slice(7);
  if (o && o in s) {
    const d = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: p, trim: y } = s[d] || te;
    y && (r = n.map((A) => (se(A) ? A.trim() : A))), p && (r = n.map(Ri));
  }
  let l,
    c = s[(l = zt(t))] || s[(l = zt(Me(t)))];
  !c && i && (c = s[(l = zt(rt(t)))]), c && Ce(c, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ce(a, e, 6, r);
  }
}
function Hr(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!j(e)) {
    const c = (a) => {
      const d = Hr(a, t, !0);
      d && ((l = !0), ie(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !i && !l
    ? (ee(e) && s.set(e, null), null)
    : (L(i) ? i.forEach((c) => (o[c] = null)) : ie(o, i),
      ee(e) && s.set(e, o),
      o);
}
function dn(e, t) {
  return !e || !Nt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      q(e, t[0].toLowerCase() + t.slice(1)) || q(e, rt(t)) || q(e, t));
}
let ae = null,
  hn = null;
function en(e) {
  const t = ae;
  return (ae = e), (hn = (e && e.type.__scopeId) || null), t;
}
function Oc(e) {
  hn = e;
}
function Rc() {
  hn = null;
}
function Po(e, t = ae, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Bs(-1);
    const i = en(t);
    let o;
    try {
      o = e(...r);
    } finally {
      en(i), s._d && Bs(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function vn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: i,
    propsOptions: [o],
    slots: l,
    attrs: c,
    emit: a,
    render: d,
    renderCache: p,
    data: y,
    setupState: A,
    ctx: N,
    inheritAttrs: R,
  } = e;
  let U, _;
  const x = en(e);
  try {
    if (n.shapeFlag & 4) {
      const P = r || s;
      (U = Te(d.call(P, P, p, i, A, y, N))), (_ = c);
    } else {
      const P = t;
      (U = Te(
        P.length > 1 ? P(i, { attrs: c, slots: l, emit: a }) : P(i, null),
      )),
        (_ = t.props ? c : Io(c));
    }
  } catch (P) {
    (It.length = 0), un(P, e, 1), (U = le(be));
  }
  let $ = U;
  if (_ && R !== !1) {
    const P = Object.keys(_),
      { shapeFlag: K } = $;
    P.length && K & 7 && (o && P.some(qn) && (_ = Oo(_, o)), ($ = qe($, _)));
  }
  return (
    n.dirs && (($ = qe($)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ($.transition = n.transition),
    (U = $),
    en(x),
    U
  );
}
const Io = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Nt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Oo = (e, t) => {
    const n = {};
    for (const s in e) (!qn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Ro(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    a = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Ps(s, o, a) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const y = d[p];
        if (o[y] !== s[y] && !dn(a, y)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? Ps(s, o, a)
        : !0
      : !!o;
  return !1;
}
function Ps(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !dn(n, i)) return !0;
  }
  return !1;
}
function Fo({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const So = (e) => e.__isSuspense;
function Br(e, t) {
  t && t.pendingBranch
    ? L(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Eo(e);
}
function Mo(e, t) {
  return pn(e, null, t);
}
function Fc(e, t) {
  return pn(e, null, { flush: "post" });
}
const kt = {};
function Yt(e, t, n) {
  return pn(e, t, n);
}
function pn(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: i, onTrigger: o } = te,
) {
  var l;
  const c = ji() === ((l = oe) == null ? void 0 : l.scope) ? oe : null;
  let a,
    d = !1,
    p = !1;
  if (
    (fe(e)
      ? ((a = () => e.value), (d = Qt(e)))
      : ut(e)
      ? ((a = () => e), (s = !0))
      : L(e)
      ? ((p = !0),
        (d = e.some((P) => ut(P) || Qt(P))),
        (a = () =>
          e.map((P) => {
            if (fe(P)) return P.value;
            if (ut(P)) return ct(P);
            if (j(P)) return We(P, c, 2);
          })))
      : j(e)
      ? t
        ? (a = () => We(e, c, 2))
        : (a = () => {
            if (!(c && c.isUnmounted)) return y && y(), Ce(e, c, 3, [A]);
          })
      : (a = Ie),
    t && s)
  ) {
    const P = a;
    a = () => ct(P());
  }
  let y,
    A = (P) => {
      y = x.onStop = () => {
        We(P, c, 4);
      };
    },
    N;
  if (Lt)
    if (
      ((A = Ie),
      t ? n && Ce(t, c, 3, [a(), p ? [] : void 0, A]) : a(),
      r === "sync")
    ) {
      const P = Pl();
      N = P.__watcherHandles || (P.__watcherHandles = []);
    } else return Ie;
  let R = p ? new Array(e.length).fill(kt) : kt;
  const U = () => {
    if (x.active)
      if (t) {
        const P = x.run();
        (s || d || (p ? P.some((K, J) => Ot(K, R[J])) : Ot(P, R))) &&
          (y && y(),
          Ce(t, c, 3, [P, R === kt ? void 0 : p && R[0] === kt ? [] : R, A]),
          (R = P));
      } else x.run();
  };
  U.allowRecurse = !!t;
  let _;
  r === "sync"
    ? (_ = U)
    : r === "post"
    ? (_ = () => de(U, c && c.suspense))
    : ((U.pre = !0), c && (U.id = c.uid), (_ = () => os(U)));
  const x = new Gn(a, _);
  t
    ? n
      ? U()
      : (R = x.run())
    : r === "post"
    ? de(x.run.bind(x), c && c.suspense)
    : x.run();
  const $ = () => {
    x.stop(), c && c.scope && zn(c.scope.effects, x);
  };
  return N && N.push($), $;
}
function Lo(e, t, n) {
  const s = this.proxy,
    r = se(e) ? (e.includes(".") ? Ur(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  j(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = oe;
  _t(this);
  const l = pn(r, i.bind(s), n);
  return o ? _t(o) : st(), l;
}
function Ur(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function ct(e, t) {
  if (!ee(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), fe(e))) ct(e.value, t);
  else if (L(e)) for (let n = 0; n < e.length; n++) ct(e[n], t);
  else if (ar(e) || at(e))
    e.forEach((n) => {
      ct(n, t);
    });
  else if (hr(e)) for (const n in e) ct(e[n], t);
  return e;
}
function Fe(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (bt(), Ce(c, n, 8, [e.el, l, e, t]), yt());
  }
}
function No() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    _n(() => {
      e.isMounted = !0;
    }),
    Vr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const ye = [Function, Array],
  jr = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ye,
    onEnter: ye,
    onAfterEnter: ye,
    onEnterCancelled: ye,
    onBeforeLeave: ye,
    onLeave: ye,
    onAfterLeave: ye,
    onLeaveCancelled: ye,
    onBeforeAppear: ye,
    onAppear: ye,
    onAfterAppear: ye,
    onAppearCancelled: ye,
  },
  $o = {
    name: "BaseTransition",
    props: jr,
    setup(e, { slots: t }) {
      const n = fi(),
        s = No();
      let r;
      return () => {
        const i = t.default && Kr(t.default(), !0);
        if (!i || !i.length) return;
        let o = i[0];
        if (i.length > 1) {
          for (const R of i)
            if (R.type !== be) {
              o = R;
              break;
            }
        }
        const l = Y(e),
          { mode: c } = l;
        if (s.isLeaving) return En(o);
        const a = Is(o);
        if (!a) return En(o);
        const d = Hn(a, l, s, n);
        Bn(a, d);
        const p = n.subTree,
          y = p && Is(p);
        let A = !1;
        const { getTransitionKey: N } = a.type;
        if (N) {
          const R = N();
          r === void 0 ? (r = R) : R !== r && ((r = R), (A = !0));
        }
        if (y && y.type !== be && (!Ge(a, y) || A)) {
          const R = Hn(y, l, s, n);
          if ((Bn(y, R), c === "out-in"))
            return (
              (s.isLeaving = !0),
              (R.afterLeave = () => {
                (s.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              En(o)
            );
          c === "in-out" &&
            a.type !== be &&
            (R.delayLeave = (U, _, x) => {
              const $ = Dr(s, y);
              ($[String(y.key)] = y),
                (U._leaveCb = () => {
                  _(), (U._leaveCb = void 0), delete d.delayedLeave;
                }),
                (d.delayedLeave = x);
            });
        }
        return o;
      };
    },
  },
  Ho = $o;
function Dr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function Hn(e, t, n, s) {
  const {
      appear: r,
      mode: i,
      persisted: o = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: a,
      onEnterCancelled: d,
      onBeforeLeave: p,
      onLeave: y,
      onAfterLeave: A,
      onLeaveCancelled: N,
      onBeforeAppear: R,
      onAppear: U,
      onAfterAppear: _,
      onAppearCancelled: x,
    } = t,
    $ = String(e.key),
    P = Dr(n, e),
    K = (T, D) => {
      T && Ce(T, s, 9, D);
    },
    J = (T, D) => {
      const B = D[1];
      K(T, D),
        L(T) ? T.every((z) => z.length <= 1) && B() : T.length <= 1 && B();
    },
    V = {
      mode: i,
      persisted: o,
      beforeEnter(T) {
        let D = l;
        if (!n.isMounted)
          if (r) D = R || l;
          else return;
        T._leaveCb && T._leaveCb(!0);
        const B = P[$];
        B && Ge(e, B) && B.el._leaveCb && B.el._leaveCb(), K(D, [T]);
      },
      enter(T) {
        let D = c,
          B = a,
          z = d;
        if (!n.isMounted)
          if (r) (D = U || c), (B = _ || a), (z = x || d);
          else return;
        let I = !1;
        const k = (T._enterCb = (F) => {
          I ||
            ((I = !0),
            F ? K(z, [T]) : K(B, [T]),
            V.delayedLeave && V.delayedLeave(),
            (T._enterCb = void 0));
        });
        D ? J(D, [T, k]) : k();
      },
      leave(T, D) {
        const B = String(e.key);
        if ((T._enterCb && T._enterCb(!0), n.isUnmounting)) return D();
        K(p, [T]);
        let z = !1;
        const I = (T._leaveCb = (k) => {
          z ||
            ((z = !0),
            D(),
            k ? K(N, [T]) : K(A, [T]),
            (T._leaveCb = void 0),
            P[B] === e && delete P[B]);
        });
        (P[B] = e), y ? J(y, [T, I]) : I();
      },
      clone(T) {
        return Hn(T, t, n, s);
      },
    };
  return V;
}
function En(e) {
  if (gn(e)) return (e = qe(e)), (e.children = null), e;
}
function Is(e) {
  return gn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Bn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Bn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Kr(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === he
      ? (o.patchFlag & 128 && r++, (s = s.concat(Kr(o.children, t, l))))
      : (t || o.type !== be) && s.push(l != null ? qe(o, { key: l }) : o);
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
  return s;
}
function kr(e, t) {
  return j(e) ? (() => ie({ name: e.name }, t, { setup: e }))() : e;
}
const ht = (e) => !!e.type.__asyncLoader,
  gn = (e) => e.type.__isKeepAlive;
function Bo(e, t) {
  Wr(e, "a", t);
}
function Uo(e, t) {
  Wr(e, "da", t);
}
function Wr(e, t, n = oe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((mn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      gn(r.parent.vnode) && jo(s, t, n, r), (r = r.parent);
  }
}
function jo(e, t, n, s) {
  const r = mn(t, e, s, !0);
  bn(() => {
    zn(s[t], r);
  }, n);
}
function mn(e, t, n = oe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          bt(), _t(n);
          const l = Ce(t, n, e, o);
          return st(), yt(), l;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const He =
    (e) =>
    (t, n = oe) =>
      (!Lt || e === "sp") && mn(e, (...s) => t(...s), n),
  Do = He("bm"),
  _n = He("m"),
  Ko = He("bu"),
  ko = He("u"),
  Vr = He("bum"),
  bn = He("um"),
  Wo = He("sp"),
  Vo = He("rtg"),
  qo = He("rtc");
function zo(e, t = oe) {
  mn("ec", e, t);
}
const ls = "components";
function Sc(e, t) {
  return zr(ls, e, !0, t) || e;
}
const qr = Symbol.for("v-ndc");
function Mc(e) {
  return se(e) ? zr(ls, e, !1) || e : e || qr;
}
function zr(e, t, n = !0, s = !1) {
  const r = ae || oe;
  if (r) {
    const i = r.type;
    if (e === ls) {
      const l = El(i, !1);
      if (l && (l === t || l === Me(t) || l === cn(Me(t)))) return i;
    }
    const o = Os(r[e] || i[e], t) || Os(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function Os(e, t) {
  return e && (e[t] || e[Me(t)] || e[cn(Me(t))]);
}
function Lc(e, t, n, s) {
  let r;
  const i = n && n[s];
  if (L(e) || se(e)) {
    r = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++)
      r[o] = t(e[o], o, void 0, i && i[o]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, i && i[o]);
  } else if (ee(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (o, l) => t(o, l, void 0, i && i[l]));
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let l = 0, c = o.length; l < c; l++) {
        const a = o[l];
        r[l] = t(e[a], a, l, i && i[l]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
function Nc(e, t, n = {}, s, r) {
  if (ae.isCE || (ae.parent && ht(ae.parent) && ae.parent.isCE))
    return t !== "default" && (n.name = t), le("slot", n, s && s());
  let i = e[t];
  i && i._c && (i._d = !1), si();
  const o = i && Yr(i(n)),
    l = ii(
      he,
      { key: n.key || (o && o.key) || `_${t}` },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    );
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    l
  );
}
function Yr(e) {
  return e.some((t) =>
    rn(t) ? !(t.type === be || (t.type === he && !Yr(t.children))) : !0,
  )
    ? e
    : null;
}
function $c(e, t) {
  const n = {};
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : zt(s)] = e[s];
  return n;
}
const Un = (e) => (e ? (ai(e) ? ds(e) || e.proxy : Un(e.parent)) : null),
  At = ie(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Un(e.parent),
    $root: (e) => Un(e.root),
    $emit: (e) => e.emit,
    $options: (e) => cs(e),
    $forceUpdate: (e) => e.f || (e.f = () => os(e.update)),
    $nextTick: (e) => e.n || (e.n = Lr.bind(e.proxy)),
    $watch: (e) => Lo.bind(e),
  }),
  Tn = (e, t) => e !== te && !e.__isScriptSetup && q(e, t),
  Yo = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c,
      } = e;
      let a;
      if (t[0] !== "$") {
        const A = o[t];
        if (A !== void 0)
          switch (A) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (Tn(s, t)) return (o[t] = 1), s[t];
          if (r !== te && q(r, t)) return (o[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && q(a, t)) return (o[t] = 3), i[t];
          if (n !== te && q(n, t)) return (o[t] = 4), n[t];
          jn && (o[t] = 0);
        }
      }
      const d = At[t];
      let p, y;
      if (d) return t === "$attrs" && pe(e, "get", t), d(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== te && q(n, t)) return (o[t] = 4), n[t];
      if (((y = c.config.globalProperties), q(y, t))) return y[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return Tn(r, t)
        ? ((r[t] = n), !0)
        : s !== te && q(s, t)
        ? ((s[t] = n), !0)
        : q(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o,
    ) {
      let l;
      return (
        !!n[o] ||
        (e !== te && q(e, o)) ||
        Tn(t, o) ||
        ((l = i[0]) && q(l, o)) ||
        q(s, o) ||
        q(At, o) ||
        q(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : q(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Hc() {
  return Jo().slots;
}
function Jo() {
  const e = fi();
  return e.setupContext || (e.setupContext = di(e));
}
function Rs(e) {
  return L(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let jn = !0;
function Xo(e) {
  const t = cs(e),
    n = e.proxy,
    s = e.ctx;
  (jn = !1), t.beforeCreate && Fs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: a,
    created: d,
    beforeMount: p,
    mounted: y,
    beforeUpdate: A,
    updated: N,
    activated: R,
    deactivated: U,
    beforeDestroy: _,
    beforeUnmount: x,
    destroyed: $,
    unmounted: P,
    render: K,
    renderTracked: J,
    renderTriggered: V,
    errorCaptured: T,
    serverPrefetch: D,
    expose: B,
    inheritAttrs: z,
    components: I,
    directives: k,
    filters: F,
  } = t;
  if ((a && Zo(a, s, null), o))
    for (const ne in o) {
      const Q = o[ne];
      j(Q) && (s[ne] = Q.bind(n));
    }
  if (r) {
    const ne = r.call(n, n);
    ee(ne) && (e.data = an(ne));
  }
  if (((jn = !0), i))
    for (const ne in i) {
      const Q = i[ne],
        ze = j(Q) ? Q.bind(n, n) : j(Q.get) ? Q.get.bind(n, n) : Ie,
        $t = !j(Q) && j(Q.set) ? Q.set.bind(n) : Ie,
        Ye = Ee({ get: ze, set: $t });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Ye.value,
        set: (Oe) => (Ye.value = Oe),
      });
    }
  if (l) for (const ne in l) Jr(l[ne], s, n, ne);
  if (c) {
    const ne = j(c) ? c.call(n) : c;
    Reflect.ownKeys(ne).forEach((Q) => {
      sl(Q, ne[Q]);
    });
  }
  d && Fs(d, e, "c");
  function X(ne, Q) {
    L(Q) ? Q.forEach((ze) => ne(ze.bind(n))) : Q && ne(Q.bind(n));
  }
  if (
    (X(Do, p),
    X(_n, y),
    X(Ko, A),
    X(ko, N),
    X(Bo, R),
    X(Uo, U),
    X(zo, T),
    X(qo, J),
    X(Vo, V),
    X(Vr, x),
    X(bn, P),
    X(Wo, D),
    L(B))
  )
    if (B.length) {
      const ne = e.exposed || (e.exposed = {});
      B.forEach((Q) => {
        Object.defineProperty(ne, Q, {
          get: () => n[Q],
          set: (ze) => (n[Q] = ze),
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === Ie && (e.render = K),
    z != null && (e.inheritAttrs = z),
    I && (e.components = I),
    k && (e.directives = k);
}
function Zo(e, t, n = Ie) {
  L(e) && (e = Dn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    ee(r)
      ? "default" in r
        ? (i = pt(r.from || s, r.default, !0))
        : (i = pt(r.from || s))
      : (i = pt(r)),
      fe(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i);
  }
}
function Fs(e, t, n) {
  Ce(L(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Jr(e, t, n, s) {
  const r = s.includes(".") ? Ur(n, s) : () => n[s];
  if (se(e)) {
    const i = t[e];
    j(i) && Yt(r, i);
  } else if (j(e)) Yt(r, e.bind(n));
  else if (ee(e))
    if (L(e)) e.forEach((i) => Jr(i, t, n, s));
    else {
      const i = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(i) && Yt(r, i, e);
    }
}
function cs(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
      ? (c = t)
      : ((c = {}), r.length && r.forEach((a) => tn(c, a, o, !0)), tn(c, t, o)),
    ee(t) && i.set(t, c),
    c
  );
}
function tn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && tn(e, i, n, !0), r && r.forEach((o) => tn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Qo[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Qo = {
  data: Ss,
  props: Ms,
  emits: Ms,
  methods: vt,
  computed: vt,
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  components: vt,
  directives: vt,
  watch: el,
  provide: Ss,
  inject: Go,
};
function Ss(e, t) {
  return t
    ? e
      ? function () {
          return ie(
            j(e) ? e.call(this, this) : e,
            j(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Go(e, t) {
  return vt(Dn(e), Dn(t));
}
function Dn(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function vt(e, t) {
  return e ? ie(Object.create(null), e, t) : t;
}
function Ms(e, t) {
  return e
    ? L(e) && L(t)
      ? [...new Set([...e, ...t])]
      : ie(Object.create(null), Rs(e), Rs(t ?? {}))
    : t;
}
function el(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(Object.create(null), e);
  for (const s in t) n[s] = ue(e[s], t[s]);
  return n;
}
function Xr() {
  return {
    app: null,
    config: {
      isNativeTag: Ei,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let tl = 0;
function nl(e, t) {
  return function (s, r = null) {
    j(s) || (s = ie({}, s)), r != null && !ee(r) && (r = null);
    const i = Xr(),
      o = new Set();
    let l = !1;
    const c = (i.app = {
      _uid: tl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Il,
      get config() {
        return i.config;
      },
      set config(a) {},
      use(a, ...d) {
        return (
          o.has(a) ||
            (a && j(a.install)
              ? (o.add(a), a.install(c, ...d))
              : j(a) && (o.add(a), a(c, ...d))),
          c
        );
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), c;
      },
      component(a, d) {
        return d ? ((i.components[a] = d), c) : i.components[a];
      },
      directive(a, d) {
        return d ? ((i.directives[a] = d), c) : i.directives[a];
      },
      mount(a, d, p) {
        if (!l) {
          const y = le(s, r);
          return (
            (y.appContext = i),
            d && t ? t(y, a) : e(y, a, p),
            (l = !0),
            (c._container = a),
            (a.__vue_app__ = c),
            ds(y.component) || y.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, d) {
        return (i.provides[a] = d), c;
      },
      runWithContext(a) {
        nn = c;
        try {
          return a();
        } finally {
          nn = null;
        }
      },
    });
    return c;
  };
}
let nn = null;
function sl(e, t) {
  if (oe) {
    let n = oe.provides;
    const s = oe.parent && oe.parent.provides;
    s === n && (n = oe.provides = Object.create(s)), (n[e] = t);
  }
}
function pt(e, t, n = !1) {
  const s = oe || ae;
  if (s || nn) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : nn._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && j(t) ? t.call(s && s.proxy) : t;
  }
}
function rl(e, t, n, s = !1) {
  const r = {},
    i = {};
  Zt(i, yn, 1), (e.propsDefaults = Object.create(null)), Zr(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : po(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function il(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = Y(r),
    [c] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let y = d[p];
        if (dn(e.emitsOptions, y)) continue;
        const A = t[y];
        if (c)
          if (q(i, y)) A !== i[y] && ((i[y] = A), (a = !0));
          else {
            const N = Me(y);
            r[N] = Kn(c, l, N, A, e, !1);
          }
        else A !== i[y] && ((i[y] = A), (a = !0));
      }
    }
  } else {
    Zr(e, t, r, i) && (a = !0);
    let d;
    for (const p in l)
      (!t || (!q(t, p) && ((d = rt(p)) === p || !q(t, d)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[d] !== void 0) &&
            (r[p] = Kn(c, l, p, void 0, e, !0))
          : delete r[p]);
    if (i !== l) for (const p in i) (!t || !q(t, p)) && (delete i[p], (a = !0));
  }
  a && $e(e, "set", "$attrs");
}
function Zr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let c in t) {
      if (Et(c)) continue;
      const a = t[c];
      let d;
      r && q(r, (d = Me(c)))
        ? !i || !i.includes(d)
          ? (n[d] = a)
          : ((l || (l = {}))[d] = a)
        : dn(e.emitsOptions, c) ||
          ((!(c in s) || a !== s[c]) && ((s[c] = a), (o = !0)));
    }
  if (i) {
    const c = Y(n),
      a = l || te;
    for (let d = 0; d < i.length; d++) {
      const p = i[d];
      n[p] = Kn(r, c, p, a[p], e, !q(a, p));
    }
  }
  return o;
}
function Kn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = q(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && j(c)) {
        const { propsDefaults: a } = r;
        n in a ? (s = a[n]) : (_t(r), (s = a[n] = c.call(null, t)), st());
      } else s = c;
    }
    o[0] &&
      (i && !l ? (s = !1) : o[1] && (s === "" || s === rt(n)) && (s = !0));
  }
  return s;
}
function Qr(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let c = !1;
  if (!j(e)) {
    const d = (p) => {
      c = !0;
      const [y, A] = Qr(p, t, !0);
      ie(o, y), A && l.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c) return ee(e) && s.set(e, ft), ft;
  if (L(i))
    for (let d = 0; d < i.length; d++) {
      const p = Me(i[d]);
      Ls(p) && (o[p] = te);
    }
  else if (i)
    for (const d in i) {
      const p = Me(d);
      if (Ls(p)) {
        const y = i[d],
          A = (o[p] = L(y) || j(y) ? { type: y } : ie({}, y));
        if (A) {
          const N = Hs(Boolean, A.type),
            R = Hs(String, A.type);
          (A[0] = N > -1),
            (A[1] = R < 0 || N < R),
            (N > -1 || q(A, "default")) && l.push(p);
        }
      }
    }
  const a = [o, l];
  return ee(e) && s.set(e, a), a;
}
function Ls(e) {
  return e[0] !== "$";
}
function Ns(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function $s(e, t) {
  return Ns(e) === Ns(t);
}
function Hs(e, t) {
  return L(t) ? t.findIndex((n) => $s(n, e)) : j(t) && $s(t, e) ? 0 : -1;
}
const Gr = (e) => e[0] === "_" || e === "$stable",
  fs = (e) => (L(e) ? e.map(Te) : [Te(e)]),
  ol = (e, t, n) => {
    if (t._n) return t;
    const s = Po((...r) => fs(t(...r)), n);
    return (s._c = !1), s;
  },
  ei = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Gr(r)) continue;
      const i = e[r];
      if (j(i)) t[r] = ol(r, i, s);
      else if (i != null) {
        const o = fs(i);
        t[r] = () => o;
      }
    }
  },
  ti = (e, t) => {
    const n = fs(t);
    e.slots.default = () => n;
  },
  ll = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = Y(t)), Zt(t, "_", n)) : ei(t, (e.slots = {}));
    } else (e.slots = {}), t && ti(e, t);
    Zt(e.slots, yn, 1);
  },
  cl = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = te;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : (ie(r, t), !n && l === 1 && delete r._)
        : ((i = !t.$stable), ei(t, r)),
        (o = t);
    } else t && (ti(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !Gr(l) && !(l in o) && delete r[l];
  };
function sn(e, t, n, s, r = !1) {
  if (L(e)) {
    e.forEach((y, A) => sn(y, t && (L(t) ? t[A] : t), n, s, r));
    return;
  }
  if (ht(s) && !r) return;
  const i = s.shapeFlag & 4 ? ds(s.component) || s.component.proxy : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    a = t && t.r,
    d = l.refs === te ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if (
    (a != null &&
      a !== c &&
      (se(a)
        ? ((d[a] = null), q(p, a) && (p[a] = null))
        : fe(a) && (a.value = null)),
    j(c))
  )
    We(c, l, 12, [o, d]);
  else {
    const y = se(c),
      A = fe(c);
    if (y || A) {
      const N = () => {
        if (e.f) {
          const R = y ? (q(p, c) ? p[c] : d[c]) : c.value;
          r
            ? L(R) && zn(R, i)
            : L(R)
            ? R.includes(i) || R.push(i)
            : y
            ? ((d[c] = [i]), q(p, c) && (p[c] = d[c]))
            : ((c.value = [i]), e.k && (d[e.k] = c.value));
        } else
          y
            ? ((d[c] = o), q(p, c) && (p[c] = o))
            : A && ((c.value = o), e.k && (d[e.k] = o));
      };
      o ? ((N.id = -1), de(N, n)) : N();
    }
  }
}
let Ue = !1;
const Wt = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  Vt = (e) => e.nodeType === 8;
function fl(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: a,
      },
    } = e,
    d = (_, x) => {
      if (!x.hasChildNodes()) {
        n(null, _, x), Gt(), (x._vnode = _);
        return;
      }
      (Ue = !1),
        p(x.firstChild, _, null, null, null),
        Gt(),
        (x._vnode = _),
        Ue && console.error("Hydration completed but contains mismatches.");
    },
    p = (_, x, $, P, K, J = !1) => {
      const V = Vt(_) && _.data === "[",
        T = () => R(_, x, $, P, K, V),
        { type: D, ref: B, shapeFlag: z, patchFlag: I } = x;
      let k = _.nodeType;
      (x.el = _), I === -2 && ((J = !1), (x.dynamicChildren = null));
      let F = null;
      switch (D) {
        case mt:
          k !== 3
            ? x.children === ""
              ? (c((x.el = r("")), o(_), _), (F = _))
              : (F = T())
            : (_.data !== x.children && ((Ue = !0), (_.data = x.children)),
              (F = i(_)));
          break;
        case be:
          k !== 8 || V ? (F = T()) : (F = i(_));
          break;
        case Pt:
          if ((V && ((_ = i(_)), (k = _.nodeType)), k === 1 || k === 3)) {
            F = _;
            const ge = !x.children.length;
            for (let X = 0; X < x.staticCount; X++)
              ge && (x.children += F.nodeType === 1 ? F.outerHTML : F.data),
                X === x.staticCount - 1 && (x.anchor = F),
                (F = i(F));
            return V ? i(F) : F;
          } else T();
          break;
        case he:
          V ? (F = N(_, x, $, P, K, J)) : (F = T());
          break;
        default:
          if (z & 1)
            k !== 1 || x.type.toLowerCase() !== _.tagName.toLowerCase()
              ? (F = T())
              : (F = y(_, x, $, P, K, J));
          else if (z & 6) {
            x.slotScopeIds = K;
            const ge = o(_);
            if (
              (t(x, ge, null, $, P, Wt(ge), J),
              (F = V ? U(_) : i(_)),
              F && Vt(F) && F.data === "teleport end" && (F = i(F)),
              ht(x))
            ) {
              let X;
              V
                ? ((X = le(he)),
                  (X.anchor = F ? F.previousSibling : ge.lastChild))
                : (X = _.nodeType === 3 ? ci("") : le("div")),
                (X.el = _),
                (x.component.subTree = X);
            }
          } else
            z & 64
              ? k !== 8
                ? (F = T())
                : (F = x.type.hydrate(_, x, $, P, K, J, e, A))
              : z & 128 &&
                (F = x.type.hydrate(_, x, $, P, Wt(o(_)), K, J, e, p));
      }
      return B != null && sn(B, null, P, x), F;
    },
    y = (_, x, $, P, K, J) => {
      J = J || !!x.dynamicChildren;
      const { type: V, props: T, patchFlag: D, shapeFlag: B, dirs: z } = x,
        I = (V === "input" && z) || V === "option";
      if (I || D !== -1) {
        if ((z && Fe(x, null, $, "created"), T))
          if (I || !J || D & 48)
            for (const F in T)
              ((I && F.endsWith("value")) || (Nt(F) && !Et(F))) &&
                s(_, F, null, T[F], !1, void 0, $);
          else T.onClick && s(_, "onClick", null, T.onClick, !1, void 0, $);
        let k;
        if (
          ((k = T && T.onVnodeBeforeMount) && we(k, $, x),
          z && Fe(x, null, $, "beforeMount"),
          ((k = T && T.onVnodeMounted) || z) &&
            Br(() => {
              k && we(k, $, x), z && Fe(x, null, $, "mounted");
            }, P),
          B & 16 && !(T && (T.innerHTML || T.textContent)))
        ) {
          let F = A(_.firstChild, x, _, $, P, K, J);
          for (; F; ) {
            Ue = !0;
            const ge = F;
            (F = F.nextSibling), l(ge);
          }
        } else
          B & 8 &&
            _.textContent !== x.children &&
            ((Ue = !0), (_.textContent = x.children));
      }
      return _.nextSibling;
    },
    A = (_, x, $, P, K, J, V) => {
      V = V || !!x.dynamicChildren;
      const T = x.children,
        D = T.length;
      for (let B = 0; B < D; B++) {
        const z = V ? T[B] : (T[B] = Te(T[B]));
        if (_) _ = p(_, z, P, K, J, V);
        else {
          if (z.type === mt && !z.children) continue;
          (Ue = !0), n(null, z, $, null, P, K, Wt($), J);
        }
      }
      return _;
    },
    N = (_, x, $, P, K, J) => {
      const { slotScopeIds: V } = x;
      V && (K = K ? K.concat(V) : V);
      const T = o(_),
        D = A(i(_), x, T, $, P, K, J);
      return D && Vt(D) && D.data === "]"
        ? i((x.anchor = D))
        : ((Ue = !0), c((x.anchor = a("]")), T, D), D);
    },
    R = (_, x, $, P, K, J) => {
      if (((Ue = !0), (x.el = null), J)) {
        const D = U(_);
        for (;;) {
          const B = i(_);
          if (B && B !== D) l(B);
          else break;
        }
      }
      const V = i(_),
        T = o(_);
      return l(_), n(null, x, T, V, $, P, Wt(T), K), V;
    },
    U = (_) => {
      let x = 0;
      for (; _; )
        if (
          ((_ = i(_)), _ && Vt(_) && (_.data === "[" && x++, _.data === "]"))
        ) {
          if (x === 0) return i(_);
          x--;
        }
      return _;
    };
  return [d, p];
}
const de = Br;
function al(e) {
  return ul(e, fl);
}
function ul(e, t) {
  const n = Fn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: a,
      setElementText: d,
      parentNode: p,
      nextSibling: y,
      setScopeId: A = Ie,
      insertStaticContent: N,
    } = e,
    R = (
      f,
      u,
      h,
      m = null,
      g = null,
      C = null,
      E = !1,
      w = null,
      v = !!u.dynamicChildren,
    ) => {
      if (f === u) return;
      f && !Ge(f, u) && ((m = Ht(f)), Oe(f, g, C, !0), (f = null)),
        u.patchFlag === -2 && ((v = !1), (u.dynamicChildren = null));
      const { type: b, ref: S, shapeFlag: O } = u;
      switch (b) {
        case mt:
          U(f, u, h, m);
          break;
        case be:
          _(f, u, h, m);
          break;
        case Pt:
          f == null && x(u, h, m, E);
          break;
        case he:
          I(f, u, h, m, g, C, E, w, v);
          break;
        default:
          O & 1
            ? K(f, u, h, m, g, C, E, w, v)
            : O & 6
            ? k(f, u, h, m, g, C, E, w, v)
            : (O & 64 || O & 128) && b.process(f, u, h, m, g, C, E, w, v, it);
      }
      S != null && g && sn(S, f && f.ref, C, u || f, !u);
    },
    U = (f, u, h, m) => {
      if (f == null) s((u.el = l(u.children)), h, m);
      else {
        const g = (u.el = f.el);
        u.children !== f.children && a(g, u.children);
      }
    },
    _ = (f, u, h, m) => {
      f == null ? s((u.el = c(u.children || "")), h, m) : (u.el = f.el);
    },
    x = (f, u, h, m) => {
      [f.el, f.anchor] = N(f.children, u, h, m, f.el, f.anchor);
    },
    $ = ({ el: f, anchor: u }, h, m) => {
      let g;
      for (; f && f !== u; ) (g = y(f)), s(f, h, m), (f = g);
      s(u, h, m);
    },
    P = ({ el: f, anchor: u }) => {
      let h;
      for (; f && f !== u; ) (h = y(f)), r(f), (f = h);
      r(u);
    },
    K = (f, u, h, m, g, C, E, w, v) => {
      (E = E || u.type === "svg"),
        f == null ? J(u, h, m, g, C, E, w, v) : D(f, u, g, C, E, w, v);
    },
    J = (f, u, h, m, g, C, E, w) => {
      let v, b;
      const { type: S, props: O, shapeFlag: M, transition: H, dirs: W } = f;
      if (
        ((v = f.el = o(f.type, C, O && O.is, O)),
        M & 8
          ? d(v, f.children)
          : M & 16 &&
            T(f.children, v, null, m, g, C && S !== "foreignObject", E, w),
        W && Fe(f, null, m, "created"),
        V(v, f, f.scopeId, E, m),
        O)
      ) {
        for (const Z in O)
          Z !== "value" &&
            !Et(Z) &&
            i(v, Z, null, O[Z], C, f.children, m, g, Le);
        "value" in O && i(v, "value", null, O.value),
          (b = O.onVnodeBeforeMount) && we(b, m, f);
      }
      W && Fe(f, null, m, "beforeMount");
      const G = (!g || (g && !g.pendingBranch)) && H && !H.persisted;
      G && H.beforeEnter(v),
        s(v, u, h),
        ((b = O && O.onVnodeMounted) || G || W) &&
          de(() => {
            b && we(b, m, f), G && H.enter(v), W && Fe(f, null, m, "mounted");
          }, g);
    },
    V = (f, u, h, m, g) => {
      if ((h && A(f, h), m)) for (let C = 0; C < m.length; C++) A(f, m[C]);
      if (g) {
        let C = g.subTree;
        if (u === C) {
          const E = g.vnode;
          V(f, E, E.scopeId, E.slotScopeIds, g.parent);
        }
      }
    },
    T = (f, u, h, m, g, C, E, w, v = 0) => {
      for (let b = v; b < f.length; b++) {
        const S = (f[b] = w ? Ke(f[b]) : Te(f[b]));
        R(null, S, u, h, m, g, C, E, w);
      }
    },
    D = (f, u, h, m, g, C, E) => {
      const w = (u.el = f.el);
      let { patchFlag: v, dynamicChildren: b, dirs: S } = u;
      v |= f.patchFlag & 16;
      const O = f.props || te,
        M = u.props || te;
      let H;
      h && Je(h, !1),
        (H = M.onVnodeBeforeUpdate) && we(H, h, u, f),
        S && Fe(u, f, h, "beforeUpdate"),
        h && Je(h, !0);
      const W = g && u.type !== "foreignObject";
      if (
        (b
          ? B(f.dynamicChildren, b, w, h, m, W, C)
          : E || Q(f, u, w, null, h, m, W, C, !1),
        v > 0)
      ) {
        if (v & 16) z(w, u, O, M, h, m, g);
        else if (
          (v & 2 && O.class !== M.class && i(w, "class", null, M.class, g),
          v & 4 && i(w, "style", O.style, M.style, g),
          v & 8)
        ) {
          const G = u.dynamicProps;
          for (let Z = 0; Z < G.length; Z++) {
            const re = G[Z],
              ve = O[re],
              ot = M[re];
            (ot !== ve || re === "value") &&
              i(w, re, ve, ot, g, f.children, h, m, Le);
          }
        }
        v & 1 && f.children !== u.children && d(w, u.children);
      } else !E && b == null && z(w, u, O, M, h, m, g);
      ((H = M.onVnodeUpdated) || S) &&
        de(() => {
          H && we(H, h, u, f), S && Fe(u, f, h, "updated");
        }, m);
    },
    B = (f, u, h, m, g, C, E) => {
      for (let w = 0; w < u.length; w++) {
        const v = f[w],
          b = u[w],
          S =
            v.el && (v.type === he || !Ge(v, b) || v.shapeFlag & 70)
              ? p(v.el)
              : h;
        R(v, b, S, null, m, g, C, E, !0);
      }
    },
    z = (f, u, h, m, g, C, E) => {
      if (h !== m) {
        if (h !== te)
          for (const w in h)
            !Et(w) && !(w in m) && i(f, w, h[w], null, E, u.children, g, C, Le);
        for (const w in m) {
          if (Et(w)) continue;
          const v = m[w],
            b = h[w];
          v !== b && w !== "value" && i(f, w, b, v, E, u.children, g, C, Le);
        }
        "value" in m && i(f, "value", h.value, m.value);
      }
    },
    I = (f, u, h, m, g, C, E, w, v) => {
      const b = (u.el = f ? f.el : l("")),
        S = (u.anchor = f ? f.anchor : l(""));
      let { patchFlag: O, dynamicChildren: M, slotScopeIds: H } = u;
      H && (w = w ? w.concat(H) : H),
        f == null
          ? (s(b, h, m), s(S, h, m), T(u.children, h, S, g, C, E, w, v))
          : O > 0 && O & 64 && M && f.dynamicChildren
          ? (B(f.dynamicChildren, M, h, g, C, E, w),
            (u.key != null || (g && u === g.subTree)) && ni(f, u, !0))
          : Q(f, u, h, S, g, C, E, w, v);
    },
    k = (f, u, h, m, g, C, E, w, v) => {
      (u.slotScopeIds = w),
        f == null
          ? u.shapeFlag & 512
            ? g.ctx.activate(u, h, m, E, v)
            : F(u, h, m, g, C, E, v)
          : ge(f, u, v);
    },
    F = (f, u, h, m, g, C, E) => {
      const w = (f.component = wl(f, m, g));
      if ((gn(f) && (w.ctx.renderer = it), xl(w), w.asyncDep)) {
        if ((g && g.registerDep(w, X), !f.el)) {
          const v = (w.subTree = le(be));
          _(null, v, u, h);
        }
        return;
      }
      X(w, f, u, h, g, C, E);
    },
    ge = (f, u, h) => {
      const m = (u.component = f.component);
      if (Ro(f, u, h))
        if (m.asyncDep && !m.asyncResolved) {
          ne(m, u, h);
          return;
        } else (m.next = u), vo(m.update), m.update();
      else (u.el = f.el), (m.vnode = u);
    },
    X = (f, u, h, m, g, C, E) => {
      const w = () => {
          if (f.isMounted) {
            let { next: S, bu: O, u: M, parent: H, vnode: W } = f,
              G = S,
              Z;
            Je(f, !1),
              S ? ((S.el = W.el), ne(f, S, E)) : (S = W),
              O && Cn(O),
              (Z = S.props && S.props.onVnodeBeforeUpdate) && we(Z, H, S, W),
              Je(f, !0);
            const re = vn(f),
              ve = f.subTree;
            (f.subTree = re),
              R(ve, re, p(ve.el), Ht(ve), f, g, C),
              (S.el = re.el),
              G === null && Fo(f, re.el),
              M && de(M, g),
              (Z = S.props && S.props.onVnodeUpdated) &&
                de(() => we(Z, H, S, W), g);
          } else {
            let S;
            const { el: O, props: M } = u,
              { bm: H, m: W, parent: G } = f,
              Z = ht(u);
            if (
              (Je(f, !1),
              H && Cn(H),
              !Z && (S = M && M.onVnodeBeforeMount) && we(S, G, u),
              Je(f, !0),
              O && xn)
            ) {
              const re = () => {
                (f.subTree = vn(f)), xn(O, f.subTree, f, g, null);
              };
              Z
                ? u.type.__asyncLoader().then(() => !f.isUnmounted && re())
                : re();
            } else {
              const re = (f.subTree = vn(f));
              R(null, re, h, m, f, g, C), (u.el = re.el);
            }
            if ((W && de(W, g), !Z && (S = M && M.onVnodeMounted))) {
              const re = u;
              de(() => we(S, G, re), g);
            }
            (u.shapeFlag & 256 ||
              (G && ht(G.vnode) && G.vnode.shapeFlag & 256)) &&
              f.a &&
              de(f.a, g),
              (f.isMounted = !0),
              (u = h = m = null);
          }
        },
        v = (f.effect = new Gn(w, () => os(b), f.scope)),
        b = (f.update = () => v.run());
      (b.id = f.uid), Je(f, !0), b();
    },
    ne = (f, u, h) => {
      u.component = f;
      const m = f.vnode.props;
      (f.vnode = u),
        (f.next = null),
        il(f, u.props, m, h),
        cl(f, u.children, h),
        bt(),
        As(),
        yt();
    },
    Q = (f, u, h, m, g, C, E, w, v = !1) => {
      const b = f && f.children,
        S = f ? f.shapeFlag : 0,
        O = u.children,
        { patchFlag: M, shapeFlag: H } = u;
      if (M > 0) {
        if (M & 128) {
          $t(b, O, h, m, g, C, E, w, v);
          return;
        } else if (M & 256) {
          ze(b, O, h, m, g, C, E, w, v);
          return;
        }
      }
      H & 8
        ? (S & 16 && Le(b, g, C), O !== b && d(h, O))
        : S & 16
        ? H & 16
          ? $t(b, O, h, m, g, C, E, w, v)
          : Le(b, g, C, !0)
        : (S & 8 && d(h, ""), H & 16 && T(O, h, m, g, C, E, w, v));
    },
    ze = (f, u, h, m, g, C, E, w, v) => {
      (f = f || ft), (u = u || ft);
      const b = f.length,
        S = u.length,
        O = Math.min(b, S);
      let M;
      for (M = 0; M < O; M++) {
        const H = (u[M] = v ? Ke(u[M]) : Te(u[M]));
        R(f[M], H, h, null, g, C, E, w, v);
      }
      b > S ? Le(f, g, C, !0, !1, O) : T(u, h, m, g, C, E, w, v, O);
    },
    $t = (f, u, h, m, g, C, E, w, v) => {
      let b = 0;
      const S = u.length;
      let O = f.length - 1,
        M = S - 1;
      for (; b <= O && b <= M; ) {
        const H = f[b],
          W = (u[b] = v ? Ke(u[b]) : Te(u[b]));
        if (Ge(H, W)) R(H, W, h, null, g, C, E, w, v);
        else break;
        b++;
      }
      for (; b <= O && b <= M; ) {
        const H = f[O],
          W = (u[M] = v ? Ke(u[M]) : Te(u[M]));
        if (Ge(H, W)) R(H, W, h, null, g, C, E, w, v);
        else break;
        O--, M--;
      }
      if (b > O) {
        if (b <= M) {
          const H = M + 1,
            W = H < S ? u[H].el : m;
          for (; b <= M; )
            R(null, (u[b] = v ? Ke(u[b]) : Te(u[b])), h, W, g, C, E, w, v), b++;
        }
      } else if (b > M) for (; b <= O; ) Oe(f[b], g, C, !0), b++;
      else {
        const H = b,
          W = b,
          G = new Map();
        for (b = W; b <= M; b++) {
          const me = (u[b] = v ? Ke(u[b]) : Te(u[b]));
          me.key != null && G.set(me.key, b);
        }
        let Z,
          re = 0;
        const ve = M - W + 1;
        let ot = !1,
          gs = 0;
        const wt = new Array(ve);
        for (b = 0; b < ve; b++) wt[b] = 0;
        for (b = H; b <= O; b++) {
          const me = f[b];
          if (re >= ve) {
            Oe(me, g, C, !0);
            continue;
          }
          let Re;
          if (me.key != null) Re = G.get(me.key);
          else
            for (Z = W; Z <= M; Z++)
              if (wt[Z - W] === 0 && Ge(me, u[Z])) {
                Re = Z;
                break;
              }
          Re === void 0
            ? Oe(me, g, C, !0)
            : ((wt[Re - W] = b + 1),
              Re >= gs ? (gs = Re) : (ot = !0),
              R(me, u[Re], h, null, g, C, E, w, v),
              re++);
        }
        const ms = ot ? dl(wt) : ft;
        for (Z = ms.length - 1, b = ve - 1; b >= 0; b--) {
          const me = W + b,
            Re = u[me],
            _s = me + 1 < S ? u[me + 1].el : m;
          wt[b] === 0
            ? R(null, Re, h, _s, g, C, E, w, v)
            : ot && (Z < 0 || b !== ms[Z] ? Ye(Re, h, _s, 2) : Z--);
        }
      }
    },
    Ye = (f, u, h, m, g = null) => {
      const { el: C, type: E, transition: w, children: v, shapeFlag: b } = f;
      if (b & 6) {
        Ye(f.component.subTree, u, h, m);
        return;
      }
      if (b & 128) {
        f.suspense.move(u, h, m);
        return;
      }
      if (b & 64) {
        E.move(f, u, h, it);
        return;
      }
      if (E === he) {
        s(C, u, h);
        for (let O = 0; O < v.length; O++) Ye(v[O], u, h, m);
        s(f.anchor, u, h);
        return;
      }
      if (E === Pt) {
        $(f, u, h);
        return;
      }
      if (m !== 2 && b & 1 && w)
        if (m === 0) w.beforeEnter(C), s(C, u, h), de(() => w.enter(C), g);
        else {
          const { leave: O, delayLeave: M, afterLeave: H } = w,
            W = () => s(C, u, h),
            G = () => {
              O(C, () => {
                W(), H && H();
              });
            };
          M ? M(C, W, G) : G();
        }
      else s(C, u, h);
    },
    Oe = (f, u, h, m = !1, g = !1) => {
      const {
        type: C,
        props: E,
        ref: w,
        children: v,
        dynamicChildren: b,
        shapeFlag: S,
        patchFlag: O,
        dirs: M,
      } = f;
      if ((w != null && sn(w, null, h, f, !0), S & 256)) {
        u.ctx.deactivate(f);
        return;
      }
      const H = S & 1 && M,
        W = !ht(f);
      let G;
      if ((W && (G = E && E.onVnodeBeforeUnmount) && we(G, u, f), S & 6))
        vi(f.component, h, m);
      else {
        if (S & 128) {
          f.suspense.unmount(h, m);
          return;
        }
        H && Fe(f, null, u, "beforeUnmount"),
          S & 64
            ? f.type.remove(f, u, h, g, it, m)
            : b && (C !== he || (O > 0 && O & 64))
            ? Le(b, u, h, !1, !0)
            : ((C === he && O & 384) || (!g && S & 16)) && Le(v, u, h),
          m && hs(f);
      }
      ((W && (G = E && E.onVnodeUnmounted)) || H) &&
        de(() => {
          G && we(G, u, f), H && Fe(f, null, u, "unmounted");
        }, h);
    },
    hs = (f) => {
      const { type: u, el: h, anchor: m, transition: g } = f;
      if (u === he) {
        Ci(h, m);
        return;
      }
      if (u === Pt) {
        P(f);
        return;
      }
      const C = () => {
        r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (f.shapeFlag & 1 && g && !g.persisted) {
        const { leave: E, delayLeave: w } = g,
          v = () => E(h, C);
        w ? w(f.el, C, v) : v();
      } else C();
    },
    Ci = (f, u) => {
      let h;
      for (; f !== u; ) (h = y(f)), r(f), (f = h);
      r(u);
    },
    vi = (f, u, h) => {
      const { bum: m, scope: g, update: C, subTree: E, um: w } = f;
      m && Cn(m),
        g.stop(),
        C && ((C.active = !1), Oe(E, f, u, h)),
        w && de(w, u),
        de(() => {
          f.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    Le = (f, u, h, m = !1, g = !1, C = 0) => {
      for (let E = C; E < f.length; E++) Oe(f[E], u, h, m, g);
    },
    Ht = (f) =>
      f.shapeFlag & 6
        ? Ht(f.component.subTree)
        : f.shapeFlag & 128
        ? f.suspense.next()
        : y(f.anchor || f.el),
    ps = (f, u, h) => {
      f == null
        ? u._vnode && Oe(u._vnode, null, null, !0)
        : R(u._vnode || null, f, u, null, null, null, h),
        As(),
        Gt(),
        (u._vnode = f);
    },
    it = {
      p: R,
      um: Oe,
      m: Ye,
      r: hs,
      mt: F,
      mc: T,
      pc: Q,
      pbc: B,
      n: Ht,
      o: e,
    };
  let wn, xn;
  return (
    t && ([wn, xn] = t(it)), { render: ps, hydrate: wn, createApp: nl(ps, wn) }
  );
}
function Je({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ni(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (L(s) && L(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Ke(r[i])), (l.el = o.el)),
        n || ni(o, l)),
        l.type === mt && (l.el = o.el);
    }
}
function dl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < a ? (i = l + 1) : (o = l);
      a < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
const hl = (e) => e.__isTeleport,
  he = Symbol.for("v-fgt"),
  mt = Symbol.for("v-txt"),
  be = Symbol.for("v-cmt"),
  Pt = Symbol.for("v-stc"),
  It = [];
let Pe = null;
function si(e = !1) {
  It.push((Pe = e ? null : []));
}
function pl() {
  It.pop(), (Pe = It[It.length - 1] || null);
}
let Mt = 1;
function Bs(e) {
  Mt += e;
}
function ri(e) {
  return (
    (e.dynamicChildren = Mt > 0 ? Pe || ft : null),
    pl(),
    Mt > 0 && Pe && Pe.push(e),
    e
  );
}
function Bc(e, t, n, s, r, i) {
  return ri(li(e, t, n, s, r, i, !0));
}
function ii(e, t, n, s, r) {
  return ri(le(e, t, n, s, r, !0));
}
function rn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ge(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yn = "__vInternal",
  oi = ({ key: e }) => e ?? null,
  Jt = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? se(e) || fe(e) || j(e)
        ? { i: ae, r: e, k: t, f: !!n }
        : e
      : null
  );
function li(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === he ? 0 : 1,
  o = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && oi(t),
    ref: t && Jt(t),
    scopeId: hn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ae,
  };
  return (
    l
      ? (as(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= se(n) ? 8 : 16),
    Mt > 0 &&
      !o &&
      Pe &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Pe.push(c),
    c
  );
}
const le = gl;
function gl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === qr) && (e = be), rn(e))) {
    const l = qe(e, t, !0);
    return (
      n && as(l, n),
      Mt > 0 &&
        !i &&
        Pe &&
        (l.shapeFlag & 6 ? (Pe[Pe.indexOf(e)] = l) : Pe.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Tl(e) && (e = e.__vccOpts), t)) {
    t = ml(t);
    let { class: l, style: c } = t;
    l && !se(l) && (t.class = Zn(l)),
      ee(c) && (Pr(c) && !L(c) && (c = ie({}, c)), (t.style = Xn(c)));
  }
  const o = se(e) ? 1 : So(e) ? 128 : hl(e) ? 64 : ee(e) ? 4 : j(e) ? 2 : 0;
  return li(e, t, n, s, r, o, i, !0);
}
function ml(e) {
  return e ? (Pr(e) || yn in e ? ie({}, e) : e) : null;
}
function qe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = e,
    l = t ? _l(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && oi(l),
    ref:
      t && t.ref ? (n && r ? (L(r) ? r.concat(Jt(t)) : [r, Jt(t)]) : Jt(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== he ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && qe(e.ssContent),
    ssFallback: e.ssFallback && qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function ci(e = " ", t = 0) {
  return le(mt, null, e, t);
}
function Uc(e, t) {
  const n = le(Pt, null, e);
  return (n.staticCount = t), n;
}
function jc(e = "", t = !1) {
  return t ? (si(), ii(be, null, e)) : le(be, null, e);
}
function Te(e) {
  return e == null || typeof e == "boolean"
    ? le(be)
    : L(e)
    ? le(he, null, e.slice())
    : typeof e == "object"
    ? Ke(e)
    : le(mt, null, String(e));
}
function Ke(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : qe(e);
}
function as(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (L(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), as(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(yn in t)
        ? (t._ctx = ae)
        : r === 3 &&
          ae &&
          (ae.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    j(t)
      ? ((t = { default: t, _ctx: ae }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [ci(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function _l(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Zn([t.class, s.class]));
      else if (r === "style") t.style = Xn([t.style, s.style]);
      else if (Nt(r)) {
        const i = t[r],
          o = s[r];
        o &&
          i !== o &&
          !(L(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function we(e, t, n, s = null) {
  Ce(e, t, 7, [n, s]);
}
const bl = Xr();
let yl = 0;
function wl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || bl,
    i = {
      uid: yl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Bi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Qr(s, r),
      emitsOptions: Hr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: te,
      inheritAttrs: s.inheritAttrs,
      ctx: te,
      data: te,
      props: te,
      attrs: te,
      slots: te,
      refs: te,
      setupState: te,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Ao.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let oe = null;
const fi = () => oe || ae;
let us,
  lt,
  Us = "__VUE_INSTANCE_SETTERS__";
(lt = Fn()[Us]) || (lt = Fn()[Us] = []),
  lt.push((e) => (oe = e)),
  (us = (e) => {
    lt.length > 1 ? lt.forEach((t) => t(e)) : lt[0](e);
  });
const _t = (e) => {
    us(e), e.scope.on();
  },
  st = () => {
    oe && oe.scope.off(), us(null);
  };
function ai(e) {
  return e.vnode.shapeFlag & 4;
}
let Lt = !1;
function xl(e, t = !1) {
  Lt = t;
  const { props: n, children: s } = e.vnode,
    r = ai(e);
  rl(e, n, r, t), ll(e, s);
  const i = r ? Cl(e, t) : void 0;
  return (Lt = !1), i;
}
function Cl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Tt(new Proxy(e.ctx, Yo)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? di(e) : null);
    _t(e), bt();
    const i = We(s, e, 0, [e.props, r]);
    if ((yt(), st(), ur(i))) {
      if ((i.then(st, st), t))
        return i
          .then((o) => {
            js(e, o, t);
          })
          .catch((o) => {
            un(o, e, 0);
          });
      e.asyncDep = i;
    } else js(e, i, t);
  } else ui(e, t);
}
function js(e, t, n) {
  j(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ee(t) && (e.setupState = Sr(t)),
    ui(e, n);
}
let Ds;
function ui(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ds && !s.render) {
      const r = s.template || cs(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          a = ie(ie({ isCustomElement: i, delimiters: l }, o), c);
        s.render = Ds(r, a);
      }
    }
    e.render = s.render || Ie;
  }
  _t(e), bt(), Xo(e), yt(), st();
}
function vl(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return pe(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function di(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return vl(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ds(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Sr(Tt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in At) return At[n](e);
        },
        has(t, n) {
          return n in t || n in At;
        },
      }))
    );
}
function El(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Tl(e) {
  return j(e) && "__vccOpts" in e;
}
const Ee = (e, t) => wo(e, t, Lt);
function kn(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ee(t) && !L(t)
      ? rn(t)
        ? le(e, null, [t])
        : le(e, t)
      : le(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && rn(n) && (n = [n]),
      le(e, t, n));
}
const Al = Symbol.for("v-scx"),
  Pl = () => pt(Al),
  Il = "3.3.4",
  Ol = "http://www.w3.org/2000/svg",
  et = typeof document < "u" ? document : null,
  Ks = et && et.createElement("template"),
  Rl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? et.createElementNS(Ol, e)
        : et.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => et.createTextNode(e),
    createComment: (e) => et.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => et.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Ks.innerHTML = s ? `<svg>${e}</svg>` : e;
        const l = Ks.content;
        if (s) {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Fl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Sl(e, t, n) {
  const s = e.style,
    r = se(n);
  if (n && !r) {
    if (t && !se(t)) for (const i in t) n[i] == null && Wn(s, i, "");
    for (const i in n) Wn(s, i, n[i]);
  } else {
    const i = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = i);
  }
}
const ks = /\s*!important$/;
function Wn(e, t, n) {
  if (L(n)) n.forEach((s) => Wn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Ml(e, t);
    ks.test(n)
      ? e.setProperty(rt(s), n.replace(ks, ""), "important")
      : (e[s] = n);
  }
}
const Ws = ["Webkit", "Moz", "ms"],
  An = {};
function Ml(e, t) {
  const n = An[t];
  if (n) return n;
  let s = Me(t);
  if (s !== "filter" && s in e) return (An[t] = s);
  s = cn(s);
  for (let r = 0; r < Ws.length; r++) {
    const i = Ws[r] + s;
    if (i in e) return (An[t] = i);
  }
  return t;
}
const Vs = "http://www.w3.org/1999/xlink";
function Ll(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Vs, t.slice(6, t.length))
      : e.setAttributeNS(Vs, t, n);
  else {
    const i = Hi(t);
    n == null || (i && !pr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : n);
  }
}
function Nl(e, t, n, s, r, i, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, r, i), (e[t] = n ?? "");
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    e._value = n;
    const a = l === "OPTION" ? e.getAttribute("value") : e.value,
      d = n ?? "";
    a !== d && (e.value = d), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = pr(n))
      : n == null && a === "string"
      ? ((n = ""), (c = !0))
      : a === "number" && ((n = 0), (c = !0));
  }
  try {
    e[t] = n;
  } catch {}
  c && e.removeAttribute(t);
}
function $l(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Hl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Bl(e, t, n, s, r = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, c] = Ul(t);
    if (s) {
      const a = (i[t] = Kl(s, r));
      $l(e, l, a, c);
    } else o && (Hl(e, l, o, c), (i[t] = void 0));
  }
}
const qs = /(?:Once|Passive|Capture)$/;
function Ul(e) {
  let t;
  if (qs.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(qs)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : rt(e.slice(2)), t];
}
let Pn = 0;
const jl = Promise.resolve(),
  Dl = () => Pn || (jl.then(() => (Pn = 0)), (Pn = Date.now()));
function Kl(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Ce(kl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Dl()), n;
}
function kl(e, t) {
  if (L(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const zs = /^on[a-z]/,
  Wl = (e, t, n, s, r = !1, i, o, l, c) => {
    t === "class"
      ? Fl(e, s, r)
      : t === "style"
      ? Sl(e, n, s)
      : Nt(t)
      ? qn(t) || Bl(e, t, n, s, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Vl(e, t, s, r)
        )
      ? Nl(e, t, s, i, o, l, c)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Ll(e, t, s, r));
  };
function Vl(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && zs.test(t) && j(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (zs.test(t) && se(n))
    ? !1
    : t in e;
}
const je = "transition",
  xt = "animation",
  hi = (e, { slots: t }) => kn(Ho, ql(e), t);
hi.displayName = "Transition";
const pi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
hi.props = ie({}, jr, pi);
const Xe = (e, t = []) => {
    L(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ys = (e) => (e ? (L(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ql(e) {
  const t = {};
  for (const I in e) I in pi || (t[I] = e[I]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: a = o,
      appearToClass: d = l,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: y = `${n}-leave-active`,
      leaveToClass: A = `${n}-leave-to`,
    } = e,
    N = zl(r),
    R = N && N[0],
    U = N && N[1],
    {
      onBeforeEnter: _,
      onEnter: x,
      onEnterCancelled: $,
      onLeave: P,
      onLeaveCancelled: K,
      onBeforeAppear: J = _,
      onAppear: V = x,
      onAppearCancelled: T = $,
    } = t,
    D = (I, k, F) => {
      Ze(I, k ? d : l), Ze(I, k ? a : o), F && F();
    },
    B = (I, k) => {
      (I._isLeaving = !1), Ze(I, p), Ze(I, A), Ze(I, y), k && k();
    },
    z = (I) => (k, F) => {
      const ge = I ? V : x,
        X = () => D(k, I, F);
      Xe(ge, [k, X]),
        Js(() => {
          Ze(k, I ? c : i), De(k, I ? d : l), Ys(ge) || Xs(k, s, R, X);
        });
    };
  return ie(t, {
    onBeforeEnter(I) {
      Xe(_, [I]), De(I, i), De(I, o);
    },
    onBeforeAppear(I) {
      Xe(J, [I]), De(I, c), De(I, a);
    },
    onEnter: z(!1),
    onAppear: z(!0),
    onLeave(I, k) {
      I._isLeaving = !0;
      const F = () => B(I, k);
      De(I, p),
        Xl(),
        De(I, y),
        Js(() => {
          I._isLeaving && (Ze(I, p), De(I, A), Ys(P) || Xs(I, s, U, F));
        }),
        Xe(P, [I, F]);
    },
    onEnterCancelled(I) {
      D(I, !1), Xe($, [I]);
    },
    onAppearCancelled(I) {
      D(I, !0), Xe(T, [I]);
    },
    onLeaveCancelled(I) {
      B(I), Xe(K, [I]);
    },
  });
}
function zl(e) {
  if (e == null) return null;
  if (ee(e)) return [In(e.enter), In(e.leave)];
  {
    const t = In(e);
    return [t, t];
  }
}
function In(e) {
  return Fi(e);
}
function De(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Ze(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Js(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Yl = 0;
function Xs(e, t, n, s) {
  const r = (e._endId = ++Yl),
    i = () => {
      r === e._endId && s();
    };
  if (n) return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = Jl(e, t);
  if (!o) return s();
  const a = o + "end";
  let d = 0;
  const p = () => {
      e.removeEventListener(a, y), i();
    },
    y = (A) => {
      A.target === e && ++d >= c && p();
    };
  setTimeout(() => {
    d < c && p();
  }, l + 1),
    e.addEventListener(a, y);
}
function Jl(e, t) {
  const n = window.getComputedStyle(e),
    s = (N) => (n[N] || "").split(", "),
    r = s(`${je}Delay`),
    i = s(`${je}Duration`),
    o = Zs(r, i),
    l = s(`${xt}Delay`),
    c = s(`${xt}Duration`),
    a = Zs(l, c);
  let d = null,
    p = 0,
    y = 0;
  t === je
    ? o > 0 && ((d = je), (p = o), (y = i.length))
    : t === xt
    ? a > 0 && ((d = xt), (p = a), (y = c.length))
    : ((p = Math.max(o, a)),
      (d = p > 0 ? (o > a ? je : xt) : null),
      (y = d ? (d === je ? i.length : c.length) : 0));
  const A =
    d === je && /\b(transform|all)(,|$)/.test(s(`${je}Property`).toString());
  return { type: d, timeout: p, propCount: y, hasTransform: A };
}
function Zs(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => Qs(n) + Qs(e[s])));
}
function Qs(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Xl() {
  return document.body.offsetHeight;
}
const Zl = ["ctrl", "shift", "alt", "meta"],
  Ql = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Zl.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Dc =
    (e, t) =>
    (n, ...s) => {
      for (let r = 0; r < t.length; r++) {
        const i = Ql[t[r]];
        if (i && i(n, t)) return;
      }
      return e(n, ...s);
    },
  Gl = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Kc = (e, t) => (n) => {
    if (!("key" in n)) return;
    const s = rt(n.key);
    if (t.some((r) => r === s || Gl[r] === s)) return e(n);
  },
  ec = ie({ patchProp: Wl }, Rl);
let On,
  Gs = !1;
function tc() {
  return (On = Gs ? On : al(ec)), (Gs = !0), On;
}
const kc = (...e) => {
  const t = tc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = nc(s);
      if (r) return n(r, !0, r instanceof SVGElement);
    }),
    t
  );
};
function nc(e) {
  return se(e) ? document.querySelector(e) : e;
}
const Wc = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  sc = "modulepreload",
  rc = function (e) {
    return "/kanel/" + e;
  },
  er = {},
  Vc = function (t, n, s) {
    if (!n || n.length === 0) return t();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      n.map((i) => {
        if (((i = rc(i)), i in er)) return;
        er[i] = !0;
        const o = i.endsWith(".css"),
          l = o ? '[rel="stylesheet"]' : "";
        if (!!s)
          for (let d = r.length - 1; d >= 0; d--) {
            const p = r[d];
            if (p.href === i && (!o || p.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${l}`)) return;
        const a = document.createElement("link");
        if (
          ((a.rel = o ? "stylesheet" : sc),
          o || ((a.as = "script"), (a.crossOrigin = "")),
          (a.href = i),
          document.head.appendChild(a),
          o)
        )
          return new Promise((d, p) => {
            a.addEventListener("load", d),
              a.addEventListener("error", () =>
                p(new Error(`Unable to preload CSS for ${i}`)),
              );
          });
      }),
    )
      .then(() => t())
      .catch((i) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented))
          throw i;
      });
  },
  ic = window.__VP_SITE_DATA__,
  gi = /^[a-z]+:/i,
  qc = /^pathname:\/\//,
  zc = "vitepress-theme-appearance",
  mi = /#.*$/,
  oc = /(index)?\.(md|html)$/,
  xe = typeof document < "u",
  _i = {
    relativePath: "",
    filePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: { sidebar: !1, layout: "page" },
    lastUpdated: 0,
    isNotFound: !0,
  };
function lc(e, t, n = !1) {
  if (t === void 0) return !1;
  if (((e = tr(`/${e}`)), n)) return new RegExp(t).test(e);
  if (tr(t) !== e) return !1;
  const s = t.match(mi);
  return s ? (xe ? location.hash : "") === s[0] : !0;
}
function tr(e) {
  return decodeURI(e).replace(mi, "").replace(oc, "");
}
function cc(e) {
  return gi.test(e);
}
function fc(e, t) {
  var s, r, i, o, l, c, a;
  const n =
    Object.keys(e.locales).find(
      (d) => d !== "root" && !cc(d) && lc(t, `/${d}/`, !0),
    ) || "root";
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate:
      ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: yi(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((a = e.locales[n]) == null ? void 0 : a.themeConfig),
    },
  });
}
function bi(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate;
  if (typeof s == "string" && s.includes(":title"))
    return s.replace(/:title/g, n);
  const r = ac(e.title, s);
  return `${n}${r}`;
}
function ac(e, t) {
  return t === !1
    ? ""
    : t === !0 || t === void 0
    ? ` | ${e}`
    : e === t
    ? ""
    : ` | ${t}`;
}
function uc(e, t) {
  const [n, s] = t;
  if (n !== "meta") return !1;
  const r = Object.entries(s)[0];
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1]);
}
function yi(e, t) {
  return [...e.filter((n) => !uc(t, n)), ...t];
}
const dc = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  hc = /^[a-z]:/i;
function nr(e) {
  const t = hc.exec(e),
    n = t ? t[0] : "";
  return (
    n +
    e
      .slice(n.length)
      .replace(dc, "_")
      .replace(/(^|\/)_+(?=[^/]*$)/, "$1")
  );
}
const pc = Symbol(),
  tt = go(ic);
function Yc(e) {
  const t = Ee(() => fc(tt.value, e.data.relativePath));
  return {
    site: t,
    theme: Ee(() => t.value.themeConfig),
    page: Ee(() => e.data),
    frontmatter: Ee(() => e.data.frontmatter),
    params: Ee(() => e.data.params),
    lang: Ee(() => t.value.lang),
    dir: Ee(() => t.value.dir),
    localeIndex: Ee(() => t.value.localeIndex || "root"),
    title: Ee(() => bi(t.value, e.data)),
    description: Ee(() => e.data.description || t.value.description),
    isDark: Rr(!1),
  };
}
function gc() {
  const e = pt(pc);
  if (!e) throw new Error("vitepress data not properly injected in app");
  return e;
}
function mc(e, t) {
  return `${e}${t}`.replace(/\/+/g, "/");
}
function sr(e) {
  return gi.test(e) || e.startsWith(".") ? e : mc(tt.value.base, e);
}
function _c(e) {
  let t = e.replace(/\.html$/, "");
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, "/index")), xe)) {
    const n = "/kanel/";
    t = nr(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
    let s = __VP_HASH_MAP__[t.toLowerCase()];
    if (
      (s ||
        ((t = t.endsWith("_index.md")
          ? t.slice(0, -9) + ".md"
          : t.slice(0, -3) + "_index.md"),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null;
    t = `${n}assets/${t}.${s}.js`;
  } else t = `./${nr(t.slice(1).replace(/\//g, "_"))}.md.js`;
  return t;
}
let Xt = [];
function Jc(e) {
  Xt.push(e),
    bn(() => {
      Xt = Xt.filter((t) => t !== e);
    });
}
const bc = Symbol(),
  rr = "http://a.com",
  yc = () => ({ path: "/", component: null, data: _i });
function Xc(e, t) {
  const n = an(yc()),
    s = { route: n, go: r };
  async function r(l = xe ? location.href : "/") {
    var a, d;
    if (
      (await ((a = s.onBeforeRouteChange) == null ? void 0 : a.call(s, l))) ===
      !1
    )
      return;
    const c = new URL(l, rr);
    tt.value.cleanUrls ||
      (!c.pathname.endsWith("/") &&
        !c.pathname.endsWith(".html") &&
        ((c.pathname += ".html"), (l = c.pathname + c.search + c.hash))),
      lr(l),
      await o(l),
      await ((d = s.onAfterRouteChanged) == null ? void 0 : d.call(s, l));
  }
  let i = null;
  async function o(l, c = 0, a = !1) {
    var y;
    if (
      (await ((y = s.onBeforePageLoad) == null ? void 0 : y.call(s, l))) === !1
    )
      return;
    const d = new URL(l, rr),
      p = (i = d.pathname);
    try {
      let A = await e(p);
      if (!A) throw new Error(`Page not found: ${p}`);
      if (i === p) {
        i = null;
        const { default: N, __pageData: R } = A;
        if (!N) throw new Error(`Invalid route component: ${N}`);
        (n.path = xe ? p : sr(p)),
          (n.component = Tt(N)),
          (n.data = Tt(R)),
          xe &&
            Lr(() => {
              let U =
                tt.value.base +
                R.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
              if (
                (!tt.value.cleanUrls && !U.endsWith("/") && (U += ".html"),
                U !== d.pathname &&
                  ((d.pathname = U),
                  (l = U + d.search + d.hash),
                  history.replaceState(null, "", l)),
                d.hash && !c)
              ) {
                let _ = null;
                try {
                  _ = document.getElementById(
                    decodeURIComponent(d.hash).slice(1),
                  );
                } catch (x) {
                  console.warn(x);
                }
                if (_) {
                  ir(_, d.hash);
                  return;
                }
              }
              window.scrollTo(0, c);
            });
      }
    } catch (A) {
      if (
        (!/fetch|Page not found/.test(A.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(A),
        !a)
      )
        try {
          const N = await fetch(tt.value.base + "hashmap.json");
          (window.__VP_HASH_MAP__ = await N.json()), await o(l, c, !0);
          return;
        } catch {}
      i === p &&
        ((i = null),
        (n.path = xe ? p : sr(p)),
        (n.component = t ? Tt(t) : null),
        (n.data = _i));
    }
  }
  return (
    xe &&
      (window.addEventListener(
        "click",
        (l) => {
          if (l.target.closest("button")) return;
          const a = l.target.closest("a");
          if (
            a &&
            !a.closest(".vp-raw") &&
            (a instanceof SVGElement || !a.download)
          ) {
            const { target: d } = a,
              {
                href: p,
                origin: y,
                pathname: A,
                hash: N,
                search: R,
              } = new URL(
                a.href instanceof SVGAnimatedString ? a.href.animVal : a.href,
                a.baseURI,
              ),
              U = window.location,
              _ = A.match(/\.\w+$/);
            !l.ctrlKey &&
              !l.shiftKey &&
              !l.altKey &&
              !l.metaKey &&
              !d &&
              y === U.origin &&
              !(_ && _[0] !== ".html") &&
              (l.preventDefault(),
              A === U.pathname && R === U.search
                ? (N !== U.hash &&
                    (history.pushState(null, "", N),
                    window.dispatchEvent(new Event("hashchange"))),
                  N
                    ? ir(a, N, a.classList.contains("header-anchor"))
                    : (lr(p), window.scrollTo(0, 0)))
                : r(p));
          }
        },
        { capture: !0 },
      ),
      window.addEventListener("popstate", (l) => {
        o(location.href, (l.state && l.state.scrollPosition) || 0);
      }),
      window.addEventListener("hashchange", (l) => {
        l.preventDefault();
      })),
    s
  );
}
function wc() {
  const e = pt(bc);
  if (!e) throw new Error("useRouter() is called without provider.");
  return e;
}
function wi() {
  return wc().route;
}
function ir(e, t, n = !1) {
  let s = null;
  try {
    s = e.classList.contains("header-anchor")
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1));
  } catch (r) {
    console.warn(r);
  }
  if (s) {
    let a = function () {
        !n || Math.abs(c - window.scrollY) > window.innerHeight
          ? window.scrollTo(0, c)
          : window.scrollTo({ left: 0, top: c, behavior: "smooth" });
      },
      r = tt.value.scrollOffset,
      i = 0,
      o = 24;
    if (
      (typeof r == "object" &&
        "padding" in r &&
        ((o = r.padding), (r = r.selector)),
      typeof r == "number")
    )
      i = r;
    else if (typeof r == "string") i = or(r, o);
    else if (Array.isArray(r))
      for (const d of r) {
        const p = or(d, o);
        if (p) {
          i = p;
          break;
        }
      }
    const l = parseInt(window.getComputedStyle(s).paddingTop, 10),
      c = window.scrollY + s.getBoundingClientRect().top - i + l;
    requestAnimationFrame(a);
  }
}
function or(e, t) {
  const n = document.querySelector(e);
  if (!n) return 0;
  const s = n.getBoundingClientRect().bottom;
  return s < 0 ? 0 : s + t;
}
function lr(e) {
  xe &&
    e !== location.href &&
    (history.replaceState({ scrollPosition: window.scrollY }, document.title),
    history.pushState(null, "", e));
}
const cr = () => Xt.forEach((e) => e()),
  Zc = kr({
    name: "VitePressContent",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e) {
      const t = wi(),
        { site: n } = gc();
      return () =>
        kn(e.as, n.value.contentProps ?? { style: { position: "relative" } }, [
          t.component
            ? kn(t.component, { onVnodeMounted: cr, onVnodeUpdated: cr })
            : "404 Page Not Found",
        ]);
    },
  }),
  Qc = kr({
    setup(e, { slots: t }) {
      const n = Rr(!1);
      return (
        _n(() => {
          n.value = !0;
        }),
        () => (n.value && t.default ? t.default() : null)
      );
    },
  });
function Gc() {
  xe &&
    window.addEventListener("click", (e) => {
      var n;
      const t = e.target;
      if (t.matches(".vp-code-group input")) {
        const s = (n = t.parentElement) == null ? void 0 : n.parentElement;
        if (!s) return;
        const r = Array.from(s.querySelectorAll("input")).indexOf(t);
        if (r < 0) return;
        const i = s.querySelector(".blocks");
        if (!i) return;
        const o = Array.from(i.children).find((a) =>
          a.classList.contains("active"),
        );
        if (!o) return;
        const l = i.children[r];
        if (!l || o === l) return;
        o.classList.remove("active"), l.classList.add("active");
        const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`);
        c == null || c.scrollIntoView({ block: "nearest" });
      }
    });
}
function ef() {
  if (xe) {
    const e = new WeakMap();
    window.addEventListener("click", (t) => {
      var s;
      const n = t.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i =
            (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling;
        if (!r || !i) return;
        const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className);
        let l = "";
        i.querySelectorAll("span.line:not(.diff.remove)").forEach(
          (c) =>
            (l +=
              (c.textContent || "") +
              `
`),
        ),
          (l = l.slice(0, -1)),
          o && (l = l.replace(/^ *(\$|>) /gm, "").trim()),
          xc(l).then(() => {
            n.classList.add("copied"), clearTimeout(e.get(n));
            const c = setTimeout(() => {
              n.classList.remove("copied"), n.blur(), e.delete(n);
            }, 2e3);
            e.set(n, c);
          });
      }
    });
  }
}
async function xc(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement("textarea"),
      n = document.activeElement;
    (t.value = e),
      t.setAttribute("readonly", ""),
      (t.style.contain = "strict"),
      (t.style.position = "absolute"),
      (t.style.left = "-9999px"),
      (t.style.fontSize = "12pt");
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand("copy"),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus();
  }
}
function tf(e, t) {
  let n = [],
    s = !0;
  const r = (i) => {
    if (s) {
      s = !1;
      return;
    }
    n.forEach((o) => document.head.removeChild(o)),
      (n = []),
      i.forEach((o) => {
        const l = fr(o);
        document.head.appendChild(l), n.push(l);
      });
  };
  Mo(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [];
    document.title = bi(o, i);
    const a = l || o.description;
    let d = document.querySelector("meta[name=description]");
    d
      ? d.setAttribute("content", a)
      : fr(["meta", { name: "description", content: a }]),
      r(yi(o.head, vc(c)));
  });
}
function fr([e, t, n]) {
  const s = document.createElement(e);
  for (const r in t) s.setAttribute(r, t[r]);
  return n && (s.innerHTML = n), s;
}
function Cc(e) {
  return e[0] === "meta" && e[1] && e[1].name === "description";
}
function vc(e) {
  return e.filter((t) => !Cc(t));
}
const Rn = new Set(),
  xi = () => document.createElement("link"),
  Ec = (e) => {
    const t = xi();
    (t.rel = "prefetch"), (t.href = e), document.head.appendChild(t);
  },
  Tc = (e) => {
    const t = new XMLHttpRequest();
    t.open("GET", e, (t.withCredentials = !0)), t.send();
  };
let qt;
const Ac =
  xe &&
  (qt = xi()) &&
  qt.relList &&
  qt.relList.supports &&
  qt.relList.supports("prefetch")
    ? Ec
    : Tc;
function nf() {
  if (!xe || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target;
            n.unobserve(l);
            const { pathname: c } = l;
            if (!Rn.has(c)) {
              Rn.add(c);
              const a = _c(c);
              a && Ac(a);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll("#app a").forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI,
            ),
            c = l.match(/\.\w+$/);
          (c && c[0] !== ".html") ||
            (i.target !== "_blank" &&
              o === location.hostname &&
              (l !== location.pathname ? n.observe(i) : Rn.add(l)));
        });
      });
  };
  _n(s);
  const r = wi();
  Yt(() => r.path, s),
    bn(() => {
      n && n.disconnect();
    });
}
export {
  Hc as $,
  xe as A,
  bn as B,
  Fc as C,
  ko as D,
  Sc as E,
  he as F,
  Lc as G,
  go as H,
  Jc as I,
  le as J,
  Mc as K,
  gi as L,
  wi as M,
  _l as N,
  pt as O,
  qc as P,
  Xn as Q,
  Lr as R,
  Uc as S,
  hi as T,
  zc as U,
  Ar as V,
  sl as W,
  Kc as X,
  $c as Y,
  Dc as Z,
  Wc as _,
  ci as a,
  tf as a0,
  bc as a1,
  Yc as a2,
  pc as a3,
  Zc as a4,
  Qc as a5,
  tt as a6,
  kc as a7,
  Xc as a8,
  _c as a9,
  Vc as aa,
  nf as ab,
  ef as ac,
  Gc as ad,
  kn as ae,
  ii as b,
  Bc as c,
  kr as d,
  jc as e,
  sr as f,
  Ee as g,
  Rr as h,
  cc as i,
  _n as j,
  li as k,
  _o as l,
  Rc as m,
  Zn as n,
  si as o,
  Oc as p,
  ji as q,
  Nc as r,
  Ic as s,
  Pc as t,
  gc as u,
  Yt as v,
  Po as w,
  Mo as x,
  fi as y,
  lc as z,
};

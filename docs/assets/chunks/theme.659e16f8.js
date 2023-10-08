import {
  d as g,
  o as a,
  c as i,
  r as u,
  n as B,
  a as x,
  t as S,
  _ as m,
  b,
  w as p,
  T as he,
  e as f,
  u as et,
  i as tt,
  P as nt,
  f as fe,
  g as $,
  h as P,
  j as H,
  k as c,
  l,
  p as E,
  m as D,
  q as st,
  s as ot,
  v as R,
  x as le,
  y as at,
  z as q,
  A as ie,
  B as me,
  C as ge,
  D as rt,
  E as U,
  F as T,
  G as A,
  H as ye,
  I as Q,
  J as h,
  K as G,
  L as ze,
  M as ce,
  N as te,
  O as be,
  Q as Fe,
  R as lt,
  S as it,
  U as xe,
  V as ct,
  W as ne,
  X as ut,
  Y as dt,
  Z as _t,
  $ as vt,
} from "./framework.cbdddcbb.js";
const pt = g({
  __name: "VPBadge",
  props: { text: {}, type: {} },
  setup(n) {
    return (e, t) => (
      a(),
      i(
        "span",
        { class: B(["VPBadge", e.type ?? "tip"]) },
        [u(e.$slots, "default", {}, () => [x(S(e.text), 1)], !0)],
        2,
      )
    );
  },
});
const ht = m(pt, [["__scopeId", "data-v-02919808"]]),
  ft = { key: 0, class: "VPBackdrop" },
  mt = g({
    __name: "VPBackdrop",
    props: { show: { type: Boolean } },
    setup(n) {
      return (e, t) => (
        a(),
        b(
          he,
          { name: "fade" },
          {
            default: p(() => [e.show ? (a(), i("div", ft)) : f("", !0)]),
            _: 1,
          },
        )
      );
    },
  });
const gt = m(mt, [["__scopeId", "data-v-c79a1216"]]),
  V = et;
function yt(n, e) {
  let t,
    s = !1;
  return () => {
    t && clearTimeout(t),
      s
        ? (t = setTimeout(n, e))
        : (n(),
          (s = !0),
          setTimeout(() => {
            s = !1;
          }, e));
  };
}
function _e(n) {
  return /^\//.test(n) ? n : `/${n}`;
}
function J(n) {
  if (tt(n)) return n.replace(nt, "");
  const { site: e } = V(),
    { pathname: t, search: s, hash: o } = new URL(n, "http://a.com"),
    r =
      t.endsWith("/") || t.endsWith(".html")
        ? n
        : n.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${t.replace(
              /(\.md)?$/,
              e.value.cleanUrls ? "" : ".html",
            )}${s}${o}`,
          );
  return fe(r);
}
function Z({ removeCurrent: n = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: s, page: o, theme: r } = V(),
    d = $(() => {
      var _, y;
      return {
        label: (_ = t.value.locales[s.value]) == null ? void 0 : _.label,
        link:
          ((y = t.value.locales[s.value]) == null ? void 0 : y.link) ||
          (s.value === "root" ? "/" : `/${s.value}/`),
      };
    });
  return {
    localeLinks: $(() =>
      Object.entries(t.value.locales).flatMap(([_, y]) =>
        n && d.value.label === y.label
          ? []
          : {
              text: y.label,
              link: bt(
                y.link || (_ === "root" ? "/" : `/${_}/`),
                r.value.i18nRouting !== !1 && e,
                o.value.relativePath.slice(d.value.link.length - 1),
                !t.value.cleanUrls,
              ),
            },
      ),
    ),
    currentLang: d,
  };
}
function bt(n, e, t, s) {
  return e
    ? n.replace(/\/$/, "") +
        _e(
          t
            .replace(/(^|\/)index\.md$/, "$1")
            .replace(/\.md$/, s ? ".html" : ""),
        )
    : n;
}
const kt = (n) => (E("data-v-a172abb3"), (n = n()), D(), n),
  $t = { class: "NotFound" },
  Pt = { class: "code" },
  Vt = { class: "title" },
  wt = kt(() => c("div", { class: "divider" }, null, -1)),
  St = { class: "quote" },
  Lt = { class: "action" },
  Mt = ["href", "aria-label"],
  Tt = g({
    __name: "NotFound",
    setup(n) {
      const { site: e, theme: t } = V(),
        { localeLinks: s } = Z({ removeCurrent: !1 }),
        o = P("/");
      return (
        H(() => {
          var d;
          const r = window.location.pathname
            .replace(e.value.base, "")
            .replace(/(^.*?\/).*$/, "/$1");
          s.value.length &&
            (o.value =
              ((d = s.value.find(({ link: v }) => v.startsWith(r))) == null
                ? void 0
                : d.link) || s.value[0].link);
        }),
        (r, d) => {
          var v, _, y, w, M;
          return (
            a(),
            i("div", $t, [
              c(
                "p",
                Pt,
                S(((v = l(t).notFound) == null ? void 0 : v.code) ?? "404"),
                1,
              ),
              c(
                "h1",
                Vt,
                S(
                  ((_ = l(t).notFound) == null ? void 0 : _.title) ??
                    "PAGE NOT FOUND",
                ),
                1,
              ),
              wt,
              c(
                "blockquote",
                St,
                S(
                  ((y = l(t).notFound) == null ? void 0 : y.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
                ),
                1,
              ),
              c("div", Lt, [
                c(
                  "a",
                  {
                    class: "link",
                    href: l(fe)(o.value),
                    "aria-label":
                      ((w = l(t).notFound) == null ? void 0 : w.linkLabel) ??
                      "go to home",
                  },
                  S(
                    ((M = l(t).notFound) == null ? void 0 : M.linkText) ??
                      "Take me home",
                  ),
                  9,
                  Mt,
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const Bt = m(Tt, [["__scopeId", "data-v-a172abb3"]]);
function Oe(n) {
  return st() ? (ot(n), !0) : !1;
}
function ke(n) {
  return typeof n == "function" ? n() : l(n);
}
const Ct = typeof window < "u",
  It = () => {};
function Nt(n) {
  var e;
  const t = ke(n);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const $e = Ct ? window : void 0;
function At(...n) {
  let e, t, s, o;
  if (
    (typeof n[0] == "string" || Array.isArray(n[0])
      ? (([t, s, o] = n), (e = $e))
      : ([e, t, s, o] = n),
    !e)
  )
    return It;
  Array.isArray(t) || (t = [t]), Array.isArray(s) || (s = [s]);
  const r = [],
    d = () => {
      r.forEach((w) => w()), (r.length = 0);
    },
    v = (w, M, C, k) => (
      w.addEventListener(M, C, k), () => w.removeEventListener(M, C, k)
    ),
    _ = R(
      () => [Nt(e), ke(o)],
      ([w, M]) => {
        d(), w && r.push(...t.flatMap((C) => s.map((k) => v(w, C, k, M))));
      },
      { immediate: !0, flush: "post" },
    ),
    y = () => {
      _(), d();
    };
  return Oe(y), y;
}
function xt() {
  const n = P(!1);
  return (
    at() &&
      H(() => {
        n.value = !0;
      }),
    n
  );
}
function Ht(n) {
  const e = xt();
  return $(() => (e.value, !!n()));
}
function ve(n, e = {}) {
  const { window: t = $e } = e,
    s = Ht(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let o;
  const r = P(!1),
    d = (y) => {
      r.value = y.matches;
    },
    v = () => {
      o &&
        ("removeEventListener" in o
          ? o.removeEventListener("change", d)
          : o.removeListener(d));
    },
    _ = le(() => {
      s.value &&
        (v(),
        (o = t.matchMedia(ke(n))),
        "addEventListener" in o
          ? o.addEventListener("change", d)
          : o.addListener(d),
        (r.value = o.matches));
    });
  return (
    Oe(() => {
      _(), v(), (o = void 0);
    }),
    r
  );
}
function Ge({ window: n = $e } = {}) {
  if (!n) return { x: P(0), y: P(0) };
  const e = P(n.scrollX),
    t = P(n.scrollY);
  return (
    At(
      n,
      "scroll",
      () => {
        (e.value = n.scrollX), (t.value = n.scrollY);
      },
      { capture: !1, passive: !0 },
    ),
    { x: e, y: t }
  );
}
function Re(n, e) {
  if (Array.isArray(n)) return se(n);
  if (n == null) return [];
  e = _e(e);
  const t = Object.keys(n)
      .sort((o, r) => r.split("/").length - o.split("/").length)
      .find((o) => e.startsWith(_e(o))),
    s = t ? n[t] : [];
  return Array.isArray(s) ? se(s) : se(s.items, s.base);
}
function Et(n) {
  const e = [];
  let t = 0;
  for (const s in n) {
    const o = n[s];
    if (o.items) {
      t = e.push(o);
      continue;
    }
    e[t] || e.push({ items: [] }), e[t].items.push(o);
  }
  return e;
}
function Dt(n) {
  const e = [];
  function t(s) {
    for (const o of s)
      o.text &&
        o.link &&
        e.push({ text: o.text, link: o.link, docFooterText: o.docFooterText }),
        o.items && t(o.items);
  }
  return t(n), e;
}
function pe(n, e) {
  return Array.isArray(e)
    ? e.some((t) => pe(n, t))
    : q(n, e.link)
    ? !0
    : e.items
    ? pe(n, e.items)
    : !1;
}
function se(n, e) {
  return [...n].map((t) => {
    const s = { ...t },
      o = s.base || e;
    return (
      o && s.link && (s.link = o + s.link),
      s.items && (s.items = se(s.items, o)),
      s
    );
  });
}
function z() {
  const { frontmatter: n, page: e, theme: t } = V(),
    s = ve("(min-width: 960px)"),
    o = P(!1),
    r = $(() => {
      const I = t.value.sidebar,
        N = e.value.relativePath;
      return I ? Re(I, N) : [];
    }),
    d = $(
      () =>
        n.value.sidebar !== !1 &&
        r.value.length > 0 &&
        n.value.layout !== "home",
    ),
    v = $(() =>
      _
        ? n.value.aside == null
          ? t.value.aside === "left"
          : n.value.aside === "left"
        : !1,
    ),
    _ = $(() =>
      n.value.layout === "home"
        ? !1
        : n.value.aside != null
        ? !!n.value.aside
        : t.value.aside !== !1,
    ),
    y = $(() => d.value && s.value),
    w = $(() => (d.value ? Et(r.value) : []));
  function M() {
    o.value = !0;
  }
  function C() {
    o.value = !1;
  }
  function k() {
    o.value ? C() : M();
  }
  return {
    isOpen: o,
    sidebar: r,
    sidebarGroups: w,
    hasSidebar: d,
    hasAside: _,
    leftAside: v,
    isSidebarEnabled: y,
    open: M,
    close: C,
    toggle: k,
  };
}
function zt(n, e) {
  let t;
  le(() => {
    t = n.value ? document.activeElement : void 0;
  }),
    H(() => {
      window.addEventListener("keyup", s);
    }),
    me(() => {
      window.removeEventListener("keyup", s);
    });
  function s(o) {
    o.key === "Escape" && n.value && (e(), t == null || t.focus());
  }
}
const Ue = P(ie ? location.hash : "");
ie &&
  window.addEventListener("hashchange", () => {
    Ue.value = location.hash;
  });
function Ft(n) {
  const { page: e } = V(),
    t = P(!1),
    s = $(() => n.value.collapsed != null),
    o = $(() => !!n.value.link),
    r = P(!1),
    d = () => {
      r.value = q(e.value.relativePath, n.value.link);
    };
  R([e, n, Ue], d), H(d);
  const v = $(() =>
      r.value
        ? !0
        : n.value.items
        ? pe(e.value.relativePath, n.value.items)
        : !1,
    ),
    _ = $(() => !!(n.value.items && n.value.items.length));
  le(() => {
    t.value = !!(s.value && n.value.collapsed);
  }),
    ge(() => {
      (r.value || v.value) && (t.value = !1);
    });
  function y() {
    s.value && (t.value = !t.value);
  }
  return {
    collapsed: t,
    collapsible: s,
    isLink: o,
    isActiveLink: r,
    hasActiveLink: v,
    hasChildren: _,
    toggle: y,
  };
}
function Ot() {
  const { hasSidebar: n } = z(),
    e = ve("(min-width: 960px)"),
    t = ve("(min-width: 1280px)");
  return {
    isAsideEnabled: $(() =>
      !t.value && !e.value ? !1 : n.value ? t.value : e.value,
    ),
  };
}
const Gt = 71;
function Pe(n) {
  return (
    (typeof n.outline == "object" &&
      !Array.isArray(n.outline) &&
      n.outline.label) ||
    n.outlineTitle ||
    "On this page"
  );
}
function Ve(n) {
  const e = [...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const s = Number(t.tagName[1]);
      return { title: Rt(t), link: "#" + t.id, level: s };
    });
  return Ut(e, n);
}
function Rt(n) {
  let e = "";
  for (const t of n.childNodes)
    if (t.nodeType === 1) {
      if (
        t.classList.contains("VPBadge") ||
        t.classList.contains("header-anchor")
      )
        continue;
      e += t.textContent;
    } else t.nodeType === 3 && (e += t.textContent);
  return e.trim();
}
function Ut(n, e) {
  if (e === !1) return [];
  const t = (typeof e == "object" && !Array.isArray(e) ? e.level : e) || 2,
    [s, o] = typeof t == "number" ? [t, t] : t === "deep" ? [2, 6] : t;
  n = n.filter((d) => d.level >= s && d.level <= o);
  const r = [];
  e: for (let d = 0; d < n.length; d++) {
    const v = n[d];
    if (d === 0) r.push(v);
    else {
      for (let _ = d - 1; _ >= 0; _--) {
        const y = n[_];
        if (y.level < v.level) {
          (y.children || (y.children = [])).push(v);
          continue e;
        }
      }
      r.push(v);
    }
  }
  return r;
}
function jt(n, e) {
  const { isAsideEnabled: t } = Ot(),
    s = yt(r, 100);
  let o = null;
  H(() => {
    requestAnimationFrame(r), window.addEventListener("scroll", s);
  }),
    rt(() => {
      d(location.hash);
    }),
    me(() => {
      window.removeEventListener("scroll", s);
    });
  function r() {
    if (!t.value) return;
    const v = [].slice.call(n.value.querySelectorAll(".outline-link")),
      _ = [].slice
        .call(document.querySelectorAll(".content .header-anchor"))
        .filter((k) =>
          v.some((I) => I.hash === k.hash && k.offsetParent !== null),
        ),
      y = window.scrollY,
      w = window.innerHeight,
      M = document.body.offsetHeight,
      C = Math.abs(y + w - M) < 1;
    if (_.length && C) {
      d(_[_.length - 1].hash);
      return;
    }
    for (let k = 0; k < _.length; k++) {
      const I = _[k],
        N = _[k + 1],
        [L, W] = qt(k, I, N);
      if (L) {
        d(W);
        return;
      }
    }
  }
  function d(v) {
    o && o.classList.remove("active"),
      v == null
        ? (o = null)
        : (o = n.value.querySelector(`a[href="${decodeURIComponent(v)}"]`));
    const _ = o;
    _
      ? (_.classList.add("active"),
        (e.value.style.top = _.offsetTop + 33 + "px"),
        (e.value.style.opacity = "1"))
      : ((e.value.style.top = "33px"), (e.value.style.opacity = "0"));
  }
}
function He(n) {
  return n.parentElement.offsetTop - Gt;
}
function qt(n, e, t) {
  const s = window.scrollY;
  return n === 0 && s === 0
    ? [!0, null]
    : s < He(e)
    ? [!1, null]
    : !t || s < He(t)
    ? [!0, e.hash]
    : [!1, null];
}
const Wt = ["href", "title"],
  Kt = g({
    __name: "VPDocOutlineItem",
    props: { headers: {}, root: { type: Boolean } },
    setup(n) {
      function e({ target: t }) {
        const s = t.href.split("#")[1],
          o = document.getElementById(decodeURIComponent(s));
        o == null || o.focus({ preventScroll: !0 });
      }
      return (t, s) => {
        const o = U("VPDocOutlineItem", !0);
        return (
          a(),
          i(
            "ul",
            { class: B(t.root ? "root" : "nested") },
            [
              (a(!0),
              i(
                T,
                null,
                A(
                  t.headers,
                  ({ children: r, link: d, title: v }) => (
                    a(),
                    i("li", null, [
                      c(
                        "a",
                        {
                          class: "outline-link",
                          href: d,
                          onClick: e,
                          title: v,
                        },
                        S(v),
                        9,
                        Wt,
                      ),
                      r != null && r.length
                        ? (a(),
                          b(o, { key: 0, headers: r }, null, 8, ["headers"]))
                        : f("", !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        );
      };
    },
  });
const we = m(Kt, [["__scopeId", "data-v-d0ee3533"]]),
  Yt = (n) => (E("data-v-ff0f39c8"), (n = n()), D(), n),
  Xt = { class: "content" },
  Qt = { class: "outline-title" },
  Jt = { "aria-labelledby": "doc-outline-aria-label" },
  Zt = Yt(() =>
    c(
      "span",
      { class: "visually-hidden", id: "doc-outline-aria-label" },
      " Table of Contents for current page ",
      -1,
    ),
  ),
  en = g({
    __name: "VPDocAsideOutline",
    setup(n) {
      const { frontmatter: e, theme: t } = V(),
        s = ye([]);
      Q(() => {
        s.value = Ve(e.value.outline ?? t.value.outline);
      });
      const o = P(),
        r = P();
      return (
        jt(o, r),
        (d, v) => (
          a(),
          i(
            "div",
            {
              class: B([
                "VPDocAsideOutline",
                { "has-outline": s.value.length > 0 },
              ]),
              ref_key: "container",
              ref: o,
            },
            [
              c("div", Xt, [
                c(
                  "div",
                  { class: "outline-marker", ref_key: "marker", ref: r },
                  null,
                  512,
                ),
                c("div", Qt, S(l(Pe)(l(t))), 1),
                c("nav", Jt, [
                  Zt,
                  h(we, { headers: s.value, root: !0 }, null, 8, ["headers"]),
                ]),
              ]),
            ],
            2,
          )
        )
      );
    },
  });
const tn = m(en, [["__scopeId", "data-v-ff0f39c8"]]),
  nn = { class: "VPDocAsideCarbonAds" },
  sn = g({
    __name: "VPDocAsideCarbonAds",
    props: { carbonAds: {} },
    setup(n) {
      const e = () => null;
      return (t, s) => (
        a(),
        i("div", nn, [
          h(l(e), { "carbon-ads": t.carbonAds }, null, 8, ["carbon-ads"]),
        ])
      );
    },
  }),
  on = (n) => (E("data-v-3f215769"), (n = n()), D(), n),
  an = { class: "VPDocAside" },
  rn = on(() => c("div", { class: "spacer" }, null, -1)),
  ln = g({
    __name: "VPDocAside",
    setup(n) {
      const { theme: e } = V();
      return (t, s) => (
        a(),
        i("div", an, [
          u(t.$slots, "aside-top", {}, void 0, !0),
          u(t.$slots, "aside-outline-before", {}, void 0, !0),
          h(tn),
          u(t.$slots, "aside-outline-after", {}, void 0, !0),
          rn,
          u(t.$slots, "aside-ads-before", {}, void 0, !0),
          l(e).carbonAds
            ? (a(),
              b(sn, { key: 0, "carbon-ads": l(e).carbonAds }, null, 8, [
                "carbon-ads",
              ]))
            : f("", !0),
          u(t.$slots, "aside-ads-after", {}, void 0, !0),
          u(t.$slots, "aside-bottom", {}, void 0, !0),
        ])
      );
    },
  });
const cn = m(ln, [["__scopeId", "data-v-3f215769"]]);
function un() {
  const { theme: n, page: e } = V();
  return $(() => {
    const { text: t = "Edit this page", pattern: s = "" } =
      n.value.editLink || {};
    let o;
    return (
      typeof s == "function"
        ? (o = s(e.value))
        : (o = s.replace(/:path/g, e.value.filePath)),
      { url: o, text: t }
    );
  });
}
function dn() {
  const { page: n, theme: e, frontmatter: t } = V();
  return $(() => {
    var _, y, w, M, C, k, I, N;
    const s = Re(e.value.sidebar, n.value.relativePath),
      o = Dt(s),
      r = o.findIndex((L) => q(n.value.relativePath, L.link)),
      d =
        (((_ = e.value.docFooter) == null ? void 0 : _.prev) === !1 &&
          !t.value.prev) ||
        t.value.prev === !1,
      v =
        (((y = e.value.docFooter) == null ? void 0 : y.next) === !1 &&
          !t.value.next) ||
        t.value.next === !1;
    return {
      prev: d
        ? void 0
        : {
            text:
              (typeof t.value.prev == "string"
                ? t.value.prev
                : typeof t.value.prev == "object"
                ? t.value.prev.text
                : void 0) ??
              ((w = o[r - 1]) == null ? void 0 : w.docFooterText) ??
              ((M = o[r - 1]) == null ? void 0 : M.text),
            link:
              (typeof t.value.prev == "object" ? t.value.prev.link : void 0) ??
              ((C = o[r - 1]) == null ? void 0 : C.link),
          },
      next: v
        ? void 0
        : {
            text:
              (typeof t.value.next == "string"
                ? t.value.next
                : typeof t.value.next == "object"
                ? t.value.next.text
                : void 0) ??
              ((k = o[r + 1]) == null ? void 0 : k.docFooterText) ??
              ((I = o[r + 1]) == null ? void 0 : I.text),
            link:
              (typeof t.value.next == "object" ? t.value.next.link : void 0) ??
              ((N = o[r + 1]) == null ? void 0 : N.link),
          },
    };
  });
}
const _n = {},
  vn = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  pn = c(
    "path",
    {
      d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z",
    },
    null,
    -1,
  ),
  hn = c(
    "path",
    {
      d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z",
    },
    null,
    -1,
  ),
  fn = [pn, hn];
function mn(n, e) {
  return a(), i("svg", vn, fn);
}
const gn = m(_n, [["render", mn]]),
  F = g({
    __name: "VPLink",
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(n) {
      const e = n,
        t = $(() => e.tag ?? (e.href ? "a" : "span")),
        s = $(() => e.href && ze.test(e.href));
      return (o, r) => (
        a(),
        b(
          G(t.value),
          {
            class: B([
              "VPLink",
              {
                link: o.href,
                "vp-external-link-icon": s.value,
                "no-icon": o.noIcon,
              },
            ]),
            href: o.href ? l(J)(o.href) : void 0,
            target: o.target ?? (s.value ? "_blank" : void 0),
            rel: o.rel ?? (s.value ? "noreferrer" : void 0),
          },
          { default: p(() => [u(o.$slots, "default")]), _: 3 },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  }),
  yn = { class: "VPLastUpdated" },
  bn = ["datetime"],
  kn = g({
    __name: "VPDocFooterLastUpdated",
    setup(n) {
      const { theme: e, page: t } = V(),
        s = $(() => new Date(t.value.lastUpdated)),
        o = $(() => s.value.toISOString()),
        r = P("");
      return (
        H(() => {
          le(() => {
            var d;
            r.value = new Intl.DateTimeFormat(
              void 0,
              ((d = e.value.lastUpdated) == null
                ? void 0
                : d.formatOptions) ?? {
                dateStyle: "short",
                timeStyle: "short",
              },
            ).format(s.value);
          });
        }),
        (d, v) => {
          var _;
          return (
            a(),
            i("p", yn, [
              x(
                S(
                  ((_ = l(e).lastUpdated) == null ? void 0 : _.text) ||
                    l(e).lastUpdatedText ||
                    "Last updated",
                ) + ": ",
                1,
              ),
              c("time", { datetime: o.value }, S(r.value), 9, bn),
            ])
          );
        }
      );
    },
  });
const $n = m(kn, [["__scopeId", "data-v-149a99df"]]),
  Pn = { key: 0, class: "VPDocFooter" },
  Vn = { key: 0, class: "edit-info" },
  wn = { key: 0, class: "edit-link" },
  Sn = { key: 1, class: "last-updated" },
  Ln = { key: 1, class: "prev-next" },
  Mn = { class: "pager" },
  Tn = ["href"],
  Bn = ["innerHTML"],
  Cn = ["innerHTML"],
  In = { class: "pager" },
  Nn = ["href"],
  An = ["innerHTML"],
  xn = ["innerHTML"],
  Hn = g({
    __name: "VPDocFooter",
    setup(n) {
      const { theme: e, page: t, frontmatter: s } = V(),
        o = un(),
        r = dn(),
        d = $(() => e.value.editLink && s.value.editLink !== !1),
        v = $(() => t.value.lastUpdated && s.value.lastUpdated !== !1),
        _ = $(() => d.value || v.value || r.value.prev || r.value.next);
      return (y, w) => {
        var M, C, k, I, N, L;
        return _.value
          ? (a(),
            i("footer", Pn, [
              u(y.$slots, "doc-footer-before", {}, void 0, !0),
              d.value || v.value
                ? (a(),
                  i("div", Vn, [
                    d.value
                      ? (a(),
                        i("div", wn, [
                          h(
                            F,
                            {
                              class: "edit-link-button",
                              href: l(o).url,
                              "no-icon": !0,
                            },
                            {
                              default: p(() => [
                                h(gn, {
                                  class: "edit-link-icon",
                                  "aria-label": "edit icon",
                                }),
                                x(" " + S(l(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["href"],
                          ),
                        ]))
                      : f("", !0),
                    v.value ? (a(), i("div", Sn, [h($n)])) : f("", !0),
                  ]))
                : f("", !0),
              ((M = l(r).prev) != null && M.link) ||
              ((C = l(r).next) != null && C.link)
                ? (a(),
                  i("nav", Ln, [
                    c("div", Mn, [
                      (k = l(r).prev) != null && k.link
                        ? (a(),
                          i(
                            "a",
                            {
                              key: 0,
                              class: "pager-link prev",
                              href: l(J)(l(r).prev.link),
                            },
                            [
                              c(
                                "span",
                                {
                                  class: "desc",
                                  innerHTML:
                                    ((I = l(e).docFooter) == null
                                      ? void 0
                                      : I.prev) || "Previous page",
                                },
                                null,
                                8,
                                Bn,
                              ),
                              c(
                                "span",
                                { class: "title", innerHTML: l(r).prev.text },
                                null,
                                8,
                                Cn,
                              ),
                            ],
                            8,
                            Tn,
                          ))
                        : f("", !0),
                    ]),
                    c("div", In, [
                      (N = l(r).next) != null && N.link
                        ? (a(),
                          i(
                            "a",
                            {
                              key: 0,
                              class: "pager-link next",
                              href: l(J)(l(r).next.link),
                            },
                            [
                              c(
                                "span",
                                {
                                  class: "desc",
                                  innerHTML:
                                    ((L = l(e).docFooter) == null
                                      ? void 0
                                      : L.next) || "Next page",
                                },
                                null,
                                8,
                                An,
                              ),
                              c(
                                "span",
                                { class: "title", innerHTML: l(r).next.text },
                                null,
                                8,
                                xn,
                              ),
                            ],
                            8,
                            Nn,
                          ))
                        : f("", !0),
                    ]),
                  ]))
                : f("", !0),
            ]))
          : f("", !0);
      };
    },
  });
const En = m(Hn, [["__scopeId", "data-v-37656e44"]]),
  Dn = {},
  zn = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Fn = c(
    "path",
    {
      d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z",
    },
    null,
    -1,
  ),
  On = [Fn];
function Gn(n, e) {
  return a(), i("svg", zn, On);
}
const Se = m(Dn, [["render", Gn]]),
  Rn = { key: 0, class: "VPDocOutlineDropdown" },
  Un = { key: 0, class: "items" },
  jn = g({
    __name: "VPDocOutlineDropdown",
    setup(n) {
      const { frontmatter: e, theme: t } = V(),
        s = P(!1);
      Q(() => {
        s.value = !1;
      });
      const o = ye([]);
      return (
        Q(() => {
          o.value = Ve(e.value.outline ?? t.value.outline);
        }),
        (r, d) =>
          o.value.length > 0
            ? (a(),
              i("div", Rn, [
                c(
                  "button",
                  {
                    onClick: d[0] || (d[0] = (v) => (s.value = !s.value)),
                    class: B({ open: s.value }),
                  },
                  [x(S(l(Pe)(l(t))) + " ", 1), h(Se, { class: "icon" })],
                  2,
                ),
                s.value
                  ? (a(),
                    i("div", Un, [
                      h(we, { headers: o.value }, null, 8, ["headers"]),
                    ]))
                  : f("", !0),
              ]))
            : f("", !0)
      );
    },
  });
const qn = m(jn, [["__scopeId", "data-v-0c1fc463"]]),
  Wn = (n) => (E("data-v-6b87e69f"), (n = n()), D(), n),
  Kn = { class: "container" },
  Yn = Wn(() => c("div", { class: "aside-curtain" }, null, -1)),
  Xn = { class: "aside-container" },
  Qn = { class: "aside-content" },
  Jn = { class: "content" },
  Zn = { class: "content-container" },
  es = { class: "main" },
  ts = g({
    __name: "VPDoc",
    setup(n) {
      const { theme: e } = V(),
        t = ce(),
        { hasSidebar: s, hasAside: o, leftAside: r } = z(),
        d = $(() => t.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
      return (v, _) => {
        const y = U("Content");
        return (
          a(),
          i(
            "div",
            { class: B(["VPDoc", { "has-sidebar": l(s), "has-aside": l(o) }]) },
            [
              u(v.$slots, "doc-top", {}, void 0, !0),
              c("div", Kn, [
                l(o)
                  ? (a(),
                    i(
                      "div",
                      { key: 0, class: B(["aside", { "left-aside": l(r) }]) },
                      [
                        Yn,
                        c("div", Xn, [
                          c("div", Qn, [
                            h(cn, null, {
                              "aside-top": p(() => [
                                u(v.$slots, "aside-top", {}, void 0, !0),
                              ]),
                              "aside-bottom": p(() => [
                                u(v.$slots, "aside-bottom", {}, void 0, !0),
                              ]),
                              "aside-outline-before": p(() => [
                                u(
                                  v.$slots,
                                  "aside-outline-before",
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              "aside-outline-after": p(() => [
                                u(
                                  v.$slots,
                                  "aside-outline-after",
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              "aside-ads-before": p(() => [
                                u(v.$slots, "aside-ads-before", {}, void 0, !0),
                              ]),
                              "aside-ads-after": p(() => [
                                u(v.$slots, "aside-ads-after", {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : f("", !0),
                c("div", Jn, [
                  c("div", Zn, [
                    u(v.$slots, "doc-before", {}, void 0, !0),
                    h(qn),
                    c("main", es, [
                      h(
                        y,
                        {
                          class: B([
                            "vp-doc",
                            [
                              d.value,
                              l(e).externalLinkIcon &&
                                "external-link-icon-enabled",
                            ],
                          ]),
                        },
                        null,
                        8,
                        ["class"],
                      ),
                    ]),
                    h(En, null, {
                      "doc-footer-before": p(() => [
                        u(v.$slots, "doc-footer-before", {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    u(v.$slots, "doc-after", {}, void 0, !0),
                  ]),
                ]),
              ]),
              u(v.$slots, "doc-bottom", {}, void 0, !0),
            ],
            2,
          )
        );
      };
    },
  });
const ns = m(ts, [["__scopeId", "data-v-6b87e69f"]]),
  ss = g({
    __name: "VPButton",
    props: { tag: {}, size: {}, theme: {}, text: {}, href: {} },
    setup(n) {
      const e = n,
        t = $(() => [e.size ?? "medium", e.theme ?? "brand"]),
        s = $(() => e.href && ze.test(e.href)),
        o = $(() => (e.tag ? e.tag : e.href ? "a" : "button"));
      return (r, d) => (
        a(),
        b(
          G(o.value),
          {
            class: B(["VPButton", t.value]),
            href: r.href ? l(J)(r.href) : void 0,
            target: s.value ? "_blank" : void 0,
            rel: s.value ? "noreferrer" : void 0,
          },
          { default: p(() => [x(S(r.text), 1)]), _: 1 },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  });
const os = m(ss, [["__scopeId", "data-v-567ba664"]]),
  as = ["src", "alt"],
  rs = g({
    inheritAttrs: !1,
    __name: "VPImage",
    props: { image: {}, alt: {} },
    setup(n) {
      return (e, t) => {
        const s = U("VPImage", !0);
        return e.image
          ? (a(),
            i(
              T,
              { key: 0 },
              [
                typeof e.image == "string" || "src" in e.image
                  ? (a(),
                    i(
                      "img",
                      te(
                        { key: 0, class: "VPImage" },
                        typeof e.image == "string"
                          ? e.$attrs
                          : { ...e.image, ...e.$attrs },
                        {
                          src: l(fe)(
                            typeof e.image == "string" ? e.image : e.image.src,
                          ),
                          alt:
                            e.alt ??
                            (typeof e.image == "string"
                              ? ""
                              : e.image.alt || ""),
                        },
                      ),
                      null,
                      16,
                      as,
                    ))
                  : (a(),
                    i(
                      T,
                      { key: 1 },
                      [
                        h(
                          s,
                          te(
                            {
                              class: "dark",
                              image: e.image.dark,
                              alt: e.image.alt,
                            },
                            e.$attrs,
                          ),
                          null,
                          16,
                          ["image", "alt"],
                        ),
                        h(
                          s,
                          te(
                            {
                              class: "light",
                              image: e.image.light,
                              alt: e.image.alt,
                            },
                            e.$attrs,
                          ),
                          null,
                          16,
                          ["image", "alt"],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : f("", !0);
      };
    },
  });
const Le = m(rs, [["__scopeId", "data-v-8426fc1a"]]),
  ls = (n) => (E("data-v-da5d1713"), (n = n()), D(), n),
  is = { class: "container" },
  cs = { class: "main" },
  us = { key: 0, class: "name" },
  ds = ["innerHTML"],
  _s = ["innerHTML"],
  vs = ["innerHTML"],
  ps = { key: 0, class: "actions" },
  hs = { key: 0, class: "image" },
  fs = { class: "image-container" },
  ms = ls(() => c("div", { class: "image-bg" }, null, -1)),
  gs = g({
    __name: "VPHero",
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(n) {
      const e = be("hero-image-slot-exists");
      return (t, s) => (
        a(),
        i(
          "div",
          { class: B(["VPHero", { "has-image": t.image || l(e) }]) },
          [
            c("div", is, [
              c("div", cs, [
                u(
                  t.$slots,
                  "home-hero-info",
                  {},
                  () => [
                    t.name
                      ? (a(),
                        i("h1", us, [
                          c(
                            "span",
                            { innerHTML: t.name, class: "clip" },
                            null,
                            8,
                            ds,
                          ),
                        ]))
                      : f("", !0),
                    t.text
                      ? (a(),
                        i(
                          "p",
                          { key: 1, innerHTML: t.text, class: "text" },
                          null,
                          8,
                          _s,
                        ))
                      : f("", !0),
                    t.tagline
                      ? (a(),
                        i(
                          "p",
                          { key: 2, innerHTML: t.tagline, class: "tagline" },
                          null,
                          8,
                          vs,
                        ))
                      : f("", !0),
                  ],
                  !0,
                ),
                t.actions
                  ? (a(),
                    i("div", ps, [
                      (a(!0),
                      i(
                        T,
                        null,
                        A(
                          t.actions,
                          (o) => (
                            a(),
                            i("div", { key: o.link, class: "action" }, [
                              h(
                                os,
                                {
                                  tag: "a",
                                  size: "medium",
                                  theme: o.theme,
                                  text: o.text,
                                  href: o.link,
                                },
                                null,
                                8,
                                ["theme", "text", "href"],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : f("", !0),
              ]),
              t.image || l(e)
                ? (a(),
                  i("div", hs, [
                    c("div", fs, [
                      ms,
                      u(
                        t.$slots,
                        "home-hero-image",
                        {},
                        () => [
                          t.image
                            ? (a(),
                              b(
                                Le,
                                { key: 0, class: "image-src", image: t.image },
                                null,
                                8,
                                ["image"],
                              ))
                            : f("", !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : f("", !0),
            ]),
          ],
          2,
        )
      );
    },
  });
const ys = m(gs, [["__scopeId", "data-v-da5d1713"]]),
  bs = g({
    __name: "VPHomeHero",
    setup(n) {
      const { frontmatter: e } = V();
      return (t, s) =>
        l(e).hero
          ? (a(),
            b(
              ys,
              {
                key: 0,
                class: "VPHomeHero",
                name: l(e).hero.name,
                text: l(e).hero.text,
                tagline: l(e).hero.tagline,
                image: l(e).hero.image,
                actions: l(e).hero.actions,
              },
              {
                "home-hero-info": p(() => [u(t.$slots, "home-hero-info")]),
                "home-hero-image": p(() => [u(t.$slots, "home-hero-image")]),
                _: 3,
              },
              8,
              ["name", "text", "tagline", "image", "actions"],
            ))
          : f("", !0);
    },
  }),
  ks = {},
  $s = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  Ps = c(
    "path",
    {
      d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z",
    },
    null,
    -1,
  ),
  Vs = [Ps];
function ws(n, e) {
  return a(), i("svg", $s, Vs);
}
const Ss = m(ks, [["render", ws]]),
  Ls = { class: "box" },
  Ms = ["innerHTML"],
  Ts = ["innerHTML"],
  Bs = ["innerHTML"],
  Cs = { key: 3, class: "link-text" },
  Is = { class: "link-text-value" },
  Ns = g({
    __name: "VPFeature",
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
    },
    setup(n) {
      return (e, t) => (
        a(),
        b(
          F,
          {
            class: "VPFeature",
            href: e.link,
            rel: e.rel,
            "no-icon": !0,
            tag: e.link ? "a" : "div",
          },
          {
            default: p(() => [
              c("article", Ls, [
                typeof e.icon == "object"
                  ? (a(),
                    b(
                      Le,
                      {
                        key: 0,
                        image: e.icon,
                        alt: e.icon.alt,
                        height: e.icon.height || 48,
                        width: e.icon.width || 48,
                      },
                      null,
                      8,
                      ["image", "alt", "height", "width"],
                    ))
                  : e.icon
                  ? (a(),
                    i(
                      "div",
                      { key: 1, class: "icon", innerHTML: e.icon },
                      null,
                      8,
                      Ms,
                    ))
                  : f("", !0),
                c("h2", { class: "title", innerHTML: e.title }, null, 8, Ts),
                e.details
                  ? (a(),
                    i(
                      "p",
                      { key: 2, class: "details", innerHTML: e.details },
                      null,
                      8,
                      Bs,
                    ))
                  : f("", !0),
                e.linkText
                  ? (a(),
                    i("div", Cs, [
                      c("p", Is, [
                        x(S(e.linkText) + " ", 1),
                        h(Ss, { class: "link-text-icon" }),
                      ]),
                    ]))
                  : f("", !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ["href", "rel", "tag"],
        )
      );
    },
  });
const As = m(Ns, [["__scopeId", "data-v-33086751"]]),
  xs = { key: 0, class: "VPFeatures" },
  Hs = { class: "container" },
  Es = { class: "items" },
  Ds = g({
    __name: "VPFeatures",
    props: { features: {} },
    setup(n) {
      const e = n,
        t = $(() => {
          const s = e.features.length;
          if (s) {
            if (s === 2) return "grid-2";
            if (s === 3) return "grid-3";
            if (s % 3 === 0) return "grid-6";
            if (s > 3) return "grid-4";
          } else return;
        });
      return (s, o) =>
        s.features
          ? (a(),
            i("div", xs, [
              c("div", Hs, [
                c("div", Es, [
                  (a(!0),
                  i(
                    T,
                    null,
                    A(
                      s.features,
                      (r) => (
                        a(),
                        i(
                          "div",
                          { key: r.title, class: B(["item", [t.value]]) },
                          [
                            h(
                              As,
                              {
                                icon: r.icon,
                                title: r.title,
                                details: r.details,
                                link: r.link,
                                "link-text": r.linkText,
                                rel: r.rel,
                              },
                              null,
                              8,
                              [
                                "icon",
                                "title",
                                "details",
                                "link",
                                "link-text",
                                "rel",
                              ],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : f("", !0);
    },
  });
const zs = m(Ds, [["__scopeId", "data-v-39646fad"]]),
  Fs = g({
    __name: "VPHomeFeatures",
    setup(n) {
      const { frontmatter: e } = V();
      return (t, s) =>
        l(e).features
          ? (a(),
            b(
              zs,
              { key: 0, class: "VPHomeFeatures", features: l(e).features },
              null,
              8,
              ["features"],
            ))
          : f("", !0);
    },
  }),
  Os = { class: "VPHome" },
  Gs = g({
    __name: "VPHome",
    setup(n) {
      return (e, t) => {
        const s = U("Content");
        return (
          a(),
          i("div", Os, [
            u(e.$slots, "home-hero-before", {}, void 0, !0),
            h(bs, null, {
              "home-hero-info": p(() => [
                u(e.$slots, "home-hero-info", {}, void 0, !0),
              ]),
              "home-hero-image": p(() => [
                u(e.$slots, "home-hero-image", {}, void 0, !0),
              ]),
              _: 3,
            }),
            u(e.$slots, "home-hero-after", {}, void 0, !0),
            u(e.$slots, "home-features-before", {}, void 0, !0),
            h(Fs),
            u(e.$slots, "home-features-after", {}, void 0, !0),
            h(s),
          ])
        );
      };
    },
  });
const Rs = m(Gs, [["__scopeId", "data-v-d82743a8"]]),
  Us = {},
  js = { class: "VPPage" };
function qs(n, e) {
  const t = U("Content");
  return (
    a(),
    i("div", js, [u(n.$slots, "page-top"), h(t), u(n.$slots, "page-bottom")])
  );
}
const Ws = m(Us, [["render", qs]]),
  Ks = g({
    __name: "VPContent",
    setup(n) {
      const { page: e, frontmatter: t } = V(),
        { hasSidebar: s } = z();
      return (o, r) => (
        a(),
        i(
          "div",
          {
            class: B([
              "VPContent",
              { "has-sidebar": l(s), "is-home": l(t).layout === "home" },
            ]),
            id: "VPContent",
          },
          [
            l(e).isNotFound
              ? u(o.$slots, "not-found", { key: 0 }, () => [h(Bt)], !0)
              : l(t).layout === "page"
              ? (a(),
                b(
                  Ws,
                  { key: 1 },
                  {
                    "page-top": p(() => [
                      u(o.$slots, "page-top", {}, void 0, !0),
                    ]),
                    "page-bottom": p(() => [
                      u(o.$slots, "page-bottom", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                ))
              : l(t).layout === "home"
              ? (a(),
                b(
                  Rs,
                  { key: 2 },
                  {
                    "home-hero-before": p(() => [
                      u(o.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-info": p(() => [
                      u(o.$slots, "home-hero-info", {}, void 0, !0),
                    ]),
                    "home-hero-image": p(() => [
                      u(o.$slots, "home-hero-image", {}, void 0, !0),
                    ]),
                    "home-hero-after": p(() => [
                      u(o.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": p(() => [
                      u(o.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": p(() => [
                      u(o.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                ))
              : l(t).layout && l(t).layout !== "doc"
              ? (a(), b(G(l(t).layout), { key: 3 }))
              : (a(),
                b(
                  ns,
                  { key: 4 },
                  {
                    "doc-top": p(() => [
                      u(o.$slots, "doc-top", {}, void 0, !0),
                    ]),
                    "doc-bottom": p(() => [
                      u(o.$slots, "doc-bottom", {}, void 0, !0),
                    ]),
                    "doc-footer-before": p(() => [
                      u(o.$slots, "doc-footer-before", {}, void 0, !0),
                    ]),
                    "doc-before": p(() => [
                      u(o.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": p(() => [
                      u(o.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "aside-top": p(() => [
                      u(o.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-outline-before": p(() => [
                      u(o.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": p(() => [
                      u(o.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": p(() => [
                      u(o.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": p(() => [
                      u(o.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    "aside-bottom": p(() => [
                      u(o.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                )),
          ],
          2,
        )
      );
    },
  });
const Ys = m(Ks, [["__scopeId", "data-v-669faec9"]]),
  Xs = { class: "container" },
  Qs = ["innerHTML"],
  Js = ["innerHTML"],
  Zs = g({
    __name: "VPFooter",
    setup(n) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: s } = z();
      return (o, r) =>
        l(e).footer && l(t).footer !== !1
          ? (a(),
            i(
              "footer",
              { key: 0, class: B(["VPFooter", { "has-sidebar": l(s) }]) },
              [
                c("div", Xs, [
                  l(e).footer.message
                    ? (a(),
                      i(
                        "p",
                        {
                          key: 0,
                          class: "message",
                          innerHTML: l(e).footer.message,
                        },
                        null,
                        8,
                        Qs,
                      ))
                    : f("", !0),
                  l(e).footer.copyright
                    ? (a(),
                      i(
                        "p",
                        {
                          key: 1,
                          class: "copyright",
                          innerHTML: l(e).footer.copyright,
                        },
                        null,
                        8,
                        Js,
                      ))
                    : f("", !0),
                ]),
              ],
              2,
            ))
          : f("", !0);
    },
  });
const eo = m(Zs, [["__scopeId", "data-v-e03eb2e1"]]),
  to = { class: "header" },
  no = { class: "outline" },
  so = g({
    __name: "VPLocalNavOutlineDropdown",
    props: { headers: {}, navHeight: {} },
    setup(n) {
      const e = n,
        { theme: t } = V(),
        s = P(!1),
        o = P(0),
        r = P();
      Q(() => {
        s.value = !1;
      });
      function d() {
        (s.value = !s.value),
          (o.value =
            window.innerHeight + Math.min(window.scrollY - e.navHeight, 0));
      }
      function v(y) {
        y.target.classList.contains("outline-link") &&
          (r.value && (r.value.style.transition = "none"),
          lt(() => {
            s.value = !1;
          }));
      }
      function _() {
        (s.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return (y, w) => (
        a(),
        i(
          "div",
          {
            class: "VPLocalNavOutlineDropdown",
            style: Fe({ "--vp-vh": o.value + "px" }),
          },
          [
            y.headers.length > 0
              ? (a(),
                i(
                  "button",
                  { key: 0, onClick: d, class: B({ open: s.value }) },
                  [x(S(l(Pe)(l(t))) + " ", 1), h(Se, { class: "icon" })],
                  2,
                ))
              : (a(),
                i(
                  "button",
                  { key: 1, onClick: _ },
                  S(l(t).returnToTopLabel || "Return to top"),
                  1,
                )),
            h(
              he,
              { name: "flyout" },
              {
                default: p(() => [
                  s.value
                    ? (a(),
                      i(
                        "div",
                        {
                          key: 0,
                          ref_key: "items",
                          ref: r,
                          class: "items",
                          onClick: v,
                        },
                        [
                          c("div", to, [
                            c(
                              "a",
                              { class: "top-link", href: "#", onClick: _ },
                              S(l(t).returnToTopLabel || "Return to top"),
                              1,
                            ),
                          ]),
                          c("div", no, [
                            h(we, { headers: y.headers }, null, 8, ["headers"]),
                          ]),
                        ],
                        512,
                      ))
                    : f("", !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      );
    },
  });
const oo = m(so, [["__scopeId", "data-v-18201f51"]]),
  ao = {},
  ro = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  lo = c(
    "path",
    {
      d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z",
    },
    null,
    -1,
  ),
  io = c(
    "path",
    { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" },
    null,
    -1,
  ),
  co = c(
    "path",
    {
      d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z",
    },
    null,
    -1,
  ),
  uo = c(
    "path",
    {
      d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z",
    },
    null,
    -1,
  ),
  _o = [lo, io, co, uo];
function vo(n, e) {
  return a(), i("svg", ro, _o);
}
const po = m(ao, [["render", vo]]),
  ho = ["aria-expanded"],
  fo = { class: "menu-text" },
  mo = g({
    __name: "VPLocalNav",
    props: { open: { type: Boolean } },
    emits: ["open-menu"],
    setup(n) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: s } = z(),
        { y: o } = Ge(),
        r = ye([]),
        d = P(0);
      H(() => {
        d.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--vp-nav-height",
          ),
        );
      }),
        Q(() => {
          r.value = Ve(t.value.outline ?? e.value.outline);
        });
      const v = $(() => r.value.length === 0 && !s.value),
        _ = $(() => ({
          VPLocalNav: !0,
          fixed: v.value,
          "reached-top": o.value >= d.value,
        }));
      return (y, w) =>
        l(t).layout !== "home" && (!v.value || l(o) >= d.value)
          ? (a(),
            i(
              "div",
              { key: 0, class: B(_.value) },
              [
                l(s)
                  ? (a(),
                    i(
                      "button",
                      {
                        key: 0,
                        class: "menu",
                        "aria-expanded": y.open,
                        "aria-controls": "VPSidebarNav",
                        onClick: w[0] || (w[0] = (M) => y.$emit("open-menu")),
                      },
                      [
                        h(po, { class: "menu-icon" }),
                        c("span", fo, S(l(e).sidebarMenuLabel || "Menu"), 1),
                      ],
                      8,
                      ho,
                    ))
                  : f("", !0),
                h(oo, { headers: r.value, navHeight: d.value }, null, 8, [
                  "headers",
                  "navHeight",
                ]),
              ],
              2,
            ))
          : f("", !0);
    },
  });
const go = m(mo, [["__scopeId", "data-v-5cfd5582"]]);
function yo() {
  const n = P(!1);
  function e() {
    (n.value = !0), window.addEventListener("resize", o);
  }
  function t() {
    (n.value = !1), window.removeEventListener("resize", o);
  }
  function s() {
    n.value ? t() : e();
  }
  function o() {
    window.outerWidth >= 768 && t();
  }
  const r = ce();
  return (
    R(() => r.path, t),
    { isScreenOpen: n, openScreen: e, closeScreen: t, toggleScreen: s }
  );
}
const bo = {},
  ko = { class: "VPSwitch", type: "button", role: "switch" },
  $o = { class: "check" },
  Po = { key: 0, class: "icon" };
function Vo(n, e) {
  return (
    a(),
    i("button", ko, [
      c("span", $o, [
        n.$slots.default
          ? (a(), i("span", Po, [u(n.$slots, "default", {}, void 0, !0)]))
          : f("", !0),
      ]),
    ])
  );
}
const wo = m(bo, [
    ["render", Vo],
    ["__scopeId", "data-v-f3c41672"],
  ]),
  So = {},
  Lo = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Mo = it(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  To = [Mo];
function Bo(n, e) {
  return a(), i("svg", Lo, To);
}
const Co = m(So, [["render", Bo]]),
  Io = {},
  No = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Ao = c(
    "path",
    {
      d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z",
    },
    null,
    -1,
  ),
  xo = [Ao];
function Ho(n, e) {
  return a(), i("svg", No, xo);
}
const Eo = m(Io, [["render", Ho]]),
  Do = g({
    __name: "VPSwitchAppearance",
    setup(n) {
      const { site: e, isDark: t } = V(),
        s = P(!1),
        o = ie ? r() : () => {};
      H(() => {
        s.value = document.documentElement.classList.contains("dark");
      });
      function r() {
        const d = window.matchMedia("(prefers-color-scheme: dark)"),
          v = document.documentElement.classList;
        let _ = localStorage.getItem(xe),
          y =
            (e.value.appearance === "dark" && _ == null) ||
            (_ === "auto" || _ == null ? d.matches : _ === "dark");
        d.onchange = (C) => {
          _ === "auto" && M((y = C.matches));
        };
        function w() {
          M((y = !y)),
            (_ = y
              ? d.matches
                ? "auto"
                : "dark"
              : d.matches
              ? "light"
              : "auto"),
            localStorage.setItem(xe, _);
        }
        function M(C) {
          const k = document.createElement("style");
          (k.type = "text/css"),
            k.appendChild(
              document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`),
            ),
            document.head.appendChild(k),
            (s.value = C),
            v[C ? "add" : "remove"]("dark"),
            window.getComputedStyle(k).opacity,
            document.head.removeChild(k);
        }
        return w;
      }
      return (
        R(s, (d) => {
          t.value = d;
        }),
        (d, v) => (
          a(),
          b(
            wo,
            {
              title: "toggle dark mode",
              class: "VPSwitchAppearance",
              "aria-checked": s.value,
              onClick: l(o),
            },
            {
              default: p(() => [
                h(Co, { class: "sun" }),
                h(Eo, { class: "moon" }),
              ]),
              _: 1,
            },
            8,
            ["aria-checked", "onClick"],
          )
        )
      );
    },
  });
const Me = m(Do, [["__scopeId", "data-v-82b282f1"]]),
  zo = { key: 0, class: "VPNavBarAppearance" },
  Fo = g({
    __name: "VPNavBarAppearance",
    setup(n) {
      const { site: e } = V();
      return (t, s) =>
        l(e).appearance ? (a(), i("div", zo, [h(Me)])) : f("", !0);
    },
  });
const Oo = m(Fo, [["__scopeId", "data-v-f6a63727"]]),
  Te = P();
let je = !1,
  de = 0;
function Go(n) {
  const e = P(!1);
  if (ie) {
    !je && Ro(), de++;
    const t = R(Te, (s) => {
      var o, r, d;
      s === n.el.value || ((o = n.el.value) != null && o.contains(s))
        ? ((e.value = !0), (r = n.onFocus) == null || r.call(n))
        : ((e.value = !1), (d = n.onBlur) == null || d.call(n));
    });
    me(() => {
      t(), de--, de || Uo();
    });
  }
  return ct(e);
}
function Ro() {
  document.addEventListener("focusin", qe),
    (je = !0),
    (Te.value = document.activeElement);
}
function Uo() {
  document.removeEventListener("focusin", qe);
}
function qe() {
  Te.value = document.activeElement;
}
const jo = {},
  qo = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Wo = c(
    "path",
    {
      d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z",
    },
    null,
    -1,
  ),
  Ko = [Wo];
function Yo(n, e) {
  return a(), i("svg", qo, Ko);
}
const We = m(jo, [["render", Yo]]),
  Xo = {},
  Qo = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Jo = c("circle", { cx: "12", cy: "12", r: "2" }, null, -1),
  Zo = c("circle", { cx: "19", cy: "12", r: "2" }, null, -1),
  ea = c("circle", { cx: "5", cy: "12", r: "2" }, null, -1),
  ta = [Jo, Zo, ea];
function na(n, e) {
  return a(), i("svg", Qo, ta);
}
const sa = m(Xo, [["render", na]]),
  oa = { class: "VPMenuLink" },
  aa = g({
    __name: "VPMenuLink",
    props: { item: {} },
    setup(n) {
      const { page: e } = V();
      return (t, s) => (
        a(),
        i("div", oa, [
          h(
            F,
            {
              class: B({
                active: l(q)(
                  l(e).relativePath,
                  t.item.activeMatch || t.item.link,
                  !!t.item.activeMatch,
                ),
              }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
            },
            { default: p(() => [x(S(t.item.text), 1)]), _: 1 },
            8,
            ["class", "href", "target", "rel"],
          ),
        ])
      );
    },
  });
const ue = m(aa, [["__scopeId", "data-v-2f2cfafc"]]),
  ra = { class: "VPMenuGroup" },
  la = { key: 0, class: "title" },
  ia = g({
    __name: "VPMenuGroup",
    props: { text: {}, items: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i("div", ra, [
          e.text ? (a(), i("p", la, S(e.text), 1)) : f("", !0),
          (a(!0),
          i(
            T,
            null,
            A(
              e.items,
              (s) => (
                a(),
                i(
                  T,
                  null,
                  [
                    "link" in s
                      ? (a(), b(ue, { key: 0, item: s }, null, 8, ["item"]))
                      : f("", !0),
                  ],
                  64,
                )
              ),
            ),
            256,
          )),
        ])
      );
    },
  });
const ca = m(ia, [["__scopeId", "data-v-69e747b5"]]),
  ua = { class: "VPMenu" },
  da = { key: 0, class: "items" },
  _a = g({
    __name: "VPMenu",
    props: { items: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i("div", ua, [
          e.items
            ? (a(),
              i("div", da, [
                (a(!0),
                i(
                  T,
                  null,
                  A(
                    e.items,
                    (s) => (
                      a(),
                      i(
                        T,
                        { key: s.text },
                        [
                          "link" in s
                            ? (a(),
                              b(ue, { key: 0, item: s }, null, 8, ["item"]))
                            : (a(),
                              b(
                                ca,
                                { key: 1, text: s.text, items: s.items },
                                null,
                                8,
                                ["text", "items"],
                              )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : f("", !0),
          u(e.$slots, "default", {}, void 0, !0),
        ])
      );
    },
  });
const va = m(_a, [["__scopeId", "data-v-e7ea1737"]]),
  pa = ["aria-expanded", "aria-label"],
  ha = { key: 0, class: "text" },
  fa = ["innerHTML"],
  ma = { class: "menu" },
  ga = g({
    __name: "VPFlyout",
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(n) {
      const e = P(!1),
        t = P();
      Go({ el: t, onBlur: s });
      function s() {
        e.value = !1;
      }
      return (o, r) => (
        a(),
        i(
          "div",
          {
            class: "VPFlyout",
            ref_key: "el",
            ref: t,
            onMouseenter: r[1] || (r[1] = (d) => (e.value = !0)),
            onMouseleave: r[2] || (r[2] = (d) => (e.value = !1)),
          },
          [
            c(
              "button",
              {
                type: "button",
                class: "button",
                "aria-haspopup": "true",
                "aria-expanded": e.value,
                "aria-label": o.label,
                onClick: r[0] || (r[0] = (d) => (e.value = !e.value)),
              },
              [
                o.button || o.icon
                  ? (a(),
                    i("span", ha, [
                      o.icon
                        ? (a(), b(G(o.icon), { key: 0, class: "option-icon" }))
                        : f("", !0),
                      o.button
                        ? (a(),
                          i(
                            "span",
                            { key: 1, innerHTML: o.button },
                            null,
                            8,
                            fa,
                          ))
                        : f("", !0),
                      h(We, { class: "text-icon" }),
                    ]))
                  : (a(), b(sa, { key: 1, class: "icon" })),
              ],
              8,
              pa,
            ),
            c("div", ma, [
              h(
                va,
                { items: o.items },
                {
                  default: p(() => [u(o.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ["items"],
              ),
            ]),
          ],
          544,
        )
      );
    },
  });
const Be = m(ga, [["__scopeId", "data-v-a7b5672a"]]),
  ya = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  ba = ["href", "aria-label", "innerHTML"],
  ka = g({
    __name: "VPSocialLink",
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(n) {
      const e = n,
        t = $(() => (typeof e.icon == "object" ? e.icon.svg : ya[e.icon]));
      return (s, o) => (
        a(),
        i(
          "a",
          {
            class: "VPSocialLink no-icon",
            href: s.link,
            "aria-label":
              s.ariaLabel ?? (typeof s.icon == "string" ? s.icon : ""),
            target: "_blank",
            rel: "noopener",
            innerHTML: t.value,
          },
          null,
          8,
          ba,
        )
      );
    },
  });
const $a = m(ka, [["__scopeId", "data-v-f80f8133"]]),
  Pa = { class: "VPSocialLinks" },
  Va = g({
    __name: "VPSocialLinks",
    props: { links: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i("div", Pa, [
          (a(!0),
          i(
            T,
            null,
            A(
              e.links,
              ({ link: s, icon: o, ariaLabel: r }) => (
                a(),
                b($a, { key: s, icon: o, link: s, ariaLabel: r }, null, 8, [
                  "icon",
                  "link",
                  "ariaLabel",
                ])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const Ce = m(Va, [["__scopeId", "data-v-7bc22406"]]),
  wa = { key: 0, class: "group translations" },
  Sa = { class: "trans-title" },
  La = { key: 1, class: "group" },
  Ma = { class: "item appearance" },
  Ta = { class: "label" },
  Ba = { class: "appearance-action" },
  Ca = { key: 2, class: "group" },
  Ia = { class: "item social-links" },
  Na = g({
    __name: "VPNavBarExtra",
    setup(n) {
      const { site: e, theme: t } = V(),
        { localeLinks: s, currentLang: o } = Z({ correspondingLink: !0 }),
        r = $(
          () =>
            (s.value.length && o.value.label) ||
            e.value.appearance ||
            t.value.socialLinks,
        );
      return (d, v) =>
        r.value
          ? (a(),
            b(
              Be,
              { key: 0, class: "VPNavBarExtra", label: "extra navigation" },
              {
                default: p(() => [
                  l(s).length && l(o).label
                    ? (a(),
                      i("div", wa, [
                        c("p", Sa, S(l(o).label), 1),
                        (a(!0),
                        i(
                          T,
                          null,
                          A(
                            l(s),
                            (_) => (
                              a(),
                              b(ue, { key: _.link, item: _ }, null, 8, ["item"])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : f("", !0),
                  l(e).appearance
                    ? (a(),
                      i("div", La, [
                        c("div", Ma, [
                          c(
                            "p",
                            Ta,
                            S(l(t).darkModeSwitchLabel || "Appearance"),
                            1,
                          ),
                          c("div", Ba, [h(Me)]),
                        ]),
                      ]))
                    : f("", !0),
                  l(t).socialLinks
                    ? (a(),
                      i("div", Ca, [
                        c("div", Ia, [
                          h(
                            Ce,
                            {
                              class: "social-links-list",
                              links: l(t).socialLinks,
                            },
                            null,
                            8,
                            ["links"],
                          ),
                        ]),
                      ]))
                    : f("", !0),
                ]),
                _: 1,
              },
            ))
          : f("", !0);
    },
  });
const Aa = m(Na, [["__scopeId", "data-v-40855f84"]]),
  xa = (n) => (E("data-v-e5dd9c1c"), (n = n()), D(), n),
  Ha = ["aria-expanded"],
  Ea = xa(() =>
    c(
      "span",
      { class: "container" },
      [
        c("span", { class: "top" }),
        c("span", { class: "middle" }),
        c("span", { class: "bottom" }),
      ],
      -1,
    ),
  ),
  Da = [Ea],
  za = g({
    __name: "VPNavBarHamburger",
    props: { active: { type: Boolean } },
    emits: ["click"],
    setup(n) {
      return (e, t) => (
        a(),
        i(
          "button",
          {
            type: "button",
            class: B(["VPNavBarHamburger", { active: e.active }]),
            "aria-label": "mobile navigation",
            "aria-expanded": e.active,
            "aria-controls": "VPNavScreen",
            onClick: t[0] || (t[0] = (s) => e.$emit("click")),
          },
          Da,
          10,
          Ha,
        )
      );
    },
  });
const Fa = m(za, [["__scopeId", "data-v-e5dd9c1c"]]),
  Oa = ["innerHTML"],
  Ga = g({
    __name: "VPNavBarMenuLink",
    props: { item: {} },
    setup(n) {
      const { page: e } = V();
      return (t, s) => (
        a(),
        b(
          F,
          {
            class: B({
              VPNavBarMenuLink: !0,
              active: l(q)(
                l(e).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch,
              ),
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            tabindex: "0",
          },
          {
            default: p(() => [
              c("span", { innerHTML: t.item.text }, null, 8, Oa),
            ]),
            _: 1,
          },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  });
const Ra = m(Ga, [["__scopeId", "data-v-0b525393"]]),
  Ua = g({
    __name: "VPNavBarMenuGroup",
    props: { item: {} },
    setup(n) {
      const { page: e } = V();
      return (t, s) => (
        a(),
        b(
          Be,
          {
            class: B({
              VPNavBarMenuGroup: !0,
              active: l(q)(
                l(e).relativePath,
                t.item.activeMatch,
                !!t.item.activeMatch,
              ),
            }),
            button: t.item.text,
            items: t.item.items,
          },
          null,
          8,
          ["class", "button", "items"],
        )
      );
    },
  }),
  ja = (n) => (E("data-v-7f418b0f"), (n = n()), D(), n),
  qa = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu",
  },
  Wa = ja(() =>
    c(
      "span",
      { id: "main-nav-aria-label", class: "visually-hidden" },
      "Main Navigation",
      -1,
    ),
  ),
  Ka = g({
    __name: "VPNavBarMenu",
    setup(n) {
      const { theme: e } = V();
      return (t, s) =>
        l(e).nav
          ? (a(),
            i("nav", qa, [
              Wa,
              (a(!0),
              i(
                T,
                null,
                A(
                  l(e).nav,
                  (o) => (
                    a(),
                    i(
                      T,
                      { key: o.text },
                      [
                        "link" in o
                          ? (a(), b(Ra, { key: 0, item: o }, null, 8, ["item"]))
                          : (a(),
                            b(Ua, { key: 1, item: o }, null, 8, ["item"])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : f("", !0);
    },
  });
const Ya = m(Ka, [["__scopeId", "data-v-7f418b0f"]]);
const Xa = {
    type: "button",
    class: "DocSearch DocSearch-Button",
    "aria-label": "Search",
  },
  Qa = { class: "DocSearch-Button-Container" },
  Ja = c(
    "svg",
    {
      class: "DocSearch-Search-Icon",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      "aria-label": "search icon",
    },
    [
      c("path", {
        d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ],
    -1,
  ),
  Za = { class: "DocSearch-Button-Placeholder" },
  er = c(
    "span",
    { class: "DocSearch-Button-Keys" },
    [
      c("kbd", { class: "DocSearch-Button-Key" }),
      c("kbd", { class: "DocSearch-Button-Key" }, "K"),
    ],
    -1,
  ),
  Ee = g({
    __name: "VPNavBarSearchButton",
    props: { placeholder: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i("button", Xa, [
          c("span", Qa, [Ja, c("span", Za, S(e.placeholder), 1)]),
          er,
        ])
      );
    },
  });
const tr = { id: "local-search" },
  nr = { key: 1, id: "docsearch" },
  sr = g({
    __name: "VPNavBarSearch",
    setup(n) {
      const e = () => null,
        t = () => null,
        { theme: s, localeIndex: o } = V(),
        r = P(!1),
        d = P(!1),
        v = $(() => {
          var I, N, L, W, ee, K, Ae;
          const k =
            ((I = s.value.search) == null ? void 0 : I.options) ??
            s.value.algolia;
          return (
            ((ee =
              (W =
                (L =
                  (N = k == null ? void 0 : k.locales) == null
                    ? void 0
                    : N[o.value]) == null
                  ? void 0
                  : L.translations) == null
                ? void 0
                : W.button) == null
              ? void 0
              : ee.buttonText) ||
            ((Ae =
              (K = k == null ? void 0 : k.translations) == null
                ? void 0
                : K.button) == null
              ? void 0
              : Ae.buttonText) ||
            "Search"
          );
        });
      H(() => {});
      function _() {
        r.value || ((r.value = !0), setTimeout(y, 16));
      }
      function y() {
        const k = new Event("keydown");
        (k.key = "k"),
          (k.metaKey = !0),
          window.dispatchEvent(k),
          setTimeout(() => {
            document.querySelector(".DocSearch-Modal") || y();
          }, 16);
      }
      const w = P(!1),
        M = P("'Meta'");
      H(() => {
        M.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
          ? "'⌘'"
          : "'Ctrl'";
      });
      const C = "";
      return (k, I) => {
        var N;
        return (
          a(),
          i(
            "div",
            {
              class: "VPNavBarSearch",
              style: Fe({ "--vp-meta-key": M.value }),
            },
            [
              l(C) === "local"
                ? (a(),
                  i(
                    T,
                    { key: 0 },
                    [
                      w.value
                        ? (a(),
                          b(
                            l(e),
                            {
                              key: 0,
                              placeholder: v.value,
                              onClose: I[0] || (I[0] = (L) => (w.value = !1)),
                            },
                            null,
                            8,
                            ["placeholder"],
                          ))
                        : f("", !0),
                      c("div", tr, [
                        h(
                          Ee,
                          {
                            placeholder: v.value,
                            onClick: I[1] || (I[1] = (L) => (w.value = !0)),
                          },
                          null,
                          8,
                          ["placeholder"],
                        ),
                      ]),
                    ],
                    64,
                  ))
                : l(C) === "algolia"
                ? (a(),
                  i(
                    T,
                    { key: 1 },
                    [
                      r.value
                        ? (a(),
                          b(
                            l(t),
                            {
                              key: 0,
                              algolia:
                                ((N = l(s).search) == null
                                  ? void 0
                                  : N.options) ?? l(s).algolia,
                              onVnodeBeforeMount:
                                I[2] || (I[2] = (L) => (d.value = !0)),
                            },
                            null,
                            8,
                            ["algolia"],
                          ))
                        : f("", !0),
                      d.value
                        ? f("", !0)
                        : (a(),
                          i("div", nr, [
                            h(
                              Ee,
                              { placeholder: v.value, onClick: _ },
                              null,
                              8,
                              ["placeholder"],
                            ),
                          ])),
                    ],
                    64,
                  ))
                : f("", !0),
            ],
            4,
          )
        );
      };
    },
  });
const or = g({
  __name: "VPNavBarSocialLinks",
  setup(n) {
    const { theme: e } = V();
    return (t, s) =>
      l(e).socialLinks
        ? (a(),
          b(
            Ce,
            { key: 0, class: "VPNavBarSocialLinks", links: l(e).socialLinks },
            null,
            8,
            ["links"],
          ))
        : f("", !0);
  },
});
const ar = m(or, [["__scopeId", "data-v-0394ad82"]]),
  rr = ["href"],
  lr = g({
    __name: "VPNavBarTitle",
    setup(n) {
      const { site: e, theme: t } = V(),
        { hasSidebar: s } = z(),
        { currentLang: o } = Z();
      return (r, d) => (
        a(),
        i(
          "div",
          { class: B(["VPNavBarTitle", { "has-sidebar": l(s) }]) },
          [
            c(
              "a",
              { class: "title", href: l(t).logoLink ?? l(J)(l(o).link) },
              [
                u(r.$slots, "nav-bar-title-before", {}, void 0, !0),
                l(t).logo
                  ? (a(),
                    b(
                      Le,
                      { key: 0, class: "logo", image: l(t).logo },
                      null,
                      8,
                      ["image"],
                    ))
                  : f("", !0),
                l(t).siteTitle
                  ? (a(), i(T, { key: 1 }, [x(S(l(t).siteTitle), 1)], 64))
                  : l(t).siteTitle === void 0
                  ? (a(), i(T, { key: 2 }, [x(S(l(e).title), 1)], 64))
                  : f("", !0),
                u(r.$slots, "nav-bar-title-after", {}, void 0, !0),
              ],
              8,
              rr,
            ),
          ],
          2,
        )
      );
    },
  });
const ir = m(lr, [["__scopeId", "data-v-86d1bed8"]]),
  cr = {},
  ur = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  dr = c("path", { d: "M0 0h24v24H0z", fill: "none" }, null, -1),
  _r = c(
    "path",
    {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v",
    },
    null,
    -1,
  ),
  vr = [dr, _r];
function pr(n, e) {
  return a(), i("svg", ur, vr);
}
const Ke = m(cr, [["render", pr]]),
  hr = { class: "items" },
  fr = { class: "title" },
  mr = g({
    __name: "VPNavBarTranslations",
    setup(n) {
      const { theme: e } = V(),
        { localeLinks: t, currentLang: s } = Z({ correspondingLink: !0 });
      return (o, r) =>
        l(t).length && l(s).label
          ? (a(),
            b(
              Be,
              {
                key: 0,
                class: "VPNavBarTranslations",
                icon: Ke,
                label: l(e).langMenuLabel || "Change language",
              },
              {
                default: p(() => [
                  c("div", hr, [
                    c("p", fr, S(l(s).label), 1),
                    (a(!0),
                    i(
                      T,
                      null,
                      A(
                        l(t),
                        (d) => (
                          a(),
                          b(ue, { key: d.link, item: d }, null, 8, ["item"])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["label"],
            ))
          : f("", !0);
    },
  });
const gr = m(mr, [["__scopeId", "data-v-74abcbb9"]]),
  yr = (n) => (E("data-v-0937f67c"), (n = n()), D(), n),
  br = { class: "container" },
  kr = { class: "title" },
  $r = { class: "content" },
  Pr = yr(() => c("div", { class: "curtain" }, null, -1)),
  Vr = { class: "content-body" },
  wr = g({
    __name: "VPNavBar",
    props: { isScreenOpen: { type: Boolean } },
    emits: ["toggle-screen"],
    setup(n) {
      const { y: e } = Ge(),
        { hasSidebar: t } = z(),
        { frontmatter: s } = V(),
        o = P({});
      return (
        ge(() => {
          var r;
          o.value = {
            "has-sidebar": t.value,
            top:
              ((r = s.value) == null ? void 0 : r.layout) === "home" &&
              e.value === 0,
          };
        }),
        (r, d) => (
          a(),
          i(
            "div",
            { class: B(["VPNavBar", o.value]) },
            [
              c("div", br, [
                c("div", kr, [
                  h(ir, null, {
                    "nav-bar-title-before": p(() => [
                      u(r.$slots, "nav-bar-title-before", {}, void 0, !0),
                    ]),
                    "nav-bar-title-after": p(() => [
                      u(r.$slots, "nav-bar-title-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                ]),
                c("div", $r, [
                  Pr,
                  c("div", Vr, [
                    u(r.$slots, "nav-bar-content-before", {}, void 0, !0),
                    h(sr, { class: "search" }),
                    h(Ya, { class: "menu" }),
                    h(gr, { class: "translations" }),
                    h(Oo, { class: "appearance" }),
                    h(ar, { class: "social-links" }),
                    h(Aa, { class: "extra" }),
                    u(r.$slots, "nav-bar-content-after", {}, void 0, !0),
                    h(
                      Fa,
                      {
                        class: "hamburger",
                        active: r.isScreenOpen,
                        onClick:
                          d[0] || (d[0] = (v) => r.$emit("toggle-screen")),
                      },
                      null,
                      8,
                      ["active"],
                    ),
                  ]),
                ]),
              ]),
            ],
            2,
          )
        )
      );
    },
  });
const Sr = m(wr, [["__scopeId", "data-v-0937f67c"]]);
function Lr(n) {
  if (Array.isArray(n)) {
    for (var e = 0, t = Array(n.length); e < n.length; e++) t[e] = n[e];
    return t;
  } else return Array.from(n);
}
var Ie = !1;
if (typeof window < "u") {
  var De = {
    get passive() {
      Ie = !0;
    },
  };
  window.addEventListener("testPassive", null, De),
    window.removeEventListener("testPassive", null, De);
}
var oe =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  j = [],
  ae = !1,
  Ne = -1,
  Y = void 0,
  O = void 0,
  X = void 0,
  Ye = function (e) {
    return j.some(function (t) {
      return !!(t.options.allowTouchMove && t.options.allowTouchMove(e));
    });
  },
  re = function (e) {
    var t = e || window.event;
    return Ye(t.target) || t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1);
  },
  Mr = function (e) {
    if (X === void 0) {
      var t = !!e && e.reserveScrollBarGap === !0,
        s = window.innerWidth - document.documentElement.clientWidth;
      if (t && s > 0) {
        var o = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right"),
          10,
        );
        (X = document.body.style.paddingRight),
          (document.body.style.paddingRight = o + s + "px");
      }
    }
    Y === void 0 &&
      ((Y = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  Tr = function () {
    X !== void 0 && ((document.body.style.paddingRight = X), (X = void 0)),
      Y !== void 0 && ((document.body.style.overflow = Y), (Y = void 0));
  },
  Br = function () {
    return window.requestAnimationFrame(function () {
      if (O === void 0) {
        O = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
        };
        var e = window,
          t = e.scrollY,
          s = e.scrollX,
          o = e.innerHeight;
        (document.body.style.position = "fixed"),
          (document.body.style.top = -t),
          (document.body.style.left = -s),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var r = o - window.innerHeight;
              r && t >= o && (document.body.style.top = -(t + r));
            });
          }, 300);
      }
    });
  },
  Cr = function () {
    if (O !== void 0) {
      var e = -parseInt(document.body.style.top, 10),
        t = -parseInt(document.body.style.left, 10);
      (document.body.style.position = O.position),
        (document.body.style.top = O.top),
        (document.body.style.left = O.left),
        window.scrollTo(t, e),
        (O = void 0);
    }
  },
  Ir = function (e) {
    return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
  },
  Nr = function (e, t) {
    var s = e.targetTouches[0].clientY - Ne;
    return Ye(e.target)
      ? !1
      : (t && t.scrollTop === 0 && s > 0) || (Ir(t) && s < 0)
      ? re(e)
      : (e.stopPropagation(), !0);
  },
  Xe = function (e, t) {
    if (!e) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.",
      );
      return;
    }
    if (
      !j.some(function (o) {
        return o.targetElement === e;
      })
    ) {
      var s = { targetElement: e, options: t || {} };
      (j = [].concat(Lr(j), [s])),
        oe ? Br() : Mr(t),
        oe &&
          ((e.ontouchstart = function (o) {
            o.targetTouches.length === 1 && (Ne = o.targetTouches[0].clientY);
          }),
          (e.ontouchmove = function (o) {
            o.targetTouches.length === 1 && Nr(o, e);
          }),
          ae ||
            (document.addEventListener(
              "touchmove",
              re,
              Ie ? { passive: !1 } : void 0,
            ),
            (ae = !0)));
    }
  },
  Qe = function () {
    oe &&
      (j.forEach(function (e) {
        (e.targetElement.ontouchstart = null),
          (e.targetElement.ontouchmove = null);
      }),
      ae &&
        (document.removeEventListener(
          "touchmove",
          re,
          Ie ? { passive: !1 } : void 0,
        ),
        (ae = !1)),
      (Ne = -1)),
      oe ? Cr() : Tr(),
      (j = []);
  };
const Ar = g({
  __name: "VPNavScreenMenuLink",
  props: { item: {} },
  setup(n) {
    const e = be("close-screen");
    return (t, s) => (
      a(),
      b(
        F,
        {
          class: "VPNavScreenMenuLink",
          href: t.item.link,
          target: t.item.target,
          rel: t.item.rel,
          onClick: l(e),
        },
        { default: p(() => [x(S(t.item.text), 1)]), _: 1 },
        8,
        ["href", "target", "rel", "onClick"],
      )
    );
  },
});
const xr = m(Ar, [["__scopeId", "data-v-30be0acb"]]),
  Hr = {},
  Er = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Dr = c(
    "path",
    {
      d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z",
    },
    null,
    -1,
  ),
  zr = [Dr];
function Fr(n, e) {
  return a(), i("svg", Er, zr);
}
const Or = m(Hr, [["render", Fr]]),
  Gr = g({
    __name: "VPNavScreenMenuGroupLink",
    props: { item: {} },
    setup(n) {
      const e = be("close-screen");
      return (t, s) => (
        a(),
        b(
          F,
          {
            class: "VPNavScreenMenuGroupLink",
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: l(e),
          },
          { default: p(() => [x(S(t.item.text), 1)]), _: 1 },
          8,
          ["href", "target", "rel", "onClick"],
        )
      );
    },
  });
const Je = m(Gr, [["__scopeId", "data-v-6656c42a"]]),
  Rr = { class: "VPNavScreenMenuGroupSection" },
  Ur = { key: 0, class: "title" },
  jr = g({
    __name: "VPNavScreenMenuGroupSection",
    props: { text: {}, items: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i("div", Rr, [
          e.text ? (a(), i("p", Ur, S(e.text), 1)) : f("", !0),
          (a(!0),
          i(
            T,
            null,
            A(
              e.items,
              (s) => (a(), b(Je, { key: s.text, item: s }, null, 8, ["item"])),
            ),
            128,
          )),
        ])
      );
    },
  });
const qr = m(jr, [["__scopeId", "data-v-8133b170"]]),
  Wr = ["aria-controls", "aria-expanded"],
  Kr = { class: "button-text" },
  Yr = ["id"],
  Xr = { key: 1, class: "group" },
  Qr = g({
    __name: "VPNavScreenMenuGroup",
    props: { text: {}, items: {} },
    setup(n) {
      const e = n,
        t = P(!1),
        s = $(() => `NavScreenGroup-${e.text.replace(" ", "-").toLowerCase()}`);
      function o() {
        t.value = !t.value;
      }
      return (r, d) => (
        a(),
        i(
          "div",
          { class: B(["VPNavScreenMenuGroup", { open: t.value }]) },
          [
            c(
              "button",
              {
                class: "button",
                "aria-controls": s.value,
                "aria-expanded": t.value,
                onClick: o,
              },
              [c("span", Kr, S(r.text), 1), h(Or, { class: "button-icon" })],
              8,
              Wr,
            ),
            c(
              "div",
              { id: s.value, class: "items" },
              [
                (a(!0),
                i(
                  T,
                  null,
                  A(
                    r.items,
                    (v) => (
                      a(),
                      i(
                        T,
                        { key: v.text },
                        [
                          "link" in v
                            ? (a(),
                              i("div", { key: v.text, class: "item" }, [
                                h(Je, { item: v }, null, 8, ["item"]),
                              ]))
                            : (a(),
                              i("div", Xr, [
                                h(
                                  qr,
                                  { text: v.text, items: v.items },
                                  null,
                                  8,
                                  ["text", "items"],
                                ),
                              ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              Yr,
            ),
          ],
          2,
        )
      );
    },
  });
const Jr = m(Qr, [["__scopeId", "data-v-338a1689"]]),
  Zr = { key: 0, class: "VPNavScreenMenu" },
  el = g({
    __name: "VPNavScreenMenu",
    setup(n) {
      const { theme: e } = V();
      return (t, s) =>
        l(e).nav
          ? (a(),
            i("nav", Zr, [
              (a(!0),
              i(
                T,
                null,
                A(
                  l(e).nav,
                  (o) => (
                    a(),
                    i(
                      T,
                      { key: o.text },
                      [
                        "link" in o
                          ? (a(), b(xr, { key: 0, item: o }, null, 8, ["item"]))
                          : (a(),
                            b(
                              Jr,
                              { key: 1, text: o.text || "", items: o.items },
                              null,
                              8,
                              ["text", "items"],
                            )),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : f("", !0);
    },
  }),
  tl = { key: 0, class: "VPNavScreenAppearance" },
  nl = { class: "text" },
  sl = g({
    __name: "VPNavScreenAppearance",
    setup(n) {
      const { site: e, theme: t } = V();
      return (s, o) =>
        l(e).appearance
          ? (a(),
            i("div", tl, [
              c("p", nl, S(l(t).darkModeSwitchLabel || "Appearance"), 1),
              h(Me),
            ]))
          : f("", !0);
    },
  });
const ol = m(sl, [["__scopeId", "data-v-add8f686"]]),
  al = { class: "list" },
  rl = g({
    __name: "VPNavScreenTranslations",
    setup(n) {
      const { localeLinks: e, currentLang: t } = Z({ correspondingLink: !0 }),
        s = P(!1);
      function o() {
        s.value = !s.value;
      }
      return (r, d) =>
        l(e).length && l(t).label
          ? (a(),
            i(
              "div",
              {
                key: 0,
                class: B(["VPNavScreenTranslations", { open: s.value }]),
              },
              [
                c("button", { class: "title", onClick: o }, [
                  h(Ke, { class: "icon lang" }),
                  x(" " + S(l(t).label) + " ", 1),
                  h(We, { class: "icon chevron" }),
                ]),
                c("ul", al, [
                  (a(!0),
                  i(
                    T,
                    null,
                    A(
                      l(e),
                      (v) => (
                        a(),
                        i("li", { key: v.link, class: "item" }, [
                          h(
                            F,
                            { class: "link", href: v.link },
                            { default: p(() => [x(S(v.text), 1)]), _: 2 },
                            1032,
                            ["href"],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : f("", !0);
    },
  });
const ll = m(rl, [["__scopeId", "data-v-d72aa483"]]),
  il = g({
    __name: "VPNavScreenSocialLinks",
    setup(n) {
      const { theme: e } = V();
      return (t, s) =>
        l(e).socialLinks
          ? (a(),
            b(
              Ce,
              {
                key: 0,
                class: "VPNavScreenSocialLinks",
                links: l(e).socialLinks,
              },
              null,
              8,
              ["links"],
            ))
          : f("", !0);
    },
  }),
  cl = { class: "container" },
  ul = g({
    __name: "VPNavScreen",
    props: { open: { type: Boolean } },
    setup(n) {
      const e = P(null);
      function t() {
        Xe(e.value, { reserveScrollBarGap: !0 });
      }
      function s() {
        Qe();
      }
      return (o, r) => (
        a(),
        b(
          he,
          { name: "fade", onEnter: t, onAfterLeave: s },
          {
            default: p(() => [
              o.open
                ? (a(),
                  i(
                    "div",
                    {
                      key: 0,
                      class: "VPNavScreen",
                      ref_key: "screen",
                      ref: e,
                      id: "VPNavScreen",
                    },
                    [
                      c("div", cl, [
                        u(
                          o.$slots,
                          "nav-screen-content-before",
                          {},
                          void 0,
                          !0,
                        ),
                        h(el, { class: "menu" }),
                        h(ll, { class: "translations" }),
                        h(ol, { class: "appearance" }),
                        h(il, { class: "social-links" }),
                        u(o.$slots, "nav-screen-content-after", {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : f("", !0),
            ]),
            _: 3,
          },
        )
      );
    },
  });
const dl = m(ul, [["__scopeId", "data-v-69fcc70f"]]),
  _l = { class: "VPNav" },
  vl = g({
    __name: "VPNav",
    setup(n) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: s } = yo();
      return (
        ne("close-screen", t),
        (o, r) => (
          a(),
          i("header", _l, [
            h(
              Sr,
              { "is-screen-open": l(e), onToggleScreen: l(s) },
              {
                "nav-bar-title-before": p(() => [
                  u(o.$slots, "nav-bar-title-before", {}, void 0, !0),
                ]),
                "nav-bar-title-after": p(() => [
                  u(o.$slots, "nav-bar-title-after", {}, void 0, !0),
                ]),
                "nav-bar-content-before": p(() => [
                  u(o.$slots, "nav-bar-content-before", {}, void 0, !0),
                ]),
                "nav-bar-content-after": p(() => [
                  u(o.$slots, "nav-bar-content-after", {}, void 0, !0),
                ]),
                _: 3,
              },
              8,
              ["is-screen-open", "onToggleScreen"],
            ),
            h(
              dl,
              { open: l(e) },
              {
                "nav-screen-content-before": p(() => [
                  u(o.$slots, "nav-screen-content-before", {}, void 0, !0),
                ]),
                "nav-screen-content-after": p(() => [
                  u(o.$slots, "nav-screen-content-after", {}, void 0, !0),
                ]),
                _: 3,
              },
              8,
              ["open"],
            ),
          ])
        )
      );
    },
  });
const pl = m(vl, [["__scopeId", "data-v-7e5bc4a5"]]),
  hl = (n) => (E("data-v-9b797284"), (n = n()), D(), n),
  fl = ["role", "tabindex"],
  ml = hl(() => c("div", { class: "indicator" }, null, -1)),
  gl = ["onKeydown"],
  yl = { key: 1, class: "items" },
  bl = g({
    __name: "VPSidebarItem",
    props: { item: {}, depth: {} },
    setup(n) {
      const e = n,
        {
          collapsed: t,
          collapsible: s,
          isLink: o,
          isActiveLink: r,
          hasActiveLink: d,
          hasChildren: v,
          toggle: _,
        } = Ft($(() => e.item)),
        y = $(() => (v.value ? "section" : "div")),
        w = $(() => (o.value ? "a" : "div")),
        M = $(() =>
          v.value ? (e.depth + 2 === 7 ? "p" : `h${e.depth + 2}`) : "p",
        ),
        C = $(() => (o.value ? void 0 : "button")),
        k = $(() => [
          [`level-${e.depth}`],
          { collapsible: s.value },
          { collapsed: t.value },
          { "is-link": o.value },
          { "is-active": r.value },
          { "has-active": d.value },
        ]);
      function I(L) {
        ("key" in L && L.key !== "Enter") || (!e.item.link && _());
      }
      function N() {
        e.item.link && _();
      }
      return (L, W) => {
        const ee = U("VPSidebarItem", !0);
        return (
          a(),
          b(
            G(y.value),
            { class: B(["VPSidebarItem", k.value]) },
            {
              default: p(() => [
                L.item.text
                  ? (a(),
                    i(
                      "div",
                      te(
                        { key: 0, class: "item", role: C.value },
                        dt(L.item.items ? { click: I, keydown: I } : {}, !0),
                        { tabindex: L.item.items && 0 },
                      ),
                      [
                        ml,
                        L.item.link
                          ? (a(),
                            b(
                              F,
                              {
                                key: 0,
                                tag: w.value,
                                class: "link",
                                href: L.item.link,
                              },
                              {
                                default: p(() => [
                                  (a(),
                                  b(
                                    G(M.value),
                                    { class: "text", innerHTML: L.item.text },
                                    null,
                                    8,
                                    ["innerHTML"],
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ["tag", "href"],
                            ))
                          : (a(),
                            b(
                              G(M.value),
                              { key: 1, class: "text", innerHTML: L.item.text },
                              null,
                              8,
                              ["innerHTML"],
                            )),
                        L.item.collapsed != null
                          ? (a(),
                            i(
                              "div",
                              {
                                key: 2,
                                class: "caret",
                                role: "button",
                                "aria-label": "toggle section",
                                onClick: N,
                                onKeydown: ut(N, ["enter"]),
                                tabindex: "0",
                              },
                              [h(Se, { class: "caret-icon" })],
                              40,
                              gl,
                            ))
                          : f("", !0),
                      ],
                      16,
                      fl,
                    ))
                  : f("", !0),
                L.item.items && L.item.items.length
                  ? (a(),
                    i("div", yl, [
                      L.depth < 5
                        ? (a(!0),
                          i(
                            T,
                            { key: 0 },
                            A(
                              L.item.items,
                              (K) => (
                                a(),
                                b(
                                  ee,
                                  { key: K.text, item: K, depth: L.depth + 1 },
                                  null,
                                  8,
                                  ["item", "depth"],
                                )
                              ),
                            ),
                            128,
                          ))
                        : f("", !0),
                    ]))
                  : f("", !0),
              ]),
              _: 1,
            },
            8,
            ["class"],
          )
        );
      };
    },
  });
const kl = m(bl, [["__scopeId", "data-v-9b797284"]]),
  Ze = (n) => (E("data-v-845b8fc6"), (n = n()), D(), n),
  $l = Ze(() => c("div", { class: "curtain" }, null, -1)),
  Pl = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1",
  },
  Vl = Ze(() =>
    c(
      "span",
      { class: "visually-hidden", id: "sidebar-aria-label" },
      " Sidebar Navigation ",
      -1,
    ),
  ),
  wl = g({
    __name: "VPSidebar",
    props: { open: { type: Boolean } },
    setup(n) {
      const e = n,
        { sidebarGroups: t, hasSidebar: s } = z();
      let o = P(null);
      function r() {
        Xe(o.value, { reserveScrollBarGap: !0 });
      }
      function d() {
        Qe();
      }
      return (
        ge(async () => {
          var v;
          e.open ? (r(), (v = o.value) == null || v.focus()) : d();
        }),
        (v, _) =>
          l(s)
            ? (a(),
              i(
                "aside",
                {
                  key: 0,
                  class: B(["VPSidebar", { open: v.open }]),
                  ref_key: "navEl",
                  ref: o,
                  onClick: _[0] || (_[0] = _t(() => {}, ["stop"])),
                },
                [
                  $l,
                  c("nav", Pl, [
                    Vl,
                    u(v.$slots, "sidebar-nav-before", {}, void 0, !0),
                    (a(!0),
                    i(
                      T,
                      null,
                      A(
                        l(t),
                        (y) => (
                          a(),
                          i("div", { key: y.text, class: "group" }, [
                            h(kl, { item: y, depth: 0 }, null, 8, ["item"]),
                          ])
                        ),
                      ),
                      128,
                    )),
                    u(v.$slots, "sidebar-nav-after", {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : f("", !0)
      );
    },
  });
const Sl = m(wl, [["__scopeId", "data-v-845b8fc6"]]),
  Ll = g({
    __name: "VPSkipLink",
    setup(n) {
      const e = ce(),
        t = P();
      R(
        () => e.path,
        () => t.value.focus(),
      );
      function s({ target: o }) {
        const r = document.getElementById(decodeURIComponent(o.hash).slice(1));
        if (r) {
          const d = () => {
            r.removeAttribute("tabindex"), r.removeEventListener("blur", d);
          };
          r.setAttribute("tabindex", "-1"),
            r.addEventListener("blur", d),
            r.focus(),
            window.scrollTo(0, 0);
        }
      }
      return (o, r) => (
        a(),
        i(
          T,
          null,
          [
            c(
              "span",
              { ref_key: "backToTop", ref: t, tabindex: "-1" },
              null,
              512,
            ),
            c(
              "a",
              {
                href: "#VPContent",
                class: "VPSkipLink visually-hidden",
                onClick: s,
              },
              " Skip to content ",
            ),
          ],
          64,
        )
      );
    },
  });
const Ml = m(Ll, [["__scopeId", "data-v-ae3e3f51"]]),
  Tl = g({
    __name: "Layout",
    setup(n) {
      const { isOpen: e, open: t, close: s } = z(),
        o = ce();
      R(() => o.path, s),
        zt(e, s),
        ne("close-sidebar", s),
        ne("is-sidebar-open", e);
      const { frontmatter: r } = V(),
        d = vt(),
        v = $(() => !!d["home-hero-image"]);
      return (
        ne("hero-image-slot-exists", v),
        (_, y) => {
          const w = U("Content");
          return l(r).layout !== !1
            ? (a(),
              i(
                "div",
                { key: 0, class: B(["Layout", l(r).pageClass]) },
                [
                  u(_.$slots, "layout-top", {}, void 0, !0),
                  h(Ml),
                  h(
                    gt,
                    { class: "backdrop", show: l(e), onClick: l(s) },
                    null,
                    8,
                    ["show", "onClick"],
                  ),
                  l(r).navbar !== !1
                    ? (a(),
                      b(
                        pl,
                        { key: 0 },
                        {
                          "nav-bar-title-before": p(() => [
                            u(_.$slots, "nav-bar-title-before", {}, void 0, !0),
                          ]),
                          "nav-bar-title-after": p(() => [
                            u(_.$slots, "nav-bar-title-after", {}, void 0, !0),
                          ]),
                          "nav-bar-content-before": p(() => [
                            u(
                              _.$slots,
                              "nav-bar-content-before",
                              {},
                              void 0,
                              !0,
                            ),
                          ]),
                          "nav-bar-content-after": p(() => [
                            u(
                              _.$slots,
                              "nav-bar-content-after",
                              {},
                              void 0,
                              !0,
                            ),
                          ]),
                          "nav-screen-content-before": p(() => [
                            u(
                              _.$slots,
                              "nav-screen-content-before",
                              {},
                              void 0,
                              !0,
                            ),
                          ]),
                          "nav-screen-content-after": p(() => [
                            u(
                              _.$slots,
                              "nav-screen-content-after",
                              {},
                              void 0,
                              !0,
                            ),
                          ]),
                          _: 3,
                        },
                      ))
                    : f("", !0),
                  h(go, { open: l(e), onOpenMenu: l(t) }, null, 8, [
                    "open",
                    "onOpenMenu",
                  ]),
                  h(
                    Sl,
                    { open: l(e) },
                    {
                      "sidebar-nav-before": p(() => [
                        u(_.$slots, "sidebar-nav-before", {}, void 0, !0),
                      ]),
                      "sidebar-nav-after": p(() => [
                        u(_.$slots, "sidebar-nav-after", {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ["open"],
                  ),
                  h(Ys, null, {
                    "page-top": p(() => [
                      u(_.$slots, "page-top", {}, void 0, !0),
                    ]),
                    "page-bottom": p(() => [
                      u(_.$slots, "page-bottom", {}, void 0, !0),
                    ]),
                    "not-found": p(() => [
                      u(_.$slots, "not-found", {}, void 0, !0),
                    ]),
                    "home-hero-before": p(() => [
                      u(_.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-info": p(() => [
                      u(_.$slots, "home-hero-info", {}, void 0, !0),
                    ]),
                    "home-hero-image": p(() => [
                      u(_.$slots, "home-hero-image", {}, void 0, !0),
                    ]),
                    "home-hero-after": p(() => [
                      u(_.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": p(() => [
                      u(_.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": p(() => [
                      u(_.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    "doc-footer-before": p(() => [
                      u(_.$slots, "doc-footer-before", {}, void 0, !0),
                    ]),
                    "doc-before": p(() => [
                      u(_.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": p(() => [
                      u(_.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "doc-top": p(() => [
                      u(_.$slots, "doc-top", {}, void 0, !0),
                    ]),
                    "doc-bottom": p(() => [
                      u(_.$slots, "doc-bottom", {}, void 0, !0),
                    ]),
                    "aside-top": p(() => [
                      u(_.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-bottom": p(() => [
                      u(_.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    "aside-outline-before": p(() => [
                      u(_.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": p(() => [
                      u(_.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": p(() => [
                      u(_.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": p(() => [
                      u(_.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  h(eo),
                  u(_.$slots, "layout-bottom", {}, void 0, !0),
                ],
                2,
              ))
            : (a(), b(w, { key: 1 }));
        }
      );
    },
  });
const Bl = m(Tl, [["__scopeId", "data-v-255ec12d"]]);
const Il = {
  Layout: Bl,
  enhanceApp: ({ app: n }) => {
    n.component("Badge", ht);
  },
};
export { Il as t };

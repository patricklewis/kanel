import {
  A as s,
  a0 as i,
  a1 as p,
  a2 as u,
  a3 as c,
  a4 as l,
  a5 as d,
  a6 as f,
  a7 as m,
  a8 as h,
  a9 as A,
  aa as g,
  d as P,
  u as v,
  j as w,
  x as y,
  ab as C,
  ac as R,
  ad as _,
  ae as b,
} from "./chunks/framework.cbdddcbb.js";
import { t as E } from "./chunks/theme.659e16f8.js";
const D = { ...E };
function r(e) {
  if (e.extends) {
    const a = r(e.extends);
    return {
      ...a,
      ...e,
      async enhanceApp(t) {
        a.enhanceApp && (await a.enhanceApp(t)),
          e.enhanceApp && (await e.enhanceApp(t));
      },
    };
  }
  return e;
}
const o = r(D),
  T = P({
    name: "VitePressApp",
    setup() {
      const { site: e } = v();
      return (
        w(() => {
          y(() => {
            (document.documentElement.lang = e.value.lang),
              (document.documentElement.dir = e.value.dir);
          });
        }),
        C(),
        R(),
        _(),
        o.setup && o.setup(),
        () => b(o.Layout)
      );
    },
  });
async function j() {
  const e = O(),
    a = x();
  a.provide(p, e);
  const t = u(e.route);
  return (
    a.provide(c, t),
    a.component("Content", l),
    a.component("ClientOnly", d),
    Object.defineProperties(a.config.globalProperties, {
      $frontmatter: {
        get() {
          return t.frontmatter.value;
        },
      },
      $params: {
        get() {
          return t.page.value.params;
        },
      },
    }),
    o.enhanceApp && (await o.enhanceApp({ app: a, router: e, siteData: f })),
    { app: a, router: e, data: t }
  );
}
function x() {
  return m(T);
}
function O() {
  let e = s,
    a;
  return h((t) => {
    let n = A(t);
    return n
      ? (e && (a = n),
        (e || a === n) && (n = n.replace(/\.js$/, ".lean.js")),
        s && (e = !1),
        g(() => import(n), []))
      : null;
  }, o.NotFound);
}
s &&
  j().then(({ app: e, router: a, data: t }) => {
    a.go().then(() => {
      i(a.route, t.site), e.mount("#app");
    });
  });
export { j as createApp };

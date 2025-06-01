import Ce, { useState as we } from "react";
var X = { exports: {} }, I = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var z, Te;
function Se() {
  if (Te) return z;
  Te = 1;
  var R = Object.getOwnPropertySymbols, j = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
  function y(h) {
    if (h == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(h);
  }
  function P() {
    try {
      if (!Object.assign)
        return !1;
      var h = new String("abc");
      if (h[5] = "de", Object.getOwnPropertyNames(h)[0] === "5")
        return !1;
      for (var m = {}, f = 0; f < 10; f++)
        m["_" + String.fromCharCode(f)] = f;
      var l = Object.getOwnPropertyNames(m).map(function(o) {
        return m[o];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(o) {
        u[o] = o;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return z = P() ? Object.assign : function(h, m) {
    for (var f, l = y(h), u, o = 1; o < arguments.length; o++) {
      f = Object(arguments[o]);
      for (var _ in f)
        j.call(f, _) && (l[_] = f[_]);
      if (R) {
        u = R(f);
        for (var g = 0; g < u.length; g++)
          b.call(f, u[g]) && (l[u[g]] = f[u[g]]);
      }
    }
    return l;
  }, z;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function ar() {
  if (je) return I;
  je = 1, Se();
  var R = Ce, j = 60103;
  if (I.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var b = Symbol.for;
    j = b("react.element"), I.Fragment = b("react.fragment");
  }
  var y = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = Object.prototype.hasOwnProperty, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(f, l, u) {
    var o, _ = {}, g = null, x = null;
    u !== void 0 && (g = "" + u), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (o in l) P.call(l, o) && !h.hasOwnProperty(o) && (_[o] = l[o]);
    if (f && f.defaultProps) for (o in l = f.defaultProps, l) _[o] === void 0 && (_[o] = l[o]);
    return { $$typeof: j, type: f, key: g, ref: x, props: _, _owner: y.current };
  }
  return I.jsx = m, I.jsxs = m, I;
}
var H = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function ir() {
  return Pe || (Pe = 1, function(R) {
    process.env.NODE_ENV !== "production" && function() {
      var j = Ce, b = Se(), y = 60103, P = 60106;
      R.Fragment = 60107;
      var h = 60108, m = 60114, f = 60109, l = 60110, u = 60112, o = 60113, _ = 60120, g = 60115, x = 60116, S = 60121, $ = 60122, Z = 60117, Q = 60129, ee = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var v = Symbol.for;
        y = v("react.element"), P = v("react.portal"), R.Fragment = v("react.fragment"), h = v("react.strict_mode"), m = v("react.profiler"), f = v("react.provider"), l = v("react.context"), u = v("react.forward_ref"), o = v("react.suspense"), _ = v("react.suspense_list"), g = v("react.memo"), x = v("react.lazy"), S = v("react.block"), $ = v("react.server.block"), Z = v("react.fundamental"), v("react.scope"), v("react.opaque.id"), Q = v("react.debug_trace_mode"), v("react.offscreen"), ee = v("react.legacy_hidden");
      }
      var re = typeof Symbol == "function" && Symbol.iterator, ke = "@@iterator";
      function Ae(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = re && e[re] || e[ke];
        return typeof r == "function" ? r : null;
      }
      var k = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function O(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          De("error", e, t);
        }
      }
      function De(e, r, t) {
        {
          var n = k.ReactDebugCurrentFrame, c = n.getStackAddendum();
          c !== "" && (r += "%s", t = t.concat([c]));
          var s = t.map(function(i) {
            return "" + i;
          });
          s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
        }
      }
      var Ie = !1;
      function Ye(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === R.Fragment || e === m || e === Q || e === h || e === o || e === _ || e === ee || Ie || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === g || e.$$typeof === f || e.$$typeof === l || e.$$typeof === u || e.$$typeof === Z || e.$$typeof === S || e[0] === $));
      }
      function $e(e, r, t) {
        var n = r.displayName || r.name || "";
        return e.displayName || (n !== "" ? t + "(" + n + ")" : t);
      }
      function te(e) {
        return e.displayName || "Context";
      }
      function C(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && O("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case R.Fragment:
            return "Fragment";
          case P:
            return "Portal";
          case m:
            return "Profiler";
          case h:
            return "StrictMode";
          case o:
            return "Suspense";
          case _:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case l:
              var r = e;
              return te(r) + ".Consumer";
            case f:
              var t = e;
              return te(t._context) + ".Provider";
            case u:
              return $e(e, e.render, "ForwardRef");
            case g:
              return C(e.type);
            case S:
              return C(e._render);
            case x: {
              var n = e, c = n._payload, s = n._init;
              try {
                return C(s(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Y = 0, ne, ae, ie, oe, ue, se, ce;
      function fe() {
      }
      fe.__reactDisabledLog = !0;
      function We() {
        {
          if (Y === 0) {
            ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, se = console.groupCollapsed, ce = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: fe,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Y++;
        }
      }
      function Fe() {
        {
          if (Y--, Y === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: b({}, e, {
                value: ne
              }),
              info: b({}, e, {
                value: ae
              }),
              warn: b({}, e, {
                value: ie
              }),
              error: b({}, e, {
                value: oe
              }),
              group: b({}, e, {
                value: ue
              }),
              groupCollapsed: b({}, e, {
                value: se
              }),
              groupEnd: b({}, e, {
                value: ce
              })
            });
          }
          Y < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var U = k.ReactCurrentDispatcher, V;
      function W(e, r, t) {
        {
          if (V === void 0)
            try {
              throw Error();
            } catch (c) {
              var n = c.stack.trim().match(/\n( *(at )?)/);
              V = n && n[1] || "";
            }
          return `
` + V + e;
        }
      }
      var N = !1, F;
      {
        var Le = typeof WeakMap == "function" ? WeakMap : Map;
        F = new Le();
      }
      function le(e, r) {
        if (!e || N)
          return "";
        {
          var t = F.get(e);
          if (t !== void 0)
            return t;
        }
        var n;
        N = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var s;
        s = U.current, U.current = null, We();
        try {
          if (r) {
            var i = function() {
              throw Error();
            };
            if (Object.defineProperty(i.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(i, []);
              } catch (T) {
                n = T;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (T) {
                n = T;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (T) {
              n = T;
            }
            e();
          }
        } catch (T) {
          if (T && n && typeof T.stack == "string") {
            for (var a = T.stack.split(`
`), E = n.stack.split(`
`), d = a.length - 1, p = E.length - 1; d >= 1 && p >= 0 && a[d] !== E[p]; )
              p--;
            for (; d >= 1 && p >= 0; d--, p--)
              if (a[d] !== E[p]) {
                if (d !== 1 || p !== 1)
                  do
                    if (d--, p--, p < 0 || a[d] !== E[p]) {
                      var w = `
` + a[d].replace(" at new ", " at ");
                      return typeof e == "function" && F.set(e, w), w;
                    }
                  while (d >= 1 && p >= 0);
                break;
              }
          }
        } finally {
          N = !1, U.current = s, Fe(), Error.prepareStackTrace = c;
        }
        var D = e ? e.displayName || e.name : "", xe = D ? W(D) : "";
        return typeof e == "function" && F.set(e, xe), xe;
      }
      function de(e, r, t) {
        return le(e, !1);
      }
      function Me(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function L(e, r, t) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return le(e, Me(e));
        if (typeof e == "string")
          return W(e);
        switch (e) {
          case o:
            return W("Suspense");
          case _:
            return W("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case u:
              return de(e.render);
            case g:
              return L(e.type, r, t);
            case S:
              return de(e._render);
            case x: {
              var n = e, c = n._payload, s = n._init;
              try {
                return L(s(c), r, t);
              } catch {
              }
            }
          }
        return "";
      }
      var ve = {}, pe = k.ReactDebugCurrentFrame;
      function M(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          pe.setExtraStackFrame(t);
        } else
          pe.setExtraStackFrame(null);
      }
      function Ue(e, r, t, n, c) {
        {
          var s = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var i in e)
            if (s(e, i)) {
              var a = void 0;
              try {
                if (typeof e[i] != "function") {
                  var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (d) {
                a = d;
              }
              a && !(a instanceof Error) && (M(c), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, M(c), O("Failed %s type: %s", t, a.message), M(null));
            }
        }
      }
      var ge = k.ReactCurrentOwner, B = Object.prototype.hasOwnProperty, Ve = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, he, _e;
      function Ne(e) {
        if (B.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Be(e) {
        if (B.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function qe(e, r) {
        typeof e.ref == "string" && ge.current;
      }
      function Ge(e, r) {
        {
          var t = function() {
            he || (he = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: t,
            configurable: !0
          });
        }
      }
      function Je(e, r) {
        {
          var t = function() {
            _e || (_e = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: t,
            configurable: !0
          });
        }
      }
      var ze = function(e, r, t, n, c, s, i) {
        var a = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: y,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: t,
          props: i,
          // Record the component responsible for creating this element.
          _owner: s
        };
        return a._store = {}, Object.defineProperty(a._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(a, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n
        }), Object.defineProperty(a, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
      };
      function He(e, r, t, n, c) {
        {
          var s, i = {}, a = null, E = null;
          t !== void 0 && (a = "" + t), Be(r) && (a = "" + r.key), Ne(r) && (E = r.ref, qe(r, c));
          for (s in r)
            B.call(r, s) && !Ve.hasOwnProperty(s) && (i[s] = r[s]);
          if (e && e.defaultProps) {
            var d = e.defaultProps;
            for (s in d)
              i[s] === void 0 && (i[s] = d[s]);
          }
          if (a || E) {
            var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            a && Ge(i, p), E && Je(i, p);
          }
          return ze(e, a, E, c, n, ge.current, i);
        }
      }
      var q = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
      function A(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          Ee.setExtraStackFrame(t);
        } else
          Ee.setExtraStackFrame(null);
      }
      var G;
      G = !1;
      function J(e) {
        return typeof e == "object" && e !== null && e.$$typeof === y;
      }
      function Re() {
        {
          if (q.current) {
            var e = C(q.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Ke(e) {
        return "";
      }
      var be = {};
      function Xe(e) {
        {
          var r = Re();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function me(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var t = Xe(r);
          if (be[t])
            return;
          be[t] = !0;
          var n = "";
          e && e._owner && e._owner !== q.current && (n = " It was passed a child from " + C(e._owner.type) + "."), A(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
        }
      }
      function Oe(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              J(n) && me(n, r);
            }
          else if (J(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = Ae(e);
            if (typeof c == "function" && c !== e.entries)
              for (var s = c.call(e), i; !(i = s.next()).done; )
                J(i.value) && me(i.value, r);
          }
        }
      }
      function Ze(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === g))
            t = r.propTypes;
          else
            return;
          if (t) {
            var n = C(r);
            Ue(t, e.props, "prop", n, e);
          } else if (r.PropTypes !== void 0 && !G) {
            G = !0;
            var c = C(r);
            O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qe(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== "children" && n !== "key") {
              A(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
              break;
            }
          }
          e.ref !== null && (A(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
        }
      }
      function ye(e, r, t, n, c, s) {
        {
          var i = Ye(e);
          if (!i) {
            var a = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var E = Ke();
            E ? a += E : a += Re();
            var d;
            e === null ? d = "null" : Array.isArray(e) ? d = "array" : e !== void 0 && e.$$typeof === y ? (d = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, a);
          }
          var p = He(e, r, t, c, s);
          if (p == null)
            return p;
          if (i) {
            var w = r.children;
            if (w !== void 0)
              if (n)
                if (Array.isArray(w)) {
                  for (var D = 0; D < w.length; D++)
                    Oe(w[D], e);
                  Object.freeze && Object.freeze(w);
                } else
                  O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Oe(w, e);
          }
          return e === R.Fragment ? Qe(p) : Ze(p), p;
        }
      }
      function er(e, r, t) {
        return ye(e, r, t, !0);
      }
      function rr(e, r, t) {
        return ye(e, r, t, !1);
      }
      var tr = rr, nr = er;
      R.jsx = tr, R.jsxs = nr;
    }();
  }(H)), H;
}
process.env.NODE_ENV === "production" ? X.exports = ar() : X.exports = ir();
var K = X.exports;
const or = {
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  background: "linear-gradient(45deg, #FF6B6B, #FF8E53)",
  color: "white",
  boxShadow: "0 4px 15px rgba(255, 107, 107, 0.3)",
  position: "relative",
  overflow: "hidden"
}, ur = {
  transform: "translateY(-2px)",
  boxShadow: "0 6px 20px rgba(255, 107, 107, 0.4)"
}, sr = {
  position: "absolute",
  borderRadius: "50%",
  transform: "scale(0)",
  animation: "ripple 0.6s linear",
  backgroundColor: "rgba(255, 255, 255, 0.7)"
}, fr = ({
  children: R = "Click Me!",
  onClick: j = () => {
  },
  className: b = "",
  ...y
}) => {
  const [P, h] = we(!1), [m, f] = we([]), l = (u) => {
    const o = u.currentTarget, _ = Math.max(o.clientWidth, o.clientHeight), g = _ / 2, x = {
      left: u.clientX - o.offsetLeft - g,
      top: u.clientY - o.offsetTop - g,
      width: _,
      height: _,
      key: Date.now()
    };
    f([...m, x]), j(u), setTimeout(() => {
      f((S) => S.filter(($) => $.key !== x.key));
    }, 600);
  };
  return /* @__PURE__ */ K.jsxs(
    "button",
    {
      style: {
        ...or,
        ...P ? ur : {}
      },
      className: b,
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      onClick: l,
      ...y,
      children: [
        R,
        m.map((u) => /* @__PURE__ */ K.jsx(
          "span",
          {
            style: {
              ...sr,
              left: u.left,
              top: u.top,
              width: u.width,
              height: u.height
            }
          },
          u.key
        )),
        /* @__PURE__ */ K.jsx("style", { children: `
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        ` })
      ]
    }
  );
};
export {
  fr as default
};

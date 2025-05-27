import xe from "react";
var K = { exports: {} }, D = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var J, Pe;
function we() {
  if (Pe) return J;
  Pe = 1;
  var E = Object.getOwnPropertySymbols, w = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
  function j(h) {
    if (h == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(h);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var h = new String("abc");
      if (h[5] = "de", Object.getOwnPropertyNames(h)[0] === "5")
        return !1;
      for (var m = {}, c = 0; c < 10; c++)
        m["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(m).map(function(f) {
        return m[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        p[f] = f;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return J = C() ? Object.assign : function(h, m) {
    for (var c, l = j(h), p, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var R in c)
        w.call(c, R) && (l[R] = c[R]);
      if (E) {
        p = E(c);
        for (var _ = 0; _ < p.length; _++)
          O.call(c, p[_]) && (l[p[_]] = c[p[_]]);
      }
    }
    return l;
  }, J;
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
function tr() {
  if (je) return D;
  je = 1, we();
  var E = xe, w = 60103;
  if (D.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var O = Symbol.for;
    w = O("react.element"), D.Fragment = O("react.fragment");
  }
  var j = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = Object.prototype.hasOwnProperty, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(c, l, p) {
    var f, R = {}, _ = null, x = null;
    p !== void 0 && (_ = "" + p), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (f in l) C.call(l, f) && !h.hasOwnProperty(f) && (R[f] = l[f]);
    if (c && c.defaultProps) for (f in l = c.defaultProps, l) R[f] === void 0 && (R[f] = l[f]);
    return { $$typeof: w, type: c, key: _, ref: x, props: R, _owner: j.current };
  }
  return D.jsx = m, D.jsxs = m, D;
}
var z = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function nr() {
  return Te || (Te = 1, function(E) {
    process.env.NODE_ENV !== "production" && function() {
      var w = xe, O = we(), j = 60103, C = 60106;
      E.Fragment = 60107;
      var h = 60108, m = 60114, c = 60109, l = 60110, p = 60112, f = 60113, R = 60120, _ = 60115, x = 60116, Y = 60121, H = 60122, X = 60117, Z = 60129, Q = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var d = Symbol.for;
        j = d("react.element"), C = d("react.portal"), E.Fragment = d("react.fragment"), h = d("react.strict_mode"), m = d("react.profiler"), c = d("react.provider"), l = d("react.context"), p = d("react.forward_ref"), f = d("react.suspense"), R = d("react.suspense_list"), _ = d("react.memo"), x = d("react.lazy"), Y = d("react.block"), H = d("react.server.block"), X = d("react.fundamental"), d("react.scope"), d("react.opaque.id"), Z = d("react.debug_trace_mode"), d("react.offscreen"), Q = d("react.legacy_hidden");
      }
      var ee = typeof Symbol == "function" && Symbol.iterator, Ce = "@@iterator";
      function Se(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ee && e[ee] || e[Ce];
        return typeof r == "function" ? r : null;
      }
      var S = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function b(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          Ae("error", e, t);
        }
      }
      function Ae(e, r, t) {
        {
          var n = S.ReactDebugCurrentFrame, u = n.getStackAddendum();
          u !== "" && (r += "%s", t = t.concat([u]));
          var o = t.map(function(i) {
            return "" + i;
          });
          o.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, o);
        }
      }
      var ke = !1;
      function De(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === E.Fragment || e === m || e === Z || e === h || e === f || e === R || e === Q || ke || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === _ || e.$$typeof === c || e.$$typeof === l || e.$$typeof === p || e.$$typeof === X || e.$$typeof === Y || e[0] === H));
      }
      function Ie(e, r, t) {
        var n = r.displayName || r.name || "";
        return e.displayName || (n !== "" ? t + "(" + n + ")" : t);
      }
      function re(e) {
        return e.displayName || "Context";
      }
      function T(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && b("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case E.Fragment:
            return "Fragment";
          case C:
            return "Portal";
          case m:
            return "Profiler";
          case h:
            return "StrictMode";
          case f:
            return "Suspense";
          case R:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case l:
              var r = e;
              return re(r) + ".Consumer";
            case c:
              var t = e;
              return re(t._context) + ".Provider";
            case p:
              return Ie(e, e.render, "ForwardRef");
            case _:
              return T(e.type);
            case Y:
              return T(e._render);
            case x: {
              var n = e, u = n._payload, o = n._init;
              try {
                return T(o(u));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var I = 0, te, ne, ae, ie, oe, ue, fe;
      function ce() {
      }
      ce.__reactDisabledLog = !0;
      function Ye() {
        {
          if (I === 0) {
            te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, fe = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ce,
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
          I++;
        }
      }
      function $e() {
        {
          if (I--, I === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: O({}, e, {
                value: te
              }),
              info: O({}, e, {
                value: ne
              }),
              warn: O({}, e, {
                value: ae
              }),
              error: O({}, e, {
                value: ie
              }),
              group: O({}, e, {
                value: oe
              }),
              groupCollapsed: O({}, e, {
                value: ue
              }),
              groupEnd: O({}, e, {
                value: fe
              })
            });
          }
          I < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var U = S.ReactCurrentDispatcher, V;
      function $(e, r, t) {
        {
          if (V === void 0)
            try {
              throw Error();
            } catch (u) {
              var n = u.stack.trim().match(/\n( *(at )?)/);
              V = n && n[1] || "";
            }
          return `
` + V + e;
        }
      }
      var N = !1, W;
      {
        var We = typeof WeakMap == "function" ? WeakMap : Map;
        W = new We();
      }
      function se(e, r) {
        if (!e || N)
          return "";
        {
          var t = W.get(e);
          if (t !== void 0)
            return t;
        }
        var n;
        N = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var o;
        o = U.current, U.current = null, Ye();
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
              } catch (P) {
                n = P;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (P) {
                n = P;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (P) {
              n = P;
            }
            e();
          }
        } catch (P) {
          if (P && n && typeof P.stack == "string") {
            for (var a = P.stack.split(`
`), g = n.stack.split(`
`), s = a.length - 1, v = g.length - 1; s >= 1 && v >= 0 && a[s] !== g[v]; )
              v--;
            for (; s >= 1 && v >= 0; s--, v--)
              if (a[s] !== g[v]) {
                if (s !== 1 || v !== 1)
                  do
                    if (s--, v--, v < 0 || a[s] !== g[v]) {
                      var y = `
` + a[s].replace(" at new ", " at ");
                      return typeof e == "function" && W.set(e, y), y;
                    }
                  while (s >= 1 && v >= 0);
                break;
              }
          }
        } finally {
          N = !1, U.current = o, $e(), Error.prepareStackTrace = u;
        }
        var k = e ? e.displayName || e.name : "", ye = k ? $(k) : "";
        return typeof e == "function" && W.set(e, ye), ye;
      }
      function le(e, r, t) {
        return se(e, !1);
      }
      function Le(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function L(e, r, t) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return se(e, Le(e));
        if (typeof e == "string")
          return $(e);
        switch (e) {
          case f:
            return $("Suspense");
          case R:
            return $("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case p:
              return le(e.render);
            case _:
              return L(e.type, r, t);
            case Y:
              return le(e._render);
            case x: {
              var n = e, u = n._payload, o = n._init;
              try {
                return L(o(u), r, t);
              } catch {
              }
            }
          }
        return "";
      }
      var de = {}, ve = S.ReactDebugCurrentFrame;
      function F(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          ve.setExtraStackFrame(t);
        } else
          ve.setExtraStackFrame(null);
      }
      function Fe(e, r, t, n, u) {
        {
          var o = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var i in e)
            if (o(e, i)) {
              var a = void 0;
              try {
                if (typeof e[i] != "function") {
                  var g = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw g.name = "Invariant Violation", g;
                }
                a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (s) {
                a = s;
              }
              a && !(a instanceof Error) && (F(u), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), F(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, F(u), b("Failed %s type: %s", t, a.message), F(null));
            }
        }
      }
      var pe = S.ReactCurrentOwner, M = Object.prototype.hasOwnProperty, Ue = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, _e, ge;
      function Ve(e) {
        if (M.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ne(e) {
        if (M.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Me(e, r) {
        typeof e.ref == "string" && pe.current;
      }
      function qe(e, r) {
        {
          var t = function() {
            _e || (_e = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: t,
            configurable: !0
          });
        }
      }
      function Be(e, r) {
        {
          var t = function() {
            ge || (ge = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: t,
            configurable: !0
          });
        }
      }
      var Ge = function(e, r, t, n, u, o, i) {
        var a = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: j,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: t,
          props: i,
          // Record the component responsible for creating this element.
          _owner: o
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
          value: u
        }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
      };
      function Je(e, r, t, n, u) {
        {
          var o, i = {}, a = null, g = null;
          t !== void 0 && (a = "" + t), Ne(r) && (a = "" + r.key), Ve(r) && (g = r.ref, Me(r, u));
          for (o in r)
            M.call(r, o) && !Ue.hasOwnProperty(o) && (i[o] = r[o]);
          if (e && e.defaultProps) {
            var s = e.defaultProps;
            for (o in s)
              i[o] === void 0 && (i[o] = s[o]);
          }
          if (a || g) {
            var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            a && qe(i, v), g && Be(i, v);
          }
          return Ge(e, a, g, u, n, pe.current, i);
        }
      }
      var q = S.ReactCurrentOwner, Ee = S.ReactDebugCurrentFrame;
      function A(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          Ee.setExtraStackFrame(t);
        } else
          Ee.setExtraStackFrame(null);
      }
      var B;
      B = !1;
      function G(e) {
        return typeof e == "object" && e !== null && e.$$typeof === j;
      }
      function he() {
        {
          if (q.current) {
            var e = T(q.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function ze(e) {
        return "";
      }
      var Re = {};
      function Ke(e) {
        {
          var r = he();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function be(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var t = Ke(r);
          if (Re[t])
            return;
          Re[t] = !0;
          var n = "";
          e && e._owner && e._owner !== q.current && (n = " It was passed a child from " + T(e._owner.type) + "."), A(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
        }
      }
      function Oe(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              G(n) && be(n, r);
            }
          else if (G(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = Se(e);
            if (typeof u == "function" && u !== e.entries)
              for (var o = u.call(e), i; !(i = o.next()).done; )
                G(i.value) && be(i.value, r);
          }
        }
      }
      function He(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === _))
            t = r.propTypes;
          else
            return;
          if (t) {
            var n = T(r);
            Fe(t, e.props, "prop", n, e);
          } else if (r.PropTypes !== void 0 && !B) {
            B = !0;
            var u = T(r);
            b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Xe(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== "children" && n !== "key") {
              A(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
              break;
            }
          }
          e.ref !== null && (A(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
        }
      }
      function me(e, r, t, n, u, o) {
        {
          var i = De(e);
          if (!i) {
            var a = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var g = ze();
            g ? a += g : a += he();
            var s;
            e === null ? s = "null" : Array.isArray(e) ? s = "array" : e !== void 0 && e.$$typeof === j ? (s = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
          }
          var v = Je(e, r, t, u, o);
          if (v == null)
            return v;
          if (i) {
            var y = r.children;
            if (y !== void 0)
              if (n)
                if (Array.isArray(y)) {
                  for (var k = 0; k < y.length; k++)
                    Oe(y[k], e);
                  Object.freeze && Object.freeze(y);
                } else
                  b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Oe(y, e);
          }
          return e === E.Fragment ? Xe(v) : He(v), v;
        }
      }
      function Ze(e, r, t) {
        return me(e, r, t, !0);
      }
      function Qe(e, r, t) {
        return me(e, r, t, !1);
      }
      var er = Qe, rr = Ze;
      E.jsx = er, E.jsxs = rr;
    }();
  }(z)), z;
}
process.env.NODE_ENV === "production" ? K.exports = tr() : K.exports = nr();
var ar = K.exports;
function or({ text: E = "Click me!" }) {
  return /* @__PURE__ */ ar.jsx("button", { style: {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px"
  }, children: E });
}
export {
  or as default
};

console.log('typeof exports:', typeof exports);
console.log('typeof module:', typeof module);
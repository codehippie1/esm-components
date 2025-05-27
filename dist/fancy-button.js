var Or = { exports: {} }, xe = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var br, Br;
function ur() {
  if (Br) return br;
  Br = 1;
  var f = Object.getOwnPropertySymbols, Y = Object.prototype.hasOwnProperty, G = Object.prototype.propertyIsEnumerable;
  function K(M) {
    if (M == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(M);
  }
  function re() {
    try {
      if (!Object.assign)
        return !1;
      var M = new String("abc");
      if (M[5] = "de", Object.getOwnPropertyNames(M)[0] === "5")
        return !1;
      for (var F = {}, C = 0; C < 10; C++)
        F["_" + String.fromCharCode(C)] = C;
      var y = Object.getOwnPropertyNames(F).map(function(E) {
        return F[E];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        P[E] = E;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return br = re() ? Object.assign : function(M, F) {
    for (var C, y = K(M), P, E = 1; E < arguments.length; E++) {
      C = Object(arguments[E]);
      for (var N in C)
        Y.call(C, N) && (y[N] = C[N]);
      if (f) {
        P = f(C);
        for (var L = 0; L < P.length; L++)
          G.call(C, P[L]) && (y[P[L]] = C[P[L]]);
      }
    }
    return y;
  }, br;
}
var Pr = { exports: {} }, _ = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function yt() {
  if (Gr) return _;
  Gr = 1;
  var f = ur(), Y = 60103, G = 60106;
  _.Fragment = 60107, _.StrictMode = 60108, _.Profiler = 60114;
  var K = 60109, re = 60110, M = 60112;
  _.Suspense = 60113;
  var F = 60115, C = 60116;
  if (typeof Symbol == "function" && Symbol.for) {
    var y = Symbol.for;
    Y = y("react.element"), G = y("react.portal"), _.Fragment = y("react.fragment"), _.StrictMode = y("react.strict_mode"), _.Profiler = y("react.profiler"), K = y("react.provider"), re = y("react.context"), M = y("react.forward_ref"), _.Suspense = y("react.suspense"), F = y("react.memo"), C = y("react.lazy");
  }
  var P = typeof Symbol == "function" && Symbol.iterator;
  function E(n) {
    return n === null || typeof n != "object" ? null : (n = P && n[P] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  function N(n) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, h = 1; h < arguments.length; h++) i += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + n + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, te = {};
  function Q(n, i, h) {
    this.props = n, this.context = i, this.refs = te, this.updater = h || L;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(n, i) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error(N(85));
    this.updater.enqueueSetState(this, n, i, "setState");
  }, Q.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ye() {
  }
  ye.prototype = Q.prototype;
  function j(n, i, h) {
    this.props = n, this.context = i, this.refs = te, this.updater = h || L;
  }
  var de = j.prototype = new ye();
  de.constructor = j, f(de, Q.prototype), de.isPureReactComponent = !0;
  var ge = { current: null }, A = Object.prototype.hasOwnProperty, me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Te(n, i, h) {
    var b, w = {}, k = null, I = null;
    if (i != null) for (b in i.ref !== void 0 && (I = i.ref), i.key !== void 0 && (k = "" + i.key), i) A.call(i, b) && !me.hasOwnProperty(b) && (w[b] = i[b]);
    var D = arguments.length - 2;
    if (D === 1) w.children = h;
    else if (1 < D) {
      for (var S = Array(D), H = 0; H < D; H++) S[H] = arguments[H + 2];
      w.children = S;
    }
    if (n && n.defaultProps) for (b in D = n.defaultProps, D) w[b] === void 0 && (w[b] = D[b]);
    return { $$typeof: Y, type: n, key: k, ref: I, props: w, _owner: ge.current };
  }
  function ne(n, i) {
    return { $$typeof: Y, type: n.type, key: i, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function X(n) {
    return typeof n == "object" && n !== null && n.$$typeof === Y;
  }
  function q(n) {
    var i = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return i[h];
    });
  }
  var be = /\/+/g;
  function Ce(n, i) {
    return typeof n == "object" && n !== null && n.key != null ? q("" + n.key) : i.toString(36);
  }
  function ue(n, i, h, b, w) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var I = !1;
    if (n === null) I = !0;
    else switch (k) {
      case "string":
      case "number":
        I = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case Y:
          case G:
            I = !0;
        }
    }
    if (I) return I = n, w = w(I), n = b === "" ? "." + Ce(I, 0) : b, Array.isArray(w) ? (h = "", n != null && (h = n.replace(be, "$&/") + "/"), ue(w, i, h, "", function(H) {
      return H;
    })) : w != null && (X(w) && (w = ne(w, h + (!w.key || I && I.key === w.key ? "" : ("" + w.key).replace(be, "$&/") + "/") + n)), i.push(w)), 1;
    if (I = 0, b = b === "" ? "." : b + ":", Array.isArray(n)) for (var D = 0; D < n.length; D++) {
      k = n[D];
      var S = b + Ce(k, D);
      I += ue(k, i, h, S, w);
    }
    else if (S = E(n), typeof S == "function") for (n = S.call(n), D = 0; !(k = n.next()).done; ) k = k.value, S = b + Ce(k, D++), I += ue(k, i, h, S, w);
    else if (k === "object") throw i = "" + n, Error(N(31, i === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : i));
    return I;
  }
  function ie(n, i, h) {
    if (n == null) return n;
    var b = [], w = 0;
    return ue(n, b, "", "", function(k) {
      return i.call(h, k, w++);
    }), b;
  }
  function R(n) {
    if (n._status === -1) {
      var i = n._result;
      i = i(), n._status = 0, n._result = i, i.then(function(h) {
        n._status === 0 && (h = h.default, n._status = 1, n._result = h);
      }, function(h) {
        n._status === 0 && (n._status = 2, n._result = h);
      });
    }
    if (n._status === 1) return n._result;
    throw n._result;
  }
  var Z = { current: null };
  function B() {
    var n = Z.current;
    if (n === null) throw Error(N(321));
    return n;
  }
  var _e = { ReactCurrentDispatcher: Z, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: ge, IsSomeRendererActing: { current: !1 }, assign: f };
  return _.Children = { map: ie, forEach: function(n, i, h) {
    ie(n, function() {
      i.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var i = 0;
    return ie(n, function() {
      i++;
    }), i;
  }, toArray: function(n) {
    return ie(n, function(i) {
      return i;
    }) || [];
  }, only: function(n) {
    if (!X(n)) throw Error(N(143));
    return n;
  } }, _.Component = Q, _.PureComponent = j, _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _e, _.cloneElement = function(n, i, h) {
    if (n == null) throw Error(N(267, n));
    var b = f({}, n.props), w = n.key, k = n.ref, I = n._owner;
    if (i != null) {
      if (i.ref !== void 0 && (k = i.ref, I = ge.current), i.key !== void 0 && (w = "" + i.key), n.type && n.type.defaultProps) var D = n.type.defaultProps;
      for (S in i) A.call(i, S) && !me.hasOwnProperty(S) && (b[S] = i[S] === void 0 && D !== void 0 ? D[S] : i[S]);
    }
    var S = arguments.length - 2;
    if (S === 1) b.children = h;
    else if (1 < S) {
      D = Array(S);
      for (var H = 0; H < S; H++) D[H] = arguments[H + 2];
      b.children = D;
    }
    return {
      $$typeof: Y,
      type: n.type,
      key: w,
      ref: k,
      props: b,
      _owner: I
    };
  }, _.createContext = function(n, i) {
    return i === void 0 && (i = null), n = { $$typeof: re, _calculateChangedBits: i, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null }, n.Provider = { $$typeof: K, _context: n }, n.Consumer = n;
  }, _.createElement = Te, _.createFactory = function(n) {
    var i = Te.bind(null, n);
    return i.type = n, i;
  }, _.createRef = function() {
    return { current: null };
  }, _.forwardRef = function(n) {
    return { $$typeof: M, render: n };
  }, _.isValidElement = X, _.lazy = function(n) {
    return { $$typeof: C, _payload: { _status: -1, _result: n }, _init: R };
  }, _.memo = function(n, i) {
    return { $$typeof: F, type: n, compare: i === void 0 ? null : i };
  }, _.useCallback = function(n, i) {
    return B().useCallback(n, i);
  }, _.useContext = function(n, i) {
    return B().useContext(n, i);
  }, _.useDebugValue = function() {
  }, _.useEffect = function(n, i) {
    return B().useEffect(n, i);
  }, _.useImperativeHandle = function(n, i, h) {
    return B().useImperativeHandle(n, i, h);
  }, _.useLayoutEffect = function(n, i) {
    return B().useLayoutEffect(n, i);
  }, _.useMemo = function(n, i) {
    return B().useMemo(n, i);
  }, _.useReducer = function(n, i, h) {
    return B().useReducer(n, i, h);
  }, _.useRef = function(n) {
    return B().useRef(n);
  }, _.useState = function(n) {
    return B().useState(n);
  }, _.version = "17.0.2", _;
}
var Cr = {};
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function gt() {
  return Kr || (Kr = 1, function(f) {
    process.env.NODE_ENV !== "production" && function() {
      var Y = ur(), G = "17.0.2", K = 60103, re = 60106;
      f.Fragment = 60107, f.StrictMode = 60108, f.Profiler = 60114;
      var M = 60109, F = 60110, C = 60112;
      f.Suspense = 60113;
      var y = 60120, P = 60115, E = 60116, N = 60121, L = 60122, te = 60117, Q = 60129, ye = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var j = Symbol.for;
        K = j("react.element"), re = j("react.portal"), f.Fragment = j("react.fragment"), f.StrictMode = j("react.strict_mode"), f.Profiler = j("react.profiler"), M = j("react.provider"), F = j("react.context"), C = j("react.forward_ref"), f.Suspense = j("react.suspense"), y = j("react.suspense_list"), P = j("react.memo"), E = j("react.lazy"), N = j("react.block"), L = j("react.server.block"), te = j("react.fundamental"), j("react.scope"), j("react.opaque.id"), Q = j("react.debug_trace_mode"), j("react.offscreen"), ye = j("react.legacy_hidden");
      }
      var de = typeof Symbol == "function" && Symbol.iterator, ge = "@@iterator";
      function A(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = de && e[de] || e[ge];
        return typeof t == "function" ? t : null;
      }
      var me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Te = {
        transition: 0
      }, ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, X = {}, q = null;
      function be(e) {
        q = e;
      }
      X.setExtraStackFrame = function(e) {
        q = e;
      }, X.getCurrentStack = null, X.getStackAddendum = function() {
        var e = "";
        q && (e += q);
        var t = X.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var Ce = {
        current: !1
      }, ue = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: Te,
        ReactCurrentOwner: ne,
        IsSomeRendererActing: Ce,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: Y
      };
      ue.ReactDebugCurrentFrame = X;
      function ie(e) {
        {
          for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            a[o - 1] = arguments[o];
          Z("warn", e, a);
        }
      }
      function R(e) {
        {
          for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            a[o - 1] = arguments[o];
          Z("error", e, a);
        }
      }
      function Z(e, t, a) {
        {
          var o = ue.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (t += "%s", a = a.concat([c]));
          var p = a.map(function(v) {
            return "" + v;
          });
          p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var B = {};
      function _e(e, t) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + t;
          if (B[c])
            return;
          R("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, o), B[c] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, t, a) {
          _e(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, t, a, o) {
          _e(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, t, a, o) {
          _e(e, "setState");
        }
      }, i = {};
      Object.freeze(i);
      function h(e, t, a) {
        this.props = e, this.context = t, this.refs = i, this.updater = a || n;
      }
      h.prototype.isReactComponent = {}, h.prototype.setState = function(e, t) {
        if (!(typeof e == "object" || typeof e == "function" || e == null))
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, h.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var b = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, w = function(e, t) {
          Object.defineProperty(h.prototype, e, {
            get: function() {
              ie("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var k in b)
          b.hasOwnProperty(k) && w(k, b[k]);
      }
      function I() {
      }
      I.prototype = h.prototype;
      function D(e, t, a) {
        this.props = e, this.context = t, this.refs = i, this.updater = a || n;
      }
      var S = D.prototype = new I();
      S.constructor = D, Y(S, h.prototype), S.isPureReactComponent = !0;
      function H() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      function Ae(e, t, a) {
        var o = t.displayName || t.name || "";
        return e.displayName || (o !== "" ? a + "(" + o + ")" : a);
      }
      function we(e) {
        return e.displayName || "Context";
      }
      function ae(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && R("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case f.Fragment:
            return "Fragment";
          case re:
            return "Portal";
          case f.Profiler:
            return "Profiler";
          case f.StrictMode:
            return "StrictMode";
          case f.Suspense:
            return "Suspense";
          case y:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case F:
              var t = e;
              return we(t) + ".Consumer";
            case M:
              var a = e;
              return we(a._context) + ".Provider";
            case C:
              return Ae(e, e.render, "ForwardRef");
            case P:
              return ae(e.type);
            case N:
              return ae(e._render);
            case E: {
              var o = e, c = o._payload, p = o._init;
              try {
                return ae(p(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ve = Object.prototype.hasOwnProperty, qe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, De, $e, Ie;
      Ie = {};
      function Oe(e) {
        if (ve.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ye(e) {
        if (ve.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function ze(e, t) {
        var a = function() {
          De || (De = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function je(e, t) {
        var a = function() {
          $e || ($e = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ir(e) {
        if (typeof e.ref == "string" && ne.current && e.__self && ne.current.stateNode !== e.__self) {
          var t = ae(ne.current.type);
          Ie[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Ie[t] = !0);
        }
      }
      var ke = function(e, t, a, o, c, p, v) {
        var l = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: K,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: a,
          props: v,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return l._store = {}, Object.defineProperty(l._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(l, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(l, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
      };
      function Ne(e, t, a) {
        var o, c = {}, p = null, v = null, l = null, x = null;
        if (t != null) {
          Oe(t) && (v = t.ref, ir(t)), Ye(t) && (p = "" + t.key), l = t.__self === void 0 ? null : t.__self, x = t.__source === void 0 ? null : t.__source;
          for (o in t)
            ve.call(t, o) && !qe.hasOwnProperty(o) && (c[o] = t[o]);
        }
        var U = arguments.length - 2;
        if (U === 1)
          c.children = a;
        else if (U > 1) {
          for (var V = Array(U), z = 0; z < U; z++)
            V[z] = arguments[z + 2];
          Object.freeze && Object.freeze(V), c.children = V;
        }
        if (e && e.defaultProps) {
          var oe = e.defaultProps;
          for (o in oe)
            c[o] === void 0 && (c[o] = oe[o]);
        }
        if (p || v) {
          var ee = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && ze(c, ee), v && je(c, ee);
        }
        return ke(e, p, v, l, x, ne.current, c);
      }
      function cr(e, t) {
        var a = ke(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Be(e, t, a) {
        if (e == null)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = Y({}, e.props), p = e.key, v = e.ref, l = e._self, x = e._source, U = e._owner;
        if (t != null) {
          Oe(t) && (v = t.ref, U = ne.current), Ye(t) && (p = "" + t.key);
          var V;
          e.type && e.type.defaultProps && (V = e.type.defaultProps);
          for (o in t)
            ve.call(t, o) && !qe.hasOwnProperty(o) && (t[o] === void 0 && V !== void 0 ? c[o] = V[o] : c[o] = t[o]);
        }
        var z = arguments.length - 2;
        if (z === 1)
          c.children = a;
        else if (z > 1) {
          for (var oe = Array(z), ee = 0; ee < z; ee++)
            oe[ee] = arguments[ee + 2];
          c.children = oe;
        }
        return ke(e.type, p, v, l, x, U, c);
      }
      function pe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === K;
      }
      var Ge = ".", sr = ":";
      function fr(e) {
        var t = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(t, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var Ke = !1, lr = /\/+/g;
      function He(e) {
        return e.replace(lr, "$&/");
      }
      function Ue(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? fr("" + e.key) : t.toString(36);
      }
      function Re(e, t, a, o, c) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var v = !1;
        if (e === null)
          v = !0;
        else
          switch (p) {
            case "string":
            case "number":
              v = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case K:
                case re:
                  v = !0;
              }
          }
        if (v) {
          var l = e, x = c(l), U = o === "" ? Ge + Ue(l, 0) : o;
          if (Array.isArray(x)) {
            var V = "";
            U != null && (V = He(U) + "/"), Re(x, t, V, "", function(ht) {
              return ht;
            });
          } else x != null && (pe(x) && (x = cr(
            x,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (x.key && (!l || l.key !== x.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              He("" + x.key) + "/"
            ) : "") + U
          )), t.push(x));
          return 1;
        }
        var z, oe, ee = 0, le = o === "" ? Ge : o + sr;
        if (Array.isArray(e))
          for (var or = 0; or < e.length; or++)
            z = e[or], oe = le + Ue(z, or), ee += Re(z, t, a, oe, c);
        else {
          var Er = A(e);
          if (typeof Er == "function") {
            var Fr = e;
            Er === Fr.entries && (Ke || ie("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ke = !0);
            for (var vt = Er.call(Fr), qr, pt = 0; !(qr = vt.next()).done; )
              z = qr.value, oe = le + Ue(z, pt++), ee += Re(z, t, a, oe, c);
          } else if (p === "object") {
            var zr = "" + e;
            throw Error("Objects are not valid as a React child (found: " + (zr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : zr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ee;
      }
      function Pe(e, t, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return Re(e, o, "", "", function(p) {
          return t.call(a, p, c++);
        }), o;
      }
      function Ee(e) {
        var t = 0;
        return Pe(e, function() {
          t++;
        }), t;
      }
      function We(e, t, a) {
        Pe(e, function() {
          t.apply(this, arguments);
        }, a);
      }
      function Me(e) {
        return Pe(e, function(t) {
          return t;
        }) || [];
      }
      function Je(e) {
        if (!pe(e))
          throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function dr(e, t) {
        t === void 0 ? t = null : t !== null && typeof t != "function" && R("createContext: Expected the optional second argument to be a function. Instead received: %s", t);
        var a = {
          $$typeof: F,
          _calculateChangedBits: t,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null
        };
        a.Provider = {
          $$typeof: M,
          _context: a
        };
        var o = !1, c = !1, p = !1;
        {
          var v = {
            $$typeof: F,
            _context: a,
            _calculateChangedBits: a._calculateChangedBits
          };
          Object.defineProperties(v, {
            Provider: {
              get: function() {
                return c || (c = !0, R("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), a.Provider;
              },
              set: function(l) {
                a.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return a._currentValue;
              },
              set: function(l) {
                a._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return a._currentValue2;
              },
              set: function(l) {
                a._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return a._threadCount;
              },
              set: function(l) {
                a._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return o || (o = !0, R("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), a.Consumer;
              }
            },
            displayName: {
              get: function() {
                return a.displayName;
              },
              set: function(l) {
                p || (ie("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), p = !0);
              }
            }
          }), a.Consumer = v;
        }
        return a._currentRenderer = null, a._currentRenderer2 = null, a;
      }
      var Xe = -1, Ve = 0, Le = 1, Qe = 2;
      function vr(e) {
        if (e._status === Xe) {
          var t = e._result, a = t(), o = e;
          o._status = Ve, o._result = a, a.then(function(c) {
            if (e._status === Ve) {
              var p = c.default;
              p === void 0 && R(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c);
              var v = e;
              v._status = Le, v._result = p;
            }
          }, function(c) {
            if (e._status === Ve) {
              var p = e;
              p._status = Qe, p._result = c;
            }
          });
        }
        if (e._status === Le)
          return e._result;
        throw e._result;
      }
      function pr(e) {
        var t = {
          // We use these fields to store the result.
          _status: -1,
          _result: e
        }, a = {
          $$typeof: E,
          _payload: t,
          _init: vr
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                R("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(p) {
                R("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Ze(e) {
        e != null && e.$$typeof === P ? R("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? R("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && R("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && R("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: C,
          render: e
        };
        {
          var a;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, e.displayName == null && (e.displayName = o);
            }
          });
        }
        return t;
      }
      var hr = !1;
      function er(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === f.Fragment || e === f.Profiler || e === Q || e === f.StrictMode || e === f.Suspense || e === y || e === ye || hr || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === P || e.$$typeof === M || e.$$typeof === F || e.$$typeof === C || e.$$typeof === te || e.$$typeof === N || e[0] === L));
      }
      function yr(e, t) {
        er(e) || R("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: P,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, e.displayName == null && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function ce() {
        var e = me.current;
        if (e === null)
          throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return e;
      }
      function r(e, t) {
        var a = ce();
        if (t !== void 0 && R("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", t, typeof t == "number" && Array.isArray(arguments[2]) ? `

Did you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks` : ""), e._context !== void 0) {
          var o = e._context;
          o.Consumer === e ? R("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : o.Provider === e && R("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return a.useContext(e, t);
      }
      function u(e) {
        var t = ce();
        return t.useState(e);
      }
      function s(e, t, a) {
        var o = ce();
        return o.useReducer(e, t, a);
      }
      function d(e) {
        var t = ce();
        return t.useRef(e);
      }
      function T(e, t) {
        var a = ce();
        return a.useEffect(e, t);
      }
      function O(e, t) {
        var a = ce();
        return a.useLayoutEffect(e, t);
      }
      function m(e, t) {
        var a = ce();
        return a.useCallback(e, t);
      }
      function g(e, t) {
        var a = ce();
        return a.useMemo(e, t);
      }
      function J(e, t, a) {
        var o = ce();
        return o.useImperativeHandle(e, t, a);
      }
      function W(e, t) {
        {
          var a = ce();
          return a.useDebugValue(e, t);
        }
      }
      var $ = 0, se, he, Fe, fe, Tr, jr, kr;
      function Sr() {
      }
      Sr.__reactDisabledLog = !0;
      function Qr() {
        {
          if ($ === 0) {
            se = console.log, he = console.info, Fe = console.warn, fe = console.error, Tr = console.group, jr = console.groupCollapsed, kr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Sr,
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
          $++;
        }
      }
      function Zr() {
        {
          if ($--, $ === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Y({}, e, {
                value: se
              }),
              info: Y({}, e, {
                value: he
              }),
              warn: Y({}, e, {
                value: Fe
              }),
              error: Y({}, e, {
                value: fe
              }),
              group: Y({}, e, {
                value: Tr
              }),
              groupCollapsed: Y({}, e, {
                value: jr
              }),
              groupEnd: Y({}, e, {
                value: kr
              })
            });
          }
          $ < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var gr = ue.ReactCurrentDispatcher, mr;
      function rr(e, t, a) {
        {
          if (mr === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              mr = o && o[1] || "";
            }
          return `
` + mr + e;
        }
      }
      var _r = !1, tr;
      {
        var et = typeof WeakMap == "function" ? WeakMap : Map;
        tr = new et();
      }
      function xr(e, t) {
        if (!e || _r)
          return "";
        {
          var a = tr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        _r = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = gr.current, gr.current = null, Qr();
        try {
          if (t) {
            var v = function() {
              throw Error();
            };
            if (Object.defineProperty(v.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(v, []);
              } catch (le) {
                o = le;
              }
              Reflect.construct(e, [], v);
            } else {
              try {
                v.call();
              } catch (le) {
                o = le;
              }
              e.call(v.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (le) {
              o = le;
            }
            e();
          }
        } catch (le) {
          if (le && o && typeof le.stack == "string") {
            for (var l = le.stack.split(`
`), x = o.stack.split(`
`), U = l.length - 1, V = x.length - 1; U >= 1 && V >= 0 && l[U] !== x[V]; )
              V--;
            for (; U >= 1 && V >= 0; U--, V--)
              if (l[U] !== x[V]) {
                if (U !== 1 || V !== 1)
                  do
                    if (U--, V--, V < 0 || l[U] !== x[V]) {
                      var z = `
` + l[U].replace(" at new ", " at ");
                      return typeof e == "function" && tr.set(e, z), z;
                    }
                  while (U >= 1 && V >= 0);
                break;
              }
          }
        } finally {
          _r = !1, gr.current = p, Zr(), Error.prepareStackTrace = c;
        }
        var oe = e ? e.displayName || e.name : "", ee = oe ? rr(oe) : "";
        return typeof e == "function" && tr.set(e, ee), ee;
      }
      function Ar(e, t, a) {
        return xr(e, !1);
      }
      function rt(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function nr(e, t, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return xr(e, rt(e));
        if (typeof e == "string")
          return rr(e);
        switch (e) {
          case f.Suspense:
            return rr("Suspense");
          case y:
            return rr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case C:
              return Ar(e.render);
            case P:
              return nr(e.type, t, a);
            case N:
              return Ar(e._render);
            case E: {
              var o = e, c = o._payload, p = o._init;
              try {
                return nr(p(c), t, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Dr = {}, $r = ue.ReactDebugCurrentFrame;
      function ar(e) {
        if (e) {
          var t = e._owner, a = nr(e.type, e._source, t ? t.type : null);
          $r.setExtraStackFrame(a);
        } else
          $r.setExtraStackFrame(null);
      }
      function tt(e, t, a, o, c) {
        {
          var p = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var v in e)
            if (p(e, v)) {
              var l = void 0;
              try {
                if (typeof e[v] != "function") {
                  var x = Error((o || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw x.name = "Invariant Violation", x;
                }
                l = e[v](t, v, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (U) {
                l = U;
              }
              l && !(l instanceof Error) && (ar(c), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, v, typeof l), ar(null)), l instanceof Error && !(l.message in Dr) && (Dr[l.message] = !0, ar(c), R("Failed %s type: %s", a, l.message), ar(null));
            }
        }
      }
      function Se(e) {
        if (e) {
          var t = e._owner, a = nr(e.type, e._source, t ? t.type : null);
          be(a);
        } else
          be(null);
      }
      var Rr;
      Rr = !1;
      function Ir() {
        if (ne.current) {
          var e = ae(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function nt(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + t + ":" + a + ".";
        }
        return "";
      }
      function at(e) {
        return e != null ? nt(e.__source) : "";
      }
      var Yr = {};
      function ot(e) {
        var t = Ir();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
      function Nr(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = ot(t);
          if (!Yr[a]) {
            Yr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== ne.current && (o = " It was passed a child from " + ae(e._owner.type) + "."), Se(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Se(null);
          }
        }
      }
      function Ur(e, t) {
        if (typeof e == "object") {
          if (Array.isArray(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              pe(o) && Nr(o, t);
            }
          else if (pe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = A(e);
            if (typeof c == "function" && c !== e.entries)
              for (var p = c.call(e), v; !(v = p.next()).done; )
                pe(v.value) && Nr(v.value, t);
          }
        }
      }
      function Wr(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var a;
          if (typeof t == "function")
            a = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === C || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === P))
            a = t.propTypes;
          else
            return;
          if (a) {
            var o = ae(t);
            tt(a, e.props, "prop", o, e);
          } else if (t.PropTypes !== void 0 && !Rr) {
            Rr = !0;
            var c = ae(t);
            R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ut(e) {
        {
          for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
            var o = t[a];
            if (o !== "children" && o !== "key") {
              Se(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Se(null);
              break;
            }
          }
          e.ref !== null && (Se(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
        }
      }
      function Mr(e, t, a) {
        var o = er(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = at(t);
          p ? c += p : c += Ir();
          var v;
          e === null ? v = "null" : Array.isArray(e) ? v = "array" : e !== void 0 && e.$$typeof === K ? (v = "<" + (ae(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, R("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, c);
        }
        var l = Ne.apply(this, arguments);
        if (l == null)
          return l;
        if (o)
          for (var x = 2; x < arguments.length; x++)
            Ur(arguments[x], e);
        return e === f.Fragment ? ut(l) : Wr(l), l;
      }
      var Vr = !1;
      function it(e) {
        var t = Mr.bind(null, e);
        return t.type = e, Vr || (Vr = !0, ie("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return ie("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function ct(e, t, a) {
        for (var o = Be.apply(this, arguments), c = 2; c < arguments.length; c++)
          Ur(arguments[c], o.type);
        return Wr(o), o;
      }
      try {
        var Lr = Object.freeze({});
      } catch {
      }
      var st = Mr, ft = ct, lt = it, dt = {
        map: Pe,
        forEach: We,
        count: Ee,
        toArray: Me,
        only: Je
      };
      f.Children = dt, f.Component = h, f.PureComponent = D, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue, f.cloneElement = ft, f.createContext = dr, f.createElement = st, f.createFactory = lt, f.createRef = H, f.forwardRef = Ze, f.isValidElement = pe, f.lazy = pr, f.memo = yr, f.useCallback = m, f.useContext = r, f.useDebugValue = W, f.useEffect = T, f.useImperativeHandle = J, f.useLayoutEffect = O, f.useMemo = g, f.useReducer = s, f.useRef = d, f.useState = u, f.version = G;
    }();
  }(Cr)), Cr;
}
process.env.NODE_ENV === "production" ? Pr.exports = yt() : Pr.exports = gt();
var Xr = Pr.exports;
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function mt() {
  if (Hr) return xe;
  Hr = 1, ur();
  var f = Xr, Y = 60103;
  if (xe.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var G = Symbol.for;
    Y = G("react.element"), xe.Fragment = G("react.fragment");
  }
  var K = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, re = Object.prototype.hasOwnProperty, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(C, y, P) {
    var E, N = {}, L = null, te = null;
    P !== void 0 && (L = "" + P), y.key !== void 0 && (L = "" + y.key), y.ref !== void 0 && (te = y.ref);
    for (E in y) re.call(y, E) && !M.hasOwnProperty(E) && (N[E] = y[E]);
    if (C && C.defaultProps) for (E in y = C.defaultProps, y) N[E] === void 0 && (N[E] = y[E]);
    return { $$typeof: Y, type: C, key: L, ref: te, props: N, _owner: K.current };
  }
  return xe.jsx = F, xe.jsxs = F, xe;
}
var wr = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function _t() {
  return Jr || (Jr = 1, function(f) {
    process.env.NODE_ENV !== "production" && function() {
      var Y = Xr, G = ur(), K = 60103, re = 60106;
      f.Fragment = 60107;
      var M = 60108, F = 60114, C = 60109, y = 60110, P = 60112, E = 60113, N = 60120, L = 60115, te = 60116, Q = 60121, ye = 60122, j = 60117, de = 60129, ge = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var A = Symbol.for;
        K = A("react.element"), re = A("react.portal"), f.Fragment = A("react.fragment"), M = A("react.strict_mode"), F = A("react.profiler"), C = A("react.provider"), y = A("react.context"), P = A("react.forward_ref"), E = A("react.suspense"), N = A("react.suspense_list"), L = A("react.memo"), te = A("react.lazy"), Q = A("react.block"), ye = A("react.server.block"), j = A("react.fundamental"), A("react.scope"), A("react.opaque.id"), de = A("react.debug_trace_mode"), A("react.offscreen"), ge = A("react.legacy_hidden");
      }
      var me = typeof Symbol == "function" && Symbol.iterator, Te = "@@iterator";
      function ne(r) {
        if (r === null || typeof r != "object")
          return null;
        var u = me && r[me] || r[Te];
        return typeof u == "function" ? u : null;
      }
      var X = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function q(r) {
        {
          for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), d = 1; d < u; d++)
            s[d - 1] = arguments[d];
          be("error", r, s);
        }
      }
      function be(r, u, s) {
        {
          var d = X.ReactDebugCurrentFrame, T = d.getStackAddendum();
          T !== "" && (u += "%s", s = s.concat([T]));
          var O = s.map(function(m) {
            return "" + m;
          });
          O.unshift("Warning: " + u), Function.prototype.apply.call(console[r], console, O);
        }
      }
      var Ce = !1;
      function ue(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === f.Fragment || r === F || r === de || r === M || r === E || r === N || r === ge || Ce || typeof r == "object" && r !== null && (r.$$typeof === te || r.$$typeof === L || r.$$typeof === C || r.$$typeof === y || r.$$typeof === P || r.$$typeof === j || r.$$typeof === Q || r[0] === ye));
      }
      function ie(r, u, s) {
        var d = u.displayName || u.name || "";
        return r.displayName || (d !== "" ? s + "(" + d + ")" : s);
      }
      function R(r) {
        return r.displayName || "Context";
      }
      function Z(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && q("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case f.Fragment:
            return "Fragment";
          case re:
            return "Portal";
          case F:
            return "Profiler";
          case M:
            return "StrictMode";
          case E:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case y:
              var u = r;
              return R(u) + ".Consumer";
            case C:
              var s = r;
              return R(s._context) + ".Provider";
            case P:
              return ie(r, r.render, "ForwardRef");
            case L:
              return Z(r.type);
            case Q:
              return Z(r._render);
            case te: {
              var d = r, T = d._payload, O = d._init;
              try {
                return Z(O(T));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var B = 0, _e, n, i, h, b, w, k;
      function I() {
      }
      I.__reactDisabledLog = !0;
      function D() {
        {
          if (B === 0) {
            _e = console.log, n = console.info, i = console.warn, h = console.error, b = console.group, w = console.groupCollapsed, k = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: I,
              writable: !0
            };
            Object.defineProperties(console, {
              info: r,
              log: r,
              warn: r,
              error: r,
              group: r,
              groupCollapsed: r,
              groupEnd: r
            });
          }
          B++;
        }
      }
      function S() {
        {
          if (B--, B === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: G({}, r, {
                value: _e
              }),
              info: G({}, r, {
                value: n
              }),
              warn: G({}, r, {
                value: i
              }),
              error: G({}, r, {
                value: h
              }),
              group: G({}, r, {
                value: b
              }),
              groupCollapsed: G({}, r, {
                value: w
              }),
              groupEnd: G({}, r, {
                value: k
              })
            });
          }
          B < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var H = X.ReactCurrentDispatcher, Ae;
      function we(r, u, s) {
        {
          if (Ae === void 0)
            try {
              throw Error();
            } catch (T) {
              var d = T.stack.trim().match(/\n( *(at )?)/);
              Ae = d && d[1] || "";
            }
          return `
` + Ae + r;
        }
      }
      var ae = !1, ve;
      {
        var qe = typeof WeakMap == "function" ? WeakMap : Map;
        ve = new qe();
      }
      function De(r, u) {
        if (!r || ae)
          return "";
        {
          var s = ve.get(r);
          if (s !== void 0)
            return s;
        }
        var d;
        ae = !0;
        var T = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var O;
        O = H.current, H.current = null, D();
        try {
          if (u) {
            var m = function() {
              throw Error();
            };
            if (Object.defineProperty(m.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(m, []);
              } catch (fe) {
                d = fe;
              }
              Reflect.construct(r, [], m);
            } else {
              try {
                m.call();
              } catch (fe) {
                d = fe;
              }
              r.call(m.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (fe) {
              d = fe;
            }
            r();
          }
        } catch (fe) {
          if (fe && d && typeof fe.stack == "string") {
            for (var g = fe.stack.split(`
`), J = d.stack.split(`
`), W = g.length - 1, $ = J.length - 1; W >= 1 && $ >= 0 && g[W] !== J[$]; )
              $--;
            for (; W >= 1 && $ >= 0; W--, $--)
              if (g[W] !== J[$]) {
                if (W !== 1 || $ !== 1)
                  do
                    if (W--, $--, $ < 0 || g[W] !== J[$]) {
                      var se = `
` + g[W].replace(" at new ", " at ");
                      return typeof r == "function" && ve.set(r, se), se;
                    }
                  while (W >= 1 && $ >= 0);
                break;
              }
          }
        } finally {
          ae = !1, H.current = O, S(), Error.prepareStackTrace = T;
        }
        var he = r ? r.displayName || r.name : "", Fe = he ? we(he) : "";
        return typeof r == "function" && ve.set(r, Fe), Fe;
      }
      function $e(r, u, s) {
        return De(r, !1);
      }
      function Ie(r) {
        var u = r.prototype;
        return !!(u && u.isReactComponent);
      }
      function Oe(r, u, s) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return De(r, Ie(r));
        if (typeof r == "string")
          return we(r);
        switch (r) {
          case E:
            return we("Suspense");
          case N:
            return we("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case P:
              return $e(r.render);
            case L:
              return Oe(r.type, u, s);
            case Q:
              return $e(r._render);
            case te: {
              var d = r, T = d._payload, O = d._init;
              try {
                return Oe(O(T), u, s);
              } catch {
              }
            }
          }
        return "";
      }
      var Ye = {}, ze = X.ReactDebugCurrentFrame;
      function je(r) {
        if (r) {
          var u = r._owner, s = Oe(r.type, r._source, u ? u.type : null);
          ze.setExtraStackFrame(s);
        } else
          ze.setExtraStackFrame(null);
      }
      function ir(r, u, s, d, T) {
        {
          var O = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var m in r)
            if (O(r, m)) {
              var g = void 0;
              try {
                if (typeof r[m] != "function") {
                  var J = Error((d || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw J.name = "Invariant Violation", J;
                }
                g = r[m](u, m, d, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (W) {
                g = W;
              }
              g && !(g instanceof Error) && (je(T), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", s, m, typeof g), je(null)), g instanceof Error && !(g.message in Ye) && (Ye[g.message] = !0, je(T), q("Failed %s type: %s", s, g.message), je(null));
            }
        }
      }
      var ke = X.ReactCurrentOwner, Ne = Object.prototype.hasOwnProperty, cr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Be, pe;
      function Ge(r) {
        if (Ne.call(r, "ref")) {
          var u = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (u && u.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function sr(r) {
        if (Ne.call(r, "key")) {
          var u = Object.getOwnPropertyDescriptor(r, "key").get;
          if (u && u.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function fr(r, u) {
        typeof r.ref == "string" && ke.current;
      }
      function Ke(r, u) {
        {
          var s = function() {
            Be || (Be = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
          };
          s.isReactWarning = !0, Object.defineProperty(r, "key", {
            get: s,
            configurable: !0
          });
        }
      }
      function lr(r, u) {
        {
          var s = function() {
            pe || (pe = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
          };
          s.isReactWarning = !0, Object.defineProperty(r, "ref", {
            get: s,
            configurable: !0
          });
        }
      }
      var He = function(r, u, s, d, T, O, m) {
        var g = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: K,
          // Built-in properties that belong on the element
          type: r,
          key: u,
          ref: s,
          props: m,
          // Record the component responsible for creating this element.
          _owner: O
        };
        return g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(g, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: d
        }), Object.defineProperty(g, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: T
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      };
      function Ue(r, u, s, d, T) {
        {
          var O, m = {}, g = null, J = null;
          s !== void 0 && (g = "" + s), sr(u) && (g = "" + u.key), Ge(u) && (J = u.ref, fr(u, T));
          for (O in u)
            Ne.call(u, O) && !cr.hasOwnProperty(O) && (m[O] = u[O]);
          if (r && r.defaultProps) {
            var W = r.defaultProps;
            for (O in W)
              m[O] === void 0 && (m[O] = W[O]);
          }
          if (g || J) {
            var $ = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
            g && Ke(m, $), J && lr(m, $);
          }
          return He(r, g, J, T, d, ke.current, m);
        }
      }
      var Re = X.ReactCurrentOwner, Pe = X.ReactDebugCurrentFrame;
      function Ee(r) {
        if (r) {
          var u = r._owner, s = Oe(r.type, r._source, u ? u.type : null);
          Pe.setExtraStackFrame(s);
        } else
          Pe.setExtraStackFrame(null);
      }
      var We;
      We = !1;
      function Me(r) {
        return typeof r == "object" && r !== null && r.$$typeof === K;
      }
      function Je() {
        {
          if (Re.current) {
            var r = Z(Re.current.type);
            if (r)
              return `

Check the render method of \`` + r + "`.";
          }
          return "";
        }
      }
      function dr(r) {
        return "";
      }
      var Xe = {};
      function Ve(r) {
        {
          var u = Je();
          if (!u) {
            var s = typeof r == "string" ? r : r.displayName || r.name;
            s && (u = `

Check the top-level render call using <` + s + ">.");
          }
          return u;
        }
      }
      function Le(r, u) {
        {
          if (!r._store || r._store.validated || r.key != null)
            return;
          r._store.validated = !0;
          var s = Ve(u);
          if (Xe[s])
            return;
          Xe[s] = !0;
          var d = "";
          r && r._owner && r._owner !== Re.current && (d = " It was passed a child from " + Z(r._owner.type) + "."), Ee(r), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, d), Ee(null);
        }
      }
      function Qe(r, u) {
        {
          if (typeof r != "object")
            return;
          if (Array.isArray(r))
            for (var s = 0; s < r.length; s++) {
              var d = r[s];
              Me(d) && Le(d, u);
            }
          else if (Me(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var T = ne(r);
            if (typeof T == "function" && T !== r.entries)
              for (var O = T.call(r), m; !(m = O.next()).done; )
                Me(m.value) && Le(m.value, u);
          }
        }
      }
      function vr(r) {
        {
          var u = r.type;
          if (u == null || typeof u == "string")
            return;
          var s;
          if (typeof u == "function")
            s = u.propTypes;
          else if (typeof u == "object" && (u.$$typeof === P || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          u.$$typeof === L))
            s = u.propTypes;
          else
            return;
          if (s) {
            var d = Z(u);
            ir(s, r.props, "prop", d, r);
          } else if (u.PropTypes !== void 0 && !We) {
            We = !0;
            var T = Z(u);
            q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
          }
          typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function pr(r) {
        {
          for (var u = Object.keys(r.props), s = 0; s < u.length; s++) {
            var d = u[s];
            if (d !== "children" && d !== "key") {
              Ee(r), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), Ee(null);
              break;
            }
          }
          r.ref !== null && (Ee(r), q("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
        }
      }
      function Ze(r, u, s, d, T, O) {
        {
          var m = ue(r);
          if (!m) {
            var g = "";
            (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var J = dr();
            J ? g += J : g += Je();
            var W;
            r === null ? W = "null" : Array.isArray(r) ? W = "array" : r !== void 0 && r.$$typeof === K ? (W = "<" + (Z(r.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : W = typeof r, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, g);
          }
          var $ = Ue(r, u, s, T, O);
          if ($ == null)
            return $;
          if (m) {
            var se = u.children;
            if (se !== void 0)
              if (d)
                if (Array.isArray(se)) {
                  for (var he = 0; he < se.length; he++)
                    Qe(se[he], r);
                  Object.freeze && Object.freeze(se);
                } else
                  q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Qe(se, r);
          }
          return r === f.Fragment ? pr($) : vr($), $;
        }
      }
      function hr(r, u, s) {
        return Ze(r, u, s, !0);
      }
      function er(r, u, s) {
        return Ze(r, u, s, !1);
      }
      var yr = er, ce = hr;
      f.jsx = yr, f.jsxs = ce;
    }();
  }(wr)), wr;
}
process.env.NODE_ENV === "production" ? Or.exports = mt() : Or.exports = _t();
var Rt = Or.exports;
function Et({ text: f = "Click me!" }) {
  return /* @__PURE__ */ Rt.jsx("button", { style: {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px"
  }, children: f });
}
export {
  Et as default
};

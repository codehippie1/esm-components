var C = { exports: {} }, d = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var R = Object.getOwnPropertySymbols, J = Object.prototype.hasOwnProperty, W = Object.prototype.propertyIsEnumerable;
function Y(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function G() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var r = {}, t = 0; t < 10; t++)
      r["_" + String.fromCharCode(t)] = t;
    var n = Object.getOwnPropertyNames(r).map(function(u) {
      return r[u];
    });
    if (n.join("") !== "0123456789")
      return !1;
    var o = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(u) {
      o[u] = u;
    }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var K = G() ? Object.assign : function(e, r) {
  for (var t, n = Y(e), o, u = 1; u < arguments.length; u++) {
    t = Object(arguments[u]);
    for (var i in t)
      J.call(t, i) && (n[i] = t[i]);
    if (R) {
      o = R(t);
      for (var c = 0; c < o.length; c++)
        W.call(t, o[c]) && (n[o[c]] = t[o[c]]);
    }
  }
  return n;
}, w = { exports: {} }, f = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O = K, y = 60103, P = 60106;
f.Fragment = 60107;
f.StrictMode = 60108;
f.Profiler = 60114;
var I = 60109, A = 60110, F = 60112;
f.Suspense = 60113;
var N = 60115, U = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var a = Symbol.for;
  y = a("react.element"), P = a("react.portal"), f.Fragment = a("react.fragment"), f.StrictMode = a("react.strict_mode"), f.Profiler = a("react.profiler"), I = a("react.provider"), A = a("react.context"), F = a("react.forward_ref"), f.Suspense = a("react.suspense"), N = a("react.memo"), U = a("react.lazy");
}
var b = typeof Symbol == "function" && Symbol.iterator;
function Q(e) {
  return e === null || typeof e != "object" ? null : (e = b && e[b] || e["@@iterator"], typeof e == "function" ? e : null);
}
function m(e) {
  for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var q = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, L = {};
function v(e, r, t) {
  this.props = e, this.context = r, this.refs = L, this.updater = t || q;
}
v.prototype.isReactComponent = {};
v.prototype.setState = function(e, r) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error(m(85));
  this.updater.enqueueSetState(this, e, r, "setState");
};
v.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function T() {
}
T.prototype = v.prototype;
function j(e, r, t) {
  this.props = e, this.context = r, this.refs = L, this.updater = t || q;
}
var S = j.prototype = new T();
S.constructor = j;
O(S, v.prototype);
S.isPureReactComponent = !0;
var E = { current: null }, D = Object.prototype.hasOwnProperty, M = { key: !0, ref: !0, __self: !0, __source: !0 };
function B(e, r, t) {
  var n, o = {}, u = null, i = null;
  if (r != null) for (n in r.ref !== void 0 && (i = r.ref), r.key !== void 0 && (u = "" + r.key), r) D.call(r, n) && !M.hasOwnProperty(n) && (o[n] = r[n]);
  var c = arguments.length - 2;
  if (c === 1) o.children = t;
  else if (1 < c) {
    for (var s = Array(c), l = 0; l < c; l++) s[l] = arguments[l + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (n in c = e.defaultProps, c) o[n] === void 0 && (o[n] = c[n]);
  return { $$typeof: y, type: e, key: u, ref: i, props: o, _owner: E.current };
}
function X(e, r) {
  return { $$typeof: y, type: e.type, key: r, ref: e.ref, props: e.props, _owner: e._owner };
}
function k(e) {
  return typeof e == "object" && e !== null && e.$$typeof === y;
}
function Z(e) {
  var r = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return r[t];
  });
}
var x = /\/+/g;
function g(e, r) {
  return typeof e == "object" && e !== null && e.key != null ? Z("" + e.key) : r.toString(36);
}
function h(e, r, t, n, o) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (u) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case y:
        case P:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = n === "" ? "." + g(i, 0) : n, Array.isArray(o) ? (t = "", e != null && (t = e.replace(x, "$&/") + "/"), h(o, r, t, "", function(l) {
    return l;
  })) : o != null && (k(o) && (o = X(o, t + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(x, "$&/") + "/") + e)), r.push(o)), 1;
  if (i = 0, n = n === "" ? "." : n + ":", Array.isArray(e)) for (var c = 0; c < e.length; c++) {
    u = e[c];
    var s = n + g(u, c);
    i += h(u, r, t, s, o);
  }
  else if (s = Q(e), typeof s == "function") for (e = s.call(e), c = 0; !(u = e.next()).done; ) u = u.value, s = n + g(u, c++), i += h(u, r, t, s, o);
  else if (u === "object") throw r = "" + e, Error(m(31, r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r));
  return i;
}
function _(e, r, t) {
  if (e == null) return e;
  var n = [], o = 0;
  return h(e, n, "", "", function(u) {
    return r.call(t, u, o++);
  }), n;
}
function ee(e) {
  if (e._status === -1) {
    var r = e._result;
    r = r(), e._status = 0, e._result = r, r.then(function(t) {
      e._status === 0 && (t = t.default, e._status = 1, e._result = t);
    }, function(t) {
      e._status === 0 && (e._status = 2, e._result = t);
    });
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var z = { current: null };
function p() {
  var e = z.current;
  if (e === null) throw Error(m(321));
  return e;
}
var re = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: E, IsSomeRendererActing: { current: !1 }, assign: O };
f.Children = { map: _, forEach: function(e, r, t) {
  _(e, function() {
    r.apply(this, arguments);
  }, t);
}, count: function(e) {
  var r = 0;
  return _(e, function() {
    r++;
  }), r;
}, toArray: function(e) {
  return _(e, function(r) {
    return r;
  }) || [];
}, only: function(e) {
  if (!k(e)) throw Error(m(143));
  return e;
} };
f.Component = v;
f.PureComponent = j;
f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re;
f.cloneElement = function(e, r, t) {
  if (e == null) throw Error(m(267, e));
  var n = O({}, e.props), o = e.key, u = e.ref, i = e._owner;
  if (r != null) {
    if (r.ref !== void 0 && (u = r.ref, i = E.current), r.key !== void 0 && (o = "" + r.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
    for (s in r) D.call(r, s) && !M.hasOwnProperty(s) && (n[s] = r[s] === void 0 && c !== void 0 ? c[s] : r[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = t;
  else if (1 < s) {
    c = Array(s);
    for (var l = 0; l < s; l++) c[l] = arguments[l + 2];
    n.children = c;
  }
  return {
    $$typeof: y,
    type: e.type,
    key: o,
    ref: u,
    props: n,
    _owner: i
  };
};
f.createContext = function(e, r) {
  return r === void 0 && (r = null), e = { $$typeof: A, _calculateChangedBits: r, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: I, _context: e }, e.Consumer = e;
};
f.createElement = B;
f.createFactory = function(e) {
  var r = B.bind(null, e);
  return r.type = e, r;
};
f.createRef = function() {
  return { current: null };
};
f.forwardRef = function(e) {
  return { $$typeof: F, render: e };
};
f.isValidElement = k;
f.lazy = function(e) {
  return { $$typeof: U, _payload: { _status: -1, _result: e }, _init: ee };
};
f.memo = function(e, r) {
  return { $$typeof: N, type: e, compare: r === void 0 ? null : r };
};
f.useCallback = function(e, r) {
  return p().useCallback(e, r);
};
f.useContext = function(e, r) {
  return p().useContext(e, r);
};
f.useDebugValue = function() {
};
f.useEffect = function(e, r) {
  return p().useEffect(e, r);
};
f.useImperativeHandle = function(e, r, t) {
  return p().useImperativeHandle(e, r, t);
};
f.useLayoutEffect = function(e, r) {
  return p().useLayoutEffect(e, r);
};
f.useMemo = function(e, r) {
  return p().useMemo(e, r);
};
f.useReducer = function(e, r, t) {
  return p().useReducer(e, r, t);
};
f.useRef = function(e) {
  return p().useRef(e);
};
f.useState = function(e) {
  return p().useState(e);
};
f.version = "17.0.2";
w.exports = f;
var te = w.exports;
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne = te, V = 60103;
d.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var $ = Symbol.for;
  V = $("react.element"), d.Fragment = $("react.fragment");
}
var oe = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ue = Object.prototype.hasOwnProperty, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
function H(e, r, t) {
  var n, o = {}, u = null, i = null;
  t !== void 0 && (u = "" + t), r.key !== void 0 && (u = "" + r.key), r.ref !== void 0 && (i = r.ref);
  for (n in r) ue.call(r, n) && !fe.hasOwnProperty(n) && (o[n] = r[n]);
  if (e && e.defaultProps) for (n in r = e.defaultProps, r) o[n] === void 0 && (o[n] = r[n]);
  return { $$typeof: V, type: e, key: u, ref: i, props: o, _owner: oe.current };
}
d.jsx = H;
d.jsxs = H;
C.exports = d;
var ie = C.exports;
function ce({ text: e = "Click me!" }) {
  return /* @__PURE__ */ ie.jsx("button", { style: {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px"
  }, children: e });
}
export {
  ce as default
};

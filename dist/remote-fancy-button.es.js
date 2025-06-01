import d from "react";
var h = { exports: {} }, f = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var m = Object.getOwnPropertySymbols, _ = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
function k(n) {
  if (n == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(n);
}
function E() {
  try {
    if (!Object.assign)
      return !1;
    var n = new String("abc");
    if (n[5] = "de", Object.getOwnPropertyNames(n)[0] === "5")
      return !1;
    for (var e = {}, r = 0; r < 10; r++)
      e["_" + String.fromCharCode(r)] = r;
    var t = Object.getOwnPropertyNames(e).map(function(o) {
      return e[o];
    });
    if (t.join("") !== "0123456789")
      return !1;
    var s = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(o) {
      s[o] = o;
    }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
E();
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R = d, v = 60103;
f.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var g = Symbol.for;
  v = g("react.element"), f.Fragment = g("react.fragment");
}
var P = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = Object.prototype.hasOwnProperty, F = { key: !0, ref: !0, __self: !0, __source: !0 };
function O(n, e, r) {
  var t, s = {}, o = null, i = null;
  r !== void 0 && (o = "" + r), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
  for (t in e) C.call(e, t) && !F.hasOwnProperty(t) && (s[t] = e[t]);
  if (n && n.defaultProps) for (t in e = n.defaultProps, e) s[t] === void 0 && (s[t] = e[t]);
  return { $$typeof: v, type: n, key: o, ref: i, props: s, _owner: P.current };
}
f.jsx = O;
f.jsxs = O;
h.exports = f;
var p = h.exports;
const T = {
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
}, I = {
  transform: "translateY(-2px)",
  boxShadow: "0 6px 20px rgba(255, 107, 107, 0.4)"
}, N = {
  position: "absolute",
  borderRadius: "50%",
  transform: "scale(0)",
  animation: "ripple 0.6s linear",
  backgroundColor: "rgba(255, 255, 255, 0.7)"
}, B = ({
  children: n = "Click Me!",
  onClick: e = () => {
  },
  className: r = "",
  ...t
}) => {
  const [s, o] = d.useState(!1), [i, l] = d.useState([]), j = (a) => {
    const c = a.currentTarget, u = Math.max(c.clientWidth, c.clientHeight), b = u / 2, y = {
      left: a.clientX - c.offsetLeft - b,
      top: a.clientY - c.offsetTop - b,
      width: u,
      height: u,
      key: Date.now()
    };
    l([...i, y]), e(a), setTimeout(() => {
      l((x) => x.filter((w) => w.key !== y.key));
    }, 600);
  };
  return /* @__PURE__ */ p.jsxs(
    "button",
    {
      style: {
        ...T,
        ...s ? I : {}
      },
      className: r,
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      onClick: j,
      ...t,
      children: [
        n,
        i.map((a) => /* @__PURE__ */ p.jsx(
          "span",
          {
            style: {
              ...N,
              left: a.left,
              top: a.top,
              width: a.width,
              height: a.height
            }
          },
          a.key
        )),
        /* @__PURE__ */ p.jsx("style", { children: `
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
  B as default
};
//# sourceMappingURL=remote-fancy-button.es.js.map

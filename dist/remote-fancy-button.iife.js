var RemoteFancyButton=function(u){"use strict";var b={exports:{}},c={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var y=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;function w(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function _(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var r=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(r.join("")!=="0123456789")return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(o){s[o]=o}),Object.keys(Object.assign({},s)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}_();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=u,m=60103;if(c.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var g=Symbol.for;m=g("react.element"),c.Fragment=g("react.fragment")}var k=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,t){var r,s={},o=null,i=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)E.call(e,r)&&!R.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:m,type:n,key:o,ref:i,props:s,_owner:k.current}}c.jsx=h,c.jsxs=h,b.exports=c;var p=b.exports;const F={padding:"12px 24px",fontSize:"16px",fontWeight:"bold",borderRadius:"8px",border:"none",cursor:"pointer",transition:"all 0.3s ease",background:"linear-gradient(45deg, #FF6B6B, #FF8E53)",color:"white",boxShadow:"0 4px 15px rgba(255, 107, 107, 0.3)",position:"relative",overflow:"hidden"},P={transform:"translateY(-2px)",boxShadow:"0 6px 20px rgba(255, 107, 107, 0.4)"},C={position:"absolute",borderRadius:"50%",transform:"scale(0)",animation:"ripple 0.6s linear",backgroundColor:"rgba(255, 255, 255, 0.7)"};return({children:n="Click Me!",onClick:e=()=>{},className:t="",...r})=>{const[s,o]=u.useState(!1),[i,l]=u.useState([]),T=a=>{const f=a.currentTarget,d=Math.max(f.clientWidth,f.clientHeight),v=d/2,O={left:a.clientX-f.offsetLeft-v,top:a.clientY-f.offsetTop-v,width:d,height:d,key:Date.now()};l([...i,O]),e(a),setTimeout(()=>{l(B=>B.filter(I=>I.key!==O.key))},600)};return p.jsxs("button",{style:{...F,...s?P:{}},className:t,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:T,...r,children:[n,i.map(a=>p.jsx("span",{style:{...C,left:a.left,top:a.top,width:a.width,height:a.height}},a.key)),p.jsx("style",{children:`
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `})]})}}(React);
//# sourceMappingURL=remote-fancy-button.iife.js.map

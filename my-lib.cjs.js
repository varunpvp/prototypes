"use strict";const Oe=require("react"),ir=require("styled-components");var K={},ur={get exports(){return K},set exports(E){K=E}},k={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function sr(){if(me)return k;me=1;var E=Oe,P=Symbol.for("react.element"),N=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,F=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function S(y,f,T){var v,b={},_=null,I=null;T!==void 0&&(_=""+T),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(I=f.ref);for(v in f)m.call(f,v)&&!A.hasOwnProperty(v)&&(b[v]=f[v]);if(y&&y.defaultProps)for(v in f=y.defaultProps,f)b[v]===void 0&&(b[v]=f[v]);return{$$typeof:P,type:y,key:_,ref:I,props:b,_owner:F.current}}return k.Fragment=N,k.jsx=S,k.jsxs=S,k}var D={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function lr(){return Te||(Te=1,process.env.NODE_ENV!=="production"&&function(){var E=Oe,P=Symbol.for("react.element"),N=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),y=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),X=Symbol.iterator,Ce="@@iterator";function we(e){if(e===null||typeof e!="object")return null;var r=X&&e[X]||e[Ce];return typeof r=="function"?r:null}var O=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Pe("error",e,t)}}function Pe(e,r,t){{var n=O.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Se=!1,xe=!1,je=!1,ke=!1,De=!1,Z;Z=Symbol.for("react.module.reference");function Fe(e){return!!(typeof e=="string"||typeof e=="function"||e===m||e===A||De||e===F||e===T||e===v||ke||e===I||Se||xe||je||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===b||e.$$typeof===S||e.$$typeof===y||e.$$typeof===f||e.$$typeof===Z||e.getModuleId!==void 0))}function Ae(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function Q(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case N:return"Portal";case A:return"Profiler";case F:return"StrictMode";case T:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:var r=e;return Q(r)+".Consumer";case S:var t=e;return Q(t._context)+".Provider";case f:return Ae(e,e.render,"ForwardRef");case b:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case _:{var i=e,u=i._payload,o=i._init;try{return g(o(u))}catch{return null}}}return null}var R=Object.assign,x=0,ee,re,te,ne,ae,oe,ie;function ue(){}ue.__reactDisabledLog=!0;function Ie(){{if(x===0){ee=console.log,re=console.info,te=console.warn,ne=console.error,ae=console.group,oe=console.groupCollapsed,ie=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ue,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}x++}}function We(){{if(x--,x===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:R({},e,{value:ee}),info:R({},e,{value:re}),warn:R({},e,{value:te}),error:R({},e,{value:ne}),group:R({},e,{value:ae}),groupCollapsed:R({},e,{value:oe}),groupEnd:R({},e,{value:ie})})}x<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var V=O.ReactCurrentDispatcher,U;function W(e,r,t){{if(U===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);U=n&&n[1]||""}return`
`+U+e}}var B=!1,$;{var $e=typeof WeakMap=="function"?WeakMap:Map;$=new $e}function se(e,r){if(!e||B)return"";{var t=$.get(e);if(t!==void 0)return t}var n;B=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=V.current,V.current=null,Ie();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(h){n=h}Reflect.construct(e,[],o)}else{try{o.call()}catch(h){n=h}e.call(o.prototype)}}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,l=d.length-1;s>=1&&l>=0&&a[s]!==d[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==d[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==d[l]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&$.set(e,p),p}while(s>=1&&l>=0);break}}}finally{B=!1,V.current=u,We(),Error.prepareStackTrace=i}var w=e?e.displayName||e.name:"",Re=w?W(w):"";return typeof e=="function"&&$.set(e,Re),Re}function Ye(e,r,t){return se(e,!1)}function Le(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function Y(e,r,t){if(e==null)return"";if(typeof e=="function")return se(e,Le(e));if(typeof e=="string")return W(e);switch(e){case T:return W("Suspense");case v:return W("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Ye(e.render);case b:return Y(e.type,r,t);case _:{var n=e,i=n._payload,u=n._init;try{return Y(u(i),r,t)}catch{}}}return""}var L=Object.prototype.hasOwnProperty,le={},fe=O.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=Y(e.type,e._source,r?r.type:null);fe.setExtraStackFrame(t)}else fe.setExtraStackFrame(null)}function Me(e,r,t,n,i){{var u=Function.call.bind(L);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(M(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),M(null)),a instanceof Error&&!(a.message in le)&&(le[a.message]=!0,M(i),c("Failed %s type: %s",t,a.message),M(null))}}}var Ne=Array.isArray;function q(e){return Ne(e)}function Ve(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ue(e){try{return ce(e),!1}catch{return!0}}function ce(e){return""+e}function de(e){if(Ue(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ve(e)),ce(e)}var j=O.ReactCurrentOwner,Be={key:!0,ref:!0,__self:!0,__source:!0},ve,pe,J;J={};function qe(e){if(L.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Je(e){if(L.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Ge(e,r){if(typeof e.ref=="string"&&j.current&&r&&j.current.stateNode!==r){var t=g(j.current.type);J[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g(j.current.type),e.ref),J[t]=!0)}}function ze(e,r){{var t=function(){ve||(ve=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function He(e,r){{var t=function(){pe||(pe=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Ke=function(e,r,t,n,i,u,o){var a={$$typeof:P,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function Xe(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(de(t),a=""+t),Je(r)&&(de(r.key),a=""+r.key),qe(r)&&(d=r.ref,Ge(r,i));for(u in r)L.call(r,u)&&!Be.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&ze(o,l),d&&He(o,l)}return Ke(e,a,d,i,n,j.current,o)}}var G=O.ReactCurrentOwner,be=O.ReactDebugCurrentFrame;function C(e){if(e){var r=e._owner,t=Y(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}var z;z=!1;function H(e){return typeof e=="object"&&e!==null&&e.$$typeof===P}function ge(){{if(G.current){var e=g(G.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Ze(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var he={};function Qe(e){{var r=ge();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ee(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Qe(r);if(he[t])return;he[t]=!0;var n="";e&&e._owner&&e._owner!==G.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),C(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),C(null)}}function ye(e,r){{if(typeof e!="object")return;if(q(e))for(var t=0;t<e.length;t++){var n=e[t];H(n)&&Ee(n,r)}else if(H(e))e._store&&(e._store.validated=!0);else if(e){var i=we(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)H(o.value)&&Ee(o.value,r)}}}function er(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===b))t=r.propTypes;else return;if(t){var n=g(r);Me(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!z){z=!0;var i=g(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function rr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){C(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),C(null);break}}e.ref!==null&&(C(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),C(null))}}function _e(e,r,t,n,i,u){{var o=Fe(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=Ze(i);d?a+=d:a+=ge();var s;e===null?s="null":q(e)?s="array":e!==void 0&&e.$$typeof===P?(s="<"+(g(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=Xe(e,r,t,i,u);if(l==null)return l;if(o){var p=r.children;if(p!==void 0)if(n)if(q(p)){for(var w=0;w<p.length;w++)ye(p[w],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ye(p,e)}return e===m?rr(l):er(l),l}}function tr(e,r,t){return _e(e,r,t,!0)}function nr(e,r,t){return _e(e,r,t,!1)}var ar=nr,or=tr;D.Fragment=m,D.jsx=ar,D.jsxs=or}()),D}(function(E){process.env.NODE_ENV==="production"?E.exports=sr():E.exports=lr()})(ur);const fr=K.jsx,cr=ir.button`
  border: none;
  border-radius: 0.5rem;
  background-color: #186faf;
  color: hsl(0deg, 0%, 98%);
  padding: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: #0a558c;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #62b0e8;
    background-color: #0a558c;
  }
`,dr=()=>fr("div",{children:"Hello, World!"}),vr={MyButton:cr,HelloWorld:dr};module.exports=vr;

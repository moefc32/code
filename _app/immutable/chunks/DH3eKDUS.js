import{S as R,A as z,B as J,C as g,D as Q,l as h,U as v,F as y,G as x,H as W,I as X,J as k,K as ee,b as re,h as K,a as ne,E as ie,L as te,M as se,N as ae,O as q,P as B,c as M,p as U,d as fe,Q as ue,R as le,n as C,T as de,V as H,W as oe,u as F,X as ce,Y as V,Z as _e,_ as ve,$ as be,a0 as pe,a1 as G,a2 as D,a3 as he,a4 as Pe}from"./Cmti42fF.js";function S(e,r=null,u){if(typeof e!="object"||e===null||R in e)return e;const a=k(e);if(a!==z&&a!==J)return e;var i=new Map,o=ee(e),b=g(0);o&&i.set("length",g(e.length));var P;return new Proxy(e,{defineProperty(l,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&X();var f=i.get(n);return f===void 0?(f=g(t.value),i.set(n,f)):y(f,S(t.value,P)),!0},deleteProperty(l,n){var t=i.get(n);if(t===void 0)n in l&&i.set(n,g(v));else{if(o&&typeof n=="string"){var f=i.get("length"),s=Number(n);Number.isInteger(s)&&s<f.v&&y(f,s)}y(t,v),Z(b)}return!0},get(l,n,t){var _;if(n===R)return e;var f=i.get(n),s=n in l;if(f===void 0&&(!s||(_=x(l,n))!=null&&_.writable)&&(f=g(S(s?l[n]:v,P)),i.set(n,f)),f!==void 0){var d=h(f);return d===v?void 0:d}return Reflect.get(l,n,t)},getOwnPropertyDescriptor(l,n){var t=Reflect.getOwnPropertyDescriptor(l,n);if(t&&"value"in t){var f=i.get(n);f&&(t.value=h(f))}else if(t===void 0){var s=i.get(n),d=s==null?void 0:s.v;if(s!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(l,n){var d;if(n===R)return!0;var t=i.get(n),f=t!==void 0&&t.v!==v||Reflect.has(l,n);if(t!==void 0||W!==null&&(!f||(d=x(l,n))!=null&&d.writable)){t===void 0&&(t=g(f?S(l[n],P):v),i.set(n,t));var s=h(t);if(s===v)return!1}return f},set(l,n,t,f){var m;var s=i.get(n),d=n in l;if(o&&n==="length")for(var _=t;_<s.v;_+=1){var w=i.get(_+"");w!==void 0?y(w,v):_ in l&&(w=g(v),i.set(_+"",w))}s===void 0?(!d||(m=x(l,n))!=null&&m.writable)&&(s=g(void 0),y(s,S(t,P)),i.set(n,s)):(d=s.v!==v,y(s,S(t,P)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(f,t),!d){if(o&&typeof n=="string"){var O=i.get("length"),E=Number(n);Number.isInteger(E)&&E>=O.v&&y(O,E+1)}Z(b)}return!0},ownKeys(l){h(b);var n=Reflect.ownKeys(l).filter(s=>{var d=i.get(s);return d===void 0||d.v!==v});for(var[t,f]of i)f.v!==v&&!(t in l)&&n.push(t);return n},setPrototypeOf(){Q()}})}function Z(e,r=1){y(e,e.v+r)}function $(e){return e!==null&&typeof e=="object"&&R in e?e[R]:e}function Ie(e,r){return Object.is($(e),$(r))}function Se(e,r,u=!1){K&&ne();var a=e,i=null,o=null,b=v,P=u?ie:0,l=!1;const n=(f,s=!0)=>{l=!0,t(s,f)},t=(f,s)=>{if(b===(b=f))return;let d=!1;if(K){const _=a.data===te;!!b===_&&(a=se(),ae(a),q(!1),d=!0)}b?(i?B(i):s&&(i=M(()=>s(a))),o&&U(o,()=>{o=null})):(o?B(o):s&&(o=M(()=>s(a))),i&&U(i,()=>{i=null})),d&&q(!0)};re(()=>{l=!1,r(n),l||t(null,null)},P),K&&(a=fe)}let T=!1;function ge(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}const ye={get(e,r){if(!e.exclude.includes(r))return h(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,u){return r in e.special||(e.special[r]=me({get[r](){return e.props[r]}},r,H)),e.special[r](u),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function xe(e,r){return new Proxy({props:e,exclude:r,special:{},version:g(0)},ye)}const we={get(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(D(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,u){let a=e.props.length;for(;a--;){let i=e.props[a];D(i)&&(i=i());const o=x(i,r);if(o&&o.set)return o.set(u),!0}return!1},getOwnPropertyDescriptor(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(D(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const i=x(a,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===R||r===V)return!1;for(let u of e.props)if(D(u)&&(u=u()),u!=null&&r in u)return!0;return!1},ownKeys(e){const r=[];for(let u of e.props){D(u)&&(u=u());for(const a in u)r.includes(a)||r.push(a)}return r}};function Oe(...e){return new Proxy({props:e},we)}function me(e,r,u,a){var Y;var i=(u&be)!==0,o=!_e||(u&ve)!==0,b=(u&ce)!==0,P=(u&he)!==0,l=!1,n;b?[n,l]=ge(()=>e[r]):n=e[r];var t=R in e||V in e,f=b&&(((Y=x(e,r))==null?void 0:Y.set)??(t&&r in e&&(c=>e[r]=c)))||void 0,s=a,d=!0,_=!1,w=()=>(_=!0,d&&(d=!1,P?s=F(a):s=a),s);n===void 0&&a!==void 0&&(f&&o&&ue(),n=w(),f&&f(n));var p;if(o)p=()=>{var c=e[r];return c===void 0?w():(d=!0,_=!1,c)};else{var O=(i?C:de)(()=>e[r]);O.f|=le,p=()=>{var c=h(O);return c!==void 0&&(s=void 0),c===void 0?s:c}}if(!(u&H))return p;if(f){var E=e.$$legacy;return function(c,I){return arguments.length>0?((!o||!I||E||l)&&f(I?p():c),c):p()}}var m=!1,L=!1,N=pe(n),A=C(()=>{var c=p(),I=h(N);return m?(m=!1,L=!0,I):(L=!1,N.v=c)});return i||(A.equals=oe),function(c,I){if(Pe!==null&&(m=L,p(),h(N)),arguments.length>0){const j=I?h(A):o&&b?S(c):c;return A.equals(j)||(m=!0,y(N,j),_&&s!==void 0&&(s=j),F(()=>h(A))),c}return h(A)}}export{S as a,Ie as b,Se as i,xe as l,me as p,Oe as s};

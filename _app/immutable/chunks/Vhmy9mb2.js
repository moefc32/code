import{b as $,h as w,a as j,E as V,H as z,A as J,B as Q,C as W,D as N,F as Y,c as q,p as B,U as X,d as x,G as D,I as y,L as k,n as U,J as ee,P as F,l as v,K as re,M as se,N as ne,u as C,O as ie,S as G,Q as H,R as ae,T as ue,V as le,W as te,X as fe,Y as P,Z as ce,_ as K,$ as oe}from"./dgWVF9Vq.js";function he(e,r,[n,s]=[0,0]){w&&n===0&&j();var i=e,u=null,l=null,d=X,I=n>0?V:0,c=!1;const T=(t,o=!0)=>{c=!0,p(o,t)},p=(t,o)=>{if(d===(d=t))return;let b=!1;if(w&&s!==-1){if(n===0){const f=i.data;f===z?s=0:f===J?s=1/0:(s=parseInt(f.substring(1)),s!==s&&(s=d?1/0:-1))}const S=s>n;!!d===S&&(i=Q(),W(i),N(!1),b=!0,s=-1)}d?(u?Y(u):o&&(u=q(()=>o(i))),l&&B(l,()=>{l=null})):(l?Y(l):o&&(l=q(()=>o(i,[n+1,s]))),u&&B(u,()=>{u=null})),b&&N(!0)};$(()=>{c=!1,r(T),c||p(null,null)},I),w&&(i=x)}let E=!1;function _e(e){var r=E;try{return E=!1,[e(),E]}finally{E=r}}const pe={get(e,r){if(!e.exclude.includes(r))return v(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=de({get[r](){return e.props[r]}},r,F)),e.special[r](n),K(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),K(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Pe(e,r){return new Proxy({props:e,exclude:r,special:{},version:ce(0)},pe)}const ve={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(P(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,n){let s=e.props.length;for(;s--;){let i=e.props[s];P(i)&&(i=i());const u=D(i,r);if(u&&u.set)return u.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(P(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const i=D(s,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===G||r===H)return!1;for(let n of e.props)if(P(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){P(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function Ie(...e){return new Proxy({props:e},ve)}function M(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function de(e,r,n,s){var L;var i=(n&le)!==0,u=!ae||(n&ue)!==0,l=(n&ie)!==0,d=(n&fe)!==0,I=!1,c;l?[c,I]=_e(()=>e[r]):c=e[r];var T=G in e||H in e,p=l&&(((L=D(e,r))==null?void 0:L.set)??(T&&r in e&&(a=>e[r]=a)))||void 0,t=s,o=!0,b=!1,S=()=>(b=!0,o&&(o=!1,d?t=C(s):t=s),t);c===void 0&&s!==void 0&&(p&&u&&y(),c=S(),p&&p(c));var f;if(u)f=()=>{var a=e[r];return a===void 0?S():(o=!0,b=!1,a)};else{var g=(i?U:ee)(()=>e[r]);g.f|=k,f=()=>{var a=v(g);return a!==void 0&&(t=void 0),a===void 0?t:a}}if(!(n&F))return f;if(p){var Z=e.$$legacy;return function(a,h){return arguments.length>0?((!u||!h||Z||I)&&p(h?f():a),a):f()}}var R=!1,m=!1,A=te(c),_=U(()=>{var a=f(),h=v(A);return R?(R=!1,m=!0,h):(m=!1,A.v=a)});return l&&v(_),i||(_.equals=re),function(a,h){if(oe!==null&&(R=m,f(),v(A)),arguments.length>0){const O=h?v(_):u&&l?se(a):a;if(!_.equals(O)){if(R=!0,ne(A,O),b&&t!==void 0&&(t=O),M(_))return a;C(()=>v(_))}return a}return M(_)?_.v:v(_)}}export{he as i,Pe as l,de as p,Ie as s};

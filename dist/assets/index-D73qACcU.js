var yp=Object.defineProperty;var _p=(N,x,p)=>x in N?yp(N,x,{enumerable:!0,configurable:!0,writable:!0,value:p}):N[x]=p;var el=(N,x,p)=>_p(N,typeof x!="symbol"?x+"":x,p);(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))d(C);new MutationObserver(C=>{for(const k of C)if(k.type==="childList")for(const lt of k.addedNodes)lt.tagName==="LINK"&&lt.rel==="modulepreload"&&d(lt)}).observe(document,{childList:!0,subtree:!0});function p(C){const k={};return C.integrity&&(k.integrity=C.integrity),C.referrerPolicy&&(k.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?k.credentials="include":C.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function d(C){if(C.ep)return;C.ep=!0;const k=p(C);fetch(C.href,k)}})();function p1(N){return N&&N.__esModule&&Object.prototype.hasOwnProperty.call(N,"default")?N.default:N}var jc={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1;function wp(){if(l1)return gi;l1=1;var N=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function p(d,C,k){var lt=null;if(k!==void 0&&(lt=""+k),C.key!==void 0&&(lt=""+C.key),"key"in C){k={};for(var Tt in C)Tt!=="key"&&(k[Tt]=C[Tt])}else k=C;return C=k.ref,{$$typeof:N,type:d,key:lt,ref:C!==void 0?C:null,props:k}}return gi.Fragment=x,gi.jsx=p,gi.jsxs=p,gi}var n1;function Np(){return n1||(n1=1,jc.exports=wp()),jc.exports}var u=Np(),zc={exports:{}},I={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1;function Sp(){if(i1)return I;i1=1;var N=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),it=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),H=Symbol.for("react.view_transition"),L=Symbol.iterator;function mt(s){return s===null||typeof s!="object"?null:(s=L&&s[L]||s["@@iterator"],typeof s=="function"?s:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,Ht={};function qt(s,T,M){this.props=s,this.context=T,this.refs=Ht,this.updater=M||q}qt.prototype.isReactComponent={},qt.prototype.setState=function(s,T){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,T,"setState")},qt.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function pe(){}pe.prototype=qt.prototype;function Kt(s,T,M){this.props=s,this.context=T,this.refs=Ht,this.updater=M||q}var ue=Kt.prototype=new pe;ue.constructor=Kt,Z(ue,qt.prototype),ue.isPureReactComponent=!0;var Jt=Array.isArray;function et(){}var ct={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function ge(s,T,M){var E=M.ref;return{$$typeof:N,type:s,key:T,ref:E!==void 0?E:null,props:M}}function be(s,T){return ge(s.type,T,s.props)}function se(s){return typeof s=="object"&&s!==null&&s.$$typeof===N}function Ie(s){var T={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(M){return T[M]})}var Pe=/\/+/g;function kt(s,T){return typeof s=="object"&&s!==null&&s.key!=null?Ie(""+s.key):T.toString(36)}function D(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(et,et):(s.status="pending",s.then(function(T){s.status==="pending"&&(s.status="fulfilled",s.value=T)},function(T){s.status==="pending"&&(s.status="rejected",s.reason=T)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function F(s,T,M,E,U){var V=typeof s;(V==="undefined"||V==="boolean")&&(s=null);var K=!1;if(s===null)K=!0;else switch(V){case"bigint":case"string":case"number":K=!0;break;case"object":switch(s.$$typeof){case N:case x:K=!0;break;case B:return K=s._init,F(K(s._payload),T,M,E,U)}}if(K)return U=U(s),K=E===""?"."+kt(s,0):E,Jt(U)?(M="",K!=null&&(M=K.replace(Pe,"$&/")+"/"),F(U,T,M,"",function(jt){return jt})):U!=null&&(se(U)&&(U=be(U,M+(U.key==null||s&&s.key===U.key?"":(""+U.key).replace(Pe,"$&/")+"/")+K)),T.push(U)),1;K=0;var A=E===""?".":E+":";if(Jt(s))for(var R=0;R<s.length;R++)E=s[R],V=A+kt(E,R),K+=F(E,T,M,V,U);else if(R=mt(s),typeof R=="function")for(s=R.call(s),R=0;!(E=s.next()).done;)E=E.value,V=A+kt(E,R++),K+=F(E,T,M,V,U);else if(V==="object"){if(typeof s.then=="function")return F(D(s),T,M,E,U);throw T=String(s),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return K}function W(s,T,M){if(s==null)return s;var E=[],U=0;return F(s,E,"","",function(V){return T.call(M,V,U++)}),E}function vt(s){if(s._status===-1){var T=s._result,M=T();M.then(function(E){(s._status===0||s._status===-1)&&(s._status=1,s._result=E,M.status===void 0&&(M.status="fulfilled",M.value=E))},function(E){(s._status===0||s._status===-1)&&(s._status=2,s._result=E,M.status===void 0&&(M.status="rejected",M.reason=E))}),s._status===-1&&(s._status=0,s._result=M)}if(s._status===1)return s._result.default;throw s._result}var v=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function m(s){var T=ct.T,M={};M.types=T!==null?T.types:null,ct.T=M;try{var E=s(),U=ct.S;U!==null&&U(M,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(et,v)}catch(V){v(V)}finally{T!==null&&M.types!==null&&(T.types=M.types),ct.T=T}}function Q(s){var T=ct.T;if(T!==null){var M=T.types;M===null?T.types=[s]:M.indexOf(s)===-1&&M.push(s)}else m(Q.bind(null,s))}var J={map:W,forEach:function(s,T,M){W(s,function(){T.apply(this,arguments)},M)},count:function(s){var T=0;return W(s,function(){T++}),T},toArray:function(s){return W(s,function(T){return T})||[]},only:function(s){if(!se(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return I.Activity=S,I.Children=J,I.Component=qt,I.Fragment=p,I.Profiler=C,I.PureComponent=Kt,I.StrictMode=d,I.Suspense=nt,I.ViewTransition=H,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ct,I.__COMPILER_RUNTIME={__proto__:null,c:function(s){return ct.H.useMemoCache(s)}},I.addTransitionType=Q,I.cache=function(s){return function(){return s.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(s,T,M){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var E=Z({},s.props),U=s.key;if(T!=null)for(V in T.key!==void 0&&(U=""+T.key),T)!ke.call(T,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&T.ref===void 0||(E[V]=T[V]);var V=arguments.length-2;if(V===1)E.children=M;else if(1<V){for(var K=Array(V),A=0;A<V;A++)K[A]=arguments[A+2];E.children=K}return ge(s.type,U,E)},I.createContext=function(s){return s={$$typeof:lt,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:k,_context:s},s},I.createElement=function(s,T,M){var E,U={},V=null;if(T!=null)for(E in T.key!==void 0&&(V=""+T.key),T)ke.call(T,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(U[E]=T[E]);var K=arguments.length-2;if(K===1)U.children=M;else if(1<K){for(var A=Array(K),R=0;R<K;R++)A[R]=arguments[R+2];U.children=A}if(s&&s.defaultProps)for(E in K=s.defaultProps,K)U[E]===void 0&&(U[E]=K[E]);return ge(s,V,U)},I.createRef=function(){return{current:null}},I.forwardRef=function(s){return{$$typeof:Tt,render:s}},I.isValidElement=se,I.lazy=function(s){return{$$typeof:B,_payload:{_status:-1,_result:s},_init:vt}},I.memo=function(s,T){return{$$typeof:it,type:s,compare:T===void 0?null:T}},I.startTransition=m,I.unstable_useCacheRefresh=function(){return ct.H.useCacheRefresh()},I.use=function(s){return ct.H.use(s)},I.useActionState=function(s,T,M){return ct.H.useActionState(s,T,M)},I.useCallback=function(s,T){return ct.H.useCallback(s,T)},I.useContext=function(s){return ct.H.useContext(s)},I.useDebugValue=function(){},I.useDeferredValue=function(s,T){return ct.H.useDeferredValue(s,T)},I.useEffect=function(s,T){return ct.H.useEffect(s,T)},I.useEffectEvent=function(s){return ct.H.useEffectEvent(s)},I.useId=function(){return ct.H.useId()},I.useImperativeHandle=function(s,T,M){return ct.H.useImperativeHandle(s,T,M)},I.useInsertionEffect=function(s,T){return ct.H.useInsertionEffect(s,T)},I.useLayoutEffect=function(s,T){return ct.H.useLayoutEffect(s,T)},I.useMemo=function(s,T){return ct.H.useMemo(s,T)},I.useOptimistic=function(s,T){return ct.H.useOptimistic(s,T)},I.useReducer=function(s,T,M){return ct.H.useReducer(s,T,M)},I.useRef=function(s){return ct.H.useRef(s)},I.useState=function(s){return ct.H.useState(s)},I.useSyncExternalStore=function(s,T,M){return ct.H.useSyncExternalStore(s,T,M)},I.useTransition=function(){return ct.H.useTransition()},I.version="19.3.1",I}var r1;function Cc(){return r1||(r1=1,zc.exports=Sp()),zc.exports}var At=Cc();const Tp=p1(At);var Ec={exports:{}},bi={},Mc={exports:{}},qc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1;function jp(){return u1||(u1=1,(function(N){function x(D,F){var W=D.length;D.push(F);t:for(;0<W;){var vt=W-1>>>1,v=D[vt];if(0<C(v,F))D[vt]=F,D[W]=v,W=vt;else break t}}function p(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var F=D[0],W=D.pop();if(W!==F){D[0]=W;t:for(var vt=0,v=D.length,m=v>>>1;vt<m;){var Q=2*(vt+1)-1,J=D[Q],s=Q+1,T=D[s];if(0>C(J,W))s<v&&0>C(T,J)?(D[vt]=T,D[s]=W,vt=s):(D[vt]=J,D[Q]=W,vt=Q);else if(s<v&&0>C(T,W))D[vt]=T,D[s]=W,vt=s;else break t}}return F}function C(D,F){var W=D.sortIndex-F.sortIndex;return W!==0?W:D.id-F.id}if(N.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;N.unstable_now=function(){return k.now()}}else{var lt=Date,Tt=lt.now();N.unstable_now=function(){return lt.now()-Tt}}var nt=[],it=[],B=1,S=null,H=3,L=!1,mt=!1,q=!1,Z=!1,Ht=typeof setTimeout=="function"?setTimeout:null,qt=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;function Kt(D){for(var F=p(it);F!==null;){if(F.callback===null)d(it);else if(F.startTime<=D)d(it),F.sortIndex=F.expirationTime,x(nt,F);else break;F=p(it)}}function ue(D){if(q=!1,Kt(D),!mt)if(p(nt)!==null)mt=!0,Jt||(Jt=!0,se());else{var F=p(it);F!==null&&kt(ue,F.startTime-D)}}var Jt=!1,et=-1,ct=5,ke=-1;function ge(){return Z?!0:!(N.unstable_now()-ke<ct)}function be(){if(Z=!1,Jt){var D=N.unstable_now();ke=D;var F=!0;try{t:{mt=!1,q&&(q=!1,qt(et),et=-1),L=!0;var W=H;try{e:{for(Kt(D),S=p(nt);S!==null&&!(S.expirationTime>D&&ge());){var vt=S.callback;if(typeof vt=="function"){S.callback=null,H=S.priorityLevel;var v=vt(S.expirationTime<=D);if(D=N.unstable_now(),typeof v=="function"){S.callback=v,Kt(D),F=!0;break e}S===p(nt)&&d(nt),Kt(D)}else d(nt);S=p(nt)}if(S!==null)F=!0;else{var m=p(it);m!==null&&kt(ue,m.startTime-D),F=!1}}break t}finally{S=null,H=W,L=!1}F=void 0}}finally{F?se():Jt=!1}}}var se;if(typeof pe=="function")se=function(){pe(be)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Pe=Ie.port2;Ie.port1.onmessage=be,se=function(){Pe.postMessage(null)}}else se=function(){Ht(be,0)};function kt(D,F){et=Ht(function(){D(N.unstable_now())},F)}N.unstable_IdlePriority=5,N.unstable_ImmediatePriority=1,N.unstable_LowPriority=4,N.unstable_NormalPriority=3,N.unstable_Profiling=null,N.unstable_UserBlockingPriority=2,N.unstable_cancelCallback=function(D){D.callback=null},N.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ct=0<D?Math.floor(1e3/D):5},N.unstable_getCurrentPriorityLevel=function(){return H},N.unstable_next=function(D){switch(H){case 1:case 2:case 3:var F=3;break;default:F=H}var W=H;H=F;try{return D()}finally{H=W}},N.unstable_requestPaint=function(){Z=!0},N.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=H;H=D;try{return F()}finally{H=W}},N.unstable_scheduleCallback=function(D,F,W){var vt=N.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?vt+W:vt):W=vt,D){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=W+v,D={id:B++,callback:F,priorityLevel:D,startTime:W,expirationTime:v,sortIndex:-1},W>vt?(D.sortIndex=W,x(it,D),p(nt)===null&&D===p(it)&&(q?(qt(et),et=-1):q=!0,kt(ue,W-vt))):(D.sortIndex=v,x(nt,D),mt||L||(mt=!0,Jt||(Jt=!0,se()))),D},N.unstable_shouldYield=ge,N.unstable_wrapCallback=function(D){var F=H;return function(){var W=H;H=F;try{return D.apply(this,arguments)}finally{H=W}}}})(qc)),qc}var o1;function zp(){return o1||(o1=1,Mc.exports=jp()),Mc.exports}var Ac={exports:{}},re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1;function Ep(){if(c1)return re;c1=1;var N=Cc();function x(B){var S="https://react.dev/errors/"+B;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)S+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+B+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var d={d:{f:p,r:function(){throw Error(x(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},C=Symbol.for("react.portal"),k=Symbol.for("react.recoverable"),lt=Symbol.for("react.optimistic_key");function Tt(B,S,H){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:L==null?null:L===lt?lt:""+L,children:B,containerInfo:S,implementation:H}}var nt=N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function it(B,S){if(B==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,re.browser=function(B){return{$$typeof:k,_reason:B}},re.createPortal=function(B,S){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(x(299));return Tt(B,S,null,H)},re.flushSync=function(B){var S=nt.T,H=d.p;try{if(nt.T=null,d.p=2,B)return B()}finally{nt.T=S,d.p=H,d.d.f()}},re.preconnect=function(B,S){typeof B=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,d.d.C(B,S))},re.prefetchDNS=function(B){typeof B=="string"&&d.d.D(B)},re.preinit=function(B,S){if(typeof B=="string"&&S&&typeof S.as=="string"){var H=S.as,L=it(H,S.crossOrigin),mt=typeof S.integrity=="string"?S.integrity:void 0,q=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;H==="style"?d.d.S(B,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:L,integrity:mt,fetchPriority:q}):H==="script"&&d.d.X(B,{crossOrigin:L,integrity:mt,fetchPriority:q,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},re.preinitModule=function(B,S){if(typeof B=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var H=it(S.as,S.crossOrigin);d.d.M(B,{crossOrigin:H,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}}else S==null&&d.d.M(B)},re.preload=function(B,S){if(typeof B=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var H=S.as,L=it(H,S.crossOrigin);d.d.L(B,H,{crossOrigin:L,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},re.preloadModule=function(B,S){if(typeof B=="string")if(S){var H=it(S.as,S.crossOrigin);d.d.m(B,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:H,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}else d.d.m(B)},re.requestFormReset=function(B){d.d.r(B)},re.unstable_batchedUpdates=function(B,S){return B(S)},re.useFormState=function(B,S,H){return nt.H.useFormState(B,S,H)},re.useFormStatus=function(){return nt.H.useHostTransitionStatus()},re.version="19.3.1",re}var s1;function Mp(){if(s1)return Ac.exports;s1=1;function N(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)}catch(x){console.error(x)}}return N(),Ac.exports=Ep(),Ac.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1;function qp(){if(f1)return bi;f1=1;var N=zp(),x=Cc(),p=Mp();function d(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function k(t){for(var e=t,a=e;a&&!a.alternate;)e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function lt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nt(t){if(k(t)!==t)throw Error(d(188))}function it(t){var e=t.alternate;if(!e){if(e=k(t),e===null)throw Error(d(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return nt(n),t;if(i===l)return nt(n),e;i=i.sibling}throw Error(d(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,o=n.child;o;){if(o===a){r=!0,a=n,l=i;break}if(o===l){r=!0,l=n,a=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===a){r=!0,a=i,l=n;break}if(o===l){r=!0,l=i,a=n;break}o=o.sibling}if(!r)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?t:e}function B(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=B(t),e!==null)return e;t=t.sibling}return null}function S(t,e,a,l,n,i){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,l,n,i)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&S(t.child,e,a,l,n,i))return!0;t=t.sibling}return!1}function H(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function L(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function mt(t){var e=[null,null],a=H(t);return a===null||q(e,t,a.child,{foundSelf:!1}),e}function q(t,e,a,l){for(;a!==null;){if(a===e)l.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(l.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&q(t,e,a.child,l))return!0;a=a.sibling}return!1}function Z(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(d(559))}}var Ht=null,qt=null;function pe(t,e,a){return t===a?!0:t===e?(Ht=t,!0):!1}function Kt(t,e,a){return t===a?(qt=t,!1):t===e?(qt!==null&&(Ht=t),!0):!1}function ue(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Jt(t,e,a){for(var l=0,n=t;n;n=a(n))l++;n=0;for(var i=e;i;i=a(i))n++;for(;0<l-n;)t=a(t),l--;for(;0<n-l;)e=a(e),n--;for(;l--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var et=Object.assign,ct=Symbol.for("react.element"),ke=Symbol.for("react.transitional.element"),ge=Symbol.for("react.portal"),be=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Pe=Symbol.for("react.consumer"),kt=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),Q=Symbol.for("react.legacy_hidden"),J=Symbol.for("react.memo_cache_sentinel"),s=Symbol.for("react.view_transition"),T=Symbol.for("react.recoverable"),M=Symbol.iterator;function E(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var U=Symbol.for("react.client.reference");function V(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===U?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case be:return"Fragment";case Ie:return"Profiler";case se:return"StrictMode";case F:return"Suspense";case W:return"SuspenseList";case m:return"Activity";case s:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case ge:return"Portal";case kt:return t.displayName||"Context";case Pe:return(t._context.displayName||"Context")+".Consumer";case D:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return e=t.displayName||null,e!==null?e:V(t.type)||"Memo";case v:e=t._payload,t=t._init;try{return V(t(e))}catch{}}return null}var K=Array.isArray,A=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,jt={pending:!1,data:null,method:null,action:null},rt=[],Yt=-1;function Ut(t){return{current:t}}function yt(t){0>Yt||(t.current=rt[Yt],rt[Yt]=null,Yt--)}function st(t,e){Yt++,rt[Yt]=t.current,t.current=e}var Ft=Ut(null),oe=Ut(null),ta=Ut(null),zl=Ut(null);function El(t,e){switch(st(ta,e),st(oe,t),st(Ft,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?dd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=dd(e),t=md(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Ft),st(Ft,t)}function da(){yt(Ft),yt(oe),yt(ta)}function _n(t){var e=t.memoizedState;e!==null&&(bn._currentValue=e.memoizedState,st(zl,t)),e=Ft.current;var a=md(e,t.type);e!==a&&(st(oe,t),st(Ft,a))}function al(t){oe.current===t&&(yt(Ft),yt(oe)),zl.current===t&&(yt(zl),bn._currentValue=jt)}var wn,xi;function Ve(t){if(wn===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);wn=e&&e[1]||"",xi=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wn+t+xi}var Ml=!1;function ll(t,e){if(!t||Ml)return"";Ml=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(O){var h=O}Reflect.construct(t,[],z)}else{try{z.call()}catch(O){h=O}z=!1;try{var _=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),z=!0,new t}finally{z&&(_!==void 0?Object.defineProperty(t.prototype,"props",_):delete t.prototype.props)}}}else{try{throw Error()}catch(O){h=O}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(O){if(O&&h&&typeof O.stack=="string")return[O.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],o=i[1];if(r&&o){var c=r.split(`
`),b=o.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===b.length)for(l=c.length-1,n=b.length-1;1<=l&&0<=n&&c[l]!==b[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==b[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==b[n]){var w=`
`+c[l].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=l&&0<=n);break}}}finally{Ml=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ve(a):""}function Jr(t,e){switch(t.tag){case 26:case 27:case 5:return Ve(t.type);case 16:return Ve("Lazy");case 13:return t.child!==e&&e!==null?Ve("Suspense Fallback"):Ve("Suspense");case 19:return Ve("SuspenseList");case 0:case 15:return ll(t.type,!1);case 11:return ll(t.type.render,!1);case 1:return ll(t.type,!0);case 31:return Ve("Activity");case 30:return Ve("ViewTransition");default:return""}}function vi(t){try{var e="",a=null;do e+=Jr(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Fr=Object.prototype.hasOwnProperty,$r=N.unstable_scheduleCallback,Wr=N.unstable_cancelCallback,T1=N.unstable_shouldYield,j1=N.unstable_requestPaint,Se=N.unstable_now,z1=N.unstable_getCurrentPriorityLevel,Dc=N.unstable_ImmediatePriority,kc=N.unstable_UserBlockingPriority,yi=N.unstable_NormalPriority,E1=N.unstable_LowPriority,Uc=N.unstable_IdlePriority,M1=N.log,q1=N.unstable_setDisableYieldValue,Nn=null,Te=null;function Ea(t){if(typeof M1=="function"&&q1(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Nn,t)}catch{}}var je=Math.clz32?Math.clz32:O1,A1=Math.log,C1=Math.LN2;function O1(t){return t>>>=0,t===0?32:31-(A1(t)/C1|0)|0}var _i=256,wi=262144,Ni=4194304;function nl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Si(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=nl(l):(r&=o,r!==0?n=nl(r):a||(a=o&~t,a!==0&&(n=nl(a))))):(o=l&~i,o!==0?n=nl(o):r!==0?n=nl(r):a||(a=l&~t,a!==0&&(n=nl(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Sn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Rc(t,e){(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-je(a),n=1<<l;e|=t[l],a&=~n}return e}function D1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bc(){var t=Ni;return Ni<<=1,(Ni&62914560)===0&&(Ni=4194304),t}function Ir(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Tn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function k1(t,e,a,l,n,i){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,c=t.expirationTimes,b=t.hiddenUpdates;for(a=r&~a;0<a;){var w=31-je(a),z=1<<w;o[w]=0,c[w]=-1;var h=b[w];if(h!==null)for(b[w]=null,w=0;w<h.length;w++){var _=h[w];_!==null&&(_.lane&=-536870913)}a&=~z}l!==0&&Hc(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(r&~e))}function Hc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-je(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Yc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-je(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function Zc(t,e){var a=e&-e;return a=(a&42)!==0?1:Pr(a),(a&(t.suspendedLanes|e))!==0?0:a}function Pr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Lc(){var t=R.p;return t!==0?t:(t=window.event,t===void 0?32:$d(t.type))}function Gc(t,e){var a=R.p;try{return R.p=t,e()}finally{R.p=a}}var ma=Math.random().toString(36).slice(2),te="__reactFiber$"+ma,xe="__reactProps$"+ma,ql="__reactContainer$"+ma,Qc="__reactEvents$"+ma,U1="__reactListeners$"+ma,R1="__reactHandles$"+ma,Vc="__reactResources$"+ma,jn="__reactMarker$"+ma,Ti="__reactLoad$"+ma;function ji(t){delete t[te],delete t[xe],delete t[U1],delete t[R1]}function il(t){var e;if(e=t[te])return e;for(var a=t.parentNode;a;){if(e=a[ql]||a[te]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=qd(t);t!==null;){if(a=t[te])return a;t=qd(t)}return e}t=a,a=t.parentNode}return null}function Al(t){if(t=t[te]||t[ql]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function zn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(d(33))}function Cl(t){var e=t[Vc];return e||(e=t[Vc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $t(t){t[jn]=!0}function Xc(t){t[Ti]=void 0}var Kc=new Set,Jc={};function rl(t,e){Ol(t,e),Ol(t+"Capture",e)}function Ol(t,e){for(Jc[t]=e,t=0;t<e.length;t++)Kc.add(e[t])}var B1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fc={},$c={};function H1(t){return Fr.call($c,t)?!0:Fr.call(Fc,t)?!1:B1.test(t)?$c[t]=!0:(Fc[t]=!0,!1)}var gt=!1;function Wc(){var t=gt;return gt=!1,t}function zi(t,e,a){if(H1(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function Ei(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function ha(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,l)}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ic(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y1(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){if(!t._valueTracker){var e=Ic(t)?"checked":"value";t._valueTracker=Y1(t,e,""+t[e])}}function Pc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=Ic(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}var Z1=/[\n"\\]/g;function Ue(t){return t.replace(Z1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function au(t,e,a,l,n,i,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ze(e)):t.value!==""+ze(e)&&(t.value=""+ze(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?r==="number"&&t.value==e?lu(t,ze(t.value)):lu(t,ze(e)):a!=null?lu(t,ze(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ze(o):t.removeAttribute("name")}function ts(t,e,a,l,n,i,r,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){eu(t);return}a=a!=null?""+ze(a):"",e=e!=null?""+ze(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=o?t.checked:!!l,t.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),eu(t)}function lu(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Dl(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function es(t,e,a){if(e!=null&&(e=""+ze(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ze(a):""}function as(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(d(92));if(K(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=ze(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),eu(t)}function kl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var L1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ls(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||L1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ns(t,e,a){if(e!=null&&typeof e!="object")throw Error(d(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="",gt=!0);for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&(ls(t,n,l),gt=!0)}else for(var i in e)e.hasOwnProperty(i)&&ls(t,i,e[i])}function nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Q1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mi(t){return Q1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var iu=null;function ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ul=null,Rl=null;function is(t){var e=Al(t);if(e&&(t=e.stateNode)){var a=t[xe]||null;t:switch(t=e.stateNode,e.type){case"input":if(au(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ue(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[xe]||null;if(!n)throw Error(d(90));au(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&Pc(l)}break t;case"textarea":es(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Dl(t,!!a.multiple,e,!1)}}}var uu=!1;function rs(t,e,a){if(uu)return t(e,a);uu=!0;try{var l=t(e);return l}finally{if(uu=!1,(Ul!==null||Rl!==null)&&(Mr(),Ul&&(e=Ul,t=Rl,Rl=Ul=null,is(e),t)))for(e=0;e<t.length;e++)is(t[e])}}function En(t,e){var a=t.stateNode;if(a===null)return null;var l=a[xe]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(d(231,e,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(pa)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{ou=!1}var Ma=null,cu=null,qi=null;function us(){if(qi)return qi;var t,e=cu,a=e.length,l,n="value"in Ma?Ma.value:Ma.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var r=a-t;for(l=1;l<=r&&e[a-l]===n[i-l];l++);return qi=n.slice(t,1<l?1-l:void 0)}function Ai(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ci(){return!0}function os(){return!1}function fe(t){function e(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ci:os,this.isPropagationStopped=os,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),e}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=fe(qa),qn=et({},qa,{view:0,detail:0}),V1=fe(qn),su,fu,An,Di=et({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==An&&(An&&t.type==="mousemove"?(su=t.screenX-An.screenX,fu=t.screenY-An.screenY):fu=su=0,An=t),su)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),cs=fe(Di),X1=et({},Di,{dataTransfer:0}),K1=fe(X1),J1=et({},qn,{relatedTarget:0}),du=fe(J1),F1=et({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=fe(F1),W1=et({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I1=fe(W1),P1=et({},qa,{data:0}),ss=fe(P1),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=am[t])?!!e[t]:!1}function mu(){return lm}var nm=et({},qn,{key:function(t){if(t.key){var e=tm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ai(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?em[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?Ai(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ai(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),im=fe(nm),rm=et({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fs=fe(rm),um=et({},qa,{submitter:0}),om=fe(um),cm=et({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),sm=fe(cm),fm=et({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),dm=fe(fm),mm=et({},Di,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=fe(mm),pm=et({},qa,{newState:0,oldState:0,source:0}),gm=fe(pm),bm=[9,13,27,32],hu=pa&&"CompositionEvent"in window,Cn=null;pa&&"documentMode"in document&&(Cn=document.documentMode);var xm=pa&&"TextEvent"in window&&!Cn,ds=pa&&(!hu||Cn&&8<Cn&&11>=Cn),ms=" ",hs=!1;function ps(t,e){switch(t){case"keyup":return bm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bl=!1;function vm(t,e){switch(t){case"compositionend":return gs(e);case"keypress":return e.which!==32?null:(hs=!0,ms);case"textInput":return t=e.data,t===ms&&hs?null:t;default:return null}}function ym(t,e){if(Bl)return t==="compositionend"||!hu&&ps(t,e)?(t=us(),qi=cu=Ma=null,Bl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ds&&e.locale!=="ko"?null:e.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_m[t.type]:e==="textarea"}function xs(t,e,a,l){Ul?Rl?Rl.push(l):Rl=[l]:Ul=l,e=kr(e,"onChange"),0<e.length&&(a=new Oi("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var On=null,Dn=null;function wm(t){rd(t,0)}function ki(t){var e=zn(t);if(Pc(e))return t}function vs(t,e){if(t==="change")return e}var ys=!1;if(pa){var pu;if(pa){var gu="oninput"in document;if(!gu){var _s=document.createElement("div");_s.setAttribute("oninput","return;"),gu=typeof _s.oninput=="function"}pu=gu}else pu=!1;ys=pu&&(!document.documentMode||9<document.documentMode)}function ws(){On&&(On.detachEvent("onpropertychange",Ns),Dn=On=null)}function Ns(t){if(t.propertyName==="value"&&ki(Dn)){var e=[];xs(e,Dn,t,ru(t)),rs(wm,e)}}function Nm(t,e,a){t==="focusin"?(ws(),On=e,Dn=a,On.attachEvent("onpropertychange",Ns)):t==="focusout"&&ws()}function Sm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ki(Dn)}function Tm(t,e){if(t==="click")return ki(e)}function jm(t,e){if(t==="input"||t==="change")return ki(e)}function zm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ee=typeof Object.is=="function"?Object.is:zm;function kn(t,e){if(Ee(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Fr.call(e,n)||!Ee(t[n],e[n]))return!1}return!0}function bu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ss(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ts(t,e){var a=Ss(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ss(a)}}function js(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?js(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=bu(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=bu(t.document)}return e}function xu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Em=pa&&"documentMode"in document&&11>=document.documentMode,Hl=null,vu=null,Un=null,yu=!1;function Es(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Hl==null||Hl!==bu(l)||(l=Hl,"selectionStart"in l&&xu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Un&&kn(Un,l)||(Un=l,l=kr(vu,"onSelect"),0<l.length&&(e=new Oi("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Hl)))}function ul(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Yl={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionrun:ul("Transition","TransitionRun"),transitionstart:ul("Transition","TransitionStart"),transitioncancel:ul("Transition","TransitionCancel"),transitionend:ul("Transition","TransitionEnd")},_u={},Ms={};pa&&(Ms=document.createElement("div").style,"AnimationEvent"in window||(delete Yl.animationend.animation,delete Yl.animationiteration.animation,delete Yl.animationstart.animation),"TransitionEvent"in window||delete Yl.transitionend.transition);function ol(t){if(_u[t])return _u[t];if(!Yl[t])return t;var e=Yl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Ms)return _u[t]=e[a];return t}var qs=ol("animationend"),As=ol("animationiteration"),Cs=ol("animationstart"),Mm=ol("transitionrun"),qm=ol("transitionstart"),Am=ol("transitioncancel"),Os=ol("transitionend"),Ds=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function Xe(t,e){Ds.set(t,e),rl(e,[t])}var Cm=0;function ga(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=$e.identifierPrefix;var a=Cm++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function ks(t){if(t==null||typeof t=="string")return t;var e=null,a=un;if(a!==null)for(var l=0;l<a.length;l++){var n=t[a[l]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function ba(t,e){return t=ks(t),e=ks(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Ui=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Re=[],Zl=0,Nu=0;function Ri(){for(var t=Zl,e=Nu=Zl=0;e<t;){var a=Re[e];Re[e++]=null;var l=Re[e];Re[e++]=null;var n=Re[e];Re[e++]=null;var i=Re[e];if(Re[e++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&Us(a,n,i)}}function Bi(t,e,a,l){Re[Zl++]=t,Re[Zl++]=e,Re[Zl++]=a,Re[Zl++]=l,Nu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Su(t,e,a,l){return Bi(t,e,a,l),Hi(t)}function cl(t,e){return Bi(t,null,null,e),Hi(t)}function Us(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-je(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function Hi(t){if(50<ni)throw ni=0,Er=null,Error(d(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ll={};function Om(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ve(t,e,a,l){return new Om(t,e,a,l)}function Tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,e){var a=t.alternate;return a===null?(a=ve(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Rs(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Yi(t,e,a,l,n,i){var r=0;if(l=t,typeof l=="function")Tu(l)&&(r=1);else if(typeof l=="string")r=up(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(l){case m:return t=ve(31,a,e,n),t.elementType=m,t.lanes=i,t;case be:return sl(a.children,n,i,e);case se:r=8,n|=24;break;case Ie:return t=ve(12,a,e,n|2),t.elementType=Ie,t.lanes=i,t;case F:return t=ve(13,a,e,n),t.elementType=F,t.lanes=i,t;case W:return t=ve(19,a,e,n),t.elementType=W,t.lanes=i,t;case Q:case s:return t=n|32,t=ve(30,a,e,t),t.elementType=s,t.lanes=i,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case kt:r=10;break t;case Pe:r=9;break t;case D:r=11;break t;case vt:r=14;break t;case v:r=16,l=null;break t}r=29,a=Error(d(130,t===null?"null":typeof t,"")),l=null}return e=ve(r,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function sl(t,e,a,l){return t=ve(7,t,l,e),t.lanes=a,t}function ju(t,e,a){return t=ve(6,t,null,e),t.lanes=a,t}function Bs(t){var e=ve(18,null,null,0);return e.stateNode=t,e}function zu(t,e,a){return e=ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Hs=new WeakMap;function Be(t,e){if(typeof t=="object"&&t!==null){var a=Hs.get(t);return a!==void 0?a:(e={value:t,source:e,stack:vi(e)},Hs.set(t,e),e)}return{value:t,source:e,stack:vi(e)}}var Gl=[],Ql=0,Zi=null,Rn=0,He=[],Ye=0,Aa=null,aa=1,la="";function va(t,e){Gl[Ql++]=Rn,Gl[Ql++]=Zi,Zi=t,Rn=e}function Ys(t,e,a){He[Ye++]=aa,He[Ye++]=la,He[Ye++]=Aa,Aa=t;var l=aa;t=la;var n=32-je(l)-1;l&=~(1<<n),a+=1;var i=32-je(e)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,aa=1<<32-je(e)+n|a<<n|l,la=i+t}else aa=1<<i|a<<n|l,la=t}function Li(t){t.return!==null&&(va(t,1),Ys(t,1,0))}function Eu(t){for(;t===Zi;)Zi=Gl[--Ql],Gl[Ql]=null,Rn=Gl[--Ql],Gl[Ql]=null;for(;t===Aa;)Aa=He[--Ye],He[Ye]=null,la=He[--Ye],He[Ye]=null,aa=He[--Ye],He[Ye]=null}function Zs(t,e){He[Ye++]=aa,He[Ye++]=la,He[Ye++]=Aa,aa=e.id,la=e.overflow,Aa=t}var Wt=null,Et=null,at=!1,Ca=null,Ze=!1,Mu=Error(d(519));function Oa(t){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bn(Be(e,t)),Mu}function Ls(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[te]=t,e[xe]=l,a){case"dialog":ot("cancel",e),ot("close",e);break;case"iframe":case"object":case"embed":ot("load",e);break;case"video":case"audio":for(a=0;a<ri.length;a++)ot(ri[a],e);break;case"source":ot("error",e);break;case"img":case"image":case"link":ot("error",e),ot("load",e);break;case"details":ot("toggle",e);break;case"input":ot("invalid",e),ts(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ot("invalid",e);break;case"textarea":ot("invalid",e),as(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||sd(e.textContent,a)?(l.popover!=null&&(ot("beforetoggle",e),ot("toggle",e)),l.onScroll!=null&&ot("scroll",e),l.onScrollEnd!=null&&ot("scrollend",e),l.onClick!=null&&(e.onclick=ea),e=!0):e=!1,e||Oa(t,!0)}function Gi(t){for(Wt=t.return;Wt;)switch(Wt.tag){case 5:case 31:case 13:Ze=!1;return;case 27:case 3:Ze=!0;return;default:Wt=Wt.return}}function Vl(t){if(t!==Wt)return!1;if(!at)return Gi(t),at=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rc(t.type,t.memoizedProps)),a=!a),a&&Et&&Oa(t),Gi(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));Et=Md(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));Et=Md(t)}else e===27?(e=Et,Fa(t.type)?(t=pc,pc=null,Et=t):Et=e):Et=Wt?Ge(t.stateNode.nextSibling):null;return!0}function fl(){Et=Wt=null,at=!1}function qu(){var t=Ca;return t!==null&&(we===null?we=t:we.push.apply(we,t),Ca=null),t}function Bn(t){Ca===null?Ca=[t]:Ca.push(t)}var Au=Ut(null),dl=null,ya=null;function Da(t,e,a){st(Au,e._currentValue),e._currentValue=a}function _a(t){t._currentValue=Au.current,yt(Au)}function Qi(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Cu(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=n;for(var c=0;c<e.length;c++)if(o.context===e[c]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Qi(i.return,a,t),l||(r=null);break t}i=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(d(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Qi(r,a,t),r=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,r=n.alternate,r!==null&&(r.lanes|=a),Qi(n.return,a,t),r=n.child,r=r!==null?r.sibling:null):r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function ml(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var o=n.type;Ee(n.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(n===zl.current){if(r=n.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(bn):t=[bn])}n=n.return}return t!==null&&Cu(e,t,a,l),e.flags|=262144,t!==null}function Vi(t){for(t=t.firstContext;t!==null;){if(!Ee(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hl(t){dl=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ee(t){return Gs(dl,t)}function Xi(t,e){return dl===null&&hl(t),Gs(t,e)}function Gs(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ya===null){if(t===null)throw Error(d(308));ya=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ya=ya.next=e;return a}var Dm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},km=N.unstable_scheduleCallback,Um=N.unstable_NormalPriority,Lt={$$typeof:kt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Dm,data:new Map,refCount:0}}function Hn(t){t.refCount--,t.refCount===0&&km(Um,function(){t.controller.abort()})}function Qs(t,e){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var l=e[t];a.indexOf(l)===-1&&a.push(l)}}}var Yn=null;function Rm(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Zn=null,Du=0,pl=0,Xl=null;function Bm(t,e){if(Zn===null){var a=Zn=[];Du=0,pl=Wo(),Xl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Du++,e.then(Vs,Vs),e}function Vs(){if(--Du===0&&(Yn=null,Zn!==null)){Xl!==null&&(Xl.status="fulfilled");var t=Zn;Zn=null,pl=0,Xl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Hm(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Xs=A.S;A.S=function(t,e){if(Hf=Se(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Bm(t,e),Yn!==null)for(var a=fn;a!==null;)Qs(a,Yn),a=a.next;if(a=t.types,a!==null){for(var l=fn;l!==null;)Qs(l,a),l=l.next;if(pl!==0){l=Yn,l===null&&(l=Yn=[]);for(var n=0;n<a.length;n++){var i=a[n];l.indexOf(i)===-1&&l.push(i)}}}Xs!==null&&Xs(t,e)};var gl=Ut(null);function ku(){var t=gl.current;return t!==null?t:zt.pooledCache}function Ki(t,e){e===null?st(gl,gl.current):st(gl,e.pool)}function Ks(){var t=ku();return t===null?null:{parent:Lt._currentValue,pool:t}}var Kl=Error(d(460)),Uu=Error(d(474)),Ji=Error(d(542)),Fi={then:function(){}};function Js(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fs(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ea,ea),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ws(t),t===void 0&&!("reason"in e)?Error(d(600)):t;default:if(typeof e.status=="string")e.then(ea,ea);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ws(t),t}throw xl=e,Kl}}function bl(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xl=a,Kl):a}}var xl=null;function $s(){if(xl===null)throw Error(d(459));var t=xl;return xl=null,t}function Ws(t){if(t===Kl||t===Ji)throw Error(d(483))}var Jl=null,Ln=0;function $i(t){var e=Ln;return Ln+=1,Jl===null&&(Jl=[]),Fs(Jl,t,e)}function ka(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Wi(t,e){throw e.$$typeof===ct?Error(d(525)):(t=Object.prototype.toString.call(e),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Is(t){function e(g,f){if(t){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function a(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function l(g){for(var f=new Map;g!==null;)g.key===null?f.set(g.index,g):f.set(g.key,g),g=g.sibling;return f}function n(g,f){return g=xa(g,f),g.index=0,g.sibling=null,g}function i(g,f,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=134217730,f)):(g.flags|=1048576,f)}function r(g){return t&&g.alternate===null&&(g.flags|=134217730),g}function o(g,f,y,j){return f===null||f.tag!==6?(f=ju(y,g.mode,j),f.return=g,f):(f=n(f,y),f.return=g,f)}function c(g,f,y,j){var Y=y.type;return Y===be?(g=w(g,f,y.props.children,j,y.key),ka(g,y),g):f!==null&&(f.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===v&&bl(Y)===f.type)?(f=n(f,y.props),ka(f,y),f.return=g,f):(f=Yi(y.type,y.key,y.props,null,g.mode,j),ka(f,y),f.return=g,f)}function b(g,f,y,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=zu(y,g.mode,j),f.return=g,f):(f=n(f,y.children||[]),f.return=g,f)}function w(g,f,y,j,Y){return f===null||f.tag!==7?(f=sl(y,g.mode,j,Y),f.return=g,f):(f=n(f,y),f.return=g,f)}function z(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=ju(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ke:return y=Yi(f.type,f.key,f.props,null,g.mode,y),ka(y,f),y.return=g,y;case ge:return f=zu(f,g.mode,y),f.return=g,f;case v:return f=bl(f),z(g,f,y)}if(K(f)||E(f))return f=sl(f,g.mode,y,null),f.return=g,f;if(typeof f.then=="function")return z(g,$i(f),y);if(f.$$typeof===kt)return z(g,Xi(g,f),y);Wi(g,f)}return null}function h(g,f,y,j){var Y=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return Y!==null?null:o(g,f,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ke:return y.key===Y?c(g,f,y,j):null;case ge:return y.key===Y?b(g,f,y,j):null;case v:return y=bl(y),h(g,f,y,j)}if(K(y)||E(y))return Y!==null?null:w(g,f,y,j,null);if(typeof y.then=="function")return h(g,f,$i(y),j);if(y.$$typeof===kt)return h(g,f,Xi(g,y),j);Wi(g,y)}return null}function _(g,f,y,j,Y){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return g=g.get(y)||null,o(f,g,""+j,Y);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ke:return g=g.get(j.key===null?y:j.key)||null,c(f,g,j,Y);case ge:return g=g.get(j.key===null?y:j.key)||null,b(f,g,j,Y);case v:return j=bl(j),_(g,f,y,j,Y)}if(K(j)||E(j))return g=g.get(y)||null,w(f,g,j,Y,null);if(typeof j.then=="function")return _(g,f,y,$i(j),Y);if(j.$$typeof===kt)return _(g,f,y,Xi(f,j),Y);Wi(f,j)}return null}function O(g,f,y,j){for(var Y=null,dt=null,X=f,$=f=0,Vt=null;X!==null&&$<y.length;$++){X.index>$?(Vt=X,X=null):Vt=X.sibling;var ht=h(g,X,y[$],j);if(ht===null){X===null&&(X=Vt);break}t&&X&&ht.alternate===null&&e(g,X),f=i(ht,f,$),dt===null?Y=ht:dt.sibling=ht,dt=ht,X=Vt}if($===y.length)return a(g,X),at&&va(g,$),Y;if(X===null){for(;$<y.length;$++)X=z(g,y[$],j),X!==null&&(f=i(X,f,$),dt===null?Y=X:dt.sibling=X,dt=X);return at&&va(g,$),Y}for(X=l(X);$<y.length;$++)Vt=_(X,g,$,y[$],j),Vt!==null&&(t&&(ht=Vt.alternate,ht!==null&&X.delete(ht.key===null?$:ht.key)),f=i(Vt,f,$),dt===null?Y=Vt:dt.sibling=Vt,dt=Vt);return t&&X.forEach(function(tl){return e(g,tl)}),at&&va(g,$),Y}function G(g,f,y,j){if(y==null)throw Error(d(151));for(var Y=null,dt=null,X=f,$=f=0,Vt=null,ht=y.next();X!==null&&!ht.done;$++,ht=y.next()){X.index>$?(Vt=X,X=null):Vt=X.sibling;var tl=h(g,X,ht.value,j);if(tl===null){X===null&&(X=Vt);break}t&&X&&tl.alternate===null&&e(g,X),f=i(tl,f,$),dt===null?Y=tl:dt.sibling=tl,dt=tl,X=Vt}if(ht.done)return a(g,X),at&&va(g,$),Y;if(X===null){for(;!ht.done;$++,ht=y.next())ht=z(g,ht.value,j),ht!==null&&(f=i(ht,f,$),dt===null?Y=ht:dt.sibling=ht,dt=ht);return at&&va(g,$),Y}for(X=l(X);!ht.done;$++,ht=y.next())ht=_(X,g,$,ht.value,j),ht!==null&&(t&&(Vt=ht.alternate,Vt!==null&&X.delete(Vt.key===null?$:Vt.key)),f=i(ht,f,$),dt===null?Y=ht:dt.sibling=ht,dt=ht);return t&&X.forEach(function(vp){return e(g,vp)}),at&&va(g,$),Y}function tt(g,f,y,j){if(typeof y=="object"&&y!==null&&y.type===be&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ke:t:{for(var Y=y.key;f!==null;){if(f.key===Y){if(Y=y.type,Y===be){if(f.tag===7){a(g,f.sibling),j=n(f,y.props.children),ka(j,y),j.return=g,g=j;break t}}else if(f.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===v&&bl(Y)===f.type){a(g,f.sibling),j=n(f,y.props),ka(j,y),j.return=g,g=j;break t}a(g,f);break}else e(g,f);f=f.sibling}y.type===be?(j=sl(y.props.children,g.mode,j,y.key),ka(j,y),j.return=g,g=j):(j=Yi(y.type,y.key,y.props,null,g.mode,j),ka(j,y),j.return=g,g=j)}return r(g);case ge:t:{for(Y=y.key;f!==null;){if(f.key===Y)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){a(g,f.sibling),j=n(f,y.children||[]),j.return=g,g=j;break t}else{a(g,f);break}else e(g,f);f=f.sibling}j=zu(y,g.mode,j),j.return=g,g=j}return r(g);case v:return y=bl(y),tt(g,f,y,j)}if(K(y))return O(g,f,y,j);if(E(y)){if(Y=E(y),typeof Y!="function")throw Error(d(150));return y=Y.call(y),G(g,f,y,j)}if(typeof y.then=="function")return tt(g,f,$i(y),j);if(y.$$typeof===kt)return tt(g,f,Xi(g,y),j);Wi(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,f!==null&&f.tag===6?(a(g,f.sibling),j=n(f,y),j.return=g,g=j):(a(g,f),j=ju(y,g.mode,j),j.return=g,g=j),r(g)):a(g,f)}return function(g,f,y,j){try{Ln=0;var Y=tt(g,f,y,j);return Jl=null,Y}catch(X){if(X===Kl||X===Ji)throw X;var dt=ve(29,X,null,g.mode);return dt.lanes=j,dt.return=g,dt}finally{}}}var vl=Is(!0),Ps=Is(!1),Ua=!1;function Ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(bt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=Hi(t),Us(t,null,a),e}return Bi(t,l,e,a),Hi(t)}function Gn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Yc(t,a)}}function Hu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Yu=!1;function Qn(){if(Yu){var t=Xl;if(t!==null)throw t}}function Vn(t,e,a,l){Yu=!1;var n=t.updateQueue;Ua=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var c=o,b=c.next;c.next=null,r===null?i=b:r.next=b,r=c;var w=t.alternate;w!==null&&(w=w.updateQueue,o=w.lastBaseUpdate,o!==r&&(o===null?w.firstBaseUpdate=b:o.next=b,w.lastBaseUpdate=c))}if(i!==null){var z=n.baseState;r=0,w=b=c=null,o=i;do{var h=o.lane&-536870913,_=h!==o.lane;if(_?(ft&h)===h:(l&h)===h){h!==0&&h===pl&&(Yu=!0),w!==null&&(w=w.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var O=t,G=o;h=e;var tt=a;switch(G.tag){case 1:if(O=G.payload,typeof O=="function"){z=O.call(tt,z,h);break t}z=O;break t;case 3:O.flags=O.flags&-65537|128;case 0:if(O=G.payload,h=typeof O=="function"?O.call(tt,z,h):O,h==null)break t;z=et({},z,h);break t;case 2:Ua=!0}}h=o.callback,h!==null&&(t.flags|=64,_&&(t.flags|=8192),_=n.callbacks,_===null?n.callbacks=[h]:_.push(h))}else _={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},w===null?(b=w=_,c=z):w=w.next=_,r|=h;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;_=o,o=_.next,_.next=null,n.lastBaseUpdate=_,n.shared.pending=null}}while(!0);w===null&&(c=z),n.baseState=c,n.firstBaseUpdate=b,n.lastBaseUpdate=w,i===null&&(n.shared.lanes=0),Va|=r,t.lanes=r,t.memoizedState=z}}function t0(t,e){if(typeof t!="function")throw Error(d(191,t));t.call(e)}function e0(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)t0(a[t],e)}var Ha=Ut(null),Ii=Ut(0);function a0(t,e){t=ja,st(Ii,t),st(Ha,e),ja=t|e.baseLanes}function Zu(){st(Ii,ja),st(Ha,Ha.current)}function Lu(){ja=Ii.current,yt(Ha),yt(Ii)}var ae=Ut(null),ce=null;function Ya(t){var e=t.alternate;st(le,le.current&1),st(ae,t),ce===null&&(e===null||Ha.current!==null||e.memoizedState!==null)&&(ce=t)}function Gu(t){st(le,le.current),st(ae,t),ce===null&&(ce=t)}function l0(t){t.tag===22?(st(le,le.current),st(ae,t),ce===null&&(ce=t)):Za()}function Za(){st(le,le.current),st(ae,ae.current)}function Me(t){yt(ae),ce===t&&(ce=null),yt(le)}var le=Ut(0);function Xn(t,e){st(ae,ae.current),st(le,e)}function Qu(t){yt(le),yt(ae),ce===t&&(ce=null)}function Pi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mc(a)||hc(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wa=0,P=null,St=null,Gt=null,tr=!1,Fl=!1,yl=!1,er=0,Kn=0,$l=null,Ym=0;function Rt(){throw Error(d(321))}function Vu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ee(t[a],e[a]))return!1;return!0}function Xu(t,e,a,l,n,i){return wa=i,P=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,A.H=t===null||t.memoizedState===null?Y0:Z0,yl=!1,i=a(l,n),yl=!1,Fl&&(i=i0(e,a,l,n)),n0(t),i}function n0(t){A.H=or;var e=St!==null&&St.next!==null;if(wa=0,Gt=St=P=null,tr=!1,Kn=0,$l=null,e)throw Error(d(300));t===null||Qt||(t=t.dependencies,t!==null&&Vi(t)&&(Qt=!0))}function i0(t,e,a,l){P=t;var n=0;do{if(Fl&&($l=null),Kn=0,Fl=!1,25<=n)throw Error(d(301));if(n+=1,Gt=St=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}A.H=Jm,i=e(a,l)}while(Fl);return i}function Zm(){var t=A.H,e=t.useState()[0];return e=typeof e.then=="function"?Jn(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(P.flags|=1024),e}function Ku(){var t=er!==0;return er=0,t}function Ju(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Fu(t){if(tr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}tr=!1}wa=0,Gt=St=P=null,Fl=!1,Kn=er=0,$l=null}function de(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?P.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Zt(){if(St===null){var t=P.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Gt===null?P.memoizedState:Gt.next;if(e!==null)Gt=e,St=t;else{if(t===null)throw P.alternate===null?Error(d(467)):Error(d(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Gt===null?P.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jn(t){var e=Kn;return Kn+=1,$l===null&&($l=[]),t=Fs($l,t,e),e=P,(Gt===null?e.memoizedState:Gt.next)===null&&(e=e.alternate,A.H=e===null||e.memoizedState===null?Y0:Z0),t}function lr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jn(t);if(t.$$typeof===T)return;if(t.$$typeof===kt)return ee(t)}throw Error(d(438,String(t)))}function $u(t){var e=null,a=P.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=P.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ar(),P.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=J;return e.index++,a}function Na(t,e){return typeof e=="function"?e(t):e}function nr(t){var e=Zt();return Wu(e,St,t)}function Wu(t,e,a){var l=t.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var o=r=null,c=null,b=e,w=!1;do{var z=b.lane&-536870913;if(z!==b.lane?(ft&z)===z:(wa&z)===z){var h=b.revertLane;if(h===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),z===pl&&(w=!0);else if((wa&h)===h){b=b.next,h===pl&&(w=!0);continue}else z={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},c===null?(o=c=z,r=i):c=c.next=z,P.lanes|=h,Va|=h;z=b.action,yl&&a(i,z),i=b.hasEagerState?b.eagerState:a(i,z)}else h={lane:z,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},c===null?(o=c=h,r=i):c=c.next=h,P.lanes|=z,Va|=z;b=b.next}while(b!==null&&b!==e);if(c===null?r=i:c.next=o,!Ee(i,t.memoizedState)&&(Qt=!0,w&&(a=Xl,a!==null)))throw a;t.memoizedState=i,t.baseState=r,t.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Iu(t){var e=Zt(),a=e.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=t(i,r.action),r=r.next;while(r!==n);Ee(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function r0(t,e,a){var l=P,n=Zt(),i=at;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=e();var r=!Ee((St||n).memoizedState,a);if(r&&(n.memoizedState=a,Qt=!0),n=n.queue,eo(c0.bind(null,l,n,t),[t]),t=n.getSnapshot!==e||r||Gt!==null&&(Gt.memoizedState.tag&1)!==0,Wl(t?9:8,{destroy:void 0},o0.bind(null,l,n,a,e),null),t){if(l.flags|=2048,zt===null)throw Error(d(349));i||(wa&127)!==0||u0(l,e,a)}return a}function u0(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=P.updateQueue,e===null?(e=ar(),P.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function o0(t,e,a,l){e.value=a,e.getSnapshot=l,s0(e)&&f0(t)}function c0(t,e,a){return a(function(){s0(e)&&f0(t)})}function s0(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ee(t,a)}catch{return!0}}function f0(t){var e=cl(t,2);e!==null&&Ne(e,t,2)}function Pu(t){var e=de();if(typeof t=="function"){var a=t;if(t=a(),yl){Ea(!0);try{a()}finally{Ea(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e}function d0(t,e,a,l){return t.baseState=a,Wu(t,St,typeof l=="function"?l:Na)}function Lm(t,e,a,l,n){if(ur(t))throw Error(d(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};A.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,m0(e,i)):(i.next=a.next,e.pending=a.next=i)}}function m0(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=A.T,r={};r.types=i!==null?i.types:null,A.T=r;try{var o=a(n,l),c=A.S;c!==null&&c(r,o),h0(t,e,o)}catch(b){to(t,e,b)}finally{i!==null&&r.types!==null&&(i.types=r.types),A.T=i}}else try{i=a(n,l),h0(t,e,i)}catch(b){to(t,e,b)}}function h0(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){p0(t,e,l)},function(l){return to(t,e,l)}):p0(t,e,a)}function p0(t,e,a){e.status="fulfilled",e.value=a,g0(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,m0(t,a)))}function to(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,g0(e),e=e.next;while(e!==l)}t.action=null}function g0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function b0(t,e){return e}function x0(t,e){if(at){var a=zt.formState;if(a!==null){t:{var l=P;if(at){if(Et){e:{for(var n=Et,i=Ze;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ge(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Et=Ge(n.nextSibling),l=n.data==="F!";break t}}Oa(l)}l=!1}l&&(e=a[0])}}return a=de(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:e},a.queue=l,a=R0.bind(null,P,l),l.dispatch=a,l=Pu(!1),i=ro.bind(null,P,!1,l.queue),l=de(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=Lm.bind(null,P,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function v0(t){var e=Zt();return y0(e,St,t)}function y0(t,e,a){if(e=Wu(t,e,b0)[0],t=nr(Na)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Jn(e)}catch(r){throw r===Kl?Ji:r}else l=e;e=Zt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(P.flags|=2048,Wl(9,{destroy:void 0},Gm.bind(null,n,a),null)),[l,i,t]}function Gm(t,e){t.action=e}function _0(t){var e=Zt(),a=St;if(a!==null)return y0(e,a,t);Zt(),e=e.memoizedState,a=Zt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Wl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=P.updateQueue,e===null&&(e=ar(),P.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function w0(){return Zt().memoizedState}function ir(t,e,a,l){var n=de();P.flags|=t,n.memoizedState=Wl(1|e,{destroy:void 0},a,l===void 0?null:l)}function rr(t,e,a,l){var n=Zt();l=l===void 0?null:l;var i=n.memoizedState.inst;St!==null&&l!==null&&Vu(l,St.memoizedState.deps)?n.memoizedState=Wl(e,i,a,l):(P.flags|=t,n.memoizedState=Wl(1|e,i,a,l))}function N0(t,e){ir(8390656,8,t,e)}function eo(t,e){rr(2048,8,t,e)}function Qm(t){P.flags|=4;var e=P.updateQueue;if(e===null)e=ar(),P.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function S0(t){var e=Zt().memoizedState;return Qm({ref:e,nextImpl:t}),function(){if((bt&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function T0(t,e){return rr(4,2,t,e)}function j0(t,e){return rr(4,4,t,e)}function z0(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E0(t,e,a){a=a!=null?a.concat([t]):null,rr(4,4,z0.bind(null,e,t),a)}function ao(){}function M0(t,e){var a=Zt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Vu(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function q0(t,e){var a=Zt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Vu(e,l[1]))return l[0];if(l=t(),yl){Ea(!0);try{t()}finally{Ea(!1)}}return a.memoizedState=[l,e],l}function lo(t,e,a){return a===void 0||(wa&1073741824)!==0&&(ft&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Zf(),P.lanes|=t,Va|=t,a)}function A0(t,e,a,l){return Ee(a,e)?a:Ha.current!==null?(t=lo(t,a,l),Ee(t,e)||(Qt=!0),t):(wa&106)===0||(wa&1073741824)!==0&&(ft&261930)===0?(Qt=!0,t.memoizedState=a):(t=Zf(),P.lanes|=t,Va|=t,e)}function C0(t,e,a,l,n){var i=R.p;R.p=i!==0&&8>i?i:8;var r=A.T,o={};o.types=r!==null?r.types:null,A.T=o,ro(t,!1,e,a);try{var c=n(),b=A.S;if(b!==null&&b(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var w=Hm(c,l);Fn(t,e,w,Oe(t))}else Fn(t,e,l,Oe(t))}catch(z){Fn(t,e,{then:function(){},status:"rejected",reason:z},Oe())}finally{R.p=i,r!==null&&o.types!==null&&(r.types=o.types),A.T=r}}function Vm(){}function no(t,e,a,l){if(t.tag!==5)throw Error(d(476));var n=O0(t).queue;C0(t,n,e,jt,a===null?Vm:function(){return D0(t),a(l)})}function O0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:jt,baseState:jt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:jt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function D0(t){var e=O0(t);e.next===null&&(e=t.alternate.memoizedState),Fn(t,e.next.queue,{},Oe())}function io(){return ee(bn)}function k0(){return Zt().memoizedState}function U0(){return Zt().memoizedState}function Xm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Oe();t=Ra(a);var l=Ba(e,t,a);l!==null&&(Ne(l,e,a),Gn(l,e,a)),e={cache:Ou()},t.payload=e;return}e=e.return}}function Km(t,e,a){var l=Oe();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ur(t)?B0(e,a):(a=Su(t,e,a,l),a!==null&&(Ne(a,t,l),H0(a,e,l)))}function R0(t,e,a){var l=Oe();Fn(t,e,a,l)}function Fn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ur(t))B0(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var r=e.lastRenderedState,o=i(r,a);if(n.hasEagerState=!0,n.eagerState=o,Ee(o,r))return Bi(t,e,n,0),zt===null&&Ri(),!1}catch{}finally{}if(a=Su(t,e,n,l),a!==null)return Ne(a,t,l),H0(a,e,l),!0}return!1}function ro(t,e,a,l){if(l={lane:2,revertLane:Wo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ur(t)){if(e)throw Error(d(479))}else e=Su(t,a,l,2),e!==null&&Ne(e,t,2)}function ur(t){var e=t.alternate;return t===P||e!==null&&e===P}function B0(t,e){Fl=tr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function H0(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Yc(t,a)}}var or={readContext:ee,use:lr,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt,useHostTransitionStatus:Rt,useFormState:Rt,useActionState:Rt,useOptimistic:Rt,useMemoCache:Rt,useCacheRefresh:Rt,useEffectEvent:Rt},Y0={readContext:ee,use:lr,useCallback:function(t,e){return de().memoizedState=[t,e===void 0?null:e],t},useContext:ee,useEffect:N0,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,ir(4194308,4,z0.bind(null,e,t),a)},useLayoutEffect:function(t,e){return ir(4194308,4,t,e)},useInsertionEffect:function(t,e){ir(4,2,t,e)},useMemo:function(t,e){var a=de();e=e===void 0?null:e;var l=t();if(yl){Ea(!0);try{t()}finally{Ea(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=de();if(a!==void 0){var n=a(e);if(yl){Ea(!0);try{a(e)}finally{Ea(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Km.bind(null,P,t),[l.memoizedState,t]},useRef:function(t){var e=de();return t={current:t},e.memoizedState=t},useState:function(t){t=Pu(t);var e=t.queue,a=R0.bind(null,P,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:ao,useDeferredValue:function(t,e){var a=de();return lo(a,t,e)},useTransition:function(){var t=Pu(!1);return t=C0.bind(null,P,t.queue,!0,!1),de().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=P,n=de();if(at){if(a===void 0)throw Error(d(407));a=a()}else{if(a=e(),zt===null)throw Error(d(349));(ft&127)!==0||u0(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,N0(c0.bind(null,l,i,t),[t]),l.flags|=2048,Wl(9,{destroy:void 0},o0.bind(null,l,i,a,e),null),a},useId:function(){var t=de(),e=zt.identifierPrefix;if(at){var a=la,l=aa;a=(l&~(1<<32-je(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=er++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Ym++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:io,useFormState:x0,useActionState:x0,useOptimistic:function(t){var e=de();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=ro.bind(null,P,!0,a),a.dispatch=e,[t,e]},useMemoCache:$u,useCacheRefresh:function(){return de().memoizedState=Xm.bind(null,P)},useEffectEvent:function(t){var e=de(),a={impl:t};return e.memoizedState=a,function(){if((bt&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},Z0={readContext:ee,use:lr,useCallback:M0,useContext:ee,useEffect:eo,useImperativeHandle:E0,useInsertionEffect:T0,useLayoutEffect:j0,useMemo:q0,useReducer:nr,useRef:w0,useState:function(){return nr(Na)},useDebugValue:ao,useDeferredValue:function(t,e){var a=Zt();return A0(a,St.memoizedState,t,e)},useTransition:function(){var t=nr(Na)[0],e=Zt().memoizedState;return[typeof t=="boolean"?t:Jn(t),e]},useSyncExternalStore:r0,useId:k0,useHostTransitionStatus:io,useFormState:v0,useActionState:v0,useOptimistic:function(t,e){var a=Zt();return d0(a,St,t,e)},useMemoCache:$u,useCacheRefresh:U0,useEffectEvent:S0},Jm={readContext:ee,use:lr,useCallback:M0,useContext:ee,useEffect:eo,useImperativeHandle:E0,useInsertionEffect:T0,useLayoutEffect:j0,useMemo:q0,useReducer:Iu,useRef:w0,useState:function(){return Iu(Na)},useDebugValue:ao,useDeferredValue:function(t,e){var a=Zt();return St===null?lo(a,t,e):A0(a,St.memoizedState,t,e)},useTransition:function(){var t=Iu(Na)[0],e=Zt().memoizedState;return[typeof t=="boolean"?t:Jn(t),e]},useSyncExternalStore:r0,useId:k0,useHostTransitionStatus:io,useFormState:_0,useActionState:_0,useOptimistic:function(t,e){var a=Zt();return St!==null?d0(a,St,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:U0,useEffectEvent:S0};function uo(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:et({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var oo={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Oe(),n=Ra(l);n.payload=e,a!=null&&(n.callback=a),e=Ba(t,n,l),e!==null&&(Ne(e,t,l),Gn(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Oe(),n=Ra(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Ba(t,n,l),e!==null&&(Ne(e,t,l),Gn(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Oe(),l=Ra(a);l.tag=2,e!=null&&(l.callback=e),e=Ba(t,l,a),e!==null&&(Ne(e,t,a),Gn(e,t,a))}};function L0(t,e,a,l,n,i,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,r):e.prototype&&e.prototype.isPureReactComponent?!kn(a,l)||!kn(n,i):!0}function G0(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&oo.enqueueReplaceState(e,e.state,null)}function _l(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=et({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Q0(t){Ui(t)}function V0(t){console.error(t)}function X0(t){Ui(t)}function cr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function K0(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function co(t,e,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){cr(t,e)},a}function J0(t){return t=Ra(t),t.tag=3,t}function F0(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){K0(e,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){K0(e,a,l),typeof n!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Fm(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&ml(e,a,n,!0),a=ae.current,a!==null){switch(a.tag){case 31:case 13:case 19:return ce===null?qr():a.alternate===null&&Bt===0&&(Bt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Fi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Jo(t,l,n)),!1;case 22:return a.flags|=65536,l===Fi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Jo(t,l,n)),!1}throw Error(d(435,a.tag))}return Jo(t,l,n),qr(),!1}if(at)return e=ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Mu&&(t=Error(d(422),{cause:l}),Bn(Be(t,a)))):(l!==Mu&&(e=Error(d(423),{cause:l}),Bn(Be(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=Be(l,a),n=co(t.stateNode,l,n),Hu(t,n),Bt!==4&&(Bt=2)),!1;var i=Error(d(520),{cause:l});if(i=Be(i,a),li===null?li=[i]:li.push(i),Bt!==4&&(Bt=2),e===null)return!0;l=Be(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=co(a.stateNode,l,t),Hu(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xa===null||!Xa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=J0(n),F0(n,t,a,l),Hu(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var so=Error(d(461)),Qt=!1;function Xt(t,e,a,l){e.child=t===null?Ps(e,null,a,l):vl(e,t.child,a,l)}function $0(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var r={};for(var o in l)o!=="ref"&&(r[o]=l[o])}else r=l;return hl(e),l=Xu(t,e,a,r,i,n),o=Ku(),t!==null&&!Qt?(Ju(t,e,n),Sa(t,e,n)):(at&&o&&Li(e),e.flags|=1,Xt(t,e,l,n),e.child)}function W0(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Tu(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,I0(t,e,i,l,n)):(t=Yi(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!vo(t,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:kn,a(r,l)&&t.ref===e.ref)return Sa(t,e,n)}return e.flags|=1,t=xa(i,l),t.ref=e.ref,t.return=e,e.child=t}function I0(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(kn(i,l)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=l=i,vo(t,n))(t.flags&131072)!==0&&(Qt=!0);else return e.lanes=t.lanes,Sa(t,e,n)}return fo(t,e,a,l,n)}function P0(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return tf(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ki(e,i!==null?i.cachePool:null),i!==null?a0(e,i):Zu(),l0(e);else return l=e.lanes=536870912,tf(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Ki(e,i.cachePool),a0(e,i),Za(),e.memoizedState=null):(t!==null&&Ki(e,null),Zu(),Za());return Xt(t,e,n,a),e.child}function $n(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function tf(t,e,a,l,n){var i=ku();return i=i===null?null:{parent:Lt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Ki(e,null),Zu(),l0(e),t!==null&&ml(t,e,l,!0),e.childLanes=n,null}function sr(t,e){return e=fr({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ef(t,e,a){return vl(e,t.child,null,a),t=sr(e,e.pendingProps),t.flags|=2,Me(e),e.memoizedState=null,t}function $m(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(at){if(l.mode==="hidden")return t=sr(e,l),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},$n(null,t);if(Gu(e),(t=Et)?(t=Ed(t,Ze),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:aa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Bs(t),a.return=e,e.child=a,Wt=e,Et=null)):t=null,t===null)throw Oa(e);return e.lanes=536870912,null}return sr(e,l)}var i=t.memoizedState;if(i!==null){var r=i.dehydrated;if(Gu(e),n)if(e.flags&256)e.flags&=-257,e=ef(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(d(558));else if(Qt||ml(t,e,a,!1),n=(a&t.childLanes)!==0,Qt||n){if(Ha.current===null){if(l=zt,l!==null&&(r=Zc(l,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,cl(t,r),Ne(l,t,r),so;qr()}e=ef(t,e,a)}else t=i.treeContext,Et=Ge(r.nextSibling),Wt=e,at=!0,Ca=null,Ze=!1,t!==null&&Zs(e,t),e=sr(e,l),e.flags|=134221824;return e}return t=xa(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Il(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function fo(t,e,a,l,n){return hl(e),a=Xu(t,e,a,l,void 0,n),l=Ku(),t!==null&&!Qt?(Ju(t,e,n),Sa(t,e,n)):(at&&l&&Li(e),e.flags|=1,Xt(t,e,a,n),e.child)}function af(t,e,a,l,n,i){return hl(e),e.updateQueue=null,a=i0(e,l,a,n),n0(t),l=Ku(),t!==null&&!Qt?(Ju(t,e,i),Sa(t,e,i)):(at&&l&&Li(e),e.flags|=1,Xt(t,e,a,i),e.child)}function lf(t,e,a,l,n){if(hl(e),e.stateNode===null){var i=Ll,r=a.contextType;typeof r=="object"&&r!==null&&(i=ee(r)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=oo,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Ru(e),r=a.contextType,i.context=typeof r=="object"&&r!==null?ee(r):Ll,i.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(uo(e,a,r,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&oo.enqueueReplaceState(i,i.state,null),Vn(e,l,i,n),Qn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var o=e.memoizedProps,c=_l(a,o);i.props=c;var b=i.context,w=a.contextType;r=Ll,typeof w=="object"&&w!==null&&(r=ee(w));var z=a.getDerivedStateFromProps;w=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||b!==r)&&G0(e,i,l,r),Ua=!1;var h=e.memoizedState;i.state=h,Vn(e,l,i,n),Qn(),b=e.memoizedState,o||h!==b||Ua?(typeof z=="function"&&(uo(e,a,z,l),b=e.memoizedState),(c=Ua||L0(e,a,c,l,h,b,r))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=b),i.props=l,i.state=b,i.context=r,l=c):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Bu(t,e),r=e.memoizedProps,w=_l(a,r),i.props=w,z=e.pendingProps,h=i.context,b=a.contextType,c=Ll,typeof b=="object"&&b!==null&&(c=ee(b)),o=a.getDerivedStateFromProps,(b=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==z||h!==c)&&G0(e,i,l,c),Ua=!1,h=e.memoizedState,i.state=h,Vn(e,l,i,n),Qn();var _=e.memoizedState;r!==z||h!==_||Ua||t!==null&&t.dependencies!==null&&Vi(t.dependencies)?(typeof o=="function"&&(uo(e,a,o,l),_=e.memoizedState),(w=Ua||L0(e,a,w,l,h,_,c)||t!==null&&t.dependencies!==null&&Vi(t.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,_,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,_,c)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=_),i.props=l,i.state=_,i.context=c,l=w):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Il(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=vl(e,t.child,null,n),e.child=vl(e,null,a,n)):Xt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Sa(t,e,n),t}function nf(t,e,a,l){return fl(),e.flags|=256,Xt(t,e,a,l),e.child}var mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ho(t){return{baseLanes:t,cachePool:Ks()}}function po(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ce),t}function rf(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,r;if((r=i)||(r=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),r&&(n=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(at){if(n?Ya(e):Za(),(t=Et)?(t=Ed(t,Ze),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:aa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Bs(t),a.return=e,e.child=a,Wt=e,Et=null)):t=null,t===null)throw Oa(e);return hc(t)?e.lanes=32:e.lanes=536870912,null}return i=l.children,l=l.fallback,n?(Za(),n=e.mode,i=fr({mode:"hidden",children:i},n),l=sl(l,n,a,null),i.return=e,l.return=e,i.sibling=l,e.child=i,l=e.child,l.memoizedState=ho(a),l.childLanes=po(t,r,a),e.memoizedState=mo,$n(null,l)):(Ya(e),go(e,i))}var o=t.memoizedState;if(o!==null){var c=o.dehydrated;if(c!==null)return Wm(t,e,i,r,l,c,o,a)}return n?(Za(),n=l.fallback,i=e.mode,o=t.child,c=o.sibling,l=xa(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&1206910976,c!==null?n=xa(c,n):(n=sl(n,i,a,null),n.flags|=2),n.return=e,l.return=e,l.sibling=n,e.child=l,$n(null,l),l=e.child,n=t.child.memoizedState,n===null?n=ho(a):(i=n.cachePool,i!==null?(o=Lt._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=Ks(),n={baseLanes:n.baseLanes|a,cachePool:i}),l.memoizedState=n,l.childLanes=po(t,r,a),e.memoizedState=mo,$n(t.child,l)):(Ya(e),a=t.child,t=a.sibling,a=xa(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function go(t,e){return e=fr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function fr(t,e){return t=ve(22,t,null,e),t.lanes=0,t}function dr(t,e,a){return vl(e,t.child,null,a),t=go(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wm(t,e,a,l,n,i,r,o){if(a)return e.flags&256?(Ya(e),e.flags&=-257,dr(t,e,o)):e.memoizedState!==null?(Za(),e.child=t.child,e.flags|=128,null):(Za(),i=n.fallback,r=e.mode,n=fr({mode:"visible",children:n.children},r),i=sl(i,r,o,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,vl(e,t.child,null,o),n=e.child,n.memoizedState=ho(o),n.childLanes=po(t,l,o),e.memoizedState=mo,$n(null,n));if(Ya(e),hc(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var c=l.dgst;return l=c,l!==""&&(n=Error(d(419)),n.stack="",n.digest=l,Bn({value:n,source:null,stack:null})),dr(t,e,o)}if(Qt||ml(t,e,o,!1),l=(o&t.childLanes)!==0,Qt||l){if(Ha.current!==null)return dr(t,e,o);if(l=zt,l!==null&&(n=Zc(l,o),n!==0&&n!==r.retryLane))throw r.retryLane=n,cl(t,n),Ne(l,t,n),so;return mc(i)||qr(),dr(t,e,o)}return mc(i)?(e.flags|=192,e.child=t.child,null):(t=r.treeContext,Et=Ge(i.nextSibling),Wt=e,at=!0,Ca=null,Ze=!1,t!==null&&Zs(e,t),e=go(e,n.children),e.flags|=134221824,e)}function uf(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Qi(t.return,e,a)}function of(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&Pi(a)===null&&(e=t),t=t.sibling}return e}function mr(t,e,a,l,n,i){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n,r.treeForkCount=i)}function bo(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function xo(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var r=le.current;if(e.flags&128)return Xn(e,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,Xn(e,r),n==="backwards"&&t!==null?(bo(t),Xt(t,e,l,a),bo(t)):Xt(t,e,l,a),l=at?Rn:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uf(t,a,e);else if(t.tag===19)uf(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=of(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,bo(e)),mr(e,!0,n,null,i,l);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Pi(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}mr(e,!0,a,null,i,l);break;case"together":mr(e,!1,null,null,void 0,l);break;case"independent":e.memoizedState=null;break;default:a=of(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),mr(e,!1,n,a,i,l)}return e.child}function cf(t,e,a){var l=e.pendingProps;return Da(e,e.type,l.value),Xt(t,e,l.children,a),e.child}function Sa(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ml(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(d(153));if(e.child!==null){for(t=e.child,a=xa(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=xa(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function vo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Vi(t)))}function Im(t,e,a){switch(e.tag){case 3:El(e,e.stateNode.containerInfo),Da(e,Lt,t.memoizedState.cache),fl();break;case 27:case 5:_n(e);break;case 4:El(e,e.stateNode.containerInfo);break;case 10:Da(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Gu(e),null;break;case 13:var l=e.memoizedState;if(l!==null){if(l.dehydrated!==null)return Ya(e),e.flags|=128,null;l=ml(t,e,a,!1);var n=e.child.childLanes;return l||(a&n)!==0?rf(t,e,a):(Ya(e),t=Sa(t,e,a),t!==null?t.sibling:null)}Ya(e);break;case 19:if(e.flags&128)return xo(t,e,a);if(n=(t.flags&128)!==0,l=(a&e.childLanes)!==0,l||(ml(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return xo(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Xn(e,le.current),l)break;return null;case 22:return e.lanes=0,P0(t,e,a,e.pendingProps);case 24:Da(e,Lt,t.memoizedState.cache)}return Sa(t,e,a)}function sf(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Qt=!0;else{if(!vo(t,a)&&(e.flags&128)===0)return Qt=!1,Im(t,e,a);Qt=(t.flags&131072)!==0}else Qt=!1,at&&(e.flags&1048576)!==0&&Ys(e,Rn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=bl(e.elementType),e.type=t,typeof t=="function")Tu(t)?(l=_l(t,l),e.tag=1,e=lf(null,e,t,l,a)):(e.tag=0,e=fo(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===D){e.tag=11,e=$0(null,e,t,l,a);break t}else if(n===vt){e.tag=14,e=W0(null,e,t,l,a);break t}else if(n===kt){e.tag=10,e.type=t,e=cf(null,e,a);break t}}throw e=V(t)||t,Error(d(306,e,""))}}return e;case 0:return fo(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=_l(l,e.pendingProps),lf(t,e,l,n,a);case 3:t:{if(El(e,e.stateNode.containerInfo),t===null)throw Error(d(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Bu(t,e),Vn(e,l,null,a);var r=e.memoizedState;if(l=r.cache,Da(e,Lt,l),l!==i.cache&&Cu(e,[Lt],a,!0),Qn(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=nf(t,e,l,a);break t}else if(l!==n){n=Be(Error(d(424)),e),Bn(n),e=nf(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=Ge(t.firstChild),Wt=e,at=!0,Ca=null,Ze=!0,a=Ps(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(fl(),l===n){e=Sa(t,e,a);break t}Xt(t,e,l,a)}e=e.child}return e;case 26:return Il(t,e),t===null?(a=kd(e.type,null,e.pendingProps,null))?e.memoizedState=a:at||(e.stateNode=hd(e.type,e.pendingProps,ta.current,e)):e.memoizedState=kd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return _n(e),t===null&&at&&(l=e.stateNode=Ad(e.type,e.pendingProps,ta.current),Wt=e,Ze=!0,n=Et,Fa(e.type)?(pc=n,Et=Ge(l.firstChild)):Et=n),Xt(t,e,e.pendingProps.children,a),Il(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&at&&((n=l=Et)&&(l=Xh(l,e.type,e.pendingProps,Ze),l!==null?(e.stateNode=l,Wt=e,Et=Ge(l.firstChild),Ze=!1,n=!0):n=!1),n||Oa(e)),_n(e),n=e.type,i=e.pendingProps,r=t!==null?t.memoizedProps:null,l=i.children,rc(n,i)?l=null:r!==null&&rc(n,r)&&(e.flags|=32),e.memoizedState!==null&&(n=Xu(t,e,Zm,null,null,a),bn._currentValue=n),Il(t,e),Xt(t,e,l,a),e.child;case 6:return t===null&&at&&((t=a=Et)&&(a=Kh(a,e.pendingProps,Ze),a!==null?(e.stateNode=a,Wt=e,Et=null,t=!0):t=!1),t||Oa(e)),null;case 13:return rf(t,e,a);case 4:return El(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=vl(e,null,l,a):Xt(t,e,l,a),e.child;case 11:return $0(t,e,e.type,e.pendingProps,a);case 7:return l=e.pendingProps,Il(t,e),Xt(t,e,l,a),e.child;case 8:return Xt(t,e,e.pendingProps.children,a),e.child;case 12:return Xt(t,e,e.pendingProps.children,a),e.child;case 10:return cf(t,e,a);case 9:return n=e.type._context,l=e.pendingProps.children,hl(e),n=ee(n),l=l(n),e.flags|=1,Xt(t,e,l,a),e.child;case 14:return W0(t,e,e.type,e.pendingProps,a);case 15:return I0(t,e,e.type,e.pendingProps,a);case 19:return xo(t,e,a);case 31:return $m(t,e,a);case 22:return P0(t,e,a,e.pendingProps);case 24:return hl(e),l=ee(Lt),t===null?(n=ku(),n===null&&(n=zt,i=Ou(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},Ru(e),Da(e,Lt,n)):((t.lanes&a)!==0&&(Bu(t,e),Vn(e,null,null,a),Qn()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Da(e,Lt,l)):(l=i.cache,Da(e,Lt,l),l!==n.cache&&Cu(e,[Lt],a,!0))),Xt(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=e.pendingProps,l.name!=null&&l.name!=="auto"?e.flags|=t===null?18882560:18874368:at&&Li(e),t!==null&&t.memoizedProps.name!==l.name?e.flags|=4194816:Il(t,e),Xt(t,e,l.children,a),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function Ta(t){t.flags|=4}function yo(t,e,a,l,n){var i;if((i=(t.mode&32)!==0)&&(i=a===null?Hd(e,l):Hd(e,l)&&(l.src!==a.src||l.srcSet!==a.srcSet)),i){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Vf())t.flags|=8192;else throw xl=Fi,Uu}else t.flags&=-16777217}function ff(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Yd(e))if(Vf())t.flags|=8192;else throw xl=Fi,Uu}function hr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Bc():536870912,t.lanes|=e,ln|=e)}function Wn(t,e){if(!at)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&1206910976,l|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function Pm(t,e,a){var l=e.pendingProps;switch(Eu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Mt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),_a(Lt),da(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vl(e)?Ta(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qu())),Mt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ta(e),i!==null?(Mt(e),ff(e,i)):(Mt(e),yo(e,n,null,l,a))):i?i!==t.memoizedState?(Ta(e),Mt(e),ff(e,i)):(Mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ta(e),Mt(e),yo(e,n,t,l,a)),null;case 27:if(al(e),a=ta.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ta(e);else{if(!l){if(e.stateNode===null)throw Error(d(166));return Mt(e),e.subtreeFlags&=-33554433,null}t=Ft.current,Vl(e)?Ls(e):(t=Ad(n,l,a),e.stateNode=t,Ta(e))}return Mt(e),e.subtreeFlags&=-33554433,null;case 5:if(al(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ta(e);else{if(!l){if(e.stateNode===null)throw Error(d(166));return Mt(e),e.subtreeFlags&=-33554433,null}if(i=Ft.current,Vl(e))Ls(e);else{var r=oi(ta.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}i[te]=e,i[xe]=l;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=i;t:switch(ie(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ta(e)}}return Mt(e),e.subtreeFlags&=-33554433,yo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Ta(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(d(166));if(t=ta.current,Vl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Wt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[te]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||sd(t.nodeValue,a)),t||Oa(e,!0)}else t=oi(t).createTextNode(l),t[te]=e,e.stateNode=t}return Mt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=Vl(e),a!==null){if(t===null){if(!l)throw Error(d(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[te]=e}else fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mt(e),t=!1}else a=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Me(e),e):(Me(e),null);if((e.flags&128)!==0)throw Error(d(558))}return Mt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Vl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[te]=e}else fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mt(e),n=!1}else n=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Me(e),e):(Me(e),null)}return Me(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),hr(e,e.updateQueue),Mt(e),null);case 4:return da(),t===null&&ec(e.stateNode.containerInfo),e.flags|=67108864,Mt(e),null;case 10:return _a(e.type),Mt(e),null;case 19:if(Qu(e),l=e.memoizedState,l===null)return Mt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)Wn(l,!1);else{if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Pi(t),i!==null){for(e.flags|=128,Wn(l,!1),t=i.updateQueue,e.updateQueue=t,hr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Rs(a,t),a=a.sibling;return Xn(e,le.current&1|2),at&&va(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&Se()>jr&&(e.flags|=128,n=!0,Wn(l,!1),e.lanes=4194304)}else{if(!n)if(t=Pi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,hr(e,t),Wn(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!at)return Mt(e),null}else 2*Se()-l.renderingStartTime>jr&&a!==536870912&&(e.flags|=128,n=!0,Wn(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}if(l.tail!==null){t=l.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Se(),t.sibling=null,i=le.current,i=n?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!a||at?Xn(e,i):(a=i,st(ae,e),st(le,a),ce===null&&(ce=e)),at&&va(e,l.treeForkCount),t}return Mt(e),null;case 22:case 23:return Me(e),Lu(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),a=e.updateQueue,a!==null&&hr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&yt(gl),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),_a(Lt),Mt(e),null;case 25:return null;case 30:return e.flags|=33554432,Mt(e),null}throw Error(d(156,e.tag))}function th(t,e){switch(Eu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _a(Lt),da(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return al(e),null;case 31:if(e.memoizedState!==null){if(Me(e),e.alternate===null)throw Error(d(340));fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Me(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(d(340));fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qu(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return da(),null;case 10:return _a(e.type),null;case 22:case 23:return Me(e),Lu(),t!==null&&yt(gl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return _a(Lt),null;case 25:return null;default:return null}}function df(t,e){switch(Eu(e),e.tag){case 3:_a(Lt),da();break;case 26:case 27:case 5:al(e);break;case 4:da();break;case 31:e.memoizedState!==null&&Me(e);break;case 13:Me(e);break;case 19:Qu(e);break;case 10:_a(e.type);break;case 22:case 23:Me(e),Lu(),t!==null&&yt(gl);break;case 24:_a(Lt)}}function In(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(o){wt(e,e.return,o)}}function La(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var r=l.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=e;var c=a,b=o;try{b()}catch(w){wt(n,c,w)}}}l=l.next}while(l!==i)}}catch(w){wt(e,e.return,w)}}function mf(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{e0(e,a)}catch(l){wt(t,t.return,l)}}}function hf(t,e,a){a.props=_l(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){wt(t,e,l)}}function na(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:var n=t.stateNode,i=ga(t.memoizedProps,n);(n.ref===null||n.ref.name!==i)&&(n.ref=_d(i)),l=n.ref;break;case 7:if(t.stateNode===null){var r=new De(t);S(t.child,!1,Qh,r,void 0,void 0),t.stateNode=r}l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(o){wt(t,e,o)}}function ne(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){wt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){wt(t,e,n)}else a.current=null}function pr(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)zd(t.stateNode,e[a])}function pf(t){for(var e=t.return;e!==null&&(wo(e)&&zd(t.stateNode,e.stateNode),!_o(e));)e=e.return}function Pn(t){for(var e=t.return;e!==null&&(wo(e)&&Vh(t.stateNode,e.stateNode),!_o(e));)e=e.return}function _o(t){return t.tag===5||t.tag===3||t.tag===27}function wo(t){return t&&t.tag===7&&t.stateNode!==null}function No(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){wt(t,t.return,n)}}function So(t,e,a){try{var l=t.stateNode;jh(l,t.type,a,e),l[xe]=e}catch(n){wt(t,t.return,n)}}function gf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function To(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||gf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jo(t,e,a,l){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ea)),pr(t,l),gt=!0;else if(n!==4&&(n===27&&(pr(t,l),l=null,Fa(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(jo(t,e,a,l),t=t.sibling;t!==null;)jo(t,e,a,l),t=t.sibling}function gr(t,e,a,l){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),pr(t,l),gt=!0;else if(n!==4&&(n===27&&(pr(t,l),l=null,Fa(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(gr(t,e,a,l),t=t.sibling;t!==null;)gr(t,e,a,l),t=t.sibling}function bf(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ie(e,l,a),e[te]=t,e[xe]=a}catch(i){wt(t,t.return,i)}}var br=!1,qe=null;function xf(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(br=!0)}var ia=null;function vf(){var t=ia;return ia=null,t}var ye=0;function Pl(t,e,a,l,n){return ye=0,yf(t.child,e,a,l,n)}function yf(t,e,a,l,n){for(var i=!1;t!==null;){if(t.tag===5){var r=t.stateNode;if(l!==null){var o=cc(r);l.push(o),o.view&&(i=!0)}else i||cc(r).view&&(i=!0);br=!0,vd(r,ye===0?e:e+"_"+ye,a),ye++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||yf(t.child,e,a,l,n)&&(i=!0));t=t.sibling}return i}function ra(t,e){for(;t!==null;)t.tag===5?yd(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||ra(t.child,e)),t=t.sibling}function xr(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(xr(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(d(544));var a=e.name;e=ba(e.default,e.share),e!=="none"&&(Pl(t,a,e,null,!1)||ra(t.child,!1))}t=t.sibling}}function zo(t,e){if(t.tag===30){var a=t.stateNode,l=t.memoizedProps,n=ga(l,a),i=ba(l.default,a.paired?l.share:l.enter);i!=="none"?Pl(t,n,i,null,!1)?(xr(t),a.paired||e||on(t,l.onEnter)):ra(t.child,!1):xr(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zo(t,e),t=t.sibling;else xr(t)}function Eo(t){if(qe!==null&&qe.size!==0){var e=qe;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,l=a.name;if(l!=null&&l!=="auto"){var n=e.get(l);if(n!==void 0){var i=ba(a.default,a.share);if(i!=="none"&&(Pl(t,l,i,null,!1)?(i=t.stateNode,n.paired=i,i.paired=n,on(t,a.onShare)):ra(t.child,!1)),e.delete(l),e.size===0)break}}}Eo(t)}t=t.sibling}}}function Mo(t){if(t.tag===30){var e=t.memoizedProps,a=ga(e,t.stateNode),l=qe!==null?qe.get(a):void 0,n=ba(e.default,l!==void 0?e.share:e.exit);n!=="none"&&(Pl(t,a,n,null,!1)?l!==void 0?(n=t.stateNode,l.paired=n,n.paired=l,qe.delete(a),on(t,e.onShare)):on(t,e.onExit):ra(t.child,!1)),qe!==null&&Eo(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Mo(t),t=t.sibling;else qe!==null&&Eo(t)}function _f(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=ga(e,t.stateNode);e=ba(e.default,e.update),t.flags&=-5,e!=="none"&&Pl(t,a,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&_f(t);t=t.sibling}}function qo(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,ra(t.child,!1))}qo(t)}t=t.sibling}}function vr(t){if(t.tag===30)t.stateNode.paired=null,ra(t.child,!1),qo(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)vr(t),t=t.sibling;else qo(t)}function wf(t){for(t=t.child;t!==null;)t.tag===30?ra(t.child,!1):(t.subtreeFlags&33554432)!==0&&wf(t),t=t.sibling}function Ao(t,e,a,l,n,i,r){for(var o=!1;e!==null;){if(e.tag===5){var c=e.stateNode;if(i!==null&&ye<i.length){var b=i[ye],w=cc(c);(b.view||w.view)&&(o=!0);var z;if(z=(t.flags&4)===0)if(w.clip)z=!0;else{z=b.rect;var h=w.rect;z=z.y!==h.y||z.x!==h.x||z.height!==h.height||z.width!==h.width}z&&(t.flags|=4),w.abs?w=!b.abs:(b=b.rect,w=w.rect,w=b.height!==w.height||b.width!==w.width),w&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&vd(c,ye===0?a:a+"_"+ye,n),o&&(t.flags&4)!==0||(ia===null&&(ia=[]),ia.push(c,ye===0?l:l+"_"+ye,e.memoizedProps)),ye++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r?t.flags|=e.flags&32:Ao(t,e.child,a,l,n,i,r)&&(o=!0));e=e.sibling}return o}function Nf(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,l=t.stateNode,n=ga(a,l),i=ba(a.default,a.update),r;r=t.memoizedState,t.memoizedState=null,l=t;var o=t.child;ye=0,n=Ao(l,o,n,n,i,r,!1),(t.flags&4)!==0&&n&&on(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Nf(t);t=t.sibling}}var It=!1,xt=!1,ua=!1,Co=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,Pt=null,oa=!1,ti=!1,yr=!1,Oo=!1;function eh(t,e,a){if(t=t.containerInfo,nc=xn,t=zs(t),xu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break t}var o=0,c=-1,b=-1,w=0,z=0,h=t,_=null;e:for(;;){for(var O;h!==l||i!==0&&h.nodeType!==3||(c=o+i),h!==r||n!==0&&h.nodeType!==3||(b=o+n),h.nodeType===3&&(o+=h.nodeValue.length),(O=h.firstChild)!==null;)_=h,h=O;for(;;){if(h===t)break e;if(_===l&&++w===i&&(c=o),_===r&&++z===n&&(b=o),(O=h.nextSibling)!==null)break;h=_,_=h.parentNode}h=O}l=c===-1||b===-1?null:{start:c,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(ic={focusedElem:t,selectionRange:l},xn=!1,a=(a&335544064)===a,Pt=e,e=a?9270:1024;Pt!==null;){if(t=Pt,a&&(l=t.deletions,l!==null))for(i=0;i<l.length;i++)a&&Mo(l[i]);if(t.alternate===null&&(t.flags&2)!==0)a&&xf(t),_r(a);else{if(t.tag===22){if(l=t.alternate,t.memoizedState!==null){l!==null&&l.memoizedState===null&&a&&Mo(l),_r(a);continue}else if(l!==null&&l.memoizedState!==null){a&&xf(t),_r(a);continue}}l=t.child,(t.subtreeFlags&e)!==0&&l!==null?(l.return=t,Pt=l):(a&&_f(t),_r(a))}}qe=null}function _r(t){for(;Pt!==null;){var e=Pt,a=t,l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){a=void 0,n=l.memoizedProps,l=l.memoizedState;var i=e.stateNode;try{var r=_l(e.type,n);a=i.getSnapshotBeforeUpdate(r,l),i.__reactInternalSnapshotBeforeUpdate=a}catch(o){wt(e,e.return,o)}}break;case 3:if((n&1024)!==0){if(l=e.stateNode.containerInfo,a=l.nodeType,a===9)dc(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":dc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&l!==null&&(a=ga(l.memoizedProps,l.stateNode),n=e.memoizedProps,n=ba(n.default,n.update),n!=="none"&&Pl(l,a,n,l.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(d(163))}if(l=e.sibling,l!==null){l.return=e.return,Pt=l;break}Pt=e.return}}function Tf(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),l&4&&In(5,a);break;case 1:if(ca(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){wt(a,a.return,r)}else{var n=_l(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){wt(a,a.return,r)}}l&64&&mf(a),l&512&&na(a,a.return);break;case 3:if(ca(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{e0(t,e)}catch(r){wt(a,a.return,r)}}break;case 27:e===null&&l&4&&bf(a);case 26:case 5:ca(t,a),e===null&&l&4&&No(a),l&512&&na(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),l&4&&Mf(t,a);break;case 13:ca(t,a),l&4&&qf(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mh.bind(null,a),Jh(t,a))));break;case 22:if(l=a.memoizedState!==null||It,!l){var i=e!==null&&e.memoizedState!==null||xt;e=It,n=xt,It=l,(xt=i)&&!n?(l=2,(a.subtreeFlags&8772)!==0&&(l|=1),Fe(t,a,l)):ca(t,a),It=e,xt=n}break;case 30:ca(t,a),l&512&&na(a,a.return);break;case 7:l&512&&na(a,a.return);default:ca(t,a)}}function Do(t,e){for(t=t.child;t!==null;)jf(t,e),t=t.sibling}function jf(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var l=a.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var n=t.stateNode,i=t.memoizedProps.style,r=i!=null&&i.hasOwnProperty("display")?i.display:null;n.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(c){wt(t,t.return,c)}ko(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,gt=!0}catch(c){wt(t,t.return,c)}break;case 18:try{var o=t.stateNode;e?xd(o,!0):xd(t.stateNode,!1)}catch(c){wt(t,t.return,c)}break;case 22:case 23:t.memoizedState===null&&Do(t,e);break;default:Do(t,e)}}function ko(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,l=e;switch(a.tag){case 4:jf(a,l);break t;case 22:a.memoizedState===null&&ko(a,l);break t;default:ko(a,l)}}t=t.sibling}}function zf(t){var e=t.alternate;e!==null&&(t.alternate=null,zf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ji(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ct=null,_e=!1;function Ke(t,e,a){for(a=a.child;a!==null;)Ef(t,e,a),a=a.sibling}function Ef(t,e,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Nn,a)}catch{}switch(a.tag){case 26:xt||ne(a,e),Ke(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!xt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xt||ne(a,e),Pn(a);var l=Ct,n=_e;Fa(a.type)&&(Ct=a.stateNode,_e=!1),Ke(t,e,a),Cd(a.stateNode,a.type,a.memoizedProps),Ct=l,_e=n;break;case 5:xt||ne(a,e),Pn(a);case 6:if(a.tag===6&&Pn(a),l=Ct,n=_e,Ct=null,Ke(t,e,a),Ct=l,_e=n,Ct!==null)if(_e)try{(Ct.nodeType===9?Ct.body:Ct.nodeName==="HTML"?Ct.ownerDocument.body:Ct).removeChild(a.stateNode),gt=!0}catch(i){wt(a,e,i)}else try{Ct.removeChild(a.stateNode),gt=!0}catch(i){wt(a,e,i)}break;case 18:Ct!==null&&(_e?(t=Ct,bd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vn(t)):bd(Ct,a.stateNode));break;case 4:l=Ct,n=_e,Ct=a.stateNode.containerInfo,_e=!0,Ke(t,e,a),Ct=l,_e=n;break;case 0:case 11:case 14:case 15:La(2,a,e),xt||La(4,a,e),Ke(t,e,a);break;case 1:xt||(ne(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&hf(a,e,l)),Ke(t,e,a);break;case 21:Ke(t,e,a);break;case 22:xt=(l=xt)||a.memoizedState!==null,Ke(t,e,a),xt=l;break;case 30:ne(a,e),Ke(t,e,a);break;case 7:xt||ne(a,e),Ke(t,e,a);break;default:Ke(t,e,a)}}function Mf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vn(t)}catch(a){wt(e,e.return,a)}}}function qf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vn(t)}catch(a){wt(e,e.return,a)}}function ah(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Sf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Sf),e;default:throw Error(d(435,t.tag))}}function wr(t,e){var a=ah(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=hh.bind(null,t,l);l.then(n,n)}})}function me(t,e,a){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var i=l[n],r=t,o=e,c=o;t:for(;c!==null;){switch(c.tag){case 27:if(Fa(c.type)){Ct=c.stateNode,_e=!1;break t}break;case 5:Ct=c.stateNode,_e=!1;break t;case 3:case 4:Ct=c.stateNode.containerInfo,_e=!0;break t}c=c.return}if(Ct===null)throw Error(d(160));Ef(r,o,i),Ct=null,_e=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Af(e,t,a),e=e.sibling}var Je=null;function Af(t,e,a){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var r=l[i];r.ref.impl=r.nextImpl}me(e,t,a),he(t),n&4&&(La(3,t,t.return),In(3,t),La(5,t,t.return));break;case 1:me(e,t,a),he(t),n&512&&(xt||l===null||ne(l,l.return)),n&64&&It&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(i=Je,me(e,t,a),he(t),n&512&&(xt||l===null||ne(l,l.return)),n&4)if(n=l!==null?l.memoizedState:null,a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null)if(It)t.stateNode=hd(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,a=t.memoizedProps,n=i.ownerDocument||i;e:switch(e){case"title":l=n.getElementsByTagName("title")[0],(!l||l[jn]||l[te]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(e),n.head.insertBefore(l,n.querySelector("head > title"))),ie(l,e,a),l[te]=t,$t(l),e=l;break t;case"link":if(i=Bd("link","href",n).get(e+(a.href||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(r,1);break e}}l=n.createElement(e),ie(l,e,a),n.head.appendChild(l);break;case"meta":if(i=Bd("meta","content",n).get(e+(a.content||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(r,1);break e}}l=n.createElement(e),ie(l,e,a),n.head.appendChild(l);break;default:throw Error(d(468,e))}l[te]=t,$t(l),e=l}t.stateNode=e}else It||vc(i,t.type,t.stateNode);else t.stateNode=Rd(i,a,t.memoizedProps);else n!==a?(n===null?(e=l.stateNode,e===null||xt||e.parentNode.removeChild(e)):n.count--,a===null?It||vc(i,t.type,t.stateNode):Rd(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&So(t,t.memoizedProps,l.memoizedProps);break;case 27:me(e,t,a),he(t),n&512&&(xt||l===null||ne(l,l.return)),l!==null&&n&4&&So(t,t.memoizedProps,l.memoizedProps);break;case 5:if(i=ua,ua=!1,me(e,t,a),ua=i,he(t),n&512&&(xt||l===null||ne(l,l.return)),t.flags&32){e=t.stateNode;try{kl(e,""),gt=!0}catch(w){wt(t,t.return,w)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,So(t,e,l!==null?l.memoizedProps:e)),n&1024&&(Co=!0);break;case 6:if(me(e,t,a),he(t),n&4){if(t.stateNode===null)throw Error(d(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,gt=!0}catch(w){wt(t,t.return,w)}}break;case 3:if(gt=!1,Rr=null,i=Je,Je=ci(e.containerInfo),me(e,t,a),Je=i,he(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{vn(e.containerInfo)}catch(w){wt(t,t.return,w)}Co&&(Co=!1,Cf(t)),gt=!1;break;case 4:n=ua,ua=It,l=Wc(),i=Je,Je=ci(t.stateNode.containerInfo),me(e,t,a),he(t),Je=i,gt&&ti&&(yr=!0),gt=l,ua=n;break;case 12:me(e,t,a),he(t);break;case 31:me(e,t,a),he(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,wr(t,e)));break;case 13:me(e,t,a),he(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Tr=Se()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,wr(t,e)));break;case 22:i=t.memoizedState!==null,r=l!==null&&l.memoizedState!==null;var o=It,c=xt,b=ua;It=o||i,ua=b||i,xt=c||r,me(e,t,a),xt=c,ua=b,It=o,he(t),n&8192&&(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||l===null||r||It||xt||(e=r||xt,a=It,l=xt,It=i||It,xt=e,Ga(t,2),It=a,xt=l),!i&&ua||Do(t,i)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,wr(t,a))));break;case 19:me(e,t,a),he(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,wr(t,e)));break;case 30:n&512&&(xt||l===null||ne(l,l.return)),n=Wc(),i=ti,r=(a&335544064)===a,o=t.memoizedProps,ti=r&&ba(o.default,o.update)!=="none",me(e,t,a),he(t),r&&l!==null&&gt&&(t.flags|=4),ti=i,gt=n;break;case 21:break;case 7:n&512&&(xt||l===null||ne(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=t);default:me(e,t,a),he(t)}}function he(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(gf(l)){a=l;break}l=l.return}l=null;for(var n=t.return;n!==null;){if(wo(n)){var i=n.stateNode;l===null?l=[i]:l.push(i)}if(_o(n))break;n=n.return}var r=l;if(a==null)throw Error(d(160));switch(a.tag){case 27:var o=a.stateNode,c=To(t);gr(t,c,o,r);break;case 5:var b=a.stateNode;a.flags&32&&(kl(b,""),a.flags&=-33);var w=To(t);gr(t,w,b,r);break;case 3:case 4:var z=a.stateNode.containerInfo,h=To(t);jo(t,h,z,r);break;default:throw Error(d(161))}}catch(_){wt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Cf(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,xn=!0,e.reset(),xn=!1),t=t.sibling}}function tn(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Of(e,t),e=e.sibling;else Nf(e)}function Of(t,e){var a=t.alternate;if(a===null)zo(t,!1);else switch(t.tag){case 3:if(Oo=oa=!1,vf(),tn(e,t),!oa&&!yr){if(t=ia,t!==null)for(var l=0;l<t.length;l+=3){a=t[l];var n=t[l+1];yd(a,t[l+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Oo=!0}ia=null;break;case 5:tn(e,t);break;case 4:l=oa,oa=!1,tn(e,t),oa&&(yr=!0),oa=l;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?zo(t,!1):tn(e,t));break;case 30:l=oa,n=vf(),oa=!1,tn(e,t),oa&&(t.flags|=4);var i=t.memoizedProps,r=t.stateNode;e=ga(i,r),r=ga(a.memoizedProps,r);var o=ba(i.default,i.update);o==="none"?e=!1:(i=a.memoizedState,a.memoizedState=null,a=t.child,ye=0,e=Ao(t,a,e,r,o,i,!0),ye!==(i===null?0:i.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(on(t,t.memoizedProps.onUpdate),ia=n):n!==null&&(n.push.apply(n,ia),ia=n),oa=(t.flags&32)!==0?!0:l;break;default:tn(e,t)}}function ca(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Tf(t,e.alternate,e),e=e.sibling}function Ga(t,e){for(t=t.child;t!==null;){var a=t,l=e;switch(a.tag){case 0:case 11:case 14:case 15:La(4,a,a.return),Ga(a,l);break;case 1:ne(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&hf(a,a.return,n),Ga(a,l);break;case 27:(l&2)!==0&&Cd(a.stateNode,a.type,a.memoizedProps);case 5:ne(a,a.return),a.tag!==5&&a.tag!==27||Pn(a),Ga(a,l);break;case 6:Pn(a);break;case 26:ne(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||xt||n.parentNode.removeChild(n),Ga(a,l);break;case 22:a.memoizedState===null&&Ga(a,l);break;case 30:ne(a,a.return),Ga(a,l);break;case 7:ne(a,a.return);default:Ga(a,l)}t=t.sibling}}function Fe(t,e,a){for(a=(e.subtreeFlags&8772)!==0?a:a&-2,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,r=i.flags,o=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:Fe(n,i,a),In(4,i);break;case 1:if(Fe(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){wt(l,l.return,w)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var b=n.shared.hiddenCallbacks;if(b!==null)for(n.shared.hiddenCallbacks=null,n=0;n<b.length;n++)t0(b[n],c)}catch(w){wt(l,l.return,w)}}o&&r&64&&mf(i),na(i,i.return);break;case 27:(a&2)!==0&&bf(i);case 5:i.tag!==5&&i.tag!==27||pf(i),Fe(n,i,a),o&&l===null&&r&4&&No(i),na(i,i.return);break;case 6:pf(i);break;case 26:c=i.stateNode,i.memoizedState!==null||c===null||It||vc(ci(c.ownerDocument),i.type,c),Fe(n,i,a),o&&l===null&&r&4&&No(i),na(i,i.return);break;case 12:Fe(n,i,a);break;case 31:Fe(n,i,a),o&&r&4&&Mf(n,i);break;case 13:Fe(n,i,a),o&&r&4&&qf(n,i);break;case 22:i.memoizedState===null&&Fe(n,i,a),na(i,i.return);break;case 30:Fe(n,i,a),na(i,i.return);break;case 7:na(i,i.return);default:Fe(n,i,a)}e=e.sibling}}function Uo(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Hn(a))}function Ro(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hn(t))}function Le(t,e,a,l){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)Df(t,e,a,l),e=e.sibling;else n&&wf(e)}function Df(t,e,a,l){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&vr(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:Le(t,e,a,l),i&2048&&In(9,e);break;case 1:Le(t,e,a,l);break;case 3:Le(t,e,a,l),n&&Oo&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&Hn(i)));break;case 12:if(i&2048){Le(t,e,a,l),i=e.stateNode;try{var r=e.memoizedProps,o=r.id,c=r.onPostCommit;typeof c=="function"&&c(o,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(b){wt(e,e.return,b)}}else Le(t,e,a,l);break;case 31:Le(t,e,a,l);break;case 13:Le(t,e,a,l);break;case 23:break;case 22:r=e.stateNode,o=e.alternate,e.memoizedState!==null?(n&&o!==null&&o.memoizedState===null&&vr(o),r._visibility&2?Le(t,e,a,l):ei(t,e)):(n&&o!==null&&o.memoizedState!==null&&vr(e),r._visibility&2?Le(t,e,a,l):(r._visibility|=2,en(t,e,a,l,(e.subtreeFlags&10256)!==0||!1))),i&2048&&Uo(o,e);break;case 24:Le(t,e,a,l),i&2048&&Ro(e.alternate,e);break;case 30:n&&(i=e.alternate,i!==null&&(ra(i.child,!0),ra(e.child,!0))),Le(t,e,a,l);break;default:Le(t,e,a,l)}}function en(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,r=e,o=a,c=l,b=r.flags;switch(r.tag){case 0:case 11:case 15:en(i,r,o,c,n),In(8,r);break;case 23:break;case 22:var w=r.stateNode;r.memoizedState!==null?w._visibility&2?en(i,r,o,c,n):ei(i,r):(w._visibility|=2,en(i,r,o,c,n)),n&&b&2048&&Uo(r.alternate,r);break;case 24:en(i,r,o,c,n),n&&b&2048&&Ro(r.alternate,r);break;default:en(i,r,o,c,n)}e=e.sibling}}function ei(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:ei(a,l),n&2048&&Uo(l.alternate,l);break;case 24:ei(a,l),n&2048&&Ro(l.alternate,l);break;default:ei(a,l)}e=e.sibling}}var wl=8192;function Nl(t,e,a){if(t.subtreeFlags&wl)for(t=t.child;t!==null;)kf(t,e,a),t=t.sibling}function kf(t,e,a){switch(t.tag){case 26:Nl(t,e,a),t.flags&wl&&(t.memoizedState!==null?op(a,Je,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Ld(a,t)));break;case 5:Nl(t,e,a),t.flags&wl&&(t=t.stateNode,(e&335544128)===e&&Ld(a,t));break;case 3:case 4:var l=Je;Je=ci(t.stateNode.containerInfo),Nl(t,e,a),Je=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=wl,wl=16777216,Nl(t,e,a),wl=l):Nl(t,e,a));break;case 30:if((t.flags&wl)!==0&&(l=t.memoizedProps.name,l!=null&&l!=="auto")){var n=t.stateNode;n.paired=null,qe===null&&(qe=new Map),qe.set(l,n)}Nl(t,e,a);break;default:Nl(t,e,a)}}function Uf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ai(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Pt=l,Bf(l,t)}Uf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rf(t),t=t.sibling}function Rf(t){switch(t.tag){case 0:case 11:case 15:ai(t),t.flags&2048&&La(9,t,t.return);break;case 3:ai(t);break;case 12:ai(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Nr(t)):ai(t);break;default:ai(t)}}function Nr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Pt=l,Bf(l,t)}Uf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:La(8,e,e.return),Nr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Nr(e));break;default:Nr(e)}t=t.sibling}}function Bf(t,e){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:La(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Hn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pt=l;else t:for(a=t;Pt!==null;){l=Pt;var n=l.sibling,i=l.return;if(zf(l),l===a){Pt=null;break t}if(n!==null){n.return=i,Pt=n;break t}Pt=i}}}var lh={getCacheForType:function(t){var e=ee(Lt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return ee(Lt).controller.signal}},nh=typeof WeakMap=="function"?WeakMap:Map,bt=0,zt=null,ut=null,ft=0,_t=0,Ae=null,Qa=!1,an=!1,Bo=!1,ja=0,Bt=0,Va=0,Sl=0,Sr=0,Ce=0,ln=0,li=null,we=null,Ho=!1,Tr=0,Hf=0,jr=1/0,zr=null,Xa=null,Ot=0,$e=null,Tl=null,sa=0,Yo=0,Zo=null,Yf=null,nn=null,rn=null,un=null,ni=0,Er=null;function Oe(){return(bt&2)!==0&&ft!==0?ft&-ft:A.T!==null?Wo():Lc()}function Zf(){if(Ce===0)if((ft&536870912)===0||at){var t=wi;wi<<=1,(wi&3932160)===0&&(wi=262144),Ce=t}else Ce=536870912;return t=ae.current,t!==null&&(t.flags|=32),Ce}function on(t,e){if(e!=null){var a=t.stateNode,l=a.ref;l===null&&(l=a.ref=_d(ga(t.memoizedProps,a))),rn===null&&(rn=[]),rn.push(e.bind(null,l))}}function Ne(t,e,a){(t===zt&&(_t===2||_t===9)||t.cancelPendingCommit!==null)&&(cn(t,0),Ka(t,ft,Ce,!1)),Tn(t,a),((bt&2)===0||t!==zt)&&(t===zt&&((bt&2)===0&&(Sl|=a),Bt===4&&Ka(t,ft,Ce,!1)),fa(t))}function Lf(t,e,a){if((bt&6)!==0)throw Error(d(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Sn(t,e),n=l?uh(t,e):Go(t,e,!0),i=l;do{if(n===0){an&&!l&&Ka(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!ih(a)){n=Go(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var o=t;n=li;var c=o.current.memoizedState.isDehydrated;if(c&&(cn(o,r).flags|=256),r=Go(o,r,!1),r!==2&&r!==6){if(Bo&&!c){o.errorRecoveryDisabledLanes|=i,Sl|=i,n=4;break t}i=we,we=n,i!==null&&(we===null?we=i:we.push.apply(we,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){cn(t,0),Ka(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ka(l,e,Ce,!Qa);break t;case 2:we=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(n=Tr+300-Se(),10<n)){if(Ka(l,e,Ce,!Qa),Si(l,0,!0)!==0)break t;sa=e,l.timeoutHandle=oc(Gf.bind(null,l,a,we,zr,Ho,e,Ce,Sl,ln,Qa,i,"Throttled",-0,0),n);break t}Gf(l,a,we,zr,Ho,e,Ce,Sl,ln,Qa,i,null,-0,0)}}break}while(!0);fa(t)}function Gf(t,e,a,l,n,i,r,o,c,b,w,z,h,_){t.timeoutHandle=-1;var O=e.subtreeFlags,G=(i&335544064)===i;if(z=null,(G||O&8192||(O&16785408)===16785408)&&(z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},qe=null,kf(e,i,z),G&&(O=z,G=t.containerInfo,G=(G.nodeType===9?G:G.ownerDocument).__reactViewTransition,G!=null&&(O.count++,O.waitingForViewTransition=!0,O=di.bind(O),G.finished.then(O,O))),O=(i&62914560)===i?Tr-Se():(i&4194048)===i?Hf-Se():0,O=cp(z,O),O!==null)){sa=i,t.cancelPendingCommit=O(Wf.bind(null,t,e,i,a,l,n,r,o,c,b,w,z,null,h,_)),Ka(t,i,r,!b);return}Wf(t,e,i,a,l,n,r,o,c,b,w,z)}function ih(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Ee(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ka(t,e,a,l){e=Rc(t,e),e&=~Sr,e&=~Sl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-je(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&Hc(t,a,e)}function Mr(){return(bt&6)===0?(ii(0),!1):!0}function Lo(){if(ut!==null){if(_t===0)var t=ut.return;else t=ut,ya=dl=null,Fu(t),Jl=null,Ln=0,t=ut;for(;t!==null;)df(t.alternate,t),t=t.return;ut=null}}function cn(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Mh(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Lo(),zt=t,ut=a=xa(t.current,null),ft=e,_t=0,Ae=null,Qa=!1,an=Sn(t,e),Bo=!1,ln=Ce=Sr=Sl=Va=Bt=0,we=li=null,Ho=!1,ja=Rc(t,e),Ri(),a}function Qf(t,e){P=null,A.H=or,e===Kl||e===Ji?(e=$s(),_t=3):e===Uu?(e=$s(),_t=4):_t=e===so?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ae=e,ut===null&&(Bt=1,cr(t,Be(e,t.current)))}function Vf(){var t=ae.current;return t===null?!0:(ft&4194048)===ft?ce===null:(ft&62914560)===ft||(ft&536870912)!==0?t===ce:!1}function Xf(){var t=A.H;return A.H=or,t===null?or:t}function Kf(){var t=A.A;return A.A=lh,t}function qr(){Bt=4,Qa||(ft&4194048)!==ft&&ae.current!==null||(an=!0),(Va&134217727)===0&&(Sl&134217727)===0||zt===null||Ka(zt,ft,Ce,!1)}function Go(t,e,a){var l=bt;bt|=2;var n=Xf(),i=Kf();(zt!==t||ft!==e)&&(zr=null,cn(t,e)),e=!1;var r=Bt;t:do try{if(_t!==0&&ut!==null){var o=ut,c=Ae;switch(_t){case 8:Lo(),r=6;break t;case 3:case 2:case 9:case 6:ae.current===null&&(e=!0);var b=_t;if(_t=0,Ae=null,sn(t,o,c,b),a&&an){r=0;break t}break;default:b=_t,_t=0,Ae=null,sn(t,o,c,b)}}rh(),r=Bt;break}catch(w){Qf(t,w)}while(!0);return e&&t.shellSuspendCounter++,ya=dl=null,bt=l,A.H=n,A.A=i,ut===null&&(zt=null,ft=0,Ri()),r}function rh(){for(;ut!==null;)Jf(ut)}function uh(t,e){var a=bt;bt|=2;var l=Xf(),n=Kf();zt!==t||ft!==e?(zr=null,jr=Se()+500,cn(t,e)):an=Sn(t,e);t:do try{if(_t!==0&&ut!==null){e=ut;var i=Ae;e:switch(_t){case 1:_t=0,Ae=null,sn(t,e,i,1);break;case 2:case 9:if(Js(i)){_t=0,Ae=null,Ff(e);break}e=function(){_t!==2&&_t!==9||zt!==t||(_t=7),fa(t)},i.then(e,e);break t;case 3:_t=7;break t;case 4:_t=5;break t;case 7:Js(i)?(_t=0,Ae=null,Ff(e)):(_t=0,Ae=null,sn(t,e,i,7));break;case 5:var r=null;switch(ut.tag){case 26:r=ut.memoizedState;case 5:case 27:var o=ut;if(r?Yd(r):o.stateNode.complete){_t=0,Ae=null;var c=o.sibling;if(c!==null)ut=c;else{var b=o.return;b!==null?(ut=b,Ar(b)):ut=null}break e}}_t=0,Ae=null,sn(t,e,i,5);break;case 6:_t=0,Ae=null,sn(t,e,i,6);break;case 8:Lo(),Bt=6;break t;default:throw Error(d(462))}}oh();break}catch(w){Qf(t,w)}while(!0);return ya=dl=null,A.H=l,A.A=n,bt=a,ut!==null?0:(zt=null,ft=0,Ri(),Bt)}function oh(){for(;ut!==null&&!T1();)Jf(ut)}function Jf(t){var e=sf(t.alternate,t,ja);t.memoizedProps=t.pendingProps,e===null?Ar(t):ut=e}function Ff(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=af(a,e,e.pendingProps,e.type,void 0,ft);break;case 11:e=af(a,e,e.pendingProps,e.type.render,e.ref,ft);break;case 5:Fu(e);var l=e;l===Wt&&(at?(Gi(l),l.tag===5&&l.stateNode!=null&&(Et=l.stateNode)):(Gi(l),at=!0));default:df(a,e),e=ut=Rs(e,ja),e=sf(a,e,ja)}t.memoizedProps=t.pendingProps,e===null?Ar(t):ut=e}function sn(t,e,a,l){ya=dl=null,Fu(e),Jl=null,Ln=0;var n=e.return;try{if(Fm(t,n,e,a,ft)){Bt=1,cr(t,Be(a,t.current)),ut=null;return}}catch(i){if(n!==null)throw ut=n,i;Bt=1,cr(t,Be(a,t.current)),ut=null;return}e.flags&32768?(at||l===1?t=!0:an||(ft&536870912)!==0?t=!1:(Qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ae.current,l!==null&&l.tag===13&&(l.flags|=16384))),$f(e,t)):Ar(e)}function Ar(t){var e=t;do{if((e.flags&32768)!==0){$f(e,Qa);return}t=e.return;var a=Pm(e.alternate,e,ja);if(a!==null){ut=a;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);Bt===0&&(Bt=5)}function $f(t,e){do{var a=th(t.alternate,t);if(a!==null){a.flags&=32767,ut=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ut=t;return}ut=t=a}while(t!==null);Bt=6,ut=null}function Wf(t,e,a,l,n,i,r,o,c,b,w,z){t.cancelPendingCommit=null;do Cr();while(Ot!==0);if((bt&6)!==0)throw Error(d(327));if(e!==null){if(e===t.current)throw Error(d(177));t===zt&&(ut=zt=null,ft=0),Tl=e,$e=t,sa=a,Zo=n,Yf=l,ch(t,e,a,r,o,c,z)}}function ch(t,e,a,l,n,i,r){var o=e.lanes|e.childLanes;if(Yo=o,o|=Nu,k1(t,a,o,l,n,i),rn=null,(a&335544064)===a?(un=Rm(t),l=10262):(un=null,l=10256),(e.subtreeFlags&l)!==0||(e.flags&l)!==0?(t.callbackNode=null,t.callbackPriority=0,ph(yi,function(){return Ko(),null})):(t.callbackNode=null,t.callbackPriority=0),br=!1,l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,n=R.p,R.p=2,i=bt,bt|=4;try{eh(t,e,a)}finally{bt=i,R.p=n,A.T=l}}Ot=1,br?nn=kh(r,t.containerInfo,un,Qo,Vo,fh,Xo,Ko,sh):(Qo(),Vo(),Xo())}function sh(t){if(Ot!==0){var e=$e.onRecoverableError;e(t,{componentStack:null})}}function fh(){Ot===3&&(Ot=0,Of(Tl,$e),Ot=4)}function Qo(){if(Ot===1){Ot=0;var t=$e,e=Tl,a=sa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=A.T,A.T=null;var n=R.p;R.p=2;var i=bt;bt|=4;try{ti=yr=!1,Af(e,t,a),a=ic;var r=zs(t.containerInfo),o=a.focusedElem,c=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&js(o.ownerDocument.documentElement,o)){if(c!==null&&xu(o)){var b=c.start,w=c.end;if(w===void 0&&(w=b),"selectionStart"in o)o.selectionStart=b,o.selectionEnd=Math.min(w,o.value.length);else{var z=o.ownerDocument||document,h=z&&z.defaultView||window;if(h.getSelection){var _=h.getSelection(),O=o.textContent.length,G=Math.min(c.start,O),tt=c.end===void 0?G:Math.min(c.end,O);!_.extend&&G>tt&&(r=tt,tt=G,G=r);var g=Ts(o,G),f=Ts(o,tt);if(g&&f&&(_.rangeCount!==1||_.anchorNode!==g.node||_.anchorOffset!==g.offset||_.focusNode!==f.node||_.focusOffset!==f.offset)){var y=z.createRange();y.setStart(g.node,g.offset),_.removeAllRanges(),G>tt?(_.addRange(y),_.extend(f.node,f.offset)):(y.setEnd(f.node,f.offset),_.addRange(y))}}}}for(z=[],_=o;_=_.parentNode;)_.nodeType===1&&z.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<z.length;o++){var j=z[o];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}xn=!!nc,ic=nc=null}finally{bt=i,R.p=n,A.T=l}}t.current=e,Ot=2}}function Vo(){if(Ot===2){Ot=0;var t=$e,e=Tl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var l=R.p;R.p=2;var n=bt;bt|=4;try{Tf(t,e.alternate,e)}finally{bt=n,R.p=l,A.T=a}}Ot=3}}function Xo(){if(Ot===4||Ot===3){Ot=0;var t=nn;nn=null,j1();var e=$e,a=Tl,l=sa,n=Yf,i=(l&335544064)===l?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Ot=5:(Ot=0,Tl=$e=null,If(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(Xa=null),tu(l),a=a.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Nn,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=A.T,i=R.p,R.p=2,A.T=null;try{for(var r=e.onRecoverableError,o=0;o<n.length;o++){var c=n[o];r(c.value,{componentStack:c.stack})}}finally{A.T=a,R.p=i}}if(n=rn,r=un,un=null,n!==null&&(rn=null,r===null&&(r=[]),t!==null))for(c=0;c<n.length;c++)a=(0,n[c])(r),a!==void 0&&t.finished.finally(a);(sa&3)!==0&&Cr(),fa(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===Er?ni++:(ni=0,Er=e):(ni=0,Er=null),ii(0)}}function If(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Hn(e)))}function Cr(){return nn!==null&&(nn.skipTransition(),nn=null),Qo(),Vo(),Xo(),Ko()}function Ko(){if(Ot!==5)return!1;var t=$e,e=Yo;Yo=0;var a=tu(sa),l=A.T,n=R.p;try{R.p=32>a?32:a,A.T=null,a=Zo,Zo=null;var i=$e,r=sa;if(Ot=0,Tl=$e=null,sa=0,(bt&6)!==0)throw Error(d(331));var o=bt;if(bt|=4,Rf(i.current),Df(i,i.current,r,a),bt=o,ii(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Nn,i)}catch{}return!0}finally{R.p=n,A.T=l,If(t,e)}}function Pf(t,e,a){e=Be(a,e),e=co(t.stateNode,e,2),t=Ba(t,e,2),t!==null&&(Tn(t,2),fa(t))}function wt(t,e,a){if(t.tag===3)Pf(t,t,a);else for(;e!==null;){if(e.tag===3){Pf(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))){t=Be(a,t),a=J0(2),l=Ba(e,a,2),l!==null&&(F0(a,l,e,t),Tn(l,2),fa(l));break}}e=e.return}}function Jo(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new nh;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Bo=!0,n.add(a),t=dh.bind(null,t,e,a),e.then(t,t))}function dh(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(ft&a)===a&&((Bt===4||Bt===3&&(ft&62914560)===ft&&300>Se()-Tr)&&(bt&2)===0?cn(t,0):Sr|=a,ln===ft&&(ln=0)),fa(t)}function td(t,e){e===0&&(e=Bc()),t=cl(t,e),t!==null&&(Tn(t,e),fa(t))}function mh(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),td(t,a)}function hh(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(e),td(t,a)}function ph(t,e){return $r(t,e)}var fn=null,dn=null,Fo=!1,Or=!1,$o=!1,Ja=0;function fa(t){t!==dn&&t.next===null&&(dn===null?fn=dn=t:dn=dn.next=t),Or=!0,Fo||(Fo=!0,bh())}function ii(t,e){if(!$o&&Or){$o=!0;do for(var a=!1,l=fn;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-je(42|t)+1)-1,i&=n&~(r&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,nd(l,i))}else i=ft,i=Si(l,l===zt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Sn(l,i)||(a=!0,nd(l,i));l=l.next}while(a);$o=!1}}function gh(){ed()}function ed(){Or=Fo=!1;var t=0;Ja!==0&&Eh()&&(t=Ja);for(var e=Se(),a=null,l=fn;l!==null;){var n=l.next,i=ad(l,e);i===0?(l.next=null,a===null?fn=n:a.next=n,n===null&&(dn=a)):(a=l,(t!==0||(i&3)!==0)&&(Or=!0)),l=n}Ot!==0&&Ot!==5||ii(t),Ja!==0&&(Ja=0)}function ad(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var r=31-je(i),o=1<<r,c=n[r];c===-1?((o&a)===0||(o&l)!==0)&&(n[r]=D1(o,e)):c<=e&&(t.expiredLanes|=o),i&=~o}if(e=zt,a=ft,a=Si(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(_t===2||_t===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Wr(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Sn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Wr(l),tu(a)){case 2:case 8:a=kc;break;case 32:a=yi;break;case 268435456:a=Uc;break;default:a=yi}return l=ld.bind(null,t),a=$r(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Wr(l),t.callbackPriority=2,t.callbackNode=null,2}function ld(t,e){if(Ot!==0&&Ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cr()&&t.callbackNode!==a)return null;var l=ft;return l=Si(t,t===zt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Lf(t,l,e),ad(t,Se()),t.callbackNode!=null&&t.callbackNode===a?ld.bind(null,t):null)}function nd(t,e){if(Cr())return null;Lf(t,e,!0)}function bh(){qh(function(){(bt&6)!==0?$r(Dc,gh):ed()})}function Wo(){if(Ja===0){var t=pl;t===0&&(t=_i,_i<<=1,(_i&261888)===0&&(_i=256)),Ja=t}return Ja}function id(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Mi(t)}function xh(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=id((n[xe]||null).action),r=l.submitter;r&&(e=(e=r[xe]||null)?id(e.formAction):r.getAttribute("formAction"),e!==null&&(i=e,r=null));var o=new Oi("action","action",null,l,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ja!==0){var c=new FormData(n,r);no(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(o.preventDefault(),c=new FormData(n,r),no(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var Io=0;Io<wu.length;Io++){var Po=wu[Io],vh=Po.toLowerCase(),yh=Po[0].toUpperCase()+Po.slice(1);Xe(vh,"on"+yh)}Xe(qs,"onAnimationEnd"),Xe(As,"onAnimationIteration"),Xe(Cs,"onAnimationStart"),Xe("dblclick","onDoubleClick"),Xe("focusin","onFocus"),Xe("focusout","onBlur"),Xe(Mm,"onTransitionRun"),Xe(qm,"onTransitionStart"),Xe(Am,"onTransitionCancel"),Xe(Os,"onTransitionEnd"),Ol("onMouseEnter",["mouseout","mouseover"]),Ol("onMouseLeave",["mouseout","mouseover"]),Ol("onPointerEnter",["pointerout","pointerover"]),Ol("onPointerLeave",["pointerout","pointerover"]),rl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rl("onBeforeInput",["compositionend","keypress","textInput","paste"]),rl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_h=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ri));function rd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var r=l.length-1;0<=r;r--){var o=l[r],c=o.instance,b=o.currentTarget;if(o=o.listener,c!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=b;try{i(n)}catch(w){Ui(w)}n.currentTarget=null,i=c}else for(r=0;r<l.length;r++){if(o=l[r],c=o.instance,b=o.currentTarget,o=o.listener,c!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=b;try{i(n)}catch(w){Ui(w)}n.currentTarget=null,i=c}}}}function ot(t,e){var a=e[Qc];a===void 0&&(a=e[Qc]=new Set);var l=t+"__bubble";a.has(l)||(ud(e,t,2,!1),a.add(l))}function tc(t,e,a){var l=0;e&&(l|=4),ud(a,t,l,e)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function ec(t){if(!t[Dr]){t[Dr]=!0,Kc.forEach(function(a){a!=="selectionchange"&&(_h.has(a)||tc(a,!1,t),tc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Dr]||(e[Dr]=!0,tc("selectionchange",!1,e))}}function ud(t,e,a,l){switch($d(e)){case 2:var n=mp;break;case 8:n=hp;break;default:n=_c}a=n.bind(null,e,a,t),n=void 0,!ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function ac(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var o=l.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=l.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=il(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){l=i=r;continue t}o=o.parentNode}}l=l.return}rs(function(){var b=i,w=ru(a),z=[];t:{var h=Ds.get(t);if(h!==void 0){var _=Oi,O=t;switch(t){case"keypress":if(Ai(a)===0)break t;case"keydown":case"keyup":_=im;break;case"focusin":O="focus",_=du;break;case"focusout":O="blur",_=du;break;case"beforeblur":case"afterblur":_=du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=sm;break;case qs:case As:case Cs:_=$1;break;case Os:_=dm;break;case"scroll":case"scrollend":_=V1;break;case"wheel":_=hm;break;case"copy":case"cut":case"paste":_=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=fs;break;case"submit":_=om;break;case"toggle":case"beforetoggle":_=gm}var G=(e&4)!==0,tt=!G&&(t==="scroll"||t==="scrollend"),g=G?h!==null?h+"Capture":null:h;G=[];for(var f=b,y;f!==null;){var j=f;if(y=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||y===null||g===null||(j=En(f,g),j!=null&&G.push(ui(f,j,y))),tt)break;f=f.return}0<G.length&&(h=new _(h,O,null,a,w),z.push({event:h,listeners:G}))}}if((e&7)===0){t:{if(_=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",_&&a!==iu&&(O=a.relatedTarget||a.fromElement)&&(il(O)||O[ql]))break t;(h||_)&&(O=w.window===w?w:(_=w.ownerDocument)?_.defaultView||_.parentWindow:window,h?(_=a.relatedTarget||a.toElement,h=b,_=_?il(_):null,_!==null&&(tt=k(_),G=_.tag,_!==tt||G!==5&&G!==27&&G!==6)&&(_=null)):(h=null,_=b),h!==_&&(G=cs,j="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(G=fs,j="onPointerLeave",g="onPointerEnter",f="pointer"),tt=h==null?O:zn(h),y=_==null?O:zn(_),O=new G(j,f+"leave",h,a,w),O.target=tt,O.relatedTarget=y,j=null,il(w)===b&&(G=new G(g,f+"enter",_,a,w),G.target=y,G.relatedTarget=tt,j=G),tt=j,G=h&&_?Jt(h,_,wh):null,h!==null&&od(z,O,h,G,!1),_!==null&&tt!==null&&od(z,tt,_,G,!0)))}t:{if(h=b?zn(b):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var Y=vs;else if(bs(h))if(ys)Y=jm;else{Y=Sm;var dt=Nm}else _=h.nodeName,!_||_.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?b&&nu(b.elementType)&&(Y=vs):Y=Tm;if(Y&&(Y=Y(t,b))){xs(z,Y,a,w);break t}dt&&dt(t,h,b)}switch(dt=b?zn(b):window,t){case"focusin":(bs(dt)||dt.contentEditable==="true")&&(Hl=dt,vu=b,Un=null);break;case"focusout":Un=vu=Hl=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Es(z,a,w);break;case"selectionchange":if(Em)break;case"keydown":case"keyup":Es(z,a,w)}var X;if(hu)t:{switch(t){case"compositionstart":var $="onCompositionStart";break t;case"compositionend":$="onCompositionEnd";break t;case"compositionupdate":$="onCompositionUpdate";break t}$=void 0}else Bl?ps(t,a)&&($="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&($="onCompositionStart");$&&(ds&&a.locale!=="ko"&&(Bl||$!=="onCompositionStart"?$==="onCompositionEnd"&&Bl&&(X=us()):(Ma=w,cu="value"in Ma?Ma.value:Ma.textContent,Bl=!0)),dt=kr(b,$),0<dt.length&&($=new ss($,t,null,a,w),z.push({event:$,listeners:dt}),X?$.data=X:(X=gs(a),X!==null&&($.data=X)))),(X=xm?vm(t,a):ym(t,a))&&($=kr(b,"onBeforeInput"),0<$.length&&(dt=new ss("onBeforeInput","beforeinput",null,a,w),z.push({event:dt,listeners:$}),dt.data=X)),xh(z,t,b,a,w)}rd(z,e)})}function ui(t,e,a){return{instance:t,listener:e,currentTarget:a}}function kr(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=En(t,a),n!=null&&l.unshift(ui(t,n,i)),n=En(t,e),n!=null&&l.push(ui(t,n,i))),t.tag===3)return l;t=t.return}return[]}function wh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function od(t,e,a,l,n){for(var i=e._reactName,r=[];a!==null&&a!==l;){var o=a,c=o.alternate,b=o.stateNode;if(o=o.tag,c!==null&&c===l)break;o!==5&&o!==26&&o!==27||b===null||(c=b,n?(b=En(a,i),b!=null&&r.unshift(ui(a,b,c))):n||(b=En(a,i),b!=null&&r.push(ui(a,b,c)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var Nh=/\r\n?/g,Sh=/\u0000|\uFFFD/g;function cd(t){return(typeof t=="string"?t:""+t).replace(Nh,`
`).replace(Sh,"")}function sd(t,e){return e=cd(e),cd(t)===e}function Nt(t,e,a,l,n,i){switch(a){case"children":if(typeof l=="string")e==="body"||e==="textarea"&&l===""||kl(t,l);else if(typeof l=="number"||typeof l=="bigint")e!=="body"&&kl(t,""+l);else return;break;case"className":Ei(t,"class",l);break;case"tabIndex":Ei(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ei(t,a,l);break;case"style":ns(t,l,i);return;case"data":if(e!=="object"){Ei(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Mi(l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&Nt(t,e,"name",n.name,n,null),Nt(t,e,"formEncType",n.formEncType,n,null),Nt(t,e,"formMethod",n.formMethod,n,null),Nt(t,e,"formTarget",n.formTarget,n,null)):(Nt(t,e,"encType",n.encType,n,null),Nt(t,e,"method",n.method,n,null),Nt(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Mi(l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ea);return;case"onScroll":l!=null&&ot("scroll",t);return;case"onScrollEnd":l!=null&&ot("scrollend",t);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Mi(l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":ot("beforetoggle",t),ot("toggle",t),zi(t,"popover",l);break;case"xlinkActuate":ha(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ha(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ha(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ha(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ha(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ha(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ha(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ha(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ha(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zi(t,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=G1.get(a)||a,zi(t,a,l);else return}gt=!0}function lc(t,e,a,l,n,i){switch(a){case"style":ns(t,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof l=="string")kl(t,l);else if(typeof l=="number"||typeof l=="bigint")kl(t,""+l);else return;break;case"onScroll":l!=null&&ot("scroll",t);return;case"onScrollEnd":l!=null&&ot("scrollend",t);return;case"onClick":l!=null&&(t.onclick=ea);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Jc.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),i=a.slice(2,n?a.length-7:void 0),e=t[xe]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(i,e,n),typeof l=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,n);break t}gt=!0,a in t?t[a]=l:l===!0?t.setAttribute(a,""):zi(t,a,l)}return}gt=!0}function ie(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ot("error",t),ot("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Nt(t,e,i,r,a,null)}}n&&Nt(t,e,"srcSet",a.srcSet,a,null),l&&Nt(t,e,"src",a.src,a,null);return;case"input":ot("invalid",t);var o=i=r=n=null,c=null,b=null;for(l in a)if(a.hasOwnProperty(l)){var w=a[l];if(w!=null)switch(l){case"name":n=w;break;case"type":r=w;break;case"checked":c=w;break;case"defaultChecked":b=w;break;case"value":i=w;break;case"defaultValue":o=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(d(137,e));break;default:Nt(t,e,l,w,a,null)}}ts(t,i,o,c,b,r,n,!1);return;case"select":ot("invalid",t),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":r=o;break;case"multiple":l=o;default:Nt(t,e,n,o,a,null)}e=i,a=r,t.multiple=!!l,e!=null?Dl(t,!!l,e,!1):a!=null&&Dl(t,!!l,a,!0);return;case"textarea":ot("invalid",t),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:Nt(t,e,r,o,a,null)}as(t,l,n,i);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Nt(t,e,c,l,a,null)}return;case"dialog":ot("beforetoggle",t),ot("toggle",t),ot("cancel",t),ot("close",t);break;case"iframe":case"object":ot("load",t);break;case"video":case"audio":for(l=0;l<ri.length;l++)ot(ri[l],t);break;case"image":ot("error",t),ot("load",t);break;case"details":ot("toggle",t);break;case"embed":case"source":case"link":ot("error",t),ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Nt(t,e,b,l,a,null)}return;default:if(nu(e)){for(w in a)a.hasOwnProperty(w)&&(l=a[w],l!==void 0&&lc(t,e,w,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&Nt(t,e,o,l,a,null))}var Th={};function jh(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,o=null,c=null,b=null,w=null;for(_ in a){var z=a[_];if(a.hasOwnProperty(_)&&z!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":c=z;default:l.hasOwnProperty(_)||Nt(t,e,_,null,l,z)}}for(var h in l){var _=l[h];if(z=a[h],l.hasOwnProperty(h)&&(_!=null||z!=null))switch(h){case"type":_!==z&&(gt=!0),i=_;break;case"name":_!==z&&(gt=!0),n=_;break;case"checked":_!==z&&(gt=!0),b=_;break;case"defaultChecked":_!==z&&(gt=!0),w=_;break;case"value":_!==z&&(gt=!0),r=_;break;case"defaultValue":_!==z&&(gt=!0),o=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(d(137,e));break;default:_!==z&&Nt(t,e,h,_,l,z)}}au(t,r,o,c,b,w,i,n);return;case"select":_=r=o=h=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":_=c;default:l.hasOwnProperty(i)||Nt(t,e,i,null,l,c)}for(n in l)if(i=l[n],c=a[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":i!==c&&(gt=!0),h=i;break;case"defaultValue":i!==c&&(gt=!0),o=i;break;case"multiple":i!==c&&(gt=!0),r=i;default:i!==c&&Nt(t,e,n,i,l,c)}e=o,a=r,l=_,h!=null?Dl(t,!!a,h,!1):!!l!=!!a&&(e!=null?Dl(t,!!a,e,!0):Dl(t,!!a,a?[]:"",!1));return;case"textarea":_=h=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Nt(t,e,o,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":n!==i&&(gt=!0),h=n;break;case"defaultValue":n!==i&&(gt=!0),_=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&Nt(t,e,r,n,l,i)}es(t,h,_);return;case"option":for(var O in a)if(h=a[O],a.hasOwnProperty(O)&&h!=null&&!l.hasOwnProperty(O))switch(O){case"selected":t.selected=!1;break;default:Nt(t,e,O,null,l,h)}for(c in l)if(h=l[c],_=a[c],l.hasOwnProperty(c)&&h!==_&&(h!=null||_!=null))switch(c){case"selected":h!==_&&(gt=!0),t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:Nt(t,e,c,h,l,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in a)h=a[G],a.hasOwnProperty(G)&&h!=null&&!l.hasOwnProperty(G)&&Nt(t,e,G,null,l,h);for(b in l)if(h=l[b],_=a[b],l.hasOwnProperty(b)&&h!==_&&(h!=null||_!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(d(137,e));break;default:Nt(t,e,b,h,l,_)}return;default:if(nu(e)){for(var tt in a)h=a[tt],a.hasOwnProperty(tt)&&h!==void 0&&!l.hasOwnProperty(tt)&&lc(t,e,tt,void 0,l,h);for(w in l)h=l[w],_=a[w],!l.hasOwnProperty(w)||h===_||h===void 0&&_===void 0||lc(t,e,w,h,l,_);return}}for(var g in a)h=a[g],a.hasOwnProperty(g)&&h!=null&&!l.hasOwnProperty(g)&&Nt(t,e,g,null,l,h);for(z in l)h=l[z],_=a[z],!l.hasOwnProperty(z)||h===_||h==null&&_==null||Nt(t,e,z,h,l,_)}function fd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,r=n.initiatorType,o=n.duration;if(i&&o&&fd(r)){for(r=0,o=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],b=c.startTime;if(b>o)break;var w=c.transferSize,z=c.initiatorType;w&&fd(z)&&(c=c.responseEnd,r+=w*(c<o?1:(o-b)/(c-b)))}if(--l,e+=8*(i+r)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nc=null,ic=null;function oi(t){return t.nodeType===9?t:t.ownerDocument}function dd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function md(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function hd(t,e,a,l){return a=oi(a).createElement(t),a[te]=l,a[xe]=e,ie(a,t,e),$t(a),a}function rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uc=null;function Eh(){var t=window.event;return t&&t.type==="popstate"?t===uc?!1:(uc=t,!0):(uc=null,!1)}var oc=typeof setTimeout=="function"?setTimeout:void 0,Mh=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,gd=typeof requestAnimationFrame=="function"?requestAnimationFrame:oc,qh=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(t){return pd.resolve(null).then(t).catch(Ah)}:oc;function Ah(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function bd(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),vn(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")gc(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,gc(a);for(var i=a.firstChild;i;){var r=i.nextSibling,o=i.nodeName;i[jn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&gc(t.ownerDocument.body);a=n}while(a);vn(e)}function xd(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function vd(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var l=1;else for(var n=l=0;n<e.length;n++){var i=e[n];0<i.width&&0<i.height&&l++}l===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function yd(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Ch(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function cc(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return Ch(e,a,t)}function Oh(t){return t.documentElement.clientHeight}function Dh(t){this.addEventListener("load",t),this.addEventListener("error",t)}function kh(t,e,a,l,n,i,r,o,c){var b=e.nodeType===9?e:e.ownerDocument;try{var w=b.startViewTransition({update:function(){var h=b.defaultView,_=h.navigation&&h.navigation.transition,O=b.fonts.status;l();var G=[];if(O==="loaded"&&(Oh(b),b.fonts.status==="loading"&&G.push(b.fonts.ready)),O=G.length,t!==null)for(var tt=t.suspenseyImages,g=0,f=0;f<tt.length;f++){var y=tt[f];if(!y.complete){var j=y.getBoundingClientRect();if(0<j.bottom&&0<j.right&&j.top<h.innerHeight&&j.left<h.innerWidth){if(g+=Zd(y),g>Br){G.length=O;break}y=new Promise(Dh.bind(y)),G.push(y)}}}if(0<G.length)return h=Promise.race([Promise.all(G),new Promise(function(Y){return setTimeout(Y,500)})]).then(n,n),(_?Promise.allSettled([_.finished,h]):h).then(i,i);if(n(),_)return _.finished.then(i,i);i()},types:a});b.__reactViewTransition=w;var z=[];return w.ready.then(function(){for(var h=b.documentElement.getAnimations({subtree:!0}),_=0;_<h.length;_++){var O=h[_],G=O.effect,tt=G.pseudoElement;if(tt!=null&&tt.startsWith("::view-transition")){z.push(O),O=G.getKeyframes();for(var g=tt=void 0,f=!0,y=0;y<O.length;y++){var j=O[y],Y=j.width;if(tt===void 0)tt=Y;else if(tt!==Y){f=!1;break}if(Y=j.height,g===void 0)g=Y;else if(g!==Y){f=!1;break}delete j.width,delete j.height,j.transform==="none"&&delete j.transform}f&&tt!==void 0&&g!==void 0&&(G.setKeyframes(O),f=getComputedStyle(G.target,G.pseudoElement),f.width!==tt||f.height!==g)&&(f=O[0],f.width=tt,f.height=g,f=O[O.length-1],f.width=tt,f.height=g,G.setKeyframes(O))}}r()},function(h){b.__reactViewTransition===w&&(b.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&c(h)}finally{l(),n(),r()}}),w.finished.finally(function(){for(var h=0;h<z.length;h++)z[h].cancel();b.__reactViewTransition===w&&(b.__reactViewTransition=null),o()}),w}catch{return l(),n(),r(),null}}function jl(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}jl.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:et({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},jl.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),l=[],n=0;n<a.length;n++){var i=a[n].effect;i!==null&&i.target===t&&i.pseudoElement===e&&l.push(a[n])}return l},jl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function _d(t){return{name:t,group:new jl("group",t),imagePair:new jl("image-pair",t),old:new jl("old",t),new:new jl("new",t)}}function De(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}De.prototype.addEventListener=function(t,e,a){var l=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(l=a.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Nd(i,t,e,a)===-1){var r=this,o=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(o=function(c){r.removeEventListener(t,e,a),typeof e=="function"?e.call(this,c):e.handleEvent(c)}),l!==null&&(n=r.removeEventListener.bind(r,t,e,a),l.addEventListener("abort",n,{once:!0}),n=l.removeEventListener.bind(l,"abort",n)),l=mn(a),i.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:o,cleanup:n}),S(this._fragmentFiber.child,!1,Uh,t,o,l)}this._eventListeners=i}};function Uh(t,e,a,l){return Z(t).addEventListener(e,a,l),!1}De.prototype.removeEventListener=function(t,e,a){var l=this._eventListeners;if(l!==null&&(e=Nd(l,t,e,a),e!==-1)){var n=l[e];a=n.attachedListener;var i=n.cleanup;n=mn(n.optionsOrUseCapture),S(this._fragmentFiber.child,!1,Rh,t,a,n),l.splice(e,1),i!==null&&i()}};function Rh(t,e,a,l){return Z(t).removeEventListener(e,a,l),!1}function mn(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function wd(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Nd(t,e,a,l){if(t.length===0)return-1;l=wd(l);for(var n=0;n<t.length;n++){var i=t[n];if(i.type===e&&i.listener===a&&wd(i.optionsOrUseCapture)===l)return n}return-1}De.prototype.dispatchEvent=function(t){var e=H(this._fragmentFiber);if(e===null)return!0;e=Z(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var l=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var i=a[n];l.addEventListener(i.type,i.attachedListener,mn(i.optionsOrUseCapture))}if(e.appendChild(l),t=l.dispatchEvent(t),a)for(n=0;n<a.length;n++)i=a[n],l.removeEventListener(i.type,i.attachedListener,mn(i.optionsOrUseCapture));return e.removeChild(l),t}return e.dispatchEvent(t)},De.prototype.focus=function(t){S(this._fragmentFiber.child,!0,Sd,t,void 0,void 0)};function Sd(t,e){return t.tag===6?!1:(t=Z(t),Fh(t,e))}De.prototype.focusLast=function(t){var e=[];S(this._fragmentFiber.child,!0,sc,e,void 0,void 0);for(var a=e.length-1;0<=a&&!Sd(e[a],t);a--);};function sc(t,e){return e.push(t),!1}De.prototype.blur=function(){var t=H(this._fragmentFiber);t!==null&&(t=Z(t),t=oi(t).activeElement,t!==null&&S(this._fragmentFiber.child,!1,Bh,t,void 0,void 0))};function Bh(t,e){return t.tag===6?!1:(t=Z(t),t===e||t.contains(e)?(e.blur(),!0):!1)}De.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),S(this._fragmentFiber.child,!1,Hh,t,void 0,void 0)};function Hh(t,e){return t.tag===6||(t=Z(t),e.observe(t)),!1}De.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),S(this._fragmentFiber.child,!1,Yh,t,void 0,void 0);for(var a=e=0;a<We.length;a++){var l=We[a];l.fragmentInstance===this&&l.observer===t?t.unobserve(l.instance):We[e++]=l}We.length=e}};function Yh(t,e){return t.tag===6||(t=Z(t),e.unobserve(t)),!1}var We=[],fc=!1;function Zh(t,e,a){We.push({fragmentInstance:t,observer:e,instance:a}),fc||(fc=!0,$h(function(){fc=!1;var l=We;We=[];for(var n=0;n<l.length;n++){var i=l[n];i.observer.unobserve(i.instance)}}))}De.prototype.getClientRects=function(){var t=[];return S(this._fragmentFiber.child,!1,Lh,t,void 0,void 0),t};function Lh(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=Z(t),e.push.apply(e,t.getClientRects());return!1}De.prototype.getRootNode=function(t){var e=H(this._fragmentFiber);return e===null?this:Z(e).getRootNode(t)},De.prototype.compareDocumentPosition=function(t){var e=H(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];S(this._fragmentFiber.child,!1,sc,a,void 0,void 0);var l=Z(e);if(a.length===0){if(a=l,L(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=l=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=mt(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=Z(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=Z(a[0]),n=Z(a[a.length-1]);var i=L(this._fragmentFiber)?e.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=e.compareDocumentPosition(t),o=n.compareDocumentPosition(t),c=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=l&&i&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=l&&e===t||i&&n===t||c||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&e===t||!i&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Gh(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Gh(t,e,a,l,n){var i=il(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)t:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){a=!0;break t}i=i.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=n.ownerDocument,n===i||n===i.documentElement||n===i.body;t:{for(i=e,e=H(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break t}i=i.return}i=!1}return i}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===a)&&(e=Jt(a,i,ue),e===null?e=!1:(S(e,!0,pe,i,a),i=Ht,Ht=null,e=i!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===l)&&(e=Jt(l,i,ue),e===null?e=!1:(S(e,!0,Kt,i,l),i=Ht,qt=Ht=null,e=i!==null)),e):!1}function Td(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}De.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(d(566));var e=[];S(this._fragmentFiber.child,!1,sc,e,void 0,void 0);var a=t!==!1;if(e.length===0){var l=mt(this._fragmentFiber);if(l=a?l[1]||l[0]||H(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){t=Z(l),Td(t,a);return}if(l=Z(l),l.nodeType!==9){if(l.nodeType===11){a="host"in l?l.host:null,a!==null&&a.scrollIntoView(t);return}l.scrollIntoView(t)}}for(l=a?e.length-1:0;l!==(a?-1:e.length);){var n=e[l];n.tag===6?(n=Z(n),Td(n,a)):Z(n).scrollIntoView(t),l+=a?-1:1}};function Qh(t,e){return t=Z(t),jd(t,e),!1}function jd(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function zd(t,e){var a=e._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];t.addEventListener(n.type,n.attachedListener,mn(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(i){for(var r=0,o=0;o<We.length;o++){var c=We[o];(c.fragmentInstance!==e||c.observer!==i||c.instance!==t)&&(We[r++]=c)}We.length=r,i.observe(t)}),jd(t,e))}function Vh(t,e){var a=e._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];t.removeEventListener(n.type,n.attachedListener,mn(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?Zh(e,i,t):i.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function dc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dc(a),ji(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Xh(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[jn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ge(t.nextSibling),t===null)break}return null}function Kh(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ge(t.nextSibling),t===null))return null;return t}function Ed(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ge(t.nextSibling),t===null))return null;return t}function mc(t){return t.data==="$?"||t.data==="$~"}function hc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jh(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ge(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var pc=null;function Md(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Ge(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function qd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Fh(t,e){function a(){l=!0}if(t.ownerDocument.activeElement===t)return!0;var l=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return l}function $h(t){gd(function(){gd(function(e){return t(e)})})}function Ad(t,e,a){switch(e=oi(a),t){case"html":if(t=e.documentElement,!t)throw Error(d(452));return t;case"head":if(t=e.head,!t)throw Error(d(453));return t;case"body":if(t=e.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function Cd(t,e,a){for(var l in a){var n=a[l];a.hasOwnProperty(l)&&n!=null&&Nt(t,e,l,null,Th,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ea&&(t.onclick=null),ji(t)}function gc(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ji(t)}var Qe=new Map,Od=new Set;function ci(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var za=R.d;R.d={f:Wh,r:Ih,D:Ph,C:tp,L:ep,m:ap,X:np,S:lp,M:ip};function Wh(){var t=za.f(),e=Mr();return t||e}function Ih(t){var e=Al(t);e!==null&&e.tag===5&&e.type==="form"?D0(e):za.r(t)}var hn=typeof document>"u"?null:document;function Dd(t,e,a){var l=hn;if(l&&typeof e=="string"&&e){var n=Ue(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Od.has(n)||(Od.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),ie(e,"link",t),$t(e),l.head.appendChild(e)))}}function Ph(t){za.D(t),Dd("dns-prefetch",t,null)}function tp(t,e){za.C(t,e),Dd("preconnect",t,e)}function ep(t,e,a){za.L(t,e,a);var l=hn;if(l&&t&&e){var n='link[rel="preload"][as="'+Ue(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Ue(a.imageSizes)+'"]')):n+='[href="'+Ue(t)+'"]';var i=n;switch(e){case"style":i=pn(t);break;case"script":i=gn(t)}if(!(Qe.has(i)||(t=et({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Qe.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(si(i))||e==="script"&&l.querySelector(fi(i))))){var r=l.createElement("link");ie(r,"link",t),e==="style"&&(r[Ti]=!0,r.onload=r.onerror=function(){Xc(r)}),$t(r),l.head.appendChild(r)}}}function ap(t,e){za.m(t,e);var a=hn;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Ue(l)+'"][href="'+Ue(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=gn(t)}if(!Qe.has(i)&&(t=et({rel:"modulepreload",href:t},e),Qe.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fi(i)))return}l=a.createElement("link"),ie(l,"link",t),$t(l),a.head.appendChild(l)}}}function lp(t,e,a){za.S(t,e,a);var l=hn;if(l&&t){var n=Cl(l).hoistableStyles,i=pn(t);e=e||"default";var r=n.get(i);if(!r){var o={loading:0,preload:null};if(r=l.querySelector(si(i)))o.loading=5;else{t=et({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Qe.get(i))&&bc(t,a);var c=r=l.createElement("link");$t(c),ie(c,"link",t),c._p=new Promise(function(b,w){c.onload=b,c.onerror=w}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ur(r,e,l)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(i,r)}}}function np(t,e){za.X(t,e);var a=hn;if(a&&t){var l=Cl(a).hoistableScripts,n=gn(t),i=l.get(n);i||(i=a.querySelector(fi(n)),i||(t=et({src:t,async:!0},e),(e=Qe.get(n))&&xc(t,e),i=a.createElement("script"),$t(i),ie(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function ip(t,e){za.M(t,e);var a=hn;if(a&&t){var l=Cl(a).hoistableScripts,n=gn(t),i=l.get(n);i||(i=a.querySelector(fi(n)),i||(t=et({src:t,async:!0,type:"module"},e),(e=Qe.get(n))&&xc(t,e),i=a.createElement("script"),$t(i),ie(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function kd(t,e,a,l){var n=(n=ta.current)?ci(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=pn(a.href),e=Cl(n).hoistableStyles,l=e.get(a),l||(l={type:"style",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pn(a.href);var i=Cl(n).hoistableStyles,r=i.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,r),(i=n.querySelector(si(t)))?i._p||(r.instance=i,r.state.loading=5):(i=Qe.get(t),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qe.set(t,i)),rp(n,t,i,r.state))),e&&l===null)throw Error(d(528,""));return r}if(e&&l!==null)throw Error(d(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=gn(a),e=Cl(n).hoistableScripts,l=e.get(a),l||(l={type:"script",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function pn(t){return'href="'+Ue(t)+'"'}function si(t){return'link[rel="stylesheet"]['+t+"]"}function Ud(t){return et({},t,{"data-precedence":t.precedence,precedence:null})}function rp(t,e,a,l){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Ti]!==!0){l.loading=1;return}}else e=t.createElement("link"),e[Ti]=!0,e.onload=e.onerror=Xc.bind(null,e),ie(e,"link",a),$t(e),t.head.appendChild(e);l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2})}function gn(t){return'[src="'+Ue(t)+'"]'}function fi(t){return"script[async]"+t}function Rd(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Ue(a.href)+'"]');if(l)return e.instance=l,$t(l),l;var n=et({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),$t(l),ie(l,"style",n),Ur(l,a.precedence,t),e.instance=l;case"stylesheet":n=pn(a.href);var i=t.querySelector(si(n));if(i)return e.state.loading|=4,e.instance=i,$t(i),i;l=Ud(a),(n=Qe.get(n))&&bc(l,n),i=(t.ownerDocument||t).createElement("link"),$t(i);var r=i;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),ie(i,"link",l),e.state.loading|=4,Ur(i,a.precedence,t),e.instance=i;case"script":return i=gn(a.src),(n=t.querySelector(fi(i)))?(e.instance=n,$t(n),n):(l=a,(n=Qe.get(i))&&(l=et({},a),xc(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),$t(n),ie(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Ur(l,a.precedence,t));return e.instance}function Ur(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var o=l[r];if(o.dataset.precedence===e)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function bc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function xc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Rr=null;function Bd(t,e,a){if(Rr===null){var l=new Map,n=Rr=new Map;n.set(a,l)}else n=Rr,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[jn]||i[te]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(e)||"";r=t+r;var o=l.get(r);o?o.push(i):l.set(r,[i])}}return l}function vc(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function up(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Hd(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Yd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Zd(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Ld(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Zd(e),t.suspenseyImages.push(e)),t=sp.bind(t),e.decode().then(t,t))}function op(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=pn(l.href),i=e.querySelector(si(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=di.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,$t(i);return}i=e.ownerDocument||e,l=Ud(l),(n=Qe.get(n))&&bc(l,n),i=i.createElement("link"),$t(i);var r=i;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),ie(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=di.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Br=0;function cp(t,e){return t.stylesheets&&t.count===0&&Yr(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Yr(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Br===0&&(Br=62500*zh());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yr(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Br?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Gd(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Yr(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function di(){this.count--,Gd(this)}function sp(){this.imgCount--,Gd(this)}var Hr=null;function Yr(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hr=new Map,e.forEach(fp,t),Hr=null,di.call(t))}function fp(t,e){if(!(e.state.loading&4)){var a=Hr.get(t);if(a)var l=a.get(null);else{a=new Map,Hr.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=e.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=di.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var bn={$$typeof:kt,Provider:null,Consumer:null,_currentValue:jt,_currentValue2:jt,_threadCount:0};function dp(t,e,a,l,n,i,r,o,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ir(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ir(0),this.hiddenUpdates=Ir(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function Qd(t,e,a,l,n,i,r,o,c,b,w,z){return t=new dp(t,e,a,r,c,b,w,z,o),e=1,i===!0&&(e|=24),i=ve(3,null,null,e),t.current=i,i.stateNode=t,e=Ou(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},Ru(i),t}function Vd(t){return t?(t=Ll,t):Ll}function Xd(t,e,a,l,n,i){n=Vd(n),l.context===null?l.context=n:l.pendingContext=n,l=Ra(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Ba(t,l,e),a!==null&&(Ne(a,t,e),Gn(a,t,e))}function Kd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function yc(t,e){Kd(t,e),(t=t.alternate)&&Kd(t,e)}function Jd(t){if(t.tag===13||t.tag===31){var e=cl(t,67108864);e!==null&&Ne(e,t,67108864),yc(t,67108864)}}function Fd(t){if(t.tag===13||t.tag===31){var e=Oe();e=Pr(e);var a=cl(t,e);a!==null&&Ne(a,t,e),yc(t,e)}}var xn=!0;function mp(t,e,a,l){var n=A.T;A.T=null;var i=R.p;try{R.p=2,_c(t,e,a,l)}finally{R.p=i,A.T=n}}function hp(t,e,a,l){var n=A.T;A.T=null;var i=R.p;try{R.p=8,_c(t,e,a,l)}finally{R.p=i,A.T=n}}function _c(t,e,a,l){if(xn){var n=wc(l);if(n===null)ac(t,e,l,Zr,a),Wd(t,l);else if(gp(n,t,e,a,l))l.stopPropagation();else if(Wd(t,l),e&4&&-1<pp.indexOf(t)){for(;n!==null;){var i=Al(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=nl(i.pendingLanes);if(r!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-je(r);o.entanglements[1]|=c,r&=~c}fa(i),(bt&6)===0&&(jr=Se()+500,ii(0))}}break;case 31:case 13:o=cl(i,2),o!==null&&Ne(o,i,2),Mr(),yc(i,2)}if(i=wc(l),i===null&&ac(t,e,l,Zr,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ac(t,e,l,null,a)}}function wc(t){return t=ru(t),Nc(t)}var Zr=null;function Nc(t){if(Zr=null,t=il(t),t!==null){var e=k(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=lt(e),t!==null)return t;t=null}else if(a===31){if(t=Tt(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Zr=t,null}function $d(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z1()){case Dc:return 2;case kc:return 8;case yi:case E1:return 32;case Uc:return 268435456;default:return 32}default:return 32}}var Sc=!1,$a=null,Wa=null,Ia=null,mi=new Map,hi=new Map,Pa=[],pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wd(t,e){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":mi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(e.pointerId)}}function pi(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Al(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function gp(t,e,a,l,n){switch(e){case"focusin":return $a=pi($a,t,e,a,l,n),!0;case"dragenter":return Wa=pi(Wa,t,e,a,l,n),!0;case"mouseover":return Ia=pi(Ia,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return mi.set(i,pi(mi.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,hi.set(i,pi(hi.get(i)||null,t,e,a,l,n)),!0}return!1}function Id(t){var e=il(t.target);if(e!==null){var a=k(e);if(a!==null){if(e=a.tag,e===13){if(e=lt(a),e!==null){t.blockedOn=e,Gc(t.priority,function(){Fd(a)});return}}else if(e===31){if(e=Tt(a),e!==null){t.blockedOn=e,Gc(t.priority,function(){Fd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=wc(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);iu=l,a.target.dispatchEvent(l),iu=null}else return e=Al(a),e!==null&&Jd(e),t.blockedOn=a,!1;e.shift()}return!0}function Pd(t,e,a){Lr(t)&&a.delete(e)}function bp(){Sc=!1,$a!==null&&Lr($a)&&($a=null),Wa!==null&&Lr(Wa)&&(Wa=null),Ia!==null&&Lr(Ia)&&(Ia=null),mi.forEach(Pd),hi.forEach(Pd)}function Gr(t,e){t.blockedOn===e&&(t.blockedOn=null,Sc||(Sc=!0,N.unstable_scheduleCallback(N.unstable_NormalPriority,bp)))}var Qr=null;function t1(t){Qr!==t&&(Qr=t,N.unstable_scheduleCallback(N.unstable_NormalPriority,function(){Qr===t&&(Qr=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(Nc(l||a)===null)continue;break}var i=Al(a);i!==null&&(t.splice(e,3),e-=3,no(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function vn(t){function e(c){return Gr(c,t)}$a!==null&&Gr($a,t),Wa!==null&&Gr(Wa,t),Ia!==null&&Gr(Ia,t),mi.forEach(e),hi.forEach(e);for(var a=0;a<Pa.length;a++){var l=Pa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Id(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[xe]||null;if(typeof i=="function")r||t1(a);else if(r){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[xe]||null)o=r.formAction;else if(Nc(n)!==null)continue}else o=r.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),t1(a)}}}function e1(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Tc(t){this._internalRoot=t}Vr.prototype.render=Tc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(d(409));var a=e.current,l=Oe();Xd(a,l,t,e,null,null)},Vr.prototype.unmount=Tc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xd(t.current,2,null,t,null,null),Mr(),e[ql]=null}};function Vr(t){this._internalRoot=t}Vr.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lc();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Pa.length&&e!==0&&e<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&Id(t)}};var a1=x.version;if(a1!=="19.3.1")throw Error(d(527,a1,"19.3.1"));R.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=it(e),t=t!==null?B(t):null,t=t===null?null:t.stateNode,t};var xp={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{Nn=Xr.inject(xp),Te=Xr}catch{}}return bi.createRoot=function(t,e){if(!C(t))throw Error(d(299));var a=!1,l="",n=Q0,i=V0,r=X0;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qd(t,1,!1,null,null,a,l,null,n,i,r,e1),t[ql]=e.current,ec(t),new Tc(e)},bi.hydrateRoot=function(t,e,a){if(!C(t))throw Error(d(299));var l=!1,n="",i=Q0,r=V0,o=X0,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),e=Qd(t,1,!0,e,a??null,l,n,c,i,r,o,e1),e.context=Vd(null),a=e.current,l=Oe(),l=Pr(l),n=Ra(l),n.callback=null,Ba(a,n,l),a=l,e.current.lanes=a,Tn(e,a),fa(e),t[ql]=e.current,ec(t),new Vr(e)},bi.version="19.3.1",bi}var d1;function Ap(){if(d1)return Ec.exports;d1=1;function N(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)}catch(x){console.error(x)}}return N(),Ec.exports=qp(),Ec.exports}var Cp=Ap();const Op=p1(Cp),Dp=()=>{const N=At.useRef(null);return At.useEffect(()=>{const x=N.current;if(!x)return;const p=x.getContext("2d");if(!p)return;let d,C=x.width=window.innerWidth,k=x.height=window.innerHeight;const lt=()=>{x&&(C=x.width=window.innerWidth,k=x.height=window.innerHeight)};window.addEventListener("resize",lt);const Tt=Array.from({length:45},()=>({x:Math.random()*C,y:Math.random()*k,radius:Math.random()*3+1,speed:Math.random()*.8+.3,wobble:Math.random()*Math.PI*2,wobbleSpeed:Math.random()*.03+.01,alpha:Math.random()*.5+.2}));let nt=C/2;const it=H=>{nt=H.clientX,H.clientY};window.addEventListener("mousemove",it);let B=0;const S=()=>{B+=.015,p.clearRect(0,0,C,k);const H=7;for(let L=0;L<H;L++){const mt=(L-H/2)*110,q=Math.sin(B*.6+L*1.2)*45,Z=C*.5+mt+q,Ht=(nt-C*.5)*.05*(L+1),qt=p.createLinearGradient(C*.5,0,Z+Ht,k*.85);qt.addColorStop(0,"rgba(80, 210, 255, 0.22)"),qt.addColorStop(.35,"rgba(0, 245, 212, 0.09)"),qt.addColorStop(.7,"rgba(2, 9, 21, 0.02)"),qt.addColorStop(1,"rgba(2, 9, 21, 0)"),p.beginPath(),p.moveTo(C*.5-20,0),p.lineTo(C*.5+20,0),p.lineTo(Z+Ht+80,k*.85),p.lineTo(Z+Ht-80,k*.85),p.closePath(),p.fillStyle=qt,p.fill()}for(const L of Tt){L.y-=L.speed,L.wobble+=L.wobbleSpeed;const mt=L.x+Math.sin(L.wobble)*8;L.y<-10&&(L.y=k+10,L.x=Math.random()*C),p.beginPath(),p.arc(mt,L.y,L.radius,0,Math.PI*2),p.fillStyle=`rgba(180, 240, 255, ${L.alpha*.4})`,p.fill(),p.lineWidth=.75,p.strokeStyle=`rgba(0, 245, 212, ${L.alpha*.7})`,p.stroke(),p.beginPath(),p.arc(mt-L.radius*.35,L.y-L.radius*.35,L.radius*.3,0,Math.PI*2),p.fillStyle=`rgba(255, 255, 255, ${L.alpha*.8})`,p.fill()}d=requestAnimationFrame(S)};return S(),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",lt),window.removeEventListener("mousemove",it)}},[]),u.jsx("canvas",{ref:N,className:"pointer-events-none fixed inset-0 z-[1] w-full h-full mix-blend-screen"})},kp=()=>{const N=At.useRef(null);return At.useEffect(()=>{const x=N.current;if(!x)return;const p=x.getContext("2d");if(!p)return;let d,C=x.width=window.innerWidth,k=x.height=window.innerHeight;const lt=()=>{x&&(C=x.width=window.innerWidth,k=x.height=window.innerHeight)};window.addEventListener("resize",lt);const Tt=[{body:"#ff5e36",fin:"#ff9f1c",glow:"rgba(255, 94, 54, 0.45)"},{body:"#e61c78",fin:"#f72585",glow:"rgba(230, 28, 120, 0.45)"},{body:"#00f5d4",fin:"#70e000",glow:"rgba(0, 245, 212, 0.45)"},{body:"#ffd166",fin:"#f48c06",glow:"rgba(255, 209, 102, 0.4)"},{body:"#7209b7",fin:"#4cc9f0",glow:"rgba(114, 9, 183, 0.45)"}],it=Array.from({length:26},(mt,q)=>{const Z=Tt[q%Tt.length];return{x:Math.random()*C,y:k*.45+Math.random()*(k*.5),vx:-(Math.random()*1.6+.8),vy:(Math.random()-.5)*.4,size:Math.random()*9+11,color:Z.body,finColor:Z.fin,wiggle:Math.random()*Math.PI*2,wiggleSpeed:Math.random()*.15+.1,glowIntensity:Math.random()*.4+.6}});let B=-1e3,S=-1e3;const H=mt=>{B=mt.clientX,S=mt.clientY};window.addEventListener("mousemove",H);const L=()=>{p.clearRect(0,0,C,k);for(let mt=0;mt<it.length;mt++){const q=it[mt];q.wiggle+=q.wiggleSpeed;const Z=B-q.x,Ht=S-q.y,qt=Math.hypot(Z,Ht);qt<180&&(q.vx-=Z/qt*.25,q.vy-=Ht/qt*.25);const pe=it[(mt+1)%it.length];q.vx+=(pe.vx-q.vx)*.02,q.vy+=(pe.vy-q.vy)*.02;const Kt=Math.hypot(q.vx,q.vy),ue=3.2,Jt=.9;Kt>ue?(q.vx=q.vx/Kt*ue,q.vy=q.vy/Kt*ue):Kt<Jt&&(q.vx=q.vx/Kt*Jt),q.vy+=Math.sin(q.wiggle*.5)*.04,q.x+=q.vx,q.y+=q.vy,q.x<-60&&(q.x=C+60,q.y=k*.35+Math.random()*(k*.6)),q.x>C+60&&(q.x=-60),q.y<k*.15&&(q.vy+=.1),q.y>k*.95&&(q.vy-=.1);const et=Math.atan2(q.vy,q.vx);p.save(),p.translate(q.x,q.y),p.rotate(et),p.shadowBlur=14,p.shadowColor=q.color;const ct=Math.sin(q.wiggle)*4;p.beginPath(),p.moveTo(-q.size*.8,0),p.lineTo(-q.size*1.5,-q.size*.55+ct),p.lineTo(-q.size*1.25,0),p.lineTo(-q.size*1.5,q.size*.55+ct),p.closePath(),p.fillStyle=q.finColor,p.fill(),p.beginPath(),p.moveTo(-q.size*.2,-q.size*.4),p.quadraticCurveTo(0,-q.size*.8,q.size*.3,-q.size*.3),p.fillStyle=q.finColor,p.fill(),p.beginPath(),p.ellipse(0,0,q.size,q.size*.46,0,0,Math.PI*2),p.fillStyle=q.color,p.fill(),p.shadowBlur=0,p.beginPath(),p.arc(q.size*.55,-q.size*.12,q.size*.14,0,Math.PI*2),p.fillStyle="#ffffff",p.fill(),p.beginPath(),p.arc(q.size*.58,-q.size*.12,q.size*.07,0,Math.PI*2),p.fillStyle="#020915",p.fill(),p.beginPath(),p.moveTo(-q.size*.7,0),p.quadraticCurveTo(0,q.size*.15,q.size*.4,0),p.strokeStyle="rgba(255, 255, 255, 0.75)",p.lineWidth=1.2,p.stroke(),p.restore()}d=requestAnimationFrame(L)};return L(),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",lt),window.removeEventListener("mousemove",H)}},[]),u.jsx("canvas",{ref:N,className:"pointer-events-none fixed inset-0 z-[2] w-full h-full"})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=N=>N.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g1=(...N)=>N.filter((x,p,d)=>!!x&&x.trim()!==""&&d.indexOf(x)===p).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=At.forwardRef(({color:N="currentColor",size:x=24,strokeWidth:p=2,absoluteStrokeWidth:d,className:C="",children:k,iconNode:lt,...Tt},nt)=>At.createElement("svg",{ref:nt,...Rp,width:x,height:x,stroke:N,strokeWidth:d?Number(p)*24/Number(x):p,className:g1("lucide",C),...Tt},[...lt.map(([it,B])=>At.createElement(it,B)),...Array.isArray(k)?k:[k]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=(N,x)=>{const p=At.forwardRef(({className:d,...C},k)=>At.createElement(Bp,{ref:k,iconNode:x,className:g1(`lucide-${Up(N)}`,d),...C}));return p.displayName=`${N}`,p};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]],Yp=Dt("Anchor",Hp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Lp=Dt("ArrowDown",Zp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Qp=Dt("Check",Gp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Xp=Dt("ChevronDown",Vp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Jp=Dt("ChevronLeft",Kp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],b1=Dt("ChevronRight",Fp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Wp=Dt("ChevronUp",$p);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Pp=Dt("CircleCheckBig",Ip);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],eg=Dt("CircleCheck",tg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],lg=Dt("Clock",ag);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],x1=Dt("Compass",ng);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],m1=Dt("Gauge",ig);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],v1=Dt("Layers",rg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],og=Dt("Mail",ug);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Kr=Dt("MapPin",cg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],fg=Dt("Phone",sg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],mg=Dt("Radio",dg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],pg=Dt("ShieldCheck",hg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],yn=Dt("Shield",gg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],xg=Dt("Volume2",bg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],yg=Dt("VolumeX",vg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],y1=Dt("Waves",_g);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ng=Dt("X",wg);class Sg{constructor(){el(this,"ctx",null);el(this,"isPlaying",!1);el(this,"masterGain",null);el(this,"ambientOsc1",null);el(this,"ambientOsc2",null);el(this,"filter",null);el(this,"sonarTimer",null)}async init(){const x=window.AudioContext||window.webkitAudioContext;x&&(this.ctx=new x,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}async start(){if(this.ctx||await this.init(),this.ctx&&this.ctx.state==="suspended"&&await this.ctx.resume(),!this.ctx||!this.masterGain)return;this.masterGain.gain.linearRampToValueAtTime(.18,this.ctx.currentTime+2),this.filter=this.ctx.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.setValueAtTime(140,this.ctx.currentTime),this.filter.connect(this.masterGain),this.ambientOsc1=this.ctx.createOscillator(),this.ambientOsc1.type="sine",this.ambientOsc1.frequency.setValueAtTime(42,this.ctx.currentTime),this.ambientOsc1.connect(this.filter),this.ambientOsc1.start(),this.ambientOsc2=this.ctx.createOscillator(),this.ambientOsc2.type="triangle",this.ambientOsc2.frequency.setValueAtTime(84.4,this.ctx.currentTime);const x=this.ctx.createGain();x.gain.setValueAtTime(.08,this.ctx.currentTime),this.ambientOsc2.connect(x),x.connect(this.filter),this.ambientOsc2.start(),this.isPlaying=!0,this.scheduleSonar()}stop(){this.ctx&&this.masterGain&&(this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+1),setTimeout(()=>{var x,p,d,C;try{(x=this.ambientOsc1)==null||x.stop(),(p=this.ambientOsc2)==null||p.stop(),(d=this.ambientOsc1)==null||d.disconnect(),(C=this.ambientOsc2)==null||C.disconnect()}catch{}},1e3)),this.sonarTimer&&(window.clearInterval(this.sonarTimer),this.sonarTimer=null),this.isPlaying=!1}toggle(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}playSonarPing(){if(!(!this.ctx||!this.isPlaying))try{const x=this.ctx.currentTime,p=this.ctx.createOscillator(),d=this.ctx.createGain();p.type="sine",p.frequency.setValueAtTime(1180,x),p.frequency.exponentialRampToValueAtTime(940,x+1.2),d.gain.setValueAtTime(.001,x),d.gain.linearRampToValueAtTime(.09,x+.05),d.gain.exponentialRampToValueAtTime(1e-4,x+2.4),p.connect(d),d.connect(this.masterGain),p.start(x),p.stop(x+2.5)}catch{}}playBubblePop(){if(this.ctx)try{this.ctx.state==="suspended"&&this.ctx.resume();const x=this.ctx.currentTime,p=this.ctx.createOscillator(),d=this.ctx.createGain();p.type="sine",p.frequency.setValueAtTime(450+Math.random()*200,x),p.frequency.exponentialRampToValueAtTime(900+Math.random()*300,x+.06),d.gain.setValueAtTime(.05,x),d.gain.exponentialRampToValueAtTime(.001,x+.12),p.connect(d),d.connect(this.ctx.destination),p.start(x),p.stop(x+.13)}catch{}}scheduleSonar(){this.sonarTimer&&window.clearInterval(this.sonarTimer),this.sonarTimer=window.setInterval(()=>{this.isPlaying&&this.playSonarPing()},9500)}}const pt=new Sg,Tg=({depthUnit:N})=>{const[x,p]=At.useState(0),[d,C]=At.useState(!1);At.useEffect(()=>{const S=()=>{const H=document.documentElement.scrollHeight-window.innerHeight,L=window.scrollY,mt=H>0?Math.min(Math.max(L/H,0),1):0;p(mt)};return window.addEventListener("scroll",S,{passive:!0}),()=>window.removeEventListener("scroll",S)},[]);const k=Math.round(x*140),lt=N==="meters"?k:Math.round(k*3.28084),Tt=N==="meters"?"M":"FT",nt=(27.4-x*23.2).toFixed(1),it=(1+k/10).toFixed(1),B=S=>S<20?"EPIPELÁGICA":S<60?"MESOPELÁGICA":S<100?"BATIAL":"ABISSAL";return u.jsx("aside",{"aria-label":"Telemetria de Mergulho",className:"fixed right-4 bottom-24 z-40 hidden lg:flex flex-col items-end pointer-events-auto",children:d?u.jsxs("button",{onClick:()=>{pt.playBubblePop(),C(!1)},className:"p-2.5 rounded-full bg-[#030e1d]/90 border border-[#00f5d4]/40 text-[#00f5d4] hover:text-white shadow-lg backdrop-blur-md flex items-center gap-1.5 text-xs font-mono",title:"Expandir Telemetria HUD",children:[u.jsx(m1,{className:"w-4 h-4 animate-pulse"}),u.jsxs("span",{children:[lt,Tt]}),u.jsx(Jp,{className:"w-3.5 h-3.5"})]}):u.jsxs("div",{onMouseEnter:()=>pt.playBubblePop(),className:"backdrop-blur-xl bg-[#030e1d]/95 border border-[#00f5d4]/30 p-3.5 rounded-2xl shadow-[0_0_35px_rgba(0,245,212,0.15)] flex flex-col gap-2.5 w-44 transition-all duration-300 hover:border-[#00f5d4]/60",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-1.5",children:[u.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-[#00f5d4] font-mono tracking-wider",children:[u.jsx(m1,{className:"w-3.5 h-3.5 animate-pulse text-[#00f5d4]"}),u.jsx("span",{children:"HUD PROFUNDIDADE"})]}),u.jsx("button",{onClick:()=>C(!0),className:"text-neutral-400 hover:text-white text-xs",title:"Recolher HUD",children:u.jsx(b1,{className:"w-3.5 h-3.5"})})]}),u.jsxs("div",{className:"flex items-baseline justify-between",children:[u.jsxs("span",{className:"text-2xl font-display font-bold text-white tracking-tight",children:[lt," ",u.jsx("span",{className:"text-xs font-mono text-[#00f5d4]",children:Tt})]}),u.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase",children:B(k)})]}),u.jsx("div",{className:"w-full bg-white/10 h-1 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-[#00f5d4] via-[#3a86ff] to-[#e61c78]",style:{width:`${Math.max(x*100,5)}%`}})}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[10px] font-mono pt-1 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-neutral-400 block",children:"PRESSÃO:"}),u.jsxs("strong",{className:"text-white",children:[it," BAR"]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-neutral-400 block",children:"TEMP:"}),u.jsxs("strong",{className:"text-white",children:[nt," °C"]})]})]})]})})},jg=({onOpenBooking:N,depthUnit:x,onToggleDepthUnit:p,isAudioOn:d,onToggleAudio:C,onToggleDrawer:k,isDrawerOpen:lt})=>u.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 transition-all duration-300",children:u.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[u.jsxs("a",{href:"#",className:"flex items-center gap-3 group focus:outline-none",onMouseEnter:()=>pt.playBubblePop(),children:[u.jsx("div",{className:"relative w-10 h-10 rounded-full border border-white/20 bg-[#041226]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,245,212,0.25)] transition-transform group-hover:scale-105",children:u.jsxs("svg",{viewBox:"0 0 100 100",className:"w-6 h-6 text-white transition-colors group-hover:text-[#00f5d4]",fill:"none",stroke:"currentColor",strokeWidth:"5",children:[u.jsx("circle",{cx:"50",cy:"50",r:"42",strokeDasharray:"6 4",strokeOpacity:"0.4"}),u.jsx("path",{d:"M50 15 L30 35 L35 70 L50 85 L65 70 L70 35 Z",fill:"rgba(0,245,212,0.15)"}),u.jsx("circle",{cx:"50",cy:"45",r:"14",fill:"rgba(230,28,120,0.3)"}),u.jsx("circle",{cx:"50",cy:"45",r:"7",fill:"#ffffff"}),u.jsx("path",{d:"M30 35 L70 35"})]})}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"font-display font-bold text-base sm:text-lg tracking-wider text-white",children:"AQUA SPHERE"}),u.jsx("span",{className:"text-[10px] font-mono tracking-widest text-[#00f5d4]/80 -mt-1 uppercase",children:"Clube de Mergulho"})]})]}),u.jsxs("nav",{className:"hidden md:flex items-center gap-2 bg-[#041226]/70 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]",children:[u.jsx("a",{href:"#sobre",onMouseEnter:()=>pt.playBubblePop(),className:"px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all font-sans",children:"О клубе"}),u.jsx("a",{href:"#cursos",onMouseEnter:()=>pt.playBubblePop(),className:"px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all font-sans",children:"Курсы"}),u.jsx("a",{href:"#locais",onMouseEnter:()=>pt.playBubblePop(),className:"px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all font-sans",children:"Локации"}),u.jsx("a",{href:"#contato",onMouseEnter:()=>pt.playBubblePop(),className:"px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all font-sans",children:"Номер"})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[u.jsx("button",{onClick:()=>{pt.playBubblePop(),C()},title:d?"Mutar Sonar Hidrofônico":"Ativar Sonar Subaquático",className:"w-9 h-9 rounded-full bg-[#041226]/80 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-[#00f5d4] hover:border-[#00f5d4]/40 transition-all",children:d?u.jsx(xg,{className:"w-4 h-4 text-[#00f5d4] animate-pulse"}):u.jsx(yg,{className:"w-4 h-4 text-neutral-400"})}),u.jsxs("button",{onClick:()=>{pt.playBubblePop(),p()},title:"Alternar Metros / Pés",className:"hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#041226]/80 border border-white/15 text-[11px] font-mono font-medium text-neutral-300 hover:text-white transition-all",children:[u.jsx(x1,{className:"w-3 h-3 text-[#00f5d4]"}),u.jsx("span",{children:x==="meters"?"M":"FT"})]}),u.jsxs("button",{onClick:()=>{pt.playBubblePop(),k()},className:"hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00f5d4]/10 hover:bg-[#00f5d4]/20 border border-[#00f5d4]/40 text-[#00f5d4] text-[11px] font-mono transition-all",title:"Abrir painel de 23 componentes Uiverse",children:[u.jsx(v1,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"23 UIVERSE"})]}),u.jsx("button",{onClick:()=>{pt.playBubblePop(),N()},className:"relative group overflow-hidden px-5 sm:px-6 py-2.5 rounded-full font-medium text-xs sm:text-sm text-white shadow-[0_0_25px_rgba(230,28,120,0.6)] hover:shadow-[0_0_35px_rgba(230,28,120,0.9)] transition-all duration-300 active:scale-95",style:{background:"linear-gradient(135deg, #f72585 0%, #b5179e 60%, #7209b7 100%)"},children:u.jsxs("span",{className:"relative z-10 flex items-center gap-1.5",children:[u.jsx("span",{children:"Записаться"}),u.jsx("span",{className:"opacity-60 text-xs hidden sm:inline",children:"/ Agendar"})]})})]})]})}),zg=({onOpenBooking:N})=>u.jsxs("section",{className:"relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 overflow-hidden",children:[u.jsxs("div",{className:"absolute inset-0 z-0 pointer-events-none",children:[u.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[560px] opacity-75 overflow-hidden",children:[u.jsx("img",{src:"/assets/hero-diver.jpg",alt:"Mergulhador Abissal Aqua Sphere",className:"w-full h-full object-cover object-top filter brightness-110 contrast-105"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#020915]/30 via-transparent to-[#020915]"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#020915] via-transparent to-[#020915]"})]}),u.jsx("div",{className:"absolute left-[-10%] top-[30%] w-[450px] h-[450px] rounded-full blur-[140px] opacity-35",style:{background:"#e61c78"}}),u.jsx("div",{className:"absolute right-[-10%] top-[35%] w-[450px] h-[450px] rounded-full blur-[140px] opacity-35",style:{background:"#00f5d4"}})]}),u.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-36 sm:mt-48",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030e1d]/85 border border-[#00f5d4]/40 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(0,245,212,0.2)]",children:[u.jsx(y1,{className:"w-3.5 h-3.5 text-[#00f5d4] animate-pulse"}),u.jsx("span",{className:"text-xs sm:text-sm font-medium tracking-widest text-[#e2f1fc] uppercase font-mono",children:"Дайвинг клуб • Clube de Mergulho Abissal"})]}),u.jsxs("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-white mb-6 uppercase drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)]",children:[u.jsx("span",{className:"inline-block hover:scale-105 transition-transform duration-300",children:"AQUA"})," ",u.jsx("span",{className:"inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d8f3dc] to-[#00f5d4] hover:scale-105 transition-transform duration-300",children:"SPHERE"})]}),u.jsxs("p",{className:"text-lg sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-wide max-w-2xl mx-auto mb-10 font-sans",children:["Открой подводный мир вместе с нами.",u.jsx("span",{className:"block text-sm sm:text-base text-[#00f5d4] font-mono mt-2 tracking-wider",children:"Expedições oceânicas exclusivas, segurança certificada e contemplação silenciosa."})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-14",children:[u.jsx("button",{onClick:()=>{pt.playBubblePop(),N()},className:"px-8 py-3.5 rounded-full font-mono text-xs uppercase font-bold tracking-wider text-white shadow-[0_0_30px_rgba(247,37,133,0.7)] hover:shadow-[0_0_45px_rgba(247,37,133,1)] transition-all duration-300 hover:scale-105 active:scale-95",style:{background:"linear-gradient(135deg, #f72585 0%, #b5179e 60%, #7209b7 100%)"},children:"Записаться на погружение / Agendar"}),u.jsxs("a",{href:"#locais",onClick:()=>pt.playBubblePop(),className:"px-7 py-3.5 rounded-full font-mono text-xs uppercase font-medium tracking-wider text-[#e2f1fc] bg-[#030e1d]/80 hover:bg-[#061833] border border-[#00f5d4]/40 hover:border-[#00f5d4] transition-all backdrop-blur-md shadow-lg flex items-center gap-2",children:[u.jsx("span",{children:"Explorar Locais"}),u.jsx(b1,{className:"w-3.5 h-3.5 text-[#00f5d4]"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl w-full border-t border-white/10 pt-8 text-center",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-2xl sm:text-3xl font-display font-bold text-white",children:"100%"}),u.jsx("div",{className:"text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1",children:"Registro de Segurança"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-2xl sm:text-3xl font-display font-bold text-[#00f5d4]",children:"140 M"}),u.jsx("div",{className:"text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1",children:"Capacidade Técnica"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-2xl sm:text-3xl font-display font-bold text-[#e61c78]",children:"12+ ANOS"}),u.jsx("div",{className:"text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1",children:"Desde 2012"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-2xl sm:text-3xl font-display font-bold text-[#f59e0b]",children:"3.400+"}),u.jsx("div",{className:"text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1",children:"Mergulhos Concluídos"})]})]}),u.jsxs("a",{href:"#sobre",onClick:()=>pt.playBubblePop(),className:"mt-14 inline-flex flex-col items-center gap-2 text-neutral-400 hover:text-[#00f5d4] transition-colors",children:[u.jsx("span",{className:"text-[10px] font-mono tracking-widest uppercase",children:"Mergulhar nas profundezas"}),u.jsx(Lp,{className:"w-4 h-4 animate-bounce text-[#00f5d4]"})]})]})]}),Eg=()=>u.jsxs("section",{id:"sobre",className:"relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10",children:[u.jsx("div",{className:"absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-30",style:{background:"#00f5d4"}}),u.jsx("div",{className:"absolute -right-20 top-2/3 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-25",style:{background:"#e61c78"}}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",children:[u.jsx("div",{className:"lg:col-span-5 relative flex items-center justify-center",children:u.jsxs("div",{className:"relative group w-full max-w-md",children:[u.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00f5d4]/20 via-transparent to-[#e61c78]/25 filter blur-2xl group-hover:blur-3xl transition-all duration-500"}),u.jsxs("div",{className:"relative z-10 rounded-3xl overflow-hidden border border-white/15 bg-[#020b18]/80 backdrop-blur-xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.9)]",children:[u.jsx("img",{src:"/assets/exotic-fish.jpg",alt:"Peixe Exótico Abissal - Aqua Sphere",className:"w-full h-auto max-h-[460px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"}),u.jsxs("div",{className:"absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-[#020915]/90 backdrop-blur-md border border-white/15 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-[#00f5d4] uppercase tracking-wider",children:"Espécime Catalogado #409"}),u.jsx("div",{className:"text-xs font-semibold text-white",children:"Pterois Radiata (Bioluminescente)"})]}),u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#00f5d4] shadow-[0_0_10px_#00f5d4] animate-pulse"})]})]})]})}),u.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start lg:pl-6",children:[u.jsx("span",{className:"text-xs sm:text-sm font-mono tracking-widest text-[#00f5d4] uppercase mb-2",children:"AQUA SPHERE"}),u.jsxs("div",{className:"flex flex-wrap items-baseline gap-4 mb-6",children:[u.jsx("h2",{className:"text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight",children:"О КЛУБЕ"}),u.jsx("div",{className:"px-3.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono text-neutral-300",children:"с 2012 года • Desde 2012"})]}),u.jsxs("p",{className:"text-base sm:text-lg text-neutral-300 leading-relaxed font-light mb-6",children:[u.jsx("strong",{className:"text-white font-medium",children:"Aqua Sphera"})," — это профессиональный дайвинг-клуб, который уже более 10 лет помогает людям открывать красоту подводного мира. Мы предлагаем безопасное и комфортное обучение, уникальные экскурсии и все необходимое для погружений."]}),u.jsx("p",{className:"text-sm sm:text-base text-neutral-400 leading-relaxed mb-8",children:"Fundado por mestres de mergulho técnico e fotógrafos de profundidade, unimos a precisão militar de protocolos de descompressão com expedições silenciosas em ecossistemas de corais e naufrágios virgens."}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8",children:[u.jsxs("div",{onMouseEnter:()=>pt.playBubblePop(),className:"p-4 rounded-xl border border-white/10 bg-[#030e1d]/70 backdrop-blur-sm hover:border-[#00f5d4]/40 transition-colors",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1.5 text-white font-medium text-sm",children:[u.jsx(eg,{className:"w-4 h-4 text-[#00f5d4]"}),u.jsx("span",{children:"Instrutores PADI & SSI Master"})]}),u.jsx("p",{className:"text-xs text-neutral-400",children:"Mais de 15.000 horas combinadas de fundo e certificação de resgate avançado."})]}),u.jsxs("div",{onMouseEnter:()=>pt.playBubblePop(),className:"p-4 rounded-xl border border-white/10 bg-[#030e1d]/70 backdrop-blur-sm hover:border-[#e61c78]/40 transition-colors",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1.5 text-white font-medium text-sm",children:[u.jsx(yn,{className:"w-4 h-4 text-[#e61c78]"}),u.jsx("span",{children:"Gás Trimix & Heliox de Pureza"})]}),u.jsx("p",{className:"text-xs text-neutral-400",children:"Estação própria de mistura hiperbárica para mergulhos sem narcose até 140m."})]})]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-[#e61c78]",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#e61c78] animate-ping"}),u.jsx("span",{children:"Bioma Coralino: Heteractis Magnifica com Simbiose Ativa"})]})]})]})]}),h1=[{id:"red-sea",ruTitle:"Коралловые рифы Красного моря",title:"Recifes de Coral do Mar Vermelho",region:"Ras Mohammed & Estreito de Tiran, Egito",depth:"18m - 42m",visibility:"40 metros (Cristalina)",temp:"26°C - 29°C",type:"Recifes Vivos & Paredões Abissais",badge:"Bioluminescência Noturna",color:"#00f5d4"},{id:"black-sea-wrecks",ruTitle:"Затонувшие корабли Черного моря",title:"Naufrágios Históricos do Mar Negro",region:"Crimeia & Península de Taman",depth:"28m - 75m",visibility:"15 - 25 metros",temp:"9°C - 14°C (Camada Fria)",type:"Arqueologia Subaquática & Wrecks",badge:"Técnico Avançado Trimix",color:"#3a86ff"},{id:"cenotes-lakes",ruTitle:"Озера и карьеры",title:"Lagos Cristalinos & Cavernas Submersas",region:"Pedreiras Profundas & Mananciais Geológicos",depth:"12m - 55m",visibility:"30+ metros",temp:"6°C - 12°C",type:"Mergulho em Caverna & Flutuabilidade Fina",badge:"Zero Correnteza",color:"#ffd166"},{id:"exotic-tropics",ruTitle:"Экзотические локации (Таиланд, Индонезия, Мальдивы)",title:"Rotas Tropicais: Raja Ampat & Maldivas",region:"Triângulo dos Corais & Atóis Oceânicos",depth:"10m - 60m",visibility:"35 - 50 metros",temp:"28°C - 30°C",type:"Mantas Gigantes, Tubarões-Baleia & Corais",badge:"Expedição Safari Liveaboard",color:"#e61c78"}],Mg=({onSelectExpedition:N})=>{const[x,p]=At.useState(h1[0]);return u.jsxs("section",{id:"locais",className:"relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10",children:[u.jsx("div",{className:"absolute left-1/3 top-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20",style:{background:"#3a86ff"}}),u.jsxs("div",{className:"flex flex-col items-start mb-14",children:[u.jsx("span",{className:"text-xs sm:text-sm font-mono tracking-widest text-[#00f5d4] uppercase mb-2",children:"AQUA SPHERE"}),u.jsx("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight mb-4",children:"ЛОКАЦИИ"}),u.jsx("p",{className:"text-sm sm:text-base text-neutral-300 font-light max-w-2xl leading-relaxed",children:"Мы организуем погружения в самых живописных местах: коралловые рифы, исторические корабли и заповедные глубины."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20",children:[u.jsx("div",{className:"lg:col-span-6 flex flex-col gap-4",children:h1.map(d=>{const C=x.id===d.id;return u.jsxs("div",{onClick:()=>{pt.playBubblePop(),p(d)},onMouseEnter:()=>pt.playBubblePop(),className:`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden backdrop-blur-md ${C?"bg-[#04142b]/90 border-[#00f5d4] shadow-[0_0_30px_rgba(0,245,212,0.18)]":"bg-[#020b18]/60 border-white/10 hover:border-white/30 hover:bg-[#031024]/70"}`,children:[u.jsxs("div",{className:"flex items-start justify-between gap-4",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[11px] font-mono text-[#00f5d4] uppercase tracking-wider mb-1",children:d.ruTitle}),u.jsx("h3",{className:"text-lg sm:text-xl font-display font-semibold text-white group-hover:text-[#00f5d4] transition-colors",children:d.title}),u.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-neutral-400 mt-1",children:[u.jsx(Kr,{className:"w-3.5 h-3.5 text-[#e61c78]"}),u.jsx("span",{children:d.region})]})]}),u.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-semibold border",style:{borderColor:`${d.color}40`,color:d.color,backgroundColor:`${d.color}15`},children:d.badge})]}),C&&u.jsxs("div",{className:"mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs",children:[u.jsxs("div",{className:"bg-white/5 p-2 rounded-lg",children:[u.jsx("span",{className:"text-[9px] font-mono text-neutral-400 block uppercase",children:"Fundo"}),u.jsx("strong",{className:"text-white font-mono",children:d.depth})]}),u.jsxs("div",{className:"bg-white/5 p-2 rounded-lg",children:[u.jsx("span",{className:"text-[9px] font-mono text-neutral-400 block uppercase",children:"Visibilidade"}),u.jsx("strong",{className:"text-[#00f5d4] font-mono",children:d.visibility})]}),u.jsxs("div",{className:"bg-white/5 p-2 rounded-lg",children:[u.jsx("span",{className:"text-[9px] font-mono text-neutral-400 block uppercase",children:"Temperatura"}),u.jsx("strong",{className:"text-[#f59e0b] font-mono",children:d.temp})]})]})]},d.id)})}),u.jsx("div",{className:"lg:col-span-6 flex flex-col gap-6",children:u.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-white/15 bg-[#020b18]/80 backdrop-blur-xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)]",children:[u.jsxs("div",{className:"relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden",children:[u.jsx("img",{src:"/assets/school-fish.jpg",alt:"Cardume de Peixes Bioluminescentes - Aqua Sphere",className:"w-full h-full object-cover object-center filter brightness-110 contrast-105"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020915] via-transparent to-transparent opacity-70"}),u.jsxs("div",{className:"absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-[#020915]/80 backdrop-blur-md border border-[#00f5d4]/30 flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00f5d4] animate-ping"}),u.jsx("span",{className:"text-xs font-mono text-white",children:"CARDUME EM MIGRAÇÃO"})]})]}),u.jsxs("div",{className:"p-5 flex flex-col gap-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase tracking-widest",children:"Ponto de Imersão Selecionado"}),u.jsx("h4",{className:"text-xl font-display font-bold text-white mt-0.5",children:x.title})]}),u.jsx("button",{onClick:()=>{pt.playBubblePop(),N(x.title)},className:"px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#020915] bg-[#00f5d4] hover:bg-[#70e000] transition-colors shadow-lg",children:"Agendar Rota"})]}),u.jsxs("p",{className:"text-xs sm:text-sm text-neutral-300 leading-relaxed font-light",children:[x.type,". Todas as operações de descida contam com embarcação de apoio dedicada, oxigênio medicinal a 100%, analisadores digitais de hélio e guias de mergulho certificados."]})]})]})})]}),u.jsxs("div",{className:"relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]",children:[u.jsx("img",{src:"/assets/coral-floor.jpg",alt:"Jardim de Corais Abissal - Aqua Sphere",className:"w-full h-56 sm:h-72 object-cover object-bottom filter brightness-105"}),u.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020915] via-[#020915]/40 to-transparent flex flex-col items-center justify-end p-8 text-center",children:[u.jsx("span",{className:"text-xs font-mono tracking-widest text-[#00f5d4] uppercase mb-1",children:"SANTUÁRIO PROTEGIDO"}),u.jsx("h4",{className:"text-2xl sm:text-3xl font-display font-bold text-white",children:"Compromisso com a Preservação dos Oceanos"}),u.jsx("p",{className:"text-xs sm:text-sm text-neutral-300 max-w-xl mt-2 font-light",children:'100% dos nossos mergulhos seguem a diretriz internacional "Zero Touch" da Project AWARE, protegendo corais ancestrais e vida marinha sensível.'})]})]})]})},qg=[{level:"NÍVEL 01 • INICIAÇÃO",title:"Mergulho de Batismo & Open Water",ruTitle:"Начальный курс дайвинга",hours:"32 Horas (Teoria + 6 Imersões)",maxDepth:"18 Metros",desc:"A porta de entrada oficial para o oceano. Domine flutuabilidade, montagem de cilindros, respiração e procedimentos de emergência com instrutor 1:1.",features:["Certificação Internacional PADI / SSI vitalícia","Equipamento de neoprene e cilindros incluso","Sessões em águas confinadas e mar aberto","Manual digital e logbook oficial"],price:"R$ 1.950"},{level:"NÍVEL 02 • AVANÇADO",title:"Advanced & Deep Diver (40m)",ruTitle:"Глубоководный курс (40м)",hours:"40 Horas (8 Imersões Técnicas)",maxDepth:"40 Metros",desc:"Navegação por bússola de precisão, gerenciamento de consumo em profundidade, descompressão e exploração noturna de recifes bioluminescentes.",features:["Mergulho Noturno Bioluminescente","Penetração básica em naufrágios","Uso de computadores de mergulho multi-gás","Treinamento de flutuabilidade milimétrica"],price:"R$ 2.680",popular:!0},{level:"NÍVEL 03 • TÉCNICO ELITE",title:"Normoxic Trimix & Rebreather CCR",ruTitle:"Технический тримикс и ребризер",hours:"60 Horas (Simulador + 10 Imersões)",maxDepth:"75 - 100 Metros",desc:"Mergulhos em circuito fechado sem bolhas, com misturas de Hélio para total clareza mental e zero narcose nas profundezas do abismo.",features:["Análise laboratorial de misturas Trimix","Troca de cilindros sob descompressão","Circuito fechado sem bolhas (silêncio total)","Acesso a expedições científicas exclusivas"],price:"R$ 5.800"}],Ag=({onSelectCourse:N})=>u.jsxs("section",{id:"cursos",className:"relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10",children:[u.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[u.jsx("span",{className:"text-xs sm:text-sm font-mono tracking-widest text-[#00f5d4] uppercase mb-2",children:"AQUA SPHERE ACADEMY"}),u.jsx("h2",{className:"text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight mb-4",children:"КУРСЫ И СЕРТИФИКАЦИЯ"}),u.jsx("p",{className:"text-sm sm:text-base text-neutral-300 font-light max-w-2xl leading-relaxed",children:"Formação técnica de elite reconhecida mundialmente pela PADI, SSI e TDI. Do primeiro fôlego às expedições abissais mais exigentes."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:qg.map((x,p)=>u.jsxs("div",{onMouseEnter:()=>pt.playBubblePop(),className:`relative rounded-3xl p-7 flex flex-col justify-between border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${x.popular?"bg-[#04152e]/90 border-[#00f5d4] shadow-[0_0_35px_rgba(0,245,212,0.2)]":"bg-[#020b18]/70 border-white/10 hover:border-white/25"}`,children:[x.popular&&u.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#00f5d4] to-[#3a86ff] text-[#020915] text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg",children:"Recomendado"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono text-[#00f5d4] tracking-wider uppercase block mb-1",children:x.level}),u.jsx("h3",{className:"text-2xl font-display font-bold text-white mb-1",children:x.title}),u.jsx("div",{className:"text-xs font-mono text-neutral-400 italic mb-4",children:x.ruTitle}),u.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono text-neutral-300 pb-4 mb-4 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(lg,{className:"w-3.5 h-3.5 text-[#00f5d4]"}),u.jsx("span",{children:x.hours})]}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(x1,{className:"w-3.5 h-3.5 text-[#e61c78]"}),u.jsx("span",{children:x.maxDepth})]})]}),u.jsx("p",{className:"text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6",children:x.desc}),u.jsx("div",{className:"space-y-2.5 mb-8",children:x.features.map((d,C)=>u.jsxs("div",{className:"flex items-start gap-2 text-xs text-neutral-300",children:[u.jsx(Qp,{className:"w-3.5 h-3.5 text-[#00f5d4] shrink-0 mt-0.5"}),u.jsx("span",{children:d})]},C))})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase block",children:"Investimento"}),u.jsx("span",{className:"text-xl font-display font-bold text-white",children:x.price})]}),u.jsx("button",{onClick:()=>{pt.playBubblePop(),N(x.title)},className:"px-4 py-2 rounded-xl bg-[#00f5d4] text-[#020915] font-mono text-xs font-bold uppercase hover:bg-[#70e000] transition-colors",children:"Reservar Vaga"})]})]},p))})]}),Cg=()=>u.jsx("footer",{id:"contato",className:"relative border-t border-white/10 bg-[#01060e] pt-16 pb-12 px-4 sm:px-8 z-10",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14",children:[u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-full border border-white/20 bg-[#041226] flex items-center justify-center text-[#00f5d4]",children:u.jsx(Yp,{className:"w-4 h-4"})}),u.jsx("span",{className:"font-display font-bold text-lg text-white",children:"AQUA SPHERE"})]}),u.jsx("p",{className:"text-xs text-neutral-400 font-light leading-relaxed",children:"Clube e Centro de Expedições Subaquáticas fundado em 2012. Dedicado à exploração pacífica, contemplação abissal e proteção dos santuários de corais do planeta."}),u.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-mono text-[#00f5d4] mt-2",children:[u.jsx(mg,{className:"w-3.5 h-3.5 animate-pulse"}),u.jsx("span",{children:"VHF MARÍTIMO: CANAL 16 / 72 (CH-16)"})]})]}),u.jsxs("div",{className:"flex flex-col gap-2.5",children:[u.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-white mb-1",children:"Bases Operacionais"}),u.jsxs("div",{className:"flex items-start gap-2 text-xs text-neutral-400",children:[u.jsx(Kr,{className:"w-3.5 h-3.5 text-[#00f5d4] shrink-0 mt-0.5"}),u.jsx("span",{children:"Base Sharm: Marina Travco, Mar Vermelho, Egito"})]}),u.jsxs("div",{className:"flex items-start gap-2 text-xs text-neutral-400",children:[u.jsx(Kr,{className:"w-3.5 h-3.5 text-[#3a86ff] shrink-0 mt-0.5"}),u.jsx("span",{children:"Base Wrecks: Marina de Sevastopol, Mar Negro"})]}),u.jsxs("div",{className:"flex items-start gap-2 text-xs text-neutral-400",children:[u.jsx(Kr,{className:"w-3.5 h-3.5 text-[#e61c78] shrink-0 mt-0.5"}),u.jsx("span",{children:"Base Tropical: Labuan Bajo & Raja Ampat, Indonésia"})]})]}),u.jsxs("div",{className:"flex flex-col gap-2.5",children:[u.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-white mb-1",children:"Central & Emergência (Номер)"}),u.jsxs("div",{className:"flex items-center gap-2 text-xs text-neutral-300",children:[u.jsx(fg,{className:"w-3.5 h-3.5 text-[#00f5d4]"}),u.jsx("span",{className:"font-mono",children:"+55 (11) 98765-4321 / +7 (495) 892-3401"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs text-neutral-300",children:[u.jsx(og,{className:"w-3.5 h-3.5 text-[#00f5d4]"}),u.jsx("span",{className:"font-mono",children:"expedicoes@aquasphere.club"})]}),u.jsx("div",{className:"p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-400 mt-1",children:"Plantão de Segurança 24/7 integrado à câmara hiperbárica local."})]}),u.jsxs("div",{className:"flex flex-col gap-2.5",children:[u.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-white mb-1",children:"Afiliações Globais"}),u.jsxs("ul",{className:"text-xs text-neutral-400 space-y-1.5 font-sans",children:[u.jsxs("li",{className:"flex items-center gap-1.5",children:[u.jsx(yn,{className:"w-3 h-3 text-[#00f5d4]"}),"PADI 5-Star Dive Center #29104"]}),u.jsxs("li",{className:"flex items-center gap-1.5",children:[u.jsx(yn,{className:"w-3 h-3 text-[#00f5d4]"}),"SSI Diamond Instructor Training Facility"]}),u.jsxs("li",{className:"flex items-center gap-1.5",children:[u.jsx(yn,{className:"w-3 h-3 text-[#00f5d4]"}),"TDI Technical Diving International"]}),u.jsxs("li",{className:"flex items-center gap-1.5",children:[u.jsx(yn,{className:"w-3 h-3 text-[#00f5d4]"}),"DAN (Divers Alert Network) Platinum Partner"]})]})]})]}),u.jsxs("div",{className:"border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500",children:[u.jsx("div",{children:"© 2012 - 2026 AQUA SPHERE Diving Club. Todos os direitos reservados."}),u.jsx("div",{className:"flex items-center gap-1 text-neutral-400",children:u.jsx("span",{children:"Desenvolvido com excelência autoral e engenharia subaquática de estúdio independente."})})]})]})});var Oc={};(function N(x,p,d,C){var k=!!(x.Worker&&x.Blob&&x.Promise&&x.OffscreenCanvas&&x.OffscreenCanvasRenderingContext2D&&x.HTMLCanvasElement&&x.HTMLCanvasElement.prototype.transferControlToOffscreen&&x.URL&&x.URL.createObjectURL),lt=typeof Path2D=="function"&&typeof DOMMatrix=="function",Tt=(function(){if(!x.OffscreenCanvas)return!1;try{var v=new OffscreenCanvas(1,1),m=v.getContext("2d");m.fillRect(0,0,1,1);var Q=v.transferToImageBitmap();m.createPattern(Q,"no-repeat")}catch{return!1}return!0})();function nt(){}function it(v){var m=p.exports.Promise,Q=m!==void 0?m:x.Promise;return typeof Q=="function"?new Q(v):(v(nt,nt),null)}var B=(function(v,m){return{transform:function(Q){if(v)return Q;if(m.has(Q))return m.get(Q);var J=new OffscreenCanvas(Q.width,Q.height),s=J.getContext("2d");return s.drawImage(Q,0,0),m.set(Q,J),J},clear:function(){m.clear()}}})(Tt,new Map),S=(function(){var v=Math.floor(16.666666666666668),m,Q,J={},s=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(m=function(T){var M=Math.random();return J[M]=requestAnimationFrame(function E(U){s===U||s+v-1<U?(s=U,delete J[M],T()):J[M]=requestAnimationFrame(E)}),M},Q=function(T){J[T]&&cancelAnimationFrame(J[T])}):(m=function(T){return setTimeout(T,v)},Q=function(T){return clearTimeout(T)}),{frame:m,cancel:Q}})(),H=(function(){var v,m,Q={};function J(s){function T(M,E){s.postMessage({options:M||{},callback:E})}s.init=function(E){var U=E.transferControlToOffscreen();s.postMessage({canvas:U},[U])},s.fire=function(E,U,V){if(m)return T(E,null),m;var K=Math.random().toString(36).slice(2);return m=it(function(A){function R(jt){jt.data.callback===K&&(delete Q[K],s.removeEventListener("message",R),m=null,B.clear(),V(),A())}s.addEventListener("message",R),T(E,K),Q[K]=R.bind(null,{data:{callback:K}})}),m},s.reset=function(){s.postMessage({reset:!0});for(var E in Q)Q[E](),delete Q[E]}}return function(){if(v)return v;if(!d&&k){var s=["var CONFETTI, SIZE = {}, module = {};","("+N.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{v=new Worker(URL.createObjectURL(new Blob([s])))}catch(T){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",T),null}J(v)}return v}})(),L={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function mt(v,m){return m?m(v):v}function q(v){return v!=null}function Z(v,m,Q){return mt(v&&q(v[m])?v[m]:L[m],Q)}function Ht(v){return v<0?0:Math.floor(v)}function qt(v,m){return Math.floor(Math.random()*(m-v))+v}function pe(v){return parseInt(v,16)}function Kt(v){return v.map(ue)}function ue(v){var m=String(v).replace(/[^0-9a-f]/gi,"");return m.length<6&&(m=m[0]+m[0]+m[1]+m[1]+m[2]+m[2]),{r:pe(m.substring(0,2)),g:pe(m.substring(2,4)),b:pe(m.substring(4,6))}}function Jt(v){var m=Z(v,"origin",Object);return m.x=Z(m,"x",Number),m.y=Z(m,"y",Number),m}function et(v){v.width=document.documentElement.clientWidth,v.height=document.documentElement.clientHeight}function ct(v){var m=v.getBoundingClientRect();v.width=m.width,v.height=m.height}function ke(v){var m=document.createElement("canvas");return m.style.position="fixed",m.style.top="0px",m.style.left="0px",m.style.pointerEvents="none",m.style.zIndex=v,m}function ge(v,m,Q,J,s,T,M,E,U){v.save(),v.translate(m,Q),v.rotate(T),v.scale(J,s),v.arc(0,0,1,M,E,U),v.restore()}function be(v){var m=v.angle*(Math.PI/180),Q=v.spread*(Math.PI/180);return{x:v.x,y:v.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:v.startVelocity*.5+Math.random()*v.startVelocity,angle2D:-m+(.5*Q-Math.random()*Q),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:v.color,shape:v.shape,tick:0,totalTicks:v.ticks,decay:v.decay,drift:v.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:v.gravity*3,ovalScalar:.6,scalar:v.scalar,flat:v.flat}}function se(v,m){m.x+=Math.cos(m.angle2D)*m.velocity+m.drift,m.y+=Math.sin(m.angle2D)*m.velocity+m.gravity,m.velocity*=m.decay,m.flat?(m.wobble=0,m.wobbleX=m.x+10*m.scalar,m.wobbleY=m.y+10*m.scalar,m.tiltSin=0,m.tiltCos=0,m.random=1):(m.wobble+=m.wobbleSpeed,m.wobbleX=m.x+10*m.scalar*Math.cos(m.wobble),m.wobbleY=m.y+10*m.scalar*Math.sin(m.wobble),m.tiltAngle+=.1,m.tiltSin=Math.sin(m.tiltAngle),m.tiltCos=Math.cos(m.tiltAngle),m.random=Math.random()+2);var Q=m.tick++/m.totalTicks,J=m.x+m.random*m.tiltCos,s=m.y+m.random*m.tiltSin,T=m.wobbleX+m.random*m.tiltCos,M=m.wobbleY+m.random*m.tiltSin;if(v.fillStyle="rgba("+m.color.r+", "+m.color.g+", "+m.color.b+", "+(1-Q)+")",v.beginPath(),lt&&m.shape.type==="path"&&typeof m.shape.path=="string"&&Array.isArray(m.shape.matrix))v.fill(F(m.shape.path,m.shape.matrix,m.x,m.y,Math.abs(T-J)*.1,Math.abs(M-s)*.1,Math.PI/10*m.wobble));else if(m.shape.type==="bitmap"){var E=Math.PI/10*m.wobble,U=Math.abs(T-J)*.1,V=Math.abs(M-s)*.1,K=m.shape.bitmap.width*m.scalar,A=m.shape.bitmap.height*m.scalar,R=new DOMMatrix([Math.cos(E)*U,Math.sin(E)*U,-Math.sin(E)*V,Math.cos(E)*V,m.x,m.y]);R.multiplySelf(new DOMMatrix(m.shape.matrix));var jt=v.createPattern(B.transform(m.shape.bitmap),"no-repeat");jt.setTransform(R),v.globalAlpha=1-Q,v.fillStyle=jt,v.fillRect(m.x-K/2,m.y-A/2,K,A),v.globalAlpha=1}else if(m.shape==="circle")v.ellipse?v.ellipse(m.x,m.y,Math.abs(T-J)*m.ovalScalar,Math.abs(M-s)*m.ovalScalar,Math.PI/10*m.wobble,0,2*Math.PI):ge(v,m.x,m.y,Math.abs(T-J)*m.ovalScalar,Math.abs(M-s)*m.ovalScalar,Math.PI/10*m.wobble,0,2*Math.PI);else if(m.shape==="star")for(var rt=Math.PI/2*3,Yt=4*m.scalar,Ut=8*m.scalar,yt=m.x,st=m.y,Ft=5,oe=Math.PI/Ft;Ft--;)yt=m.x+Math.cos(rt)*Ut,st=m.y+Math.sin(rt)*Ut,v.lineTo(yt,st),rt+=oe,yt=m.x+Math.cos(rt)*Yt,st=m.y+Math.sin(rt)*Yt,v.lineTo(yt,st),rt+=oe;else v.moveTo(Math.floor(m.x),Math.floor(m.y)),v.lineTo(Math.floor(m.wobbleX),Math.floor(s)),v.lineTo(Math.floor(T),Math.floor(M)),v.lineTo(Math.floor(J),Math.floor(m.wobbleY));return v.closePath(),v.fill(),m.tick<m.totalTicks}function Ie(v,m,Q,J,s){var T=m.slice(),M=v.getContext("2d"),E,U,V=it(function(K){function A(){E=U=null,M.clearRect(0,0,J.width,J.height),B.clear(),s(),K()}function R(){d&&!(J.width===C.width&&J.height===C.height)&&(J.width=v.width=C.width,J.height=v.height=C.height),!J.width&&!J.height&&(Q(v),J.width=v.width,J.height=v.height),M.clearRect(0,0,J.width,J.height),T=T.filter(function(jt){return se(M,jt)}),T.length?E=S.frame(R):A()}E=S.frame(R),U=A});return{addFettis:function(K){return T=T.concat(K),V},canvas:v,promise:V,reset:function(){E&&S.cancel(E),U&&U()}}}function Pe(v,m){var Q=!v,J=!!Z(m||{},"resize"),s=!1,T=Z(m,"disableForReducedMotion",Boolean),M=k&&!!Z(m||{},"useWorker"),E=M?H():null,U=Q?et:ct,V=v&&E?!!v.__confetti_initialized:!1,K=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,A;function R(rt,Yt,Ut){for(var yt=Z(rt,"particleCount",Ht),st=Z(rt,"angle",Number),Ft=Z(rt,"spread",Number),oe=Z(rt,"startVelocity",Number),ta=Z(rt,"decay",Number),zl=Z(rt,"gravity",Number),El=Z(rt,"drift",Number),da=Z(rt,"colors",Kt),_n=Z(rt,"ticks",Number),al=Z(rt,"shapes"),wn=Z(rt,"scalar"),xi=!!Z(rt,"flat"),Ve=Jt(rt),Ml=yt,ll=[],Jr=v.width*Ve.x,vi=v.height*Ve.y;Ml--;)ll.push(be({x:Jr,y:vi,angle:st,spread:Ft,startVelocity:oe,color:da[Ml%da.length],shape:al[qt(0,al.length)],ticks:_n,decay:ta,gravity:zl,drift:El,scalar:wn,flat:xi}));return A?A.addFettis(ll):(A=Ie(v,ll,U,Yt,Ut),A.promise)}function jt(rt){var Yt=T||Z(rt,"disableForReducedMotion",Boolean),Ut=Z(rt,"zIndex",Number);if(Yt&&K)return it(function(oe){oe()});Q&&A?v=A.canvas:Q&&!v&&(v=ke(Ut),document.body.appendChild(v)),J&&!V&&U(v);var yt={width:v.width,height:v.height};E&&!V&&E.init(v),V=!0,E&&(v.__confetti_initialized=!0);function st(){if(E){var oe={getBoundingClientRect:function(){if(!Q)return v.getBoundingClientRect()}};U(oe),E.postMessage({resize:{width:oe.width,height:oe.height}});return}yt.width=yt.height=null}function Ft(){A=null,J&&(s=!1,x.removeEventListener("resize",st)),Q&&v&&(document.body.contains(v)&&document.body.removeChild(v),v=null,V=!1)}return J&&!s&&(s=!0,x.addEventListener("resize",st,!1)),E?E.fire(rt,yt,Ft):R(rt,yt,Ft)}return jt.reset=function(){E&&E.reset(),A&&A.reset()},jt}var kt;function D(){return kt||(kt=Pe(null,{useWorker:!0,resize:!0})),kt}function F(v,m,Q,J,s,T,M){var E=new Path2D(v),U=new Path2D;U.addPath(E,new DOMMatrix(m));var V=new Path2D;return V.addPath(U,new DOMMatrix([Math.cos(M)*s,Math.sin(M)*s,-Math.sin(M)*T,Math.cos(M)*T,Q,J])),V}function W(v){if(!lt)throw new Error("path confetti are not supported in this browser");var m,Q;typeof v=="string"?m=v:(m=v.path,Q=v.matrix);var J=new Path2D(m),s=document.createElement("canvas"),T=s.getContext("2d");if(!Q){for(var M=1e3,E=M,U=M,V=0,K=0,A,R,jt=0;jt<M;jt+=2)for(var rt=0;rt<M;rt+=2)T.isPointInPath(J,jt,rt,"nonzero")&&(E=Math.min(E,jt),U=Math.min(U,rt),V=Math.max(V,jt),K=Math.max(K,rt));A=V-E,R=K-U;var Yt=10,Ut=Math.min(Yt/A,Yt/R);Q=[Ut,0,0,Ut,-Math.round(A/2+E)*Ut,-Math.round(R/2+U)*Ut]}return{type:"path",path:m,matrix:Q}}function vt(v){var m,Q=1,J="#000000",s='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof v=="string"?m=v:(m=v.text,Q="scalar"in v?v.scalar:Q,s="fontFamily"in v?v.fontFamily:s,J="color"in v?v.color:J);var T=10*Q,M=""+T+"px "+s,E=new OffscreenCanvas(T,T),U=E.getContext("2d");U.font=M;var V=U.measureText(m),K=Math.ceil(V.actualBoundingBoxRight+V.actualBoundingBoxLeft),A=Math.ceil(V.actualBoundingBoxAscent+V.actualBoundingBoxDescent),R=2,jt=V.actualBoundingBoxLeft+R,rt=V.actualBoundingBoxAscent+R;K+=R+R,A+=R+R,E=new OffscreenCanvas(K,A),U=E.getContext("2d"),U.font=M,U.fillStyle=J,U.fillText(m,jt,rt);var Yt=1/Q;return{type:"bitmap",bitmap:E.transferToImageBitmap(),matrix:[Yt,0,0,Yt,-K*Yt/2,-A*Yt/2]}}p.exports=function(){return D().apply(this,arguments)},p.exports.reset=function(){D().reset()},p.exports.create=Pe,p.exports.shapeFromPath=W,p.exports.shapeFromText=vt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Oc,!1);const Og=Oc.exports;Oc.exports.create;const Dg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_0 .button {
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  outline: none;
  box-shadow: 0 6px 7px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
  background-image: linear-gradient(
    to top,
    rgba(206, 255, 255, 0.75),
    rgba(216, 255, 244, 0.65)
  );
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 0%;
}
.aq_wrap_0 .button:hover {
  box-shadow: 0 7px 9px rgba(0, 0, 0, 0.15),
    inset 0 3px 5px rgba(255, 255, 255, 0.6);
}
.aq_wrap_0 @keyframes fillButtonAndPress {
  0% {
    background-size: 100% 0%;
    transform: translateY(0);
    border: 2px solid rgba(255, 255, 255, 0.6);
  }
  100% {
    background-size: 100% 100%;
    transform: translateY(2px);
    border: 1px solid rgba(205, 235, 218, 0.6);
  }
}

.button:active {
  animation: fillButtonAndPress 0.4s ease forwards;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(255, 255, 255, 0.7);
}
.aq_wrap_0 .font {
  font-family: sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}
      `}),u.jsx("div",{className:"aq_wrap_0",dangerouslySetInnerHTML:{__html:'<button className="button font">Hold Me</button>'}})]}),kg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`

      `}),u.jsx("div",{className:"aq_wrap_1",dangerouslySetInnerHTML:{__html:`<!-- From Deep Sea.io by 0x3ther  - Tags: icon, animation, button, navigation, hover effect, tailwindbutton, tailwindcss -->
<div className="flex items-center gap-2">
  <button
    className="relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-[#F5F5F5] h-9 rounded-md px-3 group"
  >
    <svg
      className="lucide lucide-arrow-left"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12 19-7-7 7-7"></path>
      <path d="M19 12H5"></path>
    </svg>
    <span className="origin-left scale-0 transition-transform group-hover:scale-100"
      >Back</span
    >
  </button>
  <button
    className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 rounded-md px-3"
  >
    <svg
      className="lucide lucide-rocket text-cyan-500 dark:text-cyan-400"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#06B6D4"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      ></path>
      <path
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      ></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
    Dashboard
  </button>
  <button
    className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-9 rounded-md px-3"
  >
    <svg
      className="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#60A5FA"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
      ></path>
      <path d="M18 14h-8"></path>
      <path d="M15 18h-5"></path>
      <path d="M10 6h8v4h-8V6Z"></path>
    </svg>
    Articles
  </button>
  <button
    className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FACC14] h-9 rounded-md px-3"
  >
    <svg
      className="lucide lucide-sticky-note text-yellow-400 dark:text-yellow-600"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#FACC14"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
      ></path>
      <path d="M15 3v6h6"></path>
    </svg>
    Notes
  </button>
  <button
    className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FB923C] h-9 rounded-md px-3"
  >
    <svg
      className="lucide lucide-star text-orange-400 dark:text-orange-600"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#FB923C"
      fill="#FB923C"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
    Reviews
  </button>
</div>`}})]}),Ug=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_2 button {
  cursor: pointer;
  padding: 1em 2em;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  position: relative;
  overflow: hidden;
  background: rgba(60, 73, 203, 0.35);
  box-shadow: 0 0px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  -webkit-backdrop-filter: blur(14.5px);
}
.aq_wrap_2 button:hover {
  box-shadow: 0px 0 32px 0 rgba(31, 38, 135, 0.37),
    0px 0 32px 0 rgba(31, 38, 135, 0.37), 0 0 42px 0px rgba(31, 38, 135, 0.37),
    0 0 52px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.58);
}
.aq_wrap_2 button, .aq_wrap_2 button::before {
  display: grid;
  place-items: center;
  border-radius: 10px;
  box-shadow: 0 0px 32px 0 rgba(31, 38, 135, 0.37);
}
.aq_wrap_2 button::before {
  content: "Button";
  position: absolute;
  background: blue;
  width: 90%;
  height: 80%;
  background: rgba(26, 18, 241, 0.25);
  backdrop-filter: blur(18.5px);
  -webkit-backdrop-filter: blur(18.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.4s;
}
.aq_wrap_2 button:hover::before {
  background: rgba(51, 57, 236, 0.4);
  box-shadow: 1px 1px 2px 0 rgba(31, 38, 135, 0.37),
    2px 2px 2px 0 rgba(31, 38, 135, 0.37), 0 0px 32px 0 rgba(31, 38, 135, 0.37),
    0 0px 32px 1px rgba(31, 38, 135, 0.37), 0 0px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.aq_wrap_2 button:active::before {
  transform: scale(0.67);
}
      `}),u.jsx("div",{className:"aq_wrap_2",dangerouslySetInnerHTML:{__html:'<button className="button">Button</button>'}})]}),Rg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_3 .button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(66, 13, 240);
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  outline: 3px solid #270092;
  cursor: pointer;
  transition: ease-out .5s;
}
.aq_wrap_3 .button:hover {
  width: 180px;
  height: 60px;
  outline-offset: 4px;
  transform: scale(1.3) rotate(2deg);
  background-color: blue;
  box-shadow: 5px 20px #cdcbd4
}
.aq_wrap_3 .icon {
  color: #270092;
  margin-right: 5px;
}
.aq_wrap_3 .share {
  margin-left: 5px;
  color: #fff;
}
      `}),u.jsx("div",{className:"aq_wrap_3",dangerouslySetInnerHTML:{__html:`<button className="button"> 
  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="icon"> 
  <path fill="#fff" d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path> 
  </svg> 
  <span className="share">SHARE </span> 
  </button>`}})]}),Bg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_4 .btn {
  height: 3.5rem;
  width: 13.2rem;
  border-radius: 5px;
  border: 5px solid rgb(255, 255, 255);
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgb(255, 255, 255));
  animation: flickering 2s linear infinite both;
  text-transform: uppercase;
  background-color: rgb(83, 82, 82);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
}


@keyframes flickering {
  0%,
  100% {
    opacity: 1;
  }
.aq_wrap_4 41.99% {
  opacity: 1;
}
.aq_wrap_4 42% {
  opacity: 0;
}
.aq_wrap_4 43% {
  opacity: 0;
}
.aq_wrap_4 43.01% {
  opacity: 1;
}
.aq_wrap_4 47.99% {
  opacity: 1;
}
.aq_wrap_4 48% {
  opacity: 0;
}
.aq_wrap_4 49% {
  opacity: 0;
}
.aq_wrap_4 49.01% {
  opacity: 1;
}
.aq_wrap_4 .text {
  font-size: 1.8rem;
  font-family: Arial, Helvetica, sans-serif;
}
.aq_wrap_4 .btn:hover {
  background-color: black;
  border-radius: 0;
}
      `}),u.jsx("div",{className:"aq_wrap_4",dangerouslySetInnerHTML:{__html:`<button className="btn">
  <span className="text">Button</span>
</button>`}})]}),Hg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_5 .btn {
  padding: 0.9em 1.6em;
 border: none;
 outline: none;
 color: #FFF;
 font-family: inherit;
 font-weight: 500;
 font-size: 17px;
 cursor: pointer;
 position: relative;
 z-index: 0;
 border-radius: 12px;
}
.aq_wrap_5 .btn::after {
  content: "";
 z-index: -1;
 position: absolute;
 width: 100%;
 height: 100%;
 background-color: rgb(46, 46, 46);
 left: 0;
 top: 0;
 border-radius: 10px;
}
.aq_wrap_5 .btn::before {
  content: "";
 background: linear-gradient(
    45deg,
    #FF0000, #002BFF, #FF00C8, #002BFF,
      #FF0000, #002BFF, #FF00C8, #002BFF
);
 position: absolute;
 top: -2px;
 left: -2px;
 background-size: 600%;
 z-index: -1;
 width: calc(100% + 4px);
 height: calc(100% + 4px);
 filter: blur(8px);
 animation: glowing 20s linear infinite;
 transition: opacity .3s ease-in-out;
 border-radius: 10px;
 opacity: 0;
}
.aq_wrap_5 @keyframes glowing {
 0% {
  background-position: 0 0;
 }

 50% {
  background-position: 400% 0;
 }

 100% {
  background-position: 0 0;
 }
}


.btn:hover::before {
  opacity: 1;
}
.aq_wrap_5 .btn:active:after {
  background: transparent;
}
.aq_wrap_5 .btn:active {
  color: #000;
 font-weight: bold;
}
      `}),u.jsx("div",{className:"aq_wrap_5",dangerouslySetInnerHTML:{__html:'<button className="btn">Hover Me!</button>'}})]}),Yg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_6 .switch {
  display: inline-block;
  margin: 10em 2em;
  position: relative;
  border-radius: 3.5em;
  -webkit-box-shadow: 0 0 0.5em rgba(2,255,255,0.2);
  -moz-box-shadow: 0 0 0.5em rgba(255,255,255,0.2);
  box-shadow: 0 0 0.5em rgba(255,255,255,0.2);
}
.aq_wrap_6 .switch label {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.aq_wrap_6 .switch input {
  display: none;
}
.aq_wrap_6 .switch span {
  display: block;
  -webkit-transition: top 0.2s;
  -moz-transition: top 0.2s;
  -ms-transition: top 0.2s;
  -o-transition: top 0.2s;
  transition: top 0.2s;
}
.aq_wrap_6 .switch-border1 {
  border: 0.1em solid #000;
  border-radius: 3.5em;
  -webkit-box-shadow: 0 0.2em rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0 0.2em rgba(255, 255, 255, 0.2);
  box-shadow: 0 0.2em rgba(255, 255, 255, 0.2);
}
.aq_wrap_6 .switch-border2 {
  width: 6.6em;
  height: 12.6em;
  position: relative;
  border: 0.1em solid #323232;
  background-image: -webkit-gradient(linear, left top, right top, from(#2D2D2D), color-stop(0.5, #4B4B4B), to(#2D2D2D));
  background-image: -webkit-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -moz-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -ms-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -o-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: linear-gradient(to right, #2D2D2D, #4B4B4B, #2D2D2D);
  border-radius: 3.4em;
}
.aq_wrap_6 .switch-border2:before, .aq_wrap_6 .switch-border2:after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: .3;
  border-radius: 3.4em;
}
.aq_wrap_6 .switch-border2:before {
  background: -webkit-gradient(linear, left top, left bottom, from(#000), to(rgba(0,0,0,0)));
  background: -webkit-linear-gradient(#000, rgba(0,0,0,0));
  background: -moz-linear-gradient(#000, rgba(0,0,0,0));
  background: -ms-linear-gradient(#000, rgba(0,0,0,0));
  background: -o-linear-gradient(#000, rgba(0,0,0,0));
  background: linear-gradient(#000, rgba(0,0,0,0));
}
.aq_wrap_6 .switch-border2:after {
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(#000));
  background: -webkit-linear-gradient(rgba(0,0,0,0), #000);
  background: -moz-linear-gradient(rgba(0,0,0,0), #000);
  background: -ms-linear-gradient(rgba(0,0,0,0), #000);
  background: -o-linear-gradient(rgba(0,0,0,0), #000);
  background: linear-gradient(rgba(0,0,0,0), #000);
}
.aq_wrap_6 .switch-top {
  width: 100%;
  height: 84%;
  position: absolute;
  top: 8%;
  left: 0;
  z-index: 1;
  background-image: -webkit-gradient(linear, left top, right top, from(#2D2D2D), color-stop(0.5, #4B4B4B), to(#2D2D2D));
  background-image: -webkit-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -moz-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -ms-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -o-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: linear-gradient(to right, #2D2D2D, #4B4B4B, #2D2D2D);
  border-radius: 3.4em;
}
.aq_wrap_6 .switch-shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 3.4em;
  -webkit-box-shadow: 0 0 2em black inset;
  -moz-box-shadow: 0 0 2em black inset;
  box-shadow: 0 0 2em black inset;
}
.aq_wrap_6 .switch-handle-left, .aq_wrap_6 .switch-handle-right {
  content: '';
  display: block;
  width: 3.6em;
  height: 0;
  position: absolute;
  top: 6.6em;
  z-index: 2;
  border-bottom: 4.5em solid #111;
  border-left: 0.7em solid transparent;
  border-right: 0.7em solid transparent;
  border-radius: 0;
}
.aq_wrap_6 .switch-handle-left {
  left: 0.8em;
}
.aq_wrap_6 .switch-handle-right {
  right: 0.8em;
}
.aq_wrap_6 .switch-handle {
  width: 3.6em;
  height: 4.5em;
  position: absolute;
  top: 6.6em;
  left: 1.5em;
  z-index: 3;
  background: #333;
  background-image: -webkit-gradient(linear, left top, right top, from(#111), color-stop(0.4, #777), color-stop(0.5, #888), color-stop(0.6, #777), to(#111));
  background-image: -webkit-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -moz-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -ms-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -o-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: linear-gradient(to right, #111, #777 40%, #888, #777 60%, #111);
  border-radius: 0;
}
.aq_wrap_6 .switch-handle-top {
  width: 5em;
  height: 5em;
  position: absolute;
  top: 8.5em;
  left: 0.8em;
  z-index: 4;
  background-color: #555;
  background-image: -webkit-gradient(linear, left top, right top, from(#5F5F5F), to(#878787));
  background-image: -webkit-linear-gradient(left, #5F5F5F, #878787);
  background-image: -moz-linear-gradient(left, #5F5F5F, #878787);
  background-image: -ms-linear-gradient(left, #5F5F5F, #878787);
  background-image: -o-linear-gradient(left, #5F5F5F, #878787);
  background-image: linear-gradient(to right, #5F5F5F, #878787);
  border-top: 0.2em solid #AEB2B3;
  border-radius: 2.5em;
}
.aq_wrap_6 .switch-handle-bottom {
  width: 3.6em;
  height: 3.6em;
  position: absolute;
  top: 4.7em;
  left: 1.5em;
  z-index: 3;
  background: #333;
  background-image: -webkit-gradient(linear, left top, right top, from(#111), color-stop(0.4, #777), color-stop(0.5, #888), color-stop(0.6, #777), to(#111));
  background-image: -webkit-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -moz-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -ms-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -o-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: linear-gradient(to right, #111, #777 40%, #888, #777 60%, #111);
  border-top: 0.2em solid #141414;
  border-radius: 1.8em;
}
.aq_wrap_6 .switch-handle-base {
  width: 4.2em;
  height: 4.2em;
  position: absolute;
  top: 3.8em;
  left: 1.2em;
  z-index: 2;
  border-top: 0.2em solid rgba(255,255,255,0.35);
  border-radius: 2.1em;
  -webkit-box-shadow: 0 0 0.5em rgba(0,0,0,0.8) inset;
  -moz-box-shadow: 0 0 0.5em rgba(0,0,0,0.8) inset;
  box-shadow: 0 0 0.5em rgba(0,0,0,0.8) inset;
}
.aq_wrap_6 .switch-led {
  position: absolute;
  left: 2em;
  border-radius: 1.4em;
}
.aq_wrap_6 .switch-led-border {
  border: 0.2em solid black;
  border-radius: 1.3em;
}
.aq_wrap_6 .switch-led-light {
  border-radius: 1.1em;
  -webkit-box-shadow: 0 0 0.5em rgba(255,255,255,0.5) inset;
  -moz-box-shadow: 0 0 0.5em rgba(255,255,255,0.5) inset;
  box-shadow: 0 0 0.5em rgba(255,255,255,0.5) inset;
}
.aq_wrap_6 .switch-led-glow {
  width: 2em;
  height: 2em;
  position: relative;
  border-radius: 1em;
}
.aq_wrap_6 .switch-led-glow:before {
  content: '';
  display: block;
  width: 0.6em;
  height: 0.6em;
  position: absolute;
  top: 0.3em;
  left: 0.7em;
  background: rgba(255,255,255,0.2);
  border-radius: 0.3em;
  -webkit-box-shadow: 0 0 1em rgba(255,255,255,0.75);
  -moz-box-shadow: 0 0 1em rgba(255,255,255,0.75);
  box-shadow: 0 0 1em rgba(255,255,255,0.75);
}
.aq_wrap_6 .switch-led-glow:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.2;
  filter: alpha(opacity=20);
  border: 1em solid #fff;
  border-color: transparent #fff transparent #fff;
  border-radius: 1em;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.aq_wrap_6 .switch-led:after {
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  color: #666;
  font-family: arial, verdana, sans-serif;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0.1em rgba(0,0,0,0.7);
}
.aq_wrap_6 .switch-led-green:after {
  content: 'ON';
  top: -1.8em;
}
.aq_wrap_6 .switch-led-red:after {
  content: 'OFF';
  bottom: -1.8em;
}
.aq_wrap_6 .switch-led-green {
  top: -5em;
  border-top: 0.1em solid rgba(0,161,75,0.5);
  border-bottom: 0.1em solid rgba(255,255,255,0.25);
}
.aq_wrap_6 .switch-led-green .switch-led-light {
  background: rgb(0,161,75);
  border: 0.1em solid rgb(0,104,56);
}
.aq_wrap_6 .switch-led-red {
  bottom: -5em;
  border-top: 0.1em solid rgba(237,28,36,0.2);
  border-bottom: 0.1em solid rgba(255,255,255,0.25);
  -webkit-box-shadow: 0 0 3em rgb(237,28,36);
  -moz-box-shadow: 0 0 3em rgb(237,28,36);
  box-shadow: 0 0 3em rgb(237,28,36);
}
.aq_wrap_6 .switch-led-red .switch-led-light {
  background: rgb(237,28,36);
  border: 0.1em solid rgb(161,30,45);
}
.aq_wrap_6 .switch-led-red .switch-led-glow {
  background: #fff;
  background: rgba(255, 255, 255, 0.3);
  filter: alpha(opacity=30);
}
.aq_wrap_6 .switch input:checked~.switch-handle-left, .aq_wrap_6 .switch input:checked~.switch-handle-right {
  top: 1.5em;
  border-bottom: 0;
  border-top: 4.5em solid #111;
}
.aq_wrap_6 .switch input:checked~.switch-handle {
  top: 1.5em;
}
.aq_wrap_6 .switch input:checked~.switch-handle-top {
  top: -1em;
  border-top: 0;
  border-bottom: 0.2em solid #AEB2B3;
}
.aq_wrap_6 .switch input:checked~.switch-handle-bottom {
  top: 4.2em;
  border-top: 0;
  border-bottom: 0.2em solid #141414;
}
.aq_wrap_6 .switch input:checked~.switch-handle-base {
  top: 4.5em;
  border-top: 0;
  border-bottom: 0.2em solid rgba(255,255,255,0.35);
}
.aq_wrap_6 .switch input:checked~.switch-led-green {
  -webkit-box-shadow: 0 0 3em rgb(0,161,75);
  -moz-box-shadow: 0 0 3em rgb(0,161,75);
  box-shadow: 0 0 3em rgb(0,161,75);
}
.aq_wrap_6 .switch input:checked~.switch-led-green .switch-led-glow {
  background: #fff;
  background: rgba(255, 255, 255, 0.4);
  filter: alpha(opacity=40);
}
.aq_wrap_6 .switch input:checked~.switch-led-red {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.aq_wrap_6 .switch input:checked~.switch-led-red .switch-led-glow {
  background: rgba(255, 255, 255, 0);
  filter: alpha(opacity=0);
}
.aq_wrap_6 #switchwhite {
  visibility: hidden;
  clip: rect(0 0 0 0);
  position: absolute;
  left: 9999px;
}
.aq_wrap_6 .switchwhite {
  display: block;
  width: 130px;
  height: 60px;
  margin: 70px auto;
  position: relative;
  background: #ced8da;
 
  background: -moz-linear-gradient(left,  #ced8da 0%, #d8e0e3 29%, #ccd4d7 34%, #d4dcdf 62%, #fff9f4 68%, #e1e9ec 74%, #b7bfc2 100%);
 
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,#ced8da), color-stop(29%,#d8e0e3), color-stop(34%,#ccd4d7), color-stop(62%,#d4dcdf), color-stop(68%,#fff9f4), color-stop(74%,#e1e9ec), color-stop(100%,#b7bfc2));
 
  background: -webkit-linear-gradient(left,  #ced8da 0%,#d8e0e3 29%,#ccd4d7 34%,#d4dcdf 62%,#fff9f4 68%,#e1e9ec 74%,#b7bfc2 100%);
 
  background: -o-linear-gradient(left,  #ced8da 0%,#d8e0e3 29%,#ccd4d7 34%,#d4dcdf 62%,#fff9f4 68%,#e1e9ec 74%,#b7bfc2 100%);
 
  background: -ms-linear-gradient(left,  #ced8da 0%,#d8e0e3 29%,#ccd4d7 34%,#d4dcdf 62%,#fff9f4 68%,#e1e9ec 74%,#b7bfc2 100%);
 
  background: linear-gradient(to right,  #ced8da 0%,#d8e0e3 29%,#ccd4d7 34%,#d4dcdf 62%,#fff9f4 68%,#e1e9ec 74%,#b7bfc2 100%);
 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ced8da', endColorstr='#b7bfc2',GradientType=1 );
 
  transition: all 0.2s ease-out;
  cursor: pointer;
  border-radius: 0.35em;
  box-shadow: 0 0 1px 2px rgba(0,0,0,0.7),
    inset 0 2px 0 rgba(255,255,255,0.6),
    inset 0 -1px 0 1px rgba(0,0,0,0.3),
    0 8px 10px rgba(0,0,0,0.15);
}
.aq_wrap_6 .switchwhite:before {
  display: block;
  position: absolute;
  left: -35px;
  right: -35px;
  top: -25px;
  bottom: -25px;
  z-index: -2;
  content: "";
  border-radius: 0.4em;
  background: #d5dde0;
  background: linear-gradient(#d7dfe2, #bcc7cd);
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.6),
    inset 0 -1px 1px 1px rgba(0,0,0,0.3),
    0 0 8px 2px rgba(0,0,0,0.2),
    0 2px 4px 2px rgba(0,0,0,0.1);
  pointer-events: none;
  transition: all 0.2s ease-out;
}
.aq_wrap_6 .switchwhite:after {
  content: "";
  position: absolute;
  right: -25px;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #788b91;
  margin-top: -8px;
  z-index: -1;
  box-shadow: inset 0 -1px 8px rgba(0,0,0,0.7),
    inset 0 -2px 2px rgba(0,0,0,0.2),
    0 1px 0 white,
    0 -1px 0 rgba(0,0,0,0.5),
    -47px 32px 15px 13px rgba(0,0,0,0.25);
}
.aq_wrap_6 #switchwhite:checked ~ .switchwhite {
  background: #b7bfc2;
 
  background: -moz-linear-gradient(left, #b7bfc2 0%, #e1e9ec 26%, #fff9f4 32%, #d4dcdf 38%, #ccd4d7 66%, #d8e0e3 71%, #ced8da 100%);
 
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,#b7bfc2), color-stop(26%,#e1e9ec), color-stop(32%,#fff9f4), color-stop(38%,#d4dcdf), color-stop(66%,#ccd4d7), color-stop(71%,#d8e0e3), color-stop(100%,#ced8da));
 
  background: -webkit-linear-gradient(left, #b7bfc2 0%,#e1e9ec 26%,#fff9f4 32%,#d4dcdf 38%,#ccd4d7 66%,#d8e0e3 71%,#ced8da 100%);
 
  background: -o-linear-gradient(left, #b7bfc2 0%,#e1e9ec 26%,#fff9f4 32%,#d4dcdf 38%,#ccd4d7 66%,#d8e0e3 71%,#ced8da 100%);
 
  background: -ms-linear-gradient(left, #b7bfc2 0%,#e1e9ec 26%,#fff9f4 32%,#d4dcdf 38%,#ccd4d7 66%,#d8e0e3 71%,#ced8da 100%);
 
  background: linear-gradient(to right, #b7bfc2 0%,#e1e9ec 26%,#fff9f4 32%,#d4dcdf 38%,#ccd4d7 66%,#d8e0e3 71%,#ced8da 100%);
 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7bfc2', endColorstr='#ced8da',GradientType=1 );
}
.aq_wrap_6 #switchwhite:checked ~ .switchwhite:after {
  background: #b1ffff;
  box-shadow: inset 0 -1px 8px rgba(0,0,0,0.7),
    inset 0 -2px 2px rgba(0,0,0,0.2),
    0 1px 0 white,
    0 -1px 0 rgba(0,0,0,0.5),
    -110px 32px 15px 13px rgba(0,0,0,0.25);
}
      `}),u.jsx("div",{className:"aq_wrap_6",dangerouslySetInnerHTML:{__html:`<span className="switch">
	<span className="switch-border1">
		<span className="switch-border2">
			<input checked="" type="checkbox" id="switch1" />
			<label htmlFor="switch1"></label>
			<span className="switch-top"></span>
			<span className="switch-shadow"></span>
			<span className="switch-handle"></span>
			<span className="switch-handle-left"></span>
			<span className="switch-handle-right"></span>
			<span className="switch-handle-top"></span>
			<span className="switch-handle-bottom"></span>
			<span className="switch-handle-base"></span>
			<span className="switch-led switch-led-green">
				<span className="switch-led-border">
					<span className="switch-led-light">
						<span className="switch-led-glow"></span>
					</span>
				</span>
			</span>
			<span className="switch-led switch-led-red">
				<span className="switch-led-border">
					<span className="switch-led-light">
						<span className="switch-led-glow"></span>
					</span>
				</span>
			</span>
		</span>
	</span>
</span>`}})]}),Zg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_7 .checkbox-wrap {
  display: block;
  width: 106px;
  height: 51px;
  position: relative;
  margin: 1px auto;
}
.aq_wrap_7 #slide {
  display: block;
  width: 106px;
  height: 51px;
  margin: 0px;
  padding: 0px;
  position: absolute;
  z-index: 2;
  opacity: 0;
}
.aq_wrap_7 #slide + label {
  display: block;
  width: 105px;
  height: 50px;
  margin: 0px;
  padding: 0px;
  z-index: 1;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
}
.aq_wrap_7 #pinkliquid {
  width: 88px;
  height: 36px;
  border-radius: 18px;
  margin: 7px 0 0 9px;
  overflow: hidden;
  background: #b4264a;
  background: linear-gradient(to bottom, #fe0744 0%, #ff0460 50%, #ff0082 100%);
  box-shadow: 0px 0px 9px 0px #ff1e00;
}
.aq_wrap_7 .shine {
  width: 100%;
  background: rgba(255, 255, 255, 0.23);
  margin: 6px 0 4px 0;
  transition: all 300ms ease;
}
.aq_wrap_7 .shine#shine-one {
  height: 12px;
}
.aq_wrap_7 .shine#shine-two {
  height: 3px;
}
.aq_wrap_7 #bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.aq_wrap_7 #bubbles i {
  display: block;
  border-radius: 20px;
  background: #3a3236;
  position: absolute;
  transition: all 600ms ease;
}
.aq_wrap_7 i#a {
  width: 4px;
  height: 4px;
  top: 35px;
  left: 19px;
}
.aq_wrap_7 i#b {
  width: 5px;
  height: 5px;
  top: 24px;
  left: 30px;
}
.aq_wrap_7 i#c {
  width: 3px;
  height: 3px;
  top: 15px;
  left: 26px;
}
.aq_wrap_7 i#d {
  width: 6px;
  height: 6px;
  top: 20px;
  left: 40px;
}
.aq_wrap_7 i#e {
  width: 5px;
  height: 5px;
  top: 30px;
  left: 33px;
}
.aq_wrap_7 i#f {
  width: 5px;
  height: 5px;
  top: 30px;
  right: 33px;
}
.aq_wrap_7 i#g {
  width: 6px;
  height: 6px;
  top: 20px;
  right: 40px;
}
.aq_wrap_7 i#h {
  width: 3px;
  height: 3px;
  top: 15px;
  right: 26px;
}
.aq_wrap_7 i#i {
  width: 4px;
  height: 4px;
  top: 35px;
  right: 19px;
}
.aq_wrap_7 i#j {
  width: 5px;
  height: 5px;
  top: 24px;
  right: 30px;
}
.aq_wrap_7 #circle {
  width: 37px;
  height: 37px;
  border-radius: 19px;
  background: #191919;
  position: absolute;
  top: 7px;
  left: 9px;
  border-right: 1px solid #e3006f;
  box-shadow: inset 0px 0px 10px 0px rgba(255, 255, 255, 0.24),
    0px 3px 4px 0px #000000;
  transition: all 300ms ease;
}
.aq_wrap_7 #inner-circle {
  width: 31px;
  height: 31px;
  margin: 3px;
  border-radius: 16px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 1, 122, 0.2) 100%
  );
}
.aq_wrap_7 #slide:checked + label #circle {
  left: 60px;
  border-right: 1px solid transparent;
  border-left: 1px solid #e3006f;
  background-color: #c27098;
}
.aq_wrap_7 #slide:checked + label #inner-circle {
  background: linear-gradient(
    to right,
    rgba(255, 1, 122, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
.aq_wrap_7 #slide:checked + label i#a {
  width: 4px;
  height: 4px;
  top: 26px;
  left: 19px;
}
.aq_wrap_7 #slide:checked + label i#b {
  width: 5px;
  height: 5px;
  top: 24px;
  left: 30px;
}
.aq_wrap_7 #slide:checked + label i#c {
  width: 3px;
  height: 3px;
  top: 24px;
  left: 26px;
}
.aq_wrap_7 #slide:checked + label i#d {
  width: 6px;
  height: 6px;
  top: 29px;
  left: 40px;
}
.aq_wrap_7 #slide:checked + label i#e {
  width: 5px;
  height: 5px;
  top: 21px;
  left: 33px;
}
.aq_wrap_7 #slide:checked + label i#f {
  width: 5px;
  height: 5px;
  top: 26px;
  right: 33px;
}
.aq_wrap_7 #slide:checked + label i#g {
  width: 6px;
  height: 6px;
  top: 28px;
  right: 40px;
}
.aq_wrap_7 #slide:checked + label i#h {
  width: 3px;
  height: 3px;
  top: 23px;
  right: 26px;
}
.aq_wrap_7 #slide:checked + label i#i {
  width: 4px;
  height: 4px;
  top: 25px;
  right: 19px;
}
.aq_wrap_7 #slide:checked + label i#j {
  width: 5px;
  height: 5px;
  top: 30px;
  right: 30px;
}
.aq_wrap_7 #slide:checked + label .shine#shine-one {
  height: 12px;
  margin-top: 12px;
}
.aq_wrap_7 #slide:checked + label .shine#shine-two {
  height: 3px;
  margin-top: -20px;
}
      `}),u.jsx("div",{className:"aq_wrap_7",dangerouslySetInnerHTML:{__html:`<div className="checkbox-wrap">
  <input name="slide" id="slide" type="checkbox" />
  <label htmlFor="slide">
    <div id="pinkliquid">
      <div id="shine-one" className="shine"></div>
      <div id="shine-two" className="shine"></div>
      <div id="bubbles"></div>
    </div>
    <div id="circle">
      <div id="inner-circle"></div>
      <div id="inner-circle-two"></div>
    </div>
  </label>
</div>`}})]}),Lg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_8 label, .aq_wrap_8 .bubble {
  display: block;
  -webkit-tap-highlight-color: transparent;
}
.aq_wrap_8 label {
  animation: float74 4s ease-in-out infinite;
}
.aq_wrap_8 .bubble, .aq_wrap_8 .bubble:before, .aq_wrap_8 .bubble:after {
  transition-duration: 0.2s;
}
.aq_wrap_8 .bubble, .aq_wrap_8 .bubble:after {
  border-radius: 50%;
}
.aq_wrap_8 .bubble {
  background-image: radial-gradient(8% 8% at 22% 28%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 23% 27%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 24% 26%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 25% 25%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 26% 24%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 27% 23%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 28% 22%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%);
  box-shadow: 0 -0.06em 0.1em hsl(0,90%,100%) inset,
		0 -0.15em 0.4em hsl(0,90%,45%) inset,
		0 0.05em 0.05em hsl(0,90%,45%) inset,
		0.05em 0 0.1em hsl(0,90%,100%) inset,
		-0.05em 0 0.1em hsl(0,90%,100%) inset,
		0 0.1em 0.4em hsl(0,90%,60%) inset;
  cursor: pointer;
  position: relative;
  width: 3em;
  height: 3em;
  transform-style: preserve-3d;
  transition-property: box-shadow, transform, width, height;
  transition-timing-function: ease-in-out, ease-in-out, var(--bubbleTiming), var(--bubbleTiming);
  will-change: transform;
  -webkit-appearance: none;
  appearance: none;
  z-index: 0;
}
.aq_wrap_8 .bubble:before, .aq_wrap_8 .bubble:after {
  content: "";
  display: block;
  position: absolute;
  transition-timing-function: var(--bubbleTiming);
}
.aq_wrap_8 .bubble:before {
  border-radius: 0.75em;
  box-shadow: 0 0 0 0.5em hsl(0,0%,100%) inset;
  filter: drop-shadow(0.6em 0.6em 4px hsla(0,0%,0%,0.2));
  top: 50%;
  left: 50%;
  width: 1.5em;
  height: 1.5em;
  transform: translate3d(-50%,-50%,-1px);
  z-index: -1;
}
.aq_wrap_8 .bubble:after {
  background: radial-gradient(100% 100% at center,hsla(0,0%,0%,0) 35%,hsla(0,0%,0%,0.2) 48%,hsla(0,0%,0%,0) 50%);
  filter: blur(4px);
  top: 0.6em;
  left: 0.6em;
  width: 100%;
  height: 100%;
  transform: translate3d(0,0,-1px);
  z-index: -2;
}
.aq_wrap_8 .bubble:focus, .aq_wrap_8 .bubble:hover {
  transform: scale(1.1);
  outline: none;
}
.aq_wrap_8 .bubble:focus:active, .aq_wrap_8 .bubble:hover:active {
  width: 3.6em;
  height: 2.4em;
}
.aq_wrap_8 .bubble:focus:before, .aq_wrap_8 .bubble:hover:before {
  filter: drop-shadow(0.75em 0.75em 4px hsla(0,0%,0%,0.2));
}
.aq_wrap_8 .bubble:focus:after, .aq_wrap_8 .bubble:hover:after {
  transform: translate3d(0.15em,0.15em,-1px);
}
.aq_wrap_8 .bubble:checked {
  box-shadow: 0 -0.06em 0.1em hsl(120,90%,100%) inset,
		0 -0.15em 0.4em hsl(120,90%,45%) inset,
		0 0.05em 0.05em hsl(120,90%,45%) inset,
		0.05em 0 0.1em hsl(120,90%,100%) inset,
		-0.05em 0 0.1em hsl(120,90%,100%) inset,
		0 0.1em 0.4em hsl(120,90%,60%) inset;
}
.aq_wrap_8 .bubble:checked:before {
  border-radius: 0.25em;
  width: 0.5em;
}


@media (prefers-reduced-motion: reduce) {
  label {
    animation: none;
  }
.aq_wrap_8 .bubble, .aq_wrap_8 .bubble:before, .aq_wrap_8 .bubble:after {
  transition-duration: 0s;
}
.aq_wrap_8 .bubble:focus, .aq_wrap_8 .bubble:hover {
  transform: scale(1);
}
.aq_wrap_8 .bubble:focus:active, .aq_wrap_8 .bubble:hover:active {
  width: 3em;
    height: 3em;
}
.aq_wrap_8 .bubble:focus:before, .aq_wrap_8 .bubble:hover:before {
  filter: drop-shadow(0.6em 0.6em 4px hsla(0,0%,0%,0.2));
}
.aq_wrap_8 .bubble:focus:after, .aq_wrap_8 .bubble:hover:after {
  transform: translate3d(0,0,-1px);
}


@keyframes float74 {
  from, to {
    transform: translate(0,3%);
  }
.aq_wrap_8 25% {
  transform: translate(-3%,0);
}
.aq_wrap_8 50% {
  transform: translate(0,-3%);
}
.aq_wrap_8 75% {
  transform: translate(3%,0);
}
      `}),u.jsx("div",{className:"aq_wrap_8",dangerouslySetInnerHTML:{__html:'<label><input value="on" name="dummy" type="checkbox" className="bubble" /></label>'}})]}),Gg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_9 .switch {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.8em;
  height: 3.8em;
}
.aq_wrap_9 .torch {
  margin-top: 0.9em;
  margin-left: 0.95em;
  width: 30px;
  height: 30px;
  transform: rotate(-45deg);
}
.aq_wrap_9 .slider .b {
  position: relative;
  top: -3.3em;
  transform: rotate(270deg);
}
.aq_wrap_9 .slider .bling_85 {
  stroke: #fff;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 3;
  stroke-dashoffset: 15;
  transition: all 0.3s ease;
}
.aq_wrap_9 .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.aq_wrap_9 .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .4s;
  border-radius: 50%;
  background-color: rgba(116, 115, 115, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.aq_wrap_9 .chk_85:checked + .slider {
  animation: tap 0.3s linear forwards;
}
.aq_wrap_9 .chk_85:checked + .slider .bling_85 {
  animation: bling_8561328 0.3s linear forwards;
  animation-delay: 0.2s;
}
.aq_wrap_9 .chk_85:checked + .slider {
  background-color: #FFA133;
}
.aq_wrap_9 .chk_85:focus + .slider {
  box-shadow: 0 0 1px #FFA133;
}


@keyframes bling_8561328 {
  50% {
    stroke-dasharray: 3;
    stroke-dashoffset: 12;
  }

  100% {
    stroke-dasharray: 3;
    stroke-dashoffset: 9;
  }
}

@keyframes tap {
  50% {
    scale: 0.9;
  }

  100% {
    scale: 1;
  }
}

      `}),u.jsx("div",{className:"aq_wrap_9",dangerouslySetInnerHTML:{__html:`<label className="switch">
  <input className="chk_85" type="checkbox" />
  <span className="slider">
    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" className="torch">
    <path d="M 63.85,54.65 Q 62.77,54.13 61.88,53.31 Q 54.13,46.12 46.31,37.69 Q 43.88,35.06 44.29,31.53 Q 44.51,29.56 46.54,25.87 Q 56.15,8.39 59.06,3.56 Q 60.59,1.03 63.83,2.41 Q 67.73,4.07 71.11,6.55 Q 72.85,7.82 77.51,11.86 Q 89.11,21.92 96.94,34.06 Q 100.09,38.95 95.24,41.73 Q 83.77,48.31 72.16,54.64 Q 68.24,56.77 63.85,54.65 Z" fill="#ffffff"></path>
    <path d="M 14.03,66.29 Q 27.40,51.66 40.57,37.33 A 0.54,0.54 52.1 0 1 41.44,37.44 Q 43.25,40.72 45.58,43.04 Q 47.66,45.11 47.71,45.17 Q 54.67,52.58 62.60,58.93 A 0.44,0.43 43.0 0 1 62.63,59.59 Q 42.87,77.87 22.77,95.78 Q 20.75,97.58 19.20,97.93 Q 16.72,98.49 14.81,96.94 Q 6.88,90.47 2.81,84.94 Q 1.47,83.11 2.03,80.84 Q 2.37,79.43 4.04,77.51 Q 8.97,71.84 14.03,66.29 ZM 42.9269,57.1766 A 3.76 3.76 0.0 0 0 37.6102,57.0930 L 33.1721,61.3938 A 3.76 3.76 0.0 0 0 33.0886,66.7106 L 33.3531,66.9834 A 3.76 3.76 0.0 0 0 38.6698,67.0670 L 43.1079,62.7662 A 3.76 3.76 0.0 0 0 43.1914,57.4494 L 42.9269,57.1766 Z" fill="#ffffff"></path>
    </svg>
    <svg className="b" width="100%" height="50%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 20L31 22" className="bling_85"></path>
    <path d="M31.5 15H34.5" className="bling_85"></path>
    <path d="M29 10L31 8" className="bling_85"></path>
    </svg>
  </span>
</label>`}})]}),Qg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_10 .main__heading {
  font-weight: 600;
  font-size: 2.25em;
  margin-bottom: 0.75em;
  text-align: center;
  color: #eceff1;
}
.aq_wrap_10 .cards {
  position: relative;
}
.aq_wrap_10 .card {
  --flow-space: 0.5em;
  --hsl: var(--hue), var(--saturation), var(--lightness);
  flex: 1 1 14rem;
  padding: 1.5em 2em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  align-items: start;
  gap: 1.25em;
  color: #eceff1;
  background-color: #2b2b2b;
  border: 1px solid #eceff133;
  border-radius: 15px;
}
.aq_wrap_10 .card:nth-child(1) {
  --hue: 165;
  --saturation: 82.26%;
  --lightness: 51.37%;
}
.aq_wrap_10 .card__bullets {
  line-height: 1.4;
}
.aq_wrap_10 .card__heading {
  font-size: 1.05em;
  font-weight: 600;
}
.aq_wrap_10 .card__price {
  font-size: 1.75em;
  font-weight: 700;
}
.aq_wrap_10 .flow > * + * {
  margin-top: var(--flow-space, 1.25em);
}
.aq_wrap_10 .cta {
  display: block;
  align-self: end;
  margin: 1em 0 0.5em 0;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: transparent;
  outline: 1px solid white;
  padding: 0.7em;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
}
.aq_wrap_10 .card:hover {
  --lightness: 80%;
  background: #ffffff80;
  color: #000;
  outline: 1px solid rgb(255, 255, 255);
  box-shadow: inset 0 0 80px whitesmoke, inset 20px 0 80px rgba(255, 0, 255, 0.747),
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
  transition: all ease-in-out 0.3s;
}
.aq_wrap_10 .card:hover > .cta {
  outline: none;
  background-color: #0d0d0d;
}
      `}),u.jsx("div",{className:"aq_wrap_10",dangerouslySetInnerHTML:{__html:`<div className="cards__inner">
  <div className="cards__card card">
    <p className="card__heading">Free Plan</p>
    <p className="card__price">$0/month</p>
    <ul className="card_bullets flow" role="list">
      <li>Access to all features</li>
      <li>Unlimited storage</li>
      <li>No ads</li>
    </ul>
    <a className="card__cta cta" href="#basic">Get Started</a>
  </div>
  <div className="overlay cards__inner"></div>
</div>`}})]}),Vg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_11 .card {
  position: relative;
  width: 190px;
  height: 190px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.aq_wrap_11 .card > div {
  margin: auto auto;
}
.aq_wrap_11 .card::before {
  content: "";
  position: absolute;
  inset: 0;
  left: -5px;
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #fff01c 0%, #40c9ff 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.aq_wrap_11 .card::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fff01c 0%, #40c9ff 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}
.aq_wrap_11 .heading {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
}
.aq_wrap_11 .card p:not(.heading) {
  font-size: 14px;
}
.aq_wrap_11 .card p:last-child {
  color: #e81cff;
  font-weight: 600;
}
.aq_wrap_11 .card:hover::after {
  filter: blur(30px);
}
.aq_wrap_11 .card:hover::before {
  transform: rotate(-90deg) scaleX(1) scaleY(1);
}
.aq_wrap_11 .card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}
.aq_wrap_11 .card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
}
      `}),u.jsx("div",{className:"aq_wrap_11",dangerouslySetInnerHTML:{__html:`<div className="card">
  <div>
    <p className="heading">Popular this month</p>
    <p>Aqua Sphere</p>
    <p>Deep Sea</p>
  </div>

  <button className="card-button">More Info</button>
</div>`}})]}),Xg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_12 .card {
  position: relative;
  margin: 0 auto;
  height: fit-content;
  padding: 20px;
  background-image: linear-gradient(
    45deg,
    blueviolet,
    black,
    rgb(116, 214, 247)
  );
  background-color: #121212;
  border-radius: 10px;
  box-shadow: 5px -5px 25px rgb(116, 214, 247), -5px 5px 25px blueviolet;
  transition: all 0.3s ease;
}
.aq_wrap_12 .card:hover {
  box-shadow: 0px 5px 10px rgb(116, 214, 247), 0px -5px 10px blueviolet;
  transform: scale(1.05);
  background-size: 0 0;
}
.aq_wrap_12 .card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.8) 0%,
    rgb(138, 43, 226) 15%,
    rgba(138, 79, 226, 0.75) 35%,
    rgba(138, 43, 226, 0.5) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  border-radius: 10px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.aq_wrap_12 .card:hover::before {
  opacity: 1;
  animation: space-animation 25s infinite alternate, sparkle 1.5s infinite;
}


@keyframes space-animation {
  0%,
  100% {
    background-position: -10%;
  }
.aq_wrap_12 50% {
  background-position: 110%;
}
.aq_wrap_12 @keyframes sparkle {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

.image {
  width: 100%;
  max-width: 190px;
  display: block;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  transition: rotate 1s ease, scale 1s ease;
  rotate: -70deg;
  animation: float 10s ease infinite;
  scale: 1.4;
  z-index: -1;
}
.aq_wrap_12 .card:hover .image {
  rotate: 70deg;
  scale: 1.05;
}
.aq_wrap_12 .card:hover .image:hover {
  scale: 1.15;
}


@keyframes float {
  0%,
  100% {
    transform: translateX(0);
  }
.aq_wrap_12 50% {
  transform: translateX(-20px);
}
.aq_wrap_12 .heading {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #f0f0f0;
  transform: translateY(-30px);
  transition: all 0.3s ease;
}
.aq_wrap_12 .heading:hover {
  transform: translateY(-40px);
}
.aq_wrap_12 .card:hover .heading {
  color: rgb(116, 214, 247);
}
.aq_wrap_12 .icons {
  display: flex;
  justify-content: space-between;
}
.aq_wrap_12 .icons a {
  text-decoration: none;
  color: #f0f0f0;
  transition: transform 0.3s ease;
}
.aq_wrap_12 .card:hover a {
  color: rgb(116, 214, 247);
}
.aq_wrap_12 .icons .instagram:hover {
  color: #e4405f;
}
.aq_wrap_12 .instagram:hover {
  animation: wiggle 0.5s ease infinite;
}
.aq_wrap_12 @keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.icons .x:hover {
  color: #14171a;
}
.aq_wrap_12 .x:hover {
  animation: pulse 0.5s ease infinite;
}
.aq_wrap_12 @keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.icons .discord:hover {
  color: #7289da;
}
.aq_wrap_12 .discord:hover {
  animation: bounce 0.5s ease infinite;
}


@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
}


      `}),u.jsx("div",{className:"aq_wrap_12",dangerouslySetInnerHTML:{__html:`<div className="card">
  <img
    className="image"
    alt=""
    src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
  />
  <div className="heading">We're on Social Media</div>
  <div className="icons">
    <a className="instagram" href="https://www.instagram.com/uiverse.io/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 25"
        height="25"
        width="24"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          d="M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z"
        ></path>
      </svg>
    </a>
    <a className="x" href="https://twitter.com/uiverse_io">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="24"
        width="24"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          d="M19.8003 3L13.5823 10.105L19.9583 19.106C20.3923 19.719 20.6083 20.025 20.5983 20.28C20.594 20.3896 20.5657 20.4969 20.5154 20.5943C20.4651 20.6917 20.3941 20.777 20.3073 20.844C20.1043 21 19.7293 21 18.9793 21H17.2903C16.8353 21 16.6083 21 16.4003 20.939C16.2168 20.8847 16.0454 20.7957 15.8953 20.677C15.7253 20.544 15.5943 20.358 15.3313 19.987L10.6813 13.421L4.64033 4.894C4.20733 4.281 3.99033 3.975 4.00033 3.72C4.00478 3.61035 4.03323 3.50302 4.08368 3.40557C4.13414 3.30812 4.20536 3.22292 4.29233 3.156C4.49433 3 4.87033 3 5.62033 3H7.30833C7.76333 3 7.99033 3 8.19733 3.061C8.38119 3.1152 8.55295 3.20414 8.70333 3.323C8.87333 3.457 9.00433 3.642 9.26733 4.013L13.5833 10.105M4.05033 21L10.6823 13.421"
        ></path>
      </svg>
    </a>
    <a className="discord" href="https://discord.gg/KD8ba2uUpT">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 25 25"
        height="25"
        width="25"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          d="M11.5989 6.5003H14.2919C14.3851 6.5003 14.4764 6.47427 14.5555 6.42515C14.6347 6.37603 14.6985 6.30577 14.7399 6.2223L15.4179 4.8543C15.4664 4.75358 15.5488 4.67313 15.6506 4.62706C15.7524 4.58098 15.8673 4.57222 15.9749 4.6023C16.6309 4.7903 18.0049 5.2433 19.1029 6.0003C22.9669 8.8973 22.6069 15.3903 22.5779 16.7603C22.5765 16.8444 22.5541 16.9269 22.5129 17.0003C20.5299 20.5003 17.0899 20.5003 17.0899 20.5003L15.9239 18.0743M15.9239 18.0743C16.4479 17.9163 17.0029 17.7253 17.6029 17.5003M15.9239 18.0743C13.4799 18.8093 11.7219 18.8083 9.27791 18.0733M13.5989 6.5003H10.9109C10.8179 6.50039 10.7266 6.47451 10.6475 6.42557C10.5683 6.37664 10.5044 6.30659 10.4629 6.2233L9.77991 4.8533C9.73146 4.75279 9.64925 4.6725 9.54762 4.62644C9.446 4.58038 9.33142 4.57148 9.22391 4.6013C8.56891 4.7893 7.19291 5.2433 6.09391 6.0003C2.23091 8.8973 2.59091 15.3903 2.61991 16.7603C2.62132 16.8445 2.64366 16.9269 2.68491 17.0003C4.66791 20.5003 8.10791 20.5003 8.10791 20.5003L9.27791 18.0733M9.27791 18.0733C8.75491 17.9163 8.19891 17.7253 7.59891 17.5003M10.6009 12.5003C10.6009 12.7655 10.4956 13.0199 10.308 13.2074C10.1205 13.3949 9.86612 13.5003 9.60091 13.5003C9.33569 13.5003 9.08134 13.3949 8.8938 13.2074C8.70626 13.0199 8.60091 12.7655 8.60091 12.5003C8.60091 12.2351 8.70626 11.9807 8.8938 11.7932C9.08134 11.6057 9.33569 11.5003 9.60091 11.5003C9.86612 11.5003 10.1205 11.6057 10.308 11.7932C10.4956 11.9807 10.6009 12.2351 10.6009 12.5003ZM16.6029 12.5003C16.6029 12.7655 16.4976 13.0199 16.31 13.2074C16.1225 13.3949 15.8681 13.5003 15.6029 13.5003C15.3377 13.5003 15.0833 13.3949 14.8958 13.2074C14.7083 13.0199 14.6029 12.7655 14.6029 12.5003C14.6029 12.2351 14.7083 11.9807 14.8958 11.7932C15.0833 11.6057 15.3377 11.5003 15.6029 11.5003C15.8681 11.5003 16.1225 11.6057 16.31 11.7932C16.4976 11.9807 16.6029 12.2351 16.6029 12.5003Z"
        ></path>
      </svg>
    </a>
  </div>
</div>`}})]}),Kg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_13 .card {
  background-color: #222;
  border: 10px solid rgb(161, 156, 116);
  padding: 30px;
  width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 9px 11px 1px rgb(0, 0, 0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}
.aq_wrap_13 .card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px,
    transparent 2px
  );

  opacity: 0.3;
  pointer-events: none;
  z-index: 2;
  animation: tv-static 0.2s infinite linear alternate;
}
.aq_wrap_13 .card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  background-size: 100% 2px, 3px 100%;
  animation: tv-flicker 0.15s infinite;
  z-index: 35;
  pointer-events: none;
  opacity: 0.5;
}
.aq_wrap_13 @keyframes tv-static {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.1;
  }
}

.eye-of-providence {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto 20px;
}
.aq_wrap_13 .triangle {
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-bottom: 190px solid rgb(198, 181, 113);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.3s ease;
}
.aq_wrap_13 .card:hover .triangle {
  transform: scale(1.05);
}
.aq_wrap_13 .eye {
  width: 90px;
  height: 50px;
  background: radial-gradient(circle at 30% 30%, #fff, #e6e6e6);
  border-radius: 50%;
  position: absolute;
  top: 90px;
  left: 65px;
  overflow: hidden;
  box-shadow: 0 0 0 10px rgb(115, 112, 92), 15px 15px 0 #000,
    inset -5px -5px 10px rgba(0, 0, 0, 0.2),
    inset 5px 5px 10px rgba(255, 255, 255, 0.3);
  z-index: 2;
  animation: blink 6s infinite cubic-bezier(0.76, 0, 0.24, 1);
}
.aq_wrap_13 .pupil {
  width: 16px;
  height: 16px;
  background: rgb(207, 19, 19);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, #000, #444);
  border: 2px solid #fff;
  position: absolute;
  top: 14px;
  left: 14px;
  box-shadow: inset 0 0 10px rgba(203, 4, 4, 0.2), 0 0 10px rgba(0, 0, 0, 0.5);
}


@keyframes blink {
  0%,
  90%,
  100% {
    height: 50px;
  }
.aq_wrap_13 92%, .aq_wrap_13 98% {
  height: 0px;
}


@keyframes blink {
  0%,
  92%,
  100% {
    transform: scaleY(1);
  }
.aq_wrap_13 94% {
  transform: scaleY(0.1);
}
.aq_wrap_13 .iris {
  width: 45px;
  height: 45px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 22px;
  animation: look-around 6s infinite;
  animation-timing-function: ease-in-out;
}


@keyframes look-around {
  0%,
  100% {
    transform: translate(-2, 10px) scale(1);
  }
.aq_wrap_13 25% {
  transform: translate(-18px, 10px) scale(1.1);
}
.aq_wrap_13 50% {
  transform: translate(0, 15px) scale(1.2);
}
.aq_wrap_13 75% {
  transform: translate(20px, 10px) scale(1.1);
}
.aq_wrap_13 .triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}
.aq_wrap_13 @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title {
  color: rgb(255, 255, 255);
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 28px;
  padding-bottom: 33px;
  text-shadow: 3px 3px #000;
  z-index: 3;
  position: relative;
  display: inline-block;
}
.aq_wrap_13 .title::before, .aq_wrap_13 .title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.aq_wrap_13 .title::before {
  left: 2px;
  text-shadow: -1px 0 red;
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}
.aq_wrap_13 .title::after {
  left: -2px;
  text-shadow: -1px 0 blue;
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}
.aq_wrap_13 @keyframes glitch-anim-1 {
  0% {
    clip: rect(30px, 9999px, 10px, 0);
  }
  100% {
    clip: rect(42px, 9999px, 78px, 0);
  }
}

@keyframes glitch-anim-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  100% {
    top: 1px;
    left: -1px;
    clip: rect(79px, 9999px, 16px, 0);
  }
}

.glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text::before, .aq_wrap_13 .glitch-text::after {
  content: "The Eye of Providence";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.aq_wrap_13 .glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 .glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 @keyframes glitch-anim {
  0% {
    clip: rect(34px, 9999px, 11px, 0);
  }
  5% {
    clip: rect(92px, 9999px, 89px, 0);
  }
  10% {
    clip: rect(6px, 9999px, 22px, 0);
  }
  15% {
    clip: rect(75px, 9999px, 4px, 0);
  }
  20% {
    clip: rect(6px, 9999px, 87px, 0);
  }
  25% {
    clip: rect(45px, 9999px, 98px, 0);
  }
  30% {
    clip: rect(39px, 9999px, 57px, 0);
  }
  35% {
    clip: rect(90px, 9999px, 65px, 0);
  }
  40% {
    clip: rect(7px, 9999px, 90px, 0);
  }
  45% {
    clip: rect(30px, 9999px, 88px, 0);
  }
  50% {
    clip: rect(76px, 9999px, 23px, 0);
  }
  55% {
    clip: rect(57px, 9999px, 35px, 0);
  }
  60% {
    clip: rect(85px, 9999px, 87px, 0);
  }
  65% {
    clip: rect(54px, 9999px, 12px, 0);
  }
  70% {
    clip: rect(32px, 9999px, 56px, 0);
  }
  75% {
    clip: rect(36px, 9999px, 98px, 0);
  }
  80% {
    clip: rect(12px, 9999px, 43px, 0);
  }
  85% {
    clip: rect(54px, 9999px, 76px, 0);
  }
  90% {
    clip: rect(43px, 9999px, 23px, 0);
  }
  95% {
    clip: rect(76px, 9999px, 87px, 0);
  }
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(75, 68, 68, 0.5);
  animation: scan 2.5s linear infinite;
  z-index: 4;
}
.aq_wrap_13 @keyframes scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

.triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}
.aq_wrap_13 @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title {
  color: rgb(255, 255, 255);
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 28px;
  text-shadow: 3px 3px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text::before, .aq_wrap_13 .glitch-text::after {
  content: "The Eye of Providence";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.aq_wrap_13 .glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 .glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 @keyframes glitch-anim {
  0% {
    clip: rect(34px, 9999px, 11px, 0);
  }
  5% {
    clip: rect(92px, 9999px, 89px, 0);
  }
  10% {
    clip: rect(6px, 9999px, 22px, 0);
  }
  15% {
    clip: rect(75px, 9999px, 4px, 0);
  }
  20% {
    clip: rect(6px, 9999px, 87px, 0);
  }
  25% {
    clip: rect(45px, 9999px, 98px, 0);
  }
  30% {
    clip: rect(39px, 9999px, 57px, 0);
  }
  35% {
    clip: rect(90px, 9999px, 65px, 0);
  }
  40% {
    clip: rect(7px, 9999px, 90px, 0);
  }
  45% {
    clip: rect(30px, 9999px, 88px, 0);
  }
  50% {
    clip: rect(76px, 9999px, 23px, 0);
  }
  55% {
    clip: rect(57px, 9999px, 35px, 0);
  }
  60% {
    clip: rect(85px, 9999px, 87px, 0);
  }
  65% {
    clip: rect(54px, 9999px, 12px, 0);
  }
  70% {
    clip: rect(32px, 9999px, 56px, 0);
  }
  75% {
    clip: rect(36px, 9999px, 98px, 0);
  }
  80% {
    clip: rect(12px, 9999px, 43px, 0);
  }
  85% {
    clip: rect(54px, 9999px, 76px, 0);
  }
  90% {
    clip: rect(43px, 9999px, 23px, 0);
  }
  95% {
    clip: rect(76px, 9999px, 87px, 0);
  }
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(75, 68, 68, 0.5);
  animation: scan 2.5s linear infinite;
  z-index: 4;
}
.aq_wrap_13 @keyframes scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

.triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}
.aq_wrap_13 @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title {
  color: rgb(255, 255, 255);
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 28px;
  text-shadow: 3px 3px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text::before, .aq_wrap_13 .glitch-text::after {
  content: "Always Watching";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.aq_wrap_13 .glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 .glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 .footer-text {
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  position: relative;
  z-index: 3;
}
.aq_wrap_13 .footer-text::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  width: 50px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateX(-50%);
}
      `}),u.jsx("div",{className:"aq_wrap_13",dangerouslySetInnerHTML:{__html:`<div className="card">
  <div data-text="The Eye of Providence" className="title">
    The Eye of Providence
  </div>
  <div className="eye-of-providence">
    <div className="triangle"></div>
    <div className="eye">
      <div className="eyelid"></div>
      <div className="iris">
        <div className="pupil"></div>
      </div>
    </div>
  </div>
  <div className="spotlight"></div>
  <div className="scan-line"></div>
  <div className="glitch-text">Always Watching</div>
  <div className="footer-text">Obey. Trust. Consume</div>
</div>`}})]}),Jg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`

      `}),u.jsx("div",{className:"aq_wrap_14",dangerouslySetInnerHTML:{__html:`<!-- From Deep Sea.io by ARUSH221617  - Tags: input -->
<form className="flex items-center max-w-lg mx-auto">
  <label className="sr-only" htmlFor="voice-search">Search</label>
  <div className="relative w-full">
    <div
      className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
    >
      <svg
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
      >
        <path
          d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
        ></path>
      </svg>
    </div>
    <input
      required=""
      placeholder="Search..."
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      id="voice-search"
      type="text"
    />
    <button
      className="absolute inset-y-0 end-0 flex items-center pe-3"
      type="button"
    >
      <svg
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      >
        <path
          d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
        ></path>
      </svg>
    </button>
  </div>
  <button
    className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="submit"
  >
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-4 h-4 me-2"
    >
      <path
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
      ></path></svg
    >Search
  </button>
</form>`}})]}),_1=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_15 .search-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.aq_wrap_15 .search-bar {
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    #333,
    #111
  ); 
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4), 0 0 20px #8839ff; 
  padding: 10px 15px;
}
.aq_wrap_15 .search-icon {
  color: #fff; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
}
.aq_wrap_15 .search-bar input {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  padding: 5px 10px;
  flex: 1;
  min-width: 200px;
}
.aq_wrap_15 .search-bar input::placeholder {
  color: #bbb;
}
.aq_wrap_15 .filter-button {
  background: transparent;
  border: none;
  outline: none;
  padding: 0 10px;
  cursor: pointer;
  color: #fff; 
  display: flex;
  align-items: center;
  justify-content: center;
}
      `}),u.jsx("div",{className:"aq_wrap_15",dangerouslySetInnerHTML:{__html:`<div className="search-bar-container">
  <div className="search-bar">
    <span className="search-icon">
      <svg
        height="20"
        width="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.53,20.47l-5-5a8,8,0,1,0-1.06,1.06l5,5a.75.75,0,0,0,1.06-1.06ZM4,10A6,6,0,1,1,10,16,6,6,0,0,1,4,10Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
    <input placeholder="Search..." type="text" />
    <button className="filter-button" type="button">
      <svg
        height="20"
        width="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3,5V7H4L10,13.92V19A1,1,0,0,0,11,20h2a1,1,0,0,0,1-1V13.92L20,7h1V5ZM12,17H12V13a1,1,0,0,0-.29-.71L6.41,7h11.18l-5.29,5.29A1,1,0,0,0,12,13Z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  </div>
</div>`}})]}),w1=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_16 .search {
  display: inline-block;
  position: relative;
}
.aq_wrap_16 .search input[type="text"] {
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.aq_wrap_16 .search button[type="submit"] {
  background-color: #4e99e9;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  right: 0;
  transition: .9s ease;
}
.aq_wrap_16 .search button[type="submit"]:hover {
  transform: scale(1.1);
  color: rgb(255, 255, 255);
  background-color: blue;
}
      `}),u.jsx("div",{className:"aq_wrap_16",dangerouslySetInnerHTML:{__html:`<div className="search">
        <input placeholder="Search..." type="text" />
        <button type="submit">Go</button>
      </div>`}})]}),N1=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_17 .input[type=text] {
  max-width: 180px;
  height: 20px;
  background-color: #fff;
  color: #242424;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  box-shadow: 0px 10px 20px -18px blue;
  border-bottom: 3px solid #0d14e9;
  transition: .10s ease;
}
.aq_wrap_17 .input[type=text]:hover {
  outline: 2px solid #0d14e9;
  max-width: 200px;
}
.aq_wrap_17 .input[type=text]:focus {
  border-bottom: 3px solid #0d14e9;
  border-radius: 5px 5px 2px 2px;
  transform: scale(1.1);
}
      `}),u.jsx("div",{className:"aq_wrap_17",dangerouslySetInnerHTML:{__html:'<input type="text" name="search" placeholder="Search For AnyThink.." className="input" />'}})]}),S1=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_18 #loader {
  width: 80px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -20px -40px;
  z-index: 1000;
}
.aq_wrap_18 .lightsaber {
  position: absolute;
  width: 4px;
  height: 12px;
  background-color: #666;
  border-radius: 1px;
  bottom: 0;
}
.aq_wrap_18 .lightsaber.ls-left {
  left: 0;
}
.aq_wrap_18 .lightsaber.ls-right {
  right: 0;
}
.aq_wrap_18 .lightsaber:before {
  position: absolute;
  content: ' ';
  display: block;
  width: 2px;
  height: 25px;
  max-height: 1px;
  left: 1px;
  top: 1px;
  background-color: #fff;
  border-radius: 1px;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
  -webkit-transform-origin: center top;
  -ms-transform-origin: center top;
  transform-origin: center top;
}
.aq_wrap_18 .lightsaber:after {
  position: absolute;
  content: ' ';
  display: block;
  width: 2px;
  height: 2px;
  left: 1px;
  top: 4px;
  background-color: #fff;
  border-radius: 50%;
}
.aq_wrap_18 .ls-particles {
  position: absolute;
  left: 42px;
  top: 10px;
  width: 1px;
  height: 5px;
  background-color: rgb(51, 51, 51, 0);
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
}
.aq_wrap_18 .lightsaber.ls-green:before {
  -webkit-animation: showlightgreen 2s ease-in-out infinite 1s;
  animation: showlightgreen 2s ease-in-out infinite 1s;
}
.aq_wrap_18 .lightsaber.ls-red:before {
  -webkit-animation: showlightred 2s ease-in-out infinite 1s;
  animation: showlightred 2s ease-in-out infinite 1s;
}
.aq_wrap_18 .lightsaber.ls-left {
  -webkit-animation: fightleft 2s ease-in-out infinite 1s;
  animation: fightleft 2s ease-in-out infinite 1s;
}
.aq_wrap_18 .lightsaber.ls-right {
  -webkit-animation: fightright 2s ease-in-out infinite 1s;
  animation: fightright 2s ease-in-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-1 {
  -webkit-animation: particles1 2s ease-out infinite 1s;
  animation: particles1 2s ease-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-2 {
  -webkit-animation: particles2 2s ease-out infinite 1s;
  animation: particles2 2s ease-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-3 {
  -webkit-animation: particles3 2s ease-out infinite 1s;
  animation: particles3 2s ease-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-4 {
  -webkit-animation: particles4 2s ease-out infinite 1s;
  animation: particles4 2s ease-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-5 {
  -webkit-animation: particles5 2s ease-out infinite 1s;
  animation: particles5 2s ease-out infinite 1s;
}


@-webkit-keyframes showlightgreen {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
  }
.aq_wrap_18 5% {
  box-shadow: 0 0 4px 2px #87c054;
}
.aq_wrap_18 10% {
  max-height: 22px;
}
.aq_wrap_18 80% {
  max-height: 22px;
}
.aq_wrap_18 85% {
  box-shadow: 0 0 4px 2px #87c054;
}
.aq_wrap_18 100% {
  max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
}


@-webkit-keyframes showlightred {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #f06363;
  }
.aq_wrap_18 20% {
  box-shadow: 0 0 4px 2px #f06363;
}
.aq_wrap_18 25% {
  max-height: 22px;
}
.aq_wrap_18 80% {
  max-height: 22px;
}
.aq_wrap_18 85% {
  box-shadow: 0 0 4px 2px #f06363;
}
.aq_wrap_18 100% {
  max-height: 0;
    box-shadow: 0 0 0 0 #f06363;
}


@-webkit-keyframes fightleft {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    left: 0;
    bottom: 0;
  }
.aq_wrap_18 30% {
  -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    bottom: 0;
}
.aq_wrap_18 40% {
  -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    left: 0;
    bottom: 2px;
}
.aq_wrap_18 45% {
  -webkit-transform: rotateZ(65deg);
    transform: rotateZ(65deg);
    left: 0;
}
.aq_wrap_18 65% {
  -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 30px;
    bottom: 10px;
}
.aq_wrap_18 95% {
  -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 0;
    bottom: 0;
}
.aq_wrap_18 100% {
  -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
    left: 0;
    bottom: 0;
}


@-webkit-keyframes fightright {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    right: 0;
    bottom: 0;
  }
.aq_wrap_18 30% {
  -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    bottom: 0;
}
.aq_wrap_18 45% {
  -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    right: 0;
    bottom: 2px;
}
.aq_wrap_18 50% {
  -webkit-transform: rotateZ(-65deg);
    transform: rotateZ(-65deg);
    right: 0;
}
.aq_wrap_18 68% {
  -webkit-transform: rotateZ(-410deg);
    transform: rotateZ(-410deg);
    right: 27px;
    bottom: 13px;
}
.aq_wrap_18 95% {
  -webkit-transform: rotateZ(-410deg);
    transform: rotateZ(-410deg);
    right: 0;
    bottom: 0;
}
.aq_wrap_18 100% {
  -webkit-transform: rotateZ(-360deg);
    transform: rotateZ(-360deg);
    right: 0;
    bottom: 0;
}


@-webkit-keyframes particles1 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(-30px);
    transform: rotateZ(35deg) translateY(-30px);
}


@-webkit-keyframes particles2 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
}
.aq_wrap_18 95% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(-40px);
    transform: rotateZ(-65deg) translateY(-40px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(-40px);
    transform: rotateZ(-65deg) translateY(-40px);
}


@-webkit-keyframes particles3 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
}
.aq_wrap_18 97% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(-35px);
    transform: rotateZ(-75deg) translateY(-35px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(-35px);
    transform: rotateZ(-75deg) translateY(-35px);
}


@-webkit-keyframes particles4 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
}
.aq_wrap_18 97% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(-30px);
    transform: rotateZ(-25deg) translateY(-30px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(-30px);
    transform: rotateZ(-25deg) translateY(-30px);
}


@-webkit-keyframes particles5 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
}
.aq_wrap_18 97% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(-35px);
    transform: rotateZ(65deg) translateY(-35px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(-35px);
    transform: rotateZ(65deg) translateY(-35px);
}


@keyframes showlightgreen {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
  }

  5% {
    box-shadow: 0 0 4px 2px #87c054;
  }

  10% {
    max-height: 22px;
  }

  80% {
    max-height: 22px;
  }

  85% {
    box-shadow: 0 0 4px 2px #87c054;
  }

  100% {
    max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
  }
}

@keyframes showlightred {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #f06363;
  }

  20% {
    box-shadow: 0 0 4px 2px #f06363;
  }

  25% {
    max-height: 22px;
  }

  80% {
    max-height: 22px;
  }

  85% {
    box-shadow: 0 0 4px 2px #f06363;
  }

  100% {
    max-height: 0;
    box-shadow: 0 0 0 0 #f06363;
  }
}

@keyframes fightleft {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    left: 0;
    bottom: 0;
  }

  30% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    bottom: 0;
  }

  40% {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    left: 0;
    bottom: 2px;
  }

  45% {
    -webkit-transform: rotateZ(65deg);
    transform: rotateZ(65deg);
    left: 0;
  }

  65% {
    -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 30px;
    bottom: 10px;
  }

  95% {
    -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 0;
    bottom: 0;
  }

  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
    left: 0;
    bottom: 0;
  }
}

@keyframes fightright {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    right: 0;
    bottom: 0;
  }

  30% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    bottom: 0;
  }

  45% {
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    right: 0;
    bottom: 2px;
  }

  50% {
    -webkit-transform: rotateZ(-65deg);
    transform: rotateZ(-65deg);
    right: 0;
  }

  68% {
    -webkit-transform: rotateZ(-410deg);
    transform: rotateZ(-410deg);
    right: 27px;
    bottom: 13px;
  }

  95% {
    -webkit-transform: rotateZ(-410deg);
    transform: rotateZ(-410deg);
    right: 0;
    bottom: 0;
  }

  100% {
    -webkit-transform: rotateZ(-360deg);
    transform: rotateZ(-360deg);
    right: 0;
    bottom: 0;
  }
}

@keyframes particles1 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(-30px);
    transform: rotateZ(35deg) translateY(-30px);
  }
}

@keyframes particles2 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
  }

  95% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(-40px);
    transform: rotateZ(-65deg) translateY(-40px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(-40px);
    transform: rotateZ(-65deg) translateY(-40px);
  }
}

@keyframes particles3 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
  }

  97% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(-35px);
    transform: rotateZ(-75deg) translateY(-35px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(-35px);
    transform: rotateZ(-75deg) translateY(-35px);
  }
}

@keyframes particles4 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
  }

  97% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(-30px);
    transform: rotateZ(-25deg) translateY(-30px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(-30px);
    transform: rotateZ(-25deg) translateY(-30px);
  }
}

@keyframes particles5 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
  }

  97% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(-35px);
    transform: rotateZ(65deg) translateY(-35px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(-35px);
    transform: rotateZ(65deg) translateY(-35px);
  }
}

      `}),u.jsx("div",{className:"aq_wrap_18",dangerouslySetInnerHTML:{__html:`<div id="loader">
  <div className="ls-particles ls-part-1"></div>
  <div className="ls-particles ls-part-2"></div>
  <div className="ls-particles ls-part-3"></div>
  <div className="ls-particles ls-part-4"></div>
  <div className="ls-particles ls-part-5"></div>
  <div className="lightsaber ls-left ls-green"></div>
  <div className="lightsaber ls-right ls-red"></div>
</div>`}})]}),Fg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_19 @keyframes drop {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(80px);
  }
  100% {
    transform: translateY(0px);
  }
}

.lava-lamp {
  position: relative;
  width: 50px;
  height: 100px;
  background: #000;
  border-radius: 25px;
  overflow: hidden;
}
.aq_wrap_19 .bubble {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #e64980, #ff8787);
  border-radius: 50%;
  left: 15px;
  animation: drop 5s ease-in-out infinite;
}
.aq_wrap_19 .bubble1 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #82c91e, #3bc9db);
  border-radius: 50%;
  left: 1px;
  animation: drop 3s ease-in-out infinite;
}
.aq_wrap_19 .bubble2 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #7950f2, #f783ac);
  border-radius: 50%;
  left: 30px;
  animation: drop 4s ease-in-out infinite;
}
.aq_wrap_19 .bubble3 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #4481eb, #04befe);
  border-radius: 50%;
  left: 20px;
  animation: drop 6s ease-in-out infinite;
}
      `}),u.jsx("div",{className:"aq_wrap_19",dangerouslySetInnerHTML:{__html:`<div className="lava-lamp">
  <div className="bubble"></div>
  <div className="bubble1"></div>
  <div className="bubble2"></div>
  <div className="bubble3"></div>
</div>`}})]}),$g=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_20 .tooltip-container {
  --background-light: #ff5555; 
  --background-dark: #000000; 
  --text-color-light: #ffffff;
  --text-color-dark: #ffffff;
  --bubble-size: 12px;
  --glow-color: rgba(255, 255, 255, 0.5); 

  position: relative;
  background: var(--background-light);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  padding: 0.7em 1.8em;
  color: var(--text-color-light);
  border-radius: 8px;
}
.aq_wrap_20 .tooltip {
  position: absolute;
  top: -100%; 
  left: 50%;
  transform: translateX(-50%);
  padding: 0.6em 1em;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.3s;
  border-radius: var(--bubble-size);
  background: var(--background-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.aq_wrap_20 .tooltip::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  border-style: solid;
  border-width: 8px 8px 0;
  border-color: var(--background-light) transparent transparent;
}
.aq_wrap_20 .tooltip-container:hover {
  background: var(--background-dark);
  color: var(--text-color-dark);
  box-shadow: 0 0 20px var(--glow-color);
}
.aq_wrap_20 .tooltip-container:hover .tooltip {
  top: -120%; 
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
      `}),u.jsx("div",{className:"aq_wrap_20",dangerouslySetInnerHTML:{__html:`<div className="tooltip-container">
  <span className="tooltip">Deep Sea.io</span>
  <span className="text">Tooltip</span>
</div>`}})]}),Wg=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_21 .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.aq_wrap_21 .container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}
.aq_wrap_21 .checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 2.3em;
  width: 2.3em;
  background-color: #ccc;
  border-radius: 50%;
  transition: .4s;
}
.aq_wrap_21 .checkmark:hover {
  box-shadow: inset 17px 17px 16px #b3b3b3,
            inset -17px -17px 16px #ffffff;
}
.aq_wrap_21 .container input:checked ~ .checkmark {
  box-shadow: none;
  background-color: limegreen;
  transform: rotateX(360deg);
}
.aq_wrap_21 .container input:checked ~ .checkmark:hover {
  box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
}
.aq_wrap_21 .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.aq_wrap_21 .container input:checked ~ .checkmark:after {
  display: block;
}
.aq_wrap_21 .container .checkmark:after {
  left: 0.96em;
  top: 0.7em;
  width: 0.25em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  box-shadow: 0.1em 0.1em 0em 0 rgba(0,0,0,0.3);
  transform: rotate(45deg);
}
      `}),u.jsx("div",{className:"aq_wrap_21",dangerouslySetInnerHTML:{__html:`<label className="container">
  <input type="checkbox" checked="checked" />
  <div className="checkmark"></div>
</label>`}})]}),Ig=({className:N="",onClick:x,...p})=>u.jsxs("div",{className:`inline-block ${N}`,onClick:x,...p,children:[u.jsx("style",{children:`
.aq_wrap_22 .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.aq_wrap_22 .container {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  width: 24px;
  height: 24px;
}
.aq_wrap_22 .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: background-color 0.3s ease;
  z-index: 1;
}
.aq_wrap_22 .glass-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  height: 14px;
  width: 14px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: transform 0.3s ease;
  z-index: 2;
}
.aq_wrap_22 .container input:checked ~ .checkmark {
  background-color: #2196F3;
}
.aq_wrap_22 .container input:checked ~ .glass-effect {
  transform: translate(-50%, -50%) scale(1);
}
.aq_wrap_22 .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.aq_wrap_22 .container input:checked ~ .checkmark:after {
  display: block;
}
.aq_wrap_22 .container .checkmark:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -50%) rotate(45deg);
}
      `}),u.jsx("div",{className:"aq_wrap_22",dangerouslySetInnerHTML:{__html:`<label className="container">
  <input checked="checked" type="checkbox" />
  <div className="checkmark"></div>
  <div className="glass-effect"></div>
</label>`}})]}),Pg=({isOpen:N,onClose:x,initialTopic:p="Mergulho de Batismo & Open Water"})=>{const[d,C]=At.useState(p),[k,lt]=At.useState("2026-11-20"),[Tt,nt]=At.useState(""),[it,B]=At.useState(""),[S,H]=At.useState(!1),[L,mt]=At.useState(!1);if(!N)return null;const q=Z=>{Z.preventDefault(),mt(!0),pt.playSonarPing(),setTimeout(()=>{mt(!1),H(!0),Og({particleCount:80,spread:70,origin:{y:.6},colors:["#00f5d4","#e61c78","#3a86ff","#ffd166"]})},900)};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200",children:u.jsxs("div",{className:"relative w-full max-w-lg rounded-3xl bg-[#030e1d]/95 border border-[#00f5d4]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,245,212,0.25)] overflow-hidden",onClick:Z=>Z.stopPropagation(),children:[u.jsx("div",{className:"absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#00f5d4]/20 blur-3xl pointer-events-none"}),u.jsx("div",{className:"absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#e61c78]/20 blur-3xl pointer-events-none"}),u.jsx("button",{onClick:()=>{pt.playBubblePop(),x()},className:"absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors",children:u.jsx(Ng,{className:"w-4 h-4"})}),S?u.jsxs("div",{className:"text-center py-8 flex flex-col items-center",children:[u.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]",children:u.jsx(Pp,{className:"w-8 h-8"})}),u.jsx("h3",{className:"text-2xl font-display font-bold text-white mb-2",children:"Imersão Confirmada com Sucesso!"}),u.jsx("p",{className:"text-sm text-neutral-300 max-w-md leading-relaxed mb-6 font-light",children:"Nossa equipe de instrutores enviou seu protocolo de segurança, lista de checagem médica e voucher de expedição para seu e-mail."}),u.jsxs("div",{className:"p-4 rounded-xl bg-white/5 border border-white/10 w-full text-left text-xs font-mono text-neutral-300 space-y-1 mb-6",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Expedição:"})," ",d]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Data Reservada:"})," ",k]}),u.jsxs("div",{children:[u.jsx("strong",{children:"Status:"})," Vaga Bloqueada no Barco Principal"]})]}),u.jsx("button",{onClick:()=>{pt.playBubblePop(),H(!1),x()},className:"px-6 py-2.5 rounded-full bg-[#00f5d4] text-[#020915] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#70e000] transition-colors",children:"Concluir & Retornar ao Oceano"})]}):u.jsxs("form",{onSubmit:q,className:"flex flex-col gap-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-[#00f5d4] text-xs font-mono tracking-widest uppercase",children:[u.jsx(y1,{className:"w-4 h-4 animate-pulse"}),u.jsx("span",{children:"ЗАПИСАТЬСЯ НА ПОГРУЖЕНИЕ • AGENDAR IMERSÃO"})]}),u.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white",children:"Passaporte de Imersão Aqua Sphere"}),u.jsx("p",{className:"text-xs text-neutral-300 font-light -mt-2",children:"Selecione seu curso ou expedição desejada para garantir vaga com equipamento calibrado."}),u.jsxs("div",{className:"flex flex-col gap-1.5 mt-2",children:[u.jsx("label",{className:"text-xs font-mono text-neutral-300",children:"Programa / Expedição"}),u.jsx("input",{type:"text",value:d,onChange:Z=>C(Z.target.value),className:"w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#00f5d4] transition-colors",placeholder:"Ex: Recifes de Coral do Mar Vermelho ou Open Water",required:!0})]}),u.jsxs("div",{className:"flex flex-col gap-1.5",children:[u.jsx("label",{className:"text-xs font-mono text-neutral-300",children:"Data Preferencial"}),u.jsx("input",{type:"date",value:k,onChange:Z=>lt(Z.target.value),className:"w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#00f5d4] transition-colors",required:!0})]}),u.jsxs("div",{className:"space-y-3 pt-1",children:[u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("span",{className:"text-[11px] font-mono text-neutral-400",children:"Nome Completo do Mergulhador:"}),u.jsx(_1,{})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("span",{className:"text-[11px] font-mono text-neutral-400",children:"E-mail de Contato:"}),u.jsx(w1,{})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("span",{className:"text-[11px] font-mono text-neutral-400",children:"Nível Atual de Certificação (PADI/SSI/Nenhum):"}),u.jsx(N1,{})]})]}),u.jsxs("div",{className:"flex items-center gap-2 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300 font-sans mt-2",children:[u.jsx(yn,{className:"w-4 h-4 text-emerald-400 shrink-0"}),u.jsx("span",{children:"Equipamento revisado sob protocolo DAN (Divers Alert Network)."})]}),u.jsx("button",{type:"submit",disabled:L,onClick:()=>pt.playBubblePop(),className:"mt-3 w-full py-3 rounded-full font-mono text-xs uppercase font-bold tracking-wider text-white shadow-[0_0_25px_rgba(230,28,120,0.6)] hover:shadow-[0_0_35px_rgba(230,28,120,0.85)] transition-all duration-300 disabled:opacity-50",style:{background:"linear-gradient(135deg, #f72585 0%, #b5179e 60%, #7209b7 100%)"},children:L?u.jsxs("div",{className:"flex items-center justify-center gap-2",children:[u.jsx(S1,{}),u.jsx("span",{children:"Calibrando Mistura de Gases..."})]}):"Confirmar Inscrição na Expedição"})]})]})})},t2=({isOpen:N,onToggle:x})=>u.jsxs("aside",{"aria-label":"Painel de Módulos Uiverse",className:"fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none",children:[u.jsxs("button",{onClick:()=>{pt.playBubblePop(),x()},className:"pointer-events-auto mb-3 px-5 py-2 rounded-full bg-[#030e1d]/90 hover:bg-[#061833] border border-[#00f5d4]/40 text-[#00f5d4] hover:text-white text-xs font-mono font-medium shadow-[0_0_25px_rgba(0,245,212,0.25)] backdrop-blur-xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95",children:[u.jsx(v1,{className:"w-3.5 h-3.5 text-[#00f5d4] animate-pulse"}),u.jsx("span",{children:"23 COMPONENTES UIVERSE GALAXY HOMOLOGADOS"}),N?u.jsx(Xp,{className:"w-3.5 h-3.5"}):u.jsx(Wp,{className:"w-3.5 h-3.5"})]}),N&&u.jsxs("div",{className:"pointer-events-auto w-full max-w-6xl max-h-[75vh] overflow-y-auto bg-[#020a16]/98 border-t border-[#00f5d4]/30 rounded-t-3xl p-6 sm:p-8 shadow-[0_-20px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl animate-in slide-in-from-bottom duration-300",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/30 flex items-center justify-center text-[#00f5d4]",children:u.jsx(pg,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-display font-bold text-white",children:"Arsenal de Engenharia Subaquática (23 Módulos Uiverse)"}),u.jsx("p",{className:"text-xs font-mono text-neutral-400",children:"Cota obrigatória integrada com isolamento estrito de CSS (Zero conflitos de layout)"})]})]}),u.jsx("button",{onClick:x,className:"text-xs font-mono px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300",children:"Fechar Painel ×"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4",children:[u.jsx("span",{className:"text-[11px] font-mono uppercase tracking-wider text-[#00f5d4]",children:"1. Botões & Controles Táteis"}),u.jsxs("div",{className:"space-y-4 flex flex-col items-center",children:[u.jsx("div",{onMouseEnter:()=>pt.playBubblePop(),title:"BurgiSimon_wonderful-seahorse-35",children:u.jsx(Dg,{})}),u.jsx("div",{onMouseEnter:()=>pt.playBubblePop(),title:"0x3ther_heavy-dragon-56",children:u.jsx(kg,{})}),u.jsx("div",{onMouseEnter:()=>pt.playBubblePop(),title:"Dashrath-Sharma_chatty-tiger-70",children:u.jsx(Ug,{})}),u.jsx("div",{onMouseEnter:()=>pt.playBubblePop(),title:"Bodyhc_sharp-seahorse-46",children:u.jsx(Rg,{})}),u.jsx("div",{onMouseEnter:()=>pt.playBubblePop(),title:"John-CFO_green-rabbit-93",children:u.jsx(Bg,{})}),u.jsx("div",{onMouseEnter:()=>pt.playBubblePop(),title:"EmmaxPlay_rude-yak-98",children:u.jsx(Hg,{})})]})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4",children:[u.jsx("span",{className:"text-[11px] font-mono uppercase tracking-wider text-[#3a86ff]",children:"2. Switches, Toggles & Loaders"}),u.jsxs("div",{className:"space-y-5 flex flex-col items-center",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Sonar Ambience:"}),u.jsx(Yg,{})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Física de Bolha:"}),u.jsx(Zg,{})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Lanterna Canhão:"}),u.jsx(Lg,{})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Unidades M/FT:"}),u.jsx(Gg,{})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Pulso de O2:"}),u.jsx(S1,{})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Subida de Bolhas:"}),u.jsx(Fg,{})]})]})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4",children:[u.jsx("span",{className:"text-[11px] font-mono uppercase tracking-wider text-[#e61c78]",children:"3. Inputs, Checkboxes & Cards"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-neutral-400 font-mono block mb-1",children:"Busca de Zona:"}),u.jsx(Jg,{})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-neutral-400 font-mono block mb-1",children:"Nome do Mergulhador:"}),u.jsx(_1,{})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-neutral-400 font-mono block mb-1",children:"E-mail:"}),u.jsx(w1,{})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-neutral-400 font-mono block mb-1",children:"Nível de Certificação:"}),u.jsx(N1,{})]}),u.jsxs("div",{className:"flex items-center justify-between pt-2",children:[u.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Protocolo Nitrox:"}),u.jsx(Wg,{})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Mergulho Noturno:"}),u.jsx(Ig,{})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Tooltip de Biosfera:"}),u.jsx($g,{})]})]})]})]}),u.jsxs("div",{className:"mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6",children:[u.jsx(Qg,{}),u.jsx(Vg,{}),u.jsx(Xg,{}),u.jsx(Kg,{})]})]})]});function e2(){const[N,x]=At.useState(!1),[p,d]=At.useState("Recifes de Coral do Mar Vermelho"),[C,k]=At.useState("meters"),[lt,Tt]=At.useState(!1),[nt,it]=At.useState(!1),B=L=>{L&&d(L),x(!0)},S=()=>{const L=pt.toggle();Tt(L)},H=()=>{k(L=>L==="meters"?"feet":"meters")};return u.jsxs("div",{className:"relative min-h-screen bg-[#020915] text-[#e2f1fc] selection:bg-[#00f5d4]/30 selection:text-white font-sans antialiased overflow-x-hidden",children:[u.jsx(Dp,{}),u.jsx(kp,{}),u.jsx(Tg,{depthUnit:C}),u.jsx(jg,{onOpenBooking:()=>B("Mergulho de Batismo & Open Water"),depthUnit:C,onToggleDepthUnit:H,isAudioOn:lt,onToggleAudio:S,onToggleDrawer:()=>it(!nt),isDrawerOpen:nt}),u.jsxs("main",{className:"relative z-10 flex flex-col",children:[u.jsx(zg,{onOpenBooking:()=>B("Imersão de Batismo Discovery")}),u.jsx(Eg,{}),u.jsx(Mg,{onSelectExpedition:L=>B(`Expedição: ${L}`)}),u.jsx(Ag,{onSelectCourse:L=>B(`Curso: ${L}`)})]}),u.jsx(Cg,{}),u.jsx(Pg,{isOpen:N,onClose:()=>x(!1),initialTopic:p}),u.jsx(t2,{isOpen:nt,onToggle:()=>it(!nt)})]})}Op.createRoot(document.getElementById("root")).render(u.jsx(Tp.StrictMode,{children:u.jsx(e2,{})}));

var hv=Object.defineProperty;var mv=(S,x,y)=>x in S?hv(S,x,{enumerable:!0,configurable:!0,writable:!0,value:y}):S[x]=y;var el=(S,x,y)=>mv(S,typeof x!="symbol"?x+"":x,y);(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))f(M);new MutationObserver(M=>{for(const z of M)if(z.type==="childList")for(const Q of z.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&f(Q)}).observe(document,{childList:!0,subtree:!0});function y(M){const z={};return M.integrity&&(z.integrity=M.integrity),M.referrerPolicy&&(z.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?z.credentials="include":M.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function f(M){if(M.ep)return;M.ep=!0;const z=y(M);fetch(M.href,z)}})();function _1(S){return S&&S.__esModule&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S}var wo={exports:{}},_i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1;function vv(){if(i1)return _i;i1=1;var S=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function y(f,M,z){var Q=null;if(z!==void 0&&(Q=""+z),M.key!==void 0&&(Q=""+M.key),"key"in M){z={};for(var B in M)B!=="key"&&(z[B]=M[B])}else z=M;return M=z.ref,{$$typeof:S,type:f,key:Q,ref:M!==void 0?M:null,props:z}}return _i.Fragment=x,_i.jsx=y,_i.jsxs=y,_i}var u1;function _v(){return u1||(u1=1,wo.exports=vv()),wo.exports}var r=_v(),Eo={exports:{}},tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function gv(){if(r1)return tt;r1=1;var S=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),lt=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Z=Symbol.for("react.view_transition"),W=Symbol.iterator;function _t(s){return s===null||typeof s!="object"?null:(s=W&&s[W]||s["@@iterator"],typeof s=="function"?s:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,Ht={};function Mt(s,T,C){this.props=s,this.context=T,this.refs=Ht,this.updater=C||A}Mt.prototype.isReactComponent={},Mt.prototype.setState=function(s,T){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,T,"setState")},Mt.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function ve(){}ve.prototype=Mt.prototype;function Kt(s,T,C){this.props=s,this.context=T,this.refs=Ht,this.updater=C||A}var re=Kt.prototype=new ve;re.constructor=Kt,L(re,Mt.prototype),re.isPureReactComponent=!0;var Jt=Array.isArray;function nt(){}var ft={H:null,A:null,T:null,S:null},Ue=Object.prototype.hasOwnProperty;function _e(s,T,C){var j=C.ref;return{$$typeof:S,type:s,key:T,ref:j!==void 0?j:null,props:C}}function ge(s,T){return _e(s.type,T,s.props)}function se(s){return typeof s=="object"&&s!==null&&s.$$typeof===S}function Ie(s){var T={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(C){return T[C]})}var Pe=/\/+/g;function Dt(s,T){return typeof s=="object"&&s!==null&&s.key!=null?Ie(""+s.key):T.toString(36)}function U(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(nt,nt):(s.status="pending",s.then(function(T){s.status==="pending"&&(s.status="fulfilled",s.value=T)},function(T){s.status==="pending"&&(s.status="rejected",s.reason=T)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function $(s,T,C,j,R){var X=typeof s;(X==="undefined"||X==="boolean")&&(s=null);var J=!1;if(s===null)J=!0;else switch(X){case"bigint":case"string":case"number":J=!0;break;case"object":switch(s.$$typeof){case S:case x:J=!0;break;case Y:return J=s._init,$(J(s._payload),T,C,j,R)}}if(J)return R=R(s),J=j===""?"."+Dt(s,0):j,Jt(R)?(C="",J!=null&&(C=J.replace(Pe,"$&/")+"/"),$(R,T,C,"",function(wt){return wt})):R!=null&&(se(R)&&(R=ge(R,C+(R.key==null||s&&s.key===R.key?"":(""+R.key).replace(Pe,"$&/")+"/")+J)),T.push(R)),1;J=0;var O=j===""?".":j+":";if(Jt(s))for(var k=0;k<s.length;k++)j=s[k],X=O+Dt(j,k),J+=$(j,T,C,X,R);else if(k=_t(s),typeof k=="function")for(s=k.call(s),k=0;!(j=s.next()).done;)j=j.value,X=O+Dt(j,k++),J+=$(j,T,C,X,R);else if(X==="object"){if(typeof s.then=="function")return $(U(s),T,C,j,R);throw T=String(s),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return J}function P(s,T,C){if(s==null)return s;var j=[],R=0;return $(s,j,"","",function(X){return T.call(C,X,R++)}),j}function bt(s){if(s._status===-1){var T=s._result,C=T();C.then(function(j){(s._status===0||s._status===-1)&&(s._status=1,s._result=j,C.status===void 0&&(C.status="fulfilled",C.value=j))},function(j){(s._status===0||s._status===-1)&&(s._status=2,s._result=j,C.status===void 0&&(C.status="rejected",C.reason=j))}),s._status===-1&&(s._status=0,s._result=C)}if(s._status===1)return s._result.default;throw s._result}var g=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function h(s){var T=ft.T,C={};C.types=T!==null?T.types:null,ft.T=C;try{var j=s(),R=ft.S;R!==null&&R(C,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(nt,g)}catch(X){g(X)}finally{T!==null&&C.types!==null&&(T.types=C.types),ft.T=T}}function V(s){var T=ft.T;if(T!==null){var C=T.types;C===null?T.types=[s]:C.indexOf(s)===-1&&C.push(s)}else h(V.bind(null,s))}var F={map:P,forEach:function(s,T,C){P(s,function(){T.apply(this,arguments)},C)},count:function(s){var T=0;return P(s,function(){T++}),T},toArray:function(s){return P(s,function(T){return T})||[]},only:function(s){if(!se(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return tt.Activity=N,tt.Children=F,tt.Component=Mt,tt.Fragment=y,tt.Profiler=M,tt.PureComponent=Kt,tt.StrictMode=f,tt.Suspense=ut,tt.ViewTransition=Z,tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ft,tt.__COMPILER_RUNTIME={__proto__:null,c:function(s){return ft.H.useMemoCache(s)}},tt.addTransitionType=V,tt.cache=function(s){return function(){return s.apply(null,arguments)}},tt.cacheSignal=function(){return null},tt.cloneElement=function(s,T,C){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var j=L({},s.props),R=s.key;if(T!=null)for(X in T.key!==void 0&&(R=""+T.key),T)!Ue.call(T,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&T.ref===void 0||(j[X]=T[X]);var X=arguments.length-2;if(X===1)j.children=C;else if(1<X){for(var J=Array(X),O=0;O<X;O++)J[O]=arguments[O+2];j.children=J}return _e(s.type,R,j)},tt.createContext=function(s){return s={$$typeof:Q,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:z,_context:s},s},tt.createElement=function(s,T,C){var j,R={},X=null;if(T!=null)for(j in T.key!==void 0&&(X=""+T.key),T)Ue.call(T,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(R[j]=T[j]);var J=arguments.length-2;if(J===1)R.children=C;else if(1<J){for(var O=Array(J),k=0;k<J;k++)O[k]=arguments[k+2];R.children=O}if(s&&s.defaultProps)for(j in J=s.defaultProps,J)R[j]===void 0&&(R[j]=J[j]);return _e(s,X,R)},tt.createRef=function(){return{current:null}},tt.forwardRef=function(s){return{$$typeof:B,render:s}},tt.isValidElement=se,tt.lazy=function(s){return{$$typeof:Y,_payload:{_status:-1,_result:s},_init:bt}},tt.memo=function(s,T){return{$$typeof:lt,type:s,compare:T===void 0?null:T}},tt.startTransition=h,tt.unstable_useCacheRefresh=function(){return ft.H.useCacheRefresh()},tt.use=function(s){return ft.H.use(s)},tt.useActionState=function(s,T,C){return ft.H.useActionState(s,T,C)},tt.useCallback=function(s,T){return ft.H.useCallback(s,T)},tt.useContext=function(s){return ft.H.useContext(s)},tt.useDebugValue=function(){},tt.useDeferredValue=function(s,T){return ft.H.useDeferredValue(s,T)},tt.useEffect=function(s,T){return ft.H.useEffect(s,T)},tt.useEffectEvent=function(s){return ft.H.useEffectEvent(s)},tt.useId=function(){return ft.H.useId()},tt.useImperativeHandle=function(s,T,C){return ft.H.useImperativeHandle(s,T,C)},tt.useInsertionEffect=function(s,T){return ft.H.useInsertionEffect(s,T)},tt.useLayoutEffect=function(s,T){return ft.H.useLayoutEffect(s,T)},tt.useMemo=function(s,T){return ft.H.useMemo(s,T)},tt.useOptimistic=function(s,T){return ft.H.useOptimistic(s,T)},tt.useReducer=function(s,T,C){return ft.H.useReducer(s,T,C)},tt.useRef=function(s){return ft.H.useRef(s)},tt.useState=function(s){return ft.H.useState(s)},tt.useSyncExternalStore=function(s,T,C){return ft.H.useSyncExternalStore(s,T,C)},tt.useTransition=function(){return ft.H.useTransition()},tt.version="19.3.1",tt}var c1;function Ao(){return c1||(c1=1,Eo.exports=gv()),Eo.exports}var At=Ao();const pv=_1(At);var jo={exports:{}},gi={},zo={exports:{}},Mo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function xv(){return o1||(o1=1,(function(S){function x(U,$){var P=U.length;U.push($);t:for(;0<P;){var bt=P-1>>>1,g=U[bt];if(0<M(g,$))U[bt]=$,U[P]=g,P=bt;else break t}}function y(U){return U.length===0?null:U[0]}function f(U){if(U.length===0)return null;var $=U[0],P=U.pop();if(P!==$){U[0]=P;t:for(var bt=0,g=U.length,h=g>>>1;bt<h;){var V=2*(bt+1)-1,F=U[V],s=V+1,T=U[s];if(0>M(F,P))s<g&&0>M(T,F)?(U[bt]=T,U[s]=P,bt=s):(U[bt]=F,U[V]=P,bt=V);else if(s<g&&0>M(T,P))U[bt]=T,U[s]=P,bt=s;else break t}}return $}function M(U,$){var P=U.sortIndex-$.sortIndex;return P!==0?P:U.id-$.id}if(S.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;S.unstable_now=function(){return z.now()}}else{var Q=Date,B=Q.now();S.unstable_now=function(){return Q.now()-B}}var ut=[],lt=[],Y=1,N=null,Z=3,W=!1,_t=!1,A=!1,L=!1,Ht=typeof setTimeout=="function"?setTimeout:null,Mt=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;function Kt(U){for(var $=y(lt);$!==null;){if($.callback===null)f(lt);else if($.startTime<=U)f(lt),$.sortIndex=$.expirationTime,x(ut,$);else break;$=y(lt)}}function re(U){if(A=!1,Kt(U),!_t)if(y(ut)!==null)_t=!0,Jt||(Jt=!0,se());else{var $=y(lt);$!==null&&Dt(re,$.startTime-U)}}var Jt=!1,nt=-1,ft=5,Ue=-1;function _e(){return L?!0:!(S.unstable_now()-Ue<ft)}function ge(){if(L=!1,Jt){var U=S.unstable_now();Ue=U;var $=!0;try{t:{_t=!1,A&&(A=!1,Mt(nt),nt=-1),W=!0;var P=Z;try{e:{for(Kt(U),N=y(ut);N!==null&&!(N.expirationTime>U&&_e());){var bt=N.callback;if(typeof bt=="function"){N.callback=null,Z=N.priorityLevel;var g=bt(N.expirationTime<=U);if(U=S.unstable_now(),typeof g=="function"){N.callback=g,Kt(U),$=!0;break e}N===y(ut)&&f(ut),Kt(U)}else f(ut);N=y(ut)}if(N!==null)$=!0;else{var h=y(lt);h!==null&&Dt(re,h.startTime-U),$=!1}}break t}finally{N=null,Z=P,W=!1}$=void 0}}finally{$?se():Jt=!1}}}var se;if(typeof ve=="function")se=function(){ve(ge)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Pe=Ie.port2;Ie.port1.onmessage=ge,se=function(){Pe.postMessage(null)}}else se=function(){Ht(ge,0)};function Dt(U,$){nt=Ht(function(){U(S.unstable_now())},$)}S.unstable_IdlePriority=5,S.unstable_ImmediatePriority=1,S.unstable_LowPriority=4,S.unstable_NormalPriority=3,S.unstable_Profiling=null,S.unstable_UserBlockingPriority=2,S.unstable_cancelCallback=function(U){U.callback=null},S.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ft=0<U?Math.floor(1e3/U):5},S.unstable_getCurrentPriorityLevel=function(){return Z},S.unstable_next=function(U){switch(Z){case 1:case 2:case 3:var $=3;break;default:$=Z}var P=Z;Z=$;try{return U()}finally{Z=P}},S.unstable_requestPaint=function(){L=!0},S.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var P=Z;Z=U;try{return $()}finally{Z=P}},S.unstable_scheduleCallback=function(U,$,P){var bt=S.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?bt+P:bt):P=bt,U){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=P+g,U={id:Y++,callback:$,priorityLevel:U,startTime:P,expirationTime:g,sortIndex:-1},P>bt?(U.sortIndex=P,x(lt,U),y(ut)===null&&U===y(lt)&&(A?(Mt(nt),nt=-1):A=!0,Dt(re,P-bt))):(U.sortIndex=g,x(ut,U),_t||W||(_t=!0,Jt||(Jt=!0,se()))),U},S.unstable_shouldYield=_e,S.unstable_wrapCallback=function(U){var $=Z;return function(){var P=Z;Z=$;try{return U.apply(this,arguments)}finally{Z=P}}}})(Mo)),Mo}var s1;function bv(){return s1||(s1=1,zo.exports=xv()),zo.exports}var Co={exports:{}},ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1;function yv(){if(f1)return ue;f1=1;var S=Ao();function x(Y){var N="https://react.dev/errors/"+Y;if(1<arguments.length){N+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)N+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+Y+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(){}var f={d:{f:y,r:function(){throw Error(x(522))},D:y,C:y,L:y,m:y,X:y,S:y,M:y},p:0,findDOMNode:null},M=Symbol.for("react.portal"),z=Symbol.for("react.recoverable"),Q=Symbol.for("react.optimistic_key");function B(Y,N,Z){var W=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:W==null?null:W===Q?Q:""+W,children:Y,containerInfo:N,implementation:Z}}var ut=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function lt(Y,N){if(Y==="font")return"";if(typeof N=="string")return N==="use-credentials"?N:""}return ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,ue.browser=function(Y){return{$$typeof:z,_reason:Y}},ue.createPortal=function(Y,N){var Z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!N||N.nodeType!==1&&N.nodeType!==9&&N.nodeType!==11)throw Error(x(299));return B(Y,N,null,Z)},ue.flushSync=function(Y){var N=ut.T,Z=f.p;try{if(ut.T=null,f.p=2,Y)return Y()}finally{ut.T=N,f.p=Z,f.d.f()}},ue.preconnect=function(Y,N){typeof Y=="string"&&(N?(N=N.crossOrigin,N=typeof N=="string"?N==="use-credentials"?N:"":void 0):N=null,f.d.C(Y,N))},ue.prefetchDNS=function(Y){typeof Y=="string"&&f.d.D(Y)},ue.preinit=function(Y,N){if(typeof Y=="string"&&N&&typeof N.as=="string"){var Z=N.as,W=lt(Z,N.crossOrigin),_t=typeof N.integrity=="string"?N.integrity:void 0,A=typeof N.fetchPriority=="string"?N.fetchPriority:void 0;Z==="style"?f.d.S(Y,typeof N.precedence=="string"?N.precedence:void 0,{crossOrigin:W,integrity:_t,fetchPriority:A}):Z==="script"&&f.d.X(Y,{crossOrigin:W,integrity:_t,fetchPriority:A,nonce:typeof N.nonce=="string"?N.nonce:void 0})}},ue.preinitModule=function(Y,N){if(typeof Y=="string")if(typeof N=="object"&&N!==null){if(N.as==null||N.as==="script"){var Z=lt(N.as,N.crossOrigin);f.d.M(Y,{crossOrigin:Z,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0})}}else N==null&&f.d.M(Y)},ue.preload=function(Y,N){if(typeof Y=="string"&&typeof N=="object"&&N!==null&&typeof N.as=="string"){var Z=N.as,W=lt(Z,N.crossOrigin);f.d.L(Y,Z,{crossOrigin:W,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,type:typeof N.type=="string"?N.type:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0,referrerPolicy:typeof N.referrerPolicy=="string"?N.referrerPolicy:void 0,imageSrcSet:typeof N.imageSrcSet=="string"?N.imageSrcSet:void 0,imageSizes:typeof N.imageSizes=="string"?N.imageSizes:void 0,media:typeof N.media=="string"?N.media:void 0})}},ue.preloadModule=function(Y,N){if(typeof Y=="string")if(N){var Z=lt(N.as,N.crossOrigin);f.d.m(Y,{as:typeof N.as=="string"&&N.as!=="script"?N.as:void 0,crossOrigin:Z,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0})}else f.d.m(Y)},ue.requestFormReset=function(Y){f.d.r(Y)},ue.unstable_batchedUpdates=function(Y,N){return Y(N)},ue.useFormState=function(Y,N,Z){return ut.H.useFormState(Y,N,Z)},ue.useFormStatus=function(){return ut.H.useHostTransitionStatus()},ue.version="19.3.1",ue}var d1;function qv(){if(d1)return Co.exports;d1=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(x){console.error(x)}}return S(),Co.exports=yv(),Co.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1;function Nv(){if(h1)return gi;h1=1;var S=bv(),x=Ao(),y=qv();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function z(t){for(var e=t,a=e;a&&!a.alternate;)e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function Q(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function B(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ut(t){if(z(t)!==t)throw Error(f(188))}function lt(t){var e=t.alternate;if(!e){if(e=z(t),e===null)throw Error(f(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return ut(n),t;if(i===l)return ut(n),e;i=i.sibling}throw Error(f(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?t:e}function Y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Y(t),e!==null)return e;t=t.sibling}return null}function N(t,e,a,l,n,i){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,l,n,i)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&N(t.child,e,a,l,n,i))return!0;t=t.sibling}return!1}function Z(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function W(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function _t(t){var e=[null,null],a=Z(t);return a===null||A(e,t,a.child,{foundSelf:!1}),e}function A(t,e,a,l){for(;a!==null;){if(a===e)l.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(l.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,e,a.child,l))return!0;a=a.sibling}return!1}function L(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(f(559))}}var Ht=null,Mt=null;function ve(t,e,a){return t===a?!0:t===e?(Ht=t,!0):!1}function Kt(t,e,a){return t===a?(Mt=t,!1):t===e?(Mt!==null&&(Ht=t),!0):!1}function re(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Jt(t,e,a){for(var l=0,n=t;n;n=a(n))l++;n=0;for(var i=e;i;i=a(i))n++;for(;0<l-n;)t=a(t),l--;for(;0<n-l;)e=a(e),n--;for(;l--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var nt=Object.assign,ft=Symbol.for("react.element"),Ue=Symbol.for("react.transitional.element"),_e=Symbol.for("react.portal"),ge=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Pe=Symbol.for("react.consumer"),Dt=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),bt=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),V=Symbol.for("react.legacy_hidden"),F=Symbol.for("react.memo_cache_sentinel"),s=Symbol.for("react.view_transition"),T=Symbol.for("react.recoverable"),C=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=C&&t[C]||t["@@iterator"],typeof t=="function"?t:null)}var R=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ge:return"Fragment";case Ie:return"Profiler";case se:return"StrictMode";case $:return"Suspense";case P:return"SuspenseList";case h:return"Activity";case s:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case _e:return"Portal";case Dt:return t.displayName||"Context";case Pe:return(t._context.displayName||"Context")+".Consumer";case U:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bt:return e=t.displayName||null,e!==null?e:X(t.type)||"Memo";case g:e=t._payload,t=t._init;try{return X(t(e))}catch{}}return null}var J=Array.isArray,O=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt={pending:!1,data:null,method:null,action:null},rt=[],Bt=-1;function Ut(t){return{current:t}}function yt(t){0>Bt||(t.current=rt[Bt],rt[Bt]=null,Bt--)}function dt(t,e){Bt++,rt[Bt]=t.current,t.current=e}var Ft=Ut(null),ce=Ut(null),ta=Ut(null),El=Ut(null);function jl(t,e){switch(dt(ta,e),dt(ce,t),dt(Ft,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?md(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=md(e),t=vd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Ft),dt(Ft,t)}function da(){yt(Ft),yt(ce),yt(ta)}function yn(t){var e=t.memoizedState;e!==null&&(gn._currentValue=e.memoizedState,dt(El,t)),e=Ft.current;var a=vd(e,t.type);e!==a&&(dt(ce,t),dt(Ft,a))}function al(t){ce.current===t&&(yt(Ft),yt(ce)),El.current===t&&(yt(El),gn._currentValue=wt)}var qn,pi;function Xe(t){if(qn===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);qn=e&&e[1]||"",pi=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qn+t+pi}var zl=!1;function ll(t,e){if(!t||zl)return"";zl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(D){var m=D}Reflect.construct(t,[],E)}else{try{E.call()}catch(D){m=D}E=!1;try{var b=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),E=!0,new t}finally{E&&(b!==void 0?Object.defineProperty(t.prototype,"props",b):delete t.prototype.props)}}}else{try{throw Error()}catch(D){m=D}(E=t())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(D){if(D&&m&&typeof D.stack=="string")return[D.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var o=u.split(`
`),_=c.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<_.length&&!_[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===_.length)for(l=o.length-1,n=_.length-1;1<=l&&0<=n&&o[l]!==_[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==_[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==_[n]){var q=`
`+o[l].replace(" at new "," at ");return t.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",t.displayName)),q}while(1<=l&&0<=n);break}}}finally{zl=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xe(a):""}function Ju(t,e){switch(t.tag){case 26:case 27:case 5:return Xe(t.type);case 16:return Xe("Lazy");case 13:return t.child!==e&&e!==null?Xe("Suspense Fallback"):Xe("Suspense");case 19:return Xe("SuspenseList");case 0:case 15:return ll(t.type,!1);case 11:return ll(t.type.render,!1);case 1:return ll(t.type,!0);case 31:return Xe("Activity");case 30:return Xe("ViewTransition");default:return""}}function xi(t){try{var e="",a=null;do e+=Ju(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Fu=Object.prototype.hasOwnProperty,Wu=S.unstable_scheduleCallback,$u=S.unstable_cancelCallback,p1=S.unstable_shouldYield,x1=S.unstable_requestPaint,Se=S.unstable_now,b1=S.unstable_getCurrentPriorityLevel,Ro=S.unstable_ImmediatePriority,ko=S.unstable_UserBlockingPriority,bi=S.unstable_NormalPriority,y1=S.unstable_LowPriority,Ho=S.unstable_IdlePriority,q1=S.log,N1=S.unstable_setDisableYieldValue,Nn=null,Te=null;function ja(t){if(typeof q1=="function"&&N1(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Nn,t)}catch{}}var we=Math.clz32?Math.clz32:w1,S1=Math.log,T1=Math.LN2;function w1(t){return t>>>=0,t===0?32:31-(S1(t)/T1|0)|0}var yi=256,qi=262144,Ni=4194304;function nl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Si(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=nl(l):(u&=c,u!==0?n=nl(u):a||(a=c&~t,a!==0&&(n=nl(a))))):(c=l&~i,c!==0?n=nl(c):u!==0?n=nl(u):a||(a=l&~t,a!==0&&(n=nl(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Sn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Bo(t,e){(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-we(a),n=1<<l;e|=t[l],a&=~n}return e}function E1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yo(){var t=Ni;return Ni<<=1,(Ni&62914560)===0&&(Ni=4194304),t}function Iu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Tn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function j1(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var c=t.entanglements,o=t.expirationTimes,_=t.hiddenUpdates;for(a=u&~a;0<a;){var q=31-we(a),E=1<<q;c[q]=0,o[q]=-1;var m=_[q];if(m!==null)for(_[q]=null,q=0;q<m.length;q++){var b=m[q];b!==null&&(b.lane&=-536870913)}a&=~E}l!==0&&Zo(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Zo(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-we(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Lo(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-we(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function Go(t,e){var a=e&-e;return a=(a&42)!==0?1:Pu(a),(a&(t.suspendedLanes|e))!==0?0:a}function Pu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Vo(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Id(t.type))}function Xo(t,e){var a=k.p;try{return k.p=t,e()}finally{k.p=a}}var ha=Math.random().toString(36).slice(2),te="__reactFiber$"+ha,pe="__reactProps$"+ha,Ml="__reactContainer$"+ha,Qo="__reactEvents$"+ha,z1="__reactListeners$"+ha,M1="__reactHandles$"+ha,Ko="__reactResources$"+ha,wn="__reactMarker$"+ha,Ti="__reactLoad$"+ha;function wi(t){delete t[te],delete t[pe],delete t[z1],delete t[M1]}function il(t){var e;if(e=t[te])return e;for(var a=t.parentNode;a;){if(e=a[Ml]||a[te]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Ad(t);t!==null;){if(a=t[te])return a;t=Ad(t)}return e}t=a,a=t.parentNode}return null}function Cl(t){if(t=t[te]||t[Ml]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function En(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function Al(t){var e=t[Ko];return e||(e=t[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Wt(t){t[wn]=!0}function Jo(t){t[Ti]=void 0}var Fo=new Set,Wo={};function ul(t,e){Ol(t,e),Ol(t+"Capture",e)}function Ol(t,e){for(Wo[t]=e,t=0;t<e.length;t++)Fo.add(e[t])}var C1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$o={},Io={};function A1(t){return Fu.call(Io,t)?!0:Fu.call($o,t)?!1:C1.test(t)?Io[t]=!0:($o[t]=!0,!1)}var gt=!1;function Po(){var t=gt;return gt=!1,t}function Ei(t,e,a){if(A1(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function ji(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function ma(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,l)}}function Ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ts(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O1(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function er(t){if(!t._valueTracker){var e=ts(t)?"checked":"value";t._valueTracker=O1(t,e,""+t[e])}}function es(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=ts(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}var D1=/[\n"\\]/g;function Re(t){return t.replace(D1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ar(t,e,a,l,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ee(e)):t.value!==""+Ee(e)&&(t.value=""+Ee(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?u==="number"&&t.value==e?lr(t,Ee(t.value)):lr(t,Ee(e)):a!=null?lr(t,Ee(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Ee(c):t.removeAttribute("name")}function as(t,e,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){er(t);return}a=a!=null?""+Ee(a):"",e=e!=null?""+Ee(e):a,c||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),er(t)}function lr(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Dl(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ee(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function ls(t,e,a){if(e!=null&&(e=""+Ee(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ee(a):""}function ns(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(f(92));if(J(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Ee(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),er(t)}function Ul(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var U1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function is(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||U1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function us(t,e,a){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="",gt=!0);for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&(is(t,n,l),gt=!0)}else for(var i in e)e.hasOwnProperty(i)&&is(t,i,e[i])}function nr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zi(t){return k1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var ir=null;function ur(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rl=null,kl=null;function rs(t){var e=Cl(t);if(e&&(t=e.stateNode)){var a=t[pe]||null;t:switch(t=e.stateNode,e.type){case"input":if(ar(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Re(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[pe]||null;if(!n)throw Error(f(90));ar(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&es(l)}break t;case"textarea":ls(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Dl(t,!!a.multiple,e,!1)}}}var rr=!1;function cs(t,e,a){if(rr)return t(e,a);rr=!0;try{var l=t(e);return l}finally{if(rr=!1,(Rl!==null||kl!==null)&&(zu(),Rl&&(e=Rl,t=kl,kl=Rl=null,rs(e),t)))for(e=0;e<t.length;e++)rs(t[e])}}function jn(t,e){var a=t.stateNode;if(a===null)return null;var l=a[pe]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(f(231,e,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cr=!1;if(va)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){cr=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{cr=!1}var za=null,or=null,Mi=null;function os(){if(Mi)return Mi;var t,e=or,a=e.length,l,n="value"in za?za.value:za.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Mi=n.slice(t,1<l?1-l:void 0)}function Ci(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ai(){return!0}function ss(){return!1}function fe(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(a=t[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ai:ss,this.isPropagationStopped=ss,this}return nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),e}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=fe(Ma),Mn=nt({},Ma,{view:0,detail:0}),H1=fe(Mn),sr,fr,Cn,Di=nt({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cn&&(Cn&&t.type==="mousemove"?(sr=t.screenX-Cn.screenX,fr=t.screenY-Cn.screenY):fr=sr=0,Cn=t),sr)},movementY:function(t){return"movementY"in t?t.movementY:fr}}),fs=fe(Di),B1=nt({},Di,{dataTransfer:0}),Y1=fe(B1),Z1=nt({},Mn,{relatedTarget:0}),dr=fe(Z1),L1=nt({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),G1=fe(L1),V1=nt({},Ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X1=fe(V1),Q1=nt({},Ma,{data:0}),ds=fe(Q1),K1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=F1[t])?!!e[t]:!1}function hr(){return W1}var $1=nt({},Mn,{key:function(t){if(t.key){var e=K1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ci(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(t){return t.type==="keypress"?Ci(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ci(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I1=fe($1),P1=nt({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hs=fe(P1),th=nt({},Ma,{submitter:0}),eh=fe(th),ah=nt({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr}),lh=fe(ah),nh=nt({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),ih=fe(nh),uh=nt({},Di,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rh=fe(uh),ch=nt({},Ma,{newState:0,oldState:0,source:0}),oh=fe(ch),sh=[9,13,27,32],mr=va&&"CompositionEvent"in window,An=null;va&&"documentMode"in document&&(An=document.documentMode);var fh=va&&"TextEvent"in window&&!An,ms=va&&(!mr||An&&8<An&&11>=An),vs=" ",_s=!1;function gs(t,e){switch(t){case"keyup":return sh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ps(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hl=!1;function dh(t,e){switch(t){case"compositionend":return ps(e);case"keypress":return e.which!==32?null:(_s=!0,vs);case"textInput":return t=e.data,t===vs&&_s?null:t;default:return null}}function hh(t,e){if(Hl)return t==="compositionend"||!mr&&gs(t,e)?(t=os(),Mi=or=za=null,Hl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ms&&e.locale!=="ko"?null:e.data;default:return null}}var mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mh[t.type]:e==="textarea"}function bs(t,e,a,l){Rl?kl?kl.push(l):kl=[l]:Rl=l,e=Uu(e,"onChange"),0<e.length&&(a=new Oi("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var On=null,Dn=null;function vh(t){cd(t,0)}function Ui(t){var e=En(t);if(es(e))return t}function ys(t,e){if(t==="change")return e}var qs=!1;if(va){var vr;if(va){var _r="oninput"in document;if(!_r){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),_r=typeof Ns.oninput=="function"}vr=_r}else vr=!1;qs=vr&&(!document.documentMode||9<document.documentMode)}function Ss(){On&&(On.detachEvent("onpropertychange",Ts),Dn=On=null)}function Ts(t){if(t.propertyName==="value"&&Ui(Dn)){var e=[];bs(e,Dn,t,ur(t)),cs(vh,e)}}function _h(t,e,a){t==="focusin"?(Ss(),On=e,Dn=a,On.attachEvent("onpropertychange",Ts)):t==="focusout"&&Ss()}function gh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ui(Dn)}function ph(t,e){if(t==="click")return Ui(e)}function xh(t,e){if(t==="input"||t==="change")return Ui(e)}function bh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var je=typeof Object.is=="function"?Object.is:bh;function Un(t,e){if(je(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Fu.call(e,n)||!je(t[n],e[n]))return!1}return!0}function gr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ws(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Es(t,e){var a=ws(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ws(a)}}function js(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?js(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=gr(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=gr(t.document)}return e}function pr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var yh=va&&"documentMode"in document&&11>=document.documentMode,Bl=null,xr=null,Rn=null,br=!1;function Ms(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;br||Bl==null||Bl!==gr(l)||(l=Bl,"selectionStart"in l&&pr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Rn&&Un(Rn,l)||(Rn=l,l=Uu(xr,"onSelect"),0<l.length&&(e=new Oi("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Bl)))}function rl(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Yl={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionrun:rl("Transition","TransitionRun"),transitionstart:rl("Transition","TransitionStart"),transitioncancel:rl("Transition","TransitionCancel"),transitionend:rl("Transition","TransitionEnd")},yr={},Cs={};va&&(Cs=document.createElement("div").style,"AnimationEvent"in window||(delete Yl.animationend.animation,delete Yl.animationiteration.animation,delete Yl.animationstart.animation),"TransitionEvent"in window||delete Yl.transitionend.transition);function cl(t){if(yr[t])return yr[t];if(!Yl[t])return t;var e=Yl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Cs)return yr[t]=e[a];return t}var As=cl("animationend"),Os=cl("animationiteration"),Ds=cl("animationstart"),qh=cl("transitionrun"),Nh=cl("transitionstart"),Sh=cl("transitioncancel"),Us=cl("transitionend"),Rs=new Map,qr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qr.push("scrollEnd");function Qe(t,e){Rs.set(t,e),ul(e,[t])}var Th=0;function _a(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=We.identifierPrefix;var a=Th++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function ks(t){if(t==null||typeof t=="string")return t;var e=null,a=rn;if(a!==null)for(var l=0;l<a.length;l++){var n=t[a[l]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function ga(t,e){return t=ks(t),e=ks(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Ri=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ke=[],Zl=0,Nr=0;function ki(){for(var t=Zl,e=Nr=Zl=0;e<t;){var a=ke[e];ke[e++]=null;var l=ke[e];ke[e++]=null;var n=ke[e];ke[e++]=null;var i=ke[e];if(ke[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Hs(a,n,i)}}function Hi(t,e,a,l){ke[Zl++]=t,ke[Zl++]=e,ke[Zl++]=a,ke[Zl++]=l,Nr|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Sr(t,e,a,l){return Hi(t,e,a,l),Bi(t)}function ol(t,e){return Hi(t,null,null,e),Bi(t)}function Hs(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-we(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function Bi(t){if(50<ni)throw ni=0,ju=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ll={};function wh(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(t,e,a,l){return new wh(t,e,a,l)}function Tr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,e){var a=t.alternate;return a===null?(a=xe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bs(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Yi(t,e,a,l,n,i){var u=0;if(l=t,typeof l=="function")Tr(l)&&(u=1);else if(typeof l=="string")u=tv(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(l){case h:return t=xe(31,a,e,n),t.elementType=h,t.lanes=i,t;case ge:return sl(a.children,n,i,e);case se:u=8,n|=24;break;case Ie:return t=xe(12,a,e,n|2),t.elementType=Ie,t.lanes=i,t;case $:return t=xe(13,a,e,n),t.elementType=$,t.lanes=i,t;case P:return t=xe(19,a,e,n),t.elementType=P,t.lanes=i,t;case V:case s:return t=n|32,t=xe(30,a,e,t),t.elementType=s,t.lanes=i,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Dt:u=10;break t;case Pe:u=9;break t;case U:u=11;break t;case bt:u=14;break t;case g:u=16,l=null;break t}u=29,a=Error(f(130,t===null?"null":typeof t,"")),l=null}return e=xe(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function sl(t,e,a,l){return t=xe(7,t,l,e),t.lanes=a,t}function wr(t,e,a){return t=xe(6,t,null,e),t.lanes=a,t}function Ys(t){var e=xe(18,null,null,0);return e.stateNode=t,e}function Er(t,e,a){return e=xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Zs=new WeakMap;function He(t,e){if(typeof t=="object"&&t!==null){var a=Zs.get(t);return a!==void 0?a:(e={value:t,source:e,stack:xi(e)},Zs.set(t,e),e)}return{value:t,source:e,stack:xi(e)}}var Gl=[],Vl=0,Zi=null,kn=0,Be=[],Ye=0,Ca=null,aa=1,la="";function xa(t,e){Gl[Vl++]=kn,Gl[Vl++]=Zi,Zi=t,kn=e}function Ls(t,e,a){Be[Ye++]=aa,Be[Ye++]=la,Be[Ye++]=Ca,Ca=t;var l=aa;t=la;var n=32-we(l)-1;l&=~(1<<n),a+=1;var i=32-we(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,aa=1<<32-we(e)+n|a<<n|l,la=i+t}else aa=1<<i|a<<n|l,la=t}function Li(t){t.return!==null&&(xa(t,1),Ls(t,1,0))}function jr(t){for(;t===Zi;)Zi=Gl[--Vl],Gl[Vl]=null,kn=Gl[--Vl],Gl[Vl]=null;for(;t===Ca;)Ca=Be[--Ye],Be[Ye]=null,la=Be[--Ye],Be[Ye]=null,aa=Be[--Ye],Be[Ye]=null}function Gs(t,e){Be[Ye++]=aa,Be[Ye++]=la,Be[Ye++]=Ca,aa=e.id,la=e.overflow,Ca=t}var $t=null,jt=null,it=!1,Aa=null,Ze=!1,zr=Error(f(519));function Oa(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hn(He(e,t)),zr}function Vs(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[te]=t,e[pe]=l,a){case"dialog":ot("cancel",e),ot("close",e);break;case"iframe":case"object":case"embed":ot("load",e);break;case"video":case"audio":for(a=0;a<ui.length;a++)ot(ui[a],e);break;case"source":ot("error",e);break;case"img":case"image":case"link":ot("error",e),ot("load",e);break;case"details":ot("toggle",e);break;case"input":ot("invalid",e),as(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ot("invalid",e);break;case"textarea":ot("invalid",e),ns(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||dd(e.textContent,a)?(l.popover!=null&&(ot("beforetoggle",e),ot("toggle",e)),l.onScroll!=null&&ot("scroll",e),l.onScrollEnd!=null&&ot("scrollend",e),l.onClick!=null&&(e.onclick=ea),e=!0):e=!1,e||Oa(t,!0)}function Gi(t){for($t=t.return;$t;)switch($t.tag){case 5:case 31:case 13:Ze=!1;return;case 27:case 3:Ze=!0;return;default:$t=$t.return}}function Xl(t){if(t!==$t)return!1;if(!it)return Gi(t),it=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||io(t.type,t.memoizedProps)),a=!a),a&&jt&&Oa(t),Gi(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));jt=Cd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));jt=Cd(t)}else e===27?(e=jt,Fa(t.type)?(t=vo,vo=null,jt=t):jt=e):jt=$t?Ge(t.stateNode.nextSibling):null;return!0}function fl(){jt=$t=null,it=!1}function Mr(){var t=Aa;return t!==null&&(qe===null?qe=t:qe.push.apply(qe,t),Aa=null),t}function Hn(t){Aa===null?Aa=[t]:Aa.push(t)}var Cr=Ut(null),dl=null,ba=null;function Da(t,e,a){dt(Cr,e._currentValue),e._currentValue=a}function ya(t){t._currentValue=Cr.current,yt(Cr)}function Vi(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Ar(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var o=0;o<e.length;o++)if(c.context===e[o]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Vi(i.return,a,t),l||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(f(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Vi(u,a,t),u=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,u=n.alternate,u!==null&&(u.lanes|=a),Vi(n.return,a,t),u=n.child,u=u!==null?u.sibling:null):u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function hl(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(f(387));if(u=u.memoizedProps,u!==null){var c=n.type;je(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===El.current){if(u=n.alternate,u===null)throw Error(f(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(gn):t=[gn])}n=n.return}return t!==null&&Ar(e,t,a,l),e.flags|=262144,t!==null}function Xi(t){for(t=t.firstContext;t!==null;){if(!je(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ml(t){dl=t,ba=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ee(t){return Xs(dl,t)}function Qi(t,e){return dl===null&&ml(t),Xs(t,e)}function Xs(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ba===null){if(t===null)throw Error(f(308));ba=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ba=ba.next=e;return a}var Eh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},jh=S.unstable_scheduleCallback,zh=S.unstable_NormalPriority,Zt={$$typeof:Dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Or(){return{controller:new Eh,data:new Map,refCount:0}}function Bn(t){t.refCount--,t.refCount===0&&jh(zh,function(){t.controller.abort()})}function Qs(t,e){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var l=e[t];a.indexOf(l)===-1&&a.push(l)}}}var Yn=null;function Mh(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Zn=null,Dr=0,vl=0,Ql=null;function Ch(t,e){if(Zn===null){var a=Zn=[];Dr=0,vl=Wc(),Ql={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Dr++,e.then(Ks,Ks),e}function Ks(){if(--Dr===0&&(Yn=null,Zn!==null)){Ql!==null&&(Ql.status="fulfilled");var t=Zn;Zn=null,vl=0,Ql=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ah(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Js=O.S;O.S=function(t,e){if(Z0=Se(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ch(t,e),Yn!==null)for(var a=fn;a!==null;)Qs(a,Yn),a=a.next;if(a=t.types,a!==null){for(var l=fn;l!==null;)Qs(l,a),l=l.next;if(vl!==0){l=Yn,l===null&&(l=Yn=[]);for(var n=0;n<a.length;n++){var i=a[n];l.indexOf(i)===-1&&l.push(i)}}}Js!==null&&Js(t,e)};var _l=Ut(null);function Ur(){var t=_l.current;return t!==null?t:Et.pooledCache}function Ki(t,e){e===null?dt(_l,_l.current):dt(_l,e.pool)}function Fs(){var t=Ur();return t===null?null:{parent:Zt._currentValue,pool:t}}var Kl=Error(f(460)),Rr=Error(f(474)),Ji=Error(f(542)),Fi={then:function(){}};function Ws(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $s(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ea,ea),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ps(t),t===void 0&&!("reason"in e)?Error(f(600)):t;default:if(typeof e.status=="string")e.then(ea,ea);else{if(t=Et,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ps(t),t}throw pl=e,Kl}}function gl(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pl=a,Kl):a}}var pl=null;function Is(){if(pl===null)throw Error(f(459));var t=pl;return pl=null,t}function Ps(t){if(t===Kl||t===Ji)throw Error(f(483))}var Jl=null,Ln=0;function Wi(t){var e=Ln;return Ln+=1,Jl===null&&(Jl=[]),$s(Jl,t,e)}function Ua(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function $i(t,e){throw e.$$typeof===ft?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function tf(t){function e(v,d){if(t){var p=v.deletions;p===null?(v.deletions=[d],v.flags|=16):p.push(d)}}function a(v,d){if(!t)return null;for(;d!==null;)e(v,d),d=d.sibling;return null}function l(v){for(var d=new Map;v!==null;)v.key===null?d.set(v.index,v):d.set(v.key,v),v=v.sibling;return d}function n(v,d){return v=pa(v,d),v.index=0,v.sibling=null,v}function i(v,d,p){return v.index=p,t?(p=v.alternate,p!==null?(p=p.index,p<d?(v.flags|=2,d):p):(v.flags|=134217730,d)):(v.flags|=1048576,d)}function u(v){return t&&v.alternate===null&&(v.flags|=134217730),v}function c(v,d,p,w){return d===null||d.tag!==6?(d=wr(p,v.mode,w),d.return=v,d):(d=n(d,p),d.return=v,d)}function o(v,d,p,w){var H=p.type;return H===ge?(v=q(v,d,p.props.children,w,p.key),Ua(v,p),v):d!==null&&(d.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===g&&gl(H)===d.type)?(d=n(d,p.props),Ua(d,p),d.return=v,d):(d=Yi(p.type,p.key,p.props,null,v.mode,w),Ua(d,p),d.return=v,d)}function _(v,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Er(p,v.mode,w),d.return=v,d):(d=n(d,p.children||[]),d.return=v,d)}function q(v,d,p,w,H){return d===null||d.tag!==7?(d=sl(p,v.mode,w,H),d.return=v,d):(d=n(d,p),d.return=v,d)}function E(v,d,p){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=wr(""+d,v.mode,p),d.return=v,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ue:return p=Yi(d.type,d.key,d.props,null,v.mode,p),Ua(p,d),p.return=v,p;case _e:return d=Er(d,v.mode,p),d.return=v,d;case g:return d=gl(d),E(v,d,p)}if(J(d)||j(d))return d=sl(d,v.mode,p,null),d.return=v,d;if(typeof d.then=="function")return E(v,Wi(d),p);if(d.$$typeof===Dt)return E(v,Qi(v,d),p);$i(v,d)}return null}function m(v,d,p,w){var H=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return H!==null?null:c(v,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ue:return p.key===H?o(v,d,p,w):null;case _e:return p.key===H?_(v,d,p,w):null;case g:return p=gl(p),m(v,d,p,w)}if(J(p)||j(p))return H!==null?null:q(v,d,p,w,null);if(typeof p.then=="function")return m(v,d,Wi(p),w);if(p.$$typeof===Dt)return m(v,d,Qi(v,p),w);$i(v,p)}return null}function b(v,d,p,w,H){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return v=v.get(p)||null,c(d,v,""+w,H);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ue:return v=v.get(w.key===null?p:w.key)||null,o(d,v,w,H);case _e:return v=v.get(w.key===null?p:w.key)||null,_(d,v,w,H);case g:return w=gl(w),b(v,d,p,w,H)}if(J(w)||j(w))return v=v.get(p)||null,q(d,v,w,H,null);if(typeof w.then=="function")return b(v,d,p,Wi(w),H);if(w.$$typeof===Dt)return b(v,d,p,Qi(d,w),H);$i(d,w)}return null}function D(v,d,p,w){for(var H=null,mt=null,K=d,I=d=0,Vt=null;K!==null&&I<p.length;I++){K.index>I?(Vt=K,K=null):Vt=K.sibling;var vt=m(v,K,p[I],w);if(vt===null){K===null&&(K=Vt);break}t&&K&&vt.alternate===null&&e(v,K),d=i(vt,d,I),mt===null?H=vt:mt.sibling=vt,mt=vt,K=Vt}if(I===p.length)return a(v,K),it&&xa(v,I),H;if(K===null){for(;I<p.length;I++)K=E(v,p[I],w),K!==null&&(d=i(K,d,I),mt===null?H=K:mt.sibling=K,mt=K);return it&&xa(v,I),H}for(K=l(K);I<p.length;I++)Vt=b(K,v,I,p[I],w),Vt!==null&&(t&&(vt=Vt.alternate,vt!==null&&K.delete(vt.key===null?I:vt.key)),d=i(Vt,d,I),mt===null?H=Vt:mt.sibling=Vt,mt=Vt);return t&&K.forEach(function(tl){return e(v,tl)}),it&&xa(v,I),H}function G(v,d,p,w){if(p==null)throw Error(f(151));for(var H=null,mt=null,K=d,I=d=0,Vt=null,vt=p.next();K!==null&&!vt.done;I++,vt=p.next()){K.index>I?(Vt=K,K=null):Vt=K.sibling;var tl=m(v,K,vt.value,w);if(tl===null){K===null&&(K=Vt);break}t&&K&&tl.alternate===null&&e(v,K),d=i(tl,d,I),mt===null?H=tl:mt.sibling=tl,mt=tl,K=Vt}if(vt.done)return a(v,K),it&&xa(v,I),H;if(K===null){for(;!vt.done;I++,vt=p.next())vt=E(v,vt.value,w),vt!==null&&(d=i(vt,d,I),mt===null?H=vt:mt.sibling=vt,mt=vt);return it&&xa(v,I),H}for(K=l(K);!vt.done;I++,vt=p.next())vt=b(K,v,I,vt.value,w),vt!==null&&(t&&(Vt=vt.alternate,Vt!==null&&K.delete(Vt.key===null?I:Vt.key)),d=i(vt,d,I),mt===null?H=vt:mt.sibling=vt,mt=vt);return t&&K.forEach(function(dv){return e(v,dv)}),it&&xa(v,I),H}function at(v,d,p,w){if(typeof p=="object"&&p!==null&&p.type===ge&&p.key===null&&p.props.ref===void 0&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ue:t:{for(var H=p.key;d!==null;){if(d.key===H){if(H=p.type,H===ge){if(d.tag===7){a(v,d.sibling),w=n(d,p.props.children),Ua(w,p),w.return=v,v=w;break t}}else if(d.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===g&&gl(H)===d.type){a(v,d.sibling),w=n(d,p.props),Ua(w,p),w.return=v,v=w;break t}a(v,d);break}else e(v,d);d=d.sibling}p.type===ge?(w=sl(p.props.children,v.mode,w,p.key),Ua(w,p),w.return=v,v=w):(w=Yi(p.type,p.key,p.props,null,v.mode,w),Ua(w,p),w.return=v,v=w)}return u(v);case _e:t:{for(H=p.key;d!==null;){if(d.key===H)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){a(v,d.sibling),w=n(d,p.children||[]),w.return=v,v=w;break t}else{a(v,d);break}else e(v,d);d=d.sibling}w=Er(p,v.mode,w),w.return=v,v=w}return u(v);case g:return p=gl(p),at(v,d,p,w)}if(J(p))return D(v,d,p,w);if(j(p)){if(H=j(p),typeof H!="function")throw Error(f(150));return p=H.call(p),G(v,d,p,w)}if(typeof p.then=="function")return at(v,d,Wi(p),w);if(p.$$typeof===Dt)return at(v,d,Qi(v,p),w);$i(v,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,d!==null&&d.tag===6?(a(v,d.sibling),w=n(d,p),w.return=v,v=w):(a(v,d),w=wr(p,v.mode,w),w.return=v,v=w),u(v)):a(v,d)}return function(v,d,p,w){try{Ln=0;var H=at(v,d,p,w);return Jl=null,H}catch(K){if(K===Kl||K===Ji)throw K;var mt=xe(29,K,null,v.mode);return mt.lanes=w,mt.return=v,mt}finally{}}}var xl=tf(!0),ef=tf(!1),Ra=!1;function kr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(pt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=Bi(t),Hs(t,null,a),e}return Hi(t,l,e,a),Bi(t)}function Gn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Lo(t,a)}}function Br(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Yr=!1;function Vn(){if(Yr){var t=Ql;if(t!==null)throw t}}function Xn(t,e,a,l){Yr=!1;var n=t.updateQueue;Ra=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var o=c,_=o.next;o.next=null,u===null?i=_:u.next=_,u=o;var q=t.alternate;q!==null&&(q=q.updateQueue,c=q.lastBaseUpdate,c!==u&&(c===null?q.firstBaseUpdate=_:c.next=_,q.lastBaseUpdate=o))}if(i!==null){var E=n.baseState;u=0,q=_=o=null,c=i;do{var m=c.lane&-536870913,b=m!==c.lane;if(b?(ht&m)===m:(l&m)===m){m!==0&&m===vl&&(Yr=!0),q!==null&&(q=q.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var D=t,G=c;m=e;var at=a;switch(G.tag){case 1:if(D=G.payload,typeof D=="function"){E=D.call(at,E,m);break t}E=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=G.payload,m=typeof D=="function"?D.call(at,E,m):D,m==null)break t;E=nt({},E,m);break t;case 2:Ra=!0}}m=c.callback,m!==null&&(t.flags|=64,b&&(t.flags|=8192),b=n.callbacks,b===null?n.callbacks=[m]:b.push(m))}else b={lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},q===null?(_=q=b,o=E):q=q.next=b,u|=m;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;b=c,c=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);q===null&&(o=E),n.baseState=o,n.firstBaseUpdate=_,n.lastBaseUpdate=q,i===null&&(n.shared.lanes=0),Xa|=u,t.lanes=u,t.memoizedState=E}}function af(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function lf(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)af(a[t],e)}var Ba=Ut(null),Ii=Ut(0);function nf(t,e){t=wa,dt(Ii,t),dt(Ba,e),wa=t|e.baseLanes}function Zr(){dt(Ii,wa),dt(Ba,Ba.current)}function Lr(){wa=Ii.current,yt(Ba),yt(Ii)}var ae=Ut(null),oe=null;function Ya(t){var e=t.alternate;dt(le,le.current&1),dt(ae,t),oe===null&&(e===null||Ba.current!==null||e.memoizedState!==null)&&(oe=t)}function Gr(t){dt(le,le.current),dt(ae,t),oe===null&&(oe=t)}function uf(t){t.tag===22?(dt(le,le.current),dt(ae,t),oe===null&&(oe=t)):Za()}function Za(){dt(le,le.current),dt(ae,ae.current)}function ze(t){yt(ae),oe===t&&(oe=null),yt(le)}var le=Ut(0);function Qn(t,e){dt(ae,ae.current),dt(le,e)}function Vr(t){yt(le),yt(ae),oe===t&&(oe=null)}function Pi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ho(a)||mo(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qa=0,et=null,Tt=null,Lt=null,tu=!1,Fl=!1,bl=!1,eu=0,Kn=0,Wl=null,Oh=0;function Rt(){throw Error(f(321))}function Xr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!je(t[a],e[a]))return!1;return!0}function Qr(t,e,a,l,n,i){return qa=i,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?Gf:Vf,bl=!1,i=a(l,n),bl=!1,Fl&&(i=cf(e,a,l,n)),rf(t),i}function rf(t){O.H=cu;var e=Tt!==null&&Tt.next!==null;if(qa=0,Lt=Tt=et=null,tu=!1,Kn=0,Wl=null,e)throw Error(f(300));t===null||Gt||(t=t.dependencies,t!==null&&Xi(t)&&(Gt=!0))}function cf(t,e,a,l){et=t;var n=0;do{if(Fl&&(Wl=null),Kn=0,Fl=!1,25<=n)throw Error(f(301));if(n+=1,Lt=Tt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=Zh,i=e(a,l)}while(Fl);return i}function Dh(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?Jn(e):e,t=t.useState()[0],(Tt!==null?Tt.memoizedState:null)!==t&&(et.flags|=1024),e}function Kr(){var t=eu!==0;return eu=0,t}function Jr(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Fr(t){if(tu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}tu=!1}qa=0,Lt=Tt=et=null,Fl=!1,Kn=eu=0,Wl=null}function de(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?et.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Yt(){if(Tt===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Lt===null?et.memoizedState:Lt.next;if(e!==null)Lt=e,Tt=t;else{if(t===null)throw et.alternate===null?Error(f(467)):Error(f(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Lt===null?et.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jn(t){var e=Kn;return Kn+=1,Wl===null&&(Wl=[]),t=$s(Wl,t,e),e=et,(Lt===null?e.memoizedState:Lt.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?Gf:Vf),t}function lu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jn(t);if(t.$$typeof===T)return;if(t.$$typeof===Dt)return ee(t)}throw Error(f(438,String(t)))}function Wr(t){var e=null,a=et.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=et.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=au(),et.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=F;return e.index++,a}function Na(t,e){return typeof e=="function"?e(t):e}function nu(t){var e=Yt();return $r(e,Tt,t)}function $r(t,e,a){var l=t.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,o=null,_=e,q=!1;do{var E=_.lane&-536870913;if(E!==_.lane?(ht&E)===E:(qa&E)===E){var m=_.revertLane;if(m===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),E===vl&&(q=!0);else if((qa&m)===m){_=_.next,m===vl&&(q=!0);continue}else E={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},o===null?(c=o=E,u=i):o=o.next=E,et.lanes|=m,Xa|=m;E=_.action,bl&&a(i,E),i=_.hasEagerState?_.eagerState:a(i,E)}else m={lane:E,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},o===null?(c=o=m,u=i):o=o.next=m,et.lanes|=E,Xa|=E;_=_.next}while(_!==null&&_!==e);if(o===null?u=i:o.next=c,!je(i,t.memoizedState)&&(Gt=!0,q&&(a=Ql,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ir(t){var e=Yt(),a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);je(i,e.memoizedState)||(Gt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function of(t,e,a){var l=et,n=Yt(),i=it;if(i){if(a===void 0)throw Error(f(407));a=a()}else a=e();var u=!je((Tt||n).memoizedState,a);if(u&&(n.memoizedState=a,Gt=!0),n=n.queue,ec(df.bind(null,l,n,t),[t]),t=n.getSnapshot!==e||u||Lt!==null&&(Lt.memoizedState.tag&1)!==0,$l(t?9:8,{destroy:void 0},ff.bind(null,l,n,a,e),null),t){if(l.flags|=2048,Et===null)throw Error(f(349));i||(qa&127)!==0||sf(l,e,a)}return a}function sf(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=et.updateQueue,e===null?(e=au(),et.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function ff(t,e,a,l){e.value=a,e.getSnapshot=l,hf(e)&&mf(t)}function df(t,e,a){return a(function(){hf(e)&&mf(t)})}function hf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!je(t,a)}catch{return!0}}function mf(t){var e=ol(t,2);e!==null&&Ne(e,t,2)}function Pr(t){var e=de();if(typeof t=="function"){var a=t;if(t=a(),bl){ja(!0);try{a()}finally{ja(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e}function vf(t,e,a,l){return t.baseState=a,$r(t,Tt,typeof l=="function"?l:Na)}function Uh(t,e,a,l,n){if(ru(t))throw Error(f(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};O.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,_f(e,i)):(i.next=a.next,e.pending=a.next=i)}}function _f(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=O.T,u={};u.types=i!==null?i.types:null,O.T=u;try{var c=a(n,l),o=O.S;o!==null&&o(u,c),gf(t,e,c)}catch(_){tc(t,e,_)}finally{i!==null&&u.types!==null&&(i.types=u.types),O.T=i}}else try{i=a(n,l),gf(t,e,i)}catch(_){tc(t,e,_)}}function gf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){pf(t,e,l)},function(l){return tc(t,e,l)}):pf(t,e,a)}function pf(t,e,a){e.status="fulfilled",e.value=a,xf(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,_f(t,a)))}function tc(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,xf(e),e=e.next;while(e!==l)}t.action=null}function xf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function bf(t,e){return e}function yf(t,e){if(it){var a=Et.formState;if(a!==null){t:{var l=et;if(it){if(jt){e:{for(var n=jt,i=Ze;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ge(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){jt=Ge(n.nextSibling),l=n.data==="F!";break t}}Oa(l)}l=!1}l&&(e=a[0])}}return a=de(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bf,lastRenderedState:e},a.queue=l,a=Yf.bind(null,et,l),l.dispatch=a,l=Pr(!1),i=uc.bind(null,et,!1,l.queue),l=de(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=Uh.bind(null,et,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function qf(t){var e=Yt();return Nf(e,Tt,t)}function Nf(t,e,a){if(e=$r(t,e,bf)[0],t=nu(Na)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Jn(e)}catch(u){throw u===Kl?Ji:u}else l=e;e=Yt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(et.flags|=2048,$l(9,{destroy:void 0},Rh.bind(null,n,a),null)),[l,i,t]}function Rh(t,e){t.action=e}function Sf(t){var e=Yt(),a=Tt;if(a!==null)return Nf(e,a,t);Yt(),e=e.memoizedState,a=Yt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function $l(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=et.updateQueue,e===null&&(e=au(),et.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Tf(){return Yt().memoizedState}function iu(t,e,a,l){var n=de();et.flags|=t,n.memoizedState=$l(1|e,{destroy:void 0},a,l===void 0?null:l)}function uu(t,e,a,l){var n=Yt();l=l===void 0?null:l;var i=n.memoizedState.inst;Tt!==null&&l!==null&&Xr(l,Tt.memoizedState.deps)?n.memoizedState=$l(e,i,a,l):(et.flags|=t,n.memoizedState=$l(1|e,i,a,l))}function wf(t,e){iu(8390656,8,t,e)}function ec(t,e){uu(2048,8,t,e)}function kh(t){et.flags|=4;var e=et.updateQueue;if(e===null)e=au(),et.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Ef(t){var e=Yt().memoizedState;return kh({ref:e,nextImpl:t}),function(){if((pt&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function jf(t,e){return uu(4,2,t,e)}function zf(t,e){return uu(4,4,t,e)}function Mf(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cf(t,e,a){a=a!=null?a.concat([t]):null,uu(4,4,Mf.bind(null,e,t),a)}function ac(){}function Af(t,e){var a=Yt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Xr(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function Of(t,e){var a=Yt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Xr(e,l[1]))return l[0];if(l=t(),bl){ja(!0);try{t()}finally{ja(!1)}}return a.memoizedState=[l,e],l}function lc(t,e,a){return a===void 0||(qa&1073741824)!==0&&(ht&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=G0(),et.lanes|=t,Xa|=t,a)}function Df(t,e,a,l){return je(a,e)?a:Ba.current!==null?(t=lc(t,a,l),je(t,e)||(Gt=!0),t):(qa&106)===0||(qa&1073741824)!==0&&(ht&261930)===0?(Gt=!0,t.memoizedState=a):(t=G0(),et.lanes|=t,Xa|=t,e)}function Uf(t,e,a,l,n){var i=k.p;k.p=i!==0&&8>i?i:8;var u=O.T,c={};c.types=u!==null?u.types:null,O.T=c,uc(t,!1,e,a);try{var o=n(),_=O.S;if(_!==null&&_(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var q=Ah(o,l);Fn(t,e,q,Oe(t))}else Fn(t,e,l,Oe(t))}catch(E){Fn(t,e,{then:function(){},status:"rejected",reason:E},Oe())}finally{k.p=i,u!==null&&c.types!==null&&(u.types=c.types),O.T=u}}function Hh(){}function nc(t,e,a,l){if(t.tag!==5)throw Error(f(476));var n=Rf(t).queue;Uf(t,n,e,wt,a===null?Hh:function(){return kf(t),a(l)})}function Rf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:wt,baseState:wt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:wt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function kf(t){var e=Rf(t);e.next===null&&(e=t.alternate.memoizedState),Fn(t,e.next.queue,{},Oe())}function ic(){return ee(gn)}function Hf(){return Yt().memoizedState}function Bf(){return Yt().memoizedState}function Bh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Oe();t=ka(a);var l=Ha(e,t,a);l!==null&&(Ne(l,e,a),Gn(l,e,a)),e={cache:Or()},t.payload=e;return}e=e.return}}function Yh(t,e,a){var l=Oe();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ru(t)?Zf(e,a):(a=Sr(t,e,a,l),a!==null&&(Ne(a,t,l),Lf(a,e,l)))}function Yf(t,e,a){var l=Oe();Fn(t,e,a,l)}function Fn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ru(t))Zf(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,je(c,u))return Hi(t,e,n,0),Et===null&&ki(),!1}catch{}finally{}if(a=Sr(t,e,n,l),a!==null)return Ne(a,t,l),Lf(a,e,l),!0}return!1}function uc(t,e,a,l){if(l={lane:2,revertLane:Wc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ru(t)){if(e)throw Error(f(479))}else e=Sr(t,a,l,2),e!==null&&Ne(e,t,2)}function ru(t){var e=t.alternate;return t===et||e!==null&&e===et}function Zf(t,e){Fl=tu=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Lf(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Lo(t,a)}}var cu={readContext:ee,use:lu,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt,useHostTransitionStatus:Rt,useFormState:Rt,useActionState:Rt,useOptimistic:Rt,useMemoCache:Rt,useCacheRefresh:Rt,useEffectEvent:Rt},Gf={readContext:ee,use:lu,useCallback:function(t,e){return de().memoizedState=[t,e===void 0?null:e],t},useContext:ee,useEffect:wf,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,iu(4194308,4,Mf.bind(null,e,t),a)},useLayoutEffect:function(t,e){return iu(4194308,4,t,e)},useInsertionEffect:function(t,e){iu(4,2,t,e)},useMemo:function(t,e){var a=de();e=e===void 0?null:e;var l=t();if(bl){ja(!0);try{t()}finally{ja(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=de();if(a!==void 0){var n=a(e);if(bl){ja(!0);try{a(e)}finally{ja(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Yh.bind(null,et,t),[l.memoizedState,t]},useRef:function(t){var e=de();return t={current:t},e.memoizedState=t},useState:function(t){t=Pr(t);var e=t.queue,a=Yf.bind(null,et,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:ac,useDeferredValue:function(t,e){var a=de();return lc(a,t,e)},useTransition:function(){var t=Pr(!1);return t=Uf.bind(null,et,t.queue,!0,!1),de().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=et,n=de();if(it){if(a===void 0)throw Error(f(407));a=a()}else{if(a=e(),Et===null)throw Error(f(349));(ht&127)!==0||sf(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,wf(df.bind(null,l,i,t),[t]),l.flags|=2048,$l(9,{destroy:void 0},ff.bind(null,l,i,a,e),null),a},useId:function(){var t=de(),e=Et.identifierPrefix;if(it){var a=la,l=aa;a=(l&~(1<<32-we(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=eu++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Oh++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ic,useFormState:yf,useActionState:yf,useOptimistic:function(t){var e=de();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=uc.bind(null,et,!0,a),a.dispatch=e,[t,e]},useMemoCache:Wr,useCacheRefresh:function(){return de().memoizedState=Bh.bind(null,et)},useEffectEvent:function(t){var e=de(),a={impl:t};return e.memoizedState=a,function(){if((pt&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},Vf={readContext:ee,use:lu,useCallback:Af,useContext:ee,useEffect:ec,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:zf,useMemo:Of,useReducer:nu,useRef:Tf,useState:function(){return nu(Na)},useDebugValue:ac,useDeferredValue:function(t,e){var a=Yt();return Df(a,Tt.memoizedState,t,e)},useTransition:function(){var t=nu(Na)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:Jn(t),e]},useSyncExternalStore:of,useId:Hf,useHostTransitionStatus:ic,useFormState:qf,useActionState:qf,useOptimistic:function(t,e){var a=Yt();return vf(a,Tt,t,e)},useMemoCache:Wr,useCacheRefresh:Bf,useEffectEvent:Ef},Zh={readContext:ee,use:lu,useCallback:Af,useContext:ee,useEffect:ec,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:zf,useMemo:Of,useReducer:Ir,useRef:Tf,useState:function(){return Ir(Na)},useDebugValue:ac,useDeferredValue:function(t,e){var a=Yt();return Tt===null?lc(a,t,e):Df(a,Tt.memoizedState,t,e)},useTransition:function(){var t=Ir(Na)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:Jn(t),e]},useSyncExternalStore:of,useId:Hf,useHostTransitionStatus:ic,useFormState:Sf,useActionState:Sf,useOptimistic:function(t,e){var a=Yt();return Tt!==null?vf(a,Tt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Wr,useCacheRefresh:Bf,useEffectEvent:Ef};function rc(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:nt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cc={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Oe(),n=ka(l);n.payload=e,a!=null&&(n.callback=a),e=Ha(t,n,l),e!==null&&(Ne(e,t,l),Gn(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Oe(),n=ka(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Ha(t,n,l),e!==null&&(Ne(e,t,l),Gn(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Oe(),l=ka(a);l.tag=2,e!=null&&(l.callback=e),e=Ha(t,l,a),e!==null&&(Ne(e,t,a),Gn(e,t,a))}};function Xf(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Un(a,l)||!Un(n,i):!0}function Qf(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function yl(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=nt({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Kf(t){Ri(t)}function Jf(t){console.error(t)}function Ff(t){Ri(t)}function ou(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Wf(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function oc(t,e,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){ou(t,e)},a}function $f(t){return t=ka(t),t.tag=3,t}function If(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Wf(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Wf(e,a,l),typeof n!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Lh(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&hl(e,a,n,!0),a=ae.current,a!==null){switch(a.tag){case 31:case 13:case 19:return oe===null?Mu():a.alternate===null&&kt===0&&(kt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Fi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Kc(t,l,n)),!1;case 22:return a.flags|=65536,l===Fi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Kc(t,l,n)),!1}throw Error(f(435,a.tag))}return Kc(t,l,n),Mu(),!1}if(it)return e=ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==zr&&(t=Error(f(422),{cause:l}),Hn(He(t,a)))):(l!==zr&&(e=Error(f(423),{cause:l}),Hn(He(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=He(l,a),n=oc(t.stateNode,l,n),Br(t,n),kt!==4&&(kt=2)),!1;var i=Error(f(520),{cause:l});if(i=He(i,a),li===null?li=[i]:li.push(i),kt!==4&&(kt=2),e===null)return!0;l=He(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=oc(a.stateNode,l,t),Br(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Qa===null||!Qa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=$f(n),If(n,t,a,l),Br(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var sc=Error(f(461)),Gt=!1;function Xt(t,e,a,l){e.child=t===null?ef(e,null,a,l):xl(e,t.child,a,l)}function Pf(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return ml(e),l=Qr(t,e,a,u,i,n),c=Kr(),t!==null&&!Gt?(Jr(t,e,n),Sa(t,e,n)):(it&&c&&Li(e),e.flags|=1,Xt(t,e,l,n),e.child)}function t0(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Tr(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,e0(t,e,i,l,n)):(t=Yi(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!pc(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Un,a(u,l)&&t.ref===e.ref)return Sa(t,e,n)}return e.flags|=1,t=pa(i,l),t.ref=e.ref,t.return=e,e.child=t}function e0(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Un(i,l)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=l=i,pc(t,n))(t.flags&131072)!==0&&(Gt=!0);else return e.lanes=t.lanes,Sa(t,e,n)}return fc(t,e,a,l,n)}function a0(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return l0(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ki(e,i!==null?i.cachePool:null),i!==null?nf(e,i):Zr(),uf(e);else return l=e.lanes=536870912,l0(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Ki(e,i.cachePool),nf(e,i),Za(),e.memoizedState=null):(t!==null&&Ki(e,null),Zr(),Za());return Xt(t,e,n,a),e.child}function Wn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function l0(t,e,a,l,n){var i=Ur();return i=i===null?null:{parent:Zt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Ki(e,null),Zr(),uf(e),t!==null&&hl(t,e,l,!0),e.childLanes=n,null}function su(t,e){return e=fu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function n0(t,e,a){return xl(e,t.child,null,a),t=su(e,e.pendingProps),t.flags|=2,ze(e),e.memoizedState=null,t}function Gh(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(it){if(l.mode==="hidden")return t=su(e,l),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Wn(null,t);if(Gr(e),(t=jt)?(t=Md(t,Ze),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:aa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Ys(t),a.return=e,e.child=a,$t=e,jt=null)):t=null,t===null)throw Oa(e);return e.lanes=536870912,null}return su(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Gr(e),n)if(e.flags&256)e.flags&=-257,e=n0(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Gt||hl(t,e,a,!1),n=(a&t.childLanes)!==0,Gt||n){if(Ba.current===null){if(l=Et,l!==null&&(u=Go(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,ol(t,u),Ne(l,t,u),sc;Mu()}e=n0(t,e,a)}else t=i.treeContext,jt=Ge(u.nextSibling),$t=e,it=!0,Aa=null,Ze=!1,t!==null&&Gs(e,t),e=su(e,l),e.flags|=134221824;return e}return t=pa(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Il(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function fc(t,e,a,l,n){return ml(e),a=Qr(t,e,a,l,void 0,n),l=Kr(),t!==null&&!Gt?(Jr(t,e,n),Sa(t,e,n)):(it&&l&&Li(e),e.flags|=1,Xt(t,e,a,n),e.child)}function i0(t,e,a,l,n,i){return ml(e),e.updateQueue=null,a=cf(e,l,a,n),rf(t),l=Kr(),t!==null&&!Gt?(Jr(t,e,i),Sa(t,e,i)):(it&&l&&Li(e),e.flags|=1,Xt(t,e,a,i),e.child)}function u0(t,e,a,l,n){if(ml(e),e.stateNode===null){var i=Ll,u=a.contextType;typeof u=="object"&&u!==null&&(i=ee(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},kr(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?ee(u):Ll,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(rc(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&cc.enqueueReplaceState(i,i.state,null),Xn(e,l,i,n),Vn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,o=yl(a,c);i.props=o;var _=i.context,q=a.contextType;u=Ll,typeof q=="object"&&q!==null&&(u=ee(q));var E=a.getDerivedStateFromProps;q=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,q||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||_!==u)&&Qf(e,i,l,u),Ra=!1;var m=e.memoizedState;i.state=m,Xn(e,l,i,n),Vn(),_=e.memoizedState,c||m!==_||Ra?(typeof E=="function"&&(rc(e,a,E,l),_=e.memoizedState),(o=Ra||Xf(e,a,o,l,m,_,u))?(q||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=_),i.props=l,i.state=_,i.context=u,l=o):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Hr(t,e),u=e.memoizedProps,q=yl(a,u),i.props=q,E=e.pendingProps,m=i.context,_=a.contextType,o=Ll,typeof _=="object"&&_!==null&&(o=ee(_)),c=a.getDerivedStateFromProps,(_=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==E||m!==o)&&Qf(e,i,l,o),Ra=!1,m=e.memoizedState,i.state=m,Xn(e,l,i,n),Vn();var b=e.memoizedState;u!==E||m!==b||Ra||t!==null&&t.dependencies!==null&&Xi(t.dependencies)?(typeof c=="function"&&(rc(e,a,c,l),b=e.memoizedState),(q=Ra||Xf(e,a,q,l,m,b,o)||t!==null&&t.dependencies!==null&&Xi(t.dependencies))?(_||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,o)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=b),i.props=l,i.state=b,i.context=o,l=q):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Il(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=xl(e,t.child,null,n),e.child=xl(e,null,a,n)):Xt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Sa(t,e,n),t}function r0(t,e,a,l){return fl(),e.flags|=256,Xt(t,e,a,l),e.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(t){return{baseLanes:t,cachePool:Fs()}}function mc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ae),t}function c0(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(it){if(n?Ya(e):Za(),(t=jt)?(t=Md(t,Ze),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:aa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Ys(t),a.return=e,e.child=a,$t=e,jt=null)):t=null,t===null)throw Oa(e);return mo(t)?e.lanes=32:e.lanes=536870912,null}return i=l.children,l=l.fallback,n?(Za(),n=e.mode,i=fu({mode:"hidden",children:i},n),l=sl(l,n,a,null),i.return=e,l.return=e,i.sibling=l,e.child=i,l=e.child,l.memoizedState=hc(a),l.childLanes=mc(t,u,a),e.memoizedState=dc,Wn(null,l)):(Ya(e),vc(e,i))}var c=t.memoizedState;if(c!==null){var o=c.dehydrated;if(o!==null)return Vh(t,e,i,u,l,o,c,a)}return n?(Za(),n=l.fallback,i=e.mode,c=t.child,o=c.sibling,l=pa(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&1206910976,o!==null?n=pa(o,n):(n=sl(n,i,a,null),n.flags|=2),n.return=e,l.return=e,l.sibling=n,e.child=l,Wn(null,l),l=e.child,n=t.child.memoizedState,n===null?n=hc(a):(i=n.cachePool,i!==null?(c=Zt._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Fs(),n={baseLanes:n.baseLanes|a,cachePool:i}),l.memoizedState=n,l.childLanes=mc(t,u,a),e.memoizedState=dc,Wn(t.child,l)):(Ya(e),a=t.child,t=a.sibling,a=pa(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function vc(t,e){return e=fu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function fu(t,e){return t=xe(22,t,null,e),t.lanes=0,t}function du(t,e,a){return xl(e,t.child,null,a),t=vc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vh(t,e,a,l,n,i,u,c){if(a)return e.flags&256?(Ya(e),e.flags&=-257,du(t,e,c)):e.memoizedState!==null?(Za(),e.child=t.child,e.flags|=128,null):(Za(),i=n.fallback,u=e.mode,n=fu({mode:"visible",children:n.children},u),i=sl(i,u,c,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,xl(e,t.child,null,c),n=e.child,n.memoizedState=hc(c),n.childLanes=mc(t,l,c),e.memoizedState=dc,Wn(null,n));if(Ya(e),mo(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var o=l.dgst;return l=o,l!==""&&(n=Error(f(419)),n.stack="",n.digest=l,Hn({value:n,source:null,stack:null})),du(t,e,c)}if(Gt||hl(t,e,c,!1),l=(c&t.childLanes)!==0,Gt||l){if(Ba.current!==null)return du(t,e,c);if(l=Et,l!==null&&(n=Go(l,c),n!==0&&n!==u.retryLane))throw u.retryLane=n,ol(t,n),Ne(l,t,n),sc;return ho(i)||Mu(),du(t,e,c)}return ho(i)?(e.flags|=192,e.child=t.child,null):(t=u.treeContext,jt=Ge(i.nextSibling),$t=e,it=!0,Aa=null,Ze=!1,t!==null&&Gs(e,t),e=vc(e,n.children),e.flags|=134221824,e)}function o0(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Vi(t.return,e,a)}function s0(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&Pi(a)===null&&(e=t),t=t.sibling}return e}function hu(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function _c(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function gc(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=le.current;if(e.flags&128)return Qn(e,u),null;var c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,Qn(e,u),n==="backwards"&&t!==null?(_c(t),Xt(t,e,l,a),_c(t)):Xt(t,e,l,a),l=it?kn:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o0(t,a,e);else if(t.tag===19)o0(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=s0(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,_c(e)),hu(e,!0,n,null,i,l);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Pi(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}hu(e,!0,a,null,i,l);break;case"together":hu(e,!1,null,null,void 0,l);break;case"independent":e.memoizedState=null;break;default:a=s0(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),hu(e,!1,n,a,i,l)}return e.child}function f0(t,e,a){var l=e.pendingProps;return Da(e,e.type,l.value),Xt(t,e,l.children,a),e.child}function Sa(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Xa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(hl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,a=pa(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=pa(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function pc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Xi(t)))}function Xh(t,e,a){switch(e.tag){case 3:jl(e,e.stateNode.containerInfo),Da(e,Zt,t.memoizedState.cache),fl();break;case 27:case 5:yn(e);break;case 4:jl(e,e.stateNode.containerInfo);break;case 10:Da(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Gr(e),null;break;case 13:var l=e.memoizedState;if(l!==null){if(l.dehydrated!==null)return Ya(e),e.flags|=128,null;l=hl(t,e,a,!1);var n=e.child.childLanes;return l||(a&n)!==0?c0(t,e,a):(Ya(e),t=Sa(t,e,a),t!==null?t.sibling:null)}Ya(e);break;case 19:if(e.flags&128)return gc(t,e,a);if(n=(t.flags&128)!==0,l=(a&e.childLanes)!==0,l||(hl(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return gc(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Qn(e,le.current),l)break;return null;case 22:return e.lanes=0,a0(t,e,a,e.pendingProps);case 24:Da(e,Zt,t.memoizedState.cache)}return Sa(t,e,a)}function d0(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Gt=!0;else{if(!pc(t,a)&&(e.flags&128)===0)return Gt=!1,Xh(t,e,a);Gt=(t.flags&131072)!==0}else Gt=!1,it&&(e.flags&1048576)!==0&&Ls(e,kn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=gl(e.elementType),e.type=t,typeof t=="function")Tr(t)?(l=yl(t,l),e.tag=1,e=u0(null,e,t,l,a)):(e.tag=0,e=fc(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===U){e.tag=11,e=Pf(null,e,t,l,a);break t}else if(n===bt){e.tag=14,e=t0(null,e,t,l,a);break t}else if(n===Dt){e.tag=10,e.type=t,e=f0(null,e,a);break t}}throw e=X(t)||t,Error(f(306,e,""))}}return e;case 0:return fc(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=yl(l,e.pendingProps),u0(t,e,l,n,a);case 3:t:{if(jl(e,e.stateNode.containerInfo),t===null)throw Error(f(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Hr(t,e),Xn(e,l,null,a);var u=e.memoizedState;if(l=u.cache,Da(e,Zt,l),l!==i.cache&&Ar(e,[Zt],a,!0),Vn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=r0(t,e,l,a);break t}else if(l!==n){n=He(Error(f(424)),e),Hn(n),e=r0(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(jt=Ge(t.firstChild),$t=e,it=!0,Aa=null,Ze=!0,a=ef(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(fl(),l===n){e=Sa(t,e,a);break t}Xt(t,e,l,a)}e=e.child}return e;case 26:return Il(t,e),t===null?(a=kd(e.type,null,e.pendingProps,null))?e.memoizedState=a:it||(e.stateNode=_d(e.type,e.pendingProps,ta.current,e)):e.memoizedState=kd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return yn(e),t===null&&it&&(l=e.stateNode=Od(e.type,e.pendingProps,ta.current),$t=e,Ze=!0,n=jt,Fa(e.type)?(vo=n,jt=Ge(l.firstChild)):jt=n),Xt(t,e,e.pendingProps.children,a),Il(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&it&&((n=l=jt)&&(l=Bm(l,e.type,e.pendingProps,Ze),l!==null?(e.stateNode=l,$t=e,jt=Ge(l.firstChild),Ze=!1,n=!0):n=!1),n||Oa(e)),yn(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,io(n,i)?l=null:u!==null&&io(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Qr(t,e,Dh,null,null,a),gn._currentValue=n),Il(t,e),Xt(t,e,l,a),e.child;case 6:return t===null&&it&&((t=a=jt)&&(a=Ym(a,e.pendingProps,Ze),a!==null?(e.stateNode=a,$t=e,jt=null,t=!0):t=!1),t||Oa(e)),null;case 13:return c0(t,e,a);case 4:return jl(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=xl(e,null,l,a):Xt(t,e,l,a),e.child;case 11:return Pf(t,e,e.type,e.pendingProps,a);case 7:return l=e.pendingProps,Il(t,e),Xt(t,e,l,a),e.child;case 8:return Xt(t,e,e.pendingProps.children,a),e.child;case 12:return Xt(t,e,e.pendingProps.children,a),e.child;case 10:return f0(t,e,a);case 9:return n=e.type._context,l=e.pendingProps.children,ml(e),n=ee(n),l=l(n),e.flags|=1,Xt(t,e,l,a),e.child;case 14:return t0(t,e,e.type,e.pendingProps,a);case 15:return e0(t,e,e.type,e.pendingProps,a);case 19:return gc(t,e,a);case 31:return Gh(t,e,a);case 22:return a0(t,e,a,e.pendingProps);case 24:return ml(e),l=ee(Zt),t===null?(n=Ur(),n===null&&(n=Et,i=Or(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},kr(e),Da(e,Zt,n)):((t.lanes&a)!==0&&(Hr(t,e),Xn(e,null,null,a),Vn()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Da(e,Zt,l)):(l=i.cache,Da(e,Zt,l),l!==n.cache&&Ar(e,[Zt],a,!0))),Xt(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=e.pendingProps,l.name!=null&&l.name!=="auto"?e.flags|=t===null?18882560:18874368:it&&Li(e),t!==null&&t.memoizedProps.name!==l.name?e.flags|=4194816:Il(t,e),Xt(t,e,l.children,a),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function Ta(t){t.flags|=4}function xc(t,e,a,l,n){var i;if((i=(t.mode&32)!==0)&&(i=a===null?Zd(e,l):Zd(e,l)&&(l.src!==a.src||l.srcSet!==a.srcSet)),i){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(K0())t.flags|=8192;else throw pl=Fi,Rr}else t.flags&=-16777217}function h0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ld(e))if(K0())t.flags|=8192;else throw pl=Fi,Rr}function mu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Yo():536870912,t.lanes|=e,ln|=e)}function $n(t,e){if(!it)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&1206910976,l|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function Qh(t,e,a){var l=e.pendingProps;switch(jr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return zt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ya(Zt),da(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xl(e)?Ta(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Mr())),zt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ta(e),i!==null?(zt(e),h0(e,i)):(zt(e),xc(e,n,null,l,a))):i?i!==t.memoizedState?(Ta(e),zt(e),h0(e,i)):(zt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ta(e),zt(e),xc(e,n,t,l,a)),null;case 27:if(al(e),a=ta.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ta(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return zt(e),e.subtreeFlags&=-33554433,null}t=Ft.current,Xl(e)?Vs(e):(t=Od(n,l,a),e.stateNode=t,Ta(e))}return zt(e),e.subtreeFlags&=-33554433,null;case 5:if(al(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ta(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return zt(e),e.subtreeFlags&=-33554433,null}if(i=Ft.current,Xl(e))Vs(e);else{var u=ci(ta.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[te]=e,i[pe]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(ie(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ta(e)}}return zt(e),e.subtreeFlags&=-33554433,xc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Ta(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(f(166));if(t=ta.current,Xl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=$t,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[te]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||dd(t.nodeValue,a)),t||Oa(e,!0)}else t=ci(t).createTextNode(l),t[te]=e,e.stateNode=t}return zt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=Xl(e),a!==null){if(t===null){if(!l)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[te]=e}else fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;zt(e),t=!1}else a=Mr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ze(e),e):(ze(e),null);if((e.flags&128)!==0)throw Error(f(558))}return zt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Xl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(f(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[te]=e}else fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;zt(e),n=!1}else n=Mr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ze(e),e):(ze(e),null)}return ze(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),mu(e,e.updateQueue),zt(e),null);case 4:return da(),t===null&&to(e.stateNode.containerInfo),e.flags|=67108864,zt(e),null;case 10:return ya(e.type),zt(e),null;case 19:if(Vr(e),l=e.memoizedState,l===null)return zt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)$n(l,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Pi(t),i!==null){for(e.flags|=128,$n(l,!1),t=i.updateQueue,e.updateQueue=t,mu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Bs(a,t),a=a.sibling;return Qn(e,le.current&1|2),it&&xa(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&Se()>wu&&(e.flags|=128,n=!0,$n(l,!1),e.lanes=4194304)}else{if(!n)if(t=Pi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,mu(e,t),$n(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!it)return zt(e),null}else 2*Se()-l.renderingStartTime>wu&&a!==536870912&&(e.flags|=128,n=!0,$n(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}if(l.tail!==null){t=l.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Se(),t.sibling=null,i=le.current,i=n?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!a||it?Qn(e,i):(a=i,dt(ae,e),dt(le,a),oe===null&&(oe=e)),it&&xa(e,l.treeForkCount),t}return zt(e),null;case 22:case 23:return ze(e),Lr(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),a=e.updateQueue,a!==null&&mu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&yt(_l),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ya(Zt),zt(e),null;case 25:return null;case 30:return e.flags|=33554432,zt(e),null}throw Error(f(156,e.tag))}function Kh(t,e){switch(jr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ya(Zt),da(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return al(e),null;case 31:if(e.memoizedState!==null){if(ze(e),e.alternate===null)throw Error(f(340));fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ze(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Vr(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return da(),null;case 10:return ya(e.type),null;case 22:case 23:return ze(e),Lr(),t!==null&&yt(_l),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ya(Zt),null;case 25:return null;default:return null}}function m0(t,e){switch(jr(e),e.tag){case 3:ya(Zt),da();break;case 26:case 27:case 5:al(e);break;case 4:da();break;case 31:e.memoizedState!==null&&ze(e);break;case 13:ze(e);break;case 19:Vr(e);break;case 10:ya(e.type);break;case 22:case 23:ze(e),Lr(),t!==null&&yt(_l);break;case 24:ya(Zt)}}function In(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){Nt(e,e.return,c)}}function La(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var o=a,_=c;try{_()}catch(q){Nt(n,o,q)}}}l=l.next}while(l!==i)}}catch(q){Nt(e,e.return,q)}}function v0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{lf(e,a)}catch(l){Nt(t,t.return,l)}}}function _0(t,e,a){a.props=yl(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Nt(t,e,l)}}function na(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:var n=t.stateNode,i=_a(t.memoizedProps,n);(n.ref===null||n.ref.name!==i)&&(n.ref=Nd(i)),l=n.ref;break;case 7:if(t.stateNode===null){var u=new De(t);N(t.child,!1,km,u,void 0,void 0),t.stateNode=u}l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(c){Nt(t,e,c)}}function ne(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Nt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Nt(t,e,n)}else a.current=null}function vu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)zd(t.stateNode,e[a])}function g0(t){for(var e=t.return;e!==null&&(yc(e)&&zd(t.stateNode,e.stateNode),!bc(e));)e=e.return}function Pn(t){for(var e=t.return;e!==null&&(yc(e)&&Hm(t.stateNode,e.stateNode),!bc(e));)e=e.return}function bc(t){return t.tag===5||t.tag===3||t.tag===27}function yc(t){return t&&t.tag===7&&t.stateNode!==null}function qc(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Nt(t,t.return,n)}}function Nc(t,e,a){try{var l=t.stateNode;xm(l,t.type,a,e),l[pe]=e}catch(n){Nt(t,t.return,n)}}function p0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function Sc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tc(t,e,a,l){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ea)),vu(t,l),gt=!0;else if(n!==4&&(n===27&&(vu(t,l),l=null,Fa(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(Tc(t,e,a,l),t=t.sibling;t!==null;)Tc(t,e,a,l),t=t.sibling}function _u(t,e,a,l){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),vu(t,l),gt=!0;else if(n!==4&&(n===27&&(vu(t,l),l=null,Fa(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(_u(t,e,a,l),t=t.sibling;t!==null;)_u(t,e,a,l),t=t.sibling}function x0(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ie(e,l,a),e[te]=t,e[pe]=a}catch(i){Nt(t,t.return,i)}}var gu=!1,Me=null;function b0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(gu=!0)}var ia=null;function y0(){var t=ia;return ia=null,t}var be=0;function Pl(t,e,a,l,n){return be=0,q0(t.child,e,a,l,n)}function q0(t,e,a,l,n){for(var i=!1;t!==null;){if(t.tag===5){var u=t.stateNode;if(l!==null){var c=co(u);l.push(c),c.view&&(i=!0)}else i||co(u).view&&(i=!0);gu=!0,yd(u,be===0?e:e+"_"+be,a),be++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||q0(t.child,e,a,l,n)&&(i=!0));t=t.sibling}return i}function ua(t,e){for(;t!==null;)t.tag===5?qd(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||ua(t.child,e)),t=t.sibling}function pu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(pu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(f(544));var a=e.name;e=ga(e.default,e.share),e!=="none"&&(Pl(t,a,e,null,!1)||ua(t.child,!1))}t=t.sibling}}function wc(t,e){if(t.tag===30){var a=t.stateNode,l=t.memoizedProps,n=_a(l,a),i=ga(l.default,a.paired?l.share:l.enter);i!=="none"?Pl(t,n,i,null,!1)?(pu(t),a.paired||e||cn(t,l.onEnter)):ua(t.child,!1):pu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)wc(t,e),t=t.sibling;else pu(t)}function Ec(t){if(Me!==null&&Me.size!==0){var e=Me;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,l=a.name;if(l!=null&&l!=="auto"){var n=e.get(l);if(n!==void 0){var i=ga(a.default,a.share);if(i!=="none"&&(Pl(t,l,i,null,!1)?(i=t.stateNode,n.paired=i,i.paired=n,cn(t,a.onShare)):ua(t.child,!1)),e.delete(l),e.size===0)break}}}Ec(t)}t=t.sibling}}}function jc(t){if(t.tag===30){var e=t.memoizedProps,a=_a(e,t.stateNode),l=Me!==null?Me.get(a):void 0,n=ga(e.default,l!==void 0?e.share:e.exit);n!=="none"&&(Pl(t,a,n,null,!1)?l!==void 0?(n=t.stateNode,l.paired=n,n.paired=l,Me.delete(a),cn(t,e.onShare)):cn(t,e.onExit):ua(t.child,!1)),Me!==null&&Ec(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)jc(t),t=t.sibling;else Me!==null&&Ec(t)}function N0(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=_a(e,t.stateNode);e=ga(e.default,e.update),t.flags&=-5,e!=="none"&&Pl(t,a,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&N0(t);t=t.sibling}}function zc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,ua(t.child,!1))}zc(t)}t=t.sibling}}function xu(t){if(t.tag===30)t.stateNode.paired=null,ua(t.child,!1),zc(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xu(t),t=t.sibling;else zc(t)}function S0(t){for(t=t.child;t!==null;)t.tag===30?ua(t.child,!1):(t.subtreeFlags&33554432)!==0&&S0(t),t=t.sibling}function Mc(t,e,a,l,n,i,u){for(var c=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(i!==null&&be<i.length){var _=i[be],q=co(o);(_.view||q.view)&&(c=!0);var E;if(E=(t.flags&4)===0)if(q.clip)E=!0;else{E=_.rect;var m=q.rect;E=E.y!==m.y||E.x!==m.x||E.height!==m.height||E.width!==m.width}E&&(t.flags|=4),q.abs?q=!_.abs:(_=_.rect,q=q.rect,q=_.height!==q.height||_.width!==q.width),q&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&yd(o,be===0?a:a+"_"+be,n),c&&(t.flags&4)!==0||(ia===null&&(ia=[]),ia.push(o,be===0?l:l+"_"+be,e.memoizedProps)),be++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u?t.flags|=e.flags&32:Mc(t,e.child,a,l,n,i,u)&&(c=!0));e=e.sibling}return c}function T0(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,l=t.stateNode,n=_a(a,l),i=ga(a.default,a.update),u;u=t.memoizedState,t.memoizedState=null,l=t;var c=t.child;be=0,n=Mc(l,c,n,n,i,u,!1),(t.flags&4)!==0&&n&&cn(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&T0(t);t=t.sibling}}var It=!1,xt=!1,ra=!1,Cc=!1,w0=typeof WeakSet=="function"?WeakSet:Set,Pt=null,ca=!1,ti=!1,bu=!1,Ac=!1;function Jh(t,e,a){if(t=t.containerInfo,lo=pn,t=zs(t),pr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var c=0,o=-1,_=-1,q=0,E=0,m=t,b=null;e:for(;;){for(var D;m!==l||i!==0&&m.nodeType!==3||(o=c+i),m!==u||n!==0&&m.nodeType!==3||(_=c+n),m.nodeType===3&&(c+=m.nodeValue.length),(D=m.firstChild)!==null;)b=m,m=D;for(;;){if(m===t)break e;if(b===l&&++q===i&&(o=c),b===u&&++E===n&&(_=c),(D=m.nextSibling)!==null)break;m=b,b=m.parentNode}m=D}l=o===-1||_===-1?null:{start:o,end:_}}else l=null}l=l||{start:0,end:0}}else l=null;for(no={focusedElem:t,selectionRange:l},pn=!1,a=(a&335544064)===a,Pt=e,e=a?9270:1024;Pt!==null;){if(t=Pt,a&&(l=t.deletions,l!==null))for(i=0;i<l.length;i++)a&&jc(l[i]);if(t.alternate===null&&(t.flags&2)!==0)a&&b0(t),yu(a);else{if(t.tag===22){if(l=t.alternate,t.memoizedState!==null){l!==null&&l.memoizedState===null&&a&&jc(l),yu(a);continue}else if(l!==null&&l.memoizedState!==null){a&&b0(t),yu(a);continue}}l=t.child,(t.subtreeFlags&e)!==0&&l!==null?(l.return=t,Pt=l):(a&&N0(t),yu(a))}}Me=null}function yu(t){for(;Pt!==null;){var e=Pt,a=t,l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){a=void 0,n=l.memoizedProps,l=l.memoizedState;var i=e.stateNode;try{var u=yl(e.type,n);a=i.getSnapshotBeforeUpdate(u,l),i.__reactInternalSnapshotBeforeUpdate=a}catch(c){Nt(e,e.return,c)}}break;case 3:if((n&1024)!==0){if(l=e.stateNode.containerInfo,a=l.nodeType,a===9)fo(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":fo(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&l!==null&&(a=_a(l.memoizedProps,l.stateNode),n=e.memoizedProps,n=ga(n.default,n.update),n!=="none"&&Pl(l,a,n,l.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(f(163))}if(l=e.sibling,l!==null){l.return=e.return,Pt=l;break}Pt=e.return}}function E0(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),l&4&&In(5,a);break;case 1:if(oa(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){Nt(a,a.return,u)}else{var n=yl(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){Nt(a,a.return,u)}}l&64&&v0(a),l&512&&na(a,a.return);break;case 3:if(oa(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{lf(t,e)}catch(u){Nt(a,a.return,u)}}break;case 27:e===null&&l&4&&x0(a);case 26:case 5:oa(t,a),e===null&&l&4&&qc(a),l&512&&na(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),l&4&&C0(t,a);break;case 13:oa(t,a),l&4&&A0(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=um.bind(null,a),Zm(t,a))));break;case 22:if(l=a.memoizedState!==null||It,!l){var i=e!==null&&e.memoizedState!==null||xt;e=It,n=xt,It=l,(xt=i)&&!n?(l=2,(a.subtreeFlags&8772)!==0&&(l|=1),Fe(t,a,l)):oa(t,a),It=e,xt=n}break;case 30:oa(t,a),l&512&&na(a,a.return);break;case 7:l&512&&na(a,a.return);default:oa(t,a)}}function Oc(t,e){for(t=t.child;t!==null;)j0(t,e),t=t.sibling}function j0(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var l=a.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var n=t.stateNode,i=t.memoizedProps.style,u=i!=null&&i.hasOwnProperty("display")?i.display:null;n.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(o){Nt(t,t.return,o)}Dc(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,gt=!0}catch(o){Nt(t,t.return,o)}break;case 18:try{var c=t.stateNode;e?bd(c,!0):bd(t.stateNode,!1)}catch(o){Nt(t,t.return,o)}break;case 22:case 23:t.memoizedState===null&&Oc(t,e);break;default:Oc(t,e)}}function Dc(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,l=e;switch(a.tag){case 4:j0(a,l);break t;case 22:a.memoizedState===null&&Dc(a,l);break t;default:Dc(a,l)}}t=t.sibling}}function z0(t){var e=t.alternate;e!==null&&(t.alternate=null,z0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&wi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ct=null,ye=!1;function Ke(t,e,a){for(a=a.child;a!==null;)M0(t,e,a),a=a.sibling}function M0(t,e,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Nn,a)}catch{}switch(a.tag){case 26:xt||ne(a,e),Ke(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!xt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xt||ne(a,e),Pn(a);var l=Ct,n=ye;Fa(a.type)&&(Ct=a.stateNode,ye=!1),Ke(t,e,a),Dd(a.stateNode,a.type,a.memoizedProps),Ct=l,ye=n;break;case 5:xt||ne(a,e),Pn(a);case 6:if(a.tag===6&&Pn(a),l=Ct,n=ye,Ct=null,Ke(t,e,a),Ct=l,ye=n,Ct!==null)if(ye)try{(Ct.nodeType===9?Ct.body:Ct.nodeName==="HTML"?Ct.ownerDocument.body:Ct).removeChild(a.stateNode),gt=!0}catch(i){Nt(a,e,i)}else try{Ct.removeChild(a.stateNode),gt=!0}catch(i){Nt(a,e,i)}break;case 18:Ct!==null&&(ye?(t=Ct,xd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xn(t)):xd(Ct,a.stateNode));break;case 4:l=Ct,n=ye,Ct=a.stateNode.containerInfo,ye=!0,Ke(t,e,a),Ct=l,ye=n;break;case 0:case 11:case 14:case 15:La(2,a,e),xt||La(4,a,e),Ke(t,e,a);break;case 1:xt||(ne(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&_0(a,e,l)),Ke(t,e,a);break;case 21:Ke(t,e,a);break;case 22:xt=(l=xt)||a.memoizedState!==null,Ke(t,e,a),xt=l;break;case 30:ne(a,e),Ke(t,e,a);break;case 7:xt||ne(a,e),Ke(t,e,a);break;default:Ke(t,e,a)}}function C0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xn(t)}catch(a){Nt(e,e.return,a)}}}function A0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xn(t)}catch(a){Nt(e,e.return,a)}}function Fh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new w0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new w0),e;default:throw Error(f(435,t.tag))}}function qu(t,e){var a=Fh(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=rm.bind(null,t,l);l.then(n,n)}})}function he(t,e,a){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var i=l[n],u=t,c=e,o=c;t:for(;o!==null;){switch(o.tag){case 27:if(Fa(o.type)){Ct=o.stateNode,ye=!1;break t}break;case 5:Ct=o.stateNode,ye=!1;break t;case 3:case 4:Ct=o.stateNode.containerInfo,ye=!0;break t}o=o.return}if(Ct===null)throw Error(f(160));M0(u,c,i),Ct=null,ye=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)O0(e,t,a),e=e.sibling}var Je=null;function O0(t,e,a){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var u=l[i];u.ref.impl=u.nextImpl}he(e,t,a),me(t),n&4&&(La(3,t,t.return),In(3,t),La(5,t,t.return));break;case 1:he(e,t,a),me(t),n&512&&(xt||l===null||ne(l,l.return)),n&64&&It&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(i=Je,he(e,t,a),me(t),n&512&&(xt||l===null||ne(l,l.return)),n&4)if(n=l!==null?l.memoizedState:null,a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null)if(It)t.stateNode=_d(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,a=t.memoizedProps,n=i.ownerDocument||i;e:switch(e){case"title":l=n.getElementsByTagName("title")[0],(!l||l[wn]||l[te]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(e),n.head.insertBefore(l,n.querySelector("head > title"))),ie(l,e,a),l[te]=t,Wt(l),e=l;break t;case"link":if(i=Yd("link","href",n).get(e+(a.href||""))){for(u=0;u<i.length;u++)if(l=i[u],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(u,1);break e}}l=n.createElement(e),ie(l,e,a),n.head.appendChild(l);break;case"meta":if(i=Yd("meta","content",n).get(e+(a.content||""))){for(u=0;u<i.length;u++)if(l=i[u],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(u,1);break e}}l=n.createElement(e),ie(l,e,a),n.head.appendChild(l);break;default:throw Error(f(468,e))}l[te]=t,Wt(l),e=l}t.stateNode=e}else It||xo(i,t.type,t.stateNode);else t.stateNode=Bd(i,a,t.memoizedProps);else n!==a?(n===null?(e=l.stateNode,e===null||xt||e.parentNode.removeChild(e)):n.count--,a===null?It||xo(i,t.type,t.stateNode):Bd(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Nc(t,t.memoizedProps,l.memoizedProps);break;case 27:he(e,t,a),me(t),n&512&&(xt||l===null||ne(l,l.return)),l!==null&&n&4&&Nc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(i=ra,ra=!1,he(e,t,a),ra=i,me(t),n&512&&(xt||l===null||ne(l,l.return)),t.flags&32){e=t.stateNode;try{Ul(e,""),gt=!0}catch(q){Nt(t,t.return,q)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,Nc(t,e,l!==null?l.memoizedProps:e)),n&1024&&(Cc=!0);break;case 6:if(he(e,t,a),me(t),n&4){if(t.stateNode===null)throw Error(f(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,gt=!0}catch(q){Nt(t,t.return,q)}}break;case 3:if(gt=!1,ku=null,i=Je,Je=oi(e.containerInfo),he(e,t,a),Je=i,me(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{xn(e.containerInfo)}catch(q){Nt(t,t.return,q)}Cc&&(Cc=!1,D0(t)),gt=!1;break;case 4:n=ra,ra=It,l=Po(),i=Je,Je=oi(t.stateNode.containerInfo),he(e,t,a),me(t),Je=i,gt&&ti&&(bu=!0),gt=l,ra=n;break;case 12:he(e,t,a),me(t);break;case 31:he(e,t,a),me(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,qu(t,e)));break;case 13:he(e,t,a),me(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Tu=Se()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,qu(t,e)));break;case 22:i=t.memoizedState!==null,u=l!==null&&l.memoizedState!==null;var c=It,o=xt,_=ra;It=c||i,ra=_||i,xt=o||u,he(e,t,a),xt=o,ra=_,It=c,me(t),n&8192&&(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||l===null||u||It||xt||(e=u||xt,a=It,l=xt,It=i||It,xt=e,Ga(t,2),It=a,xt=l),!i&&ra||Oc(t,i)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,qu(t,a))));break;case 19:he(e,t,a),me(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,qu(t,e)));break;case 30:n&512&&(xt||l===null||ne(l,l.return)),n=Po(),i=ti,u=(a&335544064)===a,c=t.memoizedProps,ti=u&&ga(c.default,c.update)!=="none",he(e,t,a),me(t),u&&l!==null&&gt&&(t.flags|=4),ti=i,gt=n;break;case 21:break;case 7:n&512&&(xt||l===null||ne(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=t);default:he(e,t,a),me(t)}}function me(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(p0(l)){a=l;break}l=l.return}l=null;for(var n=t.return;n!==null;){if(yc(n)){var i=n.stateNode;l===null?l=[i]:l.push(i)}if(bc(n))break;n=n.return}var u=l;if(a==null)throw Error(f(160));switch(a.tag){case 27:var c=a.stateNode,o=Sc(t);_u(t,o,c,u);break;case 5:var _=a.stateNode;a.flags&32&&(Ul(_,""),a.flags&=-33);var q=Sc(t);_u(t,q,_,u);break;case 3:case 4:var E=a.stateNode.containerInfo,m=Sc(t);Tc(t,m,E,u);break;default:throw Error(f(161))}}catch(b){Nt(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;D0(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,pn=!0,e.reset(),pn=!1),t=t.sibling}}function tn(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)U0(e,t),e=e.sibling;else T0(e)}function U0(t,e){var a=t.alternate;if(a===null)wc(t,!1);else switch(t.tag){case 3:if(Ac=ca=!1,y0(),tn(e,t),!ca&&!bu){if(t=ia,t!==null)for(var l=0;l<t.length;l+=3){a=t[l];var n=t[l+1];qd(a,t[l+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ac=!0}ia=null;break;case 5:tn(e,t);break;case 4:l=ca,ca=!1,tn(e,t),ca&&(bu=!0),ca=l;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?wc(t,!1):tn(e,t));break;case 30:l=ca,n=y0(),ca=!1,tn(e,t),ca&&(t.flags|=4);var i=t.memoizedProps,u=t.stateNode;e=_a(i,u),u=_a(a.memoizedProps,u);var c=ga(i.default,i.update);c==="none"?e=!1:(i=a.memoizedState,a.memoizedState=null,a=t.child,be=0,e=Mc(t,a,e,u,c,i,!0),be!==(i===null?0:i.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(cn(t,t.memoizedProps.onUpdate),ia=n):n!==null&&(n.push.apply(n,ia),ia=n),ca=(t.flags&32)!==0?!0:l;break;default:tn(e,t)}}function oa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)E0(t,e.alternate,e),e=e.sibling}function Ga(t,e){for(t=t.child;t!==null;){var a=t,l=e;switch(a.tag){case 0:case 11:case 14:case 15:La(4,a,a.return),Ga(a,l);break;case 1:ne(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&_0(a,a.return,n),Ga(a,l);break;case 27:(l&2)!==0&&Dd(a.stateNode,a.type,a.memoizedProps);case 5:ne(a,a.return),a.tag!==5&&a.tag!==27||Pn(a),Ga(a,l);break;case 6:Pn(a);break;case 26:ne(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||xt||n.parentNode.removeChild(n),Ga(a,l);break;case 22:a.memoizedState===null&&Ga(a,l);break;case 30:ne(a,a.return),Ga(a,l);break;case 7:ne(a,a.return);default:Ga(a,l)}t=t.sibling}}function Fe(t,e,a){for(a=(e.subtreeFlags&8772)!==0?a:a&-2,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags,c=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:Fe(n,i,a),In(4,i);break;case 1:if(Fe(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(q){Nt(l,l.return,q)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var _=n.shared.hiddenCallbacks;if(_!==null)for(n.shared.hiddenCallbacks=null,n=0;n<_.length;n++)af(_[n],o)}catch(q){Nt(l,l.return,q)}}c&&u&64&&v0(i),na(i,i.return);break;case 27:(a&2)!==0&&x0(i);case 5:i.tag!==5&&i.tag!==27||g0(i),Fe(n,i,a),c&&l===null&&u&4&&qc(i),na(i,i.return);break;case 6:g0(i);break;case 26:o=i.stateNode,i.memoizedState!==null||o===null||It||xo(oi(o.ownerDocument),i.type,o),Fe(n,i,a),c&&l===null&&u&4&&qc(i),na(i,i.return);break;case 12:Fe(n,i,a);break;case 31:Fe(n,i,a),c&&u&4&&C0(n,i);break;case 13:Fe(n,i,a),c&&u&4&&A0(n,i);break;case 22:i.memoizedState===null&&Fe(n,i,a),na(i,i.return);break;case 30:Fe(n,i,a),na(i,i.return);break;case 7:na(i,i.return);default:Fe(n,i,a)}e=e.sibling}}function Uc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Bn(a))}function Rc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Bn(t))}function Le(t,e,a,l){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)R0(t,e,a,l),e=e.sibling;else n&&S0(e)}function R0(t,e,a,l){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&xu(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:Le(t,e,a,l),i&2048&&In(9,e);break;case 1:Le(t,e,a,l);break;case 3:Le(t,e,a,l),n&&Ac&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&Bn(i)));break;case 12:if(i&2048){Le(t,e,a,l),i=e.stateNode;try{var u=e.memoizedProps,c=u.id,o=u.onPostCommit;typeof o=="function"&&o(c,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(_){Nt(e,e.return,_)}}else Le(t,e,a,l);break;case 31:Le(t,e,a,l);break;case 13:Le(t,e,a,l);break;case 23:break;case 22:u=e.stateNode,c=e.alternate,e.memoizedState!==null?(n&&c!==null&&c.memoizedState===null&&xu(c),u._visibility&2?Le(t,e,a,l):ei(t,e)):(n&&c!==null&&c.memoizedState!==null&&xu(e),u._visibility&2?Le(t,e,a,l):(u._visibility|=2,en(t,e,a,l,(e.subtreeFlags&10256)!==0||!1))),i&2048&&Uc(c,e);break;case 24:Le(t,e,a,l),i&2048&&Rc(e.alternate,e);break;case 30:n&&(i=e.alternate,i!==null&&(ua(i.child,!0),ua(e.child,!0))),Le(t,e,a,l);break;default:Le(t,e,a,l)}}function en(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=a,o=l,_=u.flags;switch(u.tag){case 0:case 11:case 15:en(i,u,c,o,n),In(8,u);break;case 23:break;case 22:var q=u.stateNode;u.memoizedState!==null?q._visibility&2?en(i,u,c,o,n):ei(i,u):(q._visibility|=2,en(i,u,c,o,n)),n&&_&2048&&Uc(u.alternate,u);break;case 24:en(i,u,c,o,n),n&&_&2048&&Rc(u.alternate,u);break;default:en(i,u,c,o,n)}e=e.sibling}}function ei(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:ei(a,l),n&2048&&Uc(l.alternate,l);break;case 24:ei(a,l),n&2048&&Rc(l.alternate,l);break;default:ei(a,l)}e=e.sibling}}var ql=8192;function Nl(t,e,a){if(t.subtreeFlags&ql)for(t=t.child;t!==null;)k0(t,e,a),t=t.sibling}function k0(t,e,a){switch(t.tag){case 26:Nl(t,e,a),t.flags&ql&&(t.memoizedState!==null?ev(a,Je,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Vd(a,t)));break;case 5:Nl(t,e,a),t.flags&ql&&(t=t.stateNode,(e&335544128)===e&&Vd(a,t));break;case 3:case 4:var l=Je;Je=oi(t.stateNode.containerInfo),Nl(t,e,a),Je=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ql,ql=16777216,Nl(t,e,a),ql=l):Nl(t,e,a));break;case 30:if((t.flags&ql)!==0&&(l=t.memoizedProps.name,l!=null&&l!=="auto")){var n=t.stateNode;n.paired=null,Me===null&&(Me=new Map),Me.set(l,n)}Nl(t,e,a);break;default:Nl(t,e,a)}}function H0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ai(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Pt=l,Y0(l,t)}H0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)B0(t),t=t.sibling}function B0(t){switch(t.tag){case 0:case 11:case 15:ai(t),t.flags&2048&&La(9,t,t.return);break;case 3:ai(t);break;case 12:ai(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Nu(t)):ai(t);break;default:ai(t)}}function Nu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Pt=l,Y0(l,t)}H0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:La(8,e,e.return),Nu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Nu(e));break;default:Nu(e)}t=t.sibling}}function Y0(t,e){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:La(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pt=l;else t:for(a=t;Pt!==null;){l=Pt;var n=l.sibling,i=l.return;if(z0(l),l===a){Pt=null;break t}if(n!==null){n.return=i,Pt=n;break t}Pt=i}}}var Wh={getCacheForType:function(t){var e=ee(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return ee(Zt).controller.signal}},$h=typeof WeakMap=="function"?WeakMap:Map,pt=0,Et=null,ct=null,ht=0,qt=0,Ce=null,Va=!1,an=!1,kc=!1,wa=0,kt=0,Xa=0,Sl=0,Su=0,Ae=0,ln=0,li=null,qe=null,Hc=!1,Tu=0,Z0=0,wu=1/0,Eu=null,Qa=null,Ot=0,We=null,Tl=null,sa=0,Bc=0,Yc=null,L0=null,nn=null,un=null,rn=null,ni=0,ju=null;function Oe(){return(pt&2)!==0&&ht!==0?ht&-ht:O.T!==null?Wc():Vo()}function G0(){if(Ae===0)if((ht&536870912)===0||it){var t=qi;qi<<=1,(qi&3932160)===0&&(qi=262144),Ae=t}else Ae=536870912;return t=ae.current,t!==null&&(t.flags|=32),Ae}function cn(t,e){if(e!=null){var a=t.stateNode,l=a.ref;l===null&&(l=a.ref=Nd(_a(t.memoizedProps,a))),un===null&&(un=[]),un.push(e.bind(null,l))}}function Ne(t,e,a){(t===Et&&(qt===2||qt===9)||t.cancelPendingCommit!==null)&&(on(t,0),Ka(t,ht,Ae,!1)),Tn(t,a),((pt&2)===0||t!==Et)&&(t===Et&&((pt&2)===0&&(Sl|=a),kt===4&&Ka(t,ht,Ae,!1)),fa(t))}function V0(t,e,a){if((pt&6)!==0)throw Error(f(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Sn(t,e),n=l?tm(t,e):Lc(t,e,!0),i=l;do{if(n===0){an&&!l&&Ka(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!Ih(a)){n=Lc(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=li;var o=c.current.memoizedState.isDehydrated;if(o&&(on(c,u).flags|=256),u=Lc(c,u,!1),u!==2&&u!==6){if(kc&&!o){c.errorRecoveryDisabledLanes|=i,Sl|=i,n=4;break t}i=qe,qe=n,i!==null&&(qe===null?qe=i:qe.push.apply(qe,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){on(t,0),Ka(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ka(l,e,Ae,!Va);break t;case 2:qe=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(n=Tu+300-Se(),10<n)){if(Ka(l,e,Ae,!Va),Si(l,0,!0)!==0)break t;sa=e,l.timeoutHandle=ro(X0.bind(null,l,a,qe,Eu,Hc,e,Ae,Sl,ln,Va,i,"Throttled",-0,0),n);break t}X0(l,a,qe,Eu,Hc,e,Ae,Sl,ln,Va,i,null,-0,0)}}break}while(!0);fa(t)}function X0(t,e,a,l,n,i,u,c,o,_,q,E,m,b){t.timeoutHandle=-1;var D=e.subtreeFlags,G=(i&335544064)===i;if(E=null,(G||D&8192||(D&16785408)===16785408)&&(E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},Me=null,k0(e,i,E),G&&(D=E,G=t.containerInfo,G=(G.nodeType===9?G:G.ownerDocument).__reactViewTransition,G!=null&&(D.count++,D.waitingForViewTransition=!0,D=di.bind(D),G.finished.then(D,D))),D=(i&62914560)===i?Tu-Se():(i&4194048)===i?Z0-Se():0,D=av(E,D),D!==null)){sa=i,t.cancelPendingCommit=D(P0.bind(null,t,e,i,a,l,n,u,c,o,_,q,E,null,m,b)),Ka(t,i,u,!_);return}P0(t,e,i,a,l,n,u,c,o,_,q,E)}function Ih(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!je(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ka(t,e,a,l){e=Bo(t,e),e&=~Su,e&=~Sl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-we(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Zo(t,a,e)}function zu(){return(pt&6)===0?(ii(0),!1):!0}function Zc(){if(ct!==null){if(qt===0)var t=ct.return;else t=ct,ba=dl=null,Fr(t),Jl=null,Ln=0,t=ct;for(;t!==null;)m0(t.alternate,t),t=t.return;ct=null}}function on(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,qm(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Zc(),Et=t,ct=a=pa(t.current,null),ht=e,qt=0,Ce=null,Va=!1,an=Sn(t,e),kc=!1,ln=Ae=Su=Sl=Xa=kt=0,qe=li=null,Hc=!1,wa=Bo(t,e),ki(),a}function Q0(t,e){et=null,O.H=cu,e===Kl||e===Ji?(e=Is(),qt=3):e===Rr?(e=Is(),qt=4):qt=e===sc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ce=e,ct===null&&(kt=1,ou(t,He(e,t.current)))}function K0(){var t=ae.current;return t===null?!0:(ht&4194048)===ht?oe===null:(ht&62914560)===ht||(ht&536870912)!==0?t===oe:!1}function J0(){var t=O.H;return O.H=cu,t===null?cu:t}function F0(){var t=O.A;return O.A=Wh,t}function Mu(){kt=4,Va||(ht&4194048)!==ht&&ae.current!==null||(an=!0),(Xa&134217727)===0&&(Sl&134217727)===0||Et===null||Ka(Et,ht,Ae,!1)}function Lc(t,e,a){var l=pt;pt|=2;var n=J0(),i=F0();(Et!==t||ht!==e)&&(Eu=null,on(t,e)),e=!1;var u=kt;t:do try{if(qt!==0&&ct!==null){var c=ct,o=Ce;switch(qt){case 8:Zc(),u=6;break t;case 3:case 2:case 9:case 6:ae.current===null&&(e=!0);var _=qt;if(qt=0,Ce=null,sn(t,c,o,_),a&&an){u=0;break t}break;default:_=qt,qt=0,Ce=null,sn(t,c,o,_)}}Ph(),u=kt;break}catch(q){Q0(t,q)}while(!0);return e&&t.shellSuspendCounter++,ba=dl=null,pt=l,O.H=n,O.A=i,ct===null&&(Et=null,ht=0,ki()),u}function Ph(){for(;ct!==null;)W0(ct)}function tm(t,e){var a=pt;pt|=2;var l=J0(),n=F0();Et!==t||ht!==e?(Eu=null,wu=Se()+500,on(t,e)):an=Sn(t,e);t:do try{if(qt!==0&&ct!==null){e=ct;var i=Ce;e:switch(qt){case 1:qt=0,Ce=null,sn(t,e,i,1);break;case 2:case 9:if(Ws(i)){qt=0,Ce=null,$0(e);break}e=function(){qt!==2&&qt!==9||Et!==t||(qt=7),fa(t)},i.then(e,e);break t;case 3:qt=7;break t;case 4:qt=5;break t;case 7:Ws(i)?(qt=0,Ce=null,$0(e)):(qt=0,Ce=null,sn(t,e,i,7));break;case 5:var u=null;switch(ct.tag){case 26:u=ct.memoizedState;case 5:case 27:var c=ct;if(u?Ld(u):c.stateNode.complete){qt=0,Ce=null;var o=c.sibling;if(o!==null)ct=o;else{var _=c.return;_!==null?(ct=_,Cu(_)):ct=null}break e}}qt=0,Ce=null,sn(t,e,i,5);break;case 6:qt=0,Ce=null,sn(t,e,i,6);break;case 8:Zc(),kt=6;break t;default:throw Error(f(462))}}em();break}catch(q){Q0(t,q)}while(!0);return ba=dl=null,O.H=l,O.A=n,pt=a,ct!==null?0:(Et=null,ht=0,ki(),kt)}function em(){for(;ct!==null&&!p1();)W0(ct)}function W0(t){var e=d0(t.alternate,t,wa);t.memoizedProps=t.pendingProps,e===null?Cu(t):ct=e}function $0(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=i0(a,e,e.pendingProps,e.type,void 0,ht);break;case 11:e=i0(a,e,e.pendingProps,e.type.render,e.ref,ht);break;case 5:Fr(e);var l=e;l===$t&&(it?(Gi(l),l.tag===5&&l.stateNode!=null&&(jt=l.stateNode)):(Gi(l),it=!0));default:m0(a,e),e=ct=Bs(e,wa),e=d0(a,e,wa)}t.memoizedProps=t.pendingProps,e===null?Cu(t):ct=e}function sn(t,e,a,l){ba=dl=null,Fr(e),Jl=null,Ln=0;var n=e.return;try{if(Lh(t,n,e,a,ht)){kt=1,ou(t,He(a,t.current)),ct=null;return}}catch(i){if(n!==null)throw ct=n,i;kt=1,ou(t,He(a,t.current)),ct=null;return}e.flags&32768?(it||l===1?t=!0:an||(ht&536870912)!==0?t=!1:(Va=t=!0,(l===2||l===9||l===3||l===6)&&(l=ae.current,l!==null&&l.tag===13&&(l.flags|=16384))),I0(e,t)):Cu(e)}function Cu(t){var e=t;do{if((e.flags&32768)!==0){I0(e,Va);return}t=e.return;var a=Qh(e.alternate,e,wa);if(a!==null){ct=a;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);kt===0&&(kt=5)}function I0(t,e){do{var a=Kh(t.alternate,t);if(a!==null){a.flags&=32767,ct=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=a}while(t!==null);kt=6,ct=null}function P0(t,e,a,l,n,i,u,c,o,_,q,E){t.cancelPendingCommit=null;do Au();while(Ot!==0);if((pt&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));t===Et&&(ct=Et=null,ht=0),Tl=e,We=t,sa=a,Yc=n,L0=l,am(t,e,a,u,c,o,E)}}function am(t,e,a,l,n,i,u){var c=e.lanes|e.childLanes;if(Bc=c,c|=Nr,j1(t,a,c,l,n,i),un=null,(a&335544064)===a?(rn=Mh(t),l=10262):(rn=null,l=10256),(e.subtreeFlags&l)!==0||(e.flags&l)!==0?(t.callbackNode=null,t.callbackPriority=0,cm(bi,function(){return Qc(),null})):(t.callbackNode=null,t.callbackPriority=0),gu=!1,l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,n=k.p,k.p=2,i=pt,pt|=4;try{Jh(t,e,a)}finally{pt=i,k.p=n,O.T=l}}Ot=1,gu?nn=jm(u,t.containerInfo,rn,Gc,Vc,nm,Xc,Qc,lm):(Gc(),Vc(),Xc())}function lm(t){if(Ot!==0){var e=We.onRecoverableError;e(t,{componentStack:null})}}function nm(){Ot===3&&(Ot=0,U0(Tl,We),Ot=4)}function Gc(){if(Ot===1){Ot=0;var t=We,e=Tl,a=sa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=O.T,O.T=null;var n=k.p;k.p=2;var i=pt;pt|=4;try{ti=bu=!1,O0(e,t,a),a=no;var u=zs(t.containerInfo),c=a.focusedElem,o=a.selectionRange;if(u!==c&&c&&c.ownerDocument&&js(c.ownerDocument.documentElement,c)){if(o!==null&&pr(c)){var _=o.start,q=o.end;if(q===void 0&&(q=_),"selectionStart"in c)c.selectionStart=_,c.selectionEnd=Math.min(q,c.value.length);else{var E=c.ownerDocument||document,m=E&&E.defaultView||window;if(m.getSelection){var b=m.getSelection(),D=c.textContent.length,G=Math.min(o.start,D),at=o.end===void 0?G:Math.min(o.end,D);!b.extend&&G>at&&(u=at,at=G,G=u);var v=Es(c,G),d=Es(c,at);if(v&&d&&(b.rangeCount!==1||b.anchorNode!==v.node||b.anchorOffset!==v.offset||b.focusNode!==d.node||b.focusOffset!==d.offset)){var p=E.createRange();p.setStart(v.node,v.offset),b.removeAllRanges(),G>at?(b.addRange(p),b.extend(d.node,d.offset)):(p.setEnd(d.node,d.offset),b.addRange(p))}}}}for(E=[],b=c;b=b.parentNode;)b.nodeType===1&&E.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<E.length;c++){var w=E[c];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}pn=!!lo,no=lo=null}finally{pt=i,k.p=n,O.T=l}}t.current=e,Ot=2}}function Vc(){if(Ot===2){Ot=0;var t=We,e=Tl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var l=k.p;k.p=2;var n=pt;pt|=4;try{E0(t,e.alternate,e)}finally{pt=n,k.p=l,O.T=a}}Ot=3}}function Xc(){if(Ot===4||Ot===3){Ot=0;var t=nn;nn=null,x1();var e=We,a=Tl,l=sa,n=L0,i=(l&335544064)===l?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Ot=5:(Ot=0,Tl=We=null,td(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(Qa=null),tr(l),a=a.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Nn,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=O.T,i=k.p,k.p=2,O.T=null;try{for(var u=e.onRecoverableError,c=0;c<n.length;c++){var o=n[c];u(o.value,{componentStack:o.stack})}}finally{O.T=a,k.p=i}}if(n=un,u=rn,rn=null,n!==null&&(un=null,u===null&&(u=[]),t!==null))for(o=0;o<n.length;o++)a=(0,n[o])(u),a!==void 0&&t.finished.finally(a);(sa&3)!==0&&Au(),fa(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===ju?ni++:(ni=0,ju=e):(ni=0,ju=null),ii(0)}}function td(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Bn(e)))}function Au(){return nn!==null&&(nn.skipTransition(),nn=null),Gc(),Vc(),Xc(),Qc()}function Qc(){if(Ot!==5)return!1;var t=We,e=Bc;Bc=0;var a=tr(sa),l=O.T,n=k.p;try{k.p=32>a?32:a,O.T=null,a=Yc,Yc=null;var i=We,u=sa;if(Ot=0,Tl=We=null,sa=0,(pt&6)!==0)throw Error(f(331));var c=pt;if(pt|=4,B0(i.current),R0(i,i.current,u,a),pt=c,ii(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Nn,i)}catch{}return!0}finally{k.p=n,O.T=l,td(t,e)}}function ed(t,e,a){e=He(a,e),e=oc(t.stateNode,e,2),t=Ha(t,e,2),t!==null&&(Tn(t,2),fa(t))}function Nt(t,e,a){if(t.tag===3)ed(t,t,a);else for(;e!==null;){if(e.tag===3){ed(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Qa===null||!Qa.has(l))){t=He(a,t),a=$f(2),l=Ha(e,a,2),l!==null&&(If(a,l,e,t),Tn(l,2),fa(l));break}}e=e.return}}function Kc(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new $h;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(kc=!0,n.add(a),t=im.bind(null,t,e,a),e.then(t,t))}function im(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Et===t&&(ht&a)===a&&((kt===4||kt===3&&(ht&62914560)===ht&&300>Se()-Tu)&&(pt&2)===0?on(t,0):Su|=a,ln===ht&&(ln=0)),fa(t)}function ad(t,e){e===0&&(e=Yo()),t=ol(t,e),t!==null&&(Tn(t,e),fa(t))}function um(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),ad(t,a)}function rm(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(e),ad(t,a)}function cm(t,e){return Wu(t,e)}var fn=null,dn=null,Jc=!1,Ou=!1,Fc=!1,Ja=0;function fa(t){t!==dn&&t.next===null&&(dn===null?fn=dn=t:dn=dn.next=t),Ou=!0,Jc||(Jc=!0,sm())}function ii(t,e){if(!Fc&&Ou){Fc=!0;do for(var a=!1,l=fn;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-we(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,ud(l,i))}else i=ht,i=Si(l,l===Et?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Sn(l,i)||(a=!0,ud(l,i));l=l.next}while(a);Fc=!1}}function om(){ld()}function ld(){Ou=Jc=!1;var t=0;Ja!==0&&ym()&&(t=Ja);for(var e=Se(),a=null,l=fn;l!==null;){var n=l.next,i=nd(l,e);i===0?(l.next=null,a===null?fn=n:a.next=n,n===null&&(dn=a)):(a=l,(t!==0||(i&3)!==0)&&(Ou=!0)),l=n}Ot!==0&&Ot!==5||ii(t),Ja!==0&&(Ja=0)}function nd(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-we(i),c=1<<u,o=n[u];o===-1?((c&a)===0||(c&l)!==0)&&(n[u]=E1(c,e)):o<=e&&(t.expiredLanes|=c),i&=~c}if(e=Et,a=ht,a=Si(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(qt===2||qt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&$u(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Sn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&$u(l),tr(a)){case 2:case 8:a=ko;break;case 32:a=bi;break;case 268435456:a=Ho;break;default:a=bi}return l=id.bind(null,t),a=Wu(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&$u(l),t.callbackPriority=2,t.callbackNode=null,2}function id(t,e){if(Ot!==0&&Ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Au()&&t.callbackNode!==a)return null;var l=ht;return l=Si(t,t===Et?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(V0(t,l,e),nd(t,Se()),t.callbackNode!=null&&t.callbackNode===a?id.bind(null,t):null)}function ud(t,e){if(Au())return null;V0(t,e,!0)}function sm(){Nm(function(){(pt&6)!==0?Wu(Ro,om):ld()})}function Wc(){if(Ja===0){var t=vl;t===0&&(t=yi,yi<<=1,(yi&261888)===0&&(yi=256)),Ja=t}return Ja}function rd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zi(t)}function fm(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=rd((n[pe]||null).action),u=l.submitter;u&&(e=(e=u[pe]||null)?rd(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new Oi("action","action",null,l,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ja!==0){var o=new FormData(n,u);nc(a,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(c.preventDefault(),o=new FormData(n,u),nc(a,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var $c=0;$c<qr.length;$c++){var Ic=qr[$c],dm=Ic.toLowerCase(),hm=Ic[0].toUpperCase()+Ic.slice(1);Qe(dm,"on"+hm)}Qe(As,"onAnimationEnd"),Qe(Os,"onAnimationIteration"),Qe(Ds,"onAnimationStart"),Qe("dblclick","onDoubleClick"),Qe("focusin","onFocus"),Qe("focusout","onBlur"),Qe(qh,"onTransitionRun"),Qe(Nh,"onTransitionStart"),Qe(Sh,"onTransitionCancel"),Qe(Us,"onTransitionEnd"),Ol("onMouseEnter",["mouseout","mouseover"]),Ol("onMouseLeave",["mouseout","mouseover"]),Ol("onPointerEnter",["pointerout","pointerover"]),Ol("onPointerLeave",["pointerout","pointerover"]),ul("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ul("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ul("onBeforeInput",["compositionend","keypress","textInput","paste"]),ul("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ul("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ul("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));function cd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var c=l[u],o=c.instance,_=c.currentTarget;if(c=c.listener,o!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=_;try{i(n)}catch(q){Ri(q)}n.currentTarget=null,i=o}else for(u=0;u<l.length;u++){if(c=l[u],o=c.instance,_=c.currentTarget,c=c.listener,o!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=_;try{i(n)}catch(q){Ri(q)}n.currentTarget=null,i=o}}}}function ot(t,e){var a=e[Qo];a===void 0&&(a=e[Qo]=new Set);var l=t+"__bubble";a.has(l)||(od(e,t,2,!1),a.add(l))}function Pc(t,e,a){var l=0;e&&(l|=4),od(a,t,l,e)}var Du="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[Du]){t[Du]=!0,Fo.forEach(function(a){a!=="selectionchange"&&(mm.has(a)||Pc(a,!1,t),Pc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Du]||(e[Du]=!0,Pc("selectionchange",!1,e))}}function od(t,e,a,l){switch(Id(e)){case 2:var n=uv;break;case 8:n=rv;break;default:n=yo}a=n.bind(null,e,a,t),n=void 0,!cr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function eo(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=il(c),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){l=i=u;continue t}c=c.parentNode}}l=l.return}cs(function(){var _=i,q=ur(a),E=[];t:{var m=Rs.get(t);if(m!==void 0){var b=Oi,D=t;switch(t){case"keypress":if(Ci(a)===0)break t;case"keydown":case"keyup":b=I1;break;case"focusin":D="focus",b=dr;break;case"focusout":D="blur",b=dr;break;case"beforeblur":case"afterblur":b=dr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=lh;break;case As:case Os:case Ds:b=G1;break;case Us:b=ih;break;case"scroll":case"scrollend":b=H1;break;case"wheel":b=rh;break;case"copy":case"cut":case"paste":b=X1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=hs;break;case"submit":b=eh;break;case"toggle":case"beforetoggle":b=oh}var G=(e&4)!==0,at=!G&&(t==="scroll"||t==="scrollend"),v=G?m!==null?m+"Capture":null:m;G=[];for(var d=_,p;d!==null;){var w=d;if(p=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||p===null||v===null||(w=jn(d,v),w!=null&&G.push(ri(d,w,p))),at)break;d=d.return}0<G.length&&(m=new b(m,D,null,a,q),E.push({event:m,listeners:G}))}}if((e&7)===0){t:{if(b=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",b&&a!==ir&&(D=a.relatedTarget||a.fromElement)&&(il(D)||D[Ml]))break t;(m||b)&&(D=q.window===q?q:(b=q.ownerDocument)?b.defaultView||b.parentWindow:window,m?(b=a.relatedTarget||a.toElement,m=_,b=b?il(b):null,b!==null&&(at=z(b),G=b.tag,b!==at||G!==5&&G!==27&&G!==6)&&(b=null)):(m=null,b=_),m!==b&&(G=fs,w="onMouseLeave",v="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(G=hs,w="onPointerLeave",v="onPointerEnter",d="pointer"),at=m==null?D:En(m),p=b==null?D:En(b),D=new G(w,d+"leave",m,a,q),D.target=at,D.relatedTarget=p,w=null,il(q)===_&&(G=new G(v,d+"enter",b,a,q),G.target=p,G.relatedTarget=at,w=G),at=w,G=m&&b?Jt(m,b,vm):null,m!==null&&sd(E,D,m,G,!1),b!==null&&at!==null&&sd(E,at,b,G,!0)))}t:{if(m=_?En(_):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var H=ys;else if(xs(m))if(qs)H=xh;else{H=gh;var mt=_h}else b=m.nodeName,!b||b.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?_&&nr(_.elementType)&&(H=ys):H=ph;if(H&&(H=H(t,_))){bs(E,H,a,q);break t}mt&&mt(t,m,_)}switch(mt=_?En(_):window,t){case"focusin":(xs(mt)||mt.contentEditable==="true")&&(Bl=mt,xr=_,Rn=null);break;case"focusout":Rn=xr=Bl=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,Ms(E,a,q);break;case"selectionchange":if(yh)break;case"keydown":case"keyup":Ms(E,a,q)}var K;if(mr)t:{switch(t){case"compositionstart":var I="onCompositionStart";break t;case"compositionend":I="onCompositionEnd";break t;case"compositionupdate":I="onCompositionUpdate";break t}I=void 0}else Hl?gs(t,a)&&(I="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(ms&&a.locale!=="ko"&&(Hl||I!=="onCompositionStart"?I==="onCompositionEnd"&&Hl&&(K=os()):(za=q,or="value"in za?za.value:za.textContent,Hl=!0)),mt=Uu(_,I),0<mt.length&&(I=new ds(I,t,null,a,q),E.push({event:I,listeners:mt}),K?I.data=K:(K=ps(a),K!==null&&(I.data=K)))),(K=fh?dh(t,a):hh(t,a))&&(I=Uu(_,"onBeforeInput"),0<I.length&&(mt=new ds("onBeforeInput","beforeinput",null,a,q),E.push({event:mt,listeners:I}),mt.data=K)),fm(E,t,_,a,q)}cd(E,e)})}function ri(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Uu(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=jn(t,a),n!=null&&l.unshift(ri(t,n,i)),n=jn(t,e),n!=null&&l.push(ri(t,n,i))),t.tag===3)return l;t=t.return}return[]}function vm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sd(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var c=a,o=c.alternate,_=c.stateNode;if(c=c.tag,o!==null&&o===l)break;c!==5&&c!==26&&c!==27||_===null||(o=_,n?(_=jn(a,i),_!=null&&u.unshift(ri(a,_,o))):n||(_=jn(a,i),_!=null&&u.push(ri(a,_,o)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var _m=/\r\n?/g,gm=/\u0000|\uFFFD/g;function fd(t){return(typeof t=="string"?t:""+t).replace(_m,`
`).replace(gm,"")}function dd(t,e){return e=fd(e),fd(t)===e}function St(t,e,a,l,n,i){switch(a){case"children":if(typeof l=="string")e==="body"||e==="textarea"&&l===""||Ul(t,l);else if(typeof l=="number"||typeof l=="bigint")e!=="body"&&Ul(t,""+l);else return;break;case"className":ji(t,"class",l);break;case"tabIndex":ji(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ji(t,a,l);break;case"style":us(t,l,i);return;case"data":if(e!=="object"){ji(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=zi(l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&St(t,e,"name",n.name,n,null),St(t,e,"formEncType",n.formEncType,n,null),St(t,e,"formMethod",n.formMethod,n,null),St(t,e,"formTarget",n.formTarget,n,null)):(St(t,e,"encType",n.encType,n,null),St(t,e,"method",n.method,n,null),St(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=zi(l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ea);return;case"onScroll":l!=null&&ot("scroll",t);return;case"onScrollEnd":l!=null&&ot("scrollend",t);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));(i!=null?i.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=zi(l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":ot("beforetoggle",t),ot("toggle",t),Ei(t,"popover",l);break;case"xlinkActuate":ma(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ma(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ma(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ma(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ma(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ma(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ma(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ma(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ma(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ei(t,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=R1.get(a)||a,Ei(t,a,l);else return}gt=!0}function ao(t,e,a,l,n,i){switch(a){case"style":us(t,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));(i!=null?i.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof l=="string")Ul(t,l);else if(typeof l=="number"||typeof l=="bigint")Ul(t,""+l);else return;break;case"onScroll":l!=null&&ot("scroll",t);return;case"onScrollEnd":l!=null&&ot("scrollend",t);return;case"onClick":l!=null&&(t.onclick=ea);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Wo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),i=a.slice(2,n?a.length-7:void 0),e=t[pe]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(i,e,n),typeof l=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,n);break t}gt=!0,a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ei(t,a,l)}return}gt=!0}function ie(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ot("error",t),ot("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:St(t,e,i,u,a,null)}}n&&St(t,e,"srcSet",a.srcSet,a,null),l&&St(t,e,"src",a.src,a,null);return;case"input":ot("invalid",t);var c=i=u=n=null,o=null,_=null;for(l in a)if(a.hasOwnProperty(l)){var q=a[l];if(q!=null)switch(l){case"name":n=q;break;case"type":u=q;break;case"checked":o=q;break;case"defaultChecked":_=q;break;case"value":i=q;break;case"defaultValue":c=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(f(137,e));break;default:St(t,e,l,q,a,null)}}as(t,i,c,o,_,u,n,!1);return;case"select":ot("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:St(t,e,n,c,a,null)}e=i,a=u,t.multiple=!!l,e!=null?Dl(t,!!l,e,!1):a!=null&&Dl(t,!!l,a,!0);return;case"textarea":ot("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(f(91));break;default:St(t,e,u,c,a,null)}ns(t,l,n,i);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:St(t,e,o,l,a,null)}return;case"dialog":ot("beforetoggle",t),ot("toggle",t),ot("cancel",t),ot("close",t);break;case"iframe":case"object":ot("load",t);break;case"video":case"audio":for(l=0;l<ui.length;l++)ot(ui[l],t);break;case"image":ot("error",t),ot("load",t);break;case"details":ot("toggle",t);break;case"embed":case"source":case"link":ot("error",t),ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in a)if(a.hasOwnProperty(_)&&(l=a[_],l!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:St(t,e,_,l,a,null)}return;default:if(nr(e)){for(q in a)a.hasOwnProperty(q)&&(l=a[q],l!==void 0&&ao(t,e,q,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&St(t,e,c,l,a,null))}var pm={};function xm(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,o=null,_=null,q=null;for(b in a){var E=a[b];if(a.hasOwnProperty(b)&&E!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=E;default:l.hasOwnProperty(b)||St(t,e,b,null,l,E)}}for(var m in l){var b=l[m];if(E=a[m],l.hasOwnProperty(m)&&(b!=null||E!=null))switch(m){case"type":b!==E&&(gt=!0),i=b;break;case"name":b!==E&&(gt=!0),n=b;break;case"checked":b!==E&&(gt=!0),_=b;break;case"defaultChecked":b!==E&&(gt=!0),q=b;break;case"value":b!==E&&(gt=!0),u=b;break;case"defaultValue":b!==E&&(gt=!0),c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,e));break;default:b!==E&&St(t,e,m,b,l,E)}}ar(t,u,c,o,_,q,i,n);return;case"select":b=u=c=m=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:l.hasOwnProperty(i)||St(t,e,i,null,l,o)}for(n in l)if(i=l[n],o=a[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":i!==o&&(gt=!0),m=i;break;case"defaultValue":i!==o&&(gt=!0),c=i;break;case"multiple":i!==o&&(gt=!0),u=i;default:i!==o&&St(t,e,n,i,l,o)}e=c,a=u,l=b,m!=null?Dl(t,!!a,m,!1):!!l!=!!a&&(e!=null?Dl(t,!!a,e,!0):Dl(t,!!a,a?[]:"",!1));return;case"textarea":b=m=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:St(t,e,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":n!==i&&(gt=!0),m=n;break;case"defaultValue":n!==i&&(gt=!0),b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&St(t,e,u,n,l,i)}ls(t,m,b);return;case"option":for(var D in a)if(m=a[D],a.hasOwnProperty(D)&&m!=null&&!l.hasOwnProperty(D))switch(D){case"selected":t.selected=!1;break;default:St(t,e,D,null,l,m)}for(o in l)if(m=l[o],b=a[o],l.hasOwnProperty(o)&&m!==b&&(m!=null||b!=null))switch(o){case"selected":m!==b&&(gt=!0),t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:St(t,e,o,m,l,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in a)m=a[G],a.hasOwnProperty(G)&&m!=null&&!l.hasOwnProperty(G)&&St(t,e,G,null,l,m);for(_ in l)if(m=l[_],b=a[_],l.hasOwnProperty(_)&&m!==b&&(m!=null||b!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(f(137,e));break;default:St(t,e,_,m,l,b)}return;default:if(nr(e)){for(var at in a)m=a[at],a.hasOwnProperty(at)&&m!==void 0&&!l.hasOwnProperty(at)&&ao(t,e,at,void 0,l,m);for(q in l)m=l[q],b=a[q],!l.hasOwnProperty(q)||m===b||m===void 0&&b===void 0||ao(t,e,q,m,l,b);return}}for(var v in a)m=a[v],a.hasOwnProperty(v)&&m!=null&&!l.hasOwnProperty(v)&&St(t,e,v,null,l,m);for(E in l)m=l[E],b=a[E],!l.hasOwnProperty(E)||m===b||m==null&&b==null||St(t,e,E,m,l,b)}function hd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&hd(u)){for(u=0,c=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],_=o.startTime;if(_>c)break;var q=o.transferSize,E=o.initiatorType;q&&hd(E)&&(o=o.responseEnd,u+=q*(o<c?1:(c-_)/(o-_)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var lo=null,no=null;function ci(t){return t.nodeType===9?t:t.ownerDocument}function md(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function _d(t,e,a,l){return a=ci(a).createElement(t),a[te]=l,a[pe]=e,ie(a,t,e),Wt(a),a}function io(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uo=null;function ym(){var t=window.event;return t&&t.type==="popstate"?t===uo?!1:(uo=t,!0):(uo=null,!1)}var ro=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,pd=typeof requestAnimationFrame=="function"?requestAnimationFrame:ro,Nm=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(t){return gd.resolve(null).then(t).catch(Sm)}:ro;function Sm(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function xd(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),xn(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")_o(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,_o(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[wn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&_o(t.ownerDocument.body);a=n}while(a);xn(e)}function bd(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function yd(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var l=1;else for(var n=l=0;n<e.length;n++){var i=e[n];0<i.width&&0<i.height&&l++}l===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function qd(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Tm(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function co(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return Tm(e,a,t)}function wm(t){return t.documentElement.clientHeight}function Em(t){this.addEventListener("load",t),this.addEventListener("error",t)}function jm(t,e,a,l,n,i,u,c,o){var _=e.nodeType===9?e:e.ownerDocument;try{var q=_.startViewTransition({update:function(){var m=_.defaultView,b=m.navigation&&m.navigation.transition,D=_.fonts.status;l();var G=[];if(D==="loaded"&&(wm(_),_.fonts.status==="loading"&&G.push(_.fonts.ready)),D=G.length,t!==null)for(var at=t.suspenseyImages,v=0,d=0;d<at.length;d++){var p=at[d];if(!p.complete){var w=p.getBoundingClientRect();if(0<w.bottom&&0<w.right&&w.top<m.innerHeight&&w.left<m.innerWidth){if(v+=Gd(p),v>Hu){G.length=D;break}p=new Promise(Em.bind(p)),G.push(p)}}}if(0<G.length)return m=Promise.race([Promise.all(G),new Promise(function(H){return setTimeout(H,500)})]).then(n,n),(b?Promise.allSettled([b.finished,m]):m).then(i,i);if(n(),b)return b.finished.then(i,i);i()},types:a});_.__reactViewTransition=q;var E=[];return q.ready.then(function(){for(var m=_.documentElement.getAnimations({subtree:!0}),b=0;b<m.length;b++){var D=m[b],G=D.effect,at=G.pseudoElement;if(at!=null&&at.startsWith("::view-transition")){E.push(D),D=G.getKeyframes();for(var v=at=void 0,d=!0,p=0;p<D.length;p++){var w=D[p],H=w.width;if(at===void 0)at=H;else if(at!==H){d=!1;break}if(H=w.height,v===void 0)v=H;else if(v!==H){d=!1;break}delete w.width,delete w.height,w.transform==="none"&&delete w.transform}d&&at!==void 0&&v!==void 0&&(G.setKeyframes(D),d=getComputedStyle(G.target,G.pseudoElement),d.width!==at||d.height!==v)&&(d=D[0],d.width=at,d.height=v,d=D[D.length-1],d.width=at,d.height=v,G.setKeyframes(D))}}u()},function(m){_.__reactViewTransition===q&&(_.__reactViewTransition=null);try{if(typeof m=="object"&&m!==null)switch(m.name){case"InvalidStateError":(m.message==="View transition was skipped because document visibility state is hidden."||m.message==="Skipping view transition because document visibility state has become hidden."||m.message==="Skipping view transition because viewport size changed."||m.message==="Transition was aborted because of invalid state")&&(m=null)}m!==null&&o(m)}finally{l(),n(),u()}}),q.finished.finally(function(){for(var m=0;m<E.length;m++)E[m].cancel();_.__reactViewTransition===q&&(_.__reactViewTransition=null),c()}),q}catch{return l(),n(),u(),null}}function wl(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}wl.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:nt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},wl.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),l=[],n=0;n<a.length;n++){var i=a[n].effect;i!==null&&i.target===t&&i.pseudoElement===e&&l.push(a[n])}return l},wl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Nd(t){return{name:t,group:new wl("group",t),imagePair:new wl("image-pair",t),old:new wl("old",t),new:new wl("new",t)}}function De(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}De.prototype.addEventListener=function(t,e,a){var l=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(l=a.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Td(i,t,e,a)===-1){var u=this,c=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(c=function(o){u.removeEventListener(t,e,a),typeof e=="function"?e.call(this,o):e.handleEvent(o)}),l!==null&&(n=u.removeEventListener.bind(u,t,e,a),l.addEventListener("abort",n,{once:!0}),n=l.removeEventListener.bind(l,"abort",n)),l=hn(a),i.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:c,cleanup:n}),N(this._fragmentFiber.child,!1,zm,t,c,l)}this._eventListeners=i}};function zm(t,e,a,l){return L(t).addEventListener(e,a,l),!1}De.prototype.removeEventListener=function(t,e,a){var l=this._eventListeners;if(l!==null&&(e=Td(l,t,e,a),e!==-1)){var n=l[e];a=n.attachedListener;var i=n.cleanup;n=hn(n.optionsOrUseCapture),N(this._fragmentFiber.child,!1,Mm,t,a,n),l.splice(e,1),i!==null&&i()}};function Mm(t,e,a,l){return L(t).removeEventListener(e,a,l),!1}function hn(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Sd(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Td(t,e,a,l){if(t.length===0)return-1;l=Sd(l);for(var n=0;n<t.length;n++){var i=t[n];if(i.type===e&&i.listener===a&&Sd(i.optionsOrUseCapture)===l)return n}return-1}De.prototype.dispatchEvent=function(t){var e=Z(this._fragmentFiber);if(e===null)return!0;e=L(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var l=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var i=a[n];l.addEventListener(i.type,i.attachedListener,hn(i.optionsOrUseCapture))}if(e.appendChild(l),t=l.dispatchEvent(t),a)for(n=0;n<a.length;n++)i=a[n],l.removeEventListener(i.type,i.attachedListener,hn(i.optionsOrUseCapture));return e.removeChild(l),t}return e.dispatchEvent(t)},De.prototype.focus=function(t){N(this._fragmentFiber.child,!0,wd,t,void 0,void 0)};function wd(t,e){return t.tag===6?!1:(t=L(t),Lm(t,e))}De.prototype.focusLast=function(t){var e=[];N(this._fragmentFiber.child,!0,oo,e,void 0,void 0);for(var a=e.length-1;0<=a&&!wd(e[a],t);a--);};function oo(t,e){return e.push(t),!1}De.prototype.blur=function(){var t=Z(this._fragmentFiber);t!==null&&(t=L(t),t=ci(t).activeElement,t!==null&&N(this._fragmentFiber.child,!1,Cm,t,void 0,void 0))};function Cm(t,e){return t.tag===6?!1:(t=L(t),t===e||t.contains(e)?(e.blur(),!0):!1)}De.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),N(this._fragmentFiber.child,!1,Am,t,void 0,void 0)};function Am(t,e){return t.tag===6||(t=L(t),e.observe(t)),!1}De.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),N(this._fragmentFiber.child,!1,Om,t,void 0,void 0);for(var a=e=0;a<$e.length;a++){var l=$e[a];l.fragmentInstance===this&&l.observer===t?t.unobserve(l.instance):$e[e++]=l}$e.length=e}};function Om(t,e){return t.tag===6||(t=L(t),e.unobserve(t)),!1}var $e=[],so=!1;function Dm(t,e,a){$e.push({fragmentInstance:t,observer:e,instance:a}),so||(so=!0,Gm(function(){so=!1;var l=$e;$e=[];for(var n=0;n<l.length;n++){var i=l[n];i.observer.unobserve(i.instance)}}))}De.prototype.getClientRects=function(){var t=[];return N(this._fragmentFiber.child,!1,Um,t,void 0,void 0),t};function Um(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=L(t),e.push.apply(e,t.getClientRects());return!1}De.prototype.getRootNode=function(t){var e=Z(this._fragmentFiber);return e===null?this:L(e).getRootNode(t)},De.prototype.compareDocumentPosition=function(t){var e=Z(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];N(this._fragmentFiber.child,!1,oo,a,void 0,void 0);var l=L(e);if(a.length===0){if(a=l,W(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=l=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=_t(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=L(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=L(a[0]),n=L(a[a.length-1]);var i=W(this._fragmentFiber)?e.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=e.compareDocumentPosition(t),c=n.compareDocumentPosition(t),o=u&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=l&&i&&u&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=l&&e===t||i&&n===t||o||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&e===t||!i&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Rm(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Rm(t,e,a,l,n){var i=il(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)t:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){a=!0;break t}i=i.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=n.ownerDocument,n===i||n===i.documentElement||n===i.body;t:{for(i=e,e=Z(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break t}i=i.return}i=!1}return i}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===a)&&(e=Jt(a,i,re),e===null?e=!1:(N(e,!0,ve,i,a),i=Ht,Ht=null,e=i!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===l)&&(e=Jt(l,i,re),e===null?e=!1:(N(e,!0,Kt,i,l),i=Ht,Mt=Ht=null,e=i!==null)),e):!1}function Ed(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}De.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(f(566));var e=[];N(this._fragmentFiber.child,!1,oo,e,void 0,void 0);var a=t!==!1;if(e.length===0){var l=_t(this._fragmentFiber);if(l=a?l[1]||l[0]||Z(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){t=L(l),Ed(t,a);return}if(l=L(l),l.nodeType!==9){if(l.nodeType===11){a="host"in l?l.host:null,a!==null&&a.scrollIntoView(t);return}l.scrollIntoView(t)}}for(l=a?e.length-1:0;l!==(a?-1:e.length);){var n=e[l];n.tag===6?(n=L(n),Ed(n,a)):L(n).scrollIntoView(t),l+=a?-1:1}};function km(t,e){return t=L(t),jd(t,e),!1}function jd(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function zd(t,e){var a=e._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];t.addEventListener(n.type,n.attachedListener,hn(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(i){for(var u=0,c=0;c<$e.length;c++){var o=$e[c];(o.fragmentInstance!==e||o.observer!==i||o.instance!==t)&&($e[u++]=o)}$e.length=u,i.observe(t)}),jd(t,e))}function Hm(t,e){var a=e._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];t.removeEventListener(n.type,n.attachedListener,hn(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?Dm(e,i,t):i.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function fo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fo(a),wi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Bm(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[wn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ge(t.nextSibling),t===null)break}return null}function Ym(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ge(t.nextSibling),t===null))return null;return t}function Md(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ge(t.nextSibling),t===null))return null;return t}function ho(t){return t.data==="$?"||t.data==="$~"}function mo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Zm(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ge(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var vo=null;function Cd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Ge(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Ad(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Lm(t,e){function a(){l=!0}if(t.ownerDocument.activeElement===t)return!0;var l=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return l}function Gm(t){pd(function(){pd(function(e){return t(e)})})}function Od(t,e,a){switch(e=ci(a),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function Dd(t,e,a){for(var l in a){var n=a[l];a.hasOwnProperty(l)&&n!=null&&St(t,e,l,null,pm,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ea&&(t.onclick=null),wi(t)}function _o(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);wi(t)}var Ve=new Map,Ud=new Set;function oi(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Ea=k.d;k.d={f:Vm,r:Xm,D:Qm,C:Km,L:Jm,m:Fm,X:$m,S:Wm,M:Im};function Vm(){var t=Ea.f(),e=zu();return t||e}function Xm(t){var e=Cl(t);e!==null&&e.tag===5&&e.type==="form"?kf(e):Ea.r(t)}var mn=typeof document>"u"?null:document;function Rd(t,e,a){var l=mn;if(l&&typeof e=="string"&&e){var n=Re(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Ud.has(n)||(Ud.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),ie(e,"link",t),Wt(e),l.head.appendChild(e)))}}function Qm(t){Ea.D(t),Rd("dns-prefetch",t,null)}function Km(t,e){Ea.C(t,e),Rd("preconnect",t,e)}function Jm(t,e,a){Ea.L(t,e,a);var l=mn;if(l&&t&&e){var n='link[rel="preload"][as="'+Re(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Re(a.imageSizes)+'"]')):n+='[href="'+Re(t)+'"]';var i=n;switch(e){case"style":i=vn(t);break;case"script":i=_n(t)}if(!(Ve.has(i)||(t=nt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ve.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(si(i))||e==="script"&&l.querySelector(fi(i))))){var u=l.createElement("link");ie(u,"link",t),e==="style"&&(u[Ti]=!0,u.onload=u.onerror=function(){Jo(u)}),Wt(u),l.head.appendChild(u)}}}function Fm(t,e){Ea.m(t,e);var a=mn;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Re(l)+'"][href="'+Re(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=_n(t)}if(!Ve.has(i)&&(t=nt({rel:"modulepreload",href:t},e),Ve.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fi(i)))return}l=a.createElement("link"),ie(l,"link",t),Wt(l),a.head.appendChild(l)}}}function Wm(t,e,a){Ea.S(t,e,a);var l=mn;if(l&&t){var n=Al(l).hoistableStyles,i=vn(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(si(i)))c.loading=5;else{t=nt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ve.get(i))&&go(t,a);var o=u=l.createElement("link");Wt(o),ie(o,"link",t),o._p=new Promise(function(_,q){o.onload=_,o.onerror=q}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ru(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function $m(t,e){Ea.X(t,e);var a=mn;if(a&&t){var l=Al(a).hoistableScripts,n=_n(t),i=l.get(n);i||(i=a.querySelector(fi(n)),i||(t=nt({src:t,async:!0},e),(e=Ve.get(n))&&po(t,e),i=a.createElement("script"),Wt(i),ie(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Im(t,e){Ea.M(t,e);var a=mn;if(a&&t){var l=Al(a).hoistableScripts,n=_n(t),i=l.get(n);i||(i=a.querySelector(fi(n)),i||(t=nt({src:t,async:!0,type:"module"},e),(e=Ve.get(n))&&po(t,e),i=a.createElement("script"),Wt(i),ie(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function kd(t,e,a,l){var n=(n=ta.current)?oi(n):null;if(!n)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=vn(a.href),e=Al(n).hoistableStyles,l=e.get(a),l||(l={type:"style",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=vn(a.href);var i=Al(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(si(t)))?i._p||(u.instance=i,u.state.loading=5):(i=Ve.get(t),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ve.set(t,i)),Pm(n,t,i,u.state))),e&&l===null)throw Error(f(528,""));return u}if(e&&l!==null)throw Error(f(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=_n(a),e=Al(n).hoistableScripts,l=e.get(a),l||(l={type:"script",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function vn(t){return'href="'+Re(t)+'"'}function si(t){return'link[rel="stylesheet"]['+t+"]"}function Hd(t){return nt({},t,{"data-precedence":t.precedence,precedence:null})}function Pm(t,e,a,l){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Ti]!==!0){l.loading=1;return}}else e=t.createElement("link"),e[Ti]=!0,e.onload=e.onerror=Jo.bind(null,e),ie(e,"link",a),Wt(e),t.head.appendChild(e);l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2})}function _n(t){return'[src="'+Re(t)+'"]'}function fi(t){return"script[async]"+t}function Bd(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Re(a.href)+'"]');if(l)return e.instance=l,Wt(l),l;var n=nt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Wt(l),ie(l,"style",n),Ru(l,a.precedence,t),e.instance=l;case"stylesheet":n=vn(a.href);var i=t.querySelector(si(n));if(i)return e.state.loading|=4,e.instance=i,Wt(i),i;l=Hd(a),(n=Ve.get(n))&&go(l,n),i=(t.ownerDocument||t).createElement("link"),Wt(i);var u=i;return u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),ie(i,"link",l),e.state.loading|=4,Ru(i,a.precedence,t),e.instance=i;case"script":return i=_n(a.src),(n=t.querySelector(fi(i)))?(e.instance=n,Wt(n),n):(l=a,(n=Ve.get(i))&&(l=nt({},a),po(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Wt(n),ie(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Ru(l,a.precedence,t));return e.instance}function Ru(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function go(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function po(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ku=null;function Yd(t,e,a){if(ku===null){var l=new Map,n=ku=new Map;n.set(a,l)}else n=ku,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[wn]||i[te]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function xo(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function tv(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Zd(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Ld(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Gd(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Vd(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Gd(e),t.suspenseyImages.push(e)),t=lv.bind(t),e.decode().then(t,t))}function ev(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=vn(l.href),i=e.querySelector(si(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=di.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Wt(i);return}i=e.ownerDocument||e,l=Hd(l),(n=Ve.get(n))&&go(l,n),i=i.createElement("link"),Wt(i);var u=i;u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),ie(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=di.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Hu=0;function av(t,e){return t.stylesheets&&t.count===0&&Yu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Yu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Hu===0&&(Hu=62500*bm());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yu(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Hu?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Xd(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Yu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function di(){this.count--,Xd(this)}function lv(){this.imgCount--,Xd(this)}var Bu=null;function Yu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bu=new Map,e.forEach(nv,t),Bu=null,di.call(t))}function nv(t,e){if(!(e.state.loading&4)){var a=Bu.get(t);if(a)var l=a.get(null);else{a=new Map,Bu.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=di.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var gn={$$typeof:Dt,Provider:null,Consumer:null,_currentValue:wt,_currentValue2:wt,_threadCount:0};function iv(t,e,a,l,n,i,u,c,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Iu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.hiddenUpdates=Iu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.transitionTypes=null,this.incompleteTransitions=new Map}function Qd(t,e,a,l,n,i,u,c,o,_,q,E){return t=new iv(t,e,a,u,o,_,q,E,c),e=1,i===!0&&(e|=24),i=xe(3,null,null,e),t.current=i,i.stateNode=t,e=Or(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},kr(i),t}function Kd(t){return t?(t=Ll,t):Ll}function Jd(t,e,a,l,n,i){n=Kd(n),l.context===null?l.context=n:l.pendingContext=n,l=ka(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Ha(t,l,e),a!==null&&(Ne(a,t,e),Gn(a,t,e))}function Fd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function bo(t,e){Fd(t,e),(t=t.alternate)&&Fd(t,e)}function Wd(t){if(t.tag===13||t.tag===31){var e=ol(t,67108864);e!==null&&Ne(e,t,67108864),bo(t,67108864)}}function $d(t){if(t.tag===13||t.tag===31){var e=Oe();e=Pu(e);var a=ol(t,e);a!==null&&Ne(a,t,e),bo(t,e)}}var pn=!0;function uv(t,e,a,l){var n=O.T;O.T=null;var i=k.p;try{k.p=2,yo(t,e,a,l)}finally{k.p=i,O.T=n}}function rv(t,e,a,l){var n=O.T;O.T=null;var i=k.p;try{k.p=8,yo(t,e,a,l)}finally{k.p=i,O.T=n}}function yo(t,e,a,l){if(pn){var n=qo(l);if(n===null)eo(t,e,l,Zu,a),Pd(t,l);else if(ov(n,t,e,a,l))l.stopPropagation();else if(Pd(t,l),e&4&&-1<cv.indexOf(t)){for(;n!==null;){var i=Cl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=nl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var o=1<<31-we(u);c.entanglements[1]|=o,u&=~o}fa(i),(pt&6)===0&&(wu=Se()+500,ii(0))}}break;case 31:case 13:c=ol(i,2),c!==null&&Ne(c,i,2),zu(),bo(i,2)}if(i=qo(l),i===null&&eo(t,e,l,Zu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else eo(t,e,l,null,a)}}function qo(t){return t=ur(t),No(t)}var Zu=null;function No(t){if(Zu=null,t=il(t),t!==null){var e=z(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Q(e),t!==null)return t;t=null}else if(a===31){if(t=B(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Zu=t,null}function Id(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(b1()){case Ro:return 2;case ko:return 8;case bi:case y1:return 32;case Ho:return 268435456;default:return 32}default:return 32}}var So=!1,Wa=null,$a=null,Ia=null,hi=new Map,mi=new Map,Pa=[],cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pd(t,e){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(e.pointerId)}}function vi(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Cl(e),e!==null&&Wd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function ov(t,e,a,l,n){switch(e){case"focusin":return Wa=vi(Wa,t,e,a,l,n),!0;case"dragenter":return $a=vi($a,t,e,a,l,n),!0;case"mouseover":return Ia=vi(Ia,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return hi.set(i,vi(hi.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,mi.set(i,vi(mi.get(i)||null,t,e,a,l,n)),!0}return!1}function t1(t){var e=il(t.target);if(e!==null){var a=z(e);if(a!==null){if(e=a.tag,e===13){if(e=Q(a),e!==null){t.blockedOn=e,Xo(t.priority,function(){$d(a)});return}}else if(e===31){if(e=B(a),e!==null){t.blockedOn=e,Xo(t.priority,function(){$d(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=qo(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ir=l,a.target.dispatchEvent(l),ir=null}else return e=Cl(a),e!==null&&Wd(e),t.blockedOn=a,!1;e.shift()}return!0}function e1(t,e,a){Lu(t)&&a.delete(e)}function sv(){So=!1,Wa!==null&&Lu(Wa)&&(Wa=null),$a!==null&&Lu($a)&&($a=null),Ia!==null&&Lu(Ia)&&(Ia=null),hi.forEach(e1),mi.forEach(e1)}function Gu(t,e){t.blockedOn===e&&(t.blockedOn=null,So||(So=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,sv)))}var Vu=null;function a1(t){Vu!==t&&(Vu=t,S.unstable_scheduleCallback(S.unstable_NormalPriority,function(){Vu===t&&(Vu=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(No(l||a)===null)continue;break}var i=Cl(a);i!==null&&(t.splice(e,3),e-=3,nc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function xn(t){function e(o){return Gu(o,t)}Wa!==null&&Gu(Wa,t),$a!==null&&Gu($a,t),Ia!==null&&Gu(Ia,t),hi.forEach(e),mi.forEach(e);for(var a=0;a<Pa.length;a++){var l=Pa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)t1(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[pe]||null;if(typeof i=="function")u||a1(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[pe]||null)c=u.formAction;else if(No(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),a1(a)}}}function l1(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function To(t){this._internalRoot=t}Xu.prototype.render=To.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var a=e.current,l=Oe();Jd(a,l,t,e,null,null)},Xu.prototype.unmount=To.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jd(t.current,2,null,t,null,null),zu(),e[Ml]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vo();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Pa.length&&e!==0&&e<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&t1(t)}};var n1=x.version;if(n1!=="19.3.1")throw Error(f(527,n1,"19.3.1"));k.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=lt(e),t=t!==null?Y(t):null,t=t===null?null:t.stateNode,t};var fv={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Nn=Qu.inject(fv),Te=Qu}catch{}}return gi.createRoot=function(t,e){if(!M(t))throw Error(f(299));var a=!1,l="",n=Kf,i=Jf,u=Ff;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Qd(t,1,!1,null,null,a,l,null,n,i,u,l1),t[Ml]=e.current,to(t),new To(e)},gi.hydrateRoot=function(t,e,a){if(!M(t))throw Error(f(299));var l=!1,n="",i=Kf,u=Jf,c=Ff,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),e=Qd(t,1,!0,e,a??null,l,n,o,i,u,c,l1),e.context=Kd(null),a=e.current,l=Oe(),l=Pu(l),n=ka(l),n.callback=null,Ha(a,n,l),a=l,e.current.lanes=a,Tn(e,a),fa(e),t[Ml]=e.current,to(t),new Xu(e)},gi.version="19.3.1",gi}var m1;function Sv(){if(m1)return jo.exports;m1=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(x){console.error(x)}}return S(),jo.exports=Nv(),jo.exports}var Tv=Sv();const wv=_1(Tv),Ev=()=>{const S=At.useRef(null);return At.useEffect(()=>{const x=S.current;if(!x)return;const y=x.getContext("2d");if(!y)return;let f,M=x.width=window.innerWidth,z=x.height=window.innerHeight;const Q=()=>{x&&(M=x.width=window.innerWidth,z=x.height=window.innerHeight)};window.addEventListener("resize",Q);const B=Array.from({length:45},()=>({x:Math.random()*M,y:Math.random()*z,radius:Math.random()*3+1,speed:Math.random()*.8+.3,wobble:Math.random()*Math.PI*2,wobbleSpeed:Math.random()*.03+.01,alpha:Math.random()*.5+.2}));let ut=M/2;const lt=Z=>{ut=Z.clientX,Z.clientY};window.addEventListener("mousemove",lt);let Y=0;const N=()=>{Y+=.015,y.clearRect(0,0,M,z);const Z=7;for(let W=0;W<Z;W++){const _t=(W-Z/2)*110,A=Math.sin(Y*.6+W*1.2)*45,L=M*.5+_t+A,Ht=(ut-M*.5)*.05*(W+1),Mt=y.createLinearGradient(M*.5,0,L+Ht,z*.85);Mt.addColorStop(0,"rgba(80, 210, 255, 0.22)"),Mt.addColorStop(.35,"rgba(0, 245, 212, 0.09)"),Mt.addColorStop(.7,"rgba(2, 9, 21, 0.02)"),Mt.addColorStop(1,"rgba(2, 9, 21, 0)"),y.beginPath(),y.moveTo(M*.5-20,0),y.lineTo(M*.5+20,0),y.lineTo(L+Ht+80,z*.85),y.lineTo(L+Ht-80,z*.85),y.closePath(),y.fillStyle=Mt,y.fill()}for(const W of B){W.y-=W.speed,W.wobble+=W.wobbleSpeed;const _t=W.x+Math.sin(W.wobble)*8;W.y<-10&&(W.y=z+10,W.x=Math.random()*M),y.beginPath(),y.arc(_t,W.y,W.radius,0,Math.PI*2),y.fillStyle=`rgba(180, 240, 255, ${W.alpha*.4})`,y.fill(),y.lineWidth=.75,y.strokeStyle=`rgba(0, 245, 212, ${W.alpha*.7})`,y.stroke(),y.beginPath(),y.arc(_t-W.radius*.35,W.y-W.radius*.35,W.radius*.3,0,Math.PI*2),y.fillStyle=`rgba(255, 255, 255, ${W.alpha*.8})`,y.fill()}f=requestAnimationFrame(N)};return N(),()=>{cancelAnimationFrame(f),window.removeEventListener("resize",Q),window.removeEventListener("mousemove",lt)}},[]),r.jsx("canvas",{ref:S,className:"pointer-events-none fixed inset-0 z-[1] w-full h-full mix-blend-screen"})},jv=()=>{const S=At.useRef(null);return At.useEffect(()=>{const x=S.current;if(!x)return;const y=x.getContext("2d");if(!y)return;let f,M=x.width=window.innerWidth,z=x.height=window.innerHeight;const Q=()=>{x&&(M=x.width=window.innerWidth,z=x.height=window.innerHeight)};window.addEventListener("resize",Q);const B=[{body:"#ff5e36",fin:"#ff9f1c",glow:"rgba(255, 94, 54, 0.45)"},{body:"#e61c78",fin:"#f72585",glow:"rgba(230, 28, 120, 0.45)"},{body:"#00f5d4",fin:"#70e000",glow:"rgba(0, 245, 212, 0.45)"},{body:"#ffd166",fin:"#f48c06",glow:"rgba(255, 209, 102, 0.4)"},{body:"#7209b7",fin:"#4cc9f0",glow:"rgba(114, 9, 183, 0.45)"}],lt=Array.from({length:26},(_t,A)=>{const L=B[A%B.length];return{x:Math.random()*M,y:z*.45+Math.random()*(z*.5),vx:-(Math.random()*1.6+.8),vy:(Math.random()-.5)*.4,size:Math.random()*9+11,color:L.body,finColor:L.fin,wiggle:Math.random()*Math.PI*2,wiggleSpeed:Math.random()*.15+.1,glowIntensity:Math.random()*.4+.6}});let Y=-1e3,N=-1e3;const Z=_t=>{Y=_t.clientX,N=_t.clientY};window.addEventListener("mousemove",Z);const W=()=>{y.clearRect(0,0,M,z);for(let _t=0;_t<lt.length;_t++){const A=lt[_t];A.wiggle+=A.wiggleSpeed;const L=Y-A.x,Ht=N-A.y,Mt=Math.hypot(L,Ht);Mt<180&&(A.vx-=L/Mt*.25,A.vy-=Ht/Mt*.25);const ve=lt[(_t+1)%lt.length];A.vx+=(ve.vx-A.vx)*.02,A.vy+=(ve.vy-A.vy)*.02;const Kt=Math.hypot(A.vx,A.vy),re=3.2,Jt=.9;Kt>re?(A.vx=A.vx/Kt*re,A.vy=A.vy/Kt*re):Kt<Jt&&(A.vx=A.vx/Kt*Jt),A.vy+=Math.sin(A.wiggle*.5)*.04,A.x+=A.vx,A.y+=A.vy,A.x<-60&&(A.x=M+60,A.y=z*.35+Math.random()*(z*.6)),A.x>M+60&&(A.x=-60),A.y<z*.15&&(A.vy+=.1),A.y>z*.95&&(A.vy-=.1);const nt=Math.atan2(A.vy,A.vx);y.save(),y.translate(A.x,A.y),y.rotate(nt),y.shadowBlur=14,y.shadowColor=A.color;const ft=Math.sin(A.wiggle)*4;y.beginPath(),y.moveTo(-A.size*.8,0),y.lineTo(-A.size*1.5,-A.size*.55+ft),y.lineTo(-A.size*1.25,0),y.lineTo(-A.size*1.5,A.size*.55+ft),y.closePath(),y.fillStyle=A.finColor,y.fill(),y.beginPath(),y.moveTo(-A.size*.2,-A.size*.4),y.quadraticCurveTo(0,-A.size*.8,A.size*.3,-A.size*.3),y.fillStyle=A.finColor,y.fill(),y.beginPath(),y.ellipse(0,0,A.size,A.size*.46,0,0,Math.PI*2),y.fillStyle=A.color,y.fill(),y.shadowBlur=0,y.beginPath(),y.arc(A.size*.55,-A.size*.12,A.size*.14,0,Math.PI*2),y.fillStyle="#ffffff",y.fill(),y.beginPath(),y.arc(A.size*.58,-A.size*.12,A.size*.07,0,Math.PI*2),y.fillStyle="#020915",y.fill(),y.beginPath(),y.moveTo(-A.size*.7,0),y.quadraticCurveTo(0,A.size*.15,A.size*.4,0),y.strokeStyle="rgba(255, 255, 255, 0.75)",y.lineWidth=1.2,y.stroke(),y.restore()}f=requestAnimationFrame(W)};return W(),()=>{cancelAnimationFrame(f),window.removeEventListener("resize",Q),window.removeEventListener("mousemove",Z)}},[]),r.jsx("canvas",{ref:S,className:"pointer-events-none fixed inset-0 z-[2] w-full h-full"})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=S=>S.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g1=(...S)=>S.filter((x,y,f)=>!!x&&x.trim()!==""&&f.indexOf(x)===y).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=At.forwardRef(({color:S="currentColor",size:x=24,strokeWidth:y=2,absoluteStrokeWidth:f,className:M="",children:z,iconNode:Q,...B},ut)=>At.createElement("svg",{ref:ut,...Mv,width:x,height:x,stroke:S,strokeWidth:f?Number(y)*24/Number(x):y,className:g1("lucide",M),...B},[...Q.map(([lt,Y])=>At.createElement(lt,Y)),...Array.isArray(z)?z:[z]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=(S,x)=>{const y=At.forwardRef(({className:f,...M},z)=>At.createElement(Cv,{ref:z,iconNode:x,className:g1(`lucide-${zv(S)}`,f),...M}));return y.displayName=`${S}`,y};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]],Ov=Qt("Anchor",Av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Uv=Qt("ArrowDown",Dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],kv=Qt("Award",Rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bv=Qt("Check",Hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Zv=Qt("CircleCheckBig",Yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gv=Qt("CircleCheck",Lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Xv=Qt("Clock",Vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Oo=Qt("Compass",Qv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Jv=Qt("Gauge",Kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Wv=Qt("Mail",Fv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ku=Qt("MapPin",$v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Pv=Qt("Phone",Iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],e_=Qt("Radio",t_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],bn=Qt("Shield",a_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],n_=Qt("Thermometer",l_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],u_=Qt("Volume2",i_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],c_=Qt("VolumeX",r_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],Do=Qt("Waves",o_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],f_=Qt("X",s_);class d_{constructor(){el(this,"ctx",null);el(this,"isPlaying",!1);el(this,"masterGain",null);el(this,"ambientOsc1",null);el(this,"ambientOsc2",null);el(this,"filter",null);el(this,"sonarTimer",null)}async init(){const x=window.AudioContext||window.webkitAudioContext;x&&(this.ctx=new x,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}async start(){if(this.ctx||await this.init(),this.ctx&&this.ctx.state==="suspended"&&await this.ctx.resume(),!this.ctx||!this.masterGain)return;this.masterGain.gain.linearRampToValueAtTime(.18,this.ctx.currentTime+2),this.filter=this.ctx.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.setValueAtTime(140,this.ctx.currentTime),this.filter.connect(this.masterGain),this.ambientOsc1=this.ctx.createOscillator(),this.ambientOsc1.type="sine",this.ambientOsc1.frequency.setValueAtTime(42,this.ctx.currentTime),this.ambientOsc1.connect(this.filter),this.ambientOsc1.start(),this.ambientOsc2=this.ctx.createOscillator(),this.ambientOsc2.type="triangle",this.ambientOsc2.frequency.setValueAtTime(84.4,this.ctx.currentTime);const x=this.ctx.createGain();x.gain.setValueAtTime(.08,this.ctx.currentTime),this.ambientOsc2.connect(x),x.connect(this.filter),this.ambientOsc2.start(),this.isPlaying=!0,this.scheduleSonar()}stop(){this.ctx&&this.masterGain&&(this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+1),setTimeout(()=>{var x,y,f,M;try{(x=this.ambientOsc1)==null||x.stop(),(y=this.ambientOsc2)==null||y.stop(),(f=this.ambientOsc1)==null||f.disconnect(),(M=this.ambientOsc2)==null||M.disconnect()}catch{}},1e3)),this.sonarTimer&&(window.clearInterval(this.sonarTimer),this.sonarTimer=null),this.isPlaying=!1}toggle(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}playSonarPing(){if(!(!this.ctx||!this.isPlaying))try{const x=this.ctx.currentTime,y=this.ctx.createOscillator(),f=this.ctx.createGain();y.type="sine",y.frequency.setValueAtTime(1180,x),y.frequency.exponentialRampToValueAtTime(940,x+1.2),f.gain.setValueAtTime(.001,x),f.gain.linearRampToValueAtTime(.09,x+.05),f.gain.exponentialRampToValueAtTime(1e-4,x+2.4),y.connect(f),f.connect(this.masterGain),y.start(x),y.stop(x+2.5)}catch{}}playBubblePop(){if(this.ctx)try{this.ctx.state==="suspended"&&this.ctx.resume();const x=this.ctx.currentTime,y=this.ctx.createOscillator(),f=this.ctx.createGain();y.type="sine",y.frequency.setValueAtTime(450+Math.random()*200,x),y.frequency.exponentialRampToValueAtTime(900+Math.random()*300,x+.06),f.gain.setValueAtTime(.05,x),f.gain.exponentialRampToValueAtTime(.001,x+.12),y.connect(f),f.connect(this.ctx.destination),y.start(x),y.stop(x+.13)}catch{}}scheduleSonar(){this.sonarTimer&&window.clearInterval(this.sonarTimer),this.sonarTimer=window.setInterval(()=>{this.isPlaying&&this.playSonarPing()},9500)}}const st=new d_,h_=({depthUnit:S})=>{const[x,y]=At.useState(0);At.useEffect(()=>{const lt=()=>{const Y=document.documentElement.scrollHeight-window.innerHeight,N=window.scrollY,Z=Y>0?Math.min(Math.max(N/Y,0),1):0;y(Z)};return window.addEventListener("scroll",lt,{passive:!0}),()=>window.removeEventListener("scroll",lt)},[]);const f=Math.round(x*140),M=S==="meters"?f:Math.round(f*3.28084),z=S==="meters"?"M":"FT",Q=(27.4-x*23.2).toFixed(1),B=(1+f/10).toFixed(1),ut=lt=>lt<20?"ZONA EPILÉGICA (LUZ SOLAR)":lt<60?"ZONA MESOPELÁGICA (CREPÚSCULO)":lt<100?"ZONA BATIAL SUPERIOR":"ZONA ABISSAL PROFUNDA";return r.jsx("aside",{"aria-label":"Telemetria de Mergulho",className:"fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto",children:r.jsxs("div",{onMouseEnter:()=>st.playBubblePop(),className:"backdrop-blur-xl bg-[#030e1d]/85 border border-[#00f5d4]/25 p-4 rounded-2xl shadow-[0_0_35px_rgba(0,245,212,0.12)] flex flex-col gap-3.5 w-52 transition-all duration-300 hover:border-[#00f5d4]/50",children:[r.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-2",children:[r.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-[#00f5d4] font-mono tracking-wider",children:[r.jsx(Jv,{className:"w-3.5 h-3.5 animate-pulse text-[#00f5d4]"}),r.jsx("span",{children:"TELEMETRIA HUD"})]}),r.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00f5d4] shadow-[0_0_8px_#00f5d4]"})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("span",{className:"text-[10px] text-neutral-400 uppercase tracking-widest font-mono",children:"Profundidade"}),r.jsxs("div",{className:"flex items-baseline gap-1",children:[r.jsx("span",{className:"text-3xl font-display font-bold text-white tracking-tight",children:M}),r.jsx("span",{className:"text-xs font-mono font-semibold text-[#00f5d4]",children:z})]}),r.jsx("div",{className:"w-full bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-[#00f5d4] via-[#3a86ff] to-[#e61c78] transition-all duration-150",style:{width:`${Math.max(x*100,4)}%`}})})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("span",{className:"text-[9px] text-neutral-400 uppercase tracking-wider font-mono",children:"Camada Oceânica"}),r.jsx("span",{className:"text-[11px] font-semibold text-[#e2f1fc] font-sans tracking-wide",children:ut(f)})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2 border-t border-white/10",children:[r.jsxs("div",{className:"flex flex-col",children:[r.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-neutral-400 font-mono",children:[r.jsx(Oo,{className:"w-3 h-3 text-[#3a86ff]"}),r.jsx("span",{children:"PRESSÃO"})]}),r.jsxs("span",{className:"text-xs font-mono font-bold text-white",children:[B," BAR"]})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-neutral-400 font-mono",children:[r.jsx(n_,{className:"w-3 h-3 text-[#f59e0b]"}),r.jsx("span",{children:"TEMP."})]}),r.jsxs("span",{className:"text-xs font-mono font-bold text-white",children:[Q," °C"]})]})]}),r.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded-md border border-emerald-500/30",children:[r.jsxs("span",{className:"flex items-center gap-1",children:[r.jsx(Do,{className:"w-3 h-3"}),"NDL (TEMPO SEGURO)"]}),r.jsx("span",{className:"font-bold",children:"∞ MIN"})]})]})})},m_=({onOpenBooking:S,depthUnit:x,onToggleDepthUnit:y,isAudioOn:f,onToggleAudio:M})=>r.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 transition-all duration-300",children:r.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[r.jsxs("a",{href:"#",className:"flex items-center gap-3 group focus:outline-none",onMouseEnter:()=>st.playBubblePop(),children:[r.jsx("div",{className:"relative w-10 h-10 rounded-full border border-white/20 bg-[#041226]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,245,212,0.25)] transition-transform group-hover:scale-105",children:r.jsxs("svg",{viewBox:"0 0 100 100",className:"w-6 h-6 text-white transition-colors group-hover:text-[#00f5d4]",fill:"none",stroke:"currentColor",strokeWidth:"5",children:[r.jsx("circle",{cx:"50",cy:"50",r:"42",strokeDasharray:"6 4",strokeOpacity:"0.4"}),r.jsx("path",{d:"M50 15 L30 35 L35 70 L50 85 L65 70 L70 35 Z",fill:"rgba(0,245,212,0.15)"}),r.jsx("circle",{cx:"50",cy:"45",r:"14",fill:"rgba(230,28,120,0.3)"}),r.jsx("circle",{cx:"50",cy:"45",r:"7",fill:"#ffffff"}),r.jsx("path",{d:"M30 35 L70 35"})]})}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("span",{className:"font-display font-bold text-base sm:text-lg tracking-wider text-white",children:"AQUA SPHERE"}),r.jsx("span",{className:"text-[10px] font-mono tracking-widest text-[#00f5d4]/80 -mt-1 uppercase",children:"Clube de Mergulho"})]})]}),r.jsxs("nav",{className:"hidden md:flex items-center gap-2 bg-[#041226]/60 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]",children:[r.jsx("a",{href:"#sobre",onMouseEnter:()=>st.playBubblePop(),className:"px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all",children:"О клубе"}),r.jsx("a",{href:"#cursos",onMouseEnter:()=>st.playBubblePop(),className:"px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all",children:"Курсы"}),r.jsx("a",{href:"#locais",onMouseEnter:()=>st.playBubblePop(),className:"px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all",children:"Локации"}),r.jsx("a",{href:"#contato",onMouseEnter:()=>st.playBubblePop(),className:"px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all",children:"Номер"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("button",{onClick:()=>{st.playBubblePop(),M()},title:f?"Mutar Sonar Hidrofônico":"Ativar Sonar Subaquático",className:"w-9 h-9 rounded-full bg-[#041226]/80 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-[#00f5d4] hover:border-[#00f5d4]/40 transition-all",children:f?r.jsx(u_,{className:"w-4 h-4 text-[#00f5d4] animate-pulse"}):r.jsx(c_,{className:"w-4 h-4 text-neutral-400"})}),r.jsxs("button",{onClick:()=>{st.playBubblePop(),y()},title:"Alternar Metros / Pés",className:"hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#041226]/80 border border-white/15 text-[11px] font-mono font-medium text-neutral-300 hover:text-white transition-all",children:[r.jsx(Oo,{className:"w-3 h-3 text-[#00f5d4]"}),r.jsx("span",{children:x==="meters"?"M":"FT"})]}),r.jsxs("button",{onClick:()=>{st.playBubblePop(),S()},className:"relative group overflow-hidden px-5 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm text-white shadow-[0_0_25px_rgba(230,28,120,0.6)] hover:shadow-[0_0_35px_rgba(230,28,120,0.9)] transition-all duration-300 active:scale-95",style:{background:"linear-gradient(135deg, #f72585 0%, #b5179e 60%, #7209b7 100%)"},children:[r.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:[r.jsx("span",{children:"Записаться"}),r.jsx("span",{className:"opacity-60 text-xs hidden sm:inline",children:"/ Agendar"})]}),r.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"})]})]})]})}),v_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_0_io by BurgiSimon  - Tags: simple, green, gradient, button, glow, html, css, click animation */
.aq_uiv_0_button {
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  border: 2px solid rgba(255, 255, 255, 0.aq_uiv_0_6);
  border-radius: 5px;
  outline: none;
  box-shadow: 0 6px 7px rgba(0, 0, 0, 0.aq_uiv_0_1),
    inset 0 2px 4px rgba(255, 255, 255, 0.aq_uiv_0_5); /* Hinzufügen eines inneren Schattens für Tiefe */
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.aq_uiv_0_5);
  transition: box-shadow 0.aq_uiv_0_4s ease, transform 0.aq_uiv_0_4s ease;
  background-image: linear-gradient(
    to top,
    rgba(206, 255, 255, 0.aq_uiv_0_75),
    rgba(216, 255, 244, 0.aq_uiv_0_65)
  );
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 0%;
}

.aq_uiv_0_button:hover {
  box-shadow: 0 7px 9px rgba(0, 0, 0, 0.aq_uiv_0_15),
    inset 0 3px 5px rgba(255, 255, 255, 0.aq_uiv_0_6);
}

@keyframes fillButtonAndPress {
  0% {
    background-size: 100% 0%;
    transform: translateY(0);
    border: 2px solid rgba(255, 255, 255, 0.aq_uiv_0_6);
  }
  100% {
    background-size: 100% 100%;
    transform: translateY(2px);
    border: 1px solid rgba(205, 235, 218, 0.aq_uiv_0_6);
  }
}

.aq_uiv_0_button:active {
  animation: fillButtonAndPress 0.aq_uiv_0_4s ease forwards;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.aq_uiv_0_2),
    inset 0 2px 4px rgba(255, 255, 255, 0.aq_uiv_0_7);
}

.aq_uiv_0_font {
  font-family: sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:'<button className="aq_uiv_0_button aq_uiv_0_font">Hold Me</button>'}})]}),__=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<!-- From Uiverse.io by 0x3ther  - Tags: icon, animation, button, navigation, hover effect, tailwindbutton, tailwindcss -->
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
</div>`}})]}),g_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_2_io by Dashrath-Sharma  - Tags: glassmorphism, flashy, button, shadow, glow, border, box-shadow, buttons */
button {
  cursor: pointer;
  padding: 1em 2em;
  font-weight: bold;
  font-size: 20px;
  color: #aq_uiv_2_fff;
  position: relative;
  overflow: hidden;
  background: rgba(60, 73, 203, 0.aq_uiv_2_35);
  box-shadow: 0 0px 32px 0 rgba(31, 38, 135, 0.aq_uiv_2_37);
  backdrop-filter: blur(14.aq_uiv_2_5px);
  border: 1px solid rgba(255, 255, 255, 0.aq_uiv_2_18);
  -webkit-backdrop-filter: blur(14.aq_uiv_2_5px);
}

button:hover {
  box-shadow: 0px 0 32px 0 rgba(31, 38, 135, 0.aq_uiv_2_37),
    0px 0 32px 0 rgba(31, 38, 135, 0.aq_uiv_2_37), 0 0 42px 0px rgba(31, 38, 135, 0.aq_uiv_2_37),
    0 0 52px 0 rgba(31, 38, 135, 0.aq_uiv_2_37);
  border: 1px solid rgba(255, 255, 255, 0.aq_uiv_2_58);
}

button,
button::before {
  display: grid;
  place-items: center;
  border-radius: 10px;
  box-shadow: 0 0px 32px 0 rgba(31, 38, 135, 0.aq_uiv_2_37);
}

button::before {
  content: "Button";
  position: absolute;
  background: blue;
  width: 90%;
  height: 80%;
  background: rgba(26, 18, 241, 0.aq_uiv_2_25);
  backdrop-filter: blur(18.aq_uiv_2_5px);
  -webkit-backdrop-filter: blur(18.aq_uiv_2_5px);
  border: 1px solid rgba(255, 255, 255, 0.aq_uiv_2_18);
  transition: 0.aq_uiv_2_4s;
}

button:hover::before {
  background: rgba(51, 57, 236, 0.aq_uiv_2_4);
  box-shadow: 1px 1px 2px 0 rgba(31, 38, 135, 0.aq_uiv_2_37),
    2px 2px 2px 0 rgba(31, 38, 135, 0.aq_uiv_2_37), 0 0px 32px 0 rgba(31, 38, 135, 0.aq_uiv_2_37),
    0 0px 32px 1px rgba(31, 38, 135, 0.aq_uiv_2_37), 0 0px 32px 0 rgba(31, 38, 135, 0.aq_uiv_2_37);
  backdrop-filter: blur(5.aq_uiv_2_5px);
  -webkit-backdrop-filter: blur(5.aq_uiv_2_5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.aq_uiv_2_18);
}
button:active::before {
  transform: scale(0.aq_uiv_2_67);
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:'<button className="button">Button</button>'}})]}),p_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_3_io by Bodyhc - Tags: button */
.aq_uiv_3_button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(66, 13, 240);
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  outline: 3px solid #aq_uiv_3_270092;
  cursor: pointer;
  transition: ease-out .aq_uiv_3_5s;
}

.aq_uiv_3_button:hover {
  width: 180px;
  height: 60px;
  outline-offset: 4px;
  transform: scale(1.aq_uiv_3_3) rotate(2deg);
  background-color: blue;
  box-shadow: 5px 20px #aq_uiv_3_cdcbd4
}

.aq_uiv_3_icon {
  color: #aq_uiv_3_270092;
  margin-right: 5px;
}

.aq_uiv_3_share {
  margin-left: 5px;
  color: #aq_uiv_3_fff;
}



      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<button className="aq_uiv_3_button"> 
  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="aq_uiv_3_icon"> 
  <path fill="#fff" d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path> 
  </svg> 
  <span className="aq_uiv_3_share">SHARE </span> 
  </button>`}})]}),x_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_4_io by John-CFO - Tags: button, glow, reflection */
.aq_uiv_4_btn {
  height: 3.aq_uiv_4_5rem;
  width: 13.aq_uiv_4_2rem;
  border-radius: 5px;
  border: 5px solid rgb(255, 255, 255);
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgb(255, 255, 255));
  animation: flickering 2s linear infinite both;
  text-transform: uppercase;
  background-color: rgb(83, 82, 82);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.aq_uiv_4_6s;
  box-shadow: 0px 0px 60px #aq_uiv_4_1f4c65;
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.aq_uiv_4_0), rgba(0,0,0,0.aq_uiv_4_4));
}

@keyframes flickering {
  0%,
  100% {
    opacity: 1;
  }

  41.aq_uiv_4_99% {
    opacity: 1;
  }

  42% {
    opacity: 0;
  }

  43% {
    opacity: 0;
  }

  43.aq_uiv_4_01% {
    opacity: 1;
  }

  47.aq_uiv_4_99% {
    opacity: 1;
  }

  48% {
    opacity: 0;
  }

  49% {
    opacity: 0;
  }

  49.aq_uiv_4_01% {
    opacity: 1;
  }
}

.aq_uiv_4_text {
  font-size: 1.aq_uiv_4_8rem;
  font-family: Arial, Helvetica, sans-serif;
}

.aq_uiv_4_btn:hover {
  background-color: black;
  border-radius: 0;
}







      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<button className="aq_uiv_4_btn">
  <span className="aq_uiv_4_text">Button</span>
</button>`}})]}),b_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_5_io by EmmaxPlay - Tags: button */
.aq_uiv_5_btn {
 padding: 0.aq_uiv_5_9em 1.aq_uiv_5_6em;
 border: none;
 outline: none;
 color: #aq_uiv_5_FFF;
 font-family: inherit;
 font-weight: 500;
 font-size: 17px;
 cursor: pointer;
 position: relative;
 z-index: 0;
 border-radius: 12px;
}

.aq_uiv_5_btn::after {
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
/* glow */
.aq_uiv_5_btn::before {
 content: "";
 background: linear-gradient(
    45deg,
    #aq_uiv_5_FF0000, #aq_uiv_5_002BFF, #aq_uiv_5_FF00C8, #aq_uiv_5_002BFF,
      #aq_uiv_5_FF0000, #aq_uiv_5_002BFF, #aq_uiv_5_FF00C8, #aq_uiv_5_002BFF
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
 transition: opacity .aq_uiv_5_3s ease-in-out;
 border-radius: 10px;
 opacity: 0;
}

@keyframes glowing {
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

/* hover */
.aq_uiv_5_btn:hover::before {
 opacity: 1;
}

.aq_uiv_5_btn:active:after {
 background: transparent;
}

.aq_uiv_5_btn:active {
 color: #aq_uiv_5_000;
 font-weight: bold;
}

      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:'<button className="aq_uiv_5_btn">Hover Me!</button>'}})]}),y_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_7_io by vikramsinghnegi  - Tags: loading, active, switch, 2d button */
.aq_uiv_7_checkbox-wrap {
  display: block;
  width: 106px;
  height: 51px;
  position: relative;
  margin: 1px auto;
}
#aq_uiv_7_slide {
  display: block;
  width: 106px;
  height: 51px;
  margin: 0px;
  padding: 0px;
  position: absolute;
  z-index: 2;
  opacity: 0;
}
#aq_uiv_7_slide + label {
  display: block;
  width: 105px;
  height: 50px;
  margin: 0px;
  padding: 0px;
  z-index: 1;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
}
#aq_uiv_7_pinkliquid {
  width: 88px;
  height: 36px;
  border-radius: 18px;
  margin: 7px 0 0 9px;
  overflow: hidden;
  background: #aq_uiv_7_b4264a;
  background: linear-gradient(to bottom, #aq_uiv_7_fe0744 0%, #aq_uiv_7_ff0460 50%, #aq_uiv_7_ff0082 100%);
  box-shadow: 0px 0px 9px 0px #aq_uiv_7_ff1e00;
}
.aq_uiv_7_shine {
  width: 100%;
  background: rgba(255, 255, 255, 0.aq_uiv_7_23);
  margin: 6px 0 4px 0;
  transition: all 300ms ease;
}
.aq_uiv_7_shine#aq_uiv_7_shine-one {
  height: 12px;
}
.aq_uiv_7_shine#aq_uiv_7_shine-two {
  height: 3px;
}
#aq_uiv_7_bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
#aq_uiv_7_bubbles i {
  display: block;
  border-radius: 20px;
  background: #aq_uiv_7_3a3236;
  position: absolute;
  transition: all 600ms ease;
}
i#aq_uiv_7_a {
  width: 4px;
  height: 4px;
  top: 35px;
  left: 19px;
}
i#aq_uiv_7_b {
  width: 5px;
  height: 5px;
  top: 24px;
  left: 30px;
}
i#aq_uiv_7_c {
  width: 3px;
  height: 3px;
  top: 15px;
  left: 26px;
}
i#aq_uiv_7_d {
  width: 6px;
  height: 6px;
  top: 20px;
  left: 40px;
}
i#aq_uiv_7_e {
  width: 5px;
  height: 5px;
  top: 30px;
  left: 33px;
}
i#aq_uiv_7_f {
  width: 5px;
  height: 5px;
  top: 30px;
  right: 33px;
}
i#aq_uiv_7_g {
  width: 6px;
  height: 6px;
  top: 20px;
  right: 40px;
}
i#aq_uiv_7_h {
  width: 3px;
  height: 3px;
  top: 15px;
  right: 26px;
}
i#aq_uiv_7_i {
  width: 4px;
  height: 4px;
  top: 35px;
  right: 19px;
}
i#aq_uiv_7_j {
  width: 5px;
  height: 5px;
  top: 24px;
  right: 30px;
}
#aq_uiv_7_circle {
  width: 37px;
  height: 37px;
  border-radius: 19px;
  background: #aq_uiv_7_191919;
  position: absolute;
  top: 7px;
  left: 9px;
  border-right: 1px solid #aq_uiv_7_e3006f;
  box-shadow: inset 0px 0px 10px 0px rgba(255, 255, 255, 0.aq_uiv_7_24),
    0px 3px 4px 0px #aq_uiv_7_000000;
  transition: all 300ms ease;
}
#aq_uiv_7_inner-circle {
  width: 31px;
  height: 31px;
  margin: 3px;
  border-radius: 16px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 1, 122, 0.aq_uiv_7_2) 100%
  );
}
#aq_uiv_7_slide:checked + label #aq_uiv_7_circle {
  left: 60px;
  border-right: 1px solid transparent;
  border-left: 1px solid #aq_uiv_7_e3006f;
  background-color: #aq_uiv_7_c27098;
}
#aq_uiv_7_slide:checked + label #aq_uiv_7_inner-circle {
  background: linear-gradient(
    to right,
    rgba(255, 1, 122, 0.aq_uiv_7_2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_a {
  width: 4px;
  height: 4px;
  top: 26px;
  left: 19px;
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_b {
  width: 5px;
  height: 5px;
  top: 24px;
  left: 30px;
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_c {
  width: 3px;
  height: 3px;
  top: 24px;
  left: 26px;
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_d {
  width: 6px;
  height: 6px;
  top: 29px;
  left: 40px;
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_e {
  width: 5px;
  height: 5px;
  top: 21px;
  left: 33px;
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_f {
  width: 5px;
  height: 5px;
  top: 26px;
  right: 33px;
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_g {
  width: 6px;
  height: 6px;
  top: 28px;
  right: 40px;
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_h {
  width: 3px;
  height: 3px;
  top: 23px;
  right: 26px;
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_i {
  width: 4px;
  height: 4px;
  top: 25px;
  right: 19px;
}
#aq_uiv_7_slide:checked + label i#aq_uiv_7_j {
  width: 5px;
  height: 5px;
  top: 30px;
  right: 30px;
}
#aq_uiv_7_slide:checked + label .aq_uiv_7_shine#aq_uiv_7_shine-one {
  height: 12px;
  margin-top: 12px;
}
#aq_uiv_7_slide:checked + label .aq_uiv_7_shine#aq_uiv_7_shine-two {
  height: 3px;
  margin-top: -20px;
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<div className="aq_uiv_7_checkbox-wrap">
  <input name="slide" id="aq_uiv_7_slide" type="checkbox" />
  <label htmlFor="aq_uiv_7_slide">
    <div id="aq_uiv_7_pinkliquid">
      <div id="aq_uiv_7_shine-one" className="aq_uiv_7_shine"></div>
      <div id="aq_uiv_7_shine-two" className="aq_uiv_7_shine"></div>
      <div id="aq_uiv_7_bubbles"></div>
    </div>
    <div id="aq_uiv_7_circle">
      <div id="aq_uiv_7_inner-aq_uiv_7_circle"></div>
      <div id="aq_uiv_7_inner-aq_uiv_7_circle-two"></div>
    </div>
  </label>
</div>`}})]}),q_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_8_io by Nawsome - Tags: skeuomorphism, checkbox, squishy, bubble */
label, .aq_uiv_8_bubble {
  display: block;
  -webkit-tap-highlight-color: transparent;
}

label {
  animation: float74 4s ease-in-out infinite;
}

.aq_uiv_8_bubble, .aq_uiv_8_bubble:before, .aq_uiv_8_bubble:after {
  transition-duration: 0.aq_uiv_8_2s;
}

.aq_uiv_8_bubble, .aq_uiv_8_bubble:after {
  border-radius: 50%;
}

.aq_uiv_8_bubble {
  background-image: radial-gradient(8% 8% at 22% 28%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 23% 27%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 24% 26%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 25% 25%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 26% 24%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 27% 23%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 28% 22%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%);
  box-shadow: 0 -0.aq_uiv_8_06em 0.aq_uiv_8_1em hsl(0,90%,100%) inset,
		0 -0.aq_uiv_8_15em 0.aq_uiv_8_4em hsl(0,90%,45%) inset,
		0 0.aq_uiv_8_05em 0.aq_uiv_8_05em hsl(0,90%,45%) inset,
		0.aq_uiv_8_05em 0 0.aq_uiv_8_1em hsl(0,90%,100%) inset,
		-0.aq_uiv_8_05em 0 0.aq_uiv_8_1em hsl(0,90%,100%) inset,
		0 0.aq_uiv_8_1em 0.aq_uiv_8_4em hsl(0,90%,60%) inset;
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

.aq_uiv_8_bubble:before, .aq_uiv_8_bubble:after {
  content: "";
  display: block;
  position: absolute;
  transition-timing-function: var(--bubbleTiming);
}

.aq_uiv_8_bubble:before {
  border-radius: 0.aq_uiv_8_75em;
  box-shadow: 0 0 0 0.aq_uiv_8_5em hsl(0,0%,100%) inset;
  filter: drop-shadow(0.aq_uiv_8_6em 0.aq_uiv_8_6em 4px hsla(0,0%,0%,0.aq_uiv_8_2));
  top: 50%;
  left: 50%;
  width: 1.aq_uiv_8_5em;
  height: 1.aq_uiv_8_5em;
  transform: translate3d(-50%,-50%,-1px);
  z-index: -1;
}

.aq_uiv_8_bubble:after {
  background: radial-gradient(100% 100% at center,hsla(0,0%,0%,0) 35%,hsla(0,0%,0%,0.aq_uiv_8_2) 48%,hsla(0,0%,0%,0) 50%);
  filter: blur(4px);
  top: 0.aq_uiv_8_6em;
  left: 0.aq_uiv_8_6em;
  width: 100%;
  height: 100%;
  transform: translate3d(0,0,-1px);
  z-index: -2;
}

.aq_uiv_8_bubble:focus, .aq_uiv_8_bubble:hover {
  transform: scale(1.aq_uiv_8_1);
  outline: none;
}

.aq_uiv_8_bubble:focus:active, .aq_uiv_8_bubble:hover:active {
  width: 3.aq_uiv_8_6em;
  height: 2.aq_uiv_8_4em;
}

.aq_uiv_8_bubble:focus:before, .aq_uiv_8_bubble:hover:before {
  filter: drop-shadow(0.aq_uiv_8_75em 0.aq_uiv_8_75em 4px hsla(0,0%,0%,0.aq_uiv_8_2));
}

.aq_uiv_8_bubble:focus:after, .aq_uiv_8_bubble:hover:after {
  transform: translate3d(0.aq_uiv_8_15em,0.aq_uiv_8_15em,-1px);
}

.aq_uiv_8_bubble:checked {
  box-shadow: 0 -0.aq_uiv_8_06em 0.aq_uiv_8_1em hsl(120,90%,100%) inset,
		0 -0.aq_uiv_8_15em 0.aq_uiv_8_4em hsl(120,90%,45%) inset,
		0 0.aq_uiv_8_05em 0.aq_uiv_8_05em hsl(120,90%,45%) inset,
		0.aq_uiv_8_05em 0 0.aq_uiv_8_1em hsl(120,90%,100%) inset,
		-0.aq_uiv_8_05em 0 0.aq_uiv_8_1em hsl(120,90%,100%) inset,
		0 0.aq_uiv_8_1em 0.aq_uiv_8_4em hsl(120,90%,60%) inset;
}

.aq_uiv_8_bubble:checked:before {
  border-radius: 0.aq_uiv_8_25em;
  width: 0.aq_uiv_8_5em;
}
/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  label {
    animation: none;
  }

  .aq_uiv_8_bubble, .aq_uiv_8_bubble:before, .aq_uiv_8_bubble:after {
    transition-duration: 0s;
  }

  .aq_uiv_8_bubble:focus, .aq_uiv_8_bubble:hover {
    transform: scale(1);
  }

  .aq_uiv_8_bubble:focus:active, .aq_uiv_8_bubble:hover:active {
    width: 3em;
    height: 3em;
  }

  .aq_uiv_8_bubble:focus:before, .aq_uiv_8_bubble:hover:before {
    filter: drop-shadow(0.aq_uiv_8_6em 0.aq_uiv_8_6em 4px hsla(0,0%,0%,0.aq_uiv_8_2));
  }

  .aq_uiv_8_bubble:focus:after, .aq_uiv_8_bubble:hover:after {
    transform: translate3d(0,0,-1px);
  }
}
/* Animations */
@keyframes float74 {
  from, to {
    transform: translate(0,3%);
  }

  25% {
    transform: translate(-3%,0);
  }

  50% {
    transform: translate(0,-3%);
  }

  75% {
    transform: translate(3%,0);
  }
}

      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:'<label><input value="on" name="dummy" type="checkbox" className="aq_uiv_8_bubble" /></label>'}})]}),N_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_11_io by Aryan-81  - Tags: card, black, square, gradient, minimalistic, card, neon, glow, monthly, popular, Uiverse */
.aq_uiv_11_card {
  position: relative;
  width: 190px;
  height: 190px;
  background-color: #aq_uiv_11_000;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.aq_uiv_11_card > div {
  margin: auto auto;
}
.aq_uiv_11_card::before {
  content: "";
  position: absolute;
  inset: 0;
  left: -5px;
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #aq_uiv_11_fff01c 0%, #aq_uiv_11_40c9ff 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.aq_uiv_11_6s cubic-bezier(0.aq_uiv_11_175, 0.aq_uiv_11_885, 0.aq_uiv_11_32, 1.aq_uiv_11_275);
}

.aq_uiv_11_card::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #aq_uiv_11_fff01c 0%, #aq_uiv_11_40c9ff 100%);
  transform: translate3d(0, 0, 0) scale(0.aq_uiv_11_95);
  filter: blur(20px);
}

.aq_uiv_11_heading {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
}

.aq_uiv_11_card p:not(.aq_uiv_11_heading) {
  font-size: 14px;
}

.aq_uiv_11_card p:last-child {
  color: #aq_uiv_11_e81cff;
  font-weight: 600;
}

.aq_uiv_11_card:hover::after {
  filter: blur(30px);
}

.aq_uiv_11_card:hover::before {
  transform: rotate(-90deg) scaleX(1) scaleY(1);
}

.aq_uiv_11_card:hover .aq_uiv_11_card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}
.aq_uiv_11_card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(-45deg, #aq_uiv_11_fc00ff 0%, #aq_uiv_11_00dbde 100%);
  color: #aq_uiv_11_fff;
  font-size: 1rem;
  padding: 0.aq_uiv_11_5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.aq_uiv_11_3s ease-out;
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<div className="aq_uiv_11_card">
  <div>
    <p className="aq_uiv_11_heading">Popular this month</p>
    <p>Powered By</p>
    <p>Uiverse</p>
  </div>

  <button className="aq_uiv_11_card-button">More Info</button>
</div>`}})]}),S_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_12_io by EzzoHamdan  - Tags: animation, purple, social, gradient, card, space, glow, creative */
.aq_uiv_12_card {
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
  background-color: #aq_uiv_12_121212;
  border-radius: 10px;
  box-shadow: 5px -5px 25px rgb(116, 214, 247), -5px 5px 25px blueviolet;
  transition: all 0.aq_uiv_12_3s ease;
}

.aq_uiv_12_card:hover {
  box-shadow: 0px 5px 10px rgb(116, 214, 247), 0px -5px 10px blueviolet;
  transform: scale(1.aq_uiv_12_05);
  background-size: 0 0;
}

.aq_uiv_12_card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.aq_uiv_12_8) 0%,
    rgb(138, 43, 226) 15%,
    rgba(138, 79, 226, 0.aq_uiv_12_75) 35%,
    rgba(138, 43, 226, 0.aq_uiv_12_5) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  border-radius: 10px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.aq_uiv_12_5s ease;
}

.aq_uiv_12_card:hover::before {
  opacity: 1;
  animation: space-animation 25s infinite alternate, sparkle 1.aq_uiv_12_5s infinite;
}

@keyframes space-animation {
  0%,
  100% {
    background-position: -10%;
  }

  50% {
    background-position: 110%;
  }
}

@keyframes sparkle {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.aq_uiv_12_05);
  }

  100% {
    transform: scale(1);
  }
}

.aq_uiv_12_image {
  width: 100%;
  max-width: 190px;
  display: block;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  transition: rotate 1s ease, scale 1s ease;
  rotate: -70deg;
  animation: float 10s ease infinite;
  scale: 1.aq_uiv_12_4;
  z-index: -1;
}

.aq_uiv_12_card:hover .aq_uiv_12_image {
  rotate: 70deg;
  scale: 1.aq_uiv_12_05;
}

.aq_uiv_12_card:hover .aq_uiv_12_image:hover {
  scale: 1.aq_uiv_12_15;
}

@keyframes float {
  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-20px);
  }
}

.aq_uiv_12_heading {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #aq_uiv_12_f0f0f0;
  transform: translateY(-30px);
  transition: all 0.aq_uiv_12_3s ease;
}

.aq_uiv_12_heading:hover {
  transform: translateY(-40px);
}

.aq_uiv_12_card:hover .aq_uiv_12_heading {
  color: rgb(116, 214, 247);
}

.aq_uiv_12_icons {
  display: flex;
  justify-content: space-between;
}

.aq_uiv_12_icons a {
  text-decoration: none;
  color: #aq_uiv_12_f0f0f0;
  transition: transform 0.aq_uiv_12_3s ease;
}

.aq_uiv_12_card:hover a {
  color: rgb(116, 214, 247);
}

.aq_uiv_12_icons .aq_uiv_12_instagram:hover {
  color: #aq_uiv_12_e4405f;
}

.aq_uiv_12_instagram:hover {
  animation: wiggle 0.aq_uiv_12_5s ease infinite;
}

@keyframes wiggle {
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

.aq_uiv_12_icons .aq_uiv_12_x:hover {
  color: #aq_uiv_12_14171a;
}

.aq_uiv_12_x:hover {
  animation: pulse 0.aq_uiv_12_5s ease infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.aq_uiv_12_2);
  }

  100% {
    transform: scale(1);
  }
}

.aq_uiv_12_icons .aq_uiv_12_discord:hover {
  color: #aq_uiv_12_7289da;
}

.aq_uiv_12_discord:hover {
  animation: bounce 0.aq_uiv_12_5s ease infinite;
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


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<div className="aq_uiv_12_card">
  <img
    className="aq_uiv_12_image"
    alt=""
    src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
  />
  <div className="aq_uiv_12_heading">We're on Social Media</div>
  <div className="aq_uiv_12_icons">
    <a className="aq_uiv_12_instagram" href="https://www.instagram.com/uiverse.io/">
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
    <a className="aq_uiv_12_x" href="https://twitter.com/uiverse_io">
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
    <a className="aq_uiv_12_discord" href="https://discord.gg/KD8ba2uUpT">
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
</div>`}})]}),T_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_13_io by 0xnihilism  - Tags: simple, card, smooth, hover effect, advanced, card hover */
.aq_uiv_13_card {
  background-color: #aq_uiv_13_222;
  border: 10px solid rgb(161, 156, 116);
  padding: 30px;
  width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 9px 11px 1px rgb(0, 0, 0);
  transition: transform 0.aq_uiv_13_3s ease, box-shadow 0.aq_uiv_13_3s ease;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}

.aq_uiv_13_card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.aq_uiv_13_05),
    rgba(255, 255, 255, 0.aq_uiv_13_05) 1px,
    transparent 1px,
    transparent 2px
  );

  opacity: 0.aq_uiv_13_3;
  pointer-events: none;
  z-index: 2;
  animation: tv-static 0.aq_uiv_13_2s infinite linear alternate;
}

.aq_uiv_13_card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.aq_uiv_13_25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.aq_uiv_13_06),
      rgba(0, 255, 0, 0.aq_uiv_13_02),
      rgba(0, 0, 255, 0.aq_uiv_13_06)
    );
  background-size: 100% 2px, 3px 100%;
  animation: tv-flicker 0.aq_uiv_13_15s infinite;
  z-index: 35;
  pointer-events: none;
  opacity: 0.aq_uiv_13_5;
}

@keyframes tv-static {
  0% {
    opacity: 0.aq_uiv_13_3;
  }
  100% {
    opacity: 0.aq_uiv_13_1;
  }
}

.aq_uiv_13_eye-of-providence {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto 20px;
}

.aq_uiv_13_triangle {
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-bottom: 190px solid rgb(198, 181, 113);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.aq_uiv_13_3s ease;
}

.aq_uiv_13_card:hover .aq_uiv_13_triangle {
  transform: scale(1.aq_uiv_13_05);
}

.aq_uiv_13_eye {
  width: 90px;
  height: 50px;
  background: radial-gradient(circle at 30% 30%, #aq_uiv_13_fff, #aq_uiv_13_e6e6e6);
  border-radius: 50%;
  position: absolute;
  top: 90px;
  left: 65px;
  overflow: hidden;
  box-shadow: 0 0 0 10px rgb(115, 112, 92), 15px 15px 0 #aq_uiv_13_000,
    inset -5px -5px 10px rgba(0, 0, 0, 0.aq_uiv_13_2),
    inset 5px 5px 10px rgba(255, 255, 255, 0.aq_uiv_13_3);
  z-index: 2;
  animation: blink 6s infinite cubic-bezier(0.aq_uiv_13_76, 0, 0.aq_uiv_13_24, 1);
}

.aq_uiv_13_pupil {
  width: 16px;
  height: 16px;
  background: rgb(207, 19, 19);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, #aq_uiv_13_000, #aq_uiv_13_444);
  border: 2px solid #aq_uiv_13_fff;
  position: absolute;
  top: 14px;
  left: 14px;
  box-shadow: inset 0 0 10px rgba(203, 4, 4, 0.aq_uiv_13_2), 0 0 10px rgba(0, 0, 0, 0.aq_uiv_13_5);
}

@keyframes blink {
  0%,
  90%,
  100% {
    height: 50px;
  }
  92%,
  98% {
    height: 0px;
  }
}

@keyframes blink {
  0%,
  92%,
  100% {
    transform: scaleY(1);
  }
  94% {
    transform: scaleY(0.aq_uiv_13_1);
  }
}

.aq_uiv_13_iris {
  width: 45px;
  height: 45px;
  background: #aq_uiv_13_000;
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
  25% {
    transform: translate(-18px, 10px) scale(1.aq_uiv_13_1);
  }
  50% {
    transform: translate(0, 15px) scale(1.aq_uiv_13_2);
  }
  75% {
    transform: translate(20px, 10px) scale(1.aq_uiv_13_1);
  }
}

.aq_uiv_13_triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #aq_uiv_13_f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.aq_uiv_13_title {
  color: rgb(255, 255, 255);
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 28px;
  padding-bottom: 33px;
  text-shadow: 3px 3px #aq_uiv_13_000;
  z-index: 3;
  position: relative;
  display: inline-block;
}

.aq_uiv_13_title::before,
.aq_uiv_13_title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.aq_uiv_13_title::before {
  left: 2px;
  text-shadow: -1px 0 red;
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.aq_uiv_13_title::after {
  left: -2px;
  text-shadow: -1px 0 blue;
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

@keyframes glitch-anim-1 {
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

.aq_uiv_13_glitch-text {
  color: #aq_uiv_13_fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #aq_uiv_13_000;
  z-index: 3;
}

.aq_uiv_13_glitch-text {
  color: #aq_uiv_13_fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #aq_uiv_13_000;
  z-index: 3;
}

.aq_uiv_13_glitch-text::before,
.aq_uiv_13_glitch-text::after {
  content: "The Eye of Providence";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.aq_uiv_13_glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #aq_uiv_13_f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}

.aq_uiv_13_glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #aq_uiv_13_0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
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

.aq_uiv_13_scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(75, 68, 68, 0.aq_uiv_13_5);
  animation: scan 2.aq_uiv_13_5s linear infinite;
  z-index: 4;
}

@keyframes scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

.aq_uiv_13_triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #aq_uiv_13_f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.aq_uiv_13_title {
  color: rgb(255, 255, 255);
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 28px;
  text-shadow: 3px 3px #aq_uiv_13_000;
  z-index: 3;
}

.aq_uiv_13_glitch-text {
  color: #aq_uiv_13_fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #aq_uiv_13_000;
  z-index: 3;
}

.aq_uiv_13_glitch-text::before,
.aq_uiv_13_glitch-text::after {
  content: "The Eye of Providence";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.aq_uiv_13_glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #aq_uiv_13_f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}

.aq_uiv_13_glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #aq_uiv_13_0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
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

.aq_uiv_13_scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(75, 68, 68, 0.aq_uiv_13_5);
  animation: scan 2.aq_uiv_13_5s linear infinite;
  z-index: 4;
}

@keyframes scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

.aq_uiv_13_triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #aq_uiv_13_f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.aq_uiv_13_title {
  color: rgb(255, 255, 255);
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 28px;
  text-shadow: 3px 3px #aq_uiv_13_000;
  z-index: 3;
}

.aq_uiv_13_glitch-text {
  color: #aq_uiv_13_fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #aq_uiv_13_000;
  z-index: 3;
}

.aq_uiv_13_glitch-text::before,
.aq_uiv_13_glitch-text::after {
  content: "Always Watching";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.aq_uiv_13_glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #aq_uiv_13_f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}

.aq_uiv_13_glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #aq_uiv_13_0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}

.aq_uiv_13_footer-text {
  color: #aq_uiv_13_fff;
  font-size: 14px;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.aq_uiv_13_7;
  position: relative;
  z-index: 3;
}

.aq_uiv_13_footer-text::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  width: 50px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.aq_uiv_13_3);
  transform: translateX(-50%);
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<div className="aq_uiv_13_card">
  <div data-text="The Eye of Providence" className="aq_uiv_13_title">
    The Eye of Providence
  </div>
  <div className="aq_uiv_13_eye-of-providence">
    <div className="aq_uiv_13_triangle"></div>
    <div className="aq_uiv_13_eye">
      <div className="eyelid"></div>
      <div className="aq_uiv_13_iris">
        <div className="aq_uiv_13_pupil"></div>
      </div>
    </div>
  </div>
  <div className="spotlight"></div>
  <div className="aq_uiv_13_scan-line"></div>
  <div className="aq_uiv_13_glitch-text">Always Watching</div>
  <div className="aq_uiv_13_footer-text">Obey. Trust. Consume</div>
</div>`}})]}),w_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<!-- From Uiverse.io by ARUSH221617  - Tags: input -->
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
</form>`}})]}),E_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_15_io by AmruthLP12  - Tags: icon, purple, black, input, dark, theme, html, css */
.aq_uiv_15_search-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.aq_uiv_15_search-bar {
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    #aq_uiv_15_333,
    #aq_uiv_15_111
  ); /* Dark gradient background */
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.aq_uiv_15_4), 0 0 20px #aq_uiv_15_8839ff; /* Glowing effect */
  padding: 10px 15px;
}

.aq_uiv_15_search-icon {
  color: #aq_uiv_15_fff; /* White color for the search icon */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
}

.aq_uiv_15_search-bar input {
  background: transparent;
  border: none;
  outline: none;
  color: #aq_uiv_15_fff;
  font-size: 16px;
  padding: 5px 10px;
  flex: 1;
  min-width: 200px;
}

.aq_uiv_15_search-bar input::placeholder {
  color: #aq_uiv_15_bbb; /* Lighter placeholder text color */
}

.aq_uiv_15_filter-button {
  background: transparent;
  border: none;
  outline: none;
  padding: 0 10px;
  cursor: pointer;
  color: #aq_uiv_15_fff; /* White color for the filter icon */
  display: flex;
  align-items: center;
  justify-content: center;
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<div className="aq_uiv_15_search-bar-container">
  <div className="aq_uiv_15_search-bar">
    <span className="aq_uiv_15_search-icon">
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
    <button className="aq_uiv_15_filter-button" type="button">
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
</div>`}})]}),j_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_16_io by Bodyhc - Tags: input, search, input effect , search bar */
.aq_uiv_16_search {
  display: inline-block;
  position: relative;
}

.aq_uiv_16_search input[type="text"] {
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.aq_uiv_16_1);
}

.aq_uiv_16_search button[type="submit"] {
  background-color: #aq_uiv_16_4e99e9;
  border: none;
  color: #aq_uiv_16_fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.aq_uiv_16_1);
  position: absolute;
  top: 0;
  right: 0;
  transition: .aq_uiv_16_9s ease;
}

.aq_uiv_16_search button[type="submit"]:hover {
  transform: scale(1.aq_uiv_16_1);
  color: rgb(255, 255, 255);
  background-color: blue;
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<div className="aq_uiv_16_search">
        <input placeholder="Search..." type="text" />
        <button type="submit">Go</button>
      </div>`}})]}),z_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_17_io by Bodyhc - Tags: hover, hover effect, input effect  */
.aq_uiv_17_input[type=text] {
  max-width: 180px;
  height: 20px;
  background-color: #aq_uiv_17_fff;
  color: #aq_uiv_17_242424;
  padding: .aq_uiv_17_15rem .aq_uiv_17_5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  box-shadow: 0px 10px 20px -18px blue;
  border-bottom: 3px solid #aq_uiv_17_0d14e9;
  transition: .aq_uiv_17_10s ease;
}

.aq_uiv_17_input[type=text]:hover {
  outline: 2px solid #aq_uiv_17_0d14e9;
  max-width: 200px;
}

.aq_uiv_17_input[type=text]:focus {
  border-bottom: 3px solid #aq_uiv_17_0d14e9;
  border-radius: 5px 5px 2px 2px;
  transform: scale(1.aq_uiv_17_1);
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:'<input type="text" name="search" placeholder="Search For AnyThink.." className="aq_uiv_17_input" />'}})]}),M_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_18_io by NlghtM4re - Tags: flashy, complex, red, green, loader, space, glow, neon */
#aq_uiv_18_loader {
  width: 80px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -20px -40px;
  z-index: 1000;
}

.aq_uiv_18_lightsaber {
  position: absolute;
  width: 4px;
  height: 12px;
  background-color: #aq_uiv_18_666;
  border-radius: 1px;
  bottom: 0;
}

.aq_uiv_18_lightsaber.aq_uiv_18_ls-left {
  left: 0;
}

.aq_uiv_18_lightsaber.aq_uiv_18_ls-right {
  right: 0;
}

.aq_uiv_18_lightsaber:before {
  position: absolute;
  content: ' ';
  display: block;
  width: 2px;
  height: 25px;
  max-height: 1px;
  left: 1px;
  top: 1px;
  background-color: #aq_uiv_18_fff;
  border-radius: 1px;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
  -webkit-transform-origin: center top;
  -ms-transform-origin: center top;
  transform-origin: center top;
}

.aq_uiv_18_lightsaber:after {
  position: absolute;
  content: ' ';
  display: block;
  width: 2px;
  height: 2px;
  left: 1px;
  top: 4px;
  background-color: #aq_uiv_18_fff;
  border-radius: 50%;
}

.aq_uiv_18_ls-particles {
  position: absolute;
  left: 42px;
  top: 10px;
  width: 1px;
  height: 5px;
  background-color: rgb(51, 51, 51, 0);
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
}

.aq_uiv_18_lightsaber.aq_uiv_18_ls-green:before {
  -webkit-animation: showlightgreen 2s ease-in-out infinite 1s;
  animation: showlightgreen 2s ease-in-out infinite 1s;
}

.aq_uiv_18_lightsaber.aq_uiv_18_ls-red:before {
  -webkit-animation: showlightred 2s ease-in-out infinite 1s;
  animation: showlightred 2s ease-in-out infinite 1s;
}

.aq_uiv_18_lightsaber.aq_uiv_18_ls-left {
  -webkit-animation: fightleft 2s ease-in-out infinite 1s;
  animation: fightleft 2s ease-in-out infinite 1s;
}

.aq_uiv_18_lightsaber.aq_uiv_18_ls-right {
  -webkit-animation: fightright 2s ease-in-out infinite 1s;
  animation: fightright 2s ease-in-out infinite 1s;
}

.aq_uiv_18_ls-particles.aq_uiv_18_ls-part-1 {
  -webkit-animation: particles1 2s ease-out infinite 1s;
  animation: particles1 2s ease-out infinite 1s;
}

.aq_uiv_18_ls-particles.aq_uiv_18_ls-part-2 {
  -webkit-animation: particles2 2s ease-out infinite 1s;
  animation: particles2 2s ease-out infinite 1s;
}

.aq_uiv_18_ls-particles.aq_uiv_18_ls-part-3 {
  -webkit-animation: particles3 2s ease-out infinite 1s;
  animation: particles3 2s ease-out infinite 1s;
}

.aq_uiv_18_ls-particles.aq_uiv_18_ls-part-4 {
  -webkit-animation: particles4 2s ease-out infinite 1s;
  animation: particles4 2s ease-out infinite 1s;
}

.aq_uiv_18_ls-particles.aq_uiv_18_ls-part-5 {
  -webkit-animation: particles5 2s ease-out infinite 1s;
  animation: particles5 2s ease-out infinite 1s;
}

@-webkit-keyframes showlightgreen {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #aq_uiv_18_87c054;
  }

  5% {
    box-shadow: 0 0 4px 2px #aq_uiv_18_87c054;
  }

  10% {
    max-height: 22px;
  }

  80% {
    max-height: 22px;
  }

  85% {
    box-shadow: 0 0 4px 2px #aq_uiv_18_87c054;
  }

  100% {
    max-height: 0;
    box-shadow: 0 0 0 0 #aq_uiv_18_87c054;
  }
}

@-webkit-keyframes showlightred {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #aq_uiv_18_f06363;
  }

  20% {
    box-shadow: 0 0 4px 2px #aq_uiv_18_f06363;
  }

  25% {
    max-height: 22px;
  }

  80% {
    max-height: 22px;
  }

  85% {
    box-shadow: 0 0 4px 2px #aq_uiv_18_f06363;
  }

  100% {
    max-height: 0;
    box-shadow: 0 0 0 0 #aq_uiv_18_f06363;
  }
}

@-webkit-keyframes fightleft {
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

@-webkit-keyframes fightright {
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

@-webkit-keyframes particles1 {
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

@-webkit-keyframes particles2 {
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

@-webkit-keyframes particles3 {
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

@-webkit-keyframes particles4 {
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

@-webkit-keyframes particles5 {
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

@keyframes showlightgreen {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #aq_uiv_18_87c054;
  }

  5% {
    box-shadow: 0 0 4px 2px #aq_uiv_18_87c054;
  }

  10% {
    max-height: 22px;
  }

  80% {
    max-height: 22px;
  }

  85% {
    box-shadow: 0 0 4px 2px #aq_uiv_18_87c054;
  }

  100% {
    max-height: 0;
    box-shadow: 0 0 0 0 #aq_uiv_18_87c054;
  }
}

@keyframes showlightred {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #aq_uiv_18_f06363;
  }

  20% {
    box-shadow: 0 0 4px 2px #aq_uiv_18_f06363;
  }

  25% {
    max-height: 22px;
  }

  80% {
    max-height: 22px;
  }

  85% {
    box-shadow: 0 0 4px 2px #aq_uiv_18_f06363;
  }

  100% {
    max-height: 0;
    box-shadow: 0 0 0 0 #aq_uiv_18_f06363;
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

      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<div id="aq_uiv_18_loader">
  <div className="aq_uiv_18_ls-particles aq_uiv_18_ls-part-1"></div>
  <div className="aq_uiv_18_ls-particles aq_uiv_18_ls-part-2"></div>
  <div className="aq_uiv_18_ls-particles aq_uiv_18_ls-part-3"></div>
  <div className="aq_uiv_18_ls-particles aq_uiv_18_ls-part-4"></div>
  <div className="aq_uiv_18_ls-particles aq_uiv_18_ls-part-5"></div>
  <div className="aq_uiv_18_lightsaber aq_uiv_18_ls-left aq_uiv_18_ls-green"></div>
  <div className="aq_uiv_18_lightsaber aq_uiv_18_ls-right aq_uiv_18_ls-red"></div>
</div>`}})]}),C_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_19_io by Hashir-Ahmed123  - Tags: animation, red, green, blue, purple, pink, gradient, smooth */
@keyframes drop {
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

.aq_uiv_19_lava-lamp {
  position: relative;
  width: 50px;
  height: 100px;
  background: #aq_uiv_19_000;
  border-radius: 25px;
  overflow: hidden;
}

.aq_uiv_19_bubble {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #aq_uiv_19_e64980, #aq_uiv_19_ff8787);
  border-radius: 50%;
  left: 15px;
  animation: drop 5s ease-in-out infinite;
}
.aq_uiv_19_bubble1 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #aq_uiv_19_82c91e, #aq_uiv_19_3bc9db);
  border-radius: 50%;
  left: 1px;
  animation: drop 3s ease-in-out infinite;
}
.aq_uiv_19_bubble2 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #aq_uiv_19_7950f2, #aq_uiv_19_f783ac);
  border-radius: 50%;
  left: 30px;
  animation: drop 4s ease-in-out infinite;
}
.aq_uiv_19_bubble3 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #aq_uiv_19_4481eb, #aq_uiv_19_04befe);
  border-radius: 50%;
  left: 20px;
  animation: drop 6s ease-in-out infinite;
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<div className="aq_uiv_19_lava-lamp">
  <div className="aq_uiv_19_bubble"></div>
  <div className="aq_uiv_19_bubble1"></div>
  <div className="aq_uiv_19_bubble2"></div>
  <div className="aq_uiv_19_bubble3"></div>
</div>`}})]}),A_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_20_io by johnliter  - Tags: simple, flashy, tooltip, button, theme-switch, code, gradients, light&dark */
/* Style for the tooltip container */
.aq_uiv_20_tooltip-container {
  --background-light: #aq_uiv_20_ff5555; /* Red */
  --background-dark: #aq_uiv_20_000000; /* Black */
  --text-color-light: #aq_uiv_20_ffffff;
  --text-color-dark: #aq_uiv_20_ffffff;
  --bubble-size: 12px;
  --glow-color: rgba(255, 255, 255, 0.aq_uiv_20_5); /* Brighter glow color */

  position: relative;
  background: var(--background-light);
  cursor: pointer;
  transition: all 0.aq_uiv_20_2s;
  font-size: 17px;
  padding: 0.aq_uiv_20_7em 1.aq_uiv_20_8em;
  color: var(--text-color-light);
  border-radius: 8px; /* Rounded edges */
}

/* Style for the bubble tooltip */
.aq_uiv_20_tooltip {
  position: absolute;
  top: -100%; /* Initially hidden above the container */
  left: 50%;
  transform: translateX(-50%);
  padding: 0.aq_uiv_20_6em 1em;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.aq_uiv_20_3s;
  border-radius: var(--bubble-size);
  background: var(--background-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.aq_uiv_20_1);
}

/* Triangle arrow for the bubble tooltip */
.aq_uiv_20_tooltip::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  border-style: solid;
  border-width: 8px 8px 0;
  border-color: var(--background-light) transparent transparent;
}

/* Tooltip appearance on hover */
.aq_uiv_20_tooltip-container:hover {
  background: var(--background-dark);
  color: var(--text-color-dark);
  box-shadow: 0 0 20px var(--glow-color); /* Brighter glow effect */
}

.aq_uiv_20_tooltip-container:hover .aq_uiv_20_tooltip {
  top: -120%; /* Adjusted position for the bubble tooltip */
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}


      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<div className="aq_uiv_20_tooltip-container">
  <span className="aq_uiv_20_tooltip">Uiverse.io</span>
  <span className="text">Tooltip</span>
</div>`}})]}),O_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_21_io by Praashoo7 - Tags: neumorphism, checkbox */
/* Hide the default checkbox */
.aq_uiv_21_container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.aq_uiv_21_container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}

/* Create a custom checkbox */
.aq_uiv_21_checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 2.aq_uiv_21_3em;
  width: 2.aq_uiv_21_3em;
  background-color: #aq_uiv_21_ccc;
  border-radius: 50%;
  transition: .aq_uiv_21_4s;
}

.aq_uiv_21_checkmark:hover {
  box-shadow: inset 17px 17px 16px #aq_uiv_21_b3b3b3,
            inset -17px -17px 16px #aq_uiv_21_ffffff;
}

/* When the checkbox is checked, add a blue background */
.aq_uiv_21_container input:checked ~ .aq_uiv_21_checkmark {
  box-shadow: none;
  background-color: limegreen;
  transform: rotateX(360deg);
}

.aq_uiv_21_container input:checked ~ .aq_uiv_21_checkmark:hover {
  box-shadow: 3px 3px 3px rgba(0,0,0,0.aq_uiv_21_2);
}

/* Create the checkmark/indicator (hidden when not checked) */
.aq_uiv_21_checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.aq_uiv_21_container input:checked ~ .aq_uiv_21_checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.aq_uiv_21_container .aq_uiv_21_checkmark:after {
  left: 0.aq_uiv_21_96em;
  top: 0.aq_uiv_21_7em;
  width: 0.aq_uiv_21_25em;
  height: 0.aq_uiv_21_5em;
  border: solid white;
  border-width: 0 0.aq_uiv_21_15em 0.aq_uiv_21_15em 0;
  box-shadow: 0.aq_uiv_21_1em 0.aq_uiv_21_1em 0em 0 rgba(0,0,0,0.aq_uiv_21_3);
  transform: rotate(45deg);
}

      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<label className="aq_uiv_21_container">
  <input type="checkbox" checked="checked" />
  <div className="aq_uiv_21_checkmark"></div>
</label>`}})]}),D_=({className:S="",onClick:x,children:y,label:f,placeholder:M,checked:z,onChange:Q,...B})=>r.jsxs("div",{className:`inline-block ${S}`,onClick:x,...B,children:[r.jsx("style",{children:`

/* From Uiverse.aq_uiv_22_io by TechByElijah - Tags: glassmorphism, blue, checkbox, pulse */
/* Hide the default checkbox */
.aq_uiv_22_container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.aq_uiv_22_container {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  width: 24px;
  height: 24px;
}

  /* Create a custom checkbox */
.aq_uiv_22_checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #aq_uiv_22_fff;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.aq_uiv_22_3);
  transition: background-color 0.aq_uiv_22_3s ease;
  z-index: 1;
}

.aq_uiv_22_glass-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  height: 14px;
  width: 14px;
  background-color: rgba(255, 255, 255, 0.aq_uiv_22_2);
  border-radius: 50%;
  transition: transform 0.aq_uiv_22_3s ease;
  z-index: 2;
}

  /* When the checkbox is checked, add a blue background */
.aq_uiv_22_container input:checked ~ .aq_uiv_22_checkmark {
  background-color: #aq_uiv_22_2196F3;
}

  /* Show the glass effect when checked */
.aq_uiv_22_container input:checked ~ .aq_uiv_22_glass-effect {
  transform: translate(-50%, -50%) scale(1);
}

  /* Create the checkmark/indicator (hidden when not checked) */
.aq_uiv_22_checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

  /* Show the checkmark when checked */
.aq_uiv_22_container input:checked ~ .aq_uiv_22_checkmark:after {
  display: block;
}

  /* Style the checkmark/indicator */
.aq_uiv_22_container .aq_uiv_22_checkmark:after {
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

      `}),r.jsx("div",{dangerouslySetInnerHTML:{__html:`<label className="aq_uiv_22_container">
  <input checked="checked" type="checkbox" />
  <div className="aq_uiv_22_checkmark"></div>
  <div className="aq_uiv_22_glass-effect"></div>
</label>`}})]}),U_=({onOpenBooking:S})=>r.jsxs("section",{className:"relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 z-0 pointer-events-none",children:[r.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at 50% 15%, #082d54 0%, #031429 45%, #020915 85%)"}}),r.jsx("div",{className:"absolute top-[8%] left-1/2 -translate-x-1/2 w-72 sm:w-96 h-80 sm:h-96 opacity-90 flex items-center justify-center",children:r.jsx("svg",{viewBox:"0 0 300 400",className:"w-full h-full text-[#01060e] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter",fill:"currentColor",children:r.jsxs("g",{transform:"translate(150, 190) rotate(18) scale(0.95)",children:[r.jsx("circle",{cx:"0",cy:"-70",r:"15",fill:"#01060e"}),r.jsx("ellipse",{cx:"6",cy:"-68",rx:"8",ry:"6",fill:"#00f5d4",opacity:"0.6"}),r.jsx("path",{d:"M-8 -68 Q -20 -50 -10 -35",stroke:"#00f5d4",strokeWidth:"2.5",fill:"none",opacity:"0.4"}),r.jsx("ellipse",{cx:"-4",cy:"-35",rx:"19",ry:"26",fill:"#01060e"}),r.jsx("rect",{x:"-24",y:"-55",width:"14",height:"42",rx:"6",fill:"#021020",stroke:"#00f5d4",strokeWidth:"1.5",opacity:"0.7"}),r.jsx("path",{d:"M-10 -45 L-25 -10 L-18 15",stroke:"#01060e",strokeWidth:"9",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),r.jsx("path",{d:"M6 -45 L20 -10 L25 10",stroke:"#01060e",strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),r.jsx("path",{d:"M-8 -12 L-16 40 L-24 85",stroke:"#01060e",strokeWidth:"11",strokeLinecap:"round",fill:"none"}),r.jsx("path",{d:"M6 -12 L16 35 L12 80",stroke:"#01060e",strokeWidth:"10",strokeLinecap:"round",fill:"none"}),r.jsx("polygon",{points:"-24,85 -38,125 -18,120 -16,85",fill:"#021020"}),r.jsx("polygon",{points:"12,80 8,118 26,115 16,80",fill:"#021020"})]})})}),r.jsx("div",{className:"absolute left-0 top-[28%] w-64 sm:w-96 h-96 opacity-85 biolum-pulse pointer-events-none",style:{background:"radial-gradient(circle at 10% 50%, rgba(230,28,120,0.5) 0%, rgba(181,23,158,0.2) 50%, transparent 80%)"},children:r.jsxs("svg",{viewBox:"0 0 200 300",className:"w-full h-full text-[#e61c78]/60 fill-current",children:[r.jsx("path",{d:"M0 300 C 40 250, 20 200, 60 170 C 80 150, 50 120, 85 90 C 100 80, 110 50, 120 20 C 105 40, 80 70, 70 100 C 50 120, 30 150, 35 190 C 20 230, 10 270, 0 300 Z"}),r.jsx("path",{d:"M10 300 C 60 270, 70 210, 110 180 C 130 160, 140 120, 160 80 C 140 110, 115 150, 95 180 C 70 220, 40 260, 10 300 Z",opacity:"0.7"})]})}),r.jsx("div",{className:"absolute right-0 top-[32%] w-64 sm:w-96 h-96 opacity-85 biolum-pulse pointer-events-none",style:{background:"radial-gradient(circle at 90% 50%, rgba(230,28,120,0.55) 0%, rgba(114,9,183,0.25) 50%, transparent 80%)"},children:r.jsxs("svg",{viewBox:"0 0 200 300",className:"w-full h-full text-[#f72585]/70 fill-current",children:[r.jsx("path",{d:"M200 300 C 160 250, 180 200, 140 170 C 120 150, 150 120, 115 90 C 100 80, 90 50, 80 20 C 95 40, 120 70, 130 100 C 150 120, 170 150, 165 190 C 180 230, 190 270, 200 300 Z"}),r.jsx("path",{d:"M190 300 C 140 270, 130 210, 90 180 C 70 160, 60 120, 40 80 C 60 110, 85 150, 105 180 C 130 220, 160 260, 190 300 Z",opacity:"0.6"})]})})]}),r.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-36 sm:mt-44",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#041226]/80 border border-[#00f5d4]/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,245,212,0.15)]",children:[r.jsx(Do,{className:"w-3.5 h-3.5 text-[#00f5d4] animate-pulse"}),r.jsx("span",{className:"text-xs sm:text-sm font-medium tracking-widest text-[#e2f1fc] uppercase",children:"Дайвинг клуб • Clube de Mergulho Abissal"})]}),r.jsxs("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-white mb-6 uppercase drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]",children:[r.jsx("span",{className:"inline-block hover:scale-105 transition-transform duration-300",children:"AQUA"})," ",r.jsx("span",{className:"inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e2f1fc] to-[#00f5d4] hover:scale-105 transition-transform duration-300",children:"SPHERE"})]}),r.jsxs("p",{className:"text-lg sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-wide max-w-2xl mx-auto mb-10 font-sans",children:["Открой подводный мир вместе с нами.",r.jsx("span",{className:"block text-sm sm:text-base text-[#00f5d4]/90 font-mono mt-2 tracking-wider",children:"Expedições oceânicas de elite, segurança de nível militar e bioluminescência pura."})]}),r.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12",children:[r.jsx("div",{onClick:()=>{st.playBubblePop(),S()},title:"Agendar Imersão de Batismo",className:"cursor-pointer",children:r.jsx(v_,{})}),r.jsx("a",{href:"#locais",onClick:()=>st.playBubblePop(),title:"Explorar Locais de Mergulho",className:"cursor-pointer",children:r.jsx(__,{})}),r.jsx("a",{href:"#cursos",onClick:()=>st.playBubblePop(),title:"Conhecer Cursos e Certificações",className:"cursor-pointer",children:r.jsx(b_,{})})]}),r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl w-full border-t border-white/10 pt-8 text-center",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-2xl sm:text-3xl font-display font-bold text-white",children:"100%"}),r.jsx("div",{className:"text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1",children:"Registro de Segurança"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-2xl sm:text-3xl font-display font-bold text-[#00f5d4]",children:"140 M"}),r.jsx("div",{className:"text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1",children:"Capacidade Técnica"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-2xl sm:text-3xl font-display font-bold text-[#e61c78]",children:"12+ ANOS"}),r.jsx("div",{className:"text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1",children:"Desde 2012"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-2xl sm:text-3xl font-display font-bold text-[#f59e0b]",children:"3.400+"}),r.jsx("div",{className:"text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1",children:"Mergulhos Concluídos"})]})]}),r.jsxs("a",{href:"#sobre",onClick:()=>st.playBubblePop(),className:"mt-14 inline-flex flex-col items-center gap-2 text-neutral-400 hover:text-[#00f5d4] transition-colors",children:[r.jsx("span",{className:"text-[10px] font-mono tracking-widest uppercase",children:"Mergulhar nas profundezas"}),r.jsx(Uv,{className:"w-4 h-4 animate-bounce text-[#00f5d4]"})]})]})]}),R_=()=>r.jsxs("section",{id:"sobre",className:"relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10",children:[r.jsx("div",{className:"absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-40",style:{background:"#00f5d4"}}),r.jsx("div",{className:"absolute -right-20 top-2/3 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-30",style:{background:"#e61c78"}}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",children:[r.jsx("div",{className:"lg:col-span-5 relative flex items-center justify-center",children:r.jsxs("div",{className:"relative group",children:[r.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00f5d4]/20 via-transparent to-[#e61c78]/25 filter blur-2xl group-hover:blur-3xl transition-all duration-500"}),r.jsxs("div",{className:"relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-[#020b18]/70 backdrop-blur-md p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)]",children:[r.jsx("img",{src:"/assets/exotic-fish.jpg",alt:"Peixe Exótico Abissal - Aqua Sphere",className:"w-full h-auto max-h-[460px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"}),r.jsxs("div",{className:"absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-[#020915]/85 backdrop-blur-lg border border-white/15 flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-[10px] font-mono text-[#00f5d4] uppercase tracking-wider",children:"Espécime Catalogado #409"}),r.jsx("div",{className:"text-xs font-semibold text-white",children:"Pterois Radiata (Bioluminescente)"})]}),r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(A_,{})})]})]})]})}),r.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start lg:pl-6",children:[r.jsx("span",{className:"text-xs sm:text-sm font-mono tracking-widest text-[#00f5d4] uppercase mb-2",children:"AQUA SPHERE"}),r.jsxs("div",{className:"flex flex-wrap items-baseline gap-4 mb-6",children:[r.jsx("h2",{className:"text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight",children:"О КЛУБЕ"}),r.jsx("div",{className:"px-3.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono text-neutral-300",children:"с 2012 года • Desde 2012"})]}),r.jsxs("p",{className:"text-base sm:text-lg text-neutral-300 leading-relaxed font-light mb-6",children:[r.jsx("strong",{className:"text-white font-medium",children:"Aqua Sphera"})," — это профессиональный дайвинг-клуб, который уже более 10 лет помогает людям открывать красоту подводного мира. Мы предлагаем безопасное и комфортное обучение, уникальные экскурсии и все необходимое для погружений."]}),r.jsx("p",{className:"text-sm sm:text-base text-neutral-400 leading-relaxed mb-8",children:"Fundado por mestres de mergulho técnico e fotógrafos de profundidade, unimos a precisão militar de protocolos de descompressão com expedições silenciosas de puro deslumbramento em ecossistemas de corais e naufrágios virgens."}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8",children:[r.jsxs("div",{onMouseEnter:()=>st.playBubblePop(),className:"p-4 rounded-xl border border-white/10 bg-[#030e1d]/60 backdrop-blur-sm hover:border-[#00f5d4]/40 transition-colors",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-1.5 text-white font-medium text-sm",children:[r.jsx(Gv,{className:"w-4 h-4 text-[#00f5d4]"}),r.jsx("span",{children:"Instrutores PADI & SSI Master"})]}),r.jsx("p",{className:"text-xs text-neutral-400",children:"Mais de 15.000 horas combinadas de fundo e certificação de resgate avançado."})]}),r.jsxs("div",{onMouseEnter:()=>st.playBubblePop(),className:"p-4 rounded-xl border border-white/10 bg-[#030e1d]/60 backdrop-blur-sm hover:border-[#e61c78]/40 transition-colors",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-1.5 text-white font-medium text-sm",children:[r.jsx(bn,{className:"w-4 h-4 text-[#e61c78]"}),r.jsx("span",{children:"Gás Trimix & Heliox de Pureza"})]}),r.jsx("p",{className:"text-xs text-neutral-400",children:"Estação própria de mistura hiperbárica para mergulhos sem narcose até 140m."})]})]}),r.jsxs("div",{className:"w-full p-4 rounded-2xl bg-[#041226]/80 border border-white/10 flex flex-wrap items-center justify-between gap-4",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("span",{className:"text-xs font-mono text-neutral-300",children:"MODO BOLHA TÁTIL:"}),r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(y_,{})})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(O_,{})}),r.jsx("span",{className:"text-xs font-mono text-neutral-400",children:"Nitrox 32% Homologado"})]}),r.jsx("div",{onClick:()=>st.playBubblePop(),className:"cursor-pointer",children:r.jsx(g_,{})})]}),r.jsxs("div",{className:"self-end mt-6 flex items-center gap-2 text-xs font-mono text-[#e61c78] opacity-80",children:[r.jsx("span",{className:"w-2 h-2 rounded-full bg-[#e61c78] animate-ping"}),r.jsx("span",{children:"Bioma Coralino: Heteractis Magnifica Ativa"})]})]})]})]}),v1=[{id:"red-sea",ruTitle:"Коралловые рифы Красного моря",title:"Recifes de Coral do Mar Vermelho",region:"Ras Mohammed & Estreito de Tiran, Egito",depth:"18m - 42m",visibility:"40 metros (Cristalina)",temp:"26°C - 29°C",type:"Recifes Vivos & Paredões Abissais",badge:"Bioluminescência Noturna",color:"#00f5d4"},{id:"black-sea-wrecks",ruTitle:"Затонувшие корабли Черного моря",title:"Naufrágios Históricos do Mar Negro",region:"Crimeia & Península de Taman",depth:"28m - 75m",visibility:"15 - 25 metros",temp:"9°C - 14°C (Camada Fria)",type:"Arqueologia Subaquática & Wrecks",badge:"Técnico Avançado Trimix",color:"#3a86ff"},{id:"cenotes-lakes",ruTitle:"Озера и карьеры",title:"Lagos Cristalinos & Cavernas Submersas",region:"Pedreiras Profundas & Mananciais Geológicos",depth:"12m - 55m",visibility:"30+ metros",temp:"6°C - 12°C",type:"Mergulho em Caverna & Flutuabilidade Fina",badge:"Zero Correnteza",color:"#ffd166"},{id:"exotic-tropics",ruTitle:"Экзотические локации (Таиланд, Индонезия, Мальдивы)",title:"Rotas Tropicais: Raja Ampat & Maldivas",region:"Triângulo dos Corais & Atóis Oceânicos",depth:"10m - 60m",visibility:"35 - 50 metros",temp:"28°C - 30°C",type:"Mantas Gigantes, Tubarões-Baleia & Corais",badge:"Expedição Safari Liveaboard",color:"#e61c78"}],k_=({onSelectExpedition:S})=>{const[x,y]=At.useState(v1[0]),[f,M]=At.useState(!0);return r.jsxs("section",{id:"locais",className:"relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10",children:[r.jsx("div",{className:"absolute left-1/3 top-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20",style:{background:"#3a86ff"}}),r.jsxs("div",{className:"flex flex-col items-start mb-14",children:[r.jsx("span",{className:"text-xs sm:text-sm font-mono tracking-widest text-[#00f5d4] uppercase mb-2",children:"AQUA SPHERE"}),r.jsx("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight mb-4",children:"ЛОКАЦИИ"}),r.jsx("p",{className:"text-sm sm:text-base text-neutral-300 font-light max-w-2xl leading-relaxed",children:"Мы организуем погружения в самых живописных местах: коралловые рифы, исторические корабли и заповедные глубины."}),r.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-4 w-full max-w-2xl",children:[r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),className:"flex-1 min-w-[240px]",children:r.jsx(w_,{})}),r.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-xl bg-[#041226]/80 border border-white/10",children:[r.jsx("span",{className:"text-[11px] font-mono text-neutral-300",children:"LANTERNA CANHÃO:"}),r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(q_,{})})]})]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20",children:[r.jsx("div",{className:"lg:col-span-6 flex flex-col gap-4",children:v1.map(z=>{const Q=x.id===z.id;return r.jsxs("div",{onClick:()=>{st.playBubblePop(),y(z)},onMouseEnter:()=>st.playBubblePop(),className:`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden backdrop-blur-md ${Q?"bg-[#04142b]/90 border-[#00f5d4] shadow-[0_0_30px_rgba(0,245,212,0.18)]":"bg-[#020b18]/60 border-white/10 hover:border-white/30 hover:bg-[#031024]/70"}`,children:[r.jsxs("div",{className:"flex items-start justify-between gap-4",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-[11px] font-mono text-[#00f5d4] uppercase tracking-wider mb-1",children:z.ruTitle}),r.jsx("h3",{className:"text-lg sm:text-xl font-display font-semibold text-white group-hover:text-[#00f5d4] transition-colors",children:z.title}),r.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-neutral-400 mt-1",children:[r.jsx(Ku,{className:"w-3.5 h-3.5 text-[#e61c78]"}),r.jsx("span",{children:z.region})]})]}),r.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-semibold border",style:{borderColor:`${z.color}40`,color:z.color,backgroundColor:`${z.color}15`},children:z.badge})]}),Q&&r.jsxs("div",{className:"mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs",children:[r.jsxs("div",{className:"bg-white/5 p-2 rounded-lg",children:[r.jsx("span",{className:"text-[9px] font-mono text-neutral-400 block uppercase",children:"Fundo"}),r.jsx("strong",{className:"text-white font-mono",children:z.depth})]}),r.jsxs("div",{className:"bg-white/5 p-2 rounded-lg",children:[r.jsx("span",{className:"text-[9px] font-mono text-neutral-400 block uppercase",children:"Visibilidade"}),r.jsx("strong",{className:"text-[#00f5d4] font-mono",children:z.visibility})]}),r.jsxs("div",{className:"bg-white/5 p-2 rounded-lg",children:[r.jsx("span",{className:"text-[9px] font-mono text-neutral-400 block uppercase",children:"Temperatura"}),r.jsx("strong",{className:"text-[#f59e0b] font-mono",children:z.temp})]})]})]},z.id)})}),r.jsx("div",{className:"lg:col-span-6 flex flex-col gap-6",children:r.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-white/15 bg-[#020b18]/80 backdrop-blur-xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)]",children:[r.jsxs("div",{className:"relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden",children:[r.jsx("img",{src:"/assets/school-fish.jpg",alt:"Cardume de Peixes Bioluminescentes - Aqua Sphere",className:"w-full h-full object-cover object-center filter brightness-110 contrast-105"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020915] via-transparent to-transparent opacity-80"}),r.jsxs("div",{className:"absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-[#020915]/80 backdrop-blur-md border border-[#00f5d4]/30 flex items-center gap-2",children:[r.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00f5d4] animate-ping"}),r.jsx("span",{className:"text-xs font-mono text-white",children:"ENXAME MARINHO ATIVO"})]})]}),r.jsxs("div",{className:"p-5 flex flex-col gap-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase tracking-widest",children:"Ponto de Imersão Selecionado"}),r.jsx("h4",{className:"text-xl font-display font-bold text-white mt-0.5",children:x.title})]}),r.jsx("div",{onClick:()=>{st.playBubblePop(),S(x.title)},className:"cursor-pointer",children:r.jsx(x_,{})})]}),r.jsxs("p",{className:"text-xs sm:text-sm text-neutral-300 leading-relaxed font-light",children:[x.type,". Todas as operações de descida contam com embarcação de apoio dedicada, oxigênio medicinal a 100%, analisadores digitais de hélio e guias de mergulho certificados."]}),r.jsxs("div",{className:"pt-2 flex flex-wrap gap-4 items-center justify-center",children:[r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(T_,{})}),r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(S_,{})}),r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(N_,{})})]})]})]})})]}),r.jsxs("div",{className:"relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]",children:[r.jsx("img",{src:"/assets/coral-floor.jpg",alt:"Jardim de Corais Abissal - Aqua Sphere",className:"w-full h-56 sm:h-72 object-cover object-bottom filter brightness-105"}),r.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020915] via-[#020915]/40 to-transparent flex flex-col items-center justify-end p-8 text-center",children:[r.jsx("span",{className:"text-xs font-mono tracking-widest text-[#00f5d4] uppercase mb-1",children:"SANTUÁRIO PROTEGIDO"}),r.jsx("h4",{className:"text-2xl sm:text-3xl font-display font-bold text-white",children:"Compromisso com a Preservação dos Oceanos"}),r.jsx("p",{className:"text-xs sm:text-sm text-neutral-300 max-w-xl mt-2 font-light",children:'100% dos nossos mergulhos seguem a diretriz internacional "Zero Touch" da Project AWARE, protegendo corais ancestrais e vida marinha sensível.'})]})]})]})},H_=[{level:"NÍVEL 01 • INICIAÇÃO",title:"Mergulho de Batismo & Open Water",ruTitle:"Начальный курс дайвинга",hours:"32 Horas (Teoria + 6 Imersões)",maxDepth:"18 Metros",desc:"A porta de entrada para o oceano. Domine controle de flutuabilidade, montagem de reguladores, respiração subaquática e sinais de segurança com acompanhamento 1:1 de instrutor sênior.",features:["Certificação Internacional PADI / SSI vitalícia","Equipamento completo de neoprene e cilindros incluso","Sessões em águas confinadas e oceano aberto","Manual digital interativo e registro de logbook"],price:"R$ 1.950"},{level:"NÍVEL 02 • AVANÇADO",title:"Advanced & Deep Diver (40m)",ruTitle:"Глубоководный курс (40м)",hours:"40 Horas (8 Imersões Técnicas)",maxDepth:"40 Metros",desc:"Para mergulhadores certificados que buscam dominar navegação por bússola, gerenciamento de consumo de gás em profundidade, descompressão de segurança e exploração noturna.",features:["Especialidade em Naufrágios e Fendas Submersas","Protocolos de Mergulho Noturno Bioluminescente","Uso de computadores de mergulho de múltiplos gases","Treinamento de flutuabilidade milimétrica"],price:"R$ 2.680",popular:!0},{level:"NÍVEL 03 • TÉCNICO ELITE",title:"Normoxic Trimix & Rebreather CCR",ruTitle:"Технический тримикс и ребризер",hours:"60 Horas (Simulador + 10 Imersões)",maxDepth:"75 - 100 Metros",desc:"O pináculo da exploração submarina. Mergulhe em circuitos fechados com rebreather sem fazer bolhas, respirando misturas de Hélio para total clareza mental e silêncio absoluto no abismo.",features:["Análise laboratorial de misturas Trimix (O2/He/N2)","Troca de cilindros de stage sob descompressão","Zero perturbação da vida marinha (Rebreather silencioso)","Expedições arqueológicas e científicas exclusivas"],price:"R$ 5.800"}],B_=({onSelectCourse:S})=>r.jsxs("section",{id:"cursos",className:"relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10",children:[r.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[r.jsx("span",{className:"text-xs sm:text-sm font-mono tracking-widest text-[#00f5d4] uppercase mb-2",children:"AQUA SPHERE ACADEMY"}),r.jsx("h2",{className:"text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight mb-4",children:"КУРСЫ И СЕРТИФИКАЦИЯ"}),r.jsx("p",{className:"text-sm sm:text-base text-neutral-300 font-light max-w-2xl leading-relaxed",children:"Formação técnica de elite reconhecida mundialmente pela PADI, SSI e TDI. Do primeiro fôlego às expedições abissais mais exigentes."}),r.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[r.jsx("span",{className:"text-[10px] font-mono text-neutral-400",children:"FLUXO DE PRESSÃO O2:"}),r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(C_,{})})]})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:H_.map((x,y)=>r.jsxs("div",{onMouseEnter:()=>st.playBubblePop(),className:`relative rounded-3xl p-7 flex flex-col justify-between border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${x.popular?"bg-[#04152e]/85 border-[#00f5d4] shadow-[0_0_35px_rgba(0,245,212,0.2)]":"bg-[#020b18]/70 border-white/10 hover:border-white/25"}`,children:[x.popular&&r.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#00f5d4] to-[#3a86ff] text-[#020915] text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg",children:"Recomendado para Iniciados"}),r.jsxs("div",{children:[r.jsx("span",{className:"text-[10px] font-mono text-[#00f5d4] tracking-wider uppercase block mb-1",children:x.level}),r.jsx("h3",{className:"text-2xl font-display font-bold text-white mb-1",children:x.title}),r.jsx("div",{className:"text-xs font-mono text-neutral-400 italic mb-4",children:x.ruTitle}),r.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono text-neutral-300 pb-4 mb-4 border-b border-white/10",children:[r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(Xv,{className:"w-3.5 h-3.5 text-[#00f5d4]"}),r.jsx("span",{children:x.hours})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(Oo,{className:"w-3.5 h-3.5 text-[#e61c78]"}),r.jsxs("span",{children:["Profundidade: ",x.maxDepth]})]})]}),r.jsx("p",{className:"text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6",children:x.desc}),r.jsx("div",{className:"space-y-2.5 mb-8",children:x.features.map((f,M)=>r.jsxs("div",{className:"flex items-start gap-2 text-xs text-neutral-300",children:[r.jsx(Bv,{className:"w-3.5 h-3.5 text-[#00f5d4] shrink-0 mt-0.5"}),r.jsx("span",{children:f})]},M))})]}),r.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase block",children:"Investimento"}),r.jsx("span",{className:"text-xl font-display font-bold text-white",children:x.price})]}),r.jsx("button",{onClick:()=>{st.playBubblePop(),S(x.title)},className:"px-4 py-2 rounded-xl bg-white/10 hover:bg-[#00f5d4] hover:text-[#020915] text-xs font-mono font-semibold transition-all duration-200 border border-white/15",children:"Reservar Vaga"})]})]},y))}),r.jsxs("div",{className:"p-6 rounded-2xl bg-[#030e1d]/80 border border-white/15 backdrop-blur-md flex flex-wrap items-center justify-between gap-4",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/30 flex items-center justify-center text-[#00f5d4]",children:r.jsx(kv,{className:"w-5 h-5"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-sm font-semibold text-white",children:"Certificação Válida em 180+ Países"}),r.jsx("p",{className:"text-xs text-neutral-400",children:"Emissão imediata de credencial digital no App oficial PADI / TDI."})]})]}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(D_,{})}),r.jsx("span",{className:"text-xs font-mono text-neutral-300",children:"Incluir Módulo de Mergulho Noturno"})]}),r.jsx("div",{onMouseEnter:()=>st.playBubblePop(),children:r.jsx(p_,{})})]})]}),Y_=()=>r.jsx("footer",{id:"contato",className:"relative border-t border-white/10 bg-[#01060e] pt-16 pb-12 px-4 sm:px-8 z-10",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14",children:[r.jsxs("div",{className:"flex flex-col gap-3",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-8 h-8 rounded-full border border-white/20 bg-[#041226] flex items-center justify-center text-[#00f5d4]",children:r.jsx(Ov,{className:"w-4 h-4"})}),r.jsx("span",{className:"font-display font-bold text-lg text-white",children:"AQUA SPHERE"})]}),r.jsx("p",{className:"text-xs text-neutral-400 font-light leading-relaxed",children:"Clube e Centro de Expedições Subaquáticas fundado em 2012. Dedicado à exploração pacífica, contemplação abissal e proteção dos santuários de corais do planeta."}),r.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-mono text-[#00f5d4] mt-2",children:[r.jsx(e_,{className:"w-3.5 h-3.5 animate-pulse"}),r.jsx("span",{children:"VHF MARÍTIMO: CANAL 16 / 72 (CH-16)"})]})]}),r.jsxs("div",{className:"flex flex-col gap-2.5",children:[r.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-white mb-1",children:"Bases Operacionais"}),r.jsxs("div",{className:"flex items-start gap-2 text-xs text-neutral-400",children:[r.jsx(Ku,{className:"w-3.5 h-3.5 text-[#00f5d4] shrink-0 mt-0.5"}),r.jsx("span",{children:"Base Sharm: Marina Travco, Mar Vermelho, Egito"})]}),r.jsxs("div",{className:"flex items-start gap-2 text-xs text-neutral-400",children:[r.jsx(Ku,{className:"w-3.5 h-3.5 text-[#3a86ff] shrink-0 mt-0.5"}),r.jsx("span",{children:"Base Wrecks: Marina de Sevastopol, Mar Negro"})]}),r.jsxs("div",{className:"flex items-start gap-2 text-xs text-neutral-400",children:[r.jsx(Ku,{className:"w-3.5 h-3.5 text-[#e61c78] shrink-0 mt-0.5"}),r.jsx("span",{children:"Base Tropical: Labuan Bajo & Raja Ampat, Indonésia"})]})]}),r.jsxs("div",{className:"flex flex-col gap-2.5",children:[r.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-white mb-1",children:"Central & Emergência (Номер)"}),r.jsxs("div",{className:"flex items-center gap-2 text-xs text-neutral-300",children:[r.jsx(Pv,{className:"w-3.5 h-3.5 text-[#00f5d4]"}),r.jsx("span",{className:"font-mono",children:"+55 (11) 98765-4321 / +7 (495) 892-3401"})]}),r.jsxs("div",{className:"flex items-center gap-2 text-xs text-neutral-300",children:[r.jsx(Wv,{className:"w-3.5 h-3.5 text-[#00f5d4]"}),r.jsx("span",{className:"font-mono",children:"expedicoes@aquasphere.club"})]}),r.jsx("div",{className:"p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-400 mt-1",children:"Plantão de Segurança 24/7 integrado à câmara hiperbárica local."})]}),r.jsxs("div",{className:"flex flex-col gap-2.5",children:[r.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-white mb-1",children:"Afiliações Globais"}),r.jsxs("ul",{className:"text-xs text-neutral-400 space-y-1.5 font-sans",children:[r.jsxs("li",{className:"flex items-center gap-1.5",children:[r.jsx(bn,{className:"w-3 h-3 text-[#00f5d4]"}),"PADI 5-Star Dive Center #29104"]}),r.jsxs("li",{className:"flex items-center gap-1.5",children:[r.jsx(bn,{className:"w-3 h-3 text-[#00f5d4]"}),"SSI Diamond Instructor Training Facility"]}),r.jsxs("li",{className:"flex items-center gap-1.5",children:[r.jsx(bn,{className:"w-3 h-3 text-[#00f5d4]"}),"TDI Technical Diving International"]}),r.jsxs("li",{className:"flex items-center gap-1.5",children:[r.jsx(bn,{className:"w-3 h-3 text-[#00f5d4]"}),"DAN (Divers Alert Network) Platinum Partner"]})]})]})]}),r.jsxs("div",{className:"border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500",children:[r.jsx("div",{children:"© 2012 - 2026 AQUA SPHERE Diving Club. Todos os direitos reservados."}),r.jsx("div",{className:"flex items-center gap-1 text-neutral-400",children:r.jsx("span",{children:"Desenvolvido com excelência autoral e engenharia subaquática de estúdio independente."})})]})]})});var Uo={};(function S(x,y,f,M){var z=!!(x.Worker&&x.Blob&&x.Promise&&x.OffscreenCanvas&&x.OffscreenCanvasRenderingContext2D&&x.HTMLCanvasElement&&x.HTMLCanvasElement.prototype.transferControlToOffscreen&&x.URL&&x.URL.createObjectURL),Q=typeof Path2D=="function"&&typeof DOMMatrix=="function",B=(function(){if(!x.OffscreenCanvas)return!1;try{var g=new OffscreenCanvas(1,1),h=g.getContext("2d");h.fillRect(0,0,1,1);var V=g.transferToImageBitmap();h.createPattern(V,"no-repeat")}catch{return!1}return!0})();function ut(){}function lt(g){var h=y.exports.Promise,V=h!==void 0?h:x.Promise;return typeof V=="function"?new V(g):(g(ut,ut),null)}var Y=(function(g,h){return{transform:function(V){if(g)return V;if(h.has(V))return h.get(V);var F=new OffscreenCanvas(V.width,V.height),s=F.getContext("2d");return s.drawImage(V,0,0),h.set(V,F),F},clear:function(){h.clear()}}})(B,new Map),N=(function(){var g=Math.floor(16.666666666666668),h,V,F={},s=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(T){var C=Math.random();return F[C]=requestAnimationFrame(function j(R){s===R||s+g-1<R?(s=R,delete F[C],T()):F[C]=requestAnimationFrame(j)}),C},V=function(T){F[T]&&cancelAnimationFrame(F[T])}):(h=function(T){return setTimeout(T,g)},V=function(T){return clearTimeout(T)}),{frame:h,cancel:V}})(),Z=(function(){var g,h,V={};function F(s){function T(C,j){s.postMessage({options:C||{},callback:j})}s.init=function(j){var R=j.transferControlToOffscreen();s.postMessage({canvas:R},[R])},s.fire=function(j,R,X){if(h)return T(j,null),h;var J=Math.random().toString(36).slice(2);return h=lt(function(O){function k(wt){wt.data.callback===J&&(delete V[J],s.removeEventListener("message",k),h=null,Y.clear(),X(),O())}s.addEventListener("message",k),T(j,J),V[J]=k.bind(null,{data:{callback:J}})}),h},s.reset=function(){s.postMessage({reset:!0});for(var j in V)V[j](),delete V[j]}}return function(){if(g)return g;if(!f&&z){var s=["var CONFETTI, SIZE = {}, module = {};","("+S.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{g=new Worker(URL.createObjectURL(new Blob([s])))}catch(T){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",T),null}F(g)}return g}})(),W={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _t(g,h){return h?h(g):g}function A(g){return g!=null}function L(g,h,V){return _t(g&&A(g[h])?g[h]:W[h],V)}function Ht(g){return g<0?0:Math.floor(g)}function Mt(g,h){return Math.floor(Math.random()*(h-g))+g}function ve(g){return parseInt(g,16)}function Kt(g){return g.map(re)}function re(g){var h=String(g).replace(/[^0-9a-f]/gi,"");return h.length<6&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]),{r:ve(h.substring(0,2)),g:ve(h.substring(2,4)),b:ve(h.substring(4,6))}}function Jt(g){var h=L(g,"origin",Object);return h.x=L(h,"x",Number),h.y=L(h,"y",Number),h}function nt(g){g.width=document.documentElement.clientWidth,g.height=document.documentElement.clientHeight}function ft(g){var h=g.getBoundingClientRect();g.width=h.width,g.height=h.height}function Ue(g){var h=document.createElement("canvas");return h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=g,h}function _e(g,h,V,F,s,T,C,j,R){g.save(),g.translate(h,V),g.rotate(T),g.scale(F,s),g.arc(0,0,1,C,j,R),g.restore()}function ge(g){var h=g.angle*(Math.PI/180),V=g.spread*(Math.PI/180);return{x:g.x,y:g.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:g.startVelocity*.5+Math.random()*g.startVelocity,angle2D:-h+(.5*V-Math.random()*V),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:g.color,shape:g.shape,tick:0,totalTicks:g.ticks,decay:g.decay,drift:g.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:g.gravity*3,ovalScalar:.6,scalar:g.scalar,flat:g.flat}}function se(g,h){h.x+=Math.cos(h.angle2D)*h.velocity+h.drift,h.y+=Math.sin(h.angle2D)*h.velocity+h.gravity,h.velocity*=h.decay,h.flat?(h.wobble=0,h.wobbleX=h.x+10*h.scalar,h.wobbleY=h.y+10*h.scalar,h.tiltSin=0,h.tiltCos=0,h.random=1):(h.wobble+=h.wobbleSpeed,h.wobbleX=h.x+10*h.scalar*Math.cos(h.wobble),h.wobbleY=h.y+10*h.scalar*Math.sin(h.wobble),h.tiltAngle+=.1,h.tiltSin=Math.sin(h.tiltAngle),h.tiltCos=Math.cos(h.tiltAngle),h.random=Math.random()+2);var V=h.tick++/h.totalTicks,F=h.x+h.random*h.tiltCos,s=h.y+h.random*h.tiltSin,T=h.wobbleX+h.random*h.tiltCos,C=h.wobbleY+h.random*h.tiltSin;if(g.fillStyle="rgba("+h.color.r+", "+h.color.g+", "+h.color.b+", "+(1-V)+")",g.beginPath(),Q&&h.shape.type==="path"&&typeof h.shape.path=="string"&&Array.isArray(h.shape.matrix))g.fill($(h.shape.path,h.shape.matrix,h.x,h.y,Math.abs(T-F)*.1,Math.abs(C-s)*.1,Math.PI/10*h.wobble));else if(h.shape.type==="bitmap"){var j=Math.PI/10*h.wobble,R=Math.abs(T-F)*.1,X=Math.abs(C-s)*.1,J=h.shape.bitmap.width*h.scalar,O=h.shape.bitmap.height*h.scalar,k=new DOMMatrix([Math.cos(j)*R,Math.sin(j)*R,-Math.sin(j)*X,Math.cos(j)*X,h.x,h.y]);k.multiplySelf(new DOMMatrix(h.shape.matrix));var wt=g.createPattern(Y.transform(h.shape.bitmap),"no-repeat");wt.setTransform(k),g.globalAlpha=1-V,g.fillStyle=wt,g.fillRect(h.x-J/2,h.y-O/2,J,O),g.globalAlpha=1}else if(h.shape==="circle")g.ellipse?g.ellipse(h.x,h.y,Math.abs(T-F)*h.ovalScalar,Math.abs(C-s)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI):_e(g,h.x,h.y,Math.abs(T-F)*h.ovalScalar,Math.abs(C-s)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI);else if(h.shape==="star")for(var rt=Math.PI/2*3,Bt=4*h.scalar,Ut=8*h.scalar,yt=h.x,dt=h.y,Ft=5,ce=Math.PI/Ft;Ft--;)yt=h.x+Math.cos(rt)*Ut,dt=h.y+Math.sin(rt)*Ut,g.lineTo(yt,dt),rt+=ce,yt=h.x+Math.cos(rt)*Bt,dt=h.y+Math.sin(rt)*Bt,g.lineTo(yt,dt),rt+=ce;else g.moveTo(Math.floor(h.x),Math.floor(h.y)),g.lineTo(Math.floor(h.wobbleX),Math.floor(s)),g.lineTo(Math.floor(T),Math.floor(C)),g.lineTo(Math.floor(F),Math.floor(h.wobbleY));return g.closePath(),g.fill(),h.tick<h.totalTicks}function Ie(g,h,V,F,s){var T=h.slice(),C=g.getContext("2d"),j,R,X=lt(function(J){function O(){j=R=null,C.clearRect(0,0,F.width,F.height),Y.clear(),s(),J()}function k(){f&&!(F.width===M.width&&F.height===M.height)&&(F.width=g.width=M.width,F.height=g.height=M.height),!F.width&&!F.height&&(V(g),F.width=g.width,F.height=g.height),C.clearRect(0,0,F.width,F.height),T=T.filter(function(wt){return se(C,wt)}),T.length?j=N.frame(k):O()}j=N.frame(k),R=O});return{addFettis:function(J){return T=T.concat(J),X},canvas:g,promise:X,reset:function(){j&&N.cancel(j),R&&R()}}}function Pe(g,h){var V=!g,F=!!L(h||{},"resize"),s=!1,T=L(h,"disableForReducedMotion",Boolean),C=z&&!!L(h||{},"useWorker"),j=C?Z():null,R=V?nt:ft,X=g&&j?!!g.__confetti_initialized:!1,J=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,O;function k(rt,Bt,Ut){for(var yt=L(rt,"particleCount",Ht),dt=L(rt,"angle",Number),Ft=L(rt,"spread",Number),ce=L(rt,"startVelocity",Number),ta=L(rt,"decay",Number),El=L(rt,"gravity",Number),jl=L(rt,"drift",Number),da=L(rt,"colors",Kt),yn=L(rt,"ticks",Number),al=L(rt,"shapes"),qn=L(rt,"scalar"),pi=!!L(rt,"flat"),Xe=Jt(rt),zl=yt,ll=[],Ju=g.width*Xe.x,xi=g.height*Xe.y;zl--;)ll.push(ge({x:Ju,y:xi,angle:dt,spread:Ft,startVelocity:ce,color:da[zl%da.length],shape:al[Mt(0,al.length)],ticks:yn,decay:ta,gravity:El,drift:jl,scalar:qn,flat:pi}));return O?O.addFettis(ll):(O=Ie(g,ll,R,Bt,Ut),O.promise)}function wt(rt){var Bt=T||L(rt,"disableForReducedMotion",Boolean),Ut=L(rt,"zIndex",Number);if(Bt&&J)return lt(function(ce){ce()});V&&O?g=O.canvas:V&&!g&&(g=Ue(Ut),document.body.appendChild(g)),F&&!X&&R(g);var yt={width:g.width,height:g.height};j&&!X&&j.init(g),X=!0,j&&(g.__confetti_initialized=!0);function dt(){if(j){var ce={getBoundingClientRect:function(){if(!V)return g.getBoundingClientRect()}};R(ce),j.postMessage({resize:{width:ce.width,height:ce.height}});return}yt.width=yt.height=null}function Ft(){O=null,F&&(s=!1,x.removeEventListener("resize",dt)),V&&g&&(document.body.contains(g)&&document.body.removeChild(g),g=null,X=!1)}return F&&!s&&(s=!0,x.addEventListener("resize",dt,!1)),j?j.fire(rt,yt,Ft):k(rt,yt,Ft)}return wt.reset=function(){j&&j.reset(),O&&O.reset()},wt}var Dt;function U(){return Dt||(Dt=Pe(null,{useWorker:!0,resize:!0})),Dt}function $(g,h,V,F,s,T,C){var j=new Path2D(g),R=new Path2D;R.addPath(j,new DOMMatrix(h));var X=new Path2D;return X.addPath(R,new DOMMatrix([Math.cos(C)*s,Math.sin(C)*s,-Math.sin(C)*T,Math.cos(C)*T,V,F])),X}function P(g){if(!Q)throw new Error("path confetti are not supported in this browser");var h,V;typeof g=="string"?h=g:(h=g.path,V=g.matrix);var F=new Path2D(h),s=document.createElement("canvas"),T=s.getContext("2d");if(!V){for(var C=1e3,j=C,R=C,X=0,J=0,O,k,wt=0;wt<C;wt+=2)for(var rt=0;rt<C;rt+=2)T.isPointInPath(F,wt,rt,"nonzero")&&(j=Math.min(j,wt),R=Math.min(R,rt),X=Math.max(X,wt),J=Math.max(J,rt));O=X-j,k=J-R;var Bt=10,Ut=Math.min(Bt/O,Bt/k);V=[Ut,0,0,Ut,-Math.round(O/2+j)*Ut,-Math.round(k/2+R)*Ut]}return{type:"path",path:h,matrix:V}}function bt(g){var h,V=1,F="#000000",s='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof g=="string"?h=g:(h=g.text,V="scalar"in g?g.scalar:V,s="fontFamily"in g?g.fontFamily:s,F="color"in g?g.color:F);var T=10*V,C=""+T+"px "+s,j=new OffscreenCanvas(T,T),R=j.getContext("2d");R.font=C;var X=R.measureText(h),J=Math.ceil(X.actualBoundingBoxRight+X.actualBoundingBoxLeft),O=Math.ceil(X.actualBoundingBoxAscent+X.actualBoundingBoxDescent),k=2,wt=X.actualBoundingBoxLeft+k,rt=X.actualBoundingBoxAscent+k;J+=k+k,O+=k+k,j=new OffscreenCanvas(J,O),R=j.getContext("2d"),R.font=C,R.fillStyle=F,R.fillText(h,wt,rt);var Bt=1/V;return{type:"bitmap",bitmap:j.transferToImageBitmap(),matrix:[Bt,0,0,Bt,-J*Bt/2,-O*Bt/2]}}y.exports=function(){return U().apply(this,arguments)},y.exports.reset=function(){U().reset()},y.exports.create=Pe,y.exports.shapeFromPath=P,y.exports.shapeFromText=bt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Uo,!1);const Z_=Uo.exports;Uo.exports.create;const L_=({isOpen:S,onClose:x,initialTopic:y="Mergulho de Batismo & Open Water"})=>{const[f,M]=At.useState(y),[z,Q]=At.useState("2026-11-20"),[B,ut]=At.useState(""),[lt,Y]=At.useState(""),[N,Z]=At.useState(!1),[W,_t]=At.useState(!1);if(!S)return null;const A=L=>{L.preventDefault(),_t(!0),st.playSonarPing(),setTimeout(()=>{_t(!1),Z(!0),Z_({particleCount:80,spread:70,origin:{y:.6},colors:["#00f5d4","#e61c78","#3a86ff","#ffd166"]})},900)};return r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200",children:r.jsxs("div",{className:"relative w-full max-w-lg rounded-3xl bg-[#030e1d]/95 border border-[#00f5d4]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,245,212,0.25)] overflow-hidden",onClick:L=>L.stopPropagation(),children:[r.jsx("div",{className:"absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#00f5d4]/20 blur-3xl pointer-events-none"}),r.jsx("div",{className:"absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#e61c78]/20 blur-3xl pointer-events-none"}),r.jsx("button",{onClick:()=>{st.playBubblePop(),x()},className:"absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors",children:r.jsx(f_,{className:"w-4 h-4"})}),N?r.jsxs("div",{className:"text-center py-8 flex flex-col items-center",children:[r.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]",children:r.jsx(Zv,{className:"w-8 h-8"})}),r.jsx("h3",{className:"text-2xl font-display font-bold text-white mb-2",children:"Imersão Confirmada com Sucesso!"}),r.jsx("p",{className:"text-sm text-neutral-300 max-w-md leading-relaxed mb-6 font-light",children:"Nossa equipe de instrutores enviou seu protocolo de segurança, lista de checagem médica e voucher de expedição para seu e-mail."}),r.jsxs("div",{className:"p-4 rounded-xl bg-white/5 border border-white/10 w-full text-left text-xs font-mono text-neutral-300 space-y-1 mb-6",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"Expedição:"})," ",f]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Data Reservada:"})," ",z]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Status:"})," Vaga Bloqueada no Barco Principal"]})]}),r.jsx("button",{onClick:()=>{st.playBubblePop(),Z(!1),x()},className:"px-6 py-2.5 rounded-full bg-[#00f5d4] text-[#020915] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#70e000] transition-colors",children:"Concluir & Retornar ao Oceano"})]}):r.jsxs("form",{onSubmit:A,className:"flex flex-col gap-4",children:[r.jsxs("div",{className:"flex items-center gap-2 text-[#00f5d4] text-xs font-mono tracking-widest uppercase",children:[r.jsx(Do,{className:"w-4 h-4 animate-pulse"}),r.jsx("span",{children:"ЗАПИСАТЬСЯ НА ПОГРУЖЕНИЕ • AGENDAR IMERSÃO"})]}),r.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white",children:"Passaporte de Imersão Aqua Sphere"}),r.jsx("p",{className:"text-xs text-neutral-300 font-light -mt-2",children:"Selecione seu curso ou expedição desejada para garantir vaga com equipamento calibrado."}),r.jsxs("div",{className:"flex flex-col gap-1.5 mt-2",children:[r.jsx("label",{className:"text-xs font-mono text-neutral-300",children:"Programa / Expedição"}),r.jsx("input",{type:"text",value:f,onChange:L=>M(L.target.value),className:"w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#00f5d4] transition-colors",placeholder:"Ex: Recifes de Coral do Mar Vermelho ou Open Water",required:!0})]}),r.jsxs("div",{className:"flex flex-col gap-1.5",children:[r.jsx("label",{className:"text-xs font-mono text-neutral-300",children:"Data Preferencial"}),r.jsx("input",{type:"date",value:z,onChange:L=>Q(L.target.value),className:"w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#00f5d4] transition-colors",required:!0})]}),r.jsxs("div",{className:"space-y-3 pt-1",children:[r.jsxs("div",{className:"flex flex-col gap-1",children:[r.jsx("span",{className:"text-[11px] font-mono text-neutral-400",children:"Nome Completo do Mergulhador:"}),r.jsx(E_,{})]}),r.jsxs("div",{className:"flex flex-col gap-1",children:[r.jsx("span",{className:"text-[11px] font-mono text-neutral-400",children:"E-mail de Contato:"}),r.jsx(j_,{})]}),r.jsxs("div",{className:"flex flex-col gap-1",children:[r.jsx("span",{className:"text-[11px] font-mono text-neutral-400",children:"Nível Atual de Certificação (PADI/SSI/Nenhum):"}),r.jsx(z_,{})]})]}),r.jsxs("div",{className:"flex items-center gap-2 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300 font-sans mt-2",children:[r.jsx(bn,{className:"w-4 h-4 text-emerald-400 shrink-0"}),r.jsx("span",{children:"Equipamento revisado sob protocolo DAN (Divers Alert Network)."})]}),r.jsx("button",{type:"submit",disabled:W,onClick:()=>st.playBubblePop(),className:"mt-3 w-full py-3 rounded-full font-mono text-xs uppercase font-bold tracking-wider text-white shadow-[0_0_25px_rgba(230,28,120,0.6)] hover:shadow-[0_0_35px_rgba(230,28,120,0.85)] transition-all duration-300 disabled:opacity-50",style:{background:"linear-gradient(135deg, #f72585 0%, #b5179e 60%, #7209b7 100%)"},children:W?r.jsxs("div",{className:"flex items-center justify-center gap-2",children:[r.jsx(M_,{}),r.jsx("span",{children:"Calibrando Mistura de Gases..."})]}):"Confirmar Inscrição na Expedição"})]})]})})};function G_(){const[S,x]=At.useState(!1),[y,f]=At.useState("Recifes de Coral do Mar Vermelho"),[M,z]=At.useState("meters"),[Q,B]=At.useState(!1),ut=N=>{N&&f(N),x(!0)},lt=()=>{const N=st.toggle();B(N)},Y=()=>{z(N=>N==="meters"?"feet":"meters")};return r.jsxs("div",{className:"relative min-h-screen bg-[#020915] text-[#e2f1fc] selection:bg-[#00f5d4]/30 selection:text-white font-sans antialiased overflow-x-hidden",children:[r.jsx(Ev,{}),r.jsx(jv,{}),r.jsx(h_,{depthUnit:M}),r.jsx(m_,{onOpenBooking:()=>ut("Mergulho de Batismo & Open Water"),depthUnit:M,onToggleDepthUnit:Y,isAudioOn:Q,onToggleAudio:lt}),r.jsxs("main",{className:"relative z-10 flex flex-col",children:[r.jsx(U_,{onOpenBooking:()=>ut("Imersão de Batismo Discovery")}),r.jsx(R_,{}),r.jsx(k_,{onSelectExpedition:N=>ut(`Expedição: ${N}`)}),r.jsx(B_,{onSelectCourse:N=>ut(`Curso: ${N}`)})]}),r.jsx(Y_,{}),r.jsx(L_,{isOpen:S,onClose:()=>x(!1),initialTopic:y})]})}wv.createRoot(document.getElementById("root")).render(r.jsx(pv.StrictMode,{children:r.jsx(G_,{})}));

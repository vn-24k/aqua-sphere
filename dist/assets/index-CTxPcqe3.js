var gm=Object.defineProperty;var bm=(_,w,E)=>w in _?gm(_,w,{enumerable:!0,configurable:!0,writable:!0,value:E}):_[w]=E;var el=(_,w,E)=>bm(_,typeof w!="symbol"?w+"":w,E);(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const Y of document.querySelectorAll('link[rel="modulepreload"]'))h(Y);new MutationObserver(Y=>{for(const Q of Y)if(Q.type==="childList")for(const st of Q.addedNodes)st.tagName==="LINK"&&st.rel==="modulepreload"&&h(st)}).observe(document,{childList:!0,subtree:!0});function E(Y){const Q={};return Y.integrity&&(Q.integrity=Y.integrity),Y.referrerPolicy&&(Q.referrerPolicy=Y.referrerPolicy),Y.crossOrigin==="use-credentials"?Q.credentials="include":Y.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function h(Y){if(Y.ep)return;Y.ep=!0;const Q=E(Y);fetch(Y.href,Q)}})();function h1(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var Nc={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function xm(){if(a1)return mi;a1=1;var _=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function E(h,Y,Q){var st=null;if(Q!==void 0&&(st=""+Q),Y.key!==void 0&&(st=""+Y.key),"key"in Y){Q={};for(var P in Y)P!=="key"&&(Q[P]=Y[P])}else Q=Y;return Y=Q.ref,{$$typeof:_,type:h,key:st,ref:Y!==void 0?Y:null,props:Q}}return mi.Fragment=w,mi.jsx=E,mi.jsxs=E,mi}var l1;function vm(){return l1||(l1=1,Nc.exports=xm()),Nc.exports}var o=vm(),Tc={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1;function ym(){if(n1)return $;n1=1;var _=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),st=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),ot=Symbol.for("react.suspense"),dt=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),R=Symbol.for("react.view_transition"),wt=Symbol.iterator;function Mt(s){return s===null||typeof s!="object"?null:(s=wt&&s[wt]||s["@@iterator"],typeof s=="function"?s:null)}var Ht={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,At={};function ue(s,N,M){this.props=s,this.context=N,this.refs=At,this.updater=M||Ht}ue.prototype.isReactComponent={},ue.prototype.setState=function(s,N){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,N,"setState")},ue.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Qe(){}Qe.prototype=ue.prototype;function je(s,N,M){this.props=s,this.context=N,this.refs=At,this.updater=M||Ht}var Oe=je.prototype=new Qe;Oe.constructor=je,L(Oe,ue.prototype),Oe.isPureReactComponent=!0;var re=Array.isArray;function tt(){}var ft={H:null,A:null,T:null,S:null},De=Object.prototype.hasOwnProperty;function he(s,N,M){var q=M.ref;return{$$typeof:_,type:s,key:N,ref:q!==void 0?q:null,props:M}}function pe(s,N){return he(s.type,N,s.props)}function oe(s){return typeof s=="object"&&s!==null&&s.$$typeof===_}function Ie(s){var N={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(M){return N[M]})}var Pe=/\/+/g;function Dt(s,N){return typeof s=="object"&&s!==null&&s.key!=null?Ie(""+s.key):N.toString(36)}function j(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(tt,tt):(s.status="pending",s.then(function(N){s.status==="pending"&&(s.status="fulfilled",s.value=N)},function(N){s.status==="pending"&&(s.status="rejected",s.reason=N)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function K(s,N,M,q,O){var Z=typeof s;(Z==="undefined"||Z==="boolean")&&(s=null);var V=!1;if(s===null)V=!0;else switch(Z){case"bigint":case"string":case"number":V=!0;break;case"object":switch(s.$$typeof){case _:case w:V=!0;break;case B:return V=s._init,K(V(s._payload),N,M,q,O)}}if(V)return O=O(s),V=q===""?"."+Dt(s,0):q,re(O)?(M="",V!=null&&(M=V.replace(Pe,"$&/")+"/"),K(O,N,M,"",function(St){return St})):O!=null&&(oe(O)&&(O=pe(O,M+(O.key==null||s&&s.key===O.key?"":(""+O.key).replace(Pe,"$&/")+"/")+V)),N.push(O)),1;V=0;var A=q===""?".":q+":";if(re(s))for(var D=0;D<s.length;D++)q=s[D],Z=A+Dt(q,D),V+=K(q,N,M,Z,O);else if(D=Mt(s),typeof D=="function")for(s=D.call(s),D=0;!(q=s.next()).done;)q=q.value,Z=A+Dt(q,D++),V+=K(q,N,M,Z,O);else if(Z==="object"){if(typeof s.then=="function")return K(j(s),N,M,q,O);throw N=String(s),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return V}function F(s,N,M){if(s==null)return s;var q=[],O=0;return K(s,q,"","",function(Z){return N.call(M,Z,O++)}),q}function gt(s){if(s._status===-1){var N=s._result,M=N();M.then(function(q){(s._status===0||s._status===-1)&&(s._status=1,s._result=q,M.status===void 0&&(M.status="fulfilled",M.value=q))},function(q){(s._status===0||s._status===-1)&&(s._status=2,s._result=q,M.status===void 0&&(M.status="rejected",M.reason=q))}),s._status===-1&&(s._status=0,s._result=M)}if(s._status===1)return s._result.default;throw s._result}var b=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function d(s){var N=ft.T,M={};M.types=N!==null?N.types:null,ft.T=M;try{var q=s(),O=ft.S;O!==null&&O(M,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(tt,b)}catch(Z){b(Z)}finally{N!==null&&M.types!==null&&(N.types=M.types),ft.T=N}}function H(s){var N=ft.T;if(N!==null){var M=N.types;M===null?N.types=[s]:M.indexOf(s)===-1&&M.push(s)}else d(H.bind(null,s))}var X={map:F,forEach:function(s,N,M){F(s,function(){N.apply(this,arguments)},M)},count:function(s){var N=0;return F(s,function(){N++}),N},toArray:function(s){return F(s,function(N){return N})||[]},only:function(s){if(!oe(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return $.Activity=S,$.Children=X,$.Component=ue,$.Fragment=E,$.Profiler=Y,$.PureComponent=je,$.StrictMode=h,$.Suspense=ot,$.ViewTransition=R,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ft,$.__COMPILER_RUNTIME={__proto__:null,c:function(s){return ft.H.useMemoCache(s)}},$.addTransitionType=H,$.cache=function(s){return function(){return s.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(s,N,M){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var q=L({},s.props),O=s.key;if(N!=null)for(Z in N.key!==void 0&&(O=""+N.key),N)!De.call(N,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&N.ref===void 0||(q[Z]=N[Z]);var Z=arguments.length-2;if(Z===1)q.children=M;else if(1<Z){for(var V=Array(Z),A=0;A<Z;A++)V[A]=arguments[A+2];q.children=V}return he(s.type,O,q)},$.createContext=function(s){return s={$$typeof:st,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:Q,_context:s},s},$.createElement=function(s,N,M){var q,O={},Z=null;if(N!=null)for(q in N.key!==void 0&&(Z=""+N.key),N)De.call(N,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(O[q]=N[q]);var V=arguments.length-2;if(V===1)O.children=M;else if(1<V){for(var A=Array(V),D=0;D<V;D++)A[D]=arguments[D+2];O.children=A}if(s&&s.defaultProps)for(q in V=s.defaultProps,V)O[q]===void 0&&(O[q]=V[q]);return he(s,Z,O)},$.createRef=function(){return{current:null}},$.forwardRef=function(s){return{$$typeof:P,render:s}},$.isValidElement=oe,$.lazy=function(s){return{$$typeof:B,_payload:{_status:-1,_result:s},_init:gt}},$.memo=function(s,N){return{$$typeof:dt,type:s,compare:N===void 0?null:N}},$.startTransition=d,$.unstable_useCacheRefresh=function(){return ft.H.useCacheRefresh()},$.use=function(s){return ft.H.use(s)},$.useActionState=function(s,N,M){return ft.H.useActionState(s,N,M)},$.useCallback=function(s,N){return ft.H.useCallback(s,N)},$.useContext=function(s){return ft.H.useContext(s)},$.useDebugValue=function(){},$.useDeferredValue=function(s,N){return ft.H.useDeferredValue(s,N)},$.useEffect=function(s,N){return ft.H.useEffect(s,N)},$.useEffectEvent=function(s){return ft.H.useEffectEvent(s)},$.useId=function(){return ft.H.useId()},$.useImperativeHandle=function(s,N,M){return ft.H.useImperativeHandle(s,N,M)},$.useInsertionEffect=function(s,N){return ft.H.useInsertionEffect(s,N)},$.useLayoutEffect=function(s,N){return ft.H.useLayoutEffect(s,N)},$.useMemo=function(s,N){return ft.H.useMemo(s,N)},$.useOptimistic=function(s,N){return ft.H.useOptimistic(s,N)},$.useReducer=function(s,N,M){return ft.H.useReducer(s,N,M)},$.useRef=function(s){return ft.H.useRef(s)},$.useState=function(s){return ft.H.useState(s)},$.useSyncExternalStore=function(s,N,M){return ft.H.useSyncExternalStore(s,N,M)},$.useTransition=function(){return ft.H.useTransition()},$.version="19.3.1",$}var i1;function Ac(){return i1||(i1=1,Tc.exports=ym()),Tc.exports}var jt=Ac();const _m=h1(jt);var Ec={exports:{}},gi={},zc={exports:{}},qc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1;function wm(){return u1||(u1=1,(function(_){function w(j,K){var F=j.length;j.push(K);t:for(;0<F;){var gt=F-1>>>1,b=j[gt];if(0<Y(b,K))j[gt]=K,j[F]=b,F=gt;else break t}}function E(j){return j.length===0?null:j[0]}function h(j){if(j.length===0)return null;var K=j[0],F=j.pop();if(F!==K){j[0]=F;t:for(var gt=0,b=j.length,d=b>>>1;gt<d;){var H=2*(gt+1)-1,X=j[H],s=H+1,N=j[s];if(0>Y(X,F))s<b&&0>Y(N,X)?(j[gt]=N,j[s]=F,gt=s):(j[gt]=X,j[H]=F,gt=H);else if(s<b&&0>Y(N,F))j[gt]=N,j[s]=F,gt=s;else break t}}return K}function Y(j,K){var F=j.sortIndex-K.sortIndex;return F!==0?F:j.id-K.id}if(_.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;_.unstable_now=function(){return Q.now()}}else{var st=Date,P=st.now();_.unstable_now=function(){return st.now()-P}}var ot=[],dt=[],B=1,S=null,R=3,wt=!1,Mt=!1,Ht=!1,L=!1,At=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,Qe=typeof setImmediate<"u"?setImmediate:null;function je(j){for(var K=E(dt);K!==null;){if(K.callback===null)h(dt);else if(K.startTime<=j)h(dt),K.sortIndex=K.expirationTime,w(ot,K);else break;K=E(dt)}}function Oe(j){if(Ht=!1,je(j),!Mt)if(E(ot)!==null)Mt=!0,re||(re=!0,oe());else{var K=E(dt);K!==null&&Dt(Oe,K.startTime-j)}}var re=!1,tt=-1,ft=5,De=-1;function he(){return L?!0:!(_.unstable_now()-De<ft)}function pe(){if(L=!1,re){var j=_.unstable_now();De=j;var K=!0;try{t:{Mt=!1,Ht&&(Ht=!1,ue(tt),tt=-1),wt=!0;var F=R;try{e:{for(je(j),S=E(ot);S!==null&&!(S.expirationTime>j&&he());){var gt=S.callback;if(typeof gt=="function"){S.callback=null,R=S.priorityLevel;var b=gt(S.expirationTime<=j);if(j=_.unstable_now(),typeof b=="function"){S.callback=b,je(j),K=!0;break e}S===E(ot)&&h(ot),je(j)}else h(ot);S=E(ot)}if(S!==null)K=!0;else{var d=E(dt);d!==null&&Dt(Oe,d.startTime-j),K=!1}}break t}finally{S=null,R=F,wt=!1}K=void 0}}finally{K?oe():re=!1}}}var oe;if(typeof Qe=="function")oe=function(){Qe(pe)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Pe=Ie.port2;Ie.port1.onmessage=pe,oe=function(){Pe.postMessage(null)}}else oe=function(){At(pe,0)};function Dt(j,K){tt=At(function(){j(_.unstable_now())},K)}_.unstable_IdlePriority=5,_.unstable_ImmediatePriority=1,_.unstable_LowPriority=4,_.unstable_NormalPriority=3,_.unstable_Profiling=null,_.unstable_UserBlockingPriority=2,_.unstable_cancelCallback=function(j){j.callback=null},_.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ft=0<j?Math.floor(1e3/j):5},_.unstable_getCurrentPriorityLevel=function(){return R},_.unstable_next=function(j){switch(R){case 1:case 2:case 3:var K=3;break;default:K=R}var F=R;R=K;try{return j()}finally{R=F}},_.unstable_requestPaint=function(){L=!0},_.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var F=R;R=j;try{return K()}finally{R=F}},_.unstable_scheduleCallback=function(j,K,F){var gt=_.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?gt+F:gt):F=gt,j){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=F+b,j={id:B++,callback:K,priorityLevel:j,startTime:F,expirationTime:b,sortIndex:-1},F>gt?(j.sortIndex=F,w(dt,j),E(ot)===null&&j===E(dt)&&(Ht?(ue(tt),tt=-1):Ht=!0,Dt(Oe,F-gt))):(j.sortIndex=b,w(ot,j),Mt||wt||(Mt=!0,re||(re=!0,oe()))),j},_.unstable_shouldYield=he,_.unstable_wrapCallback=function(j){var K=R;return function(){var F=R;R=K;try{return j.apply(this,arguments)}finally{R=F}}}})(qc)),qc}var r1;function Sm(){return r1||(r1=1,zc.exports=wm()),zc.exports}var Mc={exports:{}},le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function Nm(){if(o1)return le;o1=1;var _=Ac();function w(B){var S="https://react.dev/errors/"+B;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)S+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+B+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(){}var h={d:{f:E,r:function(){throw Error(w(522))},D:E,C:E,L:E,m:E,X:E,S:E,M:E},p:0,findDOMNode:null},Y=Symbol.for("react.portal"),Q=Symbol.for("react.recoverable"),st=Symbol.for("react.optimistic_key");function P(B,S,R){var wt=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:wt==null?null:wt===st?st:""+wt,children:B,containerInfo:S,implementation:R}}var ot=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function dt(B,S){if(B==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,le.browser=function(B){return{$$typeof:Q,_reason:B}},le.createPortal=function(B,S){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(w(299));return P(B,S,null,R)},le.flushSync=function(B){var S=ot.T,R=h.p;try{if(ot.T=null,h.p=2,B)return B()}finally{ot.T=S,h.p=R,h.d.f()}},le.preconnect=function(B,S){typeof B=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,h.d.C(B,S))},le.prefetchDNS=function(B){typeof B=="string"&&h.d.D(B)},le.preinit=function(B,S){if(typeof B=="string"&&S&&typeof S.as=="string"){var R=S.as,wt=dt(R,S.crossOrigin),Mt=typeof S.integrity=="string"?S.integrity:void 0,Ht=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;R==="style"?h.d.S(B,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:wt,integrity:Mt,fetchPriority:Ht}):R==="script"&&h.d.X(B,{crossOrigin:wt,integrity:Mt,fetchPriority:Ht,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},le.preinitModule=function(B,S){if(typeof B=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var R=dt(S.as,S.crossOrigin);h.d.M(B,{crossOrigin:R,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}}else S==null&&h.d.M(B)},le.preload=function(B,S){if(typeof B=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var R=S.as,wt=dt(R,S.crossOrigin);h.d.L(B,R,{crossOrigin:wt,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},le.preloadModule=function(B,S){if(typeof B=="string")if(S){var R=dt(S.as,S.crossOrigin);h.d.m(B,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:R,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}else h.d.m(B)},le.requestFormReset=function(B){h.d.r(B)},le.unstable_batchedUpdates=function(B,S){return B(S)},le.useFormState=function(B,S,R){return ot.H.useFormState(B,S,R)},le.useFormStatus=function(){return ot.H.useHostTransitionStatus()},le.version="19.3.1",le}var c1;function Tm(){if(c1)return Mc.exports;c1=1;function _(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_)}catch(w){console.error(w)}}return _(),Mc.exports=Nm(),Mc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function Em(){if(s1)return gi;s1=1;var _=Sm(),w=Ac(),E=Tm();function h(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Y(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Q(t){for(var e=t,a=e;a&&!a.alternate;)e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function st(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function P(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ot(t){if(Q(t)!==t)throw Error(h(188))}function dt(t){var e=t.alternate;if(!e){if(e=Q(t),e===null)throw Error(h(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return ot(n),t;if(i===l)return ot(n),e;i=i.sibling}throw Error(h(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,r=n.child;r;){if(r===a){u=!0,a=n,l=i;break}if(r===l){u=!0,l=n,a=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===a){u=!0,a=i,l=n;break}if(r===l){u=!0,l=i,a=n;break}r=r.sibling}if(!u)throw Error(h(189))}}if(a.alternate!==l)throw Error(h(190))}if(a.tag!==3)throw Error(h(188));return a.stateNode.current===a?t:e}function B(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=B(t),e!==null)return e;t=t.sibling}return null}function S(t,e,a,l,n,i){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,l,n,i)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&S(t.child,e,a,l,n,i))return!0;t=t.sibling}return!1}function R(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function wt(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function Mt(t){var e=[null,null],a=R(t);return a===null||Ht(e,t,a.child,{foundSelf:!1}),e}function Ht(t,e,a,l){for(;a!==null;){if(a===e)l.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(l.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&Ht(t,e,a.child,l))return!0;a=a.sibling}return!1}function L(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(h(559))}}var At=null,ue=null;function Qe(t,e,a){return t===a?!0:t===e?(At=t,!0):!1}function je(t,e,a){return t===a?(ue=t,!1):t===e?(ue!==null&&(At=t),!0):!1}function Oe(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function re(t,e,a){for(var l=0,n=t;n;n=a(n))l++;n=0;for(var i=e;i;i=a(i))n++;for(;0<l-n;)t=a(t),l--;for(;0<n-l;)e=a(e),n--;for(;l--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var tt=Object.assign,ft=Symbol.for("react.element"),De=Symbol.for("react.transitional.element"),he=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Pe=Symbol.for("react.consumer"),Dt=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),d=Symbol.for("react.activity"),H=Symbol.for("react.legacy_hidden"),X=Symbol.for("react.memo_cache_sentinel"),s=Symbol.for("react.view_transition"),N=Symbol.for("react.recoverable"),M=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var O=Symbol.for("react.client.reference");function Z(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===O?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pe:return"Fragment";case Ie:return"Profiler";case oe:return"StrictMode";case K:return"Suspense";case F:return"SuspenseList";case d:return"Activity";case s:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case he:return"Portal";case Dt:return t.displayName||"Context";case Pe:return(t._context.displayName||"Context")+".Consumer";case j:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gt:return e=t.displayName||null,e!==null?e:Z(t.type)||"Memo";case b:e=t._payload,t=t._init;try{return Z(t(e))}catch{}}return null}var V=Array.isArray,A=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,St={pending:!1,data:null,method:null,action:null},at=[],Bt=-1;function kt(t){return{current:t}}function bt(t){0>Bt||(t.current=at[Bt],at[Bt]=null,Bt--)}function it(t,e){Bt++,at[Bt]=t.current,t.current=e}var Xt=kt(null),ne=kt(null),ta=kt(null),zl=kt(null);function ql(t,e){switch(it(ta,e),it(ne,t),it(Xt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?fd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=fd(e),t=dd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}bt(Xt),it(Xt,t)}function da(){bt(Xt),bt(ne),bt(ta)}function yn(t){var e=t.memoizedState;e!==null&&(bn._currentValue=e.memoizedState,it(zl,t)),e=Xt.current;var a=dd(e,t.type);e!==a&&(it(ne,t),it(Xt,a))}function al(t){ne.current===t&&(bt(Xt),bt(ne)),zl.current===t&&(bt(zl),bn._currentValue=St)}var _n,bi;function Ve(t){if(_n===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);_n=e&&e[1]||"",bi=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_n+t+bi}var Ml=!1;function ll(t,e){if(!t||Ml)return"";Ml=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(C){var p=C}Reflect.construct(t,[],z)}else{try{z.call()}catch(C){p=C}z=!1;try{var v=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),z=!0,new t}finally{z&&(v!==void 0?Object.defineProperty(t.prototype,"props",v):delete t.prototype.props)}}}else{try{throw Error()}catch(C){p=C}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(C){if(C&&p&&typeof C.stack=="string")return[C.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var c=u.split(`
`),g=r.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===g.length)for(l=c.length-1,n=g.length-1;1<=l&&0<=n&&c[l]!==g[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==g[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==g[n]){var y=`
`+c[l].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=l&&0<=n);break}}}finally{Ml=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ve(a):""}function Xu(t,e){switch(t.tag){case 26:case 27:case 5:return Ve(t.type);case 16:return Ve("Lazy");case 13:return t.child!==e&&e!==null?Ve("Suspense Fallback"):Ve("Suspense");case 19:return Ve("SuspenseList");case 0:case 15:return ll(t.type,!1);case 11:return ll(t.type.render,!1);case 1:return ll(t.type,!0);case 31:return Ve("Activity");case 30:return Ve("ViewTransition");default:return""}}function xi(t){try{var e="",a=null;do e+=Xu(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ku=Object.prototype.hasOwnProperty,Ju=_.unstable_scheduleCallback,Fu=_.unstable_cancelCallback,_1=_.unstable_shouldYield,w1=_.unstable_requestPaint,_e=_.unstable_now,S1=_.unstable_getCurrentPriorityLevel,Oc=_.unstable_ImmediatePriority,Dc=_.unstable_UserBlockingPriority,vi=_.unstable_NormalPriority,N1=_.unstable_LowPriority,kc=_.unstable_IdlePriority,T1=_.log,E1=_.unstable_setDisableYieldValue,wn=null,we=null;function qa(t){if(typeof T1=="function"&&E1(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(wn,t)}catch{}}var Se=Math.clz32?Math.clz32:M1,z1=Math.log,q1=Math.LN2;function M1(t){return t>>>=0,t===0?32:31-(z1(t)/q1|0)|0}var yi=256,_i=262144,wi=4194304;function nl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Si(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=nl(l):(u&=r,u!==0?n=nl(u):a||(a=r&~t,a!==0&&(n=nl(a))))):(r=l&~i,r!==0?n=nl(r):u!==0?n=nl(u):a||(a=l&~t,a!==0&&(n=nl(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Sn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Uc(t,e){(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-Se(a),n=1<<l;e|=t[l],a&=~n}return e}function A1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rc(){var t=wi;return wi<<=1,(wi&62914560)===0&&(wi=4194304),t}function $u(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Nn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function C1(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var r=t.entanglements,c=t.expirationTimes,g=t.hiddenUpdates;for(a=u&~a;0<a;){var y=31-Se(a),z=1<<y;r[y]=0,c[y]=-1;var p=g[y];if(p!==null)for(g[y]=null,y=0;y<p.length;y++){var v=p[y];v!==null&&(v.lane&=-536870913)}a&=~z}l!==0&&Hc(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Hc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-Se(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Bc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-Se(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function Yc(t,e){var a=e&-e;return a=(a&42)!==0?1:Wu(a),(a&(t.suspendedLanes|e))!==0?0:a}function Wu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Iu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zc(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:Fd(t.type))}function Lc(t,e){var a=D.p;try{return D.p=t,e()}finally{D.p=a}}var ha=Math.random().toString(36).slice(2),Wt="__reactFiber$"+ha,me="__reactProps$"+ha,Al="__reactContainer$"+ha,Gc="__reactEvents$"+ha,j1="__reactListeners$"+ha,O1="__reactHandles$"+ha,Qc="__reactResources$"+ha,Tn="__reactMarker$"+ha,Ni="__reactLoad$"+ha;function Ti(t){delete t[Wt],delete t[me],delete t[j1],delete t[O1]}function il(t){var e;if(e=t[Wt])return e;for(var a=t.parentNode;a;){if(e=a[Al]||a[Wt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Md(t);t!==null;){if(a=t[Wt])return a;t=Md(t)}return e}t=a,a=t.parentNode}return null}function Cl(t){if(t=t[Wt]||t[Al]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function En(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(h(33))}function jl(t){var e=t[Qc];return e||(e=t[Qc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Kt(t){t[Tn]=!0}function Vc(t){t[Ni]=void 0}var Xc=new Set,Kc={};function ul(t,e){Ol(t,e),Ol(t+"Capture",e)}function Ol(t,e){for(Kc[t]=e,t=0;t<e.length;t++)Xc.add(e[t])}var D1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jc={},Fc={};function k1(t){return Ku.call(Fc,t)?!0:Ku.call(Jc,t)?!1:D1.test(t)?Fc[t]=!0:(Jc[t]=!0,!1)}var ht=!1;function $c(){var t=ht;return ht=!1,t}function Ei(t,e,a){if(k1(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function zi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function pa(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,l)}}function Ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function U1(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pu(t){if(!t._valueTracker){var e=Wc(t)?"checked":"value";t._valueTracker=U1(t,e,""+t[e])}}function Ic(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=Wc(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}var R1=/[\n"\\]/g;function ke(t){return t.replace(R1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function tr(t,e,a,l,n,i,u,r){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ne(e)):t.value!==""+Ne(e)&&(t.value=""+Ne(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?u==="number"&&t.value==e?er(t,Ne(t.value)):er(t,Ne(e)):a!=null?er(t,Ne(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+Ne(r):t.removeAttribute("name")}function Pc(t,e,a,l,n,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Pu(t);return}a=a!=null?""+Ne(a):"",e=e!=null?""+Ne(e):a,r||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=r?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Pu(t)}function er(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Dl(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ne(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function ts(t,e,a){if(e!=null&&(e=""+Ne(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ne(a):""}function es(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(h(92));if(V(l)){if(1<l.length)throw Error(h(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Ne(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Pu(t)}function kl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var H1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function as(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||H1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ls(t,e,a){if(e!=null&&typeof e!="object")throw Error(h(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="",ht=!0);for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&(as(t,n,l),ht=!0)}else for(var i in e)e.hasOwnProperty(i)&&as(t,i,e[i])}function ar(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var B1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Y1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(t){return Y1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var lr=null;function nr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ul=null,Rl=null;function ns(t){var e=Cl(t);if(e&&(t=e.stateNode)){var a=t[me]||null;t:switch(t=e.stateNode,e.type){case"input":if(tr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[me]||null;if(!n)throw Error(h(90));tr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&Ic(l)}break t;case"textarea":ts(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Dl(t,!!a.multiple,e,!1)}}}var ir=!1;function is(t,e,a){if(ir)return t(e,a);ir=!0;try{var l=t(e);return l}finally{if(ir=!1,(Ul!==null||Rl!==null)&&(qu(),Ul&&(e=Ul,t=Rl,Rl=Ul=null,ns(e),t)))for(e=0;e<t.length;e++)ns(t[e])}}function zn(t,e){var a=t.stateNode;if(a===null)return null;var l=a[me]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(h(231,e,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ur=!1;if(ma)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){ur=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{ur=!1}var Ma=null,rr=null,Mi=null;function us(){if(Mi)return Mi;var t,e=rr,a=e.length,l,n="value"in Ma?Ma.value:Ma.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Mi=n.slice(t,1<l?1-l:void 0)}function Ai(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ci(){return!0}function rs(){return!1}function ce(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(a=t[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ci:rs,this.isPropagationStopped=rs,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),e}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=ce(Aa),Mn=tt({},Aa,{view:0,detail:0}),Z1=ce(Mn),or,cr,An,Oi=tt({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==An&&(An&&t.type==="mousemove"?(or=t.screenX-An.screenX,cr=t.screenY-An.screenY):cr=or=0,An=t),or)},movementY:function(t){return"movementY"in t?t.movementY:cr}}),os=ce(Oi),L1=tt({},Oi,{dataTransfer:0}),G1=ce(L1),Q1=tt({},Mn,{relatedTarget:0}),sr=ce(Q1),V1=tt({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),X1=ce(V1),K1=tt({},Aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J1=ce(K1),F1=tt({},Aa,{data:0}),cs=ce(F1),$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=I1[t])?!!e[t]:!1}function fr(){return P1}var th=tt({},Mn,{key:function(t){if(t.key){var e=$1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ai(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(t){return t.type==="keypress"?Ai(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ai(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eh=ce(th),ah=tt({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ss=ce(ah),lh=tt({},Aa,{submitter:0}),nh=ce(lh),ih=tt({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr}),uh=ce(ih),rh=tt({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),oh=ce(rh),ch=tt({},Oi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sh=ce(ch),fh=tt({},Aa,{newState:0,oldState:0,source:0}),dh=ce(fh),hh=[9,13,27,32],dr=ma&&"CompositionEvent"in window,Cn=null;ma&&"documentMode"in document&&(Cn=document.documentMode);var ph=ma&&"TextEvent"in window&&!Cn,fs=ma&&(!dr||Cn&&8<Cn&&11>=Cn),ds=" ",hs=!1;function ps(t,e){switch(t){case"keyup":return hh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ms(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hl=!1;function mh(t,e){switch(t){case"compositionend":return ms(e);case"keypress":return e.which!==32?null:(hs=!0,ds);case"textInput":return t=e.data,t===ds&&hs?null:t;default:return null}}function gh(t,e){if(Hl)return t==="compositionend"||!dr&&ps(t,e)?(t=us(),Mi=rr=Ma=null,Hl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fs&&e.locale!=="ko"?null:e.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bh[t.type]:e==="textarea"}function bs(t,e,a,l){Ul?Rl?Rl.push(l):Rl=[l]:Ul=l,e=Du(e,"onChange"),0<e.length&&(a=new ji("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var jn=null,On=null;function xh(t){id(t,0)}function Di(t){var e=En(t);if(Ic(e))return t}function xs(t,e){if(t==="change")return e}var vs=!1;if(ma){var hr;if(ma){var pr="oninput"in document;if(!pr){var ys=document.createElement("div");ys.setAttribute("oninput","return;"),pr=typeof ys.oninput=="function"}hr=pr}else hr=!1;vs=hr&&(!document.documentMode||9<document.documentMode)}function _s(){jn&&(jn.detachEvent("onpropertychange",ws),On=jn=null)}function ws(t){if(t.propertyName==="value"&&Di(On)){var e=[];bs(e,On,t,nr(t)),is(xh,e)}}function vh(t,e,a){t==="focusin"?(_s(),jn=e,On=a,jn.attachEvent("onpropertychange",ws)):t==="focusout"&&_s()}function yh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Di(On)}function _h(t,e){if(t==="click")return Di(e)}function wh(t,e){if(t==="input"||t==="change")return Di(e)}function Sh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Te=typeof Object.is=="function"?Object.is:Sh;function Dn(t,e){if(Te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ku.call(e,n)||!Te(t[n],e[n]))return!1}return!0}function mr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ss(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ns(t,e){var a=Ss(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ss(a)}}function Ts(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ts(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Es(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=mr(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=mr(t.document)}return e}function gr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Nh=ma&&"documentMode"in document&&11>=document.documentMode,Bl=null,br=null,kn=null,xr=!1;function zs(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xr||Bl==null||Bl!==mr(l)||(l=Bl,"selectionStart"in l&&gr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),kn&&Dn(kn,l)||(kn=l,l=Du(br,"onSelect"),0<l.length&&(e=new ji("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Bl)))}function rl(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Yl={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionrun:rl("Transition","TransitionRun"),transitionstart:rl("Transition","TransitionStart"),transitioncancel:rl("Transition","TransitionCancel"),transitionend:rl("Transition","TransitionEnd")},vr={},qs={};ma&&(qs=document.createElement("div").style,"AnimationEvent"in window||(delete Yl.animationend.animation,delete Yl.animationiteration.animation,delete Yl.animationstart.animation),"TransitionEvent"in window||delete Yl.transitionend.transition);function ol(t){if(vr[t])return vr[t];if(!Yl[t])return t;var e=Yl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in qs)return vr[t]=e[a];return t}var Ms=ol("animationend"),As=ol("animationiteration"),Cs=ol("animationstart"),Th=ol("transitionrun"),Eh=ol("transitionstart"),zh=ol("transitioncancel"),js=ol("transitionend"),Os=new Map,yr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yr.push("scrollEnd");function Xe(t,e){Os.set(t,e),ul(e,[t])}var qh=0;function ga(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=$e.identifierPrefix;var a=qh++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function Ds(t){if(t==null||typeof t=="string")return t;var e=null,a=rn;if(a!==null)for(var l=0;l<a.length;l++){var n=t[a[l]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function ba(t,e){return t=Ds(t),e=Ds(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var ki=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ue=[],Zl=0,_r=0;function Ui(){for(var t=Zl,e=_r=Zl=0;e<t;){var a=Ue[e];Ue[e++]=null;var l=Ue[e];Ue[e++]=null;var n=Ue[e];Ue[e++]=null;var i=Ue[e];if(Ue[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&ks(a,n,i)}}function Ri(t,e,a,l){Ue[Zl++]=t,Ue[Zl++]=e,Ue[Zl++]=a,Ue[Zl++]=l,_r|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function wr(t,e,a,l){return Ri(t,e,a,l),Hi(t)}function cl(t,e){return Ri(t,null,null,e),Hi(t)}function ks(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Se(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function Hi(t){if(50<li)throw li=0,zu=null,Error(h(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ll={};function Mh(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ge(t,e,a,l){return new Mh(t,e,a,l)}function Sr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,e){var a=t.alternate;return a===null?(a=ge(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Us(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Bi(t,e,a,l,n,i){var u=0;if(l=t,typeof l=="function")Sr(l)&&(u=1);else if(typeof l=="string")u=lm(t,a,Xt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(l){case d:return t=ge(31,a,e,n),t.elementType=d,t.lanes=i,t;case pe:return sl(a.children,n,i,e);case oe:u=8,n|=24;break;case Ie:return t=ge(12,a,e,n|2),t.elementType=Ie,t.lanes=i,t;case K:return t=ge(13,a,e,n),t.elementType=K,t.lanes=i,t;case F:return t=ge(19,a,e,n),t.elementType=F,t.lanes=i,t;case H:case s:return t=n|32,t=ge(30,a,e,t),t.elementType=s,t.lanes=i,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Dt:u=10;break t;case Pe:u=9;break t;case j:u=11;break t;case gt:u=14;break t;case b:u=16,l=null;break t}u=29,a=Error(h(130,t===null?"null":typeof t,"")),l=null}return e=ge(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function sl(t,e,a,l){return t=ge(7,t,l,e),t.lanes=a,t}function Nr(t,e,a){return t=ge(6,t,null,e),t.lanes=a,t}function Rs(t){var e=ge(18,null,null,0);return e.stateNode=t,e}function Tr(t,e,a){return e=ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Hs=new WeakMap;function Re(t,e){if(typeof t=="object"&&t!==null){var a=Hs.get(t);return a!==void 0?a:(e={value:t,source:e,stack:xi(e)},Hs.set(t,e),e)}return{value:t,source:e,stack:xi(e)}}var Gl=[],Ql=0,Yi=null,Un=0,He=[],Be=0,Ca=null,aa=1,la="";function va(t,e){Gl[Ql++]=Un,Gl[Ql++]=Yi,Yi=t,Un=e}function Bs(t,e,a){He[Be++]=aa,He[Be++]=la,He[Be++]=Ca,Ca=t;var l=aa;t=la;var n=32-Se(l)-1;l&=~(1<<n),a+=1;var i=32-Se(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,aa=1<<32-Se(e)+n|a<<n|l,la=i+t}else aa=1<<i|a<<n|l,la=t}function Zi(t){t.return!==null&&(va(t,1),Bs(t,1,0))}function Er(t){for(;t===Yi;)Yi=Gl[--Ql],Gl[Ql]=null,Un=Gl[--Ql],Gl[Ql]=null;for(;t===Ca;)Ca=He[--Be],He[Be]=null,la=He[--Be],He[Be]=null,aa=He[--Be],He[Be]=null}function Ys(t,e){He[Be++]=aa,He[Be++]=la,He[Be++]=Ca,aa=e.id,la=e.overflow,Ca=t}var Jt=null,Tt=null,et=!1,ja=null,Ye=!1,zr=Error(h(519));function Oa(t){var e=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Rn(Re(e,t)),zr}function Zs(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Wt]=t,e[me]=l,a){case"dialog":nt("cancel",e),nt("close",e);break;case"iframe":case"object":case"embed":nt("load",e);break;case"video":case"audio":for(a=0;a<ii.length;a++)nt(ii[a],e);break;case"source":nt("error",e);break;case"img":case"image":case"link":nt("error",e),nt("load",e);break;case"details":nt("toggle",e);break;case"input":nt("invalid",e),Pc(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":nt("invalid",e);break;case"textarea":nt("invalid",e),es(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||cd(e.textContent,a)?(l.popover!=null&&(nt("beforetoggle",e),nt("toggle",e)),l.onScroll!=null&&nt("scroll",e),l.onScrollEnd!=null&&nt("scrollend",e),l.onClick!=null&&(e.onclick=ea),e=!0):e=!1,e||Oa(t,!0)}function Li(t){for(Jt=t.return;Jt;)switch(Jt.tag){case 5:case 31:case 13:Ye=!1;return;case 27:case 3:Ye=!0;return;default:Jt=Jt.return}}function Vl(t){if(t!==Jt)return!1;if(!et)return Li(t),et=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||nc(t.type,t.memoizedProps)),a=!a),a&&Tt&&Oa(t),Li(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));Tt=qd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));Tt=qd(t)}else e===27?(e=Tt,Fa(t.type)?(t=hc,hc=null,Tt=t):Tt=e):Tt=Jt?Le(t.stateNode.nextSibling):null;return!0}function fl(){Tt=Jt=null,et=!1}function qr(){var t=ja;return t!==null&&(ve===null?ve=t:ve.push.apply(ve,t),ja=null),t}function Rn(t){ja===null?ja=[t]:ja.push(t)}var Mr=kt(null),dl=null,ya=null;function Da(t,e,a){it(Mr,e._currentValue),e._currentValue=a}function _a(t){t._currentValue=Mr.current,bt(Mr)}function Gi(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Ar(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var r=i;i=n;for(var c=0;c<e.length;c++)if(r.context===e[c]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Gi(i.return,a,t),l||(u=null);break t}i=r.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(h(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Gi(u,a,t),u=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,u=n.alternate,u!==null&&(u.lanes|=a),Gi(n.return,a,t),u=n.child,u=u!==null?u.sibling:null):u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function hl(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var r=n.type;Te(n.pendingProps.value,u.value)||(t!==null?t.push(r):t=[r])}}else if(n===zl.current){if(u=n.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(bn):t=[bn])}n=n.return}return t!==null&&Ar(e,t,a,l),e.flags|=262144,t!==null}function Qi(t){for(t=t.firstContext;t!==null;){if(!Te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pl(t){dl=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function It(t){return Ls(dl,t)}function Vi(t,e){return dl===null&&pl(t),Ls(t,e)}function Ls(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ya===null){if(t===null)throw Error(h(308));ya=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ya=ya.next=e;return a}var Ah=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Ch=_.unstable_scheduleCallback,jh=_.unstable_NormalPriority,Zt={$$typeof:Dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cr(){return{controller:new Ah,data:new Map,refCount:0}}function Hn(t){t.refCount--,t.refCount===0&&Ch(jh,function(){t.controller.abort()})}function Gs(t,e){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var l=e[t];a.indexOf(l)===-1&&a.push(l)}}}var Bn=null;function Oh(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Yn=null,jr=0,ml=0,Xl=null;function Dh(t,e){if(Yn===null){var a=Yn=[];jr=0,ml=Fo(),Xl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return jr++,e.then(Qs,Qs),e}function Qs(){if(--jr===0&&(Bn=null,Yn!==null)){Xl!==null&&(Xl.status="fulfilled");var t=Yn;Yn=null,ml=0,Xl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function kh(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Vs=A.S;A.S=function(t,e){if(Hf=_e(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Dh(t,e),Bn!==null)for(var a=fn;a!==null;)Gs(a,Bn),a=a.next;if(a=t.types,a!==null){for(var l=fn;l!==null;)Gs(l,a),l=l.next;if(ml!==0){l=Bn,l===null&&(l=Bn=[]);for(var n=0;n<a.length;n++){var i=a[n];l.indexOf(i)===-1&&l.push(i)}}}Vs!==null&&Vs(t,e)};var gl=kt(null);function Or(){var t=gl.current;return t!==null?t:Nt.pooledCache}function Xi(t,e){e===null?it(gl,gl.current):it(gl,e.pool)}function Xs(){var t=Or();return t===null?null:{parent:Zt._currentValue,pool:t}}var Kl=Error(h(460)),Dr=Error(h(474)),Ki=Error(h(542)),Ji={then:function(){}};function Ks(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Js(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ea,ea),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,$s(t),t===void 0&&!("reason"in e)?Error(h(600)):t;default:if(typeof e.status=="string")e.then(ea,ea);else{if(t=Nt,t!==null&&100<t.shellSuspendCounter)throw Error(h(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,$s(t),t}throw xl=e,Kl}}function bl(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xl=a,Kl):a}}var xl=null;function Fs(){if(xl===null)throw Error(h(459));var t=xl;return xl=null,t}function $s(t){if(t===Kl||t===Ki)throw Error(h(483))}var Jl=null,Zn=0;function Fi(t){var e=Zn;return Zn+=1,Jl===null&&(Jl=[]),Js(Jl,t,e)}function ka(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function $i(t,e){throw e.$$typeof===ft?Error(h(525)):(t=Object.prototype.toString.call(e),Error(h(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ws(t){function e(m,f){if(t){var x=m.deletions;x===null?(m.deletions=[f],m.flags|=16):x.push(f)}}function a(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function l(m){for(var f=new Map;m!==null;)m.key===null?f.set(m.index,m):f.set(m.key,m),m=m.sibling;return f}function n(m,f){return m=xa(m,f),m.index=0,m.sibling=null,m}function i(m,f,x){return m.index=x,t?(x=m.alternate,x!==null?(x=x.index,x<f?(m.flags|=2,f):x):(m.flags|=134217730,f)):(m.flags|=1048576,f)}function u(m){return t&&m.alternate===null&&(m.flags|=134217730),m}function r(m,f,x,T){return f===null||f.tag!==6?(f=Nr(x,m.mode,T),f.return=m,f):(f=n(f,x),f.return=m,f)}function c(m,f,x,T){var k=x.type;return k===pe?(m=y(m,f,x.props.children,T,x.key),ka(m,x),m):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===b&&bl(k)===f.type)?(f=n(f,x.props),ka(f,x),f.return=m,f):(f=Bi(x.type,x.key,x.props,null,m.mode,T),ka(f,x),f.return=m,f)}function g(m,f,x,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Tr(x,m.mode,T),f.return=m,f):(f=n(f,x.children||[]),f.return=m,f)}function y(m,f,x,T,k){return f===null||f.tag!==7?(f=sl(x,m.mode,T,k),f.return=m,f):(f=n(f,x),f.return=m,f)}function z(m,f,x){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Nr(""+f,m.mode,x),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case De:return x=Bi(f.type,f.key,f.props,null,m.mode,x),ka(x,f),x.return=m,x;case he:return f=Tr(f,m.mode,x),f.return=m,f;case b:return f=bl(f),z(m,f,x)}if(V(f)||q(f))return f=sl(f,m.mode,x,null),f.return=m,f;if(typeof f.then=="function")return z(m,Fi(f),x);if(f.$$typeof===Dt)return z(m,Vi(m,f),x);$i(m,f)}return null}function p(m,f,x,T){var k=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return k!==null?null:r(m,f,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case De:return x.key===k?c(m,f,x,T):null;case he:return x.key===k?g(m,f,x,T):null;case b:return x=bl(x),p(m,f,x,T)}if(V(x)||q(x))return k!==null?null:y(m,f,x,T,null);if(typeof x.then=="function")return p(m,f,Fi(x),T);if(x.$$typeof===Dt)return p(m,f,Vi(m,x),T);$i(m,x)}return null}function v(m,f,x,T,k){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return m=m.get(x)||null,r(f,m,""+T,k);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case De:return m=m.get(T.key===null?x:T.key)||null,c(f,m,T,k);case he:return m=m.get(T.key===null?x:T.key)||null,g(f,m,T,k);case b:return T=bl(T),v(m,f,x,T,k)}if(V(T)||q(T))return m=m.get(x)||null,y(f,m,T,k,null);if(typeof T.then=="function")return v(m,f,x,Fi(T),k);if(T.$$typeof===Dt)return v(m,f,x,Vi(f,T),k);$i(f,T)}return null}function C(m,f,x,T){for(var k=null,rt=null,G=f,J=f=0,Qt=null;G!==null&&J<x.length;J++){G.index>J?(Qt=G,G=null):Qt=G.sibling;var ct=p(m,G,x[J],T);if(ct===null){G===null&&(G=Qt);break}t&&G&&ct.alternate===null&&e(m,G),f=i(ct,f,J),rt===null?k=ct:rt.sibling=ct,rt=ct,G=Qt}if(J===x.length)return a(m,G),et&&va(m,J),k;if(G===null){for(;J<x.length;J++)G=z(m,x[J],T),G!==null&&(f=i(G,f,J),rt===null?k=G:rt.sibling=G,rt=G);return et&&va(m,J),k}for(G=l(G);J<x.length;J++)Qt=v(G,m,J,x[J],T),Qt!==null&&(t&&(ct=Qt.alternate,ct!==null&&G.delete(ct.key===null?J:ct.key)),f=i(Qt,f,J),rt===null?k=Qt:rt.sibling=Qt,rt=Qt);return t&&G.forEach(function(tl){return e(m,tl)}),et&&va(m,J),k}function U(m,f,x,T){if(x==null)throw Error(h(151));for(var k=null,rt=null,G=f,J=f=0,Qt=null,ct=x.next();G!==null&&!ct.done;J++,ct=x.next()){G.index>J?(Qt=G,G=null):Qt=G.sibling;var tl=p(m,G,ct.value,T);if(tl===null){G===null&&(G=Qt);break}t&&G&&tl.alternate===null&&e(m,G),f=i(tl,f,J),rt===null?k=tl:rt.sibling=tl,rt=tl,G=Qt}if(ct.done)return a(m,G),et&&va(m,J),k;if(G===null){for(;!ct.done;J++,ct=x.next())ct=z(m,ct.value,T),ct!==null&&(f=i(ct,f,J),rt===null?k=ct:rt.sibling=ct,rt=ct);return et&&va(m,J),k}for(G=l(G);!ct.done;J++,ct=x.next())ct=v(G,m,J,ct.value,T),ct!==null&&(t&&(Qt=ct.alternate,Qt!==null&&G.delete(Qt.key===null?J:Qt.key)),f=i(ct,f,J),rt===null?k=ct:rt.sibling=ct,rt=ct);return t&&G.forEach(function(mm){return e(m,mm)}),et&&va(m,J),k}function I(m,f,x,T){if(typeof x=="object"&&x!==null&&x.type===pe&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case De:t:{for(var k=x.key;f!==null;){if(f.key===k){if(k=x.type,k===pe){if(f.tag===7){a(m,f.sibling),T=n(f,x.props.children),ka(T,x),T.return=m,m=T;break t}}else if(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===b&&bl(k)===f.type){a(m,f.sibling),T=n(f,x.props),ka(T,x),T.return=m,m=T;break t}a(m,f);break}else e(m,f);f=f.sibling}x.type===pe?(T=sl(x.props.children,m.mode,T,x.key),ka(T,x),T.return=m,m=T):(T=Bi(x.type,x.key,x.props,null,m.mode,T),ka(T,x),T.return=m,m=T)}return u(m);case he:t:{for(k=x.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){a(m,f.sibling),T=n(f,x.children||[]),T.return=m,m=T;break t}else{a(m,f);break}else e(m,f);f=f.sibling}T=Tr(x,m.mode,T),T.return=m,m=T}return u(m);case b:return x=bl(x),I(m,f,x,T)}if(V(x))return C(m,f,x,T);if(q(x)){if(k=q(x),typeof k!="function")throw Error(h(150));return x=k.call(x),U(m,f,x,T)}if(typeof x.then=="function")return I(m,f,Fi(x),T);if(x.$$typeof===Dt)return I(m,f,Vi(m,x),T);$i(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,f!==null&&f.tag===6?(a(m,f.sibling),T=n(f,x),T.return=m,m=T):(a(m,f),T=Nr(x,m.mode,T),T.return=m,m=T),u(m)):a(m,f)}return function(m,f,x,T){try{Zn=0;var k=I(m,f,x,T);return Jl=null,k}catch(G){if(G===Kl||G===Ki)throw G;var rt=ge(29,G,null,m.mode);return rt.lanes=T,rt.return=m,rt}finally{}}}var vl=Ws(!0),Is=Ws(!1),Ua=!1;function kr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ur(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(pt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=Hi(t),ks(t,null,a),e}return Ri(t,l,e,a),Hi(t)}function Ln(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Bc(t,a)}}function Rr(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Hr=!1;function Gn(){if(Hr){var t=Xl;if(t!==null)throw t}}function Qn(t,e,a,l){Hr=!1;var n=t.updateQueue;Ua=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var c=r,g=c.next;c.next=null,u===null?i=g:u.next=g,u=c;var y=t.alternate;y!==null&&(y=y.updateQueue,r=y.lastBaseUpdate,r!==u&&(r===null?y.firstBaseUpdate=g:r.next=g,y.lastBaseUpdate=c))}if(i!==null){var z=n.baseState;u=0,y=g=c=null,r=i;do{var p=r.lane&-536870913,v=p!==r.lane;if(v?(ut&p)===p:(l&p)===p){p!==0&&p===ml&&(Hr=!0),y!==null&&(y=y.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var C=t,U=r;p=e;var I=a;switch(U.tag){case 1:if(C=U.payload,typeof C=="function"){z=C.call(I,z,p);break t}z=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=U.payload,p=typeof C=="function"?C.call(I,z,p):C,p==null)break t;z=tt({},z,p);break t;case 2:Ua=!0}}p=r.callback,p!==null&&(t.flags|=64,v&&(t.flags|=8192),v=n.callbacks,v===null?n.callbacks=[p]:v.push(p))}else v={lane:p,tag:r.tag,payload:r.payload,callback:r.callback,next:null},y===null?(g=y=v,c=z):y=y.next=v,u|=p;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;v=r,r=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);y===null&&(c=z),n.baseState=c,n.firstBaseUpdate=g,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),Va|=u,t.lanes=u,t.memoizedState=z}}function Ps(t,e){if(typeof t!="function")throw Error(h(191,t));t.call(e)}function t0(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ps(a[t],e)}var Ba=kt(null),Wi=kt(0);function e0(t,e){t=Ea,it(Wi,t),it(Ba,e),Ea=t|e.baseLanes}function Br(){it(Wi,Ea),it(Ba,Ba.current)}function Yr(){Ea=Wi.current,bt(Ba),bt(Wi)}var Pt=kt(null),ie=null;function Ya(t){var e=t.alternate;it(te,te.current&1),it(Pt,t),ie===null&&(e===null||Ba.current!==null||e.memoizedState!==null)&&(ie=t)}function Zr(t){it(te,te.current),it(Pt,t),ie===null&&(ie=t)}function a0(t){t.tag===22?(it(te,te.current),it(Pt,t),ie===null&&(ie=t)):Za()}function Za(){it(te,te.current),it(Pt,Pt.current)}function Ee(t){bt(Pt),ie===t&&(ie=null),bt(te)}var te=kt(0);function Vn(t,e){it(Pt,Pt.current),it(te,e)}function Lr(t){bt(te),bt(Pt),ie===t&&(ie=null)}function Ii(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fc(a)||dc(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wa=0,W=null,_t=null,Lt=null,Pi=!1,Fl=!1,yl=!1,tu=0,Xn=0,$l=null,Uh=0;function Ut(){throw Error(h(321))}function Gr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Te(t[a],e[a]))return!1;return!0}function Qr(t,e,a,l,n,i){return wa=i,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,A.H=t===null||t.memoizedState===null?B0:Y0,yl=!1,i=a(l,n),yl=!1,Fl&&(i=n0(e,a,l,n)),l0(t),i}function l0(t){A.H=ru;var e=_t!==null&&_t.next!==null;if(wa=0,Lt=_t=W=null,Pi=!1,Xn=0,$l=null,e)throw Error(h(300));t===null||Gt||(t=t.dependencies,t!==null&&Qi(t)&&(Gt=!0))}function n0(t,e,a,l){W=t;var n=0;do{if(Fl&&($l=null),Xn=0,Fl=!1,25<=n)throw Error(h(301));if(n+=1,Lt=_t=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}A.H=Qh,i=e(a,l)}while(Fl);return i}function Rh(){var t=A.H,e=t.useState()[0];return e=typeof e.then=="function"?Kn(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(W.flags|=1024),e}function Vr(){var t=tu!==0;return tu=0,t}function Xr(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Kr(t){if(Pi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Pi=!1}wa=0,Lt=_t=W=null,Fl=!1,Xn=tu=0,$l=null}function se(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?W.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Yt(){if(_t===null){var t=W.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Lt===null?W.memoizedState:Lt.next;if(e!==null)Lt=e,_t=t;else{if(t===null)throw W.alternate===null?Error(h(467)):Error(h(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Lt===null?W.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kn(t){var e=Xn;return Xn+=1,$l===null&&($l=[]),t=Js($l,t,e),e=W,(Lt===null?e.memoizedState:Lt.next)===null&&(e=e.alternate,A.H=e===null||e.memoizedState===null?B0:Y0),t}function au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Kn(t);if(t.$$typeof===N)return;if(t.$$typeof===Dt)return It(t)}throw Error(h(438,String(t)))}function Jr(t){var e=null,a=W.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=W.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=eu(),W.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=X;return e.index++,a}function Sa(t,e){return typeof e=="function"?e(t):e}function lu(t){var e=Yt();return Fr(e,_t,t)}function Fr(t,e,a){var l=t.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var r=u=null,c=null,g=e,y=!1;do{var z=g.lane&-536870913;if(z!==g.lane?(ut&z)===z:(wa&z)===z){var p=g.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),z===ml&&(y=!0);else if((wa&p)===p){g=g.next,p===ml&&(y=!0);continue}else z={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(r=c=z,u=i):c=c.next=z,W.lanes|=p,Va|=p;z=g.action,yl&&a(i,z),i=g.hasEagerState?g.eagerState:a(i,z)}else p={lane:z,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(r=c=p,u=i):c=c.next=p,W.lanes|=z,Va|=z;g=g.next}while(g!==null&&g!==e);if(c===null?u=i:c.next=r,!Te(i,t.memoizedState)&&(Gt=!0,y&&(a=Xl,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function $r(t){var e=Yt(),a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Te(i,e.memoizedState)||(Gt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function i0(t,e,a){var l=W,n=Yt(),i=et;if(i){if(a===void 0)throw Error(h(407));a=a()}else a=e();var u=!Te((_t||n).memoizedState,a);if(u&&(n.memoizedState=a,Gt=!0),n=n.queue,Pr(o0.bind(null,l,n,t),[t]),t=n.getSnapshot!==e||u||Lt!==null&&(Lt.memoizedState.tag&1)!==0,Wl(t?9:8,{destroy:void 0},r0.bind(null,l,n,a,e),null),t){if(l.flags|=2048,Nt===null)throw Error(h(349));i||(wa&127)!==0||u0(l,e,a)}return a}function u0(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=W.updateQueue,e===null?(e=eu(),W.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function r0(t,e,a,l){e.value=a,e.getSnapshot=l,c0(e)&&s0(t)}function o0(t,e,a){return a(function(){c0(e)&&s0(t)})}function c0(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Te(t,a)}catch{return!0}}function s0(t){var e=cl(t,2);e!==null&&ye(e,t,2)}function Wr(t){var e=se();if(typeof t=="function"){var a=t;if(t=a(),yl){qa(!0);try{a()}finally{qa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},e}function f0(t,e,a,l){return t.baseState=a,Fr(t,_t,typeof l=="function"?l:Sa)}function Hh(t,e,a,l,n){if(uu(t))throw Error(h(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};A.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,d0(e,i)):(i.next=a.next,e.pending=a.next=i)}}function d0(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=A.T,u={};u.types=i!==null?i.types:null,A.T=u;try{var r=a(n,l),c=A.S;c!==null&&c(u,r),h0(t,e,r)}catch(g){Ir(t,e,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),A.T=i}}else try{i=a(n,l),h0(t,e,i)}catch(g){Ir(t,e,g)}}function h0(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){p0(t,e,l)},function(l){return Ir(t,e,l)}):p0(t,e,a)}function p0(t,e,a){e.status="fulfilled",e.value=a,m0(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,d0(t,a)))}function Ir(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,m0(e),e=e.next;while(e!==l)}t.action=null}function m0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function g0(t,e){return e}function b0(t,e){if(et){var a=Nt.formState;if(a!==null){t:{var l=W;if(et){if(Tt){e:{for(var n=Tt,i=Ye;n.nodeType!==8;){if(!i){n=null;break e}if(n=Le(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Tt=Le(n.nextSibling),l=n.data==="F!";break t}}Oa(l)}l=!1}l&&(e=a[0])}}return a=se(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g0,lastRenderedState:e},a.queue=l,a=U0.bind(null,W,l),l.dispatch=a,l=Wr(!1),i=no.bind(null,W,!1,l.queue),l=se(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=Hh.bind(null,W,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function x0(t){var e=Yt();return v0(e,_t,t)}function v0(t,e,a){if(e=Fr(t,e,g0)[0],t=lu(Sa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Kn(e)}catch(u){throw u===Kl?Ki:u}else l=e;e=Yt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(W.flags|=2048,Wl(9,{destroy:void 0},Bh.bind(null,n,a),null)),[l,i,t]}function Bh(t,e){t.action=e}function y0(t){var e=Yt(),a=_t;if(a!==null)return v0(e,a,t);Yt(),e=e.memoizedState,a=Yt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Wl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=W.updateQueue,e===null&&(e=eu(),W.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function _0(){return Yt().memoizedState}function nu(t,e,a,l){var n=se();W.flags|=t,n.memoizedState=Wl(1|e,{destroy:void 0},a,l===void 0?null:l)}function iu(t,e,a,l){var n=Yt();l=l===void 0?null:l;var i=n.memoizedState.inst;_t!==null&&l!==null&&Gr(l,_t.memoizedState.deps)?n.memoizedState=Wl(e,i,a,l):(W.flags|=t,n.memoizedState=Wl(1|e,i,a,l))}function w0(t,e){nu(8390656,8,t,e)}function Pr(t,e){iu(2048,8,t,e)}function Yh(t){W.flags|=4;var e=W.updateQueue;if(e===null)e=eu(),W.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function S0(t){var e=Yt().memoizedState;return Yh({ref:e,nextImpl:t}),function(){if((pt&2)!==0)throw Error(h(440));return e.impl.apply(void 0,arguments)}}function N0(t,e){return iu(4,2,t,e)}function T0(t,e){return iu(4,4,t,e)}function E0(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z0(t,e,a){a=a!=null?a.concat([t]):null,iu(4,4,E0.bind(null,e,t),a)}function to(){}function q0(t,e){var a=Yt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Gr(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function M0(t,e){var a=Yt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Gr(e,l[1]))return l[0];if(l=t(),yl){qa(!0);try{t()}finally{qa(!1)}}return a.memoizedState=[l,e],l}function eo(t,e,a){return a===void 0||(wa&1073741824)!==0&&(ut&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Yf(),W.lanes|=t,Va|=t,a)}function A0(t,e,a,l){return Te(a,e)?a:Ba.current!==null?(t=eo(t,a,l),Te(t,e)||(Gt=!0),t):(wa&106)===0||(wa&1073741824)!==0&&(ut&261930)===0?(Gt=!0,t.memoizedState=a):(t=Yf(),W.lanes|=t,Va|=t,e)}function C0(t,e,a,l,n){var i=D.p;D.p=i!==0&&8>i?i:8;var u=A.T,r={};r.types=u!==null?u.types:null,A.T=r,no(t,!1,e,a);try{var c=n(),g=A.S;if(g!==null&&g(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var y=kh(c,l);Jn(t,e,y,Ae(t))}else Jn(t,e,l,Ae(t))}catch(z){Jn(t,e,{then:function(){},status:"rejected",reason:z},Ae())}finally{D.p=i,u!==null&&r.types!==null&&(u.types=r.types),A.T=u}}function Zh(){}function ao(t,e,a,l){if(t.tag!==5)throw Error(h(476));var n=j0(t).queue;C0(t,n,e,St,a===null?Zh:function(){return O0(t),a(l)})}function j0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:St,baseState:St,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:St},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function O0(t){var e=j0(t);e.next===null&&(e=t.alternate.memoizedState),Jn(t,e.next.queue,{},Ae())}function lo(){return It(bn)}function D0(){return Yt().memoizedState}function k0(){return Yt().memoizedState}function Lh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ae();t=Ra(a);var l=Ha(e,t,a);l!==null&&(ye(l,e,a),Ln(l,e,a)),e={cache:Cr()},t.payload=e;return}e=e.return}}function Gh(t,e,a){var l=Ae();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(t)?R0(e,a):(a=wr(t,e,a,l),a!==null&&(ye(a,t,l),H0(a,e,l)))}function U0(t,e,a){var l=Ae();Jn(t,e,a,l)}function Jn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uu(t))R0(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,r=i(u,a);if(n.hasEagerState=!0,n.eagerState=r,Te(r,u))return Ri(t,e,n,0),Nt===null&&Ui(),!1}catch{}finally{}if(a=wr(t,e,n,l),a!==null)return ye(a,t,l),H0(a,e,l),!0}return!1}function no(t,e,a,l){if(l={lane:2,revertLane:Fo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},uu(t)){if(e)throw Error(h(479))}else e=wr(t,a,l,2),e!==null&&ye(e,t,2)}function uu(t){var e=t.alternate;return t===W||e!==null&&e===W}function R0(t,e){Fl=Pi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function H0(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Bc(t,a)}}var ru={readContext:It,use:au,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut,useEffectEvent:Ut},B0={readContext:It,use:au,useCallback:function(t,e){return se().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:w0,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,nu(4194308,4,E0.bind(null,e,t),a)},useLayoutEffect:function(t,e){return nu(4194308,4,t,e)},useInsertionEffect:function(t,e){nu(4,2,t,e)},useMemo:function(t,e){var a=se();e=e===void 0?null:e;var l=t();if(yl){qa(!0);try{t()}finally{qa(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=se();if(a!==void 0){var n=a(e);if(yl){qa(!0);try{a(e)}finally{qa(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Gh.bind(null,W,t),[l.memoizedState,t]},useRef:function(t){var e=se();return t={current:t},e.memoizedState=t},useState:function(t){t=Wr(t);var e=t.queue,a=U0.bind(null,W,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:to,useDeferredValue:function(t,e){var a=se();return eo(a,t,e)},useTransition:function(){var t=Wr(!1);return t=C0.bind(null,W,t.queue,!0,!1),se().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=W,n=se();if(et){if(a===void 0)throw Error(h(407));a=a()}else{if(a=e(),Nt===null)throw Error(h(349));(ut&127)!==0||u0(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,w0(o0.bind(null,l,i,t),[t]),l.flags|=2048,Wl(9,{destroy:void 0},r0.bind(null,l,i,a,e),null),a},useId:function(){var t=se(),e=Nt.identifierPrefix;if(et){var a=la,l=aa;a=(l&~(1<<32-Se(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=tu++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Uh++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:lo,useFormState:b0,useActionState:b0,useOptimistic:function(t){var e=se();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=no.bind(null,W,!0,a),a.dispatch=e,[t,e]},useMemoCache:Jr,useCacheRefresh:function(){return se().memoizedState=Lh.bind(null,W)},useEffectEvent:function(t){var e=se(),a={impl:t};return e.memoizedState=a,function(){if((pt&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}},Y0={readContext:It,use:au,useCallback:q0,useContext:It,useEffect:Pr,useImperativeHandle:z0,useInsertionEffect:N0,useLayoutEffect:T0,useMemo:M0,useReducer:lu,useRef:_0,useState:function(){return lu(Sa)},useDebugValue:to,useDeferredValue:function(t,e){var a=Yt();return A0(a,_t.memoizedState,t,e)},useTransition:function(){var t=lu(Sa)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:Kn(t),e]},useSyncExternalStore:i0,useId:D0,useHostTransitionStatus:lo,useFormState:x0,useActionState:x0,useOptimistic:function(t,e){var a=Yt();return f0(a,_t,t,e)},useMemoCache:Jr,useCacheRefresh:k0,useEffectEvent:S0},Qh={readContext:It,use:au,useCallback:q0,useContext:It,useEffect:Pr,useImperativeHandle:z0,useInsertionEffect:N0,useLayoutEffect:T0,useMemo:M0,useReducer:$r,useRef:_0,useState:function(){return $r(Sa)},useDebugValue:to,useDeferredValue:function(t,e){var a=Yt();return _t===null?eo(a,t,e):A0(a,_t.memoizedState,t,e)},useTransition:function(){var t=$r(Sa)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:Kn(t),e]},useSyncExternalStore:i0,useId:D0,useHostTransitionStatus:lo,useFormState:y0,useActionState:y0,useOptimistic:function(t,e){var a=Yt();return _t!==null?f0(a,_t,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Jr,useCacheRefresh:k0,useEffectEvent:S0};function io(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:tt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uo={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Ae(),n=Ra(l);n.payload=e,a!=null&&(n.callback=a),e=Ha(t,n,l),e!==null&&(ye(e,t,l),Ln(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Ae(),n=Ra(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Ha(t,n,l),e!==null&&(ye(e,t,l),Ln(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ae(),l=Ra(a);l.tag=2,e!=null&&(l.callback=e),e=Ha(t,l,a),e!==null&&(ye(e,t,a),Ln(e,t,a))}};function Z0(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Dn(a,l)||!Dn(n,i):!0}function L0(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&uo.enqueueReplaceState(e,e.state,null)}function _l(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=tt({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function G0(t){ki(t)}function Q0(t){console.error(t)}function V0(t){ki(t)}function ou(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function X0(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ro(t,e,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){ou(t,e)},a}function K0(t){return t=Ra(t),t.tag=3,t}function J0(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){X0(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){X0(e,a,l),typeof n!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function Vh(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&hl(e,a,n,!0),a=Pt.current,a!==null){switch(a.tag){case 31:case 13:case 19:return ie===null?Mu():a.alternate===null&&Rt===0&&(Rt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ji?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Xo(t,l,n)),!1;case 22:return a.flags|=65536,l===Ji?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Xo(t,l,n)),!1}throw Error(h(435,a.tag))}return Xo(t,l,n),Mu(),!1}if(et)return e=Pt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==zr&&(t=Error(h(422),{cause:l}),Rn(Re(t,a)))):(l!==zr&&(e=Error(h(423),{cause:l}),Rn(Re(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=Re(l,a),n=ro(t.stateNode,l,n),Rr(t,n),Rt!==4&&(Rt=2)),!1;var i=Error(h(520),{cause:l});if(i=Re(i,a),ai===null?ai=[i]:ai.push(i),Rt!==4&&(Rt=2),e===null)return!0;l=Re(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=ro(a.stateNode,l,t),Rr(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xa===null||!Xa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=K0(n),J0(n,t,a,l),Rr(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var oo=Error(h(461)),Gt=!1;function Vt(t,e,a,l){e.child=t===null?Is(e,null,a,l):vl(e,t.child,a,l)}function F0(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var r in l)r!=="ref"&&(u[r]=l[r])}else u=l;return pl(e),l=Qr(t,e,a,u,i,n),r=Vr(),t!==null&&!Gt?(Xr(t,e,n),Na(t,e,n)):(et&&r&&Zi(e),e.flags|=1,Vt(t,e,l,n),e.child)}function $0(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Sr(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,W0(t,e,i,l,n)):(t=Bi(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!bo(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Dn,a(u,l)&&t.ref===e.ref)return Na(t,e,n)}return e.flags|=1,t=xa(i,l),t.ref=e.ref,t.return=e,e.child=t}function W0(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Dn(i,l)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=l=i,bo(t,n))(t.flags&131072)!==0&&(Gt=!0);else return e.lanes=t.lanes,Na(t,e,n)}return co(t,e,a,l,n)}function I0(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return P0(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xi(e,i!==null?i.cachePool:null),i!==null?e0(e,i):Br(),a0(e);else return l=e.lanes=536870912,P0(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Xi(e,i.cachePool),e0(e,i),Za(),e.memoizedState=null):(t!==null&&Xi(e,null),Br(),Za());return Vt(t,e,n,a),e.child}function Fn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function P0(t,e,a,l,n){var i=Or();return i=i===null?null:{parent:Zt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Xi(e,null),Br(),a0(e),t!==null&&hl(t,e,l,!0),e.childLanes=n,null}function cu(t,e){return e=su({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function tf(t,e,a){return vl(e,t.child,null,a),t=cu(e,e.pendingProps),t.flags|=2,Ee(e),e.memoizedState=null,t}function Xh(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(et){if(l.mode==="hidden")return t=cu(e,l),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Fn(null,t);if(Zr(e),(t=Tt)?(t=zd(t,Ye),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:aa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Rs(t),a.return=e,e.child=a,Jt=e,Tt=null)):t=null,t===null)throw Oa(e);return e.lanes=536870912,null}return cu(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Zr(e),n)if(e.flags&256)e.flags&=-257,e=tf(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(h(558));else if(Gt||hl(t,e,a,!1),n=(a&t.childLanes)!==0,Gt||n){if(Ba.current===null){if(l=Nt,l!==null&&(u=Yc(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,cl(t,u),ye(l,t,u),oo;Mu()}e=tf(t,e,a)}else t=i.treeContext,Tt=Le(u.nextSibling),Jt=e,et=!0,ja=null,Ye=!1,t!==null&&Ys(e,t),e=cu(e,l),e.flags|=134221824;return e}return t=xa(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Il(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(h(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function co(t,e,a,l,n){return pl(e),a=Qr(t,e,a,l,void 0,n),l=Vr(),t!==null&&!Gt?(Xr(t,e,n),Na(t,e,n)):(et&&l&&Zi(e),e.flags|=1,Vt(t,e,a,n),e.child)}function ef(t,e,a,l,n,i){return pl(e),e.updateQueue=null,a=n0(e,l,a,n),l0(t),l=Vr(),t!==null&&!Gt?(Xr(t,e,i),Na(t,e,i)):(et&&l&&Zi(e),e.flags|=1,Vt(t,e,a,i),e.child)}function af(t,e,a,l,n){if(pl(e),e.stateNode===null){var i=Ll,u=a.contextType;typeof u=="object"&&u!==null&&(i=It(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uo,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},kr(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?It(u):Ll,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(io(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&uo.enqueueReplaceState(i,i.state,null),Qn(e,l,i,n),Gn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var r=e.memoizedProps,c=_l(a,r);i.props=c;var g=i.context,y=a.contextType;u=Ll,typeof y=="object"&&y!==null&&(u=It(y));var z=a.getDerivedStateFromProps;y=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||g!==u)&&L0(e,i,l,u),Ua=!1;var p=e.memoizedState;i.state=p,Qn(e,l,i,n),Gn(),g=e.memoizedState,r||p!==g||Ua?(typeof z=="function"&&(io(e,a,z,l),g=e.memoizedState),(c=Ua||Z0(e,a,c,l,p,g,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=g),i.props=l,i.state=g,i.context=u,l=c):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Ur(t,e),u=e.memoizedProps,y=_l(a,u),i.props=y,z=e.pendingProps,p=i.context,g=a.contextType,c=Ll,typeof g=="object"&&g!==null&&(c=It(g)),r=a.getDerivedStateFromProps,(g=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==z||p!==c)&&L0(e,i,l,c),Ua=!1,p=e.memoizedState,i.state=p,Qn(e,l,i,n),Gn();var v=e.memoizedState;u!==z||p!==v||Ua||t!==null&&t.dependencies!==null&&Qi(t.dependencies)?(typeof r=="function"&&(io(e,a,r,l),v=e.memoizedState),(y=Ua||Z0(e,a,y,l,p,v,c)||t!==null&&t.dependencies!==null&&Qi(t.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,v,c)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=v),i.props=l,i.state=v,i.context=c,l=y):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Il(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=vl(e,t.child,null,n),e.child=vl(e,null,a,n)):Vt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Na(t,e,n),t}function lf(t,e,a,l){return fl(),e.flags|=256,Vt(t,e,a,l),e.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fo(t){return{baseLanes:t,cachePool:Xs()}}function ho(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Me),t}function nf(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(te.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(et){if(n?Ya(e):Za(),(t=Tt)?(t=zd(t,Ye),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:aa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Rs(t),a.return=e,e.child=a,Jt=e,Tt=null)):t=null,t===null)throw Oa(e);return dc(t)?e.lanes=32:e.lanes=536870912,null}return i=l.children,l=l.fallback,n?(Za(),n=e.mode,i=su({mode:"hidden",children:i},n),l=sl(l,n,a,null),i.return=e,l.return=e,i.sibling=l,e.child=i,l=e.child,l.memoizedState=fo(a),l.childLanes=ho(t,u,a),e.memoizedState=so,Fn(null,l)):(Ya(e),po(e,i))}var r=t.memoizedState;if(r!==null){var c=r.dehydrated;if(c!==null)return Kh(t,e,i,u,l,c,r,a)}return n?(Za(),n=l.fallback,i=e.mode,r=t.child,c=r.sibling,l=xa(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&1206910976,c!==null?n=xa(c,n):(n=sl(n,i,a,null),n.flags|=2),n.return=e,l.return=e,l.sibling=n,e.child=l,Fn(null,l),l=e.child,n=t.child.memoizedState,n===null?n=fo(a):(i=n.cachePool,i!==null?(r=Zt._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=Xs(),n={baseLanes:n.baseLanes|a,cachePool:i}),l.memoizedState=n,l.childLanes=ho(t,u,a),e.memoizedState=so,Fn(t.child,l)):(Ya(e),a=t.child,t=a.sibling,a=xa(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function po(t,e){return e=su({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function su(t,e){return t=ge(22,t,null,e),t.lanes=0,t}function fu(t,e,a){return vl(e,t.child,null,a),t=po(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kh(t,e,a,l,n,i,u,r){if(a)return e.flags&256?(Ya(e),e.flags&=-257,fu(t,e,r)):e.memoizedState!==null?(Za(),e.child=t.child,e.flags|=128,null):(Za(),i=n.fallback,u=e.mode,n=su({mode:"visible",children:n.children},u),i=sl(i,u,r,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,vl(e,t.child,null,r),n=e.child,n.memoizedState=fo(r),n.childLanes=ho(t,l,r),e.memoizedState=so,Fn(null,n));if(Ya(e),dc(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var c=l.dgst;return l=c,l!==""&&(n=Error(h(419)),n.stack="",n.digest=l,Rn({value:n,source:null,stack:null})),fu(t,e,r)}if(Gt||hl(t,e,r,!1),l=(r&t.childLanes)!==0,Gt||l){if(Ba.current!==null)return fu(t,e,r);if(l=Nt,l!==null&&(n=Yc(l,r),n!==0&&n!==u.retryLane))throw u.retryLane=n,cl(t,n),ye(l,t,n),oo;return fc(i)||Mu(),fu(t,e,r)}return fc(i)?(e.flags|=192,e.child=t.child,null):(t=u.treeContext,Tt=Le(i.nextSibling),Jt=e,et=!0,ja=null,Ye=!1,t!==null&&Ys(e,t),e=po(e,n.children),e.flags|=134221824,e)}function uf(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Gi(t.return,e,a)}function rf(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&Ii(a)===null&&(e=t),t=t.sibling}return e}function du(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function mo(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function go(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=te.current;if(e.flags&128)return Vn(e,u),null;var r=(u&2)!==0;if(r?(u=u&1|2,e.flags|=128):u&=1,Vn(e,u),n==="backwards"&&t!==null?(mo(t),Vt(t,e,l,a),mo(t)):Vt(t,e,l,a),l=et?Un:0,!r&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uf(t,a,e);else if(t.tag===19)uf(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=rf(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,mo(e)),du(e,!0,n,null,i,l);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Ii(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}du(e,!0,a,null,i,l);break;case"together":du(e,!1,null,null,void 0,l);break;case"independent":e.memoizedState=null;break;default:a=rf(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),du(e,!1,n,a,i,l)}return e.child}function of(t,e,a){var l=e.pendingProps;return Da(e,e.type,l.value),Vt(t,e,l.children,a),e.child}function Na(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(hl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(h(153));if(e.child!==null){for(t=e.child,a=xa(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=xa(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function bo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Qi(t)))}function Jh(t,e,a){switch(e.tag){case 3:ql(e,e.stateNode.containerInfo),Da(e,Zt,t.memoizedState.cache),fl();break;case 27:case 5:yn(e);break;case 4:ql(e,e.stateNode.containerInfo);break;case 10:Da(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Zr(e),null;break;case 13:var l=e.memoizedState;if(l!==null){if(l.dehydrated!==null)return Ya(e),e.flags|=128,null;l=hl(t,e,a,!1);var n=e.child.childLanes;return l||(a&n)!==0?nf(t,e,a):(Ya(e),t=Na(t,e,a),t!==null?t.sibling:null)}Ya(e);break;case 19:if(e.flags&128)return go(t,e,a);if(n=(t.flags&128)!==0,l=(a&e.childLanes)!==0,l||(hl(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return go(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Vn(e,te.current),l)break;return null;case 22:return e.lanes=0,I0(t,e,a,e.pendingProps);case 24:Da(e,Zt,t.memoizedState.cache)}return Na(t,e,a)}function cf(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Gt=!0;else{if(!bo(t,a)&&(e.flags&128)===0)return Gt=!1,Jh(t,e,a);Gt=(t.flags&131072)!==0}else Gt=!1,et&&(e.flags&1048576)!==0&&Bs(e,Un,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=bl(e.elementType),e.type=t,typeof t=="function")Sr(t)?(l=_l(t,l),e.tag=1,e=af(null,e,t,l,a)):(e.tag=0,e=co(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===j){e.tag=11,e=F0(null,e,t,l,a);break t}else if(n===gt){e.tag=14,e=$0(null,e,t,l,a);break t}else if(n===Dt){e.tag=10,e.type=t,e=of(null,e,a);break t}}throw e=Z(t)||t,Error(h(306,e,""))}}return e;case 0:return co(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=_l(l,e.pendingProps),af(t,e,l,n,a);case 3:t:{if(ql(e,e.stateNode.containerInfo),t===null)throw Error(h(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Ur(t,e),Qn(e,l,null,a);var u=e.memoizedState;if(l=u.cache,Da(e,Zt,l),l!==i.cache&&Ar(e,[Zt],a,!0),Gn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=lf(t,e,l,a);break t}else if(l!==n){n=Re(Error(h(424)),e),Rn(n),e=lf(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Tt=Le(t.firstChild),Jt=e,et=!0,ja=null,Ye=!0,a=Is(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(fl(),l===n){e=Na(t,e,a);break t}Vt(t,e,l,a)}e=e.child}return e;case 26:return Il(t,e),t===null?(a=Dd(e.type,null,e.pendingProps,null))?e.memoizedState=a:et||(e.stateNode=hd(e.type,e.pendingProps,ta.current,e)):e.memoizedState=Dd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return yn(e),t===null&&et&&(l=e.stateNode=Ad(e.type,e.pendingProps,ta.current),Jt=e,Ye=!0,n=Tt,Fa(e.type)?(hc=n,Tt=Le(l.firstChild)):Tt=n),Vt(t,e,e.pendingProps.children,a),Il(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&et&&((n=l=Tt)&&(l=Lp(l,e.type,e.pendingProps,Ye),l!==null?(e.stateNode=l,Jt=e,Tt=Le(l.firstChild),Ye=!1,n=!0):n=!1),n||Oa(e)),yn(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,nc(n,i)?l=null:u!==null&&nc(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Qr(t,e,Rh,null,null,a),bn._currentValue=n),Il(t,e),Vt(t,e,l,a),e.child;case 6:return t===null&&et&&((t=a=Tt)&&(a=Gp(a,e.pendingProps,Ye),a!==null?(e.stateNode=a,Jt=e,Tt=null,t=!0):t=!1),t||Oa(e)),null;case 13:return nf(t,e,a);case 4:return ql(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=vl(e,null,l,a):Vt(t,e,l,a),e.child;case 11:return F0(t,e,e.type,e.pendingProps,a);case 7:return l=e.pendingProps,Il(t,e),Vt(t,e,l,a),e.child;case 8:return Vt(t,e,e.pendingProps.children,a),e.child;case 12:return Vt(t,e,e.pendingProps.children,a),e.child;case 10:return of(t,e,a);case 9:return n=e.type._context,l=e.pendingProps.children,pl(e),n=It(n),l=l(n),e.flags|=1,Vt(t,e,l,a),e.child;case 14:return $0(t,e,e.type,e.pendingProps,a);case 15:return W0(t,e,e.type,e.pendingProps,a);case 19:return go(t,e,a);case 31:return Xh(t,e,a);case 22:return I0(t,e,a,e.pendingProps);case 24:return pl(e),l=It(Zt),t===null?(n=Or(),n===null&&(n=Nt,i=Cr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},kr(e),Da(e,Zt,n)):((t.lanes&a)!==0&&(Ur(t,e),Qn(e,null,null,a),Gn()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Da(e,Zt,l)):(l=i.cache,Da(e,Zt,l),l!==n.cache&&Ar(e,[Zt],a,!0))),Vt(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=e.pendingProps,l.name!=null&&l.name!=="auto"?e.flags|=t===null?18882560:18874368:et&&Zi(e),t!==null&&t.memoizedProps.name!==l.name?e.flags|=4194816:Il(t,e),Vt(t,e,l.children,a),e.child;case 29:throw e.pendingProps}throw Error(h(156,e.tag))}function Ta(t){t.flags|=4}function xo(t,e,a,l,n){var i;if((i=(t.mode&32)!==0)&&(i=a===null?Hd(e,l):Hd(e,l)&&(l.src!==a.src||l.srcSet!==a.srcSet)),i){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Qf())t.flags|=8192;else throw xl=Ji,Dr}else t.flags&=-16777217}function sf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Bd(e))if(Qf())t.flags|=8192;else throw xl=Ji,Dr}function hu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Rc():536870912,t.lanes|=e,ln|=e)}function $n(t,e){if(!et)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&1206910976,l|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function Fh(t,e,a){var l=e.pendingProps;switch(Er(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Et(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),_a(Zt),da(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vl(e)?Ta(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qr())),Et(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ta(e),i!==null?(Et(e),sf(e,i)):(Et(e),xo(e,n,null,l,a))):i?i!==t.memoizedState?(Ta(e),Et(e),sf(e,i)):(Et(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ta(e),Et(e),xo(e,n,t,l,a)),null;case 27:if(al(e),a=ta.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ta(e);else{if(!l){if(e.stateNode===null)throw Error(h(166));return Et(e),e.subtreeFlags&=-33554433,null}t=Xt.current,Vl(e)?Zs(e):(t=Ad(n,l,a),e.stateNode=t,Ta(e))}return Et(e),e.subtreeFlags&=-33554433,null;case 5:if(al(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ta(e);else{if(!l){if(e.stateNode===null)throw Error(h(166));return Et(e),e.subtreeFlags&=-33554433,null}if(i=Xt.current,Vl(e))Zs(e);else{var u=ri(ta.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Wt]=e,i[me]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(ae(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ta(e)}}return Et(e),e.subtreeFlags&=-33554433,xo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Ta(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(h(166));if(t=ta.current,Vl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Jt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Wt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||cd(t.nodeValue,a)),t||Oa(e,!0)}else t=ri(t).createTextNode(l),t[Wt]=e,e.stateNode=t}return Et(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=Vl(e),a!==null){if(t===null){if(!l)throw Error(h(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(557));t[Wt]=e}else fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),t=!1}else a=qr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Ee(e),e):(Ee(e),null);if((e.flags&128)!==0)throw Error(h(558))}return Et(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Vl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(h(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[Wt]=e}else fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),n=!1}else n=qr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ee(e),e):(Ee(e),null)}return Ee(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),hu(e,e.updateQueue),Et(e),null);case 4:return da(),t===null&&Po(e.stateNode.containerInfo),e.flags|=67108864,Et(e),null;case 10:return _a(e.type),Et(e),null;case 19:if(Lr(e),l=e.memoizedState,l===null)return Et(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)$n(l,!1);else{if(Rt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Ii(t),i!==null){for(e.flags|=128,$n(l,!1),t=i.updateQueue,e.updateQueue=t,hu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Us(a,t),a=a.sibling;return Vn(e,te.current&1|2),et&&va(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&_e()>Tu&&(e.flags|=128,n=!0,$n(l,!1),e.lanes=4194304)}else{if(!n)if(t=Ii(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,hu(e,t),$n(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!et)return Et(e),null}else 2*_e()-l.renderingStartTime>Tu&&a!==536870912&&(e.flags|=128,n=!0,$n(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}if(l.tail!==null){t=l.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return l.rendering=t,l.tail=t.sibling,l.renderingStartTime=_e(),t.sibling=null,i=te.current,i=n?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!a||et?Vn(e,i):(a=i,it(Pt,e),it(te,a),ie===null&&(ie=e)),et&&va(e,l.treeForkCount),t}return Et(e),null;case 22:case 23:return Ee(e),Yr(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),a=e.updateQueue,a!==null&&hu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&bt(gl),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),_a(Zt),Et(e),null;case 25:return null;case 30:return e.flags|=33554432,Et(e),null}throw Error(h(156,e.tag))}function $h(t,e){switch(Er(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _a(Zt),da(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return al(e),null;case 31:if(e.memoizedState!==null){if(Ee(e),e.alternate===null)throw Error(h(340));fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ee(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(h(340));fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Lr(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return da(),null;case 10:return _a(e.type),null;case 22:case 23:return Ee(e),Yr(),t!==null&&bt(gl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return _a(Zt),null;case 25:return null;default:return null}}function ff(t,e){switch(Er(e),e.tag){case 3:_a(Zt),da();break;case 26:case 27:case 5:al(e);break;case 4:da();break;case 31:e.memoizedState!==null&&Ee(e);break;case 13:Ee(e);break;case 19:Lr(e);break;case 10:_a(e.type);break;case 22:case 23:Ee(e),Yr(),t!==null&&bt(gl);break;case 24:_a(Zt)}}function Wn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(r){vt(e,e.return,r)}}function La(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,n=e;var c=a,g=r;try{g()}catch(y){vt(n,c,y)}}}l=l.next}while(l!==i)}}catch(y){vt(e,e.return,y)}}function df(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{t0(e,a)}catch(l){vt(t,t.return,l)}}}function hf(t,e,a){a.props=_l(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){vt(t,e,l)}}function na(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:var n=t.stateNode,i=ga(t.memoizedProps,n);(n.ref===null||n.ref.name!==i)&&(n.ref=yd(i)),l=n.ref;break;case 7:if(t.stateNode===null){var u=new Ce(t);S(t.child,!1,Yp,u,void 0,void 0),t.stateNode=u}l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(r){vt(t,e,r)}}function ee(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){vt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){vt(t,e,n)}else a.current=null}function pu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)Ed(t.stateNode,e[a])}function pf(t){for(var e=t.return;e!==null&&(yo(e)&&Ed(t.stateNode,e.stateNode),!vo(e));)e=e.return}function In(t){for(var e=t.return;e!==null&&(yo(e)&&Zp(t.stateNode,e.stateNode),!vo(e));)e=e.return}function vo(t){return t.tag===5||t.tag===3||t.tag===27}function yo(t){return t&&t.tag===7&&t.stateNode!==null}function _o(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){vt(t,t.return,n)}}function wo(t,e,a){try{var l=t.stateNode;wp(l,t.type,a,e),l[me]=e}catch(n){vt(t,t.return,n)}}function mf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function So(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||mf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function No(t,e,a,l){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ea)),pu(t,l),ht=!0;else if(n!==4&&(n===27&&(pu(t,l),l=null,Fa(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(No(t,e,a,l),t=t.sibling;t!==null;)No(t,e,a,l),t=t.sibling}function mu(t,e,a,l){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),pu(t,l),ht=!0;else if(n!==4&&(n===27&&(pu(t,l),l=null,Fa(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(mu(t,e,a,l),t=t.sibling;t!==null;)mu(t,e,a,l),t=t.sibling}function gf(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ae(e,l,a),e[Wt]=t,e[me]=a}catch(i){vt(t,t.return,i)}}var gu=!1,ze=null;function bf(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(gu=!0)}var ia=null;function xf(){var t=ia;return ia=null,t}var be=0;function Pl(t,e,a,l,n){return be=0,vf(t.child,e,a,l,n)}function vf(t,e,a,l,n){for(var i=!1;t!==null;){if(t.tag===5){var u=t.stateNode;if(l!==null){var r=rc(u);l.push(r),r.view&&(i=!0)}else i||rc(u).view&&(i=!0);gu=!0,xd(u,be===0?e:e+"_"+be,a),be++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||vf(t.child,e,a,l,n)&&(i=!0));t=t.sibling}return i}function ua(t,e){for(;t!==null;)t.tag===5?vd(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||ua(t.child,e)),t=t.sibling}function bu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(bu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(h(544));var a=e.name;e=ba(e.default,e.share),e!=="none"&&(Pl(t,a,e,null,!1)||ua(t.child,!1))}t=t.sibling}}function To(t,e){if(t.tag===30){var a=t.stateNode,l=t.memoizedProps,n=ga(l,a),i=ba(l.default,a.paired?l.share:l.enter);i!=="none"?Pl(t,n,i,null,!1)?(bu(t),a.paired||e||on(t,l.onEnter)):ua(t.child,!1):bu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)To(t,e),t=t.sibling;else bu(t)}function Eo(t){if(ze!==null&&ze.size!==0){var e=ze;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,l=a.name;if(l!=null&&l!=="auto"){var n=e.get(l);if(n!==void 0){var i=ba(a.default,a.share);if(i!=="none"&&(Pl(t,l,i,null,!1)?(i=t.stateNode,n.paired=i,i.paired=n,on(t,a.onShare)):ua(t.child,!1)),e.delete(l),e.size===0)break}}}Eo(t)}t=t.sibling}}}function zo(t){if(t.tag===30){var e=t.memoizedProps,a=ga(e,t.stateNode),l=ze!==null?ze.get(a):void 0,n=ba(e.default,l!==void 0?e.share:e.exit);n!=="none"&&(Pl(t,a,n,null,!1)?l!==void 0?(n=t.stateNode,l.paired=n,n.paired=l,ze.delete(a),on(t,e.onShare)):on(t,e.onExit):ua(t.child,!1)),ze!==null&&Eo(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zo(t),t=t.sibling;else ze!==null&&Eo(t)}function yf(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=ga(e,t.stateNode);e=ba(e.default,e.update),t.flags&=-5,e!=="none"&&Pl(t,a,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&yf(t);t=t.sibling}}function qo(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,ua(t.child,!1))}qo(t)}t=t.sibling}}function xu(t){if(t.tag===30)t.stateNode.paired=null,ua(t.child,!1),qo(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xu(t),t=t.sibling;else qo(t)}function _f(t){for(t=t.child;t!==null;)t.tag===30?ua(t.child,!1):(t.subtreeFlags&33554432)!==0&&_f(t),t=t.sibling}function Mo(t,e,a,l,n,i,u){for(var r=!1;e!==null;){if(e.tag===5){var c=e.stateNode;if(i!==null&&be<i.length){var g=i[be],y=rc(c);(g.view||y.view)&&(r=!0);var z;if(z=(t.flags&4)===0)if(y.clip)z=!0;else{z=g.rect;var p=y.rect;z=z.y!==p.y||z.x!==p.x||z.height!==p.height||z.width!==p.width}z&&(t.flags|=4),y.abs?y=!g.abs:(g=g.rect,y=y.rect,y=g.height!==y.height||g.width!==y.width),y&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&xd(c,be===0?a:a+"_"+be,n),r&&(t.flags&4)!==0||(ia===null&&(ia=[]),ia.push(c,be===0?l:l+"_"+be,e.memoizedProps)),be++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u?t.flags|=e.flags&32:Mo(t,e.child,a,l,n,i,u)&&(r=!0));e=e.sibling}return r}function wf(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,l=t.stateNode,n=ga(a,l),i=ba(a.default,a.update),u;u=t.memoizedState,t.memoizedState=null,l=t;var r=t.child;be=0,n=Mo(l,r,n,n,i,u,!1),(t.flags&4)!==0&&n&&on(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&wf(t);t=t.sibling}}var Ft=!1,mt=!1,ra=!1,Ao=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,$t=null,oa=!1,Pn=!1,vu=!1,Co=!1;function Wh(t,e,a){if(t=t.containerInfo,ac=xn,t=Es(t),gr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var r=0,c=-1,g=-1,y=0,z=0,p=t,v=null;e:for(;;){for(var C;p!==l||i!==0&&p.nodeType!==3||(c=r+i),p!==u||n!==0&&p.nodeType!==3||(g=r+n),p.nodeType===3&&(r+=p.nodeValue.length),(C=p.firstChild)!==null;)v=p,p=C;for(;;){if(p===t)break e;if(v===l&&++y===i&&(c=r),v===u&&++z===n&&(g=r),(C=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=C}l=c===-1||g===-1?null:{start:c,end:g}}else l=null}l=l||{start:0,end:0}}else l=null;for(lc={focusedElem:t,selectionRange:l},xn=!1,a=(a&335544064)===a,$t=e,e=a?9270:1024;$t!==null;){if(t=$t,a&&(l=t.deletions,l!==null))for(i=0;i<l.length;i++)a&&zo(l[i]);if(t.alternate===null&&(t.flags&2)!==0)a&&bf(t),yu(a);else{if(t.tag===22){if(l=t.alternate,t.memoizedState!==null){l!==null&&l.memoizedState===null&&a&&zo(l),yu(a);continue}else if(l!==null&&l.memoizedState!==null){a&&bf(t),yu(a);continue}}l=t.child,(t.subtreeFlags&e)!==0&&l!==null?(l.return=t,$t=l):(a&&yf(t),yu(a))}}ze=null}function yu(t){for(;$t!==null;){var e=$t,a=t,l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){a=void 0,n=l.memoizedProps,l=l.memoizedState;var i=e.stateNode;try{var u=_l(e.type,n);a=i.getSnapshotBeforeUpdate(u,l),i.__reactInternalSnapshotBeforeUpdate=a}catch(r){vt(e,e.return,r)}}break;case 3:if((n&1024)!==0){if(l=e.stateNode.containerInfo,a=l.nodeType,a===9)sc(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":sc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&l!==null&&(a=ga(l.memoizedProps,l.stateNode),n=e.memoizedProps,n=ba(n.default,n.update),n!=="none"&&Pl(l,a,n,l.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(h(163))}if(l=e.sibling,l!==null){l.return=e.return,$t=l;break}$t=e.return}}function Nf(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),l&4&&Wn(5,a);break;case 1:if(ca(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){vt(a,a.return,u)}else{var n=_l(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){vt(a,a.return,u)}}l&64&&df(a),l&512&&na(a,a.return);break;case 3:if(ca(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{t0(t,e)}catch(u){vt(a,a.return,u)}}break;case 27:e===null&&l&4&&gf(a);case 26:case 5:ca(t,a),e===null&&l&4&&_o(a),l&512&&na(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),l&4&&qf(t,a);break;case 13:ca(t,a),l&4&&Mf(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cp.bind(null,a),Qp(t,a))));break;case 22:if(l=a.memoizedState!==null||Ft,!l){var i=e!==null&&e.memoizedState!==null||mt;e=Ft,n=mt,Ft=l,(mt=i)&&!n?(l=2,(a.subtreeFlags&8772)!==0&&(l|=1),Fe(t,a,l)):ca(t,a),Ft=e,mt=n}break;case 30:ca(t,a),l&512&&na(a,a.return);break;case 7:l&512&&na(a,a.return);default:ca(t,a)}}function jo(t,e){for(t=t.child;t!==null;)Tf(t,e),t=t.sibling}function Tf(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var l=a.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var n=t.stateNode,i=t.memoizedProps.style,u=i!=null&&i.hasOwnProperty("display")?i.display:null;n.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(c){vt(t,t.return,c)}Oo(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,ht=!0}catch(c){vt(t,t.return,c)}break;case 18:try{var r=t.stateNode;e?bd(r,!0):bd(t.stateNode,!1)}catch(c){vt(t,t.return,c)}break;case 22:case 23:t.memoizedState===null&&jo(t,e);break;default:jo(t,e)}}function Oo(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,l=e;switch(a.tag){case 4:Tf(a,l);break t;case 22:a.memoizedState===null&&Oo(a,l);break t;default:Oo(a,l)}}t=t.sibling}}function Ef(t){var e=t.alternate;e!==null&&(t.alternate=null,Ef(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ti(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var zt=null,xe=!1;function Ke(t,e,a){for(a=a.child;a!==null;)zf(t,e,a),a=a.sibling}function zf(t,e,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(wn,a)}catch{}switch(a.tag){case 26:mt||ee(a,e),Ke(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!mt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mt||ee(a,e),In(a);var l=zt,n=xe;Fa(a.type)&&(zt=a.stateNode,xe=!1),Ke(t,e,a),Cd(a.stateNode,a.type,a.memoizedProps),zt=l,xe=n;break;case 5:mt||ee(a,e),In(a);case 6:if(a.tag===6&&In(a),l=zt,n=xe,zt=null,Ke(t,e,a),zt=l,xe=n,zt!==null)if(xe)try{(zt.nodeType===9?zt.body:zt.nodeName==="HTML"?zt.ownerDocument.body:zt).removeChild(a.stateNode),ht=!0}catch(i){vt(a,e,i)}else try{zt.removeChild(a.stateNode),ht=!0}catch(i){vt(a,e,i)}break;case 18:zt!==null&&(xe?(t=zt,gd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vn(t)):gd(zt,a.stateNode));break;case 4:l=zt,n=xe,zt=a.stateNode.containerInfo,xe=!0,Ke(t,e,a),zt=l,xe=n;break;case 0:case 11:case 14:case 15:La(2,a,e),mt||La(4,a,e),Ke(t,e,a);break;case 1:mt||(ee(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&hf(a,e,l)),Ke(t,e,a);break;case 21:Ke(t,e,a);break;case 22:mt=(l=mt)||a.memoizedState!==null,Ke(t,e,a),mt=l;break;case 30:ee(a,e),Ke(t,e,a);break;case 7:mt||ee(a,e),Ke(t,e,a);break;default:Ke(t,e,a)}}function qf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vn(t)}catch(a){vt(e,e.return,a)}}}function Mf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vn(t)}catch(a){vt(e,e.return,a)}}function Ih(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Sf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Sf),e;default:throw Error(h(435,t.tag))}}function _u(t,e){var a=Ih(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=sp.bind(null,t,l);l.then(n,n)}})}function fe(t,e,a){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var i=l[n],u=t,r=e,c=r;t:for(;c!==null;){switch(c.tag){case 27:if(Fa(c.type)){zt=c.stateNode,xe=!1;break t}break;case 5:zt=c.stateNode,xe=!1;break t;case 3:case 4:zt=c.stateNode.containerInfo,xe=!0;break t}c=c.return}if(zt===null)throw Error(h(160));zf(u,r,i),zt=null,xe=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Af(e,t,a),e=e.sibling}var Je=null;function Af(t,e,a){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var u=l[i];u.ref.impl=u.nextImpl}fe(e,t,a),de(t),n&4&&(La(3,t,t.return),Wn(3,t),La(5,t,t.return));break;case 1:fe(e,t,a),de(t),n&512&&(mt||l===null||ee(l,l.return)),n&64&&Ft&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(i=Je,fe(e,t,a),de(t),n&512&&(mt||l===null||ee(l,l.return)),n&4)if(n=l!==null?l.memoizedState:null,a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null)if(Ft)t.stateNode=hd(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,a=t.memoizedProps,n=i.ownerDocument||i;e:switch(e){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Tn]||l[Wt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(e),n.head.insertBefore(l,n.querySelector("head > title"))),ae(l,e,a),l[Wt]=t,Kt(l),e=l;break t;case"link":if(i=Rd("link","href",n).get(e+(a.href||""))){for(u=0;u<i.length;u++)if(l=i[u],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(u,1);break e}}l=n.createElement(e),ae(l,e,a),n.head.appendChild(l);break;case"meta":if(i=Rd("meta","content",n).get(e+(a.content||""))){for(u=0;u<i.length;u++)if(l=i[u],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(u,1);break e}}l=n.createElement(e),ae(l,e,a),n.head.appendChild(l);break;default:throw Error(h(468,e))}l[Wt]=t,Kt(l),e=l}t.stateNode=e}else Ft||bc(i,t.type,t.stateNode);else t.stateNode=Ud(i,a,t.memoizedProps);else n!==a?(n===null?(e=l.stateNode,e===null||mt||e.parentNode.removeChild(e)):n.count--,a===null?Ft||bc(i,t.type,t.stateNode):Ud(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&wo(t,t.memoizedProps,l.memoizedProps);break;case 27:fe(e,t,a),de(t),n&512&&(mt||l===null||ee(l,l.return)),l!==null&&n&4&&wo(t,t.memoizedProps,l.memoizedProps);break;case 5:if(i=ra,ra=!1,fe(e,t,a),ra=i,de(t),n&512&&(mt||l===null||ee(l,l.return)),t.flags&32){e=t.stateNode;try{kl(e,""),ht=!0}catch(y){vt(t,t.return,y)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,wo(t,e,l!==null?l.memoizedProps:e)),n&1024&&(Ao=!0);break;case 6:if(fe(e,t,a),de(t),n&4){if(t.stateNode===null)throw Error(h(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,ht=!0}catch(y){vt(t,t.return,y)}}break;case 3:if(ht=!1,Uu=null,i=Je,Je=oi(e.containerInfo),fe(e,t,a),Je=i,de(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{vn(e.containerInfo)}catch(y){vt(t,t.return,y)}Ao&&(Ao=!1,Cf(t)),ht=!1;break;case 4:n=ra,ra=Ft,l=$c(),i=Je,Je=oi(t.stateNode.containerInfo),fe(e,t,a),de(t),Je=i,ht&&Pn&&(vu=!0),ht=l,ra=n;break;case 12:fe(e,t,a),de(t);break;case 31:fe(e,t,a),de(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,_u(t,e)));break;case 13:fe(e,t,a),de(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Nu=_e()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,_u(t,e)));break;case 22:i=t.memoizedState!==null,u=l!==null&&l.memoizedState!==null;var r=Ft,c=mt,g=ra;Ft=r||i,ra=g||i,mt=c||u,fe(e,t,a),mt=c,ra=g,Ft=r,de(t),n&8192&&(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||l===null||u||Ft||mt||(e=u||mt,a=Ft,l=mt,Ft=i||Ft,mt=e,Ga(t,2),Ft=a,mt=l),!i&&ra||jo(t,i)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,_u(t,a))));break;case 19:fe(e,t,a),de(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,_u(t,e)));break;case 30:n&512&&(mt||l===null||ee(l,l.return)),n=$c(),i=Pn,u=(a&335544064)===a,r=t.memoizedProps,Pn=u&&ba(r.default,r.update)!=="none",fe(e,t,a),de(t),u&&l!==null&&ht&&(t.flags|=4),Pn=i,ht=n;break;case 21:break;case 7:n&512&&(mt||l===null||ee(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=t);default:fe(e,t,a),de(t)}}function de(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(mf(l)){a=l;break}l=l.return}l=null;for(var n=t.return;n!==null;){if(yo(n)){var i=n.stateNode;l===null?l=[i]:l.push(i)}if(vo(n))break;n=n.return}var u=l;if(a==null)throw Error(h(160));switch(a.tag){case 27:var r=a.stateNode,c=So(t);mu(t,c,r,u);break;case 5:var g=a.stateNode;a.flags&32&&(kl(g,""),a.flags&=-33);var y=So(t);mu(t,y,g,u);break;case 3:case 4:var z=a.stateNode.containerInfo,p=So(t);No(t,p,z,u);break;default:throw Error(h(161))}}catch(v){vt(t,t.return,v)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Cf(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,xn=!0,e.reset(),xn=!1),t=t.sibling}}function tn(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)jf(e,t),e=e.sibling;else wf(e)}function jf(t,e){var a=t.alternate;if(a===null)To(t,!1);else switch(t.tag){case 3:if(Co=oa=!1,xf(),tn(e,t),!oa&&!vu){if(t=ia,t!==null)for(var l=0;l<t.length;l+=3){a=t[l];var n=t[l+1];vd(a,t[l+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Co=!0}ia=null;break;case 5:tn(e,t);break;case 4:l=oa,oa=!1,tn(e,t),oa&&(vu=!0),oa=l;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?To(t,!1):tn(e,t));break;case 30:l=oa,n=xf(),oa=!1,tn(e,t),oa&&(t.flags|=4);var i=t.memoizedProps,u=t.stateNode;e=ga(i,u),u=ga(a.memoizedProps,u);var r=ba(i.default,i.update);r==="none"?e=!1:(i=a.memoizedState,a.memoizedState=null,a=t.child,be=0,e=Mo(t,a,e,u,r,i,!0),be!==(i===null?0:i.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(on(t,t.memoizedProps.onUpdate),ia=n):n!==null&&(n.push.apply(n,ia),ia=n),oa=(t.flags&32)!==0?!0:l;break;default:tn(e,t)}}function ca(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Nf(t,e.alternate,e),e=e.sibling}function Ga(t,e){for(t=t.child;t!==null;){var a=t,l=e;switch(a.tag){case 0:case 11:case 14:case 15:La(4,a,a.return),Ga(a,l);break;case 1:ee(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&hf(a,a.return,n),Ga(a,l);break;case 27:(l&2)!==0&&Cd(a.stateNode,a.type,a.memoizedProps);case 5:ee(a,a.return),a.tag!==5&&a.tag!==27||In(a),Ga(a,l);break;case 6:In(a);break;case 26:ee(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||mt||n.parentNode.removeChild(n),Ga(a,l);break;case 22:a.memoizedState===null&&Ga(a,l);break;case 30:ee(a,a.return),Ga(a,l);break;case 7:ee(a,a.return);default:Ga(a,l)}t=t.sibling}}function Fe(t,e,a){for(a=(e.subtreeFlags&8772)!==0?a:a&-2,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags,r=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:Fe(n,i,a),Wn(4,i);break;case 1:if(Fe(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){vt(l,l.return,y)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)Ps(g[n],c)}catch(y){vt(l,l.return,y)}}r&&u&64&&df(i),na(i,i.return);break;case 27:(a&2)!==0&&gf(i);case 5:i.tag!==5&&i.tag!==27||pf(i),Fe(n,i,a),r&&l===null&&u&4&&_o(i),na(i,i.return);break;case 6:pf(i);break;case 26:c=i.stateNode,i.memoizedState!==null||c===null||Ft||bc(oi(c.ownerDocument),i.type,c),Fe(n,i,a),r&&l===null&&u&4&&_o(i),na(i,i.return);break;case 12:Fe(n,i,a);break;case 31:Fe(n,i,a),r&&u&4&&qf(n,i);break;case 13:Fe(n,i,a),r&&u&4&&Mf(n,i);break;case 22:i.memoizedState===null&&Fe(n,i,a),na(i,i.return);break;case 30:Fe(n,i,a),na(i,i.return);break;case 7:na(i,i.return);default:Fe(n,i,a)}e=e.sibling}}function Do(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Hn(a))}function ko(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hn(t))}function Ze(t,e,a,l){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)Of(t,e,a,l),e=e.sibling;else n&&_f(e)}function Of(t,e,a,l){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&xu(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ze(t,e,a,l),i&2048&&Wn(9,e);break;case 1:Ze(t,e,a,l);break;case 3:Ze(t,e,a,l),n&&Co&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&Hn(i)));break;case 12:if(i&2048){Ze(t,e,a,l),i=e.stateNode;try{var u=e.memoizedProps,r=u.id,c=u.onPostCommit;typeof c=="function"&&c(r,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(g){vt(e,e.return,g)}}else Ze(t,e,a,l);break;case 31:Ze(t,e,a,l);break;case 13:Ze(t,e,a,l);break;case 23:break;case 22:u=e.stateNode,r=e.alternate,e.memoizedState!==null?(n&&r!==null&&r.memoizedState===null&&xu(r),u._visibility&2?Ze(t,e,a,l):ti(t,e)):(n&&r!==null&&r.memoizedState!==null&&xu(e),u._visibility&2?Ze(t,e,a,l):(u._visibility|=2,en(t,e,a,l,(e.subtreeFlags&10256)!==0||!1))),i&2048&&Do(r,e);break;case 24:Ze(t,e,a,l),i&2048&&ko(e.alternate,e);break;case 30:n&&(i=e.alternate,i!==null&&(ua(i.child,!0),ua(e.child,!0))),Ze(t,e,a,l);break;default:Ze(t,e,a,l)}}function en(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,r=a,c=l,g=u.flags;switch(u.tag){case 0:case 11:case 15:en(i,u,r,c,n),Wn(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?en(i,u,r,c,n):ti(i,u):(y._visibility|=2,en(i,u,r,c,n)),n&&g&2048&&Do(u.alternate,u);break;case 24:en(i,u,r,c,n),n&&g&2048&&ko(u.alternate,u);break;default:en(i,u,r,c,n)}e=e.sibling}}function ti(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:ti(a,l),n&2048&&Do(l.alternate,l);break;case 24:ti(a,l),n&2048&&ko(l.alternate,l);break;default:ti(a,l)}e=e.sibling}}var wl=8192;function Sl(t,e,a){if(t.subtreeFlags&wl)for(t=t.child;t!==null;)Df(t,e,a),t=t.sibling}function Df(t,e,a){switch(t.tag){case 26:Sl(t,e,a),t.flags&wl&&(t.memoizedState!==null?nm(a,Je,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Zd(a,t)));break;case 5:Sl(t,e,a),t.flags&wl&&(t=t.stateNode,(e&335544128)===e&&Zd(a,t));break;case 3:case 4:var l=Je;Je=oi(t.stateNode.containerInfo),Sl(t,e,a),Je=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=wl,wl=16777216,Sl(t,e,a),wl=l):Sl(t,e,a));break;case 30:if((t.flags&wl)!==0&&(l=t.memoizedProps.name,l!=null&&l!=="auto")){var n=t.stateNode;n.paired=null,ze===null&&(ze=new Map),ze.set(l,n)}Sl(t,e,a);break;default:Sl(t,e,a)}}function kf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ei(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];$t=l,Rf(l,t)}kf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uf(t),t=t.sibling}function Uf(t){switch(t.tag){case 0:case 11:case 15:ei(t),t.flags&2048&&La(9,t,t.return);break;case 3:ei(t);break;case 12:ei(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,wu(t)):ei(t);break;default:ei(t)}}function wu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];$t=l,Rf(l,t)}kf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:La(8,e,e.return),wu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,wu(e));break;default:wu(e)}t=t.sibling}}function Rf(t,e){for(;$t!==null;){var a=$t;switch(a.tag){case 0:case 11:case 15:La(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Hn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,$t=l;else t:for(a=t;$t!==null;){l=$t;var n=l.sibling,i=l.return;if(Ef(l),l===a){$t=null;break t}if(n!==null){n.return=i,$t=n;break t}$t=i}}}var Ph={getCacheForType:function(t){var e=It(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return It(Zt).controller.signal}},tp=typeof WeakMap=="function"?WeakMap:Map,pt=0,Nt=null,lt=null,ut=0,xt=0,qe=null,Qa=!1,an=!1,Uo=!1,Ea=0,Rt=0,Va=0,Nl=0,Su=0,Me=0,ln=0,ai=null,ve=null,Ro=!1,Nu=0,Hf=0,Tu=1/0,Eu=null,Xa=null,Ct=0,$e=null,Tl=null,sa=0,Ho=0,Bo=null,Bf=null,nn=null,un=null,rn=null,li=0,zu=null;function Ae(){return(pt&2)!==0&&ut!==0?ut&-ut:A.T!==null?Fo():Zc()}function Yf(){if(Me===0)if((ut&536870912)===0||et){var t=_i;_i<<=1,(_i&3932160)===0&&(_i=262144),Me=t}else Me=536870912;return t=Pt.current,t!==null&&(t.flags|=32),Me}function on(t,e){if(e!=null){var a=t.stateNode,l=a.ref;l===null&&(l=a.ref=yd(ga(t.memoizedProps,a))),un===null&&(un=[]),un.push(e.bind(null,l))}}function ye(t,e,a){(t===Nt&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(cn(t,0),Ka(t,ut,Me,!1)),Nn(t,a),((pt&2)===0||t!==Nt)&&(t===Nt&&((pt&2)===0&&(Nl|=a),Rt===4&&Ka(t,ut,Me,!1)),fa(t))}function Zf(t,e,a){if((pt&6)!==0)throw Error(h(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Sn(t,e),n=l?lp(t,e):Zo(t,e,!0),i=l;do{if(n===0){an&&!l&&Ka(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!ep(a)){n=Zo(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var r=t;n=ai;var c=r.current.memoizedState.isDehydrated;if(c&&(cn(r,u).flags|=256),u=Zo(r,u,!1),u!==2&&u!==6){if(Uo&&!c){r.errorRecoveryDisabledLanes|=i,Nl|=i,n=4;break t}i=ve,ve=n,i!==null&&(ve===null?ve=i:ve.push.apply(ve,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){cn(t,0),Ka(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(h(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ka(l,e,Me,!Qa);break t;case 2:ve=null;break;case 3:case 5:break;default:throw Error(h(329))}if((e&62914560)===e&&(n=Nu+300-_e(),10<n)){if(Ka(l,e,Me,!Qa),Si(l,0,!0)!==0)break t;sa=e,l.timeoutHandle=uc(Lf.bind(null,l,a,ve,Eu,Ro,e,Me,Nl,ln,Qa,i,"Throttled",-0,0),n);break t}Lf(l,a,ve,Eu,Ro,e,Me,Nl,ln,Qa,i,null,-0,0)}}break}while(!0);fa(t)}function Lf(t,e,a,l,n,i,u,r,c,g,y,z,p,v){t.timeoutHandle=-1;var C=e.subtreeFlags,U=(i&335544064)===i;if(z=null,(U||C&8192||(C&16785408)===16785408)&&(z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},ze=null,Df(e,i,z),U&&(C=z,U=t.containerInfo,U=(U.nodeType===9?U:U.ownerDocument).__reactViewTransition,U!=null&&(C.count++,C.waitingForViewTransition=!0,C=fi.bind(C),U.finished.then(C,C))),C=(i&62914560)===i?Nu-_e():(i&4194048)===i?Hf-_e():0,C=im(z,C),C!==null)){sa=i,t.cancelPendingCommit=C($f.bind(null,t,e,i,a,l,n,u,r,c,g,y,z,null,p,v)),Ka(t,i,u,!g);return}$f(t,e,i,a,l,n,u,r,c,g,y,z)}function ep(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Te(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ka(t,e,a,l){e=Uc(t,e),e&=~Su,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-Se(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Hc(t,a,e)}function qu(){return(pt&6)===0?(ni(0),!1):!0}function Yo(){if(lt!==null){if(xt===0)var t=lt.return;else t=lt,ya=dl=null,Kr(t),Jl=null,Zn=0,t=lt;for(;t!==null;)ff(t.alternate,t),t=t.return;lt=null}}function cn(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Tp(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Yo(),Nt=t,lt=a=xa(t.current,null),ut=e,xt=0,qe=null,Qa=!1,an=Sn(t,e),Uo=!1,ln=Me=Su=Nl=Va=Rt=0,ve=ai=null,Ro=!1,Ea=Uc(t,e),Ui(),a}function Gf(t,e){W=null,A.H=ru,e===Kl||e===Ki?(e=Fs(),xt=3):e===Dr?(e=Fs(),xt=4):xt=e===oo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,qe=e,lt===null&&(Rt=1,ou(t,Re(e,t.current)))}function Qf(){var t=Pt.current;return t===null?!0:(ut&4194048)===ut?ie===null:(ut&62914560)===ut||(ut&536870912)!==0?t===ie:!1}function Vf(){var t=A.H;return A.H=ru,t===null?ru:t}function Xf(){var t=A.A;return A.A=Ph,t}function Mu(){Rt=4,Qa||(ut&4194048)!==ut&&Pt.current!==null||(an=!0),(Va&134217727)===0&&(Nl&134217727)===0||Nt===null||Ka(Nt,ut,Me,!1)}function Zo(t,e,a){var l=pt;pt|=2;var n=Vf(),i=Xf();(Nt!==t||ut!==e)&&(Eu=null,cn(t,e)),e=!1;var u=Rt;t:do try{if(xt!==0&&lt!==null){var r=lt,c=qe;switch(xt){case 8:Yo(),u=6;break t;case 3:case 2:case 9:case 6:Pt.current===null&&(e=!0);var g=xt;if(xt=0,qe=null,sn(t,r,c,g),a&&an){u=0;break t}break;default:g=xt,xt=0,qe=null,sn(t,r,c,g)}}ap(),u=Rt;break}catch(y){Gf(t,y)}while(!0);return e&&t.shellSuspendCounter++,ya=dl=null,pt=l,A.H=n,A.A=i,lt===null&&(Nt=null,ut=0,Ui()),u}function ap(){for(;lt!==null;)Kf(lt)}function lp(t,e){var a=pt;pt|=2;var l=Vf(),n=Xf();Nt!==t||ut!==e?(Eu=null,Tu=_e()+500,cn(t,e)):an=Sn(t,e);t:do try{if(xt!==0&&lt!==null){e=lt;var i=qe;e:switch(xt){case 1:xt=0,qe=null,sn(t,e,i,1);break;case 2:case 9:if(Ks(i)){xt=0,qe=null,Jf(e);break}e=function(){xt!==2&&xt!==9||Nt!==t||(xt=7),fa(t)},i.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:Ks(i)?(xt=0,qe=null,Jf(e)):(xt=0,qe=null,sn(t,e,i,7));break;case 5:var u=null;switch(lt.tag){case 26:u=lt.memoizedState;case 5:case 27:var r=lt;if(u?Bd(u):r.stateNode.complete){xt=0,qe=null;var c=r.sibling;if(c!==null)lt=c;else{var g=r.return;g!==null?(lt=g,Au(g)):lt=null}break e}}xt=0,qe=null,sn(t,e,i,5);break;case 6:xt=0,qe=null,sn(t,e,i,6);break;case 8:Yo(),Rt=6;break t;default:throw Error(h(462))}}np();break}catch(y){Gf(t,y)}while(!0);return ya=dl=null,A.H=l,A.A=n,pt=a,lt!==null?0:(Nt=null,ut=0,Ui(),Rt)}function np(){for(;lt!==null&&!_1();)Kf(lt)}function Kf(t){var e=cf(t.alternate,t,Ea);t.memoizedProps=t.pendingProps,e===null?Au(t):lt=e}function Jf(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=ef(a,e,e.pendingProps,e.type,void 0,ut);break;case 11:e=ef(a,e,e.pendingProps,e.type.render,e.ref,ut);break;case 5:Kr(e);var l=e;l===Jt&&(et?(Li(l),l.tag===5&&l.stateNode!=null&&(Tt=l.stateNode)):(Li(l),et=!0));default:ff(a,e),e=lt=Us(e,Ea),e=cf(a,e,Ea)}t.memoizedProps=t.pendingProps,e===null?Au(t):lt=e}function sn(t,e,a,l){ya=dl=null,Kr(e),Jl=null,Zn=0;var n=e.return;try{if(Vh(t,n,e,a,ut)){Rt=1,ou(t,Re(a,t.current)),lt=null;return}}catch(i){if(n!==null)throw lt=n,i;Rt=1,ou(t,Re(a,t.current)),lt=null;return}e.flags&32768?(et||l===1?t=!0:an||(ut&536870912)!==0?t=!1:(Qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=Pt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ff(e,t)):Au(e)}function Au(t){var e=t;do{if((e.flags&32768)!==0){Ff(e,Qa);return}t=e.return;var a=Fh(e.alternate,e,Ea);if(a!==null){lt=a;return}if(e=e.sibling,e!==null){lt=e;return}lt=e=t}while(e!==null);Rt===0&&(Rt=5)}function Ff(t,e){do{var a=$h(t.alternate,t);if(a!==null){a.flags&=32767,lt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){lt=t;return}lt=t=a}while(t!==null);Rt=6,lt=null}function $f(t,e,a,l,n,i,u,r,c,g,y,z){t.cancelPendingCommit=null;do Cu();while(Ct!==0);if((pt&6)!==0)throw Error(h(327));if(e!==null){if(e===t.current)throw Error(h(177));t===Nt&&(lt=Nt=null,ut=0),Tl=e,$e=t,sa=a,Bo=n,Bf=l,ip(t,e,a,u,r,c,z)}}function ip(t,e,a,l,n,i,u){var r=e.lanes|e.childLanes;if(Ho=r,r|=_r,C1(t,a,r,l,n,i),un=null,(a&335544064)===a?(rn=Oh(t),l=10262):(rn=null,l=10256),(e.subtreeFlags&l)!==0||(e.flags&l)!==0?(t.callbackNode=null,t.callbackPriority=0,fp(vi,function(){return Vo(),null})):(t.callbackNode=null,t.callbackPriority=0),gu=!1,l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,n=D.p,D.p=2,i=pt,pt|=4;try{Wh(t,e,a)}finally{pt=i,D.p=n,A.T=l}}Ct=1,gu?nn=Cp(u,t.containerInfo,rn,Lo,Go,rp,Qo,Vo,up):(Lo(),Go(),Qo())}function up(t){if(Ct!==0){var e=$e.onRecoverableError;e(t,{componentStack:null})}}function rp(){Ct===3&&(Ct=0,jf(Tl,$e),Ct=4)}function Lo(){if(Ct===1){Ct=0;var t=$e,e=Tl,a=sa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=A.T,A.T=null;var n=D.p;D.p=2;var i=pt;pt|=4;try{Pn=vu=!1,Af(e,t,a),a=lc;var u=Es(t.containerInfo),r=a.focusedElem,c=a.selectionRange;if(u!==r&&r&&r.ownerDocument&&Ts(r.ownerDocument.documentElement,r)){if(c!==null&&gr(r)){var g=c.start,y=c.end;if(y===void 0&&(y=g),"selectionStart"in r)r.selectionStart=g,r.selectionEnd=Math.min(y,r.value.length);else{var z=r.ownerDocument||document,p=z&&z.defaultView||window;if(p.getSelection){var v=p.getSelection(),C=r.textContent.length,U=Math.min(c.start,C),I=c.end===void 0?U:Math.min(c.end,C);!v.extend&&U>I&&(u=I,I=U,U=u);var m=Ns(r,U),f=Ns(r,I);if(m&&f&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)){var x=z.createRange();x.setStart(m.node,m.offset),v.removeAllRanges(),U>I?(v.addRange(x),v.extend(f.node,f.offset)):(x.setEnd(f.node,f.offset),v.addRange(x))}}}}for(z=[],v=r;v=v.parentNode;)v.nodeType===1&&z.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<z.length;r++){var T=z[r];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}xn=!!ac,lc=ac=null}finally{pt=i,D.p=n,A.T=l}}t.current=e,Ct=2}}function Go(){if(Ct===2){Ct=0;var t=$e,e=Tl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var l=D.p;D.p=2;var n=pt;pt|=4;try{Nf(t,e.alternate,e)}finally{pt=n,D.p=l,A.T=a}}Ct=3}}function Qo(){if(Ct===4||Ct===3){Ct=0;var t=nn;nn=null,w1();var e=$e,a=Tl,l=sa,n=Bf,i=(l&335544064)===l?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Ct=5:(Ct=0,Tl=$e=null,Wf(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(Xa=null),Iu(l),a=a.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(wn,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=A.T,i=D.p,D.p=2,A.T=null;try{for(var u=e.onRecoverableError,r=0;r<n.length;r++){var c=n[r];u(c.value,{componentStack:c.stack})}}finally{A.T=a,D.p=i}}if(n=un,u=rn,rn=null,n!==null&&(un=null,u===null&&(u=[]),t!==null))for(c=0;c<n.length;c++)a=(0,n[c])(u),a!==void 0&&t.finished.finally(a);(sa&3)!==0&&Cu(),fa(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===zu?li++:(li=0,zu=e):(li=0,zu=null),ni(0)}}function Wf(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Hn(e)))}function Cu(){return nn!==null&&(nn.skipTransition(),nn=null),Lo(),Go(),Qo(),Vo()}function Vo(){if(Ct!==5)return!1;var t=$e,e=Ho;Ho=0;var a=Iu(sa),l=A.T,n=D.p;try{D.p=32>a?32:a,A.T=null,a=Bo,Bo=null;var i=$e,u=sa;if(Ct=0,Tl=$e=null,sa=0,(pt&6)!==0)throw Error(h(331));var r=pt;if(pt|=4,Uf(i.current),Of(i,i.current,u,a),pt=r,ni(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(wn,i)}catch{}return!0}finally{D.p=n,A.T=l,Wf(t,e)}}function If(t,e,a){e=Re(a,e),e=ro(t.stateNode,e,2),t=Ha(t,e,2),t!==null&&(Nn(t,2),fa(t))}function vt(t,e,a){if(t.tag===3)If(t,t,a);else for(;e!==null;){if(e.tag===3){If(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))){t=Re(a,t),a=K0(2),l=Ha(e,a,2),l!==null&&(J0(a,l,e,t),Nn(l,2),fa(l));break}}e=e.return}}function Xo(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new tp;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Uo=!0,n.add(a),t=op.bind(null,t,e,a),e.then(t,t))}function op(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Nt===t&&(ut&a)===a&&((Rt===4||Rt===3&&(ut&62914560)===ut&&300>_e()-Nu)&&(pt&2)===0?cn(t,0):Su|=a,ln===ut&&(ln=0)),fa(t)}function Pf(t,e){e===0&&(e=Rc()),t=cl(t,e),t!==null&&(Nn(t,e),fa(t))}function cp(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Pf(t,a)}function sp(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(h(314))}l!==null&&l.delete(e),Pf(t,a)}function fp(t,e){return Ju(t,e)}var fn=null,dn=null,Ko=!1,ju=!1,Jo=!1,Ja=0;function fa(t){t!==dn&&t.next===null&&(dn===null?fn=dn=t:dn=dn.next=t),ju=!0,Ko||(Ko=!0,hp())}function ni(t,e){if(!Jo&&ju){Jo=!0;do for(var a=!1,l=fn;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-Se(42|t)+1)-1,i&=n&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,ld(l,i))}else i=ut,i=Si(l,l===Nt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Sn(l,i)||(a=!0,ld(l,i));l=l.next}while(a);Jo=!1}}function dp(){td()}function td(){ju=Ko=!1;var t=0;Ja!==0&&Np()&&(t=Ja);for(var e=_e(),a=null,l=fn;l!==null;){var n=l.next,i=ed(l,e);i===0?(l.next=null,a===null?fn=n:a.next=n,n===null&&(dn=a)):(a=l,(t!==0||(i&3)!==0)&&(ju=!0)),l=n}Ct!==0&&Ct!==5||ni(t),Ja!==0&&(Ja=0)}function ed(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Se(i),r=1<<u,c=n[u];c===-1?((r&a)===0||(r&l)!==0)&&(n[u]=A1(r,e)):c<=e&&(t.expiredLanes|=r),i&=~r}if(e=Nt,a=ut,a=Si(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Fu(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Sn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Fu(l),Iu(a)){case 2:case 8:a=Dc;break;case 32:a=vi;break;case 268435456:a=kc;break;default:a=vi}return l=ad.bind(null,t),a=Ju(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Fu(l),t.callbackPriority=2,t.callbackNode=null,2}function ad(t,e){if(Ct!==0&&Ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cu()&&t.callbackNode!==a)return null;var l=ut;return l=Si(t,t===Nt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Zf(t,l,e),ed(t,_e()),t.callbackNode!=null&&t.callbackNode===a?ad.bind(null,t):null)}function ld(t,e){if(Cu())return null;Zf(t,e,!0)}function hp(){Ep(function(){(pt&6)!==0?Ju(Oc,dp):td()})}function Fo(){if(Ja===0){var t=ml;t===0&&(t=yi,yi<<=1,(yi&261888)===0&&(yi=256)),Ja=t}return Ja}function nd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qi(t)}function pp(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=nd((n[me]||null).action),u=l.submitter;u&&(e=(e=u[me]||null)?nd(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var r=new ji("action","action",null,l,n);t.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ja!==0){var c=new FormData(n,u);ao(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(r.preventDefault(),c=new FormData(n,u),ao(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var $o=0;$o<yr.length;$o++){var Wo=yr[$o],mp=Wo.toLowerCase(),gp=Wo[0].toUpperCase()+Wo.slice(1);Xe(mp,"on"+gp)}Xe(Ms,"onAnimationEnd"),Xe(As,"onAnimationIteration"),Xe(Cs,"onAnimationStart"),Xe("dblclick","onDoubleClick"),Xe("focusin","onFocus"),Xe("focusout","onBlur"),Xe(Th,"onTransitionRun"),Xe(Eh,"onTransitionStart"),Xe(zh,"onTransitionCancel"),Xe(js,"onTransitionEnd"),Ol("onMouseEnter",["mouseout","mouseover"]),Ol("onMouseLeave",["mouseout","mouseover"]),Ol("onPointerEnter",["pointerout","pointerover"]),Ol("onPointerLeave",["pointerout","pointerover"]),ul("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ul("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ul("onBeforeInput",["compositionend","keypress","textInput","paste"]),ul("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ul("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ul("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function id(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var r=l[u],c=r.instance,g=r.currentTarget;if(r=r.listener,c!==i&&n.isPropagationStopped())break t;i=r,n.currentTarget=g;try{i(n)}catch(y){ki(y)}n.currentTarget=null,i=c}else for(u=0;u<l.length;u++){if(r=l[u],c=r.instance,g=r.currentTarget,r=r.listener,c!==i&&n.isPropagationStopped())break t;i=r,n.currentTarget=g;try{i(n)}catch(y){ki(y)}n.currentTarget=null,i=c}}}}function nt(t,e){var a=e[Gc];a===void 0&&(a=e[Gc]=new Set);var l=t+"__bubble";a.has(l)||(ud(e,t,2,!1),a.add(l))}function Io(t,e,a){var l=0;e&&(l|=4),ud(a,t,l,e)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[Ou]){t[Ou]=!0,Xc.forEach(function(a){a!=="selectionchange"&&(bp.has(a)||Io(a,!1,t),Io(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ou]||(e[Ou]=!0,Io("selectionchange",!1,e))}}function ud(t,e,a,l){switch(Fd(e)){case 2:var n=cm;break;case 8:n=sm;break;default:n=vc}a=n.bind(null,e,a,t),n=void 0,!ur||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function tc(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var r=l.stateNode.containerInfo;if(r===n)break;if(u===4)for(u=l.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;r!==null;){if(u=il(r),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){l=i=u;continue t}r=r.parentNode}}l=l.return}is(function(){var g=i,y=nr(a),z=[];t:{var p=Os.get(t);if(p!==void 0){var v=ji,C=t;switch(t){case"keypress":if(Ai(a)===0)break t;case"keydown":case"keyup":v=eh;break;case"focusin":C="focus",v=sr;break;case"focusout":C="blur",v=sr;break;case"beforeblur":case"afterblur":v=sr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=G1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=uh;break;case Ms:case As:case Cs:v=X1;break;case js:v=oh;break;case"scroll":case"scrollend":v=Z1;break;case"wheel":v=sh;break;case"copy":case"cut":case"paste":v=J1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ss;break;case"submit":v=nh;break;case"toggle":case"beforetoggle":v=dh}var U=(e&4)!==0,I=!U&&(t==="scroll"||t==="scrollend"),m=U?p!==null?p+"Capture":null:p;U=[];for(var f=g,x;f!==null;){var T=f;if(x=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||x===null||m===null||(T=zn(f,m),T!=null&&U.push(ui(f,T,x))),I)break;f=f.return}0<U.length&&(p=new v(p,C,null,a,y),z.push({event:p,listeners:U}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",v&&a!==lr&&(C=a.relatedTarget||a.fromElement)&&(il(C)||C[Al]))break t;(p||v)&&(C=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,p?(v=a.relatedTarget||a.toElement,p=g,v=v?il(v):null,v!==null&&(I=Q(v),U=v.tag,v!==I||U!==5&&U!==27&&U!==6)&&(v=null)):(p=null,v=g),p!==v&&(U=os,T="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(U=ss,T="onPointerLeave",m="onPointerEnter",f="pointer"),I=p==null?C:En(p),x=v==null?C:En(v),C=new U(T,f+"leave",p,a,y),C.target=I,C.relatedTarget=x,T=null,il(y)===g&&(U=new U(m,f+"enter",v,a,y),U.target=x,U.relatedTarget=I,T=U),I=T,U=p&&v?re(p,v,xp):null,p!==null&&rd(z,C,p,U,!1),v!==null&&I!==null&&rd(z,I,v,U,!0)))}t:{if(p=g?En(g):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=xs;else if(gs(p))if(vs)k=wh;else{k=yh;var rt=vh}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&ar(g.elementType)&&(k=xs):k=_h;if(k&&(k=k(t,g))){bs(z,k,a,y);break t}rt&&rt(t,p,g)}switch(rt=g?En(g):window,t){case"focusin":(gs(rt)||rt.contentEditable==="true")&&(Bl=rt,br=g,kn=null);break;case"focusout":kn=br=Bl=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,zs(z,a,y);break;case"selectionchange":if(Nh)break;case"keydown":case"keyup":zs(z,a,y)}var G;if(dr)t:{switch(t){case"compositionstart":var J="onCompositionStart";break t;case"compositionend":J="onCompositionEnd";break t;case"compositionupdate":J="onCompositionUpdate";break t}J=void 0}else Hl?ps(t,a)&&(J="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(fs&&a.locale!=="ko"&&(Hl||J!=="onCompositionStart"?J==="onCompositionEnd"&&Hl&&(G=us()):(Ma=y,rr="value"in Ma?Ma.value:Ma.textContent,Hl=!0)),rt=Du(g,J),0<rt.length&&(J=new cs(J,t,null,a,y),z.push({event:J,listeners:rt}),G?J.data=G:(G=ms(a),G!==null&&(J.data=G)))),(G=ph?mh(t,a):gh(t,a))&&(J=Du(g,"onBeforeInput"),0<J.length&&(rt=new cs("onBeforeInput","beforeinput",null,a,y),z.push({event:rt,listeners:J}),rt.data=G)),pp(z,t,g,a,y)}id(z,e)})}function ui(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Du(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=zn(t,a),n!=null&&l.unshift(ui(t,n,i)),n=zn(t,e),n!=null&&l.push(ui(t,n,i))),t.tag===3)return l;t=t.return}return[]}function xp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rd(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var r=a,c=r.alternate,g=r.stateNode;if(r=r.tag,c!==null&&c===l)break;r!==5&&r!==26&&r!==27||g===null||(c=g,n?(g=zn(a,i),g!=null&&u.unshift(ui(a,g,c))):n||(g=zn(a,i),g!=null&&u.push(ui(a,g,c)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var vp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function od(t){return(typeof t=="string"?t:""+t).replace(vp,`
`).replace(yp,"")}function cd(t,e){return e=od(e),od(t)===e}function yt(t,e,a,l,n,i){switch(a){case"children":if(typeof l=="string")e==="body"||e==="textarea"&&l===""||kl(t,l);else if(typeof l=="number"||typeof l=="bigint")e!=="body"&&kl(t,""+l);else return;break;case"className":zi(t,"class",l);break;case"tabIndex":zi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":zi(t,a,l);break;case"style":ls(t,l,i);return;case"data":if(e!=="object"){zi(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=qi(l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&yt(t,e,"name",n.name,n,null),yt(t,e,"formEncType",n.formEncType,n,null),yt(t,e,"formMethod",n.formMethod,n,null),yt(t,e,"formTarget",n.formTarget,n,null)):(yt(t,e,"encType",n.encType,n,null),yt(t,e,"method",n.method,n,null),yt(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=qi(l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ea);return;case"onScroll":l!=null&&nt("scroll",t);return;case"onScrollEnd":l!=null&&nt("scrollend",t);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(h(60));(i!=null?i.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=qi(l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":nt("beforetoggle",t),nt("toggle",t),Ei(t,"popover",l);break;case"xlinkActuate":pa(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":pa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":pa(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":pa(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":pa(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":pa(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":pa(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":pa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":pa(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ei(t,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=B1.get(a)||a,Ei(t,a,l);else return}ht=!0}function ec(t,e,a,l,n,i){switch(a){case"style":ls(t,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(h(60));(i!=null?i.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof l=="string")kl(t,l);else if(typeof l=="number"||typeof l=="bigint")kl(t,""+l);else return;break;case"onScroll":l!=null&&nt("scroll",t);return;case"onScrollEnd":l!=null&&nt("scrollend",t);return;case"onClick":l!=null&&(t.onclick=ea);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Kc.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),i=a.slice(2,n?a.length-7:void 0),e=t[me]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(i,e,n),typeof l=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,n);break t}ht=!0,a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ei(t,a,l)}return}ht=!0}function ae(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nt("error",t),nt("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,e));default:yt(t,e,i,u,a,null)}}n&&yt(t,e,"srcSet",a.srcSet,a,null),l&&yt(t,e,"src",a.src,a,null);return;case"input":nt("invalid",t);var r=i=u=n=null,c=null,g=null;for(l in a)if(a.hasOwnProperty(l)){var y=a[l];if(y!=null)switch(l){case"name":n=y;break;case"type":u=y;break;case"checked":c=y;break;case"defaultChecked":g=y;break;case"value":i=y;break;case"defaultValue":r=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,e));break;default:yt(t,e,l,y,a,null)}}Pc(t,i,r,c,g,u,n,!1);return;case"select":nt("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:yt(t,e,n,r,a,null)}e=i,a=u,t.multiple=!!l,e!=null?Dl(t,!!l,e,!1):a!=null&&Dl(t,!!l,a,!0);return;case"textarea":nt("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(r=a[u],r!=null))switch(u){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(h(91));break;default:yt(t,e,u,r,a,null)}es(t,l,n,i);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:yt(t,e,c,l,a,null)}return;case"dialog":nt("beforetoggle",t),nt("toggle",t),nt("cancel",t),nt("close",t);break;case"iframe":case"object":nt("load",t);break;case"video":case"audio":for(l=0;l<ii.length;l++)nt(ii[l],t);break;case"image":nt("error",t),nt("load",t);break;case"details":nt("toggle",t);break;case"embed":case"source":case"link":nt("error",t),nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,e));default:yt(t,e,g,l,a,null)}return;default:if(ar(e)){for(y in a)a.hasOwnProperty(y)&&(l=a[y],l!==void 0&&ec(t,e,y,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&yt(t,e,r,l,a,null))}var _p={};function wp(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,r=null,c=null,g=null,y=null;for(v in a){var z=a[v];if(a.hasOwnProperty(v)&&z!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=z;default:l.hasOwnProperty(v)||yt(t,e,v,null,l,z)}}for(var p in l){var v=l[p];if(z=a[p],l.hasOwnProperty(p)&&(v!=null||z!=null))switch(p){case"type":v!==z&&(ht=!0),i=v;break;case"name":v!==z&&(ht=!0),n=v;break;case"checked":v!==z&&(ht=!0),g=v;break;case"defaultChecked":v!==z&&(ht=!0),y=v;break;case"value":v!==z&&(ht=!0),u=v;break;case"defaultValue":v!==z&&(ht=!0),r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,e));break;default:v!==z&&yt(t,e,p,v,l,z)}}tr(t,u,r,c,g,y,i,n);return;case"select":v=u=r=p=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":v=c;default:l.hasOwnProperty(i)||yt(t,e,i,null,l,c)}for(n in l)if(i=l[n],c=a[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":i!==c&&(ht=!0),p=i;break;case"defaultValue":i!==c&&(ht=!0),r=i;break;case"multiple":i!==c&&(ht=!0),u=i;default:i!==c&&yt(t,e,n,i,l,c)}e=r,a=u,l=v,p!=null?Dl(t,!!a,p,!1):!!l!=!!a&&(e!=null?Dl(t,!!a,e,!0):Dl(t,!!a,a?[]:"",!1));return;case"textarea":v=p=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:yt(t,e,r,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":n!==i&&(ht=!0),p=n;break;case"defaultValue":n!==i&&(ht=!0),v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==i&&yt(t,e,u,n,l,i)}ts(t,p,v);return;case"option":for(var C in a)if(p=a[C],a.hasOwnProperty(C)&&p!=null&&!l.hasOwnProperty(C))switch(C){case"selected":t.selected=!1;break;default:yt(t,e,C,null,l,p)}for(c in l)if(p=l[c],v=a[c],l.hasOwnProperty(c)&&p!==v&&(p!=null||v!=null))switch(c){case"selected":p!==v&&(ht=!0),t.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:yt(t,e,c,p,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in a)p=a[U],a.hasOwnProperty(U)&&p!=null&&!l.hasOwnProperty(U)&&yt(t,e,U,null,l,p);for(g in l)if(p=l[g],v=a[g],l.hasOwnProperty(g)&&p!==v&&(p!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,e));break;default:yt(t,e,g,p,l,v)}return;default:if(ar(e)){for(var I in a)p=a[I],a.hasOwnProperty(I)&&p!==void 0&&!l.hasOwnProperty(I)&&ec(t,e,I,void 0,l,p);for(y in l)p=l[y],v=a[y],!l.hasOwnProperty(y)||p===v||p===void 0&&v===void 0||ec(t,e,y,p,l,v);return}}for(var m in a)p=a[m],a.hasOwnProperty(m)&&p!=null&&!l.hasOwnProperty(m)&&yt(t,e,m,null,l,p);for(z in l)p=l[z],v=a[z],!l.hasOwnProperty(z)||p===v||p==null&&v==null||yt(t,e,z,p,l,v)}function sd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sp(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,r=n.duration;if(i&&r&&sd(u)){for(u=0,r=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],g=c.startTime;if(g>r)break;var y=c.transferSize,z=c.initiatorType;y&&sd(z)&&(c=c.responseEnd,u+=y*(c<r?1:(r-g)/(c-g)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ac=null,lc=null;function ri(t){return t.nodeType===9?t:t.ownerDocument}function fd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function hd(t,e,a,l){return a=ri(a).createElement(t),a[Wt]=l,a[me]=e,ae(a,t,e),Kt(a),a}function nc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ic=null;function Np(){var t=window.event;return t&&t.type==="popstate"?t===ic?!1:(ic=t,!0):(ic=null,!1)}var uc=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,md=typeof requestAnimationFrame=="function"?requestAnimationFrame:uc,Ep=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(t){return pd.resolve(null).then(t).catch(zp)}:uc;function zp(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function gd(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),vn(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")pc(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,pc(a);for(var i=a.firstChild;i;){var u=i.nextSibling,r=i.nodeName;i[Tn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&pc(t.ownerDocument.body);a=n}while(a);vn(e)}function bd(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function xd(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var l=1;else for(var n=l=0;n<e.length;n++){var i=e[n];0<i.width&&0<i.height&&l++}l===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function vd(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function qp(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function rc(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return qp(e,a,t)}function Mp(t){return t.documentElement.clientHeight}function Ap(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Cp(t,e,a,l,n,i,u,r,c){var g=e.nodeType===9?e:e.ownerDocument;try{var y=g.startViewTransition({update:function(){var p=g.defaultView,v=p.navigation&&p.navigation.transition,C=g.fonts.status;l();var U=[];if(C==="loaded"&&(Mp(g),g.fonts.status==="loading"&&U.push(g.fonts.ready)),C=U.length,t!==null)for(var I=t.suspenseyImages,m=0,f=0;f<I.length;f++){var x=I[f];if(!x.complete){var T=x.getBoundingClientRect();if(0<T.bottom&&0<T.right&&T.top<p.innerHeight&&T.left<p.innerWidth){if(m+=Yd(x),m>Ru){U.length=C;break}x=new Promise(Ap.bind(x)),U.push(x)}}}if(0<U.length)return p=Promise.race([Promise.all(U),new Promise(function(k){return setTimeout(k,500)})]).then(n,n),(v?Promise.allSettled([v.finished,p]):p).then(i,i);if(n(),v)return v.finished.then(i,i);i()},types:a});g.__reactViewTransition=y;var z=[];return y.ready.then(function(){for(var p=g.documentElement.getAnimations({subtree:!0}),v=0;v<p.length;v++){var C=p[v],U=C.effect,I=U.pseudoElement;if(I!=null&&I.startsWith("::view-transition")){z.push(C),C=U.getKeyframes();for(var m=I=void 0,f=!0,x=0;x<C.length;x++){var T=C[x],k=T.width;if(I===void 0)I=k;else if(I!==k){f=!1;break}if(k=T.height,m===void 0)m=k;else if(m!==k){f=!1;break}delete T.width,delete T.height,T.transform==="none"&&delete T.transform}f&&I!==void 0&&m!==void 0&&(U.setKeyframes(C),f=getComputedStyle(U.target,U.pseudoElement),f.width!==I||f.height!==m)&&(f=C[0],f.width=I,f.height=m,f=C[C.length-1],f.width=I,f.height=m,U.setKeyframes(C))}}u()},function(p){g.__reactViewTransition===y&&(g.__reactViewTransition=null);try{if(typeof p=="object"&&p!==null)switch(p.name){case"InvalidStateError":(p.message==="View transition was skipped because document visibility state is hidden."||p.message==="Skipping view transition because document visibility state has become hidden."||p.message==="Skipping view transition because viewport size changed."||p.message==="Transition was aborted because of invalid state")&&(p=null)}p!==null&&c(p)}finally{l(),n(),u()}}),y.finished.finally(function(){for(var p=0;p<z.length;p++)z[p].cancel();g.__reactViewTransition===y&&(g.__reactViewTransition=null),r()}),y}catch{return l(),n(),u(),null}}function El(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}El.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:tt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},El.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),l=[],n=0;n<a.length;n++){var i=a[n].effect;i!==null&&i.target===t&&i.pseudoElement===e&&l.push(a[n])}return l},El.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function yd(t){return{name:t,group:new El("group",t),imagePair:new El("image-pair",t),old:new El("old",t),new:new El("new",t)}}function Ce(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Ce.prototype.addEventListener=function(t,e,a){var l=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(l=a.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(wd(i,t,e,a)===-1){var u=this,r=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(r=function(c){u.removeEventListener(t,e,a),typeof e=="function"?e.call(this,c):e.handleEvent(c)}),l!==null&&(n=u.removeEventListener.bind(u,t,e,a),l.addEventListener("abort",n,{once:!0}),n=l.removeEventListener.bind(l,"abort",n)),l=hn(a),i.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:r,cleanup:n}),S(this._fragmentFiber.child,!1,jp,t,r,l)}this._eventListeners=i}};function jp(t,e,a,l){return L(t).addEventListener(e,a,l),!1}Ce.prototype.removeEventListener=function(t,e,a){var l=this._eventListeners;if(l!==null&&(e=wd(l,t,e,a),e!==-1)){var n=l[e];a=n.attachedListener;var i=n.cleanup;n=hn(n.optionsOrUseCapture),S(this._fragmentFiber.child,!1,Op,t,a,n),l.splice(e,1),i!==null&&i()}};function Op(t,e,a,l){return L(t).removeEventListener(e,a,l),!1}function hn(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function _d(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function wd(t,e,a,l){if(t.length===0)return-1;l=_d(l);for(var n=0;n<t.length;n++){var i=t[n];if(i.type===e&&i.listener===a&&_d(i.optionsOrUseCapture)===l)return n}return-1}Ce.prototype.dispatchEvent=function(t){var e=R(this._fragmentFiber);if(e===null)return!0;e=L(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var l=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var i=a[n];l.addEventListener(i.type,i.attachedListener,hn(i.optionsOrUseCapture))}if(e.appendChild(l),t=l.dispatchEvent(t),a)for(n=0;n<a.length;n++)i=a[n],l.removeEventListener(i.type,i.attachedListener,hn(i.optionsOrUseCapture));return e.removeChild(l),t}return e.dispatchEvent(t)},Ce.prototype.focus=function(t){S(this._fragmentFiber.child,!0,Sd,t,void 0,void 0)};function Sd(t,e){return t.tag===6?!1:(t=L(t),Vp(t,e))}Ce.prototype.focusLast=function(t){var e=[];S(this._fragmentFiber.child,!0,oc,e,void 0,void 0);for(var a=e.length-1;0<=a&&!Sd(e[a],t);a--);};function oc(t,e){return e.push(t),!1}Ce.prototype.blur=function(){var t=R(this._fragmentFiber);t!==null&&(t=L(t),t=ri(t).activeElement,t!==null&&S(this._fragmentFiber.child,!1,Dp,t,void 0,void 0))};function Dp(t,e){return t.tag===6?!1:(t=L(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Ce.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),S(this._fragmentFiber.child,!1,kp,t,void 0,void 0)};function kp(t,e){return t.tag===6||(t=L(t),e.observe(t)),!1}Ce.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),S(this._fragmentFiber.child,!1,Up,t,void 0,void 0);for(var a=e=0;a<We.length;a++){var l=We[a];l.fragmentInstance===this&&l.observer===t?t.unobserve(l.instance):We[e++]=l}We.length=e}};function Up(t,e){return t.tag===6||(t=L(t),e.unobserve(t)),!1}var We=[],cc=!1;function Rp(t,e,a){We.push({fragmentInstance:t,observer:e,instance:a}),cc||(cc=!0,Xp(function(){cc=!1;var l=We;We=[];for(var n=0;n<l.length;n++){var i=l[n];i.observer.unobserve(i.instance)}}))}Ce.prototype.getClientRects=function(){var t=[];return S(this._fragmentFiber.child,!1,Hp,t,void 0,void 0),t};function Hp(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=L(t),e.push.apply(e,t.getClientRects());return!1}Ce.prototype.getRootNode=function(t){var e=R(this._fragmentFiber);return e===null?this:L(e).getRootNode(t)},Ce.prototype.compareDocumentPosition=function(t){var e=R(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];S(this._fragmentFiber.child,!1,oc,a,void 0,void 0);var l=L(e);if(a.length===0){if(a=l,wt(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=l=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=Mt(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=L(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=L(a[0]),n=L(a[a.length-1]);var i=wt(this._fragmentFiber)?e.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=e.compareDocumentPosition(t),r=n.compareDocumentPosition(t),c=u&Node.DOCUMENT_POSITION_CONTAINED_BY||r&Node.DOCUMENT_POSITION_CONTAINED_BY;return r=l&&i&&u&Node.DOCUMENT_POSITION_FOLLOWING&&r&Node.DOCUMENT_POSITION_PRECEDING,e=l&&e===t||i&&n===t||c||r?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&e===t||!i&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Bp(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Bp(t,e,a,l,n){var i=il(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)t:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){a=!0;break t}i=i.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=n.ownerDocument,n===i||n===i.documentElement||n===i.body;t:{for(i=e,e=R(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break t}i=i.return}i=!1}return i}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===a)&&(e=re(a,i,Oe),e===null?e=!1:(S(e,!0,Qe,i,a),i=At,At=null,e=i!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===l)&&(e=re(l,i,Oe),e===null?e=!1:(S(e,!0,je,i,l),i=At,ue=At=null,e=i!==null)),e):!1}function Nd(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Ce.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(h(566));var e=[];S(this._fragmentFiber.child,!1,oc,e,void 0,void 0);var a=t!==!1;if(e.length===0){var l=Mt(this._fragmentFiber);if(l=a?l[1]||l[0]||R(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){t=L(l),Nd(t,a);return}if(l=L(l),l.nodeType!==9){if(l.nodeType===11){a="host"in l?l.host:null,a!==null&&a.scrollIntoView(t);return}l.scrollIntoView(t)}}for(l=a?e.length-1:0;l!==(a?-1:e.length);){var n=e[l];n.tag===6?(n=L(n),Nd(n,a)):L(n).scrollIntoView(t),l+=a?-1:1}};function Yp(t,e){return t=L(t),Td(t,e),!1}function Td(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function Ed(t,e){var a=e._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];t.addEventListener(n.type,n.attachedListener,hn(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(i){for(var u=0,r=0;r<We.length;r++){var c=We[r];(c.fragmentInstance!==e||c.observer!==i||c.instance!==t)&&(We[u++]=c)}We.length=u,i.observe(t)}),Td(t,e))}function Zp(t,e){var a=e._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];t.removeEventListener(n.type,n.attachedListener,hn(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?Rp(e,i,t):i.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function sc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sc(a),Ti(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Lp(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Tn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Le(t.nextSibling),t===null)break}return null}function Gp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Le(t.nextSibling),t===null))return null;return t}function zd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Le(t.nextSibling),t===null))return null;return t}function fc(t){return t.data==="$?"||t.data==="$~"}function dc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qp(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Le(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var hc=null;function qd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Le(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Md(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Vp(t,e){function a(){l=!0}if(t.ownerDocument.activeElement===t)return!0;var l=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return l}function Xp(t){md(function(){md(function(e){return t(e)})})}function Ad(t,e,a){switch(e=ri(a),t){case"html":if(t=e.documentElement,!t)throw Error(h(452));return t;case"head":if(t=e.head,!t)throw Error(h(453));return t;case"body":if(t=e.body,!t)throw Error(h(454));return t;default:throw Error(h(451))}}function Cd(t,e,a){for(var l in a){var n=a[l];a.hasOwnProperty(l)&&n!=null&&yt(t,e,l,null,_p,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ea&&(t.onclick=null),Ti(t)}function pc(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ti(t)}var Ge=new Map,jd=new Set;function oi(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var za=D.d;D.d={f:Kp,r:Jp,D:Fp,C:$p,L:Wp,m:Ip,X:tm,S:Pp,M:em};function Kp(){var t=za.f(),e=qu();return t||e}function Jp(t){var e=Cl(t);e!==null&&e.tag===5&&e.type==="form"?O0(e):za.r(t)}var pn=typeof document>"u"?null:document;function Od(t,e,a){var l=pn;if(l&&typeof e=="string"&&e){var n=ke(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),jd.has(n)||(jd.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),ae(e,"link",t),Kt(e),l.head.appendChild(e)))}}function Fp(t){za.D(t),Od("dns-prefetch",t,null)}function $p(t,e){za.C(t,e),Od("preconnect",t,e)}function Wp(t,e,a){za.L(t,e,a);var l=pn;if(l&&t&&e){var n='link[rel="preload"][as="'+ke(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ke(a.imageSizes)+'"]')):n+='[href="'+ke(t)+'"]';var i=n;switch(e){case"style":i=mn(t);break;case"script":i=gn(t)}if(!(Ge.has(i)||(t=tt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ge.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(ci(i))||e==="script"&&l.querySelector(si(i))))){var u=l.createElement("link");ae(u,"link",t),e==="style"&&(u[Ni]=!0,u.onload=u.onerror=function(){Vc(u)}),Kt(u),l.head.appendChild(u)}}}function Ip(t,e){za.m(t,e);var a=pn;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ke(l)+'"][href="'+ke(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=gn(t)}if(!Ge.has(i)&&(t=tt({rel:"modulepreload",href:t},e),Ge.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(si(i)))return}l=a.createElement("link"),ae(l,"link",t),Kt(l),a.head.appendChild(l)}}}function Pp(t,e,a){za.S(t,e,a);var l=pn;if(l&&t){var n=jl(l).hoistableStyles,i=mn(t);e=e||"default";var u=n.get(i);if(!u){var r={loading:0,preload:null};if(u=l.querySelector(ci(i)))r.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ge.get(i))&&mc(t,a);var c=u=l.createElement("link");Kt(c),ae(c,"link",t),c._p=new Promise(function(g,y){c.onload=g,c.onerror=y}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,ku(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:r},n.set(i,u)}}}function tm(t,e){za.X(t,e);var a=pn;if(a&&t){var l=jl(a).hoistableScripts,n=gn(t),i=l.get(n);i||(i=a.querySelector(si(n)),i||(t=tt({src:t,async:!0},e),(e=Ge.get(n))&&gc(t,e),i=a.createElement("script"),Kt(i),ae(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function em(t,e){za.M(t,e);var a=pn;if(a&&t){var l=jl(a).hoistableScripts,n=gn(t),i=l.get(n);i||(i=a.querySelector(si(n)),i||(t=tt({src:t,async:!0,type:"module"},e),(e=Ge.get(n))&&gc(t,e),i=a.createElement("script"),Kt(i),ae(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Dd(t,e,a,l){var n=(n=ta.current)?oi(n):null;if(!n)throw Error(h(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=mn(a.href),e=jl(n).hoistableStyles,l=e.get(a),l||(l={type:"style",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mn(a.href);var i=jl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(ci(t)))?i._p||(u.instance=i,u.state.loading=5):(i=Ge.get(t),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ge.set(t,i)),am(n,t,i,u.state))),e&&l===null)throw Error(h(528,""));return u}if(e&&l!==null)throw Error(h(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=gn(a),e=jl(n).hoistableScripts,l=e.get(a),l||(l={type:"script",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,t))}}function mn(t){return'href="'+ke(t)+'"'}function ci(t){return'link[rel="stylesheet"]['+t+"]"}function kd(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function am(t,e,a,l){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Ni]!==!0){l.loading=1;return}}else e=t.createElement("link"),e[Ni]=!0,e.onload=e.onerror=Vc.bind(null,e),ae(e,"link",a),Kt(e),t.head.appendChild(e);l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2})}function gn(t){return'[src="'+ke(t)+'"]'}function si(t){return"script[async]"+t}function Ud(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+ke(a.href)+'"]');if(l)return e.instance=l,Kt(l),l;var n=tt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Kt(l),ae(l,"style",n),ku(l,a.precedence,t),e.instance=l;case"stylesheet":n=mn(a.href);var i=t.querySelector(ci(n));if(i)return e.state.loading|=4,e.instance=i,Kt(i),i;l=kd(a),(n=Ge.get(n))&&mc(l,n),i=(t.ownerDocument||t).createElement("link"),Kt(i);var u=i;return u._p=new Promise(function(r,c){u.onload=r,u.onerror=c}),ae(i,"link",l),e.state.loading|=4,ku(i,a.precedence,t),e.instance=i;case"script":return i=gn(a.src),(n=t.querySelector(si(i)))?(e.instance=n,Kt(n),n):(l=a,(n=Ge.get(i))&&(l=tt({},a),gc(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Kt(n),ae(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(h(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,ku(l,a.precedence,t));return e.instance}function ku(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var r=l[u];if(r.dataset.precedence===e)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function mc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function gc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Uu=null;function Rd(t,e,a){if(Uu===null){var l=new Map,n=Uu=new Map;n.set(a,l)}else n=Uu,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Tn]||i[Wt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var r=l.get(u);r?r.push(i):l.set(u,[i])}}return l}function bc(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function lm(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Hd(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Bd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Yd(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Zd(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Yd(e),t.suspenseyImages.push(e)),t=um.bind(t),e.decode().then(t,t))}function nm(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=mn(l.href),i=e.querySelector(ci(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=fi.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Kt(i);return}i=e.ownerDocument||e,l=kd(l),(n=Ge.get(n))&&mc(l,n),i=i.createElement("link"),Kt(i);var u=i;u._p=new Promise(function(r,c){u.onload=r,u.onerror=c}),ae(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=fi.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Ru=0;function im(t,e){return t.stylesheets&&t.count===0&&Bu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Ru===0&&(Ru=62500*Sp());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Ru?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ld(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Bu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function fi(){this.count--,Ld(this)}function um(){this.imgCount--,Ld(this)}var Hu=null;function Bu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hu=new Map,e.forEach(rm,t),Hu=null,fi.call(t))}function rm(t,e){if(!(e.state.loading&4)){var a=Hu.get(t);if(a)var l=a.get(null);else{a=new Map,Hu.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=fi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var bn={$$typeof:Dt,Provider:null,Consumer:null,_currentValue:St,_currentValue2:St,_threadCount:0};function om(t,e,a,l,n,i,u,r,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$u(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.hiddenUpdates=$u(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function Gd(t,e,a,l,n,i,u,r,c,g,y,z){return t=new om(t,e,a,u,c,g,y,z,r),e=1,i===!0&&(e|=24),i=ge(3,null,null,e),t.current=i,i.stateNode=t,e=Cr(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},kr(i),t}function Qd(t){return t?(t=Ll,t):Ll}function Vd(t,e,a,l,n,i){n=Qd(n),l.context===null?l.context=n:l.pendingContext=n,l=Ra(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Ha(t,l,e),a!==null&&(ye(a,t,e),Ln(a,t,e))}function Xd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function xc(t,e){Xd(t,e),(t=t.alternate)&&Xd(t,e)}function Kd(t){if(t.tag===13||t.tag===31){var e=cl(t,67108864);e!==null&&ye(e,t,67108864),xc(t,67108864)}}function Jd(t){if(t.tag===13||t.tag===31){var e=Ae();e=Wu(e);var a=cl(t,e);a!==null&&ye(a,t,e),xc(t,e)}}var xn=!0;function cm(t,e,a,l){var n=A.T;A.T=null;var i=D.p;try{D.p=2,vc(t,e,a,l)}finally{D.p=i,A.T=n}}function sm(t,e,a,l){var n=A.T;A.T=null;var i=D.p;try{D.p=8,vc(t,e,a,l)}finally{D.p=i,A.T=n}}function vc(t,e,a,l){if(xn){var n=yc(l);if(n===null)tc(t,e,l,Yu,a),$d(t,l);else if(dm(n,t,e,a,l))l.stopPropagation();else if($d(t,l),e&4&&-1<fm.indexOf(t)){for(;n!==null;){var i=Cl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=nl(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var c=1<<31-Se(u);r.entanglements[1]|=c,u&=~c}fa(i),(pt&6)===0&&(Tu=_e()+500,ni(0))}}break;case 31:case 13:r=cl(i,2),r!==null&&ye(r,i,2),qu(),xc(i,2)}if(i=yc(l),i===null&&tc(t,e,l,Yu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else tc(t,e,l,null,a)}}function yc(t){return t=nr(t),_c(t)}var Yu=null;function _c(t){if(Yu=null,t=il(t),t!==null){var e=Q(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=st(e),t!==null)return t;t=null}else if(a===31){if(t=P(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Yu=t,null}function Fd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(S1()){case Oc:return 2;case Dc:return 8;case vi:case N1:return 32;case kc:return 268435456;default:return 32}default:return 32}}var wc=!1,$a=null,Wa=null,Ia=null,di=new Map,hi=new Map,Pa=[],fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $d(t,e){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(e.pointerId)}}function pi(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Cl(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function dm(t,e,a,l,n){switch(e){case"focusin":return $a=pi($a,t,e,a,l,n),!0;case"dragenter":return Wa=pi(Wa,t,e,a,l,n),!0;case"mouseover":return Ia=pi(Ia,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return di.set(i,pi(di.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,hi.set(i,pi(hi.get(i)||null,t,e,a,l,n)),!0}return!1}function Wd(t){var e=il(t.target);if(e!==null){var a=Q(e);if(a!==null){if(e=a.tag,e===13){if(e=st(a),e!==null){t.blockedOn=e,Lc(t.priority,function(){Jd(a)});return}}else if(e===31){if(e=P(a),e!==null){t.blockedOn=e,Lc(t.priority,function(){Jd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=yc(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);lr=l,a.target.dispatchEvent(l),lr=null}else return e=Cl(a),e!==null&&Kd(e),t.blockedOn=a,!1;e.shift()}return!0}function Id(t,e,a){Zu(t)&&a.delete(e)}function hm(){wc=!1,$a!==null&&Zu($a)&&($a=null),Wa!==null&&Zu(Wa)&&(Wa=null),Ia!==null&&Zu(Ia)&&(Ia=null),di.forEach(Id),hi.forEach(Id)}function Lu(t,e){t.blockedOn===e&&(t.blockedOn=null,wc||(wc=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,hm)))}var Gu=null;function Pd(t){Gu!==t&&(Gu=t,_.unstable_scheduleCallback(_.unstable_NormalPriority,function(){Gu===t&&(Gu=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(_c(l||a)===null)continue;break}var i=Cl(a);i!==null&&(t.splice(e,3),e-=3,ao(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function vn(t){function e(c){return Lu(c,t)}$a!==null&&Lu($a,t),Wa!==null&&Lu(Wa,t),Ia!==null&&Lu(Ia,t),di.forEach(e),hi.forEach(e);for(var a=0;a<Pa.length;a++){var l=Pa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Wd(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[me]||null;if(typeof i=="function")u||Pd(a);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[me]||null)r=u.formAction;else if(_c(n)!==null)continue}else r=u.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),Pd(a)}}}function t1(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Sc(t){this._internalRoot=t}Qu.prototype.render=Sc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(h(409));var a=e.current,l=Ae();Vd(a,l,t,e,null,null)},Qu.prototype.unmount=Sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vd(t.current,2,null,t,null,null),qu(),e[Al]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zc();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Pa.length&&e!==0&&e<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&Wd(t)}};var e1=w.version;if(e1!=="19.3.1")throw Error(h(527,e1,"19.3.1"));D.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(h(188)):(t=Object.keys(t).join(","),Error(h(268,t)));return t=dt(e),t=t!==null?B(t):null,t=t===null?null:t.stateNode,t};var pm={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{wn=Vu.inject(pm),we=Vu}catch{}}return gi.createRoot=function(t,e){if(!Y(t))throw Error(h(299));var a=!1,l="",n=G0,i=Q0,u=V0;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Gd(t,1,!1,null,null,a,l,null,n,i,u,t1),t[Al]=e.current,Po(t),new Sc(e)},gi.hydrateRoot=function(t,e,a){if(!Y(t))throw Error(h(299));var l=!1,n="",i=G0,u=Q0,r=V0,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),e=Gd(t,1,!0,e,a??null,l,n,c,i,u,r,t1),e.context=Qd(null),a=e.current,l=Ae(),l=Wu(l),n=Ra(l),n.callback=null,Ha(a,n,l),a=l,e.current.lanes=a,Nn(e,a),fa(e),t[Al]=e.current,Po(t),new Qu(e)},gi.version="19.3.1",gi}var f1;function zm(){if(f1)return Ec.exports;f1=1;function _(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_)}catch(w){console.error(w)}}return _(),Ec.exports=Em(),Ec.exports}var qm=zm();const Mm=h1(qm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=_=>_.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p1=(..._)=>_.filter((w,E,h)=>!!w&&w.trim()!==""&&h.indexOf(w)===E).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=jt.forwardRef(({color:_="currentColor",size:w=24,strokeWidth:E=2,absoluteStrokeWidth:h,className:Y="",children:Q,iconNode:st,...P},ot)=>jt.createElement("svg",{ref:ot,...Cm,width:w,height:w,stroke:_,strokeWidth:h?Number(E)*24/Number(w):E,className:p1("lucide",Y),...P},[...st.map(([dt,B])=>jt.createElement(dt,B)),...Array.isArray(Q)?Q:[Q]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(_,w)=>{const E=jt.forwardRef(({className:h,...Y},Q)=>jt.createElement(jm,{ref:Q,iconNode:w,className:p1(`lucide-${Am(_)}`,h),...Y}));return E.displayName=`${_}`,E};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]],Dm=Ot("Anchor",Om);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Um=Ot("Award",km);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Hm=Ot("ChevronDown",Rm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ym=Ot("ChevronLeft",Bm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Lm=Ot("ChevronRight",Zm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Qm=Ot("ChevronUp",Gm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xm=Ot("CircleCheckBig",Vm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Jm=Ot("Compass",Km);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],$m=Ot("ExternalLink",Fm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],d1=Ot("Gauge",Wm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Pm=Ot("Github",Im);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],m1=Ot("Layers",t2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],a2=Ot("Mail",e2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],n2=Ot("Phone",l2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],u2=Ot("Radio",i2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],o2=Ot("ShieldAlert",r2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],g1=Ot("ShieldCheck",c2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],f2=Ot("Shield",s2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],h2=Ot("Sparkles",d2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],m2=Ot("Volume2",p2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],b2=Ot("VolumeX",g2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],v2=Ot("Waves",x2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cc=Ot("X",y2);class _2{constructor(){el(this,"ctx",null);el(this,"isPlaying",!1);el(this,"masterGain",null);el(this,"ambientOsc1",null);el(this,"ambientOsc2",null);el(this,"filter",null);el(this,"sonarTimer",null)}async init(){const w=window.AudioContext||window.webkitAudioContext;w&&(this.ctx=new w,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}async start(){if(this.ctx||await this.init(),this.ctx&&this.ctx.state==="suspended"&&await this.ctx.resume(),!this.ctx||!this.masterGain)return;this.masterGain.gain.linearRampToValueAtTime(.18,this.ctx.currentTime+2),this.filter=this.ctx.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.setValueAtTime(140,this.ctx.currentTime),this.filter.connect(this.masterGain),this.ambientOsc1=this.ctx.createOscillator(),this.ambientOsc1.type="sine",this.ambientOsc1.frequency.setValueAtTime(42,this.ctx.currentTime),this.ambientOsc1.connect(this.filter),this.ambientOsc1.start(),this.ambientOsc2=this.ctx.createOscillator(),this.ambientOsc2.type="triangle",this.ambientOsc2.frequency.setValueAtTime(84.4,this.ctx.currentTime);const w=this.ctx.createGain();w.gain.setValueAtTime(.08,this.ctx.currentTime),this.ambientOsc2.connect(w),w.connect(this.filter),this.ambientOsc2.start(),this.isPlaying=!0,this.scheduleSonar()}stop(){this.ctx&&this.masterGain&&(this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+1),setTimeout(()=>{var w,E,h,Y;try{(w=this.ambientOsc1)==null||w.stop(),(E=this.ambientOsc2)==null||E.stop(),(h=this.ambientOsc1)==null||h.disconnect(),(Y=this.ambientOsc2)==null||Y.disconnect()}catch{}},1e3)),this.sonarTimer&&(window.clearInterval(this.sonarTimer),this.sonarTimer=null),this.isPlaying=!1}toggle(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}playSonarPing(){if(!(!this.ctx||!this.isPlaying))try{const w=this.ctx.currentTime,E=this.ctx.createOscillator(),h=this.ctx.createGain();E.type="sine",E.frequency.setValueAtTime(1180,w),E.frequency.exponentialRampToValueAtTime(940,w+1.2),h.gain.setValueAtTime(.001,w),h.gain.linearRampToValueAtTime(.09,w+.05),h.gain.exponentialRampToValueAtTime(1e-4,w+2.4),E.connect(h),h.connect(this.masterGain),E.start(w),E.stop(w+2.5)}catch{}}playBubblePop(){if(this.ctx)try{this.ctx.state==="suspended"&&this.ctx.resume();const w=this.ctx.currentTime,E=this.ctx.createOscillator(),h=this.ctx.createGain();E.type="sine",E.frequency.setValueAtTime(450+Math.random()*200,w),E.frequency.exponentialRampToValueAtTime(900+Math.random()*300,w+.06),h.gain.setValueAtTime(.05,w),h.gain.exponentialRampToValueAtTime(.001,w+.12),E.connect(h),h.connect(this.ctx.destination),E.start(w),E.stop(w+.13)}catch{}}scheduleSonar(){this.sonarTimer&&window.clearInterval(this.sonarTimer),this.sonarTimer=window.setInterval(()=>{this.isPlaying&&this.playSonarPing()},9500)}}const qt=new _2,w2=({onOpenBooking:_,onOpenCourses:w,onOpenContact:E,isAudioOn:h,onToggleAudio:Y})=>{const[Q,st]=jt.useState(null),P=(ot,dt)=>{qt.playBubblePop(),st(ot),setTimeout(()=>st(null),2500),dt&&dt()};return o.jsxs("div",{className:"relative w-full max-w-[736px] mx-auto select-none font-sans",children:[Q&&o.jsxs("div",{className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#031024]/95 text-[#00f5d4] border border-[#00f5d4]/50 px-5 py-2.5 rounded-full text-xs font-mono shadow-[0_0_30px_rgba(0,245,212,0.35)] backdrop-blur-xl flex items-center gap-2 animate-in fade-in duration-150",children:[o.jsx(h2,{className:"w-3.5 h-3.5 text-[#00f5d4] animate-spin"}),o.jsx("span",{children:Q})]}),o.jsxs("div",{className:"relative w-full rounded-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/15 bg-[#020915]",children:[o.jsx("img",{src:"/assets/reference.jpg",alt:"AQUA SPHERE — Clube & Expedições de Mergulho Abissal",className:"w-full h-auto block pointer-events-none"}),o.jsx("div",{onClick:()=>P("AQUA SPHERE • Base Central de Mergulho"),className:"absolute top-[1.2%] left-[8%] w-[10%] h-[2.8%] cursor-pointer rounded-full hover:bg-white/10 transition-colors",title:"Aqua Sphere Emblem"}),o.jsx("a",{href:"#sobre-anchor",onClick:()=>P("Navegando para: О клубе (Desde 2012)"),className:"absolute top-[1.5%] left-[26%] w-[13%] h-[2.2%] cursor-pointer rounded-full hover:bg-white/20 transition-all border border-transparent hover:border-white/30",title:"Ir para О клубе"}),o.jsx("div",{onClick:()=>P("Abrindo Matriz de Cursos PADI/SSI",w),className:"absolute top-[1.5%] left-[42%] w-[13%] h-[2.2%] cursor-pointer rounded-full hover:bg-white/20 transition-all border border-transparent hover:border-white/30",title:"Ver Cursos & Certificações"}),o.jsx("div",{onClick:()=>P("Central de Atendimento & VHF Marítimo",E),className:"absolute top-[1.5%] left-[58%] w-[13%] h-[2.2%] cursor-pointer rounded-full hover:bg-white/20 transition-all border border-transparent hover:border-white/30",title:"Telefone, Rádio VHF e Bases"}),o.jsx("div",{onClick:()=>{qt.playSonarPing(),P("Iniciando Inscrição de Expedição",()=>_("Mergulho de Batismo & Open Water"))},className:"absolute top-[1.2%] right-[7%] w-[22%] h-[2.8%] cursor-pointer rounded-full hover:shadow-[0_0_25px_rgba(247,37,133,0.8)] transition-all active:scale-95 border border-white/20 hover:bg-white/15",title:"Записаться / Agendar Imersão"}),o.jsx("div",{onClick:()=>{qt.playSonarPing(),P("Mergulhador Técnico em Descida Livre (Zona Epipelágica)")},className:"absolute top-[6%] left-[44%] w-[16%] h-[8%] cursor-pointer rounded-full hover:bg-[#00f5d4]/10 transition-colors",title:"Mergulhador em Imersão"}),o.jsx("div",{onClick:()=>P("AQUA SPHERE • O Universo do Mergulho Silencioso"),className:"absolute top-[13.5%] left-[16%] w-[68%] h-[4%] cursor-pointer hover:bg-white/5 rounded-xl transition-colors",title:"AQUA SPHERE"}),o.jsx("div",{onClick:()=>P("Recife Coralino de Profundidade: Anthogorgia Caerulea"),className:"absolute top-[18%] left-[2%] w-[28%] h-[8%] cursor-pointer rounded-2xl hover:bg-[#e61c78]/15 transition-colors",title:"Coral Bioluminescente Magenta"}),o.jsx("div",{onClick:()=>P("Recife Coralino de Profundidade: Tubastrea Micrantha"),className:"absolute top-[18%] right-[2%] w-[28%] h-[8%] cursor-pointer rounded-2xl hover:bg-[#e61c78]/15 transition-colors",title:"Coral Bioluminescente Magenta"}),o.jsx("div",{id:"sobre-anchor",className:"absolute top-[34%]"}),o.jsx("div",{onClick:()=>{qt.playSonarPing(),P("Espécime: Pterois Radiata (Bioluminescência Abissal Ativa)")},className:"absolute top-[34%] left-[3%] w-[44%] h-[18%] cursor-pointer rounded-3xl hover:bg-[#00f5d4]/10 transition-all border border-transparent hover:border-[#00f5d4]/30",title:"Clique para inspecionar o Peixe Exótico"}),o.jsx("div",{onClick:()=>P("Aqua Sphere Club: Mais de 12 anos de expedições seguras"),className:"absolute top-[36%] left-[52%] w-[42%] h-[15%] cursor-pointer rounded-2xl hover:bg-white/5 transition-colors",title:"Sobre o Clube de Mergulho"}),o.jsx("div",{onClick:()=>P("Bioma: Heteractis Magnifica com Simbiose Luminescente"),className:"absolute top-[55%] right-[6%] w-[24%] h-[10%] cursor-pointer rounded-full hover:bg-[#e61c78]/15 transition-colors",title:"Anêmona do Mar Luminescente"}),o.jsx("div",{onClick:()=>P("Expedições: Mar Vermelho, Mar Negro, Lagos & Maldivas"),className:"absolute top-[67%] left-[8%] w-[40%] h-[4%] cursor-pointer hover:bg-white/5 rounded-xl transition-colors",title:"Locais de Mergulho"}),o.jsx("div",{onClick:()=>_("Expedição: Recifes de Coral do Mar Vermelho"),className:"absolute top-[75%] left-[8%] w-[40%] h-[2.5%] cursor-pointer hover:bg-[#00f5d4]/15 rounded-lg transition-colors px-1",title:"Reservar Expedição no Mar Vermelho"}),o.jsx("div",{onClick:()=>_("Expedição: Naufrágios do Mar Negro"),className:"absolute top-[77.8%] left-[8%] w-[40%] h-[2.5%] cursor-pointer hover:bg-[#3a86ff]/15 rounded-lg transition-colors px-1",title:"Reservar Expedição nos Naufrágios"}),o.jsx("div",{onClick:()=>_("Expedição: Lagos e Pedreiras Cristalinas"),className:"absolute top-[80.4%] left-[8%] w-[40%] h-[2.5%] cursor-pointer hover:bg-[#ffd166]/15 rounded-lg transition-colors px-1",title:"Reservar Expedição nos Lagos"}),o.jsx("div",{onClick:()=>_("Expedição: Maldivas, Indonésia & Tailândia"),className:"absolute top-[83%] left-[8%] w-[42%] h-[3.2%] cursor-pointer hover:bg-[#e61c78]/15 rounded-lg transition-colors px-1",title:"Reservar Expedição Tropical"}),o.jsx("div",{onClick:()=>{qt.playSonarPing(),P("Cardume de Anthias & Donzelas Tropicais em Migração")},className:"absolute top-[71%] right-[6%] w-[42%] h-[18%] cursor-pointer rounded-3xl hover:bg-[#00f5d4]/10 transition-all border border-transparent hover:border-[#00f5d4]/30",title:"Cardume Bioluminescente"}),o.jsx("div",{onClick:()=>P("Santuário de Corais Preservado • Diretriz Zero Touch"),className:"absolute bottom-0 left-0 right-0 h-[16%] cursor-pointer hover:bg-[#00f5d4]/5 transition-colors",title:"Jardim de Corais Abissal"})]})]})},S2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_0",dangerouslySetInnerHTML:{__html:'<button className="button font">Hold Me</button>'}})]}),N2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`

      `}),o.jsx("div",{className:"aq_wrap_1",dangerouslySetInnerHTML:{__html:`<!-- From Deep Sea.io by 0x3ther  - Tags: icon, animation, button, navigation, hover effect, tailwindbutton, tailwindcss -->
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
</div>`}})]}),T2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_2",dangerouslySetInnerHTML:{__html:'<button className="button">Button</button>'}})]}),E2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_3",dangerouslySetInnerHTML:{__html:`<button className="button"> 
  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="icon"> 
  <path fill="#fff" d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path> 
  </svg> 
  <span className="share">SHARE </span> 
  </button>`}})]}),z2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_4",dangerouslySetInnerHTML:{__html:`<button className="btn">
  <span className="text">Button</span>
</button>`}})]}),q2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_5",dangerouslySetInnerHTML:{__html:'<button className="btn">Hover Me!</button>'}})]}),M2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_6",dangerouslySetInnerHTML:{__html:`<span className="switch">
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
</span>`}})]}),A2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_7",dangerouslySetInnerHTML:{__html:`<div className="checkbox-wrap">
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
</div>`}})]}),C2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_8",dangerouslySetInnerHTML:{__html:'<label><input value="on" name="dummy" type="checkbox" className="bubble" /></label>'}})]}),j2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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

      `}),o.jsx("div",{className:"aq_wrap_9",dangerouslySetInnerHTML:{__html:`<label className="switch">
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
</label>`}})]}),O2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_10",dangerouslySetInnerHTML:{__html:`<div className="cards__inner">
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
</div>`}})]}),D2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_11",dangerouslySetInnerHTML:{__html:`<div className="card">
  <div>
    <p className="heading">Popular this month</p>
    <p>Aqua Sphere</p>
    <p>Deep Sea</p>
  </div>

  <button className="card-button">More Info</button>
</div>`}})]}),k2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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


      `}),o.jsx("div",{className:"aq_wrap_12",dangerouslySetInnerHTML:{__html:`<div className="card">
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
</div>`}})]}),U2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_13",dangerouslySetInnerHTML:{__html:`<div className="card">
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
</div>`}})]}),R2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`

      `}),o.jsx("div",{className:"aq_wrap_14",dangerouslySetInnerHTML:{__html:`<!-- From Deep Sea.io by ARUSH221617  - Tags: input -->
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
</form>`}})]}),b1=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_15",dangerouslySetInnerHTML:{__html:`<div className="search-bar-container">
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
</div>`}})]}),x1=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_16",dangerouslySetInnerHTML:{__html:`<div className="search">
        <input placeholder="Search..." type="text" />
        <button type="submit">Go</button>
      </div>`}})]}),v1=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_17",dangerouslySetInnerHTML:{__html:'<input type="text" name="search" placeholder="Search For AnyThink.." className="input" />'}})]}),y1=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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

      `}),o.jsx("div",{className:"aq_wrap_18",dangerouslySetInnerHTML:{__html:`<div id="loader">
  <div className="ls-particles ls-part-1"></div>
  <div className="ls-particles ls-part-2"></div>
  <div className="ls-particles ls-part-3"></div>
  <div className="ls-particles ls-part-4"></div>
  <div className="ls-particles ls-part-5"></div>
  <div className="lightsaber ls-left ls-green"></div>
  <div className="lightsaber ls-right ls-red"></div>
</div>`}})]}),H2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_19",dangerouslySetInnerHTML:{__html:`<div className="lava-lamp">
  <div className="bubble"></div>
  <div className="bubble1"></div>
  <div className="bubble2"></div>
  <div className="bubble3"></div>
</div>`}})]}),B2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_20",dangerouslySetInnerHTML:{__html:`<div className="tooltip-container">
  <span className="tooltip">Deep Sea.io</span>
  <span className="text">Tooltip</span>
</div>`}})]}),Y2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_21",dangerouslySetInnerHTML:{__html:`<label className="container">
  <input type="checkbox" checked="checked" />
  <div className="checkmark"></div>
</label>`}})]}),Z2=({className:_="",onClick:w,...E})=>o.jsxs("div",{className:`inline-block ${_}`,onClick:w,...E,children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"aq_wrap_22",dangerouslySetInnerHTML:{__html:`<label className="container">
  <input checked="checked" type="checkbox" />
  <div className="checkmark"></div>
  <div className="glass-effect"></div>
</label>`}})]}),L2=({isOpen:_,onToggle:w})=>o.jsxs("aside",{"aria-label":"Painel de Módulos Uiverse",className:"fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none",children:[o.jsxs("button",{onClick:()=>{qt.playBubblePop(),w()},className:"pointer-events-auto mb-3 px-5 py-2 rounded-full bg-[#030e1d]/90 hover:bg-[#061833] border border-[#00f5d4]/40 text-[#00f5d4] hover:text-white text-xs font-mono font-medium shadow-[0_0_25px_rgba(0,245,212,0.25)] backdrop-blur-xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95",children:[o.jsx(m1,{className:"w-3.5 h-3.5 text-[#00f5d4] animate-pulse"}),o.jsx("span",{children:"23 COMPONENTES UIVERSE GALAXY HOMOLOGADOS"}),_?o.jsx(Hm,{className:"w-3.5 h-3.5"}):o.jsx(Qm,{className:"w-3.5 h-3.5"})]}),_&&o.jsxs("div",{className:"pointer-events-auto w-full max-w-6xl max-h-[75vh] overflow-y-auto bg-[#020a16]/98 border-t border-[#00f5d4]/30 rounded-t-3xl p-6 sm:p-8 shadow-[0_-20px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl animate-in slide-in-from-bottom duration-300",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/30 flex items-center justify-center text-[#00f5d4]",children:o.jsx(g1,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-display font-bold text-white",children:"Arsenal de Engenharia Subaquática (23 Módulos Uiverse)"}),o.jsx("p",{className:"text-xs font-mono text-neutral-400",children:"Cota obrigatória integrada com isolamento estrito de CSS (Zero conflitos de layout)"})]})]}),o.jsx("button",{onClick:w,className:"text-xs font-mono px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300",children:"Fechar Painel ×"})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4",children:[o.jsx("span",{className:"text-[11px] font-mono uppercase tracking-wider text-[#00f5d4]",children:"1. Botões & Controles Táteis"}),o.jsxs("div",{className:"space-y-4 flex flex-col items-center",children:[o.jsx("div",{onMouseEnter:()=>qt.playBubblePop(),title:"BurgiSimon_wonderful-seahorse-35",children:o.jsx(S2,{})}),o.jsx("div",{onMouseEnter:()=>qt.playBubblePop(),title:"0x3ther_heavy-dragon-56",children:o.jsx(N2,{})}),o.jsx("div",{onMouseEnter:()=>qt.playBubblePop(),title:"Dashrath-Sharma_chatty-tiger-70",children:o.jsx(T2,{})}),o.jsx("div",{onMouseEnter:()=>qt.playBubblePop(),title:"Bodyhc_sharp-seahorse-46",children:o.jsx(E2,{})}),o.jsx("div",{onMouseEnter:()=>qt.playBubblePop(),title:"John-CFO_green-rabbit-93",children:o.jsx(z2,{})}),o.jsx("div",{onMouseEnter:()=>qt.playBubblePop(),title:"EmmaxPlay_rude-yak-98",children:o.jsx(q2,{})})]})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4",children:[o.jsx("span",{className:"text-[11px] font-mono uppercase tracking-wider text-[#3a86ff]",children:"2. Switches, Toggles & Loaders"}),o.jsxs("div",{className:"space-y-5 flex flex-col items-center",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Sonar Ambience:"}),o.jsx(M2,{})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Física de Bolha:"}),o.jsx(A2,{})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Lanterna Canhão:"}),o.jsx(C2,{})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Unidades M/FT:"}),o.jsx(j2,{})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Pulso de O2:"}),o.jsx(y1,{})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Subida de Bolhas:"}),o.jsx(H2,{})]})]})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4",children:[o.jsx("span",{className:"text-[11px] font-mono uppercase tracking-wider text-[#e61c78]",children:"3. Inputs, Checkboxes & Cards"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-neutral-400 font-mono block mb-1",children:"Busca de Zona:"}),o.jsx(R2,{})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-neutral-400 font-mono block mb-1",children:"Nome do Mergulhador:"}),o.jsx(b1,{})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-neutral-400 font-mono block mb-1",children:"E-mail:"}),o.jsx(x1,{})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-neutral-400 font-mono block mb-1",children:"Nível de Certificação:"}),o.jsx(v1,{})]}),o.jsxs("div",{className:"flex items-center justify-between pt-2",children:[o.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Protocolo Nitrox:"}),o.jsx(Y2,{})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Mergulho Noturno:"}),o.jsx(Z2,{})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs text-neutral-300 font-mono",children:"Tooltip de Biosfera:"}),o.jsx(B2,{})]})]})]})]}),o.jsxs("div",{className:"mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6",children:[o.jsx(O2,{}),o.jsx(D2,{}),o.jsx(k2,{}),o.jsx(U2,{})]})]})]}),G2=({depthUnit:_})=>{const[w,E]=jt.useState(0),[h,Y]=jt.useState(!1);jt.useEffect(()=>{const S=()=>{const R=document.documentElement.scrollHeight-window.innerHeight,wt=window.scrollY,Mt=R>0?Math.min(Math.max(wt/R,0),1):0;E(Mt)};return window.addEventListener("scroll",S,{passive:!0}),()=>window.removeEventListener("scroll",S)},[]);const Q=Math.round(w*140),st=_==="meters"?Q:Math.round(Q*3.28084),P=_==="meters"?"M":"FT",ot=(27.4-w*23.2).toFixed(1),dt=(1+Q/10).toFixed(1),B=S=>S<20?"EPIPELÁGICA":S<60?"MESOPELÁGICA":S<100?"BATIAL":"ABISSAL";return o.jsx("aside",{"aria-label":"Telemetria de Mergulho",className:"fixed right-4 bottom-24 z-40 hidden lg:flex flex-col items-end pointer-events-auto",children:h?o.jsxs("button",{onClick:()=>{qt.playBubblePop(),Y(!1)},className:"p-2.5 rounded-full bg-[#030e1d]/90 border border-[#00f5d4]/40 text-[#00f5d4] hover:text-white shadow-lg backdrop-blur-md flex items-center gap-1.5 text-xs font-mono",title:"Expandir Telemetria HUD",children:[o.jsx(d1,{className:"w-4 h-4 animate-pulse"}),o.jsxs("span",{children:[st,P]}),o.jsx(Ym,{className:"w-3.5 h-3.5"})]}):o.jsxs("div",{onMouseEnter:()=>qt.playBubblePop(),className:"backdrop-blur-xl bg-[#030e1d]/95 border border-[#00f5d4]/30 p-3.5 rounded-2xl shadow-[0_0_35px_rgba(0,245,212,0.15)] flex flex-col gap-2.5 w-44 transition-all duration-300 hover:border-[#00f5d4]/60",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-1.5",children:[o.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-[#00f5d4] font-mono tracking-wider",children:[o.jsx(d1,{className:"w-3.5 h-3.5 animate-pulse text-[#00f5d4]"}),o.jsx("span",{children:"HUD PROFUNDIDADE"})]}),o.jsx("button",{onClick:()=>Y(!0),className:"text-neutral-400 hover:text-white text-xs",title:"Recolher HUD",children:o.jsx(Lm,{className:"w-3.5 h-3.5"})})]}),o.jsxs("div",{className:"flex items-baseline justify-between",children:[o.jsxs("span",{className:"text-2xl font-display font-bold text-white tracking-tight",children:[st," ",o.jsx("span",{className:"text-xs font-mono text-[#00f5d4]",children:P})]}),o.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase",children:B(Q)})]}),o.jsx("div",{className:"w-full bg-white/10 h-1 rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-[#00f5d4] via-[#3a86ff] to-[#e61c78]",style:{width:`${Math.max(w*100,5)}%`}})}),o.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[10px] font-mono pt-1 border-t border-white/10",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-neutral-400 block",children:"PRESSÃO:"}),o.jsxs("strong",{className:"text-white",children:[dt," BAR"]})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-neutral-400 block",children:"TEMP:"}),o.jsxs("strong",{className:"text-white",children:[ot," °C"]})]})]})]})})};var jc={};(function _(w,E,h,Y){var Q=!!(w.Worker&&w.Blob&&w.Promise&&w.OffscreenCanvas&&w.OffscreenCanvasRenderingContext2D&&w.HTMLCanvasElement&&w.HTMLCanvasElement.prototype.transferControlToOffscreen&&w.URL&&w.URL.createObjectURL),st=typeof Path2D=="function"&&typeof DOMMatrix=="function",P=(function(){if(!w.OffscreenCanvas)return!1;try{var b=new OffscreenCanvas(1,1),d=b.getContext("2d");d.fillRect(0,0,1,1);var H=b.transferToImageBitmap();d.createPattern(H,"no-repeat")}catch{return!1}return!0})();function ot(){}function dt(b){var d=E.exports.Promise,H=d!==void 0?d:w.Promise;return typeof H=="function"?new H(b):(b(ot,ot),null)}var B=(function(b,d){return{transform:function(H){if(b)return H;if(d.has(H))return d.get(H);var X=new OffscreenCanvas(H.width,H.height),s=X.getContext("2d");return s.drawImage(H,0,0),d.set(H,X),X},clear:function(){d.clear()}}})(P,new Map),S=(function(){var b=Math.floor(16.666666666666668),d,H,X={},s=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(d=function(N){var M=Math.random();return X[M]=requestAnimationFrame(function q(O){s===O||s+b-1<O?(s=O,delete X[M],N()):X[M]=requestAnimationFrame(q)}),M},H=function(N){X[N]&&cancelAnimationFrame(X[N])}):(d=function(N){return setTimeout(N,b)},H=function(N){return clearTimeout(N)}),{frame:d,cancel:H}})(),R=(function(){var b,d,H={};function X(s){function N(M,q){s.postMessage({options:M||{},callback:q})}s.init=function(q){var O=q.transferControlToOffscreen();s.postMessage({canvas:O},[O])},s.fire=function(q,O,Z){if(d)return N(q,null),d;var V=Math.random().toString(36).slice(2);return d=dt(function(A){function D(St){St.data.callback===V&&(delete H[V],s.removeEventListener("message",D),d=null,B.clear(),Z(),A())}s.addEventListener("message",D),N(q,V),H[V]=D.bind(null,{data:{callback:V}})}),d},s.reset=function(){s.postMessage({reset:!0});for(var q in H)H[q](),delete H[q]}}return function(){if(b)return b;if(!h&&Q){var s=["var CONFETTI, SIZE = {}, module = {};","("+_.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{b=new Worker(URL.createObjectURL(new Blob([s])))}catch(N){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",N),null}X(b)}return b}})(),wt={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Mt(b,d){return d?d(b):b}function Ht(b){return b!=null}function L(b,d,H){return Mt(b&&Ht(b[d])?b[d]:wt[d],H)}function At(b){return b<0?0:Math.floor(b)}function ue(b,d){return Math.floor(Math.random()*(d-b))+b}function Qe(b){return parseInt(b,16)}function je(b){return b.map(Oe)}function Oe(b){var d=String(b).replace(/[^0-9a-f]/gi,"");return d.length<6&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),{r:Qe(d.substring(0,2)),g:Qe(d.substring(2,4)),b:Qe(d.substring(4,6))}}function re(b){var d=L(b,"origin",Object);return d.x=L(d,"x",Number),d.y=L(d,"y",Number),d}function tt(b){b.width=document.documentElement.clientWidth,b.height=document.documentElement.clientHeight}function ft(b){var d=b.getBoundingClientRect();b.width=d.width,b.height=d.height}function De(b){var d=document.createElement("canvas");return d.style.position="fixed",d.style.top="0px",d.style.left="0px",d.style.pointerEvents="none",d.style.zIndex=b,d}function he(b,d,H,X,s,N,M,q,O){b.save(),b.translate(d,H),b.rotate(N),b.scale(X,s),b.arc(0,0,1,M,q,O),b.restore()}function pe(b){var d=b.angle*(Math.PI/180),H=b.spread*(Math.PI/180);return{x:b.x,y:b.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:b.startVelocity*.5+Math.random()*b.startVelocity,angle2D:-d+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:b.color,shape:b.shape,tick:0,totalTicks:b.ticks,decay:b.decay,drift:b.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:b.gravity*3,ovalScalar:.6,scalar:b.scalar,flat:b.flat}}function oe(b,d){d.x+=Math.cos(d.angle2D)*d.velocity+d.drift,d.y+=Math.sin(d.angle2D)*d.velocity+d.gravity,d.velocity*=d.decay,d.flat?(d.wobble=0,d.wobbleX=d.x+10*d.scalar,d.wobbleY=d.y+10*d.scalar,d.tiltSin=0,d.tiltCos=0,d.random=1):(d.wobble+=d.wobbleSpeed,d.wobbleX=d.x+10*d.scalar*Math.cos(d.wobble),d.wobbleY=d.y+10*d.scalar*Math.sin(d.wobble),d.tiltAngle+=.1,d.tiltSin=Math.sin(d.tiltAngle),d.tiltCos=Math.cos(d.tiltAngle),d.random=Math.random()+2);var H=d.tick++/d.totalTicks,X=d.x+d.random*d.tiltCos,s=d.y+d.random*d.tiltSin,N=d.wobbleX+d.random*d.tiltCos,M=d.wobbleY+d.random*d.tiltSin;if(b.fillStyle="rgba("+d.color.r+", "+d.color.g+", "+d.color.b+", "+(1-H)+")",b.beginPath(),st&&d.shape.type==="path"&&typeof d.shape.path=="string"&&Array.isArray(d.shape.matrix))b.fill(K(d.shape.path,d.shape.matrix,d.x,d.y,Math.abs(N-X)*.1,Math.abs(M-s)*.1,Math.PI/10*d.wobble));else if(d.shape.type==="bitmap"){var q=Math.PI/10*d.wobble,O=Math.abs(N-X)*.1,Z=Math.abs(M-s)*.1,V=d.shape.bitmap.width*d.scalar,A=d.shape.bitmap.height*d.scalar,D=new DOMMatrix([Math.cos(q)*O,Math.sin(q)*O,-Math.sin(q)*Z,Math.cos(q)*Z,d.x,d.y]);D.multiplySelf(new DOMMatrix(d.shape.matrix));var St=b.createPattern(B.transform(d.shape.bitmap),"no-repeat");St.setTransform(D),b.globalAlpha=1-H,b.fillStyle=St,b.fillRect(d.x-V/2,d.y-A/2,V,A),b.globalAlpha=1}else if(d.shape==="circle")b.ellipse?b.ellipse(d.x,d.y,Math.abs(N-X)*d.ovalScalar,Math.abs(M-s)*d.ovalScalar,Math.PI/10*d.wobble,0,2*Math.PI):he(b,d.x,d.y,Math.abs(N-X)*d.ovalScalar,Math.abs(M-s)*d.ovalScalar,Math.PI/10*d.wobble,0,2*Math.PI);else if(d.shape==="star")for(var at=Math.PI/2*3,Bt=4*d.scalar,kt=8*d.scalar,bt=d.x,it=d.y,Xt=5,ne=Math.PI/Xt;Xt--;)bt=d.x+Math.cos(at)*kt,it=d.y+Math.sin(at)*kt,b.lineTo(bt,it),at+=ne,bt=d.x+Math.cos(at)*Bt,it=d.y+Math.sin(at)*Bt,b.lineTo(bt,it),at+=ne;else b.moveTo(Math.floor(d.x),Math.floor(d.y)),b.lineTo(Math.floor(d.wobbleX),Math.floor(s)),b.lineTo(Math.floor(N),Math.floor(M)),b.lineTo(Math.floor(X),Math.floor(d.wobbleY));return b.closePath(),b.fill(),d.tick<d.totalTicks}function Ie(b,d,H,X,s){var N=d.slice(),M=b.getContext("2d"),q,O,Z=dt(function(V){function A(){q=O=null,M.clearRect(0,0,X.width,X.height),B.clear(),s(),V()}function D(){h&&!(X.width===Y.width&&X.height===Y.height)&&(X.width=b.width=Y.width,X.height=b.height=Y.height),!X.width&&!X.height&&(H(b),X.width=b.width,X.height=b.height),M.clearRect(0,0,X.width,X.height),N=N.filter(function(St){return oe(M,St)}),N.length?q=S.frame(D):A()}q=S.frame(D),O=A});return{addFettis:function(V){return N=N.concat(V),Z},canvas:b,promise:Z,reset:function(){q&&S.cancel(q),O&&O()}}}function Pe(b,d){var H=!b,X=!!L(d||{},"resize"),s=!1,N=L(d,"disableForReducedMotion",Boolean),M=Q&&!!L(d||{},"useWorker"),q=M?R():null,O=H?tt:ft,Z=b&&q?!!b.__confetti_initialized:!1,V=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,A;function D(at,Bt,kt){for(var bt=L(at,"particleCount",At),it=L(at,"angle",Number),Xt=L(at,"spread",Number),ne=L(at,"startVelocity",Number),ta=L(at,"decay",Number),zl=L(at,"gravity",Number),ql=L(at,"drift",Number),da=L(at,"colors",je),yn=L(at,"ticks",Number),al=L(at,"shapes"),_n=L(at,"scalar"),bi=!!L(at,"flat"),Ve=re(at),Ml=bt,ll=[],Xu=b.width*Ve.x,xi=b.height*Ve.y;Ml--;)ll.push(pe({x:Xu,y:xi,angle:it,spread:Xt,startVelocity:ne,color:da[Ml%da.length],shape:al[ue(0,al.length)],ticks:yn,decay:ta,gravity:zl,drift:ql,scalar:_n,flat:bi}));return A?A.addFettis(ll):(A=Ie(b,ll,O,Bt,kt),A.promise)}function St(at){var Bt=N||L(at,"disableForReducedMotion",Boolean),kt=L(at,"zIndex",Number);if(Bt&&V)return dt(function(ne){ne()});H&&A?b=A.canvas:H&&!b&&(b=De(kt),document.body.appendChild(b)),X&&!Z&&O(b);var bt={width:b.width,height:b.height};q&&!Z&&q.init(b),Z=!0,q&&(b.__confetti_initialized=!0);function it(){if(q){var ne={getBoundingClientRect:function(){if(!H)return b.getBoundingClientRect()}};O(ne),q.postMessage({resize:{width:ne.width,height:ne.height}});return}bt.width=bt.height=null}function Xt(){A=null,X&&(s=!1,w.removeEventListener("resize",it)),H&&b&&(document.body.contains(b)&&document.body.removeChild(b),b=null,Z=!1)}return X&&!s&&(s=!0,w.addEventListener("resize",it,!1)),q?q.fire(at,bt,Xt):D(at,bt,Xt)}return St.reset=function(){q&&q.reset(),A&&A.reset()},St}var Dt;function j(){return Dt||(Dt=Pe(null,{useWorker:!0,resize:!0})),Dt}function K(b,d,H,X,s,N,M){var q=new Path2D(b),O=new Path2D;O.addPath(q,new DOMMatrix(d));var Z=new Path2D;return Z.addPath(O,new DOMMatrix([Math.cos(M)*s,Math.sin(M)*s,-Math.sin(M)*N,Math.cos(M)*N,H,X])),Z}function F(b){if(!st)throw new Error("path confetti are not supported in this browser");var d,H;typeof b=="string"?d=b:(d=b.path,H=b.matrix);var X=new Path2D(d),s=document.createElement("canvas"),N=s.getContext("2d");if(!H){for(var M=1e3,q=M,O=M,Z=0,V=0,A,D,St=0;St<M;St+=2)for(var at=0;at<M;at+=2)N.isPointInPath(X,St,at,"nonzero")&&(q=Math.min(q,St),O=Math.min(O,at),Z=Math.max(Z,St),V=Math.max(V,at));A=Z-q,D=V-O;var Bt=10,kt=Math.min(Bt/A,Bt/D);H=[kt,0,0,kt,-Math.round(A/2+q)*kt,-Math.round(D/2+O)*kt]}return{type:"path",path:d,matrix:H}}function gt(b){var d,H=1,X="#000000",s='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof b=="string"?d=b:(d=b.text,H="scalar"in b?b.scalar:H,s="fontFamily"in b?b.fontFamily:s,X="color"in b?b.color:X);var N=10*H,M=""+N+"px "+s,q=new OffscreenCanvas(N,N),O=q.getContext("2d");O.font=M;var Z=O.measureText(d),V=Math.ceil(Z.actualBoundingBoxRight+Z.actualBoundingBoxLeft),A=Math.ceil(Z.actualBoundingBoxAscent+Z.actualBoundingBoxDescent),D=2,St=Z.actualBoundingBoxLeft+D,at=Z.actualBoundingBoxAscent+D;V+=D+D,A+=D+D,q=new OffscreenCanvas(V,A),O=q.getContext("2d"),O.font=M,O.fillStyle=X,O.fillText(d,St,at);var Bt=1/H;return{type:"bitmap",bitmap:q.transferToImageBitmap(),matrix:[Bt,0,0,Bt,-V*Bt/2,-A*Bt/2]}}E.exports=function(){return j().apply(this,arguments)},E.exports.reset=function(){j().reset()},E.exports.create=Pe,E.exports.shapeFromPath=F,E.exports.shapeFromText=gt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),jc,!1);const Q2=jc.exports;jc.exports.create;const V2=({isOpen:_,onClose:w,initialTopic:E="Mergulho de Batismo & Open Water"})=>{const[h,Y]=jt.useState(E),[Q,st]=jt.useState("2026-11-20"),[P,ot]=jt.useState(""),[dt,B]=jt.useState(""),[S,R]=jt.useState(!1),[wt,Mt]=jt.useState(!1);if(!_)return null;const Ht=L=>{L.preventDefault(),Mt(!0),qt.playSonarPing(),setTimeout(()=>{Mt(!1),R(!0),Q2({particleCount:80,spread:70,origin:{y:.6},colors:["#00f5d4","#e61c78","#3a86ff","#ffd166"]})},900)};return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200",children:o.jsxs("div",{className:"relative w-full max-w-lg rounded-3xl bg-[#030e1d]/95 border border-[#00f5d4]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,245,212,0.25)] overflow-hidden",onClick:L=>L.stopPropagation(),children:[o.jsx("div",{className:"absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#00f5d4]/20 blur-3xl pointer-events-none"}),o.jsx("div",{className:"absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#e61c78]/20 blur-3xl pointer-events-none"}),o.jsx("button",{onClick:()=>{qt.playBubblePop(),w()},className:"absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors",children:o.jsx(Cc,{className:"w-4 h-4"})}),S?o.jsxs("div",{className:"text-center py-8 flex flex-col items-center",children:[o.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]",children:o.jsx(Xm,{className:"w-8 h-8"})}),o.jsx("h3",{className:"text-2xl font-display font-bold text-white mb-2",children:"Imersão Confirmada com Sucesso!"}),o.jsx("p",{className:"text-sm text-neutral-300 max-w-md leading-relaxed mb-6 font-light",children:"Nossa equipe de instrutores enviou seu protocolo de segurança, lista de checagem médica e voucher de expedição para seu e-mail."}),o.jsxs("div",{className:"p-4 rounded-xl bg-white/5 border border-white/10 w-full text-left text-xs font-mono text-neutral-300 space-y-1 mb-6",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Expedição:"})," ",h]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Data Reservada:"})," ",Q]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Status:"})," Vaga Bloqueada no Barco Principal"]})]}),o.jsx("button",{onClick:()=>{qt.playBubblePop(),R(!1),w()},className:"px-6 py-2.5 rounded-full bg-[#00f5d4] text-[#020915] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#70e000] transition-colors",children:"Concluir & Retornar ao Oceano"})]}):o.jsxs("form",{onSubmit:Ht,className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center gap-2 text-[#00f5d4] text-xs font-mono tracking-widest uppercase",children:[o.jsx(v2,{className:"w-4 h-4 animate-pulse"}),o.jsx("span",{children:"ЗАПИСАТЬСЯ НА ПОГРУЖЕНИЕ • AGENDAR IMERSÃO"})]}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white",children:"Passaporte de Imersão Aqua Sphere"}),o.jsx("p",{className:"text-xs text-neutral-300 font-light -mt-2",children:"Selecione seu curso ou expedição desejada para garantir vaga com equipamento calibrado."}),o.jsxs("div",{className:"flex flex-col gap-1.5 mt-2",children:[o.jsx("label",{className:"text-xs font-mono text-neutral-300",children:"Programa / Expedição"}),o.jsx("input",{type:"text",value:h,onChange:L=>Y(L.target.value),className:"w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#00f5d4] transition-colors",placeholder:"Ex: Recifes de Coral do Mar Vermelho ou Open Water",required:!0})]}),o.jsxs("div",{className:"flex flex-col gap-1.5",children:[o.jsx("label",{className:"text-xs font-mono text-neutral-300",children:"Data Preferencial"}),o.jsx("input",{type:"date",value:Q,onChange:L=>st(L.target.value),className:"w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#00f5d4] transition-colors",required:!0})]}),o.jsxs("div",{className:"space-y-3 pt-1",children:[o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("span",{className:"text-[11px] font-mono text-neutral-400",children:"Nome Completo do Mergulhador:"}),o.jsx(b1,{})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("span",{className:"text-[11px] font-mono text-neutral-400",children:"E-mail de Contato:"}),o.jsx(x1,{})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("span",{className:"text-[11px] font-mono text-neutral-400",children:"Nível Atual de Certificação (PADI/SSI/Nenhum):"}),o.jsx(v1,{})]})]}),o.jsxs("div",{className:"flex items-center gap-2 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300 font-sans mt-2",children:[o.jsx(f2,{className:"w-4 h-4 text-emerald-400 shrink-0"}),o.jsx("span",{children:"Equipamento revisado sob protocolo DAN (Divers Alert Network)."})]}),o.jsx("button",{type:"submit",disabled:wt,onClick:()=>qt.playBubblePop(),className:"mt-3 w-full py-3 rounded-full font-mono text-xs uppercase font-bold tracking-wider text-white shadow-[0_0_25px_rgba(230,28,120,0.6)] hover:shadow-[0_0_35px_rgba(230,28,120,0.85)] transition-all duration-300 disabled:opacity-50",style:{background:"linear-gradient(135deg, #f72585 0%, #b5179e 60%, #7209b7 100%)"},children:wt?o.jsxs("div",{className:"flex items-center justify-center gap-2",children:[o.jsx(y1,{}),o.jsx("span",{children:"Calibrando Mistura de Gases..."})]}):"Confirmar Inscrição na Expedição"})]})]})})},X2=[{title:"Mergulho de Batismo & Open Water",ruTitle:"Начальный курс дайвинga",hours:"32 Horas (Teoria + 6 Imersões)",depth:"18 Metros",price:"R$ 1.950",desc:"A porta de entrada oficial para o oceano com certificação vitalícia PADI/SSI.",features:["Equipamento completo incluso","Instrutor sênior 1:1","Logbook digital internacional"]},{title:"Advanced & Deep Diver (40m)",ruTitle:"Глубоководный курс (40м)",hours:"40 Horas (8 Imersões Técnicas)",depth:"40 Metros",price:"R$ 2.680",popular:!0,desc:"Navegação subaquática fina, gerenciamento de consumo e exploração noturna de recifes.",features:["Mergulho Noturno Bioluminescente","Penetração básica em naufrágios","Gás enriquecido Nitrox"]},{title:"Normoxic Trimix & Rebreather CCR",ruTitle:"Технический тримикс и ребризер",hours:"60 Horas (10 Imersões)",depth:"75 - 100 Metros",price:"R$ 5.800",desc:"Mergulho técnico em circuito fechado sem bolhas, com misturas de Hélio no abismo.",features:["Descompressão acelerada de O2 puro","Zero narcose por nitrogênio","Acesso a expedições científicas"]}],K2=({isOpen:_,onClose:w,onSelectCourse:E})=>_?o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200",children:o.jsxs("div",{className:"relative w-full max-w-2xl rounded-3xl bg-[#030e1d]/95 border border-[#00f5d4]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,245,212,0.25)] overflow-hidden",onClick:h=>h.stopPropagation(),children:[o.jsx("button",{onClick:()=>{qt.playBubblePop(),w()},className:"absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white",children:o.jsx(Cc,{className:"w-4 h-4"})}),o.jsxs("div",{className:"flex items-center gap-2 text-[#00f5d4] text-xs font-mono tracking-widest uppercase mb-1",children:[o.jsx(Um,{className:"w-4 h-4"}),o.jsx("span",{children:"AQUA SPHERE ACADEMY • КУРСЫ"})]}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white mb-2",children:"Cursos & Certificações PADI / SSI / TDI"}),o.jsx("p",{className:"text-xs text-neutral-300 font-light mb-6",children:"Formação técnica de elite para todos os níveis de experiência no oceano."}),o.jsx("div",{className:"space-y-4",children:X2.map((h,Y)=>o.jsxs("div",{className:`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${h.popular?"bg-[#041630] border-[#00f5d4]/60":"bg-white/5 border-white/10"}`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("h4",{className:"text-base font-display font-bold text-white",children:h.title}),h.popular&&o.jsx("span",{className:"px-2 py-0.5 rounded-full bg-[#00f5d4] text-[#020915] text-[9px] font-mono font-bold uppercase",children:"Popular"})]}),o.jsx("span",{className:"text-[11px] font-mono text-neutral-400 italic block mb-1",children:h.ruTitle}),o.jsx("p",{className:"text-xs text-neutral-300 font-light",children:h.desc}),o.jsxs("div",{className:"flex items-center gap-4 text-[10px] font-mono text-[#00f5d4] mt-2",children:[o.jsx("span",{children:h.hours}),o.jsxs("span",{children:["Profundidade: ",h.depth]})]})]}),o.jsxs("div",{className:"flex flex-col items-end shrink-0 w-full sm:w-auto",children:[o.jsx("span",{className:"text-lg font-display font-bold text-white mb-2",children:h.price}),o.jsx("button",{onClick:()=>{qt.playBubblePop(),E(h.title),w()},className:"px-4 py-1.5 rounded-xl bg-[#00f5d4] text-[#020915] font-mono text-xs font-bold uppercase hover:bg-[#70e000] transition-colors",children:"Inscrever-se"})]})]},Y))})]})}):null,J2=({isOpen:_,onClose:w})=>_?o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200",children:o.jsxs("div",{className:"relative w-full max-w-lg rounded-3xl bg-[#030e1d]/95 border border-[#00f5d4]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,245,212,0.25)] overflow-hidden",onClick:E=>E.stopPropagation(),children:[o.jsx("button",{onClick:()=>{qt.playBubblePop(),w()},className:"absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white",children:o.jsx(Cc,{className:"w-4 h-4"})}),o.jsxs("div",{className:"flex items-center gap-2 text-[#00f5d4] text-xs font-mono tracking-widest uppercase mb-1",children:[o.jsx(Dm,{className:"w-4 h-4"}),o.jsx("span",{children:"КОНТАКТЫ И СВЯЗЬ • НОМЕР"})]}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white mb-2",children:"Central Operacional Aqua Sphere"}),o.jsx("p",{className:"text-xs text-neutral-300 font-light mb-6",children:"Comunicação marítima direta, plantão de resgate hiperbárico 24/7 e bases náuticas."}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/30 flex items-center justify-center text-[#00f5d4] shrink-0",children:o.jsx(n2,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase block",children:"Telefone Central"}),o.jsx("a",{href:"tel:+5511987654321",className:"text-sm font-mono font-bold text-white hover:text-[#00f5d4]",children:"+55 (11) 98765-4321 • +7 (495) 892-3401"})]})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#e61c78]/10 border border-[#e61c78]/30 flex items-center justify-center text-[#e61c78] shrink-0",children:o.jsx(u2,{className:"w-5 h-5 animate-pulse"})}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase block",children:"Rádio VHF Marítimo (Chamada e Socorro)"}),o.jsx("span",{className:"text-sm font-mono font-bold text-white",children:"Canal 16 / 72 (156.800 MHz)"})]})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#3a86ff]/10 border border-[#3a86ff]/30 flex items-center justify-center text-[#3a86ff] shrink-0",children:o.jsx(a2,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase block",children:"E-mail de Despacho de Expedição"}),o.jsx("a",{href:"mailto:expedicoes@aquasphere.club",className:"text-sm font-mono font-bold text-white hover:text-[#3a86ff]",children:"expedicoes@aquasphere.club"})]})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2",children:[o.jsx(o2,{className:"w-4 h-4 shrink-0 text-amber-400"}),o.jsx("span",{children:"Mergulhos sob cobertura de seguro hiperbárico DAN Platinum internacional."})]})]})]})}):null;function F2(){const[_,w]=jt.useState(!1),[E,h]=jt.useState("Mergulho de Batismo & Open Water"),[Y,Q]=jt.useState(!1),[st,P]=jt.useState(!1),[ot,dt]=jt.useState(!1),[B,S]=jt.useState("meters"),[R,wt]=jt.useState(!1),Mt=At=>{At&&h(At),w(!0)},Ht=()=>{const At=qt.toggle();wt(At)},L=()=>{qt.playBubblePop(),S(At=>At==="meters"?"feet":"meters")};return o.jsxs("div",{className:"relative min-h-screen bg-[#020915] text-[#e2f1fc] selection:bg-[#00f5d4]/30 selection:text-white font-sans antialiased overflow-x-hidden flex flex-col justify-between py-4 sm:py-6 px-3 sm:px-6",children:[o.jsx("div",{className:"fixed inset-0 pointer-events-none z-0",children:o.jsx("div",{className:"absolute inset-0 opacity-20 filter blur-3xl scale-110",style:{background:"radial-gradient(circle at 50% 20%, #0d3b66 0%, #031429 50%, #020915 90%)"}})}),o.jsxs("header",{className:"relative z-30 w-full max-w-[736px] mx-auto mb-4 flex items-center justify-between text-xs font-mono px-2 py-2 rounded-2xl bg-[#030e1d]/80 border border-white/10 backdrop-blur-md shadow-lg",children:[o.jsxs("div",{className:"flex items-center gap-2 text-white",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00f5d4] shadow-[0_0_8px_#00f5d4]"}),o.jsx("span",{className:"font-bold tracking-wider",children:"AQUA SPHERE"}),o.jsx("span",{className:"text-neutral-500 hidden sm:inline",children:"•"}),o.jsx("span",{className:"text-neutral-400 hidden sm:inline",children:"1:1 MATRIZ HOMOLOGADA"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:Ht,className:`px-2.5 py-1 rounded-full border flex items-center gap-1.5 transition-all ${R?"bg-[#00f5d4]/20 border-[#00f5d4] text-[#00f5d4]":"bg-white/5 border-white/10 text-neutral-400 hover:text-white"}`,title:"Sonar Hidrofônico Procedural (Web Audio API)",children:[R?o.jsx(m2,{className:"w-3.5 h-3.5 animate-pulse"}):o.jsx(b2,{className:"w-3.5 h-3.5"}),o.jsx("span",{className:"text-[10px] hidden sm:inline",children:R?"SONAR ATIVO":"SONAR MUTADO"})]}),o.jsxs("button",{onClick:L,className:"px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-neutral-300 hover:text-white flex items-center gap-1",title:"Alternar Metros / Pés",children:[o.jsx(Jm,{className:"w-3 h-3 text-[#00f5d4]"}),o.jsx("span",{children:B==="meters"?"M":"FT"})]}),o.jsxs("button",{onClick:()=>{qt.playBubblePop(),dt(!ot)},className:"px-2.5 py-1 rounded-full bg-[#00f5d4]/15 border border-[#00f5d4]/50 text-[10px] text-[#00f5d4] hover:bg-[#00f5d4]/25 transition-all font-bold flex items-center gap-1",children:[o.jsx(m1,{className:"w-3 h-3"}),o.jsx("span",{children:"23 UIVERSE"})]})]})]}),o.jsx("main",{className:"relative z-10 w-full flex-1 flex flex-col items-center justify-center",children:o.jsx(w2,{onOpenBooking:Mt,onOpenCourses:()=>Q(!0),onOpenContact:()=>P(!0),isAudioOn:R,onToggleAudio:Ht})}),o.jsx(G2,{depthUnit:B}),o.jsx(L2,{isOpen:ot,onToggle:()=>dt(!ot)}),o.jsx(V2,{isOpen:_,onClose:()=>w(!1),initialTopic:E}),o.jsx(K2,{isOpen:Y,onClose:()=>Q(!1),onSelectCourse:At=>Mt(`Curso: ${At}`)}),o.jsx(J2,{isOpen:st,onClose:()=>P(!1)}),o.jsxs("footer",{className:"relative z-20 w-full max-w-[736px] mx-auto mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 gap-3",children:[o.jsxs("div",{className:"flex items-center gap-2 text-neutral-300",children:[o.jsx("span",{className:"font-bold text-white",children:"AQUA SPHERE"}),o.jsx("span",{className:"text-neutral-600",children:"•"}),o.jsx("span",{children:"Desde 2012 • VHF Ch-16"})]}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsxs("div",{className:"flex items-center gap-1 text-[#00f5d4]",children:[o.jsx(g1,{size:12}),o.jsx("span",{children:"23 MÓDULOS UIVERSE ATIVOS"})]}),o.jsxs("a",{href:"https://github.com/vn-24k/aqua-sphere",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 hover:text-white transition-colors",children:[o.jsx(Pm,{size:12}),o.jsx("span",{children:"GitHub"})]}),o.jsxs("a",{href:"https://aqua-sphere-red.vercel.app",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 hover:text-[#00f5d4] transition-colors",children:[o.jsx($m,{size:12}),o.jsx("span",{children:"Vercel Live"})]})]})]})]})}Mm.createRoot(document.getElementById("root")).render(o.jsx(_m.StrictMode,{children:o.jsx(F2,{})}));

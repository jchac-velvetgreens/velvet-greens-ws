(function(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["offers"] = factory();
	else
		root["og"] = root["og"] || {}, root["og"]["offers"] = factory();
})(window, function() {
  var module={}, exports={};(factory => {
if(typeof exports === 'object' && typeof module === 'object')
  module.exports = factory();
else if(typeof define === 'function' && define.amd)
  define([], factory);
else {
  window.og = window.og || {};
  window.og['offers'] = factory();
}      
})(()=>{ 
var lib=(()=>{var ja=Object.create;var mt=Object.defineProperty;var Ga=Object.getOwnPropertyDescriptor;var Ha=Object.getOwnPropertyNames;var Ba=Object.getPrototypeOf,za=Object.prototype.hasOwnProperty;var n=(t,e)=>mt(t,"name",{value:e,configurable:!0});var X=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ln=(t,e)=>{for(var r in e)mt(t,r,{get:e[r],enumerable:!0})},Mn=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ha(e))!za.call(t,i)&&i!==r&&mt(t,i,{get:()=>e[i],enumerable:!(o=Ga(e,i))||o.enumerable});return t};var ae=(t,e,r)=>(r=t!=null?ja(Ba(t)):{},Mn(e||!t||!t.__esModule?mt(r,"default",{value:t,enumerable:!0}):r,t)),Ya=t=>Mn(mt({},"__esModule",{value:!0}),t);var zt=X((Bt,Yn)=>{(function(t,e){typeof Bt=="object"&&typeof Yn<"u"?e(Bt):typeof define=="function"&&define.amd?define(["exports"],e):(t=t||self,e(t.throttleDebounce={}))})(Bt,function(t){"use strict";function e(o,i,s,a){var c,l=!1,p=0;function d(){c&&clearTimeout(c)}n(d,"clearExistingTimeout");function f(){d(),l=!0}n(f,"cancel"),typeof i!="boolean"&&(a=s,s=i,i=void 0);function h(){for(var _=arguments.length,P=new Array(_),m=0;m<_;m++)P[m]=arguments[m];var E=this,T=Date.now()-p;if(l)return;function y(){p=Date.now(),s.apply(E,P)}n(y,"exec");function v(){c=void 0}n(v,"clear"),a&&!c&&y(),d(),a===void 0&&T>o?y():i!==!0&&(c=setTimeout(a?v:y,a===void 0?o-T:o))}return n(h,"wrapper"),h.cancel=f,h}n(e,"throttle");function r(o,i,s){return s===void 0?e(o,i,!1):e(o,s,i!==!1)}n(r,"debounce"),t.debounce=r,t.throttle=e,Object.defineProperty(t,"__esModule",{value:!0})})});var Et=X((Ju,fi)=>{var nc="Expected a function",ai="__lodash_hash_undefined__",ic="[object Function]",sc="[object GeneratorFunction]",ac=/[\\^$.*+?()[\]{}|]/g,cc=/^\[object .+?Constructor\]$/,lc=typeof window=="object"&&window&&window.Object===Object&&window,pc=typeof self=="object"&&self&&self.Object===Object&&self,ci=lc||pc||Function("return this")();function uc(t,e){return t?.[e]}n(uc,"getValue");function dc(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}n(dc,"isHostObject");var fc=Array.prototype,hc=Function.prototype,li=Object.prototype,So=ci["__core-js_shared__"],si=function(){var t=/[^.]+$/.exec(So&&So.keys&&So.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pi=hc.toString,_o=li.hasOwnProperty,mc=li.toString,gc=RegExp("^"+pi.call(_o).replace(ac,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yc=fc.splice,bc=ui(ci,"Map"),_t=ui(Object,"create");function we(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(we,"Hash");function Sc(){this.__data__=_t?_t(null):{}}n(Sc,"hashClear");function _c(t){return this.has(t)&&delete this.__data__[t]}n(_c,"hashDelete");function Ec(t){var e=this.__data__;if(_t){var r=e[t];return r===ai?void 0:r}return _o.call(e,t)?e[t]:void 0}n(Ec,"hashGet");function xc(t){var e=this.__data__;return _t?e[t]!==void 0:_o.call(e,t)}n(xc,"hashHas");function Pc(t,e){var r=this.__data__;return r[t]=_t&&e===void 0?ai:e,this}n(Pc,"hashSet");we.prototype.clear=Sc;we.prototype.delete=_c;we.prototype.get=Ec;we.prototype.has=xc;we.prototype.set=Pc;function Je(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(Je,"ListCache");function Oc(){this.__data__=[]}n(Oc,"listCacheClear");function vc(t){var e=this.__data__,r=lr(e,t);if(r<0)return!1;var o=e.length-1;return r==o?e.pop():yc.call(e,r,1),!0}n(vc,"listCacheDelete");function Tc(t){var e=this.__data__,r=lr(e,t);return r<0?void 0:e[r][1]}n(Tc,"listCacheGet");function wc(t){return lr(this.__data__,t)>-1}n(wc,"listCacheHas");function Cc(t,e){var r=this.__data__,o=lr(r,t);return o<0?r.push([t,e]):r[o][1]=e,this}n(Cc,"listCacheSet");Je.prototype.clear=Oc;Je.prototype.delete=vc;Je.prototype.get=Tc;Je.prototype.has=wc;Je.prototype.set=Cc;function Ce(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(Ce,"MapCache");function Rc(){this.__data__={hash:new we,map:new(bc||Je),string:new we}}n(Rc,"mapCacheClear");function Ac(t){return pr(this,t).delete(t)}n(Ac,"mapCacheDelete");function Nc(t){return pr(this,t).get(t)}n(Nc,"mapCacheGet");function Ic(t){return pr(this,t).has(t)}n(Ic,"mapCacheHas");function kc(t,e){return pr(this,t).set(t,e),this}n(kc,"mapCacheSet");Ce.prototype.clear=Rc;Ce.prototype.delete=Ac;Ce.prototype.get=Nc;Ce.prototype.has=Ic;Ce.prototype.set=kc;function lr(t,e){for(var r=t.length;r--;)if(Lc(t[r][0],e))return r;return-1}n(lr,"assocIndexOf");function Fc(t){if(!di(t)||Dc(t))return!1;var e=Mc(t)||dc(t)?gc:cc;return e.test(Uc(t))}n(Fc,"baseIsNative");function pr(t,e){var r=t.__data__;return qc(e)?r[typeof e=="string"?"string":"hash"]:r.map}n(pr,"getMapData");function ui(t,e){var r=uc(t,e);return Fc(r)?r:void 0}n(ui,"getNative");function qc(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}n(qc,"isKeyable");function Dc(t){return!!si&&si in t}n(Dc,"isMasked");function Uc(t){if(t!=null){try{return pi.call(t)}catch{}try{return t+""}catch{}}return""}n(Uc,"toSource");function Eo(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(nc);var r=n(function(){var o=arguments,i=e?e.apply(this,o):o[0],s=r.cache;if(s.has(i))return s.get(i);var a=t.apply(this,o);return r.cache=s.set(i,a),a},"memoized");return r.cache=new(Eo.Cache||Ce),r}n(Eo,"memoize");Eo.Cache=Ce;function Lc(t,e){return t===e||t!==t&&e!==e}n(Lc,"eq");function Mc(t){var e=di(t)?mc.call(t):"";return e==ic||e==sc}n(Mc,"isFunction");function di(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}n(di,"isObject");fi.exports=Eo});var es=X((wd,Fo)=>{function ul(t,e){var r,o,i,s,a,c,l,p,d,f;for(r=t.length&3,o=t.length-r,i=e,a=3432918353,l=461845907,f=0;f<o;)d=t.charCodeAt(f)&255|(t.charCodeAt(++f)&255)<<8|(t.charCodeAt(++f)&255)<<16|(t.charCodeAt(++f)&255)<<24,++f,d=(d&65535)*a+(((d>>>16)*a&65535)<<16)&4294967295,d=d<<15|d>>>17,d=(d&65535)*l+(((d>>>16)*l&65535)<<16)&4294967295,i^=d,i=i<<13|i>>>19,s=(i&65535)*5+(((i>>>16)*5&65535)<<16)&4294967295,i=(s&65535)+27492+(((s>>>16)+58964&65535)<<16);switch(d=0,r){case 3:d^=(t.charCodeAt(f+2)&255)<<16;case 2:d^=(t.charCodeAt(f+1)&255)<<8;case 1:d^=t.charCodeAt(f)&255,d=(d&65535)*a+(((d>>>16)*a&65535)<<16)&4294967295,d=d<<15|d>>>17,d=(d&65535)*l+(((d>>>16)*l&65535)<<16)&4294967295,i^=d}return i^=t.length,i^=i>>>16,i=(i&65535)*2246822507+(((i>>>16)*2246822507&65535)<<16)&4294967295,i^=i>>>13,i=(i&65535)*3266489909+(((i>>>16)*3266489909&65535)<<16)&4294967295,i^=i>>>16,i>>>0}n(ul,"murmurhash3_32_gc");typeof Fo<"u"&&(Fo.exports=ul)});var ts=X((Cd,qo)=>{function dl(t,e){for(var r=t.length,o=e^r,i=0,s;r>=4;)s=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,s=(s&65535)*1540483477+(((s>>>16)*1540483477&65535)<<16),s^=s>>>24,s=(s&65535)*1540483477+(((s>>>16)*1540483477&65535)<<16),o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16)^s,r-=4,++i;switch(r){case 3:o^=(t.charCodeAt(i+2)&255)<<16;case 2:o^=(t.charCodeAt(i+1)&255)<<8;case 1:o^=t.charCodeAt(i)&255,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16)}return o^=o>>>13,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),o^=o>>>15,o>>>0}n(dl,"murmurhash2_32_gc");typeof qo!==void 0&&(qo.exports=dl)});var os=X((Rd,xr)=>{var rs=es(),fl=ts();xr.exports=rs;xr.exports.murmur3=rs;xr.exports.murmur2=fl});var Lr=X((rh,Rs)=>{var Dl={PAR_OPEN:"(".charCodeAt(0),PAR_CLOSE:")".charCodeAt(0),OP_NOT:"!".charCodeAt(0),BINARY_AND:"&".charCodeAt(0),BINARY_OR:"|".charCodeAt(0),LITERAL:"LITERAL",END:"END",LEAF:"LEAF",ATOMIC:"ATOMIC"};Rs.exports=Dl});var Ns=X((oh,As)=>{var Fe=Lr(),Ul=n(t=>{let e="",r=[];for(let o of t){let i=o.charCodeAt(0);switch(i){case Fe.PAR_OPEN:case Fe.PAR_CLOSE:case Fe.OP_NOT:case Fe.BINARY_AND:case Fe.BINARY_OR:e&&(r.push({type:Fe.LITERAL,value:e}),e=""),r.push({type:i,value:o});break;default:e+=o}}return e&&r.push({type:Fe.LITERAL,value:e}),r},"Tokenizer");As.exports=Ul});var ks=X((nh,Is)=>{var Ee=Lr(),Ll=n(t=>{let e=[],r=[];return t.forEach(i=>{switch(i.type){case Ee.LITERAL:e.unshift(i);break;case Ee.BINARY_AND:case Ee.BINARY_OR:case Ee.OP_NOT:case Ee.PAR_OPEN:r.push(i);break;case Ee.PAR_CLOSE:for(;r.length&&r[r.length-1].type!==Ee.PAR_OPEN;)e.unshift(r.pop());r.pop(),r.length&&r[r.length-1].type===Ee.OP_NOT&&e.unshift(r.pop());break;default:break}}),r.length&&[...r.reverse(),...e]||e},"PolishNotation"),Ml=n(function*(t){for(let e=0;e<t.length-1;e++)yield t[e];return t[t.length-1]},"PolishGenerator");Is.exports={PolishNotation:Ll,PolishGenerator:Ml}});var qs=X((ih,Fs)=>{var $=Lr(),B=class{constructor(e,r,o,i){this.op=e,this.left=r,this.right=o,this.literal=i}isLeaf(){return this.op===$.LEAF}isAtomic(){return this.isLeaf()||this.op===$.OP_NOT&&this.left.isLeaf()}getLiteralValue(){return this.literal}static CreateAnd(e,r){return new B($.BINARY_AND,e,r)}static CreateNot(e){return new B($.OP_NOT,e)}static CreateOr(e,r){return new B($.BINARY_OR,e,r)}static CreateLiteral(e){return new B($.LEAF,null,null,e)}};n(B,"ExpNode");var lt=n(t=>{let e=t.next().value;switch(e.type){case $.LITERAL:return B.CreateLiteral(e.value);case $.OP_NOT:return B.CreateNot(lt(t));case $.BINARY_AND:{let r=lt(t),o=lt(t);return B.CreateAnd(r,o)}case $.BINARY_OR:{let r=lt(t),o=lt(t);return B.CreateOr(r,o)}}return null},"make"),pt=n((t,e)=>{if(t.isLeaf())return e(t.getLiteralValue());if(t.op===$.OP_NOT)return!pt(t.left,e);if(t.op===$.BINARY_OR)return pt(t.left,e)||pt(t.right,e);if(t.op===$.BINARY_AND)return pt(t.left,e)&&pt(t.right,e)},"nodeEvaluator");Fs.exports={make:lt,nodeEvaluator:pt}});var Ms=X((sh,Ls)=>{var $l=Ns(),Ds=ks(),Us=qs(),Vl=n((t,e)=>{let r=$l(t),o=Ds.PolishNotation(r),i=Ds.PolishGenerator(o),s=Us.make(i);return Us.nodeEvaluator(s,e)},"parse");Ls.exports={parse:Vl}});var $u={};Ln($u,{addOptinChangedCallback:()=>bu,addTemplate:()=>Su,autoInit:()=>Lu,clear:()=>_u,config:()=>Eu,default:()=>Mu,disableOptinChangedCallbacks:()=>xu,getOptins:()=>Pu,getProductsForPurchasePost:()=>Ou,initialize:()=>vu,isReady:()=>yu,offers:()=>O,platform:()=>A,previewMode:()=>Tu,register:()=>wu,resolveSettings:()=>Cu,setAuthUrl:()=>Ru,setEnvironment:()=>Au,setLocale:()=>Nu,setMerchantId:()=>Iu,setPublicPath:()=>ku,setTemplates:()=>Fu,setupCart:()=>qu,setupProduct:()=>Du,setupProducts:()=>Uu,store:()=>$a});function uo(t){var e,r=t.Symbol;return typeof r=="function"?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}n(uo,"symbolObservablePonyfill");var Ue;typeof self<"u"?Ue=self:typeof window<"u"||typeof window<"u"?Ue=window:typeof module<"u"?Ue=module:Ue=Function("return this")();var Wa=uo(Ue),fo=Wa;var ho=n(function(){return Math.random().toString(36).substring(7).split("").join(".")},"randomString"),gt={INIT:"@@redux/INIT"+ho(),REPLACE:"@@redux/REPLACE"+ho(),PROBE_UNKNOWN_ACTION:n(function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ho()},"PROBE_UNKNOWN_ACTION")};function Ja(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}n(Ja,"isPlainObject");function mo(t,e,r){var o;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error("Expected the enhancer to be a function.");return r(mo)(t,e)}if(typeof t!="function")throw new Error("Expected the reducer to be a function.");var i=t,s=e,a=[],c=a,l=!1;function p(){c===a&&(c=a.slice())}n(p,"ensureCanMutateNextListeners");function d(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}n(d,"getState");function f(m){if(typeof m!="function")throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var E=!0;return p(),c.push(m),n(function(){if(!!E){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");E=!1,p();var y=c.indexOf(m);c.splice(y,1),a=null}},"unsubscribe")}n(f,"subscribe");function h(m){if(!Ja(m))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(typeof m.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,s=i(s,m)}finally{l=!1}for(var E=a=c,T=0;T<E.length;T++){var y=E[T];y()}return m}n(h,"dispatch");function _(m){if(typeof m!="function")throw new Error("Expected the nextReducer to be a function.");i=m,h({type:gt.REPLACE})}n(_,"replaceReducer");function P(){var m,E=f;return m={subscribe:n(function(y){if(typeof y!="object"||y===null)throw new TypeError("Expected the observer to be an object.");function v(){y.next&&y.next(d())}n(v,"observeState"),v();var C=E(v);return{unsubscribe:C}},"subscribe")},m[fo]=function(){return this},m}return n(P,"observable"),h({type:gt.INIT}),o={dispatch:h,subscribe:f,getState:d,replaceReducer:_},o[fo]=P,o}n(mo,"createStore");function Ka(t,e){var r=e&&e.type,o=r&&'action "'+String(r)+'"'||"an action";return"Given "+o+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}n(Ka,"getUndefinedStateErrorMessage");function Qa(t){Object.keys(t).forEach(function(e){var r=t[e],o=r(void 0,{type:gt.INIT});if(typeof o>"u")throw new Error('Reducer "'+e+`" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);if(typeof r(void 0,{type:gt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+gt.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")})}n(Qa,"assertReducerShape");function Ht(t){for(var e=Object.keys(t),r={},o=0;o<e.length;o++){var i=e[o];typeof t[i]=="function"&&(r[i]=t[i])}var s=Object.keys(r),a,c;try{Qa(r)}catch(l){c=l}return n(function(p,d){if(p===void 0&&(p={}),c)throw c;if(!1)var f;for(var h=!1,_={},P=0;P<s.length;P++){var m=s[P],E=r[m],T=p[m],y=E(T,d);if(typeof y>"u"){var v=Ka(m,d);throw new Error(v)}_[m]=y,h=h||y!==T}return h=h||s.length!==Object.keys(p).length,h?_:p},"combination")}n(Ht,"combineReducers");function $n(t,e){return function(){return e(t.apply(this,arguments))}}n($n,"bindActionCreator");function jn(t,e){if(typeof t=="function")return $n(t,e);if(typeof t!="object"||t===null)throw new Error("bindActionCreators expected an object or a function, instead received "+(t===null?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var o in t){var i=t[o];typeof i=="function"&&(r[o]=$n(i,e))}return r}n(jn,"bindActionCreators");function Za(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}n(Za,"_defineProperty");function Vn(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r}n(Vn,"ownKeys");function Xa(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Vn(r,!0).forEach(function(o){Za(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Vn(r).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}n(Xa,"_objectSpread2");function go(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(o){return o}:e.length===1?e[0]:e.reduce(function(o,i){return function(){return o(i.apply(void 0,arguments))}})}n(go,"compose");function Gn(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(o){return function(){var i=o.apply(void 0,arguments),s=n(function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},"dispatch"),a={getState:i.getState,dispatch:n(function(){return s.apply(void 0,arguments)},"dispatch")},c=e.map(function(l){return l(a)});return s=go.apply(void 0,c)(i.dispatch),Xa({},i,{dispatch:s})}}}n(Gn,"applyMiddleware");function Hn(t){var e=n(function(o){var i=o.dispatch,s=o.getState;return function(a){return function(c){return typeof c=="function"?c(i,s,t):a(c)}}},"middleware");return e}n(Hn,"createThunkMiddleware");var Bn=Hn();Bn.withExtraArgument=Hn;var zn=Bn;var ji=ae(zt());var Wn=/^og_auth=/,ec=n((t=Wn)=>(document.cookie.split(/;\s*/).find(e=>e.match(t))||"").replace(Wn,""),"c"),Yt=n(t=>{if(typeof t=="object")return t;let e=String(t||"").split("|");return e.length===3?{sig_field:e[0],ts:parseInt(e[1],10),sig:e[2]}:null},"r"),tc=n(t=>new Promise((e,r)=>{let o=document.createElement("iframe");o.style.setProperty("display","none","important"),document.body.appendChild(o),o.onload=e,o.onerror=r,o.src=t}),"p"),rc=n(t=>(t.headers.get("content-type")||"").indexOf("application/json")!==-1,"d");function Jn(){return typeof window.og_auth<"u"?Yt(window.og_auth):null}n(Jn,"a");async function oc(t=100){return new Promise(e=>{setTimeout(()=>e(Jn()),t)})}n(oc,"f");async function Kn(t,e=ec,r=tc){let o;if(o=Yt(Jn())||Yt(e()),o)return o;if(t&&typeof t=="string"){let i=await fetch(t);i.status>=200&&i.status<300&&(o=e()||await(rc(i)?i.json():Promise.resolve(r(t)).then(e)))}else o||(o=await oc());if(o=Yt(o),o)return o;throw new Error("Unauthorized")}n(Kn,"u");var R="OPTIN_PRODUCT",k="OPTOUT_PRODUCT",F="PRODUCT_CHANGE_FREQUENCY",ce="PRODUCT_CHANGE_PREPAID_SHIPMENTS",Le="SET_MERCHANT_ID",q="REQUEST_OFFER",w="RECEIVE_OFFER",yt="PRODUCT_HAS_CHANGED",Me="CREATED_SESSION_ID",Wt="SET_AUTH_URL",Qn="REQUEST_AUTH",Jt="AUTHORIZE",Pe="UNAUTHORIZED",Zn="REQUEST_ORDERS",Kt="RECEIVE_ORDERS",bt="CART_PRODUCT_KEY_HAS_CHANGED",Qt="RECEIVE_ORDER_ITEMS",Xn="FETCH_RESPONSE_ERROR",$e="SET_ENVIRONMENT_LOCAL",Ve="SET_ENVIRONMENT_STAGING",je="SET_ENVIRONMENT_DEV",Ge="SET_ENVIRONMENT_PROD",Zt="READY",ei="CONCLUDE_UPSELL",ti="REQUEST_CREATE_IU_ORDER",Xt="CREATE_ONE_TIME",ri="REQUEST_CONVERT_ONE_TIME",er="CONVERT_ONE_TIME";var He="CHECKOUT",oi="RECEIVE_FETCH",tr="SET_LOCALE",Be="SET_CONFIG",fe="SET_PREVIEW_STANDARD_OFFER",St="SET_PREVIEW_UPSELL_OFFER",yo="SET_PREVIEW_PREPAID_OFFER",rr="ADD_TEMPLATE",or="SET_TEMPLATES",Oe="LOCAL_STORAGE_CHANGE",he="LOCAL_STORAGE_CLEAR",nr="SET_FIRST_ORDER_PLACE_DATE",ir="SET_PRODUCT_TO_SUBSCRIBE",ze="RECEIVE_PRODUCT_PLANS",D="SETUP_PRODUCT",me="SETUP_CART",le="RECEIVE_MERCHANT_SETTINGS",bo="SET_EXPERIMENT_VARIANT",Ye="pdp",ni="local",sr="dev",ve="staging",Te="prod",ar="static.ordergroove.com",cr="staging.static.ordergroove.com",ii="og-cart-updated";var ur=ae(Et());var xo=n((...t)=>JSON.stringify(t),"memoizeKey"),xt=n(t=>(...e)=>fetch(...t(...e)).then(r=>r.json()),"withFetchJson"),Pt=n(t=>(e,...r)=>{if(!e)throw Error("host required");let[o,i={}]=t(...r);return[`${e.replace(/\/+$/,"")}${o}`,i]},"withHost"),dr=n(t=>(e,...r)=>{if(!e)throw Error("auth required");let[o,i={}]=t(...r);return[o,{...i,headers:{Authorization:JSON.stringify(e),...i.headers}}]},"withAuth"),hi=n(t=>(...e)=>{let[r,o={}]=t(...e);return[r,{method:"POST",...o,body:JSON.stringify(o.body),headers:{"Content-type":"application/json",...o.headers}}]},"withJsonBody"),mi=n((t=[])=>(Array.isArray(t)?t:Object.entries(t)).map(([e,r])=>[e,encodeURIComponent(r)].join("=")).join("&"),"toQuery"),$c=n(t=>JSON.stringify([].concat(t).map(e=>typeof e=="object"?e.id:e).filter(e=>e)),"toProductId"),Vc=(0,ur.default)(xt(Pt((t,e,r,o="pdp",i={})=>{if(!t)throw Error("merchantId required");if(!e)throw Error("sessionId required");if(!r)throw Error("product required");let s=[["session_id",e],["page_type",1],["p",$c(r)],["module_view",JSON.stringify(["regular"])],...Object.entries(i)];return[`/offer/${t}/${o}?${mi(s)}`]})),xo),jc=(0,ur.default)(xt(Pt(dr((t=1,e="place")=>[`/orders/?${mi([["status",t],["ordering",e],["exclude_prepaid_orders","true"]])}`]))),xo),Gc=(0,ur.default)(xt(Pt(dr(t=>{if(!t)throw Error("orderId required");return[`/items/?order=${t}`]}))),xo),Hc=xt(Pt(dr(hi((t,e,r,o)=>{if(!t)throw Error("product required");if(!e)throw Error("order required");if(!r)throw Error("quantity required");if(r<=0)throw Error("quantity must be greater or equal than one");if(!o)throw Error("offer required");return["/items/iu/",{body:{product:t,order:e,quantity:r,offer:o}}]})))),Ot=n(t=>{if(typeof t=="object")return{...t};let[e,r]=(t||"").split(/_/).map(o=>parseInt(o,10));return e&&r&&{every:e,every_period:r}},"parseFrequency"),Po=n(t=>t.match(/^\d+_\d$/),"isFrequencyValid"),Bc=n((t,e)=>String.prototype.localeCompare.call(t&&t.split("_").reverse().join("_"),e&&e.split("_").reverse().join("_")),"compareFrequencies"),gi=n(t=>[...new Set(t&&t.split(/\s+/))].filter(Po).sort(Bc),"parseFrequenciesList");var vt=n(t=>{if(typeof t=="object"){let{every:e,period:r,every_period:o}=t;return`${e}_${r||o}`}return typeof t=="string"?t:""},"stringifyFrequency"),zc=xt(Pt(dr(hi((t,e,r,o)=>{if(!t)throw Error("item required");if(!e)throw Error("frequency required");let i=Ot(e);if(!i)throw Error("invalid frequency");return["/subscriptions/create_from_item/",{body:{item:t.public_id,offer:r,session_id:o,...i}}]})))),Ke={fetchOffer:Vc,fetchOrders:jc,fetchItems:Gc,createOneTime:Hc,convertOneTimeToSubscription:zc},yi=Ke;var Oo=Tt(),A={shopify:typeof window.Shopify!="undefined",shopify_selling_plans:typeof(Oo==null?void 0:Oo.dataset.shopifySellingPlans)!="undefined"};function Yc(t,e){return t===e}n(Yc,"defaultEqualityCheck");function Wc(t,e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var o=e.length,i=0;i<o;i++)if(!t(e[i],r[i]))return!1;return!0}n(Wc,"areArgumentsShallowlyEqual");function Jc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yc,r=null,o=null;return function(){return Wc(e,r,arguments)||(o=t.apply(null,arguments)),r=arguments,o}}n(Jc,"defaultMemoize");function Kc(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(o){return typeof o=="function"})){var r=e.map(function(o){return typeof o}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+r+"]"))}return e}n(Kc,"getDependencies");function Qc(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return function(){for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];var c=0,l=s.pop(),p=Kc(s),d=t.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(r)),f=t(function(){for(var h=[],_=p.length,P=0;P<_;P++)h.push(p[P].apply(null,arguments));return d.apply(null,h)});return f.resultFunc=l,f.dependencies=p,f.recomputations=function(){return c},f.resetRecomputations=function(){return c=0},f}}n(Qc,"createSelectorCreator");var U=Qc(Jc);var L=ae(Et());L.default.Cache=Map;function Zc(t,e){if(t===e)return!0;if(t===null||e===null||t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}n(Zc,"arraysEqual");function Xc(t,e,r){let o=vt(r);return A.shopify_selling_plans?K(t,e,o):o}n(Xc,"resolveFrequency");var N=n((t,e)=>!!(t===e||typeof t=="object"&&typeof e=="object"&&t&&e&&t.id===e.id&&(!(Array.isArray(t.components)&&Array.isArray(e.components))||Zc((t.components||[]).sort(),(e.components||[]).sort()))),"isSameProduct"),wt=n(t=>t.optedin||[],"optedinSelector"),bi=n(t=>t.optedout||[],"optedoutSelector"),vo=n(t=>t.autoshipByDefault||{},"autoshipSelector"),el=n(t=>t.defaultFrequencies||{},"defaultFrequenciesSelector"),Si=n(t=>{var e;return((e=t==null?void 0:t.config)==null?void 0:e.prepaidSellingPlans)||[]},"prepaidSellingPlansSelector"),tl=n(t=>(t==null?void 0:t.prepaidShipmentsSelected)||{},"prepaidShipmentsSelectedSelector"),ee=(0,L.default)(t=>U(wt,bi,vo,(e,r,o)=>{let i=e.find(s=>N(t,s));return i||(r.find(s=>N(t,s))?!1:t&&o[t.id]?{id:t.id}:!1)}),t=>JSON.stringify(t)),fr=(0,L.default)(t=>U(wt,e=>{let r=e.find(o=>N(t,o));return r||!1}),t=>JSON.stringify(t)),_i=(0,L.default)(t=>U(wt,e=>e.some(r=>N(t,r)&&r.prepaidShipments)),t=>JSON.stringify(t)),te=(0,L.default)(t=>U(tl,e=>e[t.id]||null),t=>JSON.stringify(t)),hr=(0,L.default)(t=>U(bi,e=>e.find(r=>N(t,r)))),re=(0,L.default)(t=>U(ee(t),e=>e&&"frequency"in e&&e.frequency||null),t=>JSON.stringify(t)),V=(0,L.default)(t=>U(ee(t),e=>e&&"prepaidShipments"in e&&e.prepaidShipments||null),t=>JSON.stringify(t)),j=(0,L.default)(t=>U(Si,e=>{var o;return(((o=e[S(t)])==null?void 0:o.map(({numberShipments:i})=>i))||[]).sort((i,s)=>i-s)})),Qe=(0,L.default)(t=>U(el,J(t),(e,{frequencies:r=[],frequenciesEveryPeriod:o=[]})=>e[S(t)]&&Xc(r,o,e[S(t)])||null)),Ze=(0,L.default)(t=>U(J(t),e=>e.frequencies)),oe=(0,L.default)(t=>U(J(t),e=>e.defaultFrequency)),J=(0,L.default)(t=>U(e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.productFrequencies},e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.frequencies},e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.frequenciesEveryPeriod},e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.frequenciesText},e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.defaultFrequency},(e,r,o,i,s)=>e?e[S(t)]||{}:{frequencies:r,frequenciesEveryPeriod:o,frequenciesText:i,defaultFrequency:s})),Ei=n((t,e)=>U(Si,J(t.id),(r,{frequencies:o})=>{var i;if(e){let s=S(t.id),a=(i=r[s])==null?void 0:i.find(c=>c.numberShipments===e);return a?a.sellingPlan:null}return o[0]}),"makeFrequencyForPrepaidShipmentsSelector"),To=n(t=>t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"kebabCase"),G=n((t,e,r)=>t&&t.hasAttribute&&t.hasAttribute(To(e))&&t[e]||t.offer&&typeof(t.offer[e]!=="undefined")&&t.offer[e]||r,"getFallbackValue"),Xe=n(t=>({templates:t.templates||[]}),"templatesSelector");function mr(t){document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t()}n(mr,"onReady");function Tt(){return document.querySelector([`script[src^="https://${ar}"]`,`script[src^="https://${cr}"]`,`script[src^="http://${ar}"]`,`script[src^="http://${cr}"]`].join(","))}n(Tt,"getMainJs");function wo(){let t=Tt();if(!t)return[];let e=new URL(t.src),r=e.host.startsWith(ve)?ve:Te,o=e.pathname.split("/")[1];return!r&&!o?[]:[o,r,t]}n(wo,"resolveEnvAndMerchant");var S=n(t=>{var r;if(!t)return"";let e=`${t.id||t}`;return(r=A)!=null&&r.shopify_selling_plans&&(e=e.split(":")[0]),e},"safeProductId"),xi=n((t,e,r)=>{if(A.shopify_selling_plans){let o=e==null?void 0:e.indexOf(t);if(o>=0&&r[o])return r[o]}return t},"safeOgFrequency"),Ct=n((t,e)=>{if(!`${t}`.includes("_"))return t;let{frequencies:r,frequenciesEveryPeriod:o}=e,i=o==null?void 0:o.indexOf(t);return i>=0&&o[i]?r[i]:(r==null?void 0:r.length)>0&&(o==null?void 0:o.length)>0?(console.warn(`Unable to find selling plan match for frequency ${t}; falling back to first selling plan`),r[0]):t},"frequencyToSellingPlan");function Pi(t){if(t.isReady())return;console.info("OG offers are auto initializing");let[e,r]=wo();if(!r&&!e)return;let o=document.createElement("script");o.onload=()=>console.info("OG pull initialization chunk for merchant",e,r),o.onerror=()=>t.initialize(e,r),o.src=`${window.location.protocol}//${r===Te?ar:cr}/${e}/main.js?initOnly=true`,document.head.appendChild(o)}n(Pi,"autoInitializeOffers");var Oi=n(t=>{document.cookie=`${t}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`},"clearCookie");function vi(t){let e=document.cookie.match(`(^|;) ?${t}=([^;]*)(;|$)`);return e?e[2]:null}n(vi,"getCookieValue");var Re=n(t=>!!(t&&(t==null?void 0:t.includes("_"))),"isOgFrequency"),pe=n((t=[])=>(t==null?void 0:t[0])||null,"getFirstSellingPlan"),gr=n((t=[],e=[])=>{var r;return!!(((r=A)==null?void 0:r.shopify_selling_plans)&&t.length&&e.length)},"hasShopifySellingPlans"),K=n((t,e,r)=>{if(t.length!==e.length)return null;let o=e.findIndex(i=>i===r);return o>=0?t[o]:null},"mapFrequencyToSellingPlan");function Co(t,e,r){let o=t.querySelector(`[name="${e}"]`);if(o&&!r){o.remove();return}!o&&r&&(o=document.createElement("input"),o.type="hidden",o.name=e,t.appendChild(o)),o&&(o.value=r)}n(Co,"getOrCreateHidden");function et(t,e){let[[r],o]=t.reduce((i,s)=>i[N(e,s)?0:1].push(s)&&i,[[],[]]);return[r||{},o||[]]}n(et,"getMatchingProductIfExists");var Q=n((t,e,r)=>({type:R,payload:{product:t,frequency:e,offer:r}}),"optinProduct"),tt=n((t,e)=>({type:k,payload:{product:t,offer:e}}),"optoutProduct"),Ti=n((t,e)=>({type:yt,payload:{newProduct:t,product:e}}),"productHasChangedComponents"),br=n((t,e,r)=>({type:F,payload:{product:t,frequency:e,offer:r}}),"productChangeFrequency"),ye=n((t,e,r)=>(o,i)=>{let s=Ei(t,e)(i());o({type:ce,payload:{product:t,prepaidShipments:e,offer:r,frequency:s}})},"productChangePrepaidShipments");var Sr=n(t=>({type:ei,payload:{product:t}}),"concludeUpsell"),wi=n(t=>({type:Le,payload:t}),"setMerchantId"),Ro=n(t=>({type:Me,payload:`${t}.${Math.floor(Math.random()*999999)}.${Math.round(new Date().getTime()/1e3)}`}),"createSessionId"),rl=n(t=>({type:Qn,payload:t}),"requestAuth"),Rt=n((t,e,r,o)=>({type:Jt,payload:{public_id:t,sig_field:e,ts:r,sig:o}}),"authorize"),ge=n(t=>({type:Pe,payload:t}),"unauthorized"),Ci=n(t=>({type:Wt,payload:t}),"setAuthUrl"),At=n(t=>({type:oi,payload:t}),"fetchDone"),Ri=n((t=Kn)=>n(function(r,o){if(window.og&&window.og.previewMode)return r(ge({message:"Offers are running in preview mode"}));let{merchantId:i,authUrl:s}=o(),a=rl(s);return r(a),t(s).then(({sig_field:c,ts:l,sig:p})=>r(Rt(i,c,l,p)),c=>r(ge(c))).finally(()=>r(At(a)))},"fetchAuthThunk"),"fetchAuth"),ol=n((t,e)=>({type:Zn,payload:{status:t,ordering:e}}),"requestOrders"),Ao=n(t=>({type:Kt,payload:t}),"receiveOrders"),No=n(t=>({type:Qt,payload:t}),"receiveItems"),_r=n((t=1,e="place")=>n(function(o,i){let{environment:{legoUrl:s},auth:a}=i();if(!a)return o(ge("No auth set."));let c=ol(t,e);return o(c),Ke.fetchOrders(s,a,t,e).then(l=>{if(l.results){o(Ao(l));let p=(l.results[0]||{}).public_id;if(p)return Ke.fetchItems(s,a,p).then(d=>o(No(d)))}return o(ge(l.detail)),null},l=>o(ge(l))).finally(()=>o(At(c)))},"fetchOrdersThunk"),"fetchOrders"),Ai=n(t=>{switch(t){case ni:return{type:$e,payload:t};case sr:return{type:je,payload:t};case ve:return{type:Ve,payload:t};case Te:return{type:Ge,payload:t};default:throw new Error(`${t} is not a supported environment`)}},"setEnvironment"),Ni=n(()=>(t,e)=>{let{merchantId:r,sessionId:o}=e();return(!o||r&&!o.startsWith(r))&&t(Ro(r)),o},"requestSessionId"),be=n((t,e,r)=>(o,i)=>{let s=J(r)(i());o({type:w,payload:{...t,offer:e,frequencyConfig:s}})},"receiveOffer"),yr=n(t=>({type:Xn,payload:t}),"fetchResponseError"),Io=n((t,e=Ye,r)=>({type:q,payload:{product:t,module:e,offer:r}}),"requestOffer"),Ii=Io,ki=n(()=>({type:He}),"checkout"),nl=n((t,e,r,o)=>({type:ti,payload:{product:t,order:e,quantity:r,offerId:o}}),"requestCreateOneTime"),il=n(t=>({type:Xt,payload:t}),"receiveCreateOneTime"),sl=n((t,e)=>({type:ri,payload:{item:t,frequency:e}}),"requestConvertOneTimeToSubscription"),al=n((t,e)=>({type:er,payload:{response:t,product:e}}),"receiveConvertOneTime"),Er=n((t,e,r,o=!1,i=null)=>n(function(a,c){let l=c(),{auth:p,environment:{legoUrl:d},previewUpsellOffer:f,offerId:h,sessionId:_}=l;if(!p)return a(ge("No auth set."));let{frequencies:P,frequenciesEveryPeriod:m}=J(t.id)(l),E=xi(i,P,m),T=nl(t,e,r,h);return a(T),(f?Promise.resolve({legoUrl:d,product:t,order:e,quantity:r,offer:h}):Ke.createOneTime(d,p,t.id,e,r,h)).then(y=>(a(il(y)),o?(a(sl(y,E)),(f?Promise.resolve({item:y,frequency:E}):Ke.convertOneTimeToSubscription(d,p,y,E,h,_)).then(v=>a(al(v,t)),v=>a(yr(v)))):y),y=>a(yr(y))).finally(()=>a(At(T)))},"createIuThunk"),"createIu"),Fi=n(t=>({type:tr,payload:t}),"setLocale"),qi=n(t=>({type:Be,payload:t}),"setConfig"),Di=n((t,e,r)=>({type:rr,payload:{selector:t,markup:e,config:r}}),"addTemplate"),Ui=n(t=>({type:or,payload:t}),"setTemplates"),Li=n((t,e)=>({type:nr,payload:{product:t,firstOrderPlaceDate:e}}),"setFirstOrderPlaceDate"),Mi=n((t,e)=>({type:ir,payload:{product:t,productToSubscribe:e}}),"setProductToSubscribe"),$i=n(t=>({type:le,payload:t}),"receiveMerchantSettings");var Nt="OG_STATE",Gi=n(t=>{try{return t===null?void 0:JSON.parse(t)}catch{return}},"safeParseState"),ko=n(()=>window.og&&window.og.previewMode,"isPreviewMode"),Hi=n(()=>ko()?{}:Gi(localStorage.getItem(Nt)),"loadState"),cl=n(t=>!t||!t.sessionId?!1:JSON.stringify({sessionId:t.sessionId,optedin:t.optedin,optedout:t.optedout,productOffer:t.productOffer,firstOrderPlaceDate:t.firstOrderPlaceDate,productToSubscribe:t.productToSubscribe}),"serializeState"),Bi=n(t=>{if(ko())return;t&&t.sessionId&&(document.cookie="og_session_id="+encodeURIComponent(t.sessionId)+"; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax");let e=cl(t);e&&localStorage.getItem(Nt)!==e&&localStorage.setItem(Nt,e)},"saveState"),zi=n(t=>(0,ji.throttle)(500,e=>{if(ko())return;let{key:r,newValue:o}=e;r===Nt&&o===null?(t.dispatch({type:he}),setTimeout(()=>t.dispatch(Ni()),0)):r===Nt&&t.dispatch({type:Oe,newValue:Gi(o)})}),"listenLocalStorageChanges");var Wi=ae(zt());var ll=n((t,e,r=document)=>r.dispatchEvent(new CustomEvent(t,{detail:e})),"dispatchEvent"),Yi=n(t=>({payload:{product:{id:e,components:r}={}}={}}={})=>setTimeout(()=>ll("optin-changed",{productId:e,components:r,optedIn:t}),0),"dispatchOptinChangedEvent"),pl=[{expressions:[({type:t}={})=>t===R,({type:t}={})=>t===F],fn:Yi(!0)},{expressions:[({type:t}={})=>t===k],fn:Yi(!1)}],Ji=n(t=>e=>r=>{let o=t.getState();pl.forEach(i=>{i.expressions.some(s=>s(r,o))&&i.fn(r)}),e(r)},"dispatchMiddleware"),Ki=n(t=>e=>r=>{var i;let o;switch(r.type){case w:case k:case R:case F:o=new CustomEvent(`og-${r.type.toLowerCase().replace(/_/g,"-")}`,{bubbles:!0,cancelable:!0,detail:r.payload}),(((i=r.payload)==null?void 0:i.offer)||document).dispatchEvent(o);break;default:}o!=null&&o.defaultPrevented||e(r)},"offerEvents"),Qi=n(t=>e=>r=>{e(r);let o=(0,Wi.throttle)(500,()=>{Bi({...t.getState()})});r.type!==Oe&&o()},"localStorageMiddleware");var It=n(()=>{let t,e;return[new Promise((r,o)=>{t=r,e=o}),t,e]},"waitFor");function Zi(t){let[e,r]=It(),[o,i]=It(),[s,a]=It();o.then(l=>{let{sessionId:p}=t.getState();!p||l&&!p.startsWith(l)?t.dispatch(Ro(l)):a(p)});let c=Promise.all([o,e,s]);return c.then(()=>{var l;t.dispatch({type:Zt,payload:{}}),window.addEventListener("storage",zi(t)),(l=t.getState().auth)!=null&&l.ts||t.dispatch(Ri())}),l=>async p=>{$e===p.type||je===p.type||Ve===p.type||Ge===p.type?r(p.payload):Le===p.type?i(p.payload):Me===p.type?a(p.payload):await c,l(p)}}n(Zi,"waitUntilOffersReady");function Xi(t){return e=>r=>{if(r.type===q){let{merchantId:o,sessionId:i,environment:{apiUrl:s}}=t.getState(),a=S(r.payload.product);a&&yi.fetchOffer(s,o,i,a,r.payload.module||Ye,r.payload.searchParams).then(c=>t.dispatch(be(c,r.payload.offer,a)),c=>t.dispatch(yr(c))).finally(()=>t.dispatch(At(r)))}return e(r)}}n(Xi,"offerRequestMiddleware");var cs=ae(os());var ue=n((t,e)=>t===null?"":new Intl.NumberFormat(navigator.language,{style:"currency",currency:e}).format(t/100),"money"),Pr=n(t=>`${t}%`,"percentage"),hl="Subscribe and Save",ml="ordergroove-subscribe-and-save-",kt=n((t=[])=>t.find(ss)||t.find(is)||t.find(Or),"getPayAsYouGoSellingPlanGroup"),ns=n((t=[])=>t.filter(e=>is(e)||ss(e)||Or(e)),"getPayAsYouGoSellingPlanGroups"),is=n(t=>t.name===hl||t.app_id==="ordergroove-subscribe-and-save","isDefaultSellingPlanGroup"),ss=n(t=>t.name.startsWith("og_psfl")||t.app_id==="ordergroove-product-specific-frequency-list","isProductSpecificFrequencySellingPlanGroup"),Or=n(t=>{var e;return(e=t.app_id)==null?void 0:e.startsWith(ml)},"isExperimentSellingPlanGroup"),as=n(t=>{let e=kt(t.map(r=>r.group));return t.find(r=>r.group===e)},"getPayAsYouGoSellingPlan");function vr(t){var e;return(e=t==null?void 0:t.selling_plans)==null?void 0:e.map(({id:r})=>`${r}`)}n(vr,"sellingPlansToFrequencies");function Tr(t){var e;return(e=t==null?void 0:t.selling_plans)==null?void 0:e.map(({options:r})=>r||[]).flat().map(({value:r})=>gl(r))}n(Tr,"sellingPlansToEveryPeriod");function gl(t){let e=["day","week","month"].findIndex(o=>t.toLowerCase().includes(o))+1,r=(t.match(/(\d+)/)||["",1])[1];return r&&e?`${r}_${e}`:null}n(gl,"textToFreq");function wr(t){var r;let e=(r=t==null?void 0:t.options.find(({name:o})=>o==="Shipment amount"))==null?void 0:r.value.split(" ")[0];return e?Number(e):void 0}n(wr,"getPrepaidShipments");function yl(t,e){e.map(a=>a.weight).reduce((a,c)=>a+c,0)!==100&&console.error("OG: Sum of weights for variants must be 100. Defaulting to last variant.");let i=cs.default.murmur3(t,0)%100,s=0;for(let a=0;a<e.length;a++){let c=e[a],l=s+c.weight;if(c.weight>0&&i<l)return a;s=l}return e.length-1}n(yl,"getVariantIx");function Cr(t={},e){var r;switch(e.type){case le:return{...t,...e.payload.experiments};case bo:return{...t,currentVariant:e.payload.index,offerProfileId:(r=e.payload.parameters)==null?void 0:r.offer_profile_public_id};default:return t}}n(Cr,"experimentsReducer");function bl(t,e,r){if(!t||r.variants.length===0)return;let o=e.selling_plan_groups.filter(Or);if(o.length!==r.variants.length)return;let i=o.find(({app_id:s})=>s.endsWith(t.public_id));if(!!i)return{...e,selling_plan_groups:[i],variants:e.variants.map(({selling_plan_allocations:s,...a})=>({...a,selling_plan_allocations:s.filter(({selling_plan_group_id:c})=>c===i.id)}))}}n(bl,"resolveShopifySetupProductWhenExperiment");function Sl(t,e){let r=t==null?void 0:t.public_id;if(!r)return null;let o=t.variants,i=yl(`${r}|${e}`,o);return{...o[i],index:i}}n(Sl,"getAssignedExperimentVariant");function ls(t){let[e,r]=It(),o,i;return s=>async a=>{if(a.type===Zt)r();else if(a.type===le){await e,i=a.payload.experiments;let{sessionId:c}=t.getState();o=Sl(i,c),o&&t.dispatch({type:bo,payload:o})}else if(a.type===q)await e,o&&(a.payload.searchParams={...a.payload.searchParams,variant:o.public_id});else if(a.type===D){await e;let c=bl(o,a.payload.product,i);if(c)return s({type:D,payload:{...a.payload,experiments:!0,originalPayload:a.payload,product:c}})}return s(a)}}n(ls,"experimentsMiddleware");function ps(t,...e){if(window.og&&window.og.store)return window.og.store;let r=window.og&&window.og.previewMode,o=typeof window=="object"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name:"Ordergroove Offers"}):go,i=[Zi,zn,ls,Xi,Ji,Ki],s={};if(!r)try{s=Hi(),i.push(Qi)}catch{}let a=o(Gn(...i,...e.filter(l=>l))),c=mo(t,s,a);return window.og=window.og||{},window.og.store=c,c}n(ps,"makeStore");var _l=Object.defineProperty,Rr=n((t,e)=>_l(t,"name",{value:e,configurable:!0}),"i"),El=Rr(t=>e=>t.indexOf(e.origin)>=0,"createIsMessageAllowed"),ds=["https://rc3.ordergroove.com","https://rc3.stg.ordergroove.com","https://rc3-beta.stg.ordergroove.com","http://localhost:3000","http://localhost:3010","http://0.0.0.0:3010",window.location.origin],us=Rr(t=>(e,r)=>{ds.forEach(o=>t.postMessage({ogType:e,...r},o))},"createBroadcastMessage");function Do(t=window.opener,e=window.og){let r=Rr(o=>{let i=El(ds),s=us(o.source),a=o.data.options||{};if(i(o)&&o.data.ogType==="READY"){let c="//static.ordergroove.com/@ordergroove/offers-live-editor/0.6.7/dist/";c.startsWith("//")&&(c=window.location.protocol+c),c.endsWith("/")||(c+="/"),import(`${c}client.js`).then(({initializeClient:l})=>{l({isMessageAllowed:i,broadcastMessage:s,options:a,og:e}),window.removeEventListener("message",r)})}},"handleReady");t&&t!==window&&(window.addEventListener("message",r),us(t)("READY"))}n(Do,"h");Rr(Do,"offersLiveEditor");var Ar=null,xl=n(t=>({dispatch:t}),"defaultMapDispatchToProps"),fs=n(t=>{if(!Ar)throw new Error("Missing redux store.");return Ar},"resolveStore"),Pl=n((t,e)=>r=>{let{getState:o,dispatch:i}=fs(r),s=t?t(o(),r):{},a=e(i,r);Object.assign(r,s,a)},"createRecalcProps"),g=n((t,e=xl)=>r=>{let i=Pl(t,typeof e=="function"?e:s=>jn(e,s));return class extends r{get store(){return Ar}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=fs(this).subscribe(()=>i(this)),i(this)}attributeChangedCallback(s,a,c){super.attributeChangedCallback&&super.attributeChangedCallback(s,a,c),this._storeUnsubscribe&&a!==c&&i(this)}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}}},"connect"),hs=n(t=>{Ar=t},"setStore");var Uo=n((t={},e=[])=>(t.optedin||[]).map(r=>{let o={product:r.id,subscription_info:{components:r.components||[]},tracking_override:{offer:((t.productOffer||{})[r.id]||[])[0],...t.sessionId&&{session_id:t.sessionId},...Ot(r.frequency)}};return t.firstOrderPlaceDate&&t.firstOrderPlaceDate[r.id]&&(o.subscription_info.first_order_place_date=t.firstOrderPlaceDate[r.id]),t.productToSubscribe&&t.productToSubscribe[r.id]&&(o.tracking_override.product=t.productToSubscribe[r.id]),o}).filter(r=>r.tracking_override.offer).filter(r=>e.length?e.includes(r.product):r),"getProductsForPurchasePost"),Nr=n((t={})=>{let e={};return Object.entries(t).forEach(([r,o])=>{Object.entries(o).forEach(([i,s])=>{let a={};s&&!Array.isArray(s)?a=s:a={frequency:i,prepaidShipments:null,regularPrice:s[0],subscriptionPrice:s[2],discountRate:s[1]},e[r]?e[r].push(a):e[r]=[a]})}),e},"getObjectStructuredProductPlans");var Lo=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0;var Ae=n((t,e,r=null)=>{for(;e!==r;){let o=e.nextSibling;t.removeChild(e),e=o}},"removeNodes");var H=`{{lit-${String(Math.random()).slice(2)}}}`,Mo=`<!--${H}-->`,ms=new RegExp(`${H}|${Mo}`),rt="$lit$",Se=class{constructor(e,r){this.parts=[],this.element=r;let o=[],i=[],s=document.createTreeWalker(r.content,133,null,!1),a=0,c=-1,l=0,{strings:p,values:{length:d}}=e;for(;l<d;){let f=s.nextNode();if(f===null){s.currentNode=i.pop();continue}if(c++,f.nodeType===1){if(f.hasAttributes()){let h=f.attributes,{length:_}=h,P=0;for(let m=0;m<_;m++)gs(h[m].name,rt)&&P++;for(;P-- >0;){let m=p[l],E=Ir.exec(m)[2],T=E.toLowerCase()+rt,y=f.getAttribute(T);f.removeAttribute(T);let v=y.split(ms);this.parts.push({type:"attribute",index:c,name:E,strings:v}),l+=v.length-1}}f.tagName==="TEMPLATE"&&(i.push(f),s.currentNode=f.content)}else if(f.nodeType===3){let h=f.data;if(h.indexOf(H)>=0){let _=f.parentNode,P=h.split(ms),m=P.length-1;for(let E=0;E<m;E++){let T,y=P[E];if(y==="")T=ne();else{let v=Ir.exec(y);v!==null&&gs(v[2],rt)&&(y=y.slice(0,v.index)+v[1]+v[2].slice(0,-rt.length)+v[3]),T=document.createTextNode(y)}_.insertBefore(T,f),this.parts.push({type:"node",index:++c})}P[m]===""?(_.insertBefore(ne(),f),o.push(f)):f.data=P[m],l+=m}}else if(f.nodeType===8)if(f.data===H){let h=f.parentNode;(f.previousSibling===null||c===a)&&(c++,h.insertBefore(ne(),f)),a=c,this.parts.push({type:"node",index:c}),f.nextSibling===null?f.data="":(o.push(f),c--),l++}else{let h=-1;for(;(h=f.data.indexOf(H,h+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(let f of o)f.parentNode.removeChild(f)}};n(Se,"Template");var gs=n((t,e)=>{let r=t.length-e.length;return r>=0&&t.slice(r)===e},"endsWith"),Ft=n(t=>t.index!==-1,"isTemplatePartActive"),ne=n(()=>document.createComment(""),"createMarker"),Ir=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var $o=133;function Vo(t,e){let{element:{content:r},parts:o}=t,i=document.createTreeWalker(r,$o,null,!1),s=qt(o),a=o[s],c=-1,l=0,p=[],d=null;for(;i.nextNode();){c++;let f=i.currentNode;for(f.previousSibling===d&&(d=null),e.has(f)&&(p.push(f),d===null&&(d=f)),d!==null&&l++;a!==void 0&&a.index===c;)a.index=d!==null?-1:a.index-l,s=qt(o,s),a=o[s]}p.forEach(f=>f.parentNode.removeChild(f))}n(Vo,"removeNodesFromTemplate");var vl=n(t=>{let e=t.nodeType===11?0:1,r=document.createTreeWalker(t,$o,null,!1);for(;r.nextNode();)e++;return e},"countNodes"),qt=n((t,e=-1)=>{for(let r=e+1;r<t.length;r++){let o=t[r];if(Ft(o))return r}return-1},"nextActiveIndexInTemplateParts");function ys(t,e,r=null){let{element:{content:o},parts:i}=t;if(r==null){o.appendChild(e);return}let s=document.createTreeWalker(o,$o,null,!1),a=qt(i),c=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===r&&(c=vl(e),r.parentNode.insertBefore(e,r));a!==-1&&i[a].index===l;){if(c>0){for(;a!==-1;)i[a].index+=c,a=qt(i,a);return}a=qt(i,a)}}n(ys,"insertNodeIntoTemplate");var Tl=new WeakMap;var Ne=n(t=>typeof t=="function"&&Tl.has(t),"isDirective");var M={},kr={};var de=class{constructor(e,r,o){this.__parts=[],this.template=e,this.processor=r,this.options=o}update(e){let r=0;for(let o of this.__parts)o!==void 0&&o.setValue(e[r]),r++;for(let o of this.__parts)o!==void 0&&o.commit()}_clone(){let e=Lo?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],o=this.template.parts,i=document.createTreeWalker(e,133,null,!1),s=0,a=0,c,l=i.nextNode();for(;s<o.length;){if(c=o[s],!Ft(c)){this.__parts.push(void 0),s++;continue}for(;a<c.index;)a++,l.nodeName==="TEMPLATE"&&(r.push(l),i.currentNode=l.content),(l=i.nextNode())===null&&(i.currentNode=r.pop(),l=i.nextNode());if(c.type==="node"){let p=this.processor.handleTextExpression(this.options);p.insertAfterNode(l.previousSibling),this.__parts.push(p)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,c.name,c.strings,this.options));s++}return Lo&&(document.adoptNode(e),customElements.upgrade(e)),e}};n(de,"TemplateInstance");var bs=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),Cl=` ${H} `,ie=class{constructor(e,r,o,i){this.strings=e,this.values=r,this.type=o,this.processor=i}getHTML(){let e=this.strings.length-1,r="",o=!1;for(let i=0;i<e;i++){let s=this.strings[i],a=s.lastIndexOf("<!--");o=(a>-1||o)&&s.indexOf("-->",a+1)===-1;let c=Ir.exec(s);c===null?r+=s+(o?Cl:Mo):r+=s.substr(0,c.index)+c[1]+c[2]+rt+c[3]+H}return r+=this.strings[e],r}getTemplateElement(){let e=document.createElement("template"),r=this.getHTML();return bs!==void 0&&(r=bs.createHTML(r)),e.innerHTML=r,e}};n(ie,"TemplateResult");var qr=n(t=>t===null||!(typeof t=="object"||typeof t=="function"),"isPrimitive"),Fr=n(t=>Array.isArray(t)||!!(t&&t[Symbol.iterator]),"isIterable"),Ie=class{constructor(e,r,o){this.dirty=!0,this.element=e,this.name=r,this.strings=o,this.parts=[];for(let i=0;i<o.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new ot(this)}_getValue(){let e=this.strings,r=e.length-1,o=this.parts;if(r===1&&e[0]===""&&e[1]===""){let s=o[0].value;if(typeof s=="symbol")return String(s);if(typeof s=="string"||!Fr(s))return s}let i="";for(let s=0;s<r;s++){i+=e[s];let a=o[s];if(a!==void 0){let c=a.value;if(qr(c)||!Fr(c))i+=typeof c=="string"?c:String(c);else for(let l of c)i+=typeof l=="string"?l:String(l)}}return i+=e[r],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}};n(Ie,"AttributeCommitter");var ot=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==M&&(!qr(e)||e!==this.value)&&(this.value=e,Ne(e)||(this.committer.dirty=!0))}commit(){for(;Ne(this.value);){let e=this.value;this.value=M,e(this)}this.value!==M&&this.committer.commit()}};n(ot,"AttributePart");var se=class{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ne()),this.endNode=e.appendChild(ne())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ne()),e.__insert(this.endNode=ne())}insertAfterPart(e){e.__insert(this.startNode=ne()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;Ne(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=M,r(this)}let e=this.__pendingValue;e!==M&&(qr(e)?e!==this.value&&this.__commitText(e):e instanceof ie?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Fr(e)?this.__commitIterable(e):e===kr?(this.value=kr,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let r=this.startNode.nextSibling;e=e??"";let o=typeof e=="string"?e:String(e);r===this.endNode.previousSibling&&r.nodeType===3?r.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){let r=this.options.templateFactory(e);if(this.value instanceof de&&this.value.template===r)this.value.update(e.values);else{let o=new de(r,e.processor,this.options),i=o._clone();o.update(e.values),this.__commitNode(i),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let r=this.value,o=0,i;for(let s of e)i=r[o],i===void 0&&(i=new se(this.options),r.push(i),o===0?i.appendIntoPart(this):i.insertAfterPart(r[o-1])),i.setValue(s),i.commit(),o++;o<r.length&&(r.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){Ae(this.startNode.parentNode,e.nextSibling,this.endNode)}};n(se,"NodePart");var nt=class{constructor(e,r,o){if(this.value=void 0,this.__pendingValue=void 0,o.length!==2||o[0]!==""||o[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=r,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;Ne(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=M,r(this)}if(this.__pendingValue===M)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=M}};n(nt,"BooleanAttributePart");var it=class extends Ie{constructor(e,r,o){super(e,r,o),this.single=o.length===2&&o[0]===""&&o[1]===""}_createPart(){return new Dt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}};n(it,"PropertyCommitter");var Dt=class extends ot{};n(Dt,"PropertyPart");var Ss=!1;(()=>{try{let t={get capture(){return Ss=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{}})();var st=class{constructor(e,r,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=o,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;Ne(this.__pendingValue);){let s=this.__pendingValue;this.__pendingValue=M,s(this)}if(this.__pendingValue===M)return;let e=this.__pendingValue,r=this.value,o=e==null||r!=null&&(e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive),i=e!=null&&(r==null||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Rl(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=M}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}};n(st,"EventPart");var Rl=n(t=>t&&(Ss?{capture:t.capture,passive:t.passive,once:t.once}:t.capture),"getOptions");function jo(t){let e=ke.get(t.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},ke.set(t.type,e));let r=e.stringsArray.get(t.strings);if(r!==void 0)return r;let o=t.strings.join(H);return r=e.keyString.get(o),r===void 0&&(r=new Se(t,t.getTemplateElement()),e.keyString.set(o,r)),e.stringsArray.set(t.strings,r),r}n(jo,"templateFactory");var ke=new Map;var _e=new WeakMap,Go=n((t,e,r)=>{let o=_e.get(e);o===void 0&&(Ae(e,e.firstChild),_e.set(e,o=new se(Object.assign({templateFactory:jo},r))),o.appendInto(e)),o.setValue(t),o.commit()},"render");var Ut=class{handleAttributeExpressions(e,r,o,i){let s=r[0];return s==="."?new it(e,r.slice(1),o).parts:s==="@"?[new st(e,r.slice(1),i.eventContext)]:s==="?"?[new nt(e,r.slice(1),o)]:new Ie(e,r,o).parts}handleTextExpression(e){return new se(e)}};n(Ut,"DefaultTemplateProcessor");var Ho=new Ut;typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");var u=n((t,...e)=>new ie(t,e,"html",Ho),"html");var Es=n((t,e)=>`${t}--${e}`,"getTemplateCacheKey"),Dr=!0;typeof window.ShadyCSS>"u"?Dr=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Dr=!1);var Nl=n(t=>e=>{let r=Es(e.type,t),o=ke.get(r);o===void 0&&(o={stringsArray:new WeakMap,keyString:new Map},ke.set(r,o));let i=o.stringsArray.get(e.strings);if(i!==void 0)return i;let s=e.strings.join(H);if(i=o.keyString.get(s),i===void 0){let a=e.getTemplateElement();Dr&&window.ShadyCSS.prepareTemplateDom(a,t),i=new Se(e,a),o.keyString.set(s,i)}return o.stringsArray.set(e.strings,i),i},"shadyTemplateFactory"),Il=["html","svg"],kl=n(t=>{Il.forEach(e=>{let r=ke.get(Es(e,t));r!==void 0&&r.keyString.forEach(o=>{let{element:{content:i}}=o,s=new Set;Array.from(i.querySelectorAll("style")).forEach(a=>{s.add(a)}),Vo(o,s)})})},"removeStylesFromLitTemplates"),xs=new Set,Fl=n((t,e,r)=>{xs.add(t);let o=r?r.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:s}=i;if(s===0){window.ShadyCSS.prepareTemplateStyles(o,t);return}let a=document.createElement("style");for(let p=0;p<s;p++){let d=i[p];d.parentNode.removeChild(d),a.textContent+=d.textContent}kl(t);let c=o.content;r?ys(r,a,c.firstChild):c.insertBefore(a,c.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);let l=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(r){c.insertBefore(a,c.firstChild);let p=new Set;p.add(a),Vo(r,p)}},"prepareTemplateStyles"),Ps=n((t,e,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");let o=r.scopeName,i=_e.has(e),s=Dr&&e.nodeType===11&&!!e.host,a=s&&!xs.has(o),c=a?document.createDocumentFragment():e;if(Go(t,c,Object.assign({templateFactory:Nl(o)},r)),a){let l=_e.get(c);_e.delete(c);let p=l.value instanceof de?l.value.template:void 0;Fl(o,c,p),Ae(e,e.firstChild),e.appendChild(c),_e.set(e,l)}!i&&s&&window.ShadyCSS.styleElement(e.host)},"render");var Os;window.JSCompiler_renameProperty=(t,e)=>t;var Ko={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return t!==null;case Number:return t===null?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},vs=n((t,e)=>e!==t&&(e===e||t===t),"notEqual"),Bo={attribute:!0,type:String,converter:Ko,reflect:!1,hasChanged:vs},zo=1,Yo=1<<2,Wo=1<<3,Jo=1<<4,Qo="finalized",at=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let e=[];return this._classProperties.forEach((r,o)=>{let i=this._attributeNameForProperty(o,r);i!==void 0&&(this._attributeToPropertyMap.set(i,o),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((r,o)=>this._classProperties.set(o,r))}}static createProperty(e,r=Bo){if(this._ensureClassProperties(),this._classProperties.set(e,r),r.noAccessor||this.prototype.hasOwnProperty(e))return;let o=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,r,o){return{get(){return this[r]},set(i){let s=this[e];this[r]=i,this.requestUpdateInternal(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Bo}static finalize(){let e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Qo)||e.finalize(),this[Qo]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(let i of o)this.createProperty(i,r[i])}}static _attributeNameForProperty(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,r,o=vs){return o(e,r)}static _propertyValueFromAttribute(e,r){let o=r.type,i=r.converter||Ko,s=typeof i=="function"?i:i.fromAttribute;return s?s(e,o):e}static _propertyValueToAttribute(e,r){if(r.reflect===void 0)return;let o=r.type,i=r.converter;return(i&&i.toAttribute||Ko.toAttribute)(e,o)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,r)=>{if(this.hasOwnProperty(r)){let o=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,o)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,r)=>this[r]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,r,o){r!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,r,o=Bo){let i=this.constructor,s=i._attributeNameForProperty(e,o);if(s!==void 0){let a=i._propertyValueToAttribute(r,o);if(a===void 0)return;this._updateState=this._updateState|Wo,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._updateState=this._updateState&~Wo}}_attributeToProperty(e,r){if(this._updateState&Wo)return;let o=this.constructor,i=o._attributeToPropertyMap.get(e);if(i!==void 0){let s=o.getPropertyOptions(i);this._updateState=this._updateState|Jo,this[i]=o._propertyValueFromAttribute(r,s),this._updateState=this._updateState&~Jo}}requestUpdateInternal(e,r,o){let i=!0;if(e!==void 0){let s=this.constructor;o=o||s.getPropertyOptions(e),s._valueHasChanged(this[e],r,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,r),o.reflect===!0&&!(this._updateState&Jo)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,r){return this.requestUpdateInternal(e,r),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|Yo;try{await this._updatePromise}catch{}let e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&Yo}get hasUpdated(){return this._updateState&zo}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1,r=this._changedProperties;try{e=this.shouldUpdate(r),e?this.update(r):this._markUpdated()}catch(o){throw e=!1,this._markUpdated(),o}e&&(this._updateState&zo||(this._updateState=this._updateState|zo,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Yo}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,o)=>this._propertyToAttribute(o,this[o],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}};n(at,"UpdatingElement");Os=Qo;at[Os]=!0;var Ts=Element.prototype,Bf=Ts.msMatchesSelector||Ts.webkitMatchesSelector;var Ur=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zo=Symbol(),ct=class{constructor(e,r){if(r!==Zo)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(Ur?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}};n(ct,"CSSResult");var ws=n(t=>new ct(String(t),Zo),"unsafeCSS"),ql=n(t=>{if(t instanceof ct)return t.cssText;if(typeof t=="number")return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},"textFromCSSResult"),b=n((t,...e)=>{let r=e.reduce((o,i,s)=>o+ql(i)+t[s+1],t[0]);return new ct(r,Zo)},"css");(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");var Cs={},x=class extends at{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let e=this.getStyles();if(Array.isArray(e)){let r=n((s,a)=>s.reduceRight((c,l)=>Array.isArray(l)?r(l,c):(c.add(l),c),a),"addStyles"),o=r(e,new Set),i=[];o.forEach(s=>i.unshift(s)),this._styles=i}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(r=>{if(r instanceof CSSStyleSheet&&!Ur){let o=Array.prototype.slice.call(r.cssRules).reduce((i,s)=>i+s.cssText,"");return ws(o)}return r})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){let e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(r=>r.cssText),this.localName):Ur?this.renderRoot.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){let r=this.render();super.update(e),r!==Cs&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(o=>{let i=document.createElement("style");i.textContent=o.cssText,this.renderRoot.appendChild(i)}))}render(){return Cs}};n(x,"LitElement");x.finalized=!0;x.render=Ps;var zs=ae(Ms());var jl=n(t=>{let e=String(t||"").trim().match(/(\d+)\s*([dwm])/);return e?`${e[1]}_${{d:1,w:2,m:3}[e[2]]}`:t},"sanitizeFrequencyString"),$s=n(t=>t.hasAttribute("product")&&{id:t.getAttribute("product"),...t.hasAttribute("product-components")&&{components:JSON.parse(t.getAttribute("product-components"))}},"buildProduct");var Lt=n(t=>{let e=$s(t);if(!e){let r=t.offer;r&&(e=$s(r))}return e},"resolveProduct"),Gl=n(t=>{let e=t;for(;e;){if(e.tagName==="OG-OFFER")return e;e=e.nodeType===11?e.host:e.parentNode}},"resolveOffer"),Xo=n(t=>class extends t{get offer(){return Gl(this)}connectedCallback(){super.connectedCallback(),this.offersChangeTemplate=this.offersChangeTemplate.bind(this),this.offer&&this.offer.addEventListener("template-changed",this.offersChangeTemplate)}disconnectedCallback(){super.disconnectedCallback(),this.offer&&this.offer.removeEventListener("template-changed",this.offersChangeTemplate)}offersChangeTemplate(){this._enqueueUpdate()}},"withOfferTemplate"),I=n(t=>class extends Xo(t){get product(){return Lt(this)}},"withProduct"),Mr=n(t=>class extends t{get childOptions(){let e=[],r=null;return this.querySelectorAll("option").forEach(o=>{let i=jl(o.value),s=o.innerText.trim();e.push({value:i,text:s}),!r&&o.selected&&(r=i)}),{options:e,isSelected:r}}},"withChildOptions");var $r={};Ln($r,{autoshipByDefault:()=>Hl,eligibilityGroups:()=>tn,eligible:()=>Vs,hasPrepaidOptions:()=>Jl,hasUpcomingOrder:()=>Hs,hasUpsellGroup:()=>Gs,inStock:()=>en,optedout:()=>Yl,prepaidEligible:()=>Bl,prepaidSubscribed:()=>Wl,regularEligible:()=>Ql,subscribed:()=>zl,subscriptionEligible:()=>js,upcomingOrderContainsProduct:()=>Kl,upsellEligible:()=>Bs});var en=n((t,e)=>(t.inStock||{})[(e.product||{}).id],"inStock"),Vs=n((t,e)=>(t.autoshipEligible||{})[(e.product||{}).id]||!1,"eligible"),Hl=n((t,e)=>(t.autoshipByDefault||{})[(e.product||{}).id]||!1,"autoshipByDefault"),js=n((t,e)=>(t.offerId&&t.offerId!=="0"||!1)&&Vs(t,e)&&en(t,e),"subscriptionEligible"),tn=n((t,e)=>{let r=S((e.product||{}).id);return(t.eligibilityGroups||{})[r]||null},"eligibilityGroups"),Gs=n((t,e)=>{let r=tn(t,e);return r===null||!!r.find(o=>o==="upsell"||o==="impulse_upsell")},"hasUpsellGroup"),Bl=n((t,e)=>{let r=tn(t,e);return(r==null?void 0:r.some(o=>o==="prepaid"))||!1},"prepaidEligible"),zl=n((t,e)=>fr(e.product)(t),"subscribed"),Yl=n((t,e)=>hr(e.product)(t),"optedout"),Wl=n((t,e)=>_i(e.product)(t),"prepaidSubscribed"),Jl=n((t,e)=>j(e.product.id)(t).length>0,"hasPrepaidOptions"),Hs=n(t=>!!(t.nextUpcomingOrder&&t.nextUpcomingOrder.public_id),"hasUpcomingOrder"),Kl=n((t,e)=>(t.nextUpcomingOrder&&t.nextUpcomingOrder.products||[]).includes((e.product||{}).id),"upcomingOrderContainsProduct"),Bs=n((t,e)=>{var r;return!((r=e.offer)!=null&&r.isCart)&&t.offerId&&t.offerId!=="0"&&t.auth&&en(t,e)&&Hs(t)&&Gs(t,e)},"upsellEligible"),Ql=n((t,e)=>js(t,e)&&!Bs(t,e),"regularEligible");var Zl=n(t=>t.replace(/(\r\n|\n|\r|\s)+/gm,""),"removeWhitespace"),Vr=class extends I(x){static get properties(){return{...super.properties,state:{type:Object,attribute:!1},test:{type:String}}}render(){if(!this.test)return u``;let e=Zl(this.test);return e=e.replace(/(![a-zA-Z]+)/g,"($1)"),zs.default.parse(e,o=>$r[o]&&$r[o](this.state,this))?u`
        <slot></slot>
      `:u``}shouldUpdate(e){return e.size&&(this.product&&this.product.id in this.state.autoshipEligible&&this.product.id in this.state.inStock||!this.product.id)}};n(Vr,"When");var Xl=n(t=>({state:t}),"mapStateToProps"),Ys=g(Xl)(Vr);var Ws={type:Object,converter:{toAttribute(t){return t==null?t:JSON.stringify(t)},fromAttribute(t){return t&&t.match(/[{[]/)?JSON.parse(t):{id:t}}}},xe={type:String,attribute:"default-frequency",converter:{fromAttribute(t){return t&&Po(t)?t:null}}},jr={type:Boolean,attribute:!0,reflect:!0},ut={type:Object,attribute:!1};var ep=n(t=>class extends t{applyTemplate(e){this.template=e;let r=typeof e.markup=="undefined"?this.constructor.initialTemplate:e.markup;r&&this._templateMarkup!==r&&(this._templateMarkup=r,this.innerHTML=r)}refreshTemplate(){if(this._templates&&this._templates.length){let e=this._templates.find(({selector:r})=>{try{return this.matches(r)}catch{return!1}});this.applyTemplate(e||{})}}set templates(e){this._templates=e,this.refreshTemplate()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.constructor.initialTemplate&&!this.innerHTML.trim()&&(this.innerHTML=this.constructor.initialTemplate)}},"withTemplate"),z=ep(x);var Y=class extends I(z){static get properties(){return{subscribed:jr,frequencyMatch:{type:Boolean,reflect:!0,attribute:"frequency-match"},productDefaultFrequency:{type:String},defaultFrequency:{type:String},frequencies:{type:Array}}}static get styles(){return b`
      :host {
        cursor: default;
        display: inline-block;
      }

      :host[hidden] {
        display: none;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-primary-color, var(--og-border-color, black));
        background: #fff;
        border-radius: 100%;
        vertical-align: middle;
        color: var(--og-primary-color, var(--og-btn-color, black));
      }

      .radio {
        text-indent: -9999px;
        flex-shrink: 0;
      }

      .checkbox {
        border-radius: 3px;
      }

      .radio,
      .checkbox {
        border-color: var(--og-checkbox-border-color, black);
      }

      .checkbox.active::after,
      .radio.active::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: var(--og-checkbox-border-color, black);
      }

      .radio.active::after {
        content: ' ';
        border-radius: 100%;
        border: 2px solid #fff;
      }

      .checkbox.active::after {
        border: none;
        border-radius: 0;
        background: #fff;
        content: '\\2714';
        line-height: 1;
        text-align: center;
        overflow: visible;
      }
    `}constructor(){super(),this.addEventListener("click",this.handleClick.bind(this))}updated(e){e.has("subscribed")&&(this.frequencyMatch=this.frequency===this.defaultFrequency)}handleClick(){}render(){return this.subscribed&&!this.defaultFrequency?u`
        <slot name="subscribed"></slot>
        <slot name="frequency-mismatch"></slot>
      `:this.subscribed&&this.defaultFrequency===this.frequency?u`
        <slot name="subscribed"></slot>
        <slot name="frequency-match"></slot>
      `:this.subscribed&&this.defaultFrequency!==this.frequency?u`
        <slot name="subscribed"></slot>
        <slot name="frequency-mismatch"></slot>
      `:u`
      <slot name="not-subscribed"></slot>
    `}};n(Y,"OptinStatus");var Z=n((t,e={})=>{var r,o;return{subscribed:ee(e.product)(t),frequency:re(e.product)(t),productDefaultFrequency:Qe((e.product||{}).id)(t),prepaidShipmentsOptedIn:V(e.product)(t),defaultFrequency:oe((r=e.product)==null?void 0:r.id)(t)||G(e,"defaultFrequency"),frequencies:Ze((o=e.product)==null?void 0:o.id)(t)||G(e,"frequencies"),...Xe(t,e),productFrequencies:J(e.product)(t)}},"mapStateToProps"),Js=g(Z)(Y);var dt=class extends Y{static get properties(){return{...super.properties,frequency:{type:String,reflect:!0},defaultFrequency:xe,optinButtonLabel:{type:String}}}updated(e){if(e.has("subscribed")||e.has("frequencies")){if(A.shopify_selling_plans&&this.store){let r=this.getAttribute("default-frequency");r=Ct(r,this.productFrequencies),this.sellingPlanFreq=r}this.frequencyMatch=this.frequency===this.optinFrequency}}get optinFrequency(){let e;return this.sellingPlanFreq?e=this.sellingPlanFreq:this.hasAttribute("default-frequency")?e=this.getAttribute("default-frequency"):e=this.offer?this.offer.defaultFrequency:this.defaultFrequency,A.shopify_selling_plans&&this.store&&(e=Ct(e,this.productFrequencies)),e}handleClick(e){this.optinProduct(Lt(this),this.optinFrequency,this.offer),e.preventDefault()}render(){return u`
      <slot name="default">
        <button
          aria-labelledby="ogOfferOptInLabel"
          role="radio"
          aria-checked="${!!this.subscribed}"
          class="btn radio ${this.subscribed?"active":""}"
        ></button>
        <label id="ogOfferOptInLabel">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(dt,"OptinButton");var Ks=g(Z,{optinProduct:Q})(dt);var Gr=class extends Y{static get properties(){return{...super.properties,label:{type:String}}}handleClick(e){this.optoutProduct(this.product,this.offer),e.preventDefault()}render(){return u`
      <slot name="default">
        <button
          aria-labelledby="ogOfferOptOutLabel"
          role="radio"
          aria-checked="${!this.subscribed}"
          class="btn radio ${this.subscribed?"":"active"}"
        ></button>
        <label id="ogOfferOptOutLabel">
          <slot>
            <og-text key="offerOptOutLabel"></og-text>
          </slot>
        </label>
      </slot>
    `}};n(Gr,"OptoutButton");var Qs=g(Z,{optoutProduct:tt})(Gr);var qe=n((t,e)=>{let{every:r,every_period:o}=Ot(t);return r&&o?u`
        ${r}
        <og-text key="frequencyPeriods" variant="${o}" pluralize="${r}"></og-text>
        ${e&&e===t?u`
              <og-text key="defaultFrequencyCopy"></og-text>
            `:""}
      `:t},"frequencyText"),ft=class extends I(z){static get properties(){return{...super.properties,disabled:{type:Boolean},subscribed:jr,frequency:{type:String},defaultFrequency:xe,productDefaultFrequency:{type:String},config:{type:Object},frequencies:{converter:{fromAttribute:gi}}}}static get styles(){return b`
      :host[hidden] {
        display: none;
      }
      :host {
        display: inline-block;
      }
    `}constructor(){super(),this.frequencies=[]}render(){let e=this.frequency||this.defaultFrequency;return u`
      <span>
        ${this.subscribed&&u`
            <slot name="subscribed">${qe(e)}</slot>
          `||""}
        ${!this.subscribed&&u`
            <slot name="not-subscribed"></slot>
          `||""}
        ${this.subscribed&&this.defaultFrequency&&this.defaultFrequency!==this.frequency&&u`
            <slot name="frequency-mismatch"></slot>
          `||""}
      </span>
    `}};n(ft,"FrequencyStatus");var Mt=n((t,e)=>{var r,o;return{subscribed:ee(e.product)(t),frequency:re(e.product)(t),productDefaultFrequency:Qe((e.product||{}).id)(t),frequencies:Ze((r=e.product)==null?void 0:r.id)(t)||G(e,"frequencies"),defaultFrequency:oe((o=e.product)==null?void 0:o.id)(t)||G(e,"defaultFrequency"),...Xe(t,e),productFrequencies:J(e.product)(t)}},"mapStateToProps"),Zs=g(Mt)(ft);var Hr=class extends Mr(Y){static get properties(){return{...super.properties,frequencies:{type:Array,attribute:!1},frequency:{type:String},defaultFrequency:xe}}static get styles(){return b`
      :host {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-radius: var(--og-select-border-radius, 0.5em);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
      }
    `}get currentFrequency(){return this.subscribed?this.frequency||this.productDefaultFrequency||this.defaultFrequency:"optedOut"}onOptinChange(e){e==="optedOut"?this.optoutProduct(this.product,this.offer):this.productChangeFrequency(this.product,e,this.offer)}render(){var o;let{options:e}=this.childOptions,r;if((o=this.frequencies)!=null&&o.length){let{frequenciesText:i}=this.productFrequencies;r=[e.find(s=>s.value==="optedOut"),...this.frequencies.map((s,a)=>({value:s,text:i&&a in i?i[a]:qe(s,this.defaultFrequency)}))]}else r=e;return u`
      <og-select
        .options="${r}"
        .selected="${this.currentFrequency}"
        .onChange="${({target:{value:i}})=>this.onOptinChange(i)}"
      ></og-select>
    `}};n(Hr,"OptinSelect");var Xs=g((t,e)=>{var r;return{...Z(t,e),...Mt(t,e),frequencies:Ze((r=e.product)==null?void 0:r.id)(t)||G(e,"frequencies")}},{productChangeFrequency:br,optoutProduct:tt})(Hr);var Br=class extends I(z){static get styles(){return b`
      :host[hidden] {
        display: none;
      }
      :host {
        display: inline-block;
      }
    `}static get properties(){return{...super.properties,upcomingOrderDate:{type:String,attribute:!1},auth:ut,isPreview:{type:Boolean,attribute:!1},target:{type:String},skipModal:{type:Boolean,attribute:"skip-modal"}}}constructor(){super(),this.fetchOrders=()=>0,this.createIu=()=>0,this.concludeUpsell=()=>0,this.addEventListener("click",this.handleClick.bind(this))}updated(e){e.has("auth")&&this.auth&&!this.upcomingOrderDate&&!this.isPreview&&this.fetchOrders()}handleClick(){let e;if(this.skipModal)this.createIu(this.product,this.nextUpcomingOrder.public_id,1,!1,null),this.concludeUpsell(this.product);else if(!this.target&&this.offer)e=this.offer.querySelector("og-upsell-modal"),e||(e=this.offer.shadowRoot.querySelector("og-upsell-modal"));else if(this.target)e=document.querySelector(this.target);else throw Error("You must specify a target attribute or place this element as child of og-offer");e&&e.setAttribute("show",!0)}render(){return u`
      <slot>
        <og-next-upcoming-order></og-next-upcoming-order>
      </slot>
    `}};n(Br,"UpsellButton");var tp=n(t=>({isPreview:t.previewUpsellOffer,nextUpcomingOrder:t.previewUpsellOffer?{public_id:"preview-order-id"}:t.nextUpcomingOrder}),"mapStateToProps"),ea=g(tp,{fetchOrders:_r,createIu:Er,concludeUpsell:Sr})(Br);var zr=class extends I(z){static get properties(){return{...super.properties,defaultFrequency:xe,auth:ut,subscribed:{type:Boolean,attribute:!1},frequency:{type:String,attribute:!1},nextUpcomingOrder:{type:Object,attribute:!1},show:{type:Boolean,attribute:"show"},offerId:{type:String}}}constructor(){super(),this.createIu=()=>0,this.concludeUpsell=()=>0}render(){return u`
      <og-modal ?show=${this.show} @close=${()=>this.close()} @confirm=${()=>this.confirm()}>
        <div slot="content">
          <slot>
            <slot name="content">
              <og-text key="upsellModalContent"></og-text>
            </slot>
            <slot name="offer">
              <br />

              <og-optout-button>
                <slot name="opt-out-label">
                  <og-text key="upsellModalOptOutLabel" slot="label"></og-text>
                </slot>
              </og-optout-button>
              <br />
              <og-optin-button default-frequency=${this.defaultFrequency}>
                <slot name="opt-in-label">
                  <og-text key="upsellModalOptInLabel" slot="label"></og-text>
                </slot>
              </og-optin-button>
              <br />
              <slot name="every-label">
                <og-text key="offerEveryLabel"></og-text>
              </slot>
              <og-select-frequency default-frequency=${this.defaultFrequency}></og-select-frequency>
            </slot>
          </slot>
        </div>
        <span slot="confirm">
          <slot name="confirm"><og-text key="upsellModalConfirmLabel"></og-text></slot>
        </span>
        <span slot="cancel">
          <slot name="cancel">
            <og-text key="upsellModalCancelLabel"></og-text>
          </slot>
        </span>
      </og-modal>
    `}set defaultFrequency(e){this._defaultFrequency=e}get defaultFrequency(){let e=this.querySelector("og-select-frequency");return e?e.defaultFrequency:this._defaultFrequency}confirm(){this.createIu(this.product,this.nextUpcomingOrder.public_id,1,this.subscribed,this.frequency||this.defaultFrequency),this.close()}close(){this.concludeUpsell(),this.removeAttribute("show")}};n(zr,"UpsellModal");var rp=n((t,e)=>{var r;return{auth:t.auth,offerId:t.offerId,subscribed:ee(e.product)(t),frequency:re(e.product)(t),defaultFrequency:oe((r=e.product)==null?void 0:r.id)(t)||G(e,"defaultFrequency"),nextUpcomingOrder:t.previewUpsellOffer?{public_id:"preview-order-id"}:t.nextUpcomingOrder,isPreview:t.previewUpsellOffer}},"mapStateToProps"),ta=g(rp,{concludeUpsell:Sr,createIu:Er})(zr);var Yr=class extends Y{static get properties(){return{...super.properties,frequency:{type:String}}}static get styles(){return b`
      :host {
        cursor: default;
        display: inline-block;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-checkbox-border-color, black);
        background: #fff;
        vertical-align: middle;
        color: var(--og-primary-color, black);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
      }

      .btn.active {
        background: var(--og-checkbox-border-color, black);
      }

      .btn.active:after {
        content: '✓';
        color: #fff;
        transform: scale(1.6);
        margin-left: 2px;
      }
    `}handleClick(e){this.subscribed?this.optoutProduct(this.product,this.offer):this.optinProduct(this.product,this.frequency||this.productDefaultFrequency||this.defaultFrequency,this.offer),e.preventDefault()}render(){return u`
      <slot name="default">
        <button id="action-trigger" class="btn checkbox ${this.subscribed?"active":""}"></button>
        <label for="action-trigger">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(Yr,"OptinToggle");var ra=g(Z,{optoutProduct:tt,optinProduct:Q})(Yr);var op=n((t,e)=>`${t}${parseInt(e,10)>1?"s":""}`,"pluralize"),Wr=class extends Xo(x){static get properties(){return{pluralize:{type:Number},variant:{type:Number},i18n:{type:Object,attribute:!1},locale:{type:Object,attribute:!1},key:{type:String}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._textOverride=this.innerText.trim()}getText(){return this._textOverride?this._textOverride:this.getPluralizedText(this.getVariantText(this.key))}getVariantText(e){let r={...this.i18n,...this.offer&&this.offer.locale},o=typeof r[e]!="undefined"?r[e]:"";return typeof this.variant=="undefined"?o:o[this.variant]}getPluralizedText(e){return typeof this.pluralize=="undefined"?e:e&&op(e,this.pluralize)}render(){return u`
      ${this.getText()}
    `}};n(Wr,"Text");var np=n(t=>({i18n:t.locale||{}}),"mapStateToProps"),oa=g(np)(Wr);var De=class{constructor(e){this.value=e,this.className="DiscountAmount"}toString(){return`${this.value}`}};n(De,"DiscountAmount");var ht=class extends De{constructor(e){super(e),this.className="DiscountPercent"}toString(){return`${super.toString()}%`}};n(ht,"DiscountPercent");var Jr=class extends ht{constructor(e){super(e),this.className="ShippingDiscountPercent"}toString(){return this.value===100?"free shipping":super.toString()}};n(Jr,"ShippingDiscountPercent");var rn="Discount Percent",on="Discount Amount",na="total_price",ia="shipping_total",sa="sub_total",nn=n(({field:t,object:e,type:r,value:o})=>{let s=[[new ht(o),{field:na,object:"item",type:rn}],[new De(o),{field:na,object:"item",type:on}],[new Jr(o),{field:ia,object:"order",type:rn}],[new De(o),{field:ia,object:"order",type:on}],[new ht(o),{field:sa,object:"order",type:rn}],[new De(o),{field:sa,object:"order",type:on}]].find(([,a])=>a.field===t&&a.object===e&&a.type===r);return s&&s[0]},"discountBuilder");function ip(t){return!(nn(t).className!==this.incentiveClass||this.incentiveValue&&this.incentiveValue.toString()!==t.value.toString())}n(ip,"filterIncentives");var Kr=class extends I(x){static get properties(){return{...super.properties,incentives:{type:Object,attribute:!1},from:{type:String},label:{type:String},initial:{type:Boolean,default:!1},value:{type:Number}}}createRenderRoot(){return this}render(){let e=this.from,r=this.value,o=this.initial?"initial":"ongoing",i=(this.incentives[o]||[]).find(ip.bind({incentiveClass:e,incentiveValue:r}));return u`
      ${this.label} ${i?nn(i):this.renderFallback()}
    `}renderFallback(){return u`
      ${nn({field:"sub_total",object:"order",type:"Discount Percent",value:this.value})}
    `}};n(Kr,"IncentiveText");var sp=n((t,e)=>{var r;return{incentives:(t.incentives||{})[e&&(e==null?void 0:e.product)&&S((r=e==null?void 0:e.product)==null?void 0:r.id)]||{}}},"mapStateToProps"),aa=g(sp)(Kr);var Qr=class extends Mr(ft){static get properties(){return{...super.properties,defaultText:{type:String,attribute:"default-text"}}}static get styles(){return b`
      :host {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-radius: var(--og-select-border-radius, 0.5em);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }
    `}set defaultFrequency(e){this._defaultFrequency=e}get defaultFrequency(){var i,s,a,c;let{options:e,isSelected:r}=this.childOptions,o;return this.productDefaultFrequency?o=this.productDefaultFrequency:r?o=r:e.length?o=e[0].value:o=this._defaultFrequency,((s=(i=this.productFrequencies)==null?void 0:i.frequencies)==null?void 0:s.length)&&o&&((c=(a=this.productFrequencies)==null?void 0:a.frequenciesEveryPeriod)==null?void 0:c.length)?Ct(o,this.productFrequencies):o}get currentFrequency(){return this.frequency?this.frequency:this.defaultFrequency}productChangeFrequency(e,r){this.frequency=r}render(){var o;let e,r=this.defaultFrequency;return(o=this.frequencies)!=null&&o.length?e=this.frequencies.map((i,s)=>{let a,{frequenciesEveryPeriod:c,frequenciesText:l}=this.productFrequencies;return c&&s in c?a=qe(c[s],r):l&&s in l?a=l[s]:a=qe(i,this.defaultFrequency),{value:i,text:a}}):{options:e}=this.childOptions,e.length||(e=(this.frequencies||[]).map(i=>({value:i,text:qe(i,r)}))),e=e.map(({text:i,value:s})=>({text:s===r?u`
              ${i} ${this.defaultText||""}
            `:i,value:s})),u`
      <og-select
        ariaLabel="Delivery frequency"
        .options="${e}"
        .selected="${this.currentFrequency}"
        .onChange="${({target:{value:i}})=>{this.productChangeFrequency(this.product,i,this.offer)}}"
      ></og-select>
    `}};n(Qr,"SelectFrequency");var ca=g(Mt,{productChangeFrequency:br})(Qr);var ap={day:{day:"2-digit"},"day-numeric":{day:"numeric"},"day-short":{weekday:"short"},"day-long":{weekday:"long"},month:{month:"2-digit"},"month-numeric":{month:"numeric"},"month-short":{month:"short"},"month-long":{month:"long"},year:{year:"2-digit"},"year-numeric":{year:"numeric"}};var la=n((t,e)=>t instanceof Date?(e||"").toString().replace(/\{\{([-\w]+)\}\}/g,r=>{let o=r.replace(/[{}]/g,""),i=ap[o];if(typeof i=="undefined")return o;let a=new Intl.DateTimeFormat("en-us",i).formatToParts(t),[{value:c}]=a;return c}):t,"formatDate");var Zr=class extends x{static get properties(){return{value:{type:String,reflect:!0},format:{type:String}}}createRenderRoot(){return this}render(){return u`
      ${la(this.value,this.format||"{{month-long}} {{day}}, {{year-numeric}}")}
    `}};n(Zr,"FormattedDate");var cp=n(t=>({value:t.previewUpsellOffer?new Date:t.nextUpcomingOrder.place}),"mapStateToProps"),pa=g(cp)(Zr);var fa=ae(Et());var ua=n((t,e,r)=>n(async function(i){await i({type:fe,payload:{isPreview:t,productId:e}}),await i({type:Pe}),await i(be({in_stock:{[e]:!0},eligibility_groups:{[e]:["subscription","upsell"]},result:"success",autoship:{[e]:!0},autoship_by_default:{[e]:!1},modifiers:{},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:10},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[e]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}},r,e))},"setPreviewStandardOfferThunk"),"setPreviewStandardOffer"),lp=n((t,e)=>(Object.entries(e).forEach(([r,o])=>{if(Object.prototype.hasOwnProperty.call(t,r)){let i=t[r].concat(o),s=[...new Set(i.map(a=>JSON.stringify(a)))];t[r]=s.map(a=>JSON.parse(a))}else t[r]=o}),t),"mergeProductPlansToState"),pp=n((t,e,r)=>n(async function(i,s){await i({type:St,payload:{isPreview:t,productId:e}});let{merchantId:a}=s();t?(await i(be({in_stock:{[e]:!0},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},default_frequencies:{[e]:{every:1,every_period:3}},eligibility_groups:{[e]:["subscription","upsell"]},result:"success",autoship:{[e]:!0},autoship_by_default:{[e]:!1},modifiers:{}},r,e)),await i(Ao({count:1,next:null,previous:null,results:[{merchant:"0e5de2bedc5e11e3a2e4bc764e106cf4",customer:"TestCust",payment:"e98e789aba0111e9b90fbc764e107990",shipping_address:"b3a5816ae59611e78937bc764e1043b0",public_id:"23322d4a83eb11ea9a1ebc764e101db1",sub_total:"206.98",tax_total:"0.00",shipping_total:"10.00",discount_total:"0.00",total:"216.98",created:"2020-04-21 11:14:11",place:"2020-06-24 00:00:00",cancelled:null,tries:0,generic_error_count:0,status:1,type:1,order_merchant_id:null,rejected_message:null,extra_data:null,locked:!1,oos_free_shipping:!1}]})),await i(Rt(a,"sig_field","ts","sig"))):await i(ge())},"setPreviewUpsellOfferThunk"),"setPreviewUpsellOffer"),up=n((t,e,r)=>n(async function(i,s){let a=s().productPlans;await i({type:yo,payload:{isPreview:t,productId:e}}),await i({type:Pe}),await i(be({in_stock:{[e]:!0},eligibility_groups:{[e]:["subscription","upsell","prepaid"]},result:"success",autoship:{[e]:!0},autoship_by_default:{[e]:!1},modifiers:{},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:10},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[e]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}},r,e)),await i({type:ze,payload:lp(a,Nr({[e]:[{frequency:"1_3",regularPrice:"$15.00",subscriptionPrice:"$12.00",discountRate:"25%",prepaidShipments:3,regularPrepaidPrice:"$36.00",prepaidSavingsPerShipment:"$3.00",prepaidSavingsTotal:"$9.00",prepaidExtraSavingsPercentage:"10%"},{frequency:"1_3",regularPrice:"$15.00",subscriptionPrice:"$12.00",discountRate:"20%",prepaidShipments:6,regularPrepaidPrice:"$72.00",prepaidSavingsPerShipment:"$3.00",prepaidSavingsTotal:"$18.00",prepaidExtraSavingsPercentage:"10%"},{frequency:"1_3",regularPrice:"$15.00",subscriptionPrice:"$12.00",discountRate:"20%",prepaidShipments:12,regularPrepaidPrice:"$144.00",prepaidSavingsPerShipment:"$3.00",prepaidSavingsTotal:"$36.00",prepaidExtraSavingsPercentage:"10%"}]}))}),await i({type:Be,payload:{prepaidSellingPlans:{[e]:[{numberShipments:3,sellingPlan:"1_3"},{numberShipments:6,sellingPlan:"1_3"},{numberShipments:12,sellingPlan:"1_3"}]}}})},"setPreviewPrepaidThunk"),"setPreviewPrepaid"),da=n((t,e,r)=>async function(o,i){switch(await o({type:he}),await o({type:fe,payload:{isPreview:!1,productId:r.product.id}}),await o({type:St,payload:{isPreview:!1,productId:r.product.id}}),t){case"regular":o(ua(!0,r.product.id,r));break;case"upsell":o(pp(!0,r.product.id,r));break;case"subscribed":o(ua(!0,r.product.id,r)),o(Q(r.product,"2_2"));break;case"prepaid":o(up(!0,r.product.id,r)),o(Q(r.product,"1_3"));break;default:}},"setPreview");var dp=n((...t)=>JSON.stringify(t),"memoizeKey"),ha=n(t=>{let e=!1;return(...r)=>{e||(console.warn(t(...r)),e=!0)}},"logOnce"),fp=ha((t,e)=>`Hiding Ordergroove offer since the store currency ${t} does not match your configured currency ${e} and you are not set up for multicurrency. Contact your Ordergroove representative for next steps.`),sg=ha(()=>"Hiding Ordergroove offer since cart offers does not currently support product-specific frequency lists."),hp=(0,fa.default)((t,e)=>Object.assign({components:e},t),dp),Xr=class extends z{static get properties(){return{...super.properties,config:{type:Object,attribute:!1},product:Ws,productComponents:{type:Array,attribute:"product-components"},offerId:{type:String,attribute:!1},auth:ut,preview:{type:String,attribute:"preview",reflect:"true"},location:{type:String},autoshipByDefault:{type:Boolean,attribute:"autoship-by-default"},productDefaultFrequency:{type:String,attribute:!1},locale:{type:Object,attribute:!0},firstOrderPlaceDate:{type:String,attribute:"first-order-place-date"},productToSubscribe:{type:String,attribute:"product-to-subscribe"},subscribed:{type:Boolean,reflect:!0},frequency:{type:String,reflect:!0},productFrequency:{type:String},isCart:{type:Boolean,attribute:"cart"},optedin:{type:Object},variationId:{type:String}}}firstUpdated(){let e=Array.from(this.getAttributeNames()).find(r=>r.startsWith("preview-"));e==="preview-standard-offer"?this.preview="regular":e==="preview-upsell-offer"?this.preview="upsell":e==="preview-subscribed-offer"?this.preview="subscribed":e==="preview-prepaid-offer"&&(this.preview="prepaid")}static get styles(){return b`
      :host[hidden] {
        display: none;
      }

      :host {
        display: block;
      }

      :host {
        color: var(--og-global-color, #000);
        font-family: var(--og-global-family, inherit);
        font-size: var(--og-global-size, inherit);
        padding: var(--og-wrapper-padding, 10px 0);
        min-width: var(--og-wrapper-min-width, 0);
      }

      p {
        margin: 0 0 0.3em;
      }

      :host og-upsell-button button {
        font-family: var(--og-upsell-family, inherit);
        font-size: var(--og-upsell-size, inherit);
        background-color: var(--og-upsell-background, inherit);
        color: var(--og-upsell-color, inherit);
      }

      .og-modal__btn {
        font-size: var(--og-modal-button-size, 0.875rem);
        font-family: var(--og-modal-button-family, inherit);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: var(--og-modal-button-background, #e6e6e6);
        color: var(--og-modal-button-color, rgba(0, 0, 0, 0.8));
        border-radius: 0.25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform 0.25s ease-out;
        transition: transform 0.25s ease-out;
        transition:
          transform 0.25s ease-out,
          -webkit-transform 0.25s ease-out;
      }

      .og-modal__btn:focus,
      .og-modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      .og-modal__btn-primary {
        background-color: var(--og-confirm-button-background, #00449e);
        color: var(--og-confirm-button-color, #fff);
      }
    `}static get initialTemplate(){return`
    <og-when test="regularEligible">
      <div>

        <og-optout-button>
          <og-text key="offerOptOutLabel"></og-text>
        </og-optout-button>
      </div>
      <div>
        <og-optin-button>
          <og-price discount>
            <span slot="prepend">Subscribe and get</span>
            <span slot="append">off</span>
            <og-text key="offerOptInLabel" slot="fallback"></og-text> 
          </og-price>
          <og-price regular></og-price>
          <og-price subscription></og-price>
    
        </og-optin-button>
        <og-tooltip placement="bottom">
          <div slot="trigger">
            <og-text key="offerTooltipTrigger"></og-text>
          </div>
          <div slot="content">
            <og-text key="offerTooltipContent"></og-text>
          </div>
        </og-tooltip>
      </div>
      <div style="margin-left: 2.2em">
        <og-text key="offerEveryLabel"></og-text>
        <og-select-frequency>
          <option value="3_1" selected>3 Days</option>
          <option value="1_2">1 Week</option>
          <option value="1_3">1 Month</option>
        </og-select-frequency>
      </div>
    </og-when>

    <og-when test="upsellEligible">
      <og-when test="!upcomingOrderContainsProduct">
      <div class="og-iu-offer">
        <og-text key="upsellButtonLabel"></og-text>
        <og-upsell-button>
          <button type="button">
            <og-text key="upsellButtonContent"></og-text>
            <og-next-upcoming-order></og-next-upcoming-order>
          </button>
        </og-upsell-button>
        <og-upsell-modal>
          <og-text key="upsellModalContent"></og-text>
          <br />

          <og-optout-button>
            <og-text key="upsellModalOptOutLabel"></og-text>
          </og-optout-button>

          <br />

          <og-optin-button>
            <og-text key="upsellModalOptInLabel"></og-text>
          </og-optin-button>
          <br />

          <og-text key="offerEveryLabel"></og-text>
          <og-select-frequency>
            <option value="3_1" selected>3 Days</option>
            <option value="1_2">1 Week</option>
            <option value="1_3">1 Month</option>
          </og-select-frequency>

          <button slot="confirm" class="og-modal__btn og-modal__btn-primary">
            <og-text key="upsellModalConfirmLabel"></og-text>
          </button>
          <button slot="cancel" class="og-modal__btn"><og-text key="upsellModalCancelLabel"></og-text></button>
        </og-upsell-modal>
      </div>
      </og-when>
      <og-when test="upcomingOrderContainsProduct">
        The product is in your next upcomming order
      </og-when>
    </og-when>
    
    `}constructor(){super(),this.module="pdp",this.product={},this.productComponents=[],this.fetchOffer=()=>0,this.fetchOrders=()=>0,this.productHasChangedComponents=()=>0,this.setFirstOrderPlaceDate=()=>0,this.setProductToSubscribe=()=>0,this.productChangeFrequency=()=>0}applyTemplate(e){super.applyTemplate(e);let{id:r,locale:o}=e;this.variationId=r,this.locale=o;let i=new CustomEvent("template-changed");this.dispatchEvent(i)}updated(e){if(e.has("preview")&&this.setPreview(this.preview,e.get("preview"),this),this.frequency=this.defaultFrequency,e.has("product")&&!this.isPreview&&mr(()=>this.fetchOffer(this.product.id,Ye,this)),e.has("firstOrderPlaceDate")&&this.product.id&&!this.isPreview&&this.setFirstOrderPlaceDate(this.product.id,this.firstOrderPlaceDate),e.has("productToSubscribe")&&this.product.id&&!this.isPreview&&this.setProductToSubscribe(this.product.id,this.productToSubscribe),e.has("auth")&&this.auth&&!this.isPreview&&this.fetchOrders(),e.has("productComponents")){let r=hp(this.product,this.productComponents),o=Object.assign({},this.product,{components:e.get("productComponents")});N(r,o)||this.productHasChangedComponents(r,o)}(e.has("offerId")||e.has("autoshipByDefault")||e.has("location")||e.has("product"))&&this.offerId&&this.autoshipByDefault&&(this.location==="cart"||this.isCart)&&this.product.id&&this.optinProduct&&!(this.optedin||[]).find(r=>N(r,this.product))&&this.optinProduct({...this.product,...this.productComponents.length&&{components:this.productComponents}},this.defaultFrequency,this)}get isPreview(){return this.preview||window.og.previewMode}get shouldEnableOffer(){return this.config&&this.config.storeCurrency&&this.config.merchantSettings&&!(this.config.merchantSettings.multicurrency_enabled||this.config.storeCurrency===this.config.merchantSettings.currency_code)?(fp(this.config.storeCurrency,this.config.merchantSettings.currency_code),!1):!0}render(){return this.shouldEnableOffer?u`
          <slot></slot>
        `:null}get defaultFrequency(){let e=this.productFrequency||this.productDefaultFrequency;if(e)return e;let r=this.querySelector("og-select-frequency");if(r&&r.currentFrequency)return r.currentFrequency;let o=this.getValueFromAttribute("defaultFrequency");return o||(this.template&&this.template.config&&typeof this.template.config.defaultFrequency!="undefined"?this.template.config.defaultFrequency:this.configDefaultFrequency)}getValueFromAttribute(e){let r=To(e);if(this.hasAttribute(r)){let o=this.getAttribute(r);return o.toString().toLowerCase()==="true"?!0:o.toString().toLowerCase()==="false"?!1:o}}};n(Xr,"Offer");var mp=n((t,e)=>{var r;return{config:t.config,auth:t.auth,offerId:((t.productOffer||{})[(e.product||{}).id]||[])[0],configDefaultFrequency:oe((r=e.product)==null?void 0:r.id)(t),productFrequency:re(e.product)(t),productDefaultFrequency:Qe((e.product||{}).id)(t),autoshipByDefault:t.config&&t.config.autoshipByDefault||G(e,"autoshipByDefault",vo(t)[(e.product||{}).id]),...hr(e.product)(t)&&{autoshipByDefault:!1},optedin:wt(t),subscribed:ee(e.product)(t),...Xe(t)}},"mapStateToProps"),ma=g(mp,{fetchOffer:Ii,fetchOrders:_r,productHasChangedComponents:Ti,optinProduct:Q,setFirstOrderPlaceDate:Li,setProductToSubscribe:Mi,setPreview:da})(Xr);var $t=class extends x{constructor(){super(),this.showCancelButton=!0,this.showConfirmButton=!0}static get properties(){return{title:{type:String,attribute:!1},content:{type:String,attribute:!1},confirmText:{type:String,attribute:!1},cancelText:{type:String,attribute:!1},showCancelButton:{type:Boolean},showConfirmButton:{type:Boolean},show:{type:Boolean,attribute:"show"}}}static get styles(){return b`
      :host[hidden] {
        display: none;
      }

      :host {
        display: block;
      }

      .og-modal {
        display: none;
      }

      .og-modal.is-open {
        display: block;
      }

      .og-modal__overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .og-modal__container {
        background-color: var(--og-modal-background-color, #fff);
        padding: var(--og-modal-padding, 30px);
        max-width: 500px;
        max-height: 100vh;
        border-radius: var(--og-modal-border-radius, 4px);
        box-sizing: border-box;
      }

      .og-modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .og-modal__title {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.25;
        color: #00449e;
        box-sizing: border-box;
      }

      .og-modal__close {
        background: transparent;
        border: 0;
      }

      .og-modal__close:before {
        content: '✕';
      }

      .og-modal__content {
        margin-top: 2rem;
        margin-bottom: 2rem;
        line-height: 1.5;
      }

      .og-modal__btn {
        font-size: var(--og-modal-button-size, 0.875rem);
        font-family: var(--og-modal-button-family, inherit);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: var(--og-modal-button-background, #e6e6e6);
        color: var(--og-modal-button-color, rgba(0, 0, 0, 0.8));
        border-radius: 0.25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform 0.25s ease-out;
        transition: transform 0.25s ease-out;
        transition:
          transform 0.25s ease-out,
          -webkit-transform 0.25s ease-out;
      }

      .og-modal__btn:focus,
      .og-modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      .og-modal__btn-primary {
        background-color: var(--og-confirm-button-background, #00449e);
        color: var(--og-confirm-button-color, #fff);
      }
      .btn {
        cursor: pointer;
      }
    `}close(){this.removeAttribute("show"),this.dispatchEvent(new CustomEvent("close"))}confirm(){this.removeAttribute("show"),this.dispatchEvent(new CustomEvent("confirm"))}get confirmButton(){return this.showConfirmButton?u`
          <span @click="${()=>this.confirm()}">
            <slot name="confirm" class="btn">
              <button class="og-modal__btn og-modal__btn-primary og-modal__confirm" @click="${()=>this.confirm()}">
                ${this.confirmText}
              </button>
            </slot>
          </span>
        `:u``}get cancelButton(){return this.showCancelButton?u`
          <span @click="${()=>this.close()}" class="btn">
            <slot name="cancel">
              <button class="og-modal__btn og-modal__cancel" @click="${()=>this.close()}">${this.cancelText}</button>
            </slot>
          </span>
        `:u``}render(){return this.show?u`
      <div class="og-modal is-open" aria-hidden="true">
        <div class="og-modal__overlay" tabindex="-1">
          <div class="og-modal__container" role="dialog" aria-modal="true">
            <header class="og-modal__header">
              <h2 class="og-modal__title">
                <slot name="title">${this.title}</slot>
              </h2>
              <button class="og-modal__close" aria-label="Close" @click="${()=>this.close()}"></button>
            </header>
            <main class="og-modal__content">
              <slot name="content">${this.content}</slot>
            </main>
            <footer class="og-modal__footer">${this.confirmButton} ${this.cancelButton}</footer>
          </div>
        </div>
      </div>
    `:u``}};n($t,"Modal");var Vt=class extends x{static get styles(){return b`
      :host {
        display: inline-block;
        color: inherit;
        position: relative;
        height: 100%;
        cursor: inherit;
        font-family: inherit;
        font-weight: inherit;
      }
      select {
        font-weight: inherit;
        display: block;
        height: 100%;
        cursor: inherit;
        color: inherit;
        font-family: inherit;
        font-size: 1em;
        line-height: 1.3;
        padding: var(--og-select-padding, 0.4em 1.8em 0.3em 0.5em);
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
        border: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
      }
      select::-ms-expand {
        display: none;
      }
      select:focus {
        outline: none;
      }
      select option {
        font-weight: inherit;
      }
      span {
        position: absolute;
        // background: white;
        color: inherit;
        fill: white;
        pointer-events: none;
        right: 0.3em;
        top: 50%;
        z-index: 1;
        font-size: 1em;
        line-height: 0.2em;
        transform: scaleY(0.5);
      }
    `}static get properties(){return{options:{type:Array},selected:{type:String},ariaLabel:{type:String}}}render(){return u`
      <select @change="${n(r=>this.onChange(r),"handleOnChange")}" aria-label="${this.ariaLabel}">
        ${this.options.map(r=>u`
            <option
              value="${r.value}"
              ?selected=${r.value===this.selected}
              .selected=${r.value===this.selected}
            >
              ${r.text}
            </option>
          `)}
      </select>
      <span>&#9660;</span>
    `}};n(Vt,"Select");var jt=class extends x{static get properties(){return{placement:{type:String,default:"bottom"}}}static get styles(){return b`
      :host[hidden] {
        display: none;
      }

      :host {
        display: inline-block;
        position: relative;
        z-index: 9;
      }

      .trigger {
        display: block;
        cursor: pointer;
      }

      .content {
        box-sizing: border-box;
        font-family: var(--og-tooltip-family, inherit);
        font-size: var(--og-tooltip-size, inherit);
        color: var(--og-tooltip-color, inherit);
        background-color: var(--og-tooltip-background, #ececec);
        box-shadow: var(--og-tooltip-box-shadow, 2px 2px 6px rgba(0, 0, 0, 0.28));
        display: block;
        opacity: 0;
        padding: var(--og-tooltip-padding, 0.5em);
        text-align: var(--og-tooltip-text-align, left);
        pointer-events: none;
        position: absolute;
        transform: translateY(10px);
        transition: transform 0.25s ease-out;
        z-index: 99999;
        border-radius: var(--og-tooltip-border-radius, 0);
      }

      .content:after {
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
      }

      .top {
        bottom: 100%;
        margin-bottom: 10px;
      }

      .bottom {
        top: 100%;
        margin-top: 10px;
      }

      .left {
        right: 100%;
        margin-right: 10px;
      }

      .right {
        left: 100%;
        margin-left: 10px;
      }

      .top-left {
        bottom: 100%;
        margin-bottom: 10px;
        right: 100%;
        margin-right: -16px;
      }

      .top-right {
        bottom: 100%;
        margin-bottom: 10px;
        left: 100%;
        margin-left: -16px;
      }

      .bottom-left {
        top: 100%;
        margin-top: 10px;
        right: 100%;
        margin-right: -16px;
      }

      .bottom-right {
        top: 100%;
        margin-top: 10px;
        left: 100%;
        margin-left: -16px;
      }

      .bottom-left:after,
      .bottom-right:after,
      .top-left:after,
      .top-right:after,
      .top:after,
      .bottom:after {
        margin-left: -10px;
        left: 50%;
        border-left: solid transparent 10px;
        border-right: solid transparent 10px;
      }

      .top-left:after,
      .top-right:after,
      .top:after {
        bottom: -10px;
        border-top: solid var(--og-tooltip-background, #ececec) 10px;
      }
      .bottom-left:after,
      .top-left:after {
        left: auto;
        right: 0;
      }

      .bottom-right:after,
      .top-right:after {
        left: 0;
        right: auto;
        margin-left: 0;
      }

      .bottom-left:after,
      .bottom-right:after,
      .bottom:after {
        top: -10px;
        border-bottom: solid var(--og-tooltip-background, #ececec) 10px;
      }

      .left:after,
      .right:after {
        margin-top: -10px;
        top: 50%;
        border-top: solid transparent 10px;
        border-bottom: solid transparent 10px;
      }
      .right:after {
        left: -10px;
        border-right: solid var(--og-tooltip-background, #ececec) 10px;
      }
      .left:after {
        right: -10px;
        border-left: solid var(--og-tooltip-background, #ececec) 10px;
      }

      .tooltip:hover .content,
      .trigger:focus + .content {
        opacity: 1;
        width: 200px;
        pointer-events: auto;
        transform: translateY(0px);
      }
    `}connectedCallback(){super.connectedCallback(),this.recalculatePosition=this.recalculatePosition.bind(this),this.addEventListener("mouseenter",this.recalculatePosition),this.addEventListener("focusin",this.recalculatePosition)}recalculatePosition(){let r=this.shadowRoot.querySelector(".trigger").getBoundingClientRect(),o=this.shadowRoot.querySelector(".content"),i=o.getBoundingClientRect();!this.placement||this.placement==="top"||this.placement==="bottom"?o.style.left=`${(-1*i.width+r.width)/2}px`:(this.placement==="left"||this.placement==="right")&&(o.style.top=`${(-1*i.height+r.height)/2}px`)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.recalculatePosition),this.removeEventListener("focusin",this.recalculatePosition)}render(){return u`
      <span class="tooltip">
        <span class="trigger" tabindex="0">
          <slot name="trigger">${this.trigger}</slot>
        </span>
        <div class="content ${this.placement||"bottom"}">
          <slot name="content">${this.content}</slot>
        </div>
      </span>
    `}};n(jt,"Tooltip");var W=class extends I(x){static get properties(){return{options:{type:Array},shipmentsOptedIn:{type:Number},prepaidShipmentsSelected:{type:Number},defaultPrepaidShipments:{type:Number,attribute:"default-prepaid-shipments"}}}get prepaidOptedIn(){return this.shipmentsOptedIn>1}get selectedNumberOfShipments(){return this.prepaidShipmentsSelected||this.shipmentsOptedIn||this.getDefaultPrepaidShipments()}getDefaultPrepaidShipments(){return this.options.includes(this.defaultPrepaidShipments)?this.defaultPrepaidShipments:this.options[1]||this.options[0]}handleSelect({target:{value:e}}){let r=+e;this.productChangePrepaidShipments(this.product,r,this.offer)}render(){return u``}};n(W,"PrepaidStatus");var gp=n((t,e)=>({options:j(e.product.id)(t),shipmentsOptedIn:V(e.product)(t),prepaidShipmentsSelected:te(e.product)(t)}),"mapStateToProps"),Sg=g(gp,{productChangePrepaidShipments:ye})(W);var eo=class extends W{constructor(){super(),this.options=[],this.text="shipments"}static get properties(){return{...super.properties,text:{type:String}}}static get styles(){return b`
      og-select {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }

      input {
        width: 1.2em;
        height: 1.2em;
        accent-color: var(--og-prepaid-checkbox-color, black);
        border-radius: 4px;
      }
    `}handleChange(e){e.target.checked?this.productChangePrepaidShipments(this.product,this.selectedNumberOfShipments,this.offer):this.productChangePrepaidShipments(this.product,null,this.offer)}render(){if(this.options.length===0)return u``;let e=this.options.map(r=>({value:r,text:`${r} ${this.text}`}));return u`
      <div>
        <input id="cbx" type="checkbox" .checked=${this.prepaidOptedIn} @change=${this.handleChange} />
        <label for="cbx">
          <slot name="label">Prepay for</slot>
          ${this.options.length>1?u`
                <og-select
                  .options=${e}
                  .selected=${this.selectedNumberOfShipments}
                  .onChange="${r=>this.handleSelect(r)}"
                ></og-select>
              `:u`
                <span>${e[0].text}</span>
              `}
          <slot name="append"></slot>
        </label>
      </div>
    `}};n(eo,"PrepaidToggle");var yp=n((t,e)=>({options:j(e.product.id)(t),shipmentsOptedIn:V(e.product)(t),prepaidShipmentsSelected:te(e.product)(t)}),"mapStateToProps"),ga=g(yp,{productChangePrepaidShipments:ye})(eo);var to=class extends W{static get properties(){return{...super.properties,productPlans:{type:Object},prepaidShipmentsSelected:{type:Number},totalPrice:{type:Boolean,reflect:!0,attribute:"total-price"},perDeliveryPrice:{type:Boolean,reflect:!0,attribute:"per-delivery-price"},totalSavings:{type:Boolean,reflect:!0,attribute:"total-savings"},perDeliverySavings:{type:Boolean,reflect:!0,attribute:"per-delivery-savings"},percentageSavings:{type:Boolean,reflect:!0,attribute:"percentage-savings"},extraPercentageSavings:{type:Boolean,reflect:!0,attribute:"extra-percentage-savings"},numberOfShipments:{type:Boolean,reflect:!0,attribute:"number-of-shipments"}}}static get styles(){return b`
      :host {
        display: inline-block;
        text-indent: initial;
      }
    `}get value(){let e=S(this.product),r=this.productPlans[e]||[],o=this.selectedNumberOfShipments,i=r.find(h=>h.prepaidShipments>1&&h.prepaidShipments===o);if(!i&&(i=r.find(h=>h.prepaidShipments>1),!i))return"";let{discountRate:s,subscriptionPrice:a,prepaidShipments:c,regularPrepaidPrice:l,prepaidSavingsPerShipment:p,prepaidSavingsTotal:d,prepaidExtraSavingsPercentage:f}=i;return this.totalPrice?l:this.perDeliveryPrice?a:this.totalSavings?d:this.perDeliverySavings?p:this.percentageSavings?s:this.extraPercentageSavings?f:this.numberOfShipments?c:""}render(){let e=this.value;return e?u`
        <slot name="prepend"></slot>
        ${e}
        <slot name="append"></slot>
      `:u`
      <slot name="fallback"></slot>
    `}};n(to,"PrepaidData");var bp=n((t,e)=>({options:j(e.product.id)(t),shipmentsOptedIn:V(e.product)(t),prepaidShipmentsSelected:te(e.product)(t),productPlans:t.productPlans}),"mapStateToProps"),ya=g(bp)(to);var ro=class extends W{constructor(){super(),this.addEventListener("click",this.handleClick.bind(this))}static get styles(){return b`
      :host {
        cursor: pointer;
        display: inline-block;
      }

      :host[hidden] {
        display: none;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-primary-color, var(--og-border-color, black));
        background: #fff;
        border-radius: 100%;
        vertical-align: middle;
        color: var(--og-primary-color, var(--og-btn-color, black));
      }

      .radio {
        text-indent: -9999px;
        flex-shrink: 0;
      }

      .radio {
        border-color: var(--og-checkbox-border-color, black);
      }

      .radio.active::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: var(--og-checkbox-border-color, black);
      }

      .radio.active::after {
        content: ' ';
        border-radius: 100%;
        border: 2px solid #fff;
      }
    `}handleClick(e){this.prepaidOptedIn||this.productChangePrepaidShipments(this.product,this.selectedNumberOfShipments,this.offer),e.preventDefault()}render(){return u`
      <slot name="default">
        <button id="action-trigger" class="btn radio ${this.prepaidOptedIn?"active":""}"></button>
        <label for="action-trigger">
          <slot name="label"><og-text key="prepaidOptInLabel"></og-text></slot>
        </label>
      </slot>
    `}};n(ro,"PrepaidButton");var Sp=n((t,e)=>({options:j(e.product.id)(t),shipmentsOptedIn:V(e.product)(t),prepaidShipmentsSelected:te(e.product)(t)}),"mapStateToProps"),ba=g(Sp,{productChangePrepaidShipments:ye})(ro);var oo=class extends W{constructor(){super(),this.options=[],this.text="shipments"}static get properties(){return{...super.properties,text:{type:String}}}static get styles(){return b`
      og-select {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }
    `}render(){if(this.options.length===0)return u``;let e=this.options.map(r=>({value:r,text:`${r} ${this.text}`}));return u`
      ${this.options.length>1?u`
            <og-select
              .options=${e}
              .selected=${this.selectedNumberOfShipments}
              .onChange="${r=>this.handleSelect(r)}"
            ></og-select>
          `:u`
            <span>${e[0].text}</span>
          `}
      <slot name="append"></slot>
    `}};n(oo,"PrepaidSelect");var _p=n((t,e)=>({options:j(e.product.id)(t),shipmentsOptedIn:V(e.product)(t),prepaidShipmentsSelected:te(e.product)(t)}),"mapStateToProps"),Sa=g(_p,{productChangePrepaidShipments:ye})(oo);var no=class extends dt{static get properties(){return{...super.properties,prepaidShipmentsOptedIn:{type:Number}}}get isActive(){return this.prepaidShipmentsOptedIn>0?!1:this.subscribed}handleClick(e){if(!this.isActive){let r=this.frequencies&&this.frequencies.length>0?this.frequencies[0]:this.optinFrequency;this.optinProduct(Lt(this),r,this.offer)}e.preventDefault()}render(){return u`
      <slot name="default">
        <button id="action-trigger" class="btn radio ${this.isActive?" active":""}"></button>
        <label for="action-trigger">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(no,"SubscriptionButton");var _a=g(Z,{optinProduct:Q})(no);var Gt=class extends x{static get styles(){return b`
      :host {
        position: fixed;
        top: 5em;
        righit: 5em;
        background-color: rgba(255, 255, 255, 0.7);
        width: 400px;
        padding: 1em;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 0 0 #000;
      }

      button {
        margin: 0 0.5em 0.5em;
        background-color: gray;
        color: white;
        border: 0;
        border-radius: 3px;
        cursor: pointer;
        padding: 0.5em;
      }

      button.primary {
        background-color: blue;
        padding: 1em;
        color: white;
        border: 0;
        border-radius: 3px;
      }

      button[disabled] {
        background-color: #777;
      }

      div {
        margin-bottom: 0.5em;
      }

      .message {
        margin-left: 0.5em;
        margin: 1em;
      }

      .success {
        color: green;
      }

      .error {
        color: red;
      }

      .warning {
        color: orange;
      }
      a {
        color: white;
      }
    `}runTests(){this.results=[],this.disabled=!0,this.requestUpdate(),document.querySelectorAll("og-offer").forEach(r=>{let o=r.store.getState(),i=r.getAttribute("product"),s=r.getAttribute("location"),a={messages:this.getOfferAttributeMessages(i,s).concat(this.getOfferRequestMessages(i,o)),product:i};this.results.push(a)}),this.testsRan=!0,this.disabled=!1,this.requestUpdate()}getOfferAttributeMessages(e,r){let o=[];return e||o.push({name:"Offer element found but missing product attribute",type:"error"}),r||o.push({name:"Offer element found but missing location attribute",type:"warning"}),e&&r&&o.push({name:"Offer element found and properly tagged",type:"success"}),o}getOfferRequestMessages(e,r){let o=r.inStock[e],i=r.autoshipEligible[e],s=[];return e&&o===!1&&s.push({name:"This product is marked as out of stock in the OG database",type:"warning"}),e&&i===!1&&s.push({name:"This product is not eligible for autoship",type:"warning"}),e&&o===null&&i===null&&s.push({name:"This product does not exist in our database",type:"error"}),s}resultsCodeBlock(){return this.results.length===0?u`
          <div class="message error">No offer element found on the page</div>
        `:this.results.map((e,r)=>u`
            <div>For offer tag with product = "${e.product}"</div>
            ${e.messages.map(o=>u`
                <div class="message ${o.type}">${o.name}</div>
              `)}
            <button @click=${this.toggleProductFlags(r,{})}>Set inStock and eligible</button>
            <br />
            <button @click=${this.toggleProductFlags(r,{inStock:!1})}>Set to not inStock</button>
            <br />
            <button @click=${this.toggleProductFlags(r,{autoship:!1})}>Set to not eligible</button>
            <br />
            <button @click=${this.toggleProductFlags(r,{autoship:!1,inStock:!1})}>
              Set to not eligible and not in stock
            </button>
            <br />
            <button @click=${this.toggleUpsellPreview(r)}>Toggle upsell/regular in this offer</button>
            <br />
            <button @click=${this.toggleUpsellNextOrder(r)}>upsell product is in next order</button>
            <br />
          `)}toggleUpsellPreview(e){return r=>{r.preventDefault();let o=document.querySelectorAll("og-offer")[e];o.getAttribute("preview-upsell-offer")?o.removeAttribute("preview-upsell-offer"):o.setAttribute("preview-upsell-offer",!0),this.runTests()}}toggleProductFlags(e,{inStock:r=!0,autoship:o=!0,groups:i=["subscription","upsell"]}){return s=>{s.preventDefault();let a=document.querySelectorAll("og-offer")[e],c=a.product.id;a.store.dispatch(be({in_stock:{[c]:r},eligibility_groups:{[c]:i},result:"success",autoship:{[c]:o},module_view:{regular:"58a01e9aacbe40389b5c7325d79091bb"},modifiers:{},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:5},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[c]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}},{},c)),this.runTests()}}toggleUpsellNextOrder(e){return r=>{let o=document.querySelectorAll("og-offer")[e],i=o.product.id;r.preventDefault(),o.store.dispatch(No({count:1,next:null,previous:null,results:[{order:"24d50352579511ea806cbc764e100cfd",offer:null,subscription:"8a076b7a0ea011e7a5bcbc764e105eda",product:i,components:[],quantity:1,public_id:"24d6901e579511ea806cbc764e100cfd",product_attribute:null,price:"14.99",extra_cost:"0.00",total_price:"13.49",one_time:!1,frozen:!1,first_placed:null}]})),this.runTests()}}render(){return u`
      <div>
        ${this.testsRan?this.resultsCodeBlock():u`
              <div>Click the button to run tests</div>
            `}
        <button ?disabled=${this.disabled} @click="${this.runTests.bind(this)}" class="primary">Run Test</button>
      </div>
    `}};n(Gt,"TestWizard");function sn(){let t="og-test-wizard";customElements.get(t)||customElements.define(t,Gt);let e=document.createElement(t);document.body.appendChild(e)}n(sn,"default");var an=[79,71,68,69,86],Ea=n(()=>{if(window.OG_OFFERS_TEST_MODE_ENABLE)return;window.OG_OFFERS_TEST_MODE_ENABLE=!0;let t=0;document.addEventListener("keyup",async function(e){if(e.which===an[t]){let o=an[t];setTimeout(function(){t<=o&&(t=0)},5e3),t+=1,t>=an.length&&sn()}else t=0},!1)},"enable");var io=class extends I(z){static get properties(){return{...super.properties,regular:{type:Boolean,reflect:!0},subscription:{type:Boolean,reflect:!0},discount:{type:Boolean,reflect:!0},payAsYouGo:{type:Boolean,reflect:!0,attribute:"pay-as-you-go"},frequency:{type:Object},productPlans:{type:Object}}}static get styles(){return b`
      :host::before {
        clip-path: inset(100%);
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      :host([subscription])::before {
        content: 'Discounted subscription price';
      }

      :host([regular])::before {
        content: 'Regular price';
      }
    `}get value(){var l;let e=S(this.product),r=this.frequency||this.configDefaultFrequency||((l=this.offer)==null?void 0:l.defaultFrequency),o=this.productPlans[e]||[];if(this.payAsYouGo){let p=o.find(d=>d.prepaidShipments===null||d.prepaidShipments===void 0);return p?p.subscriptionPrice:""}let i=o.find(p=>p.frequency===r);if(!i)return"";let{regularPrice:s,discountRate:a,subscriptionPrice:c}=i;return c===s?"":this.regular?s:this.discount?a:c}render(){let e=this.value;return e?u`
        <slot name="prepend"></slot>
        ${e}
        <slot name="append"></slot>
      `:u`
      <slot name="fallback"></slot>
    `}};n(io,"Price");var xp=n((t,e)=>{var r;return{productPlans:t.productPlans,configDefaultFrequency:oe((r=e.product)==null?void 0:r.id)(t),frequency:re(e.product)(t)}},"mapStateToProps"),xa=g(xp)(io);function cn(t){Ea(),hs(t);try{customElements.define("og-when",Ys),customElements.define("og-text",oa),customElements.define("og-incentive-text",aa),customElements.define("og-offer",ma),customElements.define("og-select-frequency",ca),customElements.define("og-optout-button",Qs),customElements.define("og-optin-toggle",ra),customElements.define("og-optin-status",Js),customElements.define("og-optin-button",Ks),customElements.define("og-optin-select",Xs),customElements.define("og-upsell-button",ea),customElements.define("og-frequency-status",Zs),customElements.define("og-modal",$t),customElements.define("og-select",Vt),customElements.define("og-tooltip",jt),customElements.define("og-upsell-modal",ta),customElements.define("og-next-upcoming-order",pa),customElements.define("og-price",xa),customElements.define("og-prepaid-toggle",ga),customElements.define("og-prepaid-data",ya),customElements.define("og-prepaid-button",ba),customElements.define("og-prepaid-select",Sa),customElements.define("og-subscription-button",_a)}catch{console.info("OG WebComponents already registered, skipping.")}let e=!1,r={store:t,isReady:()=>e,setEnvironment(o){return t.dispatch(Ai(o)),this},setMerchantId(o){return t.dispatch(wi(o)),this},setAuthUrl(o){return t.dispatch(Ci(o)),this},receiveMerchantSettings(o){return t.dispatch($i(o)),this},getProductsForPurchasePost(o=[]){return Uo(t.getState(),o)},getOptins(o=[]){return Uo(t.getState(),o)},clear(){t.dispatch(ki())},addOptinChangedCallback(o){typeof o=="function"&&document.addEventListener("optin-changed",i=>o(i.detail))},disableOptinChangedCallbacks(){document.addEventListener("optin-changed",o=>o.stopPropagation(),!0)},register(){},previewMode(o){return window.og=window.og||{},o===!1?delete window.og:window.og.previewMode=!0,this},config(o){return t.dispatch(qi(o)),this},setLocale(o){return t.dispatch(Fi(o)),this},addTemplate(o,i,s){return t.dispatch(Di(o,i,s)),this},setTemplates(o){return t.dispatch(Ui(o)),this},setPublicPath(o){return this},resolveSettings(o,i,s,a=t){if(!A.shopify_selling_plans&&o&&i&&s){let c=[];s.product?c.push(s.product):s.cart&&Array.isArray(s.cart.products)&&(c=c.concat(s.cart.products));let l=a.getState(),{sessionId:p}=l;p&&c.forEach(d=>a.dispatch(Io(d))),s.product_discounts&&typeof s.product_discounts=="object"&&a.dispatch({type:ze,payload:s.product_discounts})}},initialize(o,i,s,a={}){var l;e&&console.warn("og.offers has been initialized already. Skipping.");let c=t.getState();return o&&o!==c.merchantId&&r.setMerchantId(o),i&&i!==((l=c.environment)==null?void 0:l.name)&&r.setEnvironment(i),r.receiveMerchantSettings(a),s&&r.setAuthUrl(s),e||r.resolveSettings(o,i,window.og_settings,t),e=!0,this}};return window.OG=window.OG||{},Object.assign(window.OG,r),Object.assign(r.initialize,r),Do(window.opener,r),r}n(cn,"makeApi");var so=n((t=[],e)=>{switch(e.type){case he:return[];case Oe:return e.newValue?e.newValue.optedin:t;case R:case F:{let[{prepaidShipments:r,...o},i]=et(t,e.payload.product);return i.concat({...o,...e.payload.product,frequency:e.payload.frequency})}case ce:{let{payload:r}=e,[{prepaidShipments:o,...i},s]=et(t,r.product),a={...i,...r.product};return r.prepaidShipments&&(a.prepaidShipments=r.prepaidShipments),s.concat(a)}case k:return t.filter(r=>!N(e.payload.product,r));case yt:return t.map(r=>N(e.payload.product,r)?{...r,...e.payload.newProduct}:r);case er:return t.filter(r=>!N(e.payload.product,r));case He:return[];default:return t}},"optedin"),ln=n((t=[],e)=>{switch(e.type){case he:return[];case Oe:return e.newValue?e.newValue.optedout:t;case R:case F:return t.filter(r=>!N(e.payload.product,r));case k:{let[r,o]=et(t,e.payload.product);return o.concat({...r,...e.payload.product,frequency:e.payload.frequency})}case yt:return t.map(r=>N(e.payload.product,r)?{...r,...e.payload.newProduct}:r);case He:return[];default:return t}},"optedout"),pn=n((t={},{type:e,payload:r})=>{switch(e){case Kt:return r&&r.count>0?{...t,...r.results[0]&&{...r.results[0],place:new Date(Date.parse(r.results[0].place.replace(/-/gi,"/")))}}:t;case Qt:return{...t,products:(r.results||[]).map(o=>o.product)};case Xt:return{...t,...r,public_id:r.order,...r.product&&{products:(t.products||[]).concat(r.product)}};default:return t}},"nextUpcomingOrder"),Pp=n((t={},e)=>{switch(e.type){case w:return{...t,...e.payload.autoship};default:return t}},"autoshipEligible"),Op=n((t={},e)=>{switch(e.type){case q:return{...t};case w:return{...t,...e.payload.in_stock};default:return t}},"inStock"),un=n((t={},e)=>{switch(e.type){case w:return{...t,...e.payload.eligibility_groups};default:return t}},"eligibilityGroups"),Pa=n((t,e)=>t.map(r=>({...e[r],id:[r][0]})),"mapIncentive"),dn=n((t={},e)=>{switch(e.type){case w:return{...t,...[...new Set(Object.keys(e.payload.incentives||{}))].reduce((r,o)=>({...r,[o]:Object.entries(e.payload.incentives).filter(([i])=>i===o).reduce((i,[,{initial:s,ongoing:a}])=>({...i,initial:[...i.initial||[],...Pa(s,e.payload.incentives_display)],ongoing:[...i.ongoing||[],...Pa(a,e.payload.incentives_display)]}),{})}),{})};default:return t}},"incentives"),vp=n((t={},e)=>{switch(e.type){case R:case F:return{...t,[S(e.payload.product)]:e.payload.frequency};case k:return{...t,[S(e.payload.product)]:void 0};default:return t}},"frequency"),fn=n((t=!1,e)=>{switch(e.type){case Jt:return{...e.payload};case Pe:return!1;default:return t}},"auth"),hn=n((t="",e)=>{switch(e.type){case Le:return e.payload;default:return t}},"merchantId"),mn=n((t=null,e)=>{switch(e.type){case Wt:return e.payload;default:return t}},"authUrl"),Tp=n((t={},e)=>{switch(e.type){case w:return{...t,offerId:(e.payload.module_view||{}).regular,...e.payload.modifiers};default:return t}},"offer"),gn=n((t="",e)=>{switch(e.type){case w:return(e.payload.module_view||{}).regular||"";default:return t}},"offerId"),yn=n((t=null,e)=>{switch(e.type){case he:return null;case Me:return e.payload;default:return t}},"sessionId"),wp=n((t={},e)=>{switch(e.type){case w:return{...t,...Object.entries(e.payload.autoship).map(([r])=>({[r]:Object.keys(e.payload.modifiers)})).reduce((r,o)=>({...r,...o}),{})};case He:return{};default:return t}},"productOffer"),bn=n((t={},e)=>{switch(e.type){case nr:return{...t,[S(e.payload.product)]:e.payload.firstOrderPlaceDate};default:return t}},"firstOrderPlaceDate"),Sn=n((t={},e)=>{switch(e.type){case ir:return{...t,[S(e.payload.product)]:e.payload.productToSubscribe};default:return t}},"productToSubscribe"),_n=n((t={},e)=>{switch(e.type){case $e:return{...t,name:"local",apiUrl:"http://py3web.ordergroove.localhost",legoUrl:"http://py3lego.ordergroove.localhost"};case Ve:return{...t,name:ve,apiUrl:"https://staging.offers.ordergroove.com",legoUrl:"https://staging.restapi.ordergroove.com"};case je:return{...t,name:sr,apiUrl:"https://dev.offers.ordergroove.com",legoUrl:"https://dev.restapi.ordergroove.com"};case Ge:return{...t,name:Te,apiUrl:"https://offers.ordergroove.com",legoUrl:"https://restapi.ordergroove.com"};default:return t}},"environment"),En=n((t={offerOptInLabel:"Subscribe to save",offerIncentiveText:"Save {{ogIncentive DiscountPercent}} when you subscribe",offerOptOutLabel:"Deliver one-time only",offerEveryLabel:"Delivery Every",offerTooltipTrigger:"[?]",offerTooltipContent:"Seems this is a great subscription offering. Many fun details about this program exist.",optinButtonLabel:"\u2022",optoutButtonLabel:"\u2022",optinStatusOptedInLabel:"You're opted in!",optinStatusOptedOutLabel:"You're not opted in.",optinToggleLabel:"\u2022",upsellButtonLabel:"Add item to order on ",upsellButtonPrefix:"",upsellModalContent:"Some upsell modal content",upsellModalOptInLabel:"Subscribe",upsellModalOptOutLabel:"Purchase one time",upsellModalTitle:"Impulse Upsell",upsellModalConfirmLabel:"Ok",upsellModalCancelLabel:"Cancel",defaultFrequencyCopy:"(Most Popular)",frequencyPeriods:{1:"day",2:"week",3:"month"},prepaidOptInLabel:"Prepaid Subscription",prepaidShipmentsLabel:"Number of prepaid shipments"},e)=>{switch(e.type){case tr:return{...t,...e.payload};default:return t}},"locale"),Cp=n((t={offerType:"radio"},e)=>{switch(e.type){case Be:return{...t,...e.payload,defaultFrequency:e.payload.defaultFrequency?vt(e.payload.defaultFrequency):t.defaultFrequency,frequenciesEveryPeriod:[],frequencies:e.payload.frequencies?e.payload.frequencies.map(vt):t.frequencies};case le:return{...t,merchantSettings:{...e.payload}};default:return t}},"config"),xn=n((t=!1,e)=>{switch(e.type){case fe:return e.payload.isPreview;default:return t}},"previewStandardOffer"),Pn=n((t=!1,e)=>{switch(e.type){case St:return e.payload.isPreview;default:return t}},"previewUpsellOffer");var On=n((t={},e)=>{switch(e.type){case w:return{...t,...e.payload.autoship_by_default};default:return t}},"autoshipByDefault"),vn=n((t=[],e)=>{switch(e.type){case w:return{...t,...e.payload.default_frequencies};default:return t}},"defaultFrequencies"),Tn=n((t=[],e)=>{switch(e.type){case or:return[...e.payload||[]];case rr:return[e.payload,...t];default:return t}},"templates"),Rp=n((t={},e)=>{switch(e.type){case ze:return Nr(e.payload);default:return t}},"productPlans"),wn=n((t={},e)=>{switch(e.type){case bt:{let{[e.payload.oldCartProductKey]:r,...o}=t;return{...o,[e.payload.newCartProductKey]:r}}case ce:return e.payload.prepaidShipments?{...t,[e.payload.product.id]:e.payload.prepaidShipments}:t;default:return t}},"prepaidShipmentsSelected"),ao=Ht({optedin:so,optedout:ln,nextUpcomingOrder:pn,autoshipEligible:Pp,inStock:Op,eligibilityGroups:un,incentives:dn,frequency:vp,auth:fn,merchantId:hn,authUrl:mn,offer:Tp,offerId:gn,experiments:Cr,sessionId:yn,productOffer:wp,firstOrderPlaceDate:bn,productToSubscribe:Sn,environment:_n,locale:En,config:Cp,previewStandardOffer:xn,previewUpsellOffer:Pn,autoshipByDefault:On,defaultFrequencies:vn,templates:Tn,productPlans:Rp,prepaidShipmentsSelected:wn});var co=n(t=>{var e,r;return Array.isArray((e=t.selling_plan)==null?void 0:e.options)&&((r=t.selling_plan)==null?void 0:r.options.some(o=>(o==null?void 0:o.name)==="Shipment amount"))},"isPrepaidAllocation"),lo=n(t=>{if(t&&t.length>1){let e=t.find(r=>(r==null?void 0:r.name)==="Shipment amount").value.split(" ");return e.length>0?+e[0]:null}return null},"getPrepaidShipmentsNumberFromOptions"),Ap=n(t=>{var e,r;return(t.selling_plan_id||((r=(e=t.selling_plan)==null?void 0:e.id)!=null?r:"")).toString()},"getAllocationFrequency"),Np=n((t,e)=>ue(t.compare_at_price,e),"getAllocationRegularPrice"),Ip=n((t,e)=>{var r;if(co(t)){let o=lo((r=t.selling_plan)==null?void 0:r.options),i=Math.round(t.price/o);return ue(i,e)}return ue(t.price,e)},"getAllocationSubscriptionPrice"),Oa=n((t,e)=>Math.round((t.compare_at_price-e)*100/t.compare_at_price),"getPrepaidPercentage"),kp=n((t,e)=>{var o,i,s;if(co(t)){let a=lo((o=t.selling_plan)==null?void 0:o.options),c=t.price/a,l=Oa(t,c);return Pr(l)}let r="";return((i=t.price_adjustments[0])==null?void 0:i.value_type)==="percentage"?r=Pr(t.price_adjustments[0].value):(s=t.price_adjustments[0])!=null&&s.value?r=ue(t.price_adjustments[0].value,e):t.compare_at_price&&(r=ue(t.compare_at_price-t.price,e)),r},"getAllocationDiscountRate"),Fp=n(t=>{var e;return co(t)?lo((e=t.selling_plan)==null?void 0:e.options):null},"getAllocationNumberOfShipments"),qp=n((t,e,r,o)=>{var d,f;let i=lo((d=t.selling_plan)==null?void 0:d.options),s=t.price/i,a=t.compare_at_price-s,c=Oa(t,s),l=(f=r==null?void 0:r.price_adjustments)==null?void 0:f[0],p=l&&l.value_type==="percentage"?l.value:null;return e.regularPrepaidPrice=ue(t.price,o),e.prepaidSavingsPerShipment=ue(Math.round(a),o),e.prepaidSavingsTotal=ue(Math.round(a*i),o),p&&c&&(e.prepaidExtraSavingsPercentage=Pr(c-p)),e},"addPrepaidPriceAndSavings"),Dp=n((t,e,r)=>{t.selling_plan||(t.selling_plan=e.find(i=>i.id===t.selling_plan_id));let o={frequency:Ap(t),regularPrice:Np(t,r),subscriptionPrice:Ip(t,r),discountRate:kp(t,r),prepaidShipments:Fp(t)};if(co(t)){let i=as(e);return qp(t,o,i,r)}return o},"mapSellingPlanToDiscount"),Cn=n((t,e,r=[],o)=>[...t,Dp(e,r,o)],"sellingPlanAllocationsReducer"),va=n(t=>t.selling_plan_groups.reduce((e,r)=>[...e,...r.selling_plans.map(o=>({...o,group:r}))],[]),"getSellingPlans");var Up=n((t={offerType:"radio",productFrequencies:{},frequencies:[],frequenciesEveryPeriod:[]},e)=>{var r;if(D===e.type){let{payload:{product:o,currency:i}}=e,s={},a=(r=o.variants)==null?void 0:r.reduce((p,d)=>Mp(p,d,o.selling_plan_groups,t),{}),c={...t.productFrequencies,...a};s={...s,productFrequencies:c,...Object.values(c)[0]};let l=o==null?void 0:o.selling_plan_groups.filter(p=>/^Prepaid-.*/.test(p.name));return l.length&&(s={...s,prepaidSellingPlans:{...t.prepaidSellingPlans,...Vp(l)}}),{...t,...s,storeCurrency:i}}if(w===e.type){let{payload:{offer:o}}=e,{defaultFrequency:i,product:s}=o||{},{prepaidSellingPlans:a={}}=t,c=S(s==null?void 0:s.id),l=t.productFrequencies[c],p={...t.productFrequencies,[c]:{...l,defaultFrequency:$p(c,i,a,l==null?void 0:l.frequencies,l==null?void 0:l.frequenciesEveryPeriod)}};return{...t,productFrequencies:p,...Object.values(p)[0]}}return le===e.type?{...t,merchantSettings:{...e.payload}}:t},"config");function Lp(t,e){var i,s;let r=kt(t),o=vr(r);if(o!=null&&o.length){let a=Tr(r),c=((s=(i=r.options)==null?void 0:i[0])==null?void 0:s.values)||o,l=e==null?void 0:e.defaultFrequency;return l&&Re(l)&&(l=K(o,a,l)||pe(o)||l),{frequencies:o,frequenciesEveryPeriod:a,frequenciesText:c,...l?{defaultFrequency:l}:{}}}return null}n(Lp,"getFrequencies");function Mp(t,e,r,o){let i=e.selling_plan_allocations.map(c=>c.selling_plan_group_id),s=r.filter(c=>i.includes(c.id)),a=Lp(s,o.productFrequencies[e.id]);return a&&(t[e.id]=a),t}n(Mp,"reduceSellingPlansToFrequencies");function $p(t,e,r,o=[],i=[]){var s;return(s=r[t])!=null&&s.some(({sellingPlan:a})=>a===e)?pe(o)||e:Re(e)&&(K(o,i,e)||pe(o))||e}n($p,"getUpdatedDefaultFrequency");function Vp(t){return t.reduce((e,r)=>{let o=r.name.split("-")[1],i=r.selling_plans.map(s=>({numberShipments:wr(s),sellingPlan:String(s.id)}));return{...e,[o]:i}},{})}n(Vp,"getPrepaidSellingPlans");var Ta=Up;var Ca=n((t,e,r)=>{let o=Object.keys(t).filter(i=>i.startsWith(e.toString()));return o.length?{...t,...o.reduce((i,s)=>({...i,[s]:r}),{})}:t},"overrideLineKey"),wa=n((t,e,r)=>{if(!r)return null;if(!Re(r))return r;if(gr(t,e)){let o=K(t,e,r);return o||pe(t)}return r},"getDefaultSellingPlan"),jp=n((t,e,r)=>t.map(o=>Re(o==null?void 0:o.frequency)?{...o,frequency:gr(r==null?void 0:r.frequencies,r==null?void 0:r.frequenciesEveryPeriod)?K(r==null?void 0:r.frequencies,r==null?void 0:r.frequenciesEveryPeriod,o.frequency)||K(r==null?void 0:r.frequencies,r==null?void 0:r.frequenciesEveryPeriod,e==null?void 0:e.defaultFrequency)||pe(r==null?void 0:r.frequencies):o.frequency}:o),"mapExistingOptinsFromOfferResponse"),Gp=n(({autoship:t={},autoship_by_default:e={},default_frequencies:r={},in_stock:o={}},i,s,a)=>Object.keys(t).reduce((c,l)=>{if(!i.some(p=>p.id===l)){if(!(t[l]&&e[l]&&o[l]))return c;let{frequencies:p,frequenciesEveryPeriod:d}=a,{defaultFrequency:f}=s||{},h=r[l],_;return r[l]&&gr(p,d)?_=K(p,d,`${h.every}_${h.every_period}`)||wa(p,d,f)||pe(p):r[l]?_=`${h.every}_${h.every_period}`:_=wa(p,d,f)||"_",c.concat({id:l,frequency:_})}return c},[]),"reduceNewOptinsFromOfferResponse"),Hp=n((t,e)=>({...Ca(t,e.id,e.available),[e.id]:e.available}),"productOrVariantInStockReducer"),Ra=n((t,e)=>{let r=S(e.key);return{...t,[e.key]:t[r]||null}},"reduceProductCartLine"),Bp=n((t={},e)=>{var r;if(me===e.type){let{payload:o}=e;return o.items.reduce(Ra,t)}if(D===e.type){let{payload:{product:o}}=e,i=ns(o==null?void 0:o.selling_plan_groups),s=new Set((r=i.flatMap(a=>a.selling_plans.map(c=>c.id)))!=null?r:[]);return o.variants.reduce((a,c)=>{var d,f;let p=((f=(d=c==null?void 0:c.selling_plan_allocations)==null?void 0:d.filter(h=>s.has(h.selling_plan_id)))!=null?f:[]).length>0;return{...Ca(a,c.id,p),[c.id]:p}},t)}return fe===e.type?e.payload.isPreview!==!0?t:{...t,[e.payload.productId]:!0}:t},"autoshipEligible"),zp=n((t={},e)=>{var r;if(me===e.type)return e.payload.items.reduce(Ra,t);if(D===e.type){let{payload:{product:o}}=e;return[o,...(r=o==null?void 0:o.variants)!=null?r:[]].reduce(Hp,t)||t}return q===e.type&&e.payload.product===null?{...t}:fe===e.type?e.payload.isPreview!==!0?t:{...t,[e.payload.productId]:!0}:t},"inStock"),Yp=n((t={},e)=>t,"offer");function Wp(t){let e=wr(t.selling_plan_allocation.selling_plan),r={id:t.key,frequency:`${t.selling_plan_allocation.selling_plan.id}`};return e&&(r.prepaidShipments=e),r}n(Wp,"getOptedInItem");var Jp=n((t=[],e)=>{if(me===e.type){let r=e.payload;return t.filter(o=>!o.id.includes(":")).concat(r.items.reduce((o,i)=>i.selling_plan_allocation?[...o,Wp(i)]:o,[]))}if(w===e.type){let r=e.payload,{offer:o={},frequencyConfig:i}=r,s=jp(t,o,i),a=Gp(r,s,o,i);return[...s,...a]}if(D===e.type){let{product:r}=e.payload,o=kt(r==null?void 0:r.selling_plan_groups);if(!o)return t;let i=vr(o),s=Tr(o);return t.map(a=>Re(a.frequency)?{...a,frequency:K(i,s,a.frequency)||pe(i)}:a)}if(ce===e.type){let{payload:r}=e,o=so(t,e),[i,s]=et(o,r.product);return s.concat({...i,...r.product,frequency:r.frequency})}return so(t,e)},"optedin"),Kp=n((t={},e)=>t,"productOffer"),Qp=n((t={},e)=>{if(D===e.type){let{payload:{product:r,currency:o}}=e,i=va(r);return r.variants.reduce((s,a)=>{var c;return{...s,[a.id]:(c=a.selling_plan_allocations)==null?void 0:c.reduce((l,p)=>Cn(l,p,i,o),[])}},t)||t}if(me===e.type){let r=e.payload;return r.items.reduce((o,i)=>i.selling_plan_allocation?{...o,[i.key]:Cn([],i.selling_plan_allocation,[],r.currency)}:o,t)||t}return t},"productPlans"),Zp=Ht({auth:fn,authUrl:mn,autoshipByDefault:On,autoshipEligible:Bp,config:Ta,defaultFrequencies:vn,eligibilityGroups:un,environment:_n,firstOrderPlaceDate:bn,incentives:dn,inStock:zp,locale:En,merchantId:hn,nextUpcomingOrder:pn,offer:Yp,offerId:gn,experiments:Cr,optedin:Jp,optedout:ln,previewStandardOffer:xn,previewUpsellOffer:Pn,productOffer:Kp,productPlans:Qp,productToSubscribe:Sn,sessionId:yn,templates:Tn,prepaidShipmentsSelected:wn});function Rn(t,e){return window.og&&window.og.previewMode?ao(t,e):Zp(t,e)}n(Rn,"shopifyReducer");var ka=ae(Et()),Fa=ae(zt());function Aa(t,e,r){let o=`[name="id"][value="${t}"]`,i=`form[action="/cart/add"] option[value="${t}"]`;if(!e)return;let s=document.querySelectorAll(o);s.length||(s=document.querySelectorAll(i)),[...s].forEach(a=>{let c=a.form,l=c==null?void 0:c.querySelector(`[name="${e}"]`);l||(l=document.createElement("input"),l.type="hidden",l.name=`attributes[${e}]`,c==null||c.appendChild(l)),l.value=r})}n(Aa,"updateTrackingInputs");function An(){return`og__${Math.ceil(new Date().getTime()/1e3)}`}n(An,"getTrackingKey");function Xp(t,e){var d,f,h,_;if(!((d=t.payload.offer)==null?void 0:d.autoshipByDefault))return;let o=(f=t.payload.offer)==null?void 0:f.product.id,i=An(),s=((h=t.payload.offer)==null?void 0:h.location)||"",a=((_=t.payload.offer)==null?void 0:_.variationId)||"",c=po(o,e),p=[o,R.toLowerCase(),s,c,a].join(",");Aa(o,i,p)}n(Xp,"addDefaultToSubTracking");function Nn(t){return e=>r=>{switch(e(r),r.type){case R:case k:case F:{let o=r.payload.offer,i=In(r);o&&!o.isCart&&Aa(o.product.id,i[0],i[1]);break}case w:Xp(r,t);break;default:}}}n(Nn,"shopifyTrackingMiddleware");var Na,Ia,kn=((Ia=(Na=window.Shopify)==null?void 0:Na.routes)==null?void 0:Ia.root)||"/",eu="/cart",tu=`${kn}cart.js`,ru=`${kn}cart/change.js`,ou=`${kn}products/`,nu='[id^="shopify-section-"][id$=__cart-items], [id^="shopify-section-"][id$="__cart-footer"],#cart-live-region-text,#cart-icon-bubble',iu=n(t=>(0,Fa.debounce)(100,!1,function(e){let{id:r}=Object.fromEntries([...new FormData(e).entries()]);r?t.setAttribute("product",r):t.removeAttribute("product")}),"makeSyncProductId");async function su(){var r,o;let t=(o=(r=window.Shopify)==null?void 0:r.currency)==null?void 0:o.active;return t||(await Fn()).currency}n(su,"getCurrency");async function au(t,e){let r=cu(e);if(r)try{let[i,s]=await Promise.all([qa(r),su()]),a={product:i,offer:e,currency:s};t.dispatch({type:D,payload:a})}catch(i){console.warn("OG: Unable to fetch product details for PDP",i)}let o=e.closest("form");if(!o){let i=e.parentElement;for(;i&&(o=i.querySelector('form[action$="/cart/add"]'),!(o||i.tagName.toLowerCase()==="body"));)i=i.parentElement}if(o){let i=iu(e);o.addEventListener("change",()=>i(o)),new MutationObserver(()=>i(o)).observe(o,{subtree:!0,childList:!0})}else console.info("no /cart/add form found for og-offer",e)}n(au,"setupPdp");async function Fn(){return(await fetch(tu)).json()}n(Fn,"getCart");function cu(t){return[()=>t==null?void 0:t.dataset.shopifyProductHandle,()=>{var e,r;return(((r=(e=document.querySelector('[href$=".oembed"]'))==null?void 0:e.getAttribute("href"))==null?void 0:r.match(/\/([^/]+)\.oembed$/))||[])[1]},()=>{var e,r;return(document.querySelector('meta[property="og:type"][content="product"]')&&((r=(e=document.querySelector('meta[property="og:url"][content]'))==null?void 0:e.getAttribute("content"))==null?void 0:r.match(/\/([^/]+)$/))||[])[1]},()=>{var e;return(e=[...document.querySelectorAll("[type$=json]")].map(r=>JSON.parse(r.textContent||"{}")).find(r=>r.handle&&r.price))==null?void 0:e.handle}].reduce((e,r)=>e||r(),"")}n(cu,"guessProductHandle");var qa=(0,ka.default)(async function(t){return(await fetch(`${ou}${t}.js`)).json()});async function lu(t,e){let r=await Fn(),{items:o}=r,i=r;t.dispatch({type:me,payload:i});let s=Number(e.product.id);s<=o.length&&e.setAttribute("product",o[s-1].key),(await Promise.all(Array.from(new Set(o.map(({handle:c})=>c))).map(qa))).forEach(c=>{let l={product:c,offer:e,currency:r.currency};t.dispatch({type:D,payload:l})})}n(lu,"setupCart");async function pu(t,e){var s,a;let r=t.payload.offer,o=t.payload.frequency||po(t.payload.product.id,e),i=In(t);if(!!(r!=null&&r.isCart))try{r.style.pointerEvents="none",r.style.opacity=".7";let c=Array.from(document.querySelectorAll(nu)),l=t.payload.product.id,p=await Fn(),d=(s=p==null?void 0:p.items)==null?void 0:s.findIndex(C=>C.key===l),f=p.items[d],h=f.quantity,_=S(l),P=await fetch(ru,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l,quantity:h,attributes:Object.fromEntries([i]),properties:f.properties,selling_plan:o||null,sections:c.map(C=>C.id.replace(/^shopify-section-/,""))})});if(P.status!==200)throw new Error("Cart not updated");let m=await P.json(),E=p.items.length===m.items.length?m.items[d].key:(a=m.items.find(C=>C.quantity===h&&C.product_id===_&&(!o&&!C.selling_plan_allocation||(C==null?void 0:C.selling_plan_allocation.selling_plan.id)===o)))==null?void 0:a.key;E&&(e.dispatch({type:bt,payload:{oldCartProductKey:l,newCartProductKey:E}}),r.setAttribute("product",E));let T=m;e.dispatch({type:me,payload:T});let y=new CustomEvent(ii,{bubbles:!0,cancelable:!0});if(r.dispatchEvent(y),y.defaultPrevented)return;let v=m.sections;Object.values(v).length?c.forEach(C=>{let Dn=C.id.replace(/^shopify-section-/,"");if(!(Dn in v))return;let Va=v[Dn],Un=new DOMParser().parseFromString(Va.toString()||"","text/html").getElementById(C.id);Un&&(C.innerHTML=Un.innerHTML)}):window.location.pathname.startsWith(eu)&&window.location.reload()}catch(c){console.log("OG Error updating cart",c)}finally{r.style.pointerEvents="auto",r.style.opacity="1"}}n(pu,"synchronizeCartOptin");function In(t){var a,c;let e=t.payload.product.id;if(!e)return[];let r=An(),o=((a=t.payload.offer)==null?void 0:a.location)||"",i=((c=t.payload.offer)==null?void 0:c.variationId)||"",s=[e,t.type.toLowerCase(),o];switch(t.type){case q:case k:s.push(""),s.push(i);break;case R:case F:s.push(t.payload.frequency),s.push(i);break;default:return[]}return[r,s.join(",")]}n(In,"getTrackingEvent");function po(t,e){var i;return(i=fr({id:t})(e.getState()))==null?void 0:i.frequency}n(po,"getSubscribedFrequency");function uu(t,e){e!=null&&e.isCart||!(e!=null&&e.shouldEnableOffer)||[...document.querySelectorAll('form[action$="/cart/add"] [name=id]')].forEach(r=>{let o=r.value,i=po(o,t);Co(r.form,"selling_plan",i),Co(r.form,"attributes[og__session]",t.getState().sessionId)})}n(uu,"synchronizeSellingPlan");function qn(t){return e=>r=>{var o;switch(r.type){case R:case k:case F:break;case q:(o=r.payload.offer)!=null&&o.isCart?lu(t,r.payload.offer):au(t,r.payload.offer);break;default:}switch(e(r),r.type){case R:case k:case F:case ce:pu(r,t);case q:case w:case D:uu(t,r.payload.offer);break;default:}}}n(qn,"shopifyMiddleware");var du="/apps/subscriptions/auth/",Da="og_auth_begin",fu="og_auth_end",hu=n(t=>{let[e,r,o,i]=atob(t).split("|");return{id:e,signature:o,timestamp:r,email:i}},"parseIntegrationTempAuth");async function Ua({store:t}){var i;let[e]=wo(),r=Tt(),o=r!=null&&r.dataset.customer?hu(r.dataset.customer):(i=window.ogShopifyConfig)==null?void 0:i.customer;if(o){let s=await gu(o);if(s){let[a,c,l]=s.split("|");t.dispatch(Rt(e,a,Number(c),l))}}else Oi("og_auth")}n(Ua,"authorizeShopifyCustomer");async function mu(t){try{let r=await(await fetch(`${du}?customer=${t.id}&customer_signature=${t.signature}&customer_timestamp=${t.timestamp}`)).text(),o=r.lastIndexOf(Da);if(o<0)throw"Invalid response from OG auth endpoint";return JSON.parse(r.substring(o+Da.length,r.lastIndexOf(fu)))}catch(e){console.error(e)}}n(mu,"fetchOGSignature");async function gu(t){let e=vi("og_auth");if(e)return e;let{customerId:r,timestamp:o,signature:i}=await mu(t);if(!r)return"";let s=new Date,a=btoa(i);s.setTime(s.getTime()+2*60*60*1e3);let c=`${r}|${o}|${a};expires=${s.toUTCString()}`;return document.cookie=`og_auth=${c};secure;path=/`,c}n(gu,"getOrCreateAuthCookie");var La,$a=ps(...(La=A)!=null&&La.shopify_selling_plans?[Rn,qn]:[ao],A.shopify&&Nn),O=cn($a),yu=O.isReady,bu=O.addOptinChangedCallback,Su=O.addTemplate,_u=O.clear,Eu=O.config,xu=O.disableOptinChangedCallbacks,Pu=O.getOptins,Ou=O.getProductsForPurchasePost,vu=O.initialize,Tu=O.previewMode,wu=O.register,Cu=O.resolveSettings,Ru=O.setAuthUrl,Au=O.setEnvironment,Nu=O.setLocale,Iu=O.setMerchantId,ku=O.setPublicPath,Fu=O.setTemplates,qu=O.setupCart,Du=O.setupProduct,Uu=O.setupProducts,Lu=n(()=>Pi(O),"autoInit");var Mu=O.initialize,Ma;(Ma=A)!=null&&Ma.shopify_selling_plans&&mr(()=>Ua(O));return Ya($u);})();
; return lib; });
//# sourceMappingURL=offers.js.map

var og=window.og||{};og.offers=og.offers||"undefined"!=typeof module&&module.exports,og.offers.initialize("8bffb752ea6511eba05226865066b24e","prod",void 0,{currency_code:"USD",multicurrency_enabled:!1}).setTemplates([{id:"2eb64d4f",markup:'<og-when test="subscribed">\n    Ships Every: \n    <og-frequency-status></og-frequency-status>\n</og-when>',selector:'[location="test"]'},{id:"467839b3",markup:'<og-when test="subscriptionEligible">\n    <div>\n        <og-optout-button style>\n            One time purchase\n        </og-optout-button>        <og-price regular></og-price>\n    </div>\n    <div>\n        <og-optin-button>\n            Subscribe &amp; Save\n        </og-optin-button> <og-price regular class="italic line-through"> </og-price> <og-price subscription> </og-price>\n        <og-tooltip placement="bottom" >\n            <span slot="trigger"><og-tooltip placement="bottom" >\n    <svg slot="trigger" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n        width="20" height="20"\n        viewBox="0 0 32 32"\n        style=" fill: #af1685;"\n    >\n        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>\n    </svg>\n    <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Promotion subject to change.</span>\n</og-tooltip>\n</span>\n            <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Promotion subject to change.</span>\n        </og-tooltip>\n\n    </div>\n    <div style="margin-left: 2.2em">\n        <div class="og-offer-incentive" style="color: #af1685; margin-bottom: 10px; margin-top: 6px; font-weight: 700;">\n            <svg class="calendar-icon" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_167_1210)">\n<path d="M15.148 8.48003C14.9858 8.41335 14.8041 8.41191 14.6409 8.47601C14.4777 8.54011 14.3455 8.6648 14.272 8.82403C13.9037 9.65958 13.3004 10.37 12.5355 10.8687C11.7706 11.3674 10.8772 11.633 9.96403 11.633C9.05091 11.633 8.15749 11.3674 7.3926 10.8687C6.62771 10.37 6.02435 9.65958 5.65603 8.82403C5.58348 8.66901 5.45451 8.5475 5.29544 8.48432C5.13637 8.42114 4.95918 8.42103 4.80003 8.48403C4.72015 8.51918 4.64798 8.56973 4.58765 8.63279C4.52732 8.69585 4.48001 8.77019 4.44843 8.85155C4.41685 8.93291 4.40162 9.0197 4.40362 9.10695C4.40561 9.1942 4.42478 9.2802 4.46003 9.36003C4.93202 10.4317 5.70557 11.343 6.6864 11.9828C7.66724 12.6225 8.81299 12.9632 9.98403 12.9632C11.1551 12.9632 12.3008 12.6225 13.2817 11.9828C14.2625 11.343 15.036 10.4317 15.508 9.36003C15.5428 9.27869 15.561 9.19125 15.5617 9.10281C15.5623 9.01436 15.5454 8.92666 15.512 8.84479C15.4785 8.76293 15.429 8.68853 15.3666 8.62591C15.3041 8.5633 15.2298 8.51371 15.148 8.48003V8.48003Z" fill="#B41F84"/>\n<path d="M19.904 13.44L17.356 6.148V3.556C17.356 2.91948 17.1031 2.30903 16.6531 1.85894C16.203 1.40886 15.5925 1.156 14.956 1.156H13.536V0.708C13.536 0.520227 13.4614 0.340144 13.3286 0.207368C13.1959 0.0745926 13.0158 0 12.828 0C12.6402 0 12.4601 0.0745926 12.3274 0.207368C12.1946 0.340144 12.12 0.520227 12.12 0.708V1.16H5.236V0.708C5.236 0.520227 5.16141 0.340144 5.02863 0.207368C4.89586 0.0745926 4.71577 0 4.528 0C4.34023 0 4.16014 0.0745926 4.02737 0.207368C3.89459 0.340144 3.82 0.520227 3.82 0.708V1.16H2.4C1.76348 1.16 1.15303 1.41286 0.702944 1.86294C0.252856 2.31303 0 2.92348 0 3.56L0 16.12C0 16.7565 0.252856 17.367 0.702944 17.8171C1.15303 18.2671 1.76348 18.52 2.4 18.52H14.96C15.2747 18.5211 15.5864 18.4595 15.877 18.3386C16.1675 18.2177 16.431 18.04 16.652 17.816C16.7185 17.7508 16.7714 17.673 16.8074 17.5872C16.8435 17.5013 16.8621 17.4091 16.8621 17.316C16.8621 17.2229 16.8435 17.1307 16.8074 17.0448C16.7714 16.959 16.7185 16.8812 16.652 16.816C16.5193 16.6836 16.3395 16.6093 16.152 16.6093C15.9645 16.6093 15.7847 16.6836 15.652 16.816C15.5619 16.908 15.4542 16.9808 15.3353 17.0303C15.2164 17.0798 15.0888 17.1049 14.96 17.104H2.4C2.27063 17.1045 2.14244 17.0794 2.02281 17.0302C1.90319 16.9809 1.79451 16.9084 1.70303 16.817C1.61155 16.7255 1.53909 16.6168 1.48982 16.4972C1.44056 16.3776 1.41547 16.2494 1.416 16.12V10.436L2.616 13.904C2.964 14.9 4.168 15.648 5.416 15.648H18C18.3291 15.6663 18.6578 15.6054 18.9585 15.4704C19.2592 15.3354 19.5231 15.1302 19.728 14.872C19.8714 14.6655 19.9624 14.4273 19.993 14.1778C20.0237 13.9283 19.9931 13.675 19.904 13.44V13.44ZM18.568 14.052C18.4904 14.1214 18.3989 14.1734 18.2995 14.2045C18.2002 14.2355 18.0953 14.2449 17.992 14.232H5.428C4.748 14.232 4.096 13.832 3.964 13.432L1.416 6.148V3.556C1.416 3.42697 1.44148 3.2992 1.49098 3.18004C1.54048 3.06088 1.61302 2.95267 1.70445 2.86162C1.79587 2.77056 1.90438 2.69846 2.02374 2.64945C2.1431 2.60043 2.27097 2.57547 2.4 2.576H3.82V2.932C3.82 3.11977 3.89459 3.29986 4.02737 3.43263C4.16014 3.56541 4.34023 3.64 4.528 3.64C4.71577 3.64 4.89586 3.56541 5.02863 3.43263C5.16141 3.29986 5.236 3.11977 5.236 2.932V2.576H12.12V2.932C12.12 3.11977 12.1946 3.29986 12.3274 3.43263C12.4601 3.56541 12.6402 3.64 12.828 3.64C13.0158 3.64 13.1959 3.56541 13.3286 3.43263C13.4614 3.29986 13.536 3.11977 13.536 2.932V2.576H14.96C15.2199 2.576 15.4692 2.67925 15.653 2.86304C15.8368 3.04682 15.94 3.29609 15.94 3.556V5.556H3.284C3.09623 5.556 2.91614 5.63059 2.78337 5.76337C2.65059 5.89614 2.576 6.07623 2.576 6.264C2.576 6.45177 2.65059 6.63186 2.78337 6.76463C2.91614 6.89741 3.09623 6.972 3.284 6.972H16.144L18.568 13.904C18.6 14 18.58 14.036 18.568 14.052V14.052Z" fill="#B41F84"/>\n</g>\n<defs>\n<clipPath id="clip0_167_1210">\n<rect width="20" height="18.8" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n\n            Save <og-incentive-text from="DiscountPercent" style="color: #af1685;"></og-incentive-text> when you subscribe\n        </div>        <og-text key="offerEveryLabel">\n            Deliver Every\n        </og-text>\n        <og-select-frequency default-text="(Most Popular)">\n          <option value="1_3" selected="selected"\n            >\n            1 month\n          </option>\n          <option value="2_3" >\n            2 months\n          </option>\n          <option value="3_3" >\n            3 months\n          </option>\n        </og-select-frequency>\n    </div>\n\n<og-when test="upsellEligible" style>\n    <og-when test="!upcomingOrderContainsProduct" style="margin-top: 20px; display: block;">\n        Add to upcoming subscription order and receive 15% off\n        <og-upsell-button>\n            <button type="button">\n                Add to Next Order on \n                <og-next-upcoming-order format="{{month-long}} {{day}}, {{year-numeric}}">\n                    </og-next-upcoming-order>\n            </button>\n        </og-upsell-button>\n\n        <og-upsell-modal>\n            Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Read the FAQ here. Promotion subject to change.\n            <br />\n            <og-when test="subscriptionEligible" style="text-align: left; max-width: 260px; margin: 20px auto 0;">\n              <og-optout-button>\n                  One time purchase\n              </og-optout-button> <og-price regular></og-price>\n              <br />\n              <og-optin-button>\n            Subscribe &amp; Save\n        </og-optin-button> <og-price regular class="italic line-through"> </og-price> <og-price subscription> </og-price>\n              <br/><br/>Deliver Every\n              <og-select-frequency default-text="(Most Popular)">\n                <option value="1_3" selected="selected"\n                  >\n                  1 month\n                </option>\n                <option value="2_3" >\n                  2 months\n                </option>\n                <option value="3_3" >\n                  3 months\n                </option>\n              </og-select-frequency>\n            </og-when>\n            <og-when test="!subscriptionEligible" style="color: #af1685; font-size: 16px;">\n              You will receive this item in your next order on <og-next-upcoming-order format="{{month-long}} {{day}}, {{year-numeric}}"></og-next-upcoming-order>            \n            </og-when>\n            <br />\n<span slot="confirm">\n                <button type="button">Add</button>\n              </span>\n              <span slot="cancel">\n                <button type="button">Cancel</button>\n              </span><div class="buttons" style="display: flex; justify-content: center;">\n                          </div>\n      </og-upsell-modal>\n    </og-when>\n\n    <og-when test="upcomingOrderContainsProduct" style="color: #af1685; font-size: 16px;">\n       You will receive this item in your next order on <og-next-upcoming-order format="{{month-long}} {{day}}, {{year-numeric}}" style="color: #af1685; font-size: 16px;">\n        </og-next-upcoming-order>\n    </og-when>\n</og-when>\n</og-when>',selector:"og-offer"}]).setPublicPath("//static.ordergroove.com/@ordergroove/offers/2.45.1/dist/"),function(o){const n=o.createElement("style");n.type="text/css",n.appendChild(o.createTextNode("[location=\"test\"] {\n--og-global-family: inherit;\n--og-global-size: 13px;\n--og-global-color: rgba(142,142,142,1);\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(142,142,142,1);\n--og-tooltip-background: rgba(247,247,247,1);\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-tooltip-placement: top;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n}\nog-offer {\n--og-global-family: inherit;\n--og-global-size: 14px;\n--og-global-color: rgba(142,142,142,1);\n--og-wrapper-padding: 10px 0;\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(142,142,142,1);\n--og-tooltip-background: rgba(247,247,247,1);\n--og-tooltip-placement: top;\n--og-upsell-background: rgba(175,22,133,1);\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: rgba(120,120,120,1);\n--og-confirm-button-background: rgba(175,22,133,1);\n--og-confirm-button-color: #fff;\n--og-modal-button-background: #e6e6e6;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-radio-border-color: #af1685;\n--og-radio-background-color: #af1685;\n--og-btn-color: rgba(120,120,120,1);\n--og-checkbox-border-color: #af1685;\n}\n\nog-offer og-optout-button {\n  margin-bottom: 8px;\n}\nog-offer og-offer-incentive {\n  color: #af1685 !important;\n  margin-bottom: 6px;\n}\nog-offer .calendar-icon {\n  position: relative;\n  top: 4px;\n  margin-right: 4px;\n}\nog-offer .line-through {\n  text-decoration: line-through;\n}\n\nog-offer og-offer .radio {\n  position: relative;\n  top: -3px;\n}\n\nog-offer .tooltip:hover .content {\n  line-height: 1 !important;\n}\n\nog-offer .btn {\n  border: 1px solid rgb(120,120,120) !important;\n}\n\nog-offer og-upsell-button button, og-offer og-upsell-button button og-next-upcoming-order {\n    border: none;\n    background: none;\n    color: #af1685 !important;;\n    text-decoration: underline;\n    padding: 0;\n    font-size: 13px !important;\n    font-family: 'Gotham A', 'Gotham B';\n}  \n\nog-offer og-upsell-modal {\n    text-align: center;\n}  \nog-offer og-upsell-modal og-select-frequency {\n    display: inline-block;\n    margin-top: 20px;\n}\n\nog-offer og-upsell-modal og-when[test=\"subscriptionEligible\"] {\ndisplay: block;\nmargin-top: 20px;    \n}  \n\nog-offer og-upsell-modal button {\n  color: #ffffff;\n    background: #af1685;\n    border-color: #af1685;\n    border-width: 1px;\n  border-radius: 50px;\n}  og-offer {\n--og-global-family: inherit;\n--og-global-size: 14px;\n--og-global-color: rgba(142,142,142,1);\n--og-wrapper-padding: 10px 0;\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(142,142,142,1);\n--og-tooltip-background: rgba(247,247,247,1);\n--og-tooltip-placement: top;\n--og-upsell-background: rgba(175,22,133,1);\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: rgba(120,120,120,1);\n--og-confirm-button-background: rgba(175,22,133,1);\n--og-confirm-button-color: #fff;\n--og-modal-button-background: #e6e6e6;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-radio-border-color: #af1685;\n--og-radio-background-color: #af1685;\n--og-btn-color: rgba(120,120,120,1);\n}\n\nog-offer og-optout-button {\n  margin-bottom: 8px;\n}\nog-offer og-offer-incentive {\n  color: #af1685 !important;\n  margin-bottom: 6px;\n}\nog-offer .calendar-icon {\n  position: relative;\n  top: 4px;\n  margin-right: 4px;\n}\nog-offer .line-through {\n  text-decoration: line-through;\n}\n\nog-offer og-offer .radio {\n  position: relative;\n  top: -3px;\n}\n\nog-offer .tooltip:hover .content {\n  line-height: 1 !important;\n}\n\nog-offer .btn {\n  border: 1px solid rgb(120,120,120) !important;\n}\n\nog-offer og-when [test=\"!upcomingOrderContainsProduct\"] {\n  font-size: 13px !important;  \n}  \nog-offer og-upsell-button button, og-offer og-upsell-button button og-next-upcoming-order {\n    border: none;\n    background: none;\n    color: #af1685 !important;;\n    text-decoration: underline;\n    padding: 0;\n    font-size: 13px !important;\n    font-family: 'Gotham A', 'Gotham B', sans-serif;\n}  \n\nog-offer og-upsell-modal og-select-frequency {\n    display: inline-block;\n    margin-top: 20px;\n}\n\nog-offer og-upsell-modal og-when[test=\"subscriptionEligible\"] {\ndisplay: block;\nmargin-top: 20px;    \n}\n\n\nog-offer og-upsell-modal button {\n    color: #ffffff !important;\n    background: #af1685;\n    border-color: #af1685;\n    border-width: 1px;\n    border-radius: 50px;\n    letter-spacing: .1em;\n    font-weight: 700;\n    text-transform: uppercase;  \n    display: inline-block;\n    margin: 0;\n    padding: 10px 15px;      \n    min-width: 150px;\n    margin-right: 15px;\n    outline: none !important;\n    border: 2px solid #af1685;      \n    font-family: 'Gotham A', 'Gotham B', sans-serif;\n    transition: background-color .25s linear, color .25s linear;        \n  }      \nog-offer og-upsell-modal button:hover {    \n  color: #e4a5d0 !important;  \n  \n} \nog-offer og-upsell-modal [slot=\"cancel\"] button{\n        background-color: #ffffff;\n  color: #af1685 !important;\n  border: 2px solid #af1685;  \n}    \nog-offer og-upsell-modal [slot=\"cancel\"] button:hover {\n  background-color: #af1685;\n  color: #ffffff !important;\n}            ")),o.head.appendChild(n)}(document),(window.location.hash.includes("og_quick_action=")||window.location.search.includes("og_quick_action="))&&function(o){const n=o.createElement("script");n.type="text/javascript",n.src="//static.ordergroove.com/8bffb752ea6511eba05226865066b24e/oca.js?",o.head.appendChild(n)}(document);return module.exports;});
//# sourceMappingURL=offers.js.map?v=2.45.1
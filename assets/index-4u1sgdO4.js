(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(a){if(a.ep)return;a.ep=!0;const e=s(a);fetch(a.href,e)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $r(t){const n=Object.create(null);for(const s of t.split(","))n[s]=1;return s=>s in n}const yn={},Fs=[],Dt=()=>{},gc=()=>!1,Ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nr=t=>t.startsWith("onUpdate:"),Wn=Object.assign,jr=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},mc=Object.prototype.hasOwnProperty,kn=(t,n)=>mc.call(t,n),tn=Array.isArray,Hs=t=>je(t)==="[object Map]",Pa=t=>je(t)==="[object Set]",Ro=t=>je(t)==="[object Date]",rn=t=>typeof t=="function",In=t=>typeof t=="string",Lt=t=>typeof t=="symbol",Sn=t=>t!==null&&typeof t=="object",Yi=t=>(Sn(t)||rn(t))&&rn(t.then)&&rn(t.catch),Gi=Object.prototype.toString,je=t=>Gi.call(t),kc=t=>je(t).slice(8,-1),Ki=t=>je(t)==="[object Object]",Vr=t=>In(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fe=$r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},vc=/-(\w)/g,yt=Ma(t=>t.replace(vc,(n,s)=>s?s.toUpperCase():"")),xc=/\B([A-Z])/g,Ms=Ma(t=>t.replace(xc,"-$1").toLowerCase()),Aa=Ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ua=Ma(t=>t?`on${Aa(t)}`:""),os=(t,n)=>!Object.is(t,n),Qe=(t,...n)=>{for(let s=0;s<t.length;s++)t[s](...n)},Xi=(t,n,s,r=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:r,value:s})},la=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Eo;const Ra=()=>Eo||(Eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zr(t){if(tn(t)){const n={};for(let s=0;s<t.length;s++){const r=t[s],a=In(r)?_c(r):zr(r);if(a)for(const e in a)n[e]=a[e]}return n}else if(In(t)||Sn(t))return t}const bc=/;(?![^(]*\))/g,yc=/:([^]+)/,wc=/\/\*[^]*?\*\//g;function _c(t){const n={};return t.replace(wc,"").split(bc).forEach(s=>{if(s){const r=s.split(yc);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Ce(t){let n="";if(In(t))n=t;else if(tn(t))for(let s=0;s<t.length;s++){const r=Ce(t[s]);r&&(n+=r+" ")}else if(Sn(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}const Sc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cc=$r(Sc);function Qi(t){return!!t||t===""}function Tc(t,n){if(t.length!==n.length)return!1;let s=!0;for(let r=0;s&&r<t.length;r++)s=Ea(t[r],n[r]);return s}function Ea(t,n){if(t===n)return!0;let s=Ro(t),r=Ro(n);if(s||r)return s&&r?t.getTime()===n.getTime():!1;if(s=Lt(t),r=Lt(n),s||r)return t===n;if(s=tn(t),r=tn(n),s||r)return s&&r?Tc(t,n):!1;if(s=Sn(t),r=Sn(n),s||r){if(!s||!r)return!1;const a=Object.keys(t).length,e=Object.keys(n).length;if(a!==e)return!1;for(const o in t){const i=t.hasOwnProperty(o),l=n.hasOwnProperty(o);if(i&&!l||!i&&l||!Ea(t[o],n[o]))return!1}}return String(t)===String(n)}function Pc(t,n){return t.findIndex(s=>Ea(s,n))}const Ji=t=>!!(t&&t.__v_isRef===!0),lt=t=>In(t)?t:t==null?"":tn(t)||Sn(t)&&(t.toString===Gi||!rn(t.toString))?Ji(t)?lt(t.value):JSON.stringify(t,Zi,2):String(t),Zi=(t,n)=>Ji(n)?Zi(t,n.value):Hs(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[r,a],e)=>(s[Wa(r,e)+" =>"]=a,s),{})}:Pa(n)?{[`Set(${n.size})`]:[...n.values()].map(s=>Wa(s))}:Lt(n)?Wa(n):Sn(n)&&!tn(n)&&!Ki(n)?String(n):n,Wa=(t,n="")=>{var s;return Lt(t)?`Symbol(${(s=t.description)!=null?s:n})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qn;class Mc{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qn,!n&&Qn&&(this.index=(Qn.scopes||(Qn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,s;if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].pause();for(n=0,s=this.effects.length;n<s;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,s;if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].resume();for(n=0,s=this.effects.length;n<s;n++)this.effects[n].resume()}}run(n){if(this._active){const s=Qn;try{return Qn=this,n()}finally{Qn=s}}}on(){++this._on===1&&(this.prevScope=Qn,Qn=this)}off(){this._on>0&&--this._on===0&&(Qn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(this.effects.length=0,s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Ac(){return Qn}let _n;const Ya=new WeakSet;class nl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qn&&Qn.active&&Qn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oo(this),el(this);const n=_n,s=wt;_n=this,wt=!0;try{return this.fn()}finally{al(this),_n=n,wt=s,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Yr(n);this.deps=this.depsTail=void 0,Oo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dr(this)&&this.run()}get dirty(){return dr(this)}}let tl=0,he,ge;function sl(t,n=!1){if(t.flags|=8,n){t.next=ge,ge=t;return}t.next=he,he=t}function Ur(){tl++}function Wr(){if(--tl>0)return;if(ge){let n=ge;for(ge=void 0;n;){const s=n.next;n.next=void 0,n.flags&=-9,n=s}}let t;for(;he;){let n=he;for(he=void 0;n;){const s=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){t||(t=r)}n=s}}if(t)throw t}function el(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function al(t){let n,s=t.depsTail,r=s;for(;r;){const a=r.prevDep;r.version===-1?(r===s&&(s=a),Yr(r),Rc(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=a}t.deps=n,t.depsTail=s}function dr(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(rl(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function rl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Te)||(t.globalVersion=Te,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!dr(t))))return;t.flags|=2;const n=t.dep,s=_n,r=wt;_n=t,wt=!0;try{el(t);const a=t.fn(t._value);(n.version===0||os(a,t._value))&&(t.flags|=128,t._value=a,n.version++)}catch(a){throw n.version++,a}finally{_n=s,wt=r,al(t),t.flags&=-3}}function Yr(t,n=!1){const{dep:s,prevSub:r,nextSub:a}=t;if(r&&(r.nextSub=a,t.prevSub=void 0),a&&(a.prevSub=r,t.nextSub=void 0),s.subs===t&&(s.subs=r,!r&&s.computed)){s.computed.flags&=-5;for(let e=s.computed.deps;e;e=e.nextDep)Yr(e,!0)}!n&&!--s.sc&&s.map&&s.map.delete(s.key)}function Rc(t){const{prevDep:n,nextDep:s}=t;n&&(n.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=n,t.nextDep=void 0)}let wt=!0;const ol=[];function Wt(){ol.push(wt),wt=!1}function Yt(){const t=ol.pop();wt=t===void 0?!0:t}function Oo(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const s=_n;_n=void 0;try{n()}finally{_n=s}}}let Te=0;class Ec{constructor(n,s){this.sub=n,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gr{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!_n||!wt||_n===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==_n)s=this.activeLink=new Ec(_n,this),_n.deps?(s.prevDep=_n.depsTail,_n.depsTail.nextDep=s,_n.depsTail=s):_n.deps=_n.depsTail=s,il(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const r=s.nextDep;r.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=r),s.prevDep=_n.depsTail,s.nextDep=void 0,_n.depsTail.nextDep=s,_n.depsTail=s,_n.deps===s&&(_n.deps=r)}return s}trigger(n){this.version++,Te++,this.notify(n)}notify(n){Ur();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Wr()}}}function il(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)il(r)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const fr=new WeakMap,ws=Symbol(""),hr=Symbol(""),Pe=Symbol("");function Nn(t,n,s){if(wt&&_n){let r=fr.get(t);r||fr.set(t,r=new Map);let a=r.get(s);a||(r.set(s,a=new Gr),a.map=r,a.key=s),a.track()}}function zt(t,n,s,r,a,e){const o=fr.get(t);if(!o){Te++;return}const i=l=>{l&&l.trigger()};if(Ur(),n==="clear")o.forEach(i);else{const l=tn(t),u=l&&Vr(s);if(l&&s==="length"){const p=Number(r);o.forEach((f,h)=>{(h==="length"||h===Pe||!Lt(h)&&h>=p)&&i(f)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),u&&i(o.get(Pe)),n){case"add":l?u&&i(o.get("length")):(i(o.get(ws)),Hs(t)&&i(o.get(hr)));break;case"delete":l||(i(o.get(ws)),Hs(t)&&i(o.get(hr)));break;case"set":Hs(t)&&i(o.get(ws));break}}Wr()}function Es(t){const n=mn(t);return n===t?n:(Nn(n,"iterate",Pe),bt(t)?n:n.map(Fn))}function Oa(t){return Nn(t=mn(t),"iterate",Pe),t}const Oc={__proto__:null,[Symbol.iterator](){return Ga(this,Symbol.iterator,Fn)},concat(...t){return Es(this).concat(...t.map(n=>tn(n)?Es(n):n))},entries(){return Ga(this,"entries",t=>(t[1]=Fn(t[1]),t))},every(t,n){return Ft(this,"every",t,n,void 0,arguments)},filter(t,n){return Ft(this,"filter",t,n,s=>s.map(Fn),arguments)},find(t,n){return Ft(this,"find",t,n,Fn,arguments)},findIndex(t,n){return Ft(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Ft(this,"findLast",t,n,Fn,arguments)},findLastIndex(t,n){return Ft(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Ft(this,"forEach",t,n,void 0,arguments)},includes(...t){return Ka(this,"includes",t)},indexOf(...t){return Ka(this,"indexOf",t)},join(t){return Es(this).join(t)},lastIndexOf(...t){return Ka(this,"lastIndexOf",t)},map(t,n){return Ft(this,"map",t,n,void 0,arguments)},pop(){return re(this,"pop")},push(...t){return re(this,"push",t)},reduce(t,...n){return Io(this,"reduce",t,n)},reduceRight(t,...n){return Io(this,"reduceRight",t,n)},shift(){return re(this,"shift")},some(t,n){return Ft(this,"some",t,n,void 0,arguments)},splice(...t){return re(this,"splice",t)},toReversed(){return Es(this).toReversed()},toSorted(t){return Es(this).toSorted(t)},toSpliced(...t){return Es(this).toSpliced(...t)},unshift(...t){return re(this,"unshift",t)},values(){return Ga(this,"values",Fn)}};function Ga(t,n,s){const r=Oa(t),a=r[n]();return r!==t&&!bt(t)&&(a._next=a.next,a.next=()=>{const e=a._next();return e.value&&(e.value=s(e.value)),e}),a}const Ic=Array.prototype;function Ft(t,n,s,r,a,e){const o=Oa(t),i=o!==t&&!bt(t),l=o[n];if(l!==Ic[n]){const f=l.apply(t,e);return i?Fn(f):f}let u=s;o!==t&&(i?u=function(f,h){return s.call(this,Fn(f),h,t)}:s.length>2&&(u=function(f,h){return s.call(this,f,h,t)}));const p=l.call(o,u,r);return i&&a?a(p):p}function Io(t,n,s,r){const a=Oa(t);let e=s;return a!==t&&(bt(t)?s.length>3&&(e=function(o,i,l){return s.call(this,o,i,l,t)}):e=function(o,i,l){return s.call(this,o,Fn(i),l,t)}),a[n](e,...r)}function Ka(t,n,s){const r=mn(t);Nn(r,"iterate",Pe);const a=r[n](...s);return(a===-1||a===!1)&&Qr(s[0])?(s[0]=mn(s[0]),r[n](...s)):a}function re(t,n,s=[]){Wt(),Ur();const r=mn(t)[n].apply(t,s);return Wr(),Yt(),r}const Dc=$r("__proto__,__v_isRef,__isVue"),ll=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Lt));function Lc(t){Lt(t)||(t=String(t));const n=mn(this);return Nn(n,"has",t),n.hasOwnProperty(t)}class pl{constructor(n=!1,s=!1){this._isReadonly=n,this._isShallow=s}get(n,s,r){if(s==="__v_skip")return n.__v_skip;const a=this._isReadonly,e=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return e;if(s==="__v_raw")return r===(a?e?Uc:fl:e?dl:ul).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const o=tn(n);if(!a){let l;if(o&&(l=Oc[s]))return l;if(s==="hasOwnProperty")return Lc}const i=Reflect.get(n,s,zn(n)?n:r);return(Lt(s)?ll.has(s):Dc(s))||(a||Nn(n,"get",s),e)?i:zn(i)?o&&Vr(s)?i:i.value:Sn(i)?a?gl(i):Ia(i):i}}class cl extends pl{constructor(n=!1){super(!1,n)}set(n,s,r,a){let e=n[s];if(!this._isShallow){const l=ps(e);if(!bt(r)&&!ps(r)&&(e=mn(e),r=mn(r)),!tn(n)&&zn(e)&&!zn(r))return l?!1:(e.value=r,!0)}const o=tn(n)&&Vr(s)?Number(s)<n.length:kn(n,s),i=Reflect.set(n,s,r,zn(n)?n:a);return n===mn(a)&&(o?os(r,e)&&zt(n,"set",s,r):zt(n,"add",s,r)),i}deleteProperty(n,s){const r=kn(n,s);n[s];const a=Reflect.deleteProperty(n,s);return a&&r&&zt(n,"delete",s,void 0),a}has(n,s){const r=Reflect.has(n,s);return(!Lt(s)||!ll.has(s))&&Nn(n,"has",s),r}ownKeys(n){return Nn(n,"iterate",tn(n)?"length":ws),Reflect.ownKeys(n)}}class Bc extends pl{constructor(n=!1){super(!0,n)}set(n,s){return!0}deleteProperty(n,s){return!0}}const qc=new cl,Fc=new Bc,Hc=new cl(!0);const gr=t=>t,We=t=>Reflect.getPrototypeOf(t);function $c(t,n,s){return function(...r){const a=this.__v_raw,e=mn(a),o=Hs(e),i=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=a[t](...r),p=s?gr:n?pa:Fn;return!n&&Nn(e,"iterate",l?hr:ws),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:i?[p(f[0]),p(f[1])]:p(f),done:h}},[Symbol.iterator](){return this}}}}function Ye(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function Nc(t,n){const s={get(a){const e=this.__v_raw,o=mn(e),i=mn(a);t||(os(a,i)&&Nn(o,"get",a),Nn(o,"get",i));const{has:l}=We(o),u=n?gr:t?pa:Fn;if(l.call(o,a))return u(e.get(a));if(l.call(o,i))return u(e.get(i));e!==o&&e.get(a)},get size(){const a=this.__v_raw;return!t&&Nn(mn(a),"iterate",ws),Reflect.get(a,"size",a)},has(a){const e=this.__v_raw,o=mn(e),i=mn(a);return t||(os(a,i)&&Nn(o,"has",a),Nn(o,"has",i)),a===i?e.has(a):e.has(a)||e.has(i)},forEach(a,e){const o=this,i=o.__v_raw,l=mn(i),u=n?gr:t?pa:Fn;return!t&&Nn(l,"iterate",ws),i.forEach((p,f)=>a.call(e,u(p),u(f),o))}};return Wn(s,t?{add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear")}:{add(a){!n&&!bt(a)&&!ps(a)&&(a=mn(a));const e=mn(this);return We(e).has.call(e,a)||(e.add(a),zt(e,"add",a,a)),this},set(a,e){!n&&!bt(e)&&!ps(e)&&(e=mn(e));const o=mn(this),{has:i,get:l}=We(o);let u=i.call(o,a);u||(a=mn(a),u=i.call(o,a));const p=l.call(o,a);return o.set(a,e),u?os(e,p)&&zt(o,"set",a,e):zt(o,"add",a,e),this},delete(a){const e=mn(this),{has:o,get:i}=We(e);let l=o.call(e,a);l||(a=mn(a),l=o.call(e,a)),i&&i.call(e,a);const u=e.delete(a);return l&&zt(e,"delete",a,void 0),u},clear(){const a=mn(this),e=a.size!==0,o=a.clear();return e&&zt(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=$c(a,t,n)}),s}function Kr(t,n){const s=Nc(t,n);return(r,a,e)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(kn(s,a)&&a in r?s:r,a,e)}const jc={get:Kr(!1,!1)},Vc={get:Kr(!1,!0)},zc={get:Kr(!0,!1)};const ul=new WeakMap,dl=new WeakMap,fl=new WeakMap,Uc=new WeakMap;function Wc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yc(t){return t.__v_skip||!Object.isExtensible(t)?0:Wc(kc(t))}function Ia(t){return ps(t)?t:Xr(t,!1,qc,jc,ul)}function hl(t){return Xr(t,!1,Hc,Vc,dl)}function gl(t){return Xr(t,!0,Fc,zc,fl)}function Xr(t,n,s,r,a){if(!Sn(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const e=Yc(t);if(e===0)return t;const o=a.get(t);if(o)return o;const i=new Proxy(t,e===2?r:s);return a.set(t,i),i}function $s(t){return ps(t)?$s(t.__v_raw):!!(t&&t.__v_isReactive)}function ps(t){return!!(t&&t.__v_isReadonly)}function bt(t){return!!(t&&t.__v_isShallow)}function Qr(t){return t?!!t.__v_raw:!1}function mn(t){const n=t&&t.__v_raw;return n?mn(n):t}function Gc(t){return!kn(t,"__v_skip")&&Object.isExtensible(t)&&Xi(t,"__v_skip",!0),t}const Fn=t=>Sn(t)?Ia(t):t,pa=t=>Sn(t)?gl(t):t;function zn(t){return t?t.__v_isRef===!0:!1}function Jn(t){return ml(t,!1)}function Kc(t){return ml(t,!0)}function ml(t,n){return zn(t)?t:new Xc(t,n)}class Xc{constructor(n,s){this.dep=new Gr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?n:mn(n),this._value=s?n:Fn(n),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(n){const s=this._rawValue,r=this.__v_isShallow||bt(n)||ps(n);n=r?n:mn(n),os(n,s)&&(this._rawValue=n,this._value=r?n:Fn(n),this.dep.trigger())}}function pt(t){return zn(t)?t.value:t}const Qc={get:(t,n,s)=>n==="__v_raw"?t:pt(Reflect.get(t,n,s)),set:(t,n,s,r)=>{const a=t[n];return zn(a)&&!zn(s)?(a.value=s,!0):Reflect.set(t,n,s,r)}};function kl(t){return $s(t)?t:new Proxy(t,Qc)}class Jc{constructor(n,s,r){this.fn=n,this.setter=s,this._value=void 0,this.dep=new Gr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Te-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&_n!==this)return sl(this,!0),!0}get value(){const n=this.dep.track();return rl(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Zc(t,n,s=!1){let r,a;return rn(t)?r=t:(r=t.get,a=t.set),new Jc(r,a,s)}const Ge={},ca=new WeakMap;let vs;function nu(t,n=!1,s=vs){if(s){let r=ca.get(s);r||ca.set(s,r=[]),r.push(t)}}function tu(t,n,s=yn){const{immediate:r,deep:a,once:e,scheduler:o,augmentJob:i,call:l}=s,u=S=>a?S:bt(S)||a===!1||a===0?Ut(S,1):Ut(S);let p,f,h,c,g=!1,d=!1;if(zn(t)?(f=()=>t.value,g=bt(t)):$s(t)?(f=()=>u(t),g=!0):tn(t)?(d=!0,g=t.some(S=>$s(S)||bt(S)),f=()=>t.map(S=>{if(zn(S))return S.value;if($s(S))return u(S);if(rn(S))return l?l(S,2):S()})):rn(t)?n?f=l?()=>l(t,2):t:f=()=>{if(h){Wt();try{h()}finally{Yt()}}const S=vs;vs=p;try{return l?l(t,3,[c]):t(c)}finally{vs=S}}:f=Dt,n&&a){const S=f,k=a===!0?1/0:a;f=()=>Ut(S(),k)}const m=Ac(),v=()=>{p.stop(),m&&m.active&&jr(m.effects,p)};if(e&&n){const S=n;n=(...k)=>{S(...k),v()}}let x=d?new Array(t.length).fill(Ge):Ge;const w=S=>{if(!(!(p.flags&1)||!p.dirty&&!S))if(n){const k=p.run();if(a||g||(d?k.some((y,_)=>os(y,x[_])):os(k,x))){h&&h();const y=vs;vs=p;try{const _=[k,x===Ge?void 0:d&&x[0]===Ge?[]:x,c];x=k,l?l(n,3,_):n(..._)}finally{vs=y}}}else p.run()};return i&&i(w),p=new nl(f),p.scheduler=o?()=>o(w,!1):w,c=S=>nu(S,!1,p),h=p.onStop=()=>{const S=ca.get(p);if(S){if(l)l(S,4);else for(const k of S)k();ca.delete(p)}},n?r?w(!0):x=p.run():o?o(w.bind(null,!0),!0):p.run(),v.pause=p.pause.bind(p),v.resume=p.resume.bind(p),v.stop=v,v}function Ut(t,n=1/0,s){if(n<=0||!Sn(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),n--,zn(t))Ut(t.value,n,s);else if(tn(t))for(let r=0;r<t.length;r++)Ut(t[r],n,s);else if(Pa(t)||Hs(t))t.forEach(r=>{Ut(r,n,s)});else if(Ki(t)){for(const r in t)Ut(t[r],n,s);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ut(t[r],n,s)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ve(t,n,s,r){try{return r?t(...r):t()}catch(a){Da(a,n,s)}}function Bt(t,n,s,r){if(rn(t)){const a=Ve(t,n,s,r);return a&&Yi(a)&&a.catch(e=>{Da(e,n,s)}),a}if(tn(t)){const a=[];for(let e=0;e<t.length;e++)a.push(Bt(t[e],n,s,r));return a}}function Da(t,n,s,r=!0){const a=n?n.vnode:null,{errorHandler:e,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||yn;if(n){let i=n.parent;const l=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const p=i.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](t,l,u)===!1)return}i=i.parent}if(e){Wt(),Ve(e,null,10,[t,l,u]),Yt();return}}su(t,s,a,r,o)}function su(t,n,s,r=!0,a=!1){if(a)throw t;console.error(t)}const Gn=[];let At=-1;const Ns=[];let Zt=null,Ds=0;const vl=Promise.resolve();let ua=null;function La(t){const n=ua||vl;return t?n.then(this?t.bind(this):t):n}function eu(t){let n=At+1,s=Gn.length;for(;n<s;){const r=n+s>>>1,a=Gn[r],e=Me(a);e<t||e===t&&a.flags&2?n=r+1:s=r}return n}function Jr(t){if(!(t.flags&1)){const n=Me(t),s=Gn[Gn.length-1];!s||!(t.flags&2)&&n>=Me(s)?Gn.push(t):Gn.splice(eu(n),0,t),t.flags|=1,xl()}}function xl(){ua||(ua=vl.then(yl))}function au(t){tn(t)?Ns.push(...t):Zt&&t.id===-1?Zt.splice(Ds+1,0,t):t.flags&1||(Ns.push(t),t.flags|=1),xl()}function Do(t,n,s=At+1){for(;s<Gn.length;s++){const r=Gn[s];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Gn.splice(s,1),s--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function bl(t){if(Ns.length){const n=[...new Set(Ns)].sort((s,r)=>Me(s)-Me(r));if(Ns.length=0,Zt){Zt.push(...n);return}for(Zt=n,Ds=0;Ds<Zt.length;Ds++){const s=Zt[Ds];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Zt=null,Ds=0}}const Me=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yl(t){try{for(At=0;At<Gn.length;At++){const n=Gn[At];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Ve(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;At<Gn.length;At++){const n=Gn[At];n&&(n.flags&=-2)}At=-1,Gn.length=0,bl(),ua=null,(Gn.length||Ns.length)&&yl()}}let ct=null,wl=null;function da(t){const n=ct;return ct=t,wl=t&&t.type.__scopeId||null,n}function ss(t,n=ct,s){if(!n||t._n)return t;const r=(...a)=>{r._d&&zo(-1);const e=da(n);let o;try{o=t(...a)}finally{da(e),r._d&&zo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ke(t,n){if(ct===null)return t;const s=Ha(ct),r=t.dirs||(t.dirs=[]);for(let a=0;a<n.length;a++){let[e,o,i,l=yn]=n[a];e&&(rn(e)&&(e={mounted:e,updated:e}),e.deep&&Ut(o),r.push({dir:e,instance:s,value:o,oldValue:void 0,arg:i,modifiers:l}))}return t}function hs(t,n,s,r){const a=t.dirs,e=n&&n.dirs;for(let o=0;o<a.length;o++){const i=a[o];e&&(i.oldValue=e[o].value);let l=i.dir[r];l&&(Wt(),Bt(l,s,8,[t.el,i,t,n]),Yt())}}const ru=Symbol("_vte"),ou=t=>t.__isTeleport;function Zr(t,n){t.shapeFlag&6&&t.component?(t.transition=n,Zr(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function _l(t,n){return rn(t)?Wn({name:t.name},n,{setup:t}):t}function Sl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fa(t,n,s,r,a=!1){if(tn(t)){t.forEach((g,d)=>fa(g,n&&(tn(n)?n[d]:n),s,r,a));return}if(me(r)&&!a){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fa(t,n,s,r.component.subTree);return}const e=r.shapeFlag&4?Ha(r.component):r.el,o=a?null:e,{i,r:l}=t,u=n&&n.r,p=i.refs===yn?i.refs={}:i.refs,f=i.setupState,h=mn(f),c=f===yn?()=>!1:g=>kn(h,g);if(u!=null&&u!==l&&(In(u)?(p[u]=null,c(u)&&(f[u]=null)):zn(u)&&(u.value=null)),rn(l))Ve(l,i,12,[o,p]);else{const g=In(l),d=zn(l);if(g||d){const m=()=>{if(t.f){const v=g?c(l)?f[l]:p[l]:l.value;a?tn(v)&&jr(v,e):tn(v)?v.includes(e)||v.push(e):g?(p[l]=[e],c(l)&&(f[l]=p[l])):(l.value=[e],t.k&&(p[t.k]=l.value))}else g?(p[l]=o,c(l)&&(f[l]=o)):d&&(l.value=o,t.k&&(p[t.k]=o))};o?(m.id=-1,rt(m,s)):m()}}}Ra().requestIdleCallback;Ra().cancelIdleCallback;const me=t=>!!t.type.__asyncLoader,Cl=t=>t.type.__isKeepAlive;function iu(t,n){Tl(t,"a",n)}function lu(t,n){Tl(t,"da",n)}function Tl(t,n,s=jn){const r=t.__wdc||(t.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Ba(n,r,s),s){let a=s.parent;for(;a&&a.parent;)Cl(a.parent.vnode)&&pu(r,n,s,a),a=a.parent}}function pu(t,n,s,r){const a=Ba(n,t,r,!0);Pl(()=>{jr(r[n],a)},s)}function Ba(t,n,s=jn,r=!1){if(s){const a=s[t]||(s[t]=[]),e=n.__weh||(n.__weh=(...o)=>{Wt();const i=ze(s),l=Bt(n,s,t,o);return i(),Yt(),l});return r?a.unshift(e):a.push(e),e}}const Qt=t=>(n,s=jn)=>{(!Oe||t==="sp")&&Ba(t,(...r)=>n(...r),s)},cu=Qt("bm"),Gt=Qt("m"),uu=Qt("bu"),du=Qt("u"),no=Qt("bum"),Pl=Qt("um"),fu=Qt("sp"),hu=Qt("rtg"),gu=Qt("rtc");function mu(t,n=jn){Ba("ec",t,n)}const ku="components";function Ml(t,n){return xu(ku,t,!0,n)||t}const vu=Symbol.for("v-ndc");function xu(t,n,s=!0,r=!1){const a=ct||jn;if(a){const e=a.type;{const i=rd(e,!1);if(i&&(i===n||i===yt(n)||i===Aa(yt(n))))return e}const o=Lo(a[t]||e[t],n)||Lo(a.appContext[t],n);return!o&&r?e:o}}function Lo(t,n){return t&&(t[n]||t[yt(n)]||t[Aa(yt(n))])}function Ae(t,n,s,r){let a;const e=s,o=tn(t);if(o||In(t)){const i=o&&$s(t);let l=!1,u=!1;i&&(l=!bt(t),u=ps(t),t=Oa(t)),a=new Array(t.length);for(let p=0,f=t.length;p<f;p++)a[p]=n(l?u?pa(Fn(t[p])):Fn(t[p]):t[p],p,void 0,e)}else if(typeof t=="number"){a=new Array(t);for(let i=0;i<t;i++)a[i]=n(i+1,i,void 0,e)}else if(Sn(t))if(t[Symbol.iterator])a=Array.from(t,(i,l)=>n(i,l,void 0,e));else{const i=Object.keys(t);a=new Array(i.length);for(let l=0,u=i.length;l<u;l++){const p=i[l];a[l]=n(t[p],p,l,e)}}else a=[];return a}const mr=t=>t?Xl(t)?Ha(t):mr(t.parent):null,ke=Wn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mr(t.parent),$root:t=>mr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Rl(t),$forceUpdate:t=>t.f||(t.f=()=>{Jr(t.update)}),$nextTick:t=>t.n||(t.n=La.bind(t.proxy)),$watch:t=>$u.bind(t)}),Xa=(t,n)=>t!==yn&&!t.__isScriptSetup&&kn(t,n),bu={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:s,setupState:r,data:a,props:e,accessCache:o,type:i,appContext:l}=t;let u;if(n[0]!=="$"){const c=o[n];if(c!==void 0)switch(c){case 1:return r[n];case 2:return a[n];case 4:return s[n];case 3:return e[n]}else{if(Xa(r,n))return o[n]=1,r[n];if(a!==yn&&kn(a,n))return o[n]=2,a[n];if((u=t.propsOptions[0])&&kn(u,n))return o[n]=3,e[n];if(s!==yn&&kn(s,n))return o[n]=4,s[n];kr&&(o[n]=0)}}const p=ke[n];let f,h;if(p)return n==="$attrs"&&Nn(t.attrs,"get",""),p(t);if((f=i.__cssModules)&&(f=f[n]))return f;if(s!==yn&&kn(s,n))return o[n]=4,s[n];if(h=l.config.globalProperties,kn(h,n))return h[n]},set({_:t},n,s){const{data:r,setupState:a,ctx:e}=t;return Xa(a,n)?(a[n]=s,!0):r!==yn&&kn(r,n)?(r[n]=s,!0):kn(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(e[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:r,appContext:a,propsOptions:e}},o){let i;return!!s[o]||t!==yn&&kn(t,o)||Xa(n,o)||(i=e[0])&&kn(i,o)||kn(r,o)||kn(ke,o)||kn(a.config.globalProperties,o)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:kn(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};function Bo(t){return tn(t)?t.reduce((n,s)=>(n[s]=null,n),{}):t}let kr=!0;function yu(t){const n=Rl(t),s=t.proxy,r=t.ctx;kr=!1,n.beforeCreate&&qo(n.beforeCreate,t,"bc");const{data:a,computed:e,methods:o,watch:i,provide:l,inject:u,created:p,beforeMount:f,mounted:h,beforeUpdate:c,updated:g,activated:d,deactivated:m,beforeDestroy:v,beforeUnmount:x,destroyed:w,unmounted:S,render:k,renderTracked:y,renderTriggered:_,errorCaptured:b,serverPrefetch:C,expose:P,inheritAttrs:M,components:T,directives:O,filters:I}=n;if(u&&wu(u,r,null),o)for(const q in o){const U=o[q];rn(U)&&(r[q]=U.bind(s))}if(a){const q=a.call(s,s);Sn(q)&&(t.data=Ia(q))}if(kr=!0,e)for(const q in e){const U=e[q],nn=rn(U)?U.bind(s,s):rn(U.get)?U.get.bind(s,s):Dt,on=!rn(U)&&rn(U.set)?U.set.bind(s):Dt,pn=Kn({get:nn,set:on});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>pn.value,set:an=>pn.value=an})}if(i)for(const q in i)Al(i[q],r,s,q);if(l){const q=rn(l)?l.call(s):l;Reflect.ownKeys(q).forEach(U=>{Je(U,q[U])})}p&&qo(p,t,"c");function N(q,U){tn(U)?U.forEach(nn=>q(nn.bind(s))):U&&q(U.bind(s))}if(N(cu,f),N(Gt,h),N(uu,c),N(du,g),N(iu,d),N(lu,m),N(mu,b),N(gu,y),N(hu,_),N(no,x),N(Pl,S),N(fu,C),tn(P))if(P.length){const q=t.exposed||(t.exposed={});P.forEach(U=>{Object.defineProperty(q,U,{get:()=>s[U],set:nn=>s[U]=nn})})}else t.exposed||(t.exposed={});k&&t.render===Dt&&(t.render=k),M!=null&&(t.inheritAttrs=M),T&&(t.components=T),O&&(t.directives=O),C&&Sl(t)}function wu(t,n,s=Dt){tn(t)&&(t=vr(t));for(const r in t){const a=t[r];let e;Sn(a)?"default"in a?e=_t(a.from||r,a.default,!0):e=_t(a.from||r):e=_t(a),zn(e)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>e.value,set:o=>e.value=o}):n[r]=e}}function qo(t,n,s){Bt(tn(t)?t.map(r=>r.bind(n.proxy)):t.bind(n.proxy),n,s)}function Al(t,n,s,r){let a=r.includes(".")?Vl(s,r):()=>s[r];if(In(t)){const e=n[t];rn(e)&&ve(a,e)}else if(rn(t))ve(a,t.bind(s));else if(Sn(t))if(tn(t))t.forEach(e=>Al(e,n,s,r));else{const e=rn(t.handler)?t.handler.bind(s):n[t.handler];rn(e)&&ve(a,e,t)}}function Rl(t){const n=t.type,{mixins:s,extends:r}=n,{mixins:a,optionsCache:e,config:{optionMergeStrategies:o}}=t.appContext,i=e.get(n);let l;return i?l=i:!a.length&&!s&&!r?l=n:(l={},a.length&&a.forEach(u=>ha(l,u,o,!0)),ha(l,n,o)),Sn(n)&&e.set(n,l),l}function ha(t,n,s,r=!1){const{mixins:a,extends:e}=n;e&&ha(t,e,s,!0),a&&a.forEach(o=>ha(t,o,s,!0));for(const o in n)if(!(r&&o==="expose")){const i=_u[o]||s&&s[o];t[o]=i?i(t[o],n[o]):n[o]}return t}const _u={data:Fo,props:Ho,emits:Ho,methods:pe,computed:pe,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:pe,directives:pe,watch:Cu,provide:Fo,inject:Su};function Fo(t,n){return n?t?function(){return Wn(rn(t)?t.call(this,this):t,rn(n)?n.call(this,this):n)}:n:t}function Su(t,n){return pe(vr(t),vr(n))}function vr(t){if(tn(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function Yn(t,n){return t?[...new Set([].concat(t,n))]:n}function pe(t,n){return t?Wn(Object.create(null),t,n):n}function Ho(t,n){return t?tn(t)&&tn(n)?[...new Set([...t,...n])]:Wn(Object.create(null),Bo(t),Bo(n??{})):n}function Cu(t,n){if(!t)return n;if(!n)return t;const s=Wn(Object.create(null),t);for(const r in n)s[r]=Yn(t[r],n[r]);return s}function El(){return{app:null,config:{isNativeTag:gc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tu=0;function Pu(t,n){return function(r,a=null){rn(r)||(r=Wn({},r)),a!=null&&!Sn(a)&&(a=null);const e=El(),o=new WeakSet,i=[];let l=!1;const u=e.app={_uid:Tu++,_component:r,_props:a,_container:null,_context:e,_instance:null,version:id,get config(){return e.config},set config(p){},use(p,...f){return o.has(p)||(p&&rn(p.install)?(o.add(p),p.install(u,...f)):rn(p)&&(o.add(p),p(u,...f))),u},mixin(p){return e.mixins.includes(p)||e.mixins.push(p),u},component(p,f){return f?(e.components[p]=f,u):e.components[p]},directive(p,f){return f?(e.directives[p]=f,u):e.directives[p]},mount(p,f,h){if(!l){const c=u._ceVNode||wn(r,a);return c.appContext=e,h===!0?h="svg":h===!1&&(h=void 0),t(c,p,h),l=!0,u._container=p,p.__vue_app__=u,Ha(c.component)}},onUnmount(p){i.push(p)},unmount(){l&&(Bt(i,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(p,f){return e.provides[p]=f,u},runWithContext(p){const f=js;js=u;try{return p()}finally{js=f}}};return u}}let js=null;function Je(t,n){if(jn){let s=jn.provides;const r=jn.parent&&jn.parent.provides;r===s&&(s=jn.provides=Object.create(r)),s[t]=n}}function _t(t,n,s=!1){const r=jn||ct;if(r||js){let a=js?js._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(a&&t in a)return a[t];if(arguments.length>1)return s&&rn(n)?n.call(r&&r.proxy):n}}const Ol={},Il=()=>Object.create(Ol),Dl=t=>Object.getPrototypeOf(t)===Ol;function Mu(t,n,s,r=!1){const a={},e=Il();t.propsDefaults=Object.create(null),Ll(t,n,a,e);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);s?t.props=r?a:hl(a):t.type.props?t.props=a:t.props=e,t.attrs=e}function Au(t,n,s,r){const{props:a,attrs:e,vnode:{patchFlag:o}}=t,i=mn(a),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const p=t.vnode.dynamicProps;for(let f=0;f<p.length;f++){let h=p[f];if(qa(t.emitsOptions,h))continue;const c=n[h];if(l)if(kn(e,h))c!==e[h]&&(e[h]=c,u=!0);else{const g=yt(h);a[g]=xr(l,i,g,c,t,!1)}else c!==e[h]&&(e[h]=c,u=!0)}}}else{Ll(t,n,a,e)&&(u=!0);let p;for(const f in i)(!n||!kn(n,f)&&((p=Ms(f))===f||!kn(n,p)))&&(l?s&&(s[f]!==void 0||s[p]!==void 0)&&(a[f]=xr(l,i,f,void 0,t,!0)):delete a[f]);if(e!==i)for(const f in e)(!n||!kn(n,f))&&(delete e[f],u=!0)}u&&zt(t.attrs,"set","")}function Ll(t,n,s,r){const[a,e]=t.propsOptions;let o=!1,i;if(n)for(let l in n){if(fe(l))continue;const u=n[l];let p;a&&kn(a,p=yt(l))?!e||!e.includes(p)?s[p]=u:(i||(i={}))[p]=u:qa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(e){const l=mn(s),u=i||yn;for(let p=0;p<e.length;p++){const f=e[p];s[f]=xr(a,l,f,u[f],t,!kn(u,f))}}return o}function xr(t,n,s,r,a,e){const o=t[s];if(o!=null){const i=kn(o,"default");if(i&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rn(l)){const{propsDefaults:u}=a;if(s in u)r=u[s];else{const p=ze(a);r=u[s]=l.call(null,n),p()}}else r=l;a.ce&&a.ce._setProp(s,r)}o[0]&&(e&&!i?r=!1:o[1]&&(r===""||r===Ms(s))&&(r=!0))}return r}const Ru=new WeakMap;function Bl(t,n,s=!1){const r=s?Ru:n.propsCache,a=r.get(t);if(a)return a;const e=t.props,o={},i=[];let l=!1;if(!rn(t)){const p=f=>{l=!0;const[h,c]=Bl(f,n,!0);Wn(o,h),c&&i.push(...c)};!s&&n.mixins.length&&n.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!e&&!l)return Sn(t)&&r.set(t,Fs),Fs;if(tn(e))for(let p=0;p<e.length;p++){const f=yt(e[p]);$o(f)&&(o[f]=yn)}else if(e)for(const p in e){const f=yt(p);if($o(f)){const h=e[p],c=o[f]=tn(h)||rn(h)?{type:h}:Wn({},h),g=c.type;let d=!1,m=!0;if(tn(g))for(let v=0;v<g.length;++v){const x=g[v],w=rn(x)&&x.name;if(w==="Boolean"){d=!0;break}else w==="String"&&(m=!1)}else d=rn(g)&&g.name==="Boolean";c[0]=d,c[1]=m,(d||kn(c,"default"))&&i.push(f)}}const u=[o,i];return Sn(t)&&r.set(t,u),u}function $o(t){return t[0]!=="$"&&!fe(t)}const to=t=>t[0]==="_"||t==="$stable",so=t=>tn(t)?t.map(Et):[Et(t)],Eu=(t,n,s)=>{if(n._n)return n;const r=ss((...a)=>so(n(...a)),s);return r._c=!1,r},ql=(t,n,s)=>{const r=t._ctx;for(const a in t){if(to(a))continue;const e=t[a];if(rn(e))n[a]=Eu(a,e,r);else if(e!=null){const o=so(e);n[a]=()=>o}}},Fl=(t,n)=>{const s=so(n);t.slots.default=()=>s},Hl=(t,n,s)=>{for(const r in n)(s||!to(r))&&(t[r]=n[r])},Ou=(t,n,s)=>{const r=t.slots=Il();if(t.vnode.shapeFlag&32){const a=n._;a?(Hl(r,n,s),s&&Xi(r,"_",a,!0)):ql(n,r)}else n&&Fl(t,n)},Iu=(t,n,s)=>{const{vnode:r,slots:a}=t;let e=!0,o=yn;if(r.shapeFlag&32){const i=n._;i?s&&i===1?e=!1:Hl(a,n,s):(e=!n.$stable,ql(n,a)),o=n}else n&&(Fl(t,n),o={default:1});if(e)for(const i in a)!to(i)&&o[i]==null&&delete a[i]},rt=Yu;function Du(t){return Lu(t)}function Lu(t,n){const s=Ra();s.__VUE__=!0;const{insert:r,remove:a,patchProp:e,createElement:o,createText:i,createComment:l,setText:u,setElementText:p,parentNode:f,nextSibling:h,setScopeId:c=Dt,insertStaticContent:g}=t,d=(A,R,E,L=null,H=null,$=null,K=void 0,W=null,Y=!!R.dynamicChildren)=>{if(A===R)return;A&&!oe(A,R)&&(L=D(A),an(A,H,$,!0),A=null),R.patchFlag===-2&&(Y=!1,R.dynamicChildren=null);const{type:V,ref:Z,shapeFlag:X}=R;switch(V){case Fa:m(A,R,E,L);break;case cs:v(A,R,E,L);break;case Ze:A==null&&x(R,E,L,K);break;case On:T(A,R,E,L,H,$,K,W,Y);break;default:X&1?k(A,R,E,L,H,$,K,W,Y):X&6?O(A,R,E,L,H,$,K,W,Y):(X&64||X&128)&&V.process(A,R,E,L,H,$,K,W,Y,G)}Z!=null&&H&&fa(Z,A&&A.ref,$,R||A,!R)},m=(A,R,E,L)=>{if(A==null)r(R.el=i(R.children),E,L);else{const H=R.el=A.el;R.children!==A.children&&u(H,R.children)}},v=(A,R,E,L)=>{A==null?r(R.el=l(R.children||""),E,L):R.el=A.el},x=(A,R,E,L)=>{[A.el,A.anchor]=g(A.children,R,E,L,A.el,A.anchor)},w=({el:A,anchor:R},E,L)=>{let H;for(;A&&A!==R;)H=h(A),r(A,E,L),A=H;r(R,E,L)},S=({el:A,anchor:R})=>{let E;for(;A&&A!==R;)E=h(A),a(A),A=E;a(R)},k=(A,R,E,L,H,$,K,W,Y)=>{R.type==="svg"?K="svg":R.type==="math"&&(K="mathml"),A==null?y(R,E,L,H,$,K,W,Y):C(A,R,H,$,K,W,Y)},y=(A,R,E,L,H,$,K,W)=>{let Y,V;const{props:Z,shapeFlag:X,transition:Q,dirs:sn}=A;if(Y=A.el=o(A.type,$,Z&&Z.is,Z),X&8?p(Y,A.children):X&16&&b(A.children,Y,null,L,H,Qa(A,$),K,W),sn&&hs(A,null,L,"created"),_(Y,A,A.scopeId,K,L),Z){for(const vn in Z)vn!=="value"&&!fe(vn)&&e(Y,vn,null,Z[vn],$,L);"value"in Z&&e(Y,"value",null,Z.value,$),(V=Z.onVnodeBeforeMount)&&Mt(V,L,A)}sn&&hs(A,null,L,"beforeMount");const ln=Bu(H,Q);ln&&Q.beforeEnter(Y),r(Y,R,E),((V=Z&&Z.onVnodeMounted)||ln||sn)&&rt(()=>{V&&Mt(V,L,A),ln&&Q.enter(Y),sn&&hs(A,null,L,"mounted")},H)},_=(A,R,E,L,H)=>{if(E&&c(A,E),L)for(let $=0;$<L.length;$++)c(A,L[$]);if(H){let $=H.subTree;if(R===$||Ul($.type)&&($.ssContent===R||$.ssFallback===R)){const K=H.vnode;_(A,K,K.scopeId,K.slotScopeIds,H.parent)}}},b=(A,R,E,L,H,$,K,W,Y=0)=>{for(let V=Y;V<A.length;V++){const Z=A[V]=W?ns(A[V]):Et(A[V]);d(null,Z,R,E,L,H,$,K,W)}},C=(A,R,E,L,H,$,K)=>{const W=R.el=A.el;let{patchFlag:Y,dynamicChildren:V,dirs:Z}=R;Y|=A.patchFlag&16;const X=A.props||yn,Q=R.props||yn;let sn;if(E&&gs(E,!1),(sn=Q.onVnodeBeforeUpdate)&&Mt(sn,E,R,A),Z&&hs(R,A,E,"beforeUpdate"),E&&gs(E,!0),(X.innerHTML&&Q.innerHTML==null||X.textContent&&Q.textContent==null)&&p(W,""),V?P(A.dynamicChildren,V,W,E,L,Qa(R,H),$):K||U(A,R,W,null,E,L,Qa(R,H),$,!1),Y>0){if(Y&16)M(W,X,Q,E,H);else if(Y&2&&X.class!==Q.class&&e(W,"class",null,Q.class,H),Y&4&&e(W,"style",X.style,Q.style,H),Y&8){const ln=R.dynamicProps;for(let vn=0;vn<ln.length;vn++){const hn=ln[vn],Bn=X[hn],Dn=Q[hn];(Dn!==Bn||hn==="value")&&e(W,hn,Bn,Dn,H,E)}}Y&1&&A.children!==R.children&&p(W,R.children)}else!K&&V==null&&M(W,X,Q,E,H);((sn=Q.onVnodeUpdated)||Z)&&rt(()=>{sn&&Mt(sn,E,R,A),Z&&hs(R,A,E,"updated")},L)},P=(A,R,E,L,H,$,K)=>{for(let W=0;W<R.length;W++){const Y=A[W],V=R[W],Z=Y.el&&(Y.type===On||!oe(Y,V)||Y.shapeFlag&198)?f(Y.el):E;d(Y,V,Z,null,L,H,$,K,!0)}},M=(A,R,E,L,H)=>{if(R!==E){if(R!==yn)for(const $ in R)!fe($)&&!($ in E)&&e(A,$,R[$],null,H,L);for(const $ in E){if(fe($))continue;const K=E[$],W=R[$];K!==W&&$!=="value"&&e(A,$,W,K,H,L)}"value"in E&&e(A,"value",R.value,E.value,H)}},T=(A,R,E,L,H,$,K,W,Y)=>{const V=R.el=A?A.el:i(""),Z=R.anchor=A?A.anchor:i("");let{patchFlag:X,dynamicChildren:Q,slotScopeIds:sn}=R;sn&&(W=W?W.concat(sn):sn),A==null?(r(V,E,L),r(Z,E,L),b(R.children||[],E,Z,H,$,K,W,Y)):X>0&&X&64&&Q&&A.dynamicChildren?(P(A.dynamicChildren,Q,E,H,$,K,W),(R.key!=null||H&&R===H.subTree)&&$l(A,R,!0)):U(A,R,E,Z,H,$,K,W,Y)},O=(A,R,E,L,H,$,K,W,Y)=>{R.slotScopeIds=W,A==null?R.shapeFlag&512?H.ctx.activate(R,E,L,K,Y):I(R,E,L,H,$,K,Y):B(A,R,Y)},I=(A,R,E,L,H,$,K)=>{const W=A.component=nd(A,L,H);if(Cl(A)&&(W.ctx.renderer=G),td(W,!1,K),W.asyncDep){if(H&&H.registerDep(W,N,K),!A.el){const Y=W.subTree=wn(cs);v(null,Y,R,E)}}else N(W,A,R,E,H,$,K)},B=(A,R,E)=>{const L=R.component=A.component;if(Uu(A,R,E))if(L.asyncDep&&!L.asyncResolved){q(L,R,E);return}else L.next=R,L.update();else R.el=A.el,L.vnode=R},N=(A,R,E,L,H,$,K)=>{const W=()=>{if(A.isMounted){let{next:X,bu:Q,u:sn,parent:ln,vnode:vn}=A;{const Tt=Nl(A);if(Tt){X&&(X.el=vn.el,q(A,X,K)),Tt.asyncDep.then(()=>{A.isUnmounted||W()});return}}let hn=X,Bn;gs(A,!1),X?(X.el=vn.el,q(A,X,K)):X=vn,Q&&Qe(Q),(Bn=X.props&&X.props.onVnodeBeforeUpdate)&&Mt(Bn,ln,X,vn),gs(A,!0);const Dn=jo(A),Ct=A.subTree;A.subTree=Dn,d(Ct,Dn,f(Ct.el),D(Ct),A,H,$),X.el=Dn.el,hn===null&&Wu(A,Dn.el),sn&&rt(sn,H),(Bn=X.props&&X.props.onVnodeUpdated)&&rt(()=>Mt(Bn,ln,X,vn),H)}else{let X;const{el:Q,props:sn}=R,{bm:ln,m:vn,parent:hn,root:Bn,type:Dn}=A,Ct=me(R);gs(A,!1),ln&&Qe(ln),!Ct&&(X=sn&&sn.onVnodeBeforeMount)&&Mt(X,hn,R),gs(A,!0);{Bn.ce&&Bn.ce._injectChildStyle(Dn);const Tt=A.subTree=jo(A);d(null,Tt,E,L,A,H,$),R.el=Tt.el}if(vn&&rt(vn,H),!Ct&&(X=sn&&sn.onVnodeMounted)){const Tt=R;rt(()=>Mt(X,hn,Tt),H)}(R.shapeFlag&256||hn&&me(hn.vnode)&&hn.vnode.shapeFlag&256)&&A.a&&rt(A.a,H),A.isMounted=!0,R=E=L=null}};A.scope.on();const Y=A.effect=new nl(W);A.scope.off();const V=A.update=Y.run.bind(Y),Z=A.job=Y.runIfDirty.bind(Y);Z.i=A,Z.id=A.uid,Y.scheduler=()=>Jr(Z),gs(A,!0),V()},q=(A,R,E)=>{R.component=A;const L=A.vnode.props;A.vnode=R,A.next=null,Au(A,R.props,L,E),Iu(A,R.children,E),Wt(),Do(A),Yt()},U=(A,R,E,L,H,$,K,W,Y=!1)=>{const V=A&&A.children,Z=A?A.shapeFlag:0,X=R.children,{patchFlag:Q,shapeFlag:sn}=R;if(Q>0){if(Q&128){on(V,X,E,L,H,$,K,W,Y);return}else if(Q&256){nn(V,X,E,L,H,$,K,W,Y);return}}sn&8?(Z&16&&J(V,H,$),X!==V&&p(E,X)):Z&16?sn&16?on(V,X,E,L,H,$,K,W,Y):J(V,H,$,!0):(Z&8&&p(E,""),sn&16&&b(X,E,L,H,$,K,W,Y))},nn=(A,R,E,L,H,$,K,W,Y)=>{A=A||Fs,R=R||Fs;const V=A.length,Z=R.length,X=Math.min(V,Z);let Q;for(Q=0;Q<X;Q++){const sn=R[Q]=Y?ns(R[Q]):Et(R[Q]);d(A[Q],sn,E,null,H,$,K,W,Y)}V>Z?J(A,H,$,!0,!1,X):b(R,E,L,H,$,K,W,Y,X)},on=(A,R,E,L,H,$,K,W,Y)=>{let V=0;const Z=R.length;let X=A.length-1,Q=Z-1;for(;V<=X&&V<=Q;){const sn=A[V],ln=R[V]=Y?ns(R[V]):Et(R[V]);if(oe(sn,ln))d(sn,ln,E,null,H,$,K,W,Y);else break;V++}for(;V<=X&&V<=Q;){const sn=A[X],ln=R[Q]=Y?ns(R[Q]):Et(R[Q]);if(oe(sn,ln))d(sn,ln,E,null,H,$,K,W,Y);else break;X--,Q--}if(V>X){if(V<=Q){const sn=Q+1,ln=sn<Z?R[sn].el:L;for(;V<=Q;)d(null,R[V]=Y?ns(R[V]):Et(R[V]),E,ln,H,$,K,W,Y),V++}}else if(V>Q)for(;V<=X;)an(A[V],H,$,!0),V++;else{const sn=V,ln=V,vn=new Map;for(V=ln;V<=Q;V++){const at=R[V]=Y?ns(R[V]):Et(R[V]);at.key!=null&&vn.set(at.key,V)}let hn,Bn=0;const Dn=Q-ln+1;let Ct=!1,Tt=0;const ae=new Array(Dn);for(V=0;V<Dn;V++)ae[V]=0;for(V=sn;V<=X;V++){const at=A[V];if(Bn>=Dn){an(at,H,$,!0);continue}let Pt;if(at.key!=null)Pt=vn.get(at.key);else for(hn=ln;hn<=Q;hn++)if(ae[hn-ln]===0&&oe(at,R[hn])){Pt=hn;break}Pt===void 0?an(at,H,$,!0):(ae[Pt-ln]=V+1,Pt>=Tt?Tt=Pt:Ct=!0,d(at,R[Pt],E,null,H,$,K,W,Y),Bn++)}const Mo=Ct?qu(ae):Fs;for(hn=Mo.length-1,V=Dn-1;V>=0;V--){const at=ln+V,Pt=R[at],Ao=at+1<Z?R[at+1].el:L;ae[V]===0?d(null,Pt,E,Ao,H,$,K,W,Y):Ct&&(hn<0||V!==Mo[hn]?pn(Pt,E,Ao,2):hn--)}}},pn=(A,R,E,L,H=null)=>{const{el:$,type:K,transition:W,children:Y,shapeFlag:V}=A;if(V&6){pn(A.component.subTree,R,E,L);return}if(V&128){A.suspense.move(R,E,L);return}if(V&64){K.move(A,R,E,G);return}if(K===On){r($,R,E);for(let X=0;X<Y.length;X++)pn(Y[X],R,E,L);r(A.anchor,R,E);return}if(K===Ze){w(A,R,E);return}if(L!==2&&V&1&&W)if(L===0)W.beforeEnter($),r($,R,E),rt(()=>W.enter($),H);else{const{leave:X,delayLeave:Q,afterLeave:sn}=W,ln=()=>{A.ctx.isUnmounted?a($):r($,R,E)},vn=()=>{X($,()=>{ln(),sn&&sn()})};Q?Q($,ln,vn):vn()}else r($,R,E)},an=(A,R,E,L=!1,H=!1)=>{const{type:$,props:K,ref:W,children:Y,dynamicChildren:V,shapeFlag:Z,patchFlag:X,dirs:Q,cacheIndex:sn}=A;if(X===-2&&(H=!1),W!=null&&(Wt(),fa(W,null,E,A,!0),Yt()),sn!=null&&(R.renderCache[sn]=void 0),Z&256){R.ctx.deactivate(A);return}const ln=Z&1&&Q,vn=!me(A);let hn;if(vn&&(hn=K&&K.onVnodeBeforeUnmount)&&Mt(hn,R,A),Z&6)dn(A.component,E,L);else{if(Z&128){A.suspense.unmount(E,L);return}ln&&hs(A,null,R,"beforeUnmount"),Z&64?A.type.remove(A,R,E,G,L):V&&!V.hasOnce&&($!==On||X>0&&X&64)?J(V,R,E,!1,!0):($===On&&X&384||!H&&Z&16)&&J(Y,R,E),L&&un(A)}(vn&&(hn=K&&K.onVnodeUnmounted)||ln)&&rt(()=>{hn&&Mt(hn,R,A),ln&&hs(A,null,R,"unmounted")},E)},un=A=>{const{type:R,el:E,anchor:L,transition:H}=A;if(R===On){cn(E,L);return}if(R===Ze){S(A);return}const $=()=>{a(E),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(A.shapeFlag&1&&H&&!H.persisted){const{leave:K,delayLeave:W}=H,Y=()=>K(E,$);W?W(A.el,$,Y):Y()}else $()},cn=(A,R)=>{let E;for(;A!==R;)E=h(A),a(A),A=E;a(R)},dn=(A,R,E)=>{const{bum:L,scope:H,job:$,subTree:K,um:W,m:Y,a:V,parent:Z,slots:{__:X}}=A;No(Y),No(V),L&&Qe(L),Z&&tn(X)&&X.forEach(Q=>{Z.renderCache[Q]=void 0}),H.stop(),$&&($.flags|=8,an(K,A,R,E)),W&&rt(W,R),rt(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},J=(A,R,E,L=!1,H=!1,$=0)=>{for(let K=$;K<A.length;K++)an(A[K],R,E,L,H)},D=A=>{if(A.shapeFlag&6)return D(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const R=h(A.anchor||A.el),E=R&&R[ru];return E?h(E):R};let j=!1;const z=(A,R,E)=>{A==null?R._vnode&&an(R._vnode,null,null,!0):d(R._vnode||null,A,R,null,null,null,E),R._vnode=A,j||(j=!0,Do(),bl(),j=!1)},G={p:d,um:an,m:pn,r:un,mt:I,mc:b,pc:U,pbc:P,n:D,o:t};return{render:z,hydrate:void 0,createApp:Pu(z)}}function Qa({type:t,props:n},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:s}function gs({effect:t,job:n},s){s?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function Bu(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function $l(t,n,s=!1){const r=t.children,a=n.children;if(tn(r)&&tn(a))for(let e=0;e<r.length;e++){const o=r[e];let i=a[e];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[e]=ns(a[e]),i.el=o.el),!s&&i.patchFlag!==-2&&$l(o,i)),i.type===Fa&&(i.el=o.el),i.type===cs&&!i.el&&(i.el=o.el)}}function qu(t){const n=t.slice(),s=[0];let r,a,e,o,i;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(a=s[s.length-1],t[a]<u){n[r]=a,s.push(r);continue}for(e=0,o=s.length-1;e<o;)i=e+o>>1,t[s[i]]<u?e=i+1:o=i;u<t[s[e]]&&(e>0&&(n[r]=s[e-1]),s[e]=r)}}for(e=s.length,o=s[e-1];e-- >0;)s[e]=o,o=n[o];return s}function Nl(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Nl(n)}function No(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const Fu=Symbol.for("v-scx"),Hu=()=>_t(Fu);function ve(t,n,s){return jl(t,n,s)}function jl(t,n,s=yn){const{immediate:r,deep:a,flush:e,once:o}=s,i=Wn({},s),l=n&&r||!n&&e!=="post";let u;if(Oe){if(e==="sync"){const c=Hu();u=c.__watcherHandles||(c.__watcherHandles=[])}else if(!l){const c=()=>{};return c.stop=Dt,c.resume=Dt,c.pause=Dt,c}}const p=jn;i.call=(c,g,d)=>Bt(c,p,g,d);let f=!1;e==="post"?i.scheduler=c=>{rt(c,p&&p.suspense)}:e!=="sync"&&(f=!0,i.scheduler=(c,g)=>{g?c():Jr(c)}),i.augmentJob=c=>{n&&(c.flags|=4),f&&(c.flags|=2,p&&(c.id=p.uid,c.i=p))};const h=tu(t,n,i);return Oe&&(u?u.push(h):l&&h()),h}function $u(t,n,s){const r=this.proxy,a=In(t)?t.includes(".")?Vl(r,t):()=>r[t]:t.bind(r,r);let e;rn(n)?e=n:(e=n.handler,s=n);const o=ze(this),i=jl(a,e.bind(r),s);return o(),i}function Vl(t,n){const s=n.split(".");return()=>{let r=t;for(let a=0;a<s.length&&r;a++)r=r[s[a]];return r}}const Nu=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${yt(n)}Modifiers`]||t[`${Ms(n)}Modifiers`];function ju(t,n,...s){if(t.isUnmounted)return;const r=t.vnode.props||yn;let a=s;const e=n.startsWith("update:"),o=e&&Nu(r,n.slice(7));o&&(o.trim&&(a=s.map(p=>In(p)?p.trim():p)),o.number&&(a=s.map(la)));let i,l=r[i=Ua(n)]||r[i=Ua(yt(n))];!l&&e&&(l=r[i=Ua(Ms(n))]),l&&Bt(l,t,6,a);const u=r[i+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Bt(u,t,6,a)}}function zl(t,n,s=!1){const r=n.emitsCache,a=r.get(t);if(a!==void 0)return a;const e=t.emits;let o={},i=!1;if(!rn(t)){const l=u=>{const p=zl(u,n,!0);p&&(i=!0,Wn(o,p))};!s&&n.mixins.length&&n.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!e&&!i?(Sn(t)&&r.set(t,null),null):(tn(e)?e.forEach(l=>o[l]=null):Wn(o,e),Sn(t)&&r.set(t,o),o)}function qa(t,n){return!t||!Ta(n)?!1:(n=n.slice(2).replace(/Once$/,""),kn(t,n[0].toLowerCase()+n.slice(1))||kn(t,Ms(n))||kn(t,n))}function jo(t){const{type:n,vnode:s,proxy:r,withProxy:a,propsOptions:[e],slots:o,attrs:i,emit:l,render:u,renderCache:p,props:f,data:h,setupState:c,ctx:g,inheritAttrs:d}=t,m=da(t);let v,x;try{if(s.shapeFlag&4){const S=a||r,k=S;v=Et(u.call(k,S,p,f,c,h,g)),x=i}else{const S=n;v=Et(S.length>1?S(f,{attrs:i,slots:o,emit:l}):S(f,null)),x=n.props?i:Vu(i)}}catch(S){xe.length=0,Da(S,t,1),v=wn(cs)}let w=v;if(x&&d!==!1){const S=Object.keys(x),{shapeFlag:k}=w;S.length&&k&7&&(e&&S.some(Nr)&&(x=zu(x,e)),w=Gs(w,x,!1,!0))}return s.dirs&&(w=Gs(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(s.dirs):s.dirs),s.transition&&Zr(w,s.transition),v=w,da(m),v}const Vu=t=>{let n;for(const s in t)(s==="class"||s==="style"||Ta(s))&&((n||(n={}))[s]=t[s]);return n},zu=(t,n)=>{const s={};for(const r in t)(!Nr(r)||!(r.slice(9)in n))&&(s[r]=t[r]);return s};function Uu(t,n,s){const{props:r,children:a,component:e}=t,{props:o,children:i,patchFlag:l}=n,u=e.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return r?Vo(r,o,u):!!o;if(l&8){const p=n.dynamicProps;for(let f=0;f<p.length;f++){const h=p[f];if(o[h]!==r[h]&&!qa(u,h))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:r===o?!1:r?o?Vo(r,o,u):!0:!!o;return!1}function Vo(t,n,s){const r=Object.keys(n);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const e=r[a];if(n[e]!==t[e]&&!qa(s,e))return!0}return!1}function Wu({vnode:t,parent:n},s){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=n.vnode).el=s,n=n.parent;else break}}const Ul=t=>t.__isSuspense;function Yu(t,n){n&&n.pendingBranch?tn(t)?n.effects.push(...t):n.effects.push(t):au(t)}const On=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),cs=Symbol.for("v-cmt"),Ze=Symbol.for("v-stc"),xe=[];let ut=null;function Ln(t=!1){xe.push(ut=t?null:[])}function Gu(){xe.pop(),ut=xe[xe.length-1]||null}let Re=1;function zo(t,n=!1){Re+=t,t<0&&ut&&n&&(ut.hasOnce=!0)}function Wl(t){return t.dynamicChildren=Re>0?ut||Fs:null,Gu(),Re>0&&ut&&ut.push(t),t}function Hn(t,n,s,r,a,e){return Wl(F(t,n,s,r,a,e,!0))}function Yl(t,n,s,r,a){return Wl(wn(t,n,s,r,a,!0))}function ga(t){return t?t.__v_isVNode===!0:!1}function oe(t,n){return t.type===n.type&&t.key===n.key}const Gl=({key:t})=>t??null,na=({ref:t,ref_key:n,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?In(t)||zn(t)||rn(t)?{i:ct,r:t,k:n,f:!!s}:t:null);function F(t,n=null,s=null,r=0,a=null,e=t===On?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Gl(n),ref:n&&na(n),scopeId:wl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:e,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ct};return i?(eo(l,s),e&128&&t.normalize(l)):s&&(l.shapeFlag|=In(s)?8:16),Re>0&&!o&&ut&&(l.patchFlag>0||e&6)&&l.patchFlag!==32&&ut.push(l),l}const wn=Ku;function Ku(t,n=null,s=null,r=0,a=null,e=!1){if((!t||t===vu)&&(t=cs),ga(t)){const i=Gs(t,n,!0);return s&&eo(i,s),Re>0&&!e&&ut&&(i.shapeFlag&6?ut[ut.indexOf(t)]=i:ut.push(i)),i.patchFlag=-2,i}if(od(t)&&(t=t.__vccOpts),n){n=Xu(n);let{class:i,style:l}=n;i&&!In(i)&&(n.class=Ce(i)),Sn(l)&&(Qr(l)&&!tn(l)&&(l=Wn({},l)),n.style=zr(l))}const o=In(t)?1:Ul(t)?128:ou(t)?64:Sn(t)?4:rn(t)?2:0;return F(t,n,s,r,a,o,e,!0)}function Xu(t){return t?Qr(t)||Dl(t)?Wn({},t):t:null}function Gs(t,n,s=!1,r=!1){const{props:a,ref:e,patchFlag:o,children:i,transition:l}=t,u=n?Qu(a||{},n):a,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Gl(u),ref:n&&n.ref?s&&e?tn(e)?e.concat(na(n)):[e,na(n)]:na(n):e,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==On?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gs(t.ssContent),ssFallback:t.ssFallback&&Gs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Zr(p,l.clone(p)),p}function Vs(t=" ",n=0){return wn(Fa,null,t,n)}function Ee(t,n){const s=wn(Ze,null,t);return s.staticCount=n,s}function Kl(t="",n=!1){return n?(Ln(),Yl(cs,null,t)):wn(cs,null,t)}function Et(t){return t==null||typeof t=="boolean"?wn(cs):tn(t)?wn(On,null,t.slice()):ga(t)?ns(t):wn(Fa,null,String(t))}function ns(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gs(t)}function eo(t,n){let s=0;const{shapeFlag:r}=t;if(n==null)n=null;else if(tn(n))s=16;else if(typeof n=="object")if(r&65){const a=n.default;a&&(a._c&&(a._d=!1),eo(t,a()),a._c&&(a._d=!0));return}else{s=32;const a=n._;!a&&!Dl(n)?n._ctx=ct:a===3&&ct&&(ct.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else rn(n)?(n={default:n,_ctx:ct},s=32):(n=String(n),r&64?(s=16,n=[Vs(n)]):s=8);t.children=n,t.shapeFlag|=s}function Qu(...t){const n={};for(let s=0;s<t.length;s++){const r=t[s];for(const a in r)if(a==="class")n.class!==r.class&&(n.class=Ce([n.class,r.class]));else if(a==="style")n.style=zr([n.style,r.style]);else if(Ta(a)){const e=n[a],o=r[a];o&&e!==o&&!(tn(e)&&e.includes(o))&&(n[a]=e?[].concat(e,o):o)}else a!==""&&(n[a]=r[a])}return n}function Mt(t,n,s,r=null){Bt(t,n,7,[s,r])}const Ju=El();let Zu=0;function nd(t,n,s){const r=t.type,a=(n?n.appContext:t.appContext)||Ju,e={uid:Zu++,vnode:t,type:r,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bl(r,a),emitsOptions:zl(r,a),emit:null,emitted:null,propsDefaults:yn,inheritAttrs:r.inheritAttrs,ctx:yn,data:yn,props:yn,attrs:yn,slots:yn,refs:yn,setupState:yn,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return e.ctx={_:e},e.root=n?n.root:e,e.emit=ju.bind(null,e),t.ce&&t.ce(e),e}let jn=null,ma,br;{const t=Ra(),n=(s,r)=>{let a;return(a=t[s])||(a=t[s]=[]),a.push(r),e=>{a.length>1?a.forEach(o=>o(e)):a[0](e)}};ma=n("__VUE_INSTANCE_SETTERS__",s=>jn=s),br=n("__VUE_SSR_SETTERS__",s=>Oe=s)}const ze=t=>{const n=jn;return ma(t),t.scope.on(),()=>{t.scope.off(),ma(n)}},Uo=()=>{jn&&jn.scope.off(),ma(null)};function Xl(t){return t.vnode.shapeFlag&4}let Oe=!1;function td(t,n=!1,s=!1){n&&br(n);const{props:r,children:a}=t.vnode,e=Xl(t);Mu(t,r,e,n),Ou(t,a,s||n);const o=e?sd(t,n):void 0;return n&&br(!1),o}function sd(t,n){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bu);const{setup:r}=s;if(r){Wt();const a=t.setupContext=r.length>1?ad(t):null,e=ze(t),o=Ve(r,t,0,[t.props,a]),i=Yi(o);if(Yt(),e(),(i||t.sp)&&!me(t)&&Sl(t),i){if(o.then(Uo,Uo),n)return o.then(l=>{Wo(t,l)}).catch(l=>{Da(l,t,0)});t.asyncDep=o}else Wo(t,o)}else Ql(t)}function Wo(t,n,s){rn(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Sn(n)&&(t.setupState=kl(n)),Ql(t)}function Ql(t,n,s){const r=t.type;t.render||(t.render=r.render||Dt);{const a=ze(t);Wt();try{yu(t)}finally{Yt(),a()}}}const ed={get(t,n){return Nn(t,"get",""),t[n]}};function ad(t){const n=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,ed),slots:t.slots,emit:t.emit,expose:n}}function Ha(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kl(Gc(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in ke)return ke[s](t)},has(n,s){return s in n||s in ke}})):t.proxy}function rd(t,n=!0){return rn(t)?t.displayName||t.name:t.name||n&&t.__name}function od(t){return rn(t)&&"__vccOpts"in t}const Kn=(t,n)=>Zc(t,n,Oe);function Jl(t,n,s){const r=arguments.length;return r===2?Sn(n)&&!tn(n)?ga(n)?wn(t,null,[n]):wn(t,n):wn(t,null,n):(r>3?s=Array.prototype.slice.call(arguments,2):r===3&&ga(s)&&(s=[s]),wn(t,n,s))}const id="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yr;const Yo=typeof window<"u"&&window.trustedTypes;if(Yo)try{yr=Yo.createPolicy("vue",{createHTML:t=>t})}catch{}const Zl=yr?t=>yr.createHTML(t):t=>t,ld="http://www.w3.org/2000/svg",pd="http://www.w3.org/1998/Math/MathML",$t=typeof document<"u"?document:null,Go=$t&&$t.createElement("template"),cd={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,r)=>{const a=n==="svg"?$t.createElementNS(ld,t):n==="mathml"?$t.createElementNS(pd,t):s?$t.createElement(t,{is:s}):$t.createElement(t);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>$t.createTextNode(t),createComment:t=>$t.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$t.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,s,r,a,e){const o=s?s.previousSibling:n.lastChild;if(a&&(a===e||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),s),!(a===e||!(a=a.nextSibling)););else{Go.innerHTML=Zl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const i=Go.content;if(r==="svg"||r==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,s)}return[o?o.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}},ud=Symbol("_vtc");function dd(t,n,s){const r=t[ud];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}const Ko=Symbol("_vod"),fd=Symbol("_vsh"),hd=Symbol(""),gd=/(^|;)\s*display\s*:/;function md(t,n,s){const r=t.style,a=In(s);let e=!1;if(s&&!a){if(n)if(In(n))for(const o of n.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&ta(r,i,"")}else for(const o in n)s[o]==null&&ta(r,o,"");for(const o in s)o==="display"&&(e=!0),ta(r,o,s[o])}else if(a){if(n!==s){const o=r[hd];o&&(s+=";"+o),r.cssText=s,e=gd.test(s)}}else n&&t.removeAttribute("style");Ko in t&&(t[Ko]=e?r.display:"",t[fd]&&(r.display="none"))}const Xo=/\s*!important$/;function ta(t,n,s){if(tn(s))s.forEach(r=>ta(t,n,r));else if(s==null&&(s=""),n.startsWith("--"))t.setProperty(n,s);else{const r=kd(t,n);Xo.test(s)?t.setProperty(Ms(r),s.replace(Xo,""),"important"):t[r]=s}}const Qo=["Webkit","Moz","ms"],Ja={};function kd(t,n){const s=Ja[n];if(s)return s;let r=yt(n);if(r!=="filter"&&r in t)return Ja[n]=r;r=Aa(r);for(let a=0;a<Qo.length;a++){const e=Qo[a]+r;if(e in t)return Ja[n]=e}return n}const Jo="http://www.w3.org/1999/xlink";function Zo(t,n,s,r,a,e=Cc(n)){r&&n.startsWith("xlink:")?s==null?t.removeAttributeNS(Jo,n.slice(6,n.length)):t.setAttributeNS(Jo,n,s):s==null||e&&!Qi(s)?t.removeAttribute(n):t.setAttribute(n,e?"":Lt(s)?String(s):s)}function ni(t,n,s,r,a){if(n==="innerHTML"||n==="textContent"){s!=null&&(t[n]=n==="innerHTML"?Zl(s):s);return}const e=t.tagName;if(n==="value"&&e!=="PROGRESS"&&!e.includes("-")){const i=e==="OPTION"?t.getAttribute("value")||"":t.value,l=s==null?t.type==="checkbox"?"on":"":String(s);(i!==l||!("_value"in t))&&(t.value=l),s==null&&t.removeAttribute(n),t._value=s;return}let o=!1;if(s===""||s==null){const i=typeof t[n];i==="boolean"?s=Qi(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{t[n]=s}catch{}o&&t.removeAttribute(a||n)}function bs(t,n,s,r){t.addEventListener(n,s,r)}function vd(t,n,s,r){t.removeEventListener(n,s,r)}const ti=Symbol("_vei");function xd(t,n,s,r,a=null){const e=t[ti]||(t[ti]={}),o=e[n];if(r&&o)o.value=r;else{const[i,l]=bd(n);if(r){const u=e[n]=_d(r,a);bs(t,i,u,l)}else o&&(vd(t,i,o,l),e[n]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function bd(t){let n;if(si.test(t)){n={};let r;for(;r=t.match(si);)t=t.slice(0,t.length-r[0].length),n[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ms(t.slice(2)),n]}let Za=0;const yd=Promise.resolve(),wd=()=>Za||(yd.then(()=>Za=0),Za=Date.now());function _d(t,n){const s=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=s.attached)return;Bt(Sd(r,s.value),n,5,[r])};return s.value=t,s.attached=wd(),s}function Sd(t,n){if(tn(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(r=>a=>!a._stopped&&r&&r(a))}else return n}const ei=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cd=(t,n,s,r,a,e)=>{const o=a==="svg";n==="class"?dd(t,r,o):n==="style"?md(t,s,r):Ta(n)?Nr(n)||xd(t,n,s,r,e):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Td(t,n,r,o))?(ni(t,n,r),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Zo(t,n,r,o,e,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!In(r))?ni(t,yt(n),r,e,n):(n==="true-value"?t._trueValue=r:n==="false-value"&&(t._falseValue=r),Zo(t,n,r,o))};function Td(t,n,s,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in t&&ei(n)&&rn(s));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return ei(n)&&In(s)?!1:n in t}const ka=t=>{const n=t.props["onUpdate:modelValue"]||!1;return tn(n)?s=>Qe(n,s):n};function Pd(t){t.target.composing=!0}function ai(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const zs=Symbol("_assign"),nr={created(t,{modifiers:{lazy:n,trim:s,number:r}},a){t[zs]=ka(a);const e=r||a.props&&a.props.type==="number";bs(t,n?"change":"input",o=>{if(o.target.composing)return;let i=t.value;s&&(i=i.trim()),e&&(i=la(i)),t[zs](i)}),s&&bs(t,"change",()=>{t.value=t.value.trim()}),n||(bs(t,"compositionstart",Pd),bs(t,"compositionend",ai),bs(t,"change",ai))},mounted(t,{value:n}){t.value=n??""},beforeUpdate(t,{value:n,oldValue:s,modifiers:{lazy:r,trim:a,number:e}},o){if(t[zs]=ka(o),t.composing)return;const i=(e||t.type==="number")&&!/^0\d/.test(t.value)?la(t.value):t.value,l=n??"";i!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&n===s||a&&t.value.trim()===l)||(t.value=l))}},Md={deep:!0,created(t,{value:n,modifiers:{number:s}},r){const a=Pa(n);bs(t,"change",()=>{const e=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>s?la(va(o)):va(o));t[zs](t.multiple?a?new Set(e):e:e[0]),t._assigning=!0,La(()=>{t._assigning=!1})}),t[zs]=ka(r)},mounted(t,{value:n}){ri(t,n)},beforeUpdate(t,n,s){t[zs]=ka(s)},updated(t,{value:n}){t._assigning||ri(t,n)}};function ri(t,n){const s=t.multiple,r=tn(n);if(!(s&&!r&&!Pa(n))){for(let a=0,e=t.options.length;a<e;a++){const o=t.options[a],i=va(o);if(s)if(r){const l=typeof i;l==="string"||l==="number"?o.selected=n.some(u=>String(u)===String(i)):o.selected=Pc(n,i)>-1}else o.selected=n.has(i);else if(Ea(va(o),n)){t.selectedIndex!==a&&(t.selectedIndex=a);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function va(t){return"_value"in t?t._value:t.value}const Ad=["ctrl","shift","alt","meta"],Rd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,n)=>Ad.some(s=>t[`${s}Key`]&&!n.includes(s))},Ed=(t,n)=>{const s=t._withMods||(t._withMods={}),r=n.join(".");return s[r]||(s[r]=(a,...e)=>{for(let o=0;o<n.length;o++){const i=Rd[n[o]];if(i&&i(a,n))return}return t(a,...e)})},Od=Wn({patchProp:Cd},cd);let oi;function Id(){return oi||(oi=Du(Od))}const Dd=(...t)=>{const n=Id().createApp(...t),{mount:s}=n;return n.mount=r=>{const a=Bd(r);if(!a)return;const e=n._component;!rn(e)&&!e.render&&!e.template&&(e.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=s(a,!1,Ld(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},n};function Ld(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bd(t){return In(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ls=typeof document<"u";function np(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&np(t.default)}const gn=Object.assign;function tr(t,n){const s={};for(const r in n){const a=n[r];s[r]=St(a)?a.map(t):t(a)}return s}const be=()=>{},St=Array.isArray,tp=/#/g,Fd=/&/g,Hd=/\//g,$d=/=/g,Nd=/\?/g,sp=/\+/g,jd=/%5B/g,Vd=/%5D/g,ep=/%5E/g,zd=/%60/g,ap=/%7B/g,Ud=/%7C/g,rp=/%7D/g,Wd=/%20/g;function ao(t){return encodeURI(""+t).replace(Ud,"|").replace(jd,"[").replace(Vd,"]")}function Yd(t){return ao(t).replace(ap,"{").replace(rp,"}").replace(ep,"^")}function wr(t){return ao(t).replace(sp,"%2B").replace(Wd,"+").replace(tp,"%23").replace(Fd,"%26").replace(zd,"`").replace(ap,"{").replace(rp,"}").replace(ep,"^")}function Gd(t){return wr(t).replace($d,"%3D")}function Kd(t){return ao(t).replace(tp,"%23").replace(Nd,"%3F")}function Xd(t){return t==null?"":Kd(t).replace(Hd,"%2F")}function Ie(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Qd=/\/$/,Jd=t=>t.replace(Qd,"");function sr(t,n,s="/"){let r,a={},e="",o="";const i=n.indexOf("#");let l=n.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(r=n.slice(0,l),e=n.slice(l+1,i>-1?i:n.length),a=t(e)),i>-1&&(r=r||n.slice(0,i),o=n.slice(i,n.length)),r=sf(r??n,s),{fullPath:r+(e&&"?")+e+o,path:r,query:a,hash:Ie(o)}}function Zd(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function ii(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function nf(t,n,s){const r=n.matched.length-1,a=s.matched.length-1;return r>-1&&r===a&&Ks(n.matched[r],s.matched[a])&&op(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function Ks(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function op(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!tf(t[s],n[s]))return!1;return!0}function tf(t,n){return St(t)?li(t,n):St(n)?li(n,t):t===n}function li(t,n){return St(n)?t.length===n.length&&t.every((s,r)=>s===n[r]):t.length===1&&t[0]===n}function sf(t,n){if(t.startsWith("/"))return t;if(!t)return n;const s=n.split("/"),r=t.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let e=s.length-1,o,i;for(o=0;o<r.length;o++)if(i=r[o],i!==".")if(i==="..")e>1&&e--;else break;return s.slice(0,e).join("/")+"/"+r.slice(o).join("/")}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var De;(function(t){t.pop="pop",t.push="push"})(De||(De={}));var ye;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ye||(ye={}));function ef(t){if(!t)if(Ls){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jd(t)}const af=/^[^#]+#/;function rf(t,n){return t.replace(af,"#")+n}function of(t,n){const s=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:n.behavior,left:r.left-s.left-(n.left||0),top:r.top-s.top-(n.top||0)}}const $a=()=>({left:window.scrollX,top:window.scrollY});function lf(t){let n;if("el"in t){const s=t.el,r=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?r?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;n=of(a,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function pi(t,n){return(history.state?history.state.position-n:-1)+t}const _r=new Map;function pf(t,n){_r.set(t,n)}function cf(t){const n=_r.get(t);return _r.delete(t),n}let uf=()=>location.protocol+"//"+location.host;function ip(t,n){const{pathname:s,search:r,hash:a}=n,e=t.indexOf("#");if(e>-1){let i=a.includes(t.slice(e))?t.slice(e).length:1,l=a.slice(i);return l[0]!=="/"&&(l="/"+l),ii(l,"")}return ii(s,t)+r+a}function df(t,n,s,r){let a=[],e=[],o=null;const i=({state:h})=>{const c=ip(t,location),g=s.value,d=n.value;let m=0;if(h){if(s.value=c,n.value=h,o&&o===g){o=null;return}m=d?h.position-d.position:0}else r(c);a.forEach(v=>{v(s.value,g,{delta:m,type:De.pop,direction:m?m>0?ye.forward:ye.back:ye.unknown})})};function l(){o=s.value}function u(h){a.push(h);const c=()=>{const g=a.indexOf(h);g>-1&&a.splice(g,1)};return e.push(c),c}function p(){const{history:h}=window;h.state&&h.replaceState(gn({},h.state,{scroll:$a()}),"")}function f(){for(const h of e)h();e=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function ci(t,n,s,r=!1,a=!1){return{back:t,current:n,forward:s,replaced:r,position:window.history.length,scroll:a?$a():null}}function ff(t){const{history:n,location:s}=window,r={value:ip(t,s)},a={value:n.state};a.value||e(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function e(l,u,p){const f=t.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?t:t.slice(f))+l:uf()+t+l;try{n[p?"replaceState":"pushState"](u,"",h),a.value=u}catch(c){console.error(c),s[p?"replace":"assign"](h)}}function o(l,u){const p=gn({},n.state,ci(a.value.back,l,a.value.forward,!0),u,{position:a.value.position});e(l,p,!0),r.value=l}function i(l,u){const p=gn({},a.value,n.state,{forward:l,scroll:$a()});e(p.current,p,!0);const f=gn({},ci(r.value,l,null),{position:p.position+1},u);e(l,f,!1),r.value=l}return{location:r,state:a,push:i,replace:o}}function hf(t){t=ef(t);const n=ff(t),s=df(t,n.state,n.location,n.replace);function r(e,o=!0){o||s.pauseListeners(),history.go(e)}const a=gn({location:"",base:t,go:r,createHref:rf.bind(null,t)},n,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function gf(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),hf(t)}function mf(t){return typeof t=="string"||t&&typeof t=="object"}function lp(t){return typeof t=="string"||typeof t=="symbol"}const pp=Symbol("");var ui;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ui||(ui={}));function Xs(t,n){return gn(new Error,{type:t,[pp]:!0},n)}function Ht(t,n){return t instanceof Error&&pp in t&&(n==null||!!(t.type&n))}const di="[^/]+?",kf={sensitive:!1,strict:!1,start:!0,end:!0},vf=/[.+*?^${}()[\]/\\]/g;function xf(t,n){const s=gn({},kf,n),r=[];let a=s.start?"^":"";const e=[];for(const u of t){const p=u.length?[]:[90];s.strict&&!u.length&&(a+="/");for(let f=0;f<u.length;f++){const h=u[f];let c=40+(s.sensitive?.25:0);if(h.type===0)f||(a+="/"),a+=h.value.replace(vf,"\\$&"),c+=40;else if(h.type===1){const{value:g,repeatable:d,optional:m,regexp:v}=h;e.push({name:g,repeatable:d,optional:m});const x=v||di;if(x!==di){c+=10;try{new RegExp(`(${x})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+S.message)}}let w=d?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(w=m&&u.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),a+=w,c+=20,m&&(c+=-8),d&&(c+=-20),x===".*"&&(c+=-50)}p.push(c)}r.push(p)}if(s.strict&&s.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}s.strict||(a+="/?"),s.end?a+="$":s.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const o=new RegExp(a,s.sensitive?"":"i");function i(u){const p=u.match(o),f={};if(!p)return null;for(let h=1;h<p.length;h++){const c=p[h]||"",g=e[h-1];f[g.name]=c&&g.repeatable?c.split("/"):c}return f}function l(u){let p="",f=!1;for(const h of t){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const c of h)if(c.type===0)p+=c.value;else if(c.type===1){const{value:g,repeatable:d,optional:m}=c,v=g in u?u[g]:"";if(St(v)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=St(v)?v.join("/"):v;if(!x)if(m)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);p+=x}}return p||"/"}return{re:o,score:r,keys:e,parse:i,stringify:l}}function bf(t,n){let s=0;for(;s<t.length&&s<n.length;){const r=n[s]-t[s];if(r)return r;s++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function cp(t,n){let s=0;const r=t.score,a=n.score;for(;s<r.length&&s<a.length;){const e=bf(r[s],a[s]);if(e)return e;s++}if(Math.abs(a.length-r.length)===1){if(fi(r))return 1;if(fi(a))return-1}return a.length-r.length}function fi(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const yf={type:0,value:""},wf=/[a-zA-Z0-9_]/;function _f(t){if(!t)return[[]];if(t==="/")return[[yf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(c){throw new Error(`ERR (${s})/"${u}": ${c}`)}let s=0,r=s;const a=[];let e;function o(){e&&a.push(e),e=[]}let i=0,l,u="",p="";function f(){u&&(s===0?e.push({type:0,value:u}):s===1||s===2||s===3?(e.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),e.push({type:1,value:u,regexp:p,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;i<t.length;){if(l=t[i++],l==="\\"&&s!==2){r=s,s=4;continue}switch(s){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),s=1):h();break;case 4:h(),s=r;break;case 1:l==="("?s=2:wf.test(l)?h():(f(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+l:s=3:p+=l;break;case 3:f(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,p="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),o(),a}function Sf(t,n,s){const r=xf(_f(t.path),s),a=gn(r,{record:t,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function Cf(t,n){const s=[],r=new Map;n=ki({strict:!1,end:!0,sensitive:!1},n);function a(f){return r.get(f)}function e(f,h,c){const g=!c,d=gi(f);d.aliasOf=c&&c.record;const m=ki(n,f),v=[d];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const k of S)v.push(gi(gn({},d,{components:c?c.record.components:d.components,path:k,aliasOf:c?c.record:d})))}let x,w;for(const S of v){const{path:k}=S;if(h&&k[0]!=="/"){const y=h.record.path,_=y[y.length-1]==="/"?"":"/";S.path=h.record.path+(k&&_+k)}if(x=Sf(S,h,m),c?c.alias.push(x):(w=w||x,w!==x&&w.alias.push(x),g&&f.name&&!mi(x)&&o(f.name)),up(x)&&l(x),d.children){const y=d.children;for(let _=0;_<y.length;_++)e(y[_],x,c&&c.children[_])}c=c||x}return w?()=>{o(w)}:be}function o(f){if(lp(f)){const h=r.get(f);h&&(r.delete(f),s.splice(s.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=s.indexOf(f);h>-1&&(s.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function i(){return s}function l(f){const h=Mf(f,s);s.splice(h,0,f),f.record.name&&!mi(f)&&r.set(f.record.name,f)}function u(f,h){let c,g={},d,m;if("name"in f&&f.name){if(c=r.get(f.name),!c)throw Xs(1,{location:f});m=c.record.name,g=gn(hi(h.params,c.keys.filter(w=>!w.optional).concat(c.parent?c.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),f.params&&hi(f.params,c.keys.map(w=>w.name))),d=c.stringify(g)}else if(f.path!=null)d=f.path,c=s.find(w=>w.re.test(d)),c&&(g=c.parse(d),m=c.record.name);else{if(c=h.name?r.get(h.name):s.find(w=>w.re.test(h.path)),!c)throw Xs(1,{location:f,currentLocation:h});m=c.record.name,g=gn({},h.params,f.params),d=c.stringify(g)}const v=[];let x=c;for(;x;)v.unshift(x.record),x=x.parent;return{name:m,path:d,params:g,matched:v,meta:Pf(v)}}t.forEach(f=>e(f));function p(){s.length=0,r.clear()}return{addRoute:e,resolve:u,removeRoute:o,clearRoutes:p,getRoutes:i,getRecordMatcher:a}}function hi(t,n){const s={};for(const r of n)r in t&&(s[r]=t[r]);return s}function gi(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Tf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Tf(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const r in t.components)n[r]=typeof s=="object"?s[r]:s;return n}function mi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pf(t){return t.reduce((n,s)=>gn(n,s.meta),{})}function ki(t,n){const s={};for(const r in t)s[r]=r in n?n[r]:t[r];return s}function Mf(t,n){let s=0,r=n.length;for(;s!==r;){const e=s+r>>1;cp(t,n[e])<0?r=e:s=e+1}const a=Af(t);return a&&(r=n.lastIndexOf(a,r-1)),r}function Af(t){let n=t;for(;n=n.parent;)if(up(n)&&cp(t,n)===0)return n}function up({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Rf(t){const n={};if(t===""||t==="?")return n;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let a=0;a<r.length;++a){const e=r[a].replace(sp," "),o=e.indexOf("="),i=Ie(o<0?e:e.slice(0,o)),l=o<0?null:Ie(e.slice(o+1));if(i in n){let u=n[i];St(u)||(u=n[i]=[u]),u.push(l)}else n[i]=l}return n}function vi(t){let n="";for(let s in t){const r=t[s];if(s=Gd(s),r==null){r!==void 0&&(n+=(n.length?"&":"")+s);continue}(St(r)?r.map(e=>e&&wr(e)):[r&&wr(r)]).forEach(e=>{e!==void 0&&(n+=(n.length?"&":"")+s,e!=null&&(n+="="+e))})}return n}function Ef(t){const n={};for(const s in t){const r=t[s];r!==void 0&&(n[s]=St(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return n}const Of=Symbol(""),xi=Symbol(""),Na=Symbol(""),ro=Symbol(""),Sr=Symbol("");function ie(){let t=[];function n(r){return t.push(r),()=>{const a=t.indexOf(r);a>-1&&t.splice(a,1)}}function s(){t=[]}return{add:n,list:()=>t.slice(),reset:s}}function ts(t,n,s,r,a,e=o=>o()){const o=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((i,l)=>{const u=h=>{h===!1?l(Xs(4,{from:s,to:n})):h instanceof Error?l(h):mf(h)?l(Xs(2,{from:n,to:h})):(o&&r.enterCallbacks[a]===o&&typeof h=="function"&&o.push(h),i())},p=e(()=>t.call(r&&r.instances[a],n,s,u));let f=Promise.resolve(p);t.length<3&&(f=f.then(u)),f.catch(h=>l(h))})}function er(t,n,s,r,a=e=>e()){const e=[];for(const o of t)for(const i in o.components){let l=o.components[i];if(!(n!=="beforeRouteEnter"&&!o.instances[i]))if(np(l)){const p=(l.__vccOpts||l)[n];p&&e.push(ts(p,s,r,o,i,a))}else{let u=l();e.push(()=>u.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const f=qd(p)?p.default:p;o.mods[i]=p,o.components[i]=f;const c=(f.__vccOpts||f)[n];return c&&ts(c,s,r,o,i,a)()}))}}return e}function bi(t){const n=_t(Na),s=_t(ro),r=Kn(()=>{const l=pt(t.to);return n.resolve(l)}),a=Kn(()=>{const{matched:l}=r.value,{length:u}=l,p=l[u-1],f=s.matched;if(!p||!f.length)return-1;const h=f.findIndex(Ks.bind(null,p));if(h>-1)return h;const c=yi(l[u-2]);return u>1&&yi(p)===c&&f[f.length-1].path!==c?f.findIndex(Ks.bind(null,l[u-2])):h}),e=Kn(()=>a.value>-1&&Bf(s.params,r.value.params)),o=Kn(()=>a.value>-1&&a.value===s.matched.length-1&&op(s.params,r.value.params));function i(l={}){if(Lf(l)){const u=n[pt(t.replace)?"replace":"push"](pt(t.to)).catch(be);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Kn(()=>r.value.href),isActive:e,isExactActive:o,navigate:i}}function If(t){return t.length===1?t[0]:t}const Df=_l({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bi,setup(t,{slots:n}){const s=Ia(bi(t)),{options:r}=_t(Na),a=Kn(()=>({[wi(t.activeClass,r.linkActiveClass,"router-link-active")]:s.isActive,[wi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const e=n.default&&If(n.default(s));return t.custom?e:Jl("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},e)}}}),ce=Df;function Lf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function Bf(t,n){for(const s in n){const r=n[s],a=t[s];if(typeof r=="string"){if(r!==a)return!1}else if(!St(a)||a.length!==r.length||r.some((e,o)=>e!==a[o]))return!1}return!0}function yi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wi=(t,n,s)=>t??n??s,qf=_l({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){const r=_t(Sr),a=Kn(()=>t.route||r.value),e=_t(xi,0),o=Kn(()=>{let u=pt(e);const{matched:p}=a.value;let f;for(;(f=p[u])&&!f.components;)u++;return u}),i=Kn(()=>a.value.matched[o.value]);Je(xi,Kn(()=>o.value+1)),Je(Of,i),Je(Sr,a);const l=Jn();return ve(()=>[l.value,i.value,t.name],([u,p,f],[h,c,g])=>{p&&(p.instances[f]=u,c&&c!==p&&u&&u===h&&(p.leaveGuards.size||(p.leaveGuards=c.leaveGuards),p.updateGuards.size||(p.updateGuards=c.updateGuards))),u&&p&&(!c||!Ks(p,c)||!h)&&(p.enterCallbacks[f]||[]).forEach(d=>d(u))},{flush:"post"}),()=>{const u=a.value,p=t.name,f=i.value,h=f&&f.components[p];if(!h)return _i(s.default,{Component:h,route:u});const c=f.props[p],g=c?c===!0?u.params:typeof c=="function"?c(u):c:null,m=Jl(h,gn({},g,n,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[p]=null)},ref:l}));return _i(s.default,{Component:m,route:u})||m}}});function _i(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const dp=qf;function Ff(t){const n=Cf(t.routes,t),s=t.parseQuery||Rf,r=t.stringifyQuery||vi,a=t.history,e=ie(),o=ie(),i=ie(),l=Kc(Jt);let u=Jt;Ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=tr.bind(null,D=>""+D),f=tr.bind(null,Xd),h=tr.bind(null,Ie);function c(D,j){let z,G;return lp(D)?(z=n.getRecordMatcher(D),G=j):G=D,n.addRoute(G,z)}function g(D){const j=n.getRecordMatcher(D);j&&n.removeRoute(j)}function d(){return n.getRoutes().map(D=>D.record)}function m(D){return!!n.getRecordMatcher(D)}function v(D,j){if(j=gn({},j||l.value),typeof D=="string"){const E=sr(s,D,j.path),L=n.resolve({path:E.path},j),H=a.createHref(E.fullPath);return gn(E,L,{params:h(L.params),hash:Ie(E.hash),redirectedFrom:void 0,href:H})}let z;if(D.path!=null)z=gn({},D,{path:sr(s,D.path,j.path).path});else{const E=gn({},D.params);for(const L in E)E[L]==null&&delete E[L];z=gn({},D,{params:f(E)}),j.params=f(j.params)}const G=n.resolve(z,j),en=D.hash||"";G.params=p(h(G.params));const A=Zd(r,gn({},D,{hash:Yd(en),path:G.path})),R=a.createHref(A);return gn({fullPath:A,hash:en,query:r===vi?Ef(D.query):D.query||{}},G,{redirectedFrom:void 0,href:R})}function x(D){return typeof D=="string"?sr(s,D,l.value.path):gn({},D)}function w(D,j){if(u!==D)return Xs(8,{from:j,to:D})}function S(D){return _(D)}function k(D){return S(gn(x(D),{replace:!0}))}function y(D){const j=D.matched[D.matched.length-1];if(j&&j.redirect){const{redirect:z}=j;let G=typeof z=="function"?z(D):z;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=x(G):{path:G},G.params={}),gn({query:D.query,hash:D.hash,params:G.path!=null?{}:D.params},G)}}function _(D,j){const z=u=v(D),G=l.value,en=D.state,A=D.force,R=D.replace===!0,E=y(z);if(E)return _(gn(x(E),{state:typeof E=="object"?gn({},en,E.state):en,force:A,replace:R}),j||z);const L=z;L.redirectedFrom=j;let H;return!A&&nf(r,G,z)&&(H=Xs(16,{to:L,from:G}),pn(G,G,!0,!1)),(H?Promise.resolve(H):P(L,G)).catch($=>Ht($)?Ht($,2)?$:on($):U($,L,G)).then($=>{if($){if(Ht($,2))return _(gn({replace:R},x($.to),{state:typeof $.to=="object"?gn({},en,$.to.state):en,force:A}),j||L)}else $=T(L,G,!0,R,en);return M(L,G,$),$})}function b(D,j){const z=w(D,j);return z?Promise.reject(z):Promise.resolve()}function C(D){const j=cn.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(D):D()}function P(D,j){let z;const[G,en,A]=Hf(D,j);z=er(G.reverse(),"beforeRouteLeave",D,j);for(const E of G)E.leaveGuards.forEach(L=>{z.push(ts(L,D,j))});const R=b.bind(null,D,j);return z.push(R),J(z).then(()=>{z=[];for(const E of e.list())z.push(ts(E,D,j));return z.push(R),J(z)}).then(()=>{z=er(en,"beforeRouteUpdate",D,j);for(const E of en)E.updateGuards.forEach(L=>{z.push(ts(L,D,j))});return z.push(R),J(z)}).then(()=>{z=[];for(const E of A)if(E.beforeEnter)if(St(E.beforeEnter))for(const L of E.beforeEnter)z.push(ts(L,D,j));else z.push(ts(E.beforeEnter,D,j));return z.push(R),J(z)}).then(()=>(D.matched.forEach(E=>E.enterCallbacks={}),z=er(A,"beforeRouteEnter",D,j,C),z.push(R),J(z))).then(()=>{z=[];for(const E of o.list())z.push(ts(E,D,j));return z.push(R),J(z)}).catch(E=>Ht(E,8)?E:Promise.reject(E))}function M(D,j,z){i.list().forEach(G=>C(()=>G(D,j,z)))}function T(D,j,z,G,en){const A=w(D,j);if(A)return A;const R=j===Jt,E=Ls?history.state:{};z&&(G||R?a.replace(D.fullPath,gn({scroll:R&&E&&E.scroll},en)):a.push(D.fullPath,en)),l.value=D,pn(D,j,z,R),on()}let O;function I(){O||(O=a.listen((D,j,z)=>{if(!dn.listening)return;const G=v(D),en=y(G);if(en){_(gn(en,{replace:!0,force:!0}),G).catch(be);return}u=G;const A=l.value;Ls&&pf(pi(A.fullPath,z.delta),$a()),P(G,A).catch(R=>Ht(R,12)?R:Ht(R,2)?(_(gn(x(R.to),{force:!0}),G).then(E=>{Ht(E,20)&&!z.delta&&z.type===De.pop&&a.go(-1,!1)}).catch(be),Promise.reject()):(z.delta&&a.go(-z.delta,!1),U(R,G,A))).then(R=>{R=R||T(G,A,!1),R&&(z.delta&&!Ht(R,8)?a.go(-z.delta,!1):z.type===De.pop&&Ht(R,20)&&a.go(-1,!1)),M(G,A,R)}).catch(be)}))}let B=ie(),N=ie(),q;function U(D,j,z){on(D);const G=N.list();return G.length?G.forEach(en=>en(D,j,z)):console.error(D),Promise.reject(D)}function nn(){return q&&l.value!==Jt?Promise.resolve():new Promise((D,j)=>{B.add([D,j])})}function on(D){return q||(q=!D,I(),B.list().forEach(([j,z])=>D?z(D):j()),B.reset()),D}function pn(D,j,z,G){const{scrollBehavior:en}=t;if(!Ls||!en)return Promise.resolve();const A=!z&&cf(pi(D.fullPath,0))||(G||!z)&&history.state&&history.state.scroll||null;return La().then(()=>en(D,j,A)).then(R=>R&&lf(R)).catch(R=>U(R,D,j))}const an=D=>a.go(D);let un;const cn=new Set,dn={currentRoute:l,listening:!0,addRoute:c,removeRoute:g,clearRoutes:n.clearRoutes,hasRoute:m,getRoutes:d,resolve:v,options:t,push:S,replace:k,go:an,back:()=>an(-1),forward:()=>an(1),beforeEach:e.add,beforeResolve:o.add,afterEach:i.add,onError:N.add,isReady:nn,install(D){const j=this;D.component("RouterLink",ce),D.component("RouterView",dp),D.config.globalProperties.$router=j,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(l)}),Ls&&!un&&l.value===Jt&&(un=!0,S(a.location).catch(en=>{}));const z={};for(const en in Jt)Object.defineProperty(z,en,{get:()=>l.value[en],enumerable:!0});D.provide(Na,j),D.provide(ro,hl(z)),D.provide(Sr,l);const G=D.unmount;cn.add(D),D.unmount=function(){cn.delete(D),cn.size<1&&(u=Jt,O&&O(),O=null,l.value=Jt,un=!1,q=!1),G()}}};function J(D){return D.reduce((j,z)=>j.then(()=>C(z)),Promise.resolve())}return dn}function Hf(t,n){const s=[],r=[],a=[],e=Math.max(n.matched.length,t.matched.length);for(let o=0;o<e;o++){const i=n.matched[o];i&&(t.matched.find(u=>Ks(u,i))?r.push(i):s.push(i));const l=t.matched[o];l&&(n.matched.find(u=>Ks(u,l))||a.push(l))}return[s,r,a]}function fp(){return _t(Na)}function $f(t){return _t(ro)}const Nf={__name:"App",setup(t){return(n,s)=>(Ln(),Yl(pt(dp)))}};var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sa={exports:{}},jf=sa.exports,Ci;function Vf(){return Ci||(Ci=1,function(t,n){(function(s,r){t.exports=r()})(jf,function(){return function(s){function r(e){if(a[e])return a[e].exports;var o=a[e]={exports:{},id:e,loaded:!1};return s[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var a={};return r.m=s,r.c=a,r.p="dist/",r(0)}([function(s,r,a){function e(I){return I&&I.__esModule?I:{default:I}}var o=Object.assign||function(I){for(var B=1;B<arguments.length;B++){var N=arguments[B];for(var q in N)Object.prototype.hasOwnProperty.call(N,q)&&(I[q]=N[q])}return I},i=a(1),l=(e(i),a(6)),u=e(l),p=a(7),f=e(p),h=a(8),c=e(h),g=a(9),d=e(g),m=a(10),v=e(m),x=a(11),w=e(x),S=a(14),k=e(S),y=[],_=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},C=function(){var I=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(I&&(_=!0),_)return y=(0,w.default)(y,b),(0,v.default)(y,b.once),y},P=function(){y=(0,k.default)(),C()},M=function(){y.forEach(function(I,B){I.node.removeAttribute("data-aos"),I.node.removeAttribute("data-aos-easing"),I.node.removeAttribute("data-aos-duration"),I.node.removeAttribute("data-aos-delay")})},T=function(I){return I===!0||I==="mobile"&&d.default.mobile()||I==="phone"&&d.default.phone()||I==="tablet"&&d.default.tablet()||typeof I=="function"&&I()===!0},O=function(I){b=o(b,I),y=(0,k.default)();var B=document.all&&!window.atob;return T(b.disable)||B?M():(b.disableMutationObserver||c.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),b.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?C(!0):b.startEvent==="load"?window.addEventListener(b.startEvent,function(){C(!0)}):document.addEventListener(b.startEvent,function(){C(!0)}),window.addEventListener("resize",(0,f.default)(C,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(C,b.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,v.default)(y,b.once)},b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",P),y)};s.exports={init:O,refresh:C,refreshHard:P}},function(s,r){},,,,,function(s,r){(function(a){function e(T,O,I){function B(E){var L=cn,H=dn;return cn=dn=void 0,G=E,D=T.apply(H,L)}function N(E){return G=E,j=setTimeout(nn,O),en?B(E):D}function q(E){var L=E-z,H=E-G,$=O-L;return A?P($,J-H):$}function U(E){var L=E-z,H=E-G;return z===void 0||L>=O||L<0||A&&H>=J}function nn(){var E=M();return U(E)?on(E):void(j=setTimeout(nn,q(E)))}function on(E){return j=void 0,R&&cn?B(E):(cn=dn=void 0,D)}function pn(){j!==void 0&&clearTimeout(j),G=0,cn=z=dn=j=void 0}function an(){return j===void 0?D:on(M())}function un(){var E=M(),L=U(E);if(cn=arguments,dn=this,z=E,L){if(j===void 0)return N(z);if(A)return j=setTimeout(nn,O),B(z)}return j===void 0&&(j=setTimeout(nn,O)),D}var cn,dn,J,D,j,z,G=0,en=!1,A=!1,R=!0;if(typeof T!="function")throw new TypeError(h);return O=p(O)||0,i(I)&&(en=!!I.leading,A="maxWait"in I,J=A?C(p(I.maxWait)||0,O):J,R="trailing"in I?!!I.trailing:R),un.cancel=pn,un.flush=an,un}function o(T,O,I){var B=!0,N=!0;if(typeof T!="function")throw new TypeError(h);return i(I)&&(B="leading"in I?!!I.leading:B,N="trailing"in I?!!I.trailing:N),e(T,O,{leading:B,maxWait:O,trailing:N})}function i(T){var O=typeof T>"u"?"undefined":f(T);return!!T&&(O=="object"||O=="function")}function l(T){return!!T&&(typeof T>"u"?"undefined":f(T))=="object"}function u(T){return(typeof T>"u"?"undefined":f(T))=="symbol"||l(T)&&b.call(T)==g}function p(T){if(typeof T=="number")return T;if(u(T))return c;if(i(T)){var O=typeof T.valueOf=="function"?T.valueOf():T;T=i(O)?O+"":O}if(typeof T!="string")return T===0?T:+T;T=T.replace(d,"");var I=v.test(T);return I||x.test(T)?w(T.slice(2),I?2:8):m.test(T)?c:+T}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},h="Expected a function",c=NaN,g="[object Symbol]",d=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,x=/^0o[0-7]+$/i,w=parseInt,S=(typeof a>"u"?"undefined":f(a))=="object"&&a&&a.Object===Object&&a,k=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,y=S||k||Function("return this")(),_=Object.prototype,b=_.toString,C=Math.max,P=Math.min,M=function(){return y.Date.now()};s.exports=o}).call(r,function(){return this}())},function(s,r){(function(a){function e(M,T,O){function I(R){var E=un,L=cn;return un=cn=void 0,z=R,J=M.apply(L,E)}function B(R){return z=R,D=setTimeout(U,T),G?I(R):J}function N(R){var E=R-j,L=R-z,H=T-E;return en?C(H,dn-L):H}function q(R){var E=R-j,L=R-z;return j===void 0||E>=T||E<0||en&&L>=dn}function U(){var R=P();return q(R)?nn(R):void(D=setTimeout(U,N(R)))}function nn(R){return D=void 0,A&&un?I(R):(un=cn=void 0,J)}function on(){D!==void 0&&clearTimeout(D),z=0,un=j=cn=D=void 0}function pn(){return D===void 0?J:nn(P())}function an(){var R=P(),E=q(R);if(un=arguments,cn=this,j=R,E){if(D===void 0)return B(j);if(en)return D=setTimeout(U,T),I(j)}return D===void 0&&(D=setTimeout(U,T)),J}var un,cn,dn,J,D,j,z=0,G=!1,en=!1,A=!0;if(typeof M!="function")throw new TypeError(f);return T=u(T)||0,o(O)&&(G=!!O.leading,en="maxWait"in O,dn=en?b(u(O.maxWait)||0,T):dn,A="trailing"in O?!!O.trailing:A),an.cancel=on,an.flush=pn,an}function o(M){var T=typeof M>"u"?"undefined":p(M);return!!M&&(T=="object"||T=="function")}function i(M){return!!M&&(typeof M>"u"?"undefined":p(M))=="object"}function l(M){return(typeof M>"u"?"undefined":p(M))=="symbol"||i(M)&&_.call(M)==c}function u(M){if(typeof M=="number")return M;if(l(M))return h;if(o(M)){var T=typeof M.valueOf=="function"?M.valueOf():M;M=o(T)?T+"":T}if(typeof M!="string")return M===0?M:+M;M=M.replace(g,"");var O=m.test(M);return O||v.test(M)?x(M.slice(2),O?2:8):d.test(M)?h:+M}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},f="Expected a function",h=NaN,c="[object Symbol]",g=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,x=parseInt,w=(typeof a>"u"?"undefined":p(a))=="object"&&a&&a.Object===Object&&a,S=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,k=w||S||Function("return this")(),y=Object.prototype,_=y.toString,b=Math.max,C=Math.min,P=function(){return k.Date.now()};s.exports=e}).call(r,function(){return this}())},function(s,r){function a(p){var f=void 0,h=void 0;for(f=0;f<p.length;f+=1)if(h=p[f],h.dataset&&h.dataset.aos||h.children&&a(h.children))return!0;return!1}function e(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!e()}function i(p,f){var h=window.document,c=e(),g=new c(l);u=f,g.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(p){p&&p.forEach(function(f){var h=Array.prototype.slice.call(f.addedNodes),c=Array.prototype.slice.call(f.removedNodes),g=h.concat(c);if(a(g))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:o,ready:i}},function(s,r){function a(h,c){if(!(h instanceof c))throw new TypeError("Cannot call a class as a function")}function e(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function h(c,g){for(var d=0;d<g.length;d++){var m=g[d];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(c,m.key,m)}}return function(c,g,d){return g&&h(c.prototype,g),d&&h(c,d),c}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function h(){a(this,h)}return o(h,[{key:"phone",value:function(){var c=e();return!(!i.test(c)&&!l.test(c.substr(0,4)))}},{key:"mobile",value:function(){var c=e();return!(!u.test(c)&&!p.test(c.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();r.default=new f},function(s,r){Object.defineProperty(r,"__esModule",{value:!0});var a=function(o,i,l){var u=o.node.getAttribute("data-aos-once");i>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&o.node.classList.remove("aos-animate")},e=function(o,i){var l=window.pageYOffset,u=window.innerHeight;o.forEach(function(p,f){a(p,u+l,i)})};r.default=e},function(s,r,a){function e(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=a(12),i=e(o),l=function(u,p){return u.forEach(function(f,h){f.node.classList.add("aos-init"),f.position=(0,i.default)(f.node,p.offset)}),u};r.default=l},function(s,r,a){function e(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=a(13),i=e(o),l=function(u,p){var f=0,h=0,c=window.innerHeight,g={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(h=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(u=document.querySelectorAll(g.anchor)[0]),f=(0,i.default)(u).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=u.offsetHeight/2;break;case"bottom-bottom":f+=u.offsetHeight;break;case"top-center":f+=c/2;break;case"bottom-center":f+=c/2+u.offsetHeight;break;case"center-center":f+=c/2+u.offsetHeight/2;break;case"top-top":f+=c;break;case"bottom-top":f+=u.offsetHeight+c;break;case"center-top":f+=u.offsetHeight/2+c}return g.anchorPlacement||g.offset||isNaN(p)||(h=p),f+h};r.default=l},function(s,r){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){for(var o=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)o+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),i+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:i,left:o}};r.default=a},function(s,r){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(o){return{node:o}})};r.default=a}])})}(sa)),sa.exports}var zf=Vf();const As=oo(zf);function Nt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function hp(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ft={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qs={duration:.5,overwrite:!1,delay:0},io,$n,Cn,kt=1e8,bn=1/kt,Cr=Math.PI*2,Uf=Cr/4,Wf=0,gp=Math.sqrt,Yf=Math.cos,Gf=Math.sin,qn=function(n){return typeof n=="string"},Mn=function(n){return typeof n=="function"},Kt=function(n){return typeof n=="number"},lo=function(n){return typeof n>"u"},qt=function(n){return typeof n=="object"},Zn=function(n){return n!==!1},po=function(){return typeof window<"u"},Xe=function(n){return Mn(n)||qn(n)},mp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Un=Array.isArray,Tr=/(?:-?\.?\d|\.)+/gi,kp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ar=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vp=/[+-]=-?[.\d]+/,xp=/[^,'"\[\]\s]+/gi,Kf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tn,Rt,Pr,co,ht={},xa={},bp,yp=function(n){return(xa=Js(n,ht))&&et},uo=function(n,s){return console.warn("Invalid property",n,"set to",s,"Missing plugin? gsap.registerPlugin()")},Le=function(n,s){return!s&&console.warn(n)},wp=function(n,s){return n&&(ht[n]=s)&&xa&&(xa[n]=s)||ht},Be=function(){return 0},Xf={suppressEvents:!0,isStart:!0,kill:!1},ea={suppressEvents:!0,kill:!1},Qf={suppressEvents:!0},fo={},is=[],Mr={},_p,ot={},rr={},Ti=30,aa=[],ho="",go=function(n){var s=n[0],r,a;if(qt(s)||Mn(s)||(n=[n]),!(r=(s._gsap||{}).harness)){for(a=aa.length;a--&&!aa[a].targetTest(s););r=aa[a]}for(a=n.length;a--;)n[a]&&(n[a]._gsap||(n[a]._gsap=new Yp(n[a],r)))||n.splice(a,1);return n},_s=function(n){return n._gsap||go(vt(n))[0]._gsap},Sp=function(n,s,r){return(r=n[s])&&Mn(r)?n[s]():lo(r)&&n.getAttribute&&n.getAttribute(s)||r},nt=function(n,s){return(n=n.split(",")).forEach(s)||n},An=function(n){return Math.round(n*1e5)/1e5||0},En=function(n){return Math.round(n*1e7)/1e7||0},Us=function(n,s){var r=s.charAt(0),a=parseFloat(s.substr(2));return n=parseFloat(n),r==="+"?n+a:r==="-"?n-a:r==="*"?n*a:n/a},Jf=function(n,s){for(var r=s.length,a=0;n.indexOf(s[a])<0&&++a<r;);return a<r},ba=function(){var n=is.length,s=is.slice(0),r,a;for(Mr={},is.length=0,r=0;r<n;r++)a=s[r],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},mo=function(n){return!!(n._initted||n._startAt||n.add)},Cp=function(n,s,r,a){is.length&&!$n&&ba(),n.render(s,r,!!($n&&s<0&&mo(n))),is.length&&!$n&&ba()},Tp=function(n){var s=parseFloat(n);return(s||s===0)&&(n+"").match(xp).length<2?s:qn(n)?n.trim():n},Pp=function(n){return n},gt=function(n,s){for(var r in s)r in n||(n[r]=s[r]);return n},Zf=function(n){return function(s,r){for(var a in r)a in s||a==="duration"&&n||a==="ease"||(s[a]=r[a])}},Js=function(n,s){for(var r in s)n[r]=s[r];return n},Pi=function t(n,s){for(var r in s)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(n[r]=qt(s[r])?t(n[r]||(n[r]={}),s[r]):s[r]);return n},ya=function(n,s){var r={},a;for(a in n)a in s||(r[a]=n[a]);return r},we=function(n){var s=n.parent||Tn,r=n.keyframes?Zf(Un(n.keyframes)):gt;if(Zn(n.inherit))for(;s;)r(n,s.vars.defaults),s=s.parent||s._dp;return n},nh=function(n,s){for(var r=n.length,a=r===s.length;a&&r--&&n[r]===s[r];);return r<0},Mp=function(n,s,r,a,e){var o=n[a],i;if(e)for(i=s[e];o&&o[e]>i;)o=o._prev;return o?(s._next=o._next,o._next=s):(s._next=n[r],n[r]=s),s._next?s._next._prev=s:n[a]=s,s._prev=o,s.parent=s._dp=n,s},ja=function(n,s,r,a){r===void 0&&(r="_first"),a===void 0&&(a="_last");var e=s._prev,o=s._next;e?e._next=o:n[r]===s&&(n[r]=o),o?o._prev=e:n[a]===s&&(n[a]=e),s._next=s._prev=s.parent=null},us=function(n,s){n.parent&&(!s||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},Ss=function(n,s){if(n&&(!s||s._end>n._dur||s._start<0))for(var r=n;r;)r._dirty=1,r=r.parent;return n},th=function(n){for(var s=n.parent;s&&s.parent;)s._dirty=1,s.totalDuration(),s=s.parent;return n},Ar=function(n,s,r,a){return n._startAt&&($n?n._startAt.revert(ea):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(s,!0,a))},sh=function t(n){return!n||n._ts&&t(n.parent)},Mi=function(n){return n._repeat?Zs(n._tTime,n=n.duration()+n._rDelay)*n:0},Zs=function(n,s){var r=Math.floor(n=En(n/s));return n&&r===n?r-1:r},wa=function(n,s){return(n-s._start)*s._ts+(s._ts>=0?0:s._dirty?s.totalDuration():s._tDur)},Va=function(n){return n._end=En(n._start+(n._tDur/Math.abs(n._ts||n._rts||bn)||0))},za=function(n,s){var r=n._dp;return r&&r.smoothChildTiming&&n._ts&&(n._start=En(r._time-(n._ts>0?s/n._ts:((n._dirty?n.totalDuration():n._tDur)-s)/-n._ts)),Va(n),r._dirty||Ss(r,n)),n},Ap=function(n,s){var r;if((s._time||!s._dur&&s._initted||s._start<n._time&&(s._dur||!s.add))&&(r=wa(n.rawTime(),s),(!s._dur||Ue(0,s.totalDuration(),r)-s._tTime>bn)&&s.render(r,!0)),Ss(n,s)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(r=n;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;n._zTime=-bn}},Ot=function(n,s,r,a){return s.parent&&us(s),s._start=En((Kt(r)?r:r||n!==Tn?mt(n,r,s):n._time)+s._delay),s._end=En(s._start+(s.totalDuration()/Math.abs(s.timeScale())||0)),Mp(n,s,"_first","_last",n._sort?"_start":0),Rr(s)||(n._recent=s),a||Ap(n,s),n._ts<0&&za(n,n._tTime),n},Rp=function(n,s){return(ht.ScrollTrigger||uo("scrollTrigger",s))&&ht.ScrollTrigger.create(s,n)},Ep=function(n,s,r,a,e){if(vo(n,s,e),!n._initted)return 1;if(!r&&n._pt&&!$n&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&_p!==it.frame)return is.push(n),n._lazy=[e,a],1},eh=function t(n){var s=n.parent;return s&&s._ts&&s._initted&&!s._lock&&(s.rawTime()<0||t(s))},Rr=function(n){var s=n.data;return s==="isFromStart"||s==="isStart"},ah=function(n,s,r,a){var e=n.ratio,o=s<0||!s&&(!n._start&&eh(n)&&!(!n._initted&&Rr(n))||(n._ts<0||n._dp._ts<0)&&!Rr(n))?0:1,i=n._rDelay,l=0,u,p,f;if(i&&n._repeat&&(l=Ue(0,n._tDur,s),p=Zs(l,i),n._yoyo&&p&1&&(o=1-o),p!==Zs(n._tTime,i)&&(e=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==e||$n||a||n._zTime===bn||!s&&n._zTime){if(!n._initted&&Ep(n,s,a,r,l))return;for(f=n._zTime,n._zTime=s||(r?bn:0),r||(r=s&&!f),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=l,u=n._pt;u;)u.r(o,u.d),u=u._next;s<0&&Ar(n,s,r,!0),n._onUpdate&&!r&&dt(n,"onUpdate"),l&&n._repeat&&!r&&n.parent&&dt(n,"onRepeat"),(s>=n._tDur||s<0)&&n.ratio===o&&(o&&us(n,1),!r&&!$n&&(dt(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=s)},rh=function(n,s,r){var a;if(r>s)for(a=n._first;a&&a._start<=r;){if(a.data==="isPause"&&a._start>s)return a;a=a._next}else for(a=n._last;a&&a._start>=r;){if(a.data==="isPause"&&a._start<s)return a;a=a._prev}},ne=function(n,s,r,a){var e=n._repeat,o=En(s)||0,i=n._tTime/n._tDur;return i&&!a&&(n._time*=o/n._dur),n._dur=o,n._tDur=e?e<0?1e10:En(o*(e+1)+n._rDelay*e):o,i>0&&!a&&za(n,n._tTime=n._tDur*i),n.parent&&Va(n),r||Ss(n.parent,n),n},Ai=function(n){return n instanceof Xn?Ss(n):ne(n,n._dur)},oh={_start:0,endTime:Be,totalDuration:Be},mt=function t(n,s,r){var a=n.labels,e=n._recent||oh,o=n.duration()>=kt?e.endTime(!1):n._dur,i,l,u;return qn(s)&&(isNaN(s)||s in a)?(l=s.charAt(0),u=s.substr(-1)==="%",i=s.indexOf("="),l==="<"||l===">"?(i>=0&&(s=s.replace(/=/,"")),(l==="<"?e._start:e.endTime(e._repeat>=0))+(parseFloat(s.substr(1))||0)*(u?(i<0?e:r).totalDuration()/100:1)):i<0?(s in a||(a[s]=o),a[s]):(l=parseFloat(s.charAt(i-1)+s.substr(i+1)),u&&r&&(l=l/100*(Un(r)?r[0]:r).totalDuration()),i>1?t(n,s.substr(0,i-1),r)+l:o+l)):s==null?o:+s},_e=function(n,s,r){var a=Kt(s[1]),e=(a?2:1)+(n<2?0:1),o=s[e],i,l;if(a&&(o.duration=s[1]),o.parent=r,n){for(i=o,l=r;l&&!("immediateRender"in i);)i=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(i.immediateRender),n<2?o.runBackwards=1:o.startAt=s[e-1]}return new Rn(s[0],o,s[e+1])},fs=function(n,s){return n||n===0?s(n):s},Ue=function(n,s,r){return r<n?n:r>s?s:r},Vn=function(n,s){return!qn(n)||!(s=Kf.exec(n))?"":s[1]},ih=function(n,s,r){return fs(r,function(a){return Ue(n,s,a)})},Er=[].slice,Op=function(n,s){return n&&qt(n)&&"length"in n&&(!s&&!n.length||n.length-1 in n&&qt(n[0]))&&!n.nodeType&&n!==Rt},lh=function(n,s,r){return r===void 0&&(r=[]),n.forEach(function(a){var e;return qn(a)&&!s||Op(a,1)?(e=r).push.apply(e,vt(a)):r.push(a)})||r},vt=function(n,s,r){return Cn&&!s&&Cn.selector?Cn.selector(n):qn(n)&&!r&&(Pr||!te())?Er.call((s||co).querySelectorAll(n),0):Un(n)?lh(n,r):Op(n)?Er.call(n,0):n?[n]:[]},Or=function(n){return n=vt(n)[0]||Le("Invalid scope")||{},function(s){var r=n.current||n.nativeElement||n;return vt(s,r.querySelectorAll?r:r===n?Le("Invalid scope")||co.createElement("div"):n)}},Ip=function(n){return n.sort(function(){return .5-Math.random()})},Dp=function(n){if(Mn(n))return n;var s=qt(n)?n:{each:n},r=Cs(s.ease),a=s.from||0,e=parseFloat(s.base)||0,o={},i=a>0&&a<1,l=isNaN(a)||i,u=s.axis,p=a,f=a;return qn(a)?p=f={center:.5,edges:.5,end:1}[a]||0:!i&&l&&(p=a[0],f=a[1]),function(h,c,g){var d=(g||s).length,m=o[d],v,x,w,S,k,y,_,b,C;if(!m){if(C=s.grid==="auto"?0:(s.grid||[1,kt])[1],!C){for(_=-kt;_<(_=g[C++].getBoundingClientRect().left)&&C<d;);C<d&&C--}for(m=o[d]=[],v=l?Math.min(C,d)*p-.5:a%C,x=C===kt?0:l?d*f/C-.5:a/C|0,_=0,b=kt,y=0;y<d;y++)w=y%C-v,S=x-(y/C|0),m[y]=k=u?Math.abs(u==="y"?S:w):gp(w*w+S*S),k>_&&(_=k),k<b&&(b=k);a==="random"&&Ip(m),m.max=_-b,m.min=b,m.v=d=(parseFloat(s.amount)||parseFloat(s.each)*(C>d?d-1:u?u==="y"?d/C:C:Math.max(C,d/C))||0)*(a==="edges"?-1:1),m.b=d<0?e-d:e,m.u=Vn(s.amount||s.each)||0,r=r&&d<0?zp(r):r}return d=(m[h]-m.min)/m.max||0,En(m.b+(r?r(d):d)*m.v)+m.u}},Ir=function(n){var s=Math.pow(10,((n+"").split(".")[1]||"").length);return function(r){var a=En(Math.round(parseFloat(r)/n)*n*s);return(a-a%1)/s+(Kt(r)?0:Vn(r))}},Lp=function(n,s){var r=Un(n),a,e;return!r&&qt(n)&&(a=r=n.radius||kt,n.values?(n=vt(n.values),(e=!Kt(n[0]))&&(a*=a)):n=Ir(n.increment)),fs(s,r?Mn(n)?function(o){return e=n(o),Math.abs(e-o)<=a?e:o}:function(o){for(var i=parseFloat(e?o.x:o),l=parseFloat(e?o.y:0),u=kt,p=0,f=n.length,h,c;f--;)e?(h=n[f].x-i,c=n[f].y-l,h=h*h+c*c):h=Math.abs(n[f]-i),h<u&&(u=h,p=f);return p=!a||u<=a?n[p]:o,e||p===o||Kt(o)?p:p+Vn(o)}:Ir(n))},Bp=function(n,s,r,a){return fs(Un(n)?!s:r===!0?!!(r=0):!a,function(){return Un(n)?n[~~(Math.random()*n.length)]:(r=r||1e-5)&&(a=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((n-r/2+Math.random()*(s-n+r*.99))/r)*r*a)/a})},ph=function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return function(a){return s.reduce(function(e,o){return o(e)},a)}},ch=function(n,s){return function(r){return n(parseFloat(r))+(s||Vn(r))}},uh=function(n,s,r){return Fp(n,s,0,1,r)},qp=function(n,s,r){return fs(r,function(a){return n[~~s(a)]})},dh=function t(n,s,r){var a=s-n;return Un(n)?qp(n,t(0,n.length),s):fs(r,function(e){return(a+(e-n)%a)%a+n})},fh=function t(n,s,r){var a=s-n,e=a*2;return Un(n)?qp(n,t(0,n.length-1),s):fs(r,function(o){return o=(e+(o-n)%e)%e||0,n+(o>a?e-o:o)})},qe=function(n){for(var s=0,r="",a,e,o,i;~(a=n.indexOf("random(",s));)o=n.indexOf(")",a),i=n.charAt(a+7)==="[",e=n.substr(a+7,o-a-7).match(i?xp:Tr),r+=n.substr(s,a-s)+Bp(i?e:+e[0],i?0:+e[1],+e[2]||1e-5),s=o+1;return r+n.substr(s,n.length-s)},Fp=function(n,s,r,a,e){var o=s-n,i=a-r;return fs(e,function(l){return r+((l-n)/o*i||0)})},hh=function t(n,s,r,a){var e=isNaN(n+s)?0:function(c){return(1-c)*n+c*s};if(!e){var o=qn(n),i={},l,u,p,f,h;if(r===!0&&(a=1)&&(r=null),o)n={p:n},s={p:s};else if(Un(n)&&!Un(s)){for(p=[],f=n.length,h=f-2,u=1;u<f;u++)p.push(t(n[u-1],n[u]));f--,e=function(g){g*=f;var d=Math.min(h,~~g);return p[d](g-d)},r=s}else a||(n=Js(Un(n)?[]:{},n));if(!p){for(l in s)ko.call(i,n,l,"get",s[l]);e=function(g){return yo(g,i)||(o?n.p:n)}}}return fs(r,e)},Ri=function(n,s,r){var a=n.labels,e=kt,o,i,l;for(o in a)i=a[o]-s,i<0==!!r&&i&&e>(i=Math.abs(i))&&(l=o,e=i);return l},dt=function(n,s,r){var a=n.vars,e=a[s],o=Cn,i=n._ctx,l,u,p;if(e)return l=a[s+"Params"],u=a.callbackScope||n,r&&is.length&&ba(),i&&(Cn=i),p=l?e.apply(u,l):e.call(u),Cn=o,p},ue=function(n){return us(n),n.scrollTrigger&&n.scrollTrigger.kill(!!$n),n.progress()<1&&dt(n,"onInterrupt"),n},qs,Hp=[],$p=function(n){if(n)if(n=!n.name&&n.default||n,po()||n.headless){var s=n.name,r=Mn(n),a=s&&!r&&n.init?function(){this._props=[]}:n,e={init:Be,render:yo,add:ko,kill:Rh,modifier:Ah,rawVars:0},o={targetTest:0,get:0,getSetter:bo,aliases:{},register:0};if(te(),n!==a){if(ot[s])return;gt(a,gt(ya(n,e),o)),Js(a.prototype,Js(e,ya(n,o))),ot[a.prop=s]=a,n.targetTest&&(aa.push(a),fo[s]=1),s=(s==="css"?"CSS":s.charAt(0).toUpperCase()+s.substr(1))+"Plugin"}wp(s,a),n.register&&n.register(et,a,tt)}else Hp.push(n)},xn=255,de={aqua:[0,xn,xn],lime:[0,xn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xn],navy:[0,0,128],white:[xn,xn,xn],olive:[128,128,0],yellow:[xn,xn,0],orange:[xn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xn,0,0],pink:[xn,192,203],cyan:[0,xn,xn],transparent:[xn,xn,xn,0]},or=function(n,s,r){return n+=n<0?1:n>1?-1:0,(n*6<1?s+(r-s)*n*6:n<.5?r:n*3<2?s+(r-s)*(2/3-n)*6:s)*xn+.5|0},Np=function(n,s,r){var a=n?Kt(n)?[n>>16,n>>8&xn,n&xn]:0:de.black,e,o,i,l,u,p,f,h,c,g;if(!a){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),de[n])a=de[n];else if(n.charAt(0)==="#"){if(n.length<6&&(e=n.charAt(1),o=n.charAt(2),i=n.charAt(3),n="#"+e+e+o+o+i+i+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return a=parseInt(n.substr(1,6),16),[a>>16,a>>8&xn,a&xn,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),a=[n>>16,n>>8&xn,n&xn]}else if(n.substr(0,3)==="hsl"){if(a=g=n.match(Tr),!s)l=+a[0]%360/360,u=+a[1]/100,p=+a[2]/100,o=p<=.5?p*(u+1):p+u-p*u,e=p*2-o,a.length>3&&(a[3]*=1),a[0]=or(l+1/3,e,o),a[1]=or(l,e,o),a[2]=or(l-1/3,e,o);else if(~n.indexOf("="))return a=n.match(kp),r&&a.length<4&&(a[3]=1),a}else a=n.match(Tr)||de.transparent;a=a.map(Number)}return s&&!g&&(e=a[0]/xn,o=a[1]/xn,i=a[2]/xn,f=Math.max(e,o,i),h=Math.min(e,o,i),p=(f+h)/2,f===h?l=u=0:(c=f-h,u=p>.5?c/(2-f-h):c/(f+h),l=f===e?(o-i)/c+(o<i?6:0):f===o?(i-e)/c+2:(e-o)/c+4,l*=60),a[0]=~~(l+.5),a[1]=~~(u*100+.5),a[2]=~~(p*100+.5)),r&&a.length<4&&(a[3]=1),a},jp=function(n){var s=[],r=[],a=-1;return n.split(ls).forEach(function(e){var o=e.match(Bs)||[];s.push.apply(s,o),r.push(a+=o.length+1)}),s.c=r,s},Ei=function(n,s,r){var a="",e=(n+a).match(ls),o=s?"hsla(":"rgba(",i=0,l,u,p,f;if(!e)return n;if(e=e.map(function(h){return(h=Np(h,s,1))&&o+(s?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),r&&(p=jp(n),l=r.c,l.join(a)!==p.c.join(a)))for(u=n.replace(ls,"1").split(Bs),f=u.length-1;i<f;i++)a+=u[i]+(~l.indexOf(i)?e.shift()||o+"0,0,0,0)":(p.length?p:e.length?e:r).shift());if(!u)for(u=n.split(ls),f=u.length-1;i<f;i++)a+=u[i]+e[i];return a+u[f]},ls=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in de)t+="|"+n+"\\b";return new RegExp(t+")","gi")}(),gh=/hsl[a]?\(/,Vp=function(n){var s=n.join(" "),r;if(ls.lastIndex=0,ls.test(s))return r=gh.test(s),n[1]=Ei(n[1],r),n[0]=Ei(n[0],r,jp(n[1])),!0},Fe,it=function(){var t=Date.now,n=500,s=33,r=t(),a=r,e=1e3/240,o=e,i=[],l,u,p,f,h,c,g=function d(m){var v=t()-a,x=m===!0,w,S,k,y;if((v>n||v<0)&&(r+=v-s),a+=v,k=a-r,w=k-o,(w>0||x)&&(y=++f.frame,h=k-f.time*1e3,f.time=k=k/1e3,o+=w+(w>=e?4:e-w),S=1),x||(l=u(d)),S)for(c=0;c<i.length;c++)i[c](k,h,y,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){bp&&(!Pr&&po()&&(Rt=Pr=window,co=Rt.document||{},ht.gsap=et,(Rt.gsapVersions||(Rt.gsapVersions=[])).push(et.version),yp(xa||Rt.GreenSockGlobals||!Rt.gsap&&Rt||{}),Hp.forEach($p)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=p||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Fe=1,g(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(l),Fe=0,u=Be},lagSmoothing:function(m,v){n=m||1/0,s=Math.min(v||33,n)},fps:function(m){e=1e3/(m||240),o=f.time*1e3+e},add:function(m,v,x){var w=v?function(S,k,y,_){m(S,k,y,_),f.remove(w)}:m;return f.remove(m),i[x?"unshift":"push"](w),te(),w},remove:function(m,v){~(v=i.indexOf(m))&&i.splice(v,1)&&c>=v&&c--},_listeners:i},f}(),te=function(){return!Fe&&it.wake()},fn={},mh=/^[\d.\-M][\d.\-,\s]/,kh=/["']/g,vh=function(n){for(var s={},r=n.substr(1,n.length-3).split(":"),a=r[0],e=1,o=r.length,i,l,u;e<o;e++)l=r[e],i=e!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,i),s[a]=isNaN(u)?u.replace(kh,"").trim():+u,a=l.substr(i+1).trim();return s},xh=function(n){var s=n.indexOf("(")+1,r=n.indexOf(")"),a=n.indexOf("(",s);return n.substring(s,~a&&a<r?n.indexOf(")",r+1):r)},bh=function(n){var s=(n+"").split("("),r=fn[s[0]];return r&&s.length>1&&r.config?r.config.apply(null,~n.indexOf("{")?[vh(s[1])]:xh(n).split(",").map(Tp)):fn._CE&&mh.test(n)?fn._CE("",n):r},zp=function(n){return function(s){return 1-n(1-s)}},Up=function t(n,s){for(var r=n._first,a;r;)r instanceof Xn?t(r,s):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==s&&(r.timeline?t(r.timeline,s):(a=r._ease,r._ease=r._yEase,r._yEase=a,r._yoyo=s)),r=r._next},Cs=function(n,s){return n&&(Mn(n)?n:fn[n]||bh(n))||s},Rs=function(n,s,r,a){r===void 0&&(r=function(l){return 1-s(1-l)}),a===void 0&&(a=function(l){return l<.5?s(l*2)/2:1-s((1-l)*2)/2});var e={easeIn:s,easeOut:r,easeInOut:a},o;return nt(n,function(i){fn[i]=ht[i]=e,fn[o=i.toLowerCase()]=r;for(var l in e)fn[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=fn[i+"."+l]=e[l]}),e},Wp=function(n){return function(s){return s<.5?(1-n(1-s*2))/2:.5+n((s-.5)*2)/2}},ir=function t(n,s,r){var a=s>=1?s:1,e=(r||(n?.3:.45))/(s<1?s:1),o=e/Cr*(Math.asin(1/a)||0),i=function(p){return p===1?1:a*Math.pow(2,-10*p)*Gf((p-o)*e)+1},l=n==="out"?i:n==="in"?function(u){return 1-i(1-u)}:Wp(i);return e=Cr/e,l.config=function(u,p){return t(n,u,p)},l},lr=function t(n,s){s===void 0&&(s=1.70158);var r=function(o){return o?--o*o*((s+1)*o+s)+1:0},a=n==="out"?r:n==="in"?function(e){return 1-r(1-e)}:Wp(r);return a.config=function(e){return t(n,e)},a};nt("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,n){var s=n<5?n+1:n;Rs(t+",Power"+(s-1),n?function(r){return Math.pow(r,s)}:function(r){return r},function(r){return 1-Math.pow(1-r,s)},function(r){return r<.5?Math.pow(r*2,s)/2:1-Math.pow((1-r)*2,s)/2})});fn.Linear.easeNone=fn.none=fn.Linear.easeIn;Rs("Elastic",ir("in"),ir("out"),ir());(function(t,n){var s=1/n,r=2*s,a=2.5*s,e=function(i){return i<s?t*i*i:i<r?t*Math.pow(i-1.5/n,2)+.75:i<a?t*(i-=2.25/n)*i+.9375:t*Math.pow(i-2.625/n,2)+.984375};Rs("Bounce",function(o){return 1-e(1-o)},e)})(7.5625,2.75);Rs("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Rs("Circ",function(t){return-(gp(1-t*t)-1)});Rs("Sine",function(t){return t===1?1:-Yf(t*Uf)+1});Rs("Back",lr("in"),lr("out"),lr());fn.SteppedEase=fn.steps=ht.SteppedEase={config:function(n,s){n===void 0&&(n=1);var r=1/n,a=n+(s?0:1),e=s?1:0,o=1-bn;return function(i){return((a*Ue(0,o,i)|0)+e)*r}}};Qs.ease=fn["quad.out"];nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ho+=t+","+t+"Params,"});var Yp=function(n,s){this.id=Wf++,n._gsap=this,this.target=n,this.harness=s,this.get=s?s.get:Sp,this.set=s?s.getSetter:bo},He=function(){function t(s){this.vars=s,this._delay=+s.delay||0,(this._repeat=s.repeat===1/0?-2:s.repeat||0)&&(this._rDelay=s.repeatDelay||0,this._yoyo=!!s.yoyo||!!s.yoyoEase),this._ts=1,ne(this,+s.duration,1,1),this.data=s.data,Cn&&(this._ctx=Cn,Cn.data.push(this)),Fe||it.wake()}var n=t.prototype;return n.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},n.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},n.totalDuration=function(r){return arguments.length?(this._dirty=0,ne(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(r,a){if(te(),!arguments.length)return this._tTime;var e=this._dp;if(e&&e.smoothChildTiming&&this._ts){for(za(this,r),!e._dp||e.parent||Ap(e,this);e&&e.parent;)e.parent._time!==e._start+(e._ts>=0?e._tTime/e._ts:(e.totalDuration()-e._tTime)/-e._ts)&&e.totalTime(e._tTime,!0),e=e.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Ot(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===bn||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Cp(this,r,a)),this},n.time=function(r,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Mi(this))%(this._dur+this._rDelay)||(r?this._dur:0),a):this._time},n.totalProgress=function(r,a){return arguments.length?this.totalTime(this.totalDuration()*r,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(r,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Mi(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(r,a){var e=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*e,a):this._repeat?Zs(this._tTime,e)+1:1},n.timeScale=function(r,a){if(!arguments.length)return this._rts===-bn?0:this._rts;if(this._rts===r)return this;var e=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-bn?0:this._rts,this.totalTime(Ue(-Math.abs(this._delay),this.totalDuration(),e),a!==!1),Va(this),th(this)},n.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(te(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bn&&(this._tTime-=bn)))),this):this._ps},n.startTime=function(r){if(arguments.length){this._start=r;var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Ot(a,this,r-this._delay),this}return this._start},n.endTime=function(r){return this._start+(Zn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(r){var a=this.parent||this._dp;return a?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(a.rawTime(r),this):this._tTime:this._tTime},n.revert=function(r){r===void 0&&(r=Qf);var a=$n;return $n=r,mo(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),$n=a,this},n.globalTime=function(r){for(var a=this,e=arguments.length?r:a.rawTime();a;)e=a._start+e/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(r):e},n.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,Ai(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(r){if(arguments.length){var a=this._time;return this._rDelay=r,Ai(this),a?this.time(a):this}return this._rDelay},n.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},n.seek=function(r,a){return this.totalTime(mt(this,r),Zn(a))},n.restart=function(r,a){return this.play().totalTime(r?-this._delay:0,Zn(a)),this._dur||(this._zTime=-bn),this},n.play=function(r,a){return r!=null&&this.seek(r,a),this.reversed(!1).paused(!1)},n.reverse=function(r,a){return r!=null&&this.seek(r||this.totalDuration(),a),this.reversed(!0).paused(!1)},n.pause=function(r,a){return r!=null&&this.seek(r,a),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-bn:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-bn,this},n.isActive=function(){var r=this.parent||this._dp,a=this._start,e;return!!(!r||this._ts&&this._initted&&r.isActive()&&(e=r.rawTime(!0))>=a&&e<this.endTime(!0)-bn)},n.eventCallback=function(r,a,e){var o=this.vars;return arguments.length>1?(a?(o[r]=a,e&&(o[r+"Params"]=e),r==="onUpdate"&&(this._onUpdate=a)):delete o[r],this):o[r]},n.then=function(r){var a=this;return new Promise(function(e){var o=Mn(r)?r:Pp,i=function(){var u=a.then;a.then=null,Mn(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=u),e(o),a.then=u};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?i():a._prom=i})},n.kill=function(){ue(this)},t}();gt(He.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bn,_prom:0,_ps:!1,_rts:1});var Xn=function(t){hp(n,t);function n(r,a){var e;return r===void 0&&(r={}),e=t.call(this,r)||this,e.labels={},e.smoothChildTiming=!!r.smoothChildTiming,e.autoRemoveChildren=!!r.autoRemoveChildren,e._sort=Zn(r.sortChildren),Tn&&Ot(r.parent||Tn,Nt(e),a),r.reversed&&e.reverse(),r.paused&&e.paused(!0),r.scrollTrigger&&Rp(Nt(e),r.scrollTrigger),e}var s=n.prototype;return s.to=function(a,e,o){return _e(0,arguments,this),this},s.from=function(a,e,o){return _e(1,arguments,this),this},s.fromTo=function(a,e,o,i){return _e(2,arguments,this),this},s.set=function(a,e,o){return e.duration=0,e.parent=this,we(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Rn(a,e,mt(this,o),1),this},s.call=function(a,e,o){return Ot(this,Rn.delayedCall(0,a,e),o)},s.staggerTo=function(a,e,o,i,l,u,p){return o.duration=e,o.stagger=o.stagger||i,o.onComplete=u,o.onCompleteParams=p,o.parent=this,new Rn(a,o,mt(this,l)),this},s.staggerFrom=function(a,e,o,i,l,u,p){return o.runBackwards=1,we(o).immediateRender=Zn(o.immediateRender),this.staggerTo(a,e,o,i,l,u,p)},s.staggerFromTo=function(a,e,o,i,l,u,p,f){return i.startAt=o,we(i).immediateRender=Zn(i.immediateRender),this.staggerTo(a,e,i,l,u,p,f)},s.render=function(a,e,o){var i=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,p=a<=0?0:En(a),f=this._zTime<0!=a<0&&(this._initted||!u),h,c,g,d,m,v,x,w,S,k,y,_;if(this!==Tn&&p>l&&a>=0&&(p=l),p!==this._tTime||o||f){if(i!==this._time&&u&&(p+=this._time-i,a+=this._time-i),h=p,S=this._start,w=this._ts,v=!w,f&&(u||(i=this._zTime),(a||!e)&&(this._zTime=a)),this._repeat){if(y=this._yoyo,m=u+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(m*100+a,e,o);if(h=En(p%m),p===l?(d=this._repeat,h=u):(k=En(p/m),d=~~k,d&&d===k&&(h=u,d--),h>u&&(h=u)),k=Zs(this._tTime,m),!i&&this._tTime&&k!==d&&this._tTime-k*m-this._dur<=0&&(k=d),y&&d&1&&(h=u-h,_=1),d!==k&&!this._lock){var b=y&&k&1,C=b===(y&&d&1);if(d<k&&(b=!b),i=b?0:p%u?u:p,this._lock=1,this.render(i||(_?0:En(d*m)),e,!u)._lock=0,this._tTime=p,!e&&this.parent&&dt(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1),i&&i!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,C&&(this._lock=2,i=b?u:-1e-4,this.render(i,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Up(this,_)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=rh(this,En(i),En(h)),x&&(p-=h-(h=x._start))),this._tTime=p,this._time=h,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,i=0),!i&&p&&!e&&!k&&(dt(this,"onStart"),this._tTime!==p))return this;if(h>=i&&a>=0)for(c=this._first;c;){if(g=c._next,(c._act||h>=c._start)&&c._ts&&x!==c){if(c.parent!==this)return this.render(a,e,o);if(c.render(c._ts>0?(h-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(h-c._start)*c._ts,e,o),h!==this._time||!this._ts&&!v){x=0,g&&(p+=this._zTime=-bn);break}}c=g}else{c=this._last;for(var P=a<0?a:h;c;){if(g=c._prev,(c._act||P<=c._end)&&c._ts&&x!==c){if(c.parent!==this)return this.render(a,e,o);if(c.render(c._ts>0?(P-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(P-c._start)*c._ts,e,o||$n&&mo(c)),h!==this._time||!this._ts&&!v){x=0,g&&(p+=this._zTime=P?-bn:bn);break}}c=g}}if(x&&!e&&(this.pause(),x.render(h>=i?0:-bn)._zTime=h>=i?1:-1,this._ts))return this._start=S,Va(this),this.render(a,e,o);this._onUpdate&&!e&&dt(this,"onUpdate",!0),(p===l&&this._tTime>=this.totalDuration()||!p&&i)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((a||!u)&&(p===l&&this._ts>0||!p&&this._ts<0)&&us(this,1),!e&&!(a<0&&!i)&&(p||i||!l)&&(dt(this,p===l&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom())))}return this},s.add=function(a,e){var o=this;if(Kt(e)||(e=mt(this,e,a)),!(a instanceof He)){if(Un(a))return a.forEach(function(i){return o.add(i,e)}),this;if(qn(a))return this.addLabel(a,e);if(Mn(a))a=Rn.delayedCall(0,a);else return this}return this!==a?Ot(this,a,e):this},s.getChildren=function(a,e,o,i){a===void 0&&(a=!0),e===void 0&&(e=!0),o===void 0&&(o=!0),i===void 0&&(i=-kt);for(var l=[],u=this._first;u;)u._start>=i&&(u instanceof Rn?e&&l.push(u):(o&&l.push(u),a&&l.push.apply(l,u.getChildren(!0,e,o)))),u=u._next;return l},s.getById=function(a){for(var e=this.getChildren(1,1,1),o=e.length;o--;)if(e[o].vars.id===a)return e[o]},s.remove=function(a){return qn(a)?this.removeLabel(a):Mn(a)?this.killTweensOf(a):(a.parent===this&&ja(this,a),a===this._recent&&(this._recent=this._last),Ss(this))},s.totalTime=function(a,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=En(it.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),t.prototype.totalTime.call(this,a,e),this._forcing=0,this):this._tTime},s.addLabel=function(a,e){return this.labels[a]=mt(this,e),this},s.removeLabel=function(a){return delete this.labels[a],this},s.addPause=function(a,e,o){var i=Rn.delayedCall(0,e||Be,o);return i.data="isPause",this._hasPause=1,Ot(this,i,mt(this,a))},s.removePause=function(a){var e=this._first;for(a=mt(this,a);e;)e._start===a&&e.data==="isPause"&&us(e),e=e._next},s.killTweensOf=function(a,e,o){for(var i=this.getTweensOf(a,o),l=i.length;l--;)es!==i[l]&&i[l].kill(a,e);return this},s.getTweensOf=function(a,e){for(var o=[],i=vt(a),l=this._first,u=Kt(e),p;l;)l instanceof Rn?Jf(l._targets,i)&&(u?(!es||l._initted&&l._ts)&&l.globalTime(0)<=e&&l.globalTime(l.totalDuration())>e:!e||l.isActive())&&o.push(l):(p=l.getTweensOf(i,e)).length&&o.push.apply(o,p),l=l._next;return o},s.tweenTo=function(a,e){e=e||{};var o=this,i=mt(o,a),l=e,u=l.startAt,p=l.onStart,f=l.onStartParams,h=l.immediateRender,c,g=Rn.to(o,gt({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(u&&"time"in u?u.time:o._time))/o.timeScale())||bn,onStart:function(){if(o.pause(),!c){var m=e.duration||Math.abs((i-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&ne(g,m,0,1).render(g._time,!0,!0),c=1}p&&p.apply(g,f||[])}},e));return h?g.render(0):g},s.tweenFromTo=function(a,e,o){return this.tweenTo(e,gt({startAt:{time:mt(this,a)}},o))},s.recent=function(){return this._recent},s.nextLabel=function(a){return a===void 0&&(a=this._time),Ri(this,mt(this,a))},s.previousLabel=function(a){return a===void 0&&(a=this._time),Ri(this,mt(this,a),1)},s.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+bn)},s.shiftChildren=function(a,e,o){o===void 0&&(o=0);for(var i=this._first,l=this.labels,u;i;)i._start>=o&&(i._start+=a,i._end+=a),i=i._next;if(e)for(u in l)l[u]>=o&&(l[u]+=a);return Ss(this)},s.invalidate=function(a){var e=this._first;for(this._lock=0;e;)e.invalidate(a),e=e._next;return t.prototype.invalidate.call(this,a)},s.clear=function(a){a===void 0&&(a=!0);for(var e=this._first,o;e;)o=e._next,this.remove(e),e=o;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Ss(this)},s.totalDuration=function(a){var e=0,o=this,i=o._last,l=kt,u,p,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-a:a));if(o._dirty){for(f=o.parent;i;)u=i._prev,i._dirty&&i.totalDuration(),p=i._start,p>l&&o._sort&&i._ts&&!o._lock?(o._lock=1,Ot(o,i,p-i._delay,1)._lock=0):l=p,p<0&&i._ts&&(e-=p,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=p/o._ts,o._time-=p,o._tTime-=p),o.shiftChildren(-p,!1,-1/0),l=0),i._end>e&&i._ts&&(e=i._end),i=u;ne(o,o===Tn&&o._time>e?o._time:e,1,1),o._dirty=0}return o._tDur},n.updateRoot=function(a){if(Tn._ts&&(Cp(Tn,wa(a,Tn)),_p=it.frame),it.frame>=Ti){Ti+=ft.autoSleep||120;var e=Tn._first;if((!e||!e._ts)&&ft.autoSleep&&it._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||it.sleep()}}},n}(He);gt(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var yh=function(n,s,r,a,e,o,i){var l=new tt(this._pt,n,s,0,1,Zp,null,e),u=0,p=0,f,h,c,g,d,m,v,x;for(l.b=r,l.e=a,r+="",a+="",(v=~a.indexOf("random("))&&(a=qe(a)),o&&(x=[r,a],o(x,n,s),r=x[0],a=x[1]),h=r.match(ar)||[];f=ar.exec(a);)g=f[0],d=a.substring(u,f.index),c?c=(c+1)%5:d.substr(-5)==="rgba("&&(c=1),g!==h[p++]&&(m=parseFloat(h[p-1])||0,l._pt={_next:l._pt,p:d||p===1?d:",",s:m,c:g.charAt(1)==="="?Us(m,g)-m:parseFloat(g)-m,m:c&&c<4?Math.round:0},u=ar.lastIndex);return l.c=u<a.length?a.substring(u,a.length):"",l.fp=i,(vp.test(a)||v)&&(l.e=0),this._pt=l,l},ko=function(n,s,r,a,e,o,i,l,u,p){Mn(a)&&(a=a(e||0,n,o));var f=n[s],h=r!=="get"?r:Mn(f)?u?n[s.indexOf("set")||!Mn(n["get"+s.substr(3)])?s:"get"+s.substr(3)](u):n[s]():f,c=Mn(f)?u?Th:Qp:xo,g;if(qn(a)&&(~a.indexOf("random(")&&(a=qe(a)),a.charAt(1)==="="&&(g=Us(h,a)+(Vn(h)||0),(g||g===0)&&(a=g))),!p||h!==a||Dr)return!isNaN(h*a)&&a!==""?(g=new tt(this._pt,n,s,+h||0,a-(h||0),typeof f=="boolean"?Mh:Jp,0,c),u&&(g.fp=u),i&&g.modifier(i,this,n),this._pt=g):(!f&&!(s in n)&&uo(s,a),yh.call(this,n,s,h,a,c,l||ft.stringFilter,u))},wh=function(n,s,r,a,e){if(Mn(n)&&(n=Se(n,e,s,r,a)),!qt(n)||n.style&&n.nodeType||Un(n)||mp(n))return qn(n)?Se(n,e,s,r,a):n;var o={},i;for(i in n)o[i]=Se(n[i],e,s,r,a);return o},Gp=function(n,s,r,a,e,o){var i,l,u,p;if(ot[n]&&(i=new ot[n]).init(e,i.rawVars?s[n]:wh(s[n],a,e,o,r),r,a,o)!==!1&&(r._pt=l=new tt(r._pt,e,n,0,1,i.render,i,0,i.priority),r!==qs))for(u=r._ptLookup[r._targets.indexOf(e)],p=i._props.length;p--;)u[i._props[p]]=l;return i},es,Dr,vo=function t(n,s,r){var a=n.vars,e=a.ease,o=a.startAt,i=a.immediateRender,l=a.lazy,u=a.onUpdate,p=a.runBackwards,f=a.yoyoEase,h=a.keyframes,c=a.autoRevert,g=n._dur,d=n._startAt,m=n._targets,v=n.parent,x=v&&v.data==="nested"?v.vars.targets:m,w=n._overwrite==="auto"&&!io,S=n.timeline,k,y,_,b,C,P,M,T,O,I,B,N,q;if(S&&(!h||!e)&&(e="none"),n._ease=Cs(e,Qs.ease),n._yEase=f?zp(Cs(f===!0?e:f,Qs.ease)):0,f&&n._yoyo&&!n._repeat&&(f=n._yEase,n._yEase=n._ease,n._ease=f),n._from=!S&&!!a.runBackwards,!S||h&&!a.stagger){if(T=m[0]?_s(m[0]).harness:0,N=T&&a[T.prop],k=ya(a,fo),d&&(d._zTime<0&&d.progress(1),s<0&&p&&i&&!c?d.render(-1,!0):d.revert(p&&g?ea:Xf),d._lazy=0),o){if(us(n._startAt=Rn.set(m,gt({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&Zn(l),startAt:null,delay:0,onUpdate:u&&function(){return dt(n,"onUpdate")},stagger:0},o))),n._startAt._dp=0,n._startAt._sat=n,s<0&&($n||!i&&!c)&&n._startAt.revert(ea),i&&g&&s<=0&&r<=0){s&&(n._zTime=s);return}}else if(p&&g&&!d){if(s&&(i=!1),_=gt({overwrite:!1,data:"isFromStart",lazy:i&&!d&&Zn(l),immediateRender:i,stagger:0,parent:v},k),N&&(_[T.prop]=N),us(n._startAt=Rn.set(m,_)),n._startAt._dp=0,n._startAt._sat=n,s<0&&($n?n._startAt.revert(ea):n._startAt.render(-1,!0)),n._zTime=s,!i)t(n._startAt,bn,bn);else if(!s)return}for(n._pt=n._ptCache=0,l=g&&Zn(l)||l&&!g,y=0;y<m.length;y++){if(C=m[y],M=C._gsap||go(m)[y]._gsap,n._ptLookup[y]=I={},Mr[M.id]&&is.length&&ba(),B=x===m?y:x.indexOf(C),T&&(O=new T).init(C,N||k,n,B,x)!==!1&&(n._pt=b=new tt(n._pt,C,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(U){I[U]=b}),O.priority&&(P=1)),!T||N)for(_ in k)ot[_]&&(O=Gp(_,k,n,B,C,x))?O.priority&&(P=1):I[_]=b=ko.call(n,C,_,"get",k[_],B,x,0,a.stringFilter);n._op&&n._op[y]&&n.kill(C,n._op[y]),w&&n._pt&&(es=n,Tn.killTweensOf(C,I,n.globalTime(s)),q=!n.parent,es=0),n._pt&&l&&(Mr[M.id]=1)}P&&nc(n),n._onInit&&n._onInit(n)}n._onUpdate=u,n._initted=(!n._op||n._pt)&&!q,h&&s<=0&&S.render(kt,!0,!0)},_h=function(n,s,r,a,e,o,i,l){var u=(n._pt&&n._ptCache||(n._ptCache={}))[s],p,f,h,c;if(!u)for(u=n._ptCache[s]=[],h=n._ptLookup,c=n._targets.length;c--;){if(p=h[c][s],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==s&&p.fp!==s;)p=p._next;if(!p)return Dr=1,n.vars[s]="+=0",vo(n,i),Dr=0,l?Le(s+" not eligible for reset"):1;u.push(p)}for(c=u.length;c--;)f=u[c],p=f._pt||f,p.s=(a||a===0)&&!e?a:p.s+(a||0)+o*p.c,p.c=r-p.s,f.e&&(f.e=An(r)+Vn(f.e)),f.b&&(f.b=p.s+Vn(f.b))},Sh=function(n,s){var r=n[0]?_s(n[0]).harness:0,a=r&&r.aliases,e,o,i,l;if(!a)return s;e=Js({},s);for(o in a)if(o in e)for(l=a[o].split(","),i=l.length;i--;)e[l[i]]=e[o];return e},Ch=function(n,s,r,a){var e=s.ease||a||"power1.inOut",o,i;if(Un(s))i=r[n]||(r[n]=[]),s.forEach(function(l,u){return i.push({t:u/(s.length-1)*100,v:l,e})});else for(o in s)i=r[o]||(r[o]=[]),o==="ease"||i.push({t:parseFloat(n),v:s[o],e})},Se=function(n,s,r,a,e){return Mn(n)?n.call(s,r,a,e):qn(n)&&~n.indexOf("random(")?qe(n):n},Kp=ho+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Xp={};nt(Kp+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Xp[t]=1});var Rn=function(t){hp(n,t);function n(r,a,e,o){var i;typeof a=="number"&&(e.duration=a,a=e,e=null),i=t.call(this,o?a:we(a))||this;var l=i.vars,u=l.duration,p=l.delay,f=l.immediateRender,h=l.stagger,c=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,v=l.yoyoEase,x=a.parent||Tn,w=(Un(r)||mp(r)?Kt(r[0]):"length"in a)?[r]:vt(r),S,k,y,_,b,C,P,M;if(i._targets=w.length?go(w):Le("GSAP target "+r+" not found. https://gsap.com",!ft.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=c,g||h||Xe(u)||Xe(p)){if(a=i.vars,S=i.timeline=new Xn({data:"nested",defaults:d||{},targets:x&&x.data==="nested"?x.vars.targets:w}),S.kill(),S.parent=S._dp=Nt(i),S._start=0,h||Xe(u)||Xe(p)){if(_=w.length,P=h&&Dp(h),qt(h))for(b in h)~Kp.indexOf(b)&&(M||(M={}),M[b]=h[b]);for(k=0;k<_;k++)y=ya(a,Xp),y.stagger=0,v&&(y.yoyoEase=v),M&&Js(y,M),C=w[k],y.duration=+Se(u,Nt(i),k,C,w),y.delay=(+Se(p,Nt(i),k,C,w)||0)-i._delay,!h&&_===1&&y.delay&&(i._delay=p=y.delay,i._start+=p,y.delay=0),S.to(C,y,P?P(k,C,w):0),S._ease=fn.none;S.duration()?u=p=0:i.timeline=0}else if(g){we(gt(S.vars.defaults,{ease:"none"})),S._ease=Cs(g.ease||a.ease||"none");var T=0,O,I,B;if(Un(g))g.forEach(function(N){return S.to(w,N,">")}),S.duration();else{y={};for(b in g)b==="ease"||b==="easeEach"||Ch(b,g[b],y,g.easeEach);for(b in y)for(O=y[b].sort(function(N,q){return N.t-q.t}),T=0,k=0;k<O.length;k++)I=O[k],B={ease:I.e,duration:(I.t-(k?O[k-1].t:0))/100*u},B[b]=I.v,S.to(w,B,T),T+=B.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||i.duration(u=S.duration())}else i.timeline=0;return c===!0&&!io&&(es=Nt(i),Tn.killTweensOf(w),es=0),Ot(x,Nt(i),e),a.reversed&&i.reverse(),a.paused&&i.paused(!0),(f||!u&&!g&&i._start===En(x._time)&&Zn(f)&&sh(Nt(i))&&x.data!=="nested")&&(i._tTime=-bn,i.render(Math.max(0,-p)||0)),m&&Rp(Nt(i),m),i}var s=n.prototype;return s.render=function(a,e,o){var i=this._time,l=this._tDur,u=this._dur,p=a<0,f=a>l-bn&&!p?l:a<bn?0:a,h,c,g,d,m,v,x,w,S;if(!u)ah(this,a,e,o);else if(f!==this._tTime||!a||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(h=f,w=this.timeline,this._repeat){if(d=u+this._rDelay,this._repeat<-1&&p)return this.totalTime(d*100+a,e,o);if(h=En(f%d),f===l?(g=this._repeat,h=u):(m=En(f/d),g=~~m,g&&g===m?(h=u,g--):h>u&&(h=u)),v=this._yoyo&&g&1,v&&(S=this._yEase,h=u-h),m=Zs(this._tTime,d),h===i&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(w&&this._yEase&&Up(w,v),this.vars.repeatRefresh&&!v&&!this._lock&&h!==d&&this._initted&&(this._lock=o=1,this.render(En(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ep(this,p?a:h,o,e,f))return this._tTime=0,this;if(i!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(a,e,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(h/u),this._from&&(this.ratio=x=1-x),!i&&f&&!e&&!m&&(dt(this,"onStart"),this._tTime!==f))return this;for(c=this._pt;c;)c.r(x,c.d),c=c._next;w&&w.render(a<0?a:w._dur*w._ease(h/this._dur),e,o)||this._startAt&&(this._zTime=a),this._onUpdate&&!e&&(p&&Ar(this,a,e,o),dt(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!e&&this.parent&&dt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(p&&!this._onUpdate&&Ar(this,a,!0,!0),(a||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&us(this,1),!e&&!(p&&!i)&&(f||i||v)&&(dt(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},s.targets=function(){return this._targets},s.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),t.prototype.invalidate.call(this,a)},s.resetTo=function(a,e,o,i,l){Fe||it.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||vo(this,u),p=this._ease(u/this._dur),_h(this,a,e,o,i,p,u,l)?this.resetTo(a,e,o,i,1):(za(this,0),this.parent||Mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},s.kill=function(a,e){if(e===void 0&&(e="all"),!a&&(!e||e==="all"))return this._lazy=this._pt=0,this.parent?ue(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(a,e,es&&es.vars.overwrite!==!0)._first||ue(this),this.parent&&o!==this.timeline.totalDuration()&&ne(this,this._dur*this.timeline._tDur/o,0,1),this}var i=this._targets,l=a?vt(a):i,u=this._ptLookup,p=this._pt,f,h,c,g,d,m,v;if((!e||e==="all")&&nh(i,l))return e==="all"&&(this._pt=0),ue(this);for(f=this._op=this._op||[],e!=="all"&&(qn(e)&&(d={},nt(e,function(x){return d[x]=1}),e=d),e=Sh(i,e)),v=i.length;v--;)if(~l.indexOf(i[v])){h=u[v],e==="all"?(f[v]=e,g=h,c={}):(c=f[v]=f[v]||{},g=e);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&ja(this,m,"_pt"),delete h[d]),c!=="all"&&(c[d]=1)}return this._initted&&!this._pt&&p&&ue(this),this},n.to=function(a,e){return new n(a,e,arguments[2])},n.from=function(a,e){return _e(1,arguments)},n.delayedCall=function(a,e,o,i){return new n(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:e,onReverseComplete:e,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:i})},n.fromTo=function(a,e,o){return _e(2,arguments)},n.set=function(a,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new n(a,e)},n.killTweensOf=function(a,e,o){return Tn.killTweensOf(a,e,o)},n}(He);gt(Rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nt("staggerTo,staggerFrom,staggerFromTo",function(t){Rn[t]=function(){var n=new Xn,s=Er.call(arguments,0);return s.splice(t==="staggerFromTo"?5:4,0,0),n[t].apply(n,s)}});var xo=function(n,s,r){return n[s]=r},Qp=function(n,s,r){return n[s](r)},Th=function(n,s,r,a){return n[s](a.fp,r)},Ph=function(n,s,r){return n.setAttribute(s,r)},bo=function(n,s){return Mn(n[s])?Qp:lo(n[s])&&n.setAttribute?Ph:xo},Jp=function(n,s){return s.set(s.t,s.p,Math.round((s.s+s.c*n)*1e6)/1e6,s)},Mh=function(n,s){return s.set(s.t,s.p,!!(s.s+s.c*n),s)},Zp=function(n,s){var r=s._pt,a="";if(!n&&s.b)a=s.b;else if(n===1&&s.e)a=s.e;else{for(;r;)a=r.p+(r.m?r.m(r.s+r.c*n):Math.round((r.s+r.c*n)*1e4)/1e4)+a,r=r._next;a+=s.c}s.set(s.t,s.p,a,s)},yo=function(n,s){for(var r=s._pt;r;)r.r(n,r.d),r=r._next},Ah=function(n,s,r,a){for(var e=this._pt,o;e;)o=e._next,e.p===a&&e.modifier(n,s,r),e=o},Rh=function(n){for(var s=this._pt,r,a;s;)a=s._next,s.p===n&&!s.op||s.op===n?ja(this,s,"_pt"):s.dep||(r=1),s=a;return!r},Eh=function(n,s,r,a){a.mSet(n,s,a.m.call(a.tween,r,a.mt),a)},nc=function(n){for(var s=n._pt,r,a,e,o;s;){for(r=s._next,a=e;a&&a.pr>s.pr;)a=a._next;(s._prev=a?a._prev:o)?s._prev._next=s:e=s,(s._next=a)?a._prev=s:o=s,s=r}n._pt=e},tt=function(){function t(s,r,a,e,o,i,l,u,p){this.t=r,this.s=e,this.c=o,this.p=a,this.r=i||Jp,this.d=l||this,this.set=u||xo,this.pr=p||0,this._next=s,s&&(s._prev=this)}var n=t.prototype;return n.modifier=function(r,a,e){this.mSet=this.mSet||this.set,this.set=Eh,this.m=r,this.mt=e,this.tween=a},t}();nt(ho+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return fo[t]=1});ht.TweenMax=ht.TweenLite=Rn;ht.TimelineLite=ht.TimelineMax=Xn;Tn=new Xn({sortChildren:!1,defaults:Qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ft.stringFilter=Vp;var Ts=[],ra={},Oh=[],Oi=0,Ih=0,pr=function(n){return(ra[n]||Oh).map(function(s){return s()})},Lr=function(){var n=Date.now(),s=[];n-Oi>2&&(pr("matchMediaInit"),Ts.forEach(function(r){var a=r.queries,e=r.conditions,o,i,l,u;for(i in a)o=Rt.matchMedia(a[i]).matches,o&&(l=1),o!==e[i]&&(e[i]=o,u=1);u&&(r.revert(),l&&s.push(r))}),pr("matchMediaRevert"),s.forEach(function(r){return r.onMatch(r,function(a){return r.add(null,a)})}),Oi=n,pr("matchMedia"))},tc=function(){function t(s,r){this.selector=r&&Or(r),this.data=[],this._r=[],this.isReverted=!1,this.id=Ih++,s&&this.add(s)}var n=t.prototype;return n.add=function(r,a,e){Mn(r)&&(e=a,a=r,r=Mn);var o=this,i=function(){var u=Cn,p=o.selector,f;return u&&u!==o&&u.data.push(o),e&&(o.selector=Or(e)),Cn=o,f=a.apply(o,arguments),Mn(f)&&o._r.push(f),Cn=u,o.selector=p,o.isReverted=!1,f};return o.last=i,r===Mn?i(o,function(l){return o.add(null,l)}):r?o[r]=i:i},n.ignore=function(r){var a=Cn;Cn=null,r(this),Cn=a},n.getTweens=function(){var r=[];return this.data.forEach(function(a){return a instanceof t?r.push.apply(r,a.getTweens()):a instanceof Rn&&!(a.parent&&a.parent.data==="nested")&&r.push(a)}),r},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(r,a){var e=this;if(r?function(){for(var i=e.getTweens(),l=e.data.length,u;l--;)u=e.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(p){return i.splice(i.indexOf(p),1)}));for(i.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,f){return f.g-p.g||-1/0}).forEach(function(p){return p.t.revert(r)}),l=e.data.length;l--;)u=e.data[l],u instanceof Xn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Rn)&&u.revert&&u.revert(r);e._r.forEach(function(p){return p(r,e)}),e.isReverted=!0}():this.data.forEach(function(i){return i.kill&&i.kill()}),this.clear(),a)for(var o=Ts.length;o--;)Ts[o].id===this.id&&Ts.splice(o,1)},n.revert=function(r){this.kill(r||{})},t}(),Dh=function(){function t(s){this.contexts=[],this.scope=s,Cn&&Cn.data.push(this)}var n=t.prototype;return n.add=function(r,a,e){qt(r)||(r={matches:r});var o=new tc(0,e||this.scope),i=o.conditions={},l,u,p;Cn&&!o.selector&&(o.selector=Cn.selector),this.contexts.push(o),a=o.add("onMatch",a),o.queries=r;for(u in r)u==="all"?p=1:(l=Rt.matchMedia(r[u]),l&&(Ts.indexOf(o)<0&&Ts.push(o),(i[u]=l.matches)&&(p=1),l.addListener?l.addListener(Lr):l.addEventListener("change",Lr)));return p&&a(o,function(f){return o.add(null,f)}),this},n.revert=function(r){this.kill(r||{})},n.kill=function(r){this.contexts.forEach(function(a){return a.kill(r,!0)})},t}(),_a={registerPlugin:function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];s.forEach(function(a){return $p(a)})},timeline:function(n){return new Xn(n)},getTweensOf:function(n,s){return Tn.getTweensOf(n,s)},getProperty:function(n,s,r,a){qn(n)&&(n=vt(n)[0]);var e=_s(n||{}).get,o=r?Pp:Tp;return r==="native"&&(r=""),n&&(s?o((ot[s]&&ot[s].get||e)(n,s,r,a)):function(i,l,u){return o((ot[i]&&ot[i].get||e)(n,i,l,u))})},quickSetter:function(n,s,r){if(n=vt(n),n.length>1){var a=n.map(function(p){return et.quickSetter(p,s,r)}),e=a.length;return function(p){for(var f=e;f--;)a[f](p)}}n=n[0]||{};var o=ot[s],i=_s(n),l=i.harness&&(i.harness.aliases||{})[s]||s,u=o?function(p){var f=new o;qs._pt=0,f.init(n,r?p+r:p,qs,0,[n]),f.render(1,f),qs._pt&&yo(1,qs)}:i.set(n,l);return o?u:function(p){return u(n,l,r?p+r:p,i,1)}},quickTo:function(n,s,r){var a,e=et.to(n,gt((a={},a[s]="+=0.1",a.paused=!0,a.stagger=0,a),r||{})),o=function(l,u,p){return e.resetTo(s,l,u,p)};return o.tween=e,o},isTweening:function(n){return Tn.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=Cs(n.ease,Qs.ease)),Pi(Qs,n||{})},config:function(n){return Pi(ft,n||{})},registerEffect:function(n){var s=n.name,r=n.effect,a=n.plugins,e=n.defaults,o=n.extendTimeline;(a||"").split(",").forEach(function(i){return i&&!ot[i]&&!ht[i]&&Le(s+" effect requires "+i+" plugin.")}),rr[s]=function(i,l,u){return r(vt(i),gt(l||{},e),u)},o&&(Xn.prototype[s]=function(i,l,u){return this.add(rr[s](i,qt(l)?l:(u=l)&&{},this),u)})},registerEase:function(n,s){fn[n]=Cs(s)},parseEase:function(n,s){return arguments.length?Cs(n,s):fn},getById:function(n){return Tn.getById(n)},exportRoot:function(n,s){n===void 0&&(n={});var r=new Xn(n),a,e;for(r.smoothChildTiming=Zn(n.smoothChildTiming),Tn.remove(r),r._dp=0,r._time=r._tTime=Tn._time,a=Tn._first;a;)e=a._next,(s||!(!a._dur&&a instanceof Rn&&a.vars.onComplete===a._targets[0]))&&Ot(r,a,a._start-a._delay),a=e;return Ot(Tn,r,0),r},context:function(n,s){return n?new tc(n,s):Cn},matchMedia:function(n){return new Dh(n)},matchMediaRefresh:function(){return Ts.forEach(function(n){var s=n.conditions,r,a;for(a in s)s[a]&&(s[a]=!1,r=1);r&&n.revert()})||Lr()},addEventListener:function(n,s){var r=ra[n]||(ra[n]=[]);~r.indexOf(s)||r.push(s)},removeEventListener:function(n,s){var r=ra[n],a=r&&r.indexOf(s);a>=0&&r.splice(a,1)},utils:{wrap:dh,wrapYoyo:fh,distribute:Dp,random:Bp,snap:Lp,normalize:uh,getUnit:Vn,clamp:ih,splitColor:Np,toArray:vt,selector:Or,mapRange:Fp,pipe:ph,unitize:ch,interpolate:hh,shuffle:Ip},install:yp,effects:rr,ticker:it,updateRoot:Xn.updateRoot,plugins:ot,globalTimeline:Tn,core:{PropTween:tt,globals:wp,Tween:Rn,Timeline:Xn,Animation:He,getCache:_s,_removeLinkedListItem:ja,reverting:function(){return $n},context:function(n){return n&&Cn&&(Cn.data.push(n),n._ctx=Cn),Cn},suppressOverwrites:function(n){return io=n}}};nt("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return _a[t]=Rn[t]});it.add(Xn.updateRoot);qs=_a.to({},{duration:0});var Lh=function(n,s){for(var r=n._pt;r&&r.p!==s&&r.op!==s&&r.fp!==s;)r=r._next;return r},Bh=function(n,s){var r=n._targets,a,e,o;for(a in s)for(e=r.length;e--;)o=n._ptLookup[e][a],o&&(o=o.d)&&(o._pt&&(o=Lh(o,a)),o&&o.modifier&&o.modifier(s[a],n,r[e],a))},cr=function(n,s){return{name:n,headless:1,rawVars:1,init:function(a,e,o){o._onInit=function(i){var l,u;if(qn(e)&&(l={},nt(e,function(p){return l[p]=1}),e=l),s){l={};for(u in e)l[u]=s(e[u]);e=l}Bh(i,e)}}}},et=_a.registerPlugin({name:"attr",init:function(n,s,r,a,e){var o,i,l;this.tween=r;for(o in s)l=n.getAttribute(o)||"",i=this.add(n,"setAttribute",(l||0)+"",s[o],a,e,0,0,o),i.op=o,i.b=l,this._props.push(o)},render:function(n,s){for(var r=s._pt;r;)$n?r.set(r.t,r.p,r.b,r):r.r(n,r.d),r=r._next}},{name:"endArray",headless:1,init:function(n,s){for(var r=s.length;r--;)this.add(n,r,n[r]||0,s[r],0,0,0,0,0,1)}},cr("roundProps",Ir),cr("modifiers"),cr("snap",Lp))||_a;Rn.version=Xn.version=et.version="3.13.0";bp=1;po()&&te();fn.Power0;fn.Power1;fn.Power2;fn.Power3;fn.Power4;fn.Linear;fn.Quad;fn.Cubic;fn.Quart;fn.Quint;fn.Strong;fn.Elastic;fn.Back;fn.SteppedEase;fn.Bounce;fn.Sine;fn.Expo;fn.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ii,as,Ws,wo,ys,Di,_o,qh=function(){return typeof window<"u"},Xt={},xs=180/Math.PI,Ys=Math.PI/180,Os=Math.atan2,Li=1e8,So=/([A-Z])/g,Fh=/(left|right|width|margin|padding|x)/i,Hh=/[\s,\(]\S/,It={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Br=function(n,s){return s.set(s.t,s.p,Math.round((s.s+s.c*n)*1e4)/1e4+s.u,s)},$h=function(n,s){return s.set(s.t,s.p,n===1?s.e:Math.round((s.s+s.c*n)*1e4)/1e4+s.u,s)},Nh=function(n,s){return s.set(s.t,s.p,n?Math.round((s.s+s.c*n)*1e4)/1e4+s.u:s.b,s)},jh=function(n,s){var r=s.s+s.c*n;s.set(s.t,s.p,~~(r+(r<0?-.5:.5))+s.u,s)},sc=function(n,s){return s.set(s.t,s.p,n?s.e:s.b,s)},ec=function(n,s){return s.set(s.t,s.p,n!==1?s.b:s.e,s)},Vh=function(n,s,r){return n.style[s]=r},zh=function(n,s,r){return n.style.setProperty(s,r)},Uh=function(n,s,r){return n._gsap[s]=r},Wh=function(n,s,r){return n._gsap.scaleX=n._gsap.scaleY=r},Yh=function(n,s,r,a,e){var o=n._gsap;o.scaleX=o.scaleY=r,o.renderTransform(e,o)},Gh=function(n,s,r,a,e){var o=n._gsap;o[s]=r,o.renderTransform(e,o)},Pn="transform",st=Pn+"Origin",Kh=function t(n,s){var r=this,a=this.target,e=a.style,o=a._gsap;if(n in Xt&&e){if(this.tfm=this.tfm||{},n!=="transform")n=It[n]||n,~n.indexOf(",")?n.split(",").forEach(function(i){return r.tfm[i]=jt(a,i)}):this.tfm[n]=o.x?o[n]:jt(a,n),n===st&&(this.tfm.zOrigin=o.zOrigin);else return It.transform.split(",").forEach(function(i){return t.call(r,i,s)});if(this.props.indexOf(Pn)>=0)return;o.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(st,s,"")),n=Pn}(e||s)&&this.props.push(n,s,e[n])},ac=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Xh=function(){var n=this.props,s=this.target,r=s.style,a=s._gsap,e,o;for(e=0;e<n.length;e+=3)n[e+1]?n[e+1]===2?s[n[e]](n[e+2]):s[n[e]]=n[e+2]:n[e+2]?r[n[e]]=n[e+2]:r.removeProperty(n[e].substr(0,2)==="--"?n[e]:n[e].replace(So,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)a[o]=this.tfm[o];a.svg&&(a.renderTransform(),s.setAttribute("data-svg-origin",this.svgo||"")),e=_o(),(!e||!e.isStart)&&!r[Pn]&&(ac(r),a.zOrigin&&r[st]&&(r[st]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},rc=function(n,s){var r={target:n,props:[],revert:Xh,save:Kh};return n._gsap||et.core.getCache(n),s&&n.style&&n.nodeType&&s.split(",").forEach(function(a){return r.save(a)}),r},oc,qr=function(n,s){var r=as.createElementNS?as.createElementNS((s||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):as.createElement(n);return r&&r.style?r:as.createElement(n)},xt=function t(n,s,r){var a=getComputedStyle(n);return a[s]||a.getPropertyValue(s.replace(So,"-$1").toLowerCase())||a.getPropertyValue(s)||!r&&t(n,se(s)||s,1)||""},Bi="O,Moz,ms,Ms,Webkit".split(","),se=function(n,s,r){var a=s||ys,e=a.style,o=5;if(n in e&&!r)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(Bi[o]+n in e););return o<0?null:(o===3?"ms":o>=0?Bi[o]:"")+n},Fr=function(){qh()&&window.document&&(Ii=window,as=Ii.document,Ws=as.documentElement,ys=qr("div")||{style:{}},qr("div"),Pn=se(Pn),st=Pn+"Origin",ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",oc=!!se("perspective"),_o=et.core.reverting,wo=1)},qi=function(n){var s=n.ownerSVGElement,r=qr("svg",s&&s.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=n.cloneNode(!0),e;a.style.display="block",r.appendChild(a),Ws.appendChild(r);try{e=a.getBBox()}catch{}return r.removeChild(a),Ws.removeChild(r),e},Fi=function(n,s){for(var r=s.length;r--;)if(n.hasAttribute(s[r]))return n.getAttribute(s[r])},ic=function(n){var s,r;try{s=n.getBBox()}catch{s=qi(n),r=1}return s&&(s.width||s.height)||r||(s=qi(n)),s&&!s.width&&!s.x&&!s.y?{x:+Fi(n,["x","cx","x1"])||0,y:+Fi(n,["y","cy","y1"])||0,width:0,height:0}:s},lc=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&ic(n))},Ps=function(n,s){if(s){var r=n.style,a;s in Xt&&s!==st&&(s=Pn),r.removeProperty?(a=s.substr(0,2),(a==="ms"||s.substr(0,6)==="webkit")&&(s="-"+s),r.removeProperty(a==="--"?s:s.replace(So,"-$1").toLowerCase())):r.removeAttribute(s)}},rs=function(n,s,r,a,e,o){var i=new tt(n._pt,s,r,0,1,o?ec:sc);return n._pt=i,i.b=a,i.e=e,n._props.push(r),i},Hi={deg:1,rad:1,turn:1},Qh={grid:1,flex:1},ds=function t(n,s,r,a){var e=parseFloat(r)||0,o=(r+"").trim().substr((e+"").length)||"px",i=ys.style,l=Fh.test(s),u=n.tagName.toLowerCase()==="svg",p=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=a==="px",c=a==="%",g,d,m,v;if(a===o||!e||Hi[a]||Hi[o])return e;if(o!=="px"&&!h&&(e=t(n,s,r,"px")),v=n.getCTM&&lc(n),(c||o==="%")&&(Xt[s]||~s.indexOf("adius")))return g=v?n.getBBox()[l?"width":"height"]:n[p],An(c?e/g*f:e/100*g);if(i[l?"width":"height"]=f+(h?o:a),d=a!=="rem"&&~s.indexOf("adius")||a==="em"&&n.appendChild&&!u?n:n.parentNode,v&&(d=(n.ownerSVGElement||{}).parentNode),(!d||d===as||!d.appendChild)&&(d=as.body),m=d._gsap,m&&c&&m.width&&l&&m.time===it.time&&!m.uncache)return An(e/m.width*f);if(c&&(s==="height"||s==="width")){var x=n.style[s];n.style[s]=f+a,g=n[p],x?n.style[s]=x:Ps(n,s)}else(c||o==="%")&&!Qh[xt(d,"display")]&&(i.position=xt(n,"position")),d===n&&(i.position="static"),d.appendChild(ys),g=ys[p],d.removeChild(ys),i.position="absolute";return l&&c&&(m=_s(d),m.time=it.time,m.width=d[p]),An(h?g*e/f:g&&e?f/g*e:0)},jt=function(n,s,r,a){var e;return wo||Fr(),s in It&&s!=="transform"&&(s=It[s],~s.indexOf(",")&&(s=s.split(",")[0])),Xt[s]&&s!=="transform"?(e=Ne(n,a),e=s!=="transformOrigin"?e[s]:e.svg?e.origin:Ca(xt(n,st))+" "+e.zOrigin+"px"):(e=n.style[s],(!e||e==="auto"||a||~(e+"").indexOf("calc("))&&(e=Sa[s]&&Sa[s](n,s,r)||xt(n,s)||Sp(n,s)||(s==="opacity"?1:0))),r&&!~(e+"").trim().indexOf(" ")?ds(n,s,e,r)+r:e},Jh=function(n,s,r,a){if(!r||r==="none"){var e=se(s,n,1),o=e&&xt(n,e,1);o&&o!==r?(s=e,r=o):s==="borderColor"&&(r=xt(n,"borderTopColor"))}var i=new tt(this._pt,n.style,s,0,1,Zp),l=0,u=0,p,f,h,c,g,d,m,v,x,w,S,k;if(i.b=r,i.e=a,r+="",a+="",a.substring(0,6)==="var(--"&&(a=xt(n,a.substring(4,a.indexOf(")")))),a==="auto"&&(d=n.style[s],n.style[s]=a,a=xt(n,s)||a,d?n.style[s]=d:Ps(n,s)),p=[r,a],Vp(p),r=p[0],a=p[1],h=r.match(Bs)||[],k=a.match(Bs)||[],k.length){for(;f=Bs.exec(a);)m=f[0],x=a.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(d=h[u++]||"")&&(c=parseFloat(d)||0,S=d.substr((c+"").length),m.charAt(1)==="="&&(m=Us(c,m)+S),v=parseFloat(m),w=m.substr((v+"").length),l=Bs.lastIndex-w.length,w||(w=w||ft.units[s]||S,l===a.length&&(a+=w,i.e+=w)),S!==w&&(c=ds(n,s,d,w)||0),i._pt={_next:i._pt,p:x||u===1?x:",",s:c,c:v-c,m:g&&g<4||s==="zIndex"?Math.round:0});i.c=l<a.length?a.substring(l,a.length):""}else i.r=s==="display"&&a==="none"?ec:sc;return vp.test(a)&&(i.e=0),this._pt=i,i},$i={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zh=function(n){var s=n.split(" "),r=s[0],a=s[1]||"50%";return(r==="top"||r==="bottom"||a==="left"||a==="right")&&(n=r,r=a,a=n),s[0]=$i[r]||r,s[1]=$i[a]||a,s.join(" ")},ng=function(n,s){if(s.tween&&s.tween._time===s.tween._dur){var r=s.t,a=r.style,e=s.u,o=r._gsap,i,l,u;if(e==="all"||e===!0)a.cssText="",l=1;else for(e=e.split(","),u=e.length;--u>-1;)i=e[u],Xt[i]&&(l=1,i=i==="transformOrigin"?st:Pn),Ps(r,i);l&&(Ps(r,Pn),o&&(o.svg&&r.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",Ne(r,1),o.uncache=1,ac(a)))}},Sa={clearProps:function(n,s,r,a,e){if(e.data!=="isFromStart"){var o=n._pt=new tt(n._pt,s,r,0,0,ng);return o.u=a,o.pr=-10,o.tween=e,n._props.push(r),1}}},$e=[1,0,0,1,0,0],pc={},cc=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Ni=function(n){var s=xt(n,Pn);return cc(s)?$e:s.substr(7).match(kp).map(An)},Co=function(n,s){var r=n._gsap||_s(n),a=n.style,e=Ni(n),o,i,l,u;return r.svg&&n.getAttribute("transform")?(l=n.transform.baseVal.consolidate().matrix,e=[l.a,l.b,l.c,l.d,l.e,l.f],e.join(",")==="1,0,0,1,0,0"?$e:e):(e===$e&&!n.offsetParent&&n!==Ws&&!r.svg&&(l=a.display,a.display="block",o=n.parentNode,(!o||!n.offsetParent&&!n.getBoundingClientRect().width)&&(u=1,i=n.nextElementSibling,Ws.appendChild(n)),e=Ni(n),l?a.display=l:Ps(n,"display"),u&&(i?o.insertBefore(n,i):o?o.appendChild(n):Ws.removeChild(n))),s&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e)},Hr=function(n,s,r,a,e,o){var i=n._gsap,l=e||Co(n,!0),u=i.xOrigin||0,p=i.yOrigin||0,f=i.xOffset||0,h=i.yOffset||0,c=l[0],g=l[1],d=l[2],m=l[3],v=l[4],x=l[5],w=s.split(" "),S=parseFloat(w[0])||0,k=parseFloat(w[1])||0,y,_,b,C;r?l!==$e&&(_=c*m-g*d)&&(b=S*(m/_)+k*(-d/_)+(d*x-m*v)/_,C=S*(-g/_)+k*(c/_)-(c*x-g*v)/_,S=b,k=C):(y=ic(n),S=y.x+(~w[0].indexOf("%")?S/100*y.width:S),k=y.y+(~(w[1]||w[0]).indexOf("%")?k/100*y.height:k)),a||a!==!1&&i.smooth?(v=S-u,x=k-p,i.xOffset=f+(v*c+x*d)-v,i.yOffset=h+(v*g+x*m)-x):i.xOffset=i.yOffset=0,i.xOrigin=S,i.yOrigin=k,i.smooth=!!a,i.origin=s,i.originIsAbsolute=!!r,n.style[st]="0px 0px",o&&(rs(o,i,"xOrigin",u,S),rs(o,i,"yOrigin",p,k),rs(o,i,"xOffset",f,i.xOffset),rs(o,i,"yOffset",h,i.yOffset)),n.setAttribute("data-svg-origin",S+" "+k)},Ne=function(n,s){var r=n._gsap||new Yp(n);if("x"in r&&!s&&!r.uncache)return r;var a=n.style,e=r.scaleX<0,o="px",i="deg",l=getComputedStyle(n),u=xt(n,st)||"0",p,f,h,c,g,d,m,v,x,w,S,k,y,_,b,C,P,M,T,O,I,B,N,q,U,nn,on,pn,an,un,cn,dn;return p=f=h=d=m=v=x=w=S=0,c=g=1,r.svg=!!(n.getCTM&&lc(n)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(a[Pn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pn]!=="none"?l[Pn]:"")),a.scale=a.rotate=a.translate="none"),_=Co(n,r.svg),r.svg&&(r.uncache?(U=n.getBBox(),u=r.xOrigin-U.x+"px "+(r.yOrigin-U.y)+"px",q=""):q=!s&&n.getAttribute("data-svg-origin"),Hr(n,q||u,!!q||r.originIsAbsolute,r.smooth!==!1,_)),k=r.xOrigin||0,y=r.yOrigin||0,_!==$e&&(M=_[0],T=_[1],O=_[2],I=_[3],p=B=_[4],f=N=_[5],_.length===6?(c=Math.sqrt(M*M+T*T),g=Math.sqrt(I*I+O*O),d=M||T?Os(T,M)*xs:0,x=O||I?Os(O,I)*xs+d:0,x&&(g*=Math.abs(Math.cos(x*Ys))),r.svg&&(p-=k-(k*M+y*O),f-=y-(k*T+y*I))):(dn=_[6],un=_[7],on=_[8],pn=_[9],an=_[10],cn=_[11],p=_[12],f=_[13],h=_[14],b=Os(dn,an),m=b*xs,b&&(C=Math.cos(-b),P=Math.sin(-b),q=B*C+on*P,U=N*C+pn*P,nn=dn*C+an*P,on=B*-P+on*C,pn=N*-P+pn*C,an=dn*-P+an*C,cn=un*-P+cn*C,B=q,N=U,dn=nn),b=Os(-O,an),v=b*xs,b&&(C=Math.cos(-b),P=Math.sin(-b),q=M*C-on*P,U=T*C-pn*P,nn=O*C-an*P,cn=I*P+cn*C,M=q,T=U,O=nn),b=Os(T,M),d=b*xs,b&&(C=Math.cos(b),P=Math.sin(b),q=M*C+T*P,U=B*C+N*P,T=T*C-M*P,N=N*C-B*P,M=q,B=U),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,v=180-v),c=An(Math.sqrt(M*M+T*T+O*O)),g=An(Math.sqrt(N*N+dn*dn)),b=Os(B,N),x=Math.abs(b)>2e-4?b*xs:0,S=cn?1/(cn<0?-cn:cn):0),r.svg&&(q=n.getAttribute("transform"),r.forceCSS=n.setAttribute("transform","")||!cc(xt(n,Pn)),q&&n.setAttribute("transform",q))),Math.abs(x)>90&&Math.abs(x)<270&&(e?(c*=-1,x+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),s=s||r.uncache,r.x=p-((r.xPercent=p&&(!s&&r.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-p)?-50:0)))?n.offsetWidth*r.xPercent/100:0)+o,r.y=f-((r.yPercent=f&&(!s&&r.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-f)?-50:0)))?n.offsetHeight*r.yPercent/100:0)+o,r.z=h+o,r.scaleX=An(c),r.scaleY=An(g),r.rotation=An(d)+i,r.rotationX=An(m)+i,r.rotationY=An(v)+i,r.skewX=x+i,r.skewY=w+i,r.transformPerspective=S+o,(r.zOrigin=parseFloat(u.split(" ")[2])||!s&&r.zOrigin||0)&&(a[st]=Ca(u)),r.xOffset=r.yOffset=0,r.force3D=ft.force3D,r.renderTransform=r.svg?sg:oc?uc:tg,r.uncache=0,r},Ca=function(n){return(n=n.split(" "))[0]+" "+n[1]},ur=function(n,s,r){var a=Vn(s);return An(parseFloat(s)+parseFloat(ds(n,"x",r+"px",a)))+a},tg=function(n,s){s.z="0px",s.rotationY=s.rotationX="0deg",s.force3D=0,uc(n,s)},ms="0deg",le="0px",ks=") ",uc=function(n,s){var r=s||this,a=r.xPercent,e=r.yPercent,o=r.x,i=r.y,l=r.z,u=r.rotation,p=r.rotationY,f=r.rotationX,h=r.skewX,c=r.skewY,g=r.scaleX,d=r.scaleY,m=r.transformPerspective,v=r.force3D,x=r.target,w=r.zOrigin,S="",k=v==="auto"&&n&&n!==1||v===!0;if(w&&(f!==ms||p!==ms)){var y=parseFloat(p)*Ys,_=Math.sin(y),b=Math.cos(y),C;y=parseFloat(f)*Ys,C=Math.cos(y),o=ur(x,o,_*C*-w),i=ur(x,i,-Math.sin(y)*-w),l=ur(x,l,b*C*-w+w)}m!==le&&(S+="perspective("+m+ks),(a||e)&&(S+="translate("+a+"%, "+e+"%) "),(k||o!==le||i!==le||l!==le)&&(S+=l!==le||k?"translate3d("+o+", "+i+", "+l+") ":"translate("+o+", "+i+ks),u!==ms&&(S+="rotate("+u+ks),p!==ms&&(S+="rotateY("+p+ks),f!==ms&&(S+="rotateX("+f+ks),(h!==ms||c!==ms)&&(S+="skew("+h+", "+c+ks),(g!==1||d!==1)&&(S+="scale("+g+", "+d+ks),x.style[Pn]=S||"translate(0, 0)"},sg=function(n,s){var r=s||this,a=r.xPercent,e=r.yPercent,o=r.x,i=r.y,l=r.rotation,u=r.skewX,p=r.skewY,f=r.scaleX,h=r.scaleY,c=r.target,g=r.xOrigin,d=r.yOrigin,m=r.xOffset,v=r.yOffset,x=r.forceCSS,w=parseFloat(o),S=parseFloat(i),k,y,_,b,C;l=parseFloat(l),u=parseFloat(u),p=parseFloat(p),p&&(p=parseFloat(p),u+=p,l+=p),l||u?(l*=Ys,u*=Ys,k=Math.cos(l)*f,y=Math.sin(l)*f,_=Math.sin(l-u)*-h,b=Math.cos(l-u)*h,u&&(p*=Ys,C=Math.tan(u-p),C=Math.sqrt(1+C*C),_*=C,b*=C,p&&(C=Math.tan(p),C=Math.sqrt(1+C*C),k*=C,y*=C)),k=An(k),y=An(y),_=An(_),b=An(b)):(k=f,b=h,y=_=0),(w&&!~(o+"").indexOf("px")||S&&!~(i+"").indexOf("px"))&&(w=ds(c,"x",o,"px"),S=ds(c,"y",i,"px")),(g||d||m||v)&&(w=An(w+g-(g*k+d*_)+m),S=An(S+d-(g*y+d*b)+v)),(a||e)&&(C=c.getBBox(),w=An(w+a/100*C.width),S=An(S+e/100*C.height)),C="matrix("+k+","+y+","+_+","+b+","+w+","+S+")",c.setAttribute("transform",C),x&&(c.style[Pn]=C)},eg=function(n,s,r,a,e){var o=360,i=qn(e),l=parseFloat(e)*(i&&~e.indexOf("rad")?xs:1),u=l-a,p=a+u+"deg",f,h;return i&&(f=e.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Li)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Li)%o-~~(u/o)*o)),n._pt=h=new tt(n._pt,s,r,a,u,$h),h.e=p,h.u="deg",n._props.push(r),h},ji=function(n,s){for(var r in s)n[r]=s[r];return n},ag=function(n,s,r){var a=ji({},r._gsap),e="perspective,force3D,transformOrigin,svgOrigin",o=r.style,i,l,u,p,f,h,c,g;a.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),o[Pn]=s,i=Ne(r,1),Ps(r,Pn),r.setAttribute("transform",u)):(u=getComputedStyle(r)[Pn],o[Pn]=s,i=Ne(r,1),o[Pn]=u);for(l in Xt)u=a[l],p=i[l],u!==p&&e.indexOf(l)<0&&(c=Vn(u),g=Vn(p),f=c!==g?ds(r,l,u,g):parseFloat(u),h=parseFloat(p),n._pt=new tt(n._pt,i,l,f,h-f,Br),n._pt.u=g||0,n._props.push(l));ji(i,a)};nt("padding,margin,Width,Radius",function(t,n){var s="Top",r="Right",a="Bottom",e="Left",o=(n<3?[s,r,a,e]:[s+e,s+r,a+r,a+e]).map(function(i){return n<2?t+i:"border"+i+t});Sa[n>1?"border"+t:t]=function(i,l,u,p,f){var h,c;if(arguments.length<4)return h=o.map(function(g){return jt(i,g,u)}),c=h.join(" "),c.split(h[0]).length===5?h[0]:c;h=(p+"").split(" "),c={},o.forEach(function(g,d){return c[g]=h[d]=h[d]||h[(d-1)/2|0]}),i.init(l,c,f)}});var dc={name:"css",register:Fr,targetTest:function(n){return n.style&&n.nodeType},init:function(n,s,r,a,e){var o=this._props,i=n.style,l=r.vars.startAt,u,p,f,h,c,g,d,m,v,x,w,S,k,y,_,b;wo||Fr(),this.styles=this.styles||rc(n),b=this.styles.props,this.tween=r;for(d in s)if(d!=="autoRound"&&(p=s[d],!(ot[d]&&Gp(d,s,r,a,n,e)))){if(c=typeof p,g=Sa[d],c==="function"&&(p=p.call(r,a,n,e),c=typeof p),c==="string"&&~p.indexOf("random(")&&(p=qe(p)),g)g(this,n,d,p,r)&&(_=1);else if(d.substr(0,2)==="--")u=(getComputedStyle(n).getPropertyValue(d)+"").trim(),p+="",ls.lastIndex=0,ls.test(u)||(m=Vn(u),v=Vn(p)),v?m!==v&&(u=ds(n,d,u,v)+v):m&&(p+=m),this.add(i,"setProperty",u,p,a,e,0,0,d),o.push(d),b.push(d,0,i[d]);else if(c!=="undefined"){if(l&&d in l?(u=typeof l[d]=="function"?l[d].call(r,a,n,e):l[d],qn(u)&&~u.indexOf("random(")&&(u=qe(u)),Vn(u+"")||u==="auto"||(u+=ft.units[d]||Vn(jt(n,d))||""),(u+"").charAt(1)==="="&&(u=jt(n,d))):u=jt(n,d),h=parseFloat(u),x=c==="string"&&p.charAt(1)==="="&&p.substr(0,2),x&&(p=p.substr(2)),f=parseFloat(p),d in It&&(d==="autoAlpha"&&(h===1&&jt(n,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,i.visibility),rs(this,i,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=It[d],~d.indexOf(",")&&(d=d.split(",")[0]))),w=d in Xt,w){if(this.styles.save(d),c==="string"&&p.substring(0,6)==="var(--"&&(p=xt(n,p.substring(4,p.indexOf(")"))),f=parseFloat(p)),S||(k=n._gsap,k.renderTransform&&!s.parseTransform||Ne(n,s.parseTransform),y=s.smoothOrigin!==!1&&k.smooth,S=this._pt=new tt(this._pt,i,Pn,0,1,k.renderTransform,k,0,-1),S.dep=1),d==="scale")this._pt=new tt(this._pt,k,"scaleY",k.scaleY,(x?Us(k.scaleY,x+f):f)-k.scaleY||0,Br),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){b.push(st,0,i[st]),p=Zh(p),k.svg?Hr(n,p,0,y,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==k.zOrigin&&rs(this,k,"zOrigin",k.zOrigin,v),rs(this,i,d,Ca(u),Ca(p)));continue}else if(d==="svgOrigin"){Hr(n,p,1,y,0,this);continue}else if(d in pc){eg(this,k,d,h,x?Us(h,x+p):p);continue}else if(d==="smoothOrigin"){rs(this,k,"smooth",k.smooth,p);continue}else if(d==="force3D"){k[d]=p;continue}else if(d==="transform"){ag(this,p,n);continue}}else d in i||(d=se(d)||d);if(w||(f||f===0)&&(h||h===0)&&!Hh.test(p)&&d in i)m=(u+"").substr((h+"").length),f||(f=0),v=Vn(p)||(d in ft.units?ft.units[d]:m),m!==v&&(h=ds(n,d,u,v)),this._pt=new tt(this._pt,w?k:i,d,h,(x?Us(h,x+f):f)-h,!w&&(v==="px"||d==="zIndex")&&s.autoRound!==!1?jh:Br),this._pt.u=v||0,m!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=Nh);else if(d in i)Jh.call(this,n,d,u,x?x+p:p);else if(d in n)this.add(n,d,u||n[d],x?x+p:p,a,e);else if(d!=="parseTransform"){uo(d,p);continue}w||(d in i?b.push(d,0,i[d]):typeof n[d]=="function"?b.push(d,2,n[d]()):b.push(d,1,u||n[d])),o.push(d)}}_&&nc(this)},render:function(n,s){if(s.tween._time||!_o())for(var r=s._pt;r;)r.r(n,r.d),r=r._next;else s.styles.revert()},get:jt,aliases:It,getSetter:function(n,s,r){var a=It[s];return a&&a.indexOf(",")<0&&(s=a),s in Xt&&s!==st&&(n._gsap.x||jt(n,"x"))?r&&Di===r?s==="scale"?Wh:Uh:(Di=r||{})&&(s==="scale"?Yh:Gh):n.style&&!lo(n.style[s])?Vh:~s.indexOf("-")?zh:bo(n,s)},core:{_removeProperty:Ps,_getMatrix:Co}};et.utils.checkPrefix=se;et.core.getStyleSaver=rc;(function(t,n,s,r){var a=nt(t+","+n+","+s,function(e){Xt[e]=1});nt(n,function(e){ft.units[e]="deg",pc[e]=1}),It[a[13]]=t+","+n,nt(r,function(e){var o=e.split(":");It[o[1]]=a[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){ft.units[t]="px"});et.registerPlugin(dc);var Vt=et.registerPlugin(dc)||et;Vt.core.Tween;var oa={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var rg=oa.exports,Vi;function og(){return Vi||(Vi=1,function(t,n){(function(r,a){t.exports=a()})(rg,function(){return function(s){var r={};function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return s[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=s,a.c=r,a.d=function(e,o,i){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:i})},a.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(o&1&&(e=a(e)),o&8||o&4&&typeof e=="object"&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),o&2&&typeof e!="string")for(var l in e)a.d(i,l,(function(u){return e[u]}).bind(null,l));return i},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s=20)}([function(s,r){var a={};s.exports=a,function(){a._baseDelta=1e3/60,a._nextId=0,a._seed=0,a._nowStartTime=+new Date,a._warnedOnce={},a._decomp=null,a.extend=function(o,i){var l,u;typeof i=="boolean"?(l=2,u=i):(l=1,u=!0);for(var p=l;p<arguments.length;p++){var f=arguments[p];if(f)for(var h in f)u&&f[h]&&f[h].constructor===Object&&(!o[h]||o[h].constructor===Object)?(o[h]=o[h]||{},a.extend(o[h],u,f[h])):o[h]=f[h]}return o},a.clone=function(o,i){return a.extend({},i,o)},a.keys=function(o){if(Object.keys)return Object.keys(o);var i=[];for(var l in o)i.push(l);return i},a.values=function(o){var i=[];if(Object.keys){for(var l=Object.keys(o),u=0;u<l.length;u++)i.push(o[l[u]]);return i}for(var p in o)i.push(o[p]);return i},a.get=function(o,i,l,u){i=i.split(".").slice(l,u);for(var p=0;p<i.length;p+=1)o=o[i[p]];return o},a.set=function(o,i,l,u,p){var f=i.split(".").slice(u,p);return a.get(o,i,0,-1)[f[f.length-1]]=l,l},a.shuffle=function(o){for(var i=o.length-1;i>0;i--){var l=Math.floor(a.random()*(i+1)),u=o[i];o[i]=o[l],o[l]=u}return o},a.choose=function(o){return o[Math.floor(a.random()*o.length)]},a.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},a.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},a.isFunction=function(o){return typeof o=="function"},a.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},a.isString=function(o){return toString.call(o)==="[object String]"},a.clamp=function(o,i,l){return o<i?i:o>l?l:o},a.sign=function(o){return o<0?-1:1},a.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-a._nowStartTime},a.random=function(o,i){return o=typeof o<"u"?o:0,i=typeof i<"u"?i:1,o+e()*(i-o)};var e=function(){return a._seed=(a._seed*9301+49297)%233280,a._seed/233280};a.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},a.logLevel=1,a.log=function(){console&&a.logLevel>0&&a.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},a.info=function(){console&&a.logLevel>0&&a.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},a.warn=function(){console&&a.logLevel>0&&a.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},a.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");a._warnedOnce[o]||(a.warn(o),a._warnedOnce[o]=!0)},a.deprecated=function(o,i,l){o[i]=a.chain(function(){a.warnOnce("🔅 deprecated 🔅",l)},o[i])},a.nextId=function(){return a._nextId++},a.indexOf=function(o,i){if(o.indexOf)return o.indexOf(i);for(var l=0;l<o.length;l++)if(o[l]===i)return l;return-1},a.map=function(o,i){if(o.map)return o.map(i);for(var l=[],u=0;u<o.length;u+=1)l.push(i(o[u]));return l},a.topologicalSort=function(o){var i=[],l=[],u=[];for(var p in o)!l[p]&&!u[p]&&a._topologicalSort(p,l,u,o,i);return i},a._topologicalSort=function(o,i,l,u,p){var f=u[o]||[];l[o]=!0;for(var h=0;h<f.length;h+=1){var c=f[h];l[c]||i[c]||a._topologicalSort(c,i,l,u,p)}l[o]=!1,i[o]=!0,p.push(o)},a.chain=function(){for(var o=[],i=0;i<arguments.length;i+=1){var l=arguments[i];l._chained?o.push.apply(o,l._chained):o.push(l)}var u=function(){for(var p,f=new Array(arguments.length),h=0,c=arguments.length;h<c;h++)f[h]=arguments[h];for(h=0;h<o.length;h+=1){var g=o[h].apply(p,f);typeof g<"u"&&(p=g)}return p};return u._chained=o,u},a.chainPathBefore=function(o,i,l){return a.set(o,i,a.chain(l,a.get(o,i)))},a.chainPathAfter=function(o,i,l){return a.set(o,i,a.chain(a.get(o,i),l))},a.setDecomp=function(o){a._decomp=o},a.getDecomp=function(){var o=a._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof Si<"u"&&(o=Si.decomp)}catch{o=null}return o}}()},function(s,r){var a={};s.exports=a,function(){a.create=function(e){var o={min:{x:0,y:0},max:{x:0,y:0}};return e&&a.update(o,e),o},a.update=function(e,o,i){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var l=0;l<o.length;l++){var u=o[l];u.x>e.max.x&&(e.max.x=u.x),u.x<e.min.x&&(e.min.x=u.x),u.y>e.max.y&&(e.max.y=u.y),u.y<e.min.y&&(e.min.y=u.y)}i&&(i.x>0?e.max.x+=i.x:e.min.x+=i.x,i.y>0?e.max.y+=i.y:e.min.y+=i.y)},a.contains=function(e,o){return o.x>=e.min.x&&o.x<=e.max.x&&o.y>=e.min.y&&o.y<=e.max.y},a.overlaps=function(e,o){return e.min.x<=o.max.x&&e.max.x>=o.min.x&&e.max.y>=o.min.y&&e.min.y<=o.max.y},a.translate=function(e,o){e.min.x+=o.x,e.max.x+=o.x,e.min.y+=o.y,e.max.y+=o.y},a.shift=function(e,o){var i=e.max.x-e.min.x,l=e.max.y-e.min.y;e.min.x=o.x,e.max.x=o.x+i,e.min.y=o.y,e.max.y=o.y+l}}()},function(s,r){var a={};s.exports=a,function(){a.create=function(e,o){return{x:e||0,y:o||0}},a.clone=function(e){return{x:e.x,y:e.y}},a.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},a.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},a.rotate=function(e,o,i){var l=Math.cos(o),u=Math.sin(o);i||(i={});var p=e.x*l-e.y*u;return i.y=e.x*u+e.y*l,i.x=p,i},a.rotateAbout=function(e,o,i,l){var u=Math.cos(o),p=Math.sin(o);l||(l={});var f=i.x+((e.x-i.x)*u-(e.y-i.y)*p);return l.y=i.y+((e.x-i.x)*p+(e.y-i.y)*u),l.x=f,l},a.normalise=function(e){var o=a.magnitude(e);return o===0?{x:0,y:0}:{x:e.x/o,y:e.y/o}},a.dot=function(e,o){return e.x*o.x+e.y*o.y},a.cross=function(e,o){return e.x*o.y-e.y*o.x},a.cross3=function(e,o,i){return(o.x-e.x)*(i.y-e.y)-(o.y-e.y)*(i.x-e.x)},a.add=function(e,o,i){return i||(i={}),i.x=e.x+o.x,i.y=e.y+o.y,i},a.sub=function(e,o,i){return i||(i={}),i.x=e.x-o.x,i.y=e.y-o.y,i},a.mult=function(e,o){return{x:e.x*o,y:e.y*o}},a.div=function(e,o){return{x:e.x/o,y:e.y/o}},a.perp=function(e,o){return o=o===!0?-1:1,{x:o*-e.y,y:o*e.x}},a.neg=function(e){return{x:-e.x,y:-e.y}},a.angle=function(e,o){return Math.atan2(o.y-e.y,o.x-e.x)},a._temp=[a.create(),a.create(),a.create(),a.create(),a.create(),a.create()]}()},function(s,r,a){var e={};s.exports=e;var o=a(2),i=a(0);(function(){e.create=function(l,u){for(var p=[],f=0;f<l.length;f++){var h=l[f],c={x:h.x,y:h.y,index:f,body:u,isInternal:!1};p.push(c)}return p},e.fromPath=function(l,u){var p=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,f=[];return l.replace(p,function(h,c,g){f.push({x:parseFloat(c),y:parseFloat(g)})}),e.create(f,u)},e.centre=function(l){for(var u=e.area(l,!0),p={x:0,y:0},f,h,c,g=0;g<l.length;g++)c=(g+1)%l.length,f=o.cross(l[g],l[c]),h=o.mult(o.add(l[g],l[c]),f),p=o.add(p,h);return o.div(p,6*u)},e.mean=function(l){for(var u={x:0,y:0},p=0;p<l.length;p++)u.x+=l[p].x,u.y+=l[p].y;return o.div(u,l.length)},e.area=function(l,u){for(var p=0,f=l.length-1,h=0;h<l.length;h++)p+=(l[f].x-l[h].x)*(l[f].y+l[h].y),f=h;return u?p/2:Math.abs(p)/2},e.inertia=function(l,u){for(var p=0,f=0,h=l,c,g,d=0;d<h.length;d++)g=(d+1)%h.length,c=Math.abs(o.cross(h[g],h[d])),p+=c*(o.dot(h[g],h[g])+o.dot(h[g],h[d])+o.dot(h[d],h[d])),f+=c;return u/6*(p/f)},e.translate=function(l,u,p){p=typeof p<"u"?p:1;var f=l.length,h=u.x*p,c=u.y*p,g;for(g=0;g<f;g++)l[g].x+=h,l[g].y+=c;return l},e.rotate=function(l,u,p){if(u!==0){var f=Math.cos(u),h=Math.sin(u),c=p.x,g=p.y,d=l.length,m,v,x,w;for(w=0;w<d;w++)m=l[w],v=m.x-c,x=m.y-g,m.x=c+(v*f-x*h),m.y=g+(v*h+x*f);return l}},e.contains=function(l,u){for(var p=u.x,f=u.y,h=l.length,c=l[h-1],g,d=0;d<h;d++){if(g=l[d],(p-c.x)*(g.y-c.y)+(f-c.y)*(c.x-g.x)>0)return!1;c=g}return!0},e.scale=function(l,u,p,f){if(u===1&&p===1)return l;f=f||e.centre(l);for(var h,c,g=0;g<l.length;g++)h=l[g],c=o.sub(h,f),l[g].x=f.x+c.x*u,l[g].y=f.y+c.y*p;return l},e.chamfer=function(l,u,p,f,h){typeof u=="number"?u=[u]:u=u||[8],p=typeof p<"u"?p:-1,f=f||2,h=h||14;for(var c=[],g=0;g<l.length;g++){var d=l[g-1>=0?g-1:l.length-1],m=l[g],v=l[(g+1)%l.length],x=u[g<u.length?g:u.length-1];if(x===0){c.push(m);continue}var w=o.normalise({x:m.y-d.y,y:d.x-m.x}),S=o.normalise({x:v.y-m.y,y:m.x-v.x}),k=Math.sqrt(2*Math.pow(x,2)),y=o.mult(i.clone(w),x),_=o.normalise(o.mult(o.add(w,S),.5)),b=o.sub(m,o.mult(_,k)),C=p;p===-1&&(C=Math.pow(x,.32)*1.75),C=i.clamp(C,f,h),C%2===1&&(C+=1);for(var P=Math.acos(o.dot(w,S)),M=P/C,T=0;T<C;T++)c.push(o.add(o.rotate(y,M*T),b))}return c},e.clockwiseSort=function(l){var u=e.mean(l);return l.sort(function(p,f){return o.angle(u,p)-o.angle(u,f)}),l},e.isConvex=function(l){var u=0,p=l.length,f,h,c,g;if(p<3)return null;for(f=0;f<p;f++)if(h=(f+1)%p,c=(f+2)%p,g=(l[h].x-l[f].x)*(l[c].y-l[h].y),g-=(l[h].y-l[f].y)*(l[c].x-l[h].x),g<0?u|=1:g>0&&(u|=2),u===3)return!1;return u!==0?!0:null},e.hull=function(l){var u=[],p=[],f,h;for(l=l.slice(0),l.sort(function(c,g){var d=c.x-g.x;return d!==0?d:c.y-g.y}),h=0;h<l.length;h+=1){for(f=l[h];p.length>=2&&o.cross3(p[p.length-2],p[p.length-1],f)<=0;)p.pop();p.push(f)}for(h=l.length-1;h>=0;h-=1){for(f=l[h];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],f)<=0;)u.pop();u.push(f)}return u.pop(),p.pop(),u.concat(p)}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(2),l=a(7),u=a(0),p=a(1),f=a(11);(function(){e._timeCorrection=!0,e._inertiaScale=4,e._nextCollidingGroupId=1,e._nextNonCollidingGroupId=-1,e._nextCategory=1,e._baseDelta=1e3/60,e.create=function(c){var g={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},d=u.extend(g,c);return h(d,c),d},e.nextGroup=function(c){return c?e._nextNonCollidingGroupId--:e._nextCollidingGroupId++},e.nextCategory=function(){return e._nextCategory=e._nextCategory<<1,e._nextCategory};var h=function(c,g){g=g||{},e.set(c,{bounds:c.bounds||p.create(c.vertices),positionPrev:c.positionPrev||i.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),o.rotate(c.vertices,c.angle,c.position),f.rotate(c.axes,c.angle),p.update(c.bounds,c.vertices,c.velocity),e.set(c,{axes:g.axes||c.axes,area:g.area||c.area,mass:g.mass||c.mass,inertia:g.inertia||c.inertia});var d=c.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=c.isStatic?"#555":"#ccc",v=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||d,c.render.strokeStyle=c.render.strokeStyle||m,c.render.lineWidth=c.render.lineWidth||v,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};e.set=function(c,g,d){var m;typeof g=="string"&&(m=g,g={},g[m]=d);for(m in g)if(Object.prototype.hasOwnProperty.call(g,m))switch(d=g[m],m){case"isStatic":e.setStatic(c,d);break;case"isSleeping":l.set(c,d);break;case"mass":e.setMass(c,d);break;case"density":e.setDensity(c,d);break;case"inertia":e.setInertia(c,d);break;case"vertices":e.setVertices(c,d);break;case"position":e.setPosition(c,d);break;case"angle":e.setAngle(c,d);break;case"velocity":e.setVelocity(c,d);break;case"angularVelocity":e.setAngularVelocity(c,d);break;case"speed":e.setSpeed(c,d);break;case"angularSpeed":e.setAngularSpeed(c,d);break;case"parts":e.setParts(c,d);break;case"centre":e.setCentre(c,d);break;default:c[m]=d}},e.setStatic=function(c,g){for(var d=0;d<c.parts.length;d++){var m=c.parts[d];g?(m.isStatic||(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia}),m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null),m.isStatic=g}},e.setMass=function(c,g){var d=c.inertia/(c.mass/6);c.inertia=d*(g/6),c.inverseInertia=1/c.inertia,c.mass=g,c.inverseMass=1/c.mass,c.density=c.mass/c.area},e.setDensity=function(c,g){e.setMass(c,g*c.area),c.density=g},e.setInertia=function(c,g){c.inertia=g,c.inverseInertia=1/c.inertia},e.setVertices=function(c,g){g[0].body===c?c.vertices=g:c.vertices=o.create(g,c),c.axes=f.fromVertices(c.vertices),c.area=o.area(c.vertices),e.setMass(c,c.density*c.area);var d=o.centre(c.vertices);o.translate(c.vertices,d,-1),e.setInertia(c,e._inertiaScale*o.inertia(c.vertices,c.mass)),o.translate(c.vertices,c.position),p.update(c.bounds,c.vertices,c.velocity)},e.setParts=function(c,g,d){var m;for(g=g.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,m=0;m<g.length;m++){var v=g[m];v!==c&&(v.parent=c,c.parts.push(v))}if(c.parts.length!==1){if(d=typeof d<"u"?d:!0,d){var x=[];for(m=0;m<g.length;m++)x=x.concat(g[m].vertices);o.clockwiseSort(x);var w=o.hull(x),S=o.centre(w);e.setVertices(c,w),o.translate(c.vertices,S)}var k=e._totalProperties(c);c.area=k.area,c.parent=c,c.position.x=k.centre.x,c.position.y=k.centre.y,c.positionPrev.x=k.centre.x,c.positionPrev.y=k.centre.y,e.setMass(c,k.mass),e.setInertia(c,k.inertia),e.setPosition(c,k.centre)}},e.setCentre=function(c,g,d){d?(c.positionPrev.x+=g.x,c.positionPrev.y+=g.y,c.position.x+=g.x,c.position.y+=g.y):(c.positionPrev.x=g.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=g.y-(c.position.y-c.positionPrev.y),c.position.x=g.x,c.position.y=g.y)},e.setPosition=function(c,g,d){var m=i.sub(g,c.position);d?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=m.x,c.velocity.y=m.y,c.speed=i.magnitude(m)):(c.positionPrev.x+=m.x,c.positionPrev.y+=m.y);for(var v=0;v<c.parts.length;v++){var x=c.parts[v];x.position.x+=m.x,x.position.y+=m.y,o.translate(x.vertices,m),p.update(x.bounds,x.vertices,c.velocity)}},e.setAngle=function(c,g,d){var m=g-c.angle;d?(c.anglePrev=c.angle,c.angularVelocity=m,c.angularSpeed=Math.abs(m)):c.anglePrev+=m;for(var v=0;v<c.parts.length;v++){var x=c.parts[v];x.angle+=m,o.rotate(x.vertices,m,c.position),f.rotate(x.axes,m),p.update(x.bounds,x.vertices,c.velocity),v>0&&i.rotateAbout(x.position,m,c.position,x.position)}},e.setVelocity=function(c,g){var d=c.deltaTime/e._baseDelta;c.positionPrev.x=c.position.x-g.x*d,c.positionPrev.y=c.position.y-g.y*d,c.velocity.x=(c.position.x-c.positionPrev.x)/d,c.velocity.y=(c.position.y-c.positionPrev.y)/d,c.speed=i.magnitude(c.velocity)},e.getVelocity=function(c){var g=e._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*g,y:(c.position.y-c.positionPrev.y)*g}},e.getSpeed=function(c){return i.magnitude(e.getVelocity(c))},e.setSpeed=function(c,g){e.setVelocity(c,i.mult(i.normalise(e.getVelocity(c)),g))},e.setAngularVelocity=function(c,g){var d=c.deltaTime/e._baseDelta;c.anglePrev=c.angle-g*d,c.angularVelocity=(c.angle-c.anglePrev)/d,c.angularSpeed=Math.abs(c.angularVelocity)},e.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*e._baseDelta/c.deltaTime},e.getAngularSpeed=function(c){return Math.abs(e.getAngularVelocity(c))},e.setAngularSpeed=function(c,g){e.setAngularVelocity(c,u.sign(e.getAngularVelocity(c))*g)},e.translate=function(c,g,d){e.setPosition(c,i.add(c.position,g),d)},e.rotate=function(c,g,d,m){if(!d)e.setAngle(c,c.angle+g,m);else{var v=Math.cos(g),x=Math.sin(g),w=c.position.x-d.x,S=c.position.y-d.y;e.setPosition(c,{x:d.x+(w*v-S*x),y:d.y+(w*x+S*v)},m),e.setAngle(c,c.angle+g,m)}},e.scale=function(c,g,d,m){var v=0,x=0;m=m||c.position;for(var w=0;w<c.parts.length;w++){var S=c.parts[w];o.scale(S.vertices,g,d,m),S.axes=f.fromVertices(S.vertices),S.area=o.area(S.vertices),e.setMass(S,c.density*S.area),o.translate(S.vertices,{x:-S.position.x,y:-S.position.y}),e.setInertia(S,e._inertiaScale*o.inertia(S.vertices,S.mass)),o.translate(S.vertices,{x:S.position.x,y:S.position.y}),w>0&&(v+=S.area,x+=S.inertia),S.position.x=m.x+(S.position.x-m.x)*g,S.position.y=m.y+(S.position.y-m.y)*d,p.update(S.bounds,S.vertices,c.velocity)}c.parts.length>1&&(c.area=v,c.isStatic||(e.setMass(c,c.density*v),e.setInertia(c,x))),c.circleRadius&&(g===d?c.circleRadius*=g:c.circleRadius=null)},e.update=function(c,g){g=(typeof g<"u"?g:1e3/60)*c.timeScale;var d=g*g,m=e._timeCorrection?g/(c.deltaTime||g):1,v=1-c.frictionAir*(g/u._baseDelta),x=(c.position.x-c.positionPrev.x)*m,w=(c.position.y-c.positionPrev.y)*m;c.velocity.x=x*v+c.force.x/c.mass*d,c.velocity.y=w*v+c.force.y/c.mass*d,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=g,c.angularVelocity=(c.angle-c.anglePrev)*v*m+c.torque/c.inertia*d,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var S=0;S<c.parts.length;S++){var k=c.parts[S];o.translate(k.vertices,c.velocity),S>0&&(k.position.x+=c.velocity.x,k.position.y+=c.velocity.y),c.angularVelocity!==0&&(o.rotate(k.vertices,c.angularVelocity,c.position),f.rotate(k.axes,c.angularVelocity),S>0&&i.rotateAbout(k.position,c.angularVelocity,c.position,k.position)),p.update(k.bounds,k.vertices,c.velocity)}},e.updateVelocities=function(c){var g=e._baseDelta/c.deltaTime,d=c.velocity;d.x=(c.position.x-c.positionPrev.x)*g,d.y=(c.position.y-c.positionPrev.y)*g,c.speed=Math.sqrt(d.x*d.x+d.y*d.y),c.angularVelocity=(c.angle-c.anglePrev)*g,c.angularSpeed=Math.abs(c.angularVelocity)},e.applyForce=function(c,g,d){var m={x:g.x-c.position.x,y:g.y-c.position.y};c.force.x+=d.x,c.force.y+=d.y,c.torque+=m.x*d.y-m.y*d.x},e._totalProperties=function(c){for(var g={mass:0,area:0,inertia:0,centre:{x:0,y:0}},d=c.parts.length===1?0:1;d<c.parts.length;d++){var m=c.parts[d],v=m.mass!==1/0?m.mass:1;g.mass+=v,g.area+=m.area,g.inertia+=m.inertia,g.centre=i.add(g.centre,i.mult(m.position,v))}return g.centre=i.div(g.centre,g.mass),g}})()},function(s,r,a){var e={};s.exports=e;var o=a(0);(function(){e.on=function(i,l,u){for(var p=l.split(" "),f,h=0;h<p.length;h++)f=p[h],i.events=i.events||{},i.events[f]=i.events[f]||[],i.events[f].push(u);return u},e.off=function(i,l,u){if(!l){i.events={};return}typeof l=="function"&&(u=l,l=o.keys(i.events).join(" "));for(var p=l.split(" "),f=0;f<p.length;f++){var h=i.events[p[f]],c=[];if(u&&h)for(var g=0;g<h.length;g++)h[g]!==u&&c.push(h[g]);i.events[p[f]]=c}},e.trigger=function(i,l,u){var p,f,h,c,g=i.events;if(g&&o.keys(g).length>0){u||(u={}),p=l.split(" ");for(var d=0;d<p.length;d++)if(f=p[d],h=g[f],h){c=o.clone(u,!1),c.name=f,c.source=i;for(var m=0;m<h.length;m++)h[m].apply(i,[c])}}}})()},function(s,r,a){var e={};s.exports=e;var o=a(5),i=a(0),l=a(1),u=a(4);(function(){e.create=function(p){return i.extend({id:i.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},p)},e.setModified=function(p,f,h,c){if(p.isModified=f,f&&p.cache&&(p.cache.allBodies=null,p.cache.allConstraints=null,p.cache.allComposites=null),h&&p.parent&&e.setModified(p.parent,f,h,c),c)for(var g=0;g<p.composites.length;g++){var d=p.composites[g];e.setModified(d,f,h,c)}},e.add=function(p,f){var h=[].concat(f);o.trigger(p,"beforeAdd",{object:f});for(var c=0;c<h.length;c++){var g=h[c];switch(g.type){case"body":if(g.parent!==g){i.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}e.addBody(p,g);break;case"constraint":e.addConstraint(p,g);break;case"composite":e.addComposite(p,g);break;case"mouseConstraint":e.addConstraint(p,g.constraint);break}}return o.trigger(p,"afterAdd",{object:f}),p},e.remove=function(p,f,h){var c=[].concat(f);o.trigger(p,"beforeRemove",{object:f});for(var g=0;g<c.length;g++){var d=c[g];switch(d.type){case"body":e.removeBody(p,d,h);break;case"constraint":e.removeConstraint(p,d,h);break;case"composite":e.removeComposite(p,d,h);break;case"mouseConstraint":e.removeConstraint(p,d.constraint);break}}return o.trigger(p,"afterRemove",{object:f}),p},e.addComposite=function(p,f){return p.composites.push(f),f.parent=p,e.setModified(p,!0,!0,!1),p},e.removeComposite=function(p,f,h){var c=i.indexOf(p.composites,f);if(c!==-1){var g=e.allBodies(f);e.removeCompositeAt(p,c);for(var d=0;d<g.length;d++)g[d].sleepCounter=0}if(h)for(var d=0;d<p.composites.length;d++)e.removeComposite(p.composites[d],f,!0);return p},e.removeCompositeAt=function(p,f){return p.composites.splice(f,1),e.setModified(p,!0,!0,!1),p},e.addBody=function(p,f){return p.bodies.push(f),e.setModified(p,!0,!0,!1),p},e.removeBody=function(p,f,h){var c=i.indexOf(p.bodies,f);if(c!==-1&&(e.removeBodyAt(p,c),f.sleepCounter=0),h)for(var g=0;g<p.composites.length;g++)e.removeBody(p.composites[g],f,!0);return p},e.removeBodyAt=function(p,f){return p.bodies.splice(f,1),e.setModified(p,!0,!0,!1),p},e.addConstraint=function(p,f){return p.constraints.push(f),e.setModified(p,!0,!0,!1),p},e.removeConstraint=function(p,f,h){var c=i.indexOf(p.constraints,f);if(c!==-1&&e.removeConstraintAt(p,c),h)for(var g=0;g<p.composites.length;g++)e.removeConstraint(p.composites[g],f,!0);return p},e.removeConstraintAt=function(p,f){return p.constraints.splice(f,1),e.setModified(p,!0,!0,!1),p},e.clear=function(p,f,h){if(h)for(var c=0;c<p.composites.length;c++)e.clear(p.composites[c],f,!0);return f?p.bodies=p.bodies.filter(function(g){return g.isStatic}):p.bodies.length=0,p.constraints.length=0,p.composites.length=0,e.setModified(p,!0,!0,!1),p},e.allBodies=function(p){if(p.cache&&p.cache.allBodies)return p.cache.allBodies;for(var f=[].concat(p.bodies),h=0;h<p.composites.length;h++)f=f.concat(e.allBodies(p.composites[h]));return p.cache&&(p.cache.allBodies=f),f},e.allConstraints=function(p){if(p.cache&&p.cache.allConstraints)return p.cache.allConstraints;for(var f=[].concat(p.constraints),h=0;h<p.composites.length;h++)f=f.concat(e.allConstraints(p.composites[h]));return p.cache&&(p.cache.allConstraints=f),f},e.allComposites=function(p){if(p.cache&&p.cache.allComposites)return p.cache.allComposites;for(var f=[].concat(p.composites),h=0;h<p.composites.length;h++)f=f.concat(e.allComposites(p.composites[h]));return p.cache&&(p.cache.allComposites=f),f},e.get=function(p,f,h){var c,g;switch(h){case"body":c=e.allBodies(p);break;case"constraint":c=e.allConstraints(p);break;case"composite":c=e.allComposites(p).concat(p);break}return c?(g=c.filter(function(d){return d.id.toString()===f.toString()}),g.length===0?null:g[0]):null},e.move=function(p,f,h){return e.remove(p,f),e.add(h,f),p},e.rebase=function(p){for(var f=e.allBodies(p).concat(e.allConstraints(p)).concat(e.allComposites(p)),h=0;h<f.length;h++)f[h].id=i.nextId();return p},e.translate=function(p,f,h){for(var c=h?e.allBodies(p):p.bodies,g=0;g<c.length;g++)u.translate(c[g],f);return p},e.rotate=function(p,f,h,c){for(var g=Math.cos(f),d=Math.sin(f),m=c?e.allBodies(p):p.bodies,v=0;v<m.length;v++){var x=m[v],w=x.position.x-h.x,S=x.position.y-h.y;u.setPosition(x,{x:h.x+(w*g-S*d),y:h.y+(w*d+S*g)}),u.rotate(x,f)}return p},e.scale=function(p,f,h,c,g){for(var d=g?e.allBodies(p):p.bodies,m=0;m<d.length;m++){var v=d[m],x=v.position.x-c.x,w=v.position.y-c.y;u.setPosition(v,{x:c.x+x*f,y:c.y+w*h}),u.scale(v,f,h)}return p},e.bounds=function(p){for(var f=e.allBodies(p),h=[],c=0;c<f.length;c+=1){var g=f[c];h.push(g.bounds.min,g.bounds.max)}return l.create(h)}})()},function(s,r,a){var e={};s.exports=e;var o=a(4),i=a(5),l=a(0);(function(){e._motionWakeThreshold=.18,e._motionSleepThreshold=.08,e._minBias=.9,e.update=function(u,p){for(var f=p/l._baseDelta,h=e._motionSleepThreshold,c=0;c<u.length;c++){var g=u[c],d=o.getSpeed(g),m=o.getAngularSpeed(g),v=d*d+m*m;if(g.force.x!==0||g.force.y!==0){e.set(g,!1);continue}var x=Math.min(g.motion,v),w=Math.max(g.motion,v);g.motion=e._minBias*x+(1-e._minBias)*w,g.sleepThreshold>0&&g.motion<h?(g.sleepCounter+=1,g.sleepCounter>=g.sleepThreshold/f&&e.set(g,!0)):g.sleepCounter>0&&(g.sleepCounter-=1)}},e.afterCollisions=function(u){for(var p=e._motionSleepThreshold,f=0;f<u.length;f++){var h=u[f];if(h.isActive){var c=h.collision,g=c.bodyA.parent,d=c.bodyB.parent;if(!(g.isSleeping&&d.isSleeping||g.isStatic||d.isStatic)&&(g.isSleeping||d.isSleeping)){var m=g.isSleeping&&!g.isStatic?g:d,v=m===g?d:g;!m.isStatic&&v.motion>p&&e.set(m,!1)}}}},e.set=function(u,p){var f=u.isSleeping;p?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,f||i.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,f&&i.trigger(u,"sleepEnd"))}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(9);(function(){var l=[],u={overlap:0,axis:null},p={overlap:0,axis:null};e.create=function(f,h){return{pair:null,collided:!1,bodyA:f,bodyB:h,parentA:f.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},e.collides=function(f,h,c){if(e._overlapAxes(u,f.vertices,h.vertices,f.axes),u.overlap<=0||(e._overlapAxes(p,h.vertices,f.vertices,h.axes),p.overlap<=0))return null;var g=c&&c.table[i.id(f,h)],d;g?d=g.collision:(d=e.create(f,h),d.collided=!0,d.bodyA=f.id<h.id?f:h,d.bodyB=f.id<h.id?h:f,d.parentA=d.bodyA.parent,d.parentB=d.bodyB.parent),f=d.bodyA,h=d.bodyB;var m;u.overlap<p.overlap?m=u:m=p;var v=d.normal,x=d.tangent,w=d.penetration,S=d.supports,k=m.overlap,y=m.axis,_=y.x,b=y.y,C=h.position.x-f.position.x,P=h.position.y-f.position.y;_*C+b*P>=0&&(_=-_,b=-b),v.x=_,v.y=b,x.x=-b,x.y=_,w.x=_*k,w.y=b*k,d.depth=k;var M=e._findSupports(f,h,v,1),T=0;if(o.contains(f.vertices,M[0])&&(S[T++]=M[0]),o.contains(f.vertices,M[1])&&(S[T++]=M[1]),T<2){var O=e._findSupports(h,f,v,-1);o.contains(h.vertices,O[0])&&(S[T++]=O[0]),T<2&&o.contains(h.vertices,O[1])&&(S[T++]=O[1])}return T===0&&(S[T++]=M[0]),d.supportCount=T,d},e._overlapAxes=function(f,h,c,g){var d=h.length,m=c.length,v=h[0].x,x=h[0].y,w=c[0].x,S=c[0].y,k=g.length,y=Number.MAX_VALUE,_=0,b,C,P,M,T,O;for(T=0;T<k;T++){var I=g[T],B=I.x,N=I.y,q=v*B+x*N,U=w*B+S*N,nn=q,on=U;for(O=1;O<d;O+=1)M=h[O].x*B+h[O].y*N,M>nn?nn=M:M<q&&(q=M);for(O=1;O<m;O+=1)M=c[O].x*B+c[O].y*N,M>on?on=M:M<U&&(U=M);if(C=nn-U,P=on-q,b=C<P?C:P,b<y&&(y=b,_=T,b<=0))break}f.axis=g[_],f.overlap=y},e._findSupports=function(f,h,c,g){var d=h.vertices,m=d.length,v=f.position.x,x=f.position.y,w=c.x*g,S=c.y*g,k=d[0],y=k,_=w*(v-y.x)+S*(x-y.y),b,C,P;for(P=1;P<m;P+=1)y=d[P],C=w*(v-y.x)+S*(x-y.y),C<_&&(_=C,k=y);return b=d[(m+k.index-1)%m],_=w*(v-b.x)+S*(x-b.y),y=d[(k.index+1)%m],w*(v-y.x)+S*(x-y.y)<_?(l[0]=k,l[1]=y,l):(l[0]=k,l[1]=b,l)}})()},function(s,r,a){var e={};s.exports=e;var o=a(16);(function(){e.create=function(i,l){var u=i.bodyA,p=i.bodyB,f={id:e.id(u,p),bodyA:u,bodyB:p,collision:i,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||p.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return e.update(f,i,l),f},e.update=function(i,l,u){var p=l.supports,f=l.supportCount,h=i.contacts,c=l.parentA,g=l.parentB;i.isActive=!0,i.timeUpdated=u,i.collision=l,i.separation=l.depth,i.inverseMass=c.inverseMass+g.inverseMass,i.friction=c.friction<g.friction?c.friction:g.friction,i.frictionStatic=c.frictionStatic>g.frictionStatic?c.frictionStatic:g.frictionStatic,i.restitution=c.restitution>g.restitution?c.restitution:g.restitution,i.slop=c.slop>g.slop?c.slop:g.slop,i.contactCount=f,l.pair=i;var d=p[0],m=h[0],v=p[1],x=h[1];(x.vertex===d||m.vertex===v)&&(h[1]=m,h[0]=m=x,x=h[1]),m.vertex=d,x.vertex=v},e.setActive=function(i,l,u){l?(i.isActive=!0,i.timeUpdated=u):(i.isActive=!1,i.contactCount=0)},e.id=function(i,l){return i.id<l.id?i.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+i.id.toString(36)}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(2),l=a(7),u=a(1),p=a(11),f=a(0);(function(){e._warming=.4,e._torqueDampen=1,e._minLength=1e-6,e.create=function(h){var c=h;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var g=c.bodyA?i.add(c.bodyA.position,c.pointA):c.pointA,d=c.bodyB?i.add(c.bodyB.position,c.pointB):c.pointB,m=i.magnitude(i.sub(g,d));c.length=typeof c.length<"u"?c.length:m,c.id=c.id||f.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var v={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(v.type="pin",v.anchors=!1):c.stiffness<.9&&(v.type="spring"),c.render=f.extend(v,c.render),c},e.preSolveAll=function(h){for(var c=0;c<h.length;c+=1){var g=h[c],d=g.constraintImpulse;g.isStatic||d.x===0&&d.y===0&&d.angle===0||(g.position.x+=d.x,g.position.y+=d.y,g.angle+=d.angle)}},e.solveAll=function(h,c){for(var g=f.clamp(c/f._baseDelta,0,1),d=0;d<h.length;d+=1){var m=h[d],v=!m.bodyA||m.bodyA&&m.bodyA.isStatic,x=!m.bodyB||m.bodyB&&m.bodyB.isStatic;(v||x)&&e.solve(h[d],g)}for(d=0;d<h.length;d+=1)m=h[d],v=!m.bodyA||m.bodyA&&m.bodyA.isStatic,x=!m.bodyB||m.bodyB&&m.bodyB.isStatic,!v&&!x&&e.solve(h[d],g)},e.solve=function(h,c){var g=h.bodyA,d=h.bodyB,m=h.pointA,v=h.pointB;if(!(!g&&!d)){g&&!g.isStatic&&(i.rotate(m,g.angle-h.angleA,m),h.angleA=g.angle),d&&!d.isStatic&&(i.rotate(v,d.angle-h.angleB,v),h.angleB=d.angle);var x=m,w=v;if(g&&(x=i.add(g.position,m)),d&&(w=i.add(d.position,v)),!(!x||!w)){var S=i.sub(x,w),k=i.magnitude(S);k<e._minLength&&(k=e._minLength);var y=(k-h.length)/k,_=h.stiffness>=1||h.length===0,b=_?h.stiffness*c:h.stiffness*c*c,C=h.damping*c,P=i.mult(S,y*b),M=(g?g.inverseMass:0)+(d?d.inverseMass:0),T=(g?g.inverseInertia:0)+(d?d.inverseInertia:0),O=M+T,I,B,N,q,U;if(C>0){var nn=i.create();N=i.div(S,k),U=i.sub(d&&i.sub(d.position,d.positionPrev)||nn,g&&i.sub(g.position,g.positionPrev)||nn),q=i.dot(N,U)}g&&!g.isStatic&&(B=g.inverseMass/M,g.constraintImpulse.x-=P.x*B,g.constraintImpulse.y-=P.y*B,g.position.x-=P.x*B,g.position.y-=P.y*B,C>0&&(g.positionPrev.x-=C*N.x*q*B,g.positionPrev.y-=C*N.y*q*B),I=i.cross(m,P)/O*e._torqueDampen*g.inverseInertia*(1-h.angularStiffness),g.constraintImpulse.angle-=I,g.angle-=I),d&&!d.isStatic&&(B=d.inverseMass/M,d.constraintImpulse.x+=P.x*B,d.constraintImpulse.y+=P.y*B,d.position.x+=P.x*B,d.position.y+=P.y*B,C>0&&(d.positionPrev.x+=C*N.x*q*B,d.positionPrev.y+=C*N.y*q*B),I=i.cross(v,P)/O*e._torqueDampen*d.inverseInertia*(1-h.angularStiffness),d.constraintImpulse.angle+=I,d.angle+=I)}}},e.postSolveAll=function(h){for(var c=0;c<h.length;c++){var g=h[c],d=g.constraintImpulse;if(!(g.isStatic||d.x===0&&d.y===0&&d.angle===0)){l.set(g,!1);for(var m=0;m<g.parts.length;m++){var v=g.parts[m];o.translate(v.vertices,d),m>0&&(v.position.x+=d.x,v.position.y+=d.y),d.angle!==0&&(o.rotate(v.vertices,d.angle,g.position),p.rotate(v.axes,d.angle),m>0&&i.rotateAbout(v.position,d.angle,g.position,v.position)),u.update(v.bounds,v.vertices,g.velocity)}d.angle*=e._warming,d.x*=e._warming,d.y*=e._warming}}},e.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},e.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}},e.currentLength=function(h){var c=(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),g=(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0),d=(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),m=(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0),v=c-d,x=g-m;return Math.sqrt(v*v+x*x)}})()},function(s,r,a){var e={};s.exports=e;var o=a(2),i=a(0);(function(){e.fromVertices=function(l){for(var u={},p=0;p<l.length;p++){var f=(p+1)%l.length,h=o.normalise({x:l[f].y-l[p].y,y:l[p].x-l[f].x}),c=h.y===0?1/0:h.x/h.y;c=c.toFixed(3).toString(),u[c]=h}return i.values(u)},e.rotate=function(l,u){if(u!==0)for(var p=Math.cos(u),f=Math.sin(u),h=0;h<l.length;h++){var c=l[h],g;g=c.x*p-c.y*f,c.y=c.x*f+c.y*p,c.x=g}}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(0),l=a(4),u=a(1),p=a(2);(function(){e.rectangle=function(f,h,c,g,d){d=d||{};var m={label:"Rectangle Body",position:{x:f,y:h},vertices:o.fromPath("L 0 0 L "+c+" 0 L "+c+" "+g+" L 0 "+g)};if(d.chamfer){var v=d.chamfer;m.vertices=o.chamfer(m.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete d.chamfer}return l.create(i.extend({},m,d))},e.trapezoid=function(f,h,c,g,d,m){m=m||{},d>=1&&i.warn("Bodies.trapezoid: slope parameter must be < 1."),d*=.5;var v=(1-d*2)*c,x=c*d,w=x+v,S=w+x,k;d<.5?k="L 0 0 L "+x+" "+-g+" L "+w+" "+-g+" L "+S+" 0":k="L 0 0 L "+w+" "+-g+" L "+S+" 0";var y={label:"Trapezoid Body",position:{x:f,y:h},vertices:o.fromPath(k)};if(m.chamfer){var _=m.chamfer;y.vertices=o.chamfer(y.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete m.chamfer}return l.create(i.extend({},y,m))},e.circle=function(f,h,c,g,d){g=g||{};var m={label:"Circle Body",circleRadius:c};d=d||25;var v=Math.ceil(Math.max(10,Math.min(d,c)));return v%2===1&&(v+=1),e.polygon(f,h,v,c,i.extend({},m,g))},e.polygon=function(f,h,c,g,d){if(d=d||{},c<3)return e.circle(f,h,g,d);for(var m=2*Math.PI/c,v="",x=m*.5,w=0;w<c;w+=1){var S=x+w*m,k=Math.cos(S)*g,y=Math.sin(S)*g;v+="L "+k.toFixed(3)+" "+y.toFixed(3)+" "}var _={label:"Polygon Body",position:{x:f,y:h},vertices:o.fromPath(v)};if(d.chamfer){var b=d.chamfer;_.vertices=o.chamfer(_.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete d.chamfer}return l.create(i.extend({},_,d))},e.fromVertices=function(f,h,c,g,d,m,v,x){var w=i.getDecomp(),S,k,y,_,b,C,P,M,T,O,I;for(S=!!(w&&w.quickDecomp),g=g||{},y=[],d=typeof d<"u"?d:!1,m=typeof m<"u"?m:.01,v=typeof v<"u"?v:10,x=typeof x<"u"?x:.01,i.isArray(c[0])||(c=[c]),O=0;O<c.length;O+=1)if(C=c[O],_=o.isConvex(C),b=!_,b&&!S&&i.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),_||!S)_?C=o.clockwiseSort(C):C=o.hull(C),y.push({position:{x:f,y:h},vertices:C});else{var B=C.map(function(J){return[J.x,J.y]});w.makeCCW(B),m!==!1&&w.removeCollinearPoints(B,m),x!==!1&&w.removeDuplicatePoints&&w.removeDuplicatePoints(B,x);var N=w.quickDecomp(B);for(P=0;P<N.length;P++){var q=N[P],U=q.map(function(J){return{x:J[0],y:J[1]}});v>0&&o.area(U)<v||y.push({position:o.centre(U),vertices:U})}}for(P=0;P<y.length;P++)y[P]=l.create(i.extend(y[P],g));if(d){var nn=5;for(P=0;P<y.length;P++){var on=y[P];for(M=P+1;M<y.length;M++){var pn=y[M];if(u.overlaps(on.bounds,pn.bounds)){var an=on.vertices,un=pn.vertices;for(T=0;T<on.vertices.length;T++)for(I=0;I<pn.vertices.length;I++){var cn=p.magnitudeSquared(p.sub(an[(T+1)%an.length],un[I])),dn=p.magnitudeSquared(p.sub(an[T],un[(I+1)%un.length]));cn<nn&&dn<nn&&(an[T].isInternal=!0,un[I].isInternal=!0)}}}}}return y.length>1?(k=l.create(i.extend({parts:y.slice(0)},g)),l.setPosition(k,{x:f,y:h}),k):y[0]}})()},function(s,r,a){var e={};s.exports=e;var o=a(0),i=a(8);(function(){e.create=function(l){var u={bodies:[],collisions:[],pairs:null};return o.extend(u,l)},e.setBodies=function(l,u){l.bodies=u.slice(0)},e.clear=function(l){l.bodies=[],l.collisions=[]},e.collisions=function(l){var u=l.pairs,p=l.bodies,f=p.length,h=e.canCollide,c=i.collides,g=l.collisions,d=0,m,v;for(p.sort(e._compareBoundsX),m=0;m<f;m++){var x=p[m],w=x.bounds,S=x.bounds.max.x,k=x.bounds.max.y,y=x.bounds.min.y,_=x.isStatic||x.isSleeping,b=x.parts.length,C=b===1;for(v=m+1;v<f;v++){var P=p[v],M=P.bounds;if(M.min.x>S)break;if(!(k<M.min.y||y>M.max.y)&&!(_&&(P.isStatic||P.isSleeping))&&h(x.collisionFilter,P.collisionFilter)){var T=P.parts.length;if(C&&T===1){var O=c(x,P,u);O&&(g[d++]=O)}else for(var I=b>1?1:0,B=T>1?1:0,N=I;N<b;N++)for(var q=x.parts[N],w=q.bounds,U=B;U<T;U++){var nn=P.parts[U],M=nn.bounds;if(!(w.min.x>M.max.x||w.max.x<M.min.x||w.max.y<M.min.y||w.min.y>M.max.y)){var O=c(q,nn,u);O&&(g[d++]=O)}}}}}return g.length!==d&&(g.length=d),g},e.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},e._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()},function(s,r,a){var e={};s.exports=e;var o=a(0);(function(){e.create=function(i){var l={};return i||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=i||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var p=e._getRelativeMousePosition(u,l.element,l.pixelRatio),f=u.changedTouches;f&&(l.button=0,u.preventDefault()),l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var p=e._getRelativeMousePosition(u,l.element,l.pixelRatio),f=u.changedTouches;f?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var p=e._getRelativeMousePosition(u,l.element,l.pixelRatio),f=u.changedTouches;f&&u.preventDefault(),l.button=-1,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),l.sourceEvents.mousewheel=u},e.setElement(l,l.element),l},e.setElement=function(i,l){i.element=l,l.addEventListener("mousemove",i.mousemove,{passive:!0}),l.addEventListener("mousedown",i.mousedown,{passive:!0}),l.addEventListener("mouseup",i.mouseup,{passive:!0}),l.addEventListener("wheel",i.mousewheel,{passive:!1}),l.addEventListener("touchmove",i.mousemove,{passive:!1}),l.addEventListener("touchstart",i.mousedown,{passive:!1}),l.addEventListener("touchend",i.mouseup,{passive:!1})},e.clearSourceEvents=function(i){i.sourceEvents.mousemove=null,i.sourceEvents.mousedown=null,i.sourceEvents.mouseup=null,i.sourceEvents.mousewheel=null,i.wheelDelta=0},e.setOffset=function(i,l){i.offset.x=l.x,i.offset.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},e.setScale=function(i,l){i.scale.x=l.x,i.scale.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},e._getRelativeMousePosition=function(i,l,u){var p=l.getBoundingClientRect(),f=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:f.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:f.scrollTop,g=i.changedTouches,d,m;return g?(d=g[0].pageX-p.left-h,m=g[0].pageY-p.top-c):(d=i.pageX-p.left-h,m=i.pageY-p.top-c),{x:d/(l.clientWidth/(l.width||l.clientWidth)*u),y:m/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()},function(s,r,a){var e={};s.exports=e;var o=a(0);(function(){e._registry={},e.register=function(i){if(e.isPlugin(i)||o.warn("Plugin.register:",e.toString(i),"does not implement all required fields."),i.name in e._registry){var l=e._registry[i.name],u=e.versionParse(i.version).number,p=e.versionParse(l.version).number;u>p?(o.warn("Plugin.register:",e.toString(l),"was upgraded to",e.toString(i)),e._registry[i.name]=i):u<p?o.warn("Plugin.register:",e.toString(l),"can not be downgraded to",e.toString(i)):i!==l&&o.warn("Plugin.register:",e.toString(i),"is already registered to different plugin object")}else e._registry[i.name]=i;return i},e.resolve=function(i){return e._registry[e.dependencyParse(i).name]},e.toString=function(i){return typeof i=="string"?i:(i.name||"anonymous")+"@"+(i.version||i.range||"0.0.0")},e.isPlugin=function(i){return i&&i.name&&i.version&&i.install},e.isUsed=function(i,l){return i.used.indexOf(l)>-1},e.isFor=function(i,l){var u=i.for&&e.dependencyParse(i.for);return!i.for||l.name===u.name&&e.versionSatisfies(l.version,u.range)},e.use=function(i,l){if(i.uses=(i.uses||[]).concat(l||[]),i.uses.length===0){o.warn("Plugin.use:",e.toString(i),"does not specify any dependencies to install.");return}for(var u=e.dependencies(i),p=o.topologicalSort(u),f=[],h=0;h<p.length;h+=1)if(p[h]!==i.name){var c=e.resolve(p[h]);if(!c){f.push("❌ "+p[h]);continue}e.isUsed(i,c.name)||(e.isFor(c,i)||(o.warn("Plugin.use:",e.toString(c),"is for",c.for,"but installed on",e.toString(i)+"."),c._warned=!0),c.install?c.install(i):(o.warn("Plugin.use:",e.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(f.push("🔶 "+e.toString(c)),delete c._warned):f.push("✅ "+e.toString(c)),i.used.push(c.name))}f.length>0&&o.info(f.join("  "))},e.dependencies=function(i,l){var u=e.dependencyParse(i),p=u.name;if(l=l||{},!(p in l)){i=e.resolve(i)||i,l[p]=o.map(i.uses||[],function(h){e.isPlugin(h)&&e.register(h);var c=e.dependencyParse(h),g=e.resolve(h);return g&&!e.versionSatisfies(g.version,c.range)?(o.warn("Plugin.dependencies:",e.toString(g),"does not satisfy",e.toString(c),"used by",e.toString(u)+"."),g._warned=!0,i._warned=!0):g||(o.warn("Plugin.dependencies:",e.toString(h),"used by",e.toString(u),"could not be resolved."),i._warned=!0),c.name});for(var f=0;f<l[p].length;f+=1)e.dependencies(l[p][f],l);return l}},e.dependencyParse=function(i){if(o.isString(i)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(i)||o.warn("Plugin.dependencyParse:",i,"is not a valid dependency string."),{name:i.split("@")[0],range:i.split("@")[1]||"*"}}return{name:i.name,range:i.range||i.version}},e.versionParse=function(i){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(i)||o.warn("Plugin.versionParse:",i,"is not a valid version or range.");var u=l.exec(i),p=Number(u[4]),f=Number(u[5]),h=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:i,operator:u[1]||u[2]||"",major:p,minor:f,patch:h,parts:[p,f,h],prerelease:u[7],number:p*1e8+f*1e4+h}},e.versionSatisfies=function(i,l){l=l||"*";var u=e.versionParse(l),p=e.versionParse(i);if(u.isRange){if(u.operator==="*"||i==="*")return!0;if(u.operator===">")return p.number>u.number;if(u.operator===">=")return p.number>=u.number;if(u.operator==="~")return p.major===u.major&&p.minor===u.minor&&p.patch>=u.patch;if(u.operator==="^")return u.major>0?p.major===u.major&&p.number>=u.number:u.minor>0?p.minor===u.minor&&p.patch>=u.patch:p.patch===u.patch}return i===l||i==="*"}})()},function(s,r){var a={};s.exports=a,function(){a.create=function(e){return{vertex:e,normalImpulse:0,tangentImpulse:0}}}()},function(s,r,a){var e={};s.exports=e;var o=a(7),i=a(18),l=a(13),u=a(19),p=a(5),f=a(6),h=a(10),c=a(0),g=a(4);(function(){e._deltaMax=1e3/60,e.create=function(d){d=d||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},v=c.extend(m,d);return v.world=d.world||f.create({label:"World"}),v.pairs=d.pairs||u.create(),v.detector=d.detector||l.create(),v.detector.pairs=v.pairs,v.grid={buckets:[]},v.world.gravity=v.gravity,v.broadphase=v.grid,v.metrics={},v},e.update=function(d,m){var v=c.now(),x=d.world,w=d.detector,S=d.pairs,k=d.timing,y=k.timestamp,_;m>e._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",e._deltaMax.toFixed(3),"ms."),m=typeof m<"u"?m:c._baseDelta,m*=k.timeScale,k.timestamp+=m,k.lastDelta=m;var b={timestamp:k.timestamp,delta:m};p.trigger(d,"beforeUpdate",b);var C=f.allBodies(x),P=f.allConstraints(x);for(x.isModified&&(l.setBodies(w,C),f.setModified(x,!1,!1,!0)),d.enableSleeping&&o.update(C,m),e._bodiesApplyGravity(C,d.gravity),m>0&&e._bodiesUpdate(C,m),p.trigger(d,"beforeSolve",b),h.preSolveAll(C),_=0;_<d.constraintIterations;_++)h.solveAll(P,m);h.postSolveAll(C);var M=l.collisions(w);u.update(S,M,y),d.enableSleeping&&o.afterCollisions(S.list),S.collisionStart.length>0&&p.trigger(d,"collisionStart",{pairs:S.collisionStart,timestamp:k.timestamp,delta:m});var T=c.clamp(20/d.positionIterations,0,1);for(i.preSolvePosition(S.list),_=0;_<d.positionIterations;_++)i.solvePosition(S.list,m,T);for(i.postSolvePosition(C),h.preSolveAll(C),_=0;_<d.constraintIterations;_++)h.solveAll(P,m);for(h.postSolveAll(C),i.preSolveVelocity(S.list),_=0;_<d.velocityIterations;_++)i.solveVelocity(S.list,m);return e._bodiesUpdateVelocities(C),S.collisionActive.length>0&&p.trigger(d,"collisionActive",{pairs:S.collisionActive,timestamp:k.timestamp,delta:m}),S.collisionEnd.length>0&&p.trigger(d,"collisionEnd",{pairs:S.collisionEnd,timestamp:k.timestamp,delta:m}),e._bodiesClearForces(C),p.trigger(d,"afterUpdate",b),d.timing.lastElapsed=c.now()-v,d},e.merge=function(d,m){if(c.extend(d,m),m.world){d.world=m.world,e.clear(d);for(var v=f.allBodies(d.world),x=0;x<v.length;x++){var w=v[x];o.set(w,!1),w.id=c.nextId()}}},e.clear=function(d){u.clear(d.pairs),l.clear(d.detector)},e._bodiesClearForces=function(d){for(var m=d.length,v=0;v<m;v++){var x=d[v];x.force.x=0,x.force.y=0,x.torque=0}},e._bodiesApplyGravity=function(d,m){var v=typeof m.scale<"u"?m.scale:.001,x=d.length;if(!(m.x===0&&m.y===0||v===0))for(var w=0;w<x;w++){var S=d[w];S.isStatic||S.isSleeping||(S.force.y+=S.mass*m.y*v,S.force.x+=S.mass*m.x*v)}},e._bodiesUpdate=function(d,m){for(var v=d.length,x=0;x<v;x++){var w=d[x];w.isStatic||w.isSleeping||g.update(w,m)}},e._bodiesUpdateVelocities=function(d){for(var m=d.length,v=0;v<m;v++)g.updateVelocities(d[v])}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(0),l=a(1);(function(){e._restingThresh=2,e._restingThreshTangent=Math.sqrt(6),e._positionDampen=.9,e._positionWarming=.8,e._frictionNormalMultiplier=5,e._frictionMaxStatic=Number.MAX_VALUE,e.preSolvePosition=function(u){var p,f,h,c=u.length;for(p=0;p<c;p++)f=u[p],f.isActive&&(h=f.contactCount,f.collision.parentA.totalContacts+=h,f.collision.parentB.totalContacts+=h)},e.solvePosition=function(u,p,f){var h,c,g,d,m,v,x,w,S=e._positionDampen*(f||1),k=i.clamp(p/i._baseDelta,0,1),y=u.length;for(h=0;h<y;h++)c=u[h],!(!c.isActive||c.isSensor)&&(g=c.collision,d=g.parentA,m=g.parentB,v=g.normal,c.separation=g.depth+v.x*(m.positionImpulse.x-d.positionImpulse.x)+v.y*(m.positionImpulse.y-d.positionImpulse.y));for(h=0;h<y;h++)c=u[h],!(!c.isActive||c.isSensor)&&(g=c.collision,d=g.parentA,m=g.parentB,v=g.normal,w=c.separation-c.slop*k,(d.isStatic||m.isStatic)&&(w*=2),d.isStatic||d.isSleeping||(x=S/d.totalContacts,d.positionImpulse.x+=v.x*w*x,d.positionImpulse.y+=v.y*w*x),m.isStatic||m.isSleeping||(x=S/m.totalContacts,m.positionImpulse.x-=v.x*w*x,m.positionImpulse.y-=v.y*w*x))},e.postSolvePosition=function(u){for(var p=e._positionWarming,f=u.length,h=o.translate,c=l.update,g=0;g<f;g++){var d=u[g],m=d.positionImpulse,v=m.x,x=m.y,w=d.velocity;if(d.totalContacts=0,v!==0||x!==0){for(var S=0;S<d.parts.length;S++){var k=d.parts[S];h(k.vertices,m),c(k.bounds,k.vertices,w),k.position.x+=v,k.position.y+=x}d.positionPrev.x+=v,d.positionPrev.y+=x,v*w.x+x*w.y<0?(m.x=0,m.y=0):(m.x*=p,m.y*=p)}}},e.preSolveVelocity=function(u){var p=u.length,f,h;for(f=0;f<p;f++){var c=u[f];if(!(!c.isActive||c.isSensor)){var g=c.contacts,d=c.contactCount,m=c.collision,v=m.parentA,x=m.parentB,w=m.normal,S=m.tangent;for(h=0;h<d;h++){var k=g[h],y=k.vertex,_=k.normalImpulse,b=k.tangentImpulse;if(_!==0||b!==0){var C=w.x*_+S.x*b,P=w.y*_+S.y*b;v.isStatic||v.isSleeping||(v.positionPrev.x+=C*v.inverseMass,v.positionPrev.y+=P*v.inverseMass,v.anglePrev+=v.inverseInertia*((y.x-v.position.x)*P-(y.y-v.position.y)*C)),x.isStatic||x.isSleeping||(x.positionPrev.x-=C*x.inverseMass,x.positionPrev.y-=P*x.inverseMass,x.anglePrev-=x.inverseInertia*((y.x-x.position.x)*P-(y.y-x.position.y)*C))}}}}},e.solveVelocity=function(u,p){var f=p/i._baseDelta,h=f*f,c=h*f,g=-e._restingThresh*f,d=e._restingThreshTangent,m=e._frictionNormalMultiplier*f,v=e._frictionMaxStatic,x=u.length,w,S,k,y;for(k=0;k<x;k++){var _=u[k];if(!(!_.isActive||_.isSensor)){var b=_.collision,C=b.parentA,P=b.parentB,M=b.normal.x,T=b.normal.y,O=b.tangent.x,I=b.tangent.y,B=_.inverseMass,N=_.friction*_.frictionStatic*m,q=_.contacts,U=_.contactCount,nn=1/U,on=C.position.x-C.positionPrev.x,pn=C.position.y-C.positionPrev.y,an=C.angle-C.anglePrev,un=P.position.x-P.positionPrev.x,cn=P.position.y-P.positionPrev.y,dn=P.angle-P.anglePrev;for(y=0;y<U;y++){var J=q[y],D=J.vertex,j=D.x-C.position.x,z=D.y-C.position.y,G=D.x-P.position.x,en=D.y-P.position.y,A=on-z*an,R=pn+j*an,E=un-en*dn,L=cn+G*dn,H=A-E,$=R-L,K=M*H+T*$,W=O*H+I*$,Y=_.separation+K,V=Math.min(Y,1);V=Y<0?0:V;var Z=V*N;W<-Z||W>Z?(S=W>0?W:-W,w=_.friction*(W>0?1:-1)*c,w<-S?w=-S:w>S&&(w=S)):(w=W,S=v);var X=j*T-z*M,Q=G*T-en*M,sn=nn/(B+C.inverseInertia*X*X+P.inverseInertia*Q*Q),ln=(1+_.restitution)*K*sn;if(w*=sn,K<g)J.normalImpulse=0;else{var vn=J.normalImpulse;J.normalImpulse+=ln,J.normalImpulse>0&&(J.normalImpulse=0),ln=J.normalImpulse-vn}if(W<-d||W>d)J.tangentImpulse=0;else{var hn=J.tangentImpulse;J.tangentImpulse+=w,J.tangentImpulse<-S&&(J.tangentImpulse=-S),J.tangentImpulse>S&&(J.tangentImpulse=S),w=J.tangentImpulse-hn}var Bn=M*ln+O*w,Dn=T*ln+I*w;C.isStatic||C.isSleeping||(C.positionPrev.x+=Bn*C.inverseMass,C.positionPrev.y+=Dn*C.inverseMass,C.anglePrev+=(j*Dn-z*Bn)*C.inverseInertia),P.isStatic||P.isSleeping||(P.positionPrev.x-=Bn*P.inverseMass,P.positionPrev.y-=Dn*P.inverseMass,P.anglePrev-=(G*Dn-en*Bn)*P.inverseInertia)}}}}})()},function(s,r,a){var e={};s.exports=e;var o=a(9),i=a(0);(function(){e.create=function(l){return i.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},e.update=function(l,u,p){var f=o.update,h=o.create,c=o.setActive,g=l.table,d=l.list,m=d.length,v=m,x=l.collisionStart,w=l.collisionEnd,S=l.collisionActive,k=u.length,y=0,_=0,b=0,C,P,M;for(M=0;M<k;M++)C=u[M],P=C.pair,P?(P.isActive&&(S[b++]=P),f(P,C,p)):(P=h(C,p),g[P.id]=P,x[y++]=P,d[v++]=P);for(v=0,m=d.length,M=0;M<m;M++)P=d[M],P.timeUpdated>=p?d[v++]=P:(c(P,!1,p),P.collision.bodyA.sleepCounter>0&&P.collision.bodyB.sleepCounter>0?d[v++]=P:(w[_++]=P,delete g[P.id]));d.length!==v&&(d.length=v),x.length!==y&&(x.length=y),w.length!==_&&(w.length=_),S.length!==b&&(S.length=b)},e.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(s,r,a){var e=s.exports=a(21);e.Axes=a(11),e.Bodies=a(12),e.Body=a(4),e.Bounds=a(1),e.Collision=a(8),e.Common=a(0),e.Composite=a(6),e.Composites=a(22),e.Constraint=a(10),e.Contact=a(16),e.Detector=a(13),e.Engine=a(17),e.Events=a(5),e.Grid=a(23),e.Mouse=a(14),e.MouseConstraint=a(24),e.Pair=a(9),e.Pairs=a(19),e.Plugin=a(15),e.Query=a(25),e.Render=a(26),e.Resolver=a(18),e.Runner=a(27),e.SAT=a(28),e.Sleeping=a(7),e.Svg=a(29),e.Vector=a(2),e.Vertices=a(3),e.World=a(30),e.Engine.run=e.Runner.run,e.Common.deprecated(e.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(s,r,a){var e={};s.exports=e;var o=a(15),i=a(0);(function(){e.name="matter-js",e.version="0.20.0",e.uses=[],e.used=[],e.use=function(){o.use(e,Array.prototype.slice.call(arguments))},e.before=function(l,u){return l=l.replace(/^Matter./,""),i.chainPathBefore(e,l,u)},e.after=function(l,u){return l=l.replace(/^Matter./,""),i.chainPathAfter(e,l,u)}})()},function(s,r,a){var e={};s.exports=e;var o=a(6),i=a(10),l=a(0),u=a(4),p=a(12),f=l.deprecated;(function(){e.stack=function(h,c,g,d,m,v,x){for(var w=o.create({label:"Stack"}),S=h,k=c,y,_=0,b=0;b<d;b++){for(var C=0,P=0;P<g;P++){var M=x(S,k,P,b,y,_);if(M){var T=M.bounds.max.y-M.bounds.min.y,O=M.bounds.max.x-M.bounds.min.x;T>C&&(C=T),u.translate(M,{x:O*.5,y:T*.5}),S=M.bounds.max.x+m,o.addBody(w,M),y=M,_+=1}else S+=m}k+=C+v,S=h}return w},e.chain=function(h,c,g,d,m,v){for(var x=h.bodies,w=1;w<x.length;w++){var S=x[w-1],k=x[w],y=S.bounds.max.y-S.bounds.min.y,_=S.bounds.max.x-S.bounds.min.x,b=k.bounds.max.y-k.bounds.min.y,C=k.bounds.max.x-k.bounds.min.x,P={bodyA:S,pointA:{x:_*c,y:y*g},bodyB:k,pointB:{x:C*d,y:b*m}},M=l.extend(P,v);o.addConstraint(h,i.create(M))}return h.label+=" Chain",h},e.mesh=function(h,c,g,d,m){var v=h.bodies,x,w,S,k,y;for(x=0;x<g;x++){for(w=1;w<c;w++)S=v[w-1+x*c],k=v[w+x*c],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:k},m)));if(x>0)for(w=0;w<c;w++)S=v[w+(x-1)*c],k=v[w+x*c],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:k},m))),d&&w>0&&(y=v[w-1+(x-1)*c],o.addConstraint(h,i.create(l.extend({bodyA:y,bodyB:k},m)))),d&&w<c-1&&(y=v[w+1+(x-1)*c],o.addConstraint(h,i.create(l.extend({bodyA:y,bodyB:k},m))))}return h.label+=" Mesh",h},e.pyramid=function(h,c,g,d,m,v,x){return e.stack(h,c,g,d,m,v,function(w,S,k,y,_,b){var C=Math.min(d,Math.ceil(g/2)),P=_?_.bounds.max.x-_.bounds.min.x:0;if(!(y>C)){y=C-y;var M=y,T=g-1-y;if(!(k<M||k>T)){b===1&&u.translate(_,{x:(k+(g%2===1?1:-1))*P,y:0});var O=_?k*P:0;return x(h+O+k*m,S,k,y,_,b)}}})},e.newtonsCradle=function(h,c,g,d,m){for(var v=o.create({label:"Newtons Cradle"}),x=0;x<g;x++){var w=1.9,S=p.circle(h+x*(d*w),c+m,d,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),k=i.create({pointA:{x:h+x*(d*w),y:c},bodyB:S});o.addBody(v,S),o.addConstraint(v,k)}return v},f(e,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),e.car=function(h,c,g,d,m){var v=u.nextGroup(!0),x=20,w=-g*.5+x,S=g*.5-x,k=0,y=o.create({label:"Car"}),_=p.rectangle(h,c,g,d,{collisionFilter:{group:v},chamfer:{radius:d*.5},density:2e-4}),b=p.circle(h+w,c+k,m,{collisionFilter:{group:v},friction:.8}),C=p.circle(h+S,c+k,m,{collisionFilter:{group:v},friction:.8}),P=i.create({bodyB:_,pointB:{x:w,y:k},bodyA:b,stiffness:1,length:0}),M=i.create({bodyB:_,pointB:{x:S,y:k},bodyA:C,stiffness:1,length:0});return o.addBody(y,_),o.addBody(y,b),o.addBody(y,C),o.addConstraint(y,P),o.addConstraint(y,M),y},f(e,"car","Composites.car ➤ moved to car example"),e.softBody=function(h,c,g,d,m,v,x,w,S,k){S=l.extend({inertia:1/0},S),k=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},k);var y=e.stack(h,c,g,d,m,v,function(_,b){return p.circle(_,b,w,S)});return e.mesh(y,g,d,x,k),y.label="Soft Body",y},f(e,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(s,r,a){var e={};s.exports=e;var o=a(9),i=a(0),l=i.deprecated;(function(){e.create=function(u){var p={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return i.extend(p,u)},e.update=function(u,p,f,h){var c,g,d,m=f.world,v=u.buckets,x,w,S=!1;for(c=0;c<p.length;c++){var k=p[c];if(!(k.isSleeping&&!h)&&!(m.bounds&&(k.bounds.max.x<m.bounds.min.x||k.bounds.min.x>m.bounds.max.x||k.bounds.max.y<m.bounds.min.y||k.bounds.min.y>m.bounds.max.y))){var y=e._getRegion(u,k);if(!k.region||y.id!==k.region.id||h){(!k.region||h)&&(k.region=y);var _=e._regionUnion(y,k.region);for(g=_.startCol;g<=_.endCol;g++)for(d=_.startRow;d<=_.endRow;d++){w=e._getBucketId(g,d),x=v[w];var b=g>=y.startCol&&g<=y.endCol&&d>=y.startRow&&d<=y.endRow,C=g>=k.region.startCol&&g<=k.region.endCol&&d>=k.region.startRow&&d<=k.region.endRow;!b&&C&&C&&x&&e._bucketRemoveBody(u,x,k),(k.region===y||b&&!C||h)&&(x||(x=e._createBucket(v,w)),e._bucketAddBody(u,x,k))}k.region=y,S=!0}}}S&&(u.pairsList=e._createActivePairsList(u))},l(e,"update","Grid.update ➤ replaced by Matter.Detector"),e.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(e,"clear","Grid.clear ➤ replaced by Matter.Detector"),e._regionUnion=function(u,p){var f=Math.min(u.startCol,p.startCol),h=Math.max(u.endCol,p.endCol),c=Math.min(u.startRow,p.startRow),g=Math.max(u.endRow,p.endRow);return e._createRegion(f,h,c,g)},e._getRegion=function(u,p){var f=p.bounds,h=Math.floor(f.min.x/u.bucketWidth),c=Math.floor(f.max.x/u.bucketWidth),g=Math.floor(f.min.y/u.bucketHeight),d=Math.floor(f.max.y/u.bucketHeight);return e._createRegion(h,c,g,d)},e._createRegion=function(u,p,f,h){return{id:u+","+p+","+f+","+h,startCol:u,endCol:p,startRow:f,endRow:h}},e._getBucketId=function(u,p){return"C"+u+"R"+p},e._createBucket=function(u,p){var f=u[p]=[];return f},e._bucketAddBody=function(u,p,f){var h=u.pairs,c=o.id,g=p.length,d;for(d=0;d<g;d++){var m=p[d];if(!(f.id===m.id||f.isStatic&&m.isStatic)){var v=c(f,m),x=h[v];x?x[2]+=1:h[v]=[f,m,1]}}p.push(f)},e._bucketRemoveBody=function(u,p,f){var h=u.pairs,c=o.id,g;p.splice(i.indexOf(p,f),1);var d=p.length;for(g=0;g<d;g++){var m=h[c(f,p[g])];m&&(m[2]-=1)}},e._createActivePairsList=function(u){var p,f=u.pairs,h=i.keys(f),c=h.length,g=[],d;for(d=0;d<c;d++)p=f[h[d]],p[2]>0?g.push(p):delete f[h[d]];return g}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(7),l=a(14),u=a(5),p=a(13),f=a(10),h=a(6),c=a(0),g=a(1);(function(){e.create=function(d,m){var v=(d?d.mouse:null)||(m?m.mouse:null);v||(d&&d.render&&d.render.canvas?v=l.create(d.render.canvas):m&&m.element?v=l.create(m.element):(v=l.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var x=f.create({label:"Mouse Constraint",pointA:v.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),w={type:"mouseConstraint",mouse:v,element:null,body:null,constraint:x,collisionFilter:{category:1,mask:4294967295,group:0}},S=c.extend(w,m);return u.on(d,"beforeUpdate",function(){var k=h.allBodies(d.world);e.update(S,k),e._triggerEvents(S)}),S},e.update=function(d,m){var v=d.mouse,x=d.constraint,w=d.body;if(v.button===0){if(x.bodyB)i.set(x.bodyB,!1),x.pointA=v.position;else for(var S=0;S<m.length;S++)if(w=m[S],g.contains(w.bounds,v.position)&&p.canCollide(w.collisionFilter,d.collisionFilter))for(var k=w.parts.length>1?1:0;k<w.parts.length;k++){var y=w.parts[k];if(o.contains(y.vertices,v.position)){x.pointA=v.position,x.bodyB=d.body=w,x.pointB={x:v.position.x-w.position.x,y:v.position.y-w.position.y},x.angleB=w.angle,i.set(w,!1),u.trigger(d,"startdrag",{mouse:v,body:w});break}}}else x.bodyB=d.body=null,x.pointB=null,w&&u.trigger(d,"enddrag",{mouse:v,body:w})},e._triggerEvents=function(d){var m=d.mouse,v=m.sourceEvents;v.mousemove&&u.trigger(d,"mousemove",{mouse:m}),v.mousedown&&u.trigger(d,"mousedown",{mouse:m}),v.mouseup&&u.trigger(d,"mouseup",{mouse:m}),l.clearSourceEvents(m)}})()},function(s,r,a){var e={};s.exports=e;var o=a(2),i=a(8),l=a(1),u=a(12),p=a(3);(function(){e.collides=function(f,h){for(var c=[],g=h.length,d=f.bounds,m=i.collides,v=l.overlaps,x=0;x<g;x++){var w=h[x],S=w.parts.length,k=S===1?0:1;if(v(w.bounds,d))for(var y=k;y<S;y++){var _=w.parts[y];if(v(_.bounds,d)){var b=m(_,f);if(b){c.push(b);break}}}}return c},e.ray=function(f,h,c,g){g=g||1e-100;for(var d=o.angle(h,c),m=o.magnitude(o.sub(h,c)),v=(c.x+h.x)*.5,x=(c.y+h.y)*.5,w=u.rectangle(v,x,m,g,{angle:d}),S=e.collides(w,f),k=0;k<S.length;k+=1){var y=S[k];y.body=y.bodyB=y.bodyA}return S},e.region=function(f,h,c){for(var g=[],d=0;d<f.length;d++){var m=f[d],v=l.overlaps(m.bounds,h);(v&&!c||!v&&c)&&g.push(m)}return g},e.point=function(f,h){for(var c=[],g=0;g<f.length;g++){var d=f[g];if(l.contains(d.bounds,h))for(var m=d.parts.length===1?0:1;m<d.parts.length;m++){var v=d.parts[m];if(l.contains(v.bounds,h)&&p.contains(v.vertices,h)){c.push(d);break}}}return c}})()},function(s,r,a){var e={};s.exports=e;var o=a(4),i=a(0),l=a(6),u=a(1),p=a(5),f=a(2),h=a(14);(function(){var c,g;typeof window<"u"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(k){window.setTimeout(function(){k(i.now())},1e3/60)},g=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),e._goodFps=30,e._goodDelta=1e3/60,e.create=function(k){var y={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!k.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},_=i.extend(y,k);return _.canvas&&(_.canvas.width=_.options.width||_.canvas.width,_.canvas.height=_.options.height||_.canvas.height),_.mouse=k.mouse,_.engine=k.engine,_.canvas=_.canvas||v(_.options.width,_.options.height),_.context=_.canvas.getContext("2d"),_.textures={},_.bounds=_.bounds||{min:{x:0,y:0},max:{x:_.canvas.width,y:_.canvas.height}},_.controller=e,_.options.showBroadphase=!1,_.options.pixelRatio!==1&&e.setPixelRatio(_,_.options.pixelRatio),i.isElement(_.element)&&_.element.appendChild(_.canvas),_},e.run=function(k){(function y(_){k.frameRequestId=c(y),d(k,_),e.world(k,_),k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0),(k.options.showStats||k.options.showDebug)&&e.stats(k,k.context,_),(k.options.showPerformance||k.options.showDebug)&&e.performance(k,k.context,_),k.context.setTransform(1,0,0,1,0,0)})()},e.stop=function(k){g(k.frameRequestId)},e.setPixelRatio=function(k,y){var _=k.options,b=k.canvas;y==="auto"&&(y=x(b)),_.pixelRatio=y,b.setAttribute("data-pixel-ratio",y),b.width=_.width*y,b.height=_.height*y,b.style.width=_.width+"px",b.style.height=_.height+"px"},e.setSize=function(k,y,_){k.options.width=y,k.options.height=_,k.bounds.max.x=k.bounds.min.x+y,k.bounds.max.y=k.bounds.min.y+_,k.options.pixelRatio!==1?e.setPixelRatio(k,k.options.pixelRatio):(k.canvas.width=y,k.canvas.height=_)},e.lookAt=function(k,y,_,b){b=typeof b<"u"?b:!0,y=i.isArray(y)?y:[y],_=_||{x:0,y:0};for(var C={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},P=0;P<y.length;P+=1){var M=y[P],T=M.bounds?M.bounds.min:M.min||M.position||M,O=M.bounds?M.bounds.max:M.max||M.position||M;T&&O&&(T.x<C.min.x&&(C.min.x=T.x),O.x>C.max.x&&(C.max.x=O.x),T.y<C.min.y&&(C.min.y=T.y),O.y>C.max.y&&(C.max.y=O.y))}var I=C.max.x-C.min.x+2*_.x,B=C.max.y-C.min.y+2*_.y,N=k.canvas.height,q=k.canvas.width,U=q/N,nn=I/B,on=1,pn=1;nn>U?pn=nn/U:on=U/nn,k.options.hasBounds=!0,k.bounds.min.x=C.min.x,k.bounds.max.x=C.min.x+I*on,k.bounds.min.y=C.min.y,k.bounds.max.y=C.min.y+B*pn,b&&(k.bounds.min.x+=I*.5-I*on*.5,k.bounds.max.x+=I*.5-I*on*.5,k.bounds.min.y+=B*.5-B*pn*.5,k.bounds.max.y+=B*.5-B*pn*.5),k.bounds.min.x-=_.x,k.bounds.max.x-=_.x,k.bounds.min.y-=_.y,k.bounds.max.y-=_.y,k.mouse&&(h.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.canvas.width,y:(k.bounds.max.y-k.bounds.min.y)/k.canvas.height}),h.setOffset(k.mouse,k.bounds.min))},e.startViewTransform=function(k){var y=k.bounds.max.x-k.bounds.min.x,_=k.bounds.max.y-k.bounds.min.y,b=y/k.options.width,C=_/k.options.height;k.context.setTransform(k.options.pixelRatio/b,0,0,k.options.pixelRatio/C,0,0),k.context.translate(-k.bounds.min.x,-k.bounds.min.y)},e.endViewTransform=function(k){k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0)},e.world=function(k,y){var _=i.now(),b=k.engine,C=b.world,P=k.canvas,M=k.context,T=k.options,O=k.timing,I=l.allBodies(C),B=l.allConstraints(C),N=T.wireframes?T.wireframeBackground:T.background,q=[],U=[],nn,on={timestamp:b.timing.timestamp};if(p.trigger(k,"beforeRender",on),k.currentBackground!==N&&S(k,N),M.globalCompositeOperation="source-in",M.fillStyle="transparent",M.fillRect(0,0,P.width,P.height),M.globalCompositeOperation="source-over",T.hasBounds){for(nn=0;nn<I.length;nn++){var pn=I[nn];u.overlaps(pn.bounds,k.bounds)&&q.push(pn)}for(nn=0;nn<B.length;nn++){var an=B[nn],un=an.bodyA,cn=an.bodyB,dn=an.pointA,J=an.pointB;un&&(dn=f.add(un.position,an.pointA)),cn&&(J=f.add(cn.position,an.pointB)),!(!dn||!J)&&(u.contains(k.bounds,dn)||u.contains(k.bounds,J))&&U.push(an)}e.startViewTransform(k),k.mouse&&(h.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.options.width,y:(k.bounds.max.y-k.bounds.min.y)/k.options.height}),h.setOffset(k.mouse,k.bounds.min))}else U=B,q=I,k.options.pixelRatio!==1&&k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0);!T.wireframes||b.enableSleeping&&T.showSleeping?e.bodies(k,q,M):(T.showConvexHulls&&e.bodyConvexHulls(k,q,M),e.bodyWireframes(k,q,M)),T.showBounds&&e.bodyBounds(k,q,M),(T.showAxes||T.showAngleIndicator)&&e.bodyAxes(k,q,M),T.showPositions&&e.bodyPositions(k,q,M),T.showVelocity&&e.bodyVelocity(k,q,M),T.showIds&&e.bodyIds(k,q,M),T.showSeparations&&e.separations(k,b.pairs.list,M),T.showCollisions&&e.collisions(k,b.pairs.list,M),T.showVertexNumbers&&e.vertexNumbers(k,q,M),T.showMousePosition&&e.mousePosition(k,k.mouse,M),e.constraints(U,M),T.hasBounds&&e.endViewTransform(k),p.trigger(k,"afterRender",on),O.lastElapsed=i.now()-_},e.stats=function(k,y,_){for(var b=k.engine,C=b.world,P=l.allBodies(C),M=0,T=55,O=44,I=0,B=0,N=0;N<P.length;N+=1)M+=P[N].parts.length;var q={Part:M,Body:P.length,Cons:l.allConstraints(C).length,Comp:l.allComposites(C).length,Pair:b.pairs.list.length};y.fillStyle="#0e0f19",y.fillRect(I,B,T*5.5,O),y.font="12px Arial",y.textBaseline="top",y.textAlign="right";for(var U in q){var nn=q[U];y.fillStyle="#aaa",y.fillText(U,I+T,B+8),y.fillStyle="#eee",y.fillText(nn,I+T,B+26),I+=T}},e.performance=function(k,y){var _=k.engine,b=k.timing,C=b.deltaHistory,P=b.elapsedHistory,M=b.timestampElapsedHistory,T=b.engineDeltaHistory,O=b.engineUpdatesHistory,I=b.engineElapsedHistory,B=_.timing.lastUpdatesPerFrame,N=_.timing.lastDelta,q=m(C),U=m(P),nn=m(T),on=m(O),pn=m(I),an=m(M),un=an/q||0,cn=Math.round(q/N),dn=1e3/q||0,J=4,D=12,j=60,z=34,G=10,en=69;y.fillStyle="#0e0f19",y.fillRect(0,50,D*5+j*6+22,z),e.status(y,G,en,j,J,C.length,Math.round(dn)+" fps",dn/e._goodFps,function(A){return C[A]/q-1}),e.status(y,G+D+j,en,j,J,T.length,N.toFixed(2)+" dt",e._goodDelta/N,function(A){return T[A]/nn-1}),e.status(y,G+(D+j)*2,en,j,J,O.length,B+" upf",Math.pow(i.clamp(on/cn||1,0,1),4),function(A){return O[A]/on-1}),e.status(y,G+(D+j)*3,en,j,J,I.length,pn.toFixed(2)+" ut",1-B*pn/e._goodFps,function(A){return I[A]/pn-1}),e.status(y,G+(D+j)*4,en,j,J,P.length,U.toFixed(2)+" rt",1-U/e._goodFps,function(A){return P[A]/U-1}),e.status(y,G+(D+j)*5,en,j,J,M.length,un.toFixed(2)+" x",un*un*un,function(A){return(M[A]/C[A]/un||0)-1})},e.status=function(k,y,_,b,C,P,M,T,O){k.strokeStyle="#888",k.fillStyle="#444",k.lineWidth=1,k.fillRect(y,_+7,b,1),k.beginPath(),k.moveTo(y,_+7-C*i.clamp(.4*O(0),-2,2));for(var I=0;I<b;I+=1)k.lineTo(y+I,_+7-(I<P?C*i.clamp(.4*O(I),-2,2):0));k.stroke(),k.fillStyle="hsl("+i.clamp(25+95*T,0,120)+",100%,60%)",k.fillRect(y,_-7,4,4),k.font="12px Arial",k.textBaseline="middle",k.textAlign="right",k.fillStyle="#eee",k.fillText(M,y+b,_-5)},e.constraints=function(k,y){for(var _=y,b=0;b<k.length;b++){var C=k[b];if(!(!C.render.visible||!C.pointA||!C.pointB)){var P=C.bodyA,M=C.bodyB,T,O;if(P?T=f.add(P.position,C.pointA):T=C.pointA,C.render.type==="pin")_.beginPath(),_.arc(T.x,T.y,3,0,2*Math.PI),_.closePath();else{if(M?O=f.add(M.position,C.pointB):O=C.pointB,_.beginPath(),_.moveTo(T.x,T.y),C.render.type==="spring")for(var I=f.sub(O,T),B=f.perp(f.normalise(I)),N=Math.ceil(i.clamp(C.length/5,12,20)),q,U=1;U<N;U+=1)q=U%2===0?1:-1,_.lineTo(T.x+I.x*(U/N)+B.x*q*4,T.y+I.y*(U/N)+B.y*q*4);_.lineTo(O.x,O.y)}C.render.lineWidth&&(_.lineWidth=C.render.lineWidth,_.strokeStyle=C.render.strokeStyle,_.stroke()),C.render.anchors&&(_.fillStyle=C.render.strokeStyle,_.beginPath(),_.arc(T.x,T.y,3,0,2*Math.PI),_.arc(O.x,O.y,3,0,2*Math.PI),_.closePath(),_.fill())}}},e.bodies=function(k,y,_){var b=_;k.engine;var C=k.options,P=C.showInternalEdges||!C.wireframes,M,T,O,I;for(O=0;O<y.length;O++)if(M=y[O],!!M.render.visible){for(I=M.parts.length>1?1:0;I<M.parts.length;I++)if(T=M.parts[I],!!T.render.visible){if(C.showSleeping&&M.isSleeping?b.globalAlpha=.5*T.render.opacity:T.render.opacity!==1&&(b.globalAlpha=T.render.opacity),T.render.sprite&&T.render.sprite.texture&&!C.wireframes){var B=T.render.sprite,N=w(k,B.texture);b.translate(T.position.x,T.position.y),b.rotate(T.angle),b.drawImage(N,N.width*-B.xOffset*B.xScale,N.height*-B.yOffset*B.yScale,N.width*B.xScale,N.height*B.yScale),b.rotate(-T.angle),b.translate(-T.position.x,-T.position.y)}else{if(T.circleRadius)b.beginPath(),b.arc(T.position.x,T.position.y,T.circleRadius,0,2*Math.PI);else{b.beginPath(),b.moveTo(T.vertices[0].x,T.vertices[0].y);for(var q=1;q<T.vertices.length;q++)!T.vertices[q-1].isInternal||P?b.lineTo(T.vertices[q].x,T.vertices[q].y):b.moveTo(T.vertices[q].x,T.vertices[q].y),T.vertices[q].isInternal&&!P&&b.moveTo(T.vertices[(q+1)%T.vertices.length].x,T.vertices[(q+1)%T.vertices.length].y);b.lineTo(T.vertices[0].x,T.vertices[0].y),b.closePath()}C.wireframes?(b.lineWidth=1,b.strokeStyle=k.options.wireframeStrokeStyle,b.stroke()):(b.fillStyle=T.render.fillStyle,T.render.lineWidth&&(b.lineWidth=T.render.lineWidth,b.strokeStyle=T.render.strokeStyle,b.stroke()),b.fill())}b.globalAlpha=1}}},e.bodyWireframes=function(k,y,_){var b=_,C=k.options.showInternalEdges,P,M,T,O,I;for(b.beginPath(),T=0;T<y.length;T++)if(P=y[T],!!P.render.visible)for(I=P.parts.length>1?1:0;I<P.parts.length;I++){for(M=P.parts[I],b.moveTo(M.vertices[0].x,M.vertices[0].y),O=1;O<M.vertices.length;O++)!M.vertices[O-1].isInternal||C?b.lineTo(M.vertices[O].x,M.vertices[O].y):b.moveTo(M.vertices[O].x,M.vertices[O].y),M.vertices[O].isInternal&&!C&&b.moveTo(M.vertices[(O+1)%M.vertices.length].x,M.vertices[(O+1)%M.vertices.length].y);b.lineTo(M.vertices[0].x,M.vertices[0].y)}b.lineWidth=1,b.strokeStyle=k.options.wireframeStrokeStyle,b.stroke()},e.bodyConvexHulls=function(k,y,_){var b=_,C,P,M;for(b.beginPath(),P=0;P<y.length;P++)if(C=y[P],!(!C.render.visible||C.parts.length===1)){for(b.moveTo(C.vertices[0].x,C.vertices[0].y),M=1;M<C.vertices.length;M++)b.lineTo(C.vertices[M].x,C.vertices[M].y);b.lineTo(C.vertices[0].x,C.vertices[0].y)}b.lineWidth=1,b.strokeStyle="rgba(255,255,255,0.2)",b.stroke()},e.vertexNumbers=function(k,y,_){var b=_,C,P,M;for(C=0;C<y.length;C++){var T=y[C].parts;for(M=T.length>1?1:0;M<T.length;M++){var O=T[M];for(P=0;P<O.vertices.length;P++)b.fillStyle="rgba(255,255,255,0.2)",b.fillText(C+"_"+P,O.position.x+(O.vertices[P].x-O.position.x)*.8,O.position.y+(O.vertices[P].y-O.position.y)*.8)}}},e.mousePosition=function(k,y,_){var b=_;b.fillStyle="rgba(255,255,255,0.8)",b.fillText(y.position.x+"  "+y.position.y,y.position.x+5,y.position.y-5)},e.bodyBounds=function(k,y,_){var b=_;k.engine;var C=k.options;b.beginPath();for(var P=0;P<y.length;P++){var M=y[P];if(M.render.visible)for(var T=y[P].parts,O=T.length>1?1:0;O<T.length;O++){var I=T[O];b.rect(I.bounds.min.x,I.bounds.min.y,I.bounds.max.x-I.bounds.min.x,I.bounds.max.y-I.bounds.min.y)}}C.wireframes?b.strokeStyle="rgba(255,255,255,0.08)":b.strokeStyle="rgba(0,0,0,0.1)",b.lineWidth=1,b.stroke()},e.bodyAxes=function(k,y,_){var b=_;k.engine;var C=k.options,P,M,T,O;for(b.beginPath(),M=0;M<y.length;M++){var I=y[M],B=I.parts;if(I.render.visible)if(C.showAxes)for(T=B.length>1?1:0;T<B.length;T++)for(P=B[T],O=0;O<P.axes.length;O++){var N=P.axes[O];b.moveTo(P.position.x,P.position.y),b.lineTo(P.position.x+N.x*20,P.position.y+N.y*20)}else for(T=B.length>1?1:0;T<B.length;T++)for(P=B[T],O=0;O<P.axes.length;O++)b.moveTo(P.position.x,P.position.y),b.lineTo((P.vertices[0].x+P.vertices[P.vertices.length-1].x)/2,(P.vertices[0].y+P.vertices[P.vertices.length-1].y)/2)}C.wireframes?(b.strokeStyle="indianred",b.lineWidth=1):(b.strokeStyle="rgba(255, 255, 255, 0.4)",b.globalCompositeOperation="overlay",b.lineWidth=2),b.stroke(),b.globalCompositeOperation="source-over"},e.bodyPositions=function(k,y,_){var b=_;k.engine;var C=k.options,P,M,T,O;for(b.beginPath(),T=0;T<y.length;T++)if(P=y[T],!!P.render.visible)for(O=0;O<P.parts.length;O++)M=P.parts[O],b.arc(M.position.x,M.position.y,3,0,2*Math.PI,!1),b.closePath();for(C.wireframes?b.fillStyle="indianred":b.fillStyle="rgba(0,0,0,0.5)",b.fill(),b.beginPath(),T=0;T<y.length;T++)P=y[T],P.render.visible&&(b.arc(P.positionPrev.x,P.positionPrev.y,2,0,2*Math.PI,!1),b.closePath());b.fillStyle="rgba(255,165,0,0.8)",b.fill()},e.bodyVelocity=function(k,y,_){var b=_;b.beginPath();for(var C=0;C<y.length;C++){var P=y[C];if(P.render.visible){var M=o.getVelocity(P);b.moveTo(P.position.x,P.position.y),b.lineTo(P.position.x+M.x,P.position.y+M.y)}}b.lineWidth=3,b.strokeStyle="cornflowerblue",b.stroke()},e.bodyIds=function(k,y,_){var b=_,C,P;for(C=0;C<y.length;C++)if(y[C].render.visible){var M=y[C].parts;for(P=M.length>1?1:0;P<M.length;P++){var T=M[P];b.font="12px Arial",b.fillStyle="rgba(255,255,255,0.5)",b.fillText(T.id,T.position.x+10,T.position.y-10)}}},e.collisions=function(k,y,_){var b=_,C=k.options,P,M,T,O;for(b.beginPath(),T=0;T<y.length;T++)if(P=y[T],!!P.isActive)for(M=P.collision,O=0;O<P.contactCount;O++){var I=P.contacts[O],B=I.vertex;b.rect(B.x-1.5,B.y-1.5,3.5,3.5)}for(C.wireframes?b.fillStyle="rgba(255,255,255,0.7)":b.fillStyle="orange",b.fill(),b.beginPath(),T=0;T<y.length;T++)if(P=y[T],!!P.isActive&&(M=P.collision,P.contactCount>0)){var N=P.contacts[0].vertex.x,q=P.contacts[0].vertex.y;P.contactCount===2&&(N=(P.contacts[0].vertex.x+P.contacts[1].vertex.x)/2,q=(P.contacts[0].vertex.y+P.contacts[1].vertex.y)/2),M.bodyB===M.supports[0].body||M.bodyA.isStatic===!0?b.moveTo(N-M.normal.x*8,q-M.normal.y*8):b.moveTo(N+M.normal.x*8,q+M.normal.y*8),b.lineTo(N,q)}C.wireframes?b.strokeStyle="rgba(255,165,0,0.7)":b.strokeStyle="orange",b.lineWidth=1,b.stroke()},e.separations=function(k,y,_){var b=_,C=k.options,P,M,T,O,I;for(b.beginPath(),I=0;I<y.length;I++)if(P=y[I],!!P.isActive){M=P.collision,T=M.bodyA,O=M.bodyB;var B=1;!O.isStatic&&!T.isStatic&&(B=.5),O.isStatic&&(B=0),b.moveTo(O.position.x,O.position.y),b.lineTo(O.position.x-M.penetration.x*B,O.position.y-M.penetration.y*B),B=1,!O.isStatic&&!T.isStatic&&(B=.5),T.isStatic&&(B=0),b.moveTo(T.position.x,T.position.y),b.lineTo(T.position.x+M.penetration.x*B,T.position.y+M.penetration.y*B)}C.wireframes?b.strokeStyle="rgba(255,165,0,0.5)":b.strokeStyle="orange",b.stroke()},e.inspector=function(k,y){k.engine;var _=k.selected,b=k.render,C=b.options,P;if(C.hasBounds){var M=b.bounds.max.x-b.bounds.min.x,T=b.bounds.max.y-b.bounds.min.y,O=M/b.options.width,I=T/b.options.height;y.scale(1/O,1/I),y.translate(-b.bounds.min.x,-b.bounds.min.y)}for(var B=0;B<_.length;B++){var N=_[B].data;switch(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.9)",y.setLineDash([1,2]),N.type){case"body":P=N.bounds,y.beginPath(),y.rect(Math.floor(P.min.x-3),Math.floor(P.min.y-3),Math.floor(P.max.x-P.min.x+6),Math.floor(P.max.y-P.min.y+6)),y.closePath(),y.stroke();break;case"constraint":var q=N.pointA;N.bodyA&&(q=N.pointB),y.beginPath(),y.arc(q.x,q.y,10,0,2*Math.PI),y.closePath(),y.stroke();break}y.setLineDash([]),y.translate(-.5,-.5)}k.selectStart!==null&&(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.6)",y.fillStyle="rgba(255,165,0,0.1)",P=k.selectBounds,y.beginPath(),y.rect(Math.floor(P.min.x),Math.floor(P.min.y),Math.floor(P.max.x-P.min.x),Math.floor(P.max.y-P.min.y)),y.closePath(),y.stroke(),y.fill(),y.translate(-.5,-.5)),C.hasBounds&&y.setTransform(1,0,0,1,0,0)};var d=function(k,y){var _=k.engine,b=k.timing,C=b.historySize,P=_.timing.timestamp;b.delta=y-b.lastTime||e._goodDelta,b.lastTime=y,b.timestampElapsed=P-b.lastTimestamp||0,b.lastTimestamp=P,b.deltaHistory.unshift(b.delta),b.deltaHistory.length=Math.min(b.deltaHistory.length,C),b.engineDeltaHistory.unshift(_.timing.lastDelta),b.engineDeltaHistory.length=Math.min(b.engineDeltaHistory.length,C),b.timestampElapsedHistory.unshift(b.timestampElapsed),b.timestampElapsedHistory.length=Math.min(b.timestampElapsedHistory.length,C),b.engineUpdatesHistory.unshift(_.timing.lastUpdatesPerFrame),b.engineUpdatesHistory.length=Math.min(b.engineUpdatesHistory.length,C),b.engineElapsedHistory.unshift(_.timing.lastElapsed),b.engineElapsedHistory.length=Math.min(b.engineElapsedHistory.length,C),b.elapsedHistory.unshift(b.lastElapsed),b.elapsedHistory.length=Math.min(b.elapsedHistory.length,C)},m=function(k){for(var y=0,_=0;_<k.length;_+=1)y+=k[_];return y/k.length||0},v=function(k,y){var _=document.createElement("canvas");return _.width=k,_.height=y,_.oncontextmenu=function(){return!1},_.onselectstart=function(){return!1},_},x=function(k){var y=k.getContext("2d"),_=window.devicePixelRatio||1,b=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;return _/b},w=function(k,y){var _=k.textures[y];return _||(_=k.textures[y]=new Image,_.src=y,_)},S=function(k,y){var _=y;/(jpg|gif|png)$/.test(y)&&(_="url("+y+")"),k.canvas.style.background=_,k.canvas.style.backgroundSize="contain",k.currentBackground=y}})()},function(s,r,a){var e={};s.exports=e;var o=a(5),i=a(17),l=a(0);(function(){e._maxFrameDelta=1e3/15,e._frameDeltaFallback=1e3/60,e._timeBufferMargin=1.5,e._elapsedNextEstimate=1,e._smoothingLowerBound=.1,e._smoothingUpperBound=.9,e.create=function(p){var f={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},h=l.extend(f,p);return h.fps=0,h},e.run=function(p,f){return p.timeBuffer=e._frameDeltaFallback,function h(c){p.frameRequestId=e._onNextFrame(p,h),c&&p.enabled&&e.tick(p,f,c)}(),p},e.tick=function(p,f,h){var c=l.now(),g=p.delta,d=0,m=h-p.timeLastTick;if((!m||!p.timeLastTick||m>Math.max(e._maxFrameDelta,p.maxFrameTime))&&(m=p.frameDelta||e._frameDeltaFallback),p.frameDeltaSmoothing){p.frameDeltaHistory.push(m),p.frameDeltaHistory=p.frameDeltaHistory.slice(-p.frameDeltaHistorySize);var v=p.frameDeltaHistory.slice(0).sort(),x=p.frameDeltaHistory.slice(v.length*e._smoothingLowerBound,v.length*e._smoothingUpperBound),w=u(x);m=w||m}p.frameDeltaSnapping&&(m=1e3/Math.round(1e3/m)),p.frameDelta=m,p.timeLastTick=h,p.timeBuffer+=p.frameDelta,p.timeBuffer=l.clamp(p.timeBuffer,0,p.frameDelta+g*e._timeBufferMargin),p.lastUpdatesDeferred=0;var S=p.maxUpdates||Math.ceil(p.maxFrameTime/g),k={timestamp:f.timing.timestamp};o.trigger(p,"beforeTick",k),o.trigger(p,"tick",k);for(var y=l.now();g>0&&p.timeBuffer>=g*e._timeBufferMargin;){o.trigger(p,"beforeUpdate",k),i.update(f,g),o.trigger(p,"afterUpdate",k),p.timeBuffer-=g,d+=1;var _=l.now()-c,b=l.now()-y,C=_+e._elapsedNextEstimate*b/d;if(d>=S||C>p.maxFrameTime){p.lastUpdatesDeferred=Math.round(Math.max(0,p.timeBuffer/g-e._timeBufferMargin));break}}f.timing.lastUpdatesPerFrame=d,o.trigger(p,"afterTick",k),p.frameDeltaHistory.length>=100&&(p.lastUpdatesDeferred&&Math.round(p.frameDelta/g)>S?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):p.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof p.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(p.deltaMin||p.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),p.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},e.stop=function(p){e._cancelNextFrame(p)},e._onNextFrame=function(p,f){if(typeof window<"u"&&window.requestAnimationFrame)p.frameRequestId=window.requestAnimationFrame(f);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return p.frameRequestId},e._cancelNextFrame=function(p){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(p.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(p){for(var f=0,h=p.length,c=0;c<h;c+=1)f+=p[c];return f/h||0}})()},function(s,r,a){var e={};s.exports=e;var o=a(8),i=a(0),l=i.deprecated;(function(){e.collides=function(u,p){return o.collides(u,p)},l(e,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(s,r,a){var e={};s.exports=e,a(1);var o=a(0);(function(){e.pathToVertices=function(i,l){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,p,f,h,c,g,d,m,v,x,w=[],S,k,y=0,_=0,b=0;l=l||15;var C=function(M,T,O){var I=O%2===1&&O>1;if(!v||M!=v.x||T!=v.y){v&&I?(S=v.x,k=v.y):(S=0,k=0);var B={x:S+M,y:k+T};(I||!v)&&(v=B),w.push(B),_=S+M,b=k+T}},P=function(M){var T=M.pathSegTypeAsLetter.toUpperCase();if(T!=="Z"){switch(T){case"M":case"L":case"T":case"C":case"S":case"Q":_=M.x,b=M.y;break;case"H":_=M.x;break;case"V":b=M.y;break}C(_,b,M.pathSegType)}};for(e._svgPathToAbsolute(i),f=i.getTotalLength(),g=[],u=0;u<i.pathSegList.numberOfItems;u+=1)g.push(i.pathSegList.getItem(u));for(d=g.concat();y<f;){if(x=i.getPathSegAtLength(y),c=g[x],c!=m){for(;d.length&&d[0]!=c;)P(d.shift());m=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=i.getPointAtLength(y),C(h.x,h.y,0);break}y+=l}for(u=0,p=d.length;u<p;++u)P(d[u]);return w},e._svgPathToAbsolute=function(i){for(var l,u,p,f,h,c,g=i.pathSegList,d=0,m=0,v=g.numberOfItems,x=0;x<v;++x){var w=g.getItem(x),S=w.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(S))"x"in w&&(d=w.x),"y"in w&&(m=w.y);else switch("x1"in w&&(p=d+w.x1),"x2"in w&&(h=d+w.x2),"y1"in w&&(f=m+w.y1),"y2"in w&&(c=m+w.y2),"x"in w&&(d+=w.x),"y"in w&&(m+=w.y),S){case"m":g.replaceItem(i.createSVGPathSegMovetoAbs(d,m),x);break;case"l":g.replaceItem(i.createSVGPathSegLinetoAbs(d,m),x);break;case"h":g.replaceItem(i.createSVGPathSegLinetoHorizontalAbs(d),x);break;case"v":g.replaceItem(i.createSVGPathSegLinetoVerticalAbs(m),x);break;case"c":g.replaceItem(i.createSVGPathSegCurvetoCubicAbs(d,m,p,f,h,c),x);break;case"s":g.replaceItem(i.createSVGPathSegCurvetoCubicSmoothAbs(d,m,h,c),x);break;case"q":g.replaceItem(i.createSVGPathSegCurvetoQuadraticAbs(d,m,p,f),x);break;case"t":g.replaceItem(i.createSVGPathSegCurvetoQuadraticSmoothAbs(d,m),x);break;case"a":g.replaceItem(i.createSVGPathSegArcAbs(d,m,w.r1,w.r2,w.angle,w.largeArcFlag,w.sweepFlag),x);break;case"z":case"Z":d=l,m=u;break}(S=="M"||S=="m")&&(l=d,u=m)}}})()},function(s,r,a){var e={};s.exports=e;var o=a(6);a(0),function(){e.create=o.create,e.add=o.add,e.remove=o.remove,e.clear=o.clear,e.addComposite=o.addComposite,e.addBody=o.addBody,e.addConstraint=o.addConstraint}()}])})}(oa)),oa.exports}var ig=og();const Is=oo(ig),lg=[{id:1,title:"Best Starter For Every Laravel Beginner: A Basic Yet Powerful CRUD App",excerpt:"Discover all the new features in Laravel 11 and learn how to safely upgrade your application.",category:"Full Walkthrough",image:new URL("/larawell/images/user-dashboard.png",import.meta.url).href,slug:"basic-crud-app",date:"June 21, 2025"},{id:2,title:"The Habit Tracker App",slug:"habit-tracker-app",excerpt:"Learn to create an interactive habit tracking application with smooth animations",image:new URL("/larawell/images/habit-dashboard.png",import.meta.url).href,date:"May 15, 2025",category:"Full Walkthrough"},{id:3,title:"Building a Fully Functional SaaS Application",slug:"saas-app",image:new URL("/larawell/images/saas-app-1.jpeg",import.meta.url).href,excerpt:"Welcome, Laravel enthusiasts! Today we're kicking off an exciting journey to build a full-stack SaaS application using Vue.js, Tailwind CSS, and Laravel.",category:"Full Walkthrough",date:"July 15, 2025"}],fc=(t,n)=>{const s=t.__vccOpts||t;for(const[r,a]of n)s[r]=a;return s},pg={class:"container mx-auto px-4 sm:px-6 lg:px-8"},cg={class:"flex items-center justify-between"},ug={class:"logo-container relative w-10 h-10"},dg={class:"absolute inset-0 bg-indigo-600 rounded-lg transform rotate-0 transition-all duration-500",ref:"logoSquare"},fg={class:"absolute inset-0 flex items-center justify-center text-white font-bold text-xl z-10",ref:"logoText"},hg={class:"hidden md:flex items-center space-x-8"},gg=["onMouseenter"],mg={class:"flex items-center space-x-4"},kg={class:"container mx-auto px-4"},vg={class:"flex flex-col space-y-4"},xg=["href","data-aos-delay"],bg={__name:"Header",setup(t){const n=Jn(!1),s=Jn(!1),r=[{name:"About Us",href:"/about-us"},{name:"Contact us",href:"/contact-us"},{name:"Privacy Policy",href:"/privacy-policy"},{name:"Recommended Resources",href:"/resources"}],a=()=>{n.value=window.scrollY>50},e=()=>{s.value=!s.value},o=p=>{Vt.from(p,{y:-50,opacity:0,duration:.8,ease:"power3.out"})},i=(p,f)=>{Vt.to(p,{rotation:360,duration:1,ease:"elastic.out(1, 0.5)"}),Vt.to(f,{y:-5,duration:.3,yoyo:!0,repeat:1})},l=p=>{Vt.fromTo(p,{width:0},{width:"100%",duration:.3,ease:"power2.out"})},u=p=>{Vt.to(p,{scale:1.05,duration:.2,yoyo:!0,repeat:1})};return Gt(()=>{As.init({duration:800,once:!0}),Gt(()=>{Vt.to(".start-button",{scale:1.05,duration:.2,repeat:-1,yoyo:!0})}),window.addEventListener("scroll",a),o(document.querySelector(".header"))}),no(()=>{window.removeEventListener("scroll",a)}),(p,f)=>(Ln(),Hn("header",{class:Ce(["fixed w-full z-50 transition-all duration-300",{"bg-white/90 shadow-md backdrop-blur-sm py-2":n.value,"bg-transparent py-4":!n.value}]),"data-aos":"fade-down"},[F("div",pg,[F("div",cg,[F("div",{class:"flex items-center space-x-2",onMouseenter:i},[F("div",ug,[F("div",dg,null,512),F("span",fg,"L",512)]),wn(pt(ce),{to:"/"},{default:ss(()=>f[0]||(f[0]=[F("span",{class:"text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"},[Vs(" Lara"),F("span",{class:"text-gray-800"},"Well")],-1)])),_:1,__:[0]})],32),F("nav",hg,[(Ln(),Hn(On,null,Ae(r,(h,c)=>F("li",{key:h.name,class:"text-gray-700 hover:text-indigo-600 font-medium relative group transition-colors",onMouseenter:g=>l(c)},[wn(pt(ce),{to:h.href},{default:ss(()=>[Vs(lt(h.name)+" ",1),F("span",{class:"absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full",ref_for:!0,ref:"navUnderlines"},null,512)]),_:2},1032,["to"])],40,gg)),64))]),F("div",mg,[wn(pt(ce),{to:"/"},{default:ss(()=>[F("button",{class:"hidden md:block px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105",onMouseenter:u,ref:"ctaButton"}," Start Reading ",544)]),_:1}),F("button",{class:"md:hidden text-gray-700 focus:outline-none",onClick:e},f[1]||(f[1]=[F("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))])])]),F("div",{class:Ce(["md:hidden bg-white shadow-lg absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out",{"max-h-0":!s.value,"max-h-96 py-4":s.value}])},[F("div",kg,[F("div",vg,[(Ln(),Hn(On,null,Ae(r,h=>F("a",{key:h.name,href:h.href,class:"text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded hover:bg-gray-50 transition-colors","data-aos":"fade-left","data-aos-delay":100*r.indexOf(h)},lt(h.name),9,xg)),64)),wn(pt(ce),{to:"/"},{default:ss(()=>f[2]||(f[2]=[F("button",{class:"start-button px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg mt-2"}," Start Reading ",-1)])),_:1,__:[2]})])])],2)],2))}},ee=fc(bg,[["__scopeId","data-v-12de71ea"]]),yg={class:"relative overflow-hidden"},wg={class:"relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden"},_g={class:"container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"},Sg={class:"text-center","data-aos":"fade-up"},Cg={class:"flex flex-col sm:flex-row justify-center gap-4","data-aos":"fade-up","data-aos-delay":"200"},Tg={class:"py-16 bg-white"},Pg={class:"container mx-auto px-4 sm:px-6 lg:px-8"},Mg={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},Ag=["data-aos-delay"],Rg={class:"h-48 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center"},Eg=["src"],Og={class:"p-6"},Ig={class:"flex items-center text-sm text-gray-500 mb-2"},Dg={class:"text-xl font-semibold mb-3 text-gray-800"},Lg={class:"text-gray-600 mb-4"},Bg=["href"],qg={__name:"Main",setup(t){const n=Jn(lg);fp();const s=Jn(null),r=Jn(null),a=Jn(null),e=Jn(null),o=Jn([]),i=Jn([{name:"laravel",path:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"},{name:"heart",path:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},{name:"laptop",path:"M3 6l2-2h14l2 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6zM2 6h20v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"},{name:"code",path:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},{name:"emoji",path:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},{name:"database",path:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"}]);Gt(()=>{As.init({duration:800,once:!0}),l(),h()}),no(()=>{a.value&&Is.Render.stop(a.value),r.value&&Is.Engine.clear(r.value),window.removeEventListener("resize",c)});const l=()=>{if(window.innerWidth<768)return;const{Engine:g,Render:d,World:m,Bodies:v,Composite:x}=Is;r.value=g.create({enableSleeping:!0}),e.value=r.value.world,a.value=d.create({canvas:s.value,engine:r.value,options:{width:window.innerWidth,height:window.innerHeight,background:"transparent",wireframes:!1}}),Vt.to(s.value,{opacity:.3,duration:1}),u(),p(),g.run(r.value),d.run(a.value),window.addEventListener("resize",c)},u=()=>{const{Bodies:g,World:d}=Is,m={isStatic:!0,render:{visible:!1}},v=g.rectangle(window.innerWidth/2,window.innerHeight+50,window.innerWidth,100,m),x=g.rectangle(-50,window.innerHeight/2,100,window.innerHeight,m),w=g.rectangle(window.innerWidth+50,window.innerHeight/2,100,window.innerHeight,m);d.add(e.value,[v,x,w])},p=()=>{const{Bodies:g,World:d,Body:m}=Is,v=["#818cf8","#a78bfa","#7c3aed","#8b5cf6","#6366f1","#8b5cf6"];o.value.forEach(x=>d.remove(e.value,x)),o.value=[];for(let x=0;x<25;x++){const w=Math.random()*window.innerWidth,S=Math.random()*-window.innerHeight,k=15+Math.random()*25,y=i.value[Math.floor(Math.random()*i.value.length)],_=v[Math.floor(Math.random()*v.length)],b=g.rectangle(w,S,k,k,{restitution:.7,friction:.1,render:{fillStyle:_,strokeStyle:_,sprite:{texture:f(y.path,_),xScale:k/24,yScale:k/24}},chamfer:{radius:5}});m.setAngle(b,Math.random()*Math.PI*2),m.applyForce(b,b.position,{x:(Math.random()-.5)*.005,y:(Math.random()-.5)*.005}),d.add(e.value,b),o.value.push(b)}},f=(g,d)=>{const m=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${d}">
      <path d="${g}" />
    </svg>
  `;return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(m)))},h=()=>{for(let g=0;g<12;g++){const d=document.createElement("div");d.innerHTML=`
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="${i.value[Math.floor(Math.random()*i.value.length)].path}" />
      </svg>
    `,d.className="absolute pointer-events-none opacity-30 hidden md:block",d.style.color=`hsl(${Math.random()*60+240}, 80%, 70%)`,d.style.width=`${10+Math.random()*30}px`,d.style.height=d.style.width,d.style.left=`${Math.random()*100}%`,d.style.top=`${Math.random()*80}%`,document.querySelector("section").appendChild(d),Vt.to(d,{y:`+=${20+Math.random()*40}`,x:`+=${10+Math.random()*20}`,rotation:Math.random()*360,duration:8+Math.random()*12,repeat:-1,yoyo:!0,ease:"sine.inOut"})}},c=()=>{if(!a.value)return;a.value.options.width=window.innerWidth,a.value.options.height=window.innerHeight,a.value.canvas.width=window.innerWidth,a.value.canvas.height=window.innerHeight;const{Bodies:g,World:d,Composite:m}=Is,x=m.allBodies(e.value).filter(w=>w.isStatic);d.remove(e.value,x),u(),p()};return(g,d)=>{const m=Ml("router-link");return Ln(),Hn(On,null,[wn(ee),F("div",yg,[F("section",wg,[F("canvas",{ref_key:"physicsCanvas",ref:s,class:"absolute inset-0 w-full h-full pointer-events-none opacity-0"},null,512),F("div",_g,[F("div",Sg,[d[2]||(d[2]=F("h1",{class:"text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"},[F("span",{class:"bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"}," Master Laravel "),F("br"),F("span",{class:"text-gray-800"},"Like a Pro")],-1)),d[3]||(d[3]=F("p",{class:"text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8","data-aos":"fade-up","data-aos-delay":"100"}," Discover the best walkthroughs with project demos, code explanation and full source code at the end for building amazing web applications with Laravel. ",-1)),F("div",Cg,[d[1]||(d[1]=F("button",{class:"px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"}," Scroll To Explore Walkthroughs ",-1)),wn(m,{to:"/resources"},{default:ss(()=>d[0]||(d[0]=[F("button",{class:"px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-lg shadow hover:shadow-md transition-all duration-300 font-medium hover:bg-gray-50"}," Recommended Resources ",-1)])),_:1,__:[0]})])])])]),F("section",Tg,[F("div",Pg,[d[7]||(d[7]=F("h2",{class:"text-3xl font-bold text-center mb-12","data-aos":"fade-up"},[Vs(" Latest "),F("span",{class:"text-indigo-600"},"Laravel"),Vs(" Guides")],-1)),F("div",Mg,[(Ln(!0),Hn(On,null,Ae(n.value,(v,x)=>(Ln(),Hn("div",{key:v.id,class:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2","data-aos":"fade-up","data-aos-delay":100*x},[F("div",Rg,[F("img",{src:v.image,class:"w-full h-56 object-cover transition duration-300 group-hover:blur-sm",alt:"blog image"},null,8,Eg)]),F("div",Og,[F("div",Ig,[F("span",null,lt(v.category),1),d[4]||(d[4]=F("span",{class:"mx-2"},"•",-1)),F("span",null,lt(v.date),1)]),F("h3",Dg,lt(v.title),1),F("p",Lg,lt(v.excerpt),1),F("a",{href:v.link,class:"text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"},[wn(m,{to:`/blog/${v.slug}`},{default:ss(()=>d[5]||(d[5]=[Vs("Read More")])),_:2,__:[5]},1032,["to"]),d[6]||(d[6]=F("svg",{class:"w-4 h-4 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})],-1))],8,Bg)])],8,Ag))),128))]),d[8]||(d[8]=F("div",{class:"text-center mt-12","data-aos":"fade-up"},[F("button",{class:"px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"}," View All Guides ")],-1))])])])],64)}}},Fg=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
</head>\r
<style>\r
    .hero-gradient {\r
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
    }\r
\r
    .code-block {\r
        background: #2d2d2d;\r
        border-left: 4px solid #667eea;\r
    }\r
\r
    .feature-card:hover {\r
        transform: translateY(-5px);\r
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r
    }\r
\r
    .animate-float {\r
        animation: float 6s ease-in-out infinite;\r
    }\r
\r
    @keyframes float {\r
        0% {\r
            transform: translateY(0px);\r
        }\r
\r
        50% {\r
            transform: translateY(-20px);\r
        }\r
\r
        100% {\r
            transform: translateY(0px);\r
        }\r
    }\r
\r
    h1, h2, h3, h4, h5, h6 {\r
  font-weight: 700;\r
  margin: 1.5rem 0 1rem;\r
  background-clip: text;\r
  -webkit-background-clip: text;\r
  color: transparent;\r
}\r
\r
h1 {\r
  font-size: 2.5rem;\r
  background-image: linear-gradient(to right, #8d7cb4, #38b2ac);\r
}\r
\r
h2 {\r
  font-size: 2rem;\r
  background-image: linear-gradient(to right, #9582c2, #4fd1c5);\r
}\r
\r
h3 {\r
  font-size: 1.75rem;\r
  background-image: linear-gradient(to right, #2f008b, #68d391);\r
}\r
\r
/* List styles */\r
ul, ol {\r
  padding-left: 2rem;\r
  margin: 1rem 0;\r
}\r
\r
li {\r
  margin-bottom: 0.5rem;\r
}\r
\r
ul {\r
  list-style-type: disc;\r
}\r
\r
ol {\r
  list-style-type: decimal;\r
}\r
\r
/* Link styles */\r
a {\r
  color: #6b46c1;\r
  text-decoration: none;\r
  transition: color 0.3s ease;\r
  cursor: pointer;\r
}\r
\r
a:hover {\r
  color: #38b2ac;\r
}\r
\r
/* Button styles */\r
.button {\r
  display: inline-block;\r
  padding: 0.75rem 1.5rem;\r
  background: linear-gradient(to right, #6b46c1, #38b2ac);\r
  color: white;\r
  border-radius: 0.375rem;\r
  font-weight: 600;\r
  text-align: center;\r
  cursor: pointer;\r
  border: none;\r
  transition: all 0.3s ease;\r
}\r
\r
.button:hover {\r
  background: linear-gradient(to right, #805ad5, #4fd1c5);\r
  transform: translateY(-2px);\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Container styles */\r
.container {\r
  max-width: 1200px;\r
  margin: 0 auto;\r
  padding: 0 20px;\r
}\r
\r
/* Card styles */\r
.card {\r
  background: white;\r
  border-radius: 0.5rem;\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
  padding: 1.5rem;\r
  margin-bottom: 2rem;\r
}\r
\r
/* Responsive design */\r
@media (max-width: 768px) {\r
  h1 {\r
    font-size: 2rem;\r
  }\r
  h2 {\r
    font-size: 1.75rem;\r
  }\r
  h3 {\r
    font-size: 1.5rem;\r
  }\r
}\r
</style>\r
\r
<body class="font-sans antialiased text-gray-800 bg-gray-50">\r
\r
    <!-- Hero Section -->\r
    <section class="hero-gradient text-white py-20">\r
        <div class="" data-aos="fade-up">\r
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Best Starter For Every Laravel Beginner: A Basic Yet\r
                Powerful CRUD App</h1>\r
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">A beginner-friendly guide to creating your first\r
                Laravel application with create, read, update, and delete functionality.</p>\r
            <div class="flex justify-center space-x-4">\r
                <a href="#code"\r
                    class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">View\r
                    Code</a>\r
                <a href="#results"\r
                    class="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">See\r
                    Results</a>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <!-- Overview Section -->\r
    <section id="overview" class="py-16 bg-white">\r
        <div class="container px-6">\r
            <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">What We're Building</h2>\r
\r
            <div class="grid md:grid-cols-3 gap-8">\r
                <div class="feature-card bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300"\r
                    data-aos="fade-up" data-aos-delay="100">\r
                    <div class="text-indigo-600 mb-4">\r
                        <i class="fas fa-plus-circle text-4xl"></i>\r
                    </div>\r
                    <h3 class="text-xl font-semibold mb-3">Create</h3>\r
                    <p class="text-gray-600">Users can add new records with name and email fields through a simple form.\r
                    </p>\r
                </div>\r
\r
                <div class="feature-card bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300"\r
                    data-aos="fade-up" data-aos-delay="200">\r
                    <div class="text-indigo-600 mb-4">\r
                        <i class="fas fa-list text-4xl"></i>\r
                    </div>\r
                    <h3 class="text-xl font-semibold mb-3">Read</h3>\r
                    <p class="text-gray-600">All stored records are displayed in a clean table format for easy viewing.\r
                    </p>\r
                </div>\r
\r
                <div class="feature-card bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300"\r
                    data-aos="fade-up" data-aos-delay="300">\r
                    <div class="text-indigo-600 mb-4">\r
                        <i class="fas fa-edit text-4xl"></i>\r
                    </div>\r
                    <h3 class="text-xl font-semibold mb-3">Update & Delete</h3>\r
                    <p class="text-gray-600">Existing records can be modified or removed with simple click actions.</p>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <!-- Setup Section -->\r
    <section id="setup" class="py-16 bg-gray-50">\r
        <div class="container mx-auto px-6">\r
            <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Project Setup</h2>\r
\r
            <div class="max-w-4xl mx-auto">\r
                <div class="mb-8" data-aos="fade-up">\r
                    <h3 class="text-xl font-semibold mb-4 text-indigo-600 flex items-center">\r
                        <span class="bg-indigo-100 p-2 rounded-full mr-3">\r
                            <i class="fas fa-server text-indigo-600"></i>\r
                        </span>\r
                        Environment Setup\r
                    </h3>\r
                    <p class="text-gray-700 mb-4">Before diving into Laravel, you'll need to set up your development\r
                        environment:</p>\r
                    <ul class="list-disc pl-6 space-y-2 text-gray-700">\r
                        <li>Install <span class="font-semibold">XAMPP</span> (for Apache, MySQL, and PHP)</li>\r
                        <li>Install <span class="font-semibold">Composer</span> (PHP dependency manager)</li>\r
                        <li>Install <span class="font-semibold">Laravel</span> via Composer</li>\r
                    </ul>\r
                </div>\r
\r
                <div class="mb-8" data-aos="fade-up" data-aos-delay="100">\r
                    <h3 class="text-xl font-semibold mb-4 text-indigo-600 flex items-center">\r
                        <span class="bg-indigo-100 p-2 rounded-full mr-3">\r
                            <i class="fas fa-project-diagram text-indigo-600"></i>\r
                        </span>\r
                        Creating the Laravel Project\r
                    </h3>\r
                    <p class="text-gray-700 mb-4">Create a new Laravel project with this simple command:</p>\r
                    <div class="code-block rounded-lg p-4 mb-4">\r
                        <code class="text-gray-200 font-mono">composer create-project laravel/laravel crud-app</code>\r
                    </div>\r
                </div>\r
\r
                <div data-aos="fade-up" data-aos-delay="200">\r
                    <h3 class="text-xl font-semibold mb-4 text-indigo-600 flex items-center">\r
                        <span class="bg-indigo-100 p-2 rounded-full mr-3">\r
                            <i class="fas fa-database text-indigo-600"></i>\r
                        </span>\r
                        Database Configuration\r
                    </h3>\r
                    <p class="text-gray-700 mb-4">Configure your database connection in the <span\r
                            class="font-mono bg-gray-200 px-2 py-1 rounded">.env</span> file:</p>\r
                    <div class="code-block rounded-lg p-4">\r
                        <pre class="text-gray-200 font-mono text-sm overflow-auto">\r
DB_CONNECTION=mysql\r
DB_HOST=127.0.0.1\r
DB_PORT=3306\r
DB_DATABASE=laravel_crud\r
DB_USERNAME=root\r
DB_PASSWORD=</pre>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <!-- Code Walkthrough Section -->\r
    <section id="code" class="py-16 bg-white">\r
        <div class="container mx-auto px-6">\r
            <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Code Walkthrough</h2>\r
\r
            <div class="max-w-4xl mx-auto space-y-12">\r
                <!-- Routes -->\r
                <div data-aos="fade-up">\r
                    <h3 class="text-2xl font-semibold mb-4 text-indigo-600">1. Routes (web.php)</h3>\r
                    <p class="text-gray-700 mb-4">Routes define the URLs of your application and connect them to\r
                        controller methods. Here's our CRUD routing setup:</p>\r
                    <div class="code-block rounded-lg p-4 mb-4">\r
                        <pre class="text-gray-200 font-mono text-sm overflow-x-auto">\r
Route::get('done', [DataController::class, 'index'])->name('data.index');\r
Route::post('done', [DataController::class, 'store']);\r
Route::get('view', [DataController::class, 'view'])->name('data.stored');\r
Route::get('destroy/{id}', [DataController::class, 'destroy'])->name('data.destroy');\r
Route::get('edit/{id}', [DataController::class, 'edit'])->name('data.edit');\r
Route::put('update/{id}', [DataController::class, 'update'])->name('data.update');</pre>\r
                    </div>\r
                    <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">\r
                        <h4 class="font-semibold text-blue-800 mb-2 flex items-center">\r
                            <i class="fas fa-lightbulb mr-2"></i>\r
                            Key Points\r
                        </h4>\r
                        <ul class="list-disc pl-6 space-y-1 text-blue-700">\r
                            <li><span class="font-mono">Route::get</span> handles GET requests (viewing pages)</li>\r
                            <li><span class="font-mono">Route::post</span> handles form submissions</li>\r
                            <li><span class="font-mono">Route::put</span> handles updates</li>\r
                            <li>Routes are named for easy reference in views</li>\r
                        </ul>\r
                    </div>\r
                </div>\r
\r
                <!-- Controller -->\r
                <div data-aos="fade-up" data-aos-delay="100">\r
                    <h3 class="text-2xl font-semibold mb-4 text-indigo-600">2. Controller (DataController.php)</h3>\r
                    <p class="text-gray-700 mb-4">Controllers handle the application logic. Our DataController manages\r
                        all CRUD operations:</p>\r
                    <div class="code-block rounded-lg p-4 mb-4">\r
                        <pre class="text-gray-200 font-mono text-sm overflow-x-auto">\r
&lt;?php\r
\r
namespace App\\Http\\Controllers;\r
\r
use Illuminate\\Http\\Request;\r
use App\\Models\\Data;\r
\r
class DataController extends Controller\r
{\r
    // Show the form\r
    public function index() {\r
        return view('index');\r
    }\r
\r
    // Store new data\r
    public function store(Request $request) {\r
        $data = $request->validate([\r
            'name' => 'required',\r
            'email' => 'required'\r
        ]);\r
\r
        Data::create($data);\r
        return redirect()->route('data.stored')->with('success', 'Data created Successfully');\r
    }\r
\r
    // View all data\r
    public function view() {\r
        $data = Data::all();\r
        return view('view', compact('data'));\r
    }\r
\r
    // Edit existing data\r
    public function edit($id) {\r
        $data = Data::findOrFail($id);\r
        return view('edit', compact('data'));\r
    }\r
\r
    // Update data\r
    public function update(Request $request, $id) {\r
        $validated = $request->validate([\r
            'name' => 'required',\r
            'email' => 'required|email'\r
        ]);\r
\r
        $data = Data::findOrFail($id);\r
        $data->update($validated);\r
        return redirect()->route('data.stored')->with('success', 'data updated successfully');\r
    }\r
\r
    // Delete data\r
    public function destroy($id) {\r
        $data = Data::find($id);\r
        $data->destroy($id);\r
        return redirect()->back();\r
    }\r
}</pre>\r
                    </div>\r
                    <div class="bg-green-50 p-4 rounded-lg border border-green-200">\r
                        <h4 class="font-semibold text-green-800 mb-2 flex items-center">\r
                            <i class="fas fa-code mr-2"></i>\r
                            Controller Breakdown\r
                        </h4>\r
                        <ul class="list-disc pl-6 space-y-1 text-green-700">\r
                            <li><span class="font-semibold">index()</span>: Displays the creation form</li>\r
                            <li><span class="font-semibold">store()</span>: Validates and saves new data</li>\r
                            <li><span class="font-semibold">view()</span>: Shows all records</li>\r
                            <li><span class="font-semibold">edit()</span>: Displays edit form for a specific record</li>\r
                            <li><span class="font-semibold">update()</span>: Processes edit form submissions</li>\r
                            <li><span class="font-semibold">destroy()</span>: Deletes a record</li>\r
                        </ul>\r
                    </div>\r
                </div>\r
\r
                <!-- Model -->\r
                <div data-aos="fade-up" data-aos-delay="200">\r
                    <h3 class="text-2xl font-semibold mb-4 text-indigo-600">3. Model (Data.php)</h3>\r
                    <p class="text-gray-700 mb-4">Models interact with the database. Our simple Data model:</p>\r
                    <div class="code-block rounded-lg p-4">\r
                        <pre class="text-gray-200 font-mono text-sm overflow-x-auto">\r
&lt;?php\r
\r
namespace App\\Models;\r
\r
use Illuminate\\Database\\Eloquent\\Model;\r
use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\r
\r
class Data extends Model\r
{\r
    use HasFactory;\r
\r
    protected $guarded = false;\r
}</pre>\r
                    </div>\r
                    <div class="mt-4 bg-purple-50 p-4 rounded-lg border border-purple-200">\r
                        <h4 class="font-semibold text-purple-800 mb-2 flex items-center">\r
                            <i class="fas fa-cube mr-2"></i>\r
                            Model Explanation\r
                        </h4>\r
                        <ul class="list-disc pl-6 space-y-1 text-purple-700">\r
                            <li><span class="font-mono">use HasFactory</span>: Enables model factory support</li>\r
                            <li><span class="font-mono">protected $guarded = false</span>: Allows mass assignment for\r
                                all fields</li>\r
                            <li>Laravel automatically knows this model connects to the "data" table</li>\r
                        </ul>\r
                    </div>\r
                </div>\r
\r
                <!-- Views -->\r
                <div data-aos="fade-up" data-aos-delay="300">\r
                    <h3 class="text-2xl font-semibold mb-4 text-indigo-600">4. Views (Blade Templates)</h3>\r
                    <p class="text-gray-700 mb-4">Views handle the presentation layer. Here are some key parts of our\r
                        Blade templates:</p>\r
\r
                    <h4 class="text-xl font-semibold mb-3 text-gray-800">Form Submission (index.blade.php)</h4>\r
                    <div class="code-block rounded-lg p-4 mb-6">\r
                        <pre class="text-gray-200 font-mono text-sm overflow-x-auto">\r
&lt;form action="{{url('/')}}/done" method="post" class="bg-white p-8 rounded-xl shadow-2xl border border-gray-100"&gt;\r
    @csrf\r
    &lt;!-- Form fields would go here --&gt;\r
&lt;/form&gt;</pre>\r
                    </div>\r
\r
                    <h4 class="text-xl font-semibold mb-3 text-gray-800">Edit/Delete Buttons (view.blade.php)</h4>\r
                    <div class="code-block rounded-lg p-4">\r
                        <pre class="text-gray-200 font-mono text-sm overflow-x-auto">\r
&lt;a href="{{ route('data.edit', $values->id) }}"&gt;\r
    &lt;button class="text-yellow-600 hover:text-yellow-900 mr-3" title="Edit"&gt;\r
        &lt;i class="fas fa-edit"&gt;&lt;/i&gt;\r
    &lt;/button&gt;\r
&lt;/a&gt;\r
\r
&lt;a href="{{ route('data.destroy', $values->id) }}"&gt;\r
    &lt;button class="text-red-600 hover:text-red-900" title="Delete"&gt;\r
        &lt;i class="fas fa-trash"&gt;&lt;/i&gt;\r
    &lt;/button&gt;\r
&lt;/a&gt;</pre>\r
                    </div>\r
                    <div class="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">\r
                        <h4 class="font-semibold text-yellow-800 mb-2 flex items-center">\r
                            <i class="fas fa-eye mr-2"></i>\r
                            View Features\r
                        </h4>\r
                        <ul class="list-disc pl-6 space-y-1 text-yellow-700">\r
                            <li>Uses Blade templating engine</li>\r
                            <li><span class="font-mono">@csrf</span> includes CSRF protection token</li>\r
                            <li><span class="font-mono">route()</span> helper generates URLs from named routes</li>\r
                            <li>Font Awesome icons for visual appeal</li>\r
                            <li>Tailwind CSS for styling</li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <!-- Results Section -->\r
    <section id="results" class="py-16 bg-gray-50">\r
        <div class="container mx-auto px-6">\r
            <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Final Results</h2>\r
\r
            <div class="max-w-4xl mx-auto">\r
                <div class="bg-white p-6 rounded-xl shadow-lg mb-8" data-aos="fade-up">\r
                    <h3 class="text-2xl font-semibold mb-4 text-indigo-600">Form Page</h3>\r
                    <p class="text-gray-700 mb-4">The form where users can create new records:</p>\r
                    <div class="bg-gray-200 p-4 rounded-lg flex justify-center">\r
                        <div class="text-center">\r
                            <i class="fas fa-image text-5xl text-gray-400 mb-2"></i>\r
                            <img src="/images/crud-dashboard.png" </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">\r
                        <h3 class="text-2xl font-semibold mb-4 text-indigo-600">Data Listing Page</h3>\r
                        <p class="text-gray-700 mb-4">Displays all records with edit/delete options:</p>\r
                        <div class="bg-gray-200 p-4 rounded-lg flex justify-center">\r
                            <div class="text-center">\r
                                <i class="fas fa-image text-5xl text-gray-400 mb-2"></i>\r
                                <img src="/images/user-dashboard.png" </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
    </section>\r
\r
    <!-- Conclusion -->\r
    <section class="py-16 bg-indigo-600 text-white">\r
        <div class="container mx-auto px-6 text-center" data-aos="fade-up">\r
            <h2 class="text-3xl font-bold mb-6">Congratulations! 🎉</h2>\r
            <p class="text-xl mb-8 max-w-3xl mx-auto">You've just built a complete CRUD application with Laravel! This\r
                foundation can be expanded to build more complex applications.</p>\r
            <div class="flex justify-center space-x-4">\r
                <a href=""\r
                    class="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">Next\r
                    Tutorial</a>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <!-- Footer -->\r
    <footer class="bg-gray-800 text-white py-12">\r
        <div class="container mx-auto px-6">\r
            <div class="flex flex-col md:flex-row justify-between items-center">\r
                <div class="mb-6 md:mb-0">\r
                    <h3 class="text-2xl font-bold">LaraBlog</h3>\r
                    <p class="text-gray-400 mt-2">Making Laravel accessible for beginners</p>\r
                </div>\r
                <div class="flex space-x-6">\r
                    <a href="#" class="text-gray-400 hover:text-white transition">\r
                        <i class="fab fa-twitter text-xl"></i>\r
                    </a>\r
                    <a href="#" class="text-gray-400 hover:text-white transition">\r
                        <i class="fab fa-github text-xl"></i>\r
                    </a>\r
                    <a href="#" class="text-gray-400 hover:text-white transition">\r
                        <i class="fab fa-linkedin text-xl"></i>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">\r
                <p>&copy; 2023 LaraBlog. All rights reserved.</p>\r
            </div>\r
        </div>\r
    </footer>\r
\r
    <!-- Scripts -->\r
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"><\/script>\r
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script>\r
    <script>\r
        // Initialize AOS (Animate On Scroll)\r
        AOS.init({\r
            duration: 800,\r
            easing: 'ease-in-out',\r
            once: true\r
        });\r
\r
        // GSAP animations\r
        gsap.from(".hero-gradient", {\r
            duration: 1.5,\r
            opacity: 0,\r
            y: -50,\r
            ease: "power3.out"\r
        });\r
\r
        // Floating animation for feature icons\r
        gsap.to(".feature-card i", {\r
            y: 10,\r
            duration: 2,\r
            repeat: -1,\r
            yoyo: true,\r
            ease: "sine.inOut"\r
        });\r
    <\/script>`,Hg=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
\r
        a {\r
            cursor: pointer;\r
        }\r
\r
    .hero-gradient {\r
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
    }\r
\r
    .code-block {\r
        background: #2d2d2d;\r
        border-left: 4px solid #667eea;\r
    }\r
\r
    .feature-card:hover {\r
        transform: translateY(-5px);\r
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r
    }\r
\r
    .animate-float {\r
        animation: float 6s ease-in-out infinite;\r
    }\r
\r
    @keyframes float {\r
        0% {\r
            transform: translateY(0px);\r
        }\r
\r
        50% {\r
            transform: translateY(-20px);\r
        }\r
\r
        100% {\r
            transform: translateY(0px);\r
        }\r
    }\r
\r
    h1, h2, h3, h4, h5, h6 {\r
  font-weight: 700;\r
  margin: 1.5rem 0 1rem;\r
  background-clip: text;\r
  -webkit-background-clip: text;\r
  color: transparent;\r
}\r
\r
h1 {\r
  font-size: 2.5rem;\r
  background-image: linear-gradient(to right, #8d7cb4, #38b2ac);\r
}\r
\r
h2 {\r
  font-size: 2rem;\r
  background-image: linear-gradient(to right, #9582c2, #4fd1c5);\r
}\r
\r
h3 {\r
  font-size: 1.75rem;\r
  background-image: linear-gradient(to right, #2f008b, #68d391);\r
}\r
\r
/* List styles */\r
ul, ol {\r
  padding-left: 2rem;\r
  margin: 1rem 0;\r
}\r
\r
li {\r
  margin-bottom: 0.5rem;\r
}\r
\r
ul {\r
  list-style-type: disc;\r
}\r
\r
ol {\r
  list-style-type: decimal;\r
}\r
\r
/* Link styles */\r
a {\r
  color: #6b46c1;\r
  text-decoration: none;\r
  transition: color 0.3s ease;\r
  cursor: pointer;\r
}\r
\r
a:hover {\r
  color: #38b2ac;\r
}\r
\r
/* Button styles */\r
.button {\r
  display: inline-block;\r
  padding: 0.75rem 1.5rem;\r
  background: linear-gradient(to right, #6b46c1, #38b2ac);\r
  color: white;\r
  border-radius: 0.375rem;\r
  font-weight: 600;\r
  text-align: center;\r
  cursor: pointer;\r
  border: none;\r
  transition: all 0.3s ease;\r
}\r
\r
.button:hover {\r
  background: linear-gradient(to right, #805ad5, #4fd1c5);\r
  transform: translateY(-2px);\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Container styles */\r
.container {\r
  max-width: 1200px;\r
  margin: 0 auto;\r
  padding: 0 20px;\r
}\r
\r
/* Card styles */\r
.card {\r
  background: white;\r
  border-radius: 0.5rem;\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
  padding: 1.5rem;\r
  margin-bottom: 2rem;\r
}\r
\r
/* Responsive design */\r
@media (max-width: 768px) {\r
  h1 {\r
    font-size: 2rem;\r
  }\r
  h2 {\r
    font-size: 1.75rem;\r
  }\r
  h3 {\r
    font-size: 1.5rem;\r
  }\r
}\r
</style>\r
</head>\r
\r
<body>\r
\r
    <article class="px-4 py-8 font-sans">\r
        <h1>Building a Habit Tracker with Laravel: A Beginner's Guide</h1>\r
        <h2>Introduction</h2>\r
        <p class="ds-markdown-paragraph">In today's fast-paced world, developing good habits is more important than\r
            ever. Whether it's exercising regularly, reading daily, or practicing mindfulness, tracking our habits helps\r
            us stay accountable and see our progress over time. That's why building a habit tracker app is not only a\r
            great programming project but also a tool you can use in your personal development.</p>\r
        <p class="ds-markdown-paragraph">In this tutorial, we'll walk through creating a basic habit tracker using\r
            Laravel, one of the most popular PHP frameworks. This project is perfect for beginners who want to get\r
            hands-on experience with:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Laravel fundamentals</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">MVC (Model-View-Controller) architecture</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Database migrations</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Basic CRUD (Create, Read, Update, Delete) operations</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Routing in Laravel</p>\r
            </li>\r
        </ul>\r
\r
        <a data-router-link="habit-tracker-app-fun-facts">\r
            <p class="text-cyan-300 italic">\r
                Fun Facts\r
            </p>\r
        </a>\r
\r
        <h2>Why Build a Habit Tracker?</h2>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Practical Application</strong>: Unlike abstract exercises,\r
                    you'll build something you can actually use</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Fundamental Concepts</strong>: Covers core web development\r
                    concepts in a manageable project</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Scalability</strong>: You can easily add more features as you\r
                    learn</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Portfolio Piece</strong>: Demonstrates real-world skills to\r
                    potential employers</p>\r
            </li>\r
        </ol>\r
        <h2>Prerequisites</h2>\r
        <p class="ds-markdown-paragraph">Before we begin, make sure you have:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">PHP (7.4 or higher) installed</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Composer installed</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Basic knowledge of PHP and HTML</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Laravel installed (we'll cover this in setup)</p>\r
            </li>\r
        </ul>\r
        <h2>Setting Up the Project</h2>\r
        <p class="ds-markdown-paragraph">First, let's create a new Laravel project:</p>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">bash</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token function">composer</span> create-project laravel/laravel habit-tracker\r
<span class="token builtin class-name">cd</span> habit-tracker</pre>\r
        </div>\r
        <h2>Understanding the Code Structure</h2>\r
        <p class="ds-markdown-paragraph">Our habit tracker has three main components:</p>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Model</strong>:&nbsp;<code>Habit.php</code>&nbsp;(represents\r
                    our data structure)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">\r
                    <strong>Controller</strong>:&nbsp;<code>HabitController.php</code>&nbsp;(handles business logic)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">\r
                    <strong>Views</strong>:&nbsp;<code>habit-index.blade.php</code>&nbsp;and&nbsp;<code>habit-submit.blade.php</code>&nbsp;(user\r
                    interface)</p>\r
            </li>\r
        </ol>\r
        <h2>Step 1: Database Migration</h2>\r
        <p class="ds-markdown-paragraph">First, we need to set up our database structure. Laravel uses migrations to\r
            manage database schemas. Here's our migration file:</p>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">// database/migrations/xxxx_xx_xx_create_habits_table.php</span>\r
\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>Migration</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>Blueprint</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Schema</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name-definition class-name">CreateHabitsTable</span> <span class="token keyword">extends</span> <span class="token class-name">Migration</span>\r
<span class="token punctuation">{</span>\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>\r
    <span class="token punctuation">{</span>\r
        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habits'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'description'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'completed_today'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">decimal</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'completion_percentage'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">0.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'current_streak'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">enum</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'frequency'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'daily'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'weekly'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'monthly'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>\r
    <span class="token punctuation">{</span>\r
        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">dropIfExists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habits'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <h3>Migration Explanation:</h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>id()</code>: Auto-incrementing primary key</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>name</code>: The name of the habit (e.g., "Morning Run")</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>description</code>: More details about the habit</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>completed_today</code>: Tracks if the habit was done today</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>completion_percentage</code>: Tracks overall completion rate</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>current_streak</code>: How many consecutive days/weeks/months the\r
                    habit has been maintained</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>frequency</code>: How often the habit should be performed</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>timestamps()</code>: Automatically\r
                    adds&nbsp;<code>created_at</code>&nbsp;and&nbsp;<code>updated_at</code>&nbsp;columns</p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph">Run the migration with:</p>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">bash</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre>php artisan migrate</pre>\r
        </div>\r
        <h2>Step 2: Creating the Model</h2>\r
        <p class="ds-markdown-paragraph">Laravel will automatically create a model when we generate the migration, but\r
            let's look at it:</p>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">// app/Models/Habit.php</span>\r
\r
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Factories<span class="token punctuation">\\</span>HasFactory</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Habit</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>\r
<span class="token punctuation">{</span>\r
    <span class="token keyword">use</span> <span class="token package">HasFactory</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">protected</span> <span class="token variable">$fillable</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\r
        <span class="token string single-quoted-string">'name'</span><span class="token punctuation">,</span> \r
        <span class="token string single-quoted-string">'description'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'completed_today'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'completion_percentage'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'current_streak'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'frequency'</span>\r
    <span class="token punctuation">]</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <p class="ds-markdown-paragraph">The&nbsp;<code>$fillable</code>&nbsp;array specifies which fields can be\r
            mass-assigned, important for security.</p>\r
        <h2>Step 3: The Habit Controller</h2>\r
        <p class="ds-markdown-paragraph">Now, let's examine the controller that handles our application logic:</p>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">// app/Http/Controllers/HabitController.php</span>\r
\r
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Habit</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name-definition class-name">HabitController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>\r
<span class="token punctuation">{</span>\r
    <span class="token comment">// Display all habits</span>\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token variable">$habits</span> <span class="token operator">=</span> <span class="token class-name static-context">Habit</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habit-index'</span><span class="token punctuation">,</span> <span class="token function">compact</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habits'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token comment">// Show the form to create a new habit</span>\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">submit_view</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habit-submit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token comment">// Store a new habit</span>\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">submit</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
            <span class="token string single-quoted-string">'name'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>\r
            <span class="token string single-quoted-string">'description'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required'</span>\r
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
        <span class="token class-name static-context">Habit</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine.index'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'success'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'New Record Added Successfully!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <h3>Controller Methods Explained:</h3>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>index()</strong>:</p>\r
                <ul>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Fetches all habits from the database\r
                            using&nbsp;<code>Habit::all()</code></p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Passes them to the&nbsp;<code>habit-index</code>&nbsp;view</p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Uses Laravel's compact() function to pass data to the view</p>\r
                    </li>\r
                </ul>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>submit_view()</strong>:</p>\r
                <ul>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Simply returns the view with the habit creation form</p>\r
                    </li>\r
                </ul>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>submit()</strong>:</p>\r
                <ul>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Validates the incoming request data</p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Creates a new habit record in the database</p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Redirects back to the index page with a success message</p>\r
                    </li>\r
                </ul>\r
            </li>\r
        </ol>\r
        <h2>Step 4: Setting Up Routes</h2>\r
        <p class="ds-markdown-paragraph">Routes define how URLs map to controller methods. Here are our routes:</p>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">// routes/web.php</span>\r
\r
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>HabitController</span><span class="token punctuation">;</span>\r
\r
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine-index'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">HabitController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'index'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\r
       <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine.index'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'new-habbit'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">HabitController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'submit_view'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\r
       <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine.submit.view'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'new-habbit'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">HabitController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'submit'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\r
       <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine.submit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
        </div>\r
        <h3>Route Explanation:</h3>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>GET /routine-index</strong>:</p>\r
                <ul>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Maps to&nbsp;<code>index()</code>&nbsp;method</p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Shows all habits</p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Named&nbsp;<code>routine.index</code>&nbsp;for easy reference\r
                        </p>\r
                    </li>\r
                </ul>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>GET /new-habbit</strong>:</p>\r
                <ul>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Shows the habit creation form</p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Named&nbsp;<code>routine.submit.view</code></p>\r
                    </li>\r
                </ul>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>POST /new-habbit</strong>:</p>\r
                <ul>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Handles form submission</p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Processes data via&nbsp;<code>submit()</code>&nbsp;method</p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">Named&nbsp;<code>routine.submit</code></p>\r
                    </li>\r
                </ul>\r
            </li>\r
        </ol>\r
        <h2>Step 5: Creating Views</h2>\r
        <p class="ds-markdown-paragraph">Views handle the presentation layer. Let's create two views:</p>\r
        <h3>1. habit-index.blade.php (Main Listing)</h3>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">&lt;!-- resources/views/habit-index.blade.php --&gt;</span>\r
\r
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>My Habit Tracker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container mt-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>My Habits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\r
        \r
        @if(session('success'))\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-success<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                {{ session('success') }}\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
        @endif\r
\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ route('routine.submit.view') }}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary mb-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Add New Habit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\r
\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Frequency<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Streak<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Completed Today<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>\r
                @foreach($habits as $habit)\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $habit-&gt;name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $habit-&gt;description }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ ucfirst($habit-&gt;frequency) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $habit-&gt;current_streak }} days<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $habit-&gt;completed_today ? 'Yes' : 'No' }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>\r
                @endforeach\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <h3>2. habit-submit.blade.php (Create Form)</h3>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">&lt;!-- resources/views/habit-submit.blade.php --&gt;</span>\r
\r
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Add New Habit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container mt-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Add New Habit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\r
        \r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POST<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ route('routine.submit') }}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
            @csrf\r
            \r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Habit Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
            \r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
            \r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frequency<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Frequency<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-select<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frequency<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frequency<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>daily<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Daily<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>weekly<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Weekly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>monthly<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Monthly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
            \r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Save Habit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <h2>Running the Application</h2>\r
        <p class="ds-markdown-paragraph">Start the development server:</p>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">bash</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre>php artisan serve</pre>\r
        </div>\r
        <p class="ds-markdown-paragraph">Then visit:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><a href="http://localhost:8000/routine-index" target="_blank"\r
                        rel="noreferrer">http://localhost:8000/routine-index</a>&nbsp;to see your habits</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><a href="http://localhost:8000/new-habbit" target="_blank"\r
                        rel="noreferrer">http://localhost:8000/new-habbit</a>&nbsp;to add a new habit</p>\r
            </li>\r
        </ul>\r
        <h2>Next Steps for Improvement</h2>\r
        <p class="ds-markdown-paragraph">Now that you have a basic habit tracker, here are some features you could add:\r
        </p>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Mark habits as completed</strong>: Add a button to\r
                    toggle&nbsp;<code>completed_today</code></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Edit/Delete functionality</strong>: Allow modifying or removing\r
                    habits</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>User authentication</strong>: Let users have their own habit\r
                    lists</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Statistics</strong>: Show progress charts over time</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Reminders</strong>: Send email/SMS reminders for habits</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Streak tracking</strong>: Automatically calculate and update\r
                    streaks</p>\r
            </li>\r
        </ol>\r
        <h2>Full Source Code</h2>\r
        <p class="ds-markdown-paragraph">Here's the complete code for our habit tracker:</p>\r
        <h3>1. Migration</h3>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">// database/migrations/xxxx_xx_xx_create_habits_table.php</span>\r
\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>Migration</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>Blueprint</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Schema</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name-definition class-name">CreateHabitsTable</span> <span class="token keyword">extends</span> <span class="token class-name">Migration</span>\r
<span class="token punctuation">{</span>\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>\r
    <span class="token punctuation">{</span>\r
        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habits'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'description'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'completed_today'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">decimal</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'completion_percentage'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">0.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'current_streak'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">enum</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'frequency'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'daily'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'weekly'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'monthly'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>\r
    <span class="token punctuation">{</span>\r
        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">dropIfExists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habits'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <h3>2. Model</h3>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">// app/Models/Habit.php</span>\r
\r
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Factories<span class="token punctuation">\\</span>HasFactory</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Habit</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>\r
<span class="token punctuation">{</span>\r
    <span class="token keyword">use</span> <span class="token package">HasFactory</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">protected</span> <span class="token variable">$fillable</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\r
        <span class="token string single-quoted-string">'name'</span><span class="token punctuation">,</span> \r
        <span class="token string single-quoted-string">'description'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'completed_today'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'completion_percentage'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'current_streak'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'frequency'</span>\r
    <span class="token punctuation">]</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <h3>3. Controller</h3>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">// app/Http/Controllers/HabitController.php</span>\r
\r
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Habit</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name-definition class-name">HabitController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>\r
<span class="token punctuation">{</span>\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token variable">$habits</span> <span class="token operator">=</span> <span class="token class-name static-context">Habit</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habit-index'</span><span class="token punctuation">,</span> <span class="token function">compact</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habits'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">submit_view</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'habit-submit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">submit</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
            <span class="token string single-quoted-string">'name'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>\r
            <span class="token string single-quoted-string">'description'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>\r
            <span class="token string single-quoted-string">'frequency'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required|in:daily,weekly,monthly'</span>\r
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
        <span class="token class-name static-context">Habit</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine.index'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'success'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'New Record Added Successfully!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <h3>4. Routes</h3>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">// routes/web.php</span>\r
\r
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>HabitController</span><span class="token punctuation">;</span>\r
\r
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine-index'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">HabitController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'index'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\r
       <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine.index'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'new-habbit'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">HabitController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'submit_view'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\r
       <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine.submit.view'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'new-habbit'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">HabitController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'submit'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\r
       <span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'routine.submit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
        </div>\r
        <h3>5. Views</h3>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">&lt;!-- resources/views/habit-index.blade.php --&gt;</span>\r
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>My Habit Tracker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container mt-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>My Habits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\r
        \r
        @if(session('success'))\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-success<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                {{ session('success') }}\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
        @endif\r
\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ route('routine.submit.view') }}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary mb-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Add New Habit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\r
\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Frequency<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Streak<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Completed Today<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>\r
                @foreach($habits as $habit)\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $habit-&gt;name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $habit-&gt;description }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ ucfirst($habit-&gt;frequency) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $habit-&gt;current_streak }} days<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $habit-&gt;completed_today ? 'Yes' : 'No' }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>\r
                @endforeach\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <div class="md-code-block md-code-block-light">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">&lt;!-- resources/views/habit-submit.blade.php --&gt;</span>\r
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Add New Habit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container mt-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Add New Habit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\r
        \r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POST<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ route('routine.submit') }}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
            @csrf\r
            \r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Habit Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
            \r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
            \r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frequency<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Frequency<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-select<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frequency<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frequency<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>daily<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Daily<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>weekly<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Weekly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\r
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>monthly<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Monthly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
            \r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Save Habit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <h2>Conclusion</h2>\r
        <p class="ds-markdown-paragraph">Congratulations! You've just built a functional habit tracker with Laravel.\r
            This project covers fundamental web development concepts while creating something practical you can use\r
            every day.</p>\r
        <p class="ds-markdown-paragraph">Remember, the best way to learn is by doing. Try expanding this application\r
            with the suggested improvements or come up with your own features. Happy coding!</p>\r
    </article>\r
</body>\r
\r
</html>`,$g=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
\r
      a {cursor: pointer;}\r
    .hero-gradient {\r
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
    }\r
\r
    .code-block {\r
        background: #2d2d2d;\r
        border-left: 4px solid #667eea;\r
    }\r
\r
    .feature-card:hover {\r
        transform: translateY(-5px);\r
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r
    }\r
\r
    .animate-float {\r
        animation: float 6s ease-in-out infinite;\r
    }\r
\r
    @keyframes float {\r
        0% {\r
            transform: translateY(0px);\r
        }\r
\r
        50% {\r
            transform: translateY(-20px);\r
        }\r
\r
        100% {\r
            transform: translateY(0px);\r
        }\r
    }\r
\r
    h1, h2, h3, h4, h5, h6 {\r
  font-weight: 700;\r
  margin: 1.5rem 0 1rem;\r
  background-clip: text;\r
  -webkit-background-clip: text;\r
  color: transparent;\r
}\r
\r
h1 {\r
  font-size: 2.5rem;\r
  background-image: linear-gradient(to right, #8d7cb4, #38b2ac);\r
}\r
\r
h2 {\r
  font-size: 2rem;\r
  background-image: linear-gradient(to right, #9582c2, #4fd1c5);\r
}\r
\r
h3 {\r
  font-size: 1.75rem;\r
  background-image: linear-gradient(to right, #2f008b, #68d391);\r
}\r
\r
/* List styles */\r
ul, ol {\r
  padding-left: 2rem;\r
  margin: 1rem 0;\r
}\r
\r
li {\r
  margin-bottom: 0.5rem;\r
}\r
\r
ul {\r
  list-style-type: disc;\r
}\r
\r
ol {\r
  list-style-type: decimal;\r
}\r
\r
/* Link styles */\r
a {\r
  color: #6b46c1;\r
  text-decoration: none;\r
  transition: color 0.3s ease;\r
  cursor: pointer;\r
}\r
\r
a:hover {\r
  color: #38b2ac;\r
}\r
\r
/* Button styles */\r
.button {\r
  display: inline-block;\r
  padding: 0.75rem 1.5rem;\r
  background: linear-gradient(to right, #6b46c1, #38b2ac);\r
  color: white;\r
  border-radius: 0.375rem;\r
  font-weight: 600;\r
  text-align: center;\r
  cursor: pointer;\r
  border: none;\r
  transition: all 0.3s ease;\r
}\r
\r
.button:hover {\r
  background: linear-gradient(to right, #805ad5, #4fd1c5);\r
  transform: translateY(-2px);\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Container styles */\r
.container {\r
  max-width: 1200px;\r
  margin: 0 auto;\r
  padding: 0 20px;\r
}\r
\r
/* Card styles */\r
.card {\r
  background: white;\r
  border-radius: 0.5rem;\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
  padding: 1.5rem;\r
  margin-bottom: 2rem;\r
}\r
\r
/* Responsive design */\r
@media (max-width: 768px) {\r
  h1 {\r
    font-size: 2rem;\r
  }\r
  h2 {\r
    font-size: 1.75rem;\r
  }\r
  h3 {\r
    font-size: 1.5rem;\r
  }\r
}\r
</style>\r
</head>\r
<body>\r
    <article class="max-w-4xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-sm">\r
  <!-- Header will be inserted here -->\r
  \r
  <!-- Featured Image -->\r
  <div class="rounded-xl overflow-hidden mb-8 h-64 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">\r
    <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-blue-400 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />\r
    </svg>\r
  </div>\r
\r
  <!-- Intro -->\r
  <div class="prose prose-blue max-w-none mb-12">\r
    <p class="text-xl text-gray-700 leading-relaxed">As developers, we're professional problem-solvers. Yet when it comes to habit formation, we often abandon our debugging mindset. What if we applied the same systematic approach we use for code to building better habits? Let's reframe habit-building through a developer's lens.</p>\r
  </div>\r
\r
  <!-- Methodology -->\r
  <div class="grid md:grid-cols-2 gap-8 mb-12">\r
    <!-- Problem Identification -->\r
    <div class="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-sm">\r
      <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">\r
        <span class="text-blue-600 font-mono font-bold">1</span>\r
      </div>\r
      <h3 class="text-xl font-bold text-gray-800 mb-3 font-mono">console.log('Identify the Bug')</h3>\r
      <p class="text-gray-700 mb-4">Just as we wouldn't fix code without error logs, we need data about our habit failures:</p>\r
      <ul class="text-gray-700 space-y-2 text-sm">\r
        <li class="flex items-start">\r
          <span class="text-blue-500 font-mono mr-2">></span>\r
          <span>When does the habit fail? (Time, location)</span>\r
        </li>\r
        <li class="flex items-start">\r
          <span class="text-blue-500 font-mono mr-2">></span>\r
          <span>What error messages appear? (Excuses, feelings)</span>\r
        </li>\r
        <li class="flex items-start">\r
          <span class="text-blue-500 font-mono mr-2">></span>\r
          <span>Stack trace (What events lead to failure?)</span>\r
        </li>\r
      </ul>\r
    </div>\r
\r
    <!-- Solution Design -->\r
    <div class="bg-white p-6 rounded-xl border-2 border-green-200 shadow-sm">\r
      <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">\r
        <span class="text-green-600 font-mono font-bold">2</span>\r
      </div>\r
      <h3 class="text-xl font-bold text-gray-800 mb-3 font-mono">function implementFix()</h3>\r
      <p class="text-gray-700 mb-4">Apply programming principles to habit design:</p>\r
      <ul class="text-gray-700 space-y-2 text-sm">\r
        <li class="flex items-start">\r
          <span class="text-green-500 font-mono mr-2">></span>\r
          <span>DRY: Eliminate redundant decision points</span>\r
        </li>\r
        <li class="flex items-start">\r
          <span class="text-green-500 font-mono mr-2">></span>\r
          <span>KISS: Make the habit stupidly simple to start</span>\r
        </li>\r
        <li class="flex items-start">\r
          <span class="text-green-500 font-mono mr-2">></span>\r
          <span>YAGNI: Focus on one habit at a time</span>\r
        </li>\r
      </ul>\r
    </div>\r
  </div>\r
\r
  <!-- Debugging Table -->\r
  <div class="mb-12">\r
    <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center font-mono">Habit Debugging Cheat Sheet</h3>\r
    <div class="overflow-x-auto">\r
      <table class="min-w-full divide-y divide-gray-200">\r
        <thead class="bg-gray-50">\r
          <tr>\r
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptom</th>\r
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Root Cause</th>\r
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fix</th>\r
          </tr>\r
        </thead>\r
        <tbody class="bg-white divide-y divide-gray-200">\r
          <tr>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">"I keep forgetting"</td>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Lack of triggers</td>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">\r
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-xs">habitStack(existingRoutine)</span>\r
            </td>\r
          </tr>\r
          <tr>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">"I don't feel motivated"</td>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Over-reliance on willpower</td>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">\r
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded font-mono text-xs">reduceFriction()</span>\r
            </td>\r
          </tr>\r
          <tr>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">"I did it but saw no results"</td>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Impatience with compounding</td>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">\r
              <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded font-mono text-xs">trustProcess(1.01)</span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
  <!-- Implementation -->\r
  <div class="bg-gray-50 rounded-xl p-8 mb-12">\r
    <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Applying This to Your Habit Tracker</h3>\r
    \r
    <div class="grid md:grid-cols-3 gap-6">\r
      <!-- Track -->\r
      <div class="bg-white p-6 rounded-lg shadow-sm text-center">\r
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">\r
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />\r
          </svg>\r
        </div>\r
        <h4 class="font-bold text-gray-800 mb-2">1. Add Debugging Fields</h4>\r
        <p class="text-gray-600 text-sm">Create custom fields in your tracker for:\r
          <span class="block text-gray-700 mt-1">• Failure context<br>• Emotional state<br>• Environmental factors</span>\r
        </p>\r
      </div>\r
      \r
      <!-- Analyze -->\r
      <div class="bg-white p-6 rounded-lg shadow-sm text-center">\r
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">\r
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />\r
          </svg>\r
        </div>\r
        <h4 class="font-bold text-gray-800 mb-2">2. Weekly Retrospectives</h4>\r
        <p class="text-gray-600 text-sm">Review patterns every Sunday:\r
          <span class="block text-gray-700 mt-1">• Most common failure modes<br>• Highest success contexts<br>• Friction points</span>\r
        </p>\r
      </div>\r
      \r
      <!-- Iterate -->\r
      <div class="bg-white p-6 rounded-lg shadow-sm text-center">\r
        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">\r
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />\r
          </svg>\r
        </div>\r
        <h4 class="font-bold text-gray-800 mb-2">3. A/B Test Solutions</h4>\r
        <p class="text-gray-600 text-sm">Try different approaches:\r
          <span class="block text-gray-700 mt-1">• Different times<br>• Alternative triggers<br>• Varied durations</span>\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Conclusion -->\r
  <div class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-center text-white">\r
    <h3 class="text-2xl font-bold mb-3">Think Like a Developer</h3>\r
    <p class="mb-6 opacity-90">Your habit tracker is more than a checklist—it's a debugging console for behavior change. By applying systematic problem-solving, you transform failures into feature improvements for your best self.</p>\r
    <button class="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all font-medium inline-flex items-center">\r
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">\r
        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />\r
      </svg>\r
      Start Debugging Your Habits\r
    </button>\r
  </div>\r
\r
  <script>\r
    // Animate table rows on scroll\r
    document.addEventListener('DOMContentLoaded', () => {\r
      gsap.utils.toArray("tbody tr").forEach((row, i) => {\r
        gsap.from(row, {\r
          opacity: 0,\r
          x: -20,\r
          duration: 0.5,\r
          delay: i * 0.1,\r
          scrollTrigger: {\r
            trigger: row,\r
            start: "top 80%"\r
          }\r
        });\r
      });\r
    });\r
  <\/script>\r
</article>\r
</body>\r
</html>`,Ng=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\r
    <style>\r
\r
      a {cursor: pointer;}\r
\r
    .hero-gradient {\r
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
    }\r
\r
    .code-block {\r
        background: #2d2d2d;\r
        border-left: 4px solid #667eea;\r
    }\r
\r
    .feature-card:hover {\r
        transform: translateY(-5px);\r
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r
    }\r
\r
    .animate-float {\r
        animation: float 6s ease-in-out infinite;\r
    }\r
\r
    @keyframes float {\r
        0% {\r
            transform: translateY(0px);\r
        }\r
\r
        50% {\r
            transform: translateY(-20px);\r
        }\r
\r
        100% {\r
            transform: translateY(0px);\r
        }\r
    }\r
</style>\r
</head>\r
<body>\r
    <article class="max-w-4xl mx-auto px-4 py-8 font-sans bg-white rounded-xl shadow-sm">\r
  <!-- Intro -->\r
  <div class="prose prose-orange max-w-none mb-12">\r
    <p class="text-xl text-gray-700 leading-relaxed">Did you know it takes <strong>18 to 254 days</strong> to form a habit? The science behind behavior change is full of surprising insights that can supercharge your habit-building journey. Let's explore five fascinating facts that will change how you approach your habit tracker.</p>\r
  </div>\r
\r
  <!-- Fact 1 -->\r
  <div class="bg-amber-50 rounded-xl p-6 mb-6 border-l-4 border-amber-400">\r
    <div class="flex items-start">\r
      <span class="text-amber-800 bg-amber-100 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>\r
      <div>\r
        <h3 class="text-xl font-bold text-gray-800 mb-2">The 2-Day Rule Beats the 21-Day Myth</h3>\r
        <p class="text-gray-700">Contrary to popular belief, the "21 days to form a habit" myth (originating from 1960s plastic surgery observations) has been debunked. <strong>Research shows habits take 18-254 days to form</strong>, varying by person and complexity.</p>\r
        <p class="mt-3 text-gray-600">Pro Tip: Focus on <strong>never missing two consecutive days</strong> rather than arbitrary timelines. This "2-day rule" creates consistency without perfection pressure.</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Fact 2 -->\r
  <div class="bg-blue-50 rounded-xl p-6 mb-6 border-l-4 border-blue-400">\r
    <div class="flex items-start">\r
      <span class="text-blue-800 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>\r
      <div>\r
        <h3 class="text-xl font-bold text-gray-800 mb-2">Habit Stacking Beats Willpower</h3>\r
        <p class="text-gray-700">Stanford research reveals that <strong>willpower is like a muscle</strong> that fatigues. The most successful habit-builders use "stacking" - attaching new habits to existing routines.</p>\r
        <div class="mt-3 bg-white p-4 rounded-lg border border-blue-100">\r
          <h4 class="font-semibold text-blue-700 mb-2">Example Stack:</h4>\r
          <p class="text-gray-700">After I <span class="font-semibold text-blue-600">brush my teeth</span> (existing habit),<br>\r
          I will <span class="font-semibold text-blue-600">do 5 pushups</span> (new habit).</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Fact 3 -->\r
  <div class="bg-purple-50 rounded-xl p-6 mb-6 border-l-4 border-purple-400">\r
    <div class="flex items-start">\r
      <span class="text-purple-800 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>\r
      <div>\r
        <h3 class="text-xl font-bold text-gray-800 mb-2">The Paper Clip Strategy</h3>\r
        <p class="text-gray-700">A CEO famously built a sales habit by moving <strong>120 paper clips</strong> from one jar to another with each call. Visual progress tracking (like our habit tracker's progress bars) <strong>increases success rates by 40%</strong> according to MIT studies.</p>\r
        <div class="mt-4 flex justify-center">\r
          <div class="flex space-x-2">\r
            <div class="w-6 h-6 bg-purple-400 rounded-full"></div>\r
            <div class="w-6 h-6 bg-purple-300 rounded-full"></div>\r
            <div class="w-6 h-6 bg-purple-200 rounded-full"></div>\r
            <div class="w-6 h-6 bg-purple-100 rounded-full"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Fact 4 -->\r
  <div class="bg-green-50 rounded-xl p-6 mb-6 border-l-4 border-green-400">\r
    <div class="flex items-start">\r
      <span class="text-green-800 bg-green-100 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>\r
      <div>\r
        <h3 class="text-xl font-bold text-gray-800 mb-2">The 1% Better Rule</h3>\r
        <p class="text-gray-700">Improving a habit by just <strong>1% daily</strong> leads to being <strong>37x better</strong> after a year (1.01^365 = 37.78). This "atomic habits" principle explains why our completion percentage tracking matters more than perfection.</p>\r
        <div class="mt-3 bg-white p-3 rounded-lg">\r
          <div class="h-4 bg-gray-200 rounded-full overflow-hidden">\r
            <div class="h-full bg-green-500 rounded-full" style="width: 65%"></div>\r
          </div>\r
          <p class="text-xs text-gray-500 mt-1 text-center">65% completion still builds the habit!</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Fact 5 -->\r
  <div class="bg-red-50 rounded-xl p-6 mb-12 border-l-4 border-red-400">\r
    <div class="flex items-start">\r
      <span class="text-red-800 bg-red-100 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>\r
      <div>\r
        <h3 class="text-xl font-bold text-gray-800 mb-2">The Diderot Effect</h3>\r
        <p class="text-gray-700">18th-century philosopher Denis Diderot noticed that <strong>one new habit often creates a domino effect</strong>. Buying a new robe led him to replace all his possessions. Use this by starting with a "keystone habit" (like morning exercise) that positively influences others.</p>\r
        <div class="mt-3 flex justify-center">\r
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" />\r
          </svg>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Conclusion -->\r
  <div class="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-8 text-center">\r
    <h3 class="text-2xl font-bold text-gray-800 mb-3">Ready to Apply These Insights?</h3>\r
    <p class="text-gray-700 mb-4">Your habit tracker isn't just a tool—it's a psychology-powered behavior change machine. Remember:</p>\r
    <ul class="text-gray-700 space-y-2 mb-6 text-left max-w-md mx-auto">\r
      <li class="flex items-start">\r
        <svg class="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />\r
        </svg>\r
        <span>Track progress, not perfection</span>\r
      </li>\r
      <li class="flex items-start">\r
        <svg class="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />\r
        </svg>\r
        <span>Stack new habits onto existing ones</span>\r
      </li>\r
      <li class="flex items-start">\r
        <svg class="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />\r
        </svg>\r
        <span>Celebrate small wins consistently</span>\r
      </li>\r
    </ul>\r
    <button class="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all inline-flex items-center">\r
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">\r
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />\r
        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />\r
      </svg>\r
      Track Your First Habit Now\r
    </button>\r
  </div>\r
\r
  <script>\r
    // Animate fact cards on scroll\r
    document.addEventListener('DOMContentLoaded', () => {\r
      gsap.utils.toArray(".bg-amber-50, .bg-blue-50, .bg-purple-50, .bg-green-50, .bg-red-50").forEach((card, i) => {\r
        gsap.from(card, {\r
          opacity: 0,\r
          y: 20,\r
          duration: 0.6,\r
          delay: i * 0.15,\r
          scrollTrigger: {\r
            trigger: card,\r
            start: "top 80%"\r
          }\r
        });\r
      });\r
    });\r
  <\/script>\r
</article>\r
</body>\r
</html>`,jg=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
    .hero-gradient {\r
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
    }\r
\r
    .code-block {\r
        background: #2d2d2d;\r
        border-left: 4px solid #667eea;\r
    }\r
\r
    .feature-card:hover {\r
        transform: translateY(-5px);\r
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r
    }\r
\r
    .animate-float {\r
        animation: float 6s ease-in-out infinite;\r
    }\r
\r
    @keyframes float {\r
        0% {\r
            transform: translateY(0px);\r
        }\r
\r
        50% {\r
            transform: translateY(-20px);\r
        }\r
\r
        100% {\r
            transform: translateY(0px);\r
        }\r
    }\r
\r
    h1, h2, h3, h4, h5, h6 {\r
  font-weight: 700;\r
  margin: 1.5rem 0 1rem;\r
  background-clip: text;\r
  -webkit-background-clip: text;\r
  color: transparent;\r
}\r
\r
h1 {\r
  font-size: 2.5rem;\r
  background-image: linear-gradient(to right, #8d7cb4, #38b2ac);\r
}\r
\r
h2 {\r
  font-size: 2rem;\r
  background-image: linear-gradient(to right, #9582c2, #4fd1c5);\r
}\r
\r
h3 {\r
  font-size: 1.75rem;\r
  background-image: linear-gradient(to right, #2f008b, #68d391);\r
}\r
\r
/* List styles */\r
ul, ol {\r
  padding-left: 2rem;\r
  margin: 1rem 0;\r
}\r
\r
li {\r
  margin-bottom: 0.5rem;\r
}\r
\r
ul {\r
  list-style-type: disc;\r
}\r
\r
ol {\r
  list-style-type: decimal;\r
}\r
\r
/* Link styles */\r
a {\r
  color: #6b46c1;\r
  text-decoration: none;\r
  transition: color 0.3s ease;\r
  cursor: pointer;\r
}\r
\r
a:hover {\r
  color: #38b2ac;\r
}\r
\r
/* Button styles */\r
.button {\r
  display: inline-block;\r
  padding: 0.75rem 1.5rem;\r
  background: linear-gradient(to right, #6b46c1, #38b2ac);\r
  color: white;\r
  border-radius: 0.375rem;\r
  font-weight: 600;\r
  text-align: center;\r
  cursor: pointer;\r
  border: none;\r
  transition: all 0.3s ease;\r
}\r
\r
.button:hover {\r
  background: linear-gradient(to right, #805ad5, #4fd1c5);\r
  transform: translateY(-2px);\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Container styles */\r
.container {\r
  max-width: 1200px;\r
  margin: 0 auto;\r
  padding: 0 20px;\r
}\r
\r
/* Card styles */\r
.card {\r
  background: white;\r
  border-radius: 0.5rem;\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
  padding: 1.5rem;\r
  margin-bottom: 2rem;\r
}\r
\r
/* Responsive design */\r
@media (max-width: 768px) {\r
  h1 {\r
    font-size: 2rem;\r
  }\r
  h2 {\r
    font-size: 1.75rem;\r
  }\r
  h3 {\r
    font-size: 1.5rem;\r
  }\r
}\r
</style>\r
</head>\r
\r
<body>\r
    <h1>🚀 Building a SaaS Backend with Laravel: Crafting Robust Models &amp; Relationships</h1>\r
    <p class="ds-markdown-paragraph">Welcome, Laravel enthusiasts! Today we're kicking off an exciting journey to build\r
        a full-stack SaaS application using Vue.js, Tailwind CSS, and Laravel. We're starting with the backend first\r
        because, as any experienced developer knows, a solid foundation is key to building scalable applications.</p>\r
    <h2>🔍 What We're Building</h2>\r
    <p class="ds-markdown-paragraph">Our SaaS app will handle digital product transactions with:</p>\r
    <ul>\r
        <li>\r
            <p class="ds-markdown-paragraph">User management with credits system</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Product/item catalog</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Transaction processing</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Clean, maintainable architecture following industry best practices</p>\r
        </li>\r
    </ul>\r
    <h2>🏗️ The Foundation: Models &amp; Migrations</h2>\r
    <p class="ds-markdown-paragraph">Let's dive into the three core models that form the backbone of our application:\r
    </p>\r
    <h3>1. The User Model - Your Application's VIPs</h3>\r
    <div class="md-code-block md-code-block-light">\r
        <div class="md-code-block-banner-wrap">\r
            <div class="md-code-block-banner md-code-block-banner-lite">\r
                <div class="_121d384">\r
                    <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                    <div class="d2a24f03">&nbsp;</div>\r
                </div>\r
            </div>\r
        </div>\r
        <pre><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Factories<span class="token punctuation">\\</span>HasFactory</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>User</span> <span class="token keyword">as</span> Authenticatable<span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notifiable</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Sanctum<span class="token punctuation">\\</span>HasApiTokens</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Team</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Transaction</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Authenticatable</span>\r
<span class="token punctuation">{</span>\r
    <span class="token keyword">use</span> <span class="token package">HasFactory</span><span class="token punctuation">,</span> HasApiTokens<span class="token punctuation">,</span> Notifiable<span class="token punctuation">;</span>\r
\r
    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">transactions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Transaction</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
    </div>\r
    <p class="ds-markdown-paragraph"><strong>Key Features:</strong></p>\r
    <ul>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>HasApiTokens</code>: Prepares our user model for API authentication\r
                (we'll use Sanctum later)</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>Notifiable</code>: Ready-to-go notification system</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>$guarded = false</code>: Mass assignment protection (we'll handle\r
                validation at the controller level)</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>transactions()</code>: Defines a one-to-many relationship with\r
                transactions</p>\r
        </li>\r
    </ul>\r
    <p class="ds-markdown-paragraph"><strong>Migration Highlights:</strong></p>\r
    <div class="md-code-block md-code-block-light">\r
        <div class="md-code-block-banner-wrap">\r
            <div class="md-code-block-banner md-code-block-banner-lite">\r
                <div class="_121d384">\r
                    <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                    <div class="d2a24f03">&nbsp;</div>\r
                </div>\r
            </div>\r
        </div>\r
        <pre><span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'users'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">unsignedInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'available_credits'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamp</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email_verified_at'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email_verification_token'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">rememberToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
    </div>\r
    <ul>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>available_credits</code>: Our virtual currency system for purchases\r
            </p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>email_verification_token</code>: Prepared for secure email\r
                verification flows</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">All the standard Laravel auth fields included</p>\r
        </li>\r
    </ul>\r
    <h3>2. The Transaction Model - The Heart of Commerce</h3>\r
    <div class="md-code-block md-code-block-light">\r
        <div class="md-code-block-banner-wrap">\r
            <div class="md-code-block-banner md-code-block-banner-lite">\r
                <div class="_121d384">\r
                    <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                    <div class="d2a24f03">&nbsp;</div>\r
                </div>\r
            </div>\r
        </div>\r
        <pre><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Transaction</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>\r
<span class="token punctuation">{</span>\r
    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">items</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Item</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
    </div>\r
    <p class="ds-markdown-paragraph"><strong>Why This Matters:</strong></p>\r
    <ul>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>user()</code>: Each transaction belongs to a single user</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>items()</code>: A transaction can have multiple items (one-to-many)\r
            </p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Clean, focused model ready for business logic</p>\r
        </li>\r
    </ul>\r
    <p class="ds-markdown-paragraph"><strong>Migration Breakdown:</strong></p>\r
    <div class="md-code-block md-code-block-light">\r
        <div class="md-code-block-banner-wrap">\r
            <div class="md-code-block-banner md-code-block-banner-lite">\r
                <div class="_121d384">\r
                    <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                    <div class="d2a24f03">&nbsp;</div>\r
                </div>\r
            </div>\r
        </div>\r
        <pre><span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'transactions'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreignId</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'user_id'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">constrained</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreignId</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'items_id'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">constrained</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
    </div>\r
    <ul>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>constrained()</code>: Automatic foreign key constraints</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><code>onDelete('cascade')</code>: Automatic cleanup of related records</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Note: We'll likely want to add more fields like status, total amount, etc.\r
            </p>\r
        </li>\r
    </ul>\r
    <h3>3. The Item Model - Your Digital Products</h3>\r
    <div class="md-code-block md-code-block-light">\r
        <div class="md-code-block-banner-wrap">\r
            <div class="md-code-block-banner md-code-block-banner-lite">\r
                <div class="_121d384">\r
                    <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                    <div class="d2a24f03">&nbsp;</div>\r
                </div>\r
            </div>\r
        </div>\r
        <pre><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>\r
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Transaction</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Items</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>\r
<span class="token punctuation">{</span>\r
    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">Transaction</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
    </div>\r
    <p class="ds-markdown-paragraph"><strong>Migration Structure:</strong></p>\r
    <div class="md-code-block md-code-block-light">\r
        <div class="md-code-block-banner-wrap">\r
            <div class="md-code-block-banner md-code-block-banner-lite">\r
                <div class="_121d384">\r
                    <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                    <div class="d2a24f03">&nbsp;</div>\r
                </div>\r
            </div>\r
        </div>\r
        <pre><span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'items'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'description'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cost'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
    </div>\r
    <p class="ds-markdown-paragraph"><strong>Sample Seed Data:</strong></p>\r
    <div class="md-code-block md-code-block-light">\r
        <div class="md-code-block-banner-wrap">\r
            <div class="md-code-block-banner md-code-block-banner-lite">\r
                <div class="_121d384">\r
                    <div class="d2a24f03"><span class="d813de27">php</span></div>\r
                    <div class="d2a24f03">&nbsp;</div>\r
                </div>\r
            </div>\r
        </div>\r
        <pre><span class="token class-name static-context">Items</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
    <span class="token string double-quoted-string">"name"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Premium Video Editor"</span><span class="token punctuation">,</span>\r
    <span class="token string double-quoted-string">"description"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Professional tools for your business needs."</span><span class="token punctuation">,</span>\r
    <span class="token string double-quoted-string">"cost"</span> <span class="token operator">=&gt;</span> <span class="token number">25</span><span class="token punctuation">,</span>\r
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
<span class="token class-name static-context">Items</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
    <span class="token string double-quoted-string">"name"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Custom mobile application development kit"</span><span class="token punctuation">,</span>\r
    <span class="token string double-quoted-string">"description"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"lorem ipsum sit dolor emet"</span><span class="token punctuation">,</span>\r
    <span class="token string double-quoted-string">"cost"</span> <span class="token operator">=&gt;</span> <span class="token number">80</span><span class="token punctuation">,</span>\r
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
<span class="token class-name static-context">Items</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
    <span class="token string double-quoted-string">"name"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Premium Web Hosting"</span><span class="token punctuation">,</span>\r
    <span class="token string double-quoted-string">"description"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Reliable hosting with 99.9% uptime."</span><span class="token punctuation">,</span>\r
    <span class="token string double-quoted-string">"cost"</span> <span class="token operator">=&gt;</span> <span class="token number">50</span><span class="token punctuation">,</span>\r
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
    </div>\r
    <h2>💡 Why This Architecture Works</h2>\r
    <ol start="1">\r
        <li>\r
            <p class="ds-markdown-paragraph"><strong>Clear Separation of Concerns</strong>: Each model handles a\r
                specific domain</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><strong>Predictable Relationships</strong>: Easy to understand how data\r
                connects</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><strong>Scalability</strong>: Ready to add more features like:</p>\r
            <ul>\r
                <li>\r
                    <p class="ds-markdown-paragraph">Refunds</p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph">Discounts</p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph">Subscription models</p>\r
                </li>\r
            </ul>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><strong>API-Ready</strong>: Models are prepared for JSON responses</p>\r
        </li>\r
    </ol>\r
    <h2>🛠️ Pro Tips for Your Implementation</h2>\r
    <ol start="1">\r
        <li>\r
            <p class="ds-markdown-paragraph"><strong>Naming Consistency</strong>: Consider\r
                renaming&nbsp;<code>Items</code>&nbsp;to&nbsp;<code>Item</code>&nbsp;to follow Laravel conventions</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><strong>Future-Proofing</strong>: Add status fields early\r
                (e.g.,&nbsp;<code>transaction_status</code>)</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><strong>Indexing</strong>: Add indexes to frequently queried fields</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph"><strong>Validation</strong>: Prepare for robust validation in controllers\r
            </p>\r
        </li>\r
    </ol>\r
    <h2>🚀 What's Coming Next?</h2>\r
    <p class="ds-markdown-paragraph">In our next installment, we'll:</p>\r
    <ul>\r
        <li>\r
            <p class="ds-markdown-paragraph">Set up API routes with proper versioning</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Implement authentication with Laravel Sanctum</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Create our first controller with industry-standard practices</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Discuss proper request validation techniques</p>\r
        </li>\r
    </ul>\r
    <p class="ds-markdown-paragraph">Get ready to transform these models into a fully functional API backend!</p>\r
    <h2>💬 Your Challenge (Optional)</h2>\r
    <p class="ds-markdown-paragraph">Before the next part, try:</p>\r
    <ol start="1">\r
        <li>\r
            <p class="ds-markdown-paragraph">Adding a&nbsp;<code>status</code>&nbsp;field to transactions</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Creating a seed for test users</p>\r
        </li>\r
        <li>\r
            <p class="ds-markdown-paragraph">Thinking about what API endpoints we'll need</p>\r
        </li>\r
    </ol>\r
    <p class="ds-markdown-paragraph">Drop your solutions or questions in the comments!</p>\r
    <p class="ds-markdown-paragraph">Remember, every expert was once a beginner. You're building real-world skills with\r
        every line of code. Keep going! 💪</p>\r
    <p class="ds-markdown-paragraph">\r
        <a data-router-link="saas-app-building-auth-system">\r
         [Next up: Building Robust API Routes &rarr;]\r
\r
        </a>\r
    </p>\r
    <!-- Comments are visible in the HTML source only -->\r
</body>\r
\r
</html>`,Vg=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
    .hero-gradient {\r
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
    }\r
\r
    .code-block {\r
        background: #2d2d2d;\r
        border-left: 4px solid #667eea;\r
    }\r
\r
    .feature-card:hover {\r
        transform: translateY(-5px);\r
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r
    }\r
\r
    .animate-float {\r
        animation: float 6s ease-in-out infinite;\r
    }\r
\r
    h1, h2, h3, h4, h5, h6 {\r
  font-weight: 700;\r
  margin: 1.5rem 0 1rem;\r
  background-clip: text;\r
  -webkit-background-clip: text;\r
  color: transparent;\r
}\r
\r
h1 {\r
  font-size: 2.5rem;\r
  background-image: linear-gradient(to right, #8d7cb4, #38b2ac);\r
}\r
\r
h2 {\r
  font-size: 2rem;\r
  background-image: linear-gradient(to right, #9582c2, #4fd1c5);\r
}\r
\r
h3 {\r
  font-size: 1.75rem;\r
  background-image: linear-gradient(to right, #2f008b, #68d391);\r
}\r
\r
/* List styles */\r
ul, ol {\r
  padding-left: 2rem;\r
  margin: 1rem 0;\r
}\r
\r
li {\r
  margin-bottom: 0.5rem;\r
}\r
\r
ul {\r
  list-style-type: disc;\r
}\r
\r
ol {\r
  list-style-type: decimal;\r
}\r
\r
/* Link styles */\r
a {\r
  color: #6b46c1;\r
  text-decoration: none;\r
  transition: color 0.3s ease;\r
  cursor: pointer;\r
}\r
\r
a:hover {\r
  color: #38b2ac;\r
}\r
\r
/* Button styles */\r
.button {\r
  display: inline-block;\r
  padding: 0.75rem 1.5rem;\r
  background: linear-gradient(to right, #6b46c1, #38b2ac);\r
  color: white;\r
  border-radius: 0.375rem;\r
  font-weight: 600;\r
  text-align: center;\r
  cursor: pointer;\r
  border: none;\r
  transition: all 0.3s ease;\r
}\r
\r
.button:hover {\r
  background: linear-gradient(to right, #805ad5, #4fd1c5);\r
  transform: translateY(-2px);\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Container styles */\r
.container {\r
  max-width: 1200px;\r
  margin: 0 auto;\r
  padding: 0 20px;\r
}\r
\r
/* Card styles */\r
.card {\r
  background: white;\r
  border-radius: 0.5rem;\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
  padding: 1.5rem;\r
  margin-bottom: 2rem;\r
}\r
\r
/* Responsive design */\r
@media (max-width: 768px) {\r
  h1 {\r
    font-size: 2rem;\r
  }\r
  h2 {\r
    font-size: 1.75rem;\r
  }\r
  h3 {\r
    font-size: 1.5rem;\r
  }\r
}\r
\r
    @keyframes float {\r
        0% {\r
            transform: translateY(0px);\r
        }\r
\r
        50% {\r
            transform: translateY(-20px);\r
        }\r
\r
        100% {\r
            transform: translateY(0px);\r
        }\r
    }\r
</style>\r
</head>\r
<body>\r
    <article>\r
    <h1>🔐 Building a Secure Authentication System in Laravel: From Routes to Tokens</h1>\r
<p class="ds-markdown-paragraph">Welcome back, Laravel warriors! In our last installment, we set up our core models. Today, we're diving into the exciting world of authentication - the gateway to your SaaS application. We'll build a robust auth system with email verification, token-based authentication, and proper API responses.</p>\r
<h2>🌟 Why Authentication Matters</h2>\r
<p class="ds-markdown-paragraph">Authentication isn't just about logging users in - it's about:</p>\r
<ul>\r
<li>\r
<p class="ds-markdown-paragraph">Protecting user data</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Providing personalized experiences</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Enabling secure transactions</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Building trust with your customers</p>\r
</li>\r
</ul>\r
<h2>🛣️ Our Authentication Roadmap</h2>\r
<p class="ds-markdown-paragraph">We've set up three crucial endpoints:</p>\r
<div class="md-code-block md-code-block-dark">\r
<div class="md-code-block-banner-wrap">\r
<div class="md-code-block-banner md-code-block-banner-lite">\r
<div class="_121d384">\r
<div class="d2a24f03"><span class="d813de27">php</span></div>\r
<div class="d2a24f03">&nbsp;</div>\r
</div>\r
</div>\r
</div>\r
<pre><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'register'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">LoginController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'register'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'login'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">LoginController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'login'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'login/verify/{token}'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">LoginController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'verify'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'login.verify'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
</div>\r
<p class="ds-markdown-paragraph">Let's break down each component with code explanations.</p>\r
<h2>1. User Registration: Welcoming New Users</h2>\r
<h3>The Registration Endpoint</h3>\r
<div class="md-code-block md-code-block-dark">\r
<div class="md-code-block-banner-wrap">\r
<div class="md-code-block-banner md-code-block-banner-lite">\r
<div class="_121d384">\r
<div class="d2a24f03"><span class="d813de27">php</span></div>\r
<div class="d2a24f03">&nbsp;</div>\r
</div>\r
</div>\r
</div>\r
<pre><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">register</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
        <span class="token string single-quoted-string">'name'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'email'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required|email'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'password'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required|min:8'</span>\r
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
        <span class="token string single-quoted-string">'name'</span> <span class="token operator">=&gt;</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'email'</span> <span class="token operator">=&gt;</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'password'</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Hash</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">password</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'There was an error creating your account'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
        <span class="token string single-quoted-string">'token'</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">createToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'auth_token'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">plainTextToken</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'User created successfully!'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'user'</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span>\r
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
</div>\r
<p class="ds-markdown-paragraph"><strong>Key Features:</strong></p>\r
<ul>\r
<li>\r
<p class="ds-markdown-paragraph">Input validation (name, email, password)</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Password hashing with Laravel's&nbsp;<code>Hash</code>&nbsp;facade</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Immediate token generation using Sanctum</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Clear JSON responses for API consumers</p>\r
</li>\r
</ul>\r
<p class="ds-markdown-paragraph"><strong>Pro Tip:</strong>&nbsp;Consider adding email verification right at registration by generating and sending a verification token.</p>\r
<h2>2. User Login: Secure Access Control</h2>\r
<h3>The Login Endpoint</h3>\r
<div class="md-code-block md-code-block-dark">\r
<div class="md-code-block-banner-wrap">\r
<div class="md-code-block-banner md-code-block-banner-lite">\r
<div class="_121d384">\r
<div class="d2a24f03"><span class="d813de27">php</span></div>\r
<div class="d2a24f03">&nbsp;</div>\r
</div>\r
</div>\r
</div>\r
<pre><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">login</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>\r
<span class="token punctuation">{</span>\r
    <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
        <span class="token string single-quoted-string">'email'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required|email'</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'password'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required|min:8'</span>\r
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">,</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$user</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token class-name static-context">Hash</span><span class="token operator">::</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">password</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">password</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'Invalid credentials'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
        <span class="token string single-quoted-string">'token'</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">createToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'auth_token'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">plainTextToken</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'user'</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span>\r
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
</div>\r
<p class="ds-markdown-paragraph"><strong>Security Highlights:</strong></p>\r
<ul>\r
<li>\r
<p class="ds-markdown-paragraph">Credential validation before processing</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Hash comparison instead of plain text checks</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">HTTP 401 status for failed attempts</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Token generation for authenticated sessions</p>\r
</li>\r
</ul>\r
<p class="ds-markdown-paragraph"><strong>Why This Matters:</strong>&nbsp;This implementation follows OWASP security standards by:</p>\r
<ul>\r
<li>\r
<p class="ds-markdown-paragraph">Never revealing which field was incorrect</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Using proper HTTP status codes</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Implementing secure password storage</p>\r
</li>\r
</ul>\r
<h2>3. Email Verification: Building Trust</h2>\r
<h3>The Verification Endpoint</h3>\r
<div class="md-code-block md-code-block-dark">\r
<div class="md-code-block-banner-wrap">\r
<div class="md-code-block-banner md-code-block-banner-lite">\r
<div class="_121d384">\r
<div class="d2a24f03"><span class="d813de27">php</span></div>\r
<div class="d2a24f03">&nbsp;</div>\r
</div>\r
</div>\r
</div>\r
<pre><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">verify</span><span class="token punctuation">(</span><span class="token variable">$token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email_verification_token'</span><span class="token punctuation">,</span> <span class="token variable">$token</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Couldn't authenticate user"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\r
        <span class="token string single-quoted-string">'email_verified_at'</span> <span class="token operator">=&gt;</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
        <span class="token string single-quoted-string">'email_verification_token'</span> <span class="token operator">=&gt;</span> <span class="token constant">null</span>\r
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'Congrats! You are logged in!'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
</div>\r
<p class="ds-markdown-paragraph"><strong>Implementation Notes:</strong></p>\r
<ul>\r
<li>\r
<p class="ds-markdown-paragraph">Token-based verification for security</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Automatic timestamp recording</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Clean token removal after verification</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Friendly success message</p>\r
</li>\r
</ul>\r
<p class="ds-markdown-paragraph"><strong>Coming Soon:</strong>&nbsp;We'll enhance this to automatically log users in after verification.</p>\r
<h2>🔐 Laravel Sanctum: Our Authentication Guardian</h2>\r
<p class="ds-markdown-paragraph">Notice how we're using&nbsp;<code>createToken()</code>? That's Laravel Sanctum in action!</p>\r
<p class="ds-markdown-paragraph"><strong>Why Sanctum?</strong></p>\r
<ul>\r
<li>\r
<p class="ds-markdown-paragraph">Lightweight API token authentication</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">SPA authentication capabilities</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Simple token management</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Built-in Laravel goodness</p>\r
</li>\r
</ul>\r
<h2>🛡️ Security Best Practices We've Implemented</h2>\r
<ol start="1">\r
<li>\r
<p class="ds-markdown-paragraph"><strong>Password Hashing</strong>: Never store plain text passwords</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph"><strong>Token-Based Auth</strong>: Secure API communication</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph"><strong>Input Validation</strong>: Prevent malformed data</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph"><strong>HTTP Status Codes</strong>: Proper API responses</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph"><strong>Email Verification</strong>: Reduce fake accounts</p>\r
</li>\r
</ol>\r
<h2>🚀 What's Next? Vue.js Integration Preview</h2>\r
<p class="ds-markdown-paragraph">In our next exciting installment, we'll:</p>\r
<ol start="1">\r
<li>\r
<p class="ds-markdown-paragraph">Create a beautiful Vue.js authentication UI with Tailwind CSS</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Connect our Laravel backend with Axios</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Implement proper token storage in Vue</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Handle authentication states</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Build protected routes in our frontend</p>\r
</li>\r
</ol>\r
<p class="ds-markdown-paragraph">Here's a sneak peek at what our Vue.js auth service might look like:</p>\r
<div class="md-code-block md-code-block-dark">\r
<div class="md-code-block-banner-wrap">\r
<div class="md-code-block-banner md-code-block-banner-lite">\r
<div class="_121d384">\r
<div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
<div class="d2a24f03">&nbsp;</div>\r
</div>\r
</div>\r
</div>\r
<pre><span class="token comment">// authService.js</span>\r
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">const</span> <span class="token constant">API_URL</span> <span class="token operator">=</span> <span class="token string">'http://your-api-url.com/api'</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name">AuthService</span> <span class="token punctuation">{</span>\r
  <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">return</span> axios\r
      <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token constant">API_URL</span> <span class="token operator">+</span> <span class="token string">'login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
        <span class="token literal-property property">email</span><span class="token operator">:</span> user<span class="token punctuation">.</span>email<span class="token punctuation">,</span>\r
        <span class="token literal-property property">password</span><span class="token operator">:</span> user<span class="token punctuation">.</span>password\r
      <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
          localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span>\r
        <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>\r
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token constant">API_URL</span> <span class="token operator">+</span> <span class="token string">'register'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
      <span class="token literal-property property">name</span><span class="token operator">:</span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span>\r
      <span class="token literal-property property">email</span><span class="token operator">:</span> user<span class="token punctuation">.</span>email<span class="token punctuation">,</span>\r
      <span class="token literal-property property">password</span><span class="token operator">:</span> user<span class="token punctuation">.</span>password\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">AuthService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
</div>\r
<h2>💡 Your Homework (Optional)</h2>\r
<p class="ds-markdown-paragraph">Want to get ahead? Try:</p>\r
<ol start="1">\r
<li>\r
<p class="ds-markdown-paragraph">Adding rate limiting to the login endpoint</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Implementing password complexity requirements</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Creating a "forgot password" flow</p>\r
</li>\r
<li>\r
<p class="ds-markdown-paragraph">Adding login logging for security monitoring</p>\r
</li>\r
</ol>\r
<p class="ds-markdown-paragraph">Drop your solutions in the comments!</p>\r
<h2>🎯 Why This Matters</h2>\r
<p class="ds-markdown-paragraph">The authentication system we're building isn't just academic - it's production-ready architecture used by SaaS companies worldwide. By following along, you're gaining real-world skills that employers value.</p>\r
<p class="ds-markdown-paragraph">Remember: Every expert was once a beginner. You're building something amazing, one line at a time. Stay tuned for our Vue.js frontend integration!</p>\r
<p class="ds-markdown-paragraph">[Next up: Building a Stunning Vue.js Auth Interface &rarr;]</p>\r
</article>\r
</body>\r
</html>`,zi=[{id:1,title:"Best Starter For Every Laravel Beginner: A Basic Yet Powerful CRUD App",slug:"basic-crud-app",image:"/larawell/images/user-dashboard.png",content:Fg},{id:2,title:"The Habit Tracker App",slug:"habit-tracker-app",image:"/larawell/images/habit-dashboard.png",content:Hg,related:[{title:"Habit Tracker Fun Facts 👌",excerpt:"Did you know it takes 18 to 254 days to form a habit? The science behind behavior change is full of surprising...",slug:"habit-tracker-app-fun-facts",image:"/larawell/images/habit-fun-fa.jpeg",content:Ng},{title:"Debugging Your Habits 😁",slug:"habit-tracker-app-debugging",image:"/larawell/images/habit-debug.jpg",content:$g}]},{id:3,title:"Building a Fully Functional SaaS Application",slug:"saas-app",image:"/larawell/images/saas-app-1.jpeg",content:jg,related:[{title:"Building Auth System For Your SaaS App",slug:"saas-app-building-auth-system",image:"/larawell/images/login-system.jpeg",content:Vg}]}],zg={class:"flex justify-center pt-8 gap-6"},Ug={class:"w-full max-w-3xl"},Wg=["src"],Yg=["innerHTML"],Gg={key:0,class:"mt-20 border-t border-white/20 pt-10"},Kg={class:"space-y-8 max-w-3xl mx-auto px-4"},Xg=["onClick"],Qg={class:"flex flex-col sm:flex-row gap-4 items-center"},Jg=["src"],Zg={class:"text-lg font-bold text-white"},nm={class:"text-sm text-white/80 mt-1"},tm={class:"mt-20 border-t border-white/20 pt-10"},sm={class:"space-y-8 max-w-3xl mx-auto px-4"},em=["onClick"],am={class:"flex flex-col sm:flex-row gap-4 items-center"},rm=["src"],om={class:"text-lg font-bold text-white"},im={class:"text-sm text-white/80 mt-1"},lm={__name:"BuildingAPI",setup(t){const n=$f(),s=fp(),r=Kn(()=>n.params.slug);function a(p){var f;for(const h of zi){if(h.slug===p)return h;const c=(f=h.related)==null?void 0:f.find(g=>g.slug===p);if(c)return c}return null}Gt(()=>{o()}),ve(()=>n.params.slug,()=>{La(()=>{o()})});const e=Jn(null);function o(){e.value&&e.value.querySelectorAll("[data-router-link]").forEach(p=>{p.addEventListener("click",f=>{f.preventDefault();const h=p.getAttribute("data-router-link");h&&s.push({name:"BlogPost",params:{slug:h}})})})}const i=Kn(()=>a(r.value)),l=Kn(()=>zi.filter(p=>{var f;return p.slug!==((f=i.value)==null?void 0:f.slug)}).slice(0,3)),u=Kn(()=>{var p;return((p=i.value)==null?void 0:p.related)||[]});return(p,f)=>(Ln(),Hn(On,null,[wn(ee),f[7]||(f[7]=F("div",{class:"mb-4 w-full flex justify-center"},[F("iframe",{src:"//pl27221802.profitableratecpm.com/43bf5710712cfd4e79e986deeddd180c/invoke.js",style:{width:"728px",height:"90px",border:"none",overflow:"hidden"},scrolling:"no"})],-1)),F("div",zg,[f[4]||(f[4]=F("div",{class:"hidden lg:block w-1/6"},[F("iframe",{src:"//pl27221802.profitableratecpm.com/43bf5710712cfd4e79e986deeddd180c/invoke.js",style:{width:"160px",height:"600px",border:"none",overflow:"hidden"},scrolling:"no"},[F("div",{id:"container-43bf5710712cfd4e79e986deeddd180c"})])],-1)),F("div",Ug,[F("img",{src:i.value.image,alt:"Cover Image",class:"mx-auto mb-4"},null,8,Wg),f[1]||(f[1]=F("div",{class:"mb-6 flex justify-center"},[F("iframe",{src:"//pl27221791.profitableratecpm.com/c9/f8/59/c9f859d113e0cbda5050b028559acb45.js",style:{width:"728px",height:"90px",border:"none",overflow:"hidden"},scrolling:"no"})],-1)),F("div",{innerHTML:i.value.content,ref_key:"htmlNavigation",ref:e},null,8,Yg),f[2]||(f[2]=F("div",{class:"my-8 flex justify-center"},[F("iframe",{src:"//pl27221791.profitableratecpm.com/c9/f8/59/c9f859d113e0cbda5050b028559acb45.js",style:{width:"728px",height:"90px",border:"none",overflow:"hidden"},scrolling:"no"})],-1)),u.value.length?(Ln(),Hn("div",Gg,[f[0]||(f[0]=F("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"Must Reads for Those Who Enjoyed This Blog",-1)),F("div",Kg,[(Ln(!0),Hn(On,null,Ae(u.value,h=>(Ln(),Hn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:c=>pt(s).push({name:"BlogPost",params:{slug:h.slug}})},[F("div",Qg,[F("img",{src:h.image,alt:"Related blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Jg),F("div",null,[F("h3",Zg,lt(h.title),1),F("p",nm,lt(h.excerpt),1)])])],8,Xg))),128))])])):Kl("",!0),f[3]||(f[3]=F("div",{class:"mt-10 flex justify-center"},[F("iframe",{src:"//www.highperformanceformat.com/805b0332d9cd78f6b74f2105755970ff/invoke.html",style:{width:"728px",height:"90px",border:"none",overflow:"hidden"},scrolling:"no"})],-1))]),f[5]||(f[5]=F("div",{class:"hidden lg:block w-1/6"},[F("iframe",{src:"//www.highperformanceformat.com/805b0332d9cd78f6b74f2105755970ff/invoke.html",style:{width:"160px",height:"600px",border:"none",overflow:"hidden"},scrolling:"no"})],-1))]),F("div",tm,[f[6]||(f[6]=F("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"More Blogs",-1)),F("div",sm,[(Ln(!0),Hn(On,null,Ae(l.value,h=>(Ln(),Hn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:c=>pt(s).push({name:"BlogPost",params:{slug:h.slug}})},[F("div",am,[F("img",{src:h.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,rm),F("div",null,[F("h3",om,lt(h.title),1),F("p",im,lt(h.excerpt),1)])])],8,em))),128))])])],64))}},Ui=fc(lm,[["__scopeId","data-v-8701bd83"]]);var ia={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var pm=ia.exports,Wi;function cm(){return Wi||(Wi=1,function(t,n){(function(s,r){t.exports=r()})(pm,function(){var s={};s.version="0.2.0";var r=s.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};s.configure=function(g){var d,m;for(d in g)m=g[d],m!==void 0&&g.hasOwnProperty(d)&&(r[d]=m);return this},s.status=null,s.set=function(g){var d=s.isStarted();g=a(g,r.minimum,1),s.status=g===1?null:g;var m=s.render(!d),v=m.querySelector(r.barSelector),x=r.speed,w=r.easing;return m.offsetWidth,i(function(S){r.positionUsing===""&&(r.positionUsing=s.getPositioningCSS()),l(v,o(g,x,w)),g===1?(l(m,{transition:"none",opacity:1}),m.offsetWidth,setTimeout(function(){l(m,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){s.remove(),S()},x)},x)):setTimeout(S,x)}),this},s.isStarted=function(){return typeof s.status=="number"},s.start=function(){s.status||s.set(0);var g=function(){setTimeout(function(){s.status&&(s.trickle(),g())},r.trickleSpeed)};return r.trickle&&g(),this},s.done=function(g){return!g&&!s.status?this:s.inc(.3+.5*Math.random()).set(1)},s.inc=function(g){var d=s.status;return d?(typeof g!="number"&&(g=(1-d)*a(Math.random()*d,.1,.95)),d=a(d+g,0,.994),s.set(d)):s.start()},s.trickle=function(){return s.inc(Math.random()*r.trickleRate)},function(){var g=0,d=0;s.promise=function(m){return!m||m.state()==="resolved"?this:(d===0&&s.start(),g++,d++,m.always(function(){d--,d===0?(g=0,s.done()):s.set((g-d)/g)}),this)}}(),s.render=function(g){if(s.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var d=document.createElement("div");d.id="nprogress",d.innerHTML=r.template;var m=d.querySelector(r.barSelector),v=g?"-100":e(s.status||0),x=document.querySelector(r.parent),w;return l(m,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),r.showSpinner||(w=d.querySelector(r.spinnerSelector),w&&c(w)),x!=document.body&&p(x,"nprogress-custom-parent"),x.appendChild(d),d},s.remove=function(){f(document.documentElement,"nprogress-busy"),f(document.querySelector(r.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&c(g)},s.isRendered=function(){return!!document.getElementById("nprogress")},s.getPositioningCSS=function(){var g=document.body.style,d="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return d+"Perspective"in g?"translate3d":d+"Transform"in g?"translate":"margin"};function a(g,d,m){return g<d?d:g>m?m:g}function e(g){return(-1+g)*100}function o(g,d,m){var v;return r.positionUsing==="translate3d"?v={transform:"translate3d("+e(g)+"%,0,0)"}:r.positionUsing==="translate"?v={transform:"translate("+e(g)+"%,0)"}:v={"margin-left":e(g)+"%"},v.transition="all "+d+"ms "+m,v}var i=function(){var g=[];function d(){var m=g.shift();m&&m(d)}return function(m){g.push(m),g.length==1&&d()}}(),l=function(){var g=["Webkit","O","Moz","ms"],d={};function m(S){return S.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(k,y){return y.toUpperCase()})}function v(S){var k=document.body.style;if(S in k)return S;for(var y=g.length,_=S.charAt(0).toUpperCase()+S.slice(1),b;y--;)if(b=g[y]+_,b in k)return b;return S}function x(S){return S=m(S),d[S]||(d[S]=v(S))}function w(S,k,y){k=x(k),S.style[k]=y}return function(S,k){var y=arguments,_,b;if(y.length==2)for(_ in k)b=k[_],b!==void 0&&k.hasOwnProperty(_)&&w(S,_,b);else w(S,y[1],y[2])}}();function u(g,d){var m=typeof g=="string"?g:h(g);return m.indexOf(" "+d+" ")>=0}function p(g,d){var m=h(g),v=m+d;u(m,d)||(g.className=v.substring(1))}function f(g,d){var m=h(g),v;u(g,d)&&(v=m.replace(" "+d+" "," "),g.className=v.substring(1,v.length-1))}function h(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function c(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return s})}(ia)),ia.exports}var um=cm();const To=oo(um),dm="/larawell/images/about-us.jpg",fm="/larawell/images/about-us2.jpg",hm={__name:"AboutUs",setup(t){return Gt(()=>{As.init({duration:800,easing:"ease-in-out",once:!0})}),(n,s)=>(Ln(),Hn(On,null,[wn(ee),s[0]||(s[0]=Ee('<div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20"><main class="container mx-auto px-4 py-12"><section class="max-w-4xl mx-auto"><h1 class="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center" data-aos="fade-down"> My Coding Journey </h1><div class="space-y-12"><div class="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">The Spark of Passion</h2><p class="text-gray-700"> It all began when I first encountered the world of coding. There was something magical about creating things from nothing but lines of text. The ability to build, solve problems, and bring ideas to life completely captivated me. </p></div></div><div class="md:w-1/2"><img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="Coding passion" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div><div class="flex flex-col md:flex-row-reverse gap-8 items-center" data-aos="fade-left"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Family&#39;s Encouragement</h2><p class="text-gray-700"> When my family noticed my growing interest, they encouraged me to pursue programming seriously. &quot;You have a knack for solving puzzles,&quot; they said. Their support gave me the confidence to dive deeper into the world of web development. </p></div></div><div class="md:w-1/2"><img src="'+dm+'" alt="Family support" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div><div class="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Discovering Laravel</h2><p class="text-gray-700"> After exploring various languages and frameworks, I found Laravel - a perfect blend of elegance and power. Its expressive syntax and robust ecosystem resonated with me. The more I learned, the more I appreciated the craftsmanship behind it. </p></div></div><div class="md:w-1/2"><img src="'+fm+'" alt="Laravel code" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div><div class="flex flex-col md:flex-row-reverse gap-8 items-center" data-aos="fade-left"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Overcoming Challenges</h2><p class="text-gray-700"> The journey wasn&#39;t without obstacles. There were moments of frustration when bugs seemed insurmountable or concepts felt too complex. But each challenge overcome made me stronger and more determined. </p></div></div><div class="md:w-1/2"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="Problem solving" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div><div class="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-up"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Where I Am Today</h2><p class="text-gray-700"> Now, as a solo developer, I combine my passion for clean code with the power of Laravel to create meaningful web applications. Every project is an opportunity to learn, grow, and push the boundaries of what I can build. Along with this website, I have also launched my blogspot that you can visit right now at <a href="https://larawell20.blogspot.com">Visit My Blogspot</a></p></div></div><div class="md:w-1/2"><img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="Current work" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div></div><div class="mt-16 text-center" data-aos="zoom-in"><p class="text-xl text-indigo-800 font-medium"> The journey continues, one line of code at a time... </p></div></section></main></div>',1))],64))}},gm={class:"min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20"},mm={class:"container mx-auto px-4 py-12"},km={class:"max-w-4xl mx-auto"},vm={class:"grid md:grid-cols-2 gap-12"},xm={class:"bg-white rounded-xl shadow-lg p-8","data-aos":"fade-right"},bm=["disabled"],ym={key:0,class:"mt-4 text-green-600"},wm={__name:"ContactUs",setup(t){const n=Jn({name:"",email:"",subject:"",message:""}),s=Jn(!1),r=Jn(""),a=()=>{s.value=!0,setTimeout(()=>{console.log("Form submitted:",n.value),r.value="Thank you for your message! I will get back to you soon.",n.value={name:"",email:"",subject:"",message:""},s.value=!1,setTimeout(()=>{r.value=""},5e3)},1500)};return Gt(()=>{As.init({duration:800,easing:"ease-in-out",once:!0})}),(e,o)=>(Ln(),Hn(On,null,[wn(ee),F("div",gm,[F("main",mm,[F("section",km,[o[11]||(o[11]=F("h1",{class:"text-4xl md:text-5xl font-bold text-indigo-900 mb-4 text-center","data-aos":"fade-down"}," Let's Connect ",-1)),o[12]||(o[12]=F("p",{class:"text-xl text-indigo-700 text-center mb-12","data-aos":"fade-down","data-aos-delay":"100"}," I'd love to hear from you! ",-1)),F("div",vm,[F("div",xm,[o[9]||(o[9]=F("h2",{class:"text-2xl font-semibold text-purple-800 mb-6"},"Send Me a Message",-1)),F("form",{onSubmit:Ed(a,["prevent"]),class:"space-y-6"},[F("div",null,[o[4]||(o[4]=F("label",{for:"name",class:"block text-gray-700 mb-2"},"Your Name",-1)),Ke(F("input",{type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=i=>n.value.name=i),class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:""},null,512),[[nr,n.value.name]])]),F("div",null,[o[5]||(o[5]=F("label",{for:"email",class:"block text-gray-700 mb-2"},"Email Address",-1)),Ke(F("input",{type:"email",id:"email","onUpdate:modelValue":o[1]||(o[1]=i=>n.value.email=i),class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:""},null,512),[[nr,n.value.email]])]),F("div",null,[o[7]||(o[7]=F("label",{for:"subject",class:"block text-gray-700 mb-2"},"Subject",-1)),Ke(F("select",{id:"subject","onUpdate:modelValue":o[2]||(o[2]=i=>n.value.subject=i),class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:""},o[6]||(o[6]=[Ee('<option value="" disabled selected>Select a topic</option><option value="recommendation">Recommendation</option><option value="guidance">Guidance Needed</option><option value="bug">Bug Report</option><option value="improvement">Improvement Suggestion</option><option value="sponsorship">Sponsorship Inquiry</option><option value="idea">Project Idea</option><option value="other">Other</option>',8)]),512),[[Md,n.value.subject]])]),F("div",null,[o[8]||(o[8]=F("label",{for:"message",class:"block text-gray-700 mb-2"},"Your Message",-1)),Ke(F("textarea",{id:"message","onUpdate:modelValue":o[3]||(o[3]=i=>n.value.message=i),rows:"5",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:""},null,512),[[nr,n.value.message]])]),F("button",{type:"submit",class:"bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300",disabled:s.value},lt(s.value?"Sending...":"Send Message"),9,bm),r.value?(Ln(),Hn("p",ym,lt(r.value),1)):Kl("",!0)],32)]),o[10]||(o[10]=Ee('<div class="space-y-8" data-aos="fade-left"><div class="bg-white rounded-xl shadow-lg p-8"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Why Reach Out?</h2><ul class="space-y-4 text-gray-700"><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Need recommendations for your Laravel project</span></li><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Seeking guidance on web development challenges</span></li><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Found bugs or have improvement suggestions</span></li><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Interested in sponsorship opportunities</span></li><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Have exciting project ideas to discuss</span></li></ul></div><div class="bg-white rounded-xl shadow-lg p-8"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Direct Contact</h2><div class="space-y-4 text-gray-700"><div class="flex items-center"><svg class="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span>mcdanishp@gmail.com</span></div><div class="flex items-center"><svg class="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg><span>@professional_gamer20</span></div></div></div></div>',1))])])])])],64))}},_m={__name:"PrivacyPolicy",setup(t){return Gt(()=>{As.init({duration:800,easing:"ease-in-out",once:!0})}),(n,s)=>(Ln(),Hn(On,null,[wn(ee),s[0]||(s[0]=Ee('<div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20"><main class="container mx-auto px-4 py-12"><section class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8"><h1 class="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center" data-aos="fade-down"> Privacy Policy </h1><div class="prose max-w-none" data-aos="fade-up"><p class="text-gray-700 mb-6">Last Updated: July 19th, 2025</p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Information We Collect</h2><p class="text-gray-700 mb-4"> We may collect personal information such as your name, email address, and IP address when you interact with our website, subscribe to our newsletter, or contact us through our forms. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">How We Use Your Information</h2><p class="text-gray-700 mb-4"> The information we collect may be used to: </p><ul class="list-disc pl-6 text-gray-700 mb-6 space-y-2"><li>Provide and maintain our service</li><li>Notify you about changes to our service</li><li>Allow you to participate in interactive features</li><li>Provide customer support</li><li>Gather analysis or valuable information to improve our service</li><li>Monitor the usage of our service</li><li>Detect, prevent and address technical issues</li></ul><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Cookies and Tracking</h2><p class="text-gray-700 mb-4"> We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Third-Party Services</h2><p class="text-gray-700 mb-4"> We may employ third-party companies and individuals to facilitate our service (&quot;Service Providers&quot;), provide the service on our behalf, perform service-related services or assist us in analyzing how our service is used. </p><p class="text-gray-700 mb-6"> These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Google Analytics</h2><p class="text-gray-700 mb-4"> We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered is used to create reports about the use of our website. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Changes to This Privacy Policy</h2><p class="text-gray-700 mb-4"> We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Contact Us</h2><p class="text-gray-700"> If you have any questions about this Privacy Policy, please contact us at <a href="mailto:email@example.com" class="text-purple-600 hover:underline">mcdanishp@gmail.com</a>. </p></div></section></main></div>',1))],64))}},Sm={class:"min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20"},Cm={class:"container mx-auto px-4 py-12"},Tm={class:"max-w-4xl mx-auto"},Pm={class:"space-y-12"},Mm={class:"bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg p-8 text-center","data-aos":"zoom-in"},Am={__name:"Resources",setup(t){return Gt(()=>{As.init({duration:800,easing:"ease-in-out",once:!0})}),(n,s)=>{const r=Ml("router-link");return Ln(),Hn(On,null,[wn(ee),F("div",Sm,[F("main",Cm,[F("section",Tm,[s[4]||(s[4]=F("h1",{class:"text-4xl md:text-5xl font-bold text-indigo-900 mb-4 text-center","data-aos":"fade-down"}," Developer Resources ",-1)),s[5]||(s[5]=F("p",{class:"text-xl text-indigo-700 text-center mb-12","data-aos":"fade-down","data-aos-delay":"100"}," Tools and references that fuel my development journey ",-1)),F("div",Pm,[s[3]||(s[3]=Ee('<div class="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Why Quality Resources Matter</h2><p class="text-gray-700 mb-4"> When I first started coding, I quickly realized that not all learning resources are created equal. The right documentation, tutorials, and community support can make the difference between frustration and breakthrough. </p><p class="text-gray-700"> Over time, I&#39;ve curated this list of resources that have consistently helped me and countless other developers - from complete beginners to seasoned professionals. These are the references I wish I had known about when I started. </p></div><div class="grid md:grid-cols-2 gap-6"><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-right"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-blue-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">MDN Web Docs</h3></div><p class="text-gray-700 mb-4"> The ultimate reference for web technologies. When I need authoritative, up-to-date information about HTML, CSS, or JavaScript, this is my first stop. </p><a href="https://developer.mozilla.org" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit MDN <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-red-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">Laravel Documentation</h3></div><p class="text-gray-700 mb-4"> The framework that changed my development workflow. Laravel&#39;s documentation is exceptionally clear and comprehensive - a model for how framework docs should be written. </p><a href="https://laravel.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit Laravel <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-right"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-blue-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">Laracasts</h3></div><p class="text-gray-700 mb-4"> Jeffrey Way&#39;s video tutorials helped me understand complex concepts through practical examples. The &quot;Laravel From Scratch&quot; series was particularly transformative for my skills. </p><a href="https://laracasts.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit Laracasts <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-teal-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">Tailwind CSS</h3></div><p class="text-gray-700 mb-4"> The utility-first CSS framework that made styling enjoyable again. Their documentation is excellent, and the playground lets you experiment right in the browser. </p><a href="https://tailwindcss.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit Tailwind <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-right"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-orange-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">Stack Overflow</h3></div><p class="text-gray-700 mb-4"> The programmer&#39;s best friend. Almost every developer I know has been saved by a Stack Overflow answer at some point. Learning to search effectively here is a crucial skill. </p><a href="https://stackoverflow.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit Stack Overflow <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-green-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">W3Schools</h3></div><p class="text-gray-700 mb-4"> Perfect for beginners looking for simple, practical examples. Their &quot;Try it Yourself&quot; editor lets you experiment with code right in your browser. </p><a href="https://www.w3schools.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit W3Schools <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div></div>',2)),F("div",Mm,[s[1]||(s[1]=F("h2",{class:"text-2xl md:text-3xl font-bold text-white mb-4"},"Ready to Build Your Own Legacy?",-1)),s[2]||(s[2]=F("p",{class:"text-purple-100 mb-6 text-lg"}," Start your development journey with our curated tutorials and resources ",-1)),wn(r,{to:"/"},{default:ss(()=>s[0]||(s[0]=[F("span",{class:"inline-block bg-white text-purple-600 font-medium py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300"}," Explore Tutorials ",-1)])),_:1,__:[0]})])])])])])],64)}}};To.configure({showSpinner:!1});const Po=Ff({history:gf(),scrollBehavior(t,n,s){return{top:0}},routes:[{path:"/",name:"home",component:qg},{path:"/about-us",name:"about-us",component:hm},{path:"/contact-us",name:"contact-us",component:wm},{path:"/privacy-policy",name:"privacy-policy",component:_m},{path:"/resources",name:"resources",component:Am},{path:"/building-api",name:"buildingAPI",component:Ui},{path:"/blog/:slug",name:"BlogPost",component:Ui}]});Po.beforeEach((t,n,s)=>{To.start(),s()});Po.afterEach(()=>{To.done()});As.init();const hc=Dd(Nf);hc.use(Po);hc.mount("#app");

(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vo(s){const n=Object.create(null);for(const t of s.split(","))n[t]=1;return t=>t in n}const wn={},Ht=[],qs=()=>{},hc=()=>!1,Pe=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&(s.charCodeAt(2)>122||s.charCodeAt(2)<97),No=s=>s.startsWith("onUpdate:"),Wn=Object.assign,zo=(s,n)=>{const t=s.indexOf(n);t>-1&&s.splice(t,1)},mc=Object.prototype.hasOwnProperty,vn=(s,n)=>mc.call(s,n),sn=Array.isArray,$t=s=>Na(s)==="[object Map]",Me=s=>Na(s)==="[object Set]",Er=s=>Na(s)==="[object Date]",on=s=>typeof s=="function",qn=s=>typeof s=="string",Ds=s=>typeof s=="symbol",Sn=s=>s!==null&&typeof s=="object",Gi=s=>(Sn(s)||on(s))&&on(s.then)&&on(s.catch),Ki=Object.prototype.toString,Na=s=>Ki.call(s),vc=s=>Na(s).slice(8,-1),Xi=s=>Na(s)==="[object Object]",Uo=s=>qn(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,ga=Vo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ae=s=>{const n=Object.create(null);return t=>n[t]||(n[t]=s(t))},bc=/-(\w)/g,ys=Ae(s=>s.replace(bc,(n,t)=>t?t.toUpperCase():"")),xc=/\B([A-Z])/g,Mt=Ae(s=>s.replace(xc,"-$1").toLowerCase()),Re=Ae(s=>s.charAt(0).toUpperCase()+s.slice(1)),We=Ae(s=>s?`on${Re(s)}`:""),rt=(s,n)=>!Object.is(s,n),Ja=(s,...n)=>{for(let t=0;t<s.length;t++)s[t](...n)},Qi=(s,n,t,o=!1)=>{Object.defineProperty(s,n,{configurable:!0,enumerable:!1,writable:o,value:t})},pe=s=>{const n=parseFloat(s);return isNaN(n)?s:n};let Or;const Ee=()=>Or||(Or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wo(s){if(sn(s)){const n={};for(let t=0;t<s.length;t++){const o=s[t],e=qn(o)?Sc(o):Wo(o);if(e)for(const a in e)n[a]=e[a]}return n}else if(qn(s)||Sn(s))return s}const yc=/;(?![^(]*\))/g,wc=/:([^]+)/,_c=/\/\*[^]*?\*\//g;function Sc(s){const n={};return s.replace(_c,"").split(yc).forEach(t=>{if(t){const o=t.split(wc);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Ta(s){let n="";if(qn(s))n=s;else if(sn(s))for(let t=0;t<s.length;t++){const o=Ta(s[t]);o&&(n+=o+" ")}else if(Sn(s))for(const t in s)s[t]&&(n+=t+" ");return n.trim()}const Cc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tc=Vo(Cc);function Ji(s){return!!s||s===""}function Pc(s,n){if(s.length!==n.length)return!1;let t=!0;for(let o=0;t&&o<s.length;o++)t=Oe(s[o],n[o]);return t}function Oe(s,n){if(s===n)return!0;let t=Er(s),o=Er(n);if(t||o)return t&&o?s.getTime()===n.getTime():!1;if(t=Ds(s),o=Ds(n),t||o)return s===n;if(t=sn(s),o=sn(n),t||o)return t&&o?Pc(s,n):!1;if(t=Sn(s),o=Sn(n),t||o){if(!t||!o)return!1;const e=Object.keys(s).length,a=Object.keys(n).length;if(e!==a)return!1;for(const r in s){const i=s.hasOwnProperty(r),l=n.hasOwnProperty(r);if(i&&!l||!i&&l||!Oe(s[r],n[r]))return!1}}return String(s)===String(n)}function Mc(s,n){return s.findIndex(t=>Oe(t,n))}const Zi=s=>!!(s&&s.__v_isRef===!0),ls=s=>qn(s)?s:s==null?"":sn(s)||Sn(s)&&(s.toString===Ki||!on(s.toString))?Zi(s)?ls(s.value):JSON.stringify(s,nl,2):String(s),nl=(s,n)=>Zi(n)?nl(s,n.value):$t(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,e],a)=>(t[Ye(o,a)+" =>"]=e,t),{})}:Me(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Ye(t))}:Ds(n)?Ye(n):Sn(n)&&!sn(n)&&!Xi(n)?String(n):n,Ye=(s,n="")=>{var t;return Ds(s)?`Symbol(${(t=s.description)!=null?t:n})`:s};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qn;class Ac{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qn,!n&&Qn&&(this.index=(Qn.scopes||(Qn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=Qn;try{return Qn=this,n()}finally{Qn=t}}}on(){++this._on===1&&(this.prevScope=Qn,Qn=this)}off(){this._on>0&&--this._on===0&&(Qn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(this.effects.length=0,t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function Rc(){return Qn}let _n;const Ge=new WeakSet;class sl{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qn&&Qn.active&&Qn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ge.has(this)&&(Ge.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||al(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ir(this),el(this);const n=_n,t=ws;_n=this,ws=!0;try{return this.fn()}finally{ol(this),_n=n,ws=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Ko(n);this.deps=this.depsTail=void 0,Ir(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ge.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){go(this)&&this.run()}get dirty(){return go(this)}}let tl=0,ka,ha;function al(s,n=!1){if(s.flags|=8,n){s.next=ha,ha=s;return}s.next=ka,ka=s}function Yo(){tl++}function Go(){if(--tl>0)return;if(ha){let n=ha;for(ha=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let s;for(;ka;){let n=ka;for(ka=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(o){s||(s=o)}n=t}}if(s)throw s}function el(s){for(let n=s.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function ol(s){let n,t=s.depsTail,o=t;for(;o;){const e=o.prevDep;o.version===-1?(o===t&&(t=e),Ko(o),Ec(o)):n=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=e}s.deps=n,s.depsTail=t}function go(s){for(let n=s.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(rl(n.dep.computed)||n.dep.version!==n.version))return!0;return!!s._dirty}function rl(s){if(s.flags&4&&!(s.flags&16)||(s.flags&=-17,s.globalVersion===Pa)||(s.globalVersion=Pa,!s.isSSR&&s.flags&128&&(!s.deps&&!s._dirty||!go(s))))return;s.flags|=2;const n=s.dep,t=_n,o=ws;_n=s,ws=!0;try{el(s);const e=s.fn(s._value);(n.version===0||rt(e,s._value))&&(s.flags|=128,s._value=e,n.version++)}catch(e){throw n.version++,e}finally{_n=t,ws=o,ol(s),s.flags&=-3}}function Ko(s,n=!1){const{dep:t,prevSub:o,nextSub:e}=s;if(o&&(o.nextSub=e,s.prevSub=void 0),e&&(e.prevSub=o,s.nextSub=void 0),t.subs===s&&(t.subs=o,!o&&t.computed)){t.computed.flags&=-5;for(let a=t.computed.deps;a;a=a.nextDep)Ko(a,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ec(s){const{prevDep:n,nextDep:t}=s;n&&(n.nextDep=t,s.prevDep=void 0),t&&(t.prevDep=n,s.nextDep=void 0)}let ws=!0;const il=[];function Ys(){il.push(ws),ws=!1}function Gs(){const s=il.pop();ws=s===void 0?!0:s}function Ir(s){const{cleanup:n}=s;if(s.cleanup=void 0,n){const t=_n;_n=void 0;try{n()}finally{_n=t}}}let Pa=0;class Oc{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xo{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!_n||!ws||_n===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_n)t=this.activeLink=new Oc(_n,this),_n.deps?(t.prevDep=_n.depsTail,_n.depsTail.nextDep=t,_n.depsTail=t):_n.deps=_n.depsTail=t,ll(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const o=t.nextDep;o.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=o),t.prevDep=_n.depsTail,t.nextDep=void 0,_n.depsTail.nextDep=t,_n.depsTail=t,_n.deps===t&&(_n.deps=o)}return t}trigger(n){this.version++,Pa++,this.notify(n)}notify(n){Yo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Go()}}}function ll(s){if(s.dep.sc++,s.sub.flags&4){const n=s.dep.computed;if(n&&!s.dep.subs){n.flags|=20;for(let o=n.deps;o;o=o.nextDep)ll(o)}const t=s.dep.subs;t!==s&&(s.prevSub=t,t&&(t.nextSub=s)),s.dep.subs=s}}const ko=new WeakMap,wt=Symbol(""),ho=Symbol(""),Ma=Symbol("");function jn(s,n,t){if(ws&&_n){let o=ko.get(s);o||ko.set(s,o=new Map);let e=o.get(t);e||(o.set(t,e=new Xo),e.map=o,e.key=t),e.track()}}function Us(s,n,t,o,e,a){const r=ko.get(s);if(!r){Pa++;return}const i=l=>{l&&l.trigger()};if(Yo(),n==="clear")r.forEach(i);else{const l=sn(s),u=l&&Uo(t);if(l&&t==="length"){const p=Number(o);r.forEach((f,g)=>{(g==="length"||g===Ma||!Ds(g)&&g>=p)&&i(f)})}else switch((t!==void 0||r.has(void 0))&&i(r.get(t)),u&&i(r.get(Ma)),n){case"add":l?u&&i(r.get("length")):(i(r.get(wt)),$t(s)&&i(r.get(ho)));break;case"delete":l||(i(r.get(wt)),$t(s)&&i(r.get(ho)));break;case"set":$t(s)&&i(r.get(wt));break}}Go()}function Et(s){const n=mn(s);return n===s?n:(jn(n,"iterate",Ma),xs(s)?n:n.map(Hn))}function Ie(s){return jn(s=mn(s),"iterate",Ma),s}const Ic={__proto__:null,[Symbol.iterator](){return Ke(this,Symbol.iterator,Hn)},concat(...s){return Et(this).concat(...s.map(n=>sn(n)?Et(n):n))},entries(){return Ke(this,"entries",s=>(s[1]=Hn(s[1]),s))},every(s,n){return Hs(this,"every",s,n,void 0,arguments)},filter(s,n){return Hs(this,"filter",s,n,t=>t.map(Hn),arguments)},find(s,n){return Hs(this,"find",s,n,Hn,arguments)},findIndex(s,n){return Hs(this,"findIndex",s,n,void 0,arguments)},findLast(s,n){return Hs(this,"findLast",s,n,Hn,arguments)},findLastIndex(s,n){return Hs(this,"findLastIndex",s,n,void 0,arguments)},forEach(s,n){return Hs(this,"forEach",s,n,void 0,arguments)},includes(...s){return Xe(this,"includes",s)},indexOf(...s){return Xe(this,"indexOf",s)},join(s){return Et(this).join(s)},lastIndexOf(...s){return Xe(this,"lastIndexOf",s)},map(s,n){return Hs(this,"map",s,n,void 0,arguments)},pop(){return ra(this,"pop")},push(...s){return ra(this,"push",s)},reduce(s,...n){return qr(this,"reduce",s,n)},reduceRight(s,...n){return qr(this,"reduceRight",s,n)},shift(){return ra(this,"shift")},some(s,n){return Hs(this,"some",s,n,void 0,arguments)},splice(...s){return ra(this,"splice",s)},toReversed(){return Et(this).toReversed()},toSorted(s){return Et(this).toSorted(s)},toSpliced(...s){return Et(this).toSpliced(...s)},unshift(...s){return ra(this,"unshift",s)},values(){return Ke(this,"values",Hn)}};function Ke(s,n,t){const o=Ie(s),e=o[n]();return o!==s&&!xs(s)&&(e._next=e.next,e.next=()=>{const a=e._next();return a.value&&(a.value=t(a.value)),a}),e}const qc=Array.prototype;function Hs(s,n,t,o,e,a){const r=Ie(s),i=r!==s&&!xs(s),l=r[n];if(l!==qc[n]){const f=l.apply(s,a);return i?Hn(f):f}let u=t;r!==s&&(i?u=function(f,g){return t.call(this,Hn(f),g,s)}:t.length>2&&(u=function(f,g){return t.call(this,f,g,s)}));const p=l.call(r,u,o);return i&&e?e(p):p}function qr(s,n,t,o){const e=Ie(s);let a=t;return e!==s&&(xs(s)?t.length>3&&(a=function(r,i,l){return t.call(this,r,i,l,s)}):a=function(r,i,l){return t.call(this,r,Hn(i),l,s)}),e[n](a,...o)}function Xe(s,n,t){const o=mn(s);jn(o,"iterate",Ma);const e=o[n](...t);return(e===-1||e===!1)&&Zo(t[0])?(t[0]=mn(t[0]),o[n](...t)):e}function ra(s,n,t=[]){Ys(),Yo();const o=mn(s)[n].apply(s,t);return Go(),Gs(),o}const Dc=Vo("__proto__,__v_isRef,__isVue"),pl=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Ds));function Lc(s){Ds(s)||(s=String(s));const n=mn(this);return jn(n,"has",s),n.hasOwnProperty(s)}class cl{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,o){if(t==="__v_skip")return n.__v_skip;const e=this._isReadonly,a=this._isShallow;if(t==="__v_isReactive")return!e;if(t==="__v_isReadonly")return e;if(t==="__v_isShallow")return a;if(t==="__v_raw")return o===(e?a?Wc:gl:a?fl:dl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(o)?n:void 0;const r=sn(n);if(!e){let l;if(r&&(l=Ic[t]))return l;if(t==="hasOwnProperty")return Lc}const i=Reflect.get(n,t,zn(n)?n:o);return(Ds(t)?pl.has(t):Dc(t))||(e||jn(n,"get",t),a)?i:zn(i)?r&&Uo(t)?i:i.value:Sn(i)?e?hl(i):qe(i):i}}class ul extends cl{constructor(n=!1){super(!1,n)}set(n,t,o,e){let a=n[t];if(!this._isShallow){const l=pt(a);if(!xs(o)&&!pt(o)&&(a=mn(a),o=mn(o)),!sn(n)&&zn(a)&&!zn(o))return l?!1:(a.value=o,!0)}const r=sn(n)&&Uo(t)?Number(t)<n.length:vn(n,t),i=Reflect.set(n,t,o,zn(n)?n:e);return n===mn(e)&&(r?rt(o,a)&&Us(n,"set",t,o):Us(n,"add",t,o)),i}deleteProperty(n,t){const o=vn(n,t);n[t];const e=Reflect.deleteProperty(n,t);return e&&o&&Us(n,"delete",t,void 0),e}has(n,t){const o=Reflect.has(n,t);return(!Ds(t)||!pl.has(t))&&jn(n,"has",t),o}ownKeys(n){return jn(n,"iterate",sn(n)?"length":wt),Reflect.ownKeys(n)}}class Bc extends cl{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Fc=new ul,Hc=new Bc,$c=new ul(!0);const mo=s=>s,Ya=s=>Reflect.getPrototypeOf(s);function jc(s,n,t){return function(...o){const e=this.__v_raw,a=mn(e),r=$t(a),i=s==="entries"||s===Symbol.iterator&&r,l=s==="keys"&&r,u=e[s](...o),p=t?mo:n?ce:Hn;return!n&&jn(a,"iterate",l?ho:wt),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:i?[p(f[0]),p(f[1])]:p(f),done:g}},[Symbol.iterator](){return this}}}}function Ga(s){return function(...n){return s==="delete"?!1:s==="clear"?void 0:this}}function Vc(s,n){const t={get(e){const a=this.__v_raw,r=mn(a),i=mn(e);s||(rt(e,i)&&jn(r,"get",e),jn(r,"get",i));const{has:l}=Ya(r),u=n?mo:s?ce:Hn;if(l.call(r,e))return u(a.get(e));if(l.call(r,i))return u(a.get(i));a!==r&&a.get(e)},get size(){const e=this.__v_raw;return!s&&jn(mn(e),"iterate",wt),Reflect.get(e,"size",e)},has(e){const a=this.__v_raw,r=mn(a),i=mn(e);return s||(rt(e,i)&&jn(r,"has",e),jn(r,"has",i)),e===i?a.has(e):a.has(e)||a.has(i)},forEach(e,a){const r=this,i=r.__v_raw,l=mn(i),u=n?mo:s?ce:Hn;return!s&&jn(l,"iterate",wt),i.forEach((p,f)=>e.call(a,u(p),u(f),r))}};return Wn(t,s?{add:Ga("add"),set:Ga("set"),delete:Ga("delete"),clear:Ga("clear")}:{add(e){!n&&!xs(e)&&!pt(e)&&(e=mn(e));const a=mn(this);return Ya(a).has.call(a,e)||(a.add(e),Us(a,"add",e,e)),this},set(e,a){!n&&!xs(a)&&!pt(a)&&(a=mn(a));const r=mn(this),{has:i,get:l}=Ya(r);let u=i.call(r,e);u||(e=mn(e),u=i.call(r,e));const p=l.call(r,e);return r.set(e,a),u?rt(a,p)&&Us(r,"set",e,a):Us(r,"add",e,a),this},delete(e){const a=mn(this),{has:r,get:i}=Ya(a);let l=r.call(a,e);l||(e=mn(e),l=r.call(a,e)),i&&i.call(a,e);const u=a.delete(e);return l&&Us(a,"delete",e,void 0),u},clear(){const e=mn(this),a=e.size!==0,r=e.clear();return a&&Us(e,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(e=>{t[e]=jc(e,s,n)}),t}function Qo(s,n){const t=Vc(s,n);return(o,e,a)=>e==="__v_isReactive"?!s:e==="__v_isReadonly"?s:e==="__v_raw"?o:Reflect.get(vn(t,e)&&e in o?t:o,e,a)}const Nc={get:Qo(!1,!1)},zc={get:Qo(!1,!0)},Uc={get:Qo(!0,!1)};const dl=new WeakMap,fl=new WeakMap,gl=new WeakMap,Wc=new WeakMap;function Yc(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gc(s){return s.__v_skip||!Object.isExtensible(s)?0:Yc(vc(s))}function qe(s){return pt(s)?s:Jo(s,!1,Fc,Nc,dl)}function kl(s){return Jo(s,!1,$c,zc,fl)}function hl(s){return Jo(s,!0,Hc,Uc,gl)}function Jo(s,n,t,o,e){if(!Sn(s)||s.__v_raw&&!(n&&s.__v_isReactive))return s;const a=Gc(s);if(a===0)return s;const r=e.get(s);if(r)return r;const i=new Proxy(s,a===2?o:t);return e.set(s,i),i}function jt(s){return pt(s)?jt(s.__v_raw):!!(s&&s.__v_isReactive)}function pt(s){return!!(s&&s.__v_isReadonly)}function xs(s){return!!(s&&s.__v_isShallow)}function Zo(s){return s?!!s.__v_raw:!1}function mn(s){const n=s&&s.__v_raw;return n?mn(n):s}function Kc(s){return!vn(s,"__v_skip")&&Object.isExtensible(s)&&Qi(s,"__v_skip",!0),s}const Hn=s=>Sn(s)?qe(s):s,ce=s=>Sn(s)?hl(s):s;function zn(s){return s?s.__v_isRef===!0:!1}function Jn(s){return ml(s,!1)}function Xc(s){return ml(s,!0)}function ml(s,n){return zn(s)?s:new Qc(s,n)}class Qc{constructor(n,t){this.dep=new Xo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:mn(n),this._value=t?n:Hn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,o=this.__v_isShallow||xs(n)||pt(n);n=o?n:mn(n),rt(n,t)&&(this._rawValue=n,this._value=o?n:Hn(n),this.dep.trigger())}}function ps(s){return zn(s)?s.value:s}const Jc={get:(s,n,t)=>n==="__v_raw"?s:ps(Reflect.get(s,n,t)),set:(s,n,t,o)=>{const e=s[n];return zn(e)&&!zn(t)?(e.value=t,!0):Reflect.set(s,n,t,o)}};function vl(s){return jt(s)?s:new Proxy(s,Jc)}class Zc{constructor(n,t,o){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Xo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&_n!==this)return al(this,!0),!0}get value(){const n=this.dep.track();return rl(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function nu(s,n,t=!1){let o,e;return on(s)?o=s:(o=s.get,e=s.set),new Zc(o,e,t)}const Ka={},ue=new WeakMap;let vt;function su(s,n=!1,t=vt){if(t){let o=ue.get(t);o||ue.set(t,o=[]),o.push(s)}}function tu(s,n,t=wn){const{immediate:o,deep:e,once:a,scheduler:r,augmentJob:i,call:l}=t,u=S=>e?S:xs(S)||e===!1||e===0?Ws(S,1):Ws(S);let p,f,g,c,k=!1,d=!1;if(zn(s)?(f=()=>s.value,k=xs(s)):jt(s)?(f=()=>u(s),k=!0):sn(s)?(d=!0,k=s.some(S=>jt(S)||xs(S)),f=()=>s.map(S=>{if(zn(S))return S.value;if(jt(S))return u(S);if(on(S))return l?l(S,2):S()})):on(s)?n?f=l?()=>l(s,2):s:f=()=>{if(g){Ys();try{g()}finally{Gs()}}const S=vt;vt=p;try{return l?l(s,3,[c]):s(c)}finally{vt=S}}:f=qs,n&&e){const S=f,m=e===!0?1/0:e;f=()=>Ws(S(),m)}const h=Rc(),v=()=>{p.stop(),h&&h.active&&zo(h.effects,p)};if(a&&n){const S=n;n=(...m)=>{S(...m),v()}}let b=d?new Array(s.length).fill(Ka):Ka;const w=S=>{if(!(!(p.flags&1)||!p.dirty&&!S))if(n){const m=p.run();if(e||k||(d?m.some((y,_)=>rt(y,b[_])):rt(m,b))){g&&g();const y=vt;vt=p;try{const _=[m,b===Ka?void 0:d&&b[0]===Ka?[]:b,c];b=m,l?l(n,3,_):n(..._)}finally{vt=y}}}else p.run()};return i&&i(w),p=new sl(f),p.scheduler=r?()=>r(w,!1):w,c=S=>su(S,!1,p),g=p.onStop=()=>{const S=ue.get(p);if(S){if(l)l(S,4);else for(const m of S)m();ue.delete(p)}},n?o?w(!0):b=p.run():r?r(w.bind(null,!0),!0):p.run(),v.pause=p.pause.bind(p),v.resume=p.resume.bind(p),v.stop=v,v}function Ws(s,n=1/0,t){if(n<=0||!Sn(s)||s.__v_skip||(t=t||new Set,t.has(s)))return s;if(t.add(s),n--,zn(s))Ws(s.value,n,t);else if(sn(s))for(let o=0;o<s.length;o++)Ws(s[o],n,t);else if(Me(s)||$t(s))s.forEach(o=>{Ws(o,n,t)});else if(Xi(s)){for(const o in s)Ws(s[o],n,t);for(const o of Object.getOwnPropertySymbols(s))Object.prototype.propertyIsEnumerable.call(s,o)&&Ws(s[o],n,t)}return s}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function za(s,n,t,o){try{return o?s(...o):s()}catch(e){De(e,n,t)}}function Ls(s,n,t,o){if(on(s)){const e=za(s,n,t,o);return e&&Gi(e)&&e.catch(a=>{De(a,n,t)}),e}if(sn(s)){const e=[];for(let a=0;a<s.length;a++)e.push(Ls(s[a],n,t,o));return e}}function De(s,n,t,o=!0){const e=n?n.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:r}=n&&n.appContext.config||wn;if(n){let i=n.parent;const l=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;i;){const p=i.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](s,l,u)===!1)return}i=i.parent}if(a){Ys(),za(a,null,10,[s,l,u]),Gs();return}}au(s,t,e,o,r)}function au(s,n,t,o=!0,e=!1){if(e)throw s;console.error(s)}const Gn=[];let As=-1;const Vt=[];let Zs=null,Dt=0;const bl=Promise.resolve();let de=null;function Le(s){const n=de||bl;return s?n.then(this?s.bind(this):s):n}function eu(s){let n=As+1,t=Gn.length;for(;n<t;){const o=n+t>>>1,e=Gn[o],a=Aa(e);a<s||a===s&&e.flags&2?n=o+1:t=o}return n}function nr(s){if(!(s.flags&1)){const n=Aa(s),t=Gn[Gn.length-1];!t||!(s.flags&2)&&n>=Aa(t)?Gn.push(s):Gn.splice(eu(n),0,s),s.flags|=1,xl()}}function xl(){de||(de=bl.then(wl))}function ou(s){sn(s)?Vt.push(...s):Zs&&s.id===-1?Zs.splice(Dt+1,0,s):s.flags&1||(Vt.push(s),s.flags|=1),xl()}function Dr(s,n,t=As+1){for(;t<Gn.length;t++){const o=Gn[t];if(o&&o.flags&2){if(s&&o.id!==s.uid)continue;Gn.splice(t,1),t--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function yl(s){if(Vt.length){const n=[...new Set(Vt)].sort((t,o)=>Aa(t)-Aa(o));if(Vt.length=0,Zs){Zs.push(...n);return}for(Zs=n,Dt=0;Dt<Zs.length;Dt++){const t=Zs[Dt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Zs=null,Dt=0}}const Aa=s=>s.id==null?s.flags&2?-1:1/0:s.id;function wl(s){try{for(As=0;As<Gn.length;As++){const n=Gn[As];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),za(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;As<Gn.length;As++){const n=Gn[As];n&&(n.flags&=-2)}As=-1,Gn.length=0,yl(),de=null,(Gn.length||Vt.length)&&wl()}}let cs=null,_l=null;function fe(s){const n=cs;return cs=s,_l=s&&s.type.__scopeId||null,n}function tt(s,n=cs,t){if(!n||s._n)return s;const o=(...e)=>{o._d&&Ur(-1);const a=fe(n);let r;try{r=s(...e)}finally{fe(a),o._d&&Ur(1)}return r};return o._n=!0,o._c=!0,o._d=!0,o}function Xa(s,n){if(cs===null)return s;const t=$e(cs),o=s.dirs||(s.dirs=[]);for(let e=0;e<n.length;e++){let[a,r,i,l=wn]=n[e];a&&(on(a)&&(a={mounted:a,updated:a}),a.deep&&Ws(r),o.push({dir:a,instance:t,value:r,oldValue:void 0,arg:i,modifiers:l}))}return s}function gt(s,n,t,o){const e=s.dirs,a=n&&n.dirs;for(let r=0;r<e.length;r++){const i=e[r];a&&(i.oldValue=a[r].value);let l=i.dir[o];l&&(Ys(),Ls(l,t,8,[s.el,i,s,n]),Gs())}}const ru=Symbol("_vte"),iu=s=>s.__isTeleport;function sr(s,n){s.shapeFlag&6&&s.component?(s.transition=n,sr(s.component.subTree,n)):s.shapeFlag&128?(s.ssContent.transition=n.clone(s.ssContent),s.ssFallback.transition=n.clone(s.ssFallback)):s.transition=n}/*! #__NO_SIDE_EFFECTS__ */function Sl(s,n){return on(s)?Wn({name:s.name},n,{setup:s}):s}function Cl(s){s.ids=[s.ids[0]+s.ids[2]+++"-",0,0]}function ge(s,n,t,o,e=!1){if(sn(s)){s.forEach((k,d)=>ge(k,n&&(sn(n)?n[d]:n),t,o,e));return}if(ma(o)&&!e){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&ge(s,n,t,o.component.subTree);return}const a=o.shapeFlag&4?$e(o.component):o.el,r=e?null:a,{i,r:l}=s,u=n&&n.r,p=i.refs===wn?i.refs={}:i.refs,f=i.setupState,g=mn(f),c=f===wn?()=>!1:k=>vn(g,k);if(u!=null&&u!==l&&(qn(u)?(p[u]=null,c(u)&&(f[u]=null)):zn(u)&&(u.value=null)),on(l))za(l,i,12,[r,p]);else{const k=qn(l),d=zn(l);if(k||d){const h=()=>{if(s.f){const v=k?c(l)?f[l]:p[l]:l.value;e?sn(v)&&zo(v,a):sn(v)?v.includes(a)||v.push(a):k?(p[l]=[a],c(l)&&(f[l]=p[l])):(l.value=[a],s.k&&(p[s.k]=l.value))}else k?(p[l]=r,c(l)&&(f[l]=r)):d&&(l.value=r,s.k&&(p[s.k]=r))};r?(h.id=-1,os(h,t)):h()}}}Ee().requestIdleCallback;Ee().cancelIdleCallback;const ma=s=>!!s.type.__asyncLoader,Tl=s=>s.type.__isKeepAlive;function lu(s,n){Pl(s,"a",n)}function pu(s,n){Pl(s,"da",n)}function Pl(s,n,t=Vn){const o=s.__wdc||(s.__wdc=()=>{let e=t;for(;e;){if(e.isDeactivated)return;e=e.parent}return s()});if(Be(n,o,t),t){let e=t.parent;for(;e&&e.parent;)Tl(e.parent.vnode)&&cu(o,n,t,e),e=e.parent}}function cu(s,n,t,o){const e=Be(n,s,o,!0);Ml(()=>{zo(o[n],e)},t)}function Be(s,n,t=Vn,o=!1){if(t){const e=t[s]||(t[s]=[]),a=n.__weh||(n.__weh=(...r)=>{Ys();const i=Ua(t),l=Ls(n,t,s,r);return i(),Gs(),l});return o?e.unshift(a):e.push(a),a}}const Qs=s=>(n,t=Vn)=>{(!Ia||s==="sp")&&Be(s,(...o)=>n(...o),t)},uu=Qs("bm"),Bs=Qs("m"),du=Qs("bu"),fu=Qs("u"),tr=Qs("bum"),Ml=Qs("um"),gu=Qs("sp"),ku=Qs("rtg"),hu=Qs("rtc");function mu(s,n=Vn){Be("ec",s,n)}const vu="components";function Al(s,n){return xu(vu,s,!0,n)||s}const bu=Symbol.for("v-ndc");function xu(s,n,t=!0,o=!1){const e=cs||Vn;if(e){const a=e.type;{const i=rd(a,!1);if(i&&(i===n||i===ys(n)||i===Re(ys(n))))return a}const r=Lr(e[s]||a[s],n)||Lr(e.appContext[s],n);return!r&&o?a:r}}function Lr(s,n){return s&&(s[n]||s[ys(n)]||s[Re(ys(n))])}function Ra(s,n,t,o){let e;const a=t,r=sn(s);if(r||qn(s)){const i=r&&jt(s);let l=!1,u=!1;i&&(l=!xs(s),u=pt(s),s=Ie(s)),e=new Array(s.length);for(let p=0,f=s.length;p<f;p++)e[p]=n(l?u?ce(Hn(s[p])):Hn(s[p]):s[p],p,void 0,a)}else if(typeof s=="number"){e=new Array(s);for(let i=0;i<s;i++)e[i]=n(i+1,i,void 0,a)}else if(Sn(s))if(s[Symbol.iterator])e=Array.from(s,(i,l)=>n(i,l,void 0,a));else{const i=Object.keys(s);e=new Array(i.length);for(let l=0,u=i.length;l<u;l++){const p=i[l];e[l]=n(s[p],p,l,a)}}else e=[];return e}const vo=s=>s?Ql(s)?$e(s):vo(s.parent):null,va=Wn(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>vo(s.parent),$root:s=>vo(s.root),$host:s=>s.ce,$emit:s=>s.emit,$options:s=>El(s),$forceUpdate:s=>s.f||(s.f=()=>{nr(s.update)}),$nextTick:s=>s.n||(s.n=Le.bind(s.proxy)),$watch:s=>ju.bind(s)}),Qe=(s,n)=>s!==wn&&!s.__isScriptSetup&&vn(s,n),yu={get({_:s},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:o,data:e,props:a,accessCache:r,type:i,appContext:l}=s;let u;if(n[0]!=="$"){const c=r[n];if(c!==void 0)switch(c){case 1:return o[n];case 2:return e[n];case 4:return t[n];case 3:return a[n]}else{if(Qe(o,n))return r[n]=1,o[n];if(e!==wn&&vn(e,n))return r[n]=2,e[n];if((u=s.propsOptions[0])&&vn(u,n))return r[n]=3,a[n];if(t!==wn&&vn(t,n))return r[n]=4,t[n];bo&&(r[n]=0)}}const p=va[n];let f,g;if(p)return n==="$attrs"&&jn(s.attrs,"get",""),p(s);if((f=i.__cssModules)&&(f=f[n]))return f;if(t!==wn&&vn(t,n))return r[n]=4,t[n];if(g=l.config.globalProperties,vn(g,n))return g[n]},set({_:s},n,t){const{data:o,setupState:e,ctx:a}=s;return Qe(e,n)?(e[n]=t,!0):o!==wn&&vn(o,n)?(o[n]=t,!0):vn(s.props,n)||n[0]==="$"&&n.slice(1)in s?!1:(a[n]=t,!0)},has({_:{data:s,setupState:n,accessCache:t,ctx:o,appContext:e,propsOptions:a}},r){let i;return!!t[r]||s!==wn&&vn(s,r)||Qe(n,r)||(i=a[0])&&vn(i,r)||vn(o,r)||vn(va,r)||vn(e.config.globalProperties,r)},defineProperty(s,n,t){return t.get!=null?s._.accessCache[n]=0:vn(t,"value")&&this.set(s,n,t.value,null),Reflect.defineProperty(s,n,t)}};function Br(s){return sn(s)?s.reduce((n,t)=>(n[t]=null,n),{}):s}let bo=!0;function wu(s){const n=El(s),t=s.proxy,o=s.ctx;bo=!1,n.beforeCreate&&Fr(n.beforeCreate,s,"bc");const{data:e,computed:a,methods:r,watch:i,provide:l,inject:u,created:p,beforeMount:f,mounted:g,beforeUpdate:c,updated:k,activated:d,deactivated:h,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:S,render:m,renderTracked:y,renderTriggered:_,errorCaptured:x,serverPrefetch:C,expose:P,inheritAttrs:M,components:T,directives:O,filters:I}=n;if(u&&_u(u,o,null),r)for(const B in r){const U=r[B];on(U)&&(o[B]=U.bind(t))}if(e){const B=e.call(t,t);Sn(B)&&(s.data=qe(B))}if(bo=!0,a)for(const B in a){const U=a[B],nn=on(U)?U.bind(t,t):on(U.get)?U.get.bind(t,t):qs,rn=!on(U)&&on(U.set)?U.set.bind(t):qs,pn=Kn({get:nn,set:rn});Object.defineProperty(o,B,{enumerable:!0,configurable:!0,get:()=>pn.value,set:en=>pn.value=en})}if(i)for(const B in i)Rl(i[B],o,t,B);if(l){const B=on(l)?l.call(t):l;Reflect.ownKeys(B).forEach(U=>{Za(U,B[U])})}p&&Fr(p,s,"c");function j(B,U){sn(U)?U.forEach(nn=>B(nn.bind(t))):U&&B(U.bind(t))}if(j(uu,f),j(Bs,g),j(du,c),j(fu,k),j(lu,d),j(pu,h),j(mu,x),j(hu,y),j(ku,_),j(tr,b),j(Ml,S),j(gu,C),sn(P))if(P.length){const B=s.exposed||(s.exposed={});P.forEach(U=>{Object.defineProperty(B,U,{get:()=>t[U],set:nn=>t[U]=nn})})}else s.exposed||(s.exposed={});m&&s.render===qs&&(s.render=m),M!=null&&(s.inheritAttrs=M),T&&(s.components=T),O&&(s.directives=O),C&&Cl(s)}function _u(s,n,t=qs){sn(s)&&(s=xo(s));for(const o in s){const e=s[o];let a;Sn(e)?"default"in e?a=_s(e.from||o,e.default,!0):a=_s(e.from||o):a=_s(e),zn(a)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:r=>a.value=r}):n[o]=a}}function Fr(s,n,t){Ls(sn(s)?s.map(o=>o.bind(n.proxy)):s.bind(n.proxy),n,t)}function Rl(s,n,t,o){let e=o.includes(".")?zl(t,o):()=>t[o];if(qn(s)){const a=n[s];on(a)&&ba(e,a)}else if(on(s))ba(e,s.bind(t));else if(Sn(s))if(sn(s))s.forEach(a=>Rl(a,n,t,o));else{const a=on(s.handler)?s.handler.bind(t):n[s.handler];on(a)&&ba(e,a,s)}}function El(s){const n=s.type,{mixins:t,extends:o}=n,{mixins:e,optionsCache:a,config:{optionMergeStrategies:r}}=s.appContext,i=a.get(n);let l;return i?l=i:!e.length&&!t&&!o?l=n:(l={},e.length&&e.forEach(u=>ke(l,u,r,!0)),ke(l,n,r)),Sn(n)&&a.set(n,l),l}function ke(s,n,t,o=!1){const{mixins:e,extends:a}=n;a&&ke(s,a,t,!0),e&&e.forEach(r=>ke(s,r,t,!0));for(const r in n)if(!(o&&r==="expose")){const i=Su[r]||t&&t[r];s[r]=i?i(s[r],n[r]):n[r]}return s}const Su={data:Hr,props:$r,emits:$r,methods:ca,computed:ca,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:ca,directives:ca,watch:Tu,provide:Hr,inject:Cu};function Hr(s,n){return n?s?function(){return Wn(on(s)?s.call(this,this):s,on(n)?n.call(this,this):n)}:n:s}function Cu(s,n){return ca(xo(s),xo(n))}function xo(s){if(sn(s)){const n={};for(let t=0;t<s.length;t++)n[s[t]]=s[t];return n}return s}function Yn(s,n){return s?[...new Set([].concat(s,n))]:n}function ca(s,n){return s?Wn(Object.create(null),s,n):n}function $r(s,n){return s?sn(s)&&sn(n)?[...new Set([...s,...n])]:Wn(Object.create(null),Br(s),Br(n??{})):n}function Tu(s,n){if(!s)return n;if(!n)return s;const t=Wn(Object.create(null),s);for(const o in n)t[o]=Yn(s[o],n[o]);return t}function Ol(){return{app:null,config:{isNativeTag:hc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pu=0;function Mu(s,n){return function(o,e=null){on(o)||(o=Wn({},o)),e!=null&&!Sn(e)&&(e=null);const a=Ol(),r=new WeakSet,i=[];let l=!1;const u=a.app={_uid:Pu++,_component:o,_props:e,_container:null,_context:a,_instance:null,version:ld,get config(){return a.config},set config(p){},use(p,...f){return r.has(p)||(p&&on(p.install)?(r.add(p),p.install(u,...f)):on(p)&&(r.add(p),p(u,...f))),u},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),u},component(p,f){return f?(a.components[p]=f,u):a.components[p]},directive(p,f){return f?(a.directives[p]=f,u):a.directives[p]},mount(p,f,g){if(!l){const c=u._ceVNode||gn(o,e);return c.appContext=a,g===!0?g="svg":g===!1&&(g=void 0),s(c,p,g),l=!0,u._container=p,p.__vue_app__=u,$e(c.component)}},onUnmount(p){i.push(p)},unmount(){l&&(Ls(i,u._instance,16),s(null,u._container),delete u._container.__vue_app__)},provide(p,f){return a.provides[p]=f,u},runWithContext(p){const f=Nt;Nt=u;try{return p()}finally{Nt=f}}};return u}}let Nt=null;function Za(s,n){if(Vn){let t=Vn.provides;const o=Vn.parent&&Vn.parent.provides;o===t&&(t=Vn.provides=Object.create(o)),t[s]=n}}function _s(s,n,t=!1){const o=Vn||cs;if(o||Nt){let e=Nt?Nt._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(e&&s in e)return e[s];if(arguments.length>1)return t&&on(n)?n.call(o&&o.proxy):n}}const Il={},ql=()=>Object.create(Il),Dl=s=>Object.getPrototypeOf(s)===Il;function Au(s,n,t,o=!1){const e={},a=ql();s.propsDefaults=Object.create(null),Ll(s,n,e,a);for(const r in s.propsOptions[0])r in e||(e[r]=void 0);t?s.props=o?e:kl(e):s.type.props?s.props=e:s.props=a,s.attrs=a}function Ru(s,n,t,o){const{props:e,attrs:a,vnode:{patchFlag:r}}=s,i=mn(e),[l]=s.propsOptions;let u=!1;if((o||r>0)&&!(r&16)){if(r&8){const p=s.vnode.dynamicProps;for(let f=0;f<p.length;f++){let g=p[f];if(Fe(s.emitsOptions,g))continue;const c=n[g];if(l)if(vn(a,g))c!==a[g]&&(a[g]=c,u=!0);else{const k=ys(g);e[k]=yo(l,i,k,c,s,!1)}else c!==a[g]&&(a[g]=c,u=!0)}}}else{Ll(s,n,e,a)&&(u=!0);let p;for(const f in i)(!n||!vn(n,f)&&((p=Mt(f))===f||!vn(n,p)))&&(l?t&&(t[f]!==void 0||t[p]!==void 0)&&(e[f]=yo(l,i,f,void 0,s,!0)):delete e[f]);if(a!==i)for(const f in a)(!n||!vn(n,f))&&(delete a[f],u=!0)}u&&Us(s.attrs,"set","")}function Ll(s,n,t,o){const[e,a]=s.propsOptions;let r=!1,i;if(n)for(let l in n){if(ga(l))continue;const u=n[l];let p;e&&vn(e,p=ys(l))?!a||!a.includes(p)?t[p]=u:(i||(i={}))[p]=u:Fe(s.emitsOptions,l)||(!(l in o)||u!==o[l])&&(o[l]=u,r=!0)}if(a){const l=mn(t),u=i||wn;for(let p=0;p<a.length;p++){const f=a[p];t[f]=yo(e,l,f,u[f],s,!vn(u,f))}}return r}function yo(s,n,t,o,e,a){const r=s[t];if(r!=null){const i=vn(r,"default");if(i&&o===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&on(l)){const{propsDefaults:u}=e;if(t in u)o=u[t];else{const p=Ua(e);o=u[t]=l.call(null,n),p()}}else o=l;e.ce&&e.ce._setProp(t,o)}r[0]&&(a&&!i?o=!1:r[1]&&(o===""||o===Mt(t))&&(o=!0))}return o}const Eu=new WeakMap;function Bl(s,n,t=!1){const o=t?Eu:n.propsCache,e=o.get(s);if(e)return e;const a=s.props,r={},i=[];let l=!1;if(!on(s)){const p=f=>{l=!0;const[g,c]=Bl(f,n,!0);Wn(r,g),c&&i.push(...c)};!t&&n.mixins.length&&n.mixins.forEach(p),s.extends&&p(s.extends),s.mixins&&s.mixins.forEach(p)}if(!a&&!l)return Sn(s)&&o.set(s,Ht),Ht;if(sn(a))for(let p=0;p<a.length;p++){const f=ys(a[p]);jr(f)&&(r[f]=wn)}else if(a)for(const p in a){const f=ys(p);if(jr(f)){const g=a[p],c=r[f]=sn(g)||on(g)?{type:g}:Wn({},g),k=c.type;let d=!1,h=!0;if(sn(k))for(let v=0;v<k.length;++v){const b=k[v],w=on(b)&&b.name;if(w==="Boolean"){d=!0;break}else w==="String"&&(h=!1)}else d=on(k)&&k.name==="Boolean";c[0]=d,c[1]=h,(d||vn(c,"default"))&&i.push(f)}}const u=[r,i];return Sn(s)&&o.set(s,u),u}function jr(s){return s[0]!=="$"&&!ga(s)}const ar=s=>s[0]==="_"||s==="$stable",er=s=>sn(s)?s.map(Es):[Es(s)],Ou=(s,n,t)=>{if(n._n)return n;const o=tt((...e)=>er(n(...e)),t);return o._c=!1,o},Fl=(s,n,t)=>{const o=s._ctx;for(const e in s){if(ar(e))continue;const a=s[e];if(on(a))n[e]=Ou(e,a,o);else if(a!=null){const r=er(a);n[e]=()=>r}}},Hl=(s,n)=>{const t=er(n);s.slots.default=()=>t},$l=(s,n,t)=>{for(const o in n)(t||!ar(o))&&(s[o]=n[o])},Iu=(s,n,t)=>{const o=s.slots=ql();if(s.vnode.shapeFlag&32){const e=n._;e?($l(o,n,t),t&&Qi(o,"_",e,!0)):Fl(n,o)}else n&&Hl(s,n)},qu=(s,n,t)=>{const{vnode:o,slots:e}=s;let a=!0,r=wn;if(o.shapeFlag&32){const i=n._;i?t&&i===1?a=!1:$l(e,n,t):(a=!n.$stable,Fl(n,e)),r=n}else n&&(Hl(s,n),r={default:1});if(a)for(const i in e)!ar(i)&&r[i]==null&&delete e[i]},os=Gu;function Du(s){return Lu(s)}function Lu(s,n){const t=Ee();t.__VUE__=!0;const{insert:o,remove:e,patchProp:a,createElement:r,createText:i,createComment:l,setText:u,setElementText:p,parentNode:f,nextSibling:g,setScopeId:c=qs,insertStaticContent:k}=s,d=(A,R,E,D=null,F=null,H=null,K=void 0,W=null,Y=!!R.dynamicChildren)=>{if(A===R)return;A&&!ia(A,R)&&(D=q(A),en(A,F,H,!0),A=null),R.patchFlag===-2&&(Y=!1,R.dynamicChildren=null);const{type:N,ref:Z,shapeFlag:X}=R;switch(N){case He:h(A,R,E,D);break;case ct:v(A,R,E,D);break;case ne:A==null&&b(R,E,D,K);break;case On:T(A,R,E,D,F,H,K,W,Y);break;default:X&1?m(A,R,E,D,F,H,K,W,Y):X&6?O(A,R,E,D,F,H,K,W,Y):(X&64||X&128)&&N.process(A,R,E,D,F,H,K,W,Y,G)}Z!=null&&F&&ge(Z,A&&A.ref,H,R||A,!R)},h=(A,R,E,D)=>{if(A==null)o(R.el=i(R.children),E,D);else{const F=R.el=A.el;R.children!==A.children&&u(F,R.children)}},v=(A,R,E,D)=>{A==null?o(R.el=l(R.children||""),E,D):R.el=A.el},b=(A,R,E,D)=>{[A.el,A.anchor]=k(A.children,R,E,D,A.el,A.anchor)},w=({el:A,anchor:R},E,D)=>{let F;for(;A&&A!==R;)F=g(A),o(A,E,D),A=F;o(R,E,D)},S=({el:A,anchor:R})=>{let E;for(;A&&A!==R;)E=g(A),e(A),A=E;e(R)},m=(A,R,E,D,F,H,K,W,Y)=>{R.type==="svg"?K="svg":R.type==="math"&&(K="mathml"),A==null?y(R,E,D,F,H,K,W,Y):C(A,R,F,H,K,W,Y)},y=(A,R,E,D,F,H,K,W)=>{let Y,N;const{props:Z,shapeFlag:X,transition:Q,dirs:tn}=A;if(Y=A.el=r(A.type,H,Z&&Z.is,Z),X&8?p(Y,A.children):X&16&&x(A.children,Y,null,D,F,Je(A,H),K,W),tn&&gt(A,null,D,"created"),_(Y,A,A.scopeId,K,D),Z){for(const bn in Z)bn!=="value"&&!ga(bn)&&a(Y,bn,null,Z[bn],H,D);"value"in Z&&a(Y,"value",null,Z.value,H),(N=Z.onVnodeBeforeMount)&&Ms(N,D,A)}tn&&gt(A,null,D,"beforeMount");const ln=Bu(F,Q);ln&&Q.beforeEnter(Y),o(Y,R,E),((N=Z&&Z.onVnodeMounted)||ln||tn)&&os(()=>{N&&Ms(N,D,A),ln&&Q.enter(Y),tn&&gt(A,null,D,"mounted")},F)},_=(A,R,E,D,F)=>{if(E&&c(A,E),D)for(let H=0;H<D.length;H++)c(A,D[H]);if(F){let H=F.subTree;if(R===H||Wl(H.type)&&(H.ssContent===R||H.ssFallback===R)){const K=F.vnode;_(A,K,K.scopeId,K.slotScopeIds,F.parent)}}},x=(A,R,E,D,F,H,K,W,Y=0)=>{for(let N=Y;N<A.length;N++){const Z=A[N]=W?nt(A[N]):Es(A[N]);d(null,Z,R,E,D,F,H,K,W)}},C=(A,R,E,D,F,H,K)=>{const W=R.el=A.el;let{patchFlag:Y,dynamicChildren:N,dirs:Z}=R;Y|=A.patchFlag&16;const X=A.props||wn,Q=R.props||wn;let tn;if(E&&kt(E,!1),(tn=Q.onVnodeBeforeUpdate)&&Ms(tn,E,R,A),Z&&gt(R,A,E,"beforeUpdate"),E&&kt(E,!0),(X.innerHTML&&Q.innerHTML==null||X.textContent&&Q.textContent==null)&&p(W,""),N?P(A.dynamicChildren,N,W,E,D,Je(R,F),H):K||U(A,R,W,null,E,D,Je(R,F),H,!1),Y>0){if(Y&16)M(W,X,Q,E,F);else if(Y&2&&X.class!==Q.class&&a(W,"class",null,Q.class,F),Y&4&&a(W,"style",X.style,Q.style,F),Y&8){const ln=R.dynamicProps;for(let bn=0;bn<ln.length;bn++){const kn=ln[bn],Ln=X[kn],Dn=Q[kn];(Dn!==Ln||kn==="value")&&a(W,kn,Ln,Dn,F,E)}}Y&1&&A.children!==R.children&&p(W,R.children)}else!K&&N==null&&M(W,X,Q,E,F);((tn=Q.onVnodeUpdated)||Z)&&os(()=>{tn&&Ms(tn,E,R,A),Z&&gt(R,A,E,"updated")},D)},P=(A,R,E,D,F,H,K)=>{for(let W=0;W<R.length;W++){const Y=A[W],N=R[W],Z=Y.el&&(Y.type===On||!ia(Y,N)||Y.shapeFlag&198)?f(Y.el):E;d(Y,N,Z,null,D,F,H,K,!0)}},M=(A,R,E,D,F)=>{if(R!==E){if(R!==wn)for(const H in R)!ga(H)&&!(H in E)&&a(A,H,R[H],null,F,D);for(const H in E){if(ga(H))continue;const K=E[H],W=R[H];K!==W&&H!=="value"&&a(A,H,W,K,F,D)}"value"in E&&a(A,"value",R.value,E.value,F)}},T=(A,R,E,D,F,H,K,W,Y)=>{const N=R.el=A?A.el:i(""),Z=R.anchor=A?A.anchor:i("");let{patchFlag:X,dynamicChildren:Q,slotScopeIds:tn}=R;tn&&(W=W?W.concat(tn):tn),A==null?(o(N,E,D),o(Z,E,D),x(R.children||[],E,Z,F,H,K,W,Y)):X>0&&X&64&&Q&&A.dynamicChildren?(P(A.dynamicChildren,Q,E,F,H,K,W),(R.key!=null||F&&R===F.subTree)&&jl(A,R,!0)):U(A,R,E,Z,F,H,K,W,Y)},O=(A,R,E,D,F,H,K,W,Y)=>{R.slotScopeIds=W,A==null?R.shapeFlag&512?F.ctx.activate(R,E,D,K,Y):I(R,E,D,F,H,K,Y):L(A,R,Y)},I=(A,R,E,D,F,H,K)=>{const W=A.component=sd(A,D,F);if(Tl(A)&&(W.ctx.renderer=G),td(W,!1,K),W.asyncDep){if(F&&F.registerDep(W,j,K),!A.el){const Y=W.subTree=gn(ct);v(null,Y,R,E)}}else j(W,A,R,E,F,H,K)},L=(A,R,E)=>{const D=R.component=A.component;if(Wu(A,R,E))if(D.asyncDep&&!D.asyncResolved){B(D,R,E);return}else D.next=R,D.update();else R.el=A.el,D.vnode=R},j=(A,R,E,D,F,H,K)=>{const W=()=>{if(A.isMounted){let{next:X,bu:Q,u:tn,parent:ln,vnode:bn}=A;{const Ts=Vl(A);if(Ts){X&&(X.el=bn.el,B(A,X,K)),Ts.asyncDep.then(()=>{A.isUnmounted||W()});return}}let kn=X,Ln;kt(A,!1),X?(X.el=bn.el,B(A,X,K)):X=bn,Q&&Ja(Q),(Ln=X.props&&X.props.onVnodeBeforeUpdate)&&Ms(Ln,ln,X,bn),kt(A,!0);const Dn=Nr(A),Cs=A.subTree;A.subTree=Dn,d(Cs,Dn,f(Cs.el),q(Cs),A,F,H),X.el=Dn.el,kn===null&&Yu(A,Dn.el),tn&&os(tn,F),(Ln=X.props&&X.props.onVnodeUpdated)&&os(()=>Ms(Ln,ln,X,bn),F)}else{let X;const{el:Q,props:tn}=R,{bm:ln,m:bn,parent:kn,root:Ln,type:Dn}=A,Cs=ma(R);kt(A,!1),ln&&Ja(ln),!Cs&&(X=tn&&tn.onVnodeBeforeMount)&&Ms(X,kn,R),kt(A,!0);{Ln.ce&&Ln.ce._injectChildStyle(Dn);const Ts=A.subTree=Nr(A);d(null,Ts,E,D,A,F,H),R.el=Ts.el}if(bn&&os(bn,F),!Cs&&(X=tn&&tn.onVnodeMounted)){const Ts=R;os(()=>Ms(X,kn,Ts),F)}(R.shapeFlag&256||kn&&ma(kn.vnode)&&kn.vnode.shapeFlag&256)&&A.a&&os(A.a,F),A.isMounted=!0,R=E=D=null}};A.scope.on();const Y=A.effect=new sl(W);A.scope.off();const N=A.update=Y.run.bind(Y),Z=A.job=Y.runIfDirty.bind(Y);Z.i=A,Z.id=A.uid,Y.scheduler=()=>nr(Z),kt(A,!0),N()},B=(A,R,E)=>{R.component=A;const D=A.vnode.props;A.vnode=R,A.next=null,Ru(A,R.props,D,E),qu(A,R.children,E),Ys(),Dr(A),Gs()},U=(A,R,E,D,F,H,K,W,Y=!1)=>{const N=A&&A.children,Z=A?A.shapeFlag:0,X=R.children,{patchFlag:Q,shapeFlag:tn}=R;if(Q>0){if(Q&128){rn(N,X,E,D,F,H,K,W,Y);return}else if(Q&256){nn(N,X,E,D,F,H,K,W,Y);return}}tn&8?(Z&16&&J(N,F,H),X!==N&&p(E,X)):Z&16?tn&16?rn(N,X,E,D,F,H,K,W,Y):J(N,F,H,!0):(Z&8&&p(E,""),tn&16&&x(X,E,D,F,H,K,W,Y))},nn=(A,R,E,D,F,H,K,W,Y)=>{A=A||Ht,R=R||Ht;const N=A.length,Z=R.length,X=Math.min(N,Z);let Q;for(Q=0;Q<X;Q++){const tn=R[Q]=Y?nt(R[Q]):Es(R[Q]);d(A[Q],tn,E,null,F,H,K,W,Y)}N>Z?J(A,F,H,!0,!1,X):x(R,E,D,F,H,K,W,Y,X)},rn=(A,R,E,D,F,H,K,W,Y)=>{let N=0;const Z=R.length;let X=A.length-1,Q=Z-1;for(;N<=X&&N<=Q;){const tn=A[N],ln=R[N]=Y?nt(R[N]):Es(R[N]);if(ia(tn,ln))d(tn,ln,E,null,F,H,K,W,Y);else break;N++}for(;N<=X&&N<=Q;){const tn=A[X],ln=R[Q]=Y?nt(R[Q]):Es(R[Q]);if(ia(tn,ln))d(tn,ln,E,null,F,H,K,W,Y);else break;X--,Q--}if(N>X){if(N<=Q){const tn=Q+1,ln=tn<Z?R[tn].el:D;for(;N<=Q;)d(null,R[N]=Y?nt(R[N]):Es(R[N]),E,ln,F,H,K,W,Y),N++}}else if(N>Q)for(;N<=X;)en(A[N],F,H,!0),N++;else{const tn=N,ln=N,bn=new Map;for(N=ln;N<=Q;N++){const es=R[N]=Y?nt(R[N]):Es(R[N]);es.key!=null&&bn.set(es.key,N)}let kn,Ln=0;const Dn=Q-ln+1;let Cs=!1,Ts=0;const oa=new Array(Dn);for(N=0;N<Dn;N++)oa[N]=0;for(N=tn;N<=X;N++){const es=A[N];if(Ln>=Dn){en(es,F,H,!0);continue}let Ps;if(es.key!=null)Ps=bn.get(es.key);else for(kn=ln;kn<=Q;kn++)if(oa[kn-ln]===0&&ia(es,R[kn])){Ps=kn;break}Ps===void 0?en(es,F,H,!0):(oa[Ps-ln]=N+1,Ps>=Ts?Ts=Ps:Cs=!0,d(es,R[Ps],E,null,F,H,K,W,Y),Ln++)}const Ar=Cs?Fu(oa):Ht;for(kn=Ar.length-1,N=Dn-1;N>=0;N--){const es=ln+N,Ps=R[es],Rr=es+1<Z?R[es+1].el:D;oa[N]===0?d(null,Ps,E,Rr,F,H,K,W,Y):Cs&&(kn<0||N!==Ar[kn]?pn(Ps,E,Rr,2):kn--)}}},pn=(A,R,E,D,F=null)=>{const{el:H,type:K,transition:W,children:Y,shapeFlag:N}=A;if(N&6){pn(A.component.subTree,R,E,D);return}if(N&128){A.suspense.move(R,E,D);return}if(N&64){K.move(A,R,E,G);return}if(K===On){o(H,R,E);for(let X=0;X<Y.length;X++)pn(Y[X],R,E,D);o(A.anchor,R,E);return}if(K===ne){w(A,R,E);return}if(D!==2&&N&1&&W)if(D===0)W.beforeEnter(H),o(H,R,E),os(()=>W.enter(H),F);else{const{leave:X,delayLeave:Q,afterLeave:tn}=W,ln=()=>{A.ctx.isUnmounted?e(H):o(H,R,E)},bn=()=>{X(H,()=>{ln(),tn&&tn()})};Q?Q(H,ln,bn):bn()}else o(H,R,E)},en=(A,R,E,D=!1,F=!1)=>{const{type:H,props:K,ref:W,children:Y,dynamicChildren:N,shapeFlag:Z,patchFlag:X,dirs:Q,cacheIndex:tn}=A;if(X===-2&&(F=!1),W!=null&&(Ys(),ge(W,null,E,A,!0),Gs()),tn!=null&&(R.renderCache[tn]=void 0),Z&256){R.ctx.deactivate(A);return}const ln=Z&1&&Q,bn=!ma(A);let kn;if(bn&&(kn=K&&K.onVnodeBeforeUnmount)&&Ms(kn,R,A),Z&6)dn(A.component,E,D);else{if(Z&128){A.suspense.unmount(E,D);return}ln&&gt(A,null,R,"beforeUnmount"),Z&64?A.type.remove(A,R,E,G,D):N&&!N.hasOnce&&(H!==On||X>0&&X&64)?J(N,R,E,!1,!0):(H===On&&X&384||!F&&Z&16)&&J(Y,R,E),D&&un(A)}(bn&&(kn=K&&K.onVnodeUnmounted)||ln)&&os(()=>{kn&&Ms(kn,R,A),ln&&gt(A,null,R,"unmounted")},E)},un=A=>{const{type:R,el:E,anchor:D,transition:F}=A;if(R===On){cn(E,D);return}if(R===ne){S(A);return}const H=()=>{e(E),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(A.shapeFlag&1&&F&&!F.persisted){const{leave:K,delayLeave:W}=F,Y=()=>K(E,H);W?W(A.el,H,Y):Y()}else H()},cn=(A,R)=>{let E;for(;A!==R;)E=g(A),e(A),A=E;e(R)},dn=(A,R,E)=>{const{bum:D,scope:F,job:H,subTree:K,um:W,m:Y,a:N,parent:Z,slots:{__:X}}=A;Vr(Y),Vr(N),D&&Ja(D),Z&&sn(X)&&X.forEach(Q=>{Z.renderCache[Q]=void 0}),F.stop(),H&&(H.flags|=8,en(K,A,R,E)),W&&os(W,R),os(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},J=(A,R,E,D=!1,F=!1,H=0)=>{for(let K=H;K<A.length;K++)en(A[K],R,E,D,F)},q=A=>{if(A.shapeFlag&6)return q(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const R=g(A.anchor||A.el),E=R&&R[ru];return E?g(E):R};let V=!1;const z=(A,R,E)=>{A==null?R._vnode&&en(R._vnode,null,null,!0):d(R._vnode||null,A,R,null,null,null,E),R._vnode=A,V||(V=!0,Dr(),yl(),V=!1)},G={p:d,um:en,m:pn,r:un,mt:I,mc:x,pc:U,pbc:P,n:q,o:s};return{render:z,hydrate:void 0,createApp:Mu(z)}}function Je({type:s,props:n},t){return t==="svg"&&s==="foreignObject"||t==="mathml"&&s==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function kt({effect:s,job:n},t){t?(s.flags|=32,n.flags|=4):(s.flags&=-33,n.flags&=-5)}function Bu(s,n){return(!s||s&&!s.pendingBranch)&&n&&!n.persisted}function jl(s,n,t=!1){const o=s.children,e=n.children;if(sn(o)&&sn(e))for(let a=0;a<o.length;a++){const r=o[a];let i=e[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=e[a]=nt(e[a]),i.el=r.el),!t&&i.patchFlag!==-2&&jl(r,i)),i.type===He&&(i.el=r.el),i.type===ct&&!i.el&&(i.el=r.el)}}function Fu(s){const n=s.slice(),t=[0];let o,e,a,r,i;const l=s.length;for(o=0;o<l;o++){const u=s[o];if(u!==0){if(e=t[t.length-1],s[e]<u){n[o]=e,t.push(o);continue}for(a=0,r=t.length-1;a<r;)i=a+r>>1,s[t[i]]<u?a=i+1:r=i;u<s[t[a]]&&(a>0&&(n[o]=t[a-1]),t[a]=o)}}for(a=t.length,r=t[a-1];a-- >0;)t[a]=r,r=n[r];return t}function Vl(s){const n=s.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Vl(n)}function Vr(s){if(s)for(let n=0;n<s.length;n++)s[n].flags|=8}const Hu=Symbol.for("v-scx"),$u=()=>_s(Hu);function ba(s,n,t){return Nl(s,n,t)}function Nl(s,n,t=wn){const{immediate:o,deep:e,flush:a,once:r}=t,i=Wn({},t),l=n&&o||!n&&a!=="post";let u;if(Ia){if(a==="sync"){const c=$u();u=c.__watcherHandles||(c.__watcherHandles=[])}else if(!l){const c=()=>{};return c.stop=qs,c.resume=qs,c.pause=qs,c}}const p=Vn;i.call=(c,k,d)=>Ls(c,p,k,d);let f=!1;a==="post"?i.scheduler=c=>{os(c,p&&p.suspense)}:a!=="sync"&&(f=!0,i.scheduler=(c,k)=>{k?c():nr(c)}),i.augmentJob=c=>{n&&(c.flags|=4),f&&(c.flags|=2,p&&(c.id=p.uid,c.i=p))};const g=tu(s,n,i);return Ia&&(u?u.push(g):l&&g()),g}function ju(s,n,t){const o=this.proxy,e=qn(s)?s.includes(".")?zl(o,s):()=>o[s]:s.bind(o,o);let a;on(n)?a=n:(a=n.handler,t=n);const r=Ua(this),i=Nl(e,a.bind(o),t);return r(),i}function zl(s,n){const t=n.split(".");return()=>{let o=s;for(let e=0;e<t.length&&o;e++)o=o[t[e]];return o}}const Vu=(s,n)=>n==="modelValue"||n==="model-value"?s.modelModifiers:s[`${n}Modifiers`]||s[`${ys(n)}Modifiers`]||s[`${Mt(n)}Modifiers`];function Nu(s,n,...t){if(s.isUnmounted)return;const o=s.vnode.props||wn;let e=t;const a=n.startsWith("update:"),r=a&&Vu(o,n.slice(7));r&&(r.trim&&(e=t.map(p=>qn(p)?p.trim():p)),r.number&&(e=t.map(pe)));let i,l=o[i=We(n)]||o[i=We(ys(n))];!l&&a&&(l=o[i=We(Mt(n))]),l&&Ls(l,s,6,e);const u=o[i+"Once"];if(u){if(!s.emitted)s.emitted={};else if(s.emitted[i])return;s.emitted[i]=!0,Ls(u,s,6,e)}}function Ul(s,n,t=!1){const o=n.emitsCache,e=o.get(s);if(e!==void 0)return e;const a=s.emits;let r={},i=!1;if(!on(s)){const l=u=>{const p=Ul(u,n,!0);p&&(i=!0,Wn(r,p))};!t&&n.mixins.length&&n.mixins.forEach(l),s.extends&&l(s.extends),s.mixins&&s.mixins.forEach(l)}return!a&&!i?(Sn(s)&&o.set(s,null),null):(sn(a)?a.forEach(l=>r[l]=null):Wn(r,a),Sn(s)&&o.set(s,r),r)}function Fe(s,n){return!s||!Pe(n)?!1:(n=n.slice(2).replace(/Once$/,""),vn(s,n[0].toLowerCase()+n.slice(1))||vn(s,Mt(n))||vn(s,n))}function Nr(s){const{type:n,vnode:t,proxy:o,withProxy:e,propsOptions:[a],slots:r,attrs:i,emit:l,render:u,renderCache:p,props:f,data:g,setupState:c,ctx:k,inheritAttrs:d}=s,h=fe(s);let v,b;try{if(t.shapeFlag&4){const S=e||o,m=S;v=Es(u.call(m,S,p,f,c,g,k)),b=i}else{const S=n;v=Es(S.length>1?S(f,{attrs:i,slots:r,emit:l}):S(f,null)),b=n.props?i:zu(i)}}catch(S){xa.length=0,De(S,s,1),v=gn(ct)}let w=v;if(b&&d!==!1){const S=Object.keys(b),{shapeFlag:m}=w;S.length&&m&7&&(a&&S.some(No)&&(b=Uu(b,a)),w=Kt(w,b,!1,!0))}return t.dirs&&(w=Kt(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&sr(w,t.transition),v=w,fe(h),v}const zu=s=>{let n;for(const t in s)(t==="class"||t==="style"||Pe(t))&&((n||(n={}))[t]=s[t]);return n},Uu=(s,n)=>{const t={};for(const o in s)(!No(o)||!(o.slice(9)in n))&&(t[o]=s[o]);return t};function Wu(s,n,t){const{props:o,children:e,component:a}=s,{props:r,children:i,patchFlag:l}=n,u=a.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return o?zr(o,r,u):!!r;if(l&8){const p=n.dynamicProps;for(let f=0;f<p.length;f++){const g=p[f];if(r[g]!==o[g]&&!Fe(u,g))return!0}}}else return(e||i)&&(!i||!i.$stable)?!0:o===r?!1:o?r?zr(o,r,u):!0:!!r;return!1}function zr(s,n,t){const o=Object.keys(n);if(o.length!==Object.keys(s).length)return!0;for(let e=0;e<o.length;e++){const a=o[e];if(n[a]!==s[a]&&!Fe(t,a))return!0}return!1}function Yu({vnode:s,parent:n},t){for(;n;){const o=n.subTree;if(o.suspense&&o.suspense.activeBranch===s&&(o.el=s.el),o===s)(s=n.vnode).el=t,n=n.parent;else break}}const Wl=s=>s.__isSuspense;function Gu(s,n){n&&n.pendingBranch?sn(s)?n.effects.push(...s):n.effects.push(s):ou(s)}const On=Symbol.for("v-fgt"),He=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),ne=Symbol.for("v-stc"),xa=[];let us=null;function In(s=!1){xa.push(us=s?null:[])}function Ku(){xa.pop(),us=xa[xa.length-1]||null}let Ea=1;function Ur(s,n=!1){Ea+=s,s<0&&us&&n&&(us.hasOnce=!0)}function Yl(s){return s.dynamicChildren=Ea>0?us||Ht:null,Ku(),Ea>0&&us&&us.push(s),s}function Bn(s,n,t,o,e,a){return Yl($(s,n,t,o,e,a,!0))}function Gl(s,n,t,o,e){return Yl(gn(s,n,t,o,e,!0))}function he(s){return s?s.__v_isVNode===!0:!1}function ia(s,n){return s.type===n.type&&s.key===n.key}const Kl=({key:s})=>s??null,se=({ref:s,ref_key:n,ref_for:t})=>(typeof s=="number"&&(s=""+s),s!=null?qn(s)||zn(s)||on(s)?{i:cs,r:s,k:n,f:!!t}:s:null);function $(s,n=null,t=null,o=0,e=null,a=s===On?0:1,r=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:s,props:n,key:n&&Kl(n),ref:n&&se(n),scopeId:_l,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:e,dynamicChildren:null,appContext:null,ctx:cs};return i?(or(l,t),a&128&&s.normalize(l)):t&&(l.shapeFlag|=qn(t)?8:16),Ea>0&&!r&&us&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&us.push(l),l}const gn=Xu;function Xu(s,n=null,t=null,o=0,e=null,a=!1){if((!s||s===bu)&&(s=ct),he(s)){const i=Kt(s,n,!0);return t&&or(i,t),Ea>0&&!a&&us&&(i.shapeFlag&6?us[us.indexOf(s)]=i:us.push(i)),i.patchFlag=-2,i}if(id(s)&&(s=s.__vccOpts),n){n=Qu(n);let{class:i,style:l}=n;i&&!qn(i)&&(n.class=Ta(i)),Sn(l)&&(Zo(l)&&!sn(l)&&(l=Wn({},l)),n.style=Wo(l))}const r=qn(s)?1:Wl(s)?128:iu(s)?64:Sn(s)?4:on(s)?2:0;return $(s,n,t,o,e,r,a,!0)}function Qu(s){return s?Zo(s)||Dl(s)?Wn({},s):s:null}function Kt(s,n,t=!1,o=!1){const{props:e,ref:a,patchFlag:r,children:i,transition:l}=s,u=n?Ju(e||{},n):e,p={__v_isVNode:!0,__v_skip:!0,type:s.type,props:u,key:u&&Kl(u),ref:n&&n.ref?t&&a?sn(a)?a.concat(se(n)):[a,se(n)]:se(n):a,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:i,target:s.target,targetStart:s.targetStart,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:n&&s.type!==On?r===-1?16:r|16:r,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:l,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Kt(s.ssContent),ssFallback:s.ssFallback&&Kt(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce};return l&&o&&sr(p,l.clone(p)),p}function zt(s=" ",n=0){return gn(He,null,s,n)}function Oa(s,n){const t=gn(ne,null,s);return t.staticCount=n,t}function Xl(s="",n=!1){return n?(In(),Gl(ct,null,s)):gn(ct,null,s)}function Es(s){return s==null||typeof s=="boolean"?gn(ct):sn(s)?gn(On,null,s.slice()):he(s)?nt(s):gn(He,null,String(s))}function nt(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Kt(s)}function or(s,n){let t=0;const{shapeFlag:o}=s;if(n==null)n=null;else if(sn(n))t=16;else if(typeof n=="object")if(o&65){const e=n.default;e&&(e._c&&(e._d=!1),or(s,e()),e._c&&(e._d=!0));return}else{t=32;const e=n._;!e&&!Dl(n)?n._ctx=cs:e===3&&cs&&(cs.slots._===1?n._=1:(n._=2,s.patchFlag|=1024))}else on(n)?(n={default:n,_ctx:cs},t=32):(n=String(n),o&64?(t=16,n=[zt(n)]):t=8);s.children=n,s.shapeFlag|=t}function Ju(...s){const n={};for(let t=0;t<s.length;t++){const o=s[t];for(const e in o)if(e==="class")n.class!==o.class&&(n.class=Ta([n.class,o.class]));else if(e==="style")n.style=Wo([n.style,o.style]);else if(Pe(e)){const a=n[e],r=o[e];r&&a!==r&&!(sn(a)&&a.includes(r))&&(n[e]=a?[].concat(a,r):r)}else e!==""&&(n[e]=o[e])}return n}function Ms(s,n,t,o=null){Ls(s,n,7,[t,o])}const Zu=Ol();let nd=0;function sd(s,n,t){const o=s.type,e=(n?n.appContext:s.appContext)||Zu,a={uid:nd++,vnode:s,type:o,parent:n,appContext:e,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ac(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(e.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bl(o,e),emitsOptions:Ul(o,e),emit:null,emitted:null,propsDefaults:wn,inheritAttrs:o.inheritAttrs,ctx:wn,data:wn,props:wn,attrs:wn,slots:wn,refs:wn,setupState:wn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=Nu.bind(null,a),s.ce&&s.ce(a),a}let Vn=null,me,wo;{const s=Ee(),n=(t,o)=>{let e;return(e=s[t])||(e=s[t]=[]),e.push(o),a=>{e.length>1?e.forEach(r=>r(a)):e[0](a)}};me=n("__VUE_INSTANCE_SETTERS__",t=>Vn=t),wo=n("__VUE_SSR_SETTERS__",t=>Ia=t)}const Ua=s=>{const n=Vn;return me(s),s.scope.on(),()=>{s.scope.off(),me(n)}},Wr=()=>{Vn&&Vn.scope.off(),me(null)};function Ql(s){return s.vnode.shapeFlag&4}let Ia=!1;function td(s,n=!1,t=!1){n&&wo(n);const{props:o,children:e}=s.vnode,a=Ql(s);Au(s,o,a,n),Iu(s,e,t||n);const r=a?ad(s,n):void 0;return n&&wo(!1),r}function ad(s,n){const t=s.type;s.accessCache=Object.create(null),s.proxy=new Proxy(s.ctx,yu);const{setup:o}=t;if(o){Ys();const e=s.setupContext=o.length>1?od(s):null,a=Ua(s),r=za(o,s,0,[s.props,e]),i=Gi(r);if(Gs(),a(),(i||s.sp)&&!ma(s)&&Cl(s),i){if(r.then(Wr,Wr),n)return r.then(l=>{Yr(s,l)}).catch(l=>{De(l,s,0)});s.asyncDep=r}else Yr(s,r)}else Jl(s)}function Yr(s,n,t){on(n)?s.type.__ssrInlineRender?s.ssrRender=n:s.render=n:Sn(n)&&(s.setupState=vl(n)),Jl(s)}function Jl(s,n,t){const o=s.type;s.render||(s.render=o.render||qs);{const e=Ua(s);Ys();try{wu(s)}finally{Gs(),e()}}}const ed={get(s,n){return jn(s,"get",""),s[n]}};function od(s){const n=t=>{s.exposed=t||{}};return{attrs:new Proxy(s.attrs,ed),slots:s.slots,emit:s.emit,expose:n}}function $e(s){return s.exposed?s.exposeProxy||(s.exposeProxy=new Proxy(vl(Kc(s.exposed)),{get(n,t){if(t in n)return n[t];if(t in va)return va[t](s)},has(n,t){return t in n||t in va}})):s.proxy}function rd(s,n=!0){return on(s)?s.displayName||s.name:s.name||n&&s.__name}function id(s){return on(s)&&"__vccOpts"in s}const Kn=(s,n)=>nu(s,n,Ia);function Zl(s,n,t){const o=arguments.length;return o===2?Sn(n)&&!sn(n)?he(n)?gn(s,null,[n]):gn(s,n):gn(s,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&he(t)&&(t=[t]),gn(s,n,t))}const ld="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _o;const Gr=typeof window<"u"&&window.trustedTypes;if(Gr)try{_o=Gr.createPolicy("vue",{createHTML:s=>s})}catch{}const np=_o?s=>_o.createHTML(s):s=>s,pd="http://www.w3.org/2000/svg",cd="http://www.w3.org/1998/Math/MathML",js=typeof document<"u"?document:null,Kr=js&&js.createElement("template"),ud={insert:(s,n,t)=>{n.insertBefore(s,t||null)},remove:s=>{const n=s.parentNode;n&&n.removeChild(s)},createElement:(s,n,t,o)=>{const e=n==="svg"?js.createElementNS(pd,s):n==="mathml"?js.createElementNS(cd,s):t?js.createElement(s,{is:t}):js.createElement(s);return s==="select"&&o&&o.multiple!=null&&e.setAttribute("multiple",o.multiple),e},createText:s=>js.createTextNode(s),createComment:s=>js.createComment(s),setText:(s,n)=>{s.nodeValue=n},setElementText:(s,n)=>{s.textContent=n},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>js.querySelector(s),setScopeId(s,n){s.setAttribute(n,"")},insertStaticContent(s,n,t,o,e,a){const r=t?t.previousSibling:n.lastChild;if(e&&(e===a||e.nextSibling))for(;n.insertBefore(e.cloneNode(!0),t),!(e===a||!(e=e.nextSibling)););else{Kr.innerHTML=np(o==="svg"?`<svg>${s}</svg>`:o==="mathml"?`<math>${s}</math>`:s);const i=Kr.content;if(o==="svg"||o==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,t)}return[r?r.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},dd=Symbol("_vtc");function fd(s,n,t){const o=s[dd];o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?s.removeAttribute("class"):t?s.setAttribute("class",n):s.className=n}const Xr=Symbol("_vod"),gd=Symbol("_vsh"),kd=Symbol(""),hd=/(^|;)\s*display\s*:/;function md(s,n,t){const o=s.style,e=qn(t);let a=!1;if(t&&!e){if(n)if(qn(n))for(const r of n.split(";")){const i=r.slice(0,r.indexOf(":")).trim();t[i]==null&&te(o,i,"")}else for(const r in n)t[r]==null&&te(o,r,"");for(const r in t)r==="display"&&(a=!0),te(o,r,t[r])}else if(e){if(n!==t){const r=o[kd];r&&(t+=";"+r),o.cssText=t,a=hd.test(t)}}else n&&s.removeAttribute("style");Xr in s&&(s[Xr]=a?o.display:"",s[gd]&&(o.display="none"))}const Qr=/\s*!important$/;function te(s,n,t){if(sn(t))t.forEach(o=>te(s,n,o));else if(t==null&&(t=""),n.startsWith("--"))s.setProperty(n,t);else{const o=vd(s,n);Qr.test(t)?s.setProperty(Mt(o),t.replace(Qr,""),"important"):s[o]=t}}const Jr=["Webkit","Moz","ms"],Ze={};function vd(s,n){const t=Ze[n];if(t)return t;let o=ys(n);if(o!=="filter"&&o in s)return Ze[n]=o;o=Re(o);for(let e=0;e<Jr.length;e++){const a=Jr[e]+o;if(a in s)return Ze[n]=a}return n}const Zr="http://www.w3.org/1999/xlink";function ni(s,n,t,o,e,a=Tc(n)){o&&n.startsWith("xlink:")?t==null?s.removeAttributeNS(Zr,n.slice(6,n.length)):s.setAttributeNS(Zr,n,t):t==null||a&&!Ji(t)?s.removeAttribute(n):s.setAttribute(n,a?"":Ds(t)?String(t):t)}function si(s,n,t,o,e){if(n==="innerHTML"||n==="textContent"){t!=null&&(s[n]=n==="innerHTML"?np(t):t);return}const a=s.tagName;if(n==="value"&&a!=="PROGRESS"&&!a.includes("-")){const i=a==="OPTION"?s.getAttribute("value")||"":s.value,l=t==null?s.type==="checkbox"?"on":"":String(t);(i!==l||!("_value"in s))&&(s.value=l),t==null&&s.removeAttribute(n),s._value=t;return}let r=!1;if(t===""||t==null){const i=typeof s[n];i==="boolean"?t=Ji(t):t==null&&i==="string"?(t="",r=!0):i==="number"&&(t=0,r=!0)}try{s[n]=t}catch{}r&&s.removeAttribute(e||n)}function xt(s,n,t,o){s.addEventListener(n,t,o)}function bd(s,n,t,o){s.removeEventListener(n,t,o)}const ti=Symbol("_vei");function xd(s,n,t,o,e=null){const a=s[ti]||(s[ti]={}),r=a[n];if(o&&r)r.value=o;else{const[i,l]=yd(n);if(o){const u=a[n]=Sd(o,e);xt(s,i,u,l)}else r&&(bd(s,i,r,l),a[n]=void 0)}}const ai=/(?:Once|Passive|Capture)$/;function yd(s){let n;if(ai.test(s)){n={};let o;for(;o=s.match(ai);)s=s.slice(0,s.length-o[0].length),n[o[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):Mt(s.slice(2)),n]}let no=0;const wd=Promise.resolve(),_d=()=>no||(wd.then(()=>no=0),no=Date.now());function Sd(s,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;Ls(Cd(o,t.value),n,5,[o])};return t.value=s,t.attached=_d(),t}function Cd(s,n){if(sn(n)){const t=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{t.call(s),s._stopped=!0},n.map(o=>e=>!e._stopped&&o&&o(e))}else return n}const ei=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&s.charCodeAt(2)>96&&s.charCodeAt(2)<123,Td=(s,n,t,o,e,a)=>{const r=e==="svg";n==="class"?fd(s,o,r):n==="style"?md(s,t,o):Pe(n)?No(n)||xd(s,n,t,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Pd(s,n,o,r))?(si(s,n,o),!s.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&ni(s,n,o,r,a,n!=="value")):s._isVueCE&&(/[A-Z]/.test(n)||!qn(o))?si(s,ys(n),o,a,n):(n==="true-value"?s._trueValue=o:n==="false-value"&&(s._falseValue=o),ni(s,n,o,r))};function Pd(s,n,t,o){if(o)return!!(n==="innerHTML"||n==="textContent"||n in s&&ei(n)&&on(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&s.tagName==="INPUT"||n==="type"&&s.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const e=s.tagName;if(e==="IMG"||e==="VIDEO"||e==="CANVAS"||e==="SOURCE")return!1}return ei(n)&&qn(t)?!1:n in s}const ve=s=>{const n=s.props["onUpdate:modelValue"]||!1;return sn(n)?t=>Ja(n,t):n};function Md(s){s.target.composing=!0}function oi(s){const n=s.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Ut=Symbol("_assign"),so={created(s,{modifiers:{lazy:n,trim:t,number:o}},e){s[Ut]=ve(e);const a=o||e.props&&e.props.type==="number";xt(s,n?"change":"input",r=>{if(r.target.composing)return;let i=s.value;t&&(i=i.trim()),a&&(i=pe(i)),s[Ut](i)}),t&&xt(s,"change",()=>{s.value=s.value.trim()}),n||(xt(s,"compositionstart",Md),xt(s,"compositionend",oi),xt(s,"change",oi))},mounted(s,{value:n}){s.value=n??""},beforeUpdate(s,{value:n,oldValue:t,modifiers:{lazy:o,trim:e,number:a}},r){if(s[Ut]=ve(r),s.composing)return;const i=(a||s.type==="number")&&!/^0\d/.test(s.value)?pe(s.value):s.value,l=n??"";i!==l&&(document.activeElement===s&&s.type!=="range"&&(o&&n===t||e&&s.value.trim()===l)||(s.value=l))}},Ad={deep:!0,created(s,{value:n,modifiers:{number:t}},o){const e=Me(n);xt(s,"change",()=>{const a=Array.prototype.filter.call(s.options,r=>r.selected).map(r=>t?pe(be(r)):be(r));s[Ut](s.multiple?e?new Set(a):a:a[0]),s._assigning=!0,Le(()=>{s._assigning=!1})}),s[Ut]=ve(o)},mounted(s,{value:n}){ri(s,n)},beforeUpdate(s,n,t){s[Ut]=ve(t)},updated(s,{value:n}){s._assigning||ri(s,n)}};function ri(s,n){const t=s.multiple,o=sn(n);if(!(t&&!o&&!Me(n))){for(let e=0,a=s.options.length;e<a;e++){const r=s.options[e],i=be(r);if(t)if(o){const l=typeof i;l==="string"||l==="number"?r.selected=n.some(u=>String(u)===String(i)):r.selected=Mc(n,i)>-1}else r.selected=n.has(i);else if(Oe(be(r),n)){s.selectedIndex!==e&&(s.selectedIndex=e);return}}!t&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function be(s){return"_value"in s?s._value:s.value}const Rd=["ctrl","shift","alt","meta"],Ed={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,n)=>Rd.some(t=>s[`${t}Key`]&&!n.includes(t))},Od=(s,n)=>{const t=s._withMods||(s._withMods={}),o=n.join(".");return t[o]||(t[o]=(e,...a)=>{for(let r=0;r<n.length;r++){const i=Ed[n[r]];if(i&&i(e,n))return}return s(e,...a)})},Id=Wn({patchProp:Td},ud);let ii;function qd(){return ii||(ii=Du(Id))}const Dd=(...s)=>{const n=qd().createApp(...s),{mount:t}=n;return n.mount=o=>{const e=Bd(o);if(!e)return;const a=n._component;!on(a)&&!a.render&&!a.template&&(a.template=e.innerHTML),e.nodeType===1&&(e.textContent="");const r=t(e,!1,Ld(e));return e instanceof Element&&(e.removeAttribute("v-cloak"),e.setAttribute("data-v-app","")),r},n};function Ld(s){if(s instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&s instanceof MathMLElement)return"mathml"}function Bd(s){return qn(s)?document.querySelector(s):s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Lt=typeof document<"u";function sp(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function Fd(s){return s.__esModule||s[Symbol.toStringTag]==="Module"||s.default&&sp(s.default)}const hn=Object.assign;function to(s,n){const t={};for(const o in n){const e=n[o];t[o]=Ss(e)?e.map(s):s(e)}return t}const ya=()=>{},Ss=Array.isArray,tp=/#/g,Hd=/&/g,$d=/\//g,jd=/=/g,Vd=/\?/g,ap=/\+/g,Nd=/%5B/g,zd=/%5D/g,ep=/%5E/g,Ud=/%60/g,op=/%7B/g,Wd=/%7C/g,rp=/%7D/g,Yd=/%20/g;function rr(s){return encodeURI(""+s).replace(Wd,"|").replace(Nd,"[").replace(zd,"]")}function Gd(s){return rr(s).replace(op,"{").replace(rp,"}").replace(ep,"^")}function So(s){return rr(s).replace(ap,"%2B").replace(Yd,"+").replace(tp,"%23").replace(Hd,"%26").replace(Ud,"`").replace(op,"{").replace(rp,"}").replace(ep,"^")}function Kd(s){return So(s).replace(jd,"%3D")}function Xd(s){return rr(s).replace(tp,"%23").replace(Vd,"%3F")}function Qd(s){return s==null?"":Xd(s).replace($d,"%2F")}function qa(s){try{return decodeURIComponent(""+s)}catch{}return""+s}const Jd=/\/$/,Zd=s=>s.replace(Jd,"");function ao(s,n,t="/"){let o,e={},a="",r="";const i=n.indexOf("#");let l=n.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(o=n.slice(0,l),a=n.slice(l+1,i>-1?i:n.length),e=s(a)),i>-1&&(o=o||n.slice(0,i),r=n.slice(i,n.length)),o=af(o??n,t),{fullPath:o+(a&&"?")+a+r,path:o,query:e,hash:qa(r)}}function nf(s,n){const t=n.query?s(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function li(s,n){return!n||!s.toLowerCase().startsWith(n.toLowerCase())?s:s.slice(n.length)||"/"}function sf(s,n,t){const o=n.matched.length-1,e=t.matched.length-1;return o>-1&&o===e&&Xt(n.matched[o],t.matched[e])&&ip(n.params,t.params)&&s(n.query)===s(t.query)&&n.hash===t.hash}function Xt(s,n){return(s.aliasOf||s)===(n.aliasOf||n)}function ip(s,n){if(Object.keys(s).length!==Object.keys(n).length)return!1;for(const t in s)if(!tf(s[t],n[t]))return!1;return!0}function tf(s,n){return Ss(s)?pi(s,n):Ss(n)?pi(n,s):s===n}function pi(s,n){return Ss(n)?s.length===n.length&&s.every((t,o)=>t===n[o]):s.length===1&&s[0]===n}function af(s,n){if(s.startsWith("/"))return s;if(!s)return n;const t=n.split("/"),o=s.split("/"),e=o[o.length-1];(e===".."||e===".")&&o.push("");let a=t.length-1,r,i;for(r=0;r<o.length;r++)if(i=o[r],i!==".")if(i==="..")a>1&&a--;else break;return t.slice(0,a).join("/")+"/"+o.slice(r).join("/")}const Js={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Da;(function(s){s.pop="pop",s.push="push"})(Da||(Da={}));var wa;(function(s){s.back="back",s.forward="forward",s.unknown=""})(wa||(wa={}));function ef(s){if(!s)if(Lt){const n=document.querySelector("base");s=n&&n.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),Zd(s)}const of=/^[^#]+#/;function rf(s,n){return s.replace(of,"#")+n}function lf(s,n){const t=document.documentElement.getBoundingClientRect(),o=s.getBoundingClientRect();return{behavior:n.behavior,left:o.left-t.left-(n.left||0),top:o.top-t.top-(n.top||0)}}const je=()=>({left:window.scrollX,top:window.scrollY});function pf(s){let n;if("el"in s){const t=s.el,o=typeof t=="string"&&t.startsWith("#"),e=typeof t=="string"?o?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!e)return;n=lf(e,s)}else n=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function ci(s,n){return(history.state?history.state.position-n:-1)+s}const Co=new Map;function cf(s,n){Co.set(s,n)}function uf(s){const n=Co.get(s);return Co.delete(s),n}let df=()=>location.protocol+"//"+location.host;function lp(s,n){const{pathname:t,search:o,hash:e}=n,a=s.indexOf("#");if(a>-1){let i=e.includes(s.slice(a))?s.slice(a).length:1,l=e.slice(i);return l[0]!=="/"&&(l="/"+l),li(l,"")}return li(t,s)+o+e}function ff(s,n,t,o){let e=[],a=[],r=null;const i=({state:g})=>{const c=lp(s,location),k=t.value,d=n.value;let h=0;if(g){if(t.value=c,n.value=g,r&&r===k){r=null;return}h=d?g.position-d.position:0}else o(c);e.forEach(v=>{v(t.value,k,{delta:h,type:Da.pop,direction:h?h>0?wa.forward:wa.back:wa.unknown})})};function l(){r=t.value}function u(g){e.push(g);const c=()=>{const k=e.indexOf(g);k>-1&&e.splice(k,1)};return a.push(c),c}function p(){const{history:g}=window;g.state&&g.replaceState(hn({},g.state,{scroll:je()}),"")}function f(){for(const g of a)g();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function ui(s,n,t,o=!1,e=!1){return{back:s,current:n,forward:t,replaced:o,position:window.history.length,scroll:e?je():null}}function gf(s){const{history:n,location:t}=window,o={value:lp(s,t)},e={value:n.state};e.value||a(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function a(l,u,p){const f=s.indexOf("#"),g=f>-1?(t.host&&document.querySelector("base")?s:s.slice(f))+l:df()+s+l;try{n[p?"replaceState":"pushState"](u,"",g),e.value=u}catch(c){console.error(c),t[p?"replace":"assign"](g)}}function r(l,u){const p=hn({},n.state,ui(e.value.back,l,e.value.forward,!0),u,{position:e.value.position});a(l,p,!0),o.value=l}function i(l,u){const p=hn({},e.value,n.state,{forward:l,scroll:je()});a(p.current,p,!0);const f=hn({},ui(o.value,l,null),{position:p.position+1},u);a(l,f,!1),o.value=l}return{location:o,state:e,push:i,replace:r}}function kf(s){s=ef(s);const n=gf(s),t=ff(s,n.state,n.location,n.replace);function o(a,r=!0){r||t.pauseListeners(),history.go(a)}const e=hn({location:"",base:s,go:o,createHref:rf.bind(null,s)},n,t);return Object.defineProperty(e,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(e,"state",{enumerable:!0,get:()=>n.state.value}),e}function hf(s){return s=location.host?s||location.pathname+location.search:"",s.includes("#")||(s+="#"),kf(s)}function mf(s){return typeof s=="string"||s&&typeof s=="object"}function pp(s){return typeof s=="string"||typeof s=="symbol"}const cp=Symbol("");var di;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(di||(di={}));function Qt(s,n){return hn(new Error,{type:s,[cp]:!0},n)}function $s(s,n){return s instanceof Error&&cp in s&&(n==null||!!(s.type&n))}const fi="[^/]+?",vf={sensitive:!1,strict:!1,start:!0,end:!0},bf=/[.+*?^${}()[\]/\\]/g;function xf(s,n){const t=hn({},vf,n),o=[];let e=t.start?"^":"";const a=[];for(const u of s){const p=u.length?[]:[90];t.strict&&!u.length&&(e+="/");for(let f=0;f<u.length;f++){const g=u[f];let c=40+(t.sensitive?.25:0);if(g.type===0)f||(e+="/"),e+=g.value.replace(bf,"\\$&"),c+=40;else if(g.type===1){const{value:k,repeatable:d,optional:h,regexp:v}=g;a.push({name:k,repeatable:d,optional:h});const b=v||fi;if(b!==fi){c+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${k}" (${b}): `+S.message)}}let w=d?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(w=h&&u.length<2?`(?:/${w})`:"/"+w),h&&(w+="?"),e+=w,c+=20,h&&(c+=-8),d&&(c+=-20),b===".*"&&(c+=-50)}p.push(c)}o.push(p)}if(t.strict&&t.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}t.strict||(e+="/?"),t.end?e+="$":t.strict&&!e.endsWith("/")&&(e+="(?:/|$)");const r=new RegExp(e,t.sensitive?"":"i");function i(u){const p=u.match(r),f={};if(!p)return null;for(let g=1;g<p.length;g++){const c=p[g]||"",k=a[g-1];f[k.name]=c&&k.repeatable?c.split("/"):c}return f}function l(u){let p="",f=!1;for(const g of s){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const c of g)if(c.type===0)p+=c.value;else if(c.type===1){const{value:k,repeatable:d,optional:h}=c,v=k in u?u[k]:"";if(Ss(v)&&!d)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const b=Ss(v)?v.join("/"):v;if(!b)if(h)g.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${k}"`);p+=b}}return p||"/"}return{re:r,score:o,keys:a,parse:i,stringify:l}}function yf(s,n){let t=0;for(;t<s.length&&t<n.length;){const o=n[t]-s[t];if(o)return o;t++}return s.length<n.length?s.length===1&&s[0]===80?-1:1:s.length>n.length?n.length===1&&n[0]===80?1:-1:0}function up(s,n){let t=0;const o=s.score,e=n.score;for(;t<o.length&&t<e.length;){const a=yf(o[t],e[t]);if(a)return a;t++}if(Math.abs(e.length-o.length)===1){if(gi(o))return 1;if(gi(e))return-1}return e.length-o.length}function gi(s){const n=s[s.length-1];return s.length>0&&n[n.length-1]<0}const wf={type:0,value:""},_f=/[a-zA-Z0-9_]/;function Sf(s){if(!s)return[[]];if(s==="/")return[[wf]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function n(c){throw new Error(`ERR (${t})/"${u}": ${c}`)}let t=0,o=t;const e=[];let a;function r(){a&&e.push(a),a=[]}let i=0,l,u="",p="";function f(){u&&(t===0?a.push({type:0,value:u}):t===1||t===2||t===3?(a.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:p,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;i<s.length;){if(l=s[i++],l==="\\"&&t!==2){o=t,t=4;continue}switch(t){case 0:l==="/"?(u&&f(),r()):l===":"?(f(),t=1):g();break;case 4:g(),t=o;break;case 1:l==="("?t=2:_f.test(l)?g():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+l:t=3:p+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,p="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),r(),e}function Cf(s,n,t){const o=xf(Sf(s.path),t),e=hn(o,{record:s,parent:n,children:[],alias:[]});return n&&!e.record.aliasOf==!n.record.aliasOf&&n.children.push(e),e}function Tf(s,n){const t=[],o=new Map;n=vi({strict:!1,end:!0,sensitive:!1},n);function e(f){return o.get(f)}function a(f,g,c){const k=!c,d=hi(f);d.aliasOf=c&&c.record;const h=vi(n,f),v=[d];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const m of S)v.push(hi(hn({},d,{components:c?c.record.components:d.components,path:m,aliasOf:c?c.record:d})))}let b,w;for(const S of v){const{path:m}=S;if(g&&m[0]!=="/"){const y=g.record.path,_=y[y.length-1]==="/"?"":"/";S.path=g.record.path+(m&&_+m)}if(b=Cf(S,g,h),c?c.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),k&&f.name&&!mi(b)&&r(f.name)),dp(b)&&l(b),d.children){const y=d.children;for(let _=0;_<y.length;_++)a(y[_],b,c&&c.children[_])}c=c||b}return w?()=>{r(w)}:ya}function r(f){if(pp(f)){const g=o.get(f);g&&(o.delete(f),t.splice(t.indexOf(g),1),g.children.forEach(r),g.alias.forEach(r))}else{const g=t.indexOf(f);g>-1&&(t.splice(g,1),f.record.name&&o.delete(f.record.name),f.children.forEach(r),f.alias.forEach(r))}}function i(){return t}function l(f){const g=Af(f,t);t.splice(g,0,f),f.record.name&&!mi(f)&&o.set(f.record.name,f)}function u(f,g){let c,k={},d,h;if("name"in f&&f.name){if(c=o.get(f.name),!c)throw Qt(1,{location:f});h=c.record.name,k=hn(ki(g.params,c.keys.filter(w=>!w.optional).concat(c.parent?c.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),f.params&&ki(f.params,c.keys.map(w=>w.name))),d=c.stringify(k)}else if(f.path!=null)d=f.path,c=t.find(w=>w.re.test(d)),c&&(k=c.parse(d),h=c.record.name);else{if(c=g.name?o.get(g.name):t.find(w=>w.re.test(g.path)),!c)throw Qt(1,{location:f,currentLocation:g});h=c.record.name,k=hn({},g.params,f.params),d=c.stringify(k)}const v=[];let b=c;for(;b;)v.unshift(b.record),b=b.parent;return{name:h,path:d,params:k,matched:v,meta:Mf(v)}}s.forEach(f=>a(f));function p(){t.length=0,o.clear()}return{addRoute:a,resolve:u,removeRoute:r,clearRoutes:p,getRoutes:i,getRecordMatcher:e}}function ki(s,n){const t={};for(const o of n)o in s&&(t[o]=s[o]);return t}function hi(s){const n={path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:s.aliasOf,beforeEnter:s.beforeEnter,props:Pf(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Pf(s){const n={},t=s.props||!1;if("component"in s)n.default=t;else for(const o in s.components)n[o]=typeof t=="object"?t[o]:t;return n}function mi(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function Mf(s){return s.reduce((n,t)=>hn(n,t.meta),{})}function vi(s,n){const t={};for(const o in s)t[o]=o in n?n[o]:s[o];return t}function Af(s,n){let t=0,o=n.length;for(;t!==o;){const a=t+o>>1;up(s,n[a])<0?o=a:t=a+1}const e=Rf(s);return e&&(o=n.lastIndexOf(e,o-1)),o}function Rf(s){let n=s;for(;n=n.parent;)if(dp(n)&&up(s,n)===0)return n}function dp({record:s}){return!!(s.name||s.components&&Object.keys(s.components).length||s.redirect)}function Ef(s){const n={};if(s===""||s==="?")return n;const o=(s[0]==="?"?s.slice(1):s).split("&");for(let e=0;e<o.length;++e){const a=o[e].replace(ap," "),r=a.indexOf("="),i=qa(r<0?a:a.slice(0,r)),l=r<0?null:qa(a.slice(r+1));if(i in n){let u=n[i];Ss(u)||(u=n[i]=[u]),u.push(l)}else n[i]=l}return n}function bi(s){let n="";for(let t in s){const o=s[t];if(t=Kd(t),o==null){o!==void 0&&(n+=(n.length?"&":"")+t);continue}(Ss(o)?o.map(a=>a&&So(a)):[o&&So(o)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+t,a!=null&&(n+="="+a))})}return n}function Of(s){const n={};for(const t in s){const o=s[t];o!==void 0&&(n[t]=Ss(o)?o.map(e=>e==null?null:""+e):o==null?o:""+o)}return n}const If=Symbol(""),xi=Symbol(""),Ve=Symbol(""),ir=Symbol(""),To=Symbol("");function la(){let s=[];function n(o){return s.push(o),()=>{const e=s.indexOf(o);e>-1&&s.splice(e,1)}}function t(){s=[]}return{add:n,list:()=>s.slice(),reset:t}}function st(s,n,t,o,e,a=r=>r()){const r=o&&(o.enterCallbacks[e]=o.enterCallbacks[e]||[]);return()=>new Promise((i,l)=>{const u=g=>{g===!1?l(Qt(4,{from:t,to:n})):g instanceof Error?l(g):mf(g)?l(Qt(2,{from:n,to:g})):(r&&o.enterCallbacks[e]===r&&typeof g=="function"&&r.push(g),i())},p=a(()=>s.call(o&&o.instances[e],n,t,u));let f=Promise.resolve(p);s.length<3&&(f=f.then(u)),f.catch(g=>l(g))})}function eo(s,n,t,o,e=a=>a()){const a=[];for(const r of s)for(const i in r.components){let l=r.components[i];if(!(n!=="beforeRouteEnter"&&!r.instances[i]))if(sp(l)){const p=(l.__vccOpts||l)[n];p&&a.push(st(p,t,o,r,i,e))}else{let u=l();a.push(()=>u.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${i}" at "${r.path}"`);const f=Fd(p)?p.default:p;r.mods[i]=p,r.components[i]=f;const c=(f.__vccOpts||f)[n];return c&&st(c,t,o,r,i,e)()}))}}return a}function yi(s){const n=_s(Ve),t=_s(ir),o=Kn(()=>{const l=ps(s.to);return n.resolve(l)}),e=Kn(()=>{const{matched:l}=o.value,{length:u}=l,p=l[u-1],f=t.matched;if(!p||!f.length)return-1;const g=f.findIndex(Xt.bind(null,p));if(g>-1)return g;const c=wi(l[u-2]);return u>1&&wi(p)===c&&f[f.length-1].path!==c?f.findIndex(Xt.bind(null,l[u-2])):g}),a=Kn(()=>e.value>-1&&Bf(t.params,o.value.params)),r=Kn(()=>e.value>-1&&e.value===t.matched.length-1&&ip(t.params,o.value.params));function i(l={}){if(Lf(l)){const u=n[ps(s.replace)?"replace":"push"](ps(s.to)).catch(ya);return s.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:o,href:Kn(()=>o.value.href),isActive:a,isExactActive:r,navigate:i}}function qf(s){return s.length===1?s[0]:s}const Df=Sl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yi,setup(s,{slots:n}){const t=qe(yi(s)),{options:o}=_s(Ve),e=Kn(()=>({[_i(s.activeClass,o.linkActiveClass,"router-link-active")]:t.isActive,[_i(s.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const a=n.default&&qf(n.default(t));return s.custom?a:Zl("a",{"aria-current":t.isExactActive?s.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:e.value},a)}}}),ua=Df;function Lf(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const n=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return s.preventDefault&&s.preventDefault(),!0}}function Bf(s,n){for(const t in n){const o=n[t],e=s[t];if(typeof o=="string"){if(o!==e)return!1}else if(!Ss(e)||e.length!==o.length||o.some((a,r)=>a!==e[r]))return!1}return!0}function wi(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const _i=(s,n,t)=>s??n??t,Ff=Sl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:n,slots:t}){const o=_s(To),e=Kn(()=>s.route||o.value),a=_s(xi,0),r=Kn(()=>{let u=ps(a);const{matched:p}=e.value;let f;for(;(f=p[u])&&!f.components;)u++;return u}),i=Kn(()=>e.value.matched[r.value]);Za(xi,Kn(()=>r.value+1)),Za(If,i),Za(To,e);const l=Jn();return ba(()=>[l.value,i.value,s.name],([u,p,f],[g,c,k])=>{p&&(p.instances[f]=u,c&&c!==p&&u&&u===g&&(p.leaveGuards.size||(p.leaveGuards=c.leaveGuards),p.updateGuards.size||(p.updateGuards=c.updateGuards))),u&&p&&(!c||!Xt(p,c)||!g)&&(p.enterCallbacks[f]||[]).forEach(d=>d(u))},{flush:"post"}),()=>{const u=e.value,p=s.name,f=i.value,g=f&&f.components[p];if(!g)return Si(t.default,{Component:g,route:u});const c=f.props[p],k=c?c===!0?u.params:typeof c=="function"?c(u):c:null,h=Zl(g,hn({},k,n,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[p]=null)},ref:l}));return Si(t.default,{Component:h,route:u})||h}}});function Si(s,n){if(!s)return null;const t=s(n);return t.length===1?t[0]:t}const fp=Ff;function Hf(s){const n=Tf(s.routes,s),t=s.parseQuery||Ef,o=s.stringifyQuery||bi,e=s.history,a=la(),r=la(),i=la(),l=Xc(Js);let u=Js;Lt&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=to.bind(null,q=>""+q),f=to.bind(null,Qd),g=to.bind(null,qa);function c(q,V){let z,G;return pp(q)?(z=n.getRecordMatcher(q),G=V):G=q,n.addRoute(G,z)}function k(q){const V=n.getRecordMatcher(q);V&&n.removeRoute(V)}function d(){return n.getRoutes().map(q=>q.record)}function h(q){return!!n.getRecordMatcher(q)}function v(q,V){if(V=hn({},V||l.value),typeof q=="string"){const E=ao(t,q,V.path),D=n.resolve({path:E.path},V),F=e.createHref(E.fullPath);return hn(E,D,{params:g(D.params),hash:qa(E.hash),redirectedFrom:void 0,href:F})}let z;if(q.path!=null)z=hn({},q,{path:ao(t,q.path,V.path).path});else{const E=hn({},q.params);for(const D in E)E[D]==null&&delete E[D];z=hn({},q,{params:f(E)}),V.params=f(V.params)}const G=n.resolve(z,V),an=q.hash||"";G.params=p(g(G.params));const A=nf(o,hn({},q,{hash:Gd(an),path:G.path})),R=e.createHref(A);return hn({fullPath:A,hash:an,query:o===bi?Of(q.query):q.query||{}},G,{redirectedFrom:void 0,href:R})}function b(q){return typeof q=="string"?ao(t,q,l.value.path):hn({},q)}function w(q,V){if(u!==q)return Qt(8,{from:V,to:q})}function S(q){return _(q)}function m(q){return S(hn(b(q),{replace:!0}))}function y(q){const V=q.matched[q.matched.length-1];if(V&&V.redirect){const{redirect:z}=V;let G=typeof z=="function"?z(q):z;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=b(G):{path:G},G.params={}),hn({query:q.query,hash:q.hash,params:G.path!=null?{}:q.params},G)}}function _(q,V){const z=u=v(q),G=l.value,an=q.state,A=q.force,R=q.replace===!0,E=y(z);if(E)return _(hn(b(E),{state:typeof E=="object"?hn({},an,E.state):an,force:A,replace:R}),V||z);const D=z;D.redirectedFrom=V;let F;return!A&&sf(o,G,z)&&(F=Qt(16,{to:D,from:G}),pn(G,G,!0,!1)),(F?Promise.resolve(F):P(D,G)).catch(H=>$s(H)?$s(H,2)?H:rn(H):U(H,D,G)).then(H=>{if(H){if($s(H,2))return _(hn({replace:R},b(H.to),{state:typeof H.to=="object"?hn({},an,H.to.state):an,force:A}),V||D)}else H=T(D,G,!0,R,an);return M(D,G,H),H})}function x(q,V){const z=w(q,V);return z?Promise.reject(z):Promise.resolve()}function C(q){const V=cn.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(q):q()}function P(q,V){let z;const[G,an,A]=$f(q,V);z=eo(G.reverse(),"beforeRouteLeave",q,V);for(const E of G)E.leaveGuards.forEach(D=>{z.push(st(D,q,V))});const R=x.bind(null,q,V);return z.push(R),J(z).then(()=>{z=[];for(const E of a.list())z.push(st(E,q,V));return z.push(R),J(z)}).then(()=>{z=eo(an,"beforeRouteUpdate",q,V);for(const E of an)E.updateGuards.forEach(D=>{z.push(st(D,q,V))});return z.push(R),J(z)}).then(()=>{z=[];for(const E of A)if(E.beforeEnter)if(Ss(E.beforeEnter))for(const D of E.beforeEnter)z.push(st(D,q,V));else z.push(st(E.beforeEnter,q,V));return z.push(R),J(z)}).then(()=>(q.matched.forEach(E=>E.enterCallbacks={}),z=eo(A,"beforeRouteEnter",q,V,C),z.push(R),J(z))).then(()=>{z=[];for(const E of r.list())z.push(st(E,q,V));return z.push(R),J(z)}).catch(E=>$s(E,8)?E:Promise.reject(E))}function M(q,V,z){i.list().forEach(G=>C(()=>G(q,V,z)))}function T(q,V,z,G,an){const A=w(q,V);if(A)return A;const R=V===Js,E=Lt?history.state:{};z&&(G||R?e.replace(q.fullPath,hn({scroll:R&&E&&E.scroll},an)):e.push(q.fullPath,an)),l.value=q,pn(q,V,z,R),rn()}let O;function I(){O||(O=e.listen((q,V,z)=>{if(!dn.listening)return;const G=v(q),an=y(G);if(an){_(hn(an,{replace:!0,force:!0}),G).catch(ya);return}u=G;const A=l.value;Lt&&cf(ci(A.fullPath,z.delta),je()),P(G,A).catch(R=>$s(R,12)?R:$s(R,2)?(_(hn(b(R.to),{force:!0}),G).then(E=>{$s(E,20)&&!z.delta&&z.type===Da.pop&&e.go(-1,!1)}).catch(ya),Promise.reject()):(z.delta&&e.go(-z.delta,!1),U(R,G,A))).then(R=>{R=R||T(G,A,!1),R&&(z.delta&&!$s(R,8)?e.go(-z.delta,!1):z.type===Da.pop&&$s(R,20)&&e.go(-1,!1)),M(G,A,R)}).catch(ya)}))}let L=la(),j=la(),B;function U(q,V,z){rn(q);const G=j.list();return G.length?G.forEach(an=>an(q,V,z)):console.error(q),Promise.reject(q)}function nn(){return B&&l.value!==Js?Promise.resolve():new Promise((q,V)=>{L.add([q,V])})}function rn(q){return B||(B=!q,I(),L.list().forEach(([V,z])=>q?z(q):V()),L.reset()),q}function pn(q,V,z,G){const{scrollBehavior:an}=s;if(!Lt||!an)return Promise.resolve();const A=!z&&uf(ci(q.fullPath,0))||(G||!z)&&history.state&&history.state.scroll||null;return Le().then(()=>an(q,V,A)).then(R=>R&&pf(R)).catch(R=>U(R,q,V))}const en=q=>e.go(q);let un;const cn=new Set,dn={currentRoute:l,listening:!0,addRoute:c,removeRoute:k,clearRoutes:n.clearRoutes,hasRoute:h,getRoutes:d,resolve:v,options:s,push:S,replace:m,go:en,back:()=>en(-1),forward:()=>en(1),beforeEach:a.add,beforeResolve:r.add,afterEach:i.add,onError:j.add,isReady:nn,install(q){const V=this;q.component("RouterLink",ua),q.component("RouterView",fp),q.config.globalProperties.$router=V,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>ps(l)}),Lt&&!un&&l.value===Js&&(un=!0,S(e.location).catch(an=>{}));const z={};for(const an in Js)Object.defineProperty(z,an,{get:()=>l.value[an],enumerable:!0});q.provide(Ve,V),q.provide(ir,kl(z)),q.provide(To,l);const G=q.unmount;cn.add(q),q.unmount=function(){cn.delete(q),cn.size<1&&(u=Js,O&&O(),O=null,l.value=Js,un=!1,B=!1),G()}}};function J(q){return q.reduce((V,z)=>V.then(()=>C(z)),Promise.resolve())}return dn}function $f(s,n){const t=[],o=[],e=[],a=Math.max(n.matched.length,s.matched.length);for(let r=0;r<a;r++){const i=n.matched[r];i&&(s.matched.find(u=>Xt(u,i))?o.push(i):t.push(i));const l=s.matched[r];l&&(n.matched.find(u=>Xt(u,l))||e.push(l))}return[t,o,e]}function gp(){return _s(Ve)}function jf(s){return _s(ir)}const Vf={__name:"App",setup(s){return(n,t)=>(In(),Gl(ps(fp)))}};var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lr(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ae={exports:{}},Nf=ae.exports,Ti;function zf(){return Ti||(Ti=1,function(s,n){(function(t,o){s.exports=o()})(Nf,function(){return function(t){function o(a){if(e[a])return e[a].exports;var r=e[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}var e={};return o.m=t,o.c=e,o.p="dist/",o(0)}([function(t,o,e){function a(I){return I&&I.__esModule?I:{default:I}}var r=Object.assign||function(I){for(var L=1;L<arguments.length;L++){var j=arguments[L];for(var B in j)Object.prototype.hasOwnProperty.call(j,B)&&(I[B]=j[B])}return I},i=e(1),l=(a(i),e(6)),u=a(l),p=e(7),f=a(p),g=e(8),c=a(g),k=e(9),d=a(k),h=e(10),v=a(h),b=e(11),w=a(b),S=e(14),m=a(S),y=[],_=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},C=function(){var I=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(I&&(_=!0),_)return y=(0,w.default)(y,x),(0,v.default)(y,x.once),y},P=function(){y=(0,m.default)(),C()},M=function(){y.forEach(function(I,L){I.node.removeAttribute("data-aos"),I.node.removeAttribute("data-aos-easing"),I.node.removeAttribute("data-aos-duration"),I.node.removeAttribute("data-aos-delay")})},T=function(I){return I===!0||I==="mobile"&&d.default.mobile()||I==="phone"&&d.default.phone()||I==="tablet"&&d.default.tablet()||typeof I=="function"&&I()===!0},O=function(I){x=r(x,I),y=(0,m.default)();var L=document.all&&!window.atob;return T(x.disable)||L?M():(x.disableMutationObserver||c.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),x.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?C(!0):x.startEvent==="load"?window.addEventListener(x.startEvent,function(){C(!0)}):document.addEventListener(x.startEvent,function(){C(!0)}),window.addEventListener("resize",(0,f.default)(C,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(C,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,v.default)(y,x.once)},x.throttleDelay)),x.disableMutationObserver||c.default.ready("[data-aos]",P),y)};t.exports={init:O,refresh:C,refreshHard:P}},function(t,o){},,,,,function(t,o){(function(e){function a(T,O,I){function L(E){var D=cn,F=dn;return cn=dn=void 0,G=E,q=T.apply(F,D)}function j(E){return G=E,V=setTimeout(nn,O),an?L(E):q}function B(E){var D=E-z,F=E-G,H=O-D;return A?P(H,J-F):H}function U(E){var D=E-z,F=E-G;return z===void 0||D>=O||D<0||A&&F>=J}function nn(){var E=M();return U(E)?rn(E):void(V=setTimeout(nn,B(E)))}function rn(E){return V=void 0,R&&cn?L(E):(cn=dn=void 0,q)}function pn(){V!==void 0&&clearTimeout(V),G=0,cn=z=dn=V=void 0}function en(){return V===void 0?q:rn(M())}function un(){var E=M(),D=U(E);if(cn=arguments,dn=this,z=E,D){if(V===void 0)return j(z);if(A)return V=setTimeout(nn,O),L(z)}return V===void 0&&(V=setTimeout(nn,O)),q}var cn,dn,J,q,V,z,G=0,an=!1,A=!1,R=!0;if(typeof T!="function")throw new TypeError(g);return O=p(O)||0,i(I)&&(an=!!I.leading,A="maxWait"in I,J=A?C(p(I.maxWait)||0,O):J,R="trailing"in I?!!I.trailing:R),un.cancel=pn,un.flush=en,un}function r(T,O,I){var L=!0,j=!0;if(typeof T!="function")throw new TypeError(g);return i(I)&&(L="leading"in I?!!I.leading:L,j="trailing"in I?!!I.trailing:j),a(T,O,{leading:L,maxWait:O,trailing:j})}function i(T){var O=typeof T>"u"?"undefined":f(T);return!!T&&(O=="object"||O=="function")}function l(T){return!!T&&(typeof T>"u"?"undefined":f(T))=="object"}function u(T){return(typeof T>"u"?"undefined":f(T))=="symbol"||l(T)&&x.call(T)==k}function p(T){if(typeof T=="number")return T;if(u(T))return c;if(i(T)){var O=typeof T.valueOf=="function"?T.valueOf():T;T=i(O)?O+"":O}if(typeof T!="string")return T===0?T:+T;T=T.replace(d,"");var I=v.test(T);return I||b.test(T)?w(T.slice(2),I?2:8):h.test(T)?c:+T}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},g="Expected a function",c=NaN,k="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,b=/^0o[0-7]+$/i,w=parseInt,S=(typeof e>"u"?"undefined":f(e))=="object"&&e&&e.Object===Object&&e,m=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,y=S||m||Function("return this")(),_=Object.prototype,x=_.toString,C=Math.max,P=Math.min,M=function(){return y.Date.now()};t.exports=r}).call(o,function(){return this}())},function(t,o){(function(e){function a(M,T,O){function I(R){var E=un,D=cn;return un=cn=void 0,z=R,J=M.apply(D,E)}function L(R){return z=R,q=setTimeout(U,T),G?I(R):J}function j(R){var E=R-V,D=R-z,F=T-E;return an?C(F,dn-D):F}function B(R){var E=R-V,D=R-z;return V===void 0||E>=T||E<0||an&&D>=dn}function U(){var R=P();return B(R)?nn(R):void(q=setTimeout(U,j(R)))}function nn(R){return q=void 0,A&&un?I(R):(un=cn=void 0,J)}function rn(){q!==void 0&&clearTimeout(q),z=0,un=V=cn=q=void 0}function pn(){return q===void 0?J:nn(P())}function en(){var R=P(),E=B(R);if(un=arguments,cn=this,V=R,E){if(q===void 0)return L(V);if(an)return q=setTimeout(U,T),I(V)}return q===void 0&&(q=setTimeout(U,T)),J}var un,cn,dn,J,q,V,z=0,G=!1,an=!1,A=!0;if(typeof M!="function")throw new TypeError(f);return T=u(T)||0,r(O)&&(G=!!O.leading,an="maxWait"in O,dn=an?x(u(O.maxWait)||0,T):dn,A="trailing"in O?!!O.trailing:A),en.cancel=rn,en.flush=pn,en}function r(M){var T=typeof M>"u"?"undefined":p(M);return!!M&&(T=="object"||T=="function")}function i(M){return!!M&&(typeof M>"u"?"undefined":p(M))=="object"}function l(M){return(typeof M>"u"?"undefined":p(M))=="symbol"||i(M)&&_.call(M)==c}function u(M){if(typeof M=="number")return M;if(l(M))return g;if(r(M)){var T=typeof M.valueOf=="function"?M.valueOf():M;M=r(T)?T+"":T}if(typeof M!="string")return M===0?M:+M;M=M.replace(k,"");var O=h.test(M);return O||v.test(M)?b(M.slice(2),O?2:8):d.test(M)?g:+M}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},f="Expected a function",g=NaN,c="[object Symbol]",k=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,v=/^0o[0-7]+$/i,b=parseInt,w=(typeof e>"u"?"undefined":p(e))=="object"&&e&&e.Object===Object&&e,S=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,m=w||S||Function("return this")(),y=Object.prototype,_=y.toString,x=Math.max,C=Math.min,P=function(){return m.Date.now()};t.exports=a}).call(o,function(){return this}())},function(t,o){function e(p){var f=void 0,g=void 0;for(f=0;f<p.length;f+=1)if(g=p[f],g.dataset&&g.dataset.aos||g.children&&e(g.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!a()}function i(p,f){var g=window.document,c=a(),k=new c(l);u=f,k.observe(g.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(p){p&&p.forEach(function(f){var g=Array.prototype.slice.call(f.addedNodes),c=Array.prototype.slice.call(f.removedNodes),k=g.concat(c);if(e(k))return u()})}Object.defineProperty(o,"__esModule",{value:!0});var u=function(){};o.default={isSupported:r,ready:i}},function(t,o){function e(g,c){if(!(g instanceof c))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function g(c,k){for(var d=0;d<k.length;d++){var h=k[d];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(c,h.key,h)}}return function(c,k,d){return k&&g(c.prototype,k),d&&g(c,d),c}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function g(){e(this,g)}return r(g,[{key:"phone",value:function(){var c=a();return!(!i.test(c)&&!l.test(c.substr(0,4)))}},{key:"mobile",value:function(){var c=a();return!(!u.test(c)&&!p.test(c.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),g}();o.default=new f},function(t,o){Object.defineProperty(o,"__esModule",{value:!0});var e=function(r,i,l){var u=r.node.getAttribute("data-aos-once");i>r.position?r.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&r.node.classList.remove("aos-animate")},a=function(r,i){var l=window.pageYOffset,u=window.innerHeight;r.forEach(function(p,f){e(p,u+l,i)})};o.default=a},function(t,o,e){function a(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(o,"__esModule",{value:!0});var r=e(12),i=a(r),l=function(u,p){return u.forEach(function(f,g){f.node.classList.add("aos-init"),f.position=(0,i.default)(f.node,p.offset)}),u};o.default=l},function(t,o,e){function a(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(o,"__esModule",{value:!0});var r=e(13),i=a(r),l=function(u,p){var f=0,g=0,c=window.innerHeight,k={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(k.offset&&!isNaN(k.offset)&&(g=parseInt(k.offset)),k.anchor&&document.querySelectorAll(k.anchor)&&(u=document.querySelectorAll(k.anchor)[0]),f=(0,i.default)(u).top,k.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=u.offsetHeight/2;break;case"bottom-bottom":f+=u.offsetHeight;break;case"top-center":f+=c/2;break;case"bottom-center":f+=c/2+u.offsetHeight;break;case"center-center":f+=c/2+u.offsetHeight/2;break;case"top-top":f+=c;break;case"bottom-top":f+=u.offsetHeight+c;break;case"center-top":f+=u.offsetHeight/2+c}return k.anchorPlacement||k.offset||isNaN(p)||(g=p),f+g};o.default=l},function(t,o){Object.defineProperty(o,"__esModule",{value:!0});var e=function(a){for(var r=0,i=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)r+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),i+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:i,left:r}};o.default=e},function(t,o){Object.defineProperty(o,"__esModule",{value:!0});var e=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(r){return{node:r}})};o.default=e}])})}(ae)),ae.exports}var Uf=zf();const At=lr(Uf);function Vs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function kp(s,n){s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fs={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jt={duration:.5,overwrite:!1,delay:0},pr,$n,Cn,ms=1e8,yn=1/ms,Po=Math.PI*2,Wf=Po/4,Yf=0,hp=Math.sqrt,Gf=Math.cos,Kf=Math.sin,Fn=function(n){return typeof n=="string"},Mn=function(n){return typeof n=="function"},Ks=function(n){return typeof n=="number"},cr=function(n){return typeof n>"u"},Fs=function(n){return typeof n=="object"},Zn=function(n){return n!==!1},ur=function(){return typeof window<"u"},Qa=function(n){return Mn(n)||Fn(n)},mp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Un=Array.isArray,Mo=/(?:-?\.?\d|\.)+/gi,vp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,oo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bp=/[+-]=-?[.\d]+/,xp=/[^,'"\[\]\s]+/gi,Xf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tn,Rs,Ao,dr,gs={},xe={},yp,wp=function(n){return(xe=Zt(n,gs))&&as},fr=function(n,t){return console.warn("Invalid property",n,"set to",t,"Missing plugin? gsap.registerPlugin()")},La=function(n,t){return!t&&console.warn(n)},_p=function(n,t){return n&&(gs[n]=t)&&xe&&(xe[n]=t)||gs},Ba=function(){return 0},Qf={suppressEvents:!0,isStart:!0,kill:!1},ee={suppressEvents:!0,kill:!1},Jf={suppressEvents:!0},gr={},it=[],Ro={},Sp,rs={},ro={},Pi=30,oe=[],kr="",hr=function(n){var t=n[0],o,e;if(Fs(t)||Mn(t)||(n=[n]),!(o=(t._gsap||{}).harness)){for(e=oe.length;e--&&!oe[e].targetTest(t););o=oe[e]}for(e=n.length;e--;)n[e]&&(n[e]._gsap||(n[e]._gsap=new Gp(n[e],o)))||n.splice(e,1);return n},_t=function(n){return n._gsap||hr(vs(n))[0]._gsap},Cp=function(n,t,o){return(o=n[t])&&Mn(o)?n[t]():cr(o)&&n.getAttribute&&n.getAttribute(t)||o},ns=function(n,t){return(n=n.split(",")).forEach(t)||n},An=function(n){return Math.round(n*1e5)/1e5||0},En=function(n){return Math.round(n*1e7)/1e7||0},Wt=function(n,t){var o=t.charAt(0),e=parseFloat(t.substr(2));return n=parseFloat(n),o==="+"?n+e:o==="-"?n-e:o==="*"?n*e:n/e},Zf=function(n,t){for(var o=t.length,e=0;n.indexOf(t[e])<0&&++e<o;);return e<o},ye=function(){var n=it.length,t=it.slice(0),o,e;for(Ro={},it.length=0,o=0;o<n;o++)e=t[o],e&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},mr=function(n){return!!(n._initted||n._startAt||n.add)},Tp=function(n,t,o,e){it.length&&!$n&&ye(),n.render(t,o,!!($n&&t<0&&mr(n))),it.length&&!$n&&ye()},Pp=function(n){var t=parseFloat(n);return(t||t===0)&&(n+"").match(xp).length<2?t:Fn(n)?n.trim():n},Mp=function(n){return n},ks=function(n,t){for(var o in t)o in n||(n[o]=t[o]);return n},ng=function(n){return function(t,o){for(var e in o)e in t||e==="duration"&&n||e==="ease"||(t[e]=o[e])}},Zt=function(n,t){for(var o in t)n[o]=t[o];return n},Mi=function s(n,t){for(var o in t)o!=="__proto__"&&o!=="constructor"&&o!=="prototype"&&(n[o]=Fs(t[o])?s(n[o]||(n[o]={}),t[o]):t[o]);return n},we=function(n,t){var o={},e;for(e in n)e in t||(o[e]=n[e]);return o},_a=function(n){var t=n.parent||Tn,o=n.keyframes?ng(Un(n.keyframes)):ks;if(Zn(n.inherit))for(;t;)o(n,t.vars.defaults),t=t.parent||t._dp;return n},sg=function(n,t){for(var o=n.length,e=o===t.length;e&&o--&&n[o]===t[o];);return o<0},Ap=function(n,t,o,e,a){var r=n[e],i;if(a)for(i=t[a];r&&r[a]>i;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=n[o],n[o]=t),t._next?t._next._prev=t:n[e]=t,t._prev=r,t.parent=t._dp=n,t},Ne=function(n,t,o,e){o===void 0&&(o="_first"),e===void 0&&(e="_last");var a=t._prev,r=t._next;a?a._next=r:n[o]===t&&(n[o]=r),r?r._prev=a:n[e]===t&&(n[e]=a),t._next=t._prev=t.parent=null},ut=function(n,t){n.parent&&(!t||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},St=function(n,t){if(n&&(!t||t._end>n._dur||t._start<0))for(var o=n;o;)o._dirty=1,o=o.parent;return n},tg=function(n){for(var t=n.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return n},Eo=function(n,t,o,e){return n._startAt&&($n?n._startAt.revert(ee):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(t,!0,e))},ag=function s(n){return!n||n._ts&&s(n.parent)},Ai=function(n){return n._repeat?na(n._tTime,n=n.duration()+n._rDelay)*n:0},na=function(n,t){var o=Math.floor(n=En(n/t));return n&&o===n?o-1:o},_e=function(n,t){return(n-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ze=function(n){return n._end=En(n._start+(n._tDur/Math.abs(n._ts||n._rts||yn)||0))},Ue=function(n,t){var o=n._dp;return o&&o.smoothChildTiming&&n._ts&&(n._start=En(o._time-(n._ts>0?t/n._ts:((n._dirty?n.totalDuration():n._tDur)-t)/-n._ts)),ze(n),o._dirty||St(o,n)),n},Rp=function(n,t){var o;if((t._time||!t._dur&&t._initted||t._start<n._time&&(t._dur||!t.add))&&(o=_e(n.rawTime(),t),(!t._dur||Wa(0,t.totalDuration(),o)-t._tTime>yn)&&t.render(o,!0)),St(n,t)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(o=n;o._dp;)o.rawTime()>=0&&o.totalTime(o._tTime),o=o._dp;n._zTime=-yn}},Os=function(n,t,o,e){return t.parent&&ut(t),t._start=En((Ks(o)?o:o||n!==Tn?hs(n,o,t):n._time)+t._delay),t._end=En(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ap(n,t,"_first","_last",n._sort?"_start":0),Oo(t)||(n._recent=t),e||Rp(n,t),n._ts<0&&Ue(n,n._tTime),n},Ep=function(n,t){return(gs.ScrollTrigger||fr("scrollTrigger",t))&&gs.ScrollTrigger.create(t,n)},Op=function(n,t,o,e,a){if(br(n,t,a),!n._initted)return 1;if(!o&&n._pt&&!$n&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&Sp!==is.frame)return it.push(n),n._lazy=[a,e],1},eg=function s(n){var t=n.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Oo=function(n){var t=n.data;return t==="isFromStart"||t==="isStart"},og=function(n,t,o,e){var a=n.ratio,r=t<0||!t&&(!n._start&&eg(n)&&!(!n._initted&&Oo(n))||(n._ts<0||n._dp._ts<0)&&!Oo(n))?0:1,i=n._rDelay,l=0,u,p,f;if(i&&n._repeat&&(l=Wa(0,n._tDur,t),p=na(l,i),n._yoyo&&p&1&&(r=1-r),p!==na(n._tTime,i)&&(a=1-r,n.vars.repeatRefresh&&n._initted&&n.invalidate())),r!==a||$n||e||n._zTime===yn||!t&&n._zTime){if(!n._initted&&Op(n,t,e,o,l))return;for(f=n._zTime,n._zTime=t||(o?yn:0),o||(o=t&&!f),n.ratio=r,n._from&&(r=1-r),n._time=0,n._tTime=l,u=n._pt;u;)u.r(r,u.d),u=u._next;t<0&&Eo(n,t,o,!0),n._onUpdate&&!o&&ds(n,"onUpdate"),l&&n._repeat&&!o&&n.parent&&ds(n,"onRepeat"),(t>=n._tDur||t<0)&&n.ratio===r&&(r&&ut(n,1),!o&&!$n&&(ds(n,r?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=t)},rg=function(n,t,o){var e;if(o>t)for(e=n._first;e&&e._start<=o;){if(e.data==="isPause"&&e._start>t)return e;e=e._next}else for(e=n._last;e&&e._start>=o;){if(e.data==="isPause"&&e._start<t)return e;e=e._prev}},sa=function(n,t,o,e){var a=n._repeat,r=En(t)||0,i=n._tTime/n._tDur;return i&&!e&&(n._time*=r/n._dur),n._dur=r,n._tDur=a?a<0?1e10:En(r*(a+1)+n._rDelay*a):r,i>0&&!e&&Ue(n,n._tTime=n._tDur*i),n.parent&&ze(n),o||St(n.parent,n),n},Ri=function(n){return n instanceof Xn?St(n):sa(n,n._dur)},ig={_start:0,endTime:Ba,totalDuration:Ba},hs=function s(n,t,o){var e=n.labels,a=n._recent||ig,r=n.duration()>=ms?a.endTime(!1):n._dur,i,l,u;return Fn(t)&&(isNaN(t)||t in e)?(l=t.charAt(0),u=t.substr(-1)==="%",i=t.indexOf("="),l==="<"||l===">"?(i>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(i<0?a:o).totalDuration()/100:1)):i<0?(t in e||(e[t]=r),e[t]):(l=parseFloat(t.charAt(i-1)+t.substr(i+1)),u&&o&&(l=l/100*(Un(o)?o[0]:o).totalDuration()),i>1?s(n,t.substr(0,i-1),o)+l:r+l)):t==null?r:+t},Sa=function(n,t,o){var e=Ks(t[1]),a=(e?2:1)+(n<2?0:1),r=t[a],i,l;if(e&&(r.duration=t[1]),r.parent=o,n){for(i=r,l=o;l&&!("immediateRender"in i);)i=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;r.immediateRender=Zn(i.immediateRender),n<2?r.runBackwards=1:r.startAt=t[a-1]}return new Rn(t[0],r,t[a+1])},ft=function(n,t){return n||n===0?t(n):t},Wa=function(n,t,o){return o<n?n:o>t?t:o},Nn=function(n,t){return!Fn(n)||!(t=Xf.exec(n))?"":t[1]},lg=function(n,t,o){return ft(o,function(e){return Wa(n,t,e)})},Io=[].slice,Ip=function(n,t){return n&&Fs(n)&&"length"in n&&(!t&&!n.length||n.length-1 in n&&Fs(n[0]))&&!n.nodeType&&n!==Rs},pg=function(n,t,o){return o===void 0&&(o=[]),n.forEach(function(e){var a;return Fn(e)&&!t||Ip(e,1)?(a=o).push.apply(a,vs(e)):o.push(e)})||o},vs=function(n,t,o){return Cn&&!t&&Cn.selector?Cn.selector(n):Fn(n)&&!o&&(Ao||!ta())?Io.call((t||dr).querySelectorAll(n),0):Un(n)?pg(n,o):Ip(n)?Io.call(n,0):n?[n]:[]},qo=function(n){return n=vs(n)[0]||La("Invalid scope")||{},function(t){var o=n.current||n.nativeElement||n;return vs(t,o.querySelectorAll?o:o===n?La("Invalid scope")||dr.createElement("div"):n)}},qp=function(n){return n.sort(function(){return .5-Math.random()})},Dp=function(n){if(Mn(n))return n;var t=Fs(n)?n:{each:n},o=Ct(t.ease),e=t.from||0,a=parseFloat(t.base)||0,r={},i=e>0&&e<1,l=isNaN(e)||i,u=t.axis,p=e,f=e;return Fn(e)?p=f={center:.5,edges:.5,end:1}[e]||0:!i&&l&&(p=e[0],f=e[1]),function(g,c,k){var d=(k||t).length,h=r[d],v,b,w,S,m,y,_,x,C;if(!h){if(C=t.grid==="auto"?0:(t.grid||[1,ms])[1],!C){for(_=-ms;_<(_=k[C++].getBoundingClientRect().left)&&C<d;);C<d&&C--}for(h=r[d]=[],v=l?Math.min(C,d)*p-.5:e%C,b=C===ms?0:l?d*f/C-.5:e/C|0,_=0,x=ms,y=0;y<d;y++)w=y%C-v,S=b-(y/C|0),h[y]=m=u?Math.abs(u==="y"?S:w):hp(w*w+S*S),m>_&&(_=m),m<x&&(x=m);e==="random"&&qp(h),h.max=_-x,h.min=x,h.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(C>d?d-1:u?u==="y"?d/C:C:Math.max(C,d/C))||0)*(e==="edges"?-1:1),h.b=d<0?a-d:a,h.u=Nn(t.amount||t.each)||0,o=o&&d<0?Up(o):o}return d=(h[g]-h.min)/h.max||0,En(h.b+(o?o(d):d)*h.v)+h.u}},Do=function(n){var t=Math.pow(10,((n+"").split(".")[1]||"").length);return function(o){var e=En(Math.round(parseFloat(o)/n)*n*t);return(e-e%1)/t+(Ks(o)?0:Nn(o))}},Lp=function(n,t){var o=Un(n),e,a;return!o&&Fs(n)&&(e=o=n.radius||ms,n.values?(n=vs(n.values),(a=!Ks(n[0]))&&(e*=e)):n=Do(n.increment)),ft(t,o?Mn(n)?function(r){return a=n(r),Math.abs(a-r)<=e?a:r}:function(r){for(var i=parseFloat(a?r.x:r),l=parseFloat(a?r.y:0),u=ms,p=0,f=n.length,g,c;f--;)a?(g=n[f].x-i,c=n[f].y-l,g=g*g+c*c):g=Math.abs(n[f]-i),g<u&&(u=g,p=f);return p=!e||u<=e?n[p]:r,a||p===r||Ks(r)?p:p+Nn(r)}:Do(n))},Bp=function(n,t,o,e){return ft(Un(n)?!t:o===!0?!!(o=0):!e,function(){return Un(n)?n[~~(Math.random()*n.length)]:(o=o||1e-5)&&(e=o<1?Math.pow(10,(o+"").length-2):1)&&Math.floor(Math.round((n-o/2+Math.random()*(t-n+o*.99))/o)*o*e)/e})},cg=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return function(e){return t.reduce(function(a,r){return r(a)},e)}},ug=function(n,t){return function(o){return n(parseFloat(o))+(t||Nn(o))}},dg=function(n,t,o){return Hp(n,t,0,1,o)},Fp=function(n,t,o){return ft(o,function(e){return n[~~t(e)]})},fg=function s(n,t,o){var e=t-n;return Un(n)?Fp(n,s(0,n.length),t):ft(o,function(a){return(e+(a-n)%e)%e+n})},gg=function s(n,t,o){var e=t-n,a=e*2;return Un(n)?Fp(n,s(0,n.length-1),t):ft(o,function(r){return r=(a+(r-n)%a)%a||0,n+(r>e?a-r:r)})},Fa=function(n){for(var t=0,o="",e,a,r,i;~(e=n.indexOf("random(",t));)r=n.indexOf(")",e),i=n.charAt(e+7)==="[",a=n.substr(e+7,r-e-7).match(i?xp:Mo),o+=n.substr(t,e-t)+Bp(i?a:+a[0],i?0:+a[1],+a[2]||1e-5),t=r+1;return o+n.substr(t,n.length-t)},Hp=function(n,t,o,e,a){var r=t-n,i=e-o;return ft(a,function(l){return o+((l-n)/r*i||0)})},kg=function s(n,t,o,e){var a=isNaN(n+t)?0:function(c){return(1-c)*n+c*t};if(!a){var r=Fn(n),i={},l,u,p,f,g;if(o===!0&&(e=1)&&(o=null),r)n={p:n},t={p:t};else if(Un(n)&&!Un(t)){for(p=[],f=n.length,g=f-2,u=1;u<f;u++)p.push(s(n[u-1],n[u]));f--,a=function(k){k*=f;var d=Math.min(g,~~k);return p[d](k-d)},o=t}else e||(n=Zt(Un(n)?[]:{},n));if(!p){for(l in t)vr.call(i,n,l,"get",t[l]);a=function(k){return wr(k,i)||(r?n.p:n)}}}return ft(o,a)},Ei=function(n,t,o){var e=n.labels,a=ms,r,i,l;for(r in e)i=e[r]-t,i<0==!!o&&i&&a>(i=Math.abs(i))&&(l=r,a=i);return l},ds=function(n,t,o){var e=n.vars,a=e[t],r=Cn,i=n._ctx,l,u,p;if(a)return l=e[t+"Params"],u=e.callbackScope||n,o&&it.length&&ye(),i&&(Cn=i),p=l?a.apply(u,l):a.call(u),Cn=r,p},da=function(n){return ut(n),n.scrollTrigger&&n.scrollTrigger.kill(!!$n),n.progress()<1&&ds(n,"onInterrupt"),n},Ft,$p=[],jp=function(n){if(n)if(n=!n.name&&n.default||n,ur()||n.headless){var t=n.name,o=Mn(n),e=t&&!o&&n.init?function(){this._props=[]}:n,a={init:Ba,render:wr,add:vr,kill:Eg,modifier:Rg,rawVars:0},r={targetTest:0,get:0,getSetter:yr,aliases:{},register:0};if(ta(),n!==e){if(rs[t])return;ks(e,ks(we(n,a),r)),Zt(e.prototype,Zt(a,we(n,r))),rs[e.prop=t]=e,n.targetTest&&(oe.push(e),gr[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_p(t,e),n.register&&n.register(as,e,ss)}else $p.push(n)},xn=255,fa={aqua:[0,xn,xn],lime:[0,xn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xn],navy:[0,0,128],white:[xn,xn,xn],olive:[128,128,0],yellow:[xn,xn,0],orange:[xn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xn,0,0],pink:[xn,192,203],cyan:[0,xn,xn],transparent:[xn,xn,xn,0]},io=function(n,t,o){return n+=n<0?1:n>1?-1:0,(n*6<1?t+(o-t)*n*6:n<.5?o:n*3<2?t+(o-t)*(2/3-n)*6:t)*xn+.5|0},Vp=function(n,t,o){var e=n?Ks(n)?[n>>16,n>>8&xn,n&xn]:0:fa.black,a,r,i,l,u,p,f,g,c,k;if(!e){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),fa[n])e=fa[n];else if(n.charAt(0)==="#"){if(n.length<6&&(a=n.charAt(1),r=n.charAt(2),i=n.charAt(3),n="#"+a+a+r+r+i+i+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return e=parseInt(n.substr(1,6),16),[e>>16,e>>8&xn,e&xn,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),e=[n>>16,n>>8&xn,n&xn]}else if(n.substr(0,3)==="hsl"){if(e=k=n.match(Mo),!t)l=+e[0]%360/360,u=+e[1]/100,p=+e[2]/100,r=p<=.5?p*(u+1):p+u-p*u,a=p*2-r,e.length>3&&(e[3]*=1),e[0]=io(l+1/3,a,r),e[1]=io(l,a,r),e[2]=io(l-1/3,a,r);else if(~n.indexOf("="))return e=n.match(vp),o&&e.length<4&&(e[3]=1),e}else e=n.match(Mo)||fa.transparent;e=e.map(Number)}return t&&!k&&(a=e[0]/xn,r=e[1]/xn,i=e[2]/xn,f=Math.max(a,r,i),g=Math.min(a,r,i),p=(f+g)/2,f===g?l=u=0:(c=f-g,u=p>.5?c/(2-f-g):c/(f+g),l=f===a?(r-i)/c+(r<i?6:0):f===r?(i-a)/c+2:(a-r)/c+4,l*=60),e[0]=~~(l+.5),e[1]=~~(u*100+.5),e[2]=~~(p*100+.5)),o&&e.length<4&&(e[3]=1),e},Np=function(n){var t=[],o=[],e=-1;return n.split(lt).forEach(function(a){var r=a.match(Bt)||[];t.push.apply(t,r),o.push(e+=r.length+1)}),t.c=o,t},Oi=function(n,t,o){var e="",a=(n+e).match(lt),r=t?"hsla(":"rgba(",i=0,l,u,p,f;if(!a)return n;if(a=a.map(function(g){return(g=Vp(g,t,1))&&r+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),o&&(p=Np(n),l=o.c,l.join(e)!==p.c.join(e)))for(u=n.replace(lt,"1").split(Bt),f=u.length-1;i<f;i++)e+=u[i]+(~l.indexOf(i)?a.shift()||r+"0,0,0,0)":(p.length?p:a.length?a:o).shift());if(!u)for(u=n.split(lt),f=u.length-1;i<f;i++)e+=u[i]+a[i];return e+u[f]},lt=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in fa)s+="|"+n+"\\b";return new RegExp(s+")","gi")}(),hg=/hsl[a]?\(/,zp=function(n){var t=n.join(" "),o;if(lt.lastIndex=0,lt.test(t))return o=hg.test(t),n[1]=Oi(n[1],o),n[0]=Oi(n[0],o,Np(n[1])),!0},Ha,is=function(){var s=Date.now,n=500,t=33,o=s(),e=o,a=1e3/240,r=a,i=[],l,u,p,f,g,c,k=function d(h){var v=s()-e,b=h===!0,w,S,m,y;if((v>n||v<0)&&(o+=v-t),e+=v,m=e-o,w=m-r,(w>0||b)&&(y=++f.frame,g=m-f.time*1e3,f.time=m=m/1e3,r+=w+(w>=a?4:a-w),S=1),b||(l=u(d)),S)for(c=0;c<i.length;c++)i[c](m,g,y,h)};return f={time:0,frame:0,tick:function(){k(!0)},deltaRatio:function(h){return g/(1e3/(h||60))},wake:function(){yp&&(!Ao&&ur()&&(Rs=Ao=window,dr=Rs.document||{},gs.gsap=as,(Rs.gsapVersions||(Rs.gsapVersions=[])).push(as.version),wp(xe||Rs.GreenSockGlobals||!Rs.gsap&&Rs||{}),$p.forEach(jp)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=p||function(h){return setTimeout(h,r-f.time*1e3+1|0)},Ha=1,k(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(l),Ha=0,u=Ba},lagSmoothing:function(h,v){n=h||1/0,t=Math.min(v||33,n)},fps:function(h){a=1e3/(h||240),r=f.time*1e3+a},add:function(h,v,b){var w=v?function(S,m,y,_){h(S,m,y,_),f.remove(w)}:h;return f.remove(h),i[b?"unshift":"push"](w),ta(),w},remove:function(h,v){~(v=i.indexOf(h))&&i.splice(v,1)&&c>=v&&c--},_listeners:i},f}(),ta=function(){return!Ha&&is.wake()},fn={},mg=/^[\d.\-M][\d.\-,\s]/,vg=/["']/g,bg=function(n){for(var t={},o=n.substr(1,n.length-3).split(":"),e=o[0],a=1,r=o.length,i,l,u;a<r;a++)l=o[a],i=a!==r-1?l.lastIndexOf(","):l.length,u=l.substr(0,i),t[e]=isNaN(u)?u.replace(vg,"").trim():+u,e=l.substr(i+1).trim();return t},xg=function(n){var t=n.indexOf("(")+1,o=n.indexOf(")"),e=n.indexOf("(",t);return n.substring(t,~e&&e<o?n.indexOf(")",o+1):o)},yg=function(n){var t=(n+"").split("("),o=fn[t[0]];return o&&t.length>1&&o.config?o.config.apply(null,~n.indexOf("{")?[bg(t[1])]:xg(n).split(",").map(Pp)):fn._CE&&mg.test(n)?fn._CE("",n):o},Up=function(n){return function(t){return 1-n(1-t)}},Wp=function s(n,t){for(var o=n._first,e;o;)o instanceof Xn?s(o,t):o.vars.yoyoEase&&(!o._yoyo||!o._repeat)&&o._yoyo!==t&&(o.timeline?s(o.timeline,t):(e=o._ease,o._ease=o._yEase,o._yEase=e,o._yoyo=t)),o=o._next},Ct=function(n,t){return n&&(Mn(n)?n:fn[n]||yg(n))||t},Rt=function(n,t,o,e){o===void 0&&(o=function(l){return 1-t(1-l)}),e===void 0&&(e=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var a={easeIn:t,easeOut:o,easeInOut:e},r;return ns(n,function(i){fn[i]=gs[i]=a,fn[r=i.toLowerCase()]=o;for(var l in a)fn[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=fn[i+"."+l]=a[l]}),a},Yp=function(n){return function(t){return t<.5?(1-n(1-t*2))/2:.5+n((t-.5)*2)/2}},lo=function s(n,t,o){var e=t>=1?t:1,a=(o||(n?.3:.45))/(t<1?t:1),r=a/Po*(Math.asin(1/e)||0),i=function(p){return p===1?1:e*Math.pow(2,-10*p)*Kf((p-r)*a)+1},l=n==="out"?i:n==="in"?function(u){return 1-i(1-u)}:Yp(i);return a=Po/a,l.config=function(u,p){return s(n,u,p)},l},po=function s(n,t){t===void 0&&(t=1.70158);var o=function(r){return r?--r*r*((t+1)*r+t)+1:0},e=n==="out"?o:n==="in"?function(a){return 1-o(1-a)}:Yp(o);return e.config=function(a){return s(n,a)},e};ns("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,n){var t=n<5?n+1:n;Rt(s+",Power"+(t-1),n?function(o){return Math.pow(o,t)}:function(o){return o},function(o){return 1-Math.pow(1-o,t)},function(o){return o<.5?Math.pow(o*2,t)/2:1-Math.pow((1-o)*2,t)/2})});fn.Linear.easeNone=fn.none=fn.Linear.easeIn;Rt("Elastic",lo("in"),lo("out"),lo());(function(s,n){var t=1/n,o=2*t,e=2.5*t,a=function(i){return i<t?s*i*i:i<o?s*Math.pow(i-1.5/n,2)+.75:i<e?s*(i-=2.25/n)*i+.9375:s*Math.pow(i-2.625/n,2)+.984375};Rt("Bounce",function(r){return 1-a(1-r)},a)})(7.5625,2.75);Rt("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Rt("Circ",function(s){return-(hp(1-s*s)-1)});Rt("Sine",function(s){return s===1?1:-Gf(s*Wf)+1});Rt("Back",po("in"),po("out"),po());fn.SteppedEase=fn.steps=gs.SteppedEase={config:function(n,t){n===void 0&&(n=1);var o=1/n,e=n+(t?0:1),a=t?1:0,r=1-yn;return function(i){return((e*Wa(0,r,i)|0)+a)*o}}};Jt.ease=fn["quad.out"];ns("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return kr+=s+","+s+"Params,"});var Gp=function(n,t){this.id=Yf++,n._gsap=this,this.target=n,this.harness=t,this.get=t?t.get:Cp,this.set=t?t.getSetter:yr},$a=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,sa(this,+t.duration,1,1),this.data=t.data,Cn&&(this._ctx=Cn,Cn.data.push(this)),Ha||is.wake()}var n=s.prototype;return n.delay=function(o){return o||o===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+o-this._delay),this._delay=o,this):this._delay},n.duration=function(o){return arguments.length?this.totalDuration(this._repeat>0?o+(o+this._rDelay)*this._repeat:o):this.totalDuration()&&this._dur},n.totalDuration=function(o){return arguments.length?(this._dirty=0,sa(this,this._repeat<0?o:(o-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(o,e){if(ta(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Ue(this,o),!a._dp||a.parent||Rp(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&o<this._tDur||this._ts<0&&o>0||!this._tDur&&!o)&&Os(this._dp,this,this._start-this._delay)}return(this._tTime!==o||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===yn||!o&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=o),Tp(this,o,e)),this},n.time=function(o,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),o+Ai(this))%(this._dur+this._rDelay)||(o?this._dur:0),e):this._time},n.totalProgress=function(o,e){return arguments.length?this.totalTime(this.totalDuration()*o,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(o,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-o:o)+Ai(this),e):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(o,e){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(o-1)*a,e):this._repeat?na(this._tTime,a)+1:1},n.timeScale=function(o,e){if(!arguments.length)return this._rts===-yn?0:this._rts;if(this._rts===o)return this;var a=this.parent&&this._ts?_e(this.parent._time,this):this._tTime;return this._rts=+o||0,this._ts=this._ps||o===-yn?0:this._rts,this.totalTime(Wa(-Math.abs(this._delay),this.totalDuration(),a),e!==!1),ze(this),tg(this)},n.paused=function(o){return arguments.length?(this._ps!==o&&(this._ps=o,o?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ta(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yn&&(this._tTime-=yn)))),this):this._ps},n.startTime=function(o){if(arguments.length){this._start=o;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&Os(e,this,o-this._delay),this}return this._start},n.endTime=function(o){return this._start+(Zn(o)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(o){var e=this.parent||this._dp;return e?o&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_e(e.rawTime(o),this):this._tTime:this._tTime},n.revert=function(o){o===void 0&&(o=Jf);var e=$n;return $n=o,mr(this)&&(this.timeline&&this.timeline.revert(o),this.totalTime(-.01,o.suppressEvents)),this.data!=="nested"&&o.kill!==!1&&this.kill(),$n=e,this},n.globalTime=function(o){for(var e=this,a=arguments.length?o:e.rawTime();e;)a=e._start+a/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(o):a},n.repeat=function(o){return arguments.length?(this._repeat=o===1/0?-2:o,Ri(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(o){if(arguments.length){var e=this._time;return this._rDelay=o,Ri(this),e?this.time(e):this}return this._rDelay},n.yoyo=function(o){return arguments.length?(this._yoyo=o,this):this._yoyo},n.seek=function(o,e){return this.totalTime(hs(this,o),Zn(e))},n.restart=function(o,e){return this.play().totalTime(o?-this._delay:0,Zn(e)),this._dur||(this._zTime=-yn),this},n.play=function(o,e){return o!=null&&this.seek(o,e),this.reversed(!1).paused(!1)},n.reverse=function(o,e){return o!=null&&this.seek(o||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.pause=function(o,e){return o!=null&&this.seek(o,e),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(o){return arguments.length?(!!o!==this.reversed()&&this.timeScale(-this._rts||(o?-yn:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-yn,this},n.isActive=function(){var o=this.parent||this._dp,e=this._start,a;return!!(!o||this._ts&&this._initted&&o.isActive()&&(a=o.rawTime(!0))>=e&&a<this.endTime(!0)-yn)},n.eventCallback=function(o,e,a){var r=this.vars;return arguments.length>1?(e?(r[o]=e,a&&(r[o+"Params"]=a),o==="onUpdate"&&(this._onUpdate=e)):delete r[o],this):r[o]},n.then=function(o){var e=this;return new Promise(function(a){var r=Mn(o)?o:Mp,i=function(){var u=e.then;e.then=null,Mn(r)&&(r=r(e))&&(r.then||r===e)&&(e.then=u),a(r),e.then=u};e._initted&&e.totalProgress()===1&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i})},n.kill=function(){da(this)},s}();ks($a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yn,_prom:0,_ps:!1,_rts:1});var Xn=function(s){kp(n,s);function n(o,e){var a;return o===void 0&&(o={}),a=s.call(this,o)||this,a.labels={},a.smoothChildTiming=!!o.smoothChildTiming,a.autoRemoveChildren=!!o.autoRemoveChildren,a._sort=Zn(o.sortChildren),Tn&&Os(o.parent||Tn,Vs(a),e),o.reversed&&a.reverse(),o.paused&&a.paused(!0),o.scrollTrigger&&Ep(Vs(a),o.scrollTrigger),a}var t=n.prototype;return t.to=function(e,a,r){return Sa(0,arguments,this),this},t.from=function(e,a,r){return Sa(1,arguments,this),this},t.fromTo=function(e,a,r,i){return Sa(2,arguments,this),this},t.set=function(e,a,r){return a.duration=0,a.parent=this,_a(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Rn(e,a,hs(this,r),1),this},t.call=function(e,a,r){return Os(this,Rn.delayedCall(0,e,a),r)},t.staggerTo=function(e,a,r,i,l,u,p){return r.duration=a,r.stagger=r.stagger||i,r.onComplete=u,r.onCompleteParams=p,r.parent=this,new Rn(e,r,hs(this,l)),this},t.staggerFrom=function(e,a,r,i,l,u,p){return r.runBackwards=1,_a(r).immediateRender=Zn(r.immediateRender),this.staggerTo(e,a,r,i,l,u,p)},t.staggerFromTo=function(e,a,r,i,l,u,p,f){return i.startAt=r,_a(i).immediateRender=Zn(i.immediateRender),this.staggerTo(e,a,i,l,u,p,f)},t.render=function(e,a,r){var i=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,p=e<=0?0:En(e),f=this._zTime<0!=e<0&&(this._initted||!u),g,c,k,d,h,v,b,w,S,m,y,_;if(this!==Tn&&p>l&&e>=0&&(p=l),p!==this._tTime||r||f){if(i!==this._time&&u&&(p+=this._time-i,e+=this._time-i),g=p,S=this._start,w=this._ts,v=!w,f&&(u||(i=this._zTime),(e||!a)&&(this._zTime=e)),this._repeat){if(y=this._yoyo,h=u+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(h*100+e,a,r);if(g=En(p%h),p===l?(d=this._repeat,g=u):(m=En(p/h),d=~~m,d&&d===m&&(g=u,d--),g>u&&(g=u)),m=na(this._tTime,h),!i&&this._tTime&&m!==d&&this._tTime-m*h-this._dur<=0&&(m=d),y&&d&1&&(g=u-g,_=1),d!==m&&!this._lock){var x=y&&m&1,C=x===(y&&d&1);if(d<m&&(x=!x),i=x?0:p%u?u:p,this._lock=1,this.render(i||(_?0:En(d*h)),a,!u)._lock=0,this._tTime=p,!a&&this.parent&&ds(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1),i&&i!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,C&&(this._lock=2,i=x?u:-1e-4,this.render(i,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Wp(this,_)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=rg(this,En(i),En(g)),b&&(p-=g-(g=b._start))),this._tTime=p,this._time=g,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,i=0),!i&&p&&!a&&!m&&(ds(this,"onStart"),this._tTime!==p))return this;if(g>=i&&e>=0)for(c=this._first;c;){if(k=c._next,(c._act||g>=c._start)&&c._ts&&b!==c){if(c.parent!==this)return this.render(e,a,r);if(c.render(c._ts>0?(g-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(g-c._start)*c._ts,a,r),g!==this._time||!this._ts&&!v){b=0,k&&(p+=this._zTime=-yn);break}}c=k}else{c=this._last;for(var P=e<0?e:g;c;){if(k=c._prev,(c._act||P<=c._end)&&c._ts&&b!==c){if(c.parent!==this)return this.render(e,a,r);if(c.render(c._ts>0?(P-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(P-c._start)*c._ts,a,r||$n&&mr(c)),g!==this._time||!this._ts&&!v){b=0,k&&(p+=this._zTime=P?-yn:yn);break}}c=k}}if(b&&!a&&(this.pause(),b.render(g>=i?0:-yn)._zTime=g>=i?1:-1,this._ts))return this._start=S,ze(this),this.render(e,a,r);this._onUpdate&&!a&&ds(this,"onUpdate",!0),(p===l&&this._tTime>=this.totalDuration()||!p&&i)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((e||!u)&&(p===l&&this._ts>0||!p&&this._ts<0)&&ut(this,1),!a&&!(e<0&&!i)&&(p||i||!l)&&(ds(this,p===l&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(e,a){var r=this;if(Ks(a)||(a=hs(this,a,e)),!(e instanceof $a)){if(Un(e))return e.forEach(function(i){return r.add(i,a)}),this;if(Fn(e))return this.addLabel(e,a);if(Mn(e))e=Rn.delayedCall(0,e);else return this}return this!==e?Os(this,e,a):this},t.getChildren=function(e,a,r,i){e===void 0&&(e=!0),a===void 0&&(a=!0),r===void 0&&(r=!0),i===void 0&&(i=-ms);for(var l=[],u=this._first;u;)u._start>=i&&(u instanceof Rn?a&&l.push(u):(r&&l.push(u),e&&l.push.apply(l,u.getChildren(!0,a,r)))),u=u._next;return l},t.getById=function(e){for(var a=this.getChildren(1,1,1),r=a.length;r--;)if(a[r].vars.id===e)return a[r]},t.remove=function(e){return Fn(e)?this.removeLabel(e):Mn(e)?this.killTweensOf(e):(e.parent===this&&Ne(this,e),e===this._recent&&(this._recent=this._last),St(this))},t.totalTime=function(e,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=En(is.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),s.prototype.totalTime.call(this,e,a),this._forcing=0,this):this._tTime},t.addLabel=function(e,a){return this.labels[e]=hs(this,a),this},t.removeLabel=function(e){return delete this.labels[e],this},t.addPause=function(e,a,r){var i=Rn.delayedCall(0,a||Ba,r);return i.data="isPause",this._hasPause=1,Os(this,i,hs(this,e))},t.removePause=function(e){var a=this._first;for(e=hs(this,e);a;)a._start===e&&a.data==="isPause"&&ut(a),a=a._next},t.killTweensOf=function(e,a,r){for(var i=this.getTweensOf(e,r),l=i.length;l--;)at!==i[l]&&i[l].kill(e,a);return this},t.getTweensOf=function(e,a){for(var r=[],i=vs(e),l=this._first,u=Ks(a),p;l;)l instanceof Rn?Zf(l._targets,i)&&(u?(!at||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&r.push(l):(p=l.getTweensOf(i,a)).length&&r.push.apply(r,p),l=l._next;return r},t.tweenTo=function(e,a){a=a||{};var r=this,i=hs(r,e),l=a,u=l.startAt,p=l.onStart,f=l.onStartParams,g=l.immediateRender,c,k=Rn.to(r,ks({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:a.duration||Math.abs((i-(u&&"time"in u?u.time:r._time))/r.timeScale())||yn,onStart:function(){if(r.pause(),!c){var h=a.duration||Math.abs((i-(u&&"time"in u?u.time:r._time))/r.timeScale());k._dur!==h&&sa(k,h,0,1).render(k._time,!0,!0),c=1}p&&p.apply(k,f||[])}},a));return g?k.render(0):k},t.tweenFromTo=function(e,a,r){return this.tweenTo(a,ks({startAt:{time:hs(this,e)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(e){return e===void 0&&(e=this._time),Ei(this,hs(this,e))},t.previousLabel=function(e){return e===void 0&&(e=this._time),Ei(this,hs(this,e),1)},t.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+yn)},t.shiftChildren=function(e,a,r){r===void 0&&(r=0);for(var i=this._first,l=this.labels,u;i;)i._start>=r&&(i._start+=e,i._end+=e),i=i._next;if(a)for(u in l)l[u]>=r&&(l[u]+=e);return St(this)},t.invalidate=function(e){var a=this._first;for(this._lock=0;a;)a.invalidate(e),a=a._next;return s.prototype.invalidate.call(this,e)},t.clear=function(e){e===void 0&&(e=!0);for(var a=this._first,r;a;)r=a._next,this.remove(a),a=r;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),St(this)},t.totalDuration=function(e){var a=0,r=this,i=r._last,l=ms,u,p,f;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-e:e));if(r._dirty){for(f=r.parent;i;)u=i._prev,i._dirty&&i.totalDuration(),p=i._start,p>l&&r._sort&&i._ts&&!r._lock?(r._lock=1,Os(r,i,p-i._delay,1)._lock=0):l=p,p<0&&i._ts&&(a-=p,(!f&&!r._dp||f&&f.smoothChildTiming)&&(r._start+=p/r._ts,r._time-=p,r._tTime-=p),r.shiftChildren(-p,!1,-1/0),l=0),i._end>a&&i._ts&&(a=i._end),i=u;sa(r,r===Tn&&r._time>a?r._time:a,1,1),r._dirty=0}return r._tDur},n.updateRoot=function(e){if(Tn._ts&&(Tp(Tn,_e(e,Tn)),Sp=is.frame),is.frame>=Pi){Pi+=fs.autoSleep||120;var a=Tn._first;if((!a||!a._ts)&&fs.autoSleep&&is._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||is.sleep()}}},n}($a);ks(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var wg=function(n,t,o,e,a,r,i){var l=new ss(this._pt,n,t,0,1,nc,null,a),u=0,p=0,f,g,c,k,d,h,v,b;for(l.b=o,l.e=e,o+="",e+="",(v=~e.indexOf("random("))&&(e=Fa(e)),r&&(b=[o,e],r(b,n,t),o=b[0],e=b[1]),g=o.match(oo)||[];f=oo.exec(e);)k=f[0],d=e.substring(u,f.index),c?c=(c+1)%5:d.substr(-5)==="rgba("&&(c=1),k!==g[p++]&&(h=parseFloat(g[p-1])||0,l._pt={_next:l._pt,p:d||p===1?d:",",s:h,c:k.charAt(1)==="="?Wt(h,k)-h:parseFloat(k)-h,m:c&&c<4?Math.round:0},u=oo.lastIndex);return l.c=u<e.length?e.substring(u,e.length):"",l.fp=i,(bp.test(e)||v)&&(l.e=0),this._pt=l,l},vr=function(n,t,o,e,a,r,i,l,u,p){Mn(e)&&(e=e(a||0,n,r));var f=n[t],g=o!=="get"?o:Mn(f)?u?n[t.indexOf("set")||!Mn(n["get"+t.substr(3)])?t:"get"+t.substr(3)](u):n[t]():f,c=Mn(f)?u?Pg:Jp:xr,k;if(Fn(e)&&(~e.indexOf("random(")&&(e=Fa(e)),e.charAt(1)==="="&&(k=Wt(g,e)+(Nn(g)||0),(k||k===0)&&(e=k))),!p||g!==e||Lo)return!isNaN(g*e)&&e!==""?(k=new ss(this._pt,n,t,+g||0,e-(g||0),typeof f=="boolean"?Ag:Zp,0,c),u&&(k.fp=u),i&&k.modifier(i,this,n),this._pt=k):(!f&&!(t in n)&&fr(t,e),wg.call(this,n,t,g,e,c,l||fs.stringFilter,u))},_g=function(n,t,o,e,a){if(Mn(n)&&(n=Ca(n,a,t,o,e)),!Fs(n)||n.style&&n.nodeType||Un(n)||mp(n))return Fn(n)?Ca(n,a,t,o,e):n;var r={},i;for(i in n)r[i]=Ca(n[i],a,t,o,e);return r},Kp=function(n,t,o,e,a,r){var i,l,u,p;if(rs[n]&&(i=new rs[n]).init(a,i.rawVars?t[n]:_g(t[n],e,a,r,o),o,e,r)!==!1&&(o._pt=l=new ss(o._pt,a,n,0,1,i.render,i,0,i.priority),o!==Ft))for(u=o._ptLookup[o._targets.indexOf(a)],p=i._props.length;p--;)u[i._props[p]]=l;return i},at,Lo,br=function s(n,t,o){var e=n.vars,a=e.ease,r=e.startAt,i=e.immediateRender,l=e.lazy,u=e.onUpdate,p=e.runBackwards,f=e.yoyoEase,g=e.keyframes,c=e.autoRevert,k=n._dur,d=n._startAt,h=n._targets,v=n.parent,b=v&&v.data==="nested"?v.vars.targets:h,w=n._overwrite==="auto"&&!pr,S=n.timeline,m,y,_,x,C,P,M,T,O,I,L,j,B;if(S&&(!g||!a)&&(a="none"),n._ease=Ct(a,Jt.ease),n._yEase=f?Up(Ct(f===!0?a:f,Jt.ease)):0,f&&n._yoyo&&!n._repeat&&(f=n._yEase,n._yEase=n._ease,n._ease=f),n._from=!S&&!!e.runBackwards,!S||g&&!e.stagger){if(T=h[0]?_t(h[0]).harness:0,j=T&&e[T.prop],m=we(e,gr),d&&(d._zTime<0&&d.progress(1),t<0&&p&&i&&!c?d.render(-1,!0):d.revert(p&&k?ee:Qf),d._lazy=0),r){if(ut(n._startAt=Rn.set(h,ks({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&Zn(l),startAt:null,delay:0,onUpdate:u&&function(){return ds(n,"onUpdate")},stagger:0},r))),n._startAt._dp=0,n._startAt._sat=n,t<0&&($n||!i&&!c)&&n._startAt.revert(ee),i&&k&&t<=0&&o<=0){t&&(n._zTime=t);return}}else if(p&&k&&!d){if(t&&(i=!1),_=ks({overwrite:!1,data:"isFromStart",lazy:i&&!d&&Zn(l),immediateRender:i,stagger:0,parent:v},m),j&&(_[T.prop]=j),ut(n._startAt=Rn.set(h,_)),n._startAt._dp=0,n._startAt._sat=n,t<0&&($n?n._startAt.revert(ee):n._startAt.render(-1,!0)),n._zTime=t,!i)s(n._startAt,yn,yn);else if(!t)return}for(n._pt=n._ptCache=0,l=k&&Zn(l)||l&&!k,y=0;y<h.length;y++){if(C=h[y],M=C._gsap||hr(h)[y]._gsap,n._ptLookup[y]=I={},Ro[M.id]&&it.length&&ye(),L=b===h?y:b.indexOf(C),T&&(O=new T).init(C,j||m,n,L,b)!==!1&&(n._pt=x=new ss(n._pt,C,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(U){I[U]=x}),O.priority&&(P=1)),!T||j)for(_ in m)rs[_]&&(O=Kp(_,m,n,L,C,b))?O.priority&&(P=1):I[_]=x=vr.call(n,C,_,"get",m[_],L,b,0,e.stringFilter);n._op&&n._op[y]&&n.kill(C,n._op[y]),w&&n._pt&&(at=n,Tn.killTweensOf(C,I,n.globalTime(t)),B=!n.parent,at=0),n._pt&&l&&(Ro[M.id]=1)}P&&sc(n),n._onInit&&n._onInit(n)}n._onUpdate=u,n._initted=(!n._op||n._pt)&&!B,g&&t<=0&&S.render(ms,!0,!0)},Sg=function(n,t,o,e,a,r,i,l){var u=(n._pt&&n._ptCache||(n._ptCache={}))[t],p,f,g,c;if(!u)for(u=n._ptCache[t]=[],g=n._ptLookup,c=n._targets.length;c--;){if(p=g[c][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Lo=1,n.vars[t]="+=0",br(n,i),Lo=0,l?La(t+" not eligible for reset"):1;u.push(p)}for(c=u.length;c--;)f=u[c],p=f._pt||f,p.s=(e||e===0)&&!a?e:p.s+(e||0)+r*p.c,p.c=o-p.s,f.e&&(f.e=An(o)+Nn(f.e)),f.b&&(f.b=p.s+Nn(f.b))},Cg=function(n,t){var o=n[0]?_t(n[0]).harness:0,e=o&&o.aliases,a,r,i,l;if(!e)return t;a=Zt({},t);for(r in e)if(r in a)for(l=e[r].split(","),i=l.length;i--;)a[l[i]]=a[r];return a},Tg=function(n,t,o,e){var a=t.ease||e||"power1.inOut",r,i;if(Un(t))i=o[n]||(o[n]=[]),t.forEach(function(l,u){return i.push({t:u/(t.length-1)*100,v:l,e:a})});else for(r in t)i=o[r]||(o[r]=[]),r==="ease"||i.push({t:parseFloat(n),v:t[r],e:a})},Ca=function(n,t,o,e,a){return Mn(n)?n.call(t,o,e,a):Fn(n)&&~n.indexOf("random(")?Fa(n):n},Xp=kr+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qp={};ns(Xp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Qp[s]=1});var Rn=function(s){kp(n,s);function n(o,e,a,r){var i;typeof e=="number"&&(a.duration=e,e=a,a=null),i=s.call(this,r?e:_a(e))||this;var l=i.vars,u=l.duration,p=l.delay,f=l.immediateRender,g=l.stagger,c=l.overwrite,k=l.keyframes,d=l.defaults,h=l.scrollTrigger,v=l.yoyoEase,b=e.parent||Tn,w=(Un(o)||mp(o)?Ks(o[0]):"length"in e)?[o]:vs(o),S,m,y,_,x,C,P,M;if(i._targets=w.length?hr(w):La("GSAP target "+o+" not found. https://gsap.com",!fs.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=c,k||g||Qa(u)||Qa(p)){if(e=i.vars,S=i.timeline=new Xn({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:w}),S.kill(),S.parent=S._dp=Vs(i),S._start=0,g||Qa(u)||Qa(p)){if(_=w.length,P=g&&Dp(g),Fs(g))for(x in g)~Xp.indexOf(x)&&(M||(M={}),M[x]=g[x]);for(m=0;m<_;m++)y=we(e,Qp),y.stagger=0,v&&(y.yoyoEase=v),M&&Zt(y,M),C=w[m],y.duration=+Ca(u,Vs(i),m,C,w),y.delay=(+Ca(p,Vs(i),m,C,w)||0)-i._delay,!g&&_===1&&y.delay&&(i._delay=p=y.delay,i._start+=p,y.delay=0),S.to(C,y,P?P(m,C,w):0),S._ease=fn.none;S.duration()?u=p=0:i.timeline=0}else if(k){_a(ks(S.vars.defaults,{ease:"none"})),S._ease=Ct(k.ease||e.ease||"none");var T=0,O,I,L;if(Un(k))k.forEach(function(j){return S.to(w,j,">")}),S.duration();else{y={};for(x in k)x==="ease"||x==="easeEach"||Tg(x,k[x],y,k.easeEach);for(x in y)for(O=y[x].sort(function(j,B){return j.t-B.t}),T=0,m=0;m<O.length;m++)I=O[m],L={ease:I.e,duration:(I.t-(m?O[m-1].t:0))/100*u},L[x]=I.v,S.to(w,L,T),T+=L.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||i.duration(u=S.duration())}else i.timeline=0;return c===!0&&!pr&&(at=Vs(i),Tn.killTweensOf(w),at=0),Os(b,Vs(i),a),e.reversed&&i.reverse(),e.paused&&i.paused(!0),(f||!u&&!k&&i._start===En(b._time)&&Zn(f)&&ag(Vs(i))&&b.data!=="nested")&&(i._tTime=-yn,i.render(Math.max(0,-p)||0)),h&&Ep(Vs(i),h),i}var t=n.prototype;return t.render=function(e,a,r){var i=this._time,l=this._tDur,u=this._dur,p=e<0,f=e>l-yn&&!p?l:e<yn?0:e,g,c,k,d,h,v,b,w,S;if(!u)og(this,e,a,r);else if(f!==this._tTime||!e||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=f,w=this.timeline,this._repeat){if(d=u+this._rDelay,this._repeat<-1&&p)return this.totalTime(d*100+e,a,r);if(g=En(f%d),f===l?(k=this._repeat,g=u):(h=En(f/d),k=~~h,k&&k===h?(g=u,k--):g>u&&(g=u)),v=this._yoyo&&k&1,v&&(S=this._yEase,g=u-g),h=na(this._tTime,d),g===i&&!r&&this._initted&&k===h)return this._tTime=f,this;k!==h&&(w&&this._yEase&&Wp(w,v),this.vars.repeatRefresh&&!v&&!this._lock&&g!==d&&this._initted&&(this._lock=r=1,this.render(En(d*k),!0).invalidate()._lock=0))}if(!this._initted){if(Op(this,p?e:g,r,a,f))return this._tTime=0,this;if(i!==this._time&&!(r&&this.vars.repeatRefresh&&k!==h))return this;if(u!==this._dur)return this.render(e,a,r)}if(this._tTime=f,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(S||this._ease)(g/u),this._from&&(this.ratio=b=1-b),!i&&f&&!a&&!h&&(ds(this,"onStart"),this._tTime!==f))return this;for(c=this._pt;c;)c.r(b,c.d),c=c._next;w&&w.render(e<0?e:w._dur*w._ease(g/this._dur),a,r)||this._startAt&&(this._zTime=e),this._onUpdate&&!a&&(p&&Eo(this,e,a,r),ds(this,"onUpdate")),this._repeat&&k!==h&&this.vars.onRepeat&&!a&&this.parent&&ds(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(p&&!this._onUpdate&&Eo(this,e,!0,!0),(e||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ut(this,1),!a&&!(p&&!i)&&(f||i||v)&&(ds(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),s.prototype.invalidate.call(this,e)},t.resetTo=function(e,a,r,i,l){Ha||is.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||br(this,u),p=this._ease(u/this._dur),Sg(this,e,a,r,i,p,u,l)?this.resetTo(e,a,r,i,1):(Ue(this,0),this.parent||Ap(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(e,a){if(a===void 0&&(a="all"),!e&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$n),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(e,a,at&&at.vars.overwrite!==!0)._first||da(this),this.parent&&r!==this.timeline.totalDuration()&&sa(this,this._dur*this.timeline._tDur/r,0,1),this}var i=this._targets,l=e?vs(e):i,u=this._ptLookup,p=this._pt,f,g,c,k,d,h,v;if((!a||a==="all")&&sg(i,l))return a==="all"&&(this._pt=0),da(this);for(f=this._op=this._op||[],a!=="all"&&(Fn(a)&&(d={},ns(a,function(b){return d[b]=1}),a=d),a=Cg(i,a)),v=i.length;v--;)if(~l.indexOf(i[v])){g=u[v],a==="all"?(f[v]=a,k=g,c={}):(c=f[v]=f[v]||{},k=a);for(d in k)h=g&&g[d],h&&((!("kill"in h.d)||h.d.kill(d)===!0)&&Ne(this,h,"_pt"),delete g[d]),c!=="all"&&(c[d]=1)}return this._initted&&!this._pt&&p&&da(this),this},n.to=function(e,a){return new n(e,a,arguments[2])},n.from=function(e,a){return Sa(1,arguments)},n.delayedCall=function(e,a,r,i){return new n(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:a,onReverseComplete:a,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},n.fromTo=function(e,a,r){return Sa(2,arguments)},n.set=function(e,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new n(e,a)},n.killTweensOf=function(e,a,r){return Tn.killTweensOf(e,a,r)},n}($a);ks(Rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ns("staggerTo,staggerFrom,staggerFromTo",function(s){Rn[s]=function(){var n=new Xn,t=Io.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),n[s].apply(n,t)}});var xr=function(n,t,o){return n[t]=o},Jp=function(n,t,o){return n[t](o)},Pg=function(n,t,o,e){return n[t](e.fp,o)},Mg=function(n,t,o){return n.setAttribute(t,o)},yr=function(n,t){return Mn(n[t])?Jp:cr(n[t])&&n.setAttribute?Mg:xr},Zp=function(n,t){return t.set(t.t,t.p,Math.round((t.s+t.c*n)*1e6)/1e6,t)},Ag=function(n,t){return t.set(t.t,t.p,!!(t.s+t.c*n),t)},nc=function(n,t){var o=t._pt,e="";if(!n&&t.b)e=t.b;else if(n===1&&t.e)e=t.e;else{for(;o;)e=o.p+(o.m?o.m(o.s+o.c*n):Math.round((o.s+o.c*n)*1e4)/1e4)+e,o=o._next;e+=t.c}t.set(t.t,t.p,e,t)},wr=function(n,t){for(var o=t._pt;o;)o.r(n,o.d),o=o._next},Rg=function(n,t,o,e){for(var a=this._pt,r;a;)r=a._next,a.p===e&&a.modifier(n,t,o),a=r},Eg=function(n){for(var t=this._pt,o,e;t;)e=t._next,t.p===n&&!t.op||t.op===n?Ne(this,t,"_pt"):t.dep||(o=1),t=e;return!o},Og=function(n,t,o,e){e.mSet(n,t,e.m.call(e.tween,o,e.mt),e)},sc=function(n){for(var t=n._pt,o,e,a,r;t;){for(o=t._next,e=a;e&&e.pr>t.pr;)e=e._next;(t._prev=e?e._prev:r)?t._prev._next=t:a=t,(t._next=e)?e._prev=t:r=t,t=o}n._pt=a},ss=function(){function s(t,o,e,a,r,i,l,u,p){this.t=o,this.s=a,this.c=r,this.p=e,this.r=i||Zp,this.d=l||this,this.set=u||xr,this.pr=p||0,this._next=t,t&&(t._prev=this)}var n=s.prototype;return n.modifier=function(o,e,a){this.mSet=this.mSet||this.set,this.set=Og,this.m=o,this.mt=a,this.tween=e},s}();ns(kr+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return gr[s]=1});gs.TweenMax=gs.TweenLite=Rn;gs.TimelineLite=gs.TimelineMax=Xn;Tn=new Xn({sortChildren:!1,defaults:Jt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fs.stringFilter=zp;var Tt=[],re={},Ig=[],Ii=0,qg=0,co=function(n){return(re[n]||Ig).map(function(t){return t()})},Bo=function(){var n=Date.now(),t=[];n-Ii>2&&(co("matchMediaInit"),Tt.forEach(function(o){var e=o.queries,a=o.conditions,r,i,l,u;for(i in e)r=Rs.matchMedia(e[i]).matches,r&&(l=1),r!==a[i]&&(a[i]=r,u=1);u&&(o.revert(),l&&t.push(o))}),co("matchMediaRevert"),t.forEach(function(o){return o.onMatch(o,function(e){return o.add(null,e)})}),Ii=n,co("matchMedia"))},tc=function(){function s(t,o){this.selector=o&&qo(o),this.data=[],this._r=[],this.isReverted=!1,this.id=qg++,t&&this.add(t)}var n=s.prototype;return n.add=function(o,e,a){Mn(o)&&(a=e,e=o,o=Mn);var r=this,i=function(){var u=Cn,p=r.selector,f;return u&&u!==r&&u.data.push(r),a&&(r.selector=qo(a)),Cn=r,f=e.apply(r,arguments),Mn(f)&&r._r.push(f),Cn=u,r.selector=p,r.isReverted=!1,f};return r.last=i,o===Mn?i(r,function(l){return r.add(null,l)}):o?r[o]=i:i},n.ignore=function(o){var e=Cn;Cn=null,o(this),Cn=e},n.getTweens=function(){var o=[];return this.data.forEach(function(e){return e instanceof s?o.push.apply(o,e.getTweens()):e instanceof Rn&&!(e.parent&&e.parent.data==="nested")&&o.push(e)}),o},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(o,e){var a=this;if(o?function(){for(var i=a.getTweens(),l=a.data.length,u;l--;)u=a.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(p){return i.splice(i.indexOf(p),1)}));for(i.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,f){return f.g-p.g||-1/0}).forEach(function(p){return p.t.revert(o)}),l=a.data.length;l--;)u=a.data[l],u instanceof Xn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Rn)&&u.revert&&u.revert(o);a._r.forEach(function(p){return p(o,a)}),a.isReverted=!0}():this.data.forEach(function(i){return i.kill&&i.kill()}),this.clear(),e)for(var r=Tt.length;r--;)Tt[r].id===this.id&&Tt.splice(r,1)},n.revert=function(o){this.kill(o||{})},s}(),Dg=function(){function s(t){this.contexts=[],this.scope=t,Cn&&Cn.data.push(this)}var n=s.prototype;return n.add=function(o,e,a){Fs(o)||(o={matches:o});var r=new tc(0,a||this.scope),i=r.conditions={},l,u,p;Cn&&!r.selector&&(r.selector=Cn.selector),this.contexts.push(r),e=r.add("onMatch",e),r.queries=o;for(u in o)u==="all"?p=1:(l=Rs.matchMedia(o[u]),l&&(Tt.indexOf(r)<0&&Tt.push(r),(i[u]=l.matches)&&(p=1),l.addListener?l.addListener(Bo):l.addEventListener("change",Bo)));return p&&e(r,function(f){return r.add(null,f)}),this},n.revert=function(o){this.kill(o||{})},n.kill=function(o){this.contexts.forEach(function(e){return e.kill(o,!0)})},s}(),Se={registerPlugin:function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];t.forEach(function(e){return jp(e)})},timeline:function(n){return new Xn(n)},getTweensOf:function(n,t){return Tn.getTweensOf(n,t)},getProperty:function(n,t,o,e){Fn(n)&&(n=vs(n)[0]);var a=_t(n||{}).get,r=o?Mp:Pp;return o==="native"&&(o=""),n&&(t?r((rs[t]&&rs[t].get||a)(n,t,o,e)):function(i,l,u){return r((rs[i]&&rs[i].get||a)(n,i,l,u))})},quickSetter:function(n,t,o){if(n=vs(n),n.length>1){var e=n.map(function(p){return as.quickSetter(p,t,o)}),a=e.length;return function(p){for(var f=a;f--;)e[f](p)}}n=n[0]||{};var r=rs[t],i=_t(n),l=i.harness&&(i.harness.aliases||{})[t]||t,u=r?function(p){var f=new r;Ft._pt=0,f.init(n,o?p+o:p,Ft,0,[n]),f.render(1,f),Ft._pt&&wr(1,Ft)}:i.set(n,l);return r?u:function(p){return u(n,l,o?p+o:p,i,1)}},quickTo:function(n,t,o){var e,a=as.to(n,ks((e={},e[t]="+=0.1",e.paused=!0,e.stagger=0,e),o||{})),r=function(l,u,p){return a.resetTo(t,l,u,p)};return r.tween=a,r},isTweening:function(n){return Tn.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=Ct(n.ease,Jt.ease)),Mi(Jt,n||{})},config:function(n){return Mi(fs,n||{})},registerEffect:function(n){var t=n.name,o=n.effect,e=n.plugins,a=n.defaults,r=n.extendTimeline;(e||"").split(",").forEach(function(i){return i&&!rs[i]&&!gs[i]&&La(t+" effect requires "+i+" plugin.")}),ro[t]=function(i,l,u){return o(vs(i),ks(l||{},a),u)},r&&(Xn.prototype[t]=function(i,l,u){return this.add(ro[t](i,Fs(l)?l:(u=l)&&{},this),u)})},registerEase:function(n,t){fn[n]=Ct(t)},parseEase:function(n,t){return arguments.length?Ct(n,t):fn},getById:function(n){return Tn.getById(n)},exportRoot:function(n,t){n===void 0&&(n={});var o=new Xn(n),e,a;for(o.smoothChildTiming=Zn(n.smoothChildTiming),Tn.remove(o),o._dp=0,o._time=o._tTime=Tn._time,e=Tn._first;e;)a=e._next,(t||!(!e._dur&&e instanceof Rn&&e.vars.onComplete===e._targets[0]))&&Os(o,e,e._start-e._delay),e=a;return Os(Tn,o,0),o},context:function(n,t){return n?new tc(n,t):Cn},matchMedia:function(n){return new Dg(n)},matchMediaRefresh:function(){return Tt.forEach(function(n){var t=n.conditions,o,e;for(e in t)t[e]&&(t[e]=!1,o=1);o&&n.revert()})||Bo()},addEventListener:function(n,t){var o=re[n]||(re[n]=[]);~o.indexOf(t)||o.push(t)},removeEventListener:function(n,t){var o=re[n],e=o&&o.indexOf(t);e>=0&&o.splice(e,1)},utils:{wrap:fg,wrapYoyo:gg,distribute:Dp,random:Bp,snap:Lp,normalize:dg,getUnit:Nn,clamp:lg,splitColor:Vp,toArray:vs,selector:qo,mapRange:Hp,pipe:cg,unitize:ug,interpolate:kg,shuffle:qp},install:wp,effects:ro,ticker:is,updateRoot:Xn.updateRoot,plugins:rs,globalTimeline:Tn,core:{PropTween:ss,globals:_p,Tween:Rn,Timeline:Xn,Animation:$a,getCache:_t,_removeLinkedListItem:Ne,reverting:function(){return $n},context:function(n){return n&&Cn&&(Cn.data.push(n),n._ctx=Cn),Cn},suppressOverwrites:function(n){return pr=n}}};ns("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Se[s]=Rn[s]});is.add(Xn.updateRoot);Ft=Se.to({},{duration:0});var Lg=function(n,t){for(var o=n._pt;o&&o.p!==t&&o.op!==t&&o.fp!==t;)o=o._next;return o},Bg=function(n,t){var o=n._targets,e,a,r;for(e in t)for(a=o.length;a--;)r=n._ptLookup[a][e],r&&(r=r.d)&&(r._pt&&(r=Lg(r,e)),r&&r.modifier&&r.modifier(t[e],n,o[a],e))},uo=function(n,t){return{name:n,headless:1,rawVars:1,init:function(e,a,r){r._onInit=function(i){var l,u;if(Fn(a)&&(l={},ns(a,function(p){return l[p]=1}),a=l),t){l={};for(u in a)l[u]=t(a[u]);a=l}Bg(i,a)}}}},as=Se.registerPlugin({name:"attr",init:function(n,t,o,e,a){var r,i,l;this.tween=o;for(r in t)l=n.getAttribute(r)||"",i=this.add(n,"setAttribute",(l||0)+"",t[r],e,a,0,0,r),i.op=r,i.b=l,this._props.push(r)},render:function(n,t){for(var o=t._pt;o;)$n?o.set(o.t,o.p,o.b,o):o.r(n,o.d),o=o._next}},{name:"endArray",headless:1,init:function(n,t){for(var o=t.length;o--;)this.add(n,o,n[o]||0,t[o],0,0,0,0,0,1)}},uo("roundProps",Do),uo("modifiers"),uo("snap",Lp))||Se;Rn.version=Xn.version=as.version="3.13.0";yp=1;ur()&&ta();fn.Power0;fn.Power1;fn.Power2;fn.Power3;fn.Power4;fn.Linear;fn.Quad;fn.Cubic;fn.Quart;fn.Quint;fn.Strong;fn.Elastic;fn.Back;fn.SteppedEase;fn.Bounce;fn.Sine;fn.Expo;fn.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qi,et,Yt,_r,yt,Di,Sr,Fg=function(){return typeof window<"u"},Xs={},bt=180/Math.PI,Gt=Math.PI/180,Ot=Math.atan2,Li=1e8,Cr=/([A-Z])/g,Hg=/(left|right|width|margin|padding|x)/i,$g=/[\s,\(]\S/,Is={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fo=function(n,t){return t.set(t.t,t.p,Math.round((t.s+t.c*n)*1e4)/1e4+t.u,t)},jg=function(n,t){return t.set(t.t,t.p,n===1?t.e:Math.round((t.s+t.c*n)*1e4)/1e4+t.u,t)},Vg=function(n,t){return t.set(t.t,t.p,n?Math.round((t.s+t.c*n)*1e4)/1e4+t.u:t.b,t)},Ng=function(n,t){var o=t.s+t.c*n;t.set(t.t,t.p,~~(o+(o<0?-.5:.5))+t.u,t)},ac=function(n,t){return t.set(t.t,t.p,n?t.e:t.b,t)},ec=function(n,t){return t.set(t.t,t.p,n!==1?t.b:t.e,t)},zg=function(n,t,o){return n.style[t]=o},Ug=function(n,t,o){return n.style.setProperty(t,o)},Wg=function(n,t,o){return n._gsap[t]=o},Yg=function(n,t,o){return n._gsap.scaleX=n._gsap.scaleY=o},Gg=function(n,t,o,e,a){var r=n._gsap;r.scaleX=r.scaleY=o,r.renderTransform(a,r)},Kg=function(n,t,o,e,a){var r=n._gsap;r[t]=o,r.renderTransform(a,r)},Pn="transform",ts=Pn+"Origin",Xg=function s(n,t){var o=this,e=this.target,a=e.style,r=e._gsap;if(n in Xs&&a){if(this.tfm=this.tfm||{},n!=="transform")n=Is[n]||n,~n.indexOf(",")?n.split(",").forEach(function(i){return o.tfm[i]=Ns(e,i)}):this.tfm[n]=r.x?r[n]:Ns(e,n),n===ts&&(this.tfm.zOrigin=r.zOrigin);else return Is.transform.split(",").forEach(function(i){return s.call(o,i,t)});if(this.props.indexOf(Pn)>=0)return;r.svg&&(this.svgo=e.getAttribute("data-svg-origin"),this.props.push(ts,t,"")),n=Pn}(a||t)&&this.props.push(n,t,a[n])},oc=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Qg=function(){var n=this.props,t=this.target,o=t.style,e=t._gsap,a,r;for(a=0;a<n.length;a+=3)n[a+1]?n[a+1]===2?t[n[a]](n[a+2]):t[n[a]]=n[a+2]:n[a+2]?o[n[a]]=n[a+2]:o.removeProperty(n[a].substr(0,2)==="--"?n[a]:n[a].replace(Cr,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)e[r]=this.tfm[r];e.svg&&(e.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Sr(),(!a||!a.isStart)&&!o[Pn]&&(oc(o),e.zOrigin&&o[ts]&&(o[ts]+=" "+e.zOrigin+"px",e.zOrigin=0,e.renderTransform()),e.uncache=1)}},rc=function(n,t){var o={target:n,props:[],revert:Qg,save:Xg};return n._gsap||as.core.getCache(n),t&&n.style&&n.nodeType&&t.split(",").forEach(function(e){return o.save(e)}),o},ic,Ho=function(n,t){var o=et.createElementNS?et.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):et.createElement(n);return o&&o.style?o:et.createElement(n)},bs=function s(n,t,o){var e=getComputedStyle(n);return e[t]||e.getPropertyValue(t.replace(Cr,"-$1").toLowerCase())||e.getPropertyValue(t)||!o&&s(n,aa(t)||t,1)||""},Bi="O,Moz,ms,Ms,Webkit".split(","),aa=function(n,t,o){var e=t||yt,a=e.style,r=5;if(n in a&&!o)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);r--&&!(Bi[r]+n in a););return r<0?null:(r===3?"ms":r>=0?Bi[r]:"")+n},$o=function(){Fg()&&window.document&&(qi=window,et=qi.document,Yt=et.documentElement,yt=Ho("div")||{style:{}},Ho("div"),Pn=aa(Pn),ts=Pn+"Origin",yt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ic=!!aa("perspective"),Sr=as.core.reverting,_r=1)},Fi=function(n){var t=n.ownerSVGElement,o=Ho("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),e=n.cloneNode(!0),a;e.style.display="block",o.appendChild(e),Yt.appendChild(o);try{a=e.getBBox()}catch{}return o.removeChild(e),Yt.removeChild(o),a},Hi=function(n,t){for(var o=t.length;o--;)if(n.hasAttribute(t[o]))return n.getAttribute(t[o])},lc=function(n){var t,o;try{t=n.getBBox()}catch{t=Fi(n),o=1}return t&&(t.width||t.height)||o||(t=Fi(n)),t&&!t.width&&!t.x&&!t.y?{x:+Hi(n,["x","cx","x1"])||0,y:+Hi(n,["y","cy","y1"])||0,width:0,height:0}:t},pc=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&lc(n))},Pt=function(n,t){if(t){var o=n.style,e;t in Xs&&t!==ts&&(t=Pn),o.removeProperty?(e=t.substr(0,2),(e==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),o.removeProperty(e==="--"?t:t.replace(Cr,"-$1").toLowerCase())):o.removeAttribute(t)}},ot=function(n,t,o,e,a,r){var i=new ss(n._pt,t,o,0,1,r?ec:ac);return n._pt=i,i.b=e,i.e=a,n._props.push(o),i},$i={deg:1,rad:1,turn:1},Jg={grid:1,flex:1},dt=function s(n,t,o,e){var a=parseFloat(o)||0,r=(o+"").trim().substr((a+"").length)||"px",i=yt.style,l=Hg.test(t),u=n.tagName.toLowerCase()==="svg",p=(u?"client":"offset")+(l?"Width":"Height"),f=100,g=e==="px",c=e==="%",k,d,h,v;if(e===r||!a||$i[e]||$i[r])return a;if(r!=="px"&&!g&&(a=s(n,t,o,"px")),v=n.getCTM&&pc(n),(c||r==="%")&&(Xs[t]||~t.indexOf("adius")))return k=v?n.getBBox()[l?"width":"height"]:n[p],An(c?a/k*f:a/100*k);if(i[l?"width":"height"]=f+(g?r:e),d=e!=="rem"&&~t.indexOf("adius")||e==="em"&&n.appendChild&&!u?n:n.parentNode,v&&(d=(n.ownerSVGElement||{}).parentNode),(!d||d===et||!d.appendChild)&&(d=et.body),h=d._gsap,h&&c&&h.width&&l&&h.time===is.time&&!h.uncache)return An(a/h.width*f);if(c&&(t==="height"||t==="width")){var b=n.style[t];n.style[t]=f+e,k=n[p],b?n.style[t]=b:Pt(n,t)}else(c||r==="%")&&!Jg[bs(d,"display")]&&(i.position=bs(n,"position")),d===n&&(i.position="static"),d.appendChild(yt),k=yt[p],d.removeChild(yt),i.position="absolute";return l&&c&&(h=_t(d),h.time=is.time,h.width=d[p]),An(g?k*a/f:k&&a?f/k*a:0)},Ns=function(n,t,o,e){var a;return _r||$o(),t in Is&&t!=="transform"&&(t=Is[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xs[t]&&t!=="transform"?(a=Va(n,e),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Te(bs(n,ts))+" "+a.zOrigin+"px"):(a=n.style[t],(!a||a==="auto"||e||~(a+"").indexOf("calc("))&&(a=Ce[t]&&Ce[t](n,t,o)||bs(n,t)||Cp(n,t)||(t==="opacity"?1:0))),o&&!~(a+"").trim().indexOf(" ")?dt(n,t,a,o)+o:a},Zg=function(n,t,o,e){if(!o||o==="none"){var a=aa(t,n,1),r=a&&bs(n,a,1);r&&r!==o?(t=a,o=r):t==="borderColor"&&(o=bs(n,"borderTopColor"))}var i=new ss(this._pt,n.style,t,0,1,nc),l=0,u=0,p,f,g,c,k,d,h,v,b,w,S,m;if(i.b=o,i.e=e,o+="",e+="",e.substring(0,6)==="var(--"&&(e=bs(n,e.substring(4,e.indexOf(")")))),e==="auto"&&(d=n.style[t],n.style[t]=e,e=bs(n,t)||e,d?n.style[t]=d:Pt(n,t)),p=[o,e],zp(p),o=p[0],e=p[1],g=o.match(Bt)||[],m=e.match(Bt)||[],m.length){for(;f=Bt.exec(e);)h=f[0],b=e.substring(l,f.index),k?k=(k+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(k=1),h!==(d=g[u++]||"")&&(c=parseFloat(d)||0,S=d.substr((c+"").length),h.charAt(1)==="="&&(h=Wt(c,h)+S),v=parseFloat(h),w=h.substr((v+"").length),l=Bt.lastIndex-w.length,w||(w=w||fs.units[t]||S,l===e.length&&(e+=w,i.e+=w)),S!==w&&(c=dt(n,t,d,w)||0),i._pt={_next:i._pt,p:b||u===1?b:",",s:c,c:v-c,m:k&&k<4||t==="zIndex"?Math.round:0});i.c=l<e.length?e.substring(l,e.length):""}else i.r=t==="display"&&e==="none"?ec:ac;return bp.test(e)&&(i.e=0),this._pt=i,i},ji={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nk=function(n){var t=n.split(" "),o=t[0],e=t[1]||"50%";return(o==="top"||o==="bottom"||e==="left"||e==="right")&&(n=o,o=e,e=n),t[0]=ji[o]||o,t[1]=ji[e]||e,t.join(" ")},sk=function(n,t){if(t.tween&&t.tween._time===t.tween._dur){var o=t.t,e=o.style,a=t.u,r=o._gsap,i,l,u;if(a==="all"||a===!0)e.cssText="",l=1;else for(a=a.split(","),u=a.length;--u>-1;)i=a[u],Xs[i]&&(l=1,i=i==="transformOrigin"?ts:Pn),Pt(o,i);l&&(Pt(o,Pn),r&&(r.svg&&o.removeAttribute("transform"),e.scale=e.rotate=e.translate="none",Va(o,1),r.uncache=1,oc(e)))}},Ce={clearProps:function(n,t,o,e,a){if(a.data!=="isFromStart"){var r=n._pt=new ss(n._pt,t,o,0,0,sk);return r.u=e,r.pr=-10,r.tween=a,n._props.push(o),1}}},ja=[1,0,0,1,0,0],cc={},uc=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Vi=function(n){var t=bs(n,Pn);return uc(t)?ja:t.substr(7).match(vp).map(An)},Tr=function(n,t){var o=n._gsap||_t(n),e=n.style,a=Vi(n),r,i,l,u;return o.svg&&n.getAttribute("transform")?(l=n.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?ja:a):(a===ja&&!n.offsetParent&&n!==Yt&&!o.svg&&(l=e.display,e.display="block",r=n.parentNode,(!r||!n.offsetParent&&!n.getBoundingClientRect().width)&&(u=1,i=n.nextElementSibling,Yt.appendChild(n)),a=Vi(n),l?e.display=l:Pt(n,"display"),u&&(i?r.insertBefore(n,i):r?r.appendChild(n):Yt.removeChild(n))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},jo=function(n,t,o,e,a,r){var i=n._gsap,l=a||Tr(n,!0),u=i.xOrigin||0,p=i.yOrigin||0,f=i.xOffset||0,g=i.yOffset||0,c=l[0],k=l[1],d=l[2],h=l[3],v=l[4],b=l[5],w=t.split(" "),S=parseFloat(w[0])||0,m=parseFloat(w[1])||0,y,_,x,C;o?l!==ja&&(_=c*h-k*d)&&(x=S*(h/_)+m*(-d/_)+(d*b-h*v)/_,C=S*(-k/_)+m*(c/_)-(c*b-k*v)/_,S=x,m=C):(y=lc(n),S=y.x+(~w[0].indexOf("%")?S/100*y.width:S),m=y.y+(~(w[1]||w[0]).indexOf("%")?m/100*y.height:m)),e||e!==!1&&i.smooth?(v=S-u,b=m-p,i.xOffset=f+(v*c+b*d)-v,i.yOffset=g+(v*k+b*h)-b):i.xOffset=i.yOffset=0,i.xOrigin=S,i.yOrigin=m,i.smooth=!!e,i.origin=t,i.originIsAbsolute=!!o,n.style[ts]="0px 0px",r&&(ot(r,i,"xOrigin",u,S),ot(r,i,"yOrigin",p,m),ot(r,i,"xOffset",f,i.xOffset),ot(r,i,"yOffset",g,i.yOffset)),n.setAttribute("data-svg-origin",S+" "+m)},Va=function(n,t){var o=n._gsap||new Gp(n);if("x"in o&&!t&&!o.uncache)return o;var e=n.style,a=o.scaleX<0,r="px",i="deg",l=getComputedStyle(n),u=bs(n,ts)||"0",p,f,g,c,k,d,h,v,b,w,S,m,y,_,x,C,P,M,T,O,I,L,j,B,U,nn,rn,pn,en,un,cn,dn;return p=f=g=d=h=v=b=w=S=0,c=k=1,o.svg=!!(n.getCTM&&pc(n)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(e[Pn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pn]!=="none"?l[Pn]:"")),e.scale=e.rotate=e.translate="none"),_=Tr(n,o.svg),o.svg&&(o.uncache?(U=n.getBBox(),u=o.xOrigin-U.x+"px "+(o.yOrigin-U.y)+"px",B=""):B=!t&&n.getAttribute("data-svg-origin"),jo(n,B||u,!!B||o.originIsAbsolute,o.smooth!==!1,_)),m=o.xOrigin||0,y=o.yOrigin||0,_!==ja&&(M=_[0],T=_[1],O=_[2],I=_[3],p=L=_[4],f=j=_[5],_.length===6?(c=Math.sqrt(M*M+T*T),k=Math.sqrt(I*I+O*O),d=M||T?Ot(T,M)*bt:0,b=O||I?Ot(O,I)*bt+d:0,b&&(k*=Math.abs(Math.cos(b*Gt))),o.svg&&(p-=m-(m*M+y*O),f-=y-(m*T+y*I))):(dn=_[6],un=_[7],rn=_[8],pn=_[9],en=_[10],cn=_[11],p=_[12],f=_[13],g=_[14],x=Ot(dn,en),h=x*bt,x&&(C=Math.cos(-x),P=Math.sin(-x),B=L*C+rn*P,U=j*C+pn*P,nn=dn*C+en*P,rn=L*-P+rn*C,pn=j*-P+pn*C,en=dn*-P+en*C,cn=un*-P+cn*C,L=B,j=U,dn=nn),x=Ot(-O,en),v=x*bt,x&&(C=Math.cos(-x),P=Math.sin(-x),B=M*C-rn*P,U=T*C-pn*P,nn=O*C-en*P,cn=I*P+cn*C,M=B,T=U,O=nn),x=Ot(T,M),d=x*bt,x&&(C=Math.cos(x),P=Math.sin(x),B=M*C+T*P,U=L*C+j*P,T=T*C-M*P,j=j*C-L*P,M=B,L=U),h&&Math.abs(h)+Math.abs(d)>359.9&&(h=d=0,v=180-v),c=An(Math.sqrt(M*M+T*T+O*O)),k=An(Math.sqrt(j*j+dn*dn)),x=Ot(L,j),b=Math.abs(x)>2e-4?x*bt:0,S=cn?1/(cn<0?-cn:cn):0),o.svg&&(B=n.getAttribute("transform"),o.forceCSS=n.setAttribute("transform","")||!uc(bs(n,Pn)),B&&n.setAttribute("transform",B))),Math.abs(b)>90&&Math.abs(b)<270&&(a?(c*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(k*=-1,b+=b<=0?180:-180)),t=t||o.uncache,o.x=p-((o.xPercent=p&&(!t&&o.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-p)?-50:0)))?n.offsetWidth*o.xPercent/100:0)+r,o.y=f-((o.yPercent=f&&(!t&&o.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-f)?-50:0)))?n.offsetHeight*o.yPercent/100:0)+r,o.z=g+r,o.scaleX=An(c),o.scaleY=An(k),o.rotation=An(d)+i,o.rotationX=An(h)+i,o.rotationY=An(v)+i,o.skewX=b+i,o.skewY=w+i,o.transformPerspective=S+r,(o.zOrigin=parseFloat(u.split(" ")[2])||!t&&o.zOrigin||0)&&(e[ts]=Te(u)),o.xOffset=o.yOffset=0,o.force3D=fs.force3D,o.renderTransform=o.svg?ak:ic?dc:tk,o.uncache=0,o},Te=function(n){return(n=n.split(" "))[0]+" "+n[1]},fo=function(n,t,o){var e=Nn(t);return An(parseFloat(t)+parseFloat(dt(n,"x",o+"px",e)))+e},tk=function(n,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,dc(n,t)},ht="0deg",pa="0px",mt=") ",dc=function(n,t){var o=t||this,e=o.xPercent,a=o.yPercent,r=o.x,i=o.y,l=o.z,u=o.rotation,p=o.rotationY,f=o.rotationX,g=o.skewX,c=o.skewY,k=o.scaleX,d=o.scaleY,h=o.transformPerspective,v=o.force3D,b=o.target,w=o.zOrigin,S="",m=v==="auto"&&n&&n!==1||v===!0;if(w&&(f!==ht||p!==ht)){var y=parseFloat(p)*Gt,_=Math.sin(y),x=Math.cos(y),C;y=parseFloat(f)*Gt,C=Math.cos(y),r=fo(b,r,_*C*-w),i=fo(b,i,-Math.sin(y)*-w),l=fo(b,l,x*C*-w+w)}h!==pa&&(S+="perspective("+h+mt),(e||a)&&(S+="translate("+e+"%, "+a+"%) "),(m||r!==pa||i!==pa||l!==pa)&&(S+=l!==pa||m?"translate3d("+r+", "+i+", "+l+") ":"translate("+r+", "+i+mt),u!==ht&&(S+="rotate("+u+mt),p!==ht&&(S+="rotateY("+p+mt),f!==ht&&(S+="rotateX("+f+mt),(g!==ht||c!==ht)&&(S+="skew("+g+", "+c+mt),(k!==1||d!==1)&&(S+="scale("+k+", "+d+mt),b.style[Pn]=S||"translate(0, 0)"},ak=function(n,t){var o=t||this,e=o.xPercent,a=o.yPercent,r=o.x,i=o.y,l=o.rotation,u=o.skewX,p=o.skewY,f=o.scaleX,g=o.scaleY,c=o.target,k=o.xOrigin,d=o.yOrigin,h=o.xOffset,v=o.yOffset,b=o.forceCSS,w=parseFloat(r),S=parseFloat(i),m,y,_,x,C;l=parseFloat(l),u=parseFloat(u),p=parseFloat(p),p&&(p=parseFloat(p),u+=p,l+=p),l||u?(l*=Gt,u*=Gt,m=Math.cos(l)*f,y=Math.sin(l)*f,_=Math.sin(l-u)*-g,x=Math.cos(l-u)*g,u&&(p*=Gt,C=Math.tan(u-p),C=Math.sqrt(1+C*C),_*=C,x*=C,p&&(C=Math.tan(p),C=Math.sqrt(1+C*C),m*=C,y*=C)),m=An(m),y=An(y),_=An(_),x=An(x)):(m=f,x=g,y=_=0),(w&&!~(r+"").indexOf("px")||S&&!~(i+"").indexOf("px"))&&(w=dt(c,"x",r,"px"),S=dt(c,"y",i,"px")),(k||d||h||v)&&(w=An(w+k-(k*m+d*_)+h),S=An(S+d-(k*y+d*x)+v)),(e||a)&&(C=c.getBBox(),w=An(w+e/100*C.width),S=An(S+a/100*C.height)),C="matrix("+m+","+y+","+_+","+x+","+w+","+S+")",c.setAttribute("transform",C),b&&(c.style[Pn]=C)},ek=function(n,t,o,e,a){var r=360,i=Fn(a),l=parseFloat(a)*(i&&~a.indexOf("rad")?bt:1),u=l-e,p=e+u+"deg",f,g;return i&&(f=a.split("_")[1],f==="short"&&(u%=r,u!==u%(r/2)&&(u+=u<0?r:-r)),f==="cw"&&u<0?u=(u+r*Li)%r-~~(u/r)*r:f==="ccw"&&u>0&&(u=(u-r*Li)%r-~~(u/r)*r)),n._pt=g=new ss(n._pt,t,o,e,u,jg),g.e=p,g.u="deg",n._props.push(o),g},Ni=function(n,t){for(var o in t)n[o]=t[o];return n},ok=function(n,t,o){var e=Ni({},o._gsap),a="perspective,force3D,transformOrigin,svgOrigin",r=o.style,i,l,u,p,f,g,c,k;e.svg?(u=o.getAttribute("transform"),o.setAttribute("transform",""),r[Pn]=t,i=Va(o,1),Pt(o,Pn),o.setAttribute("transform",u)):(u=getComputedStyle(o)[Pn],r[Pn]=t,i=Va(o,1),r[Pn]=u);for(l in Xs)u=e[l],p=i[l],u!==p&&a.indexOf(l)<0&&(c=Nn(u),k=Nn(p),f=c!==k?dt(o,l,u,k):parseFloat(u),g=parseFloat(p),n._pt=new ss(n._pt,i,l,f,g-f,Fo),n._pt.u=k||0,n._props.push(l));Ni(i,e)};ns("padding,margin,Width,Radius",function(s,n){var t="Top",o="Right",e="Bottom",a="Left",r=(n<3?[t,o,e,a]:[t+a,t+o,e+o,e+a]).map(function(i){return n<2?s+i:"border"+i+s});Ce[n>1?"border"+s:s]=function(i,l,u,p,f){var g,c;if(arguments.length<4)return g=r.map(function(k){return Ns(i,k,u)}),c=g.join(" "),c.split(g[0]).length===5?g[0]:c;g=(p+"").split(" "),c={},r.forEach(function(k,d){return c[k]=g[d]=g[d]||g[(d-1)/2|0]}),i.init(l,c,f)}});var fc={name:"css",register:$o,targetTest:function(n){return n.style&&n.nodeType},init:function(n,t,o,e,a){var r=this._props,i=n.style,l=o.vars.startAt,u,p,f,g,c,k,d,h,v,b,w,S,m,y,_,x;_r||$o(),this.styles=this.styles||rc(n),x=this.styles.props,this.tween=o;for(d in t)if(d!=="autoRound"&&(p=t[d],!(rs[d]&&Kp(d,t,o,e,n,a)))){if(c=typeof p,k=Ce[d],c==="function"&&(p=p.call(o,e,n,a),c=typeof p),c==="string"&&~p.indexOf("random(")&&(p=Fa(p)),k)k(this,n,d,p,o)&&(_=1);else if(d.substr(0,2)==="--")u=(getComputedStyle(n).getPropertyValue(d)+"").trim(),p+="",lt.lastIndex=0,lt.test(u)||(h=Nn(u),v=Nn(p)),v?h!==v&&(u=dt(n,d,u,v)+v):h&&(p+=h),this.add(i,"setProperty",u,p,e,a,0,0,d),r.push(d),x.push(d,0,i[d]);else if(c!=="undefined"){if(l&&d in l?(u=typeof l[d]=="function"?l[d].call(o,e,n,a):l[d],Fn(u)&&~u.indexOf("random(")&&(u=Fa(u)),Nn(u+"")||u==="auto"||(u+=fs.units[d]||Nn(Ns(n,d))||""),(u+"").charAt(1)==="="&&(u=Ns(n,d))):u=Ns(n,d),g=parseFloat(u),b=c==="string"&&p.charAt(1)==="="&&p.substr(0,2),b&&(p=p.substr(2)),f=parseFloat(p),d in Is&&(d==="autoAlpha"&&(g===1&&Ns(n,"visibility")==="hidden"&&f&&(g=0),x.push("visibility",0,i.visibility),ot(this,i,"visibility",g?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=Is[d],~d.indexOf(",")&&(d=d.split(",")[0]))),w=d in Xs,w){if(this.styles.save(d),c==="string"&&p.substring(0,6)==="var(--"&&(p=bs(n,p.substring(4,p.indexOf(")"))),f=parseFloat(p)),S||(m=n._gsap,m.renderTransform&&!t.parseTransform||Va(n,t.parseTransform),y=t.smoothOrigin!==!1&&m.smooth,S=this._pt=new ss(this._pt,i,Pn,0,1,m.renderTransform,m,0,-1),S.dep=1),d==="scale")this._pt=new ss(this._pt,m,"scaleY",m.scaleY,(b?Wt(m.scaleY,b+f):f)-m.scaleY||0,Fo),this._pt.u=0,r.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(ts,0,i[ts]),p=nk(p),m.svg?jo(n,p,0,y,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==m.zOrigin&&ot(this,m,"zOrigin",m.zOrigin,v),ot(this,i,d,Te(u),Te(p)));continue}else if(d==="svgOrigin"){jo(n,p,1,y,0,this);continue}else if(d in cc){ek(this,m,d,g,b?Wt(g,b+p):p);continue}else if(d==="smoothOrigin"){ot(this,m,"smooth",m.smooth,p);continue}else if(d==="force3D"){m[d]=p;continue}else if(d==="transform"){ok(this,p,n);continue}}else d in i||(d=aa(d)||d);if(w||(f||f===0)&&(g||g===0)&&!$g.test(p)&&d in i)h=(u+"").substr((g+"").length),f||(f=0),v=Nn(p)||(d in fs.units?fs.units[d]:h),h!==v&&(g=dt(n,d,u,v)),this._pt=new ss(this._pt,w?m:i,d,g,(b?Wt(g,b+f):f)-g,!w&&(v==="px"||d==="zIndex")&&t.autoRound!==!1?Ng:Fo),this._pt.u=v||0,h!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=Vg);else if(d in i)Zg.call(this,n,d,u,b?b+p:p);else if(d in n)this.add(n,d,u||n[d],b?b+p:p,e,a);else if(d!=="parseTransform"){fr(d,p);continue}w||(d in i?x.push(d,0,i[d]):typeof n[d]=="function"?x.push(d,2,n[d]()):x.push(d,1,u||n[d])),r.push(d)}}_&&sc(this)},render:function(n,t){if(t.tween._time||!Sr())for(var o=t._pt;o;)o.r(n,o.d),o=o._next;else t.styles.revert()},get:Ns,aliases:Is,getSetter:function(n,t,o){var e=Is[t];return e&&e.indexOf(",")<0&&(t=e),t in Xs&&t!==ts&&(n._gsap.x||Ns(n,"x"))?o&&Di===o?t==="scale"?Yg:Wg:(Di=o||{})&&(t==="scale"?Gg:Kg):n.style&&!cr(n.style[t])?zg:~t.indexOf("-")?Ug:yr(n,t)},core:{_removeProperty:Pt,_getMatrix:Tr}};as.utils.checkPrefix=aa;as.core.getStyleSaver=rc;(function(s,n,t,o){var e=ns(s+","+n+","+t,function(a){Xs[a]=1});ns(n,function(a){fs.units[a]="deg",cc[a]=1}),Is[e[13]]=s+","+n,ns(o,function(a){var r=a.split(":");Is[r[1]]=e[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ns("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fs.units[s]="px"});as.registerPlugin(fc);var zs=as.registerPlugin(fc)||as;zs.core.Tween;var ie={exports:{}};/*!
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
 */var rk=ie.exports,zi;function ik(){return zi||(zi=1,function(s,n){(function(o,e){s.exports=e()})(rk,function(){return function(t){var o={};function e(a){if(o[a])return o[a].exports;var r=o[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=o,e.d=function(a,r,i){e.o(a,r)||Object.defineProperty(a,r,{enumerable:!0,get:i})},e.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,r){if(r&1&&(a=e(a)),r&8||r&4&&typeof a=="object"&&a&&a.__esModule)return a;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),r&2&&typeof a!="string")for(var l in a)e.d(i,l,(function(u){return a[u]}).bind(null,l));return i},e.n=function(a){var r=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(r,"a",r),r},e.o=function(a,r){return Object.prototype.hasOwnProperty.call(a,r)},e.p="",e(e.s=20)}([function(t,o){var e={};t.exports=e,function(){e._baseDelta=1e3/60,e._nextId=0,e._seed=0,e._nowStartTime=+new Date,e._warnedOnce={},e._decomp=null,e.extend=function(r,i){var l,u;typeof i=="boolean"?(l=2,u=i):(l=1,u=!0);for(var p=l;p<arguments.length;p++){var f=arguments[p];if(f)for(var g in f)u&&f[g]&&f[g].constructor===Object&&(!r[g]||r[g].constructor===Object)?(r[g]=r[g]||{},e.extend(r[g],u,f[g])):r[g]=f[g]}return r},e.clone=function(r,i){return e.extend({},i,r)},e.keys=function(r){if(Object.keys)return Object.keys(r);var i=[];for(var l in r)i.push(l);return i},e.values=function(r){var i=[];if(Object.keys){for(var l=Object.keys(r),u=0;u<l.length;u++)i.push(r[l[u]]);return i}for(var p in r)i.push(r[p]);return i},e.get=function(r,i,l,u){i=i.split(".").slice(l,u);for(var p=0;p<i.length;p+=1)r=r[i[p]];return r},e.set=function(r,i,l,u,p){var f=i.split(".").slice(u,p);return e.get(r,i,0,-1)[f[f.length-1]]=l,l},e.shuffle=function(r){for(var i=r.length-1;i>0;i--){var l=Math.floor(e.random()*(i+1)),u=r[i];r[i]=r[l],r[l]=u}return r},e.choose=function(r){return r[Math.floor(e.random()*r.length)]},e.isElement=function(r){return typeof HTMLElement<"u"?r instanceof HTMLElement:!!(r&&r.nodeType&&r.nodeName)},e.isArray=function(r){return Object.prototype.toString.call(r)==="[object Array]"},e.isFunction=function(r){return typeof r=="function"},e.isPlainObject=function(r){return typeof r=="object"&&r.constructor===Object},e.isString=function(r){return toString.call(r)==="[object String]"},e.clamp=function(r,i,l){return r<i?i:r>l?l:r},e.sign=function(r){return r<0?-1:1},e.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-e._nowStartTime},e.random=function(r,i){return r=typeof r<"u"?r:0,i=typeof i<"u"?i:1,r+a()*(i-r)};var a=function(){return e._seed=(e._seed*9301+49297)%233280,e._seed/233280};e.colorToNumber=function(r){return r=r.replace("#",""),r.length==3&&(r=r.charAt(0)+r.charAt(0)+r.charAt(1)+r.charAt(1)+r.charAt(2)+r.charAt(2)),parseInt(r,16)},e.logLevel=1,e.log=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.info=function(){console&&e.logLevel>0&&e.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warn=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warnOnce=function(){var r=Array.prototype.slice.call(arguments).join(" ");e._warnedOnce[r]||(e.warn(r),e._warnedOnce[r]=!0)},e.deprecated=function(r,i,l){r[i]=e.chain(function(){e.warnOnce("🔅 deprecated 🔅",l)},r[i])},e.nextId=function(){return e._nextId++},e.indexOf=function(r,i){if(r.indexOf)return r.indexOf(i);for(var l=0;l<r.length;l++)if(r[l]===i)return l;return-1},e.map=function(r,i){if(r.map)return r.map(i);for(var l=[],u=0;u<r.length;u+=1)l.push(i(r[u]));return l},e.topologicalSort=function(r){var i=[],l=[],u=[];for(var p in r)!l[p]&&!u[p]&&e._topologicalSort(p,l,u,r,i);return i},e._topologicalSort=function(r,i,l,u,p){var f=u[r]||[];l[r]=!0;for(var g=0;g<f.length;g+=1){var c=f[g];l[c]||i[c]||e._topologicalSort(c,i,l,u,p)}l[r]=!1,i[r]=!0,p.push(r)},e.chain=function(){for(var r=[],i=0;i<arguments.length;i+=1){var l=arguments[i];l._chained?r.push.apply(r,l._chained):r.push(l)}var u=function(){for(var p,f=new Array(arguments.length),g=0,c=arguments.length;g<c;g++)f[g]=arguments[g];for(g=0;g<r.length;g+=1){var k=r[g].apply(p,f);typeof k<"u"&&(p=k)}return p};return u._chained=r,u},e.chainPathBefore=function(r,i,l){return e.set(r,i,e.chain(l,e.get(r,i)))},e.chainPathAfter=function(r,i,l){return e.set(r,i,e.chain(e.get(r,i),l))},e.setDecomp=function(r){e._decomp=r},e.getDecomp=function(){var r=e._decomp;try{!r&&typeof window<"u"&&(r=window.decomp),!r&&typeof Ci<"u"&&(r=Ci.decomp)}catch{r=null}return r}}()},function(t,o){var e={};t.exports=e,function(){e.create=function(a){var r={min:{x:0,y:0},max:{x:0,y:0}};return a&&e.update(r,a),r},e.update=function(a,r,i){a.min.x=1/0,a.max.x=-1/0,a.min.y=1/0,a.max.y=-1/0;for(var l=0;l<r.length;l++){var u=r[l];u.x>a.max.x&&(a.max.x=u.x),u.x<a.min.x&&(a.min.x=u.x),u.y>a.max.y&&(a.max.y=u.y),u.y<a.min.y&&(a.min.y=u.y)}i&&(i.x>0?a.max.x+=i.x:a.min.x+=i.x,i.y>0?a.max.y+=i.y:a.min.y+=i.y)},e.contains=function(a,r){return r.x>=a.min.x&&r.x<=a.max.x&&r.y>=a.min.y&&r.y<=a.max.y},e.overlaps=function(a,r){return a.min.x<=r.max.x&&a.max.x>=r.min.x&&a.max.y>=r.min.y&&a.min.y<=r.max.y},e.translate=function(a,r){a.min.x+=r.x,a.max.x+=r.x,a.min.y+=r.y,a.max.y+=r.y},e.shift=function(a,r){var i=a.max.x-a.min.x,l=a.max.y-a.min.y;a.min.x=r.x,a.max.x=r.x+i,a.min.y=r.y,a.max.y=r.y+l}}()},function(t,o){var e={};t.exports=e,function(){e.create=function(a,r){return{x:a||0,y:r||0}},e.clone=function(a){return{x:a.x,y:a.y}},e.magnitude=function(a){return Math.sqrt(a.x*a.x+a.y*a.y)},e.magnitudeSquared=function(a){return a.x*a.x+a.y*a.y},e.rotate=function(a,r,i){var l=Math.cos(r),u=Math.sin(r);i||(i={});var p=a.x*l-a.y*u;return i.y=a.x*u+a.y*l,i.x=p,i},e.rotateAbout=function(a,r,i,l){var u=Math.cos(r),p=Math.sin(r);l||(l={});var f=i.x+((a.x-i.x)*u-(a.y-i.y)*p);return l.y=i.y+((a.x-i.x)*p+(a.y-i.y)*u),l.x=f,l},e.normalise=function(a){var r=e.magnitude(a);return r===0?{x:0,y:0}:{x:a.x/r,y:a.y/r}},e.dot=function(a,r){return a.x*r.x+a.y*r.y},e.cross=function(a,r){return a.x*r.y-a.y*r.x},e.cross3=function(a,r,i){return(r.x-a.x)*(i.y-a.y)-(r.y-a.y)*(i.x-a.x)},e.add=function(a,r,i){return i||(i={}),i.x=a.x+r.x,i.y=a.y+r.y,i},e.sub=function(a,r,i){return i||(i={}),i.x=a.x-r.x,i.y=a.y-r.y,i},e.mult=function(a,r){return{x:a.x*r,y:a.y*r}},e.div=function(a,r){return{x:a.x/r,y:a.y/r}},e.perp=function(a,r){return r=r===!0?-1:1,{x:r*-a.y,y:r*a.x}},e.neg=function(a){return{x:-a.x,y:-a.y}},e.angle=function(a,r){return Math.atan2(r.y-a.y,r.x-a.x)},e._temp=[e.create(),e.create(),e.create(),e.create(),e.create(),e.create()]}()},function(t,o,e){var a={};t.exports=a;var r=e(2),i=e(0);(function(){a.create=function(l,u){for(var p=[],f=0;f<l.length;f++){var g=l[f],c={x:g.x,y:g.y,index:f,body:u,isInternal:!1};p.push(c)}return p},a.fromPath=function(l,u){var p=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,f=[];return l.replace(p,function(g,c,k){f.push({x:parseFloat(c),y:parseFloat(k)})}),a.create(f,u)},a.centre=function(l){for(var u=a.area(l,!0),p={x:0,y:0},f,g,c,k=0;k<l.length;k++)c=(k+1)%l.length,f=r.cross(l[k],l[c]),g=r.mult(r.add(l[k],l[c]),f),p=r.add(p,g);return r.div(p,6*u)},a.mean=function(l){for(var u={x:0,y:0},p=0;p<l.length;p++)u.x+=l[p].x,u.y+=l[p].y;return r.div(u,l.length)},a.area=function(l,u){for(var p=0,f=l.length-1,g=0;g<l.length;g++)p+=(l[f].x-l[g].x)*(l[f].y+l[g].y),f=g;return u?p/2:Math.abs(p)/2},a.inertia=function(l,u){for(var p=0,f=0,g=l,c,k,d=0;d<g.length;d++)k=(d+1)%g.length,c=Math.abs(r.cross(g[k],g[d])),p+=c*(r.dot(g[k],g[k])+r.dot(g[k],g[d])+r.dot(g[d],g[d])),f+=c;return u/6*(p/f)},a.translate=function(l,u,p){p=typeof p<"u"?p:1;var f=l.length,g=u.x*p,c=u.y*p,k;for(k=0;k<f;k++)l[k].x+=g,l[k].y+=c;return l},a.rotate=function(l,u,p){if(u!==0){var f=Math.cos(u),g=Math.sin(u),c=p.x,k=p.y,d=l.length,h,v,b,w;for(w=0;w<d;w++)h=l[w],v=h.x-c,b=h.y-k,h.x=c+(v*f-b*g),h.y=k+(v*g+b*f);return l}},a.contains=function(l,u){for(var p=u.x,f=u.y,g=l.length,c=l[g-1],k,d=0;d<g;d++){if(k=l[d],(p-c.x)*(k.y-c.y)+(f-c.y)*(c.x-k.x)>0)return!1;c=k}return!0},a.scale=function(l,u,p,f){if(u===1&&p===1)return l;f=f||a.centre(l);for(var g,c,k=0;k<l.length;k++)g=l[k],c=r.sub(g,f),l[k].x=f.x+c.x*u,l[k].y=f.y+c.y*p;return l},a.chamfer=function(l,u,p,f,g){typeof u=="number"?u=[u]:u=u||[8],p=typeof p<"u"?p:-1,f=f||2,g=g||14;for(var c=[],k=0;k<l.length;k++){var d=l[k-1>=0?k-1:l.length-1],h=l[k],v=l[(k+1)%l.length],b=u[k<u.length?k:u.length-1];if(b===0){c.push(h);continue}var w=r.normalise({x:h.y-d.y,y:d.x-h.x}),S=r.normalise({x:v.y-h.y,y:h.x-v.x}),m=Math.sqrt(2*Math.pow(b,2)),y=r.mult(i.clone(w),b),_=r.normalise(r.mult(r.add(w,S),.5)),x=r.sub(h,r.mult(_,m)),C=p;p===-1&&(C=Math.pow(b,.32)*1.75),C=i.clamp(C,f,g),C%2===1&&(C+=1);for(var P=Math.acos(r.dot(w,S)),M=P/C,T=0;T<C;T++)c.push(r.add(r.rotate(y,M*T),x))}return c},a.clockwiseSort=function(l){var u=a.mean(l);return l.sort(function(p,f){return r.angle(u,p)-r.angle(u,f)}),l},a.isConvex=function(l){var u=0,p=l.length,f,g,c,k;if(p<3)return null;for(f=0;f<p;f++)if(g=(f+1)%p,c=(f+2)%p,k=(l[g].x-l[f].x)*(l[c].y-l[g].y),k-=(l[g].y-l[f].y)*(l[c].x-l[g].x),k<0?u|=1:k>0&&(u|=2),u===3)return!1;return u!==0?!0:null},a.hull=function(l){var u=[],p=[],f,g;for(l=l.slice(0),l.sort(function(c,k){var d=c.x-k.x;return d!==0?d:c.y-k.y}),g=0;g<l.length;g+=1){for(f=l[g];p.length>=2&&r.cross3(p[p.length-2],p[p.length-1],f)<=0;)p.pop();p.push(f)}for(g=l.length-1;g>=0;g-=1){for(f=l[g];u.length>=2&&r.cross3(u[u.length-2],u[u.length-1],f)<=0;)u.pop();u.push(f)}return u.pop(),p.pop(),u.concat(p)}})()},function(t,o,e){var a={};t.exports=a;var r=e(3),i=e(2),l=e(7),u=e(0),p=e(1),f=e(11);(function(){a._timeCorrection=!0,a._inertiaScale=4,a._nextCollidingGroupId=1,a._nextNonCollidingGroupId=-1,a._nextCategory=1,a._baseDelta=1e3/60,a.create=function(c){var k={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:r.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},d=u.extend(k,c);return g(d,c),d},a.nextGroup=function(c){return c?a._nextNonCollidingGroupId--:a._nextCollidingGroupId++},a.nextCategory=function(){return a._nextCategory=a._nextCategory<<1,a._nextCategory};var g=function(c,k){k=k||{},a.set(c,{bounds:c.bounds||p.create(c.vertices),positionPrev:c.positionPrev||i.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),r.rotate(c.vertices,c.angle,c.position),f.rotate(c.axes,c.angle),p.update(c.bounds,c.vertices,c.velocity),a.set(c,{axes:k.axes||c.axes,area:k.area||c.area,mass:k.mass||c.mass,inertia:k.inertia||c.inertia});var d=c.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),h=c.isStatic?"#555":"#ccc",v=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||d,c.render.strokeStyle=c.render.strokeStyle||h,c.render.lineWidth=c.render.lineWidth||v,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};a.set=function(c,k,d){var h;typeof k=="string"&&(h=k,k={},k[h]=d);for(h in k)if(Object.prototype.hasOwnProperty.call(k,h))switch(d=k[h],h){case"isStatic":a.setStatic(c,d);break;case"isSleeping":l.set(c,d);break;case"mass":a.setMass(c,d);break;case"density":a.setDensity(c,d);break;case"inertia":a.setInertia(c,d);break;case"vertices":a.setVertices(c,d);break;case"position":a.setPosition(c,d);break;case"angle":a.setAngle(c,d);break;case"velocity":a.setVelocity(c,d);break;case"angularVelocity":a.setAngularVelocity(c,d);break;case"speed":a.setSpeed(c,d);break;case"angularSpeed":a.setAngularSpeed(c,d);break;case"parts":a.setParts(c,d);break;case"centre":a.setCentre(c,d);break;default:c[h]=d}},a.setStatic=function(c,k){for(var d=0;d<c.parts.length;d++){var h=c.parts[d];k?(h.isStatic||(h._original={restitution:h.restitution,friction:h.friction,mass:h.mass,inertia:h.inertia,density:h.density,inverseMass:h.inverseMass,inverseInertia:h.inverseInertia}),h.restitution=0,h.friction=1,h.mass=h.inertia=h.density=1/0,h.inverseMass=h.inverseInertia=0,h.positionPrev.x=h.position.x,h.positionPrev.y=h.position.y,h.anglePrev=h.angle,h.angularVelocity=0,h.speed=0,h.angularSpeed=0,h.motion=0):h._original&&(h.restitution=h._original.restitution,h.friction=h._original.friction,h.mass=h._original.mass,h.inertia=h._original.inertia,h.density=h._original.density,h.inverseMass=h._original.inverseMass,h.inverseInertia=h._original.inverseInertia,h._original=null),h.isStatic=k}},a.setMass=function(c,k){var d=c.inertia/(c.mass/6);c.inertia=d*(k/6),c.inverseInertia=1/c.inertia,c.mass=k,c.inverseMass=1/c.mass,c.density=c.mass/c.area},a.setDensity=function(c,k){a.setMass(c,k*c.area),c.density=k},a.setInertia=function(c,k){c.inertia=k,c.inverseInertia=1/c.inertia},a.setVertices=function(c,k){k[0].body===c?c.vertices=k:c.vertices=r.create(k,c),c.axes=f.fromVertices(c.vertices),c.area=r.area(c.vertices),a.setMass(c,c.density*c.area);var d=r.centre(c.vertices);r.translate(c.vertices,d,-1),a.setInertia(c,a._inertiaScale*r.inertia(c.vertices,c.mass)),r.translate(c.vertices,c.position),p.update(c.bounds,c.vertices,c.velocity)},a.setParts=function(c,k,d){var h;for(k=k.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,h=0;h<k.length;h++){var v=k[h];v!==c&&(v.parent=c,c.parts.push(v))}if(c.parts.length!==1){if(d=typeof d<"u"?d:!0,d){var b=[];for(h=0;h<k.length;h++)b=b.concat(k[h].vertices);r.clockwiseSort(b);var w=r.hull(b),S=r.centre(w);a.setVertices(c,w),r.translate(c.vertices,S)}var m=a._totalProperties(c);c.area=m.area,c.parent=c,c.position.x=m.centre.x,c.position.y=m.centre.y,c.positionPrev.x=m.centre.x,c.positionPrev.y=m.centre.y,a.setMass(c,m.mass),a.setInertia(c,m.inertia),a.setPosition(c,m.centre)}},a.setCentre=function(c,k,d){d?(c.positionPrev.x+=k.x,c.positionPrev.y+=k.y,c.position.x+=k.x,c.position.y+=k.y):(c.positionPrev.x=k.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=k.y-(c.position.y-c.positionPrev.y),c.position.x=k.x,c.position.y=k.y)},a.setPosition=function(c,k,d){var h=i.sub(k,c.position);d?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=h.x,c.velocity.y=h.y,c.speed=i.magnitude(h)):(c.positionPrev.x+=h.x,c.positionPrev.y+=h.y);for(var v=0;v<c.parts.length;v++){var b=c.parts[v];b.position.x+=h.x,b.position.y+=h.y,r.translate(b.vertices,h),p.update(b.bounds,b.vertices,c.velocity)}},a.setAngle=function(c,k,d){var h=k-c.angle;d?(c.anglePrev=c.angle,c.angularVelocity=h,c.angularSpeed=Math.abs(h)):c.anglePrev+=h;for(var v=0;v<c.parts.length;v++){var b=c.parts[v];b.angle+=h,r.rotate(b.vertices,h,c.position),f.rotate(b.axes,h),p.update(b.bounds,b.vertices,c.velocity),v>0&&i.rotateAbout(b.position,h,c.position,b.position)}},a.setVelocity=function(c,k){var d=c.deltaTime/a._baseDelta;c.positionPrev.x=c.position.x-k.x*d,c.positionPrev.y=c.position.y-k.y*d,c.velocity.x=(c.position.x-c.positionPrev.x)/d,c.velocity.y=(c.position.y-c.positionPrev.y)/d,c.speed=i.magnitude(c.velocity)},a.getVelocity=function(c){var k=a._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*k,y:(c.position.y-c.positionPrev.y)*k}},a.getSpeed=function(c){return i.magnitude(a.getVelocity(c))},a.setSpeed=function(c,k){a.setVelocity(c,i.mult(i.normalise(a.getVelocity(c)),k))},a.setAngularVelocity=function(c,k){var d=c.deltaTime/a._baseDelta;c.anglePrev=c.angle-k*d,c.angularVelocity=(c.angle-c.anglePrev)/d,c.angularSpeed=Math.abs(c.angularVelocity)},a.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*a._baseDelta/c.deltaTime},a.getAngularSpeed=function(c){return Math.abs(a.getAngularVelocity(c))},a.setAngularSpeed=function(c,k){a.setAngularVelocity(c,u.sign(a.getAngularVelocity(c))*k)},a.translate=function(c,k,d){a.setPosition(c,i.add(c.position,k),d)},a.rotate=function(c,k,d,h){if(!d)a.setAngle(c,c.angle+k,h);else{var v=Math.cos(k),b=Math.sin(k),w=c.position.x-d.x,S=c.position.y-d.y;a.setPosition(c,{x:d.x+(w*v-S*b),y:d.y+(w*b+S*v)},h),a.setAngle(c,c.angle+k,h)}},a.scale=function(c,k,d,h){var v=0,b=0;h=h||c.position;for(var w=0;w<c.parts.length;w++){var S=c.parts[w];r.scale(S.vertices,k,d,h),S.axes=f.fromVertices(S.vertices),S.area=r.area(S.vertices),a.setMass(S,c.density*S.area),r.translate(S.vertices,{x:-S.position.x,y:-S.position.y}),a.setInertia(S,a._inertiaScale*r.inertia(S.vertices,S.mass)),r.translate(S.vertices,{x:S.position.x,y:S.position.y}),w>0&&(v+=S.area,b+=S.inertia),S.position.x=h.x+(S.position.x-h.x)*k,S.position.y=h.y+(S.position.y-h.y)*d,p.update(S.bounds,S.vertices,c.velocity)}c.parts.length>1&&(c.area=v,c.isStatic||(a.setMass(c,c.density*v),a.setInertia(c,b))),c.circleRadius&&(k===d?c.circleRadius*=k:c.circleRadius=null)},a.update=function(c,k){k=(typeof k<"u"?k:1e3/60)*c.timeScale;var d=k*k,h=a._timeCorrection?k/(c.deltaTime||k):1,v=1-c.frictionAir*(k/u._baseDelta),b=(c.position.x-c.positionPrev.x)*h,w=(c.position.y-c.positionPrev.y)*h;c.velocity.x=b*v+c.force.x/c.mass*d,c.velocity.y=w*v+c.force.y/c.mass*d,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=k,c.angularVelocity=(c.angle-c.anglePrev)*v*h+c.torque/c.inertia*d,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var S=0;S<c.parts.length;S++){var m=c.parts[S];r.translate(m.vertices,c.velocity),S>0&&(m.position.x+=c.velocity.x,m.position.y+=c.velocity.y),c.angularVelocity!==0&&(r.rotate(m.vertices,c.angularVelocity,c.position),f.rotate(m.axes,c.angularVelocity),S>0&&i.rotateAbout(m.position,c.angularVelocity,c.position,m.position)),p.update(m.bounds,m.vertices,c.velocity)}},a.updateVelocities=function(c){var k=a._baseDelta/c.deltaTime,d=c.velocity;d.x=(c.position.x-c.positionPrev.x)*k,d.y=(c.position.y-c.positionPrev.y)*k,c.speed=Math.sqrt(d.x*d.x+d.y*d.y),c.angularVelocity=(c.angle-c.anglePrev)*k,c.angularSpeed=Math.abs(c.angularVelocity)},a.applyForce=function(c,k,d){var h={x:k.x-c.position.x,y:k.y-c.position.y};c.force.x+=d.x,c.force.y+=d.y,c.torque+=h.x*d.y-h.y*d.x},a._totalProperties=function(c){for(var k={mass:0,area:0,inertia:0,centre:{x:0,y:0}},d=c.parts.length===1?0:1;d<c.parts.length;d++){var h=c.parts[d],v=h.mass!==1/0?h.mass:1;k.mass+=v,k.area+=h.area,k.inertia+=h.inertia,k.centre=i.add(k.centre,i.mult(h.position,v))}return k.centre=i.div(k.centre,k.mass),k}})()},function(t,o,e){var a={};t.exports=a;var r=e(0);(function(){a.on=function(i,l,u){for(var p=l.split(" "),f,g=0;g<p.length;g++)f=p[g],i.events=i.events||{},i.events[f]=i.events[f]||[],i.events[f].push(u);return u},a.off=function(i,l,u){if(!l){i.events={};return}typeof l=="function"&&(u=l,l=r.keys(i.events).join(" "));for(var p=l.split(" "),f=0;f<p.length;f++){var g=i.events[p[f]],c=[];if(u&&g)for(var k=0;k<g.length;k++)g[k]!==u&&c.push(g[k]);i.events[p[f]]=c}},a.trigger=function(i,l,u){var p,f,g,c,k=i.events;if(k&&r.keys(k).length>0){u||(u={}),p=l.split(" ");for(var d=0;d<p.length;d++)if(f=p[d],g=k[f],g){c=r.clone(u,!1),c.name=f,c.source=i;for(var h=0;h<g.length;h++)g[h].apply(i,[c])}}}})()},function(t,o,e){var a={};t.exports=a;var r=e(5),i=e(0),l=e(1),u=e(4);(function(){a.create=function(p){return i.extend({id:i.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},p)},a.setModified=function(p,f,g,c){if(p.isModified=f,f&&p.cache&&(p.cache.allBodies=null,p.cache.allConstraints=null,p.cache.allComposites=null),g&&p.parent&&a.setModified(p.parent,f,g,c),c)for(var k=0;k<p.composites.length;k++){var d=p.composites[k];a.setModified(d,f,g,c)}},a.add=function(p,f){var g=[].concat(f);r.trigger(p,"beforeAdd",{object:f});for(var c=0;c<g.length;c++){var k=g[c];switch(k.type){case"body":if(k.parent!==k){i.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}a.addBody(p,k);break;case"constraint":a.addConstraint(p,k);break;case"composite":a.addComposite(p,k);break;case"mouseConstraint":a.addConstraint(p,k.constraint);break}}return r.trigger(p,"afterAdd",{object:f}),p},a.remove=function(p,f,g){var c=[].concat(f);r.trigger(p,"beforeRemove",{object:f});for(var k=0;k<c.length;k++){var d=c[k];switch(d.type){case"body":a.removeBody(p,d,g);break;case"constraint":a.removeConstraint(p,d,g);break;case"composite":a.removeComposite(p,d,g);break;case"mouseConstraint":a.removeConstraint(p,d.constraint);break}}return r.trigger(p,"afterRemove",{object:f}),p},a.addComposite=function(p,f){return p.composites.push(f),f.parent=p,a.setModified(p,!0,!0,!1),p},a.removeComposite=function(p,f,g){var c=i.indexOf(p.composites,f);if(c!==-1){var k=a.allBodies(f);a.removeCompositeAt(p,c);for(var d=0;d<k.length;d++)k[d].sleepCounter=0}if(g)for(var d=0;d<p.composites.length;d++)a.removeComposite(p.composites[d],f,!0);return p},a.removeCompositeAt=function(p,f){return p.composites.splice(f,1),a.setModified(p,!0,!0,!1),p},a.addBody=function(p,f){return p.bodies.push(f),a.setModified(p,!0,!0,!1),p},a.removeBody=function(p,f,g){var c=i.indexOf(p.bodies,f);if(c!==-1&&(a.removeBodyAt(p,c),f.sleepCounter=0),g)for(var k=0;k<p.composites.length;k++)a.removeBody(p.composites[k],f,!0);return p},a.removeBodyAt=function(p,f){return p.bodies.splice(f,1),a.setModified(p,!0,!0,!1),p},a.addConstraint=function(p,f){return p.constraints.push(f),a.setModified(p,!0,!0,!1),p},a.removeConstraint=function(p,f,g){var c=i.indexOf(p.constraints,f);if(c!==-1&&a.removeConstraintAt(p,c),g)for(var k=0;k<p.composites.length;k++)a.removeConstraint(p.composites[k],f,!0);return p},a.removeConstraintAt=function(p,f){return p.constraints.splice(f,1),a.setModified(p,!0,!0,!1),p},a.clear=function(p,f,g){if(g)for(var c=0;c<p.composites.length;c++)a.clear(p.composites[c],f,!0);return f?p.bodies=p.bodies.filter(function(k){return k.isStatic}):p.bodies.length=0,p.constraints.length=0,p.composites.length=0,a.setModified(p,!0,!0,!1),p},a.allBodies=function(p){if(p.cache&&p.cache.allBodies)return p.cache.allBodies;for(var f=[].concat(p.bodies),g=0;g<p.composites.length;g++)f=f.concat(a.allBodies(p.composites[g]));return p.cache&&(p.cache.allBodies=f),f},a.allConstraints=function(p){if(p.cache&&p.cache.allConstraints)return p.cache.allConstraints;for(var f=[].concat(p.constraints),g=0;g<p.composites.length;g++)f=f.concat(a.allConstraints(p.composites[g]));return p.cache&&(p.cache.allConstraints=f),f},a.allComposites=function(p){if(p.cache&&p.cache.allComposites)return p.cache.allComposites;for(var f=[].concat(p.composites),g=0;g<p.composites.length;g++)f=f.concat(a.allComposites(p.composites[g]));return p.cache&&(p.cache.allComposites=f),f},a.get=function(p,f,g){var c,k;switch(g){case"body":c=a.allBodies(p);break;case"constraint":c=a.allConstraints(p);break;case"composite":c=a.allComposites(p).concat(p);break}return c?(k=c.filter(function(d){return d.id.toString()===f.toString()}),k.length===0?null:k[0]):null},a.move=function(p,f,g){return a.remove(p,f),a.add(g,f),p},a.rebase=function(p){for(var f=a.allBodies(p).concat(a.allConstraints(p)).concat(a.allComposites(p)),g=0;g<f.length;g++)f[g].id=i.nextId();return p},a.translate=function(p,f,g){for(var c=g?a.allBodies(p):p.bodies,k=0;k<c.length;k++)u.translate(c[k],f);return p},a.rotate=function(p,f,g,c){for(var k=Math.cos(f),d=Math.sin(f),h=c?a.allBodies(p):p.bodies,v=0;v<h.length;v++){var b=h[v],w=b.position.x-g.x,S=b.position.y-g.y;u.setPosition(b,{x:g.x+(w*k-S*d),y:g.y+(w*d+S*k)}),u.rotate(b,f)}return p},a.scale=function(p,f,g,c,k){for(var d=k?a.allBodies(p):p.bodies,h=0;h<d.length;h++){var v=d[h],b=v.position.x-c.x,w=v.position.y-c.y;u.setPosition(v,{x:c.x+b*f,y:c.y+w*g}),u.scale(v,f,g)}return p},a.bounds=function(p){for(var f=a.allBodies(p),g=[],c=0;c<f.length;c+=1){var k=f[c];g.push(k.bounds.min,k.bounds.max)}return l.create(g)}})()},function(t,o,e){var a={};t.exports=a;var r=e(4),i=e(5),l=e(0);(function(){a._motionWakeThreshold=.18,a._motionSleepThreshold=.08,a._minBias=.9,a.update=function(u,p){for(var f=p/l._baseDelta,g=a._motionSleepThreshold,c=0;c<u.length;c++){var k=u[c],d=r.getSpeed(k),h=r.getAngularSpeed(k),v=d*d+h*h;if(k.force.x!==0||k.force.y!==0){a.set(k,!1);continue}var b=Math.min(k.motion,v),w=Math.max(k.motion,v);k.motion=a._minBias*b+(1-a._minBias)*w,k.sleepThreshold>0&&k.motion<g?(k.sleepCounter+=1,k.sleepCounter>=k.sleepThreshold/f&&a.set(k,!0)):k.sleepCounter>0&&(k.sleepCounter-=1)}},a.afterCollisions=function(u){for(var p=a._motionSleepThreshold,f=0;f<u.length;f++){var g=u[f];if(g.isActive){var c=g.collision,k=c.bodyA.parent,d=c.bodyB.parent;if(!(k.isSleeping&&d.isSleeping||k.isStatic||d.isStatic)&&(k.isSleeping||d.isSleeping)){var h=k.isSleeping&&!k.isStatic?k:d,v=h===k?d:k;!h.isStatic&&v.motion>p&&a.set(h,!1)}}}},a.set=function(u,p){var f=u.isSleeping;p?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,f||i.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,f&&i.trigger(u,"sleepEnd"))}})()},function(t,o,e){var a={};t.exports=a;var r=e(3),i=e(9);(function(){var l=[],u={overlap:0,axis:null},p={overlap:0,axis:null};a.create=function(f,g){return{pair:null,collided:!1,bodyA:f,bodyB:g,parentA:f.parent,parentB:g.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},a.collides=function(f,g,c){if(a._overlapAxes(u,f.vertices,g.vertices,f.axes),u.overlap<=0||(a._overlapAxes(p,g.vertices,f.vertices,g.axes),p.overlap<=0))return null;var k=c&&c.table[i.id(f,g)],d;k?d=k.collision:(d=a.create(f,g),d.collided=!0,d.bodyA=f.id<g.id?f:g,d.bodyB=f.id<g.id?g:f,d.parentA=d.bodyA.parent,d.parentB=d.bodyB.parent),f=d.bodyA,g=d.bodyB;var h;u.overlap<p.overlap?h=u:h=p;var v=d.normal,b=d.tangent,w=d.penetration,S=d.supports,m=h.overlap,y=h.axis,_=y.x,x=y.y,C=g.position.x-f.position.x,P=g.position.y-f.position.y;_*C+x*P>=0&&(_=-_,x=-x),v.x=_,v.y=x,b.x=-x,b.y=_,w.x=_*m,w.y=x*m,d.depth=m;var M=a._findSupports(f,g,v,1),T=0;if(r.contains(f.vertices,M[0])&&(S[T++]=M[0]),r.contains(f.vertices,M[1])&&(S[T++]=M[1]),T<2){var O=a._findSupports(g,f,v,-1);r.contains(g.vertices,O[0])&&(S[T++]=O[0]),T<2&&r.contains(g.vertices,O[1])&&(S[T++]=O[1])}return T===0&&(S[T++]=M[0]),d.supportCount=T,d},a._overlapAxes=function(f,g,c,k){var d=g.length,h=c.length,v=g[0].x,b=g[0].y,w=c[0].x,S=c[0].y,m=k.length,y=Number.MAX_VALUE,_=0,x,C,P,M,T,O;for(T=0;T<m;T++){var I=k[T],L=I.x,j=I.y,B=v*L+b*j,U=w*L+S*j,nn=B,rn=U;for(O=1;O<d;O+=1)M=g[O].x*L+g[O].y*j,M>nn?nn=M:M<B&&(B=M);for(O=1;O<h;O+=1)M=c[O].x*L+c[O].y*j,M>rn?rn=M:M<U&&(U=M);if(C=nn-U,P=rn-B,x=C<P?C:P,x<y&&(y=x,_=T,x<=0))break}f.axis=k[_],f.overlap=y},a._findSupports=function(f,g,c,k){var d=g.vertices,h=d.length,v=f.position.x,b=f.position.y,w=c.x*k,S=c.y*k,m=d[0],y=m,_=w*(v-y.x)+S*(b-y.y),x,C,P;for(P=1;P<h;P+=1)y=d[P],C=w*(v-y.x)+S*(b-y.y),C<_&&(_=C,m=y);return x=d[(h+m.index-1)%h],_=w*(v-x.x)+S*(b-x.y),y=d[(m.index+1)%h],w*(v-y.x)+S*(b-y.y)<_?(l[0]=m,l[1]=y,l):(l[0]=m,l[1]=x,l)}})()},function(t,o,e){var a={};t.exports=a;var r=e(16);(function(){a.create=function(i,l){var u=i.bodyA,p=i.bodyB,f={id:a.id(u,p),bodyA:u,bodyB:p,collision:i,contacts:[r.create(),r.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||p.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return a.update(f,i,l),f},a.update=function(i,l,u){var p=l.supports,f=l.supportCount,g=i.contacts,c=l.parentA,k=l.parentB;i.isActive=!0,i.timeUpdated=u,i.collision=l,i.separation=l.depth,i.inverseMass=c.inverseMass+k.inverseMass,i.friction=c.friction<k.friction?c.friction:k.friction,i.frictionStatic=c.frictionStatic>k.frictionStatic?c.frictionStatic:k.frictionStatic,i.restitution=c.restitution>k.restitution?c.restitution:k.restitution,i.slop=c.slop>k.slop?c.slop:k.slop,i.contactCount=f,l.pair=i;var d=p[0],h=g[0],v=p[1],b=g[1];(b.vertex===d||h.vertex===v)&&(g[1]=h,g[0]=h=b,b=g[1]),h.vertex=d,b.vertex=v},a.setActive=function(i,l,u){l?(i.isActive=!0,i.timeUpdated=u):(i.isActive=!1,i.contactCount=0)},a.id=function(i,l){return i.id<l.id?i.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+i.id.toString(36)}})()},function(t,o,e){var a={};t.exports=a;var r=e(3),i=e(2),l=e(7),u=e(1),p=e(11),f=e(0);(function(){a._warming=.4,a._torqueDampen=1,a._minLength=1e-6,a.create=function(g){var c=g;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var k=c.bodyA?i.add(c.bodyA.position,c.pointA):c.pointA,d=c.bodyB?i.add(c.bodyB.position,c.pointB):c.pointB,h=i.magnitude(i.sub(k,d));c.length=typeof c.length<"u"?c.length:h,c.id=c.id||f.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var v={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(v.type="pin",v.anchors=!1):c.stiffness<.9&&(v.type="spring"),c.render=f.extend(v,c.render),c},a.preSolveAll=function(g){for(var c=0;c<g.length;c+=1){var k=g[c],d=k.constraintImpulse;k.isStatic||d.x===0&&d.y===0&&d.angle===0||(k.position.x+=d.x,k.position.y+=d.y,k.angle+=d.angle)}},a.solveAll=function(g,c){for(var k=f.clamp(c/f._baseDelta,0,1),d=0;d<g.length;d+=1){var h=g[d],v=!h.bodyA||h.bodyA&&h.bodyA.isStatic,b=!h.bodyB||h.bodyB&&h.bodyB.isStatic;(v||b)&&a.solve(g[d],k)}for(d=0;d<g.length;d+=1)h=g[d],v=!h.bodyA||h.bodyA&&h.bodyA.isStatic,b=!h.bodyB||h.bodyB&&h.bodyB.isStatic,!v&&!b&&a.solve(g[d],k)},a.solve=function(g,c){var k=g.bodyA,d=g.bodyB,h=g.pointA,v=g.pointB;if(!(!k&&!d)){k&&!k.isStatic&&(i.rotate(h,k.angle-g.angleA,h),g.angleA=k.angle),d&&!d.isStatic&&(i.rotate(v,d.angle-g.angleB,v),g.angleB=d.angle);var b=h,w=v;if(k&&(b=i.add(k.position,h)),d&&(w=i.add(d.position,v)),!(!b||!w)){var S=i.sub(b,w),m=i.magnitude(S);m<a._minLength&&(m=a._minLength);var y=(m-g.length)/m,_=g.stiffness>=1||g.length===0,x=_?g.stiffness*c:g.stiffness*c*c,C=g.damping*c,P=i.mult(S,y*x),M=(k?k.inverseMass:0)+(d?d.inverseMass:0),T=(k?k.inverseInertia:0)+(d?d.inverseInertia:0),O=M+T,I,L,j,B,U;if(C>0){var nn=i.create();j=i.div(S,m),U=i.sub(d&&i.sub(d.position,d.positionPrev)||nn,k&&i.sub(k.position,k.positionPrev)||nn),B=i.dot(j,U)}k&&!k.isStatic&&(L=k.inverseMass/M,k.constraintImpulse.x-=P.x*L,k.constraintImpulse.y-=P.y*L,k.position.x-=P.x*L,k.position.y-=P.y*L,C>0&&(k.positionPrev.x-=C*j.x*B*L,k.positionPrev.y-=C*j.y*B*L),I=i.cross(h,P)/O*a._torqueDampen*k.inverseInertia*(1-g.angularStiffness),k.constraintImpulse.angle-=I,k.angle-=I),d&&!d.isStatic&&(L=d.inverseMass/M,d.constraintImpulse.x+=P.x*L,d.constraintImpulse.y+=P.y*L,d.position.x+=P.x*L,d.position.y+=P.y*L,C>0&&(d.positionPrev.x+=C*j.x*B*L,d.positionPrev.y+=C*j.y*B*L),I=i.cross(v,P)/O*a._torqueDampen*d.inverseInertia*(1-g.angularStiffness),d.constraintImpulse.angle+=I,d.angle+=I)}}},a.postSolveAll=function(g){for(var c=0;c<g.length;c++){var k=g[c],d=k.constraintImpulse;if(!(k.isStatic||d.x===0&&d.y===0&&d.angle===0)){l.set(k,!1);for(var h=0;h<k.parts.length;h++){var v=k.parts[h];r.translate(v.vertices,d),h>0&&(v.position.x+=d.x,v.position.y+=d.y),d.angle!==0&&(r.rotate(v.vertices,d.angle,k.position),p.rotate(v.axes,d.angle),h>0&&i.rotateAbout(v.position,d.angle,k.position,v.position)),u.update(v.bounds,v.vertices,k.velocity)}d.angle*=a._warming,d.x*=a._warming,d.y*=a._warming}}},a.pointAWorld=function(g){return{x:(g.bodyA?g.bodyA.position.x:0)+(g.pointA?g.pointA.x:0),y:(g.bodyA?g.bodyA.position.y:0)+(g.pointA?g.pointA.y:0)}},a.pointBWorld=function(g){return{x:(g.bodyB?g.bodyB.position.x:0)+(g.pointB?g.pointB.x:0),y:(g.bodyB?g.bodyB.position.y:0)+(g.pointB?g.pointB.y:0)}},a.currentLength=function(g){var c=(g.bodyA?g.bodyA.position.x:0)+(g.pointA?g.pointA.x:0),k=(g.bodyA?g.bodyA.position.y:0)+(g.pointA?g.pointA.y:0),d=(g.bodyB?g.bodyB.position.x:0)+(g.pointB?g.pointB.x:0),h=(g.bodyB?g.bodyB.position.y:0)+(g.pointB?g.pointB.y:0),v=c-d,b=k-h;return Math.sqrt(v*v+b*b)}})()},function(t,o,e){var a={};t.exports=a;var r=e(2),i=e(0);(function(){a.fromVertices=function(l){for(var u={},p=0;p<l.length;p++){var f=(p+1)%l.length,g=r.normalise({x:l[f].y-l[p].y,y:l[p].x-l[f].x}),c=g.y===0?1/0:g.x/g.y;c=c.toFixed(3).toString(),u[c]=g}return i.values(u)},a.rotate=function(l,u){if(u!==0)for(var p=Math.cos(u),f=Math.sin(u),g=0;g<l.length;g++){var c=l[g],k;k=c.x*p-c.y*f,c.y=c.x*f+c.y*p,c.x=k}}})()},function(t,o,e){var a={};t.exports=a;var r=e(3),i=e(0),l=e(4),u=e(1),p=e(2);(function(){a.rectangle=function(f,g,c,k,d){d=d||{};var h={label:"Rectangle Body",position:{x:f,y:g},vertices:r.fromPath("L 0 0 L "+c+" 0 L "+c+" "+k+" L 0 "+k)};if(d.chamfer){var v=d.chamfer;h.vertices=r.chamfer(h.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete d.chamfer}return l.create(i.extend({},h,d))},a.trapezoid=function(f,g,c,k,d,h){h=h||{},d>=1&&i.warn("Bodies.trapezoid: slope parameter must be < 1."),d*=.5;var v=(1-d*2)*c,b=c*d,w=b+v,S=w+b,m;d<.5?m="L 0 0 L "+b+" "+-k+" L "+w+" "+-k+" L "+S+" 0":m="L 0 0 L "+w+" "+-k+" L "+S+" 0";var y={label:"Trapezoid Body",position:{x:f,y:g},vertices:r.fromPath(m)};if(h.chamfer){var _=h.chamfer;y.vertices=r.chamfer(y.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete h.chamfer}return l.create(i.extend({},y,h))},a.circle=function(f,g,c,k,d){k=k||{};var h={label:"Circle Body",circleRadius:c};d=d||25;var v=Math.ceil(Math.max(10,Math.min(d,c)));return v%2===1&&(v+=1),a.polygon(f,g,v,c,i.extend({},h,k))},a.polygon=function(f,g,c,k,d){if(d=d||{},c<3)return a.circle(f,g,k,d);for(var h=2*Math.PI/c,v="",b=h*.5,w=0;w<c;w+=1){var S=b+w*h,m=Math.cos(S)*k,y=Math.sin(S)*k;v+="L "+m.toFixed(3)+" "+y.toFixed(3)+" "}var _={label:"Polygon Body",position:{x:f,y:g},vertices:r.fromPath(v)};if(d.chamfer){var x=d.chamfer;_.vertices=r.chamfer(_.vertices,x.radius,x.quality,x.qualityMin,x.qualityMax),delete d.chamfer}return l.create(i.extend({},_,d))},a.fromVertices=function(f,g,c,k,d,h,v,b){var w=i.getDecomp(),S,m,y,_,x,C,P,M,T,O,I;for(S=!!(w&&w.quickDecomp),k=k||{},y=[],d=typeof d<"u"?d:!1,h=typeof h<"u"?h:.01,v=typeof v<"u"?v:10,b=typeof b<"u"?b:.01,i.isArray(c[0])||(c=[c]),O=0;O<c.length;O+=1)if(C=c[O],_=r.isConvex(C),x=!_,x&&!S&&i.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),_||!S)_?C=r.clockwiseSort(C):C=r.hull(C),y.push({position:{x:f,y:g},vertices:C});else{var L=C.map(function(J){return[J.x,J.y]});w.makeCCW(L),h!==!1&&w.removeCollinearPoints(L,h),b!==!1&&w.removeDuplicatePoints&&w.removeDuplicatePoints(L,b);var j=w.quickDecomp(L);for(P=0;P<j.length;P++){var B=j[P],U=B.map(function(J){return{x:J[0],y:J[1]}});v>0&&r.area(U)<v||y.push({position:r.centre(U),vertices:U})}}for(P=0;P<y.length;P++)y[P]=l.create(i.extend(y[P],k));if(d){var nn=5;for(P=0;P<y.length;P++){var rn=y[P];for(M=P+1;M<y.length;M++){var pn=y[M];if(u.overlaps(rn.bounds,pn.bounds)){var en=rn.vertices,un=pn.vertices;for(T=0;T<rn.vertices.length;T++)for(I=0;I<pn.vertices.length;I++){var cn=p.magnitudeSquared(p.sub(en[(T+1)%en.length],un[I])),dn=p.magnitudeSquared(p.sub(en[T],un[(I+1)%un.length]));cn<nn&&dn<nn&&(en[T].isInternal=!0,un[I].isInternal=!0)}}}}}return y.length>1?(m=l.create(i.extend({parts:y.slice(0)},k)),l.setPosition(m,{x:f,y:g}),m):y[0]}})()},function(t,o,e){var a={};t.exports=a;var r=e(0),i=e(8);(function(){a.create=function(l){var u={bodies:[],collisions:[],pairs:null};return r.extend(u,l)},a.setBodies=function(l,u){l.bodies=u.slice(0)},a.clear=function(l){l.bodies=[],l.collisions=[]},a.collisions=function(l){var u=l.pairs,p=l.bodies,f=p.length,g=a.canCollide,c=i.collides,k=l.collisions,d=0,h,v;for(p.sort(a._compareBoundsX),h=0;h<f;h++){var b=p[h],w=b.bounds,S=b.bounds.max.x,m=b.bounds.max.y,y=b.bounds.min.y,_=b.isStatic||b.isSleeping,x=b.parts.length,C=x===1;for(v=h+1;v<f;v++){var P=p[v],M=P.bounds;if(M.min.x>S)break;if(!(m<M.min.y||y>M.max.y)&&!(_&&(P.isStatic||P.isSleeping))&&g(b.collisionFilter,P.collisionFilter)){var T=P.parts.length;if(C&&T===1){var O=c(b,P,u);O&&(k[d++]=O)}else for(var I=x>1?1:0,L=T>1?1:0,j=I;j<x;j++)for(var B=b.parts[j],w=B.bounds,U=L;U<T;U++){var nn=P.parts[U],M=nn.bounds;if(!(w.min.x>M.max.x||w.max.x<M.min.x||w.max.y<M.min.y||w.min.y>M.max.y)){var O=c(B,nn,u);O&&(k[d++]=O)}}}}}return k.length!==d&&(k.length=d),k},a.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},a._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()},function(t,o,e){var a={};t.exports=a;var r=e(0);(function(){a.create=function(i){var l={};return i||r.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=i||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var p=a._getRelativeMousePosition(u,l.element,l.pixelRatio),f=u.changedTouches;f&&(l.button=0,u.preventDefault()),l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var p=a._getRelativeMousePosition(u,l.element,l.pixelRatio),f=u.changedTouches;f?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var p=a._getRelativeMousePosition(u,l.element,l.pixelRatio),f=u.changedTouches;f&&u.preventDefault(),l.button=-1,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),l.sourceEvents.mousewheel=u},a.setElement(l,l.element),l},a.setElement=function(i,l){i.element=l,l.addEventListener("mousemove",i.mousemove,{passive:!0}),l.addEventListener("mousedown",i.mousedown,{passive:!0}),l.addEventListener("mouseup",i.mouseup,{passive:!0}),l.addEventListener("wheel",i.mousewheel,{passive:!1}),l.addEventListener("touchmove",i.mousemove,{passive:!1}),l.addEventListener("touchstart",i.mousedown,{passive:!1}),l.addEventListener("touchend",i.mouseup,{passive:!1})},a.clearSourceEvents=function(i){i.sourceEvents.mousemove=null,i.sourceEvents.mousedown=null,i.sourceEvents.mouseup=null,i.sourceEvents.mousewheel=null,i.wheelDelta=0},a.setOffset=function(i,l){i.offset.x=l.x,i.offset.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},a.setScale=function(i,l){i.scale.x=l.x,i.scale.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},a._getRelativeMousePosition=function(i,l,u){var p=l.getBoundingClientRect(),f=document.documentElement||document.body.parentNode||document.body,g=window.pageXOffset!==void 0?window.pageXOffset:f.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:f.scrollTop,k=i.changedTouches,d,h;return k?(d=k[0].pageX-p.left-g,h=k[0].pageY-p.top-c):(d=i.pageX-p.left-g,h=i.pageY-p.top-c),{x:d/(l.clientWidth/(l.width||l.clientWidth)*u),y:h/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()},function(t,o,e){var a={};t.exports=a;var r=e(0);(function(){a._registry={},a.register=function(i){if(a.isPlugin(i)||r.warn("Plugin.register:",a.toString(i),"does not implement all required fields."),i.name in a._registry){var l=a._registry[i.name],u=a.versionParse(i.version).number,p=a.versionParse(l.version).number;u>p?(r.warn("Plugin.register:",a.toString(l),"was upgraded to",a.toString(i)),a._registry[i.name]=i):u<p?r.warn("Plugin.register:",a.toString(l),"can not be downgraded to",a.toString(i)):i!==l&&r.warn("Plugin.register:",a.toString(i),"is already registered to different plugin object")}else a._registry[i.name]=i;return i},a.resolve=function(i){return a._registry[a.dependencyParse(i).name]},a.toString=function(i){return typeof i=="string"?i:(i.name||"anonymous")+"@"+(i.version||i.range||"0.0.0")},a.isPlugin=function(i){return i&&i.name&&i.version&&i.install},a.isUsed=function(i,l){return i.used.indexOf(l)>-1},a.isFor=function(i,l){var u=i.for&&a.dependencyParse(i.for);return!i.for||l.name===u.name&&a.versionSatisfies(l.version,u.range)},a.use=function(i,l){if(i.uses=(i.uses||[]).concat(l||[]),i.uses.length===0){r.warn("Plugin.use:",a.toString(i),"does not specify any dependencies to install.");return}for(var u=a.dependencies(i),p=r.topologicalSort(u),f=[],g=0;g<p.length;g+=1)if(p[g]!==i.name){var c=a.resolve(p[g]);if(!c){f.push("❌ "+p[g]);continue}a.isUsed(i,c.name)||(a.isFor(c,i)||(r.warn("Plugin.use:",a.toString(c),"is for",c.for,"but installed on",a.toString(i)+"."),c._warned=!0),c.install?c.install(i):(r.warn("Plugin.use:",a.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(f.push("🔶 "+a.toString(c)),delete c._warned):f.push("✅ "+a.toString(c)),i.used.push(c.name))}f.length>0&&r.info(f.join("  "))},a.dependencies=function(i,l){var u=a.dependencyParse(i),p=u.name;if(l=l||{},!(p in l)){i=a.resolve(i)||i,l[p]=r.map(i.uses||[],function(g){a.isPlugin(g)&&a.register(g);var c=a.dependencyParse(g),k=a.resolve(g);return k&&!a.versionSatisfies(k.version,c.range)?(r.warn("Plugin.dependencies:",a.toString(k),"does not satisfy",a.toString(c),"used by",a.toString(u)+"."),k._warned=!0,i._warned=!0):k||(r.warn("Plugin.dependencies:",a.toString(g),"used by",a.toString(u),"could not be resolved."),i._warned=!0),c.name});for(var f=0;f<l[p].length;f+=1)a.dependencies(l[p][f],l);return l}},a.dependencyParse=function(i){if(r.isString(i)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(i)||r.warn("Plugin.dependencyParse:",i,"is not a valid dependency string."),{name:i.split("@")[0],range:i.split("@")[1]||"*"}}return{name:i.name,range:i.range||i.version}},a.versionParse=function(i){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(i)||r.warn("Plugin.versionParse:",i,"is not a valid version or range.");var u=l.exec(i),p=Number(u[4]),f=Number(u[5]),g=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:i,operator:u[1]||u[2]||"",major:p,minor:f,patch:g,parts:[p,f,g],prerelease:u[7],number:p*1e8+f*1e4+g}},a.versionSatisfies=function(i,l){l=l||"*";var u=a.versionParse(l),p=a.versionParse(i);if(u.isRange){if(u.operator==="*"||i==="*")return!0;if(u.operator===">")return p.number>u.number;if(u.operator===">=")return p.number>=u.number;if(u.operator==="~")return p.major===u.major&&p.minor===u.minor&&p.patch>=u.patch;if(u.operator==="^")return u.major>0?p.major===u.major&&p.number>=u.number:u.minor>0?p.minor===u.minor&&p.patch>=u.patch:p.patch===u.patch}return i===l||i==="*"}})()},function(t,o){var e={};t.exports=e,function(){e.create=function(a){return{vertex:a,normalImpulse:0,tangentImpulse:0}}}()},function(t,o,e){var a={};t.exports=a;var r=e(7),i=e(18),l=e(13),u=e(19),p=e(5),f=e(6),g=e(10),c=e(0),k=e(4);(function(){a._deltaMax=1e3/60,a.create=function(d){d=d||{};var h={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},v=c.extend(h,d);return v.world=d.world||f.create({label:"World"}),v.pairs=d.pairs||u.create(),v.detector=d.detector||l.create(),v.detector.pairs=v.pairs,v.grid={buckets:[]},v.world.gravity=v.gravity,v.broadphase=v.grid,v.metrics={},v},a.update=function(d,h){var v=c.now(),b=d.world,w=d.detector,S=d.pairs,m=d.timing,y=m.timestamp,_;h>a._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",a._deltaMax.toFixed(3),"ms."),h=typeof h<"u"?h:c._baseDelta,h*=m.timeScale,m.timestamp+=h,m.lastDelta=h;var x={timestamp:m.timestamp,delta:h};p.trigger(d,"beforeUpdate",x);var C=f.allBodies(b),P=f.allConstraints(b);for(b.isModified&&(l.setBodies(w,C),f.setModified(b,!1,!1,!0)),d.enableSleeping&&r.update(C,h),a._bodiesApplyGravity(C,d.gravity),h>0&&a._bodiesUpdate(C,h),p.trigger(d,"beforeSolve",x),g.preSolveAll(C),_=0;_<d.constraintIterations;_++)g.solveAll(P,h);g.postSolveAll(C);var M=l.collisions(w);u.update(S,M,y),d.enableSleeping&&r.afterCollisions(S.list),S.collisionStart.length>0&&p.trigger(d,"collisionStart",{pairs:S.collisionStart,timestamp:m.timestamp,delta:h});var T=c.clamp(20/d.positionIterations,0,1);for(i.preSolvePosition(S.list),_=0;_<d.positionIterations;_++)i.solvePosition(S.list,h,T);for(i.postSolvePosition(C),g.preSolveAll(C),_=0;_<d.constraintIterations;_++)g.solveAll(P,h);for(g.postSolveAll(C),i.preSolveVelocity(S.list),_=0;_<d.velocityIterations;_++)i.solveVelocity(S.list,h);return a._bodiesUpdateVelocities(C),S.collisionActive.length>0&&p.trigger(d,"collisionActive",{pairs:S.collisionActive,timestamp:m.timestamp,delta:h}),S.collisionEnd.length>0&&p.trigger(d,"collisionEnd",{pairs:S.collisionEnd,timestamp:m.timestamp,delta:h}),a._bodiesClearForces(C),p.trigger(d,"afterUpdate",x),d.timing.lastElapsed=c.now()-v,d},a.merge=function(d,h){if(c.extend(d,h),h.world){d.world=h.world,a.clear(d);for(var v=f.allBodies(d.world),b=0;b<v.length;b++){var w=v[b];r.set(w,!1),w.id=c.nextId()}}},a.clear=function(d){u.clear(d.pairs),l.clear(d.detector)},a._bodiesClearForces=function(d){for(var h=d.length,v=0;v<h;v++){var b=d[v];b.force.x=0,b.force.y=0,b.torque=0}},a._bodiesApplyGravity=function(d,h){var v=typeof h.scale<"u"?h.scale:.001,b=d.length;if(!(h.x===0&&h.y===0||v===0))for(var w=0;w<b;w++){var S=d[w];S.isStatic||S.isSleeping||(S.force.y+=S.mass*h.y*v,S.force.x+=S.mass*h.x*v)}},a._bodiesUpdate=function(d,h){for(var v=d.length,b=0;b<v;b++){var w=d[b];w.isStatic||w.isSleeping||k.update(w,h)}},a._bodiesUpdateVelocities=function(d){for(var h=d.length,v=0;v<h;v++)k.updateVelocities(d[v])}})()},function(t,o,e){var a={};t.exports=a;var r=e(3),i=e(0),l=e(1);(function(){a._restingThresh=2,a._restingThreshTangent=Math.sqrt(6),a._positionDampen=.9,a._positionWarming=.8,a._frictionNormalMultiplier=5,a._frictionMaxStatic=Number.MAX_VALUE,a.preSolvePosition=function(u){var p,f,g,c=u.length;for(p=0;p<c;p++)f=u[p],f.isActive&&(g=f.contactCount,f.collision.parentA.totalContacts+=g,f.collision.parentB.totalContacts+=g)},a.solvePosition=function(u,p,f){var g,c,k,d,h,v,b,w,S=a._positionDampen*(f||1),m=i.clamp(p/i._baseDelta,0,1),y=u.length;for(g=0;g<y;g++)c=u[g],!(!c.isActive||c.isSensor)&&(k=c.collision,d=k.parentA,h=k.parentB,v=k.normal,c.separation=k.depth+v.x*(h.positionImpulse.x-d.positionImpulse.x)+v.y*(h.positionImpulse.y-d.positionImpulse.y));for(g=0;g<y;g++)c=u[g],!(!c.isActive||c.isSensor)&&(k=c.collision,d=k.parentA,h=k.parentB,v=k.normal,w=c.separation-c.slop*m,(d.isStatic||h.isStatic)&&(w*=2),d.isStatic||d.isSleeping||(b=S/d.totalContacts,d.positionImpulse.x+=v.x*w*b,d.positionImpulse.y+=v.y*w*b),h.isStatic||h.isSleeping||(b=S/h.totalContacts,h.positionImpulse.x-=v.x*w*b,h.positionImpulse.y-=v.y*w*b))},a.postSolvePosition=function(u){for(var p=a._positionWarming,f=u.length,g=r.translate,c=l.update,k=0;k<f;k++){var d=u[k],h=d.positionImpulse,v=h.x,b=h.y,w=d.velocity;if(d.totalContacts=0,v!==0||b!==0){for(var S=0;S<d.parts.length;S++){var m=d.parts[S];g(m.vertices,h),c(m.bounds,m.vertices,w),m.position.x+=v,m.position.y+=b}d.positionPrev.x+=v,d.positionPrev.y+=b,v*w.x+b*w.y<0?(h.x=0,h.y=0):(h.x*=p,h.y*=p)}}},a.preSolveVelocity=function(u){var p=u.length,f,g;for(f=0;f<p;f++){var c=u[f];if(!(!c.isActive||c.isSensor)){var k=c.contacts,d=c.contactCount,h=c.collision,v=h.parentA,b=h.parentB,w=h.normal,S=h.tangent;for(g=0;g<d;g++){var m=k[g],y=m.vertex,_=m.normalImpulse,x=m.tangentImpulse;if(_!==0||x!==0){var C=w.x*_+S.x*x,P=w.y*_+S.y*x;v.isStatic||v.isSleeping||(v.positionPrev.x+=C*v.inverseMass,v.positionPrev.y+=P*v.inverseMass,v.anglePrev+=v.inverseInertia*((y.x-v.position.x)*P-(y.y-v.position.y)*C)),b.isStatic||b.isSleeping||(b.positionPrev.x-=C*b.inverseMass,b.positionPrev.y-=P*b.inverseMass,b.anglePrev-=b.inverseInertia*((y.x-b.position.x)*P-(y.y-b.position.y)*C))}}}}},a.solveVelocity=function(u,p){var f=p/i._baseDelta,g=f*f,c=g*f,k=-a._restingThresh*f,d=a._restingThreshTangent,h=a._frictionNormalMultiplier*f,v=a._frictionMaxStatic,b=u.length,w,S,m,y;for(m=0;m<b;m++){var _=u[m];if(!(!_.isActive||_.isSensor)){var x=_.collision,C=x.parentA,P=x.parentB,M=x.normal.x,T=x.normal.y,O=x.tangent.x,I=x.tangent.y,L=_.inverseMass,j=_.friction*_.frictionStatic*h,B=_.contacts,U=_.contactCount,nn=1/U,rn=C.position.x-C.positionPrev.x,pn=C.position.y-C.positionPrev.y,en=C.angle-C.anglePrev,un=P.position.x-P.positionPrev.x,cn=P.position.y-P.positionPrev.y,dn=P.angle-P.anglePrev;for(y=0;y<U;y++){var J=B[y],q=J.vertex,V=q.x-C.position.x,z=q.y-C.position.y,G=q.x-P.position.x,an=q.y-P.position.y,A=rn-z*en,R=pn+V*en,E=un-an*dn,D=cn+G*dn,F=A-E,H=R-D,K=M*F+T*H,W=O*F+I*H,Y=_.separation+K,N=Math.min(Y,1);N=Y<0?0:N;var Z=N*j;W<-Z||W>Z?(S=W>0?W:-W,w=_.friction*(W>0?1:-1)*c,w<-S?w=-S:w>S&&(w=S)):(w=W,S=v);var X=V*T-z*M,Q=G*T-an*M,tn=nn/(L+C.inverseInertia*X*X+P.inverseInertia*Q*Q),ln=(1+_.restitution)*K*tn;if(w*=tn,K<k)J.normalImpulse=0;else{var bn=J.normalImpulse;J.normalImpulse+=ln,J.normalImpulse>0&&(J.normalImpulse=0),ln=J.normalImpulse-bn}if(W<-d||W>d)J.tangentImpulse=0;else{var kn=J.tangentImpulse;J.tangentImpulse+=w,J.tangentImpulse<-S&&(J.tangentImpulse=-S),J.tangentImpulse>S&&(J.tangentImpulse=S),w=J.tangentImpulse-kn}var Ln=M*ln+O*w,Dn=T*ln+I*w;C.isStatic||C.isSleeping||(C.positionPrev.x+=Ln*C.inverseMass,C.positionPrev.y+=Dn*C.inverseMass,C.anglePrev+=(V*Dn-z*Ln)*C.inverseInertia),P.isStatic||P.isSleeping||(P.positionPrev.x-=Ln*P.inverseMass,P.positionPrev.y-=Dn*P.inverseMass,P.anglePrev-=(G*Dn-an*Ln)*P.inverseInertia)}}}}})()},function(t,o,e){var a={};t.exports=a;var r=e(9),i=e(0);(function(){a.create=function(l){return i.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},a.update=function(l,u,p){var f=r.update,g=r.create,c=r.setActive,k=l.table,d=l.list,h=d.length,v=h,b=l.collisionStart,w=l.collisionEnd,S=l.collisionActive,m=u.length,y=0,_=0,x=0,C,P,M;for(M=0;M<m;M++)C=u[M],P=C.pair,P?(P.isActive&&(S[x++]=P),f(P,C,p)):(P=g(C,p),k[P.id]=P,b[y++]=P,d[v++]=P);for(v=0,h=d.length,M=0;M<h;M++)P=d[M],P.timeUpdated>=p?d[v++]=P:(c(P,!1,p),P.collision.bodyA.sleepCounter>0&&P.collision.bodyB.sleepCounter>0?d[v++]=P:(w[_++]=P,delete k[P.id]));d.length!==v&&(d.length=v),b.length!==y&&(b.length=y),w.length!==_&&(w.length=_),S.length!==x&&(S.length=x)},a.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(t,o,e){var a=t.exports=e(21);a.Axes=e(11),a.Bodies=e(12),a.Body=e(4),a.Bounds=e(1),a.Collision=e(8),a.Common=e(0),a.Composite=e(6),a.Composites=e(22),a.Constraint=e(10),a.Contact=e(16),a.Detector=e(13),a.Engine=e(17),a.Events=e(5),a.Grid=e(23),a.Mouse=e(14),a.MouseConstraint=e(24),a.Pair=e(9),a.Pairs=e(19),a.Plugin=e(15),a.Query=e(25),a.Render=e(26),a.Resolver=e(18),a.Runner=e(27),a.SAT=e(28),a.Sleeping=e(7),a.Svg=e(29),a.Vector=e(2),a.Vertices=e(3),a.World=e(30),a.Engine.run=a.Runner.run,a.Common.deprecated(a.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(t,o,e){var a={};t.exports=a;var r=e(15),i=e(0);(function(){a.name="matter-js",a.version="0.20.0",a.uses=[],a.used=[],a.use=function(){r.use(a,Array.prototype.slice.call(arguments))},a.before=function(l,u){return l=l.replace(/^Matter./,""),i.chainPathBefore(a,l,u)},a.after=function(l,u){return l=l.replace(/^Matter./,""),i.chainPathAfter(a,l,u)}})()},function(t,o,e){var a={};t.exports=a;var r=e(6),i=e(10),l=e(0),u=e(4),p=e(12),f=l.deprecated;(function(){a.stack=function(g,c,k,d,h,v,b){for(var w=r.create({label:"Stack"}),S=g,m=c,y,_=0,x=0;x<d;x++){for(var C=0,P=0;P<k;P++){var M=b(S,m,P,x,y,_);if(M){var T=M.bounds.max.y-M.bounds.min.y,O=M.bounds.max.x-M.bounds.min.x;T>C&&(C=T),u.translate(M,{x:O*.5,y:T*.5}),S=M.bounds.max.x+h,r.addBody(w,M),y=M,_+=1}else S+=h}m+=C+v,S=g}return w},a.chain=function(g,c,k,d,h,v){for(var b=g.bodies,w=1;w<b.length;w++){var S=b[w-1],m=b[w],y=S.bounds.max.y-S.bounds.min.y,_=S.bounds.max.x-S.bounds.min.x,x=m.bounds.max.y-m.bounds.min.y,C=m.bounds.max.x-m.bounds.min.x,P={bodyA:S,pointA:{x:_*c,y:y*k},bodyB:m,pointB:{x:C*d,y:x*h}},M=l.extend(P,v);r.addConstraint(g,i.create(M))}return g.label+=" Chain",g},a.mesh=function(g,c,k,d,h){var v=g.bodies,b,w,S,m,y;for(b=0;b<k;b++){for(w=1;w<c;w++)S=v[w-1+b*c],m=v[w+b*c],r.addConstraint(g,i.create(l.extend({bodyA:S,bodyB:m},h)));if(b>0)for(w=0;w<c;w++)S=v[w+(b-1)*c],m=v[w+b*c],r.addConstraint(g,i.create(l.extend({bodyA:S,bodyB:m},h))),d&&w>0&&(y=v[w-1+(b-1)*c],r.addConstraint(g,i.create(l.extend({bodyA:y,bodyB:m},h)))),d&&w<c-1&&(y=v[w+1+(b-1)*c],r.addConstraint(g,i.create(l.extend({bodyA:y,bodyB:m},h))))}return g.label+=" Mesh",g},a.pyramid=function(g,c,k,d,h,v,b){return a.stack(g,c,k,d,h,v,function(w,S,m,y,_,x){var C=Math.min(d,Math.ceil(k/2)),P=_?_.bounds.max.x-_.bounds.min.x:0;if(!(y>C)){y=C-y;var M=y,T=k-1-y;if(!(m<M||m>T)){x===1&&u.translate(_,{x:(m+(k%2===1?1:-1))*P,y:0});var O=_?m*P:0;return b(g+O+m*h,S,m,y,_,x)}}})},a.newtonsCradle=function(g,c,k,d,h){for(var v=r.create({label:"Newtons Cradle"}),b=0;b<k;b++){var w=1.9,S=p.circle(g+b*(d*w),c+h,d,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),m=i.create({pointA:{x:g+b*(d*w),y:c},bodyB:S});r.addBody(v,S),r.addConstraint(v,m)}return v},f(a,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),a.car=function(g,c,k,d,h){var v=u.nextGroup(!0),b=20,w=-k*.5+b,S=k*.5-b,m=0,y=r.create({label:"Car"}),_=p.rectangle(g,c,k,d,{collisionFilter:{group:v},chamfer:{radius:d*.5},density:2e-4}),x=p.circle(g+w,c+m,h,{collisionFilter:{group:v},friction:.8}),C=p.circle(g+S,c+m,h,{collisionFilter:{group:v},friction:.8}),P=i.create({bodyB:_,pointB:{x:w,y:m},bodyA:x,stiffness:1,length:0}),M=i.create({bodyB:_,pointB:{x:S,y:m},bodyA:C,stiffness:1,length:0});return r.addBody(y,_),r.addBody(y,x),r.addBody(y,C),r.addConstraint(y,P),r.addConstraint(y,M),y},f(a,"car","Composites.car ➤ moved to car example"),a.softBody=function(g,c,k,d,h,v,b,w,S,m){S=l.extend({inertia:1/0},S),m=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},m);var y=a.stack(g,c,k,d,h,v,function(_,x){return p.circle(_,x,w,S)});return a.mesh(y,k,d,b,m),y.label="Soft Body",y},f(a,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(t,o,e){var a={};t.exports=a;var r=e(9),i=e(0),l=i.deprecated;(function(){a.create=function(u){var p={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return i.extend(p,u)},a.update=function(u,p,f,g){var c,k,d,h=f.world,v=u.buckets,b,w,S=!1;for(c=0;c<p.length;c++){var m=p[c];if(!(m.isSleeping&&!g)&&!(h.bounds&&(m.bounds.max.x<h.bounds.min.x||m.bounds.min.x>h.bounds.max.x||m.bounds.max.y<h.bounds.min.y||m.bounds.min.y>h.bounds.max.y))){var y=a._getRegion(u,m);if(!m.region||y.id!==m.region.id||g){(!m.region||g)&&(m.region=y);var _=a._regionUnion(y,m.region);for(k=_.startCol;k<=_.endCol;k++)for(d=_.startRow;d<=_.endRow;d++){w=a._getBucketId(k,d),b=v[w];var x=k>=y.startCol&&k<=y.endCol&&d>=y.startRow&&d<=y.endRow,C=k>=m.region.startCol&&k<=m.region.endCol&&d>=m.region.startRow&&d<=m.region.endRow;!x&&C&&C&&b&&a._bucketRemoveBody(u,b,m),(m.region===y||x&&!C||g)&&(b||(b=a._createBucket(v,w)),a._bucketAddBody(u,b,m))}m.region=y,S=!0}}}S&&(u.pairsList=a._createActivePairsList(u))},l(a,"update","Grid.update ➤ replaced by Matter.Detector"),a.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(a,"clear","Grid.clear ➤ replaced by Matter.Detector"),a._regionUnion=function(u,p){var f=Math.min(u.startCol,p.startCol),g=Math.max(u.endCol,p.endCol),c=Math.min(u.startRow,p.startRow),k=Math.max(u.endRow,p.endRow);return a._createRegion(f,g,c,k)},a._getRegion=function(u,p){var f=p.bounds,g=Math.floor(f.min.x/u.bucketWidth),c=Math.floor(f.max.x/u.bucketWidth),k=Math.floor(f.min.y/u.bucketHeight),d=Math.floor(f.max.y/u.bucketHeight);return a._createRegion(g,c,k,d)},a._createRegion=function(u,p,f,g){return{id:u+","+p+","+f+","+g,startCol:u,endCol:p,startRow:f,endRow:g}},a._getBucketId=function(u,p){return"C"+u+"R"+p},a._createBucket=function(u,p){var f=u[p]=[];return f},a._bucketAddBody=function(u,p,f){var g=u.pairs,c=r.id,k=p.length,d;for(d=0;d<k;d++){var h=p[d];if(!(f.id===h.id||f.isStatic&&h.isStatic)){var v=c(f,h),b=g[v];b?b[2]+=1:g[v]=[f,h,1]}}p.push(f)},a._bucketRemoveBody=function(u,p,f){var g=u.pairs,c=r.id,k;p.splice(i.indexOf(p,f),1);var d=p.length;for(k=0;k<d;k++){var h=g[c(f,p[k])];h&&(h[2]-=1)}},a._createActivePairsList=function(u){var p,f=u.pairs,g=i.keys(f),c=g.length,k=[],d;for(d=0;d<c;d++)p=f[g[d]],p[2]>0?k.push(p):delete f[g[d]];return k}})()},function(t,o,e){var a={};t.exports=a;var r=e(3),i=e(7),l=e(14),u=e(5),p=e(13),f=e(10),g=e(6),c=e(0),k=e(1);(function(){a.create=function(d,h){var v=(d?d.mouse:null)||(h?h.mouse:null);v||(d&&d.render&&d.render.canvas?v=l.create(d.render.canvas):h&&h.element?v=l.create(h.element):(v=l.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var b=f.create({label:"Mouse Constraint",pointA:v.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),w={type:"mouseConstraint",mouse:v,element:null,body:null,constraint:b,collisionFilter:{category:1,mask:4294967295,group:0}},S=c.extend(w,h);return u.on(d,"beforeUpdate",function(){var m=g.allBodies(d.world);a.update(S,m),a._triggerEvents(S)}),S},a.update=function(d,h){var v=d.mouse,b=d.constraint,w=d.body;if(v.button===0){if(b.bodyB)i.set(b.bodyB,!1),b.pointA=v.position;else for(var S=0;S<h.length;S++)if(w=h[S],k.contains(w.bounds,v.position)&&p.canCollide(w.collisionFilter,d.collisionFilter))for(var m=w.parts.length>1?1:0;m<w.parts.length;m++){var y=w.parts[m];if(r.contains(y.vertices,v.position)){b.pointA=v.position,b.bodyB=d.body=w,b.pointB={x:v.position.x-w.position.x,y:v.position.y-w.position.y},b.angleB=w.angle,i.set(w,!1),u.trigger(d,"startdrag",{mouse:v,body:w});break}}}else b.bodyB=d.body=null,b.pointB=null,w&&u.trigger(d,"enddrag",{mouse:v,body:w})},a._triggerEvents=function(d){var h=d.mouse,v=h.sourceEvents;v.mousemove&&u.trigger(d,"mousemove",{mouse:h}),v.mousedown&&u.trigger(d,"mousedown",{mouse:h}),v.mouseup&&u.trigger(d,"mouseup",{mouse:h}),l.clearSourceEvents(h)}})()},function(t,o,e){var a={};t.exports=a;var r=e(2),i=e(8),l=e(1),u=e(12),p=e(3);(function(){a.collides=function(f,g){for(var c=[],k=g.length,d=f.bounds,h=i.collides,v=l.overlaps,b=0;b<k;b++){var w=g[b],S=w.parts.length,m=S===1?0:1;if(v(w.bounds,d))for(var y=m;y<S;y++){var _=w.parts[y];if(v(_.bounds,d)){var x=h(_,f);if(x){c.push(x);break}}}}return c},a.ray=function(f,g,c,k){k=k||1e-100;for(var d=r.angle(g,c),h=r.magnitude(r.sub(g,c)),v=(c.x+g.x)*.5,b=(c.y+g.y)*.5,w=u.rectangle(v,b,h,k,{angle:d}),S=a.collides(w,f),m=0;m<S.length;m+=1){var y=S[m];y.body=y.bodyB=y.bodyA}return S},a.region=function(f,g,c){for(var k=[],d=0;d<f.length;d++){var h=f[d],v=l.overlaps(h.bounds,g);(v&&!c||!v&&c)&&k.push(h)}return k},a.point=function(f,g){for(var c=[],k=0;k<f.length;k++){var d=f[k];if(l.contains(d.bounds,g))for(var h=d.parts.length===1?0:1;h<d.parts.length;h++){var v=d.parts[h];if(l.contains(v.bounds,g)&&p.contains(v.vertices,g)){c.push(d);break}}}return c}})()},function(t,o,e){var a={};t.exports=a;var r=e(4),i=e(0),l=e(6),u=e(1),p=e(5),f=e(2),g=e(14);(function(){var c,k;typeof window<"u"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(m){window.setTimeout(function(){m(i.now())},1e3/60)},k=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),a._goodFps=30,a._goodDelta=1e3/60,a.create=function(m){var y={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!m.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},_=i.extend(y,m);return _.canvas&&(_.canvas.width=_.options.width||_.canvas.width,_.canvas.height=_.options.height||_.canvas.height),_.mouse=m.mouse,_.engine=m.engine,_.canvas=_.canvas||v(_.options.width,_.options.height),_.context=_.canvas.getContext("2d"),_.textures={},_.bounds=_.bounds||{min:{x:0,y:0},max:{x:_.canvas.width,y:_.canvas.height}},_.controller=a,_.options.showBroadphase=!1,_.options.pixelRatio!==1&&a.setPixelRatio(_,_.options.pixelRatio),i.isElement(_.element)&&_.element.appendChild(_.canvas),_},a.run=function(m){(function y(_){m.frameRequestId=c(y),d(m,_),a.world(m,_),m.context.setTransform(m.options.pixelRatio,0,0,m.options.pixelRatio,0,0),(m.options.showStats||m.options.showDebug)&&a.stats(m,m.context,_),(m.options.showPerformance||m.options.showDebug)&&a.performance(m,m.context,_),m.context.setTransform(1,0,0,1,0,0)})()},a.stop=function(m){k(m.frameRequestId)},a.setPixelRatio=function(m,y){var _=m.options,x=m.canvas;y==="auto"&&(y=b(x)),_.pixelRatio=y,x.setAttribute("data-pixel-ratio",y),x.width=_.width*y,x.height=_.height*y,x.style.width=_.width+"px",x.style.height=_.height+"px"},a.setSize=function(m,y,_){m.options.width=y,m.options.height=_,m.bounds.max.x=m.bounds.min.x+y,m.bounds.max.y=m.bounds.min.y+_,m.options.pixelRatio!==1?a.setPixelRatio(m,m.options.pixelRatio):(m.canvas.width=y,m.canvas.height=_)},a.lookAt=function(m,y,_,x){x=typeof x<"u"?x:!0,y=i.isArray(y)?y:[y],_=_||{x:0,y:0};for(var C={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},P=0;P<y.length;P+=1){var M=y[P],T=M.bounds?M.bounds.min:M.min||M.position||M,O=M.bounds?M.bounds.max:M.max||M.position||M;T&&O&&(T.x<C.min.x&&(C.min.x=T.x),O.x>C.max.x&&(C.max.x=O.x),T.y<C.min.y&&(C.min.y=T.y),O.y>C.max.y&&(C.max.y=O.y))}var I=C.max.x-C.min.x+2*_.x,L=C.max.y-C.min.y+2*_.y,j=m.canvas.height,B=m.canvas.width,U=B/j,nn=I/L,rn=1,pn=1;nn>U?pn=nn/U:rn=U/nn,m.options.hasBounds=!0,m.bounds.min.x=C.min.x,m.bounds.max.x=C.min.x+I*rn,m.bounds.min.y=C.min.y,m.bounds.max.y=C.min.y+L*pn,x&&(m.bounds.min.x+=I*.5-I*rn*.5,m.bounds.max.x+=I*.5-I*rn*.5,m.bounds.min.y+=L*.5-L*pn*.5,m.bounds.max.y+=L*.5-L*pn*.5),m.bounds.min.x-=_.x,m.bounds.max.x-=_.x,m.bounds.min.y-=_.y,m.bounds.max.y-=_.y,m.mouse&&(g.setScale(m.mouse,{x:(m.bounds.max.x-m.bounds.min.x)/m.canvas.width,y:(m.bounds.max.y-m.bounds.min.y)/m.canvas.height}),g.setOffset(m.mouse,m.bounds.min))},a.startViewTransform=function(m){var y=m.bounds.max.x-m.bounds.min.x,_=m.bounds.max.y-m.bounds.min.y,x=y/m.options.width,C=_/m.options.height;m.context.setTransform(m.options.pixelRatio/x,0,0,m.options.pixelRatio/C,0,0),m.context.translate(-m.bounds.min.x,-m.bounds.min.y)},a.endViewTransform=function(m){m.context.setTransform(m.options.pixelRatio,0,0,m.options.pixelRatio,0,0)},a.world=function(m,y){var _=i.now(),x=m.engine,C=x.world,P=m.canvas,M=m.context,T=m.options,O=m.timing,I=l.allBodies(C),L=l.allConstraints(C),j=T.wireframes?T.wireframeBackground:T.background,B=[],U=[],nn,rn={timestamp:x.timing.timestamp};if(p.trigger(m,"beforeRender",rn),m.currentBackground!==j&&S(m,j),M.globalCompositeOperation="source-in",M.fillStyle="transparent",M.fillRect(0,0,P.width,P.height),M.globalCompositeOperation="source-over",T.hasBounds){for(nn=0;nn<I.length;nn++){var pn=I[nn];u.overlaps(pn.bounds,m.bounds)&&B.push(pn)}for(nn=0;nn<L.length;nn++){var en=L[nn],un=en.bodyA,cn=en.bodyB,dn=en.pointA,J=en.pointB;un&&(dn=f.add(un.position,en.pointA)),cn&&(J=f.add(cn.position,en.pointB)),!(!dn||!J)&&(u.contains(m.bounds,dn)||u.contains(m.bounds,J))&&U.push(en)}a.startViewTransform(m),m.mouse&&(g.setScale(m.mouse,{x:(m.bounds.max.x-m.bounds.min.x)/m.options.width,y:(m.bounds.max.y-m.bounds.min.y)/m.options.height}),g.setOffset(m.mouse,m.bounds.min))}else U=L,B=I,m.options.pixelRatio!==1&&m.context.setTransform(m.options.pixelRatio,0,0,m.options.pixelRatio,0,0);!T.wireframes||x.enableSleeping&&T.showSleeping?a.bodies(m,B,M):(T.showConvexHulls&&a.bodyConvexHulls(m,B,M),a.bodyWireframes(m,B,M)),T.showBounds&&a.bodyBounds(m,B,M),(T.showAxes||T.showAngleIndicator)&&a.bodyAxes(m,B,M),T.showPositions&&a.bodyPositions(m,B,M),T.showVelocity&&a.bodyVelocity(m,B,M),T.showIds&&a.bodyIds(m,B,M),T.showSeparations&&a.separations(m,x.pairs.list,M),T.showCollisions&&a.collisions(m,x.pairs.list,M),T.showVertexNumbers&&a.vertexNumbers(m,B,M),T.showMousePosition&&a.mousePosition(m,m.mouse,M),a.constraints(U,M),T.hasBounds&&a.endViewTransform(m),p.trigger(m,"afterRender",rn),O.lastElapsed=i.now()-_},a.stats=function(m,y,_){for(var x=m.engine,C=x.world,P=l.allBodies(C),M=0,T=55,O=44,I=0,L=0,j=0;j<P.length;j+=1)M+=P[j].parts.length;var B={Part:M,Body:P.length,Cons:l.allConstraints(C).length,Comp:l.allComposites(C).length,Pair:x.pairs.list.length};y.fillStyle="#0e0f19",y.fillRect(I,L,T*5.5,O),y.font="12px Arial",y.textBaseline="top",y.textAlign="right";for(var U in B){var nn=B[U];y.fillStyle="#aaa",y.fillText(U,I+T,L+8),y.fillStyle="#eee",y.fillText(nn,I+T,L+26),I+=T}},a.performance=function(m,y){var _=m.engine,x=m.timing,C=x.deltaHistory,P=x.elapsedHistory,M=x.timestampElapsedHistory,T=x.engineDeltaHistory,O=x.engineUpdatesHistory,I=x.engineElapsedHistory,L=_.timing.lastUpdatesPerFrame,j=_.timing.lastDelta,B=h(C),U=h(P),nn=h(T),rn=h(O),pn=h(I),en=h(M),un=en/B||0,cn=Math.round(B/j),dn=1e3/B||0,J=4,q=12,V=60,z=34,G=10,an=69;y.fillStyle="#0e0f19",y.fillRect(0,50,q*5+V*6+22,z),a.status(y,G,an,V,J,C.length,Math.round(dn)+" fps",dn/a._goodFps,function(A){return C[A]/B-1}),a.status(y,G+q+V,an,V,J,T.length,j.toFixed(2)+" dt",a._goodDelta/j,function(A){return T[A]/nn-1}),a.status(y,G+(q+V)*2,an,V,J,O.length,L+" upf",Math.pow(i.clamp(rn/cn||1,0,1),4),function(A){return O[A]/rn-1}),a.status(y,G+(q+V)*3,an,V,J,I.length,pn.toFixed(2)+" ut",1-L*pn/a._goodFps,function(A){return I[A]/pn-1}),a.status(y,G+(q+V)*4,an,V,J,P.length,U.toFixed(2)+" rt",1-U/a._goodFps,function(A){return P[A]/U-1}),a.status(y,G+(q+V)*5,an,V,J,M.length,un.toFixed(2)+" x",un*un*un,function(A){return(M[A]/C[A]/un||0)-1})},a.status=function(m,y,_,x,C,P,M,T,O){m.strokeStyle="#888",m.fillStyle="#444",m.lineWidth=1,m.fillRect(y,_+7,x,1),m.beginPath(),m.moveTo(y,_+7-C*i.clamp(.4*O(0),-2,2));for(var I=0;I<x;I+=1)m.lineTo(y+I,_+7-(I<P?C*i.clamp(.4*O(I),-2,2):0));m.stroke(),m.fillStyle="hsl("+i.clamp(25+95*T,0,120)+",100%,60%)",m.fillRect(y,_-7,4,4),m.font="12px Arial",m.textBaseline="middle",m.textAlign="right",m.fillStyle="#eee",m.fillText(M,y+x,_-5)},a.constraints=function(m,y){for(var _=y,x=0;x<m.length;x++){var C=m[x];if(!(!C.render.visible||!C.pointA||!C.pointB)){var P=C.bodyA,M=C.bodyB,T,O;if(P?T=f.add(P.position,C.pointA):T=C.pointA,C.render.type==="pin")_.beginPath(),_.arc(T.x,T.y,3,0,2*Math.PI),_.closePath();else{if(M?O=f.add(M.position,C.pointB):O=C.pointB,_.beginPath(),_.moveTo(T.x,T.y),C.render.type==="spring")for(var I=f.sub(O,T),L=f.perp(f.normalise(I)),j=Math.ceil(i.clamp(C.length/5,12,20)),B,U=1;U<j;U+=1)B=U%2===0?1:-1,_.lineTo(T.x+I.x*(U/j)+L.x*B*4,T.y+I.y*(U/j)+L.y*B*4);_.lineTo(O.x,O.y)}C.render.lineWidth&&(_.lineWidth=C.render.lineWidth,_.strokeStyle=C.render.strokeStyle,_.stroke()),C.render.anchors&&(_.fillStyle=C.render.strokeStyle,_.beginPath(),_.arc(T.x,T.y,3,0,2*Math.PI),_.arc(O.x,O.y,3,0,2*Math.PI),_.closePath(),_.fill())}}},a.bodies=function(m,y,_){var x=_;m.engine;var C=m.options,P=C.showInternalEdges||!C.wireframes,M,T,O,I;for(O=0;O<y.length;O++)if(M=y[O],!!M.render.visible){for(I=M.parts.length>1?1:0;I<M.parts.length;I++)if(T=M.parts[I],!!T.render.visible){if(C.showSleeping&&M.isSleeping?x.globalAlpha=.5*T.render.opacity:T.render.opacity!==1&&(x.globalAlpha=T.render.opacity),T.render.sprite&&T.render.sprite.texture&&!C.wireframes){var L=T.render.sprite,j=w(m,L.texture);x.translate(T.position.x,T.position.y),x.rotate(T.angle),x.drawImage(j,j.width*-L.xOffset*L.xScale,j.height*-L.yOffset*L.yScale,j.width*L.xScale,j.height*L.yScale),x.rotate(-T.angle),x.translate(-T.position.x,-T.position.y)}else{if(T.circleRadius)x.beginPath(),x.arc(T.position.x,T.position.y,T.circleRadius,0,2*Math.PI);else{x.beginPath(),x.moveTo(T.vertices[0].x,T.vertices[0].y);for(var B=1;B<T.vertices.length;B++)!T.vertices[B-1].isInternal||P?x.lineTo(T.vertices[B].x,T.vertices[B].y):x.moveTo(T.vertices[B].x,T.vertices[B].y),T.vertices[B].isInternal&&!P&&x.moveTo(T.vertices[(B+1)%T.vertices.length].x,T.vertices[(B+1)%T.vertices.length].y);x.lineTo(T.vertices[0].x,T.vertices[0].y),x.closePath()}C.wireframes?(x.lineWidth=1,x.strokeStyle=m.options.wireframeStrokeStyle,x.stroke()):(x.fillStyle=T.render.fillStyle,T.render.lineWidth&&(x.lineWidth=T.render.lineWidth,x.strokeStyle=T.render.strokeStyle,x.stroke()),x.fill())}x.globalAlpha=1}}},a.bodyWireframes=function(m,y,_){var x=_,C=m.options.showInternalEdges,P,M,T,O,I;for(x.beginPath(),T=0;T<y.length;T++)if(P=y[T],!!P.render.visible)for(I=P.parts.length>1?1:0;I<P.parts.length;I++){for(M=P.parts[I],x.moveTo(M.vertices[0].x,M.vertices[0].y),O=1;O<M.vertices.length;O++)!M.vertices[O-1].isInternal||C?x.lineTo(M.vertices[O].x,M.vertices[O].y):x.moveTo(M.vertices[O].x,M.vertices[O].y),M.vertices[O].isInternal&&!C&&x.moveTo(M.vertices[(O+1)%M.vertices.length].x,M.vertices[(O+1)%M.vertices.length].y);x.lineTo(M.vertices[0].x,M.vertices[0].y)}x.lineWidth=1,x.strokeStyle=m.options.wireframeStrokeStyle,x.stroke()},a.bodyConvexHulls=function(m,y,_){var x=_,C,P,M;for(x.beginPath(),P=0;P<y.length;P++)if(C=y[P],!(!C.render.visible||C.parts.length===1)){for(x.moveTo(C.vertices[0].x,C.vertices[0].y),M=1;M<C.vertices.length;M++)x.lineTo(C.vertices[M].x,C.vertices[M].y);x.lineTo(C.vertices[0].x,C.vertices[0].y)}x.lineWidth=1,x.strokeStyle="rgba(255,255,255,0.2)",x.stroke()},a.vertexNumbers=function(m,y,_){var x=_,C,P,M;for(C=0;C<y.length;C++){var T=y[C].parts;for(M=T.length>1?1:0;M<T.length;M++){var O=T[M];for(P=0;P<O.vertices.length;P++)x.fillStyle="rgba(255,255,255,0.2)",x.fillText(C+"_"+P,O.position.x+(O.vertices[P].x-O.position.x)*.8,O.position.y+(O.vertices[P].y-O.position.y)*.8)}}},a.mousePosition=function(m,y,_){var x=_;x.fillStyle="rgba(255,255,255,0.8)",x.fillText(y.position.x+"  "+y.position.y,y.position.x+5,y.position.y-5)},a.bodyBounds=function(m,y,_){var x=_;m.engine;var C=m.options;x.beginPath();for(var P=0;P<y.length;P++){var M=y[P];if(M.render.visible)for(var T=y[P].parts,O=T.length>1?1:0;O<T.length;O++){var I=T[O];x.rect(I.bounds.min.x,I.bounds.min.y,I.bounds.max.x-I.bounds.min.x,I.bounds.max.y-I.bounds.min.y)}}C.wireframes?x.strokeStyle="rgba(255,255,255,0.08)":x.strokeStyle="rgba(0,0,0,0.1)",x.lineWidth=1,x.stroke()},a.bodyAxes=function(m,y,_){var x=_;m.engine;var C=m.options,P,M,T,O;for(x.beginPath(),M=0;M<y.length;M++){var I=y[M],L=I.parts;if(I.render.visible)if(C.showAxes)for(T=L.length>1?1:0;T<L.length;T++)for(P=L[T],O=0;O<P.axes.length;O++){var j=P.axes[O];x.moveTo(P.position.x,P.position.y),x.lineTo(P.position.x+j.x*20,P.position.y+j.y*20)}else for(T=L.length>1?1:0;T<L.length;T++)for(P=L[T],O=0;O<P.axes.length;O++)x.moveTo(P.position.x,P.position.y),x.lineTo((P.vertices[0].x+P.vertices[P.vertices.length-1].x)/2,(P.vertices[0].y+P.vertices[P.vertices.length-1].y)/2)}C.wireframes?(x.strokeStyle="indianred",x.lineWidth=1):(x.strokeStyle="rgba(255, 255, 255, 0.4)",x.globalCompositeOperation="overlay",x.lineWidth=2),x.stroke(),x.globalCompositeOperation="source-over"},a.bodyPositions=function(m,y,_){var x=_;m.engine;var C=m.options,P,M,T,O;for(x.beginPath(),T=0;T<y.length;T++)if(P=y[T],!!P.render.visible)for(O=0;O<P.parts.length;O++)M=P.parts[O],x.arc(M.position.x,M.position.y,3,0,2*Math.PI,!1),x.closePath();for(C.wireframes?x.fillStyle="indianred":x.fillStyle="rgba(0,0,0,0.5)",x.fill(),x.beginPath(),T=0;T<y.length;T++)P=y[T],P.render.visible&&(x.arc(P.positionPrev.x,P.positionPrev.y,2,0,2*Math.PI,!1),x.closePath());x.fillStyle="rgba(255,165,0,0.8)",x.fill()},a.bodyVelocity=function(m,y,_){var x=_;x.beginPath();for(var C=0;C<y.length;C++){var P=y[C];if(P.render.visible){var M=r.getVelocity(P);x.moveTo(P.position.x,P.position.y),x.lineTo(P.position.x+M.x,P.position.y+M.y)}}x.lineWidth=3,x.strokeStyle="cornflowerblue",x.stroke()},a.bodyIds=function(m,y,_){var x=_,C,P;for(C=0;C<y.length;C++)if(y[C].render.visible){var M=y[C].parts;for(P=M.length>1?1:0;P<M.length;P++){var T=M[P];x.font="12px Arial",x.fillStyle="rgba(255,255,255,0.5)",x.fillText(T.id,T.position.x+10,T.position.y-10)}}},a.collisions=function(m,y,_){var x=_,C=m.options,P,M,T,O;for(x.beginPath(),T=0;T<y.length;T++)if(P=y[T],!!P.isActive)for(M=P.collision,O=0;O<P.contactCount;O++){var I=P.contacts[O],L=I.vertex;x.rect(L.x-1.5,L.y-1.5,3.5,3.5)}for(C.wireframes?x.fillStyle="rgba(255,255,255,0.7)":x.fillStyle="orange",x.fill(),x.beginPath(),T=0;T<y.length;T++)if(P=y[T],!!P.isActive&&(M=P.collision,P.contactCount>0)){var j=P.contacts[0].vertex.x,B=P.contacts[0].vertex.y;P.contactCount===2&&(j=(P.contacts[0].vertex.x+P.contacts[1].vertex.x)/2,B=(P.contacts[0].vertex.y+P.contacts[1].vertex.y)/2),M.bodyB===M.supports[0].body||M.bodyA.isStatic===!0?x.moveTo(j-M.normal.x*8,B-M.normal.y*8):x.moveTo(j+M.normal.x*8,B+M.normal.y*8),x.lineTo(j,B)}C.wireframes?x.strokeStyle="rgba(255,165,0,0.7)":x.strokeStyle="orange",x.lineWidth=1,x.stroke()},a.separations=function(m,y,_){var x=_,C=m.options,P,M,T,O,I;for(x.beginPath(),I=0;I<y.length;I++)if(P=y[I],!!P.isActive){M=P.collision,T=M.bodyA,O=M.bodyB;var L=1;!O.isStatic&&!T.isStatic&&(L=.5),O.isStatic&&(L=0),x.moveTo(O.position.x,O.position.y),x.lineTo(O.position.x-M.penetration.x*L,O.position.y-M.penetration.y*L),L=1,!O.isStatic&&!T.isStatic&&(L=.5),T.isStatic&&(L=0),x.moveTo(T.position.x,T.position.y),x.lineTo(T.position.x+M.penetration.x*L,T.position.y+M.penetration.y*L)}C.wireframes?x.strokeStyle="rgba(255,165,0,0.5)":x.strokeStyle="orange",x.stroke()},a.inspector=function(m,y){m.engine;var _=m.selected,x=m.render,C=x.options,P;if(C.hasBounds){var M=x.bounds.max.x-x.bounds.min.x,T=x.bounds.max.y-x.bounds.min.y,O=M/x.options.width,I=T/x.options.height;y.scale(1/O,1/I),y.translate(-x.bounds.min.x,-x.bounds.min.y)}for(var L=0;L<_.length;L++){var j=_[L].data;switch(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.9)",y.setLineDash([1,2]),j.type){case"body":P=j.bounds,y.beginPath(),y.rect(Math.floor(P.min.x-3),Math.floor(P.min.y-3),Math.floor(P.max.x-P.min.x+6),Math.floor(P.max.y-P.min.y+6)),y.closePath(),y.stroke();break;case"constraint":var B=j.pointA;j.bodyA&&(B=j.pointB),y.beginPath(),y.arc(B.x,B.y,10,0,2*Math.PI),y.closePath(),y.stroke();break}y.setLineDash([]),y.translate(-.5,-.5)}m.selectStart!==null&&(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.6)",y.fillStyle="rgba(255,165,0,0.1)",P=m.selectBounds,y.beginPath(),y.rect(Math.floor(P.min.x),Math.floor(P.min.y),Math.floor(P.max.x-P.min.x),Math.floor(P.max.y-P.min.y)),y.closePath(),y.stroke(),y.fill(),y.translate(-.5,-.5)),C.hasBounds&&y.setTransform(1,0,0,1,0,0)};var d=function(m,y){var _=m.engine,x=m.timing,C=x.historySize,P=_.timing.timestamp;x.delta=y-x.lastTime||a._goodDelta,x.lastTime=y,x.timestampElapsed=P-x.lastTimestamp||0,x.lastTimestamp=P,x.deltaHistory.unshift(x.delta),x.deltaHistory.length=Math.min(x.deltaHistory.length,C),x.engineDeltaHistory.unshift(_.timing.lastDelta),x.engineDeltaHistory.length=Math.min(x.engineDeltaHistory.length,C),x.timestampElapsedHistory.unshift(x.timestampElapsed),x.timestampElapsedHistory.length=Math.min(x.timestampElapsedHistory.length,C),x.engineUpdatesHistory.unshift(_.timing.lastUpdatesPerFrame),x.engineUpdatesHistory.length=Math.min(x.engineUpdatesHistory.length,C),x.engineElapsedHistory.unshift(_.timing.lastElapsed),x.engineElapsedHistory.length=Math.min(x.engineElapsedHistory.length,C),x.elapsedHistory.unshift(x.lastElapsed),x.elapsedHistory.length=Math.min(x.elapsedHistory.length,C)},h=function(m){for(var y=0,_=0;_<m.length;_+=1)y+=m[_];return y/m.length||0},v=function(m,y){var _=document.createElement("canvas");return _.width=m,_.height=y,_.oncontextmenu=function(){return!1},_.onselectstart=function(){return!1},_},b=function(m){var y=m.getContext("2d"),_=window.devicePixelRatio||1,x=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;return _/x},w=function(m,y){var _=m.textures[y];return _||(_=m.textures[y]=new Image,_.src=y,_)},S=function(m,y){var _=y;/(jpg|gif|png)$/.test(y)&&(_="url("+y+")"),m.canvas.style.background=_,m.canvas.style.backgroundSize="contain",m.currentBackground=y}})()},function(t,o,e){var a={};t.exports=a;var r=e(5),i=e(17),l=e(0);(function(){a._maxFrameDelta=1e3/15,a._frameDeltaFallback=1e3/60,a._timeBufferMargin=1.5,a._elapsedNextEstimate=1,a._smoothingLowerBound=.1,a._smoothingUpperBound=.9,a.create=function(p){var f={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},g=l.extend(f,p);return g.fps=0,g},a.run=function(p,f){return p.timeBuffer=a._frameDeltaFallback,function g(c){p.frameRequestId=a._onNextFrame(p,g),c&&p.enabled&&a.tick(p,f,c)}(),p},a.tick=function(p,f,g){var c=l.now(),k=p.delta,d=0,h=g-p.timeLastTick;if((!h||!p.timeLastTick||h>Math.max(a._maxFrameDelta,p.maxFrameTime))&&(h=p.frameDelta||a._frameDeltaFallback),p.frameDeltaSmoothing){p.frameDeltaHistory.push(h),p.frameDeltaHistory=p.frameDeltaHistory.slice(-p.frameDeltaHistorySize);var v=p.frameDeltaHistory.slice(0).sort(),b=p.frameDeltaHistory.slice(v.length*a._smoothingLowerBound,v.length*a._smoothingUpperBound),w=u(b);h=w||h}p.frameDeltaSnapping&&(h=1e3/Math.round(1e3/h)),p.frameDelta=h,p.timeLastTick=g,p.timeBuffer+=p.frameDelta,p.timeBuffer=l.clamp(p.timeBuffer,0,p.frameDelta+k*a._timeBufferMargin),p.lastUpdatesDeferred=0;var S=p.maxUpdates||Math.ceil(p.maxFrameTime/k),m={timestamp:f.timing.timestamp};r.trigger(p,"beforeTick",m),r.trigger(p,"tick",m);for(var y=l.now();k>0&&p.timeBuffer>=k*a._timeBufferMargin;){r.trigger(p,"beforeUpdate",m),i.update(f,k),r.trigger(p,"afterUpdate",m),p.timeBuffer-=k,d+=1;var _=l.now()-c,x=l.now()-y,C=_+a._elapsedNextEstimate*x/d;if(d>=S||C>p.maxFrameTime){p.lastUpdatesDeferred=Math.round(Math.max(0,p.timeBuffer/k-a._timeBufferMargin));break}}f.timing.lastUpdatesPerFrame=d,r.trigger(p,"afterTick",m),p.frameDeltaHistory.length>=100&&(p.lastUpdatesDeferred&&Math.round(p.frameDelta/k)>S?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):p.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof p.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(p.deltaMin||p.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),p.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},a.stop=function(p){a._cancelNextFrame(p)},a._onNextFrame=function(p,f){if(typeof window<"u"&&window.requestAnimationFrame)p.frameRequestId=window.requestAnimationFrame(f);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return p.frameRequestId},a._cancelNextFrame=function(p){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(p.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(p){for(var f=0,g=p.length,c=0;c<g;c+=1)f+=p[c];return f/g||0}})()},function(t,o,e){var a={};t.exports=a;var r=e(8),i=e(0),l=i.deprecated;(function(){a.collides=function(u,p){return r.collides(u,p)},l(a,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(t,o,e){var a={};t.exports=a,e(1);var r=e(0);(function(){a.pathToVertices=function(i,l){typeof window<"u"&&!("SVGPathSeg"in window)&&r.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,p,f,g,c,k,d,h,v,b,w=[],S,m,y=0,_=0,x=0;l=l||15;var C=function(M,T,O){var I=O%2===1&&O>1;if(!v||M!=v.x||T!=v.y){v&&I?(S=v.x,m=v.y):(S=0,m=0);var L={x:S+M,y:m+T};(I||!v)&&(v=L),w.push(L),_=S+M,x=m+T}},P=function(M){var T=M.pathSegTypeAsLetter.toUpperCase();if(T!=="Z"){switch(T){case"M":case"L":case"T":case"C":case"S":case"Q":_=M.x,x=M.y;break;case"H":_=M.x;break;case"V":x=M.y;break}C(_,x,M.pathSegType)}};for(a._svgPathToAbsolute(i),f=i.getTotalLength(),k=[],u=0;u<i.pathSegList.numberOfItems;u+=1)k.push(i.pathSegList.getItem(u));for(d=k.concat();y<f;){if(b=i.getPathSegAtLength(y),c=k[b],c!=h){for(;d.length&&d[0]!=c;)P(d.shift());h=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":g=i.getPointAtLength(y),C(g.x,g.y,0);break}y+=l}for(u=0,p=d.length;u<p;++u)P(d[u]);return w},a._svgPathToAbsolute=function(i){for(var l,u,p,f,g,c,k=i.pathSegList,d=0,h=0,v=k.numberOfItems,b=0;b<v;++b){var w=k.getItem(b),S=w.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(S))"x"in w&&(d=w.x),"y"in w&&(h=w.y);else switch("x1"in w&&(p=d+w.x1),"x2"in w&&(g=d+w.x2),"y1"in w&&(f=h+w.y1),"y2"in w&&(c=h+w.y2),"x"in w&&(d+=w.x),"y"in w&&(h+=w.y),S){case"m":k.replaceItem(i.createSVGPathSegMovetoAbs(d,h),b);break;case"l":k.replaceItem(i.createSVGPathSegLinetoAbs(d,h),b);break;case"h":k.replaceItem(i.createSVGPathSegLinetoHorizontalAbs(d),b);break;case"v":k.replaceItem(i.createSVGPathSegLinetoVerticalAbs(h),b);break;case"c":k.replaceItem(i.createSVGPathSegCurvetoCubicAbs(d,h,p,f,g,c),b);break;case"s":k.replaceItem(i.createSVGPathSegCurvetoCubicSmoothAbs(d,h,g,c),b);break;case"q":k.replaceItem(i.createSVGPathSegCurvetoQuadraticAbs(d,h,p,f),b);break;case"t":k.replaceItem(i.createSVGPathSegCurvetoQuadraticSmoothAbs(d,h),b);break;case"a":k.replaceItem(i.createSVGPathSegArcAbs(d,h,w.r1,w.r2,w.angle,w.largeArcFlag,w.sweepFlag),b);break;case"z":case"Z":d=l,h=u;break}(S=="M"||S=="m")&&(l=d,u=h)}}})()},function(t,o,e){var a={};t.exports=a;var r=e(6);e(0),function(){a.create=r.create,a.add=r.add,a.remove=r.remove,a.clear=r.clear,a.addComposite=r.addComposite,a.addBody=r.addBody,a.addConstraint=r.addConstraint}()}])})}(ie)),ie.exports}var lk=ik();const It=lr(lk),pk=[{id:1,title:"Best Starter For Every Laravel Beginner: A Basic Yet Powerful CRUD App",excerpt:"Discover all the new features in Laravel 11 and learn how to safely upgrade your application.",category:"Full Walkthrough",image:new URL("/larawell/images/user-dashboard.png",import.meta.url).href,slug:"basic-crud-app",date:"June 21, 2025"},{id:2,title:"The Habit Tracker App",slug:"habit-tracker-app",excerpt:"Learn to create an interactive habit tracking application with smooth animations",image:new URL("/larawell/images/habit-dashboard.png",import.meta.url).href,date:"May 15, 2025",category:"Full Walkthrough"},{id:3,title:"Building a Fully Functional SaaS Application",slug:"saas-app",image:new URL("/larawell/images/saas-app-1.jpeg",import.meta.url).href,excerpt:"Welcome, Laravel enthusiasts! Today we're kicking off an exciting journey to build a full-stack SaaS application using Vue.js, Tailwind CSS, and Laravel.",category:"Full Walkthrough",date:"July 15, 2025"}],gc=(s,n)=>{const t=s.__vccOpts||s;for(const[o,e]of n)t[o]=e;return t},ck={class:"container mx-auto px-4 sm:px-6 lg:px-8"},uk={class:"flex items-center justify-between"},dk={class:"logo-container relative w-10 h-10"},fk={class:"absolute inset-0 bg-indigo-600 rounded-lg transform rotate-0 transition-all duration-500",ref:"logoSquare"},gk={class:"absolute inset-0 flex items-center justify-center text-white font-bold text-xl z-10",ref:"logoText"},kk={class:"hidden md:flex items-center space-x-8"},hk=["onMouseenter"],mk={class:"flex items-center space-x-4"},vk={class:"container mx-auto px-4"},bk={class:"flex flex-col space-y-4"},xk=["href","data-aos-delay"],yk={__name:"Header",setup(s){const n=Jn(!1),t=Jn(!1),o=[{name:"About Us",href:"/about-us"},{name:"Contact us",href:"/contact-us"},{name:"Privacy Policy",href:"/privacy-policy"},{name:"Recommended Resources",href:"/resources"}],e=()=>{n.value=window.scrollY>50},a=()=>{t.value=!t.value},r=p=>{zs.from(p,{y:-50,opacity:0,duration:.8,ease:"power3.out"})},i=(p,f)=>{zs.to(p,{rotation:360,duration:1,ease:"elastic.out(1, 0.5)"}),zs.to(f,{y:-5,duration:.3,yoyo:!0,repeat:1})},l=p=>{zs.fromTo(p,{width:0},{width:"100%",duration:.3,ease:"power2.out"})},u=p=>{zs.to(p,{scale:1.05,duration:.2,yoyo:!0,repeat:1})};return Bs(()=>{At.init({duration:800,once:!0}),Bs(()=>{zs.to(".start-button",{scale:1.05,duration:.2,repeat:-1,yoyo:!0})}),window.addEventListener("scroll",e),r(document.querySelector(".header"))}),tr(()=>{window.removeEventListener("scroll",e)}),(p,f)=>(In(),Bn("header",{class:Ta(["fixed w-full z-50 transition-all duration-300",{"bg-white/90 shadow-md backdrop-blur-sm py-2":n.value,"bg-transparent py-4":!n.value}]),"data-aos":"fade-down"},[$("div",ck,[$("div",uk,[$("div",{class:"flex items-center space-x-2",onMouseenter:i},[$("div",dk,[$("div",fk,null,512),$("span",gk,"L",512)]),gn(ps(ua),{to:"/"},{default:tt(()=>f[0]||(f[0]=[$("span",{class:"text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"},[zt(" Lara"),$("span",{class:"text-gray-800"},"Well")],-1)])),_:1,__:[0]})],32),$("nav",kk,[(In(),Bn(On,null,Ra(o,(g,c)=>$("li",{key:g.name,class:"text-gray-700 hover:text-indigo-600 font-medium relative group transition-colors",onMouseenter:k=>l(c)},[gn(ps(ua),{to:g.href},{default:tt(()=>[zt(ls(g.name)+" ",1),$("span",{class:"absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full",ref_for:!0,ref:"navUnderlines"},null,512)]),_:2},1032,["to"])],40,hk)),64))]),$("div",mk,[gn(ps(ua),{to:"/"},{default:tt(()=>[$("button",{class:"hidden md:block px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105",onMouseenter:u,ref:"ctaButton"}," Start Reading ",544)]),_:1}),$("button",{class:"md:hidden text-gray-700 focus:outline-none",onClick:a},f[1]||(f[1]=[$("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))])])]),$("div",{class:Ta(["md:hidden bg-white shadow-lg absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out",{"max-h-0":!t.value,"max-h-96 py-4":t.value}])},[$("div",vk,[$("div",bk,[(In(),Bn(On,null,Ra(o,g=>$("a",{key:g.name,href:g.href,class:"text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded hover:bg-gray-50 transition-colors","data-aos":"fade-left","data-aos-delay":100*o.indexOf(g)},ls(g.name),9,xk)),64)),gn(ps(ua),{to:"/"},{default:tt(()=>f[2]||(f[2]=[$("button",{class:"start-button px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg mt-2"}," Start Reading ",-1)])),_:1,__:[2]})])])],2)],2))}},ea=gc(yk,[["__scopeId","data-v-12de71ea"]]),wk={class:"relative overflow-hidden"},_k={class:"relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden"},Sk={class:"container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"},Ck={class:"text-center","data-aos":"fade-up"},Tk={class:"flex flex-col sm:flex-row justify-center gap-4","data-aos":"fade-up","data-aos-delay":"200"},Pk={class:"py-16 bg-white"},Mk={class:"container mx-auto px-4 sm:px-6 lg:px-8"},Ak={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},Rk=["data-aos-delay"],Ek={class:"h-48 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center"},Ok=["src"],Ik={class:"p-6"},qk={class:"flex items-center text-sm text-gray-500 mb-2"},Dk={class:"text-xl font-semibold mb-3 text-gray-800"},Lk={class:"text-gray-600 mb-4"},Bk=["href"],Fk={__name:"Main",setup(s){const n=Jn(pk);gp();const t=Jn(null),o=Jn(null),e=Jn(null),a=Jn(null),r=Jn([]),i=Jn([{name:"laravel",path:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"},{name:"heart",path:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},{name:"laptop",path:"M3 6l2-2h14l2 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6zM2 6h20v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"},{name:"code",path:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},{name:"emoji",path:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},{name:"database",path:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"}]);Bs(()=>{At.init({duration:800,once:!0}),l(),g()}),tr(()=>{e.value&&It.Render.stop(e.value),o.value&&It.Engine.clear(o.value),window.removeEventListener("resize",c)});const l=()=>{if(window.innerWidth<768)return;const{Engine:k,Render:d,World:h,Bodies:v,Composite:b}=It;o.value=k.create({enableSleeping:!0}),a.value=o.value.world,e.value=d.create({canvas:t.value,engine:o.value,options:{width:window.innerWidth,height:window.innerHeight,background:"transparent",wireframes:!1}}),zs.to(t.value,{opacity:.3,duration:1}),u(),p(),k.run(o.value),d.run(e.value),window.addEventListener("resize",c)},u=()=>{const{Bodies:k,World:d}=It,h={isStatic:!0,render:{visible:!1}},v=k.rectangle(window.innerWidth/2,window.innerHeight+50,window.innerWidth,100,h),b=k.rectangle(-50,window.innerHeight/2,100,window.innerHeight,h),w=k.rectangle(window.innerWidth+50,window.innerHeight/2,100,window.innerHeight,h);d.add(a.value,[v,b,w])},p=()=>{const{Bodies:k,World:d,Body:h}=It,v=["#818cf8","#a78bfa","#7c3aed","#8b5cf6","#6366f1","#8b5cf6"];r.value.forEach(b=>d.remove(a.value,b)),r.value=[];for(let b=0;b<25;b++){const w=Math.random()*window.innerWidth,S=Math.random()*-window.innerHeight,m=15+Math.random()*25,y=i.value[Math.floor(Math.random()*i.value.length)],_=v[Math.floor(Math.random()*v.length)],x=k.rectangle(w,S,m,m,{restitution:.7,friction:.1,render:{fillStyle:_,strokeStyle:_,sprite:{texture:f(y.path,_),xScale:m/24,yScale:m/24}},chamfer:{radius:5}});h.setAngle(x,Math.random()*Math.PI*2),h.applyForce(x,x.position,{x:(Math.random()-.5)*.005,y:(Math.random()-.5)*.005}),d.add(a.value,x),r.value.push(x)}},f=(k,d)=>{const h=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${d}">
      <path d="${k}" />
    </svg>
  `;return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(h)))},g=()=>{for(let k=0;k<12;k++){const d=document.createElement("div");d.innerHTML=`
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="${i.value[Math.floor(Math.random()*i.value.length)].path}" />
      </svg>
    `,d.className="absolute pointer-events-none opacity-30 hidden md:block",d.style.color=`hsl(${Math.random()*60+240}, 80%, 70%)`,d.style.width=`${10+Math.random()*30}px`,d.style.height=d.style.width,d.style.left=`${Math.random()*100}%`,d.style.top=`${Math.random()*80}%`,document.querySelector("section").appendChild(d),zs.to(d,{y:`+=${20+Math.random()*40}`,x:`+=${10+Math.random()*20}`,rotation:Math.random()*360,duration:8+Math.random()*12,repeat:-1,yoyo:!0,ease:"sine.inOut"})}},c=()=>{if(!e.value)return;e.value.options.width=window.innerWidth,e.value.options.height=window.innerHeight,e.value.canvas.width=window.innerWidth,e.value.canvas.height=window.innerHeight;const{Bodies:k,World:d,Composite:h}=It,b=h.allBodies(a.value).filter(w=>w.isStatic);d.remove(a.value,b),u(),p()};return(k,d)=>{const h=Al("router-link");return In(),Bn(On,null,[gn(ea),$("div",wk,[$("section",_k,[$("canvas",{ref_key:"physicsCanvas",ref:t,class:"absolute inset-0 w-full h-full pointer-events-none opacity-0"},null,512),$("div",Sk,[$("div",Ck,[d[2]||(d[2]=$("h1",{class:"text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"},[$("span",{class:"bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"}," Master Laravel "),$("br"),$("span",{class:"text-gray-800"},"Like a Pro")],-1)),d[3]||(d[3]=$("p",{class:"text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8","data-aos":"fade-up","data-aos-delay":"100"}," Discover the best walkthroughs with project demos, code explanation and full source code at the end for building amazing web applications with Laravel. ",-1)),$("div",Tk,[d[1]||(d[1]=$("button",{class:"px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"}," Scroll To Explore Walkthroughs ",-1)),gn(h,{to:"/resources"},{default:tt(()=>d[0]||(d[0]=[$("button",{class:"px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-lg shadow hover:shadow-md transition-all duration-300 font-medium hover:bg-gray-50"}," Recommended Resources ",-1)])),_:1,__:[0]})])])])]),$("section",Pk,[$("div",Mk,[d[7]||(d[7]=$("h2",{class:"text-3xl font-bold text-center mb-12","data-aos":"fade-up"},[zt(" Latest "),$("span",{class:"text-indigo-600"},"Laravel"),zt(" Guides")],-1)),$("div",Ak,[(In(!0),Bn(On,null,Ra(n.value,(v,b)=>(In(),Bn("div",{key:v.id,class:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2","data-aos":"fade-up","data-aos-delay":100*b},[$("div",Ek,[$("img",{src:v.image,class:"w-full h-56 object-cover transition duration-300 group-hover:blur-sm",alt:"blog image"},null,8,Ok)]),$("div",Ik,[$("div",qk,[$("span",null,ls(v.category),1),d[4]||(d[4]=$("span",{class:"mx-2"},"•",-1)),$("span",null,ls(v.date),1)]),$("h3",Dk,ls(v.title),1),$("p",Lk,ls(v.excerpt),1),$("a",{href:v.link,class:"text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"},[gn(h,{to:`/blog/${v.slug}`},{default:tt(()=>d[5]||(d[5]=[zt("Read More")])),_:2,__:[5]},1032,["to"]),d[6]||(d[6]=$("svg",{class:"w-4 h-4 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})],-1))],8,Bk)])],8,Rk))),128))]),d[8]||(d[8]=$("div",{class:"text-center mt-12","data-aos":"fade-up"},[$("button",{class:"px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"}," View All Guides ")],-1))])])])],64)}}},Hk=`<!DOCTYPE html>\r
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
    <\/script>`,$k=`<!DOCTYPE html>\r
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
</html>`,jk=`<!DOCTYPE html>\r
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
</html>`,Vk=`<!DOCTYPE html>\r
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
</html>`,Nk=`<!DOCTYPE html>\r
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
</html>`,zk=`<!DOCTYPE html>\r
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
</html>`,Uk=`<!DOCTYPE html>\r
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
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
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
        ul,\r
        ol {\r
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
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
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
\r
<body>\r
    <article>\r
        <h1>🎨 Building a Stunning Vue.js Authentication Interface with Laravel Backend</h1>\r
        <p class="ds-markdown-paragraph">Welcome to our hands-on guide where we'll transform your Laravel API into a\r
            beautiful, functional SaaS application with Vue.js and Tailwind CSS. In this comprehensive tutorial, we'll\r
            build an authentication system that's both visually appealing and technically robust.</p>\r
        <h2>✨ Why Vue.js for Your SaaS Authentication?</h2>\r
        <p class="ds-markdown-paragraph">Vue.js has become the go-to framework for modern web applications because of\r
            its:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Reactive components</strong>&nbsp;that update seamlessly</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Gentle learning curve</strong>&nbsp;compared to other\r
                    frameworks</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Excellent ecosystem</strong>&nbsp;with tools like Vue Router\r
                    and Pinia</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Performance</strong>&nbsp;that competes with heavier frameworks\r
                </p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph">When paired with Tailwind CSS, you get:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Rapid UI development</strong>&nbsp;with utility classes</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Customizable design system</strong>&nbsp;that grows with your\r
                    app</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Responsive layouts</strong>&nbsp;out of the box</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Professional results</strong>&nbsp;without heavy CSS files</p>\r
            </li>\r
        </ul>\r
        <h2>🏗️ Our Authentication System Architecture</h2>\r
        <p class="ds-markdown-paragraph">Let's visualize how our components work together:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">text</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre>Laravel API (Backend)\r
  &uarr; &darr;\r
Axios HTTP Client\r
  &uarr; &darr;\r
Vue.js Components (Frontend)\r
  &uarr; &darr;\r
User Browser</pre>\r
        </div>\r
        <h2>🔑 The Authentication Flow</h2>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>User visits login/register page</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Submits credentials through our Vue form</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Vue sends request to Laravel via Axios</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Laravel validates and responds with token</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Vue stores token and redirects to dashboard</strong></p>\r
            </li>\r
        </ol>\r
        <h2>🎨 Building the Auth Interface</h2>\r
        <h3>1. The Floating Icons Background</h3>\r
        <p class="ds-markdown-paragraph">The visually striking floating icons in the background aren't just\r
            decorative&mdash;they're an excellent example of advanced Vue techniques:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fixed inset-0 overflow-hidden pointer-events-none<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> \r
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(icon, index) in icons<span class="token punctuation">"</span></span> \r
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span> \r
    <span class="token attr-name">:ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el =&gt; { if (el) iconRefs[index] = el }<span class="token punctuation">"</span></span>\r
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>absolute text-blue-400/70 text-4xl bg-white/5 rounded-full p-4 backdrop-blur-sm will-change-transform<span class="token punctuation">"</span></span>\r
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\`icon-\${index}\`<span class="token punctuation">"</span></span>\r
  <span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <p class="ds-markdown-paragraph"><strong>Key Features:</strong></p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>pointer-events-none</code>: Allows clicks to pass through to the\r
                    form below</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>backdrop-blur-sm</code>: Creates a subtle frosted glass effect\r
                </p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>will-change-transform</code>: Optimizes animation performance</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">GSAP-powered animations for smooth movement</p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph"><strong>The Animation System:</strong></p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token comment">// Initialize animations for each icon</span>\r
  icons<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>iconRefs<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token function">setupIconAnimation</span><span class="token punctuation">(</span>iconRefs<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span></pre>\r
        </div>\r
        <p class="ds-markdown-paragraph">This creates a dynamic, engaging background that doesn't interfere with\r
            usability.</p>\r
        <h3>2. The Tabbed Auth Interface</h3>\r
        <p class="ds-markdown-paragraph">Our form uses a clean tab system to toggle between login and registration:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex border-b<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeTab = 'login'<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{\r
    'text-blue-600 border-blue-600': activeTab === 'login',\r
    'text-gray-500 hover:text-gray-700': activeTab !== 'login'\r
  }<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-1 py-4 px-6 text-center font-medium border-b-2 transition-colors<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    Login\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeTab = 'register'<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{\r
    'text-blue-600 border-blue-600': activeTab === 'register',\r
    'text-gray-500 hover:text-gray-700': activeTab !== 'register'\r
  }<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-1 py-4 px-6 text-center font-medium border-b-2 transition-colors<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    Register\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <p class="ds-markdown-paragraph"><strong>UX Enhancements:</strong></p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Smooth transitions between states</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Clear visual indicators for the active tab</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Consistent spacing and padding</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Mobile-responsive design</p>\r
            </li>\r
        </ul>\r
        <h3>3. The Login Form</h3>\r
        <p class="ds-markdown-paragraph">Our login form includes all the modern best practices:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeTab === 'login'<span class="token punctuation">"</span></span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleLogin<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-8 space-y-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-email<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block text-sm font-medium text-gray-700 mb-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-envelope text-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-email<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loginForm.email<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>\r
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500<span class="token punctuation">"</span></span>\r
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>you@example.com<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
\r
  <span class="token comment">&lt;!-- Password field with remember me --&gt;</span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2 flex items-center justify-between<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remember-me<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loginForm.remember<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span>\r
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remember-me<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ml-2 block text-sm text-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm text-blue-600 hover:text-blue-500<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Forgot password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
  \r
  <span class="token comment">&lt;!-- Error handling --&gt;</span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loginError<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-red-600<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{ loginError }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\r
  \r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span>\r
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    Sign in\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <h3>4. The Registration Form</h3>\r
        <p class="ds-markdown-paragraph">The registration form collects essential user data with proper validation:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeTab === 'register'<span class="token punctuation">"</span></span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleRegister<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-8 space-y-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  <span class="token comment">&lt;!-- Name field --&gt;</span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-user text-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>register-name<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>registerForm.name<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\r
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500<span class="token punctuation">"</span></span>\r
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>John Doe<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
\r
  <span class="token comment">&lt;!-- Password requirements --&gt;</span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-1 text-xs text-gray-500<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>At least 8 characters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\r
  \r
  <span class="token comment">&lt;!-- Terms agreement --&gt;</span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>terms<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>registerForm.acceptTerms<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span>\r
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>terms<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ml-2 block text-sm text-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      I agree to the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-blue-600 hover:text-blue-500<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Terms<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
  \r
  <span class="token comment">&lt;!-- Error handling --&gt;</span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>registerError<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-red-600<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{ registerError }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <h2>🔄 Handling Authentication in Vue</h2>\r
        <p class="ds-markdown-paragraph">The real magic happens in our script section:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>\r
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'../router'</span>\r
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>\r
\r
<span class="token comment">// Reactive state</span>\r
<span class="token keyword">const</span> activeTab <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">)</span>\r
<span class="token keyword">const</span> loginForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
<span class="token keyword">const</span> registerForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
<span class="token keyword">const</span> loginError <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\r
<span class="token keyword">const</span> registerError <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\r
\r
<span class="token comment">// Login handler</span>\r
<span class="token keyword">const</span> <span class="token function-variable function">handleLogin</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">try</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
      <span class="token literal-property property">email</span><span class="token operator">:</span> loginForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>email<span class="token punctuation">,</span>\r
      <span class="token literal-property property">password</span><span class="token operator">:</span> loginForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>password\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
\r
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span>\r
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'dashboard'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    loginError<span class="token punctuation">.</span>value <span class="token operator">=</span> err<span class="token punctuation">.</span>response<span class="token operator">?.</span>data<span class="token operator">?.</span>message <span class="token operator">||</span> <span class="token string">'Login failed'</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token comment">// Registration handler</span>\r
<span class="token keyword">const</span> <span class="token function-variable function">handleRegister</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">try</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/register'</span><span class="token punctuation">,</span> registerForm<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\r
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span>\r
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'dashboard'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    registerError<span class="token punctuation">.</span>value <span class="token operator">=</span> err<span class="token punctuation">.</span>response<span class="token operator">?.</span>data<span class="token operator">?.</span>message <span class="token operator">||</span> <span class="token string">'Registration failed'</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <p class="ds-markdown-paragraph"><strong>Security Considerations:</strong></p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Tokens stored in localStorage (consider httpOnly cookies for\r
                    production)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Error messages don't reveal system information</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Password never logged or stored improperly</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">HTTPS required for all requests</p>\r
            </li>\r
        </ul>\r
        <h2>🏡 The Dashboard Interface</h2>\r
        <p class="ds-markdown-paragraph">After successful authentication, users see a clean dashboard:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    <span class="token comment">&lt;!-- Navigation Bar --&gt;</span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-white shadow-sm<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>max-w-7xl mx-auto px-4 sm:px-6 lg:px-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-between h-16 items-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
          <span class="token comment">&lt;!-- Logo --&gt;</span>\r
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-xl font-bold text-indigo-600<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>ShopApp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\r
          \r
          <span class="token comment">&lt;!-- User Controls --&gt;</span>\r
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center space-x-4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
            <span class="token comment">&lt;!-- Credits Display --&gt;</span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center bg-indigo-50 px-3 py-1 rounded-full<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-indigo-700 font-medium mr-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>125<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-5 w-5 text-indigo-500<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
            \r
            <span class="token comment">&lt;!-- User Dropdown --&gt;</span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleDropdown<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>U<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\r
              \r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isDropdownOpen<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown-menu<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Your Profile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Settings<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\r
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Sign out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>\r
\r
    <span class="token comment">&lt;!-- Product Grid --&gt;</span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-3xl font-bold text-gray-800 mb-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Available Products<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\r
      \r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-cols-1 md:grid-cols-3 gap-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
        <span class="token comment">&lt;!-- Product Cards --&gt;</span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-40 bg-indigo-50 rounded-md flex items-center justify-center mb-4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-20 w-20 text-indigo-400<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-xl font-semibold text-gray-800 mb-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Premium Software<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-gray-600 mb-4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Professional tools for your business needs.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-between items-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-lg font-bold text-indigo-600<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>50 credits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
                Purchase\r
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\r
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
        <span class="token comment">&lt;!-- More product cards... --&gt;</span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <h2>🚀 Potential Enhancements</h2>\r
        <p class="ds-markdown-paragraph">Take your authentication system to the next level with these improvements:</p>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Password Strength Meter</strong></p>\r
                <div class="md-code-block md-code-block-dark">\r
                    <div class="md-code-block-banner-wrap">\r
                        <div class="md-code-block-banner md-code-block-banner-lite">\r
                            <div class="_121d384">\r
                                <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                                <div class="d2a24f03">&nbsp;</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <pre><span class="token keyword">const</span> passwordStrength <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>registerForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>password<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>\r
  <span class="token keyword">let</span> strength <span class="token operator">=</span> <span class="token number">0</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>password<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">8</span><span class="token punctuation">)</span> strength <span class="token operator">+=</span> <span class="token number">1</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span> strength <span class="token operator">+=</span> <span class="token number">1</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span> strength <span class="token operator">+=</span> <span class="token number">1</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^A-Za-z0-9]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span> strength <span class="token operator">+=</span> <span class="token number">1</span>\r
  <span class="token keyword">return</span> strength\r
<span class="token punctuation">}</span><span class="token punctuation">)</span></pre>\r
                </div>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Social Login Integration</strong></p>\r
                <div class="md-code-block md-code-block-dark">\r
                    <div class="md-code-block-banner-wrap">\r
                        <div class="md-code-block-banner md-code-block-banner-lite">\r
                            <div class="_121d384">\r
                                <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                                <div class="d2a24f03">&nbsp;</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <pre><span class="token keyword">const</span> <span class="token function-variable function">loginWithGoogle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'/api/auth/google'</span>\r
<span class="token punctuation">}</span></pre>\r
                </div>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Email Verification Flow</strong></p>\r
                <div class="md-code-block md-code-block-dark">\r
                    <div class="md-code-block-banner-wrap">\r
                        <div class="md-code-block-banner md-code-block-banner-lite">\r
                            <div class="_121d384">\r
                                <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                                <div class="d2a24f03">&nbsp;</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <pre><span class="token keyword">const</span> <span class="token function-variable function">sendVerificationEmail</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/email/verification-notification'</span><span class="token punctuation">)</span>\r
  <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token string">'Verification email sent!'</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span></pre>\r
                </div>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Two-Factor Authentication</strong></p>\r
                <div class="md-code-block md-code-block-dark">\r
                    <div class="md-code-block-banner-wrap">\r
                        <div class="md-code-block-banner md-code-block-banner-lite">\r
                            <div class="_121d384">\r
                                <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                                <div class="d2a24f03">&nbsp;</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <pre><span class="token keyword">const</span> <span class="token function-variable function">enable2FA</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/two-factor-authentication'</span><span class="token punctuation">)</span>\r
  <span class="token comment">// Show QR code to user</span>\r
<span class="token punctuation">}</span></pre>\r
                </div>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Session Management</strong></p>\r
                <div class="md-code-block md-code-block-dark">\r
                    <div class="md-code-block-banner-wrap">\r
                        <div class="md-code-block-banner md-code-block-banner-lite">\r
                            <div class="_121d384">\r
                                <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                                <div class="d2a24f03">&nbsp;</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <pre><span class="token keyword">const</span> <span class="token function-variable function">logoutOtherDevices</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/logout-other-devices'</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span></pre>\r
                </div>\r
            </li>\r
        </ol>\r
        <h2>📱 Mobile Responsiveness</h2>\r
        <p class="ds-markdown-paragraph">Our design already includes responsive elements:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Flexbox and grid layouts that adapt</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Appropriate padding and spacing</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Touch-friendly form elements</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Mobile-first media queries</p>\r
            </li>\r
        </ul>\r
        <h2>🔒 Security Best Practices</h2>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph">Always use HTTPS in production</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Implement CSRF protection</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Rate limit authentication endpoints</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Use secure, HttpOnly cookies for production</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Regularly update dependencies</p>\r
            </li>\r
        </ol>\r
        <h2>🎉 Conclusion</h2>\r
        <p class="ds-markdown-paragraph">You've now built a complete authentication system with:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Beautiful, animated UI components</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Secure API communication</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Proper state management</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Error handling</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Responsive design</p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph">This foundation supports countless SaaS applications. In our next tutorial,\r
            we'll dive deeper into:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Role-based access control</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Subscription management</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Advanced dashboard features</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Performance optimization</p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph">What authentication features would you like to see next?</p>\r
    </article>\r
</body>\r
\r
</html>`,Ui=[{id:1,title:"Best Starter For Every Laravel Beginner: A Basic Yet Powerful CRUD App",slug:"basic-crud-app",image:"/larawell/images/user-dashboard.png",content:Hk},{id:2,title:"The Habit Tracker App",slug:"habit-tracker-app",image:"/larawell/images/habit-dashboard.png",content:$k,related:[{title:"Habit Tracker Fun Facts 👌",excerpt:"Did you know it takes 18 to 254 days to form a habit? The science behind behavior change is full of surprising...",slug:"habit-tracker-app-fun-facts",image:"/larawell/images/habit-fun-fa.jpeg",content:Vk},{title:"Debugging Your Habits 😁",slug:"habit-tracker-app-debugging",image:"/larawell/images/habit-debug.jpg",content:jk}]},{id:3,title:"Building a Fully Functional SaaS Application",slug:"saas-app",image:"/larawell/images/saas-app-1.jpeg",content:Nk,related:[{title:"Building Auth System For Your SaaS App",slug:"saas-app-building-auth-system",image:"/larawell/images/login-system.jpeg",content:zk},{title:"🎨 Building a Stunning Vue.js Authentication Interface with Laravel Backend",slug:"building-stunning-auth-system",image:"/larawell/images/auth-system-frontend.png",content:Uk}]}],Wk=["id"],qt={__name:"AdPlacement",props:{id:{type:String,required:!0}},setup(s){const n=s;return Bs(()=>{const t=document.getElementById(n.id);if(t&&!t.dataset.adLoaded){t.dataset.adLoaded="true";const o=document.createElement("script");o.innerHTML=`
      atOptions = {
        'key': '805b0332d9cd78f6b74f2105755970ff',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `,document.body.appendChild(o);const e=document.createElement("script");e.src="//www.highperformanceformat.com/805b0332d9cd78f6b74f2105755970ff/invoke.js",document.body.appendChild(e)}}),(t,o)=>(In(),Bn("div",{id:s.id,class:"ad-container"},null,8,Wk))}},Yk={class:"mb-4 w-full flex justify-center"},Gk={class:"flex justify-center pt-8 gap-6"},Kk={class:"hidden lg:block w-1/6"},Xk={class:"w-full max-w-3xl"},Qk=["src"],Jk={class:"mb-6 flex justify-center"},Zk=["innerHTML"],nh={class:"my-8 flex justify-center"},sh={key:0,class:"mt-20 border-t border-white/20 pt-10"},th={class:"space-y-8 max-w-3xl mx-auto px-4"},ah=["onClick"],eh={class:"flex flex-col sm:flex-row gap-4 items-center"},oh=["src"],rh={class:"text-lg font-bold text-white"},ih={class:"text-sm text-white/80 mt-1"},lh={class:"mt-10 flex justify-center"},ph={class:"hidden lg:block w-1/6"},ch={class:"mt-20 border-t border-white/20 pt-10"},uh={class:"space-y-8 max-w-3xl mx-auto px-4"},dh=["onClick"],fh={class:"flex flex-col sm:flex-row gap-4 items-center"},gh=["src"],kh={class:"text-lg font-bold text-white"},hh={class:"text-sm text-white/80 mt-1"},mh={__name:"BuildingAPI",setup(s){const n=jf(),t=gp(),o=Kn(()=>n.params.slug);function e(p){var f;for(const g of Ui){if(g.slug===p)return g;const c=(f=g.related)==null?void 0:f.find(k=>k.slug===p);if(c)return c}return null}Bs(()=>{r()}),ba(()=>n.params.slug,()=>{Le(()=>{r()})});const a=Jn(null);function r(){a.value&&a.value.querySelectorAll("[data-router-link]").forEach(p=>{p.addEventListener("click",f=>{f.preventDefault();const g=p.getAttribute("data-router-link");g&&t.push({name:"BlogPost",params:{slug:g}})})})}const i=Kn(()=>e(o.value)),l=Kn(()=>Ui.filter(p=>{var f;return p.slug!==((f=i.value)==null?void 0:f.slug)}).slice(0,3)),u=Kn(()=>{var p;return((p=i.value)==null?void 0:p.related)||[]});return(p,f)=>(In(),Bn(On,null,[gn(ea),$("div",Yk,[gn(qt,{id:"top-ad"})]),$("div",Gk,[$("div",Kk,[gn(qt,{id:"left-ad"})]),$("div",Xk,[$("img",{src:i.value.image,alt:"Cover Image",class:"mx-auto mb-4"},null,8,Qk),$("div",Jk,[gn(qt,{id:"under-image-ad"})]),$("div",{innerHTML:i.value.content,ref_key:"htmlNavigation",ref:a},null,8,Zk),$("div",nh,[gn(qt,{id:"midway-ad"})]),u.value.length?(In(),Bn("div",sh,[f[0]||(f[0]=$("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"Must Reads for Those Who Enjoyed This Blog",-1)),$("div",th,[(In(!0),Bn(On,null,Ra(u.value,g=>(In(),Bn("div",{key:g.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:c=>ps(t).push({name:"BlogPost",params:{slug:g.slug}})},[$("div",eh,[$("img",{src:g.image,alt:"Related blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,oh),$("div",null,[$("h3",rh,ls(g.title),1),$("p",ih,ls(g.excerpt),1)])])],8,ah))),128))])])):Xl("",!0),$("div",lh,[gn(qt,{id:"end-ad"})])]),$("div",ph,[gn(qt,{id:"right-ad"})])]),$("div",ch,[f[1]||(f[1]=$("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"More Blogs",-1)),$("div",uh,[(In(!0),Bn(On,null,Ra(l.value,g=>(In(),Bn("div",{key:g.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:c=>ps(t).push({name:"BlogPost",params:{slug:g.slug}})},[$("div",fh,[$("img",{src:g.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,gh),$("div",null,[$("h3",kh,ls(g.title),1),$("p",hh,ls(g.excerpt),1)])])],8,dh))),128))])])],64))}},Wi=gc(mh,[["__scopeId","data-v-44d2ee68"]]);var le={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var vh=le.exports,Yi;function bh(){return Yi||(Yi=1,function(s,n){(function(t,o){s.exports=o()})(vh,function(){var t={};t.version="0.2.0";var o=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(k){var d,h;for(d in k)h=k[d],h!==void 0&&k.hasOwnProperty(d)&&(o[d]=h);return this},t.status=null,t.set=function(k){var d=t.isStarted();k=e(k,o.minimum,1),t.status=k===1?null:k;var h=t.render(!d),v=h.querySelector(o.barSelector),b=o.speed,w=o.easing;return h.offsetWidth,i(function(S){o.positionUsing===""&&(o.positionUsing=t.getPositioningCSS()),l(v,r(k,b,w)),k===1?(l(h,{transition:"none",opacity:1}),h.offsetWidth,setTimeout(function(){l(h,{transition:"all "+b+"ms linear",opacity:0}),setTimeout(function(){t.remove(),S()},b)},b)):setTimeout(S,b)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var k=function(){setTimeout(function(){t.status&&(t.trickle(),k())},o.trickleSpeed)};return o.trickle&&k(),this},t.done=function(k){return!k&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(k){var d=t.status;return d?(typeof k!="number"&&(k=(1-d)*e(Math.random()*d,.1,.95)),d=e(d+k,0,.994),t.set(d)):t.start()},t.trickle=function(){return t.inc(Math.random()*o.trickleRate)},function(){var k=0,d=0;t.promise=function(h){return!h||h.state()==="resolved"?this:(d===0&&t.start(),k++,d++,h.always(function(){d--,d===0?(k=0,t.done()):t.set((k-d)/k)}),this)}}(),t.render=function(k){if(t.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var d=document.createElement("div");d.id="nprogress",d.innerHTML=o.template;var h=d.querySelector(o.barSelector),v=k?"-100":a(t.status||0),b=document.querySelector(o.parent),w;return l(h,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),o.showSpinner||(w=d.querySelector(o.spinnerSelector),w&&c(w)),b!=document.body&&p(b,"nprogress-custom-parent"),b.appendChild(d),d},t.remove=function(){f(document.documentElement,"nprogress-busy"),f(document.querySelector(o.parent),"nprogress-custom-parent");var k=document.getElementById("nprogress");k&&c(k)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var k=document.body.style,d="WebkitTransform"in k?"Webkit":"MozTransform"in k?"Moz":"msTransform"in k?"ms":"OTransform"in k?"O":"";return d+"Perspective"in k?"translate3d":d+"Transform"in k?"translate":"margin"};function e(k,d,h){return k<d?d:k>h?h:k}function a(k){return(-1+k)*100}function r(k,d,h){var v;return o.positionUsing==="translate3d"?v={transform:"translate3d("+a(k)+"%,0,0)"}:o.positionUsing==="translate"?v={transform:"translate("+a(k)+"%,0)"}:v={"margin-left":a(k)+"%"},v.transition="all "+d+"ms "+h,v}var i=function(){var k=[];function d(){var h=k.shift();h&&h(d)}return function(h){k.push(h),k.length==1&&d()}}(),l=function(){var k=["Webkit","O","Moz","ms"],d={};function h(S){return S.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(m,y){return y.toUpperCase()})}function v(S){var m=document.body.style;if(S in m)return S;for(var y=k.length,_=S.charAt(0).toUpperCase()+S.slice(1),x;y--;)if(x=k[y]+_,x in m)return x;return S}function b(S){return S=h(S),d[S]||(d[S]=v(S))}function w(S,m,y){m=b(m),S.style[m]=y}return function(S,m){var y=arguments,_,x;if(y.length==2)for(_ in m)x=m[_],x!==void 0&&m.hasOwnProperty(_)&&w(S,_,x);else w(S,y[1],y[2])}}();function u(k,d){var h=typeof k=="string"?k:g(k);return h.indexOf(" "+d+" ")>=0}function p(k,d){var h=g(k),v=h+d;u(h,d)||(k.className=v.substring(1))}function f(k,d){var h=g(k),v;u(k,d)&&(v=h.replace(" "+d+" "," "),k.className=v.substring(1,v.length-1))}function g(k){return(" "+(k.className||"")+" ").replace(/\s+/gi," ")}function c(k){k&&k.parentNode&&k.parentNode.removeChild(k)}return t})}(le)),le.exports}var xh=bh();const Pr=lr(xh),yh="/larawell/images/about-us.jpg",wh="/larawell/images/about-us2.jpg",_h={__name:"AboutUs",setup(s){return Bs(()=>{At.init({duration:800,easing:"ease-in-out",once:!0})}),(n,t)=>(In(),Bn(On,null,[gn(ea),t[0]||(t[0]=Oa('<div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20"><main class="container mx-auto px-4 py-12"><section class="max-w-4xl mx-auto"><h1 class="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center" data-aos="fade-down"> My Coding Journey </h1><div class="space-y-12"><div class="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">The Spark of Passion</h2><p class="text-gray-700"> It all began when I first encountered the world of coding. There was something magical about creating things from nothing but lines of text. The ability to build, solve problems, and bring ideas to life completely captivated me. </p></div></div><div class="md:w-1/2"><img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="Coding passion" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div><div class="flex flex-col md:flex-row-reverse gap-8 items-center" data-aos="fade-left"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Family&#39;s Encouragement</h2><p class="text-gray-700"> When my family noticed my growing interest, they encouraged me to pursue programming seriously. &quot;You have a knack for solving puzzles,&quot; they said. Their support gave me the confidence to dive deeper into the world of web development. </p></div></div><div class="md:w-1/2"><img src="'+yh+'" alt="Family support" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div><div class="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Discovering Laravel</h2><p class="text-gray-700"> After exploring various languages and frameworks, I found Laravel - a perfect blend of elegance and power. Its expressive syntax and robust ecosystem resonated with me. The more I learned, the more I appreciated the craftsmanship behind it. </p></div></div><div class="md:w-1/2"><img src="'+wh+'" alt="Laravel code" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div><div class="flex flex-col md:flex-row-reverse gap-8 items-center" data-aos="fade-left"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Overcoming Challenges</h2><p class="text-gray-700"> The journey wasn&#39;t without obstacles. There were moments of frustration when bugs seemed insurmountable or concepts felt too complex. But each challenge overcome made me stronger and more determined. </p></div></div><div class="md:w-1/2"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="Problem solving" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div><div class="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-up"><div class="md:w-1/2"><div class="bg-white p-6 rounded-xl shadow-lg h-full"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Where I Am Today</h2><p class="text-gray-700"> Now, as a solo developer, I combine my passion for clean code with the power of Laravel to create meaningful web applications. Every project is an opportunity to learn, grow, and push the boundaries of what I can build. Along with this website, I have also launched my blogspot that you can visit right now at <a href="https://larawell20.blogspot.com">Visit My Blogspot</a></p></div></div><div class="md:w-1/2"><img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="Current work" class="rounded-xl shadow-lg w-full h-64 object-cover"></div></div></div><div class="mt-16 text-center" data-aos="zoom-in"><p class="text-xl text-indigo-800 font-medium"> The journey continues, one line of code at a time... </p></div></section></main></div>',1))],64))}},Sh={class:"min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20"},Ch={class:"container mx-auto px-4 py-12"},Th={class:"max-w-4xl mx-auto"},Ph={class:"grid md:grid-cols-2 gap-12"},Mh={class:"bg-white rounded-xl shadow-lg p-8","data-aos":"fade-right"},Ah=["disabled"],Rh={key:0,class:"mt-4 text-green-600"},Eh={__name:"ContactUs",setup(s){const n=Jn({name:"",email:"",subject:"",message:""}),t=Jn(!1),o=Jn(""),e=()=>{t.value=!0,setTimeout(()=>{console.log("Form submitted:",n.value),o.value="Thank you for your message! I will get back to you soon.",n.value={name:"",email:"",subject:"",message:""},t.value=!1,setTimeout(()=>{o.value=""},5e3)},1500)};return Bs(()=>{At.init({duration:800,easing:"ease-in-out",once:!0})}),(a,r)=>(In(),Bn(On,null,[gn(ea),$("div",Sh,[$("main",Ch,[$("section",Th,[r[11]||(r[11]=$("h1",{class:"text-4xl md:text-5xl font-bold text-indigo-900 mb-4 text-center","data-aos":"fade-down"}," Let's Connect ",-1)),r[12]||(r[12]=$("p",{class:"text-xl text-indigo-700 text-center mb-12","data-aos":"fade-down","data-aos-delay":"100"}," I'd love to hear from you! ",-1)),$("div",Ph,[$("div",Mh,[r[9]||(r[9]=$("h2",{class:"text-2xl font-semibold text-purple-800 mb-6"},"Send Me a Message",-1)),$("form",{onSubmit:Od(e,["prevent"]),class:"space-y-6"},[$("div",null,[r[4]||(r[4]=$("label",{for:"name",class:"block text-gray-700 mb-2"},"Your Name",-1)),Xa($("input",{type:"text",id:"name","onUpdate:modelValue":r[0]||(r[0]=i=>n.value.name=i),class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:""},null,512),[[so,n.value.name]])]),$("div",null,[r[5]||(r[5]=$("label",{for:"email",class:"block text-gray-700 mb-2"},"Email Address",-1)),Xa($("input",{type:"email",id:"email","onUpdate:modelValue":r[1]||(r[1]=i=>n.value.email=i),class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:""},null,512),[[so,n.value.email]])]),$("div",null,[r[7]||(r[7]=$("label",{for:"subject",class:"block text-gray-700 mb-2"},"Subject",-1)),Xa($("select",{id:"subject","onUpdate:modelValue":r[2]||(r[2]=i=>n.value.subject=i),class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:""},r[6]||(r[6]=[Oa('<option value="" disabled selected>Select a topic</option><option value="recommendation">Recommendation</option><option value="guidance">Guidance Needed</option><option value="bug">Bug Report</option><option value="improvement">Improvement Suggestion</option><option value="sponsorship">Sponsorship Inquiry</option><option value="idea">Project Idea</option><option value="other">Other</option>',8)]),512),[[Ad,n.value.subject]])]),$("div",null,[r[8]||(r[8]=$("label",{for:"message",class:"block text-gray-700 mb-2"},"Your Message",-1)),Xa($("textarea",{id:"message","onUpdate:modelValue":r[3]||(r[3]=i=>n.value.message=i),rows:"5",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",required:""},null,512),[[so,n.value.message]])]),$("button",{type:"submit",class:"bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300",disabled:t.value},ls(t.value?"Sending...":"Send Message"),9,Ah),o.value?(In(),Bn("p",Rh,ls(o.value),1)):Xl("",!0)],32)]),r[10]||(r[10]=Oa('<div class="space-y-8" data-aos="fade-left"><div class="bg-white rounded-xl shadow-lg p-8"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Why Reach Out?</h2><ul class="space-y-4 text-gray-700"><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Need recommendations for your Laravel project</span></li><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Seeking guidance on web development challenges</span></li><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Found bugs or have improvement suggestions</span></li><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Interested in sponsorship opportunities</span></li><li class="flex items-start"><svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Have exciting project ideas to discuss</span></li></ul></div><div class="bg-white rounded-xl shadow-lg p-8"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Direct Contact</h2><div class="space-y-4 text-gray-700"><div class="flex items-center"><svg class="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span>mcdanishp@gmail.com</span></div><div class="flex items-center"><svg class="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg><span>@professional_gamer20</span></div></div></div></div>',1))])])])])],64))}},Oh={__name:"PrivacyPolicy",setup(s){return Bs(()=>{At.init({duration:800,easing:"ease-in-out",once:!0})}),(n,t)=>(In(),Bn(On,null,[gn(ea),t[0]||(t[0]=Oa('<div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20"><main class="container mx-auto px-4 py-12"><section class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8"><h1 class="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center" data-aos="fade-down"> Privacy Policy </h1><div class="prose max-w-none" data-aos="fade-up"><p class="text-gray-700 mb-6">Last Updated: July 19th, 2025</p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Information We Collect</h2><p class="text-gray-700 mb-4"> We may collect personal information such as your name, email address, and IP address when you interact with our website, subscribe to our newsletter, or contact us through our forms. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">How We Use Your Information</h2><p class="text-gray-700 mb-4"> The information we collect may be used to: </p><ul class="list-disc pl-6 text-gray-700 mb-6 space-y-2"><li>Provide and maintain our service</li><li>Notify you about changes to our service</li><li>Allow you to participate in interactive features</li><li>Provide customer support</li><li>Gather analysis or valuable information to improve our service</li><li>Monitor the usage of our service</li><li>Detect, prevent and address technical issues</li></ul><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Cookies and Tracking</h2><p class="text-gray-700 mb-4"> We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Third-Party Services</h2><p class="text-gray-700 mb-4"> We may employ third-party companies and individuals to facilitate our service (&quot;Service Providers&quot;), provide the service on our behalf, perform service-related services or assist us in analyzing how our service is used. </p><p class="text-gray-700 mb-6"> These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Google Analytics</h2><p class="text-gray-700 mb-4"> We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered is used to create reports about the use of our website. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Changes to This Privacy Policy</h2><p class="text-gray-700 mb-4"> We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. </p><h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Contact Us</h2><p class="text-gray-700"> If you have any questions about this Privacy Policy, please contact us at <a href="mailto:email@example.com" class="text-purple-600 hover:underline">mcdanishp@gmail.com</a>. </p></div></section></main></div>',1))],64))}},Ih={class:"min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20"},qh={class:"container mx-auto px-4 py-12"},Dh={class:"max-w-4xl mx-auto"},Lh={class:"space-y-12"},Bh={class:"bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg p-8 text-center","data-aos":"zoom-in"},Fh={__name:"Resources",setup(s){return Bs(()=>{At.init({duration:800,easing:"ease-in-out",once:!0})}),(n,t)=>{const o=Al("router-link");return In(),Bn(On,null,[gn(ea),$("div",Ih,[$("main",qh,[$("section",Dh,[t[4]||(t[4]=$("h1",{class:"text-4xl md:text-5xl font-bold text-indigo-900 mb-4 text-center","data-aos":"fade-down"}," Developer Resources ",-1)),t[5]||(t[5]=$("p",{class:"text-xl text-indigo-700 text-center mb-12","data-aos":"fade-down","data-aos-delay":"100"}," Tools and references that fuel my development journey ",-1)),$("div",Lh,[t[3]||(t[3]=Oa('<div class="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up"><h2 class="text-2xl font-semibold text-purple-800 mb-4">Why Quality Resources Matter</h2><p class="text-gray-700 mb-4"> When I first started coding, I quickly realized that not all learning resources are created equal. The right documentation, tutorials, and community support can make the difference between frustration and breakthrough. </p><p class="text-gray-700"> Over time, I&#39;ve curated this list of resources that have consistently helped me and countless other developers - from complete beginners to seasoned professionals. These are the references I wish I had known about when I started. </p></div><div class="grid md:grid-cols-2 gap-6"><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-right"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-blue-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">MDN Web Docs</h3></div><p class="text-gray-700 mb-4"> The ultimate reference for web technologies. When I need authoritative, up-to-date information about HTML, CSS, or JavaScript, this is my first stop. </p><a href="https://developer.mozilla.org" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit MDN <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-red-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">Laravel Documentation</h3></div><p class="text-gray-700 mb-4"> The framework that changed my development workflow. Laravel&#39;s documentation is exceptionally clear and comprehensive - a model for how framework docs should be written. </p><a href="https://laravel.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit Laravel <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-right"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-blue-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">Laracasts</h3></div><p class="text-gray-700 mb-4"> Jeffrey Way&#39;s video tutorials helped me understand complex concepts through practical examples. The &quot;Laravel From Scratch&quot; series was particularly transformative for my skills. </p><a href="https://laracasts.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit Laracasts <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-teal-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">Tailwind CSS</h3></div><p class="text-gray-700 mb-4"> The utility-first CSS framework that made styling enjoyable again. Their documentation is excellent, and the playground lets you experiment right in the browser. </p><a href="https://tailwindcss.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit Tailwind <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-right"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-orange-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">Stack Overflow</h3></div><p class="text-gray-700 mb-4"> The programmer&#39;s best friend. Almost every developer I know has been saved by a Stack Overflow answer at some point. Learning to search effectively here is a crucial skill. </p><a href="https://stackoverflow.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit Stack Overflow <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left"><div class="p-6"><div class="flex items-center mb-4"><div class="bg-green-100 p-3 rounded-lg mr-4"><svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800">W3Schools</h3></div><p class="text-gray-700 mb-4"> Perfect for beginners looking for simple, practical examples. Their &quot;Try it Yourself&quot; editor lets you experiment with code right in your browser. </p><a href="https://www.w3schools.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline"> Visit W3Schools <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div></div>',2)),$("div",Bh,[t[1]||(t[1]=$("h2",{class:"text-2xl md:text-3xl font-bold text-white mb-4"},"Ready to Build Your Own Legacy?",-1)),t[2]||(t[2]=$("p",{class:"text-purple-100 mb-6 text-lg"}," Start your development journey with our curated tutorials and resources ",-1)),gn(o,{to:"/"},{default:tt(()=>t[0]||(t[0]=[$("span",{class:"inline-block bg-white text-purple-600 font-medium py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300"}," Explore Tutorials ",-1)])),_:1,__:[0]})])])])])])],64)}}};Pr.configure({showSpinner:!1});const Mr=Hf({history:hf(),scrollBehavior(s,n,t){return{top:0}},routes:[{path:"/",name:"home",component:Fk},{path:"/about-us",name:"about-us",component:_h},{path:"/contact-us",name:"contact-us",component:Eh},{path:"/privacy-policy",name:"privacy-policy",component:Oh},{path:"/resources",name:"resources",component:Fh},{path:"/building-api",name:"buildingAPI",component:Wi},{path:"/blog/:slug",name:"BlogPost",component:Wi}]});Mr.beforeEach((s,n,t)=>{Pr.start(),t()});Mr.afterEach(()=>{Pr.done()});At.init();const kc=Dd(Vf);kc.use(Mr);kc.mount("#app");

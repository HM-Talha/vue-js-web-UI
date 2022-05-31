var Qm=Object.defineProperty,Xm=Object.defineProperties;var Jm=Object.getOwnPropertyDescriptors;var Au=Object.getOwnPropertySymbols;var Zm=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable;var Tu=(t,e,n)=>e in t?Qm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ts=(t,e)=>{for(var n in e||(e={}))Zm.call(e,n)&&Tu(t,n,e[n]);if(Au)for(var n of Au(e))ey.call(e,n)&&Tu(t,n,e[n]);return t},bu=(t,e)=>Xm(t,Jm(e));const ty=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};ty();function Lc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ny="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sy=Lc(ny);function Ld(t){return!!t||t===""}function xc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ne(s)?oy(s):xc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ne(t))return t;if(Ce(t))return t}}const ry=/;(?![^(]*\))/g,iy=/:(.+)/;function oy(t){const e={};return t.split(ry).forEach(n=>{if(n){const s=n.split(iy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Uc(t){let e="";if(Ne(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Uc(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bi=t=>Ne(t)?t:t==null?"":z(t)||Ce(t)&&(t.toString===Vd||!J(t.toString))?JSON.stringify(t,xd,2):String(t),xd=(t,e)=>e&&e.__v_isRef?xd(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ud(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!z(e)&&!Bd(e)?String(e):e,he={},fs=[],wt=()=>{},ay=()=>!1,cy=/^on[^a-z]/,yo=t=>cy.test(t),Fc=t=>t.startsWith("onUpdate:"),tt=Object.assign,Vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ly=Object.prototype.hasOwnProperty,ne=(t,e)=>ly.call(t,e),z=Array.isArray,ps=t=>vo(t)==="[object Map]",Ud=t=>vo(t)==="[object Set]",J=t=>typeof t=="function",Ne=t=>typeof t=="string",Bc=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Fd=t=>Ce(t)&&J(t.then)&&J(t.catch),Vd=Object.prototype.toString,vo=t=>Vd.call(t),uy=t=>vo(t).slice(8,-1),Bd=t=>vo(t)==="[object Object]",$c=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Si=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hy=/-(\w)/g,Es=wo(t=>t.replace(hy,(e,n)=>n?n.toUpperCase():"")),dy=/\B([A-Z])/g,Ls=wo(t=>t.replace(dy,"-$1").toLowerCase()),$d=wo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ca=wo(t=>t?`on${$d(t)}`:""),gr=(t,e)=>!Object.is(t,e),Ci=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Va=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Su;const fy=()=>Su||(Su=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let St;class jd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&St&&(this.parent=St,this.index=(St.scopes||(St.scopes=[])).push(this)-1)}run(e){if(this.active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function py(t){return new jd(t)}function gy(t,e=St){e&&e.active&&e.effects.push(t)}const jc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Kd=t=>(t.w&gn)>0,Hd=t=>(t.n&gn)>0,my=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gn},yy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Kd(r)&&!Hd(r)?r.delete(t):e[n++]=r,r.w&=~gn,r.n&=~gn}e.length=n}},Ba=new WeakMap;let Js=0,gn=1;const $a=30;let vt;const kn=Symbol(""),ja=Symbol("");class Kc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gy(this,s)}run(){if(!this.active)return this.fn();let e=vt,n=cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=vt,vt=this,cn=!0,gn=1<<++Js,Js<=$a?my(this):Cu(this),this.fn()}finally{Js<=$a&&yy(this),gn=1<<--Js,vt=this.parent,cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vt===this?this.deferStop=!0:this.active&&(Cu(this),this.onStop&&this.onStop(),this.active=!1)}}function Cu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let cn=!0;const qd=[];function xs(){qd.push(cn),cn=!1}function Us(){const t=qd.pop();cn=t===void 0?!0:t}function ft(t,e,n){if(cn&&vt){let s=Ba.get(t);s||Ba.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=jc()),Wd(r)}}function Wd(t,e){let n=!1;Js<=$a?Hd(t)||(t.n|=gn,n=!Kd(t)):n=!t.has(vt),n&&(t.add(vt),vt.deps.push(t))}function jt(t,e,n,s,r,i){const o=Ba.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?$c(n)&&a.push(o.get("length")):(a.push(o.get(kn)),ps(t)&&a.push(o.get(ja)));break;case"delete":z(t)||(a.push(o.get(kn)),ps(t)&&a.push(o.get(ja)));break;case"set":ps(t)&&a.push(o.get(kn));break}if(a.length===1)a[0]&&Ka(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ka(jc(c))}}function Ka(t,e){for(const n of z(t)?t:[...t])(n!==vt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const vy=Lc("__proto__,__v_isRef,__isVue"),zd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Bc)),wy=Hc(),_y=Hc(!1,!0),Ey=Hc(!0),Ru=Iy();function Iy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)ft(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xs();const s=oe(this)[e].apply(this,n);return Us(),s}}),t}function Hc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Fy:Jd:e?Xd:Qd).get(s))return s;const o=z(s);if(!t&&o&&ne(Ru,r))return Reflect.get(Ru,r,i);const a=Reflect.get(s,r,i);return(Bc(r)?zd.has(r):vy(r))||(t||ft(s,"get",r),e)?a:Ee(a)?!o||!$c(r)?a.value:a:Ce(a)?t?Zd(a):Vr(a):a}}const Ay=Gd(),Ty=Gd(!0);function Gd(t=!1){return function(n,s,r,i){let o=n[s];if(mr(o)&&Ee(o)&&!Ee(r))return!1;if(!t&&!mr(r)&&(ef(r)||(r=oe(r),o=oe(o)),!z(n)&&Ee(o)&&!Ee(r)))return o.value=r,!0;const a=z(n)&&$c(s)?Number(s)<n.length:ne(n,s),c=Reflect.set(n,s,r,i);return n===oe(i)&&(a?gr(r,o)&&jt(n,"set",s,r):jt(n,"add",s,r)),c}}function by(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&jt(t,"delete",e,void 0),s}function Sy(t,e){const n=Reflect.has(t,e);return(!Bc(e)||!zd.has(e))&&ft(t,"has",e),n}function Cy(t){return ft(t,"iterate",z(t)?"length":kn),Reflect.ownKeys(t)}const Yd={get:wy,set:Ay,deleteProperty:by,has:Sy,ownKeys:Cy},Ry={get:Ey,set(t,e){return!0},deleteProperty(t,e){return!0}},ky=tt({},Yd,{get:_y,set:Ty}),qc=t=>t,_o=t=>Reflect.getPrototypeOf(t);function ui(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);e!==i&&!n&&ft(r,"get",e),!n&&ft(r,"get",i);const{has:o}=_o(r),a=s?qc:n?Yc:yr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function hi(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return t!==r&&!e&&ft(s,"has",t),!e&&ft(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function di(t,e=!1){return t=t.__v_raw,!e&&ft(oe(t),"iterate",kn),Reflect.get(t,"size",t)}function ku(t){t=oe(t);const e=oe(this);return _o(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function Nu(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=_o(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?gr(e,o)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function Du(t){const e=oe(this),{has:n,get:s}=_o(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&jt(e,"delete",t,void 0),i}function Ou(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function fi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),c=e?qc:t?Yc:yr;return!t&&ft(a,"iterate",kn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function pi(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=ps(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?qc:e?Yc:yr;return!e&&ft(i,"iterate",c?ja:kn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function zt(t){return function(...e){return t==="delete"?!1:this}}function Ny(){const t={get(i){return ui(this,i)},get size(){return di(this)},has:hi,add:ku,set:Nu,delete:Du,clear:Ou,forEach:fi(!1,!1)},e={get(i){return ui(this,i,!1,!0)},get size(){return di(this)},has:hi,add:ku,set:Nu,delete:Du,clear:Ou,forEach:fi(!1,!0)},n={get(i){return ui(this,i,!0)},get size(){return di(this,!0)},has(i){return hi.call(this,i,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:fi(!0,!1)},s={get(i){return ui(this,i,!0,!0)},get size(){return di(this,!0)},has(i){return hi.call(this,i,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:fi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=pi(i,!1,!1),n[i]=pi(i,!0,!1),e[i]=pi(i,!1,!0),s[i]=pi(i,!0,!0)}),[t,n,e,s]}const[Dy,Oy,Py,My]=Ny();function Wc(t,e){const n=e?t?My:Py:t?Oy:Dy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ne(n,r)&&r in s?n:s,r,i)}const Ly={get:Wc(!1,!1)},xy={get:Wc(!1,!0)},Uy={get:Wc(!0,!1)},Qd=new WeakMap,Xd=new WeakMap,Jd=new WeakMap,Fy=new WeakMap;function Vy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function By(t){return t.__v_skip||!Object.isExtensible(t)?0:Vy(uy(t))}function Vr(t){return mr(t)?t:zc(t,!1,Yd,Ly,Qd)}function $y(t){return zc(t,!1,ky,xy,Xd)}function Zd(t){return zc(t,!0,Ry,Uy,Jd)}function zc(t,e,n,s,r){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=By(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function gs(t){return mr(t)?gs(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function ef(t){return!!(t&&t.__v_isShallow)}function tf(t){return gs(t)||mr(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Gc(t){return Bi(t,"__v_skip",!0),t}const yr=t=>Ce(t)?Vr(t):t,Yc=t=>Ce(t)?Zd(t):t;function nf(t){cn&&vt&&(t=oe(t),Wd(t.dep||(t.dep=jc())))}function sf(t,e){t=oe(t),t.dep&&Ka(t.dep)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function rf(t){return of(t,!1)}function jy(t){return of(t,!0)}function of(t,e){return Ee(t)?t:new Ky(t,e)}class Ky{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:yr(e)}get value(){return nf(this),this._value}set value(e){e=this.__v_isShallow?e:oe(e),gr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:yr(e),sf(this))}}function ms(t){return Ee(t)?t.value:t}const Hy={get:(t,e,n)=>ms(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ee(r)&&!Ee(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function af(t){return gs(t)?t:new Proxy(t,Hy)}class qy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Kc(e,()=>{this._dirty||(this._dirty=!0,sf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=oe(this);return nf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Wy(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=wt):(s=t.get,r=t.set),new qy(s,r,i||!r,n)}function ln(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Eo(i,e,n)}return r}function _t(t,e,n,s){if(J(t)){const i=ln(t,e,n,s);return i&&Fd(i)&&i.catch(o=>{Eo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(_t(t[i],e,n,s));return r}function Eo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ln(c,null,10,[t,o,a]);return}}zy(t,n,r,s)}function zy(t,e,n,s=!0){console.error(t)}let $i=!1,Ha=!1;const ut=[];let Ut=0;const sr=[];let Zs=null,os=0;const rr=[];let Jt=null,as=0;const cf=Promise.resolve();let Qc=null,qa=null;function lf(t){const e=Qc||cf;return t?e.then(this?t.bind(this):t):e}function Gy(t){let e=Ut+1,n=ut.length;for(;e<n;){const s=e+n>>>1;vr(ut[s])<t?e=s+1:n=s}return e}function uf(t){(!ut.length||!ut.includes(t,$i&&t.allowRecurse?Ut+1:Ut))&&t!==qa&&(t.id==null?ut.push(t):ut.splice(Gy(t.id),0,t),hf())}function hf(){!$i&&!Ha&&(Ha=!0,Qc=cf.then(pf))}function Yy(t){const e=ut.indexOf(t);e>Ut&&ut.splice(e,1)}function df(t,e,n,s){z(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),hf()}function Qy(t){df(t,Zs,sr,os)}function Xy(t){df(t,Jt,rr,as)}function Xc(t,e=null){if(sr.length){for(qa=e,Zs=[...new Set(sr)],sr.length=0,os=0;os<Zs.length;os++)Zs[os]();Zs=null,os=0,qa=null,Xc(t,e)}}function ff(t){if(rr.length){const e=[...new Set(rr)];if(rr.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,s)=>vr(n)-vr(s)),as=0;as<Jt.length;as++)Jt[as]();Jt=null,as=0}}const vr=t=>t.id==null?1/0:t.id;function pf(t){Ha=!1,$i=!0,Xc(t),ut.sort((n,s)=>vr(n)-vr(s));const e=wt;try{for(Ut=0;Ut<ut.length;Ut++){const n=ut[Ut];n&&n.active!==!1&&ln(n,null,14)}}finally{Ut=0,ut.length=0,ff(),$i=!1,Qc=null,(ut.length||sr.length||rr.length)&&pf(t)}}function Jy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||he;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||he;d?r=n.map(g=>g.trim()):h&&(r=n.map(Va))}let a,c=s[a=ca(e)]||s[a=ca(Es(e))];!c&&i&&(c=s[a=ca(Ls(e))]),c&&_t(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(l,t,6,r)}}function gf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=gf(l,e,!0);u&&(a=!0,tt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):tt(o,i),s.set(t,o),o)}function Io(t,e){return!t||!yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Ls(e))||ne(t,e))}let Nt=null,Ao=null;function ji(t){const e=Nt;return Nt=t,Ao=t&&t.type.__scopeId||null,e}function Jc(t){Ao=t}function Zc(){Ao=null}function Zy(t,e=Nt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&$u(-1);const i=ji(e),o=t(...r);return ji(i),s._d&&$u(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function la(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:m,inheritAttrs:C}=t;let A,k;const L=ji(t);try{if(n.shapeFlag&4){const Q=r||s;A=Rt(u.call(Q,Q,h,i,g,d,m)),k=c}else{const Q=e;A=Rt(Q.length>1?Q(i,{attrs:c,slots:a,emit:l}):Q(i,null)),k=e.props?c:ev(c)}}catch(Q){or.length=0,Eo(Q,t,1),A=ot(Ln)}let G=A;if(k&&C!==!1){const Q=Object.keys(k),{shapeFlag:_e}=G;Q.length&&_e&7&&(o&&Q.some(Fc)&&(k=tv(k,o)),G=wr(G,k))}return n.dirs&&(G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),A=G,ji(L),A}const ev=t=>{let e;for(const n in t)(n==="class"||n==="style"||yo(n))&&((e||(e={}))[n]=t[n]);return e},tv=(t,e)=>{const n={};for(const s in t)(!Fc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function nv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Pu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Io(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Pu(s,o,l):!0:!!o;return!1}function Pu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Io(n,i))return!0}return!1}function sv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const rv=t=>t.__isSuspense;function iv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Xy(t)}function Ri(t,e){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[t]=e}}function un(t,e,n=!1){const s=We||Nt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const Mu={};function ki(t,e,n){return mf(t,e,n)}function mf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=he){const a=We;let c,l=!1,u=!1;if(Ee(t)?(c=()=>t.value,l=ef(t)):gs(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(gs),c=()=>t.map(k=>{if(Ee(k))return k.value;if(gs(k))return Sn(k);if(J(k))return ln(k,a,2)})):J(t)?e?c=()=>ln(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),_t(t,a,3,[d])}:c=wt,e&&s){const k=c;c=()=>Sn(k())}let h,d=k=>{h=A.onStop=()=>{ln(k,a,4)}};if(_r)return d=wt,e?n&&_t(e,a,3,[c(),u?[]:void 0,d]):c(),wt;let g=u?[]:Mu;const m=()=>{if(!!A.active)if(e){const k=A.run();(s||l||(u?k.some((L,G)=>gr(L,g[G])):gr(k,g)))&&(h&&h(),_t(e,a,3,[k,g===Mu?void 0:g,d]),g=k)}else A.run()};m.allowRecurse=!!e;let C;r==="sync"?C=m:r==="post"?C=()=>st(m,a&&a.suspense):C=()=>{!a||a.isMounted?Qy(m):m()};const A=new Kc(c,C);return e?n?m():g=A.run():r==="post"?st(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Vc(a.scope.effects,A)}}function ov(t,e,n){const s=this.proxy,r=Ne(t)?t.includes(".")?yf(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=We;Is(this);const a=mf(r,i.bind(s),n);return o?Is(o):Dn(),a}function yf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Sn(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ee(t))Sn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Sn(t[n],e);else if(Ud(t)||ps(t))t.forEach(n=>{Sn(n,e)});else if(Bd(t))for(const n in t)Sn(t[n],e);return t}function vf(t){return J(t)?{setup:t,name:t.name}:t}const Wa=t=>!!t.type.__asyncLoader,wf=t=>t.type.__isKeepAlive;function av(t,e){_f(t,"a",e)}function cv(t,e){_f(t,"da",e)}function _f(t,e,n=We){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(To(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wf(r.parent.vnode)&&lv(s,e,n,r),r=r.parent}}function lv(t,e,n,s){const r=To(e,t,s,!0);Ef(()=>{Vc(s[e],r)},n)}function To(t,e,n=We,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;xs(),Is(n);const a=_t(e,n,t,o);return Dn(),Us(),a});return s?r.unshift(i):r.push(i),i}}const qt=t=>(e,n=We)=>(!_r||t==="sp")&&To(t,e,n),uv=qt("bm"),hv=qt("m"),dv=qt("bu"),fv=qt("u"),pv=qt("bum"),Ef=qt("um"),gv=qt("sp"),mv=qt("rtg"),yv=qt("rtc");function vv(t,e=We){To("ec",t,e)}let za=!0;function wv(t){const e=Af(t),n=t.proxy,s=t.ctx;za=!1,e.beforeCreate&&Lu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:C,deactivated:A,beforeDestroy:k,beforeUnmount:L,destroyed:G,unmounted:Q,render:_e,renderTracked:Ie,renderTriggered:Ye,errorCaptured:Wt,serverPrefetch:nt,expose:It,inheritAttrs:Mt,components:Lt,directives:Qn,filters:Xn}=e;if(l&&_v(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const ae=o[de];J(ae)&&(s[de]=ae.bind(n))}if(r){const de=r.call(n,n);Ce(de)&&(t.data=Vr(de))}if(za=!0,i)for(const de in i){const ae=i[de],ct=J(ae)?ae.bind(n,n):J(ae.get)?ae.get.bind(n,n):wt,Zn=!J(ae)&&J(ae.set)?ae.set.bind(n):wt,xt=kt({get:ct,set:Zn});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>xt.value,set:At=>xt.value=At})}if(a)for(const de in a)If(a[de],s,n,de);if(c){const de=J(c)?c.call(n):c;Reflect.ownKeys(de).forEach(ae=>{Ri(ae,de[ae])})}u&&Lu(u,t,"c");function Se(de,ae){z(ae)?ae.forEach(ct=>de(ct.bind(n))):ae&&de(ae.bind(n))}if(Se(uv,h),Se(hv,d),Se(dv,g),Se(fv,m),Se(av,C),Se(cv,A),Se(vv,Wt),Se(yv,Ie),Se(mv,Ye),Se(pv,L),Se(Ef,Q),Se(gv,nt),z(It))if(It.length){const de=t.exposed||(t.exposed={});It.forEach(ae=>{Object.defineProperty(de,ae,{get:()=>n[ae],set:ct=>n[ae]=ct})})}else t.exposed||(t.exposed={});_e&&t.render===wt&&(t.render=_e),Mt!=null&&(t.inheritAttrs=Mt),Lt&&(t.components=Lt),Qn&&(t.directives=Qn)}function _v(t,e,n=wt,s=!1){z(t)&&(t=Ga(t));for(const r in t){const i=t[r];let o;Ce(i)?"default"in i?o=un(i.from||r,i.default,!0):o=un(i.from||r):o=un(i),Ee(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Lu(t,e,n){_t(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function If(t,e,n,s){const r=s.includes(".")?yf(n,s):()=>n[s];if(Ne(t)){const i=e[t];J(i)&&ki(r,i)}else if(J(t))ki(r,t.bind(n));else if(Ce(t))if(z(t))t.forEach(i=>If(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&ki(r,i,t)}}function Af(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ki(c,l,o,!0)),Ki(c,e,o)),i.set(e,c),c}function Ki(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ki(t,i,n,!0),r&&r.forEach(o=>Ki(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ev[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ev={data:xu,props:An,emits:An,methods:An,computed:An,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:An,directives:An,watch:Av,provide:xu,inject:Iv};function xu(t,e){return e?t?function(){return tt(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Iv(t,e){return An(Ga(t),Ga(e))}function Ga(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function An(t,e){return t?tt(tt(Object.create(null),t),e):e}function Av(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const s in e)n[s]=Qe(t[s],e[s]);return n}function Tv(t,e,n,s=!1){const r={},i={};Bi(i,bo,1),t.propsDefaults=Object.create(null),Tf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:$y(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function bv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Io(t.emitsOptions,d))continue;const g=e[d];if(c)if(ne(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const m=Es(d);r[m]=Ya(c,a,m,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Tf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Ls(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ya(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ne(e,h)&&!0)&&(delete i[h],l=!0)}l&&jt(t,"set","$attrs")}function Tf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Si(c))continue;const l=e[c];let u;r&&ne(r,u=Es(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Io(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=oe(n),l=a||he;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ya(r,c,h,l[h],t,!ne(l,h))}}return o}function Ya(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Is(r),s=l[n]=c.call(null,e),Dn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function bf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[d,g]=bf(h,e,!0);tt(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,fs),fs;if(z(i))for(let u=0;u<i.length;u++){const h=Es(i[u]);Uu(h)&&(o[h]=he)}else if(i)for(const u in i){const h=Es(u);if(Uu(h)){const d=i[u],g=o[h]=z(d)||J(d)?{type:d}:d;if(g){const m=Bu(Boolean,g.type),C=Bu(String,g.type);g[0]=m>-1,g[1]=C<0||m<C,(m>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function Uu(t){return t[0]!=="$"}function Fu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Vu(t,e){return Fu(t)===Fu(e)}function Bu(t,e){return z(e)?e.findIndex(n=>Vu(n,t)):J(e)&&Vu(e,t)?0:-1}const Sf=t=>t[0]==="_"||t==="$stable",el=t=>z(t)?t.map(Rt):[Rt(t)],Sv=(t,e,n)=>{const s=Zy((...r)=>el(e(...r)),n);return s._c=!1,s},Cf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Sf(r))continue;const i=t[r];if(J(i))e[r]=Sv(r,i,s);else if(i!=null){const o=el(i);e[r]=()=>o}}},Rf=(t,e)=>{const n=el(e);t.slots.default=()=>n},Cv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Bi(e,"_",n)):Cf(e,t.slots={})}else t.slots={},e&&Rf(t,e);Bi(t.slots,bo,1)},Rv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=he;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(tt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Cf(e,r)),o=e}else e&&(Rf(t,e),o={default:1});if(i)for(const a in r)!Sf(a)&&!(a in o)&&delete r[a]};function ir(t,e){const n=Nt;if(n===null)return t;const s=So(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=he]=e[i];J(o)&&(o={mounted:o,updated:o}),o.deep&&Sn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function En(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(xs(),_t(c,n,8,[t.el,a,t,e]),Us())}}function kf(){return{app:null,config:{isNativeTag:ay,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kv=0;function Nv(t,e){return function(s,r=null){J(s)||(s=Object.assign({},s)),r!=null&&!Ce(r)&&(r=null);const i=kf(),o=new Set;let a=!1;const c=i.app={_uid:kv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Qv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ot(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,So(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Qa(t,e,n,s,r=!1){if(z(t)){t.forEach((d,g)=>Qa(d,e&&(z(e)?e[g]:e),n,s,r));return}if(Wa(s)&&!r)return;const i=s.shapeFlag&4?So(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===he?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ne(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):Ee(l)&&(l.value=null)),J(c))ln(c,a,12,[o,u]);else{const d=Ne(c),g=Ee(c);if(d||g){const m=()=>{if(t.f){const C=d?u[c]:c.value;r?z(C)&&Vc(C,i):z(C)?C.includes(i)||C.push(i):d?(u[c]=[i],ne(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ne(h,c)&&(h[c]=o)):Ee(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,st(m,n)):m()}}}const st=iv;function Dv(t){return Ov(t)}function Ov(t,e){const n=fy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=wt,cloneNode:m,insertStaticContent:C}=t,A=(f,p,y,E=null,_=null,S=null,O=!1,T=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!Gs(f,p)&&(E=V(f),gt(f,_,S,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:I,ref:$,shapeFlag:x}=p;switch(I){case tl:k(f,p,y,E);break;case Ln:L(f,p,y,E);break;case Ni:f==null&&G(p,y,E,O);break;case mt:Qn(f,p,y,E,_,S,O,T,R);break;default:x&1?Ie(f,p,y,E,_,S,O,T,R):x&6?Xn(f,p,y,E,_,S,O,T,R):(x&64||x&128)&&I.process(f,p,y,E,_,S,O,T,R,fe)}$!=null&&_&&Qa($,f&&f.ref,S,p||f,!p)},k=(f,p,y,E)=>{if(f==null)s(p.el=a(p.children),y,E);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},L=(f,p,y,E)=>{f==null?s(p.el=c(p.children||""),y,E):p.el=f.el},G=(f,p,y,E)=>{[f.el,f.anchor]=C(f.children,p,y,E,f.el,f.anchor)},Q=({el:f,anchor:p},y,E)=>{let _;for(;f&&f!==p;)_=d(f),s(f,y,E),f=_;s(p,y,E)},_e=({el:f,anchor:p})=>{let y;for(;f&&f!==p;)y=d(f),r(f),f=y;r(p)},Ie=(f,p,y,E,_,S,O,T,R)=>{O=O||p.type==="svg",f==null?Ye(p,y,E,_,S,O,T,R):It(f,p,_,S,O,T,R)},Ye=(f,p,y,E,_,S,O,T)=>{let R,I;const{type:$,props:x,shapeFlag:j,transition:q,patchFlag:se,dirs:ve}=f;if(f.el&&m!==void 0&&se===-1)R=f.el=m(f.el);else{if(R=f.el=o(f.type,S,x&&x.is,x),j&8?u(R,f.children):j&16&&nt(f.children,R,null,E,_,S&&$!=="foreignObject",O,T),ve&&En(f,null,E,"created"),x){for(const ge in x)ge!=="value"&&!Si(ge)&&i(R,ge,null,x[ge],S,f.children,E,_,N);"value"in x&&i(R,"value",null,x.value),(I=x.onVnodeBeforeMount)&&bt(I,E,f)}Wt(R,f,f.scopeId,O,E)}ve&&En(f,null,E,"beforeMount");const le=(!_||_&&!_.pendingBranch)&&q&&!q.persisted;le&&q.beforeEnter(R),s(R,p,y),((I=x&&x.onVnodeMounted)||le||ve)&&st(()=>{I&&bt(I,E,f),le&&q.enter(R),ve&&En(f,null,E,"mounted")},_)},Wt=(f,p,y,E,_)=>{if(y&&g(f,y),E)for(let S=0;S<E.length;S++)g(f,E[S]);if(_){let S=_.subTree;if(p===S){const O=_.vnode;Wt(f,O,O.scopeId,O.slotScopeIds,_.parent)}}},nt=(f,p,y,E,_,S,O,T,R=0)=>{for(let I=R;I<f.length;I++){const $=f[I]=T?en(f[I]):Rt(f[I]);A(null,$,p,y,E,_,S,O,T)}},It=(f,p,y,E,_,S,O)=>{const T=p.el=f.el;let{patchFlag:R,dynamicChildren:I,dirs:$}=p;R|=f.patchFlag&16;const x=f.props||he,j=p.props||he;let q;y&&In(y,!1),(q=j.onVnodeBeforeUpdate)&&bt(q,y,p,f),$&&En(p,f,y,"beforeUpdate"),y&&In(y,!0);const se=_&&p.type!=="foreignObject";if(I?Mt(f.dynamicChildren,I,T,y,E,se,S):O||ct(f,p,T,null,y,E,se,S,!1),R>0){if(R&16)Lt(T,p,x,j,y,E,_);else if(R&2&&x.class!==j.class&&i(T,"class",null,j.class,_),R&4&&i(T,"style",x.style,j.style,_),R&8){const ve=p.dynamicProps;for(let le=0;le<ve.length;le++){const ge=ve[le],yt=x[ge],es=j[ge];(es!==yt||ge==="value")&&i(T,ge,yt,es,_,f.children,y,E,N)}}R&1&&f.children!==p.children&&u(T,p.children)}else!O&&I==null&&Lt(T,p,x,j,y,E,_);((q=j.onVnodeUpdated)||$)&&st(()=>{q&&bt(q,y,p,f),$&&En(p,f,y,"updated")},E)},Mt=(f,p,y,E,_,S,O)=>{for(let T=0;T<p.length;T++){const R=f[T],I=p[T],$=R.el&&(R.type===mt||!Gs(R,I)||R.shapeFlag&70)?h(R.el):y;A(R,I,$,null,E,_,S,O,!0)}},Lt=(f,p,y,E,_,S,O)=>{if(y!==E){for(const T in E){if(Si(T))continue;const R=E[T],I=y[T];R!==I&&T!=="value"&&i(f,T,I,R,O,p.children,_,S,N)}if(y!==he)for(const T in y)!Si(T)&&!(T in E)&&i(f,T,y[T],null,O,p.children,_,S,N);"value"in E&&i(f,"value",y.value,E.value)}},Qn=(f,p,y,E,_,S,O,T,R)=>{const I=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:j,slotScopeIds:q}=p;q&&(T=T?T.concat(q):q),f==null?(s(I,y,E),s($,y,E),nt(p.children,y,$,_,S,O,T,R)):x>0&&x&64&&j&&f.dynamicChildren?(Mt(f.dynamicChildren,j,y,_,S,O,T),(p.key!=null||_&&p===_.subTree)&&Nf(f,p,!0)):ct(f,p,y,$,_,S,O,T,R)},Xn=(f,p,y,E,_,S,O,T,R)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?_.ctx.activate(p,y,E,O,R):Jn(p,y,E,_,S,O,R):Se(f,p,R)},Jn=(f,p,y,E,_,S,O)=>{const T=f.component=Hv(f,E,_);if(wf(f)&&(T.ctx.renderer=fe),qv(T),T.asyncDep){if(_&&_.registerDep(T,de),!f.el){const R=T.subTree=ot(Ln);L(null,R,p,y)}return}de(T,f,p,y,_,S,O)},Se=(f,p,y)=>{const E=p.component=f.component;if(nv(f,p,y))if(E.asyncDep&&!E.asyncResolved){ae(E,p,y);return}else E.next=p,Yy(E.update),E.update();else p.component=f.component,p.el=f.el,E.vnode=p},de=(f,p,y,E,_,S,O)=>{const T=()=>{if(f.isMounted){let{next:$,bu:x,u:j,parent:q,vnode:se}=f,ve=$,le;In(f,!1),$?($.el=se.el,ae(f,$,O)):$=se,x&&Ci(x),(le=$.props&&$.props.onVnodeBeforeUpdate)&&bt(le,q,$,se),In(f,!0);const ge=la(f),yt=f.subTree;f.subTree=ge,A(yt,ge,h(yt.el),V(yt),f,_,S),$.el=ge.el,ve===null&&sv(f,ge.el),j&&st(j,_),(le=$.props&&$.props.onVnodeUpdated)&&st(()=>bt(le,q,$,se),_)}else{let $;const{el:x,props:j}=p,{bm:q,m:se,parent:ve}=f,le=Wa(p);if(In(f,!1),q&&Ci(q),!le&&($=j&&j.onVnodeBeforeMount)&&bt($,ve,p),In(f,!0),x&&X){const ge=()=>{f.subTree=la(f),X(x,f.subTree,f,_,null)};le?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ge()):ge()}else{const ge=f.subTree=la(f);A(null,ge,y,E,f,_,S),p.el=ge.el}if(se&&st(se,_),!le&&($=j&&j.onVnodeMounted)){const ge=p;st(()=>bt($,ve,ge),_)}p.shapeFlag&256&&f.a&&st(f.a,_),f.isMounted=!0,p=y=E=null}},R=f.effect=new Kc(T,()=>uf(f.update),f.scope),I=f.update=R.run.bind(R);I.id=f.uid,In(f,!0),I()},ae=(f,p,y)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,bv(f,p.props,E,y),Rv(f,p.children,y),xs(),Xc(void 0,f.update),Us()},ct=(f,p,y,E,_,S,O,T,R=!1)=>{const I=f&&f.children,$=f?f.shapeFlag:0,x=p.children,{patchFlag:j,shapeFlag:q}=p;if(j>0){if(j&128){xt(I,x,y,E,_,S,O,T,R);return}else if(j&256){Zn(I,x,y,E,_,S,O,T,R);return}}q&8?($&16&&N(I,_,S),x!==I&&u(y,x)):$&16?q&16?xt(I,x,y,E,_,S,O,T,R):N(I,_,S,!0):($&8&&u(y,""),q&16&&nt(x,y,E,_,S,O,T,R))},Zn=(f,p,y,E,_,S,O,T,R)=>{f=f||fs,p=p||fs;const I=f.length,$=p.length,x=Math.min(I,$);let j;for(j=0;j<x;j++){const q=p[j]=R?en(p[j]):Rt(p[j]);A(f[j],q,y,null,_,S,O,T,R)}I>$?N(f,_,S,!0,!1,x):nt(p,y,E,_,S,O,T,R,x)},xt=(f,p,y,E,_,S,O,T,R)=>{let I=0;const $=p.length;let x=f.length-1,j=$-1;for(;I<=x&&I<=j;){const q=f[I],se=p[I]=R?en(p[I]):Rt(p[I]);if(Gs(q,se))A(q,se,y,null,_,S,O,T,R);else break;I++}for(;I<=x&&I<=j;){const q=f[x],se=p[j]=R?en(p[j]):Rt(p[j]);if(Gs(q,se))A(q,se,y,null,_,S,O,T,R);else break;x--,j--}if(I>x){if(I<=j){const q=j+1,se=q<$?p[q].el:E;for(;I<=j;)A(null,p[I]=R?en(p[I]):Rt(p[I]),y,se,_,S,O,T,R),I++}}else if(I>j)for(;I<=x;)gt(f[I],_,S,!0),I++;else{const q=I,se=I,ve=new Map;for(I=se;I<=j;I++){const lt=p[I]=R?en(p[I]):Rt(p[I]);lt.key!=null&&ve.set(lt.key,I)}let le,ge=0;const yt=j-se+1;let es=!1,_u=0;const zs=new Array(yt);for(I=0;I<yt;I++)zs[I]=0;for(I=q;I<=x;I++){const lt=f[I];if(ge>=yt){gt(lt,_,S,!0);continue}let Tt;if(lt.key!=null)Tt=ve.get(lt.key);else for(le=se;le<=j;le++)if(zs[le-se]===0&&Gs(lt,p[le])){Tt=le;break}Tt===void 0?gt(lt,_,S,!0):(zs[Tt-se]=I+1,Tt>=_u?_u=Tt:es=!0,A(lt,p[Tt],y,null,_,S,O,T,R),ge++)}const Eu=es?Pv(zs):fs;for(le=Eu.length-1,I=yt-1;I>=0;I--){const lt=se+I,Tt=p[lt],Iu=lt+1<$?p[lt+1].el:E;zs[I]===0?A(null,Tt,y,Iu,_,S,O,T,R):es&&(le<0||I!==Eu[le]?At(Tt,y,Iu,2):le--)}}},At=(f,p,y,E,_=null)=>{const{el:S,type:O,transition:T,children:R,shapeFlag:I}=f;if(I&6){At(f.component.subTree,p,y,E);return}if(I&128){f.suspense.move(p,y,E);return}if(I&64){O.move(f,p,y,fe);return}if(O===mt){s(S,p,y);for(let x=0;x<R.length;x++)At(R[x],p,y,E);s(f.anchor,p,y);return}if(O===Ni){Q(f,p,y);return}if(E!==2&&I&1&&T)if(E===0)T.beforeEnter(S),s(S,p,y),st(()=>T.enter(S),_);else{const{leave:x,delayLeave:j,afterLeave:q}=T,se=()=>s(S,p,y),ve=()=>{x(S,()=>{se(),q&&q()})};j?j(S,se,ve):ve()}else s(S,p,y)},gt=(f,p,y,E=!1,_=!1)=>{const{type:S,props:O,ref:T,children:R,dynamicChildren:I,shapeFlag:$,patchFlag:x,dirs:j}=f;if(T!=null&&Qa(T,null,y,f,!0),$&256){p.ctx.deactivate(f);return}const q=$&1&&j,se=!Wa(f);let ve;if(se&&(ve=O&&O.onVnodeBeforeUnmount)&&bt(ve,p,f),$&6)U(f.component,y,E);else{if($&128){f.suspense.unmount(y,E);return}q&&En(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,y,_,fe,E):I&&(S!==mt||x>0&&x&64)?N(I,p,y,!1,!0):(S===mt&&x&384||!_&&$&16)&&N(R,p,y),E&&aa(f)}(se&&(ve=O&&O.onVnodeUnmounted)||q)&&st(()=>{ve&&bt(ve,p,f),q&&En(f,null,p,"unmounted")},y)},aa=f=>{const{type:p,el:y,anchor:E,transition:_}=f;if(p===mt){v(y,E);return}if(p===Ni){_e(f);return}const S=()=>{r(y),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:O,delayLeave:T}=_,R=()=>O(y,S);T?T(f.el,S,R):R()}else S()},v=(f,p)=>{let y;for(;f!==p;)y=d(f),r(f),f=y;r(p)},U=(f,p,y)=>{const{bum:E,scope:_,update:S,subTree:O,um:T}=f;E&&Ci(E),_.stop(),S&&(S.active=!1,gt(O,f,p,y)),T&&st(T,p),st(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(f,p,y,E=!1,_=!1,S=0)=>{for(let O=S;O<f.length;O++)gt(f[O],p,y,E,_)},V=f=>f.shapeFlag&6?V(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ce=(f,p,y)=>{f==null?p._vnode&&gt(p._vnode,null,null,!0):A(p._vnode||null,f,p,null,null,null,y),ff(),p._vnode=f},fe={p:A,um:gt,m:At,r:aa,mt:Jn,mc:nt,pc:ct,pbc:Mt,n:V,o:t};let ee,X;return e&&([ee,X]=e(fe)),{render:ce,hydrate:ee,createApp:Nv(ce,ee)}}function In({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Nf(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=en(r[i]),a.el=o.el),n||Nf(o,a))}}function Pv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Mv=t=>t.__isTeleport,Lv=Symbol(),mt=Symbol(void 0),tl=Symbol(void 0),Ln=Symbol(void 0),Ni=Symbol(void 0),or=[];let Nn=null;function Ct(t=!1){or.push(Nn=t?null:[])}function xv(){or.pop(),Nn=or[or.length-1]||null}let Hi=1;function $u(t){Hi+=t}function Df(t){return t.dynamicChildren=Hi>0?Nn||fs:null,xv(),Hi>0&&Nn&&Nn.push(t),t}function Zt(t,e,n,s,r,i){return Df(D(t,e,n,s,r,i,!0))}function Of(t,e,n,s,r){return Df(ot(t,e,n,s,r,!0))}function Xa(t){return t?t.__v_isVNode===!0:!1}function Gs(t,e){return t.type===e.type&&t.key===e.key}const bo="__vInternal",Pf=({key:t})=>t!=null?t:null,Di=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ne(t)||Ee(t)||J(t)?{i:Nt,r:t,k:e,f:!!n}:t:null;function D(t,e=null,n=null,s=0,r=null,i=t===mt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pf(e),ref:e&&Di(e),scopeId:Ao,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(sl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Hi>0&&!o&&Nn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nn.push(c),c}const ot=Uv;function Uv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Lv)&&(t=Ln),Xa(t)){const a=wr(t,e,!0);return n&&sl(a,n),a}if(Yv(t)&&(t=t.__vccOpts),e){e=Fv(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=Uc(a)),Ce(c)&&(tf(c)&&!z(c)&&(c=tt({},c)),e.style=xc(c))}const o=Ne(t)?1:rv(t)?128:Mv(t)?64:Ce(t)?4:J(t)?2:0;return D(t,e,n,s,r,o,i,!0)}function Fv(t){return t?tf(t)||bo in t?tt({},t):t:null}function wr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Bv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pf(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Di(e)):[r,Di(e)]:Di(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wr(t.ssContent),ssFallback:t.ssFallback&&wr(t.ssFallback),el:t.el,anchor:t.anchor}}function Ja(t=" ",e=0){return ot(tl,null,t,e)}function nl(t,e){const n=ot(Ni,null,t);return n.staticCount=e,n}function Vv(t="",e=!1){return e?(Ct(),Of(Ln,null,t)):ot(Ln,null,t)}function Rt(t){return t==null||typeof t=="boolean"?ot(Ln):z(t)?ot(mt,null,t.slice()):typeof t=="object"?en(t):ot(tl,null,String(t))}function en(t){return t.el===null||t.memo?t:wr(t)}function sl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),sl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(bo in e)?e._ctx=Nt:r===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),s&64?(n=16,e=[Ja(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Uc([e.class,s.class]));else if(r==="style")e.style=xc([e.style,s.style]);else if(yo(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function bt(t,e,n,s=null){_t(t,e,7,[n,s])}function ju(t,e,n,s){let r;const i=n&&n[s];if(z(t)||Ne(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Za=t=>t?Mf(t)?So(t)||t.proxy:Za(t.parent):null,qi=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Za(t.parent),$root:t=>Za(t.root),$emit:t=>t.emit,$options:t=>Af(t),$forceUpdate:t=>()=>uf(t.update),$nextTick:t=>lf.bind(t.proxy),$watch:t=>ov.bind(t)}),$v={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==he&&ne(s,e))return o[e]=1,s[e];if(r!==he&&ne(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,i[e];if(n!==he&&ne(n,e))return o[e]=4,n[e];za&&(o[e]=0)}}const u=qi[e];let h,d;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==he&&ne(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==he&&ne(r,e)?(r[e]=n,!0):s!==he&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==he&&ne(t,o)||e!==he&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(s,o)||ne(qi,o)||ne(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},jv=kf();let Kv=0;function Hv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||jv,i={uid:Kv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new jd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bf(s,r),emitsOptions:gf(s,r),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jy.bind(null,i),t.ce&&t.ce(i),i}let We=null;const Is=t=>{We=t,t.scope.on()},Dn=()=>{We&&We.scope.off(),We=null};function Mf(t){return t.vnode.shapeFlag&4}let _r=!1;function qv(t,e=!1){_r=e;const{props:n,children:s}=t.vnode,r=Mf(t);Tv(t,n,r,e),Cv(t,s);const i=r?Wv(t,e):void 0;return _r=!1,i}function Wv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gc(new Proxy(t.ctx,$v));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Gv(t):null;Is(t),xs();const i=ln(s,t,0,[t.props,r]);if(Us(),Dn(),Fd(i)){if(i.then(Dn,Dn),e)return i.then(o=>{Ku(t,o,e)}).catch(o=>{Eo(o,t,0)});t.asyncDep=i}else Ku(t,i,e)}else Lf(t,e)}function Ku(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=af(e)),Lf(t,n)}let Hu;function Lf(t,e,n){const s=t.type;if(!t.render){if(!e&&Hu&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=tt(tt({isCustomElement:i,delimiters:a},o),c);s.render=Hu(r,l)}}t.render=s.render||wt}Is(t),xs(),wv(t),Us(),Dn()}function zv(t){return new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}})}function Gv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=zv(t))},slots:t.slots,emit:t.emit,expose:e}}function So(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(af(Gc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qi)return qi[n](t)}}))}function Yv(t){return J(t)&&"__vccOpts"in t}const kt=(t,e)=>Wy(t,e,_r);function xf(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!z(e)?Xa(e)?ot(t,null,[e]):ot(t,e):ot(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xa(n)&&(n=[n]),ot(t,e,n))}const Qv="3.2.33",Xv="http://www.w3.org/2000/svg",bn=typeof document!="undefined"?document:null,qu=bn&&bn.createElement("template"),Jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?bn.createElementNS(Xv,t):bn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{qu.innerHTML=s?`<svg>${t}</svg>`:t;const a=qu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Zv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function e0(t,e,n){const s=t.style,r=Ne(n);if(n&&!r){for(const i in n)ec(s,i,n[i]);if(e&&!Ne(e))for(const i in e)n[i]==null&&ec(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Wu=/\s*!important$/;function ec(t,e,n){if(z(n))n.forEach(s=>ec(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=t0(t,e);Wu.test(n)?t.setProperty(Ls(s),n.replace(Wu,""),"important"):t[s]=n}}const zu=["Webkit","Moz","ms"],ua={};function t0(t,e){const n=ua[e];if(n)return n;let s=Es(e);if(s!=="filter"&&s in t)return ua[e]=s;s=$d(s);for(let r=0;r<zu.length;r++){const i=zu[r]+s;if(i in t)return ua[e]=i}return e}const Gu="http://www.w3.org/1999/xlink";function n0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Gu,e.slice(6,e.length)):t.setAttributeNS(Gu,e,n);else{const i=sy(e);n==null||i&&!Ld(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function s0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ld(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Uf,r0]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let tc=0;const i0=Promise.resolve(),o0=()=>{tc=0},a0=()=>tc||(i0.then(o0),tc=Uf());function cs(t,e,n,s){t.addEventListener(e,n,s)}function c0(t,e,n,s){t.removeEventListener(e,n,s)}function l0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=u0(e);if(s){const l=i[e]=h0(s,r);cs(t,a,l,c)}else o&&(c0(t,a,o,c),i[e]=void 0)}}const Yu=/(?:Once|Passive|Capture)$/;function u0(t){let e;if(Yu.test(t)){e={};let n;for(;n=t.match(Yu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ls(t.slice(2)),e]}function h0(t,e){const n=s=>{const r=s.timeStamp||Uf();(r0||r>=n.attached-1)&&_t(d0(s,n.value),e,5,[s])};return n.value=t,n.attached=a0(),n}function d0(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Qu=/^on[a-z]/,f0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Zv(t,s,r):e==="style"?e0(t,n,s):yo(e)?Fc(e)||l0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):p0(t,e,s,r))?s0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),n0(t,e,s,r))};function p0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Qu.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qu.test(e)&&Ne(n)?!1:e in t}const Xu=t=>{const e=t.props["onUpdate:modelValue"];return z(e)?n=>Ci(e,n):e};function g0(t){t.target.composing=!0}function Ju(t){const e=t.target;e.composing&&(e.composing=!1,m0(e,"input"))}function m0(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ar={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Xu(r);const i=s||r.props&&r.props.type==="number";cs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Va(a)),t._assign(a)}),n&&cs(t,"change",()=>{t.value=t.value.trim()}),e||(cs(t,"compositionstart",g0),cs(t,"compositionend",Ju),cs(t,"change",Ju))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Xu(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Va(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},y0=tt({patchProp:f0},Jv);let Zu;function v0(){return Zu||(Zu=Dv(y0))}const w0=(...t)=>{const e=v0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=_0(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function _0(t){return Ne(t)?document.querySelector(t):t}var E0=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const I0=Symbol();var eh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(eh||(eh={}));function A0(){const t=py(!0),e=t.run(()=>rf({}));let n=[],s=[];const r=Gc({install(i){r._a=i,i.provide(I0,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!E0?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},T0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ff(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):T0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},b0=function(t){const e=Ff(t);return Vf.encodeByteArray(e,!0)},Bf=function(t){return b0(t).replace(/\./g,"")},S0=function(t){try{return Vf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $f(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function jf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function R0(){return De().indexOf("Electron/")>=0}function Hf(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function k0(){return De().indexOf("MSAppHost/")>=0}function N0(){return typeof indexedDB=="object"}function D0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="FirebaseError";class Wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=O0,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?P0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Wn(r,a,s)}}function P0(t,e){return t.replace(M0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const M0=/\{\$([^}]+)}/g;function L0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(th(i)&&th(o)){if(!Wi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function th(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function er(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function tr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function x0(t,e){const n=new U0(t,e);return n.subscribe.bind(n)}class U0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");F0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ha),r.error===void 0&&(r.error=ha),r.complete===void 0&&(r.complete=ha);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ha(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new C0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($0(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:B0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function B0(t){return t===Tn?void 0:t}function $0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new V0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const K0={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},H0=re.INFO,q0={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},W0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=q0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rl{constructor(e){this.name=e,this._logLevel=H0,this._logHandler=W0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?K0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const z0=(t,e)=>e.some(n=>t instanceof n);let nh,sh;function G0(){return nh||(nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y0(){return sh||(sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qf=new WeakMap,nc=new WeakMap,Wf=new WeakMap,da=new WeakMap,il=new WeakMap;function Q0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qf.set(n,t)}).catch(()=>{}),il.set(e,t),e}function X0(t){if(nc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nc.set(t,e)}let sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function J0(t){sc=t(sc)}function Z0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(fa(this),e,...n);return Wf.set(s,e.sort?e.sort():[e]),hn(s)}:Y0().includes(t)?function(...e){return t.apply(fa(this),e),hn(qf.get(this))}:function(...e){return hn(t.apply(fa(this),e))}}function ew(t){return typeof t=="function"?Z0(t):(t instanceof IDBTransaction&&X0(t),z0(t,G0())?new Proxy(t,sc):t)}function hn(t){if(t instanceof IDBRequest)return Q0(t);if(da.has(t))return da.get(t);const e=ew(t);return e!==t&&(da.set(t,e),il.set(e,t)),e}const fa=t=>il.get(t);function tw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=hn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(hn(o.result),c.oldVersion,c.newVersion,hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const nw=["get","getKey","getAll","getAllKeys","count"],sw=["put","add","delete","clear"],pa=new Map;function rh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pa.get(e))return pa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=sw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||nw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return pa.set(e,i),i}J0(t=>bu(ts({},t),{get:(e,n,s)=>rh(e,n)||t.get(e,n,s),has:(e,n)=>!!rh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rc="@firebase/app",ih="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new rl("@firebase/app"),ow="@firebase/app-compat",aw="@firebase/analytics-compat",cw="@firebase/analytics",lw="@firebase/app-check-compat",uw="@firebase/app-check",hw="@firebase/auth",dw="@firebase/auth-compat",fw="@firebase/database",pw="@firebase/database-compat",gw="@firebase/functions",mw="@firebase/functions-compat",yw="@firebase/installations",vw="@firebase/installations-compat",ww="@firebase/messaging",_w="@firebase/messaging-compat",Ew="@firebase/performance",Iw="@firebase/performance-compat",Aw="@firebase/remote-config",Tw="@firebase/remote-config-compat",bw="@firebase/storage",Sw="@firebase/storage-compat",Cw="@firebase/firestore",Rw="@firebase/firestore-compat",kw="firebase",Nw="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="[DEFAULT]",Dw={[rc]:"fire-core",[ow]:"fire-core-compat",[cw]:"fire-analytics",[aw]:"fire-analytics-compat",[uw]:"fire-app-check",[lw]:"fire-app-check-compat",[hw]:"fire-auth",[dw]:"fire-auth-compat",[fw]:"fire-rtdb",[pw]:"fire-rtdb-compat",[gw]:"fire-fn",[mw]:"fire-fn-compat",[yw]:"fire-iid",[vw]:"fire-iid-compat",[ww]:"fire-fcm",[_w]:"fire-fcm-compat",[Ew]:"fire-perf",[Iw]:"fire-perf-compat",[Aw]:"fire-rc",[Tw]:"fire-rc-compat",[bw]:"fire-gcs",[Sw]:"fire-gcs-compat",[Cw]:"fire-fst",[Rw]:"fire-fst-compat","fire-js":"fire-js",[kw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Map,ic=new Map;function Ow(t,e){try{t.container.addComponent(e)}catch(n){ol.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(ic.has(e))return ol.debug(`There were multiple attempts to register component ${e}.`),!1;ic.set(e,t);for(const n of zi.values())Ow(n,t);return!0}function al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Un=new Br("app","Firebase",Pw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=Nw;function Lw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:zf,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});const r=zi.get(s);if(r){if(Wi(t,r.options)&&Wi(n,r.config))return r;throw Un.create("duplicate-app",{appName:s})}const i=new j0(s);for(const a of ic.values())i.addComponent(a);const o=new Mw(t,n,i);return zi.set(s,o),o}function Gf(t=zf){const e=zi.get(t);if(!e)throw Un.create("no-app",{appName:t});return e}function dn(t,e,n){var s;let r=(s=Dw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ol.warn(a.join(" "));return}As(new xn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="firebase-heartbeat-database",Uw=1,Er="firebase-heartbeat-store";let ga=null;function Yf(){return ga||(ga=tw(xw,Uw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Er)}}}).catch(t=>{throw Un.create("storage-open",{originalErrorMessage:t.message})})),ga}async function Fw(t){try{return(await Yf()).transaction(Er).objectStore(Er).get(Qf(t))}catch(e){throw Un.create("storage-get",{originalErrorMessage:e.message})}}async function oh(t,e){try{const s=(await Yf()).transaction(Er,"readwrite");return await s.objectStore(Er).put(e,Qf(t)),s.done}catch(n){throw Un.create("storage-set",{originalErrorMessage:n.message})}}function Qf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=1024,Bw=30*24*60*60*1e3;class $w{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ah();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Bw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ah(),{heartbeatsToSend:n,unsentEntries:s}=jw(this._heartbeatsCache.heartbeats),r=Bf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ah(){return new Date().toISOString().substring(0,10)}function jw(t,e=Vw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ch(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ch(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N0()?D0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ch(t){return Bf(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t){As(new xn("platform-logger",e=>new rw(e),"PRIVATE")),As(new xn("heartbeat",e=>new $w(e),"PRIVATE")),dn(rc,ih,t),dn(rc,ih,"esm2017"),dn("fire-js","")}Hw("");var qw="firebase",Ww="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(qw,Ww,"app");function cl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Xf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zw=Xf,Jf=new Br("auth","Firebase",Xf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new rl("@firebase/auth");function Oi(t,...e){lh.logLevel<=re.ERROR&&lh.error(`Auth (${jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,...e){throw ll(t,...e)}function Dt(t,...e){return ll(t,...e)}function Gw(t,e,n){const s=Object.assign(Object.assign({},zw()),{[e]:n});return new Br("auth","Firebase",s).create(e,{appName:t.name})}function ll(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Jf.create(t,...e)}function K(t,e,...n){if(!t)throw ll(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oi(e),new Error(e)}function Kt(t,e){t||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=new Map;function Vt(t){Kt(t instanceof Function,"Expected a class definition");let e=uh.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e){const n=al(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Wi(i,e!=null?e:{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function Qw(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xw(){return hh()==="http:"||hh()==="https:"}function hh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xw()||jf()||"connection"in navigator)?navigator.onLine:!0}function Zw(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=$f()||Kf()}get(){return Jw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Kr(3e4,6e4);function Co(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,s,r={}){return ep(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=$r(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Zf.fetch()(tp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ep(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},e_),e);try{const r=new n_(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gw(t,u,l);Et(t,u)}}catch(r){if(r instanceof Wn)throw r;Et(t,"network-request-failed")}}async function Ro(t,e,n,s,r={}){const i=await Hr(t,e,n,s,r);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function tp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ul(t.config,r):`${t.config.apiScheme}://${r}`}class n_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),t_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Dt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function r_(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i_(t,e=!1){const n=at(t),s=await n.getIdToken(e),r=hl(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:cr(ya(r.auth_time)),issuedAtTime:cr(ya(r.iat)),expirationTime:cr(ya(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ya(t){return Number(t)*1e3}function hl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const r=S0(n);return r?JSON.parse(r):(Oi("Failed to decode base64 JWT payload"),null)}catch(r){return Oi("Caught error parsing JWT payload as JSON",r),null}}function o_(t){const e=hl(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Wn&&a_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function a_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ir(t,r_(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?h_(i.providerUserInfo):[],a=u_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new np(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function l_(t){const e=at(t);await Gi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u_(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function h_(t){return t.map(e=>{var{providerId:n}=e,s=cl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(t,e){const n=await ep(t,{},async()=>{const s=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=tp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):o_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await d_(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ar;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=cl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new np(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ir(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return i_(this,e)}reload(){return l_(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Gi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ir(this,s_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:G,emailVerified:Q,isAnonymous:_e,providerData:Ie,stsTokenManager:Ye}=n;K(G&&Ye,e,"internal-error");const Wt=Ar.fromJSON(this.name,Ye);K(typeof G=="string",e,"internal-error"),Gt(h,e.name),Gt(d,e.name),K(typeof Q=="boolean",e,"internal-error"),K(typeof _e=="boolean",e,"internal-error"),Gt(g,e.name),Gt(m,e.name),Gt(C,e.name),Gt(A,e.name),Gt(k,e.name),Gt(L,e.name);const nt=new On({uid:G,auth:e,email:d,emailVerified:Q,displayName:h,isAnonymous:_e,photoURL:m,phoneNumber:g,tenantId:C,stsTokenManager:Wt,createdAt:k,lastLoginAt:L});return Ie&&Array.isArray(Ie)&&(nt.providerData=Ie.map(It=>Object.assign({},It))),A&&(nt._redirectEventId=A),nt}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ar;r.updateFromServerResponse(n);const i=new On({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Gi(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sp.type="NONE";const dh=sp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Pi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Pi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ys(Vt(dh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Vt(dh);const o=Pi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=On._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ys(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ys(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(op(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cp(e))return"Blackberry";if(lp(e))return"Webos";if(dl(e))return"Safari";if((e.includes("chrome/")||ip(e))&&!e.includes("edge/"))return"Chrome";if(ap(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function rp(t=De()){return/firefox\//i.test(t)}function dl(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ip(t=De()){return/crios\//i.test(t)}function op(t=De()){return/iemobile/i.test(t)}function ap(t=De()){return/android/i.test(t)}function cp(t=De()){return/blackberry/i.test(t)}function lp(t=De()){return/webos/i.test(t)}function ko(t=De()){return/iphone|ipad|ipod/i.test(t)}function f_(t=De()){var e;return ko(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function p_(){return Hf()&&document.documentMode===10}function up(t=De()){return ko(t)||ap(t)||lp(t)||cp(t)||/windows phone/i.test(t)||op(t)}function g_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e=[]){let n;switch(t){case"Browser":n=fh(De());break;case"Worker":n=`${fh(De())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ph(this),this.idTokenSubscription=new ph(this),this.beforeStateQueue=new m_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gi(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function fl(t){return at(t)}class ph{constructor(e){this.auth=e,this.observer=null,this.addObserver=x0(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function v_(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(t,e){return Ro(t,"POST","/v1/accounts:signInWithPassword",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",Co(t,e))}async function E_(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends pl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Tr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Tr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return w_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return __(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return v_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return E_(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return Ro(t,"POST","/v1/accounts:signInWithIdp",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="http://localhost";class Fn extends pl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=cl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Fn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,vs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:I_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$r(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T_(t){const e=er(tr(t)).link,n=e?er(tr(e)).deep_link_id:null,s=er(tr(t)).deep_link_id;return(s?er(tr(s)).link:null)||s||n||e||t}class gl{constructor(e){var n,s,r,i,o,a;const c=er(tr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=A_((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=T_(e);try{return new gl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return Tr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=gl.parseLink(n);return K(s,"argument-error"),Tr._fromEmailAndCode(e,s.code,s.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends dp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends qr{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends qr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return sn.credential(n,s)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends qr{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends qr{constructor(){super("twitter.com")}static credential(e,n){return Fn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return on.credential(n,s)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await On._fromIdTokenResponse(e,s,r),o=gh(s);return new Ts({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=gh(s);return new Ts({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function gh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends Wn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Yi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Yi(e,n,s,r)}}function fp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yi._fromErrorAndOperation(t,i,e,s):i})}async function b_(t,e,n=!1){const s=await Ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Ir(t,fp(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=hl(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Ts._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t,e,n=!1){const s="signIn",r=await fp(t,s,e),i=await Ts._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function C_(t,e){return pp(fl(t),e)}function R_(t,e,n){return C_(at(t),Fs.credential(e,n))}const Qi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qi,"1"),this.storage.removeItem(Qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(){const t=De();return dl(t)||ko(t)}const N_=1e3,D_=10;class mp extends gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=k_()&&g_(),this.fallbackToPolling=up(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);p_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,D_):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},N_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mp.type="LOCAL";const O_=mp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp extends gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yp.type="SESSION";const vp=yp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new No(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await P_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ml("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function L_(t){Ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){return typeof Ot().WorkerGlobalScope!="undefined"&&typeof Ot().importScripts=="function"}async function x_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function F_(){return wp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="firebaseLocalStorageDb",V_=1,Xi="firebaseLocalStorage",Ep="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Do(t,e){return t.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function B_(){const t=indexedDB.deleteDatabase(_p);return new Wr(t).toPromise()}function ac(){const t=indexedDB.open(_p,V_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Xi,{keyPath:Ep})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Xi)?e(s):(s.close(),await B_(),e(await ac()))})})}async function mh(t,e,n){const s=Do(t,!0).put({[Ep]:e,value:n});return new Wr(s).toPromise()}async function $_(t,e){const n=Do(t,!1).get(e),s=await new Wr(n).toPromise();return s===void 0?null:s.value}function yh(t,e){const n=Do(t,!0).delete(e);return new Wr(n).toPromise()}const j_=800,K_=3;class Ip{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>K_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(F_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await x_(),!this.activeServiceWorker)return;this.sender=new M_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ac();return await mh(e,Qi,"1"),await yh(e,Qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>mh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$_(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Do(r,!1).getAll();return new Wr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ip.type="LOCAL";const H_=Ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function W_(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Dt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",q_().appendChild(s)})}function z_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Kr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t,e){return e?Vt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends pl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Y_(t){return pp(t.auth,new yl(t),t.bypassAuthState)}function Q_(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),S_(n,new yl(t),t.bypassAuthState)}async function X_(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),b_(n,new yl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Y_;case"linkViaPopup":case"linkViaRedirect":return X_;case"reauthViaPopup":case"reauthViaRedirect":return Q_;default:Et(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Kr(2e3,1e4);class us extends Ap{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,J_.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="pendingRedirect",Mi=new Map;class eE extends Ap{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const s=await tE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tE(t,e){const n=rE(e),s=sE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function nE(t,e){Mi.set(t._key(),e)}function sE(t){return Vt(t._redirectPersistence)}function rE(t){return Pi(Z_,t.config.apiKey,t.name)}async function iE(t,e,n=!1){const s=fl(t),r=G_(s,e),o=await new eE(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=10*60*1e3;class aE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Tp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oE&&this.cachedEventUids.clear(),this.cachedEventUids.has(vh(e))}saveEventToCache(e){this.cachedEventUids.add(vh(e)),this.lastProcessedEventTime=Date.now()}}function vh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hE=/^https?/;async function dE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lE(t);for(const n of e)try{if(fE(n))return}catch{}Et(t,"unauthorized-domain")}function fE(t){const e=oc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!hE.test(n))return!1;if(uE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=new Kr(3e4,6e4);function wh(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gE(t){return new Promise((e,n)=>{var s,r,i;function o(){wh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wh(),n(Dt(t,"network-request-failed"))},timeout:pE.get()})}if(!((r=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const a=z_("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},W_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Li=null,e})}let Li=null;function mE(t){return Li=Li||gE(t),Li}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=new Kr(5e3,15e3),vE="__/auth/iframe",wE="emulator/auth/iframe",_E={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IE(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ul(e,wE):`https://${t.config.authDomain}/${vE}`,s={apiKey:e.apiKey,appName:t.name,v:jr},r=EE.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$r(s).slice(1)}`}async function AE(t){const e=await mE(t),n=Ot().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:IE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_E,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},yE.get());function c(){Ot().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bE=500,SE=600,CE="_blank",RE="http://localhost";class _h{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kE(t,e,n,s=bE,r=SE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},TE),{width:s.toString(),height:r.toString(),top:i,left:o}),l=De().toLowerCase();n&&(a=ip(l)?CE:n),rp(l)&&(e=e||RE,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(f_(l)&&a!=="_self")return NE(e||"",a),new _h(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new _h(h)}function NE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="__/auth/handler",OE="emulator/auth/handler";function Eh(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:jr,eventId:r};if(e instanceof dp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",L0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof qr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${PE(t)}?${$r(a).slice(1)}`}function PE({config:t}){return t.emulator?ul(t,OE):`https://${t.authDomain}/${DE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="webStorageSupport";class ME{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vp,this._completeRedirectFn=iE,this._overrideRedirectResult=nE}async _openPopup(e,n,s,r){var i;Kt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Eh(e,n,s,oc(),r);return kE(e,o,ml())}async _openRedirect(e,n,s,r){return await this._originValidation(e),L_(Eh(e,n,s,oc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Kt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await AE(e),s=new aE(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(va,{type:va},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[va];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return up()||dl()||ko()}}const LE=ME;var Ih="@firebase/auth",Ah="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FE(t){As(new xn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hp(t)},u=new y_(a,c,l);return Qw(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),As(new xn("auth-internal",e=>{const n=fl(e.getProvider("auth").getImmediate());return(s=>new xE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Ih,Ah,UE(t)),dn(Ih,Ah,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t=Gf()){const e=al(t,"auth");return e.isInitialized()?e.getImmediate():Yw(t,{popupRedirectResolver:LE,persistence:[H_,O_,vp]})}FE("Browser");var VE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},P,vl=vl||{},H=VE||self;function Ji(){}function cc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BE(t){return Object.prototype.hasOwnProperty.call(t,wa)&&t[wa]||(t[wa]=++$E)}var wa="closure_uid_"+(1e9*Math.random()>>>0),$E=0;function jE(t,e,n){return t.call.apply(t.bind,arguments)}function KE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xe=jE:xe=KE,xe.apply(null,arguments)}function gi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function wn(){this.s=this.s,this.o=this.o}var HE=0,qE={};wn.prototype.s=!1;wn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),HE!=0)){var t=BE(this);delete qE[t]}};wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Cp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function WE(t){e:{var e=UI;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Th(t){return Array.prototype.concat.apply([],arguments)}function wl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zi(t){return/^[\s\xa0]*$/.test(t)}var bh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xe(t,e){return t.indexOf(e)!=-1}function _a(t,e){return t<e?-1:t>e?1:0}var Je;e:{var Sh=H.navigator;if(Sh){var Ch=Sh.userAgent;if(Ch){Je=Ch;break e}}Je=""}function _l(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Rp(t){const e={};for(const n in t)e[n]=t[n];return e}var Rh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Rh.length;i++)n=Rh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function El(t){return El[" "](t),t}El[" "]=Ji;function zE(t){var e=QE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var GE=Xe(Je,"Opera"),bs=Xe(Je,"Trident")||Xe(Je,"MSIE"),Np=Xe(Je,"Edge"),lc=Np||bs,Dp=Xe(Je,"Gecko")&&!(Xe(Je.toLowerCase(),"webkit")&&!Xe(Je,"Edge"))&&!(Xe(Je,"Trident")||Xe(Je,"MSIE"))&&!Xe(Je,"Edge"),YE=Xe(Je.toLowerCase(),"webkit")&&!Xe(Je,"Edge");function Op(){var t=H.document;return t?t.documentMode:void 0}var eo;e:{var Ea="",Ia=function(){var t=Je;if(Dp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Np)return/Edge\/([\d\.]+)/.exec(t);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YE)return/WebKit\/(\S+)/.exec(t);if(GE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ia&&(Ea=Ia?Ia[1]:""),bs){var Aa=Op();if(Aa!=null&&Aa>parseFloat(Ea)){eo=String(Aa);break e}}eo=Ea}var QE={};function XE(){return zE(function(){let t=0;const e=bh(String(eo)).split("."),n=bh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=_a(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||_a(r[2].length==0,i[2].length==0)||_a(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var uc;if(H.document&&bs){var kh=Op();uc=kh||parseInt(eo,10)||void 0}else uc=void 0;var JE=uc,ZE=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Ji,e),H.removeEventListener("test",Ji,e)}catch{}return t}();function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};function br(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Dp){e:{try{El(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&br.Z.h.call(this)}}Be(br,ze);var eI={2:"touch",3:"pen",4:"mouse"};br.prototype.h=function(){br.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),tI=0;function nI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++tI,this.ca=this.fa=!1}function Oo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Po(t){this.src=t,this.g={},this.h=0}Po.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new nI(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function hc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Sp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Oo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Il="closure_lm_"+(1e6*Math.random()|0),Ta={};function Pp(t,e,n,s,r){if(s&&s.once)return Lp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pp(t,e[i],n,s,r);return null}return n=bl(n),t&&t[Gr]?t.N(e,n,zr(s)?!!s.capture:!!s,r):Mp(t,e,n,!1,s,r)}function Mp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=zr(r)?!!r.capture:!!r,a=Tl(t);if(a||(t[Il]=a=new Po(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=sI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ZE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Up(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sI(){function t(n){return e.call(t.src,t.listener,n)}var e=rI;return t}function Lp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lp(t,e[i],n,s,r);return null}return n=bl(n),t&&t[Gr]?t.O(e,n,zr(s)?!!s.capture:!!s,r):Mp(t,e,n,!0,s,r)}function xp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)xp(t,e[i],n,s,r);else s=zr(s)?!!s.capture:!!s,n=bl(n),t&&t[Gr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dc(i,n,s,r),-1<n&&(Oo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dc(e,n,s,r)),(n=-1<t?e[t]:null)&&Al(n))}function Al(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Gr])hc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Up(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Tl(e))?(hc(n,t),n.h==0&&(n.src=null,e[Il]=null)):Oo(t)}}}function Up(t){return t in Ta?Ta[t]:Ta[t]="on"+t}function rI(t,e){if(t.ca)t=!0;else{e=new br(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Al(t),t=n.call(s,e)}return t}function Tl(t){return t=t[Il],t instanceof Po?t:null}var ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function bl(t){return typeof t=="function"?t:(t[ba]||(t[ba]=function(e){return t.handleEvent(e)}),t[ba])}function Oe(){wn.call(this),this.i=new Po(this),this.P=this,this.I=null}Be(Oe,wn);Oe.prototype[Gr]=!0;Oe.prototype.removeEventListener=function(t,e,n,s){xp(this,t,e,n,s)};function Ue(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var r=e;e=new ze(s,t),kp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=mi(o,s,!0,e)&&r}if(o=e.g=t,r=mi(o,s,!0,e)&&r,r=mi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=mi(o,s,!1,e)&&r}Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Oo(n[s]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Oe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function mi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&hc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Sl=H.JSON.stringify;function iI(){var t=Vp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oI{constructor(){this.h=this.g=null}add(e,n){const s=Fp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new aI,t=>t.reset());class aI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cI(t){H.setTimeout(()=>{throw t},0)}function Cl(t,e){fc||lI(),pc||(fc(),pc=!0),Vp.add(t,e)}var fc;function lI(){var t=H.Promise.resolve(void 0);fc=function(){t.then(uI)}}var pc=!1,Vp=new oI;function uI(){for(var t;t=iI();){try{t.h.call(t.g)}catch(n){cI(n)}var e=Fp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pc=!1}function Mo(t,e){Oe.call(this),this.h=t||1,this.g=e||H,this.j=xe(this.kb,this),this.l=Date.now()}Be(Mo,Oe);P=Mo.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ue(this,"tick"),this.da&&(Rl(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){Mo.Z.M.call(this),Rl(this),delete this.g};function kl(t,e,n){if(typeof t=="function")n&&(t=xe(t,n));else if(t&&typeof t.handleEvent=="function")t=xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function Bp(t){t.g=kl(()=>{t.g=null,t.i&&(t.i=!1,Bp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hI extends wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bp(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sr(t){wn.call(this),this.h=t,this.g={}}Be(Sr,wn);var Nh=[];function $p(t,e,n,s){Array.isArray(n)||(n&&(Nh[0]=n.toString()),n=Nh);for(var r=0;r<n.length;r++){var i=Pp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function jp(t){_l(t.g,function(e,n){this.g.hasOwnProperty(n)&&Al(e)},t),t.g={}}Sr.prototype.M=function(){Sr.Z.M.call(this),jp(this)};Sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lo(){this.g=!0}Lo.prototype.Aa=function(){this.g=!1};function dI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function fI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function hs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+gI(t,n)+(s?" "+s:"")})}function pI(t,e){t.info(function(){return"TIMEOUT: "+e})}Lo.prototype.info=function(){};function gI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Sl(n)}catch{return e}}var zn={},Dh=null;function xo(){return Dh=Dh||new Oe}zn.Ma="serverreachability";function Kp(t){ze.call(this,zn.Ma,t)}Be(Kp,ze);function Cr(t){const e=xo();Ue(e,new Kp(e,t))}zn.STAT_EVENT="statevent";function Hp(t,e){ze.call(this,zn.STAT_EVENT,t),this.stat=e}Be(Hp,ze);function Ze(t){const e=xo();Ue(e,new Hp(e,t))}zn.Na="timingevent";function qp(t,e){ze.call(this,zn.Na,t),this.size=e}Be(qp,ze);function Yr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Uo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Wp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Nl(){}Nl.prototype.h=null;function Oh(t){return t.h||(t.h=t.i())}function zp(){}var Qr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Dl(){ze.call(this,"d")}Be(Dl,ze);function Ol(){ze.call(this,"c")}Be(Ol,ze);var gc;function Fo(){}Be(Fo,Nl);Fo.prototype.g=function(){return new XMLHttpRequest};Fo.prototype.i=function(){return{}};gc=new Fo;function Xr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Sr(this),this.P=mI,t=lc?125:void 0,this.W=new Mo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Gp}function Gp(){this.i=null,this.g="",this.h=!1}var mI=45e3,mc={},to={};P=Xr.prototype;P.setTimeout=function(t){this.P=t};function yc(t,e,n){t.K=1,t.v=Bo(Ht(e)),t.s=n,t.U=!0,Yp(t,null)}function Yp(t,e){t.F=Date.now(),Jr(t),t.A=Ht(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),ng(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Gp,t.g=Ig(t.l,n?e:null,!t.s),0<t.O&&(t.L=new hI(xe(t.Ia,t,t.g),t.O)),$p(t.V,t.g,"readystatechange",t.gb),e=t.H?Rp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Cr(1),dI(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&Bt(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const u=Bt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||lc||this.g&&(this.h.h||this.g.ga()||xh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Cr(3):Cr(2)),Vo(this);var n=this.g.ba();this.N=n;t:if(Qp(this)){var s=xh(this.g);t="";var r=s.length,i=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Cn(this),lr(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,fI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zi(a)){var l=a;break t}}l=null}if(n=l)hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vc(this,n);else{this.i=!1,this.o=3,Ze(12),Cn(this),lr(this);break e}}this.U?(Xp(this,u,o),lc&&this.i&&u==3&&($p(this.V,this.W,"tick",this.fb),this.W.start())):(hs(this.j,this.m,o,null),vc(this,o)),u==4&&Cn(this),this.i&&!this.I&&(u==4?vg(this.l,this):(this.i=!1,Jr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Cn(this),lr(this)}}}catch{}finally{}};function Qp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Xp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=yI(t,n),r==to){e==4&&(t.o=4,Ze(14),s=!1),hs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==mc){t.o=4,Ze(15),hs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else hs(t.j,t.m,r,null),vc(t,r);Qp(t)&&r!=to&&r!=mc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),$l(e),e.L=!0,Ze(11))):(hs(t.j,t.m,n,"[Invalid Chunked Response]"),Cn(t),lr(t))}P.fb=function(){if(this.g){var t=Bt(this.g),e=this.g.ga();this.C<e.length&&(Vo(this),Xp(this,t,e),this.i&&t!=4&&Jr(this))}};function yI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?to:(n=Number(e.substring(n,s)),isNaN(n)?mc:(s+=1,s+n>e.length?to:(e=e.substr(s,n),t.C=s+n,e)))}P.cancel=function(){this.I=!0,Cn(this)};function Jr(t){t.Y=Date.now()+t.P,Jp(t,t.P)}function Jp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Yr(xe(t.eb,t),e)}function Vo(t){t.B&&(H.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(pI(this.j,this.A),this.K!=2&&(Cr(3),Ze(17)),Cn(this),this.o=2,lr(this)):Jp(this,this.Y-t)};function lr(t){t.l.G==0||t.I||vg(t.l,t)}function Cn(t){Vo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Rl(t.W),jp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||wc(n.i,t))){if(n.I=t.N,!t.J&&wc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)io(n),Ko(n);else break e;Bl(n),Ze(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Yr(xe(n.ab,n),6e3));if(1>=ig(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Rn(n,11)}else if((t.J||n.g==t)&&io(n),!Zi(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(Xe(m,"spdy")||Xe(m,"quic")||Xe(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Ll(i,i.h),i.h=null))}if(s.D){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.sa=C,we(s.F,s.D,C))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Eg(s,s.H?s.la:null,s.W),o.J){og(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Vo(a),Jr(a)),s.g=o}else mg(s);0<n.l.length&&Ho(n)}else l[0]!="stop"&&l[0]!="close"||Rn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Rn(n,7):Vl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Cr(4)}catch{}}function vI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(cc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Pl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cc(t)||typeof t=="string")Cp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(cc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=vI(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Vs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Vs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}P=Vs.prototype;P.R=function(){Ml(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return Ml(this),this.g.concat()};function Ml(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Vn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Vn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}P.get=function(t,e){return Vn(this.h,t)?this.h[t]:e};P.set=function(t,e){Vn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Zp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Bn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Bn){this.g=e!==void 0?e:t.g,no(this,t.j),this.s=t.s,so(this,t.i),ro(this,t.m),this.l=t.l,e=t.h;var n=new Rr;n.i=e.i,e.g&&(n.g=new Vs(e.g),n.h=e.h),Ph(this,n),this.o=t.o}else t&&(n=String(t).match(Zp))?(this.g=!!e,no(this,n[1]||"",!0),this.s=ur(n[2]||""),so(this,n[3]||"",!0),ro(this,n[4]),this.l=ur(n[5]||"",!0),Ph(this,n[6]||"",!0),this.o=ur(n[7]||"")):(this.g=!!e,this.h=new Rr(null,this.g))}Bn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(nr(e,Mh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(nr(e,Mh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(nr(n,n.charAt(0)=="/"?TI:AI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",nr(n,SI)),t.join("")};function Ht(t){return new Bn(t)}function no(t,e,n){t.j=n?ur(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function so(t,e,n){t.i=n?ur(e,!0):e}function ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ph(t,e,n){e instanceof Rr?(t.h=e,CI(t.h,t.g)):(n||(e=nr(e,bI)),t.h=new Rr(e,t.g))}function we(t,e,n){t.h.set(e,n)}function Bo(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _I(t){return t instanceof Bn?Ht(t):new Bn(t,void 0)}function EI(t,e,n,s){var r=new Bn(null,void 0);return t&&no(r,t),e&&so(r,e),n&&ro(r,n),s&&(r.l=s),r}function ur(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function nr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,II),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function II(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mh=/[#\/\?@]/g,AI=/[#\?:]/g,TI=/[#\?]/g,bI=/[#\?@]/g,SI=/#/g;function Rr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _n(t){t.g||(t.g=new Vs,t.h=0,t.i&&wI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Rr.prototype;P.add=function(t,e){_n(this),this.i=null,t=Bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function eg(t,e){_n(t),e=Bs(t,e),Vn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Vn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ml(t)))}function tg(t,e){return _n(t),e=Bs(t,e),Vn(t.g.h,e)}P.forEach=function(t,e){_n(this),this.g.forEach(function(n,s){Cp(n,function(r){t.call(e,r,s,this)},this)},this)};P.T=function(){_n(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};P.R=function(t){_n(this);var e=[];if(typeof t=="string")tg(this,t)&&(e=Th(e,this.g.get(Bs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Th(e,t[n])}return e};P.set=function(t,e){return _n(this),this.i=null,t=Bs(this,t),tg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ng(t,e,n){eg(t,e),0<n.length&&(t.i=null,t.g.set(Bs(t,e),wl(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CI(t,e){e&&!t.j&&(_n(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(eg(this,s),ng(this,r,n))},t)),t.j=e}var RI=class{constructor(t,e){this.h=t,this.g=e}};function sg(t){this.l=t||kI,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kI=10;function rg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ig(t){return t.h?1:t.g?t.g.size:0}function wc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ll(t,e){t.g?t.g.add(e):t.h=e}function og(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sg.prototype.cancel=function(){if(this.i=ag(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ag(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wl(t.i)}function xl(){}xl.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};xl.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function NI(){this.g=new xl}function DI(t,e,n){const s=n||"";try{Pl(t,function(r,i){let o=r;zr(r)&&(o=Sl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function OI(t,e){const n=new Lo;if(H.Image){const s=new Image;s.onload=gi(yi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=gi(yi,n,s,"TestLoadImage: error",!1,e),s.onabort=gi(yi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=gi(yi,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function yi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Zr(t){this.l=t.$b||null,this.j=t.ib||!1}Be(Zr,Nl);Zr.prototype.g=function(){return new $o(this.l,this.j)};Zr.prototype.i=function(t){return function(){return t}}({});function $o(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ul,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be($o,Oe);var Ul=0;P=$o.prototype;P.open=function(t,e){if(this.readyState!=Ul)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,kr(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=Ul};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof H.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function cg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ei(this):kr(this),this.readyState==3&&cg(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,ei(this))};P.Ta=function(t){this.g&&(this.response=t,ei(this))};P.ha=function(){this.g&&ei(this)};function ei(t){t.readyState=4,t.l=null,t.j=null,t.A=null,kr(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function kr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PI=H.JSON.parse;function be(t){Oe.call(this),this.headers=new Vs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lg,this.K=this.L=!1}Be(be,Oe);var lg="",MI=/^https?$/i,LI=["POST","PUT"];P=be.prototype;P.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gc.g(),this.C=this.u?Oh(this.u):Oh(gc),this.g.onreadystatechange=xe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Lh(this,i);return}t=n||"";const r=new Vs(this.headers);s&&Pl(s,function(i,o){r.set(o,i)}),s=WE(r.T()),n=H.FormData&&t instanceof H.FormData,!(0<=Sp(LI,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dg(this),0<this.B&&((this.K=xI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xe(this.pa,this)):this.A=kl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Lh(this,i)}};function xI(t){return bs&&XE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function UI(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof vl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function Lh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ug(t),jo(t)}function ug(t){t.D||(t.D=!0,Ue(t,"complete"),Ue(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),jo(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jo(this,!0)),be.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?hg(this):this.cb())};P.cb=function(){hg(this)};function hg(t){if(t.h&&typeof vl!="undefined"&&(!t.C[1]||Bt(t)!=4||t.ba()!=2)){if(t.v&&Bt(t)==4)kl(t.Fa,0,t);else if(Ue(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Zp)[1]||null;if(!r&&H.self&&H.self.location){var i=H.self.location.protocol;r=i.substr(0,i.length-1)}s=!MI.test(r?r.toLowerCase():"")}n=s}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var o=2<Bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",ug(t)}}finally{jo(t)}}}}function jo(t,e){if(t.g){dg(t);const n=t.g,s=t.C[0]?Ji:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=s}catch{}}}function dg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function Bt(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PI(e)}};function xh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function FI(t){let e="";return _l(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Fl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=FI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fg(t){this.za=0,this.l=[],this.h=new Lo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ys("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ys("baseRetryDelayMs",5e3,t),this.$a=Ys("retryDelaySeedMs",1e4,t),this.Ya=Ys("forwardChannelMaxRetries",2,t),this.ra=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new sg(t&&t.concurrentRequestLimit),this.Ca=new NI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=fg.prototype;P.ma=8;P.G=1;function Vl(t){if(pg(t),t.G==3){var e=t.V++,n=Ht(t.F);we(n,"SID",t.J),we(n,"RID",e),we(n,"TYPE","terminate"),ti(t,n),e=new Xr(t,t.h,e,void 0),e.K=2,e.v=Bo(Ht(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ig(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Jr(e)}_g(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ko(t){t.g&&($l(t),t.g.cancel(),t.g=null)}function pg(t){Ko(t),t.u&&(H.clearTimeout(t.u),t.u=null),io(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Sa(t,e){t.l.push(new RI(t.Za++,e)),t.G==3&&Ho(t)}function Ho(t){rg(t.i)||t.m||(t.m=!0,Cl(t.Ha,t),t.C=0)}function VI(t,e){return ig(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Yr(xe(t.Ha,t,e),wg(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Xr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Rp(i),kp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gg(this,r,e),n=Ht(this.F),we(n,"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),ti(this,n),this.o&&i&&Fl(n,this.o,i),Ll(this.i,r),this.Ra&&we(n,"TYPE","init"),this.ja?(we(n,"$req",e),we(n,"SID","null"),r.$=!0,yc(r,n,null)):yc(r,n,e),this.G=2}}else this.G==3&&(t?Uh(this,t):this.l.length==0||rg(this.i)||Uh(this))};function Uh(t,e){var n;e?n=e.m:n=t.V++;const s=Ht(t.F);we(s,"SID",t.J),we(s,"RID",n),we(s,"AID",t.U),ti(t,s),t.o&&t.s&&Fl(s,t.o,t.s),n=new Xr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=gg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ll(t.i,n),yc(n,s,e)}function ti(t,e){t.j&&Pl({},function(n,s){we(e,s,n)})}function gg(t,e,n){n=Math.min(t.l.length,n);var s=t.j?xe(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{DI(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function mg(t){t.g||t.u||(t.Y=1,Cl(t.Ga,t),t.A=0)}function Bl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Yr(xe(t.Ga,t),wg(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,yg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Yr(xe(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),Ko(this),yg(this))};function $l(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function yg(t){t.g=new Xr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Ht(t.oa);we(e,"RID","rpc"),we(e,"SID",t.J),we(e,"CI",t.N?"0":"1"),we(e,"AID",t.U),ti(t,e),we(e,"TYPE","xmlhttp"),t.o&&t.s&&Fl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Bo(Ht(e)),n.s=null,n.U=!0,Yp(n,t)}P.ab=function(){this.v!=null&&(this.v=null,Ko(this),Bl(this),Ze(19))};function io(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function vg(t,e){var n=null;if(t.g==e){io(t),$l(t),t.g=null;var s=2}else if(wc(t.i,e))n=e.D,og(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=xo(),Ue(s,new qp(s,n,e,r)),Ho(t)}else mg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&VI(t,e)||s==2&&Bl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Rn(t,5);break;case 4:Rn(t,10);break;case 3:Rn(t,6);break;default:Rn(t,2)}}}function wg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Rn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=xe(t.jb,t);n||(n=new Bn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||no(n,"https"),Bo(n)),OI(n.toString(),s)}else Ze(2);t.G=0,t.j&&t.j.va(e),_g(t),pg(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))};function _g(t){t.G=0,t.I=-1,t.j&&((ag(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,wl(t.l),t.l.length=0),t.j.ua())}function Eg(t,e,n){let s=_I(n);if(s.i!="")e&&so(s,e+"."+s.i),ro(s,s.m);else{const r=H.location;s=EI(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&_l(t.aa,function(r,i){we(s,i,r)}),e=t.D,n=t.sa,e&&n&&we(s,e,n),we(s,"VER",t.ma),ti(t,s),s}function Ig(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new be(new Zr({ib:!0})):new be(t.qa),e.L=t.H,e}function Ag(){}P=Ag.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function oo(){if(bs&&!(10<=Number(JE)))throw Error("Environmental error: no available transport.")}oo.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Oe.call(this),this.g=new fg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Zi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $s(this)}Be(pt,Oe);pt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Cl(xe(t.hb,t,e))),Ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Eg(t,null,t.W),Ho(t)};pt.prototype.close=function(){Vl(this.g)};pt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Sa(this.g,e)}else this.v?(e={},e.__data__=Sl(t),Sa(this.g,e)):Sa(this.g,t)};pt.prototype.M=function(){this.g.j=null,delete this.j,Vl(this.g),delete this.g,pt.Z.M.call(this)};function Tg(t){Dl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Tg,Dl);function bg(){Ol.call(this),this.status=1}Be(bg,Ol);function $s(t){this.g=t}Be($s,Ag);$s.prototype.xa=function(){Ue(this.g,"a")};$s.prototype.wa=function(t){Ue(this.g,new Tg(t))};$s.prototype.va=function(t){Ue(this.g,new bg(t))};$s.prototype.ua=function(){Ue(this.g,"b")};oo.prototype.createWebChannel=oo.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Uo.NO_ERROR=0;Uo.TIMEOUT=8;Uo.HTTP_ERROR=6;Wp.COMPLETE="complete";zp.EventType=Qr;Qr.OPEN="a";Qr.CLOSE="b";Qr.ERROR="c";Qr.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.La;be.prototype.getLastErrorCode=be.prototype.Da;be.prototype.getStatus=be.prototype.ba;be.prototype.getResponseJson=be.prototype.Qa;be.prototype.getResponseText=be.prototype.ga;be.prototype.send=be.prototype.ea;var BI=function(){return new oo},$I=function(){return xo()},Ca=Uo,jI=Wp,KI=zn,Fh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},HI=Zr,vi=zp,qI=be;const Vh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new rl("@firebase/firestore");function Bh(){return $n.logLevel}function F(t,...e){if($n.logLevel<=re.DEBUG){const n=e.map(jl);$n.debug(`Firestore (${js}): ${t}`,...n)}}function mn(t,...e){if($n.logLevel<=re.ERROR){const n=e.map(jl);$n.error(`Firestore (${js}): ${t}`,...n)}}function $h(t,...e){if($n.logLevel<=re.WARN){const n=e.map(jl);$n.warn(`Firestore (${js}): ${t}`,...n)}}function jl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function pe(t,e){t||W()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class GI{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string"),new WI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new rt(e)}}class YI{constructor(e,n,s){this.type="FirstParty",this.user=rt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class QI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new YI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.p=n.token,new XI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kl.A=-1;class Sg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ZI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ge(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ge(0,0))}static max(){return new Z(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,s){n===void 0?n=0:n>e.length&&W(),s===void 0?s=e.length-n:s>e.length-n&&W(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Nr{construct(e,n,s){return new me(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new me(n)}static emptyPath(){return new me([])}}const eA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Nr{construct(e,n,s){return new it(e,n,s)}static isValidIdentifier(e){return eA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.fields=e,e.sort(it.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ve(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const tA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(t){if(pe(!!t),typeof t=="string"){let e=0;const n=tA.exec(t);if(pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kg(t){const e=t.mapValue.fields.__previous_value__;return Rg(e)?kg(e):e}function Or(t){const e=yn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Rs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){return t==null}function ao(t){return t===0&&1/t==-1/0}function sA(t){return typeof t=="number"&&Number.isInteger(t)&&!ao(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(me.fromString(e))}static fromName(e){return new B(me.fromString(e).popFirst(5))}static empty(){return new B(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new me(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rg(t)?4:rA(t)?9007199254740991:10:W()}function Pt(t,e){if(t===e)return!0;const n=jn(t);if(n!==jn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Or(t).isEqual(Or(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=yn(s.timestampValue),o=yn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Cs(s.bytesValue).isEqual(Cs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Te(s.geoPointValue.latitude)===Te(r.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Te(s.integerValue)===Te(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Te(s.doubleValue),o=Te(r.doubleValue);return i===o?ao(i)===ao(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(jh(i)!==jh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Pt(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function Pr(t,e){return(t.values||[]).find(n=>Pt(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=jn(t),s=jn(e);if(n!==s)return ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Te(r.integerValue||r.doubleValue),a=Te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Kh(t.timestampValue,e.timestampValue);case 4:return Kh(Or(t),Or(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Cs(r),a=Cs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ie(o[c],a[c]);if(l!==0)return l}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ie(Te(r.latitude),Te(i.latitude));return o!==0?o:ie(Te(r.longitude),Te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ks(o[c],a[c]);if(l)return l}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===wi.mapValue&&i===wi.mapValue)return 0;if(r===wi.mapValue)return 1;if(i===wi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ie(a[u],l[u]);if(h!==0)return h;const d=ks(o[a[u]],c[l[u]]);if(d!==0)return d}return ie(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function Kh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=yn(t),s=yn(e),r=ie(n.seconds,s.seconds);return r!==0?r:ie(n.nanos,s.nanos)}function ws(t){return _c(t)}function _c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=yn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=_c(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${_c(s.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function Hh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ec(t){return!!t&&"integerValue"in t}function Hl(t){return!!t&&"arrayValue"in t}function qh(t){return!!t&&"nullValue"in t}function Wh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xi(t){return!!t&&"mapValue"in t}function hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hr(n)}setAll(e){let n=it.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=hr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());xi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];xi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Gn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ht(hr(this.value))}}function Ng(t){const e=[];return Gn(t.fields,(n,s)=>{const r=new it([n]);if(xi(s)){const i=Ng(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Dr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new qe(e,0,Z.min(),Z.min(),ht.empty(),0)}static newFoundDocument(e,n,s){return new qe(e,1,n,Z.min(),s,0)}static newNoDocument(e,n){return new qe(e,2,n,Z.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,Z.min(),ht.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function iA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new Ge(n+1,0):new Ge(n,s));return new Kn(r,B.empty(),e)}function oA(t){return new Kn(t.readTime,t.key,-1)}class Kn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Kn(Z.min(),B.empty(),-1)}static max(){return new Kn(Z.max(),B.empty(),-1)}}function aA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _i(this.root,e,this.comparator,!1)}getReverseIterator(){return new _i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _i(this.root,e,this.comparator,!0)}}class _i{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Le.RED,this.left=r!=null?r:Le.EMPTY,this.right=i!=null?i:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Le(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zh(this.data.getIterator())}getIteratorFrom(e){return new zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Gh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new cA(t,e,n,s,r,i,o)}function ql(t){const e=Y(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+ws(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),qo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ws(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ws(s)).join(",")),e.P=n}return e.P}function lA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ws(s.value)}`;var s}).join(", ")}]`),qo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ws(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ws(n)).join(",")),`Target(${e})`}function Wl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!yA(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Pt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qh(t.startAt,e.startAt)&&Qh(t.endAt,e.endAt)}function Ic(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class et extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new uA(e,n,s):n==="array-contains"?new fA(e,s):n==="in"?new pA(e,s):n==="not-in"?new gA(e,s):n==="array-contains-any"?new mA(e,s):new et(e,n,s)}static V(e,n,s){return n==="in"?new hA(e,s):new dA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ks(n,this.value)):n!==null&&jn(this.value)===jn(n)&&this.v(ks(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class uA extends et{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.v(n)}}class hA extends et{constructor(e,n){super(e,"in",n),this.keys=Dg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dA extends et{constructor(e,n){super(e,"not-in",n),this.keys=Dg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class fA extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hl(n)&&Pr(n.arrayValue,this.value)}}class pA extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pr(this.value.arrayValue,n)}}class gA extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pr(this.value.arrayValue,n)}}class mA extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Pr(this.value.arrayValue,s))}}class co{constructor(e,n){this.position=e,this.inclusive=n}}class dr{constructor(e,n="asc"){this.field=e,this.dir=n}}function yA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Yh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=ks(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function vA(t,e,n,s,r,i,o,a){return new ni(t,e,n,s,r,i,o,a)}function Og(t){return new ni(t)}function wA(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Mg(t){for(const e of t.filters)if(e.S())return e.field;return null}function Lg(t){return t.collectionGroup!==null}function Mr(t){const e=Y(t);if(e.D===null){e.D=[];const n=Mg(e),s=Pg(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new dr(n)),e.D.push(new dr(it.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new dr(it.keyField(),i))}}}return e.D}function Hn(t){const e=Y(t);if(!e.C)if(e.limitType==="F")e.C=Gh(e.path,e.collectionGroup,Mr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Mr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new dr(i.field,o))}const s=e.endAt?new co(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new co(e.startAt.position,e.startAt.inclusive):null;e.C=Gh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function _A(t,e,n){return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wo(t,e){return Wl(Hn(t),Hn(e))&&t.limitType===e.limitType}function xg(t){return`${ql(Hn(t))}|lt:${t.limitType}`}function Ac(t){return`Query(target=${lA(Hn(t))}; limitType=${t.limitType})`}function zl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Yh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Mr(n),s)||n.endAt&&!function(r,i,o){const a=Yh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Mr(n),s))}(t,e)}function EA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ug(t){return(e,n)=>{let s=!1;for(const r of Mr(t)){const i=IA(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function IA(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ks(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ao(e)?"-0":e}}function Vg(t){return{integerValue:""+t}}function AA(t,e){return sA(e)?Vg(e):Fg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this._=void 0}}function TA(t,e,n){return t instanceof lo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Lr?$g(t,e):t instanceof xr?jg(t,e):function(s,r){const i=Bg(s,r),o=Xh(i)+Xh(s.k);return Ec(i)&&Ec(s.k)?Vg(o):Fg(s.M,o)}(t,e)}function bA(t,e,n){return t instanceof Lr?$g(t,e):t instanceof xr?jg(t,e):n}function Bg(t,e){return t instanceof uo?Ec(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class lo extends zo{}class Lr extends zo{constructor(e){super(),this.elements=e}}function $g(t,e){const n=Kg(e);for(const s of t.elements)n.some(r=>Pt(r,s))||n.push(s);return{arrayValue:{values:n}}}class xr extends zo{constructor(e){super(),this.elements=e}}function jg(t,e){let n=Kg(e);for(const s of t.elements)n=n.filter(r=>!Pt(r,s));return{arrayValue:{values:n}}}class uo extends zo{constructor(e,n){super(),this.M=e,this.k=n}}function Xh(t){return Te(t.integerValue||t.doubleValue)}function Kg(t){return Hl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function SA(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Lr&&s instanceof Lr||n instanceof xr&&s instanceof xr?Ss(n.elements,s.elements,Pt):n instanceof uo&&s instanceof uo?Pt(n.k,s.k):n instanceof lo&&s instanceof lo}(t.transform,e.transform)}class CA{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ui(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Go{}function RA(t,e,n){t instanceof Yo?function(s,r,i){const o=s.value.clone(),a=ed(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ks?function(s,r,i){if(!Ui(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ed(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Hg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Tc(t,e,n){t instanceof Yo?function(s,r,i){if(!Ui(s.precondition,r))return;const o=s.value.clone(),a=td(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Zh(r),o).setHasLocalMutations()}(t,e,n):t instanceof Ks?function(s,r,i){if(!Ui(s.precondition,r))return;const o=td(s.fieldTransforms,i,r),a=r.data;a.setAll(Hg(s)),a.setAll(o),r.convertToFoundDocument(Zh(r),a).setHasLocalMutations()}(t,e,n):function(s,r){Ui(s.precondition,r)&&r.convertToNoDocument(Z.min())}(t,e)}function kA(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Bg(s.transform,r||null);i!=null&&(n==null&&(n=ht.empty()),n.set(s.field,i))}return n||null}function Jh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ss(n,s,(r,i)=>SA(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Zh(t){return t.isFoundDocument()?t.version:Z.min()}class Yo extends Go{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Ks extends Go{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Hg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ed(t,e,n){const s=new Map;pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,bA(o,a,n[r]))}return s}function td(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,TA(i,o,e))}return s}class NA extends Go{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class DA extends Go{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,te;function PA(t){switch(t){default:return W();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function qg(t){if(t===void 0)return mn("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ae.OK:return w.OK;case Ae.CANCELLED:return w.CANCELLED;case Ae.UNKNOWN:return w.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return w.INTERNAL;case Ae.UNAVAILABLE:return w.UNAVAILABLE;case Ae.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ae.NOT_FOUND:return w.NOT_FOUND;case Ae.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ae.ABORTED:return w.ABORTED;case Ae.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ae.DATA_LOSS:return w.DATA_LOSS;default:return W()}}(te=Ae||(Ae={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Cg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new Pe(B.comparator);function qn(){return MA}const LA=new Pe(B.comparator);function bc(...t){let e=LA;for(const n of t)e=e.insert(n.key,n);return e}function Ra(){return new Hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const xA=new Pe(B.comparator),UA=new Fe(B.comparator);function ye(...t){let e=UA;for(const n of t)e=e.add(n);return e}const FA=new Fe(ie);function Wg(){return FA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,si.createSynthesizedTargetChangeForCurrentChange(e,n)),new Qo(Z.min(),s,Wg(),qn(),ye())}}class si{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new si(Ve.EMPTY_BYTE_STRING,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class zg{constructor(e,n){this.targetId=e,this.$=n}}class Gg{constructor(e,n,s=Ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class nd{constructor(){this.B=0,this.L=rd(),this.U=Ve.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=ye(),n=ye(),s=ye();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:W()}}),new si(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=rd()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class VA{constructor(e){this.nt=e,this.st=new Map,this.it=qn(),this.rt=sd(),this.ot=new Fe(ie)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(Ic(i))if(s===0){const o=new B(i.path);this.ct(n,o,qe.newNoDocument(o,Z.min()))}else pe(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Ic(a.target)){const c=new B(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,qe.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=ye();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new Qo(e,n,this.ot,this.it,s);return this.it=qn(),this.rt=sd(),this.ot=new Fe(ie),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new nd,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Fe(ie),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new nd),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function sd(){return new Pe(B.comparator)}function rd(){return new Pe(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$A=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class jA{constructor(e,n){this.databaseId=e,this.N=n}}function ho(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yg(t,e){return t.N?e.toBase64():e.toUint8Array()}function KA(t,e){return ho(t,e.toTimestamp())}function $t(t){return pe(!!t),Z.fromTimestamp(function(e){const n=yn(e);return new Ge(n.seconds,n.nanos)}(t))}function Gl(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Qg(t){const e=me.fromString(t);return pe(Zg(e)),e}function Sc(t,e){return Gl(t.databaseId,e.path)}function ka(t,e){const n=Qg(e);if(n.get(1)!==t.databaseId.projectId)throw new M(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Xg(n))}function Cc(t,e){return Gl(t.databaseId,e)}function HA(t){const e=Qg(t);return e.length===4?me.emptyPath():Xg(e)}function Rc(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xg(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function id(t,e,n){return{name:Sc(t,e),fields:n.value.mapValue.fields}}function qA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(pe(l===void 0||typeof l=="string"),Ve.fromBase64String(l||"")):(pe(l===void 0||l instanceof Uint8Array),Ve.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?w.UNKNOWN:qg(c.code);return new M(l,c.message||"")}(o);n=new Gg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ka(t,s.document.name),i=$t(s.document.updateTime),o=new ht({mapValue:{fields:s.document.fields}}),a=qe.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Fi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ka(t,s.document),i=s.readTime?$t(s.readTime):Z.min(),o=qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Fi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ka(t,s.document),i=s.removedTargetIds||[];n=new Fi([],i,r,null)}else{if(!("filter"in e))return W();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new OA(r),o=s.targetId;n=new zg(o,i)}}return n}function WA(t,e){let n;if(e instanceof Yo)n={update:id(t,e.key,e.value)};else if(e instanceof NA)n={delete:Sc(t,e.key)};else if(e instanceof Ks)n={update:id(t,e.key,e.data),updateMask:nT(e.fieldMask)};else{if(!(e instanceof DA))return W();n={verify:Sc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof lo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Lr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof uo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw W()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:KA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function zA(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?$t(s.updateTime):$t(r);return i.isEqual(Z.min())&&(i=$t(r)),new CA(i,s.transformResults||[])}(n,e))):[]}function GA(t,e){return{documents:[Cc(t,e.path)]}}function YA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Cc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Wh(h.value))return{unaryFilter:{field:ns(h.field),op:"IS_NAN"}};if(qh(h.value))return{unaryFilter:{field:ns(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Wh(h.value))return{unaryFilter:{field:ns(h.field),op:"IS_NOT_NAN"}};if(qh(h.value))return{unaryFilter:{field:ns(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(h.field),op:ZA(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ns(u.field),direction:JA(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||qo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function QA(t){let e=HA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Jg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new dr(ds(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,qo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new co(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new co(d,h)}(n.endAt)),vA(e,r,o,i,a,"F",c,l)}function XA(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jg(t){return t?t.unaryFilter!==void 0?[tT(t)]:t.fieldFilter!==void 0?[eT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Jg(e)).reduce((e,n)=>e.concat(n)):W():[]}function JA(t){return BA[t]}function ZA(t){return $A[t]}function ns(t){return{fieldPath:t.canonicalString()}}function ds(t){return it.fromServerFormat(t.fieldPath)}function eT(t){return et.create(ds(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function tT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ds(t.unaryFilter.field);return et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ds(t.unaryFilter.field);return et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ds(t.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ds(t.unaryFilter.field);return et.create(r,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function nT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function ri(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&RA(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Tc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Tc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(Z.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,s)=>Jh(n,s))&&Ss(this.baseMutations,e.baseMutations,(n,s)=>Jh(n,s))}}class Yl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){pe(e.mutations.length===s.length);let r=xA;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Yl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=Ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.Jt=e}}function cT(t){const e=QA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_A(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.qe=new uT}addToCollectionParentIndex(e,n){return this.qe.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Kn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class uT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Fe(me.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Fe(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Ns(0)}static yn(){return new Ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==sT)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.changes=new Hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(e,n.path):Lg(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new B(n)).next(s=>{let r=bc();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,n,s){const r=n.collectionGroup;let i=bc();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(l,u){return new ni(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.zs(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,s){let r;return this.ds.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=qe.newInvalidDocument(c),r=r.insert(c,l)),Tc(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{zl(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(e,n){let s=ye(),r=ye();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ql(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,s,r){return this.ti(e,n).next(i=>i||this.ei(e,n,r,s)).next(i=>i||this.ni(e,n))}ti(e,n){return b.resolve(null)}ei(e,n,s,r){return wA(n)||r.isEqual(Z.min())?this.ni(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.si(n,i);return this.ii(n,o,s,r)?this.ni(e,n):(Bh()<=re.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ac(n)),this.ri(e,o,n,iA(r,-1)))})}si(e,n){let s=new Fe(Ug(e));return n.forEach((r,i)=>{zl(e,i)&&(s=s.add(i))}),s}ii(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,n){return Bh()<=re.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Ac(n)),this.Zs.Qs(e,n,Kn.min())}ri(e,n,s,r){return this.Zs.Qs(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,s,r){this.persistence=e,this.oi=n,this.M=r,this.ui=new Pe(ie),this.ai=new Hs(i=>ql(i),Wl),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(s)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new dT(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function gT(t,e,n,s){return new pT(t,e,n,s)}async function em(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.li(e),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ye();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.fi.Ks(s,c).next(l=>({di:l,removedBatchIds:o,addedBatchIds:a}))})})}function mT(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(m=>{const C=c.docVersions.get(g);pe(C!==null),m.version.compareTo(C)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.fi.Ks(s,r))})}function tm(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function yT(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});r=n.ui;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?d=d.withResumeToken(Ve.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(u,d),function(g,m,C){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(h,d,l)&&a.push(n.fs.updateTargetData(i,d))});let c=qn();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(vT(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(Z.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=r,i))}function vT(t,e,n){let s=ye();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=qn();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(Z.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):F("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function wT(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}function _T(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new Mn(e,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(s.targetId,s),n.ai.set(e,s.targetId)),s})}async function kc(t,e,n){const s=Y(t),r=s.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ri(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ui=s.ui.remove(e),s.ai.delete(r.target)}function od(t,e,n){const s=Y(t);let r=Z.min(),i=ye();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Y(a),h=u.ai.get(l);return h!==void 0?b.resolve(u.ui.get(h)):u.fs.getTargetData(c,l)}(s,o,Hn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.oi.Qs(o,e,n?r:Z.min(),n?i:ye())).next(a=>(ET(s,EA(e),a),{documents:a,_i:i})))}function ET(t,e,n){let s=Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ci.set(e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return b.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var s;return this.yi.set(n.id,{id:(s=n).id,version:s.version,createTime:$t(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(s){return{name:s.name,query:cT(s.bundledQuery),readTime:$t(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.overlays=new Pe(B.comparator),this.Ii=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ii.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Ra(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ra(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ra(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return b.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.Ii.get(r.largestBatchId).delete(s.key);this.Ii.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new oT(n,s));let i=this.Ii.get(n);i===void 0&&(i=ye(),this.Ii.set(n,i)),this.Ii.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.Ti=new Fe(ke.Ei),this.Ai=new Fe(ke.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const s=new ke(e,n);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Pi(new ke(e,n))}Vi(e,n){e.forEach(s=>this.removeReference(s,n))}vi(e){const n=new B(new me([])),s=new ke(n,e),r=new ke(n,e+1),i=[];return this.Ai.forEachInRange([s,r],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new B(new me([])),s=new ke(n,e),r=new ke(n,e+1);let i=ye();return this.Ai.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ke(e,0),s=this.Ti.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ke{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return B.comparator(e.key,n.key)||ie(e.Ci,n.Ci)}static Ri(e,n){return ie(e.Ci,n.Ci)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Fe(ke.Ei)}checkEmpty(e){return b.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new iT(i,n,s,r);this.Bs.push(o);for(const a of r)this.Ni=this.Ni.add(new ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Mi(s),i=r<0?0:r;return b.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return b.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ke(n,0),r=new ke(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([s,r],o=>{const a=this.ki(o.Ci);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Fe(ie);return n.forEach(r=>{const i=new ke(r,0),o=new ke(r,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{s=s.add(a.Ci)})}),b.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new ke(new B(i),0);let a=new Fe(ie);return this.Ni.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Ci)),!0)},o),b.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(s=>{const r=this.ki(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){pe(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return b.forEach(n.mutations,r=>{const i=new ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Ni=s})}_n(e){}containsKey(e,n){const s=new ke(n,0),r=this.Ni.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,b.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.$i=e,this.docs=new Pe(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.$i(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let s=qn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():qe.newInvalidDocument(r))}),b.resolve(s)}getAllFromCollection(e,n,s){let r=qn();const i=new B(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||aA(oA(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,r){W()}Bi(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new ST(this)}getSize(e){return b.resolve(this.size)}}class ST extends hT{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.persistence=e,this.Li=new Hs(n=>ql(n),Wl),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Xl,this.targetCount=0,this.Ki=Ns.gn()}forEachTarget(e,n){return this.Li.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ui&&(this.Ui=n),b.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Tn(n),b.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Li.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.qi.bi(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.qi.Vi(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qi.Di(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n){this.Gi={},this.overlays={},this.es=new Kl(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new CT(this),this.indexManager=new lT,this.ds=function(s){return new bT(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new aT(n),this._s=new IT(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Gi[e.toKey()];return s||(s=new TT(n,this.referenceDelegate),this.Gi[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new kT(this.es.next());return this.referenceDelegate.ji(),s(r).next(i=>this.referenceDelegate.Wi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}zi(e,n){return b.or(Object.values(this.Gi).map(s=>()=>s.containsKey(e,n)))}}class kT extends rT{constructor(e){super(),this.currentSequenceNumber=e}}class Jl{constructor(e){this.persistence=e,this.Hi=new Xl,this.Ji=null}static Yi(e){return new Jl(e)}get Xi(){if(this.Ji)return this.Ji;throw W()}addReference(e,n,s){return this.Hi.addReference(s,n),this.Xi.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Hi.removeReference(s,n),this.Xi.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),b.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(r=>this.Xi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xi,s=>{const r=B.fromPath(s);return this.Zi(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(s=>{s?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return b.or([()=>b.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class ad{constructor(){this.activeTargetIds=Wg()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NT{constructor(){this.Ur=new ad,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new ad,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{Kr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ho(e,n);F("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw $h("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i){return this.co(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+js,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=OT[e];return`${this.uo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new qI;a.listenOnce(jI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ca.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ca.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new M(w.DEADLINE_EXCEEDED,"Request time out"));break;case Ca.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(m)>=0?m:w.UNKNOWN}(h.status);o(new M(d,h.message))}else o(new M(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(w.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=BI(),o=$I(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new HI({})),this.lo(a.initMessageHeaders,n,s),$f()||Kf()||R0()||Hf()||k0()||jf()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new PT({Jr:m=>{h?F("Connection","Not sending because WebChannel is closed:",m):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",m),l.send(m))},Yr:()=>l.close()}),g=(m,C,A)=>{m.listen(C,k=>{try{A(k)}catch(L){setTimeout(()=>{throw L},0)}})};return g(l,vi.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(l,vi.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.ro())}),g(l,vi.EventType.ERROR,m=>{h||(h=!0,$h("Connection","WebChannel transport errored:",m),d.ro(new M(w.UNAVAILABLE,"The operation could not be completed")))}),g(l,vi.EventType.MESSAGE,m=>{var C;if(!h){const A=m.data[0];pe(!!A);const k=A,L=k.error||((C=k[0])===null||C===void 0?void 0:C.error);if(L){F("Connection","WebChannel received error:",L);const G=L.status;let Q=function(Ie){const Ye=Ae[Ie];if(Ye!==void 0)return qg(Ye)}(G),_e=L.message;Q===void 0&&(Q=w.INTERNAL,_e="Unknown error status: "+G+" with message "+L.message),h=!0,d.ro(new M(Q,_e)),l.close()}else F("Connection","WebChannel received:",A),d.oo(A)}}),g(o,KI.STAT_EVENT,m=>{m.stat===Fh.PROXY?F("Connection","Detected buffering proxy"):m.stat===Fh.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.io()},0),d}}function Na(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){return new jA(t,!0)}class nm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n,s,r,i,o,a,c){this.Yn=e,this.Vo=s,this.vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new nm(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new M(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LT extends sm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=qA(this.M,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?$t(i.readTime):Z.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Rc(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=Ic(a)?{documents:GA(r,a)}:{query:YA(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Yg(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=ho(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=XA(this.M,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Rc(this.M),n.removeTarget=e,this.Lo(n)}}class xT extends sm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=zA(e.writeResults,e.commitTime),s=$t(e.commitTime);return this.listener.tu(s,n)}return pe(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Rc(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>WA(this.M,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.M=r,this.su=!1}iu(){if(this.su)throw new M(w.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(w.UNKNOWN,r.toString())})}_o(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So._o(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(w.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class FT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(mn(n),this.uu=!1):F("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{Yn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.wu.add(4),await oi(c),c.yu.set("Unknown"),c.wu.delete(4),await Jo(c)}(this))})}),this.yu=new FT(s,r)}}async function Jo(t){if(Yn(t))for(const e of t.mu)await e(!0)}async function oi(t){for(const e of t.mu)await e(!1)}function rm(t,e){const n=Y(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),tu(n)?eu(n):qs(n).Mo()&&Zl(n,e))}function im(t,e){const n=Y(t),s=qs(n);n._u.delete(e),s.Mo()&&om(n,e),n._u.size===0&&(s.Mo()?s.$o():Yn(n)&&n.yu.set("Unknown"))}function Zl(t,e){t.pu.Z(e.targetId),qs(t).Ho(e)}function om(t,e){t.pu.Z(e),qs(t).Jo(e)}function eu(t){t.pu=new VA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),qs(t).start(),t.yu.au()}function tu(t){return Yn(t)&&!qs(t).ko()&&t._u.size>0}function Yn(t){return Y(t).wu.size===0}function am(t){t.pu=void 0}async function BT(t){t._u.forEach((e,n)=>{Zl(t,e)})}async function $T(t,e){am(t),tu(t)?(t.yu.lu(e),eu(t)):t.yu.set("Unknown")}async function jT(t,e,n){if(t.yu.set("Online"),e instanceof Gg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await fo(t,s)}else if(e instanceof Fi?t.pu.ut(e):e instanceof zg?t.pu._t(e):t.pu.ht(e),!n.isEqual(Z.min()))try{const s=await tm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r._u.get(c);l&&r._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(Ve.EMPTY_BYTE_STRING,c.snapshotVersion)),om(r,a);const l=new Mn(c.target,a,1,c.sequenceNumber);Zl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await fo(t,s)}}async function fo(t,e,n){if(!ri(e))throw e;t.wu.add(1),await oi(t),t.yu.set("Offline"),n||(n=()=>tm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Jo(t)})}function cm(t,e){return e().catch(n=>fo(t,n,e))}async function Zo(t){const e=Y(t),n=vn(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;KT(e);)try{const r=await wT(e.localStore,s);if(r===null){e.du.length===0&&n.$o();break}s=r.batchId,HT(e,r)}catch(r){await fo(e,r)}lm(e)&&um(e)}function KT(t){return Yn(t)&&t.du.length<10}function HT(t,e){t.du.push(e);const n=vn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function lm(t){return Yn(t)&&!vn(t).ko()&&t.du.length>0}function um(t){vn(t).start()}async function qT(t){vn(t).nu()}async function WT(t){const e=vn(t);for(const n of t.du)e.Zo(n.mutations)}async function zT(t,e,n){const s=t.du.shift(),r=Yl.from(s,e,n);await cm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Zo(t)}async function GT(t,e){e&&vn(t).Xo&&await async function(n,s){if(r=s.code,PA(r)&&r!==w.ABORTED){const i=n.du.shift();vn(n).Fo(),await cm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zo(n)}var r}(t,e),lm(t)&&um(t)}async function ld(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=Yn(n);n.wu.add(3),await oi(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Jo(n)}async function YT(t,e){const n=Y(t);e?(n.wu.delete(2),await Jo(n)):e||(n.wu.add(2),await oi(n),n.yu.set("Unknown"))}function qs(t){return t.Iu||(t.Iu=function(e,n,s){const r=Y(e);return r.iu(),new LT(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:BT.bind(null,t),eo:$T.bind(null,t),zo:jT.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),tu(t)?eu(t):t.yu.set("Unknown")):(await t.Iu.stop(),am(t))})),t.Iu}function vn(t){return t.Tu||(t.Tu=function(e,n,s){const r=Y(e);return r.iu(),new xT(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:qT.bind(null,t),eo:GT.bind(null,t),eu:WT.bind(null,t),tu:zT.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Zo(t)):(await t.Tu.stop(),t.du.length>0&&(F("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new nu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function su(t,e){if(mn("AsyncQueue",`${e}: ${t}`),ri(t))return new M(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=bc(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new _s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.Eu=new Pe(B.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):W():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ds{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ds(e,n,_s.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.Ru=void 0,this.listeners=[]}}class XT{constructor(){this.queries=new Hs(e=>xg(e),Wo),this.onlineState="Unknown",this.bu=new Set}}async function JT(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new QT),r)try{i.Ru=await n.onListen(s)}catch(o){const a=su(o,`Initialization of query '${Ac(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&ru(n)}async function ZT(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function eb(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Ru=r}}s&&ru(n)}function tb(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ru(t){t.bu.forEach(e=>{e.next()})}class nb{constructor(e,n,s){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ds(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.key=e}}class dm{constructor(e){this.key=e}}class sb{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=ye(),this.mutatedKeys=ye(),this.Gu=Ug(e),this.Qu=new _s(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new ud,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=zl(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;d&&g?d.data.isEqual(g.data)?m!==C&&(s.track({type:3,doc:g}),A=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),A=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),A=!0):d&&!g&&(s.track({type:1,doc:d}),A=!0,(c||l)&&(a=!0)),A&&(g?(o=o.add(g),i=C?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ds(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ud,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ye(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new dm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new hm(s))}),n}ta(e){this.Uu=e._i,this.Ku=ye();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return Ds.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class rb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ib{constructor(e){this.key=e,this.na=!1}}class ob{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Hs(a=>xg(a),Wo),this.ra=new Map,this.oa=new Set,this.ua=new Pe(B.comparator),this.aa=new Map,this.ca=new Xl,this.ha={},this.la=new Map,this.fa=Ns.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function ab(t,e){const n=yb(t);let s,r;const i=n.ia.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ea();else{const o=await _T(n.localStore,Hn(e));n.isPrimaryClient&&rm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await cb(n,e,s,a==="current")}return r}async function cb(t,e,n,s){t._a=(u,h,d)=>async function(g,m,C,A){let k=m.view.Wu(C);k.ii&&(k=await od(g.localStore,m.query,!1).then(({documents:Q})=>m.view.Wu(Q,k)));const L=A&&A.targetChanges.get(m.targetId),G=m.view.applyChanges(k,g.isPrimaryClient,L);return dd(g,m.targetId,G.Xu),G.snapshot}(t,u,h,d);const r=await od(t.localStore,e,!0),i=new sb(e,r._i),o=i.Wu(r.documents),a=si.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);dd(t,n,c.Xu);const l=new rb(e,n,i);return t.ia.set(e,l),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function lb(t,e){const n=Y(t),s=n.ia.get(e),r=n.ra.get(s.targetId);if(r.length>1)return n.ra.set(s.targetId,r.filter(i=>!Wo(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await kc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),im(n.remoteStore,s.targetId),Nc(n,s.targetId)}).catch(ii)):(Nc(n,s.targetId),await kc(n.localStore,s.targetId,!0))}async function ub(t,e,n){const s=vb(t);try{const r=await function(i,o){const a=Y(i),c=Ge.now(),l=o.reduce((h,d)=>h.add(d.key),ye());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,l).next(d=>{u=d;const g=[];for(const m of o){const C=kA(m,u.get(m.key));C!=null&&g.push(new Ks(m.key,C,Ng(C.value.mapValue),Pn.exists(!0)))}return a.Bs.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new Pe(ie)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(s,r.batchId,n),await ai(s,r.changes),await Zo(s.remoteStore)}catch(r){const i=su(r,"Failed to persist write");n.reject(i)}}async function fm(t,e){const n=Y(t);try{const s=await yT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.aa.get(i);o&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.na=!0:r.modifiedDocuments.size>0?pe(o.na):r.removedDocuments.size>0&&(pe(o.na),o.na=!1))}),await ai(n,s,e)}catch(s){await ii(s)}}function hd(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&ru(a)}(s.eventManager,e),r.length&&s.sa.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hb(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.aa.get(e),i=r&&r.key;if(i){let o=new Pe(B.comparator);o=o.insert(i,qe.newNoDocument(i,Z.min()));const a=ye().add(i),c=new Qo(Z.min(),new Map,new Fe(ie),o,a);await fm(s,c),s.ua=s.ua.remove(i),s.aa.delete(e),iu(s)}else await kc(s.localStore,e,!1).then(()=>Nc(s,e,n)).catch(ii)}async function db(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await mT(n.localStore,e);gm(n,s,null),pm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ai(n,r)}catch(r){await ii(r)}}async function fb(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(pe(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,l))})}(s.localStore,e);gm(s,e,n),pm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ai(s,r)}catch(r){await ii(r)}}function pm(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function gm(t,e,n){const s=Y(t);let r=s.ha[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ha[s.currentUser.toKey()]=r}}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ra.get(e))t.ia.delete(s),n&&t.sa.wa(s,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(s=>{t.ca.containsKey(s)||mm(t,s)})}function mm(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(im(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),iu(t))}function dd(t,e,n){for(const s of n)s instanceof hm?(t.ca.addReference(s.key,e),pb(t,s)):s instanceof dm?(F("SyncEngine","Document no longer in limbo: "+s.key),t.ca.removeReference(s.key,e),t.ca.containsKey(s.key)||mm(t,s.key)):W()}function pb(t,e){const n=e.key,s=n.path.canonicalString();t.ua.get(n)||t.oa.has(s)||(F("SyncEngine","New document in limbo: "+n),t.oa.add(s),iu(t))}function iu(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new B(me.fromString(e)),s=t.fa.next();t.aa.set(s,new ib(n)),t.ua=t.ua.insert(n,s),rm(t.remoteStore,new Mn(Hn(Og(n.path)),s,2,Kl.A))}}async function ai(t,e,n){const s=Y(t),r=[],i=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,c)=>{o.push(s._a(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Ql.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sa.zo(r),await async function(a,c){const l=Y(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Hs,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Js,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ri(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.ui.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);l.ui=l.ui.insert(h,m)}}}(s.localStore,i))}async function gb(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await em(n.localStore,e);n.currentUser=e,function(r,i){r.la.forEach(o=>{o.forEach(a=>{a.reject(new M(w.CANCELLED,i))})}),r.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ai(n,s.di)}}function mb(t,e){const n=Y(t),s=n.aa.get(e);if(s&&s.na)return ye().add(s.key);{let r=ye();const i=n.ra.get(e);if(!i)return r;for(const o of i){const a=n.ia.get(o);r=r.unionWith(a.view.ju)}return r}}function yb(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hb.bind(null,e),e.sa.zo=eb.bind(null,e.eventManager),e.sa.wa=tb.bind(null,e.eventManager),e}function vb(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=db.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fb.bind(null,e),e}class wb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return gT(this.persistence,new fT,e.initialUser,this.M)}ya(e){return new RT(Jl.Yi,this.M)}ga(e){return new NT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _b{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gb.bind(null,this.syncEngine),await YT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new XT}createDatastore(e){const n=Xo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new MT(r));var r;return function(i,o,a,c){return new UT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>hd(this.syncEngine,a,0),o=cd.vt()?new cd:new DT,new VT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new ob(s,r,i,o,a,c);return l&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);F("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await oi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=rt.UNAUTHENTICATED,this.clientId=Sg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=su(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ab(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await em(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Tb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bb(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ld(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ld(e.remoteStore,i)),t.onlineComponents=e}async function bb(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await Ab(t,new wb)),t.offlineComponents}async function ym(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await Tb(t,new _b)),t.onlineComponents}function Sb(t){return ym(t).then(e=>e.syncEngine)}async function Cb(t){const e=await ym(t),n=e.eventManager;return n.onListen=ab.bind(null,e.syncEngine),n.onUnlisten=lb.bind(null,e.syncEngine),n}function Rb(t,e,n={}){const s=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Eb({next:h=>{i.enqueueAndForget(()=>ZT(r,u)),h.fromCache&&a.source==="server"?c.reject(new M(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new nb(o,l,{includeMetadataChanges:!0,ku:!0});return JT(r,u)}(await Cb(t),t.asyncQueue,e,n,s)),s.promise}const fd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t,e,n){if(!n)throw new M(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kb(t,e,n,s){if(e===!0&&s===!0)throw new M(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pd(t){if(!B.isDocumentKey(t))throw new M(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gd(t){if(B.isDocumentKey(t))throw new M(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Ur(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ea(t);throw new M(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,kb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new md({}),this._settingsFrozen=!1,e instanceof Rs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new M(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rs(r.options.projectId)}(e))}get app(){if(!this._app)throw new M(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new md(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zI;switch(n.type){case"gapi":const s=n.client;return pe(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new QI(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new M(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fd.get(e);n&&(F("ComponentProvider","Removing Datastore"),fd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class ci{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class pn extends ci{constructor(e,n,s){super(e,n,Og(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new B(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function Qs(t,e,...n){if(t=at(t),vm("collection","path",e),t instanceof ou){const s=me.fromString(e,...n);return gd(s),new pn(t,null,s)}{if(!(t instanceof dt||t instanceof pn))throw new M(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return gd(s),new pn(t.firestore,null,s)}}function wm(t,e,...n){if(t=at(t),arguments.length===1&&(e=Sg.R()),vm("doc","path",e),t instanceof ou){const s=me.fromString(e,...n);return pd(s),new dt(t,null,new B(s))}{if(!(t instanceof dt||t instanceof pn))throw new M(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return pd(s),new dt(t.firestore,t instanceof pn?t.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new nm(this,"async_queue_retry"),this.Qa=()=>{const n=Na();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Na();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Na();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new fn;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!ri(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(s=>{this.Ua=s,this.qa=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw mn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.qa=!1,s))));return this.Fa=n,n}enqueueAfterDelay(e,n,s){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const r=nu.createAndSchedule(this,e,n,s,i=>this.Ha(i));return this.La.push(r),r}ja(){this.Ua&&W()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class ta extends ou{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new Nb,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Em(this),this._firestoreClient.terminate()}}function Db(t=Gf()){return al(t,"firestore").getImmediate()}function _m(t){return t._firestoreClient||Em(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Em(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new nA(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ib(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(Ve.fromBase64String(e))}catch(n){throw new M(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=/^__.*__$/;class Pb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ks(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class Im{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ks(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Am(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class lu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.rc(e),r}oc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return po(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(Am(this.ec)&&Ob.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class Mb{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||Xo(e)}lc(e,n,s,r=!1){return new lu({ec:e,methodName:n,hc:s,path:it.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function uu(t){const e=t._freezeSettings(),n=Xo(t._databaseId);return new Mb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lb(t,e,n,s,r,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,r);hu("Data must be an object, but it was:",o,s);const a=Tm(s,o);let c,l;if(i.merge)c=new Dr(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Dc(e,h,n);if(!o.contains(d))throw new M(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Sm(u,d)||u.push(d)}c=new Dr(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Pb(new ht(a),c,l)}class sa extends au{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sa}}function xb(t,e,n,s){const r=t.lc(1,e,n);hu("Data must be an object, but it was:",r,s);const i=[],o=ht.empty();Gn(s,(c,l)=>{const u=du(e,c,n);l=at(l);const h=r.oc(u);if(l instanceof sa)i.push(u);else{const d=li(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Dr(i);return new Im(o,a,r.fieldTransforms)}function Ub(t,e,n,s,r,i){const o=t.lc(1,e,n),a=[Dc(e,s,n)],c=[r];if(i.length%2!=0)throw new M(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Dc(e,i[d])),c.push(i[d+1]);const l=[],u=ht.empty();for(let d=a.length-1;d>=0;--d)if(!Sm(l,a[d])){const g=a[d];let m=c[d];m=at(m);const C=o.oc(g);if(m instanceof sa)l.push(g);else{const A=li(m,C);A!=null&&(l.push(g),u.set(g,A))}}const h=new Dr(l);return new Im(u,h,o.fieldTransforms)}function Fb(t,e,n,s=!1){return li(n,t.lc(s?4:3,e))}function li(t,e){if(bm(t=at(t)))return hu("Unsupported field value:",e,t),Tm(t,e);if(t instanceof au)return function(n,s){if(!Am(s.ec))throw s.ac(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=li(o,s.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=at(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return AA(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ge.fromDate(n);return{timestampValue:ho(s.M,r)}}if(n instanceof Ge){const r=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ho(s.M,r)}}if(n instanceof cu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Os)return{bytesValue:Yg(s.M,n._byteString)};if(n instanceof dt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Gl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ac(`Unsupported field value: ${ea(n)}`)}(t,e)}function Tm(t,e){const n={};return Cg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(t,(s,r)=>{const i=li(r,e.sc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function bm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof cu||t instanceof Os||t instanceof dt||t instanceof au)}function hu(t,e,n){if(!bm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ea(n);throw s==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+s)}}function Dc(t,e,n){if((e=at(e))instanceof na)return e._internalPath;if(typeof e=="string")return du(t,e);throw po("Field path arguments must be of type string or ",t,!1,void 0,n)}const Vb=new RegExp("[~\\*/\\[\\]]");function du(t,e,n){if(e.search(Vb)>=0)throw po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new na(...e.split("."))._internalPath}catch{throw po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function po(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(w.INVALID_ARGUMENT,a+t+c)}function Sm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Bb extends Cm{data(){return super.data()}}function fu(t,e){return typeof e=="string"?du(t,e):e instanceof na?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $b extends Cm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(fu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Vi extends $b{data(e={}){return super.data(e)}}class jb{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ei(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Vi(this._firestore,this._userDataWriter,s.key,s,new Ei(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Vi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ei(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Vi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ei(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Kb(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Kb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qb{}function Ii(t,...e){for(const n of e)t=n._apply(t);return t}class Wb extends qb{constructor(e,n,s){super(),this._c=e,this.wc=n,this.mc=s,this.type="where"}_apply(e){const n=uu(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new M(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){vd(u,l);const g=[];for(const m of u)g.push(yd(a,r,m));h={arrayValue:{values:g}}}else h=yd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||vd(u,l),h=Fb(o,i,u,l==="in"||l==="not-in");const d=et.create(c,l,h);return function(g,m){if(m.S()){const A=Mg(g);if(A!==null&&!A.isEqual(m.field))throw new M(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${A.toString()}' and '${m.field.toString()}'`);const k=Pg(g);k!==null&&zb(g,m.field,k)}const C=function(A,k){for(const L of A.filters)if(k.indexOf(L.op)>=0)return L.op;return null}(g,function(A){switch(A){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(C!==null)throw C===m.op?new M(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new M(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${C.toString()}' filters.`)}(r,d),d}(e._query,"where",n,e.firestore._databaseId,this._c,this.wc,this.mc);return new ci(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new ni(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function Yt(t,e,n){const s=e,r=fu("where",t);return new Wb(r,s,n)}function yd(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new M(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lg(e)&&n.indexOf("/")!==-1)throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(me.fromString(n));if(!B.isDocumentKey(s))throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Hh(t,new B(s))}if(n instanceof dt)return Hh(t,n._key);throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ea(n)}.`)}function vd(t,e){if(!Array.isArray(t)||t.length===0)throw new M(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new M(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function zb(t,e,n){if(!n.isEqual(e))throw new M(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{convertValue(e,n="none"){switch(jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const s={};return Gn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new cu(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=kg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Or(e));default:return null}}convertTimestamp(e){const n=yn(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=me.fromString(e);pe(Zg(s));const r=new Rs(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Qb extends Gb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function Ai(t){t=Ur(t,ci);const e=Ur(t.firestore,ta),n=_m(e),s=new Qb(e);return Hb(t._query),Rb(n,t._query).then(r=>new jb(e,s,t,r))}function Xb(t,e,n,...s){t=Ur(t,dt);const r=Ur(t.firestore,ta),i=uu(r);let o;return o=typeof(e=at(e))=="string"||e instanceof na?Ub(i,"updateDoc",t._key,e,n,s):xb(i,"updateDoc",t._key,e),Rm(r,[o.toMutation(t._key,Pn.exists(!0))])}function Jb(t,e){const n=Ur(t.firestore,ta),s=wm(t),r=Yb(t.converter,e);return Rm(n,[Lb(uu(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Pn.exists(!1))]).then(()=>s)}function Rm(t,e){return function(n,s){const r=new fn;return n.asyncQueue.enqueueAndForget(async()=>ub(await Sb(n),s,r)),r.promise}(_m(t),e)}(function(t,e=!0){(function(n){js=n})(jr),As(new xn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new ta(r,new GI(n.getProvider("auth-internal")),new JI(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),dn(Vh,"3.4.9",t),dn(Vh,"3.4.9","esm2017")})();/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const km=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ws=t=>km?Symbol(t):"_vr_"+t,Zb=Ws("rvlm"),wd=Ws("rvd"),pu=Ws("r"),Nm=Ws("rl"),Oc=Ws("rvl"),ls=typeof window!="undefined";function eS(t){return t.__esModule||km&&t[Symbol.toStringTag]==="Module"}const ue=Object.assign;function Da(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const fr=()=>{},tS=/\/$/,nS=t=>t.replace(tS,"");function Oa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=oS(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function sS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _d(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rS(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ps(e.matched[s],n.matched[r])&&Dm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!iS(t[n],e[n]))return!1;return!0}function iS(t,e){return Array.isArray(t)?Ed(t,e):Array.isArray(e)?Ed(e,t):t===e}function Ed(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function oS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Fr;(function(t){t.pop="pop",t.push="push"})(Fr||(Fr={}));var pr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pr||(pr={}));function aS(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nS(t)}const cS=/^[^#]+#/;function lS(t,e){return t.replace(cS,"#")+e}function uS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function hS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=uS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Id(t,e){return(history.state?history.state.position-e:-1)+t}const Pc=new Map;function dS(t,e){Pc.set(t,e)}function fS(t){const e=Pc.get(t);return Pc.delete(t),e}let pS=()=>location.protocol+"//"+location.host;function Om(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),_d(c,"")}return _d(n,t)+s+r}function gS(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Om(t,location),m=n.value,C=e.value;let A=0;if(d){if(n.value=g,e.value=d,o&&o===m){o=null;return}A=C?d.position-C.position:0}else s(g);r.forEach(k=>{k(n.value,m,{delta:A,type:Fr.pop,direction:A?A>0?pr.forward:pr.back:pr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(ue({},d.state,{scroll:ra()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Ad(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ra():null}}function mS(t){const{history:e,location:n}=window,s={value:Om(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:pS()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ue({},e.state,Ad(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ue({},r.value,e.state,{forward:c,scroll:ra()});i(u.current,u,!0);const h=ue({},Ad(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function yS(t){t=aS(t);const e=mS(t),n=gS(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ue({location:"",base:t,go:s,createHref:lS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function vS(t){return typeof t=="string"||t&&typeof t=="object"}function Pm(t){return typeof t=="string"||typeof t=="symbol"}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Mm=Ws("nf");var Td;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Td||(Td={}));function Ms(t,e){return ue(new Error,{type:t,[Mm]:!0},e)}function Xt(t,e){return t instanceof Error&&Mm in t&&(e==null||!!(t.type&e))}const bd="[^/]+?",wS={sensitive:!1,strict:!1,start:!0,end:!0},_S=/[.+*?^${}()[\]/\\]/g;function ES(t,e){const n=ue({},wS,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(_S,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:C,optional:A,regexp:k}=d;i.push({name:m,repeatable:C,optional:A});const L=k||bd;if(L!==bd){g+=10;try{new RegExp(`(${L})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${m}" (${L}): `+Q.message)}}let G=C?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(G=A&&l.length<2?`(?:/${G})`:"/"+G),A&&(G+="?"),r+=G,g+=20,A&&(g+=-8),C&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=i[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:C,optional:A}=g,k=m in l?l[m]:"";if(Array.isArray(k)&&!C)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(k)?k.join("/"):k;if(!L)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=L}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function IS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function AS(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=IS(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const TS={type:0,value:""},bS=/[a-zA-Z0-9_]/;function SS(t){if(!t)return[[]];if(t==="/")return[[TS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:bS.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function CS(t,e,n){const s=ES(SS(t.path),n),r=ue(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function RS(t,e){const n=[],s=new Map;e=Cd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,m=NS(u);m.aliasOf=d&&d.record;const C=Cd(e,u),A=[m];if("alias"in u){const G=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of G)A.push(ue({},m,{components:d?d.record.components:m.components,path:Q,aliasOf:d?d.record:m}))}let k,L;for(const G of A){const{path:Q}=G;if(h&&Q[0]!=="/"){const _e=h.record.path,Ie=_e[_e.length-1]==="/"?"":"/";G.path=h.record.path+(Q&&Ie+Q)}if(k=CS(G,h,C),d?d.alias.push(k):(L=L||k,L!==k&&L.alias.push(k),g&&u.name&&!Sd(k)&&o(u.name)),"children"in m){const _e=m.children;for(let Ie=0;Ie<_e.length;Ie++)i(_e[Ie],k,d&&d.children[Ie])}d=d||k,c(k)}return L?()=>{o(L)}:fr}function o(u){if(Pm(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&AS(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Lm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sd(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},m,C;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ms(1,{location:u});C=d.record.name,g=ue(kS(h.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),u.params),m=d.stringify(g)}else if("path"in u)m=u.path,d=n.find(L=>L.re.test(m)),d&&(g=d.parse(m),C=d.record.name);else{if(d=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!d)throw Ms(1,{location:u,currentLocation:h});C=d.record.name,g=ue({},h.params,u.params),m=d.stringify(g)}const A=[];let k=d;for(;k;)A.unshift(k.record),k=k.parent;return{name:C,path:m,params:g,matched:A,meta:OS(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function kS(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function NS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:DS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function DS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Sd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OS(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function Cd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Lm(t,e){return e.children.some(n=>n===t||Lm(t,n))}const xm=/#/g,PS=/&/g,MS=/\//g,LS=/=/g,xS=/\?/g,Um=/\+/g,US=/%5B/g,FS=/%5D/g,Fm=/%5E/g,VS=/%60/g,Vm=/%7B/g,BS=/%7C/g,Bm=/%7D/g,$S=/%20/g;function gu(t){return encodeURI(""+t).replace(BS,"|").replace(US,"[").replace(FS,"]")}function jS(t){return gu(t).replace(Vm,"{").replace(Bm,"}").replace(Fm,"^")}function Mc(t){return gu(t).replace(Um,"%2B").replace($S,"+").replace(xm,"%23").replace(PS,"%26").replace(VS,"`").replace(Vm,"{").replace(Bm,"}").replace(Fm,"^")}function KS(t){return Mc(t).replace(LS,"%3D")}function HS(t){return gu(t).replace(xm,"%23").replace(xS,"%3F")}function qS(t){return t==null?"":HS(t).replace(MS,"%2F")}function go(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function WS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Um," "),o=i.indexOf("="),a=go(o<0?i:i.slice(0,o)),c=o<0?null:go(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Rd(t){let e="";for(let n in t){const s=t[n];if(n=KS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Mc(i)):[s&&Mc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function Xs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function tn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ms(4,{from:n,to:e})):h instanceof Error?a(h):vS(h)?a(Ms(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Pa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(GS(a)){const l=(a.__vccOpts||a)[e];l&&r.push(tn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=eS(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&tn(d,n,s,i,o)()}))}}return r}function GS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kd(t){const e=un(pu),n=un(Nm),s=kt(()=>e.resolve(ms(t.to))),r=kt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ps.bind(null,u));if(d>-1)return d;const g=Nd(c[l-2]);return l>1&&Nd(u)===g&&h[h.length-1].path!==g?h.findIndex(Ps.bind(null,c[l-2])):d}),i=kt(()=>r.value>-1&&JS(n.params,s.value.params)),o=kt(()=>r.value>-1&&r.value===n.matched.length-1&&Dm(n.params,s.value.params));function a(c={}){return XS(c)?e[ms(t.replace)?"replace":"push"](ms(t.to)).catch(fr):Promise.resolve()}return{route:s,href:kt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const YS=vf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kd,setup(t,{slots:e}){const n=Vr(kd(t)),{options:s}=un(pu),r=kt(()=>({[Dd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Dd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:xf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),QS=YS;function XS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function JS(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Nd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dd=(t,e,n)=>t!=null?t:e!=null?e:n,ZS=vf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=un(Oc),r=kt(()=>t.route||s.value),i=un(wd,0),o=kt(()=>r.value.matched[i]);Ri(wd,i+1),Ri(Zb,o),Ri(Oc,r);const a=rf();return ki(()=>[a.value,o.value,t.name],([c,l,u],[h,d,g])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!Ps(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Od(n.default,{Component:u,route:c});const d=l.props[t.name],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,C=xf(u,ue({},g,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Od(n.default,{Component:C,route:c})||C}}});function Od(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $m=ZS;function e1(t){const e=RS(t.routes,t),n=t.parseQuery||WS,s=t.stringifyQuery||Rd,r=t.history,i=Xs(),o=Xs(),a=Xs(),c=jy(Qt);let l=Qt;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Da.bind(null,v=>""+v),h=Da.bind(null,qS),d=Da.bind(null,go);function g(v,U){let N,V;return Pm(v)?(N=e.getRecordMatcher(v),V=U):V=v,e.addRoute(V,N)}function m(v){const U=e.getRecordMatcher(v);U&&e.removeRoute(U)}function C(){return e.getRoutes().map(v=>v.record)}function A(v){return!!e.getRecordMatcher(v)}function k(v,U){if(U=ue({},U||c.value),typeof v=="string"){const X=Oa(n,v,U.path),f=e.resolve({path:X.path},U),p=r.createHref(X.fullPath);return ue(X,f,{params:d(f.params),hash:go(X.hash),redirectedFrom:void 0,href:p})}let N;if("path"in v)N=ue({},v,{path:Oa(n,v.path,U.path).path});else{const X=ue({},v.params);for(const f in X)X[f]==null&&delete X[f];N=ue({},v,{params:h(v.params)}),U.params=h(U.params)}const V=e.resolve(N,U),ce=v.hash||"";V.params=u(d(V.params));const fe=sS(s,ue({},v,{hash:jS(ce),path:V.path})),ee=r.createHref(fe);return ue({fullPath:fe,hash:ce,query:s===Rd?zS(v.query):v.query||{}},V,{redirectedFrom:void 0,href:ee})}function L(v){return typeof v=="string"?Oa(n,v,c.value.path):ue({},v)}function G(v,U){if(l!==v)return Ms(8,{from:U,to:v})}function Q(v){return Ye(v)}function _e(v){return Q(ue(L(v),{replace:!0}))}function Ie(v){const U=v.matched[v.matched.length-1];if(U&&U.redirect){const{redirect:N}=U;let V=typeof N=="function"?N(v):N;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=L(V):{path:V},V.params={}),ue({query:v.query,hash:v.hash,params:v.params},V)}}function Ye(v,U){const N=l=k(v),V=c.value,ce=v.state,fe=v.force,ee=v.replace===!0,X=Ie(N);if(X)return Ye(ue(L(X),{state:ce,force:fe,replace:ee}),U||N);const f=N;f.redirectedFrom=U;let p;return!fe&&rS(s,V,N)&&(p=Ms(16,{to:f,from:V}),Zn(V,V,!0,!1)),(p?Promise.resolve(p):nt(f,V)).catch(y=>Xt(y)?Xt(y,2)?y:ct(y):de(y,f,V)).then(y=>{if(y){if(Xt(y,2))return Ye(ue(L(y.to),{state:ce,force:fe,replace:ee}),U||f)}else y=Mt(f,V,!0,ee,ce);return It(f,V,y),y})}function Wt(v,U){const N=G(v,U);return N?Promise.reject(N):Promise.resolve()}function nt(v,U){let N;const[V,ce,fe]=t1(v,U);N=Pa(V.reverse(),"beforeRouteLeave",v,U);for(const X of V)X.leaveGuards.forEach(f=>{N.push(tn(f,v,U))});const ee=Wt.bind(null,v,U);return N.push(ee),ss(N).then(()=>{N=[];for(const X of i.list())N.push(tn(X,v,U));return N.push(ee),ss(N)}).then(()=>{N=Pa(ce,"beforeRouteUpdate",v,U);for(const X of ce)X.updateGuards.forEach(f=>{N.push(tn(f,v,U))});return N.push(ee),ss(N)}).then(()=>{N=[];for(const X of v.matched)if(X.beforeEnter&&!U.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const f of X.beforeEnter)N.push(tn(f,v,U));else N.push(tn(X.beforeEnter,v,U));return N.push(ee),ss(N)}).then(()=>(v.matched.forEach(X=>X.enterCallbacks={}),N=Pa(fe,"beforeRouteEnter",v,U),N.push(ee),ss(N))).then(()=>{N=[];for(const X of o.list())N.push(tn(X,v,U));return N.push(ee),ss(N)}).catch(X=>Xt(X,8)?X:Promise.reject(X))}function It(v,U,N){for(const V of a.list())V(v,U,N)}function Mt(v,U,N,V,ce){const fe=G(v,U);if(fe)return fe;const ee=U===Qt,X=ls?history.state:{};N&&(V||ee?r.replace(v.fullPath,ue({scroll:ee&&X&&X.scroll},ce)):r.push(v.fullPath,ce)),c.value=v,Zn(v,U,N,ee),ct()}let Lt;function Qn(){Lt=r.listen((v,U,N)=>{const V=k(v),ce=Ie(V);if(ce){Ye(ue(ce,{replace:!0}),V).catch(fr);return}l=V;const fe=c.value;ls&&dS(Id(fe.fullPath,N.delta),ra()),nt(V,fe).catch(ee=>Xt(ee,12)?ee:Xt(ee,2)?(Ye(ee.to,V).then(X=>{Xt(X,20)&&!N.delta&&N.type===Fr.pop&&r.go(-1,!1)}).catch(fr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),de(ee,V,fe))).then(ee=>{ee=ee||Mt(V,fe,!1),ee&&(N.delta?r.go(-N.delta,!1):N.type===Fr.pop&&Xt(ee,20)&&r.go(-1,!1)),It(V,fe,ee)}).catch(fr)})}let Xn=Xs(),Jn=Xs(),Se;function de(v,U,N){ct(v);const V=Jn.list();return V.length?V.forEach(ce=>ce(v,U,N)):console.error(v),Promise.reject(v)}function ae(){return Se&&c.value!==Qt?Promise.resolve():new Promise((v,U)=>{Xn.add([v,U])})}function ct(v){return Se||(Se=!v,Qn(),Xn.list().forEach(([U,N])=>v?N(v):U()),Xn.reset()),v}function Zn(v,U,N,V){const{scrollBehavior:ce}=t;if(!ls||!ce)return Promise.resolve();const fe=!N&&fS(Id(v.fullPath,0))||(V||!N)&&history.state&&history.state.scroll||null;return lf().then(()=>ce(v,U,fe)).then(ee=>ee&&hS(ee)).catch(ee=>de(ee,v,U))}const xt=v=>r.go(v);let At;const gt=new Set;return{currentRoute:c,addRoute:g,removeRoute:m,hasRoute:A,getRoutes:C,resolve:k,options:t,push:Q,replace:_e,go:xt,back:()=>xt(-1),forward:()=>xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Jn.add,isReady:ae,install(v){const U=this;v.component("RouterLink",QS),v.component("RouterView",$m),v.config.globalProperties.$router=U,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ms(c)}),ls&&!At&&c.value===Qt&&(At=!0,Q(r.location).catch(ce=>{}));const N={};for(const ce in Qt)N[ce]=kt(()=>c.value[ce]);v.provide(pu,U),v.provide(Nm,Vr(N)),v.provide(Oc,c);const V=v.unmount;gt.add(v),v.unmount=function(){gt.delete(v),gt.size<1&&(l=Qt,Lt&&Lt(),c.value=Qt,At=!1,Se=!1),V()}}}}function ss(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function t1(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ps(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ps(l,c))||r.push(c))}return[n,s,r]}const n1={setup(t){return(e,n)=>(Ct(),Of(ms($m)))}},s1="modulepreload",Pd={},r1="/",i1=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${r1}${s}`,s in Pd)return;Pd[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":s1,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};var ia=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const mu=t=>(Jc("data-v-688bcd08"),t=t(),Zc(),t),o1={class:"container"},a1={class:"form-container"},c1=mu(()=>D("h1",null,"Log in",-1)),l1={class:"Show"},u1=mu(()=>D("div",null,null,-1)),h1=mu(()=>D("p",null,"show",-1)),d1={data(){return{email:"",password:""}},methods:{login(t){t.preventDefault();const e=bp();R_(e,this.email,this.password).then(n=>{const s=n.user;console.log(s),localStorage.setItem("uid",s==null?void 0:s.uid),alert("Loged In"),mo.push({path:"/home"})}).catch(n=>{n.code;const s=n.message;alert(s)})}}},f1=Object.assign(d1,{setup(t){return(e,n)=>(Ct(),Zt("div",o1,[D("div",a1,[D("form",null,[c1,D("div",l1,[ir(D("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>Ee(email)?email.value=s:null),type:"email",placeholder:"Email"},null,512),[[ar,e.email]]),u1,ir(D("input",{"onUpdate:modelValue":n[1]||(n[1]=s=>Ee(password)?password.value=s:null),type:"password",placeholder:"Password"},null,512),[[ar,e.password]]),h1]),D("button",{onClick:n[2]||(n[2]=(...s)=>e.login&&e.login(...s))},"Log In")])])]))}});var p1=ia(f1,[["__scopeId","data-v-688bcd08"]]),jm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBrVXREYIwDE08/3UENtARGEE3cASdQDfQEXQDNpANdAPrBLBBTSRohBQpx7t7Vy6kL2lIA0IA3vuElhVxLqaSmCGig74gkb0PY2/tQbV5LtGZN5VFKc/1O8aaeOd3lGGpMzgakR8i/glELAy/479jXKF95GvA9wASmXHiAsuqs9IsAr4FqE2pRN36/9iIb1obpq3qI3IUpwprIWsappYXiWUQCVOIMlp2ZUSBcmtTs0abITWaGAEddEM3afhokjZCJCYwEloZ+erWc9s3i+2Iu5+71SUE1ehYgY0LMe8rxD2UEGcN+9P87CEhGVxbiMRoxR5VqP4KKcRjIWuJvhpgqRgcxCGR9fzuG/8dbkPwYA09/Ll3lhAH/gHk3KQviozDur99aK0AAAAASUVORK5CYII=",yu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE+SURBVHgBpVMBkYQwDNw/BZVQCUhAAhIqAQfUwZ0DJJwE3gHvoOfg3sE/MClsSwrM/85kOk23aZJuPlCGmayRdcZrsi9ZL6GebJjsp2DzWXUWpFMuBrHc35WC3Ik0SmYm47gs6B0KIR4+cA5P/DY6Lb3SE9nKi0Ey7MUX8ZQ775i5I0ckVrLP+/LG1mhDnCWrQckm0EUvFn0BW+8e2H5yjdrIYUMZWKSlRq4T31rNjaJ/U1kzPpGK70V7S76lzBsFKAVk5JxkPyL9doNUdFZ8rDMr3KRHHltjkRE088QLnERFpJpIHvuvb+ncKRmuEuCvjWXW0MdFE3GS1W5+FHTQJbKA+1IfBOFH1bk0SNVrFY7NOEXMxKjeEft+8ehYnIBHZCD/k/wNLqKlS72YpqNL8DgW45+DefwTDsdyWPAL5A2l1dOBQbMAAAAASUVORK5CYII=",Km="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgBvZVRCoAgEESHTjI3rRvUDfcIdYNSUoJw/VgHHywIwmPVUYGXNdWZ6v6VIcDeEA0Ja2eEiNqNhAUxrBRbk5EODd8eUyFkTxrdQ3rSkUNhS+oJDX4+3dxGT7nLtCWHZFEhIY6NPNjyq+eSY3OVMSFig/iBzRwQfQEPL8Jfh4S2+gAAAAAASUVORK5CYII=",g1="/assets/watch.0734da6a.png",m1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH0SURBVHgBrVRLTuswFL12CpXe5HUJZQd9O+hbAWHQpmJCGRQKE9oVhK6AMuI3oEyQQgeUFQAroDsgS+gICZXEnOs4oUUJTYEjXcV27OPj6+MrKAW23Smtrr5UhRBb6FYQZfPLR4zDMLwbDi8GlAHxeaBe37FBdjRDlAUf5L00cjlP2HZBeGsIH4hUF/01zzsTHJYV/kN/2yguSykvHWfnKFNpRKgOQTRBt+d55336Ao6z1yEKXFCUsKaP+d050kaj1VRKXnKb1VxfX4wpBzY3W5UgEPeGuBsL0ccHoRtNU928hIxortUz+ly+YE3KKinKob/oyGnwvBNe84AoFYsvTR4rhKFcF0hCGAq9Y72++4R+JScnhJyt4YR3UFpFrGOsLymxTqCPDcIJLQkh5Mg0IzGOs6s46IeY5Ul8Gif5N1CgxMjTv/hOFuTU5HAetdo+5gfc1KmTSqlHbqysTDf4+52cWtY0FjGOlXKSt+Kbg5L/tCRin8NBV1rpzc05k/qIKt5xh5bErM+Hw9OBJo12UubdCrdWa+X1qH6mSumKlvg8IUW1GZtCAgfIZh5C2Ofg493TcaySUWg02mUojX/6liUyn6ptt8vF4puNq+H8V009OsY9zKVNYMdnWlyQU5BdIgu0HHyQsW0eX1//DEajfqr93gFfUMjR3UZp2wAAAABJRU5ErkJggg==",y1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgB7dBBEQAgDAPBBCW4qgRkgxQkdDrpr7n3vZYR5wLY6OktjIs2lLOhng31mA1F437DDyq7DtRnpVg5AAAAAElFTkSuQmCC",v1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJKSURBVHgBnVU7bttAEN1dWjCQNM4JQvUCIiM5gHIC04YlEq4sIHKUpIh8AokniFL5V0iVYVJFqBPEZZoAbAyki3IDNQEkKNrNG3Ip0DT1sQdYkrucfXwz82bJWY5ZVmunUPhrCSH2MC1jmLSuFAs5ZyMp5XAwuOrn7eXZhVrtxMKmHl7tsNVGwG4WWKQntv3+C+f8mwa7BadTzIued8FpGIbcxbxOYMQaEfRAoJ3LsFZrtjlXHYCMMXU977LLVphtf2gxNm/HH1dd+J8uAB2ncayU6BGYYai319dXYYb5b7qDZTG9fnTUKM/n/DuBKqX2ff8yiEIGWELbzYJpM/W4Z7Gv4UbMOO9RMQWx086jdWHmmeed0Z5bjFgZUkbSYFJylz3Z1JCuKJIl2CKUecieaJyLQD++EtAcCZdBT7mAh4fvKmyN3dycj/SjubXMyXGaJiqHyrMKzalL2AZGIY/o4eDg08v0C4C1YjA1RgVd37/YXQZSrX4s612hSL5cKMz2004A6VKnTKfPigipw1aYYcw0IP+zJYQcQocWJlTthWx0XjaSUaJjKCUQk8ks0O1Wse2TFnukoYs+M63jweC8L4KgP0bYdU25Xa02ypuCUeuBTEezi3Rs0OXu7uevUunNC2KJ3Dml0usp1n6sYwYifepjHCpUtCg9985DSKWD6iZ9HZ13uIeJRi2raW5v/0O+Dcp3Rft9xaGxSNWDAxagxxrUZCtNIVVG3ffPgvQqX+YeA8s9pbiZdBOLNKvwG1DDyeR5EATdcXbff4ns+WVeyDVpAAAAAElFTkSuQmCC",Ti,w1=new Uint8Array(16);function Hm(){if(!Ti&&(Ti=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Ti))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ti(w1)}var _1=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function qm(t){return typeof t=="string"&&_1.test(t)}var Me=[];for(var Ma=0;Ma<256;++Ma)Me.push((Ma+256).toString(16).substr(1));function vu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(Me[t[e+0]]+Me[t[e+1]]+Me[t[e+2]]+Me[t[e+3]]+"-"+Me[t[e+4]]+Me[t[e+5]]+"-"+Me[t[e+6]]+Me[t[e+7]]+"-"+Me[t[e+8]]+Me[t[e+9]]+"-"+Me[t[e+10]]+Me[t[e+11]]+Me[t[e+12]]+Me[t[e+13]]+Me[t[e+14]]+Me[t[e+15]]).toLowerCase();if(!qm(n))throw TypeError("Stringified UUID is invalid");return n}var Md,La,xa=0,Ua=0;function E1(t,e,n){var s=e&&n||0,r=e||new Array(16);t=t||{};var i=t.node||Md,o=t.clockseq!==void 0?t.clockseq:La;if(i==null||o==null){var a=t.random||(t.rng||Hm)();i==null&&(i=Md=[a[0]|1,a[1],a[2],a[3],a[4],a[5]]),o==null&&(o=La=(a[6]<<8|a[7])&16383)}var c=t.msecs!==void 0?t.msecs:Date.now(),l=t.nsecs!==void 0?t.nsecs:Ua+1,u=c-xa+(l-Ua)/1e4;if(u<0&&t.clockseq===void 0&&(o=o+1&16383),(u<0||c>xa)&&t.nsecs===void 0&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");xa=c,Ua=l,La=o,c+=122192928e5;var h=((c&268435455)*1e4+l)%4294967296;r[s++]=h>>>24&255,r[s++]=h>>>16&255,r[s++]=h>>>8&255,r[s++]=h&255;var d=c/4294967296*1e4&268435455;r[s++]=d>>>8&255,r[s++]=d&255,r[s++]=d>>>24&15|16,r[s++]=d>>>16&255,r[s++]=o>>>8|128,r[s++]=o&255;for(var g=0;g<6;++g)r[s+g]=i[g];return e||vu(r)}function I1(t){if(!qm(t))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=e&255,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=e&255,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=e&255,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=e&255,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=e&255,n}function A1(t){t=unescape(encodeURIComponent(t));for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}var T1="6ba7b810-9dad-11d1-80b4-00c04fd430c8",b1="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Wm(t,e,n){function s(r,i,o,a){if(typeof r=="string"&&(r=A1(r)),typeof i=="string"&&(i=I1(i)),i.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var c=new Uint8Array(16+r.length);if(c.set(i),c.set(r,i.length),c=n(c),c[6]=c[6]&15|e,c[8]=c[8]&63|128,o){a=a||0;for(var l=0;l<16;++l)o[a+l]=c[l];return o}return vu(c)}try{s.name=t}catch{}return s.DNS=T1,s.URL=b1,s}function S1(t){if(typeof t=="string"){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return C1(R1(k1(t),t.length*8))}function C1(t){for(var e=[],n=t.length*32,s="0123456789abcdef",r=0;r<n;r+=8){var i=t[r>>5]>>>r%32&255,o=parseInt(s.charAt(i>>>4&15)+s.charAt(i&15),16);e.push(o)}return e}function zm(t){return(t+64>>>9<<4)+14+1}function R1(t,e){t[e>>5]|=128<<e%32,t[zm(e)-1]=e;for(var n=1732584193,s=-271733879,r=-1732584194,i=271733878,o=0;o<t.length;o+=16){var a=n,c=s,l=r,u=i;n=$e(n,s,r,i,t[o],7,-680876936),i=$e(i,n,s,r,t[o+1],12,-389564586),r=$e(r,i,n,s,t[o+2],17,606105819),s=$e(s,r,i,n,t[o+3],22,-1044525330),n=$e(n,s,r,i,t[o+4],7,-176418897),i=$e(i,n,s,r,t[o+5],12,1200080426),r=$e(r,i,n,s,t[o+6],17,-1473231341),s=$e(s,r,i,n,t[o+7],22,-45705983),n=$e(n,s,r,i,t[o+8],7,1770035416),i=$e(i,n,s,r,t[o+9],12,-1958414417),r=$e(r,i,n,s,t[o+10],17,-42063),s=$e(s,r,i,n,t[o+11],22,-1990404162),n=$e(n,s,r,i,t[o+12],7,1804603682),i=$e(i,n,s,r,t[o+13],12,-40341101),r=$e(r,i,n,s,t[o+14],17,-1502002290),s=$e(s,r,i,n,t[o+15],22,1236535329),n=je(n,s,r,i,t[o+1],5,-165796510),i=je(i,n,s,r,t[o+6],9,-1069501632),r=je(r,i,n,s,t[o+11],14,643717713),s=je(s,r,i,n,t[o],20,-373897302),n=je(n,s,r,i,t[o+5],5,-701558691),i=je(i,n,s,r,t[o+10],9,38016083),r=je(r,i,n,s,t[o+15],14,-660478335),s=je(s,r,i,n,t[o+4],20,-405537848),n=je(n,s,r,i,t[o+9],5,568446438),i=je(i,n,s,r,t[o+14],9,-1019803690),r=je(r,i,n,s,t[o+3],14,-187363961),s=je(s,r,i,n,t[o+8],20,1163531501),n=je(n,s,r,i,t[o+13],5,-1444681467),i=je(i,n,s,r,t[o+2],9,-51403784),r=je(r,i,n,s,t[o+7],14,1735328473),s=je(s,r,i,n,t[o+12],20,-1926607734),n=Ke(n,s,r,i,t[o+5],4,-378558),i=Ke(i,n,s,r,t[o+8],11,-2022574463),r=Ke(r,i,n,s,t[o+11],16,1839030562),s=Ke(s,r,i,n,t[o+14],23,-35309556),n=Ke(n,s,r,i,t[o+1],4,-1530992060),i=Ke(i,n,s,r,t[o+4],11,1272893353),r=Ke(r,i,n,s,t[o+7],16,-155497632),s=Ke(s,r,i,n,t[o+10],23,-1094730640),n=Ke(n,s,r,i,t[o+13],4,681279174),i=Ke(i,n,s,r,t[o],11,-358537222),r=Ke(r,i,n,s,t[o+3],16,-722521979),s=Ke(s,r,i,n,t[o+6],23,76029189),n=Ke(n,s,r,i,t[o+9],4,-640364487),i=Ke(i,n,s,r,t[o+12],11,-421815835),r=Ke(r,i,n,s,t[o+15],16,530742520),s=Ke(s,r,i,n,t[o+2],23,-995338651),n=He(n,s,r,i,t[o],6,-198630844),i=He(i,n,s,r,t[o+7],10,1126891415),r=He(r,i,n,s,t[o+14],15,-1416354905),s=He(s,r,i,n,t[o+5],21,-57434055),n=He(n,s,r,i,t[o+12],6,1700485571),i=He(i,n,s,r,t[o+3],10,-1894986606),r=He(r,i,n,s,t[o+10],15,-1051523),s=He(s,r,i,n,t[o+1],21,-2054922799),n=He(n,s,r,i,t[o+8],6,1873313359),i=He(i,n,s,r,t[o+15],10,-30611744),r=He(r,i,n,s,t[o+6],15,-1560198380),s=He(s,r,i,n,t[o+13],21,1309151649),n=He(n,s,r,i,t[o+4],6,-145523070),i=He(i,n,s,r,t[o+11],10,-1120210379),r=He(r,i,n,s,t[o+2],15,718787259),s=He(s,r,i,n,t[o+9],21,-343485551),n=an(n,a),s=an(s,c),r=an(r,l),i=an(i,u)}return[n,s,r,i]}function k1(t){if(t.length===0)return[];for(var e=t.length*8,n=new Uint32Array(zm(e)),s=0;s<e;s+=8)n[s>>5]|=(t[s/8]&255)<<s%32;return n}function an(t,e){var n=(t&65535)+(e&65535),s=(t>>16)+(e>>16)+(n>>16);return s<<16|n&65535}function N1(t,e){return t<<e|t>>>32-e}function oa(t,e,n,s,r,i){return an(N1(an(an(e,t),an(s,i)),r),n)}function $e(t,e,n,s,r,i,o){return oa(e&n|~e&s,t,e,r,i,o)}function je(t,e,n,s,r,i,o){return oa(e&s|n&~s,t,e,r,i,o)}function Ke(t,e,n,s,r,i,o){return oa(e^n^s,t,e,r,i,o)}function He(t,e,n,s,r,i,o){return oa(n^(e|~s),t,e,r,i,o)}var D1=Wm("v3",48,S1),O1=D1;function P1(t,e,n){t=t||{};var s=t.random||(t.rng||Hm)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=s[r];return e}return vu(s)}function M1(t,e,n,s){switch(t){case 0:return e&n^~e&s;case 1:return e^n^s;case 2:return e&n^e&s^n&s;case 3:return e^n^s}}function Fa(t,e){return t<<e|t>>>32-e}function L1(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){var s=unescape(encodeURIComponent(t));t=[];for(var r=0;r<s.length;++r)t.push(s.charCodeAt(r))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var i=t.length/4+2,o=Math.ceil(i/16),a=new Array(o),c=0;c<o;++c){for(var l=new Uint32Array(16),u=0;u<16;++u)l[u]=t[c*64+u*4]<<24|t[c*64+u*4+1]<<16|t[c*64+u*4+2]<<8|t[c*64+u*4+3];a[c]=l}a[o-1][14]=(t.length-1)*8/Math.pow(2,32),a[o-1][14]=Math.floor(a[o-1][14]),a[o-1][15]=(t.length-1)*8&4294967295;for(var h=0;h<o;++h){for(var d=new Uint32Array(80),g=0;g<16;++g)d[g]=a[h][g];for(var m=16;m<80;++m)d[m]=Fa(d[m-3]^d[m-8]^d[m-14]^d[m-16],1);for(var C=n[0],A=n[1],k=n[2],L=n[3],G=n[4],Q=0;Q<80;++Q){var _e=Math.floor(Q/20),Ie=Fa(C,5)+M1(_e,A,k,L)+G+e[_e]+d[Q]>>>0;G=L,L=k,k=Fa(A,30)>>>0,A=C,C=Ie}n[0]=n[0]+C>>>0,n[1]=n[1]+A>>>0,n[2]=n[2]+k>>>0,n[3]=n[3]+L>>>0,n[4]=n[4]+G>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,n[0]&255,n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,n[1]&255,n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,n[2]&255,n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,n[3]&255,n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,n[4]&255]}var x1=Wm("v5",80,L1),U1=x1,F1={v1:E1,v3:O1,v4:P1,v5:U1};const Re=t=>(Jc("data-v-5d7d983c"),t=t(),Zc(),t),V1={class:"sideBar"},B1=Re(()=>D("section",{class:"taskBox"},[D("div",null,[D("img",{src:jm,alt:""})]),D("div",null,[D("p",null,"Task")])],-1)),$1=Re(()=>D("div",null,[D("img",{src:yu,alt:""})],-1)),j1=Re(()=>D("div",null,[D("p",null,"Location")],-1)),K1=[$1,j1],H1=Re(()=>D("section",{class:"logoutBox"},[D("div",null,[D("img",{src:Km,alt:""})]),D("div",null,[D("p",null,"Logout")])],-1)),q1=[H1],W1={class:"addBox"},z1={class:"taskbox"},G1=Re(()=>D("button",{class:"trigger"},"+",-1)),Y1=Re(()=>D("p",null,"Add New Task",-1)),Q1=[G1,Y1],X1=Re(()=>D("section",{class:"complete"},[D("p",null,"Incomplete")],-1)),J1={class:"dailyTask"},Z1=["onClick"],eC=Re(()=>D("br",null,null,-1)),tC=Re(()=>D("img",{src:g1,alt:""},null,-1)),nC=Re(()=>D("br",null,null,-1)),sC=Re(()=>D("br",null,null,-1)),rC=Re(()=>D("br",null,null,-1)),iC=Re(()=>D("section",{class:"incomplete"},[D("p",null,"Completed")],-1)),oC={class:"answerBox"},aC=Re(()=>D("input",{type:"checkbox",name:"",id:""},null,-1)),cC={key:0,class:"modal"},lC={class:"modal-content"},uC=Re(()=>D("span",{class:"close-button"},"\xD7",-1)),hC=Re(()=>D("div",null,[D("p",null,"New Task")],-1)),dC={class:"modalInpBox"},fC={class:"modalInpBox"},pC=Re(()=>D("img",{class:"inpImg",src:m1,alt:""},null,-1)),gC={class:"modalInpBox"},mC=Re(()=>D("img",{class:"inpImg",src:y1,alt:""},null,-1)),yC={class:"modalInpBox"},vC=Re(()=>D("img",{class:"inpImg",src:v1,alt:""},null,-1)),wC={class:"btnBox"},_C={data(){return{summary:"",description:"",dueDate:"",docs:[],completed:[],modal:!1}},async mounted(){const t=await Ii(Qs(is,"Tasks"),Yt("userId","==",localStorage.getItem("uid")),Yt("status","==","assign")),e=await Ai(t);let n=[];console.log(e),e.forEach(s=>{console.log(s.id," => ",s.data()),n.push(ts({id:s.id},s.data()))}),this.docs=n,this.getCompleted()},methods:{async handleSave(){let t=F1.v4();t=t.replace(/-/g,"_");const e={summary:this.summary,description:this.description,date:this.dueDate,time:this.dueDate,userId:localStorage.getItem("uid"),status:"assign",taskId:t};try{const n=await Jb(Qs(is,"Tasks"),e);console.log("Document written with ID: ",n.id);const s=await Ii(Qs(is,"Tasks"),Yt("userId","==",localStorage.getItem("uid")),Yt("status","==","assign")),r=await Ai(s);let i=[];console.log(r),r.forEach(o=>{console.log(o.id," => ",o.data()),i.push(ts({id:o.id},o.data()))}),this.modal=!1,this.getCompleted(),this.docs=i}catch(n){console.error("Error adding document: ",n)}},async redirect(){console.log("loca"),mo.push({path:"/location"})},async changeStatus(t){let e=t.id;const n=wm(is,"Tasks",e);await Xb(n,{status:"completed"});const s=await Ii(Qs(is,"Tasks"),Yt("userId","==",localStorage.getItem("uid")),Yt("status","==","assign")),r=await Ai(s);let i=[];console.log(r),r.forEach(o=>{console.log(o.id," => ",o.data()),i.push(ts({id:o.id},o.data()))}),this.docs=i,this.getCompleted()},async getCompleted(){const t=await Ii(Qs(is,"Tasks"),Yt("userId","==",localStorage.getItem("uid")),Yt("status","==","completed")),e=await Ai(t);let n=[];console.log(e),e.forEach(s=>{console.log(s.id," => ",s.data()),n.push(ts({id:s.id},s.data()))}),this.completed=n},logout(){mo.push({path:"/"})}}},EC=Object.assign(_C,{setup(t){return(e,n)=>(Ct(),Zt("main",null,[D("div",V1,[D("div",null,[B1,D("section",{class:"locationBox",onClick:n[0]||(n[0]=(...s)=>e.redirect&&e.redirect(...s))},K1),D("section",{class:"logout",onClick:n[1]||(n[1]=(...s)=>e.logout&&e.logout(...s))},q1)])]),D("div",W1,[D("div",z1,[D("section",{class:"addTask",onClick:n[2]||(n[2]=s=>this.modal=!this.modal)},Q1),X1,(Ct(!0),Zt(mt,null,ju(e.docs,s=>(Ct(),Zt("span",{key:s.taskId},[D("section",J1,[D("div",null,[D("input",{type:"checkbox",onClick:r=>e.changeStatus(s)},null,8,Z1)]),D("div",null,[D("p",null,[Ja(bi(s.summary)+" ",1),eC,D("span",null,[tC,Ja(" Today, "+bi(s.time),1)])])])]),nC,sC]))),128)),rC,iC,(Ct(!0),Zt(mt,null,ju(e.completed,s=>(Ct(),Zt("span",{key:s.id},[D("section",oC,[aC,D("p",null,bi(s.summary),1)])]))),128))]),e.modal?(Ct(),Zt("div",cC,[D("div",lC,[uC,hC,D("div",dC,[D("section",fC,[ir(D("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>Ee(summary)?summary.value=s:null),type:"text",placeholder:"Summary"},null,512),[[ar,e.summary]]),pC]),D("section",gC,[ir(D("input",{"onUpdate:modelValue":n[4]||(n[4]=s=>Ee(description)?description.value=s:null),type:"text",placeholder:"Description"},null,512),[[ar,e.description]]),mC]),D("section",yC,[ir(D("input",{type:"date","onUpdate:modelValue":n[5]||(n[5]=s=>Ee(dueDate)?dueDate.value=s:null),placeholder:"Due Date"},null,512),[[ar,e.dueDate]]),vC])]),D("section",wC,[D("button",{class:"cancelBtn",id:"modal",onClick:n[6]||(n[6]=s=>this.modal=!this.modal)}," Cancel "),D("button",{onClick:n[7]||(n[7]=(...s)=>e.handleSave&&e.handleSave(...s)),class:"saveBtn"},"Save")])])])):Vv("",!0)])]))}});var IC=ia(EC,[["__scopeId","data-v-5d7d983c"]]),rs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIhSURBVHgBtZM/bBJxFMff/X53v+PgjrYULFBIqhKjkkbjoItJg4M6OTi4YEwTRzcXo02EDk527NLFNLphHIyD0YXRf4OWNsTGxio1DXI09Dj+3HHc7yfoYk68Rkm/48v7fvJ9ee9x4KLX6bS/prWSFNmCNxAopJaXd//Wyw0qruVyZP3e/Vugaze8PIxTBpyJeL0zNvpg4uL5uVQ2azg9eBDo0pdvd5havRsSsTcqeSAi+2CUCMQyjDOVrW35yVbp5Z6JNq5fTTRWP+WJZYbDYyMgT0aBn54GWvkO2ytr8KZcsf0zM8cuLC5u/u7jnSBfUz8ZCJBIWzPZyMEgcKdPAEzGAQU9EFRLEDfruLX5MdVrdQfZApZ0w4SmzUDe1QCtriP71XvAtkGrVRV4WQRFlgSn7w8Qmzi0YpX1uqJ0FcorXPGzihodC6KcBaUdnda9fhSKRT44fchZiC8sFEx/+CkgCQQLAaIWQKcFbYOBRg6APpbIp5aW3u6ZqC8cicyVm51Yu43OmR4f2FiAWoNAVbDfqbo+y3Ecc3oG3tHPEXM5/PzRs7NfE+MPd7SGHKo2rh05dfRF74a68K9ijKH52zcLs1cub+TzWd6tF7mj5gEhZIsCoap6nA0ByjCMOSrw/Qd4DEOAetvAApVEQovF5P8n6m/HI5Lur0QwXCIiYEvyiHRokE8Ua4riq2UyGdfRXFfaVyw5lT5sTpFBR7gv+gH548e456XISAAAAABJRU5ErkJggg==";const AC={data(){return{latitude:0,logitude:0,placeName:""}},async mounted(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{this.latitude=t.coords.latitude,this.logitude=t.coords.longitude,this.getPlace(t.coords.longitude,t.coords.latitude)}):console.log("Geolocation is not supported by this browser.")},methods:{async getPlace(t,e){var r,i,o,a;console.log(t,e);const s=await(await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${t},${e}.json?types=place&limit=1&access_token=pk.eyJ1IjoibWF0cml4LXRlY2giLCJhIjoiY2wxZGJhMHR3MGZ2ZjNkczloOTRpZDQ2bCJ9.CzgTvH3duaPWKHY6aWNEJA&country=pk`)).json();console.log("api ",s),((r=s==null?void 0:s.features)==null?void 0:r.length)!==0&&((i=s==null?void 0:s.features)==null||i[0].place_name),(o=s==null?void 0:s.features)!=null&&o.length&&(this.placeName=(a=s==null?void 0:s.features)==null?void 0:a[0].place_name)}}},Gm=t=>(Jc("data-v-e332d206"),t=t(),Zc(),t),TC=nl('<div class="sideBar" data-v-e332d206><div data-v-e332d206><section class="taskBox" data-v-e332d206><div data-v-e332d206><img src="'+jm+'" alt="" data-v-e332d206></div><div data-v-e332d206><p data-v-e332d206>Task</p></div></section><section class="locationBox" data-v-e332d206><div data-v-e332d206><img src="'+yu+'" alt="" data-v-e332d206></div><div data-v-e332d206><p data-v-e332d206>Location</p></div></section><section class="logout" data-v-e332d206><section class="logoutBox" data-v-e332d206><div data-v-e332d206><img src="'+Km+'" alt="" data-v-e332d206></div><div data-v-e332d206><p data-v-e332d206>Logout</p></div></section></section></div></div>',1),bC={class:"content"},SC=Gm(()=>D("div",{class:"check"},[D("h2",null,"+check In")],-1)),CC={class:"current"},RC=Gm(()=>D("h2",null,"Currrent Location",-1)),kC=nl('<div class="address" data-v-e332d206><img class="pin" src="'+rs+'" alt="" data-v-e332d206><p class="stockholm" data-v-e332d206>Pustegrand, Stockholm, SE</p><small data-v-e332d206>59.3293 N, 18.0686 E</small></div><div class="current1" data-v-e332d206><h5 data-v-e332d206>Previous Location</h5><div class="" data-v-e332d206><section data-v-e332d206><div class="address" data-v-e332d206><img class="pin" src="'+rs+'" alt="" data-v-e332d206><p class="stockholm" data-v-e332d206>Halsingegatan, Stockholm, SE</p><small data-v-e332d206>59.3293 N, 18.0686 E</small></div></section><section data-v-e332d206><div class="address locate" data-v-e332d206><img class="pin" src="'+rs+'" alt="" data-v-e332d206><p class="stockholm" data-v-e332d206>Pustegrand, Stockholm, SE</p><small data-v-e332d206>59.3293 N, 18.0686 E</small></div></section><section data-v-e332d206><div class="address locate2" data-v-e332d206><img class="pin" src="'+rs+'" alt="" data-v-e332d206><p class="stockholm" data-v-e332d206>Langa Gatan, Stockholm, SE</p><small data-v-e332d206>59.3293 N, 18.0686 E</small></div></section><section data-v-e332d206><div class="address locate1" data-v-e332d206><img class="pin" src="'+rs+'" alt="" data-v-e332d206><p class="stockholm" data-v-e332d206>Djurgarden, Stockholm, SE</p><small data-v-e332d206>59.3293 N, 18.0686 E</small></div></section><section data-v-e332d206><div class="address locate" data-v-e332d206><img class="pin" src="'+rs+'" alt="" data-v-e332d206><p class="stockholm" data-v-e332d206>Svartensgatan, Stockholm, SE</p><small data-v-e332d206>59.3293 N, 18.0686 E</small></div></section></div></div>',2);function NC(t,e,n,s,r,i){return Ct(),Zt(mt,null,[TC,D("div",bC,[SC,D("div",CC,[RC,D("p",null,bi(r.placeName),1)]),kC])],64)}var DC=ia(AC,[["render",NC],["__scopeId","data-v-e332d206"]]),OC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgBrZXhEYIwDIUfHv91BDbQETqCbuAIOgFuACM4AhvABrqBdQLYQBtpvRoasBzf3TtsSNKQRkggkxntjTZ23RlVRhoR5EYvQXkoIPF+bzzdvCo6dp84GN3Z/Q9FYOeHF+gStQG/YuoxagypBd8L7M60KNE3uGRV+WoFX7J/g5Td9QS50U5H66ucLQ2UT7to/PaHU3FD+q/jFFKiHcYrakJG3qMjZvRoFUisMc5gCIlUKDtBJCssRKiiDP3Y82ZrozMCj+WIGUjFYhVGBrKyVa2Z/Qnh2KWKYlAYOf5ZLJrInYJCPFt77Wjwai+JRhyZvV7dwr3c5ohiM/+vQJ+eHeKgD0Bj1L0BCeWEIybSIUoAAAAASUVORK5CYII=",PC="/assets/user-1.c4ccc7f1.png";const MC={},LC=nl('<div class="SideBar"><section class="adminLogo"><div>D</div><p>Admin Panel</p></section><section class="navs"><div><img src="'+OC+'" alt=""></div><p>Overview</p></section><section class="navs"><div><img src="" alt=""></div><p>Users</p></section></div><div class="rightSide"><header class="header"><section><span>Users</span></section><section class="headDetails"><p>Jones Ferdinand</p><div><img src="'+PC+'" width="100%" alt=""></div></section></header><div class="addingTask"><section><button>+</button>Add Task</section><section><button class="trigger">+</button> Add Location</section></div><div class="table"><header class="tableHeader"><section><p class="users">All Users</p></section><section class="tableMenu"><p><i class="fa-solid fa-bars-staggered"></i> Sort</p><p><i class="fa-solid fa-filter"></i> Filter</p></section></header><table><thead><tr><td>User Detail</td><td>Total Task</td><td>Last Update</td><td colspan="1"></td></tr></thead><tbody><tr><td> Tom Cruise <br><span>active One Day Ago</span></td><td>35</td><td> Feb 26 , 2021 <br><span> 6:30PM</span></td><td class="dotIcon"><i class="fa-solid fa-ellipsis-vertical"></i></td></tr><tr><td> Tom Cruise <br><span>active One Day Ago</span></td><td>35</td><td> Feb 26 , 2021 <br><span> 6:30PM</span></td><td class="dotIcon"><i class="fa-solid fa-ellipsis-vertical"></i></td></tr><tr><td> Tom Cruise <br><span>active One Day Ago</span></td><td>35</td><td> Feb 26 , 2021 <br><span> 6:30PM</span></td><td class="dotIcon"><i class="fa-solid fa-ellipsis-vertical"></i></td></tr><tr><td> Tom Cruise <br><span>active One Day Ago</span></td><td>35</td><td> Feb 26 , 2021 <br><span> 6:30PM</span></td><td class="dotIcon"><i class="fa-solid fa-ellipsis-vertical"></i></td></tr><tr><td> Tom Cruise <br><span>active One Day Ago</span></td><td>35</td><td> Feb 26 , 2021 <br><span> 6:30PM</span></td><td class="dotIcon"><i class="fa-solid fa-ellipsis-vertical"></i></td></tr><tr><td> Tom Cruise <br><span>active One Day Ago</span></td><td>35</td><td> Feb 26 , 2021 <br><span> 6:30PM</span></td><td class="dotIcon"><i class="fa-solid fa-ellipsis-vertical"></i></td></tr><tr><td> Tom Cruise <br><span>active One Day Ago</span></td><td>35</td><td> Feb 26 , 2021 <br><span> 6:30PM</span></td><td class="dotIcon"><i class="fa-solid fa-ellipsis-vertical"></i></td></tr><tr><td> Tom Cruise <br><span>active One Day Ago</span></td><td>35</td><td> Feb 26 , 2021 <br><span> 6:30PM</span></td><td class="dotIcon"><i class="fa-solid fa-ellipsis-vertical"></i></td></tr></tbody><tfoot><td></td><td></td><td>Rows per page 8 <i class="fa-solid fa-caret-down"></i></td><td> 1-8 of 1240 <i class="fa-solid fa-angle-left"></i><i class="fa-solid fa-angle-right"></i></td></tfoot></table></div><div class="modal"><div class="modal-content modalContent"><span class="close-button">\xD7</span><div><p class="newLocation">New Locations</p></div><div class="modalInpBox"><section class="modalInpBox"><input type="text" placeholder="Location"><img class="inpImg" src="'+yu+'" alt=""></section></div><section class="btnBox btnBoxUser"><button class="cancelBtn" id="modal">Cancel</button><button class="saveBtn">Save</button></section></div></div></div>',2);function xC(t,e){return LC}var UC=ia(MC,[["render",xC]]);const mo=e1({history:yS("/"),routes:[{path:"/",name:"login",component:p1},{path:"/home",name:"home",component:IC},{path:"/location",name:"location",component:DC},{path:"/adminpanel",name:"admin panel",component:UC},{path:"/about",name:"about",component:()=>i1(()=>import("./AboutView.4835fdbd.js"),["assets/AboutView.4835fdbd.js","assets/AboutView.ab071ea6.css"])}]}),FC={apiKey:"AIzaSyCPJiqHviR7WVr3TTfhLcGb7RjDGC6qNDU",authDomain:"to-do-app-f7313.firebaseapp.com",projectId:"to-do-app-f7313",storageBucket:"to-do-app-f7313.appspot.com",messagingSenderId:"531433038700",appId:"1:531433038700:web:d7843430a5dc9f89400949",measurementId:"G-T9LTL8750S"},Ym=Lw(FC);bp(Ym);const is=Db(Ym),wu=w0(n1);wu.use(A0());wu.use(mo);wu.mount("#app");export{ia as _,D as a,Zt as c,Ct as o};

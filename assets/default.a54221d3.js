import{i as P,b as oe,S,a as w,c as F,g as Ne,e as Le,d as ie,f as Fe,h as Ue,M as se,j as Me,k as ue,o as Be,l as ce,r as ze,m as le,s as De,n as Ge,U as q,p as U,q as O,t as fe,u as xe,v as Ke,w as Re,x as pe,y as ge,_ as ke}from"./Navbar.3ed4b8cf.js";import{_ as M,f as de,i as b,j as be,k as v,l as ye,m as I,q as Ye,s as qe,o as p,c as g,v as N,n as h,t as _,x as T,r as $,F as He,y as Ve,g as E,w as Xe,z as Ze,b as L}from"./entry.c7738e0a.js";import"./nuxt-link.863a372c.js";var We="[object Symbol]";function B(e){return typeof e=="symbol"||P(e)&&oe(e)==We}function ve(e,n){for(var r=-1,t=e==null?0:e.length,a=Array(t);++r<t;)a[r]=n(e[r],r,e);return a}var Je=1/0,H=S?S.prototype:void 0,V=H?H.toString:void 0;function he(e){if(typeof e=="string")return e;if(w(e))return ve(e,he)+"";if(B(e))return V?V.call(e):"";var n=e+"";return n=="0"&&1/e==-Je?"-0":n}function Qe(e){return e}var X=Object.create,en=function(){function e(){}return function(n){if(!F(n))return{};if(X)return X(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}();const nn=en;function rn(e,n,r){switch(r.length){case 0:return e.call(n);case 1:return e.call(n,r[0]);case 2:return e.call(n,r[0],r[1]);case 3:return e.call(n,r[0],r[1],r[2])}return e.apply(n,r)}function tn(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}var an=800,on=16,sn=Date.now;function un(e){var n=0,r=0;return function(){var t=sn(),a=on-(t-r);if(r=t,a>0){if(++n>=an)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function cn(e){return function(){return e}}var ln=function(){try{var e=Ne(Object,"defineProperty");return e({},"",{}),e}catch{}}();const j=ln;var fn=j?function(e,n){return j(e,"toString",{configurable:!0,enumerable:!1,value:cn(n),writable:!0})}:Qe;const pn=fn;var gn=un(pn);const dn=gn;function bn(e,n){for(var r=-1,t=e==null?0:e.length;++r<t&&n(e[r],r,e)!==!1;);return e}function me(e,n,r){n=="__proto__"&&j?j(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}var yn=Object.prototype,vn=yn.hasOwnProperty;function Te(e,n,r){var t=e[n];(!(vn.call(e,n)&&Le(t,r))||r===void 0&&!(n in e))&&me(e,n,r)}function A(e,n,r,t){var a=!r;r||(r={});for(var o=-1,i=n.length;++o<i;){var u=n[o],l=t?t(r[u],e[u],u,r,e):void 0;l===void 0&&(l=e[u]),a?me(r,u,l):Te(r,u,l)}return r}var Z=Math.max;function hn(e,n,r){return n=Z(n===void 0?e.length-1:n,0),function(){for(var t=arguments,a=-1,o=Z(t.length-n,0),i=Array(o);++a<o;)i[a]=t[n+a];a=-1;for(var u=Array(n+1);++a<n;)u[a]=t[a];return u[n]=r(i),rn(e,this,u)}}function mn(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var Tn=Object.prototype,$n=Tn.hasOwnProperty;function Sn(e){if(!F(e))return mn(e);var n=ie(e),r=[];for(var t in e)t=="constructor"&&(n||!$n.call(e,t))||r.push(t);return r}function z(e){return Fe(e)?Ue(e,!0):Sn(e)}var wn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,An=/^\w*$/;function Cn(e,n){if(w(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||B(e)?!0:An.test(e)||!wn.test(e)||n!=null&&e in Object(n)}var On="Expected a function";function D(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(On);var r=function(){var t=arguments,a=n?n.apply(this,t):t[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,t);return r.cache=o.set(a,i)||o,i};return r.cache=new(D.Cache||se),r}D.Cache=se;var _n=500;function jn(e){var n=D(e,function(t){return r.size===_n&&r.clear(),t}),r=n.cache;return n}var Pn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,In=/\\(\\)?/g,En=jn(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Pn,function(r,t,a,o){n.push(a?o.replace(In,"$1"):t||r)}),n});const Nn=En;function Ln(e){return e==null?"":he(e)}function G(e,n){return w(e)?e:Cn(e,n)?[e]:Nn(Ln(e))}var Fn=1/0;function $e(e){if(typeof e=="string"||B(e))return e;var n=e+"";return n=="0"&&1/e==-Fn?"-0":n}function Un(e,n){n=G(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[$e(n[r++])];return r&&r==t?e:void 0}var W=S?S.isConcatSpreadable:void 0;function Mn(e){return w(e)||Me(e)||!!(W&&e&&e[W])}function Se(e,n,r,t,a){var o=-1,i=e.length;for(r||(r=Mn),a||(a=[]);++o<i;){var u=e[o];n>0&&r(u)?n>1?Se(u,n-1,r,t,a):ue(a,u):t||(a[a.length]=u)}return a}function Bn(e){var n=e==null?0:e.length;return n?Se(e,1):[]}function zn(e){return dn(hn(e,void 0,Bn),e+"")}var Dn=Be(Object.getPrototypeOf,Object);const x=Dn;var Gn="[object Object]",xn=Function.prototype,Kn=Object.prototype,we=xn.toString,Rn=Kn.hasOwnProperty,kn=we.call(Object);function Yn(e){if(!P(e)||oe(e)!=Gn)return!1;var n=x(e);if(n===null)return!0;var r=Rn.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&we.call(r)==kn}function qn(e,n,r){var t=-1,a=e.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var o=Array(a);++t<a;)o[t]=e[t+n];return o}function Hn(e,n){return e&&A(n,ce(n),e)}function Vn(e,n){return e&&A(n,z(n),e)}var Ae=typeof exports=="object"&&exports&&!exports.nodeType&&exports,J=Ae&&typeof module=="object"&&module&&!module.nodeType&&module,Xn=J&&J.exports===Ae,Q=Xn?ze.Buffer:void 0,ee=Q?Q.allocUnsafe:void 0;function Zn(e,n){if(n)return e.slice();var r=e.length,t=ee?ee(r):new e.constructor(r);return e.copy(t),t}function Wn(e,n){return A(e,le(e),n)}var Jn=Object.getOwnPropertySymbols,Qn=Jn?function(e){for(var n=[];e;)ue(n,le(e)),e=x(e);return n}:De;const Ce=Qn;function er(e,n){return A(e,Ce(e),n)}function Oe(e){return Ge(e,z,Ce)}var nr=Object.prototype,rr=nr.hasOwnProperty;function tr(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&rr.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function K(e){var n=new e.constructor(e.byteLength);return new q(n).set(new q(e)),n}function ar(e,n){var r=n?K(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var or=/\w*$/;function ir(e){var n=new e.constructor(e.source,or.exec(e));return n.lastIndex=e.lastIndex,n}var ne=S?S.prototype:void 0,re=ne?ne.valueOf:void 0;function sr(e){return re?Object(re.call(e)):{}}function ur(e,n){var r=n?K(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var cr="[object Boolean]",lr="[object Date]",fr="[object Map]",pr="[object Number]",gr="[object RegExp]",dr="[object Set]",br="[object String]",yr="[object Symbol]",vr="[object ArrayBuffer]",hr="[object DataView]",mr="[object Float32Array]",Tr="[object Float64Array]",$r="[object Int8Array]",Sr="[object Int16Array]",wr="[object Int32Array]",Ar="[object Uint8Array]",Cr="[object Uint8ClampedArray]",Or="[object Uint16Array]",_r="[object Uint32Array]";function jr(e,n,r){var t=e.constructor;switch(n){case vr:return K(e);case cr:case lr:return new t(+e);case hr:return ar(e,r);case mr:case Tr:case $r:case Sr:case wr:case Ar:case Cr:case Or:case _r:return ur(e,r);case fr:return new t;case pr:case br:return new t(e);case gr:return ir(e);case dr:return new t;case yr:return sr(e)}}function Pr(e){return typeof e.constructor=="function"&&!ie(e)?nn(x(e)):{}}var Ir="[object Map]";function Er(e){return P(e)&&U(e)==Ir}var te=O&&O.isMap,Nr=te?fe(te):Er;const Lr=Nr;var Fr="[object Set]";function Ur(e){return P(e)&&U(e)==Fr}var ae=O&&O.isSet,Mr=ae?fe(ae):Ur;const Br=Mr;var zr=1,Dr=2,Gr=4,_e="[object Arguments]",xr="[object Array]",Kr="[object Boolean]",Rr="[object Date]",kr="[object Error]",je="[object Function]",Yr="[object GeneratorFunction]",qr="[object Map]",Hr="[object Number]",Pe="[object Object]",Vr="[object RegExp]",Xr="[object Set]",Zr="[object String]",Wr="[object Symbol]",Jr="[object WeakMap]",Qr="[object ArrayBuffer]",et="[object DataView]",nt="[object Float32Array]",rt="[object Float64Array]",tt="[object Int8Array]",at="[object Int16Array]",ot="[object Int32Array]",it="[object Uint8Array]",st="[object Uint8ClampedArray]",ut="[object Uint16Array]",ct="[object Uint32Array]",s={};s[_e]=s[xr]=s[Qr]=s[et]=s[Kr]=s[Rr]=s[nt]=s[rt]=s[tt]=s[at]=s[ot]=s[qr]=s[Hr]=s[Pe]=s[Vr]=s[Xr]=s[Zr]=s[Wr]=s[it]=s[st]=s[ut]=s[ct]=!0;s[kr]=s[je]=s[Jr]=!1;function C(e,n,r,t,a,o){var i,u=n&zr,l=n&Dr,c=n&Gr;if(r&&(i=a?r(e,t,a,o):r(e)),i!==void 0)return i;if(!F(e))return e;var m=w(e);if(m){if(i=tr(e),!u)return tn(e,i)}else{var f=U(e),R=f==je||f==Yr;if(xe(e))return Zn(e,u);if(f==Pe||f==_e||R&&!a){if(i=l||R?{}:Pr(e),!u)return l?er(e,Vn(i,e)):Wn(e,Hn(i,e))}else{if(!s[f])return a?e:{};i=jr(e,f,u)}}o||(o=new Ke);var k=o.get(e);if(k)return k;o.set(e,i),Br(e)?e.forEach(function(d){i.add(C(d,n,r,d,e,o))}):Lr(e)&&e.forEach(function(d,y){i.set(y,C(d,n,r,y,e,o))});var Ee=c?l?Oe:Re:l?z:ce,Y=m?void 0:Ee(e);return bn(Y||e,function(d,y){Y&&(y=d,d=e[y]),Te(i,y,C(d,n,r,y,e,o))}),i}function lt(e){var n=e==null?0:e.length;return n?e[n-1]:void 0}function ft(e,n){return n.length<2?e:Un(e,qn(n,0,-1))}function pt(e,n){return n=G(n,e),e=ft(e,n),e==null||delete e[$e(lt(n))]}function gt(e){return Yn(e)?void 0:e}var dt=1,bt=2,yt=4,vt=zn(function(e,n){var r={};if(e==null)return r;var t=!1;n=ve(n,function(o){return o=G(o,e),t||(t=o.length>1),o}),A(e,Oe(e),r),t&&(r=C(r,dt|bt|yt,gt));for(var a=n.length;a--;)pt(r,n[a]);return r});const ht=vt,mt=de({inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},size:{type:String,default:()=>b.ui.avatar.default.size,validator(e){return Object.keys(b.ui.avatar.size).includes(e)}},chipColor:{type:String,default:()=>b.ui.avatar.default.chipColor,validator(e){return["gray",...b.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>b.ui.avatar.default.chipPosition,validator(e){return Object.keys(b.ui.avatar.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},ui:{type:Object,default:()=>b.ui.avatar}},setup(e){const n=be(),r=v(()=>ye({},e.ui,n.ui.avatar)),t=v(()=>I(r.value.wrapper,r.value.background,r.value.rounded,r.value.size[e.size])),a=v(()=>I(r.value.rounded,r.value.size[e.size])),o=v(()=>I(r.value.chip.base,r.value.chip.size[e.size],r.value.chip.position[e.chipPosition],r.value.chip.background.replaceAll("{color}",e.chipColor))),i=v(()=>typeof e.src=="boolean"?null:e.src),u=v(()=>(e.alt||"").split(" ").map(m=>m.charAt(0)).join("").substring(0,2)),l=Ye(!1);qe(()=>e.src,()=>{l.value&&(l.value=!1)});function c(){l.value=!0}return{wrapperClass:t,avatarClass:a,chipClass:o,url:i,placeholder:u,error:l,onError:c}}}),Tt=["alt","src","onerror"];function $t(e,n,r,t,a,o){return p(),g("span",{class:h(e.wrapperClass)},[e.url&&!e.error?(p(),g("img",N({key:0,class:e.avatarClass,alt:e.alt,src:e.url},e.$attrs,{onerror:()=>e.onError()}),null,16,Tt)):e.text||e.placeholder?(p(),g("span",{key:1,class:h(e.ui.placeholder)},_(e.text||e.placeholder),3)):T("",!0),e.chipColor?(p(),g("span",{key:2,class:h(e.chipClass)},_(e.chipText),3)):T("",!0),$(e.$slots,"default")],2)}const Ie=M(mt,[["render",$t]]),St=de({components:{UIcon:pe,UAvatar:Ie,ULink:ge},props:{links:{type:Array,default:()=>[]},ui:{type:Object,default:()=>b.ui.verticalNavigation}},setup(e){const n=be();return{ui:v(()=>ye({},e.ui,n.ui.verticalNavigation)),omit:ht}}});function wt(e,n,r,t,a,o){const i=Ie,u=pe,l=ge;return p(),g("nav",{class:h(e.ui.wrapper)},[(p(!0),g(He,null,Ve(e.links,(c,m)=>(p(),E(l,N({key:m},e.omit(c,["label","icon","iconClass","avatar","badge","click"]),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:c.click,onKeyup:n[0]||(n[0]=Ze(f=>f.target.blur(),["enter"]))}),{default:Xe(({isActive:f})=>[$(e.$slots,"avatar",{link:c,isActive:f},()=>[c.avatar?(p(),E(i,N({key:0},{size:e.ui.avatar.size,...c.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):T("",!0)]),$(e.$slots,"icon",{link:c,isActive:f},()=>[c.icon?(p(),E(u,{key:0,name:c.icon,class:h([e.ui.icon.base,f?e.ui.icon.active:e.ui.icon.inactive,c.iconClass])},null,8,["name","class"])):T("",!0)]),$(e.$slots,"default",{link:c,isActive:f},()=>[c.label?(p(),g("span",{key:0,class:h(e.ui.label)},_(c.label),3)):T("",!0)]),$(e.$slots,"badge",{link:c,isActive:f},()=>[c.badge?(p(),g("span",{key:0,class:h([e.ui.badge.base,f?e.ui.badge.active:e.ui.badge.inactive])},_(c.badge),3)):T("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))],2)}const At=M(St,[["render",wt]]),Ct={__name:"Sidebar",setup(e){const n=[{label:"Home",to:"/"},{label:"About",to:"/profile/about"}];return(r,t)=>{const a=At;return p(),g("aside",null,[L(a,{links:n,ui:{wrapper:"border-s border-gray-200 dark:border-gray-800 space-y-2",base:"group block border-s -ms-px lg:leading-6 before:hidden",padding:"p-0 ps-4",rounded:"",font:"",ring:"",active:"text-primary-500 dark:text-primary-400 border-current font-semibold",inactive:"border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"}})])}}},Ot=Ct,_t={};function jt(e,n){const r=ke,t=Ot;return p(),g("div",null,[L(r),L(t),$(e.$slots,"default")])}const Nt=M(_t,[["render",jt]]);export{Nt as default};
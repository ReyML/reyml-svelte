function T(){}const lt=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function w(t){t.forEach(J)}function K(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Dt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function st(t){return Object.keys(t).length===0}function Lt(t,e,n,i){if(t){const l=Q(t,e,n,i);return t[0](l)}}function Q(t,e,n,i){return t[1]&&i?ot(n.ctx.slice(),t[1](i(e))):n.ctx}function zt(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const c=[],r=Math.max(e.dirty.length,l.length);for(let s=0;s<r;s+=1)c[s]=e.dirty[s]|l[s];return c}return e.dirty|l}return e.dirty}function Bt(t,e,n,i,l,c){if(l){const r=Q(e,n,i,c);t.p(r,l)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window!="undefined";let ct=U?()=>window.performance.now():()=>Date.now(),z=U?t=>requestAnimationFrame(t):T;const x=new Set;function V(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&z(V)}function ut(t){let e;return x.size===0&&z(V),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let q=!1;function at(){q=!0}function ft(){q=!1}function _t(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,_=(l>0&&e[n[l]].claim_order<=u?l+1:_t(1,l,a=>e[n[a]].claim_order,u))-1;i[o]=n[_]+1;const f=_+1;n[f]=o,l=Math.max(f,l)}const c=[],r=[];let s=e.length-1;for(let o=n[l]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);s>=o;s--)r.push(e[s]);s--}for(;s>=0;s--)r.push(e[s]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const _=u<c.length?c[u]:null;t.insertBefore(r[o],_)}}function ht(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=Y("style");return pt(X(t),e),e.sheet}function pt(t,e){ht(t.head||t,e)}function yt(t,e){if(q){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){q&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function xt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function Wt(){return B(" ")}function Gt(){return B("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Kt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:wt(t,i,e[i])}function bt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,l=!1){$t(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s)){const o=n(s);return o===void 0?t.splice(r,1):t[r]=o,l||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s)){const o=n(s);return o===void 0?t.splice(r,1):t[r]=o,l?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function tt(t,e,n,i){return Z(t,l=>l.nodeName===e,l=>{const c=[];for(let r=0;r<l.attributes.length;r++){const s=l.attributes[r];n[s.name]||c.push(s.name)}c.forEach(r=>l.removeAttribute(r))},()=>i(e))}function Qt(t,e,n){return tt(t,e,n,Y)}function Ut(t,e,n){return tt(t,e,n,xt)}function vt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Vt(t){return vt(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Zt(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,i,e),l}function te(t,e=document.body){return Array.from(e.querySelectorAll(t))}const C=new Map;let M=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:mt(e),rules:{}};return C.set(t,n),n}function I(t,e,n,i,l,c,r,s=0){const o=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*c(p);u+=p*100+`%{${r(g,1-g)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${kt(_)}_${s}`,a=X(t),{stylesheet:d,rules:h}=C.get(a)||At(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${l}ms 1 both`,M+=1,f}function Nt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),l=n.length-i.length;l&&(t.style.animation=i.join(", "),M-=l,M||jt())}function jt(){z(()=>{M||(C.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),C.clear())})}let E;function v(t){E=t}function F(){if(!E)throw new Error("Function called outside component initialization");return E}function ee(t){F().$$.on_mount.push(t)}function ne(t){F().$$.after_update.push(t)}function ie(t,e){return F().$$.context.set(t,e),e}const $=[],W=[],j=[],G=[],et=Promise.resolve();let L=!1;function nt(){L||(L=!0,et.then(it))}function re(){return nt(),et}function O(t){j.push(t)}const R=new Set;let N=0;function it(){const t=E;do{for(;N<$.length;){const e=$[N];N++,v(e),St(e.$$)}for(v(null),$.length=0,N=0;W.length;)W.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];R.has(n)||(R.add(n),n())}j.length=0}while($.length);for(;G.length;)G.pop()();L=!1,R.clear(),v(t)}function St(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let b;function Ct(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function D(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const S=new Set;let m;function le(){m={r:0,c:[],p:m}}function oe(){m.r||w(m.c),m=m.p}function Mt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function se(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),m.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Ot={duration:0};function ce(t,e,n,i){let l=e(t,n),c=i?0:1,r=null,s=null,o=null;function u(){o&&Nt(t,o)}function _(a,d){const h=a.b-c;return d*=Math.abs(h),{a:c,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=lt,tick:p=T,css:g}=l||Ot,P={start:ct()+d,b:a};a||(P.group=m,m.r+=1),r||s?s=P:(g&&(u(),o=I(t,c,a,h,d,y,g)),a&&p(0,1),r=_(P,h),O(()=>D(t,a,"start")),ut(k=>{if(s&&k>s.start&&(r=_(s,h),s=null,D(t,r.b,"start"),g&&(u(),o=I(t,c,r.b,r.duration,0,y,l.css))),r){if(k>=r.end)p(c=r.b,1-c),D(t,r.b,"end"),s||(r.b?u():--r.group.r||w(r.group.c)),r=null;else if(k>=r.start){const rt=k-r.start;c=r.a+r.d*y(rt/r.duration),p(c,1-c)}}return!!(r||s)}))}return{run(a){K(l)?Ct().then(()=>{l=l(),f(a)}):f(a)},end(){u(),r=s=null}}}const ue=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ae(t,e){const n={},i={},l={$$scope:1};let c=t.length;for(;c--;){const r=t[c],s=e[c];if(s){for(const o in r)o in s||(i[o]=1);for(const o in s)l[o]||(n[o]=s[o],l[o]=1);t[c]=s}else for(const o in r)l[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function fe(t){return typeof t=="object"&&t!==null?t:{}}function _e(t){t&&t.c()}function de(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:l,on_mount:c,on_destroy:r,after_update:s}=t.$$;l&&l.m(e,n),i||O(()=>{const o=c.map(J).filter(K);r?r.push(...o):w(o),t.$$.on_mount=[]}),s.forEach(O)}function qt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&($.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,n,i,l,c,r,s=[-1]){const o=E;v(t);const u=t.$$={fragment:null,ctx:null,props:c,update:T,not_equal:l,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:H(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&l(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Pt(t,f)),a}):[],u.update(),_=!0,w(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){at();const f=bt(e.target);u.fragment&&u.fragment.l(f),f.forEach(gt)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),ft(),it()}v(o)}class me{$destroy(){qt(this,1),this.$destroy=T}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ae as A,fe as B,qt as C,ot as D,re as E,Zt as F,Jt as G,O as H,ce as I,Dt as J,yt as K,w as L,xt as M,Ut as N,Lt as O,te as P,Bt as Q,Ft as R,me as S,zt as T,It as U,Kt as V,ue as W,bt as a,wt as b,Qt as c,gt as d,Y as e,Yt as f,Ht as g,vt as h,he as i,Xt as j,Wt as k,Gt as l,Vt as m,T as n,le as o,se as p,oe as q,Mt as r,Rt as s,B as t,ie as u,ne as v,ee as w,_e as x,de as y,Tt as z};
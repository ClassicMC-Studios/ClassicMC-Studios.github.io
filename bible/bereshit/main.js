var ae=Object.defineProperty;var de=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var S=(e,t,n)=>(de(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function w(){}function re(e){return e()}function ee(){return Object.create(null)}function I(e){e.forEach(re)}function oe(e){return typeof e=="function"}function he(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function pe(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function _(){return b(" ")}function j(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function me(e){return Array.from(e.childNodes)}function N(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let M;function P(e){M=e}const v=[],te=[];let k=[];const ne=[],be=Promise.resolve();let T=!1;function _e(){T||(T=!0,be.then(le))}function B(e){k.push(e)}const H=new Set;let x=0;function le(){if(x!==0)return;const e=M;do{try{for(;x<v.length;){const t=v[x];x++,P(t),ye(t.$$)}}catch(t){throw v.length=0,x=0,t}for(P(null),v.length=0,x=0;te.length;)te.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];H.has(n)||(H.add(n),n())}k.length=0}while(v.length);for(;ne.length;)ne.pop()();T=!1,H.clear(),P(e)}function ye(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}function ge(e){const t=[],n=[];k.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),k=t}const $e=new Set;function xe(e,t){e&&e.i&&($e.delete(e),e.i(t))}function ve(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),B(()=>{const l=e.$$.on_mount.map(re).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...l):I(l),e.$$.on_mount=[]}),r.forEach(B)}function we(e,t){const n=e.$$;n.fragment!==null&&(ge(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ke(e,t){e.$$.dirty[0]===-1&&(v.push(e),_e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,n,o,r,l,m=null,E=[-1]){const y=M;P(e);const s=e.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(y?y.$$.context:[])),callbacks:ee(),dirty:E,skip_bound:!1,root:t.target||y.$$.root};m&&m(s.root);let $=!1;if(s.ctx=n?n(e,t.props||{},(i,A,...O)=>{const L=O.length?O[0]:A;return s.ctx&&r(s.ctx[i],s.ctx[i]=L)&&(!s.skip_bound&&s.bound[i]&&s.bound[i](L),$&&ke(e,i)),A}):[],s.update(),$=!0,I(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const i=me(t.target);s.fragment&&s.fragment.l(i),i.forEach(f)}else s.fragment&&s.fragment.c();t.intro&&xe(e.$$.fragment),ve(e,t.target,t.anchor),le()}P(y)}class Oe{constructor(){S(this,"$$");S(this,"$$set")}$destroy(){we(this,1),this.$destroy=w}$on(t,n){if(!oe(n))return w;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Le);const g=[{book:"Genesis",verse:"1:1",text:{us:"In the beginning God created the heavens and the earth.",heb:"בְּרֵאשִׁית, בָּרָא אֱלֹהִים, אֵת הַשָּׁמַיִם, וְאֵת הָאָרֶץ.",trs:"bə-rê-šîṯ bā-rā ’ĕ-lō-hîm; ’êṯ haš-šā-ma-yim wə-’êṯ hā-’ā-reṣ.",brk:"bə-rê-šîṯ[In the beginning] bā-rā[created] ’ĕ-lō-hîm;[god] ’êṯ[-][^a]  haš-šā-ma-yim[the heavens][^b] wə-’êṯ[and] hā-’ā-reṣ.[the earth]",sec:"buh-ray-sheet bah-rah elo-heem et hasha-mai-em ve'eht ah'rehts"},notes:{"^a":"Either indicates the direct object of a verb, or The Aleph-Tov or Lashon Hakodesh which says god first created the Hebrew language.","^b":"'im Indicates plurality"}}];function Ne(e){let t,n,o,r,l,m,E,y,s,$,i,A=g[0].text.us+"",O,L,F,ie=g[0].text.heb+"",G,R,q,se=g[0].text.trs+"",K,U,V,ce=g[0].text.brk+"",z,C,a,D,J,Q,ue=g[0].notes["^a"]+"",W,X,Y,fe=g[0].notes["^b"]+"",Z;return{c(){t=p("link"),n=_(),o=p("h1"),o.textContent="בראשית",r=_(),l=p("p"),l.innerHTML="He that overcometh shall enherit all things;<br/> <em>Revelation 21:7</em>",m=_(),E=p("br"),y=_(),s=p("h3"),s.textContent=`${g[0].book} ${g[0].verse}`,$=_(),i=p("p"),O=b(A),L=p("br"),F=_(),G=b(ie),R=p("br"),q=_(),K=b(se),U=p("br"),V=_(),z=b(ce),C=_(),a=p("p"),D=b("Footnotes"),J=p("br"),Q=b(`
  ^a: `),W=b(ue),X=p("br"),Y=b(`
  ^b: `),Z=b(fe),document.title="בראשית",j(t,"rel","shortcut icon"),j(t,"href","https://discetheo.github.io/candle.png"),j(t,"type","image/x-icon"),N(l,"font-family","serif"),N(l,"color","lightgray"),N(a,"font-style","italic"),N(a,"font-family","serif"),N(a,"color","lightgray")},m(u,d){c(document.head,t),h(u,n,d),h(u,o,d),h(u,r,d),h(u,l,d),h(u,m,d),h(u,E,d),h(u,y,d),h(u,s,d),h(u,$,d),h(u,i,d),c(i,O),c(i,L),c(i,F),c(i,G),c(i,R),c(i,q),c(i,K),c(i,U),c(i,V),c(i,z),h(u,C,d),h(u,a,d),c(a,D),c(a,J),c(a,Q),c(a,W),c(a,X),c(a,Y),c(a,Z)},p:w,i:w,o:w,d(u){u&&(f(n),f(o),f(r),f(l),f(m),f(E),f(y),f(s),f($),f(i),f(C),f(a)),f(t)}}}class Pe extends Oe{constructor(t){super(),Ee(this,t,null,Ne,he,{})}}new Pe({target:document.getElementById("app")});
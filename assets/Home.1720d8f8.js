import{_ as p,o as m,c as g,r as $,n as B,u as H,a as F,l as L,b as N,d as W,e as s,f as C,t as _,F as E,g as d,w as I,h as z,p as V,i as q}from"./index.c82c8a5f.js";import{B as b}from"./Button.385fefa4.js";const D={},J={class:"fullscreen"};function M(t,e){return m(),g("div",J,[$(t.$slots,"default",{},void 0,!0)])}const O=p(D,[["render",M],["__scopeId","data-v-ee2d3c16"]]);const P={__name:"BackgroundImage",props:{src:{type:String,required:!0}},setup(t){return(e,r)=>(m(),g("div",{style:B({backgroundImage:`url('${t.src}')`})},[$(e.$slots,"default",{},void 0,!0)],4))}},U=p(P,[["__scopeId","data-v-e44ef6ac"]]);const A={style:{"font-size":"90px","letter-spacing":"4px"},id:"title"},j={class:"colorful"},G={style:{"font-size":"20px","letter-spacing":"6px",color:"grey",opacity:"0.7"}},w=3e3,K=200,Q={__name:"FirstScreenTitle",setup(t){const e=H(),r=()=>e.t("lang")=="cn"?400:150,h=()=>e.t("lang")=="cn"?120:60;let i=JSON.parse(e.t("home.firstScreen.titleTyper"));const l=F(i[0]);let u=0;var o=[];function S(){o.forEach(n=>clearTimeout(n)),o=[]}function f(){o.push(setTimeout(k,w))}L.addChangedCallback(()=>{console.log("[FirstScreenTitle] Lang Is Changed"),S(),i=JSON.parse(e.t("home.firstScreen.titleTyper")),l.value=i[u],f()});function T(){console.log("[FirstScreenTitle] stopWhenHidden");var n=document.hidden;n?S():f()}N(()=>{console.log("[FirstScreenTitle] onMounted"),document.addEventListener("visibilitychange",T)}),W(()=>{console.log("[FirstScreenTitle] onUnmounted"),document.removeEventListener("visibilitychange",T)}),f();async function k(){async function n(v){let c=i[v];await new Promise(y=>{for(let a=0;a<c.length;a++)o.push(setTimeout(()=>{l.value=c.substring(0,l.value.length+1)},r()*a));o.push(setTimeout(y,r()*c.length+w))})}async function x(v){let c=i[v];await new Promise(y=>{for(let a=0;a<c.length;a++)o.push(setTimeout(()=>{l.value=c.substring(0,l.value.length-1)},h()*a));o.push(setTimeout(y,h()*c.length+K))})}for(;;)await x(u),u=++u%i.length,await n(u)}return(n,x)=>(m(),g(E,null,[s("h1",A,[C(_(n.$t("home.firstScreen.title")),1),s("span",j,_(l.value),1)]),s("h2",G,_(n.$t("home.firstScreen.subTitle")),1)],64))}},R=p(Q,[["__scopeId","data-v-c285198f"]]),X=1669961375,Y="/assets/first-screen-background.3aab61f8.svg";const Z=t=>(V("data-v-71c2e6ac"),t=t(),q(),t),ee={class:"content"},te=Z(()=>s("div",{style:{height:"100vh",width:"50px","background-color":"aqua"}},null,-1)),ne={__name:"Home",setup(t){const e=F(X);return(r,h)=>(m(),g("div",null,[d(O,null,{default:I(()=>[d(U,{class:"grid",src:z(Y)},{default:I(()=>[s("div",ee,[d(R),s("div",null,[d(b,{class:"content-btn",type:"dark",text:r.$t("home.buttons.getStarted")},null,8,["text"]),d(b,{class:"content-btn",type:"light",text:r.$t("home.buttons.community")},null,8,["text"])])])]),_:1},8,["src"])]),_:1}),s("div",null,[s("span",null,"Build Time: "+_(new Date(e.value*1e3).toLocaleString())+"("+_(e.value)+")",1)]),te]))}},ce=p(ne,[["__scopeId","data-v-71c2e6ac"]]);export{ce as default};

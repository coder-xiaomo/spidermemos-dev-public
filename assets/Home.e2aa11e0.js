import{_ as p,o as m,c as h,r as $,n as H,u as L,a as F,l as N,b as W,d as C,e as s,f as E,t as _,F as z,g as d,w as I,p as V,h as q}from"./index.784c47c5.js";import{B as w}from"./Button.7779ee24.js";const D={},J={class:"fullscreen"};function M(e,t){return m(),h("div",J,[$(e.$slots,"default",{},void 0,!0)])}const O=p(D,[["render",M],["__scopeId","data-v-ee2d3c16"]]);const P={__name:"BackgroundImage",props:{src:{type:String,required:!0}},setup(e){return(t,r)=>(m(),h("div",{style:H({backgroundImage:`url('${e.src}')`})},[$(t.$slots,"default",{},void 0,!0)],4))}},U=p(P,[["__scopeId","data-v-e44ef6ac"]]);const A={style:{"font-size":"90px","letter-spacing":"4px"},id:"title"},j={class:"colorful"},G={style:{"font-size":"20px","letter-spacing":"6px",color:"grey",opacity:"0.7"}},K={__name:"FirstScreenTitle",setup(e){const t=L(),r=3e3,S=200,k=400,g=120;let i=JSON.parse(t.t("home.firstScreen.titleTyper"));const l=F(i[0]);let u=0;var o=[];function T(){o.forEach(n=>clearTimeout(n)),o=[]}function f(){o.push(setTimeout(B,r))}N.addChangedCallback(()=>{console.log("[FirstScreenTitle] Lang Is Changed"),T(),i=JSON.parse(t.t("home.firstScreen.titleTyper")),l.value=i[u],f()});function b(){console.log("[FirstScreenTitle] stopWhenHidden");var n=document.hidden;n?T():f()}W(()=>{console.log("[FirstScreenTitle] onMounted"),document.addEventListener("visibilitychange",b)}),C(()=>{console.log("[FirstScreenTitle] onUnmounted"),document.removeEventListener("visibilitychange",b)}),f();async function B(){async function n(v){let a=i[v];await new Promise(y=>{for(let c=0;c<a.length;c++)o.push(setTimeout(()=>{l.value=a.substring(0,l.value.length+1)},k*c));o.push(setTimeout(y,g*a.length+r))})}async function x(v){let a=i[v];await new Promise(y=>{for(let c=0;c<a.length;c++)o.push(setTimeout(()=>{l.value=a.substring(0,l.value.length-1)},g*c));o.push(setTimeout(y,g*a.length+S))})}for(;;)await x(u),u=++u%i.length,await n(u)}return(n,x)=>(m(),h(z,null,[s("h1",A,[E(_(n.$t("home.firstScreen.title")),1),s("span",j,_(l.value),1)]),s("h2",G,_(n.$t("home.firstScreen.subTitle")),1)],64))}},Q=p(K,[["__scopeId","data-v-e3b1c48d"]]),R=1669887507;const X=e=>(V("data-v-231e6765"),e=e(),q(),e),Y={class:"content"},Z=X(()=>s("div",{style:{height:"100vh",width:"50px","background-color":"aqua"}},null,-1)),ee={__name:"Home",setup(e){const t=F(R);return(r,S)=>(m(),h("div",null,[d(O,null,{default:I(()=>[d(U,{class:"grid",src:"./images/first-screen-background.svg"},{default:I(()=>[s("div",Y,[d(Q),s("div",null,[d(w,{class:"content-btn",type:"dark",text:r.$t("home.buttons.getStarted")},null,8,["text"]),d(w,{class:"content-btn",type:"light",text:r.$t("home.buttons.community")},null,8,["text"])])])]),_:1})]),_:1}),s("div",null,[s("span",null,"Build Time: "+_(new Date(t.value*1e3).toLocaleString())+"("+_(t.value)+")",1)]),Z]))}},se=p(ee,[["__scopeId","data-v-231e6765"]]);export{se as default};
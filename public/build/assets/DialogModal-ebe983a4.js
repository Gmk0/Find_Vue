import{S as w}from"./SectionTitle-278f54a1.js";import{o as y,e as p,b as c,w as n,r as o,a as s,M as v,S as x,a2 as _,E as g,c as h,A as r,Y as m,P as u,n as b,f as $,a3 as k}from"./app-7b7754e7.js";const B={class:"md:grid md:gap-6"},S={class:"mt-5 md:mt-0 md:col-span-2"},C={class:"px-4 py-5 bg-white shadow dark:bg-gray-800 sm:p-6 sm:rounded-lg"},O={__name:"ActionSection",setup(e){return(a,t)=>(y(),p("div",B,[c(w,null,{title:n(()=>[o(a.$slots,"title")]),description:n(()=>[o(a.$slots,"description")]),_:3}),s("div",S,[s("div",C,[o(a.$slots,"content")])])]))}},E={class:"fixed inset-0 z-50 px-4 py-6 overflow-y-auto sm:px-0","scroll-region":""},W=s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),M=[W],N={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=e;v(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const l=()=>{t.closeable&&a("close")},i=d=>{d.key==="Escape"&&t.show&&l()};x(()=>document.addEventListener("keydown",i)),_(()=>{document.removeEventListener("keydown",i),document.body.style.overflow=null});const f=g(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(d,D)=>(y(),h(k,{to:"body"},[c(m,{"leave-active-class":"duration-200"},{default:n(()=>[r(s("div",E,[c(m,{"enter-active-class":"duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[r(s("div",{class:"fixed inset-0 transition-all transform",onClick:l},M,512),[[u,e.show]])]),_:1}),c(m,{"enter-active-class":"duration-300 ease-out","enter-from-class":"translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95","enter-to-class":"translate-y-0 opacity-100 sm:scale-100","leave-active-class":"duration-200 ease-in","leave-from-class":"translate-y-0 opacity-100 sm:scale-100","leave-to-class":"translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"},{default:n(()=>[r(s("div",{class:b(["mb-6 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:w-full sm:mx-auto",f.value])},[e.show?o(d.$slots,"default",{key:0}):$("",!0)],2),[[u,e.show]])]),_:3})],512),[[u,e.show]])]),_:3})]))}},T={class:"px-6 py-4"},V={class:"text-lg font-medium text-gray-900"},z={class:"mt-4 text-sm text-gray-600"},A={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},P={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=()=>{a("close")};return(l,i)=>(y(),h(N,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:t},{default:n(()=>[s("div",T,[s("div",V,[o(l.$slots,"title")]),s("div",z,[o(l.$slots,"content")])]),s("div",A,[o(l.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{N as _,O as a,P as b};
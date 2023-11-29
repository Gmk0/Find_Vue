import{d as u,m as _,e as o,a as t,F as m,j as g,q as r,o as a,A as n,P as c,t as d,b as v,w as f}from"./app-7b7754e7.js";import{_ as b}from"./WebLayout-bf673625.js";import"./userInfo-4886af5f.js";import"./TextInput-1759f298.js";const w={class:"min-h-screen pt-16 mx-auto max-w-7xl lg:px-8"},y={class:"relative overflow-hidden bg-gray-100 dark:bg-gray-900 pt-8 pb-12 lg:pb-[90px]"},F={class:"container px-4 mx-auto"},k=r('<div class="flex flex-wrap -mx-4"><div class="w-full px-4"><div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20"><span class="block mb-2 text-lg font-semibold tracking-wide uppercase text-amber-600"> FAQ </span><h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"> Des questions ? Regardez ici ! </h2><p class="text-base text-body-color"> Réponses aux questions fréquemment posées : Tout ce que vous devez savoir ! </p></div></div></div>',1),z={class:"flex flex-wrap -mx-4"},C={class:"grid w-full gap-4 px-4 md:grid-cols-2"},q=["onClick"],B={class:"mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-amber-600 bg-opacity-5 text-amber-600"},D={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},A=t("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"},null,-1),L=[A],S={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},V=t("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"},null,-1),j=[V],M={class:"w-full"},N={class:"text-lg font-semibold text-gray-800 dark:text-gray-100"},E={class:"py-3 text-base leading-relaxed text-body-color","x-text":"faq.answer"},G=r('<div class="absolute bottom-0 right-0 z-[-1]"><svg width="1440" height="886" viewBox="0 0 1440 886" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="1308.65" y1="1142.58" x2="602.827" y2="-418.681" gradientUnits="userSpaceOnUse"><stop stop-color="#3056D3" stop-opacity="0.36"></stop><stop offset="1" stop-color="#F5F2FD" stop-opacity="0"></stop><stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144"></stop></linearGradient></defs></svg></div>',1),I=Object.assign({layout:b},{__name:"Faq",props:{faqs:Array},setup(p){const e=u([]),x=l=>{e.value.includes(l)?e.value=e.value.filter(i=>i!==l):e.value.push(l)};return(l,i)=>{const h=_("Collapse");return a(),o("div",w,[t("section",y,[t("div",F,[k,t("div",z,[t("div",C,[(a(!0),o(m,null,g(p.faqs,s=>(a(),o("div",{key:s.id,class:"single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white dark:bg-gray-800 p-4 sm:p-8 lg:px-6 xl:px-8"},[t("button",{class:"flex w-full text-left faq-btn",onClick:H=>x(s.id)},[t("div",B,[n((a(),o("svg",D,L,512)),[[c,!e.value.includes(s.id)]]),n((a(),o("svg",S,j,512)),[[c,e.value.includes(s.id)]])]),t("div",M,[t("h4",N,d(s.questions),1)])],8,q),v(h,{when:e.value.includes(s.id),class:"faq-content pl-[62px]"},{default:f(()=>[t("p",E,d(s.reponses),1)]),_:2},1032,["when"])]))),128))])])]),G])])}}});export{I as default};
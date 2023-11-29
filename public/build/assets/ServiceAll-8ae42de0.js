import{_ as I}from"./WebLayout-bf673625.js";import{d as m,e as i,a as e,b as r,w as l,u as s,F as p,j as b,o as a,c as g,z as P,t as A,as as C,g as F}from"./app-7b7754e7.js";import{_ as M}from"./FreelanceCard-850ba6d1.js";import{S as f,N as h,P as x,a as w,A as _,b as k}from"./effect-init-020cc80e.js";import{E as y}from"./effect-cube-0cf0d551.js";import"./userInfo-4886af5f.js";import"./TextInput-1759f298.js";import"./image.esm-59765621.js";const E={class:"flex flex-col min-h-screen pt-16 mb-6 bg-gray-100 dark:bg-gray-800"},L={class:"flex flex-col p-2 mx-6 my-8 bg-white rounded-lg md:min-h-64 dark:bg-gray-800"},q=e("div",{class:"mb-2"},[e("h3",{class:"md:text-xl text-lg text-center dark:text-gray-400 text-slate-800"}," Découvrez une communauté de freelances talentueux prêts à donner vie à vos projets. Trouvez le service parfait pour vous, choisissez parmi une large sélection de compétences et laissez notre communauté de professionnels vous aider à réaliser vos rêves. ")],-1),D={class:""},T={class:"py-4 mx-6"},O={class:"flex items-end justify-end mb-2"},G={class:"flex gap-4"},H=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),J=[H],K=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),Q=[K],R={class:"mt-3 mb-1 md:text-[12px] text-[10px] font-semibold text-slate-600 duration-200 group-hover:text-white"},U={class:"py-8 mx-2 lg:mx-6"},W={class:"flex items-center justify-between px-4"},X=e("p",{class:"text-xl font-medium text-slate-700 dark:text-navy-100"}," Les Services populaire ",-1),Y={class:"flex gap-4"},Z=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),ee=[Z],se=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),te=[se],oe={class:"mt-5"},ne={class:"py-8 mx-2 lg:mx-6"},ae={class:"flex items-center justify-between px-4"},le=e("p",{class:"text-xl font-medium text-slate-700 dark:text-navy-100"}," Les Freelance populaire ",-1),re={class:"flex gap-4"},ie=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),de=[ie],ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),ue=[ce],ve={class:"mt-5"},pe={class:"flex flex-col p-2 mx-2 mt-4 bg-white rounded-lg dark:bg-gray-800 md:mx-6 justify-beetwen"},be=e("div",{class:"mb-4"},[e("h1",{class:"text-xl font-bold text-gray-800 dark:text-gray-300"},"Services que vous pourriez aimer")],-1),ge={class:"grid grid-cols-1 gap-4 lg:max-w-5xl lg:mx-auto lg:p-4 md:grid-cols-3 lg:md:grid-cols-4 md:gap-4"},me={class:"flex flex-col items-center justify-center p-6 mx-6 mt-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 min-h-64 lg:flex-row lg:justify-start"},fe=e("img",{src:"/images/hero/team.svg",alt:"Illustration de projet",class:"hidden w-1/2 h-64 mb-4 rounded-md lg:mr-6 md:block lg:mb-0"},null,-1),he={class:"text-center lg:text-left"},xe=e("h2",{class:"mb-2 text-xl font-semibold text-gray-800"},"Vous ne trouvez pas ce que vous cherchez ?",-1),we=e("p",{class:"mb-4 dark:text-gray-300"},"Si vous avez besoin d'un service particulier, n'hésitez pas à soumettre votre projet et notre communauté de freelances talentueux sera ravie de vous aider..",-1),ze=Object.assign({layout:I},{__name:"ServiceAll",props:{categories:Array,freelances:Array,servicesBest:Array},setup(z){const d=z,c=m(null),u=m(null),v=m(null),V=t=>{v.value=t},N=t=>{c.value=t},$=t=>{u.value=t},S=t=>{u.value&&(t==="prev"?u.value.slidePrev():t==="next"&&u.value.slideNext())},j=t=>{v.value&&(t==="prev"?v.value.slidePrev():t==="next"&&v.value.slideNext())},B=t=>{c.value&&(t==="prev"?c.value.slidePrev():t==="next"&&c.value.slideNext())};return(t,n)=>(a(),i("div",E,[e("div",L,[q,e("div",D,[e("div",T,[e("div",O,[e("div",G,[e("button",{onClick:n[0]||(n[0]=o=>B("prev")),class:"w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},J),e("button",{onClick:n[1]||(n[1]=o=>B("next")),class:"w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Q)])]),r(s(k),{class:"flex py-8 mb-4",modules:[s(h),s(x),s(w),s(y),s(_)],spaceBetween:30,"space-between":25,breakpoints:{300:{slidesPerView:1},900:{slidesPerView:3}},onSwiper:N},{default:l(()=>[(a(!0),i(p,null,b(d.categories,o=>(a(),g(s(f),{class:"m-2"},{default:l(()=>[r(s(P),{href:t.route("categoryName",[o.name]),class:"flex flex-col items-center px-4 py-2.5 duration-200 border shadow-lg cursor-pointer bg-gray-50 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},{default:l(()=>[e("h4",R,A(o.name),1)]),_:2},1032,["href"])]),_:2},1024))),256))]),_:1},8,["modules"])])])]),e("div",U,[e("div",W,[X,e("div",Y,[e("button",{onClick:n[2]||(n[2]=o=>j("prev")),class:"w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},ee),e("button",{onClick:n[3]||(n[3]=o=>j("next")),class:"w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},te)])]),e("div",oe,[r(s(k),{class:"flex py-8",modules:[s(h),s(x),s(w),s(y),s(_)],spaceBetween:30,breakpoints:{600:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:4}},"space-between":25,onSwiper:V},{default:l(()=>[(a(!0),i(p,null,b(d.servicesBest,o=>(a(),g(s(f),{class:""},{default:l(()=>[r(C,{service:o},null,8,["service"])]),_:2},1024))),256))]),_:1},8,["modules"])])]),e("div",ne,[e("div",ae,[le,e("div",re,[e("button",{onClick:n[4]||(n[4]=o=>S("prev")),class:"w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},de),e("button",{onClick:n[5]||(n[5]=o=>S("next")),class:"w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},ue)])]),e("div",ve,[r(s(k),{class:"flex py-8",modules:[s(h),s(x),s(w),s(y),s(_)],spaceBetween:30,breakpoints:{500:{slidesPerView:1},600:{slidesPerView:2},768:{slidesPerView:2},992:{slidesPerView:4}},"space-between":25,onSwiper:$},{default:l(()=>[(a(!0),i(p,null,b(d.freelances,o=>(a(),g(s(f),{class:""},{default:l(()=>[r(M,{freelance:o},null,8,["freelance"])]),_:2},1024))),256))]),_:1},8,["modules"])])]),e("div",pe,[be,e("div",ge,[(a(!0),i(p,null,b(d.servicesBest,o=>(a(),i("div",null,[(a(),g(C,{service:o,key:o.id},null,8,["service"]))]))),256))])]),e("div",me,[fe,e("div",he,[xe,we,r(s(P),{href:t.route("createProject"),class:"px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"},{default:l(()=>[F("Soumettre une mission")]),_:1},8,["href"])])])]))}});export{ze as default};

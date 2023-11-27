import{d as m,m as f,e as o,a as t,b as l,w as k,t as u,n as a,A as p,P as v,f as c,g as x,q as y,o as s}from"./app-840c2e3f.js";import{_ as w}from"./UserLayout-ed93d6b2.js";import{S as d}from"./SectionBorder-cc8b8abd.js";import _ from"./UpdatePasswordForm-f4ddeb74.js";import b from"./UpdateProfileInformationForm-229a129d.js";import"./MainSidebarUser-bbadc49e.js";/* empty css                                                          */import"./userInfo-2d011ee0.js";import"./ActionMessage-90cc4490.js";import"./FormSection-2366dcee.js";import"./SectionTitle-25656216.js";import"./PrimaryButton-e18f2b88.js";import"./TextInput-95780d22.js";import"./SecondaryButton-868a3fe4.js";const C={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},P={class:"flex flex-col"},$={class:"flex","aria-label":"Breadcrumb"},A={class:"inline-flex items-center space-x-1 md:space-x-3"},B={class:"inline-flex items-center"},S=t("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[t("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})],-1),V=y('<li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Profile</span></div></li>',1),j=t("h1",{class:"mt-4 text-3xl font-bold text-black dark:text-white"},"Profile",-1),N={class:"grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6"},M={class:"col-span-12 lg:col-span-4"},z={style:{top:"8rem"},class:"sticky p-4 bg-white rounded-[25px] dark:bg-gray-800 sm:p-5"},L={class:"flex items-center space-x-4"},D={class:"avatar h-14 w-14"},H=["src"],T=["src"],U={class:"text-base font-medium text-slate-700 dark:text-navy-100"},q={class:"mt-6 space-y-1.5 font-inter font-medium"},E=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),F=[E],I=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"},null,-1),O=[I],Z=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"},null,-1),G=[Z],J=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},null,-1),K=[J],Q={"x-transition:enter":"transition-all duration-300 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(1rem,0,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"col-span-12 lg:col-span-8"},R={key:0},W={"x-transition:enter":"transition-all duration-300 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(1rem,0,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"col-span-12 lg:col-span-8"},X={key:0},Y={key:1},xt=Object.assign({layout:w},{__name:"Profile",props:["sessions"],setup(h){const e=m("");return(r,n)=>{const g=f("Link");return s(),o("div",C,[t("div",P,[t("div",null,[t("nav",$,[t("ol",A,[t("li",B,[l(g,{href:r.route("user.dashboard"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:k(()=>[S,x(" Dashboard ")]),_:1},8,["href"])]),V])])]),j]),t("div",null,[t("div",N,[t("div",M,[t("div",z,[t("div",L,[t("div",D,[r.$page.props.auth.user.profile_photo_path!=null?(s(),o("img",{key:0,class:"object-cover rounded-full",src:"/storage/"+r.$page.props.auth.user.profile_photo_path,alt:""},null,8,H)):(s(),o("img",{key:1,class:"rounded-full",src:r.$page.props.auth.user.profile_photo_url,alt:""},null,8,T))]),t("div",null,[t("h3",U,u(r.$page.props.auth.user.name),1)])]),t("ul",q,[t("li",null,[t("a",{onClick:n[0]||(n[0]=i=>e.value="AccountP"),class:a([e.value==="AccountP"?"border-amber-600 border-b":"hover:bg-slate-100 hover:text-slate-800 text-gray-700 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100","group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"]),href:"#"},[(s(),o("svg",{xmlns:"http://www.w3.org/2000/svg",class:a([e.value==="AccountP"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200","w-5 h-5"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},F,2)),t("span",{class:a(e.value==="AccountP"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")},"Comptes Utilisateur",2)],2)]),t("li",null,[t("a",{onClick:n[1]||(n[1]=i=>e.value="Notification"),class:a([e.value==="Notification"?"border-amber-600 border-b text-slate-800 ":"hover:bg-slate-100  hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100","group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"]),href:"#"},[(s(),o("svg",{xmlns:"http://www.w3.org/2000/svg",class:a([e.value==="Notification"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200","w-5 h-5"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},O,2)),t("span",{class:a(e.value==="Notification"?"dark:text-white text-slate-800":"text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")},"Notification",2)],2)]),t("li",null,[t("a",{onClick:n[2]||(n[2]=i=>e.value="Security"),class:a([e.value==="Security"?"border-amber-600 border-b":"hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100","group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"]),href:"#"},[(s(),o("svg",{xmlns:"http://www.w3.org/2000/svg",class:a([e.value==="Security"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200","w-5 h-5"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},G,2)),t("span",{class:a(e.value==="Security"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")},"Security",2)],2)]),t("li",null,[t("a",{onClick:n[3]||(n[3]=i=>e.value="Privacy"),class:a([e.value==="Privacy"?"border-amber-600 border-b":"hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100","group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"]),href:"#"},[(s(),o("svg",{xmlns:"http://www.w3.org/2000/svg",class:a(["w-5 h-5",e.value==="Privacy"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},K,2)),t("span",{class:a(e.value==="Privacy"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}," Activites ",2)],2)])])])]),p(t("div",Q,[r.$page.props.jetstream.canUpdateProfileInformation?(s(),o("div",R,[l(b,{user:r.$page.props.auth.user},null,8,["user"]),l(d)])):c("",!0)],512),[[v,e.value==="AccountP"]]),p(t("div",W,[r.$page.props.jetstream.canUpdatePassword?(s(),o("div",X,[l(_,{class:"mt-10 sm:mt-0"}),l(d)])):c("",!0),r.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),o("div",Y,[l(d)])):c("",!0),x(" "+u(h.sessions),1)],512),[[v,e.value==="Security"]])])])])}}});export{xt as default};
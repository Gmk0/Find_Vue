import{K as L,E as z,d as $,G as j,o as t,e as s,a as e,t as p,F as w,j as C,f as y,n as f,b as h,w as M,u as c,z as V,m as F,x as E,X as D,y as T,S as A,A as _,P as x,Y as B,$ as N,J as R,a0 as U,g as K,L as G,r as I}from"./app-7b7754e7.js";import{_ as J}from"./MainSidebarF-5229bc8e.js";import{_ as O}from"./userInfo-4886af5f.js";const W={class:"sidebar-panel"},X={class:"flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-gray-900"},Y={class:"flex items-center justify-between w-full h-16 pl-4 pr-1"},q={class:"text-base tracking-wider text-slate-800 dark:text-navy-100"},Q=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),Z=[Q],ee={class:"h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"},te={key:0,class:"h-px mx-4 my-3 bg-slate-200 dark:bg-navy-500"},se={class:"flex flex-col flex-1 px-4 font-inter"},oe={key:0},ae=["onClick"],ne=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1),le=[ne],re={key:0},ie=["onClick"],ce={class:"flex items-center space-x-2"},de=e("div",{class:"h-1.5 w-1.5 rounded-full border border-current opacity-40"},null,-1),ue=["href"],he={__name:"SidebarPanelF",setup(S){const r=L(),d=z(()=>r.url.replace("/","").replace(/\//g,"."));console.log(d.value);const a=$([]),m=j(),g=()=>{m.toogleRight(),m.SidebarExpanded?document.body.classList.add("is-sidebar-open"):document.body.classList.remove("is-sidebar-open")},P=v=>{a.value.includes(v)?a.value=a.value.filter(i=>i!==v):a.value.push(v)},H=(v,i)=>{},l={title:"Applications",items:[{service:{title:"services",submenu:[{title:"Ajouter un service",route_name:"freelance.services.creation"},{title:"Liste service",route_name:"freelance.services"}]},commandes:{title:"commandes",submenu:[{title:"vos commandes",route_name:"freelance.commandes"}]},mission:{title:"Missions",submenu:[{title:"voir  les missions",route_name:"freelance.missions"},{title:"missions postuler",route_name:"freelance.missions"},{title:"missions en cours",route_name:"freelance.missions.accepter"}]},transaction:{title:"transaction",submenu:[{title:"vos transactions",route_name:"freelance.transactions"}]},Paiment:{title:"Paiments",submenu:[{title:"Paiments",route_name:"freelance.paiements"},{title:"Retrait",route_name:"freelance.paiements.retrait"},{title:"Releves",route_name:"freelance.paiements.releves"}]},realisation:{title:"realisations",submenu:[{title:"vos realisations",route_name:"freelance.realisations"}]},profile:{title:"profile",submenu:[{title:"Profile freelance",route_name:"freelance.profile"}]}}]};return(v,i)=>(t(),s("div",W,[e("div",X,[e("div",Y,[e("p",q,p(l.title),1),e("button",{onClick:i[0]||(i[0]=b=>g()),class:"p-0 text-blue-600 rounded-full h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"},Z)]),e("div",ee,[(t(!0),s(w,null,C(l.items,(b,n)=>(t(),s(w,null,[n>0?(t(),s("div",te)):y("",!0),e("ul",se,[(t(!0),s(w,null,C(b,(u,o)=>(t(),s(w,{key:o},[u.submenu?(t(),s("li",oe,[e("a",{onClick:k=>P(o),class:f([{"text-slate-800 font-semibold dark:text-navy-50":a.value.includes(o),"text-slate-600 dark:text-navy-200":!a.value.includes(o)},"flex items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"])},[e("span",null,p(u.title),1),(t(),s("svg",{class:f([{"rotate-90":a.value.includes(o)},"w-4 h-4 transition-transform ease-in-out text-slate-400"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},le,2))],10,ae),a.value.includes(o)?(t(),s("ul",re,[(t(!0),s(w,null,C(u.submenu,(k,Jt)=>(t(),s("li",{onClick:Ot=>H(k.route_name)},[h(c(V),{href:v.route(k.route_name),class:f(["flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4",{"text-blue-600 dark:text-accent-light font-medium":k.route_name===d.value,"text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":k.route_name!==d.value}])},{default:M(()=>[e("div",ce,[de,e("span",null,p(k.title),1)])]),_:2},1032,["href","class"])],8,ie))),256))])):y("",!0)])):(t(),s("li",{key:o},[e("a",{href:u.route_name,class:f(["flex text-xs+ py-2 tracking-wide outline-none transition-colors duration-300 ease-in-out",{"text-primary dark:text-accent-light font-medium":u.route_name===d.value,"text-slate-600  hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":u.route_name!==d.value}])},p(u.title),11,ue)]))],64))),128))])],64))),256))])])]))}};const ve={class:"header print:hidden"},_e={class:"relative flex w-full bg-white header-container dark:bg-gray-900 print:hidden"},xe={class:"flex items-center justify-between w-full"},pe={class:"h-7 w-7"},me=e("span",null,null,-1),fe=e("span",null,null,-1),ge=e("span",null,null,-1),be=[me,fe,ge],ke=e("div",null,[e("a",{href:"",class:"flex ml-2 md:hidden"},[e("img",{src:"/images/logo/find_02.png",class:"h-8 lg:mr-3",alt:"FIND"})])],-1),we={class:"-mr-1.5 flex items-center space-x-2"},ye=e("button",{class:"w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 text-red-600 !dark:text-navy-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),$e=e("div",null,[e("h1",{class:"px-2 text-lg"},"Freelance")],-1),Ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5.5 w-5.5 text-slate-500 dark:text-navy-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1),Me=[Ce],je={__name:"PartialHeaderF",setup(S){const r=j();return(d,a)=>{const m=F("NotificationComponent");return t(),s("div",null,[e("nav",ve,[e("div",_e,[e("div",xe,[e("div",pe,[e("button",{class:"menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80",onClick:a[0]||(a[0]=g=>c(r).toogleRight())},be)]),ke,e("div",we,[ye,$e,h(m),h(O),e("button",{onClick:a[1]||(a[1]=g=>c(r).tooglePanel()),class:"w-8 h-8 p-0 rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Me)])])])])])}}},Se=e("div",{class:"fixed inset-0 z-[150] bg-slate-900/60 transition-opacity duration-200"},null,-1),Pe={class:"fixed right-0 top-0 z-[151] h-full w-full sm:w-80"},He={key:0,class:"relative flex flex-col w-full h-full transition-transform duration-200 bg-white transform-gpu dark:bg-navy-750"},ze={class:"flex items-center justify-between px-4 py-2"},Be={class:"flex shrink-0 items-center space-x-1.5"},Le=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),Ve=e("span",{class:"text-xs"}," 1234 ",-1),Fe=[Le,Ve],Ee={class:"flex shrink-0 items-center space-x-1.5"},De=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"})],-1),Te=e("span",{class:"text-xs"},"Commande",-1),Ae=[De,Te],Ne={class:"flex shrink-0 items-center space-x-1.5"},Re=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Ue=e("span",{class:"text-xs"},"Activity",-1),Ke=[Re,Ue],Ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Ie=[Ge],Je={key:0,"x-transition:enter":"transition-all duration-500 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(0,1rem,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},Oe=e("div",{class:"mt-4"},null,-1),We={class:"mt-4"},Xe=e("h2",{class:"px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Dernier messages ",-1),Ye={class:"px-2 mt-4 space-y-3"},qe={class:"flex flex-col justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700"},Qe={class:"flex flex-col justify-between px-3 mb-2 px-auto"},Ze={class:"mb-1 line-clamp-2"},et=["innerHTML"],tt={class:"flex items-center justify-between"},st={class:"flex flex-col space-x-2"},ot={class:"flex items-center gap-3 mb-4"},at={class:"text-xs font-medium line-clamp-1"},nt={class:"text-xs font-medium line-clamp-1"},lt=e("div",null," Aucun message",-1),rt={class:"px-3 mt-3"},it=e("h2",{class:"text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Settings ",-1),ct={class:"flex flex-col mt-2 space-y-2"},dt={class:"inline-flex items-center space-x-2"},ut=e("span",null,"Dark Mode",-1),ht=e("label",{class:"inline-flex items-center space-x-2"},[e("input",{"x-model":"$store.global.isMonochromeModeEnabled",class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"}),e("span",null,"Monochrome Mode")],-1),vt=e("div",{class:"hidden px-3 mt-3"},[e("div",{class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},[e("div",{class:"flex items-center justify-between"},[e("p",null,[e("span",{class:"font-medium text-slate-600 dark:text-navy-100"},"35GB"),K(" of 1TB ")]),e("a",{href:"#",class:"text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"},"Upgrade")]),e("div",{class:"h-2 mt-2 progress bg-slate-150 dark:bg-navy-500"},[e("div",{class:"w-7/12 rounded-full bg-info"})])])],-1),_t=e("div",{class:"h-18"},null,-1),xt={key:1,class:"px-3 pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},pt={class:"grid grid-cols-2 gap-3"},mt={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},ft={class:"flex justify-between space-x-1"},gt={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},bt=e("svg",{xmlns:"http://www.w3.org/2000/svg","stroke-width":"1.5",class:"w-5 h-5 text-primary dark:text-accent",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),kt=e("p",{class:"mt-1 text-xs+"},"Total",-1),wt={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},yt={class:"flex justify-between"},$t={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},Ct=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-success",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})],-1),Mt=e("p",{class:"mt-1 text-xs+"},"En attente",-1),jt=e("div",{class:"h-18"},null,-1),St={class:"absolute flex justify-center w-full pointer-events-none bottom-4"},Pt={class:"pointer-events-auto mx-auto flex space-x-1 rounded-full border border-slate-150 bg-white px-4 py-0.5 shadow-lg dark:border-navy-700 dark:bg-navy-900"},Ht={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},zt=e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},null,-1),Bt=[zt],Lt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},Vt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},null,-1),Ft=[Vt],Et={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},Dt=e("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),Tt=[Dt],At={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},Nt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"},null,-1),Rt=[Nt],Ut={__name:"OtherPanel",setup(S){const r=E(),d=L(),a=D(),m=z(()=>a.lastMessageUser),g=z(()=>a.lastCommandeUser),P=T(r),H=()=>{P()};A(()=>{a.fetchLastMessage(d.props.auth.user.id),a.fetchLastCommande(d.props.auth.user.id)}),$(""),$([]);const l=$("tabHome"),v=b=>{const n=new Date(b),u=n.getHours().toString().padStart(2,"0"),o=n.getMinutes().toString().padStart(2,"0");return`${u}:${o}`},i=j();return(b,n)=>{const u=F("Photo");return _((t(),s("div",{onKeydown:n[6]||(n[6]=U(o=>c(i).tooglePanelFalse(),["window","escape"]))},[c(i).RightSidebarExpanded?(t(),s("div",{key:0,onClick:n[0]||(n[0]=o=>c(i).tooglePanelFalse())},[h(B,{"enter-class":"ease-out","enter-to-class":"opacity-100","enter-active-class":"opacity-100","leave-class":"ease-in","leave-active-class":"opacity-100","leave-to-class":"opacity-0"},{default:M(()=>[Se]),_:1})])):y("",!0),e("div",Pe,[h(B,{"enter-class":"ease-out","enter-to-class":"translate-x-0","enter-active-class":"translate-x-full","leave-class":"ease-out","leave-to-class":"translate-y-0","leave-active-class":"-translate-x-full"},{default:M(()=>[c(i).RightSidebarExpanded?(t(),s("div",He,[e("div",ze,[_(e("p",Be,Fe,512),[[x,l.value==="tabHome"]]),_(e("p",Ee,Ae,512),[[x,l.value==="tabProjects"]]),_(e("p",Ne,Ke,512),[[x,l.value==="tabActivity"]]),e("button",{onClick:n[1]||(n[1]=o=>c(i).tooglePanelFalse()),class:"w-6 h-6 p-0 -mr-1 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Ie)]),l.value==="tabHome"?(t(),s("div",Je,[Oe,e("div",We,[Xe,e("div",Ye,[(t(!0),s(w,null,C(m.value.messages,o=>(t(),s("div",qe,[e("div",Qe,[e("div",Ze,[h(c(V),{href:b.route("user.chat",o.conversation_id),class:"font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"},{default:M(()=>[e("span",{innerHTML:o.body},null,8,et)]),_:2},1032,["href"])]),e("div",tt,[e("div",st,[e("div",ot,[h(u,{user:o.senderUser,taille:"12"},null,8,["user"]),e("p",at,p(o.senderUser.name),1)]),e("div",null,[e("p",nt,p(v(o.created_at)),1)])])])])]))),256)),lt])]),e("div",rt,[it,e("div",ct,[e("label",dt,[_(e("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>N(r)?r.value=o:null),onClick:n[3]||(n[3]=o=>H()),class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"},null,512),[[R,c(r)]]),ut]),ht])]),vt,_t])):y("",!0),l.value==="tabProjects"?(t(),s("div",xt,[e("div",pt,[e("div",mt,[e("div",ft,[e("p",gt,p(g.value.total),1),bt]),kt]),e("div",wt,[e("div",yt,[e("p",$t,p(g.value.totalEnAttente),1),Ct]),Mt])]),jt])):y("",!0),e("div",St,[e("div",Pt,[e("button",{onClick:n[4]||(n[4]=o=>l.value="tabHome"),class:f([l.value==="tabHome"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[_((t(),s("svg",Ht,Bt,512)),[[x,l.value==="tabHome"]]),_((t(),s("svg",Lt,Ft,512)),[[x,l.value!=="tabHome"]])],2),e("button",{onClick:n[5]||(n[5]=o=>l.value="tabProjects"),class:f([l.value==="tabProjects"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[_((t(),s("svg",Et,Tt,512)),[[x,l.value==="tabProjects"]]),_((t(),s("svg",At,Rt,512)),[[x,l.value!=="tabProjects"]])],2)])])])):y("",!0)]),_:1})])],544)),[[x,c(i).RightSidebarExpanded]])}}},Kt={id:"root",class:"flex min-h-100vh grow bg-slate-50 dark:bg-gray-950"},Gt={class:"sidebar"},It={class:"main-content pt-4 w-full px-[var(--margin-x)] pb-8"},qt={__name:"FreelanceLayout",setup(S){G();const r=j();function d(){window.innerWidth<768&&r.ToogleFalse()}return d(),(a,m)=>(t(),s("div",{class:f(["",{"is-sidebar-open":c(r).SidebarExpanded}])},[e("div",Kt,[e("div",Gt,[h(J),h(he)]),h(je),h(Ut),e("div",It,[I(a.$slots,"default")])])],2))}};export{qt as _};
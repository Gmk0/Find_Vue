import{d as y,G as L,m as z,o as t,e as s,a as e,t as f,F as k,j,f as w,n as m,b as d,w as S,u,x as D,K as T,X as N,E as B,y as E,S as V,A as v,P as x,Y as H,z as U,$ as F,J as A,a0 as R,g as I,l as K,q as G,L as Y,aj as q,al as J,r as O}from"./app-7b7754e7.js";import{M as W}from"./MainSidebarUser-35c99ee1.js";import{_ as X}from"./userInfo-4886af5f.js";/* empty css                                                          */const Q={class:"sidebar-panel"},Z={class:"flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-gray-900"},ee={class:"flex items-center justify-between w-full h-16 pl-4 pr-1"},te={class:"text-base tracking-wider text-slate-800 dark:text-navy-100"},se=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),oe=[se],ae={class:"h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"},ne={key:0,class:"h-px mx-4 my-3 bg-slate-200 dark:bg-navy-500"},le={class:"flex flex-col flex-1 px-4 font-inter"},re={key:0},ie=["onClick"],ce=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1),de=[ce],ue={key:0},he=["onClick"],ve={class:"flex items-center space-x-2"},_e=e("div",{class:"h-1.5 w-1.5 rounded-full border border-current opacity-40"},null,-1),xe=["href"],fe={__name:"SidebarPanelUser",setup($){const r=y(""),l=y([]),i=L(),p=()=>{i.toogleRight(),i.SidebarExpanded?document.body.classList.add("is-sidebar-open"):document.body.classList.remove("is-sidebar-open")},_=a=>{l.value.includes(a)?(l.value=l.value.filter(c=>c!==a),console.log(l.value)):l.value.push(a)},C=(a,c)=>{},M={title:"Racourci",items:[{service:{title:"Service",submenu:[{title:"Trouver un service",route_name:"categories"}]},freelance:{title:"freelance",submenu:[{title:"Trouver un freelance",route_name:"find_freelance"},{title:"Devenire freelance",route_name:"find_freelance"}]},parametres:{title:"Profile",submenu:[{title:"Modifier le profile",route_name:"profile.show"},{title:"Afillier un membre",route_name:"profile.show"}]}}]};return(a,c)=>{const P=z("Link");return t(),s("div",Q,[e("div",Z,[e("div",ee,[e("p",te,f(M.title),1),e("button",{onClick:c[0]||(c[0]=g=>p()),class:"p-0 text-blue-600 rounded-full h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"},oe)]),e("div",ae,[(t(!0),s(k,null,j(M.items,(g,n)=>(t(),s(k,null,[n>0?(t(),s("div",ne)):w("",!0),e("ul",le,[(t(!0),s(k,null,j(g,(h,o)=>(t(),s(k,{key:o},[h.submenu?(t(),s("li",re,[e("a",{onClick:b=>_(o),class:m([{"text-slate-800 font-semibold dark:text-navy-50":l.value.includes(o),"text-slate-600 dark:text-navy-200":!l.value.includes(o)},"flex items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"])},[e("span",null,f(h.title),1),(t(),s("svg",{class:m([{"rotate-90":l.value.includes(o)},"w-4 h-4 transition-transform ease-in-out text-slate-400"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},de,2))],10,ie),l.value.includes(o)?(t(),s("ul",ue,[(t(!0),s(k,null,j(h.submenu,(b,es)=>(t(),s("li",{onClick:ts=>C(b.route_name)},[d(P,{href:a.route(b.route_name),class:m(["flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4",{"text-blue-600 dark:text-accent-light font-medium":b.route_name===r.value,"text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":b.route_name!==r.value}])},{default:S(()=>[e("div",ve,[_e,e("span",null,f(b.title),1)])]),_:2},1032,["href","class"])],8,he))),256))])):w("",!0)])):(t(),s("li",{key:o},[e("a",{href:h.route_name,class:m(["flex text-xs+ py-2 tracking-wide outline-none transition-colors duration-300 ease-in-out",{"text-primary dark:text-accent-light font-medium":h.route_name===r.value,"text-slate-600  hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":h.route_name!==r.value}])},f(h.title),11,xe)]))],64))),128))])],64))),256))])])])}}},pe={class:"header print:hidden"},me={class:"relative flex w-full bg-white header-container dark:bg-gray-900 print:hidden"},ge={class:"flex items-center justify-between w-full"},be={class:"h-7 w-7"},ke=e("span",null,null,-1),we=e("span",null,null,-1),ye=e("span",null,null,-1),$e=[ke,we,ye],Ce=e("div",null,[e("a",{href:"",class:"flex ml-2 md:hidden"},[e("img",{src:"/images/logo/find_02.png",class:"h-8 lg:mr-3",alt:"FIND"})])],-1),Me={class:"-mr-1.5 flex items-center space-x-2"},je=e("button",{class:"w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 text-red-600 !dark:text-navy-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),Se=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5.5 w-5.5 text-slate-500 dark:text-navy-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1),Le=[Se],Pe={__name:"PartialHeaderUser",setup($){const r=L();return(l,i)=>{const p=z("NotificationComponent");return t(),s("div",null,[e("nav",pe,[e("div",me,[e("div",ge,[e("div",be,[e("button",{class:"menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80",onClick:i[0]||(i[0]=_=>u(r).toogleRight())},$e)]),Ce,e("div",Me,[je,d(p),d(X),e("button",{onClick:i[1]||(i[1]=_=>u(r).tooglePanel()),class:"w-8 h-8 p-0 rounded-full cursor-pointer hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Le)])])])])])}}},ze=e("div",{class:"fixed inset-0 z-[150] bg-slate-900/60 transition-opacity duration-200"},null,-1),Be={class:"fixed right-0 top-0 z-[151] h-full w-full sm:w-80"},He={key:0,class:"relative flex flex-col w-full h-full transition-transform duration-200 bg-white transform-gpu dark:bg-navy-750"},Ve={class:"flex items-center justify-between px-4 py-2"},De={class:"flex shrink-0 items-center space-x-1.5"},Te=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),Ne=e("span",{class:"text-xs"}," 1234 ",-1),Ee=[Te,Ne],Ue={class:"flex shrink-0 items-center space-x-1.5"},Fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"})],-1),Ae=e("span",{class:"text-xs"},"Commande",-1),Re=[Fe,Ae],Ie={class:"flex shrink-0 items-center space-x-1.5"},Ke=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Ge=e("span",{class:"text-xs"},"Activity",-1),Ye=[Ke,Ge],qe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Je=[qe],Oe={key:0,"x-transition:enter":"transition-all duration-500 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(0,1rem,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},We=e("div",{class:"mt-4"},null,-1),Xe={class:"mt-4"},Qe=e("h2",{class:"px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Dernier message ",-1),Ze={class:"px-2 mt-4 space-y-3"},et={class:"flex flex-col justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700"},tt={class:"flex flex-col justify-between px-3 mb-2 px-auto"},st={class:"mb-1 line-clamp-2"},ot=["innerHTML"],at={class:"flex items-center justify-between"},nt={class:"flex flex-col space-x-2"},lt={class:"flex items-center gap-3 mb-4"},rt={class:"text-xs font-medium line-clamp-1"},it={class:"text-xs font-medium line-clamp-1"},ct=e("div",null," Aucun message",-1),dt={class:"px-3 mt-3"},ut=e("h2",{class:"text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Settings ",-1),ht={class:"flex flex-col mt-2 space-y-2"},vt={class:"inline-flex items-center space-x-2"},_t=e("span",null,"Dark Mode",-1),xt=e("label",{class:"inline-flex items-center space-x-2"},[e("input",{"x-model":"$store.global.isMonochromeModeEnabled",class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"}),e("span",null,"Monochrome Mode")],-1),ft=e("div",{class:"hidden px-3 mt-3"},[e("div",{class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},[e("div",{class:"flex items-center justify-between"},[e("p",null,[e("span",{class:"font-medium text-slate-600 dark:text-navy-100"},"35GB"),I(" of 1TB ")]),e("a",{href:"#",class:"text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"},"Upgrade")]),e("div",{class:"h-2 mt-2 progress bg-slate-150 dark:bg-navy-500"},[e("div",{class:"w-7/12 rounded-full bg-info"})])])],-1),pt=e("div",{class:"h-18"},null,-1),mt={key:1,class:"px-3 pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},gt={class:"grid grid-cols-2 gap-3"},bt={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},kt={class:"flex justify-between space-x-1"},wt={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},yt=e("svg",{xmlns:"http://www.w3.org/2000/svg","stroke-width":"1.5",class:"w-5 h-5 text-primary dark:text-accent",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),$t=e("p",{class:"mt-1 text-xs+"},"Total",-1),Ct={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},Mt={class:"flex justify-between"},jt={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},St=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-success",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})],-1),Lt=e("p",{class:"mt-1 text-xs+"},"En attente",-1),Pt=e("div",{class:"h-18"},null,-1),zt={class:"absolute flex justify-center w-full pointer-events-none bottom-4"},Bt={class:"pointer-events-auto mx-auto flex space-x-1 rounded-full border border-slate-150 bg-white px-4 py-0.5 shadow-lg dark:border-navy-700 dark:bg-navy-900"},Ht={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},Vt=e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},null,-1),Dt=[Vt],Tt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},Nt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},null,-1),Et=[Nt],Ut={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},Ft=e("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),At=[Ft],Rt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},It=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"},null,-1),Kt=[It],Gt={__name:"OtherPanelUser",setup($){const r=D(),l=T(),i=N(),p=B(()=>i.lastMessageUser),_=B(()=>i.lastCommandeUser),C=E(r),M=()=>{C()};V(()=>{i.fetchLastMessage(l.props.auth.user.id),i.fetchLastCommande(l.props.auth.user.id)}),y(""),y([]);const a=y("tabHome"),c=L(),P=g=>{const n=new Date(g);return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`};return(g,n)=>{const h=z("Photo");return v((t(),s("div",{onKeydown:n[6]||(n[6]=R(o=>u(c).tooglePanelFalse(),["window","escape"]))},[u(c).RightSidebarExpanded?(t(),s("div",{key:0,onClick:n[0]||(n[0]=o=>u(c).tooglePanelFalse())},[d(H,{"enter-class":"ease-out","enter-to-class":"opacity-100","enter-active-class":"opacity-100","leave-class":"ease-in","leave-active-class":"opacity-100","leave-to-class":"opacity-0"},{default:S(()=>[ze]),_:1})])):w("",!0),e("div",Be,[d(H,{"enter-class":"ease-out","enter-to-class":"translate-x-0","enter-active-class":"translate-x-full","leave-class":"ease-out","leave-to-class":"translate-y-0","leave-active-class":"-translate-x-full"},{default:S(()=>[u(c).RightSidebarExpanded?(t(),s("div",He,[e("div",Ve,[v(e("p",De,Ee,512),[[x,a.value==="tabHome"]]),v(e("p",Ue,Re,512),[[x,a.value==="tabProjects"]]),v(e("p",Ie,Ye,512),[[x,a.value==="tabActivity"]]),e("button",{onClick:n[1]||(n[1]=o=>u(c).tooglePanelFalse()),class:"w-6 h-6 p-0 -mr-1 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Je)]),a.value==="tabHome"?(t(),s("div",Oe,[We,e("div",Xe,[Qe,e("div",Ze,[(t(!0),s(k,null,j(p.value.messages,o=>(t(),s("div",et,[e("div",tt,[e("div",st,[d(u(U),{href:g.route("user.chat",o.conversation_id),class:"font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"},{default:S(()=>[e("span",{innerHTML:o.body},null,8,ot)]),_:2},1032,["href"])]),e("div",at,[e("div",nt,[e("div",lt,[d(h,{user:o.senderUser,taille:"12"},null,8,["user"]),e("p",rt,f(o.senderUser.name),1)]),e("div",null,[e("p",it,f(P(o.created_at)),1)])])])])]))),256)),ct])]),e("div",dt,[ut,e("div",ht,[e("label",vt,[v(e("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>F(r)?r.value=o:null),onClick:n[3]||(n[3]=o=>M()),class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"},null,512),[[A,u(r)]]),_t]),xt])]),ft,pt])):w("",!0),a.value==="tabProjects"?(t(),s("div",mt,[e("div",gt,[e("div",bt,[e("div",kt,[e("p",wt,f(_.value.total),1),yt]),$t]),e("div",Ct,[e("div",Mt,[e("p",jt,f(_.value.totalEnAttente),1),St]),Lt])]),Pt])):w("",!0),e("div",zt,[e("div",Bt,[e("button",{onClick:n[4]||(n[4]=o=>a.value="tabHome"),class:m([a.value==="tabHome"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[v((t(),s("svg",Ht,Dt,512)),[[x,a.value==="tabHome"]]),v((t(),s("svg",Tt,Et,512)),[[x,a.value!=="tabHome"]])],2),e("button",{onClick:n[5]||(n[5]=o=>a.value="tabProjects"),class:m([a.value==="tabProjects"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[v((t(),s("svg",Ut,At,512)),[[x,a.value==="tabProjects"]]),v((t(),s("svg",Rt,Kt,512)),[[x,a.value!=="tabProjects"]])],2)])])])):w("",!0)]),_:1})])],544)),[[x,u(c).RightSidebarExpanded]])}}},Yt={},qt=G('<footer class="px-4 py-6 md:flex md:items-center md:justify-between 2xl:px-0 md:py-10"><p class="mb-4 text-sm text-center text-gray-500 md:mb-0"><a href="" class="hover:underline" target="_blank">FIND</a>. All rights reserved. </p><ul class="flex flex-wrap justify-center s-center"><li><a href="{{url(&#39;/terms-of-service&#39;)}}" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms</a></li><li><a href="{{url(&#39;/privacy-policy&#39;)}}" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Policy</a></li><li><a href="{{url(&#39;/contact&#39;)}}" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a></li></ul></footer>',1),Jt=[qt];function Ot($,r){return t(),s("div",null,Jt)}const Wt=K(Yt,[["render",Ot]]),Xt={id:"root",class:"flex min-h-100vh grow bg-slate-50 dark:bg-gray-950"},Qt={class:"sidebar"},Zt={class:"main-content pt-4 w-full px-[var(--margin-x)] pb-8"},ls={__name:"UserLayout",setup($){const r=Y();q();const l=L(),i=J();V(()=>{r.fetchCategories(),i.fetchLastNotification()});function p(){window.innerWidth<768&&l.ToogleFalse()}return p(),(_,C)=>(t(),s("div",{class:m(["",{"is-sidebar-open":u(l).SidebarExpanded}])},[e("div",Xt,[e("div",Qt,[d(W),d(fe)]),d(Pe),d(Gt),e("div",Zt,[O(_.$slots,"default"),d(Wt)])])],2))}};export{ls as _};

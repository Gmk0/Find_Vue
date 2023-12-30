import{d as $,D as L,m as P,o as t,e as s,a as e,t as f,F as w,j,f as y,n as m,b as c,w as S,u,x as V,Q as N,W as T,B as z,y as E,R as D,G as v,L as x,X as H,z as U,Y as F,I as R,$ as A,g as I,l as G,q as K,J as W,aj as Y,ai as q,r as J}from"./app-5460a236.js";import{M as O}from"./MainSidebarUser-2c41e0d9.js";import{_ as Q}from"./userInfo-df328ec6.js";/* empty css                                                          */const X={class:"sidebar-panel"},Z={class:"flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-gray-900"},ee={class:"flex items-center justify-between w-full h-16 pl-4 pr-1"},te={class:"text-base tracking-wider text-slate-800 dark:text-navy-100"},se=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),oe=[se],ae={class:"h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"},ne={key:0,class:"h-px mx-4 my-3 bg-slate-200 dark:bg-navy-500"},le={class:"flex flex-col flex-1 px-4 font-inter"},re={key:0},ie=["onClick"],ce=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1),de=[ce],ue={key:0},he=["onClick"],ve={class:"flex items-center space-x-2"},_e=e("div",{class:"h-1.5 w-1.5 rounded-full border border-current opacity-40"},null,-1),xe=["href"],fe={__name:"SidebarPanelUser",setup(C){const r=$(""),l=$([]),i=L(),p=()=>{i.toogleRight(),i.SidebarExpanded?document.body.classList.add("is-sidebar-open"):document.body.classList.remove("is-sidebar-open")},_=a=>{l.value.includes(a)?(l.value=l.value.filter(d=>d!==a),console.log(l.value)):l.value.push(a)},M=(a,d)=>{},g={title:"Racourci",items:[{service:{title:"Service",submenu:[{title:"Trouver un service",route_name:"categories"}]},freelance:{title:"freelance",submenu:[{title:"Trouver un freelance",route_name:"find_freelance"},{title:"Devenire freelance",route_name:"find_freelance"}]},parametres:{title:"Profile",submenu:[{title:"Modifier le profile",route_name:"profile.show"},{title:"Afillier un membre",route_name:"profile.show"}]}}]};return(a,d)=>{const B=P("Link");return t(),s("div",X,[e("div",Z,[e("div",ee,[e("p",te,f(g.title),1),e("button",{onClick:d[0]||(d[0]=b=>p()),class:"p-0 text-blue-600 rounded-full h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"},oe)]),e("div",ae,[(t(!0),s(w,null,j(g.items,(b,n)=>(t(),s(w,null,[n>0?(t(),s("div",ne)):y("",!0),e("ul",le,[(t(!0),s(w,null,j(b,(h,o)=>(t(),s(w,{key:o},[h.submenu?(t(),s("li",re,[e("a",{onClick:k=>_(o),class:m([{"text-slate-800 font-semibold dark:text-navy-50":l.value.includes(o),"text-slate-600 dark:text-navy-200":!l.value.includes(o)},"flex items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"])},[e("span",null,f(h.title),1),(t(),s("svg",{class:m([{"rotate-90":l.value.includes(o)},"w-4 h-4 transition-transform ease-in-out text-slate-400"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},de,2))],10,ie),l.value.includes(o)?(t(),s("ul",ue,[(t(!0),s(w,null,j(h.submenu,(k,es)=>(t(),s("li",{onClick:ts=>M(k.route_name)},[c(B,{href:a.route(k.route_name),class:m(["flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4",{"text-blue-600 dark:text-accent-light font-medium":k.route_name===r.value,"text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":k.route_name!==r.value}])},{default:S(()=>[e("div",ve,[_e,e("span",null,f(k.title),1)])]),_:2},1032,["href","class"])],8,he))),256))])):y("",!0)])):(t(),s("li",{key:o},[e("a",{href:h.route_name,class:m(["flex text-xs+ py-2 tracking-wide outline-none transition-colors duration-300 ease-in-out",{"text-primary dark:text-accent-light font-medium":h.route_name===r.value,"text-slate-600  hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":h.route_name!==r.value}])},f(h.title),11,xe)]))],64))),128))])],64))),256))])])])}}},pe={class:"header print:hidden"},me={class:"relative flex w-full bg-white header-container dark:bg-gray-900 print:hidden"},ge={class:"flex items-center justify-between w-full"},be={class:"h-7 w-7"},ke=e("span",null,null,-1),we=e("span",null,null,-1),ye=e("span",null,null,-1),$e=[ke,we,ye],Ce=e("div",null,[e("a",{href:"",class:"flex ml-2 md:hidden"},[e("img",{src:"/images/logo/find_02.png",class:"h-8 lg:mr-3",alt:"FIND"})])],-1),Me={class:"-mr-1.5 flex items-center space-x-2"},je=e("button",{class:"w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 text-red-600 !dark:text-navy-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),Se=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5.5 w-5.5 text-slate-500 dark:text-navy-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1),Le=[Se],Pe={__name:"PartialHeaderUser",setup(C){const r=L();return(l,i)=>{const p=P("NotificationComponent");return t(),s("div",null,[e("nav",pe,[e("div",me,[e("div",ge,[e("div",be,[e("button",{class:"menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80",onClick:i[0]||(i[0]=_=>u(r).toogleRight())},$e)]),Ce,e("div",Me,[je,c(p),c(Q),e("button",{onClick:i[1]||(i[1]=_=>u(r).tooglePanel()),class:"w-8 h-8 p-0 rounded-full cursor-pointer hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Le)])])])])])}}},Be=e("div",{class:"fixed inset-0 z-[150] bg-slate-900/60 transition-opacity duration-200"},null,-1),ze={class:"fixed right-0 top-0 z-[151] h-full w-full sm:w-80"},He={key:0,class:"relative flex flex-col w-full h-full transition-transform duration-200 bg-white transform-gpu dark:bg-navy-750"},De={class:"flex items-center justify-between px-4 py-2"},Ve={class:"flex shrink-0 items-center space-x-1.5"},Ne=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),Te=e("span",{class:"text-xs"}," 1234 ",-1),Ee=[Ne,Te],Ue={class:"flex shrink-0 items-center space-x-1.5"},Fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"})],-1),Re=e("span",{class:"text-xs"},"Commande",-1),Ae=[Fe,Re],Ie={class:"flex shrink-0 items-center space-x-1.5"},Ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Ke=e("span",{class:"text-xs"},"Activity",-1),We=[Ge,Ke],Ye=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),qe=[Ye],Je={key:0,"x-transition:enter":"transition-all duration-500 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(0,1rem,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},Oe=e("div",{class:"mt-4"},null,-1),Qe={class:"mt-4"},Xe=e("h2",{class:"px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Dernier message ",-1),Ze={class:"px-2 mt-4 space-y-3"},et={class:"flex flex-col justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700"},tt={class:"flex flex-col justify-between px-3 mb-2 px-auto"},st={class:"mb-1 line-clamp-2"},ot=["innerHTML"],at={class:"flex items-center justify-between"},nt={class:"flex flex-col space-x-2"},lt={class:"flex items-center gap-3 mb-4"},rt={class:"text-xs font-medium line-clamp-1"},it={class:"text-xs font-medium line-clamp-1"},ct=e("div",null," Aucun message",-1),dt={class:"px-3 mt-3"},ut=e("h2",{class:"text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Settings ",-1),ht={class:"flex flex-col mt-2 space-y-2"},vt={class:"inline-flex items-center space-x-2"},_t=e("span",null,"Dark Mode",-1),xt=e("label",{class:"inline-flex items-center space-x-2"},[e("input",{"x-model":"$store.global.isMonochromeModeEnabled",class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"}),e("span",null,"Monochrome Mode")],-1),ft=e("div",{class:"hidden px-3 mt-3"},[e("div",{class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},[e("div",{class:"flex items-center justify-between"},[e("p",null,[e("span",{class:"font-medium text-slate-600 dark:text-navy-100"},"35GB"),I(" of 1TB ")]),e("a",{href:"#",class:"text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"},"Upgrade")]),e("div",{class:"h-2 mt-2 progress bg-slate-150 dark:bg-navy-500"},[e("div",{class:"w-7/12 rounded-full bg-info"})])])],-1),pt=e("div",{class:"h-18"},null,-1),mt={key:1,class:"px-3 pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},gt={class:"grid grid-cols-2 gap-3"},bt={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},kt={class:"flex justify-between space-x-1"},wt={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},yt=e("svg",{xmlns:"http://www.w3.org/2000/svg","stroke-width":"1.5",class:"w-5 h-5 text-primary dark:text-accent",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),$t=e("p",{class:"mt-1 text-xs+"},"Total",-1),Ct={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},Mt={class:"flex justify-between"},jt={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},St=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-success",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})],-1),Lt=e("p",{class:"mt-1 text-xs+"},"En attente",-1),Pt=e("div",{class:"h-18"},null,-1),Bt={class:"absolute flex justify-center w-full pointer-events-none bottom-4"},zt={class:"pointer-events-auto mx-auto flex space-x-1 rounded-full border border-slate-150 bg-white px-4 py-0.5 shadow-lg dark:border-navy-700 dark:bg-navy-900"},Ht={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},Dt=e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},null,-1),Vt=[Dt],Nt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},Tt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},null,-1),Et=[Tt],Ut={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},Ft=e("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),Rt=[Ft],At={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},It=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"},null,-1),Gt=[It],Kt={__name:"OtherPanelUser",setup(C){const r=V(),l=N(),i=T(),p=z(()=>i.lastMessageUser),_=z(()=>i.lastCommandeUser),M=E(r),g=()=>{M()};D(()=>{i.fetchLastMessage(l.props.auth.user.id),i.fetchLastCommande(l.props.auth.user.id)}),$(""),$([]);const a=$("tabHome"),d=L(),B=b=>{const n=new Date(b);return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`};return(b,n)=>{const h=P("Photo");return v((t(),s("div",{onKeydown:n[6]||(n[6]=A(o=>u(d).tooglePanelFalse(),["window","escape"]))},[u(d).RightSidebarExpanded?(t(),s("div",{key:0,onClick:n[0]||(n[0]=o=>u(d).tooglePanelFalse())},[c(H,{"enter-class":"ease-out","enter-to-class":"opacity-100","enter-active-class":"opacity-100","leave-class":"ease-in","leave-active-class":"opacity-100","leave-to-class":"opacity-0"},{default:S(()=>[Be]),_:1})])):y("",!0),e("div",ze,[c(H,{"enter-class":"ease-out","enter-to-class":"translate-x-0","enter-active-class":"translate-x-full","leave-class":"ease-out","leave-to-class":"translate-y-0","leave-active-class":"-translate-x-full"},{default:S(()=>[u(d).RightSidebarExpanded?(t(),s("div",He,[e("div",De,[v(e("p",Ve,Ee,512),[[x,a.value==="tabHome"]]),v(e("p",Ue,Ae,512),[[x,a.value==="tabProjects"]]),v(e("p",Ie,We,512),[[x,a.value==="tabActivity"]]),e("button",{onClick:n[1]||(n[1]=o=>u(d).tooglePanelFalse()),class:"w-6 h-6 p-0 -mr-1 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},qe)]),a.value==="tabHome"?(t(),s("div",Je,[Oe,e("div",Qe,[Xe,e("div",Ze,[(t(!0),s(w,null,j(p.value.messages,o=>(t(),s("div",et,[e("div",tt,[e("div",st,[c(u(U),{href:b.route("user.chat",o.conversation_id),class:"font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"},{default:S(()=>[e("span",{innerHTML:o.body},null,8,ot)]),_:2},1032,["href"])]),e("div",at,[e("div",nt,[e("div",lt,[c(h,{user:o.senderUser,taille:"12"},null,8,["user"]),e("p",rt,f(o.senderUser.name),1)]),e("div",null,[e("p",it,f(B(o.created_at)),1)])])])])]))),256)),ct])]),e("div",dt,[ut,e("div",ht,[e("label",vt,[v(e("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>F(r)?r.value=o:null),onClick:n[3]||(n[3]=o=>g()),class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"},null,512),[[R,u(r)]]),_t]),xt])]),ft,pt])):y("",!0),a.value==="tabProjects"?(t(),s("div",mt,[e("div",gt,[e("div",bt,[e("div",kt,[e("p",wt,f(_.value.total),1),yt]),$t]),e("div",Ct,[e("div",Mt,[e("p",jt,f(_.value.totalEnAttente),1),St]),Lt])]),Pt])):y("",!0),e("div",Bt,[e("div",zt,[e("button",{onClick:n[4]||(n[4]=o=>a.value="tabHome"),class:m([a.value==="tabHome"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[v((t(),s("svg",Ht,Vt,512)),[[x,a.value==="tabHome"]]),v((t(),s("svg",Nt,Et,512)),[[x,a.value!=="tabHome"]])],2),e("button",{onClick:n[5]||(n[5]=o=>a.value="tabProjects"),class:m([a.value==="tabProjects"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[v((t(),s("svg",Ut,Rt,512)),[[x,a.value==="tabProjects"]]),v((t(),s("svg",At,Gt,512)),[[x,a.value!=="tabProjects"]])],2)])])])):y("",!0)]),_:1})])],544)),[[x,u(d).RightSidebarExpanded]])}}},Wt={},Yt=K('<footer class="px-4 py-6 md:flex md:items-center md:justify-between 2xl:px-0 md:py-10"><p class="mb-4 text-sm text-center text-gray-500 md:mb-0"><a href="" class="hover:underline" target="_blank">FIND</a>. All rights reserved. </p><ul class="flex flex-wrap justify-center s-center"><li><a href="{{url(&#39;/terms-of-service&#39;)}}" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms</a></li><li><a href="{{url(&#39;/privacy-policy&#39;)}}" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Policy</a></li><li><a href="{{url(&#39;/contact&#39;)}}" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a></li></ul></footer>',1),qt=[Yt];function Jt(C,r){return t(),s("div",null,qt)}const Ot=G(Wt,[["render",Jt]]),Qt={id:"root",class:"flex min-h-100vh grow bg-slate-50 dark:bg-gray-950"},Xt={class:"sidebar"},Zt={class:"main-content pt-4 w-full px-[var(--margin-x)] pb-8"},ls={__name:"UserLayout",setup(C){const r=W();Y();const l=L(),i=q();D(()=>{r.fetchCategories(),i.fetchLastNotification(),i.getNotificationParametres()});function p(){window.innerWidth<768&&l.ToogleFalse()}return p(),(_,M)=>{const g=P("Error");return t(),s("div",{class:m(["",{"is-sidebar-open":u(l).SidebarExpanded}])},[c(g),e("div",Qt,[e("div",Xt,[c(O),c(fe)]),c(Pe),c(Kt),e("div",Zt,[J(_.$slots,"default"),c(Ot)])])],2)}}};export{ls as _};
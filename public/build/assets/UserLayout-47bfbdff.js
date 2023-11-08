import{d as w,z as j,A as L,o as t,e as s,a as e,t as v,F as b,j as C,f as k,n as m,b as d,w as M,u,V as N,K as T,a1 as U,y as V,W as A,Q as E,C as h,E as _,P as H,q as D,g as B,a2 as F,G as R,N as I,m as K,p as G,I as W,r as q}from"./app-211ec483.js";import{M as O}from"./MainSidebarUser-8a21f6c9.js";import{_ as Q}from"./userInfo-a5293e16.js";/* empty css                                                          */const J={class:"sidebar-panel"},X={class:"flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-gray-900"},Y={class:"flex items-center justify-between w-full h-16 pl-4 pr-1"},Z={class:"text-base tracking-wider text-slate-800 dark:text-navy-100"},ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),te=[ee],se={class:"h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"},oe={key:0,class:"h-px mx-4 my-3 bg-slate-200 dark:bg-navy-500"},ae={class:"flex flex-col flex-1 px-4 font-inter"},ne={key:0},le=["onClick"],re=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1),ie=[re],ce={key:0},de=["onClick"],ue={class:"flex items-center space-x-2"},he=e("div",{class:"h-1.5 w-1.5 rounded-full border border-current opacity-40"},null,-1),ve=["href"],_e={__name:"SidebarPanelUser",setup(y){const r=w(""),l=w([]),i=j(),x=()=>{i.toogleRight(),i.SidebarExpanded?document.body.classList.add("is-sidebar-open"):document.body.classList.remove("is-sidebar-open")},p=a=>{l.value.includes(a)?(l.value=l.value.filter(c=>c!==a),console.log(l.value)):l.value.push(a)},S=(a,c)=>{},$={title:"Racourci",items:[{service:{title:"Service",submenu:[{title:"Trouver un service",route_name:"categories"}]},freelance:{title:"freelance",submenu:[{title:"Trouver un freelance",route_name:"find_freelance"},{title:"Devenire freelance",route_name:"find_freelance"}]},parametres:{title:"Profile",submenu:[{title:"Modifier le profile",route_name:"profile.show"},{title:"Afillier un membre",route_name:"profile.show"}]},Aide:{title:"Aide",submenu:[{title:"Envoyer un feedback",route_name:"user.feedback"},{title:"Signaler un comportement",route_name:"user.signalement"},{title:"Contact",route_name:"user.aide"}]}}]};return(a,c)=>{const P=L("Link");return t(),s("div",J,[e("div",X,[e("div",Y,[e("p",Z,v($.title),1),e("button",{onClick:c[0]||(c[0]=n=>x()),class:"p-0 text-blue-600 rounded-full h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"},te)]),e("div",se,[(t(!0),s(b,null,C($.items,(n,z)=>(t(),s(b,null,[z>0?(t(),s("div",oe)):k("",!0),e("ul",ae,[(t(!0),s(b,null,C(n,(o,f)=>(t(),s(b,{key:f},[o.submenu?(t(),s("li",ne,[e("a",{onClick:g=>p(f),class:m([{"text-slate-800 font-semibold dark:text-navy-50":l.value.includes(f),"text-slate-600 dark:text-navy-200":!l.value.includes(f)},"flex items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"])},[e("span",null,v(o.title),1),(t(),s("svg",{class:m([{"rotate-90":l.value.includes(f)},"w-4 h-4 transition-transform ease-in-out text-slate-400"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ie,2))],10,le),l.value.includes(f)?(t(),s("ul",ce,[(t(!0),s(b,null,C(o.submenu,(g,Xt)=>(t(),s("li",{onClick:Yt=>S(g.route_name)},[d(P,{href:a.route(g.route_name),class:m(["flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4",{"text-blue-600 dark:text-accent-light font-medium":g.route_name===r.value,"text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":g.route_name!==r.value}])},{default:M(()=>[e("div",ue,[he,e("span",null,v(g.title),1)])]),_:2},1032,["href","class"])],8,de))),256))])):k("",!0)])):(t(),s("li",{key:f},[e("a",{href:o.route_name,class:m(["flex text-xs+ py-2 tracking-wide outline-none transition-colors duration-300 ease-in-out",{"text-primary dark:text-accent-light font-medium":o.route_name===r.value,"text-slate-600  hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":o.route_name!==r.value}])},v(o.title),11,ve)]))],64))),128))])],64))),256))])])])}}},xe={class:"header print:hidden"},pe={class:"relative flex w-full bg-white header-container dark:bg-gray-900 print:hidden"},fe={class:"flex items-center justify-between w-full"},me={class:"h-7 w-7"},ge=e("span",null,null,-1),be=e("span",null,null,-1),ke=e("span",null,null,-1),we=[ge,be,ke],ye=e("div",null,[e("a",{href:"",class:"flex ml-2 md:hidden"},[e("img",{src:"/images/logo/find_02.png",class:"h-8 lg:mr-3",alt:"FIND"})])],-1),$e={class:"-mr-1.5 flex items-center space-x-2"},Ce=e("button",{class:"w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 text-red-600 !dark:text-navy-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),Me=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5.5 w-5.5 text-slate-500 dark:text-navy-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1),je=[Me],Se={__name:"PartialHeaderUser",setup(y){const r=j();return(l,i)=>{const x=L("NotificationComponent");return t(),s("div",null,[e("nav",xe,[e("div",pe,[e("div",fe,[e("div",me,[e("button",{class:"menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80",onClick:i[0]||(i[0]=p=>u(r).toogleRight())},we)]),ye,e("div",$e,[Ce,d(x),d(Q),e("button",{onClick:i[1]||(i[1]=p=>u(r).tooglePanel()),class:"w-8 h-8 p-0 rounded-full cursor-pointer hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},je)])])])])])}}},Pe=e("div",{class:"fixed inset-0 z-[150] bg-slate-900/60 transition-opacity duration-200"},null,-1),ze={class:"fixed right-0 top-0 z-[151] h-full w-full sm:w-80"},Be={key:0,class:"relative flex flex-col w-full h-full transition-transform duration-200 bg-white transform-gpu dark:bg-navy-750"},Le={class:"flex items-center justify-between px-4 py-2"},Ve={class:"flex shrink-0 items-center space-x-1.5"},He=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),Ee=e("span",{class:"text-xs"}," 1234 ",-1),Ne=[He,Ee],Te={class:"flex shrink-0 items-center space-x-1.5"},Ue=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"})],-1),Ae=e("span",{class:"text-xs"},"Commande",-1),De=[Ue,Ae],Fe={class:"flex shrink-0 items-center space-x-1.5"},Re=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Ie=e("span",{class:"text-xs"},"Activity",-1),Ke=[Re,Ie],Ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),We=[Ge],qe={key:0,"x-transition:enter":"transition-all duration-500 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(0,1rem,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},Oe=e("div",{class:"mt-4"},null,-1),Qe={class:"mt-4"},Je=e("h2",{class:"px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Dernier messages ",-1),Xe={class:"px-2 mt-4 space-y-3"},Ye={class:"flex flex-col justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700"},Ze={class:"flex flex-col justify-between px-3 mb-2 px-auto"},et={class:"mb-1 line-clamp-2"},tt={class:"flex items-center justify-between"},st={class:"flex flex-col space-x-2"},ot={class:"flex items-center gap-3 mb-4"},at={class:"text-xs font-medium line-clamp-1"},nt={class:"text-xs font-medium line-clamp-1"},lt=e("div",null," Aucun message",-1),rt={class:"px-3 mt-3"},it=e("h2",{class:"text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Settings ",-1),ct={class:"flex flex-col mt-2 space-y-2"},dt={class:"inline-flex items-center space-x-2"},ut=e("span",null,"Dark Mode",-1),ht=e("label",{class:"inline-flex items-center space-x-2"},[e("input",{"x-model":"$store.global.isMonochromeModeEnabled",class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"}),e("span",null,"Monochrome Mode")],-1),vt=e("div",{class:"hidden px-3 mt-3"},[e("div",{class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},[e("div",{class:"flex items-center justify-between"},[e("p",null,[e("span",{class:"font-medium text-slate-600 dark:text-navy-100"},"35GB"),B(" of 1TB ")]),e("a",{href:"#",class:"text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"},"Upgrade")]),e("div",{class:"h-2 mt-2 progress bg-slate-150 dark:bg-navy-500"},[e("div",{class:"w-7/12 rounded-full bg-info"})])])],-1),_t=e("div",{class:"h-18"},null,-1),xt={key:1,class:"px-3 pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},pt={class:"grid grid-cols-2 gap-3"},ft={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},mt={class:"flex justify-between space-x-1"},gt={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},bt=e("svg",{xmlns:"http://www.w3.org/2000/svg","stroke-width":"1.5",class:"w-5 h-5 text-primary dark:text-accent",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),kt=e("p",{class:"mt-1 text-xs+"},"Total",-1),wt={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},yt={class:"flex justify-between"},$t={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},Ct=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-success",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})],-1),Mt=e("p",{class:"mt-1 text-xs+"},"En attente",-1),jt=e("div",{class:"h-18"},null,-1),St={class:"absolute flex justify-center w-full pointer-events-none bottom-4"},Pt={class:"pointer-events-auto mx-auto flex space-x-1 rounded-full border border-slate-150 bg-white px-4 py-0.5 shadow-lg dark:border-navy-700 dark:bg-navy-900"},zt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},Bt=e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},null,-1),Lt=[Bt],Vt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},Ht=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},null,-1),Et=[Ht],Nt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},Tt=e("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),Ut=[Tt],At={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},Dt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"},null,-1),Ft=[Dt],Rt={__name:"OtherPanelUser",setup(y){const r=N(),l=T(),i=U(),x=V(()=>i.lastMessageUser),p=V(()=>i.lastCommandeUser),S=A(r),$=()=>{S()};E(()=>{i.fetchLastMessage(l.props.auth.user.id),i.fetchLastCommande(l.props.auth.user.id)}),w(""),w([]);const a=w("tabHome"),c=j();return(P,n)=>{const z=L("Photo");return h((t(),s("div",{onKeydown:n[6]||(n[6]=I(o=>u(c).tooglePanelFalse(),["window","escape"]))},[u(c).RightSidebarExpanded?(t(),s("div",{key:0,onClick:n[0]||(n[0]=o=>u(c).tooglePanelFalse())},[d(H,{"enter-class":"ease-out","enter-to-class":"opacity-100","enter-active-class":"opacity-100","leave-class":"ease-in","leave-active-class":"opacity-100","leave-to-class":"opacity-0"},{default:M(()=>[Pe]),_:1})])):k("",!0),e("div",ze,[d(H,{"enter-class":"ease-out","enter-to-class":"translate-x-0","enter-active-class":"translate-x-full","leave-class":"ease-out","leave-to-class":"translate-y-0","leave-active-class":"-translate-x-full"},{default:M(()=>[u(c).RightSidebarExpanded?(t(),s("div",Be,[e("div",Le,[h(e("p",Ve,Ne,512),[[_,a.value==="tabHome"]]),h(e("p",Te,De,512),[[_,a.value==="tabProjects"]]),h(e("p",Fe,Ke,512),[[_,a.value==="tabActivity"]]),e("button",{onClick:n[1]||(n[1]=o=>u(c).tooglePanelFalse()),class:"w-6 h-6 p-0 -mr-1 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},We)]),a.value==="tabHome"?(t(),s("div",qe,[Oe,e("div",Qe,[Je,e("div",Xe,[(t(!0),s(b,null,C(x.value.messages,o=>(t(),s("div",Ye,[e("div",Ze,[e("div",et,[d(u(D),{href:P.route("user.chat",o.conversation_id),class:"font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"},{default:M(()=>[B(v(o.body),1)]),_:2},1032,["href"])]),e("div",tt,[e("div",st,[e("div",ot,[d(z,{user:o.senderUser,taille:"12"},null,8,["user"]),e("p",at,v(o.senderUser.name),1)]),e("div",null,[e("p",nt,v(o.created_at),1)])])])])]))),256)),lt])]),e("div",rt,[it,e("div",ct,[e("label",dt,[h(e("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>F(r)?r.value=o:null),onChange:n[3]||(n[3]=o=>$()),class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"},null,544),[[R,u(r)]]),ut]),ht])]),vt,_t])):k("",!0),B(" > "),a.value==="tabProjects"?(t(),s("div",xt,[e("div",pt,[e("div",ft,[e("div",mt,[e("p",gt,v(p.value.total),1),bt]),kt]),e("div",wt,[e("div",yt,[e("p",$t,v(p.value.totalEnAttente),1),Ct]),Mt])]),jt])):k("",!0),e("div",St,[e("div",Pt,[e("button",{onClick:n[4]||(n[4]=o=>a.value="tabHome"),class:m([a.value==="tabHome"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[h((t(),s("svg",zt,Lt,512)),[[_,a.value==="tabHome"]]),h((t(),s("svg",Vt,Et,512)),[[_,a.value!=="tabHome"]])],2),e("button",{onClick:n[5]||(n[5]=o=>a.value="tabProjects"),class:m([a.value==="tabProjects"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[h((t(),s("svg",Nt,Ut,512)),[[_,a.value==="tabProjects"]]),h((t(),s("svg",At,Ft,512)),[[_,a.value!=="tabProjects"]])],2)])])])):k("",!0)]),_:1})])],544)),[[_,u(c).RightSidebarExpanded]])}}},It={},Kt=G('<footer class="px-4 py-6 md:flex md:items-center md:justify-between 2xl:px-0 md:py-10"><p class="mb-4 text-sm text-center text-gray-500 md:mb-0"><a href="" class="hover:underline" target="_blank">FIND</a>. All rights reserved. </p><ul class="flex flex-wrap justify-center s-center"><li><a href="{{url(&#39;/terms-of-service&#39;)}}" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms</a></li><li><a href="{{url(&#39;/privacy-policy&#39;)}}" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Policy</a></li><li><a href="{{url(&#39;/contact&#39;)}}" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a></li></ul></footer>',1),Gt=[Kt];function Wt(y,r){return t(),s("div",null,Gt)}const qt=K(It,[["render",Wt]]),Ot={id:"root",class:"flex min-h-100vh grow bg-slate-50 dark:bg-gray-950"},Qt={class:"sidebar"},Jt={class:"main-content pt-4 w-full px-[var(--margin-x)] pb-8"},os={__name:"UserLayout",setup(y){const r=W(),l=j();E(()=>{r.fetchCategories()});function i(){window.innerWidth<768&&l.ToogleFalse()}return i(),(x,p)=>(t(),s("div",{class:m(["",{"is-sidebar-open":u(l).SidebarExpanded}])},[e("div",Ot,[e("div",Qt,[d(O),d(_e)]),d(Se),d(Rt),e("div",Jt,[q(x.$slots,"default"),d(qt)])])],2))}};export{os as _};

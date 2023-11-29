import{o as a,e as r,a as e,aj as H,E as C,d as b,S as I,m as x,H as L,g as M,t as m,b as s,c as S,f as u,u as c,ak as d,F as j,j as A,w,U as O,n as o,$ as W,A as B,q as U,W as Y,P as G,Y as Z}from"./app-7b7754e7.js";import{_ as J}from"./UserLayout-8951c33b.js";import K from"./LogoutOtherBrowserSessionsForm-39c5dea7.js";import{S as z}from"./SectionBorder-3daf5a6b.js";import Q from"./TwoFactorAuthenticationForm-901499b3.js";import X from"./UpdatePasswordForm-06b56d7a.js";import ee from"./UpdateProfileInformationForm-7a6c45ed.js";import{_ as te}from"./TextInput-1759f298.js";import"./MainSidebarUser-35c99ee1.js";/* empty css                                                          */import"./userInfo-4886af5f.js";import"./ActionMessage-93fe86c7.js";import"./DialogModal-ebe983a4.js";import"./SectionTitle-278f54a1.js";import"./PrimaryButton-33d29cc5.js";import"./SecondaryButton-89c5257f.js";import"./DangerButton-bd16db8a.js";import"./FormSection-921ab254.js";const ae=e("div",null,[e("div",{class:"p-4 mb-6 bg-white rounded-md dark:bg-navy-800"},[e("h2",{class:"p-4 mb-2 text-lg font-medium dark:text-gray-200"},"Paramètres de notification"),e("div",{class:"p-4 space-y-4"},[e("div",{class:"flex items-center"},[e("div",null,[e("label",{class:"relative inline-flex items-center cursor-pointer"},[e("input",{type:"checkbox",class:"sr-only peer","wire:model.live":"enablePush","x-on:change":"$wire.toogle()"}),e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),e("span",{class:"ml-3 text-sm font-medium text-gray-400 dark:text-gray-500"},"Recevoir des notifications par push")])])]),e("div",{class:"flex items-center"},[e("div",null,[e("label",{class:"relative inline-flex items-center cursor-pointer"},[e("input",{type:"checkbox",class:"sr-only peer","wire:model.live":"enableEmail","x-on:change":"$wire.toogle()"}),e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),e("span",{class:"ml-3 text-sm font-medium text-gray-400 dark:text-gray-500"},"Recevoir des notifications par email ")])])]),e("div",{class:"flex items-center"},[e("div",null,[e("label",{class:"relative inline-flex items-center cursor-pointer"},[e("input",{type:"checkbox",class:"sr-only peer","wire:model.live":"enablePhone","x-on:change":"$wire.toogle()"}),e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),e("span",{class:"ml-3 text-sm font-medium text-gray-400 dark:text-gray-500"},"Recevoir des notifications par telephone ")])])]),e("div",{class:"flex items-center"},[e("div",null,[e("label",{class:"relative inline-flex items-center cursor-pointer"},[e("input",{type:"checkbox",class:"sr-only peer","wire:model.live":"enableInvoie","x-on:change":"$wire.toogle()"}),e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),e("span",{class:"ml-3 text-sm font-medium text-gray-400 dark:text-gray-500"},"Recevoir les facture par telephone ")])])])])])],-1),se=[ae],re={__name:"NotificationSeeting",props:{userSetting:Object},setup(k){return(t,n)=>(a(),r("div",null,se))}},oe={class:"md:grid md:grid-cols-1 md:gap-6"},ne=U('<div class="md:col-span-1 flex justify-between"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium dark:text-gray-50 text-gray-900"> Boostez vos Avantages avec le Parrainage! </h3><p class="mt-1 text-sm dark:text-gray-100 text-gray-600"><span class="dark:text-gray-50">Mettez à jour votre profil et votre adresse e-mail pour débloquer des avantages exclusifs grâce à notre programme de parrainage. Invitez vos amis à rejoindre et profitez ensemble des opportunités exceptionnelles qui vous attendent!</span></p></div></div>',1),le={class:"mt-5 md:mt-0 md:col-span-2 rounded-md"},ie={class:"px-4 py-5 bg-white shadow dark:bg-gray-800 sm:p-6"},ce={class:""},de={key:0,class:"mb-6"},ue={key:0,class:"mb-2 text-2xl dark:text-gray-100 font-bold"},pe={class:"dark:text-gray-50"},ve={key:1,class:"flex flex-col gap-4"},fe=e("p",{class:"text-base text-gray-800 dark:text-gray-50"},"Vous n'avez pas encore de code de parainage veuillez en generer Un",-1),ge=e("div",null,null,-1),he={key:1,class:"border-round border-1 surface-border p-4 surface-card"},xe={class:"m-0 p-0 list-none"},me={class:"mb-3"},ke={class:"flex"},_e={class:"align-self-center",style:{flex:"1"}},ye={class:"mb-3"},be={class:"flex"},we={class:"align-self-center",style:{flex:"1"}},$e={class:"mb-3"},Pe={class:"flex"},ze={class:"align-self-center",style:{flex:"1"}},Ce={class:"flex"},Se={class:"align-self-center",style:{flex:"1"}},je={key:2},Ae={key:0,class:"mt-4"},Me=e("div",{class:"py-4"},[e("h1",{class:"text-base dark:text-gray-100"},"Utilisateurs Parrainés")],-1),Be={class:"ml-4"},Ue={href:"",class:"text-sm text-gray-600 dark:text-gray-300"},Ve={key:0,class:"mt-4"},Fe=e("p",{class:"text-green-500"},"Félicitations! Vous avez parrainé 10 utilisateurs et vous avez gagné un cadeau spécial!",-1),Ne=[Fe],qe={key:1,class:"mt-4"},Te={class:"flex flex-col"},De={class:"flex flex-row overflow-auto py-2"},Re={class:"p-2 flex items-center flex-col"},Ee={class:"p-2"},He={class:"flex mt-4 gap-2"},Ie={class:"w-[80%]"},Le={class:"w-[20%]"},Oe={__name:"Parainage",setup(k){const t=H(),n=C(()=>t.getReferalCode),l=C(()=>t.getUsers),f=b(!1),p=b(!0);I(async()=>{t.getCodeUser(),t.getAllUser(),setTimeout(()=>{p.value=!1},2e3)});const V=async()=>{try{f.value=!0,(await Y.post("/api/generate-code-parainage")).status==200?t.getCodeUser():alert("error lors de la generation du code"),f.value=!1}catch(h){f.value=!1,console.log(h)}},_=route("auth.register",n.value),y=b(!1),F=()=>{y.value=!y.value},N=h=>{alert("You just copied: "+h.text)},q=h=>{alert("Failed to copy texts")},T=[{network:"email",name:"Email",icon:"far fah fa-lg fa-envelope",color:"#333333"},{network:"facebook",name:"Facebook",icon:"fab fah fa-lg fa-facebook-f",color:"#1877f2"},{network:"linkedin",name:"LinkedIn",icon:"fab fah fa-lg fa-linkedin",color:"#007bb5"},{network:"messenger",name:"Messenger",icon:"fab fah fa-lg fa-facebook-messenger",color:"#0084ff"},{network:"sms",name:"SMS",icon:"far fah fa-lg fa-comment-dots",color:"#333333"},{network:"telegram",name:"Telegram",icon:"fab fah fa-lg fa-telegram-plane",color:"#0088cc"},{network:"twitter",name:"Twitter",icon:"fab fah fa-lg fa-twitter",color:"#1da1f2"},{network:"whatsapp",name:"Whatsapp",icon:"fab fah fa-lg fa-whatsapp",color:"#25d366"}],g={url:"https://www.find-freelance.com/register",title:"Rejoignez-nous sur FIND!.",description:"Inscrivez-vous sur Find Freelance et découvrez un monde d'opportunités.Utilisez mon lien de parrainage pour une inscription rapide et facile!.",quote:"Explorez de nouvelles opportunités et élargissez vos horizons sur Find Freelance. Rejoignez-moi dès maintenant!",hashtags:"Freelance, Opportunités,Photographies,Design,Progammation",twitterUser:"Find Freelance"};return(h,v)=>{const $=x("Button"),D=x("Photo"),R=x("ShareNetwork"),E=x("Dialog"),P=L("clipboard");return a(),r("div",oe,[ne,e("div",le,[e("div",null,[e("div",ie,[e("div",ce,[p.value?u("",!0):(a(),r("div",de,[n.value!=null?(a(),r("h2",ue,[M("Votre code Parainage : "),e("span",pe,m(n.value),1)])):(a(),r("div",ve,[fe,e("div",null,[s($,{loading:f.value,onClick:v[0]||(v[0]=i=>V()),label:"Generer un code de parainage",outlined:""},null,8,["loading"])])])),n.value!=null?(a(),S($,{key:2,label:"Partager",onClick:v[1]||(v[1]=i=>F()),outlined:""})):u("",!0)])),ge,p.value?(a(),r("div",he,[e("ul",xe,[e("li",me,[e("div",ke,[s(c(d),{shape:"circle",size:"4rem",class:"mr-2"}),e("div",_e,[s(c(d),{width:"100%",class:"mb-2"}),s(c(d),{width:"75%"})])])]),e("li",ye,[e("div",be,[s(c(d),{shape:"circle",size:"4rem",class:"mr-2"}),e("div",we,[s(c(d),{width:"100%",class:"mb-2"}),s(c(d),{width:"75%"})])])]),e("li",$e,[e("div",Pe,[s(c(d),{shape:"circle",size:"4rem",class:"mr-2"}),e("div",ze,[s(c(d),{width:"100%",class:"mb-2"}),s(c(d),{width:"75%"})])])]),e("li",null,[e("div",Ce,[s(c(d),{shape:"circle",size:"4rem",class:"mr-2"}),e("div",Se,[s(c(d),{width:"100%",class:"mb-2"}),s(c(d),{width:"75%"})])])])])])):(a(),r("div",je,[l.value.length>0?(a(),r("div",Ae,[Me,(a(!0),r(j,null,A(l.value,i=>(a(),r("div",{key:i.id,class:"flex items-center mt-4"},[s(D,{user:i},null,8,["user"]),e("div",Be,[e("a",Ue,m(i.name),1)])]))),128)),l.value.length>=10?(a(),r("div",Ve,Ne)):(a(),r("div",qe,[e("p",null,"Parrainez encore "+m(10-l.value.length)+" utilisateurs pour recevoir un cadeau spécial!",1)]))])):u("",!0)]))])])])]),s(E,{visible:y.value,"onUpdate:visible":v[3]||(v[3]=i=>y.value=i),style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"90vw"},position:"center",modal:!0,header:"Partager",draggable:!1},{default:w(()=>[e("div",Te,[e("div",De,[(a(),r(j,null,A(T,i=>e("button",Re,[(a(),S(R,{class:"rounded-full text-white p-4",network:i.network,key:i.network,style:O({backgroundColor:i.color}),url:g.url,title:g.title,description:g.description,quote:g.quote,hashtags:g.hashtags,twitterUser:g.twitterUser},{default:w(()=>[e("i",{class:o(i.icon)},null,2)]),_:2},1032,["network","style","url","title","description","quote","hashtags","twitterUser"])),e("span",Ee,m(i.name),1)])),64))]),e("div",He,[e("div",Ie,[s(te,{modelValue:c(_),"onUpdate:modelValue":v[2]||(v[2]=i=>W(_)?_.value=i:null),class:"block w-full mt-1"},null,8,["modelValue"])]),e("div",Le,[B(s($,{label:"copier",size:"small",outlined:""},null,512),[[P,c(_),"copy"],[P,N,"success"],[P,q,"error"]])])])])]),_:1},8,["visible"])])}}},We={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},Ye={class:"flex flex-col"},Ge={class:"flex","aria-label":"Breadcrumb"},Ze={class:"inline-flex items-center space-x-1 md:space-x-3"},Je={class:"inline-flex items-center"},Ke=e("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})],-1),Qe=U('<li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Profile</span></div></li>',1),Xe=e("h1",{class:"mt-4 text-3xl font-bold text-black dark:text-white"},"Profile",-1),et={class:"grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6"},tt={class:"col-span-12 lg:col-span-4"},at={style:{top:"8rem"},class:"sticky p-4 bg-white rounded-[25px] dark:bg-gray-800 sm:p-5"},st={class:"flex items-center space-x-4"},rt={class:"avatar h-14 w-14"},ot=["src"],nt=["src"],lt={class:"text-base font-medium text-slate-700 dark:text-navy-100"},it={class:"mt-6 space-y-1.5 font-inter font-medium"},ct=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),dt=[ct],ut=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},null,-1),pt=[ut],vt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"},null,-1),ft=[vt],gt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"},null,-1),ht=[gt],xt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},null,-1),mt=[xt],kt={class:"col-span-12 lg:col-span-8"},_t={key:0},yt={key:0,"x-transition:enter":"transition-all duration-300 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(1rem,0,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"col-span-12 lg:col-span-8"},bt={key:0},wt={key:1},$t={key:1,"x-transition:enter":"transition-all duration-300 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(1rem,0,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"col-span-12 lg:col-span-8"},Pt={key:2,"x-transition:enter":"transition-all duration-300 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(1rem,0,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"col-span-12 lg:col-span-8"},zt={key:3,"x-transition:enter":"transition-all duration-300 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(1rem,0,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"col-span-12 lg:col-span-8"},Ot=Object.assign({layout:J},{__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(k){const t=b("AccountP");return(n,l)=>{const f=x("Link");return a(),r("div",We,[e("div",Ye,[e("div",null,[e("nav",Ge,[e("ol",Ze,[e("li",Je,[s(f,{href:n.route("user.dashboard"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:w(()=>[Ke,M(" Dashboard ")]),_:1},8,["href"])]),Qe])])]),Xe]),e("div",null,[e("div",et,[e("div",tt,[e("div",at,[e("div",st,[e("div",rt,[n.$page.props.auth.user.profile_photo_path!=null?(a(),r("img",{key:0,class:"object-cover rounded-full",src:"/storage/"+n.$page.props.auth.user.profile_photo_path,alt:""},null,8,ot)):(a(),r("img",{key:1,class:"rounded-full",src:n.$page.props.auth.user.profile_photo_url,alt:""},null,8,nt))]),e("div",null,[e("h3",lt,m(n.$page.props.auth.user.name),1)])]),e("ul",it,[e("li",null,[e("a",{onClick:l[0]||(l[0]=p=>t.value="AccountP"),class:o([t.value==="AccountP"?"border-amber-600 border-b":"hover:bg-slate-100 hover:text-slate-800 text-gray-700 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100","group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"]),href:"#"},[(a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:o([t.value==="AccountP"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200","w-5 h-5"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},dt,2)),e("span",{class:o(t.value==="AccountP"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")},"Comptes Utilisateur",2)],2)]),e("li",null,[e("a",{onClick:l[1]||(l[1]=p=>t.value="Parainage"),class:o([t.value==="Parainage"?"border-amber-600 border-b text-slate-800 ":"hover:bg-slate-100  hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100","group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"]),href:"#"},[(a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:o([t.value==="Parainage"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200","w-5 h-5"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},pt,2)),e("span",{class:o(t.value==="Parainage"?"dark:text-white text-slate-800":"text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")},"Parainage",2)],2)]),e("li",null,[e("a",{onClick:l[2]||(l[2]=p=>t.value="Notification"),class:o([t.value==="Notification"?"border-amber-600 border-b text-slate-800 ":"hover:bg-slate-100  hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100","group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"]),href:"#"},[(a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:o([t.value==="Notification"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200","w-5 h-5"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},ft,2)),e("span",{class:o(t.value==="Notification"?"dark:text-white text-slate-800":"text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")},"Notification",2)],2)]),e("li",null,[e("a",{onClick:l[3]||(l[3]=p=>t.value="Security"),class:o([t.value==="Security"?"border-amber-600 border-b":"hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100","group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"]),href:"#"},[(a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:o([t.value==="Security"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200","w-5 h-5"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},ht,2)),e("span",{class:o(t.value==="Security"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")},"Securité",2)],2)]),e("li",null,[e("a",{onClick:l[4]||(l[4]=p=>t.value="Privacy"),class:o([t.value==="Privacy"?"border-amber-600 border-b":"hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100","group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"]),href:"#"},[(a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:o(["w-5 h-5",t.value==="Privacy"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},mt,2)),e("span",{class:o(t.value==="Privacy"?"dark:text-white text-slate-800":"transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}," Activites ",2)],2)])])])]),B(e("div",kt,[s(Z,{"enter-class":"transition-all duration-300 easy-in-out","enter-start-class":"'opacity-0 [transform:translate3d(1rem,0,0)]'","enter-end-class":"'opacity-100 [transform:translate3d(0,0,0)]'"},{default:w(()=>[n.$page.props.jetstream.canUpdateProfileInformation?(a(),r("div",_t,[s(ee,{user:n.$page.props.auth.user},null,8,["user"]),s(z)])):u("",!0)]),_:1})],512),[[G,t.value==="AccountP"]]),t.value==="Security"?(a(),r("div",yt,[n.$page.props.jetstream.canUpdatePassword?(a(),r("div",bt,[s(X,{class:"mt-10 sm:mt-0"}),s(z)])):u("",!0),n.$page.props.jetstream.canManageTwoFactorAuthentication?(a(),r("div",wt,[s(Q,{"requires-confirmation":k.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),s(z)])):u("",!0)])):u("",!0),t.value==="Notification"?(a(),r("div",$t,[s(re)])):u("",!0),t.value==="Parainage"?(a(),r("div",Pt,[s(Oe)])):u("",!0),t.value==="Privacy"?(a(),r("div",zt,[s(K,{sessions:k.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"])])):u("",!0)])])])}}});export{Ot as default};

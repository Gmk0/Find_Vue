import{a8 as te,I as ae,aq as ne,d as g,E as se,T as ie,m as h,e as r,a as e,b as c,w as u,t as l,A as M,P as z,n as T,f as _,g as m,u as s,c as w,F as b,j as k,q as le,V,o as i,as as E,at as A,aA as D,au as F,av as I,aB as N,aw as H,ax as q,Q as oe,p as re}from"./app-2bbe6b8d.js";import{_ as de}from"./WebLayout-1755823b.js";import"./image.esm-d1195ea4.js";import{s as $,a as ce}from"./tabpanel.esm-20dcb884.js";import"./userInfo-ff2d2acf.js";var pe=`
@layer primevue {
    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }
    
    .p-galleria-item-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    .p-galleria-item-container {
        position: relative;
        display: flex;
        height: 100%;
    }
    
    .p-galleria-item-nav {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    .p-galleria-item-prev {
        left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    
    .p-galleria-item-next {
        right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-nav {
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
        pointer-events: all;
        opacity: 1;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
        pointer-events: none;
    }
    
    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    
    /* Thumbnails */
    .p-galleria-thumbnail-wrapper {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }
    
    .p-galleria-thumbnail-prev,
    .p-galleria-thumbnail-next {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-galleria-thumbnail-prev span,
    .p-galleria-thumbnail-next span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .p-galleria-thumbnail-container {
        display: flex;
        flex-direction: row;
    }
    
    .p-galleria-thumbnail-items-container {
        overflow: hidden;
        width: 100%;
    }
    
    .p-galleria-thumbnail-items {
        display: flex;
    }
    
    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }
    
    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }
    
    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }
    
    /* Positions */
    /* Thumbnails */
    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }
    
    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-right .p-galleria-item-wrapper {
        flex-direction: row;
    }
    
    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-top .p-galleria-item-wrapper {
        order: 2;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
    .p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
        order: 1;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-container,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-container {
        flex-direction: column;
        flex-grow: 1;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }
    
    /* Indicators */
    .p-galleria-indicators {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-galleria-indicator > button {
        display: inline-flex;
        align-items: center;
    }
    
    .p-galleria-indicators-left .p-galleria-item-wrapper,
    .p-galleria-indicators-right .p-galleria-item-wrapper {
        flex-direction: row;
        align-items: center;
    }
    
    .p-galleria-indicators-left .p-galleria-item-container,
    .p-galleria-indicators-top .p-galleria-item-container {
        order: 2;
    }
    
    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-top .p-galleria-indicators {
        order: 1;
    }
    
    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-right .p-galleria-indicators {
        flex-direction: column;
    }
    
    .p-galleria-indicator-onitem .p-galleria-indicators {
        position: absolute;
        display: flex;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }
    
    /* FullScreen */
    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-galleria-close {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    .p-galleria-mask .p-galleria-item-nav {
        position: fixed;
        top: 50%;
        margin-top: -0.5rem;
    }
    
    /* Animation */
    .p-galleria-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-galleria-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .p-galleria-enter-from,
    .p-galleria-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }
    
    .p-galleria-enter-active .p-galleria-item-nav {
        opacity: 0;
    }
    
    /* Keyboard Support */
    .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }
    
    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }
}
`;te(pe,{name:"galleria",manual:!0});const ue={class:"min-h-screen py-2 pt-16 bg-gray-100 md:px-6 dark:bg-gray-900"},ge=e("div",{class:"hidden px-2"}," All/Service ",-1),me={class:"px-4 mt-4"},ve={class:"flex","aria-label":"Breadcrumb"},he={class:"inline-flex items-center space-x-1 md:space-x-3"},_e=e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},[e("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})]),m(" Back ")])],-1),fe={"aria-current":"page"},xe=e("svg",{class:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1),be=e("span",{class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},"Services",-1),ye={"aria-current":"page"},we={class:"flex items-center"},ke=e("svg",{class:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1),Ce={class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},je={class:"container relative px-4 py-4 mx-auto"},Se={class:"relative flex flex-col gap-4 lg:flex-row lg:space-x-4"},Be={id:"card",class:"relative flex-col mx-2 mb-6 lg:flex lg:order-2 lg:mb-0 lg:w-1/3"},Le={class:"flex lg:sticky lg:top-[8rem] flex-col gap-2 p-4 card-sticky"},Me={class:"p-2 bg-white rounded-md shadow-lg lg:sticky dark:bg-gray-800"},Te={class:"mt-2 sm:col-span-8 lg:col-span-7"},$e={class:"flex text-lg font-bold text-gray-800 truncate lg:hidden dark:text-gray-300 sm:pr-12"},Pe={"aria-labelledby":"information-heading",class:"mt-1"},ze=e("h3",{id:"information-heading",class:"sr-only"},"Product information",-1),Ve={class:"flex justify-between my-3"},Ee=e("h4",{class:"sr-only"},"Reviews",-1),Ae={class:"flex items-center"},De=le('<div class="flex items-center"><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z"></path></svg><span class="text-sm font-semibold text-gray-700 dark:text-gray-100">(2) </span></div><p class="sr-only">3 out of 5 stars</p>',2),Fe={href:"#",class:"ml-3 text-sm font-medium text-amber-600 hover:text-indigo-500"},Ie={class:"flex justify-between mt-3"},Ne={class:"flex items-center"},He={class:""},qe=e("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),Qe=[qe],Oe=e("svg",{class:"w-5 h-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),Ue=[Oe],Re=e("div",null,null,-1),Je={key:0,class:"mt-4 mb-3"},Ke={class:"flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"},Ze={class:"flex justify-between gap-2 px-4"},Ge={class:"py-2 text-lg text-gray-800"},We={class:"text-lg font-bold text-amber-600"},Xe=e("div",null,[e("div",{id:"",class:"mt-4"},[e("div",{class:"px-4"},[e("ul",{class:"flex gap-4"})])])],-1),Ye={"aria-labelledby":"options-heading",class:"px-4 mt-1"},et=e("h3",{id:"options-heading",class:"sr-only"},"Service options",-1),tt={class:"flex justify-between mt-4"},at={class:"flex gap-2 font-medium text-gray-700 dark:text-gray-100"},nt=e("span",null,[e("i",{class:"pi pi-clock"})],-1),st={key:0},it={key:1},lt={key:2},ot={class:"flex gap-2 font-medium text-gray-700 dark:text-gray-100"},rt=e("span",null,[e("i",{class:"pi pi-replay"})],-1),dt={key:0},ct={key:1},pt={key:2},ut={class:"flex"},gt=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})],-1),mt=e("span",null,"Ajouter au Panier",-1),vt=[gt,mt],ht={class:"grid w-full gap-2 p-6 bg-white rounded-lg dark:bg-gray-800"},_t={class:"w-full px-4 bg-gray-50 dark:bg-gray-800 md:w-2/3"},ft={class:"p-4 dark:bg-gray-800"},xt={class:"flex flex-col mb-4"},bt={class:"mb-4 text-lg font-bold text-gray-700 md:text-xl dark:text-gray-200"},yt={class:"flex gap-4 mt-2"},wt={class:"flex flex-col gap-3 my-auto"},kt={class:"hidden text-base font-medium text-gray-500"},Ct={class:"flex flex-row gap-2"},jt={class:"hidden text-base font-medium"},St={key:0,class:"text-base font-medium"},Bt={class:"text-green-600"},Lt={class:"mt-4"},Mt={class:"lg:w-10/12 w-full rounded-lg"},Tt=["src","alt"],$t={class:"hidden"},Pt={class:"mt-4 text-lg font-bold text-gray-800 md:text-2xl dark:text-gray-200"},zt={class:"mt-8 card"},Vt={class:"py-5 min-h-64"},Et={class:"mb-4 prose text-gray-800 md:text-base dark:text-gray-200"},At=["innerHTML"],Dt={class:"grid grid-cols-2 gap-4 mb-4"},Ft=e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Support :",-1),It={id:"support",class:"text-gray-800"},Nt={class:"px-2 mt-2"},Ht={class:"px-4 list-disc dark:text-gray-50"},qt={class:"grid hidden grid-cols-2 gap-4 mb-4"},Qt=e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Prix :",-1),Ot={class:"px-2 mt-2 text-gray-700 dark:text-gray-300"},Ut={class:"text-lg text-green-700"},Rt=e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Délai :",-1),Jt={class:"text-gray-700 dark:text-gray-300"},Kt=e("div",{class:"grid grid-cols-2 gap-4 mb-4"},null,-1),Zt={class:"grid grid-cols-2 gap-4 mb-6"},Gt=e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Besoin pour ce service :",-1),Wt=["innerHTML"],Xt={key:0,class:"grid grid-cols-1 gap-4"},Yt={class:"p-4 bg-white rounded-md shadow dark:bg-gray-800"},ea={class:"flex flex-row gap-2 p-4 mb-4"},ta=["src"],aa={class:"p-4 mt-2 font-sans text-gray-700 dark:text-gray-200"},na=["innerHTML"],sa=e("div",null,[e("div",{class:"p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600"},[e("p",{class:"text-sm text-gray-700 md:text-base dark:text-gray-300"}," Hello"),e("div",{class:"flex items-center my-4"},[e("svg",{class:"w-4 h-4 mr-1 text-yellow-500 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z"})]),e("span",{class:"text-sm font-semibold text-gray-700 dark:text-gray-100"},"(3) ")]),e("div",null,[e("div"),e("div",null,[e("p",{class:"font-bold text-gray-800"},"Bro")])])])],-1),ia={class:"px-4 mt-6"},la=e("p",{class:"mb-4 text-lg font-medium text-gray-800 dark:text-gray-200"},"À propos du freelance ",-1),oa={class:"flex items-center gap-4 mb-8"},ra={class:"block text-gray-700 truncate dark:text-gray-300"},da={class:"text-base text-gray-700 dark:text-gray-100"},ca={class:"px-4 mt-4"},pa=e("div",{class:"px-4"},[e("p",{class:"text-lg font-bold text-gray-800 dark:text-gray-200"},"Du meme Categorie")],-1),ua={class:"grid gap-4 px-4 py-4 mx-auto md:grid-cols-4"},ga={key:0,class:"flex items-center justify-center h-64"},ma=e("span",{class:"text-lg font-medium text-gray-500"}," Aucun élément trouvé. ",-1),va=[ma],ha=["onSubmit"],_a={class:"flex flex-col items-start justify-between mb-4"},fa={class:"flex items-center space-x-2"},xa={class:"text-lg font-semibold"},ba=e("span",{class:"rounded-full h-2 w-2"},null,-1),ya={key:0,class:"text-xs text-green-500"},wa=e("span",{class:"text-xs text-gray-500"},"Temps de réponse : 2 heures",-1),ka={class:"flex-grow space-y-2"},Ca={class:"flex flex-col gap-2"},ja={class:"flex flex-col gap-2"},Sa=e("p",null,"Quelle est la durée estimée pour la réalisation de ce service ?",-1),Ba=[Sa],La=e("p",null,"Quels sont les détails spécifiques inclus dans ce service ?",-1),Ma=[La],Ta=e("p",null,"Pouvez-vous me fournir plus d'informations sur les tarifs ?",-1),$a=[Ta],Pa={class:"flex justify-between mt-4 space-x-2"},za=e("div",{class:"flex gap-3"},[e("button",{class:"flex items-center p-2 rounded-full shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"})])])],-1),Va={key:0},Ea={key:1},Aa="/storage/",qa=Object.assign({layout:de},{__name:"OneService",props:{service:Object,otherService:Array},setup(Q){const d=Q,O=ae(),U=ne(),y=g(!1),f=g(d.service.data.likeUser),p=g("basic"),t=se(()=>d.service.data),C=g(d.service.data.basic_price),j=o=>{C.value=o},x=g(!1),R=g(!1),S=g(""),J=async()=>{x.value=!x.value;try{const o=await V.post(route("contactFreelance"),{body:v.body,freelance_id:d.service.data.freelance.id,user_id:d.service.data.user.id,service_id:d.service.data.id});S.value=o.data.chatId,x.value=!1,R.value=!0}catch(o){x.value=!1,console.log(o)}},v=ie({body:"",freelance_id:d.service.data.freelance.id,user_id:d.service.data.user.id,service_id:d.service.data.id}),K=async()=>{f.value=!f.value;try{const o=await V.post(route("like.service"),{like:f.value,service:d.service.data.id})}catch(o){console.log(o)}},Z=g([]);for(let o=0;o<d.service.data.files.length;o++)Z.value.push({itemImageSrc:"/storage/"+d.service.data.files[o],thumbnailImageSrc:"/storage/"+d.service.data.files[o],alt:`Description for Image ${o+1}`,title:`Title ${o+1}`});const G=()=>{const o={id:d.service.data.id,name:d.service.data.title,price:C.value,level:p.value,image:Aa+d.service.data.files[0]};U.addItem(o),O.add({severity:"info",summary:"Message",detail:"Service Ajouter au panier",group:"br",life:1e3})};return g([{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}]),(o,a)=>{const B=h("Link"),W=h("Toast"),L=h("Button"),X=h("Photo"),Y=h("ServiceCard"),ee=h("Dialog");return i(),r("div",ue,[ge,e("div",me,[e("nav",ve,[e("ol",he,[_e,e("li",fe,[c(B,{href:o.route("categories"),class:"hidden items-center"},{default:u(()=>[xe,be]),_:1},8,["href"])]),e("li",ye,[e("div",we,[ke,e("span",Ce,l(t.value.service_numero),1)])])])])]),c(W,{position:"bottom-right",group:"br"}),e("div",je,[e("div",Se,[e("div",Be,[e("div",Le,[e("div",Me,[e("div",Te,[e("h2",$e,l(t.value.title),1),e("section",Pe,[ze,e("div",Ve,[Ee,e("div",Ae,[De,e("a",Fe,l(t.value.orderCount)+" reviews",1)]),e("div",Ie,[e("div",Ne,[e("button",{onClick:a[0]||(a[0]=n=>K()),class:"flex gap-1 mr-2"},[M(e("span",He,Qe,512),[[z,!f.value]]),M(e("span",null,Ue,512),[[z,f.value]])])]),Re])]),t.value.premium_price&&t.value.extra_price?(i(),r("div",Je,[e("ul",Ke,[e("li",{class:T(["w-full sm:border-r dark:border-gray-600",p.value==="Basic"?"border-b-4 border-amber-600":""]),onClick:a[2]||(a[2]=n=>p.value="Basic")},[e("button",{onClick:a[1]||(a[1]=n=>j(t.value.basic_price)),class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"}," Basic ")],2),e("li",{class:T(["w-full sm:border-r dark:border-gray-600",p.value==="Premium"?"border-b-4 border-amber-600":""]),onClick:a[4]||(a[4]=n=>p.value="Premium")},[e("button",{onClick:a[3]||(a[3]=n=>j(t.value.premium_price)),class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"}," Premium ")],2),e("li",{class:T(["w-full dark:border-gray-600",p.value==="Extra"?"border-b-4 border-amber-600":""]),onClick:a[6]||(a[6]=n=>p.value="Extra")},[e("button",{onClick:a[5]||(a[5]=n=>j(t.value.extra_price)),class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"}," Extra ")],2)])])):_("",!0),e("div",Ze,[e("p",Ge,l(p.value),1),e("p",We,l(C.value)+" $",1)]),Xe]),e("section",Ye,[et,e("div",null,[e("div",tt,[e("p",at,[nt,p.value==="basic"?(i(),r("span",st,l(t.value.basic_delivery_time),1)):p.value==="Premium"?(i(),r("span",it,l(t.value.premium_delivery_time),1)):(i(),r("span",lt,l(t.value.extra_delivery_time),1)),m(" Jours Delai ")]),e("p",ot,[rt,p.value==="basic"?(i(),r("span",dt,l(t.value.basic_revision),1)):p.value==="Premium"?(i(),r("span",ct,l(t.value.premium_revision),1)):(i(),r("span",pt,l(t.value.extra_revision),1)),m(" Revisions ")])]),e("div",ut,[e("button",{onClick:a[7]||(a[7]=n=>G()),type:"button",id:"",class:"flex items-center justify-center w-full gap-1 px-8 py-3 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},vt)])])])]),e("div",ht,[c(L,{outlined:"",onClick:a[8]||(a[8]=n=>y.value=!y.value),size:"small",label:"Contacter"})])])])]),e("div",_t,[e("div",ft,[e("div",xt,[e("div",null,[e("p",bt,l(t.value.title),1)]),e("div",yt,[e("div",wt,[e("a",kt,l(t.value.freelance.nom),1),e("div",Ct,[e("span",jt,"Niveau "+l(t.value.freelance.level),1),t.value.commandeEncours!=0?(i(),r("span",St,[e("span",Bt,l(t.value.commandeEncours),1),m(" commande en cours ")])):_("",!0)])])]),e("div",Lt,[e("div",Mt,[c(s(q),{modules:[s(A),s(D),s(F),s(I),s(N),s(H)],effect:"fade","slides-per-view":1,navigation:""},{default:u(()=>[(i(!0),r(b,null,k(d.service.data.files,(n,P)=>(i(),w(s(E),null,{default:u(()=>[e("img",{class:"object-fill rounded-md h-full lg:h-10/12 swiper-lazy",src:"/storage/"+n,alt:n},null,8,Tt)]),_:2},1024))),256))]),_:1},8,["modules"])])]),e("div",$t,[e("p",Pt,l(t.value.title),1)]),e("div",zt,[c(s(ce),null,{default:u(()=>[c(s($),{header:"INFO"},{default:u(()=>[e("div",Vt,[e("div",Et,[e("div",{innerHTML:t.value.description},null,8,At)]),e("div",Dt,[e("div",null,[Ft,e("div",It,[e("div",Nt,[e("ul",Ht,[(i(!0),r(b,null,k(t.value.basic_support,(n,P)=>(i(),r("li",null,l(n),1))),256))])])])])]),e("div",qt,[e("div",null,[Qt,e("p",Ot,[m("à partir de "),e("span",Ut,l(t.value.price),1)])]),e("div",null,[Rt,e("p",Jt,l(t.value.basic_delivery_time)+" jours ",1)])]),Kt,e("div",Zt,[e("div",null,[Gt,e("div",{class:"prose",innerHTML:t.value.need_service},null,8,Wt)])])])]),_:1}),c(s($),{header:"Example"},{default:u(()=>[t.value.example!=null?(i(),r("div",Xt,[e("div",Yt,[e("div",ea,[c(s(q),{modules:[s(A),s(D),s(F),s(I),s(N),s(H)],effect:"fade","slides-per-view":1,navigation:""},{default:u(()=>[(i(!0),r(b,null,k(t.value.example.image,(n,P)=>(i(),w(s(E),null,{default:u(()=>[e("img",{class:"object-fill rounded-md h-10/12 swiper-lazy",src:"/storage/"+n,alt:"bro"},null,8,ta)]),_:2},1024))),256))]),_:1},8,["modules"])]),e("div",aa,[e("div",{innerHTML:t.value.example.description},null,8,na)])])])):_("",!0)]),_:1}),c(s($),{header:"Commentaires"},{default:u(()=>[sa]),_:1})]),_:1})]),e("div",ia,[la,e("div",oa,[t.value.user!=null?(i(),w(X,{key:0,user:t.value.user},null,8,["user"])):_("",!0),e("div",null,[c(B,{href:o.route("profileFreelance",t.value.freelance.identifiant),class:"font-bold text-gray-800 dark:text-gray-300"},{default:u(()=>[m(l(t.value.freelance.nom),1)]),_:1},8,["href"]),e("p",ra,l(t.value.category.name),1)])]),e("div",da,l(t.value.freelance.description),1)])])])])])]),e("div",ca,[pa,e("div",ua,[(i(!0),r(b,null,k(d.otherService.data,n=>(i(),r("div",null,[(i(),w(Y,{service:n,key:n.id},null,8,["service"]))]))),256)),d.otherService==null?(i(),r("div",ga,va)):_("",!0)])]),_("",!0),c(ee,{visible:y.value,"onUpdate:visible":a[18]||(a[18]=n=>y.value=n),position:"left",modal:"",header:"Confirmer Comannde Finis",style:{width:"40rem"},breakpoints:{"1199px":"20vw","575px":"90vw"}},{default:u(()=>[e("form",{onSubmit:re(J,["prevent"]),class:"flex flex-col justify-center flex-grow"},[e("div",_a,[e("div",fa,[e("span",xa,l(t.value.user.name),1),ba,t.value.user.is_online?(i(),r("span",ya," En ligne ")):(i(),r(b,{key:1},[m(" en ligne "+l(t.value.user.last_activity),1)],64))]),wa]),e("div",ka,[M(e("textarea",{required:"","onUpdate:modelValue":a[14]||(a[14]=n=>s(v).body=n),class:"w-full p-2 rounded-lg focus:ring-0 dark:bg-gray-800 dark:text-gray-100 focus:border-amber-500",rows:"4",placeholder:"Votre message..."},null,512),[[oe,s(v).body]]),e("div",Ca,[e("div",ja,[e("div",{onClick:a[15]||(a[15]=n=>s(v).body+=" Quelle est la durée estimée pour la réalisation de ce service ?"),class:"p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"},Ba),e("div",{onClick:a[16]||(a[16]=n=>s(v).body+=" Quels sont les détails spécifiques inclus dans ce service ?"),class:"p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"},Ma),e("div",{onClick:a[17]||(a[17]=n=>s(v).body+=" Pouvez-vous me fournir plus d'informations sur les tarifs ?"),class:"p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"},$a)])])]),e("div",Pa,[za,S.value===""?(i(),r("div",Va,[c(L,{type:"submit",loading:x.value,outlined:"",label:"Envoyer"},null,8,["loading"])])):(i(),r("div",Ea,[c(B,{href:o.route("user.chat",S.value)},{default:u(()=>[c(L,{severity:"success",outlined:"",label:"Voir la conversation"})]),_:1},8,["href"])]))])],40,ha)]),_:1},8,["visible"])])}}});export{qa as default};

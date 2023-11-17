import{a9 as ae,I as ie,ar as le,d as g,E as oe,T as re,m as _,e as r,a as e,b as c,w as u,t as o,A as M,P as q,n as $,f as m,g as v,u as n,c as y,F as f,j as w,q as de,W as O,o as i,at as P,au as T,aB as z,av as I,aw as V,aC as E,ax as A,ay as D,Q as ce,p as ue}from"./app-734f03f5.js";import{_ as pe}from"./WebLayout-b2335c8e.js";import"./image.esm-622a1679.js";import{s as F,a as ge}from"./tabpanel.esm-a2908a99.js";import"./userInfo-23b80749.js";var me=`
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
`;ae(me,{name:"galleria",manual:!0});const ve={class:"min-h-screen py-2 pt-16 bg-gray-100 md:px-6 dark:bg-gray-900"},he=e("div",{class:"hidden px-2"}," All/Service ",-1),_e={class:"px-4 mt-4"},fe={class:"flex","aria-label":"Breadcrumb"},xe={class:"inline-flex items-center space-x-1 md:space-x-3"},be=e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},[e("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})]),v(" Back ")])],-1),ye={"aria-current":"page"},we=e("svg",{class:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1),ke=e("span",{class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},"Services",-1),Ce={"aria-current":"page"},je={class:"flex items-center"},Se=e("svg",{class:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1),Be={class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},Le={class:"container relative px-4 py-4 mx-auto"},Me={class:"relative flex flex-col gap-4 lg:flex-row lg:space-x-4"},$e={id:"card",class:"relative flex-col mx-2 mb-6 lg:flex lg:order-2 lg:mb-0 lg:w-1/3"},Pe={class:"flex lg:sticky lg:top-[8rem] flex-col gap-2 p-4 card-sticky"},Te={class:"p-2 bg-white rounded-md shadow-lg lg:sticky dark:bg-gray-800"},ze={class:"mt-2 sm:col-span-8 lg:col-span-7"},Ie={class:"flex text-lg font-bold text-gray-800 truncate lg:hidden dark:text-gray-300 sm:pr-12"},Ve={"aria-labelledby":"information-heading",class:"mt-1"},Ee=e("h3",{id:"information-heading",class:"sr-only"},"Product information",-1),Ae={class:"flex justify-between my-3"},De=e("h4",{class:"sr-only"},"Reviews",-1),Fe={class:"flex items-center"},Ne=de('<div class="flex items-center"><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z"></path></svg><span class="text-sm font-semibold text-gray-700 dark:text-gray-100">(2) </span></div><p class="sr-only">3 out of 5 stars</p>',2),He={href:"#",class:"ml-3 text-sm font-medium text-amber-600 hover:text-indigo-500"},Qe={class:"flex justify-between mt-3"},qe={class:"flex items-center"},Oe={class:""},Re=e("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),Ue=[Re],Ge=e("svg",{class:"w-5 h-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),Je=[Ge],Ke=e("div",null,null,-1),We={key:0,class:"mt-4 mb-3"},Ze={class:"flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"},Xe={class:"flex justify-between gap-2 px-4"},Ye={class:"py-2 text-lg text-gray-800"},et={class:"text-lg font-bold text-amber-600"},tt=e("div",null,[e("div",{id:"",class:"mt-4"},[e("div",{class:"px-4"},[e("ul",{class:"flex gap-4"})])])],-1),nt={"aria-labelledby":"options-heading",class:"px-4 mt-1"},st=e("h3",{id:"options-heading",class:"sr-only"},"Service options",-1),at={class:"flex justify-between mt-4"},it={class:"flex gap-2 font-medium text-gray-700 dark:text-gray-100"},lt=e("span",null,[e("i",{class:"pi pi-clock"})],-1),ot={key:0},rt={key:1},dt={key:2},ct={class:"flex gap-2 font-medium text-gray-700 dark:text-gray-100"},ut=e("span",null,[e("i",{class:"pi pi-replay"})],-1),pt={key:0},gt={key:1},mt={key:2},vt={class:"flex"},ht=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})],-1),_t=e("span",null,"Ajouter au Panier",-1),ft=[ht,_t],xt={class:"grid w-full gap-2 p-6 bg-white rounded-lg dark:bg-gray-800"},bt={class:"w-full px-4 bg-gray-50 dark:bg-gray-800 md:w-2/3"},yt={class:"p-4 dark:bg-gray-800"},wt={class:"flex flex-col mb-4"},kt={class:"mb-4 text-lg font-bold text-gray-700 md:text-xl dark:text-gray-200"},Ct={class:"flex gap-4 mt-2"},jt={class:"flex flex-col gap-3 my-auto"},St={class:"hidden text-base font-medium text-gray-500"},Bt={class:"flex flex-row gap-2"},Lt={class:"hidden text-base font-medium"},Mt={key:0,class:"text-base font-medium"},$t={class:"text-green-600"},Pt={class:"mt-4"},Tt={class:"lg:w-10/12 w-full rounded-lg"},zt=["src","alt"],It={class:"hidden"},Vt={class:"mt-4 text-lg font-bold text-gray-800 md:text-2xl dark:text-gray-200"},Et={class:"mt-8 card"},At={class:"py-5 min-h-64"},Dt={class:"mb-4 prose text-gray-800 md:text-base dark:text-gray-200"},Ft=["innerHTML"],Nt={class:"grid grid-cols-2 gap-4 mb-4"},Ht=e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Support :",-1),Qt={id:"support",class:"text-gray-800"},qt={class:"px-2 mt-2"},Ot={class:"px-4 list-disc dark:text-gray-50"},Rt={class:"grid hidden grid-cols-2 gap-4 mb-4"},Ut=e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Prix :",-1),Gt={class:"px-2 mt-2 text-gray-700 dark:text-gray-300"},Jt={class:"text-lg text-green-700"},Kt=e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Délai :",-1),Wt={class:"text-gray-700 dark:text-gray-300"},Zt=e("div",{class:"grid grid-cols-2 gap-4 mb-4"},null,-1),Xt={class:"grid grid-cols-2 gap-4 mb-6"},Yt=e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Besoin pour ce service :",-1),en=["innerHTML"],tn={key:0,class:"grid grid-cols-1 gap-4"},nn={class:"p-4 bg-white rounded-md shadow dark:bg-gray-800"},sn={class:"flex flex-row gap-2 p-4 mb-4"},an=["src"],ln={class:"p-4 mt-2 font-sans text-gray-700 dark:text-gray-200"},on=["innerHTML"],rn={key:0},dn={class:"flex gap-4 p-2"},cn=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),un=[cn],pn=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),gn=[pn],mn={class:"p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600"},vn={class:"text-sm text-gray-700 md:text-base dark:text-gray-300"},hn={class:"flex items-center my-4"},_n=e("svg",{class:"w-4 h-4 mr-1 text-yellow-500 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z"})],-1),fn={class:"text-sm font-semibold text-gray-700 dark:text-gray-100"},xn={class:"flex gap-2 items-center"},bn=e("div",null,[e("p",{class:"font-bold dark:text-gray-200 text-gray-800"},"Georges")],-1),yn={class:"px-4 mt-6"},wn=e("p",{class:"mb-4 text-lg font-medium text-gray-800 dark:text-gray-200"},"À propos du freelance ",-1),kn={class:"flex items-center gap-4 mb-8"},Cn={class:"block text-gray-700 truncate dark:text-gray-300"},jn={class:"text-base text-gray-700 dark:text-gray-100"},Sn={class:"px-4 mt-4"},Bn=e("div",{class:"px-4"},[e("p",{class:"text-lg font-bold text-gray-800 dark:text-gray-200"},"Du meme Categorie")],-1),Ln={class:"grid gap-4 px-4 py-4 mx-auto md:grid-cols-4"},Mn={key:0,class:"flex items-center justify-center h-64"},$n=e("span",{class:"text-lg font-medium text-gray-500"}," Aucun élément trouvé. ",-1),Pn=[$n],Tn=["onSubmit"],zn={class:"flex flex-col items-start justify-between mb-4"},In={class:"flex items-center space-x-2"},Vn={class:"text-lg font-semibold"},En=e("span",{class:"rounded-full h-2 w-2"},null,-1),An={key:0,class:"text-xs text-green-500"},Dn=e("span",{class:"text-xs text-gray-500"},"Temps de réponse : 2 heures",-1),Fn={class:"flex-grow space-y-2"},Nn={class:"flex flex-col gap-2"},Hn={class:"flex flex-col gap-2"},Qn=e("p",null,"Quelle est la durée estimée pour la réalisation de ce service ?",-1),qn=[Qn],On=e("p",null,"Quels sont les détails spécifiques inclus dans ce service ?",-1),Rn=[On],Un=e("p",null,"Pouvez-vous me fournir plus d'informations sur les tarifs ?",-1),Gn=[Un],Jn={class:"flex justify-between mt-4 space-x-2"},Kn=e("div",{class:"flex gap-3"},[e("button",{class:"flex items-center p-2 rounded-full shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"})])])],-1),Wn={key:0},Zn={key:1},Xn="/storage/",as=Object.assign({layout:pe},{__name:"OneService",props:{service:Object,otherService:Array,commentaires:Array},setup(R){const d=R,U=ie(),G=le(),k=g(!1),x=g(d.service.data.likeUser),p=g("basic"),t=oe(()=>d.service.data),C=g(d.service.data.basic_price),J=g(null),K=l=>{J.value=l},N=l=>{swiperInstanceServices.value&&(l==="prev"?swiperInstanceServices.value.slidePrev():l==="next"&&swiperInstanceServices.value.slideNext())},j=l=>{C.value=l},b=g(!1),W=g(!1),S=g(""),Z=async()=>{b.value=!b.value;try{const l=await O.post(route("contactFreelance"),{body:h.body,freelance_id:d.service.data.freelance.id,user_id:d.service.data.user.id,service_id:d.service.data.id});S.value=l.data.chatId,b.value=!1,W.value=!0}catch(l){b.value=!1,console.log(l)}},h=re({body:"",freelance_id:d.service.data.freelance.id,user_id:d.service.data.user.id,service_id:d.service.data.id}),X=async()=>{x.value=!x.value;try{const l=await O.post(route("like.service"),{like:x.value,service:d.service.data.id})}catch(l){console.log(l)}},Y=g([]);for(let l=0;l<d.service.data.files.length;l++)Y.value.push({itemImageSrc:"/storage/"+d.service.data.files[l],thumbnailImageSrc:"/storage/"+d.service.data.files[l],alt:`Description for Image ${l+1}`,title:`Title ${l+1}`});const ee=()=>{const l={id:d.service.data.id,name:d.service.data.title,price:C.value,level:p.value,image:Xn+d.service.data.files[0]};G.addItem(l),U.add({severity:"info",summary:"Message",detail:"Service Ajouter au panier",group:"br",life:1e3})};return g([{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}]),(l,s)=>{const B=_("Link"),te=_("Toast"),L=_("Button"),H=_("Photo"),ne=_("ServiceCard"),se=_("Dialog");return i(),r("div",ve,[he,e("div",_e,[e("nav",fe,[e("ol",xe,[be,e("li",ye,[c(B,{href:l.route("categories"),class:"hidden items-center"},{default:u(()=>[we,ke]),_:1},8,["href"])]),e("li",Ce,[e("div",je,[Se,e("span",Be,o(t.value.service_numero),1)])])])])]),c(te,{position:"bottom-right",group:"br"}),e("div",Le,[e("div",Me,[e("div",$e,[e("div",Pe,[e("div",Te,[e("div",ze,[e("h2",Ie,o(t.value.title),1),e("section",Ve,[Ee,e("div",Ae,[De,e("div",Fe,[Ne,e("a",He,o(t.value.orderCount)+" reviews",1)]),e("div",Qe,[e("div",qe,[e("button",{onClick:s[0]||(s[0]=a=>X()),class:"flex gap-1 mr-2"},[M(e("span",Oe,Ue,512),[[q,!x.value]]),M(e("span",null,Je,512),[[q,x.value]])])]),Ke])]),t.value.premium_price&&t.value.extra_price?(i(),r("div",We,[e("ul",Ze,[e("li",{class:$(["w-full sm:border-r dark:border-gray-600",p.value==="Basic"?"border-b-4 border-amber-600":""]),onClick:s[2]||(s[2]=a=>p.value="Basic")},[e("button",{onClick:s[1]||(s[1]=a=>j(t.value.basic_price)),class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"}," Basic ")],2),e("li",{class:$(["w-full sm:border-r dark:border-gray-600",p.value==="Premium"?"border-b-4 border-amber-600":""]),onClick:s[4]||(s[4]=a=>p.value="Premium")},[e("button",{onClick:s[3]||(s[3]=a=>j(t.value.premium_price)),class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"}," Premium ")],2),e("li",{class:$(["w-full dark:border-gray-600",p.value==="Extra"?"border-b-4 border-amber-600":""]),onClick:s[6]||(s[6]=a=>p.value="Extra")},[e("button",{onClick:s[5]||(s[5]=a=>j(t.value.extra_price)),class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"}," Extra ")],2)])])):m("",!0),e("div",Xe,[e("p",Ye,o(p.value),1),e("p",et,o(C.value)+" $",1)]),tt]),e("section",nt,[st,e("div",null,[e("div",at,[e("p",it,[lt,p.value==="basic"?(i(),r("span",ot,o(t.value.basic_delivery_time),1)):p.value==="Premium"?(i(),r("span",rt,o(t.value.premium_delivery_time),1)):(i(),r("span",dt,o(t.value.extra_delivery_time),1)),v(" Jours Delai ")]),e("p",ct,[ut,p.value==="basic"?(i(),r("span",pt,o(t.value.basic_revision),1)):p.value==="Premium"?(i(),r("span",gt,o(t.value.premium_revision),1)):(i(),r("span",mt,o(t.value.extra_revision),1)),v(" Revisions ")])]),e("div",vt,[e("button",{onClick:s[7]||(s[7]=a=>ee()),type:"button",id:"",class:"flex items-center justify-center w-full gap-1 px-8 py-3 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},ft)])])])]),e("div",xt,[c(L,{outlined:"",onClick:s[8]||(s[8]=a=>k.value=!k.value),size:"small",label:"Contacter"})])])])]),e("div",bt,[e("div",yt,[e("div",wt,[e("div",null,[e("p",kt,o(t.value.title),1)]),e("div",Ct,[e("div",jt,[e("a",St,o(t.value.freelance.nom),1),e("div",Bt,[e("span",Lt,"Niveau "+o(t.value.freelance.level),1),t.value.commandeEncours!=0?(i(),r("span",Mt,[e("span",$t,o(t.value.commandeEncours),1),v(" commande en cours ")])):m("",!0)])])]),e("div",Pt,[e("div",Tt,[c(n(D),{modules:[n(T),n(z),n(I),n(V),n(E),n(A)],effect:"fade","slides-per-view":1,navigation:""},{default:u(()=>[(i(!0),r(f,null,w(d.service.data.files,(a,Q)=>(i(),y(n(P),null,{default:u(()=>[e("img",{class:"object-fill rounded-md h-full lg:h-10/12 swiper-lazy",src:"/storage/"+a,alt:a},null,8,zt)]),_:2},1024))),256))]),_:1},8,["modules"])])]),e("div",It,[e("p",Vt,o(t.value.title),1)]),e("div",Et,[c(n(ge),null,{default:u(()=>[c(n(F),{header:"INFO"},{default:u(()=>[e("div",At,[e("div",Dt,[e("div",{innerHTML:t.value.description},null,8,Ft)]),e("div",Nt,[e("div",null,[Ht,e("div",Qt,[e("div",qt,[e("ul",Ot,[(i(!0),r(f,null,w(t.value.basic_support,(a,Q)=>(i(),r("li",null,o(a),1))),256))])])])])]),e("div",Rt,[e("div",null,[Ut,e("p",Gt,[v("à partir de "),e("span",Jt,o(t.value.price),1)])]),e("div",null,[Kt,e("p",Wt,o(t.value.basic_delivery_time)+" jours ",1)])]),Zt,e("div",Xt,[e("div",null,[Yt,e("div",{class:"prose",innerHTML:t.value.need_service},null,8,en)])])])]),_:1}),c(n(F),{header:"Example"},{default:u(()=>[t.value.example!=null?(i(),r("div",tn,[e("div",nn,[e("div",sn,[c(n(D),{modules:[n(T),n(z),n(I),n(V),n(E),n(A)],effect:"fade","slides-per-view":1,navigation:""},{default:u(()=>[(i(!0),r(f,null,w(t.value.example.image,(a,Q)=>(i(),y(n(P),null,{default:u(()=>[e("img",{class:"object-fill rounded-md h-10/12 swiper-lazy",src:"/storage/"+a,alt:"bro"},null,8,an)]),_:2},1024))),256))]),_:1},8,["modules"])]),e("div",ln,[e("div",{innerHTML:t.value.example.description},null,8,on)])])])):m("",!0)]),_:1}),c(n(F),{header:"Commentaires"},{default:u(()=>[d.commentaires.length>0?(i(),r("div",rn,[e("div",dn,[e("button",{onClick:s[9]||(s[9]=a=>N("prev")),class:"p-0 rounded-full btn2 btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},un),e("button",{onClick:s[10]||(s[10]=a=>N("next")),class:"p-0 rounded-full btn2 btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},gn)])])):m("",!0),c(n(D),{modules:[n(T),n(z),n(I),n(V),n(E),n(A)],effect:"fade","slides-per-view":1,navigation:"",onSwiper:K},{default:u(()=>[(i(!0),r(f,null,w(d.commentaires,a=>(i(),y(n(P),null,{default:u(()=>[e("div",null,[e("div",mn,[e("p",vn,o(a.commentaire),1),e("div",hn,[_n,e("span",fn,o(a.satisfaction),1)]),e("div",null,[e("div",xn,[c(H,{user:a.user,taille:"10"},null,8,["user"]),bn])])])])]),_:2},1024))),256))]),_:1},8,["modules"])]),_:1})]),_:1})]),e("div",yn,[wn,e("div",kn,[t.value.user!=null?(i(),y(H,{key:0,user:t.value.user},null,8,["user"])):m("",!0),e("div",null,[c(B,{href:l.route("profileFreelance",t.value.freelance.identifiant),class:"font-bold text-gray-800 dark:text-gray-300"},{default:u(()=>[v(o(t.value.freelance.nom),1)]),_:1},8,["href"]),e("p",Cn,o(t.value.category.name),1)])]),e("div",jn,o(t.value.freelance.description),1)])])])])])]),e("div",Sn,[Bn,e("div",Ln,[(i(!0),r(f,null,w(d.otherService.data,a=>(i(),r("div",null,[(i(),y(ne,{service:a,key:a.id},null,8,["service"]))]))),256)),d.otherService==null?(i(),r("div",Mn,Pn)):m("",!0)])]),m("",!0),c(se,{visible:k.value,"onUpdate:visible":s[20]||(s[20]=a=>k.value=a),position:"left",modal:"",header:"Confirmer Comannde Finis",style:{width:"40rem"},breakpoints:{"1199px":"20vw","575px":"90vw"}},{default:u(()=>[e("form",{onSubmit:ue(Z,["prevent"]),class:"flex flex-col justify-center flex-grow"},[e("div",zn,[e("div",In,[e("span",Vn,o(t.value.user.name),1),En,t.value.user.is_online?(i(),r("span",An," En ligne ")):(i(),r(f,{key:1},[v(" en ligne "+o(t.value.user.last_activity),1)],64))]),Dn]),e("div",Fn,[M(e("textarea",{required:"","onUpdate:modelValue":s[16]||(s[16]=a=>n(h).body=a),class:"w-full p-2 rounded-lg focus:ring-0 dark:bg-gray-800 dark:text-gray-100 focus:border-amber-500",rows:"4",placeholder:"Votre message..."},null,512),[[ce,n(h).body]]),e("div",Nn,[e("div",Hn,[e("div",{onClick:s[17]||(s[17]=a=>n(h).body+=" Quelle est la durée estimée pour la réalisation de ce service ?"),class:"p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"},qn),e("div",{onClick:s[18]||(s[18]=a=>n(h).body+=" Quels sont les détails spécifiques inclus dans ce service ?"),class:"p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"},Rn),e("div",{onClick:s[19]||(s[19]=a=>n(h).body+=" Pouvez-vous me fournir plus d'informations sur les tarifs ?"),class:"p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"},Gn)])])]),e("div",Jn,[Kn,S.value===""?(i(),r("div",Wn,[c(L,{type:"submit",loading:b.value,outlined:"",label:"Envoyer"},null,8,["loading"])])):(i(),r("div",Zn,[c(B,{href:l.route("user.chat",S.value)},{default:u(()=>[c(L,{severity:"success",outlined:"",label:"Voir la conversation"})]),_:1},8,["href"])]))])],40,Tn)]),_:1},8,["visible"])])}}});export{as as default};

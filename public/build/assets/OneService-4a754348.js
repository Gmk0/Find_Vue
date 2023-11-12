import{a7 as K,l as Z,I as G,ap as Q,d as _,E as W,m as f,e as r,a as e,b as m,w as g,t as n,A as M,P,n as j,f as x,g as u,u as s,c as b,F as y,j as w,q as X,U as Y,o as i,ar as T,as as $,az as z,at as I,au as A,aA as E,av as V,aw as N,s as ee,v as te}from"./app-f00c7b0b.js";import{_ as ae}from"./WebLayout-584c7add.js";import"./image.esm-96273580.js";import{s as C,a as ne}from"./tabpanel.esm-fe08ffd6.js";import"./userInfo-a958bac9.js";var ie=`
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
`;K(ie,{name:"galleria",manual:!0});const a=v=>(ee("data-v-74a6b005"),v=v(),te(),v),se={class:"min-h-screen py-2 pt-16 bg-gray-100 md:px-6 dark:bg-gray-900"},le=a(()=>e("div",{class:"hidden px-2"}," All/Service ",-1)),re={class:"px-4 mt-4"},oe={class:"flex","aria-label":"Breadcrumb"},de={class:"inline-flex items-center space-x-1 md:space-x-3"},ce=a(()=>e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},[e("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})]),u(" Back ")])],-1)),pe={"aria-current":"page"},ge=a(()=>e("svg",{class:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1)),me=a(()=>e("span",{class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},"Services",-1)),ue={"aria-current":"page"},ve={class:"flex items-center"},he=a(()=>e("svg",{class:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1)),_e={class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},xe={class:"container relative px-4 py-4 mx-auto"},fe={class:"relative flex flex-col gap-4 lg:flex-row lg:space-x-4"},be={id:"card",class:"relative flex-col mx-2 mb-6 lg:flex lg:order-2 lg:mb-0 lg:w-1/3"},ye={class:"flex lg:sticky lg:top-[8rem] flex-col gap-2 p-4 card-sticky"},we={class:"p-2 bg-white rounded-md shadow-lg lg:sticky dark:bg-gray-800"},ke={class:"mt-2 sm:col-span-8 lg:col-span-7"},Se={class:"flex text-lg font-bold text-gray-800 truncate lg:hidden dark:text-gray-300 sm:pr-12"},je={"aria-labelledby":"information-heading",class:"mt-1"},Ce=a(()=>e("h3",{id:"information-heading",class:"sr-only"},"Product information",-1)),Le={class:"flex justify-between my-3"},Be=a(()=>e("h4",{class:"sr-only"},"Reviews",-1)),Me={class:"flex items-center"},Pe=X('<div class="flex items-center" data-v-74a6b005><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-74a6b005><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" data-v-74a6b005></path></svg><span class="text-sm font-semibold text-gray-700 dark:text-gray-100" data-v-74a6b005>(2) </span></div><p class="sr-only" data-v-74a6b005>3 out of 5 stars</p>',2),Te={href:"#",class:"ml-3 text-sm font-medium text-amber-600 hover:text-indigo-500"},$e={class:"flex justify-between mt-3"},ze={class:"flex items-center"},Ie={class:""},Ae=a(()=>e("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1)),Ee=[Ae],Ve=a(()=>e("svg",{class:"w-5 h-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1)),Ne=[Ve],Fe=a(()=>e("div",null,null,-1)),He={key:0,class:"mt-4 mb-3"},De={class:"flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"},Oe={class:"flex justify-between gap-2 px-4"},Re={class:"py-2 text-lg text-gray-800"},Ue={class:"text-lg font-bold text-amber-600"},qe=a(()=>e("div",null,[e("div",{id:"",class:"mt-4"},[e("div",{class:"px-4"},[e("ul",{class:"flex gap-4"})])])],-1)),Je={"aria-labelledby":"options-heading",class:"px-4 mt-1"},Ke=a(()=>e("h3",{id:"options-heading",class:"sr-only"},"Service options",-1)),Ze={class:"flex justify-between mt-4"},Ge={class:"flex gap-2 font-medium text-gray-700 dark:text-gray-100"},Qe=a(()=>e("span",null,[e("i",{class:"pi pi-clock"})],-1)),We={key:0},Xe={key:1},Ye={key:2},et={class:"flex gap-2 font-medium text-gray-700 dark:text-gray-100"},tt=a(()=>e("span",null,[e("i",{class:"pi pi-replay"})],-1)),at={key:0},nt={key:1},it={key:2},st={class:"flex"},lt=a(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})],-1)),rt=a(()=>e("span",null,"Ajouter au Panier",-1)),ot=[lt,rt],dt=a(()=>e("div",{class:"grid w-full gap-2 p-6 bg-white rounded-lg dark:bg-gray-800"},[e("button",null,"Contacter")],-1)),ct={class:"w-full px-4 bg-gray-50 dark:bg-gray-800 md:w-2/3"},pt={class:"p-4 dark:bg-gray-800"},gt={class:"flex flex-col mb-4"},mt={class:"mb-4 text-lg font-bold text-gray-700 md:text-xl dark:text-gray-200"},ut={class:"flex gap-4 mt-2"},vt={class:"flex flex-col gap-3 my-auto"},ht={class:"hidden text-base font-medium text-gray-500"},_t={class:"flex flex-row gap-2"},xt={class:"hidden text-base font-medium"},ft={key:0,class:"text-base font-medium"},bt={class:"text-green-600"},yt={class:"mt-4"},wt={class:"w-10/12 rounded-lg"},kt=["src","alt"],St={class:"hidden"},jt={class:"mt-4 text-lg font-bold text-gray-800 md:text-2xl dark:text-gray-200"},Ct={class:"mt-8 card"},Lt={class:"py-5 min-h-64"},Bt={class:"mb-4 prose text-gray-800 md:text-base dark:text-gray-200"},Mt=["innerHTML"],Pt={class:"grid grid-cols-2 gap-4 mb-4"},Tt=a(()=>e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Support :",-1)),$t={id:"support",class:"text-gray-800"},zt={class:"px-2 mt-2"},It={class:"px-4 list-disc dark:text-gray-50"},At={class:"grid hidden grid-cols-2 gap-4 mb-4"},Et=a(()=>e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Prix :",-1)),Vt={class:"px-2 mt-2 text-gray-700 dark:text-gray-300"},Nt={class:"text-lg text-green-700"},Ft=a(()=>e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Délai :",-1)),Ht={class:"text-gray-700 dark:text-gray-300"},Dt=a(()=>e("div",{class:"grid grid-cols-2 gap-4 mb-4"},null,-1)),Ot={class:"grid grid-cols-2 gap-4 mb-6"},Rt=a(()=>e("p",{class:"font-bold text-gray-500 dark:text-gray-200"},"Besoin pour ce service :",-1)),Ut=["innerHTML"],qt={key:0,class:"grid grid-cols-1 gap-4"},Jt={class:"p-4 bg-white rounded-md shadow dark:bg-gray-800"},Kt={class:"flex flex-row gap-2 p-4 mb-4"},Zt=["src"],Gt={class:"p-4 mt-2 font-sans text-gray-700 dark:text-gray-200"},Qt=["innerHTML"],Wt=a(()=>e("div",null,[e("div",{class:"p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600"},[e("p",{class:"text-sm text-gray-700 md:text-base dark:text-gray-300"}," Hello"),e("div",{class:"flex items-center my-4"},[e("svg",{class:"w-4 h-4 mr-1 text-yellow-500 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z"})]),e("span",{class:"text-sm font-semibold text-gray-700 dark:text-gray-100"},"(3) ")]),e("div",null,[e("div"),e("div",null,[e("p",{class:"font-bold text-gray-800"},"Bro")])])])],-1)),Xt={class:"px-4 mt-6"},Yt=a(()=>e("p",{class:"mb-4 text-lg font-medium text-gray-800 dark:text-gray-200"},"À propos du freelance ",-1)),ea={class:"flex items-center gap-4 mb-8"},ta={class:"block text-gray-700 truncate dark:text-gray-300"},aa={class:"text-base text-gray-700 dark:text-gray-100"},na={class:"px-4 mt-4"},ia=a(()=>e("div",{class:"px-4"},[e("p",{class:"text-lg font-bold text-gray-800 dark:text-gray-200"},"Du meme Categorie")],-1)),sa={class:"grid gap-4 px-4 py-4 mx-auto md:grid-cols-4"},la={key:0,class:"flex items-center justify-center h-64"},ra=a(()=>e("span",{class:"text-lg font-medium text-gray-500"}," Aucun élément trouvé. ",-1)),oa=[ra],da="/storage/",ca=Object.assign({layout:ae},{__name:"OneService",props:{service:Object,otherService:Array},setup(v){const c=v,F=G(),H=Q(),h=_(c.service.data.likeUser),p=_("basic"),t=W(()=>c.service.data),k=_(c.service.data.basic_price),S=o=>{k.value=o},D=async()=>{h.value=!h.value;try{const o=await Y.post(route("like.service"),{like:h.value,service:c.service.data.id})}catch(o){console.log(o)}},O=_([]);for(let o=0;o<c.service.data.files.length;o++)O.value.push({itemImageSrc:"/storage/"+c.service.data.files[o],thumbnailImageSrc:"/storage/"+c.service.data.files[o],alt:`Description for Image ${o+1}`,title:`Title ${o+1}`});const R=()=>{const o={id:c.service.data.id,name:c.service.data.title,price:k.value,level:p.value,image:da+c.service.data.files[0]};H.addItem(o),F.add({severity:"info",summary:"Message",detail:"Service Ajouter au panier",group:"br",life:1e3})};return _([{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}]),(o,d)=>{const L=f("Link"),U=f("Toast"),q=f("Photo"),J=f("ServiceCard");return i(),r("div",se,[le,e("div",re,[e("nav",oe,[e("ol",de,[ce,e("li",pe,[m(L,{href:o.route("categories"),class:"hidden items-center"},{default:g(()=>[ge,me]),_:1},8,["href"])]),e("li",ue,[e("div",ve,[he,e("span",_e,n(t.value.service_numero),1)])])])])]),m(U,{position:"bottom-right",group:"br"}),e("div",xe,[e("div",fe,[e("div",be,[e("div",ye,[e("div",we,[e("div",ke,[e("h2",Se,n(t.value.title),1),e("section",je,[Ce,e("div",Le,[Be,e("div",Me,[Pe,e("a",Te,n(t.value.orderCount)+" reviews",1)]),e("div",$e,[e("div",ze,[e("button",{onClick:d[0]||(d[0]=l=>D()),class:"flex gap-1 mr-2"},[M(e("span",Ie,Ee,512),[[P,!h.value]]),M(e("span",null,Ne,512),[[P,h.value]])])]),Fe])]),t.value.premium_price&&t.value.extra_price?(i(),r("div",He,[e("ul",De,[e("li",{class:j(["w-full sm:border-r dark:border-gray-600",p.value==="Basic"?"border-b-4 border-amber-600":""]),onClick:d[2]||(d[2]=l=>p.value="Basic")},[e("button",{onClick:d[1]||(d[1]=l=>S(t.value.basic_price)),class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"}," Basic ")],2),e("li",{class:j(["w-full sm:border-r dark:border-gray-600",p.value==="Premium"?"border-b-4 border-amber-600":""]),onClick:d[4]||(d[4]=l=>p.value="Premium")},[e("button",{onClick:d[3]||(d[3]=l=>S(t.value.premium_price)),class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"}," Premium ")],2),e("li",{class:j(["w-full dark:border-gray-600",p.value==="Extra"?"border-b-4 border-amber-600":""]),onClick:d[6]||(d[6]=l=>p.value="Extra")},[e("button",{onClick:d[5]||(d[5]=l=>S(t.value.extra_price)),class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"}," Extra ")],2)])])):x("",!0),e("div",Oe,[e("p",Re,n(p.value),1),e("p",Ue,n(k.value)+" $",1)]),qe]),e("section",Je,[Ke,e("div",null,[e("div",Ze,[e("p",Ge,[Qe,p.value==="basic"?(i(),r("span",We,n(t.value.basic_delivery_time),1)):p.value==="Premium"?(i(),r("span",Xe,n(t.value.premium_delivery_time),1)):(i(),r("span",Ye,n(t.value.extra_delivery_time),1)),u(" Jours Delai ")]),e("p",et,[tt,p.value==="basic"?(i(),r("span",at,n(t.value.basic_revision),1)):p.value==="Premium"?(i(),r("span",nt,n(t.value.premium_revision),1)):(i(),r("span",it,n(t.value.extra_revision),1)),u(" Revisions ")])]),e("div",st,[e("button",{onClick:d[7]||(d[7]=l=>R()),type:"button",id:"",class:"flex items-center justify-center w-full gap-1 px-8 py-3 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},ot)])])])]),dt])])]),e("div",ct,[e("div",pt,[e("div",gt,[e("div",null,[e("p",mt,n(t.value.title),1)]),e("div",ut,[e("div",vt,[e("a",ht,n(t.value.freelance.nom),1),e("div",_t,[e("span",xt,"Niveau "+n(t.value.freelance.level),1),t.value.commandeEncours!=0?(i(),r("span",ft,[e("span",bt,n(t.value.commandeEncours),1),u(" commande en cours ")])):x("",!0)])])]),e("div",yt,[e("div",wt,[m(s(N),{modules:[s($),s(z),s(I),s(A),s(E),s(V)],effect:"fade","slides-per-view":1,navigation:""},{default:g(()=>[(i(!0),r(y,null,w(c.service.data.files,(l,B)=>(i(),b(s(T),null,{default:g(()=>[e("img",{class:"object-fill rounded-md h-10/12 swiper-lazy",src:"/storage/"+l,alt:l},null,8,kt)]),_:2},1024))),256))]),_:1},8,["modules"])])]),e("div",St,[e("p",jt,n(t.value.title),1)]),e("div",Ct,[m(s(ne),null,{default:g(()=>[m(s(C),{header:"INFO"},{default:g(()=>[e("div",Lt,[e("div",Bt,[e("div",{innerHTML:t.value.description},null,8,Mt)]),e("div",Pt,[e("div",null,[Tt,e("div",$t,[e("div",zt,[e("ul",It,[(i(!0),r(y,null,w(t.value.basic_support,(l,B)=>(i(),r("li",null,n(l),1))),256))])])])])]),e("div",At,[e("div",null,[Et,e("p",Vt,[u("à partir de "),e("span",Nt,n(t.value.price),1)])]),e("div",null,[Ft,e("p",Ht,n(t.value.basic_delivery_time)+" jours ",1)])]),Dt,e("div",Ot,[e("div",null,[Rt,e("div",{class:"prose",innerHTML:t.value.need_service},null,8,Ut)])])])]),_:1}),m(s(C),{header:"Example"},{default:g(()=>[t.value.example!=null?(i(),r("div",qt,[e("div",Jt,[e("div",Kt,[m(s(N),{modules:[s($),s(z),s(I),s(A),s(E),s(V)],effect:"fade","slides-per-view":1,navigation:""},{default:g(()=>[(i(!0),r(y,null,w(t.value.example.image,(l,B)=>(i(),b(s(T),null,{default:g(()=>[e("img",{class:"object-fill rounded-md h-10/12 swiper-lazy",src:"/storage/"+l,alt:"bro"},null,8,Zt)]),_:2},1024))),256))]),_:1},8,["modules"])]),e("div",Gt,[e("div",{innerHTML:t.value.example.description},null,8,Qt)])])])):x("",!0)]),_:1}),m(s(C),{header:"Commentaires"},{default:g(()=>[Wt]),_:1})]),_:1})]),e("div",Xt,[Yt,e("div",ea,[t.value.user!=null?(i(),b(q,{key:0,user:t.value.user},null,8,["user"])):x("",!0),e("div",null,[m(L,{href:o.route("profileFreelance",t.value.freelance.identifiant),class:"font-bold text-gray-800 dark:text-gray-300"},{default:g(()=>[u(n(t.value.freelance.nom),1)]),_:1},8,["href"]),e("p",ta,n(t.value.category.name),1)])]),e("div",aa,n(t.value.freelance.description),1)])])])])])]),e("div",na,[ia,e("div",sa,[(i(!0),r(y,null,w(c.otherService.data,l=>(i(),r("div",null,[(i(),b(J,{service:l,key:l.id},null,8,["service"]))]))),256)),c.otherService==null?(i(),r("div",la,oa)):x("",!0)])])])}}}),ha=Z(ca,[["__scopeId","data-v-74a6b005"]]);export{ha as default};

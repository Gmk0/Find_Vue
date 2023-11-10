import{I as D,d as g,T as E,y as w,J as j,A as r,e as N,b as e,a as l,w as c,u as t,l as A,p as F,o as P,g as M,q as x}from"./app-211ec483.js";import{_ as $}from"./FreelanceLayout-734a855f.js";import"./MainSidebarF-e3228c86.js";import"./userInfo-a5293e16.js";const z={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},G={class:"flex flex-col"},W={class:"flex","aria-label":"Breadcrumb"},J={class:"inline-flex items-center space-x-1 md:space-x-3"},O={class:"inline-flex items-center"},R=l("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[l("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})],-1),Z={"aria-current":"page"},H=l("svg",{class:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[l("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1),K=l("span",{class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},"Services",-1),Q=F('<li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Creation</span></div></li>',1),X=l("h1",{class:"mt-4 text-3xl font-bold text-black dark:text-white"},"Services Creation",-1),Y={class:"grid grid-cols-2 gap-2"},ee={class:"w-full col-span-1 mb-4"},le={class:"col-span-1 mb-4"},se={class:"grid grid-cols-2 gap-2"},oe={class:"mt-4 W-full"},te={class:"mt-4 W-full"},ie={class:"grid grid-cols-2 gap-2"},ae={class:"w-full col-span-1 mb-4"},re={class:"w-full col-span-1 mb-4"},ne={class:"grid grid-cols-2 gap-2 mt-4"},de={class:"w-full col-span-2 mb-4"},ue={class:"w-full col-span-2 mb-4"},ce={class:"grid grid-cols-2 gap-2 mt-4"},me={class:"w-full col-span-2 mb-4"},pe=l("p",null,"Drag and drop files to here to upload.",-1),_e={class:"w-full col-span-2 mb-4"},ge=l("p",null,"Drag and drop files to here to upload.",-1),ve={class:"mt-4"},fe={class:"grid grid-cols-2 gap-2"},he={class:"w-full col-span-1 mb-4"},be={class:"w-full col-span-1 mb-4"},we={class:"grid grid-cols-2 gap-2"},xe={class:"w-full col-span-1 mb-4"},Ve={class:"w-full col-span-1 mb-4"},ye={class:"grid grid-cols-2 gap-2"},Se={class:"w-full col-span-1 mb-4"},Te=Object.assign({layout:$},{__name:"Create",setup(Ce){const m=D(),u=g(""),s=E({title:"",tag:null,basic_price:0,basic_revision:0,need_service:"",sub_category:null,description:"",files:null,example:null,description_example:"",category_id:"",sub_categorie:null,video_url:"",basic_support:null,basic_delivery_time:0,delivery_time_unit:"",is_publish:!1}),V=g([{name:"jour(s)",id:"jour(s)"},{name:"heure(s)",id:"heure(s)"}]),y=()=>{s.post(route("freelance.services.post"),{onSuccess:()=>s.reset(),onError:n=>{console.log(n)}})},S=w(()=>m.categoriesGet.categories),C=w(()=>m.subCategoriesGet),U=async()=>{m.fetchSubCategoriesByCategoryid(u.value)};j(u,()=>{s.category_id=u.value,U()});const k=n=>{s.example=n.files},B=n=>{s.files=n.files};return g(null),(n,o)=>{const I=r("Toast"),a=r("InputLabel"),p=r("InputText"),v=r("Chips"),f=r("Dropdown"),d=r("InputError"),T=r("MultiSelect"),_=r("InputNumber"),h=r("Editor"),b=r("FileUpload"),q=r("InputSwitch"),L=r("Button");return P(),N("div",z,[e(I,{position:"bottom-right",group:"br"}),l("div",G,[l("div",null,[l("nav",W,[l("ol",J,[l("li",O,[e(t(x),{href:n.route("freelance.dashboard"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:c(()=>[R,M(" Dashboard ")]),_:1},8,["href"])]),l("li",Z,[e(t(x),{href:n.route("freelance.services"),class:"flex items-center"},{default:c(()=>[H,K]),_:1},8,["href"])]),Q])])]),X]),l("form",{onSubmit:o[17]||(o[17]=A(i=>y(),["prevent"])),class:"grid grid-cols-1 gap-4 p-4 mt-2 border border-gray-100 rounded-md min-h-72"},[l("div",Y,[l("div",ee,[e(a,{for:"titre",value:"titre"}),e(p,{required:"",modelValue:t(s).title,"onUpdate:modelValue":o[0]||(o[0]=i=>t(s).title=i),class:"w-full",id:"titre"},null,8,["modelValue"])]),l("div",le,[e(a,{for:"titre",value:"Tags de recherche"}),e(v,{modelValue:t(s).tag,"onUpdate:modelValue":o[1]||(o[1]=i=>t(s).tag=i),placeholder:"Tags pour facileter la recherche",class:"w-full",id:"tag"},null,8,["modelValue"])])]),l("div",se,[l("div",oe,[e(f,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=i=>u.value=i),optionValue:"id",required:"",options:S.value,showClear:"",optionLabel:"name",placeholder:"Categories",class:"!w-full"},null,8,["modelValue","options"]),e(d,{class:"mt-2",message:t(s).errors.category_id},null,8,["message"])]),l("div",te,[e(T,{modelValue:t(s).sub_categorie,"onUpdate:modelValue":o[3]||(o[3]=i=>t(s).sub_categorie=i),optionValue:"id",options:C.value,showClear:"",optionLabel:"name",placeholder:"Sous categorie",class:"!w-full"},null,8,["modelValue","options"]),e(d,{class:"mt-2",message:t(s).errors.sub_categorie},null,8,["message"])])]),l("div",ie,[l("div",ae,[e(a,{for:"titre",value:"Prix"}),e(_,{showButtons:"",modelValue:t(s).basic_price,"onUpdate:modelValue":o[4]||(o[4]=i=>t(s).basic_price=i),placeholder:"Prix du service",class:"w-full",inputId:"Prix"},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.basic_price},null,8,["message"])]),l("div",re,[e(a,{for:"revision",value:"Revision"}),e(_,{showButtons:"",modelValue:t(s).basic_revision,"onUpdate:modelValue":o[5]||(o[5]=i=>t(s).basic_revision=i),class:"w-full",placeholder:"nombre de revision pour ce prix",id:"titre"},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.basic_revision},null,8,["message"])])]),l("div",ne,[l("div",de,[e(a,{for:"description",value:"Description"}),e(h,{required:"",formats:null,modelValue:t(s).description,"onUpdate:modelValue":o[6]||(o[6]=i=>t(s).description=i),class:"mt-2",placeholder:"une Description pour ce service",editorStyle:"height: 250px"},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.description},null,8,["message"])]),l("div",ue,[e(a,{for:"titre",value:"Besoin"}),e(h,{required:"",modelValue:t(s).need_service,"onUpdate:modelValue":o[7]||(o[7]=i=>t(s).need_service=i),class:"mt-2",ceholder:"vous besoin de quoi pour la realisation de ce service",editorStyle:"height: 250px"},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.need_service},null,8,["message"])])]),l("div",ce,[l("div",me,[e(a,{for:"titre",value:"titre"}),e(b,{showCancelButton:!1,auto:!0,fileLimit:"3",onClear:o[8]||(o[8]=i=>n.clearAll()),onSelect:B,onUpload:o[9]||(o[9]=i=>n.onAdvancedUpload(i)),multiple:!0,accept:"image/*",maxFileSize:1e6},{empty:c(()=>[pe]),_:1}),e(d,{class:"mt-2",message:t(s).errors.files},null,8,["message"])]),l("div",_e,[e(a,{for:"titre",value:"titre"}),e(b,{showCancelButton:!1,auto:!0,fileLimit:"3",onSelect:k,onUpload:o[10]||(o[10]=i=>n.onAdvancedUpload(i)),multiple:!0,accept:"image/*",maxFileSize:1e6},{empty:c(()=>[ge]),_:1}),l("div",ve,[e(p,{modelValue:t(s).description_example,"onUpdate:modelValue":o[11]||(o[11]=i=>t(s).description_example=i),placeholder:"titre de l'example",class:"w-full",id:"titre"},null,8,["modelValue"])])])]),l("div",fe,[l("div",he,[e(a,{for:"support",value:"support"}),e(v,{required:"",modelValue:t(s).basic_support,"onUpdate:modelValue":o[12]||(o[12]=i=>t(s).basic_support=i),placeholder:"Le support du service",class:"w-full mt-2",id:"support"},null,8,["modelValue"]),e(d,{class:"mt-2",message:t(s).errors.basic_support},null,8,["message"])]),l("div",be,[e(a,{for:"titre",value:"titre"}),e(p,{modelValue:t(s).video_url,"onUpdate:modelValue":o[13]||(o[13]=i=>t(s).video_url=i),placeholder:"lien d'une video du  service",class:"w-full mt-2",id:"titre"},null,8,["modelValue"])])]),l("div",we,[l("div",xe,[e(a,{for:"temps",value:"Temps"}),e(_,{required:"",modelValue:t(s).basic_delivery_time,"onUpdate:modelValue":o[14]||(o[14]=i=>t(s).basic_delivery_time=i),showButtons:"",placeholder:"Temps de livraison",class:"w-full mt-2",id:"titre"},null,8,["modelValue"])]),l("div",Ve,[e(a,{for:"titre",value:"titre"}),e(f,{required:"",modelValue:t(s).delivery_time_unit,"onUpdate:modelValue":o[15]||(o[15]=i=>t(s).delivery_time_unit=i),optionValue:"id",options:V.value,showClear:"",optionLabel:"name",placeholder:"Unite de temps en heures ou jours",class:"!w-full mt-2"},null,8,["modelValue","options"])])]),l("div",ye,[l("div",Se,[e(a,{for:"titre",value:"Publier"}),e(q,{class:"mt-2",required:"",modelValue:t(s).is_publish,"onUpdate:modelValue":o[16]||(o[16]=i=>t(s).is_publish=i),id:"titre"},null,8,["modelValue"])])]),l("div",null,[e(L,{type:"submit",label:"Soumettre"})])],32)])}}});export{Te as default};
import{d as w,T as M,y as j,A as _,e as o,a as e,b as c,w as h,u as n,t as l,g as m,F as B,j as C,l as V,C as p,G as P,H as D,f as T,p as N,o as r,q as f,h as L}from"./app-211ec483.js";import{_ as E}from"./FreelanceLayout-734a855f.js";import"./MainSidebarF-e3228c86.js";import"./userInfo-a5293e16.js";const S={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},$={class:"flex flex-col"},q={class:"flex","aria-label":"Breadcrumb"},F={class:"inline-flex items-center space-x-1 md:space-x-3"},H={class:"inline-flex items-center"},O=e("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})],-1),U={"aria-current":"page"},I=e("svg",{class:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1),z=e("span",{class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},"Mission",-1),A=N('<li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Postuler</span></div></li>',1),G={class:"mt-4 text-3xl font-bold text-black dark:text-white"},Z={class:"container py-8 lg:px-2"},J={class:"p-6 mb-3 bg-white rounded-lg shadow-md dark:bg-navy-800"},K={class:"mb-4 text-lg font-bold text-gray-800 dark:text-gray-50 lg:text-xl"},Q=e("p",{class:"mb-4 text-gray-600 dark:text-gray-200"},"Description de la mission :",-1),R={class:"mb-4 leading-loose text-gray-800 dark:text-gray-50"},W=e("p",{class:"mb-4 text-gray-600 dark:text-gray-200"},"Détails du projet :",-1),X={class:"mb-4 list-disc list-inside"},Y={class:"text-gray-600 dark:text-gray-200"},ee={class:"font-bold text-gray-800 dark:text-gray-50"},se={class:"font-bold text-gray-800 dark:text-gray-50"},te={class:"mt-4 text-gray-600 dark:text-gray-200"},ae={class:"text-lg font-bold text-amber-600"},oe=e("p",{class:"mb-4 text-gray-600 dark:text-gray-200"},"Exigences de la mission :",-1),re=["innerHTML"],le={class:"flex flex-col gap-1 mt-4 mb-3"},ie=e("p",{class:"mb-1 text-gray-600 dark:text-gray-200"},"Fichier Inclus : ",-1),ne={key:0},de={class:"flex flex-col items-start justify-start py-4"},ce={key:0},me={class:"relative group"},ue={class:"flex flex-wrap items-center"},xe=e("i",{class:"fas fa-file-alt"},null,-1),ge=e("div",{class:"absolute top-0 right-0 mt-2 mr-2"},null,-1),_e={key:1,class:"flex-flex-wrap"},he={class:"relative group"},pe=["src"],fe={key:1},ve=e("p",{class:"mb-4 text-lg font-extrabold text-gray-800 dark:text-gray-200"},"Postuler à cette mission",-1),be={"x-cloak":"","x-show":"show","x-collapse":"",class:"p-8 mt-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:"},ye={class:"flex flex-col w-full gap-4"},ke={class:"flex"},we={class:"inline-flex items-center"},Me=e("span",{class:"ml-2 text-sm text-gray-700 md:text-base dark:text-gray-300"},"Proposer un prix ",-1),je={key:0,class:"p-4"},Be={class:"flex"},Ce=e("span",{class:"inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),Ve={class:"flex items-center justify-center"},Ee=Object.assign({layout:E},{__name:"MissionPostuler",props:{mission:Object},setup(v){const u=v,x=w(!1),d=M({message:"",budget:u.mission.data.budget,mission_id:u.mission.data.id}),b=()=>{d.post(route("freelance.missions.postulerSend"),{onError:i=>{alert(i.message)}})},a=j(()=>u.mission.data),y=i=>{let s=["jpg","jpeg","png","gif","bmp"],g=i.split(".").pop().toLowerCase();return s.includes(g)};return(i,s)=>{const g=_("Textarea"),k=_("Button");return r(),o("div",S,[e("div",$,[e("div",null,[e("nav",q,[e("ol",F,[e("li",H,[c(n(f),{href:i.route("freelance.dashboard"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:h(()=>[O,m(" Dashboard ")]),_:1},8,["href"])]),e("li",U,[c(n(f),{href:i.route("freelance.missions"),class:"flex items-center"},{default:h(()=>[I,z]),_:1},8,["href"])]),A])])]),e("h1",G,"Mission "+l(a.value.mission_numero),1)]),e("div",null,[e("div",Z,[e("div",J,[e("h2",K,l(a.value.title),1),Q,e("p",R,l(a.value.description),1),W,e("ul",X,[e("li",Y,[m("Durée du de la mission : Du "),e("span",ee,l(a.value.begin_mission),1),m(" au "),e("span",se,l(a.value.end_mission),1)]),e("li",te,[m("Budget : "),e("span",ae,l(a.value.budget)+" $",1)])]),oe,e("div",{innerHTML:a.value.exigences},null,8,re),e("div",le,[ie,a.value.files!=null?(r(),o("div",ne,[e("div",de,[(r(!0),o(B,null,C(a.value.files,(t,Pe)=>(r(),o("div",null,[y(t)?(r(),o("div",_e,[e("div",he,[e("img",{src:"/storage/"+t,alt:"Product Name",class:"w-24 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80"},null,8,pe)])])):(r(),o("div",ce,[e("div",me,[e("div",ue,[e("p",null,l(t.name),1),xe]),ge])]))]))),256))])])):(r(),o("p",fe,"Pas de fichier inclus"))]),ve]),e("div",be,[e("form",{onSubmit:s[3]||(s[3]=V(t=>b(),["prevent"])),class:"grid grid-cols-1 gap-4"},[e("div",ye,[c(L,{for:"Message",value:"Message"}),c(g,{required:"",modelValue:n(d).message,"onUpdate:modelValue":s[0]||(s[0]=t=>n(d).message=t),rows:"10",class:"w-full",placeholder:"Message"},null,8,["modelValue"])]),e("div",null,[e("div",ke,[e("label",we,[p(e("input",{type:"checkbox","onUpdate:modelValue":s[1]||(s[1]=t=>x.value=t),class:"w-5 h-5 text-gray-600 rounded-full form-checkbox",name:"example",value:""},null,512),[[P,x.value]]),Me])]),x.value?(r(),o("div",je,[e("div",Be,[Ce,p(e("input",{type:"number",required:"",id:"website-admin","onUpdate:modelValue":s[2]||(s[2]=t=>n(d).budget=t),class:"rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-amber-500 focus:border-amber-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500",placeholder:"Prix"},null,512),[[D,n(d).budget]])])])):T("",!0)]),e("div",Ve,[c(k,{type:"submit",label:"Postuler",severity:"info"})])],32)])])])])}}});export{Ee as default};
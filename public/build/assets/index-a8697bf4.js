import{_ as b}from"./WebLayout-91c6a66c.js";import{e as s,a as e,b as n,w as o,u as l,F as c,j as m,q as x,o as r,g,z as i,c as f,t as h}from"./app-d9fefc85.js";import"./userInfo-e626b6f4.js";const p={class:"min-h-screen px-4 py-20 bg-gray-100 dark:bg-gray-900 md:px-8"},v={class:"mx-2 mb-4"},_={class:"flex","aria-label":"Breadcrumb"},k={class:"inline-flex items-center space-x-1 md:space-x-3"},w={class:"inline-flex items-center"},y=e("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})],-1),B=x('<li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Categories</span></div></li>',1),N=x('<div class="flex flex-col"><div><h1 class="text-2xl font-semibold text-black dark:text-white">Parcourir par catégorie</h1></div><div><form class="hidden my-4"><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recherche..." required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">Recherche</button></div></form></div></div>',1),A={class:"grid grid-cols-2 gap-4 mt-8 mb-16 md:gap-6 md:grid-cols-4 xl:gap-8"},j=e("img",{src:"/storage/illustration/business.svg",class:"w-12 rounded-md lg:w-20 lg:h-20",alt:""},null,-1),C={class:"flex flex-col gap-2"},V={class:"mt-3 mb-1 md:text-[20px] text-sm dark:text-white block font-semibold text-slate-600 duration-200 group-hover:text-white"},S=e("div",null,[e("span")],-1),q={class:"min-h-screen px-4 pt-8 bg-white dark:bg-gray-800 md:px-8"},F=e("div",{class:"flex justify-start"},[e("h1",{class:"text-2xl font-semibold text-black dark:text-white"}," Parcourir toutes les catégories ")],-1),L={class:"px-4 mb-8"},P={class:"my-4"},R=e("hr",null,null,-1),Z={class:"grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4"},T=Object.assign({layout:b},{__name:"index",props:{categories:Array,categoriesAll:Array},setup(u){return(a,z)=>(r(),s("div",null,[e("div",p,[e("div",v,[e("nav",_,[e("ol",k,[e("li",w,[n(l(i),{href:a.route("home"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:o(()=>[y,g(" Acceuil ")]),_:1},8,["href"])]),B])])]),N,e("div",A,[(r(!0),s(c,null,m(u.categories,t=>(r(),f(l(i),{href:a.route("categoryName",t.name),class:"flex flex-row items-center gap-2 px-2 py-4 duration-200 border shadow-lg cursor-pointer group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600 dark:bg-gray-800"},{default:o(()=>[j,e("div",C,[e("h4",V,h(t.name),1),S])]),_:2},1032,["href"]))),256))])]),e("div",q,[F,(r(!0),s(c,null,m(u.categoriesAll,t=>(r(),s("div",L,[e("div",P,[n(l(i),{href:a.route("categoryName",t.name),class:"text-xl text-black dark:text-gray-100"},{default:o(()=>[g(h(t.name),1)]),_:2},1032,["href"])]),R,e("div",Z,[(r(!0),s(c,null,m(t.sub_categories,d=>(r(),s("div",{key:d.id,class:"mb-4"},[n(l(i),{href:a.route("SubcategoryName",[t.name,d.name]),class:"px-4 text-base font-semibold text-gray-600 dark:text-gray-200"},{default:o(()=>[g(h(d.name),1)]),_:2},1032,["href"])]))),128))])]))),256))])]))}});export{T as default};

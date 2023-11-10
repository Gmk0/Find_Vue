import{_ as i}from"./WebLayout-8a37e753.js";import{T as n,A as p,e as u,a as e,b as t,u as a,w as m,p as l,o as x}from"./app-211ec483.js";import{_ as r}from"./TextInput-8850da33.js";import"./userInfo-a5293e16.js";const b={class:"min-h-screen pt-16 mx-auto max-w-7xl lg:px-8"},g={class:"relative overflow-hidden bg-gray-100 dark:bg-gray-900 pt-8 pb-12 lg:pb-[90px]"},_={class:"container px-4 mx-auto"},f=l('<div class="flex flex-wrap -mx-4"><div class="w-full px-4"><div class="mx-auto mb-[20px] max-w-[520px] text-center lg:mb-20"><span class="block mb-2 text-lg font-semibold tracking-wide uppercase text-amber-600"> Feedback </span><h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-2xl"> Votre Avis Compte </h2><p class="text-base text-body-color"> Besoin de plus d&#39;information contacter nou </p></div></div></div>',1),v={class:"max-w-6xl px-8 pt-8 mx-auto"},h={class:"grid grid-cols-2 mb-4"},k={class:"flex flex-col gap-4"},y=e("div",{class:"col-span-2"},[e("textarea",{name:"message",required:"",class:"block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",placeholder:"Message"},`
                    `)],-1),w=e("span",null,"Envoyer",-1),V=l('<div class="px-4"><div class="bg-white rounded-lg dark:bg-gray-700"><div class=""><div class="max-w-xl p-6 mx-auto mt-5 border rounded-lg"><p class="mb-4 text-lg font-bold text-center">Vous avez utilisé FIND pour faire une différence dans la vie des personnes et contribuer à répondre à leurs besoins.</p><p class="mb-4 text-center">Partagez votre expérience et aidez-nous à améliorer nos efforts pour créer une expérience encore plus positive pour nos utilisateurs.</p><p class="mb-6 text-center">Votre feedback est précieux pour nous et pour ceux qui cherchent à trouver des solutions et à faciliter leur quotidien.</p></div></div></div></div>',1),B=e("hr",null,null,-1),q=e("div",{class:"pt-8"},[e("div",null,[e("h1",{class:"text-center text-gray-700 dark:text-gray-200"},"Les Avis")]),e("div",{class:"grid pt-4 lg:grid-cols-2"})],-1),M=Object.assign({layout:i},{__name:"FeedBack",setup(N){const s=n({name:"",email:"",message:""});return(z,o)=>{const d=p("ButtonMt");return x(),u("div",b,[e("section",g,[e("div",_,[f,e("div",v,[e("div",h,[e("div",k,[t(r,{id:"nom",type:"text",placeholder:"Nom",class:"block w-full mt-1",required:""}),t(r,{id:"nom",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=c=>a(s).password=c),type:"text",placeholder:"Email",class:"block w-full mt-1",required:""},null,8,["modelValue"]),y,e("div",null,[t(d,null,{default:m(()=>[w]),_:1})])]),V]),B,q])])])])}}});export{M as default};
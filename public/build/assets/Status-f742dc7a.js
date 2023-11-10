import{_ as n}from"./WebLayout-8a37e753.js";import{m,ad as p,Q as h,y as i,A as g,c as v,w as d,o as a,a as t,e as l,j as x,t as _,F as f,b,g as y,s as w,v as S}from"./app-211ec483.js";import"./userInfo-a5293e16.js";const s=e=>(w("data-v-3e15e9c0"),e=e(),S(),e),k={class:"min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900"},j={class:"flex flex-col items-center justify-center min-h-screen py-24"},B={class:"text-center bg-white rounded-md shadow-md dark:bg-gray-800"},C=s(()=>t("svg",{class:"w-20 h-20 mx-auto mb-6 text-green-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4.707-8.293a1 1 0 1 1 1.414 1.414l2.793 2.793 5.793-5.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414 0l-4.5-4.5z"})],-1)),I=s(()=>t("h3",{class:"mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100"},"Paiement réussi",-1)),V={class:"p-4 rounded-lg"},N=s(()=>t("p",{class:"px-6 mb-4 text-lg text-gray-800 dark:text-gray-100"},"Votre paiement a été traité avec succès. Voici un récapitulatif de votre commande : ",-1)),L={class:"mb-4"},z={class:"flex justify-between px-6"},F={class:"text-lg font-medium"},M={class:"text-lg font-bold"},O=s(()=>t("p",{class:"text-green-700"},"Nous vous remercions de votre achat et espérons vous revoir bientôt !",-1)),$={class:"mt-8 space-x-4"},A=["href"],D=Object.assign({layout:n},{__name:"Status",props:{transaction:Object},setup(e){const o=p();return h(()=>{o.clearCart()}),i(()=>o.items),i(()=>o.totalCost),(r,E)=>{const u=g("Link");return a(),v(n,null,{default:d(()=>[t("div",null,[t("div",k,[t("div",j,[t("div",B,[C,I,t("div",V,[N,t("ul",L,[(a(!0),l(f,null,x(e.transaction.data.orders,c=>(a(),l("li",z,[t("span",F,"Service : "+_(c.service.title),1),t("span",M,_(c.total_amount)+" $",1)]))),256))]),O,t("div",$,[t("a",{href:r.route("facturation",[e.transaction.data.transaction_numero]),class:"px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"},"Imprimer facture",8,A),b(u,{href:r.route("user.commandes"),class:"px-4 py-2 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600"},{default:d(()=>[y(" voir l'evolution")]),_:1},8,["href"])])])])])])])]),_:1})}}}),q=m(D,[["__scopeId","data-v-3e15e9c0"]]);export{q as default};
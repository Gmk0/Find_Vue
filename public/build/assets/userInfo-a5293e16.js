import{V as p,W as c,o as u,e as n,b as t,w as o,a,X as r,g as s,l as _,Y as g,O as b}from"./app-211ec483.js";const m={class:"flex text-sm transition border-2 border-transparent rounded-full dark:bg-gray-800 focus:outline-none focus:border-gray-300"},k={key:0},v=["src","alt"],y={key:1},$=["src","alt"],w=a("div",{class:"block px-4 py-2 text-xs text-gray-400 dark:text-gray-50"}," Manage Account ",-1),D=a("div",{class:"border-t border-gray-200"},null,-1),M=["onSubmit"],C={__name:"userInfo",setup(T){const i=p(),d=c(i),h=()=>{d()},f=()=>{b.post(route("logout"))};return(e,l)=>(u(),n("div",null,[t(g,{align:"right",width:"48"},{trigger:o(()=>[a("button",m,[e.$page.props.auth.user.profile_photo_path!=null?(u(),n("div",k,[a("img",{class:"object-cover w-8 h-8 rounded-full",src:"/storage/"+e.$page.props.auth.user.profile_photo_path,alt:e.$page.props.auth.user.name},null,8,v)])):(u(),n("div",y,[a("img",{class:"object-cover w-8 h-8 rounded-full",src:e.$page.props.auth.user.profile_photo_url,alt:e.$page.props.auth.user.name},null,8,$)]))])]),content:o(()=>[w,t(r,{href:e.route("profile.show")},{default:o(()=>[s(" Profile ")]),_:1},8,["href"]),t(r,{href:e.route("user.dashboard")},{default:o(()=>[s(" Tableau utilisateur ")]),_:1},8,["href"]),t(r,{href:e.route("user.missions")},{default:o(()=>[s(" Mes Mission ")]),_:1},8,["href"]),t(r,{href:e.route("user.chat")},{default:o(()=>[s(" favoris ")]),_:1},8,["href"]),t(r,{href:e.route("user.chat")},{default:o(()=>[s(" Conversation ")]),_:1},8,["href"]),t(r,{onClick:l[0]||(l[0]=V=>h()),as:"button"},{default:o(()=>[s(" Dark mode ")]),_:1}),D,a("form",{onSubmit:_(f,["prevent"])},[t(r,{as:"button"},{default:o(()=>[s(" Log Out ")]),_:1})],40,M)]),_:1})]))}};export{C as _};
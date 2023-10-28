import{T as m,d,e as c,b as o,u as e,w as r,F as u,o as p,Z as f,a,n as _,g as w,i as b}from"./app-fdc68bd6.js";import{A as g}from"./AuthenticationCard-da8d6f29.js";import{_ as h}from"./AuthenticationCardLogo-cd182178.js";import{_ as x}from"./InputError-c93239ea.js";import{_ as v}from"./InputLabel-20b1d305.js";import{_ as y}from"./PrimaryButton-9c76b059.js";import{_ as V}from"./TextInput-5d916d12.js";const C=a("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(A){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,i)=>(p(),c(u,null,[o(e(f),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(h)]),default:r(()=>[C,a("form",{onSubmit:b(n,["prevent"])},[a("div",null,[o(v,{for:"password",value:"Password"}),o(V,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(x,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",k,[o(y,{class:_(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{q as default};

import{aq as f,d as v,K as c,o as l,e as u,F as h,j as y,c as k,w as b,g as C,t as g,n as q,p as S}from"./app-5460a236.js";import w from"./MazBtn-2B_gHtFc-79ca9fde.js";import{C as z}from"./MazPicker-KEFEA2or-1cd0000e.js";const B={class:"maz-picker-shortcuts"},_=f({__name:"MazPickerShortcuts",props:{color:{type:String,required:!0},modelValue:{type:[String,Object],default:void 0},shortcuts:{type:Array,required:!0},double:{type:Boolean,required:!0},shortcut:{type:String,default:void 0},disabled:{type:Boolean,required:!0}},emits:["update:model-value"],setup(r,{emit:n}){const o=r,p=n,s=v(o.shortcut),d=(a,e)=>{s.value=e,p("update:model-value",a)};return c(()=>o.modelValue,a=>{const e=a;e!=null&&e.end||(s.value=void 0)}),c(()=>o.shortcut,a=>{const e=o.shortcuts.find(({identifier:t})=>a===t);if(e){const{value:t,identifier:i}=e;d(t,i)}},{immediate:!0}),(a,e)=>(l(),u("div",B,[(l(!0),u(h,null,y(r.shortcuts,({identifier:t,label:i,value:m})=>(l(),k(w,{key:t,type:"button",size:"sm",disabled:r.disabled,color:t===s.value?o.color:"transparent",class:q({"--is-selected":t===s.value}),onClick:S(j=>d(m,t),["stop"])},{default:b(()=>[C(g(i),1)]),_:2},1032,["disabled","color","class","onClick"]))),128))]))}}),A=z(_,[["__scopeId","data-v-e013a34a"]]);export{A as default};
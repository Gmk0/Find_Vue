/* empty css                    */import{aW as k,aq as S,aU as A,ax as $,aY as B,B as r,o as C,e as _,a as m,aa as N,u as o,b as w,n as p,r as I,S as j}from"./app-5460a236.js";import q from"./check-_5Up9njX-faff1547.js";const D=["for","aria-checked"],M=["id","checked","disabled","name"],O=S({inheritAttrs:!1,__name:"MazCheckbox",props:{style:{type:[String,Array,Object],default:void 0},class:{type:[String,Array,Object],default:void 0},modelValue:{type:[Boolean,Array],default:void 0},id:{type:String,default:void 0},color:{type:String,default:"primary"},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:"m-checkbox"},size:{type:String,default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:model-value","change"],setup(t,{emit:f}){A(a=>({"3a21591b":x.value,"4953c77d":y.value,d5250ce8:h.value,"105d84cf":z.value}));const v=$(),e=t,n=f,s=B({componentName:"MazCheckbox",instance:v,providedId:e.id}),d=r(()=>typeof e.value!="boolean"&&Array.isArray(e.modelValue)?e.modelValue.includes(e.value):typeof e.modelValue=="boolean"?e.modelValue:!1),y=r(()=>{switch(e.size){case"xl":return"2.25rem";case"lg":return"2rem";default:return"1.625rem";case"sm":return"1.425rem";case"xs":return"1.325rem";case"mini":return"1.2rem"}}),b=r(()=>{switch(e.size){case"xl":return"maz-text-2xl";case"lg":return"maz-text-xl";default:return"maz-text-lg";case"sm":return"maz-text-base";case"xs":return"maz-text-sm";case"mini":return"maz-text-xs"}}),x=r(()=>`var(--maz-color-${e.color}-contrast)`),h=r(()=>`var(--maz-color-${e.color})`),z=r(()=>["black","transparent"].includes(e.color)?"var(--maz-color-muted)":`var(--maz-color-${e.color}-alpha)`);function V(a){["Space"].includes(a.code)&&(a.preventDefault(),u(e.value??!e.modelValue))}function g(a){return typeof a=="boolean"&&(typeof e.modelValue=="boolean"||e.modelValue===void 0||e.modelValue===null)?!e.modelValue:Array.isArray(e.modelValue)&&typeof a!="boolean"?e.modelValue.includes(a)?e.modelValue.filter(l=>l!==a):[...e.modelValue,a]:[a]}function u(a){const l=g(a);n("update:model-value",l),n("change",l)}return(a,l)=>(C(),_("label",{for:o(s),class:p(["m-checkbox",[{"--disabled":t.disabled},e.class]]),tabindex:"0",style:j(t.style),role:"checkbox","aria-checked":d.value,onKeydown:V},[m("input",N({id:o(s),checked:d.value},a.$attrs,{tabindex:"-1",disabled:t.disabled,name:t.name,type:"checkbox",onChange:l[0]||(l[0]=c=>{var i;return u(t.value??((i=c==null?void 0:c.target)==null?void 0:i.checked))})}),null,16,M),m("span",null,[w(o(q),{class:p(["check-icon",b.value])},null,8,["class"])]),I(a.$slots,"default",{},void 0,!0)],46,D))}}),U=k(O,[["__scopeId","data-v-05f6558f"]]);export{U as default};

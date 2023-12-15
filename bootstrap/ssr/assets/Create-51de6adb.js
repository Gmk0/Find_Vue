import { inject, ref, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-24abe450.js";
import "primevue/steps/steps.esm.js";
import { a as _sfc_main$2 } from "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import Dropdown from "primevue/dropdown/dropdown.esm.js";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "./userInfo-1488cc9b.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
import "vue-collapsed";
import "./Checkbox-a72bbed4.js";
const Create_vue_vue_type_style_index_0_scoped_d3e9591c_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const props = __props;
    inject("$swal");
    ref(props.categories);
    ref(null);
    const form = useForm({
      title: "",
      exigence: "",
      description: "",
      dateD: "",
      dateF: "",
      budget: "",
      category_id: "",
      image: null
    });
    const toast = useToast();
    const onAdvancedUpload = () => {
      toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3e3 });
    };
    const step = ref(1);
    ref("");
    const onSelect = (event) => {
      form.image = event.files;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Textarea = resolveComponent("Textarea");
      const _component_Toast = resolveComponent("Toast");
      const _component_FileUpload = resolveComponent("FileUpload");
      const _component_Button = resolveComponent("Button");
      const _component_Calendar = resolveComponent("Calendar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-16 border-t border-gray-100 bg-gray-50 dark:bg-gray-900" }, _attrs))} data-v-d3e9591c><div class="mx-4 mt-2 mb-4" data-v-d3e9591c><nav class="flex" aria-label="Breadcrumb" data-v-d3e9591c><ol class="inline-flex items-center space-x-1 md:space-x-3" data-v-d3e9591c><li class="inline-flex items-center" data-v-d3e9591c>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-d3e9591c${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" data-v-d3e9591c${_scopeId}></path></svg> Accueil `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3 mr-2.5",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" })
              ])),
              createTextVNode(" Accueil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page" data-v-d3e9591c><div class="flex items-center" data-v-d3e9591c><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" data-v-d3e9591c><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" data-v-d3e9591c></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" data-v-d3e9591c>Mission-creation</span></div></li></ol></nav></div><div class="grid px-2 py-3 lg:grid-cols-2" data-v-d3e9591c><div class="hidden col-span-1 p-4 lg:block" data-v-d3e9591c><img src="/images/hero/team.svg" class="object-cover w-full h-auto p-2 bg-white rounded-md" alt="" data-v-d3e9591c></div><div class="flex flex-col w-full mx-auto h-min-72 lg:col-span-1 lg:mx-0" data-v-d3e9591c><div class="" data-v-d3e9591c><div class="p-4 border rounded-lg" data-v-d3e9591c><ol class="flex flex-col w-full space-y-4 lg:flex-row lg:items-center lg:justify-around sm:flex sm:space-x-8 sm:space-y-0" data-v-d3e9591c><li class="${ssrRenderClass({ "flex items-center text-blue-600 dark:text-blue-500 space-x-2.5": step.value === 1, "flex items-center text-gray-500 dark:text-gray-400 space-x-2.5": step.value !== 1 })}" data-v-d3e9591c><span class="${ssrRenderClass({ "flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500": step.value === 1, "flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400": step.value !== 1 })}" data-v-d3e9591c> 1 </span><span data-v-d3e9591c><h3 class="font-medium leading-tight" data-v-d3e9591c>Detail Mission</h3></span></li><li class="${ssrRenderClass({ "flex items-center text-blue-600 dark:text-blue-500 space-x-2.5": step.value === 2, "flex items-center text-gray-500 dark:text-gray-400 space-x-2.5": step.value !== 2 })}" data-v-d3e9591c><span class="${ssrRenderClass({ "flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500": step.value === 2, "flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400": step.value !== 2 })}" data-v-d3e9591c> 2 </span><span data-v-d3e9591c><h3 class="font-medium leading-tight" data-v-d3e9591c>Echance &amp; Budget</h3></span></li></ol></div><div class="p-4 mt-2 border border-gray-100 rounded-md min-h-72" data-v-d3e9591c>`);
      if (step.value === 1) {
        _push(`<div class="flex flex-col mt-4" data-v-d3e9591c><div class="w-full" data-v-d3e9591c>`);
        _push(ssrRenderComponent(_component_InputText, {
          id: "name",
          required: "",
          modelValue: unref(form).title,
          "onUpdate:modelValue": ($event) => unref(form).title = $event,
          autofocus: "",
          class: "w-full",
          placeholder: "Titre"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mt-2",
          message: unref(form).errors.title
        }, null, _parent));
        _push(`</div><div class="w-full mt-4" data-v-d3e9591c>`);
        _push(ssrRenderComponent(_component_Textarea, {
          modelValue: unref(form).description,
          "onUpdate:modelValue": ($event) => unref(form).description = $event,
          rows: "4",
          cols: "10",
          class: "w-full",
          placeholder: "Decrivez votre mission..."
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mt-2",
          message: unref(form).errors.description
        }, null, _parent));
        _push(`</div><div class="card" data-v-d3e9591c>`);
        _push(ssrRenderComponent(_component_Toast, null, null, _parent));
        _push(ssrRenderComponent(_component_FileUpload, {
          auto: true,
          onSelect,
          onUpload: ($event) => onAdvancedUpload(),
          multiple: true,
          accept: "image/*",
          maxFileSize: 1e6
        }, {
          header: withCtx(({ chooseCallback }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center" data-v-d3e9591c${_scopeId}><div class="flex gap-2" data-v-d3e9591c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                onClick: ($event) => chooseCallback(),
                icon: "pi pi-images",
                rounded: "",
                outlined: ""
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap flex-1 gap-2 justify-content-between align-items-center" }, [
                  createVNode("div", { class: "flex gap-2" }, [
                    createVNode(_component_Button, {
                      onClick: ($event) => chooseCallback(),
                      icon: "pi pi-images",
                      rounded: "",
                      outlined: ""
                    }, null, 8, ["onClick"])
                  ])
                ])
              ];
            }
          }),
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d3e9591c${_scopeId}>Drag and drop files to here to upload.</p>`);
            } else {
              return [
                createVNode("p", null, "Drag and drop files to here to upload.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-4 W-full" data-v-d3e9591c>`);
        _push(ssrRenderComponent(unref(Dropdown), {
          modelValue: unref(form).category_id,
          "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
          optionValue: "id",
          options: props.categories,
          showClear: "",
          optionLabel: "name",
          placeholder: "Categories",
          class: "!w-full"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mt-2",
          message: unref(form).errors.category_id
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value === 2) {
        _push(`<div class="flex flex-col w-full mt-4" data-v-d3e9591c><div class="flex flex-col gap-4 md:flex-row lg:gap-8" data-v-d3e9591c><div class="flex w-full" data-v-d3e9591c>`);
        _push(ssrRenderComponent(_component_Calendar, {
          modelValue: unref(form).dateD,
          "onUpdate:modelValue": ($event) => unref(form).dateD = $event,
          class: "w-full",
          placeholder: "Date debut"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mt-2",
          message: unref(form).errors.dateD
        }, null, _parent));
        _push(`</div><div class="flex w-full" data-v-d3e9591c>`);
        _push(ssrRenderComponent(_component_Calendar, {
          modelValue: unref(form).dateF,
          "onUpdate:modelValue": ($event) => unref(form).dateF = $event,
          class: "w-full",
          inputId: "birth_date",
          placeholder: "Date Fin"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mt-2",
          message: unref(form).errors.dateF
        }, null, _parent));
        _push(`</div></div><div class="mt-4 mb-4" data-v-d3e9591c><label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-v-d3e9591c>Exigences</label>`);
        _push(ssrRenderComponent(_component_Textarea, {
          id: "message",
          modelValue: unref(form).exigence,
          "onUpdate:modelValue": ($event) => unref(form).exigence = $event,
          rows: "4",
          cols: "10",
          class: "w-full",
          placeholder: "Exigences pour la mission"
        }, null, _parent));
        _push(`</div><div data-v-d3e9591c>`);
        _push(ssrRenderComponent(_component_InputText, {
          id: "name",
          type: "text",
          class: "block w-full mt-1",
          required: "",
          placeholder: "Budget",
          modelValue: unref(form).budget,
          "onUpdate:modelValue": ($event) => unref(form).budget = $event
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mt-2",
          message: unref(form).errors.budget
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-between mt-6" data-v-d3e9591c><div data-v-d3e9591c>`);
      if (step.value === 2) {
        _push(`<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-d3e9591c> Retour </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-d3e9591c>`);
      if (step.value === 1) {
        _push(`<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-d3e9591c> Continuer </button>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value === 2) {
        _push(`<button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800" data-v-d3e9591c> Soumettre </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div data-v-d3e9591c></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Mission/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3e9591c"]]);
export {
  Create as default
};

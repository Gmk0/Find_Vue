import { ref, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-2a57e25f.js";
import Steps from "primevue/steps/steps.esm.js";
import FileUpload from "primevue/fileupload/fileupload.esm.js";
import "primevue/button/button.esm.js";
import "./InputError-6aeb8d97.js";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.js";
import "./PrimaryButton-b82fb16e.js";
import { _ as _sfc_main$3 } from "./TextInput-4f082d1a.js";
import Dropdown from "primevue/dropdown/dropdown.esm.js";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "primevue/config/config.esm.js";
import "./store-0ea3a1d1.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-cc961511.js";
import "vue-collapsed";
const Create_vue_vue_type_style_index_0_scoped_98526a5d_lang = "";
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
    ref(props.categories);
    const toast = useToast();
    const onAdvancedUpload = () => {
      toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3e3 });
    };
    const step = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toast = resolveComponent("Toast");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-16 border-t border-gray-100 bg-gray-50 dark:bg-gray-900" }, _attrs))} data-v-98526a5d><div class="mx-4" data-v-98526a5d> Mission/Create </div><div class="grid grid-cols-2 px-2 py-3" data-v-98526a5d><div class="hidden col-span-1 p-4 lg:block" data-v-98526a5d><img src="/images/hero/team.svg" class="object-cover w-full h-full p-2 bg-white rounded-md" alt="" data-v-98526a5d></div><div class="flex flex-col w-full col-span-1 mx-auto lg:mx-0" data-v-98526a5d><div class="hidden" data-v-98526a5d><div class="p-4 border rounded-lg" data-v-98526a5d><ol class="flex items-center justify-around w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0" data-v-98526a5d><li class="${ssrRenderClass({ "flex items-center text-blue-600 dark:text-blue-500 space-x-2.5": step.value === 1, "flex items-center text-gray-500 dark:text-gray-400 space-x-2.5": step.value !== 1 })}" data-v-98526a5d><span class="${ssrRenderClass({ "flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500": step.value === 1, "flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400": step.value !== 1 })}" data-v-98526a5d> 1 </span><span data-v-98526a5d><h3 class="font-medium leading-tight" data-v-98526a5d>User info</h3><p class="text-sm" data-v-98526a5d>Step details here</p></span></li><li class="${ssrRenderClass({ "flex items-center text-blue-600 dark:text-blue-500 space-x-2.5": step.value === 2, "flex items-center text-gray-500 dark:text-gray-400 space-x-2.5": step.value !== 2 })}" data-v-98526a5d><span class="${ssrRenderClass({ "flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500": step.value === 2, "flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400": step.value !== 2 })}" data-v-98526a5d> 2 </span><span data-v-98526a5d><h3 class="font-medium leading-tight" data-v-98526a5d>Company info</h3><p class="text-sm" data-v-98526a5d>Step details here</p></span></li></ol></div><div class="" data-v-98526a5d>`);
      if (step.value === 1) {
        _push(`<div class="flex flex-col mt-4" data-v-98526a5d><div data-v-98526a5d>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          for: "name",
          value: "Titre"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$3, {
          id: "name",
          type: "text",
          class: "block w-full mt-1",
          required: "",
          autofocus: "",
          autocomplete: "name"
        }, null, _parent));
        _push(`</div><div class="mt-4" data-v-98526a5d><label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-v-98526a5d>Your message</label><textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Decrivez..." data-v-98526a5d></textarea></div><div data-v-98526a5d><div class="card" data-v-98526a5d>`);
        _push(ssrRenderComponent(_component_Toast, null, null, _parent));
        _push(ssrRenderComponent(unref(FileUpload), {
          name: "demo[]",
          onUpload: ($event) => onAdvancedUpload(),
          multiple: true,
          accept: "image/*",
          maxFileSize: 1e6
        }, {
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-98526a5d${_scopeId}>Drag and drop files to here to upload.</p>`);
            } else {
              return [
                createVNode("p", null, "Drag and drop files to here to upload.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="mt-4" data-v-98526a5d>`);
        _push(ssrRenderComponent(unref(Dropdown), {
          optionValue: "id",
          options: props.categories,
          showClear: "",
          optionLabel: "name",
          placeholder: "Categories",
          class: "w-full md:w-14rem"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value === 2) {
        _push(`<div class="flex flex-col w-full mt-4" data-v-98526a5d><div data-v-98526a5d>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          for: "name",
          value: "Titre"
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$3, {
          id: "name",
          type: "text",
          class: "block w-full mt-1",
          required: "",
          autofocus: "",
          autocomplete: "name"
        }, null, _parent));
        _push(`</div><div class="mt-4" data-v-98526a5d><label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-v-98526a5d>Your message</label><textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Decrivez..." data-v-98526a5d></textarea></div><div data-v-98526a5d><div class="card" data-v-98526a5d>`);
        _push(ssrRenderComponent(_component_Toast, null, null, _parent));
        _push(ssrRenderComponent(unref(FileUpload), {
          name: "demo[]",
          onUpload: ($event) => onAdvancedUpload(),
          multiple: true,
          accept: "image/*",
          maxFileSize: 1e6
        }, {
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-98526a5d${_scopeId}>Drag and drop files to here to upload.</p>`);
            } else {
              return [
                createVNode("p", null, "Drag and drop files to here to upload.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="mt-4" data-v-98526a5d>`);
        _push(ssrRenderComponent(unref(Dropdown), {
          optionValue: "id",
          options: props.categories,
          showClear: "",
          optionLabel: "name",
          placeholder: "Categories",
          class: "w-full md:w-14rem"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-between mt-6" data-v-98526a5d><div data-v-98526a5d>`);
      if (step.value === 2) {
        _push(`<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-98526a5d> Retour </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-98526a5d>`);
      if (step.value === 1) {
        _push(`<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-98526a5d> Continuer </button>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value === 2) {
        _push(`<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-98526a5d> Soumettre </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div data-v-98526a5d><div data-v-98526a5d><div class="card" data-v-98526a5d>`);
      _push(ssrRenderComponent(unref(Steps), {
        model: _ctx.items,
        "aria-label": "Form Steps",
        readonly: false,
        pt: {
          menuitem: ({ context }) => ({
            class: _ctx.isActive(context.item) && "p-highlight p-steps-current"
          })
        }
      }, {
        item: withCtx(({ label, item, index, props: props2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${ssrRenderAttrs(props2.action)} data-v-98526a5d${_scopeId}><span${ssrRenderAttrs(props2.step)} data-v-98526a5d${_scopeId}>${ssrInterpolate(index + 1)}</span><span${ssrRenderAttrs(props2.label)} data-v-98526a5d${_scopeId}>${ssrInterpolate(label)}</span></span>`);
          } else {
            return [
              createVNode("span", props2.action, [
                createVNode("span", props2.step, toDisplayString(index + 1), 17),
                createVNode("span", props2.label, toDisplayString(label), 17)
              ], 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Mission/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-98526a5d"]]);
export {
  Create as default
};

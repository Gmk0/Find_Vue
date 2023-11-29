import { ref, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FreelanceLayout-072db42a.js";
import { useForm } from "@inertiajs/vue3";
import "./userInfo-17d621bd.js";
import "pinia";
import "axios";
import "@vueuse/core";
import "./ResponsiveNavLink-79527a9d.js";
import "./MainSidebarF-0d2b34f4.js";
import "vue3-popper";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "RealisationAdd",
  __ssrInlineRender: true,
  setup(__props) {
    const fileUpload = ref(null);
    const form = useForm({
      image: null,
      description: null
    });
    const onSelect = (event) => {
      form.image = event.files;
    };
    const sendFile = () => {
      form.post(route("addRealisation"), {
        onFinish: () => {
          fileUpload.value.removeUploadedFiles();
          form.reset("description", "image");
        },
        onSuccess: () => {
          form.reset("description", "image");
        },
        onError: (error) => {
          alert(error.message);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_Textarea = resolveComponent("Textarea");
      const _component_Toast = resolveComponent("Toast");
      const _component_FileUpload = resolveComponent("FileUpload");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.$page.props.urlPrev,
        class: "inline-flex items-center px-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"${_scopeId}></path></svg><span class="ml-2"${_scopeId}> Retour </span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-6 h-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                })
              ])),
              createVNode("span", { class: "ml-2" }, " Retour ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Realisations-Ajout</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Realisations Ajout</h1></div><div class="flex flex-col mt-4"><div class=""></div><div class="grid grid-cols-1 lg:grid-cols-2 mb-6 lg:mb-0 gap-6"><div class="lg:col-span-1 card">`);
      _push(ssrRenderComponent(_component_Textarea, {
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event,
        class: "w-full",
        rows: "6"
      }, null, _parent));
      _push(`</div><div class="lg:col-span-1 card">`);
      _push(ssrRenderComponent(_component_Toast, null, null, _parent));
      _push(ssrRenderComponent(_component_FileUpload, {
        auto: true,
        onSelect,
        showUploadButton: false,
        "show-cancel-button": false,
        "file-limit": 2,
        ref_key: "fileUpload",
        ref: fileUpload,
        multiple: true,
        accept: "image/*",
        maxFileSize: 1e7
      }, {
        header: withCtx(({ chooseCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
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
            _push2(`<p${_scopeId}>Faites glisser et déposez les fichiers ici pour les télécharger.</p>`);
          } else {
            return [
              createVNode("p", null, "Faites glisser et déposez les fichiers ici pour les télécharger.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-center lg:col-span-2">`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Enregistrer",
        onClick: sendFile
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Profile/RealisationAdd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

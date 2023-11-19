import { computed, ref, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FreelanceLayout-941c173b.js";
import { useForm, Link, router } from "@inertiajs/vue3";
import "./userInfo-1ade63c0.js";
import "pinia";
import "axios";
import "@vueuse/core";
import "./ResponsiveNavLink-79527a9d.js";
import "./MainSidebarF-0d2b34f4.js";
import "vue3-popper";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "RealisationEdit",
  __ssrInlineRender: true,
  props: {
    realisations: Array
  },
  setup(__props) {
    const props = __props;
    const realisationsImage = computed(() => props.realisations[0]);
    const fileUpload = ref(null);
    const form = useForm({
      image: null,
      id: props.realisations[0].id,
      description: props.realisations[0].description
    });
    const onSelect = (event) => {
      form.image = event.files;
    };
    const removeOneFile = (id) => {
      router.post(route("removeOneFile"), {
        realisation_id: props.realisations[0].id,
        media_id: id
      }, {});
    };
    const sendFile = () => {
      if (form.description === "") {
        return false;
      }
      form.post(route("freelance.editRealisation"), {
        onFinish: () => {
          fileUpload.value.removeUploadedFiles();
          form.reset("image");
        },
        onSuccess: () => {
          form.reset("image");
        },
        onError: (error) => {
          alert(error.message);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Textarea = resolveComponent("Textarea");
      const _component_Button = resolveComponent("Button");
      const _component_Toast = resolveComponent("Toast");
      const _component_FileUpload = resolveComponent("FileUpload");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Realisations-Ajout</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Realisations Ajout</h1></div><div class="flex flex-col mt-4"><div class=""></div><div class="grid grid-cols-1 lg:grid-cols-2 mb-6 lg:mb-0 gap-6"><div class="lg:col-span-2 card">`);
      _push(ssrRenderComponent(_component_Textarea, {
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event,
        class: "w-full",
        rows: "6"
      }, null, _parent));
      _push(`</div><div><div class="flex flex-col items-start justify-start py-4"><div class="flex flex-wrap mt-4 space-x-2"><!--[-->`);
      ssrRenderList(realisationsImage.value.media, (file, index) => {
        _push(`<div><div class="flex-flex-wrap"><div class="relative group"><img${ssrRenderAttr("src", file.url)}${ssrRenderAttr("alt", file.alt)} class="w-24 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80"><div class="absolute top-0 right-0 mt-2 mr-2">`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => removeOneFile(index),
          size: "small",
          outlined: "",
          icon: "pi pi-trash"
        }, null, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="lg:col-span-1 card">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Profile/RealisationEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

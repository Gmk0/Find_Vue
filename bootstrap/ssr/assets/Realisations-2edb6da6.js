import { computed, ref, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, Fragment, renderList, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FreelanceLayout-d852c974.js";
import { useForm } from "@inertiajs/vue3";
import "./userInfo-683bc3e6.js";
import "pinia";
import "axios";
import "@vueuse/core";
import "./ResponsiveNavLink-79527a9d.js";
import "./MainSidebarF-0d2b34f4.js";
import "vue3-popper";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Realisations",
  __ssrInlineRender: true,
  props: {
    realisations: Array
  },
  setup(__props) {
    const props = __props;
    const realisationsImage = computed(() => props.realisations.data);
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
          fileUpload.value.removeUploadedFile();
          form.reset();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_Button = resolveComponent("Button");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_Column = resolveComponent("Column");
      const _component_Textarea = resolveComponent("Textarea");
      const _component_Toast = resolveComponent("Toast");
      const _component_FileUpload = resolveComponent("FileUpload");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("freelance.dashboard"),
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"${_scopeId}></path></svg> Dashboard `);
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
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Realisations</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Realisations</h1></div><div class="flex flex-col mt-4"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("freelance.realisationsAjout")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              label: "Ajouter",
              outlined: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                label: "Ajouter",
                outlined: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class=""><div class="card">`);
      _push(ssrRenderComponent(_component_DataTable, {
        stripedRows: "",
        paginator: "",
        rows: 10,
        rowsPerPageOptions: [2, 10, 20, 50],
        value: realisationsImage.value,
        tableStyle: "min-width: 50rem"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pas de realisation. `);
          } else {
            return [
              createTextVNode(" Pas de realisation. ")
            ];
          }
        }),
        loading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Loading customers data. Please wait. `);
          } else {
            return [
              createTextVNode(" Loading customers data. Please wait. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Column, {
              sortable: "",
              field: "id",
              header: "id"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "description",
              header: "description"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, { header: "description" }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(slotProps.data.media, (image) => {
                    _push3(`<div${_scopeId2}><img class="w-12"${ssrRenderAttr("src", image.preview_url)}${ssrRenderAttr("alt", image.name)}${_scopeId2}></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(slotProps.data.media, (image) => {
                      return openBlock(), createBlock("div", null, [
                        createVNode("img", {
                          class: "w-12",
                          src: image.preview_url,
                          alt: image.name
                        }, null, 8, ["src", "alt"])
                      ]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              exportable: false,
              style: { "min-width": "4rem" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Link, { href: "test" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}><i class="pi pi-pencil"${_scopeId3}></i></span>`);
                      } else {
                        return [
                          createVNode("span", null, [
                            createVNode("i", { class: "pi pi-pencil" })
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Link, { href: "test" }, {
                      default: withCtx(() => [
                        createVNode("span", null, [
                          createVNode("i", { class: "pi pi-pencil" })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Column, {
                sortable: "",
                field: "id",
                header: "id"
              }),
              createVNode(_component_Column, {
                field: "description",
                header: "description"
              }),
              createVNode(_component_Column, { header: "description" }, {
                body: withCtx((slotProps) => [
                  (openBlock(true), createBlock(Fragment, null, renderList(slotProps.data.media, (image) => {
                    return openBlock(), createBlock("div", null, [
                      createVNode("img", {
                        class: "w-12",
                        src: image.preview_url,
                        alt: image.name
                      }, null, 8, ["src", "alt"])
                    ]);
                  }), 256))
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                exportable: false,
                style: { "min-width": "4rem" }
              }, {
                body: withCtx((slotProps) => [
                  createVNode(_component_Link, { href: "test" }, {
                    default: withCtx(() => [
                      createVNode("span", null, [
                        createVNode("i", { class: "pi pi-pencil" })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid hidden grid-cols-2 gap-6"><div class="lg:col-span-1 card">`);
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
        chooseLabel: "Choisir",
        showUploadButton: false,
        "show-cancel-button": false,
        "file-limit": 2,
        ref_key: "fileUpload",
        ref: fileUpload,
        multiple: true,
        accept: "image/*",
        maxFileSize: 5e6
      }, {
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
      _push(`</div><div class="flex items-center justify-center col-span-2">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Profile/Realisations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

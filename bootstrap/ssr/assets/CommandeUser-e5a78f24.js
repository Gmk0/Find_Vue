import { resolveComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-abf6b96a.js";
import DataTable from "primevue/datatable/datatable.esm.js";
import Column from "primevue/column/column.esm.js";
import "./store-9e809cfe.js";
import "pinia";
import "axios";
import "@vueuse/core";
import "./OtherPanelUser-0912d387.js";
import "vue3-popper";
import "./userInfo-500c6318.js";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-cc961511.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "CommandeUser",
  __ssrInlineRender: true,
  props: {
    commandes: Array
  },
  setup(__props) {
    const formatCurrency = (value) => {
      return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="py-2"><ul class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-100"><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Commande`);
          } else {
            return [
              createTextVNode("Commande")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><span class="mx-2 text-base">&gt;</span></li><li class="text-gray-700 dark:text-gray-200"> Liste </li></ul></nav></div><h1 class="text-3xl font-bold text-black dark:text-white">Commandes</h1></div><div></div><div class="mt-4"><div><div class="card">`);
      _push(ssrRenderComponent(unref(DataTable), {
        stripedRows: "",
        paginator: "",
        rows: 2,
        rowsPerPageOptions: [2, 10, 20, 50],
        value: __props.commandes.data,
        tableStyle: "min-width: 50rem"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` No customers found. `);
          } else {
            return [
              createTextVNode(" No customers found. ")
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
            _push2(ssrRenderComponent(unref(Column), {
              sortable: "",
              field: "order_numero",
              header: "order_numero"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Column), {
              field: "service.title",
              header: "TITLE"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Column), {
              field: "total_amount",
              header: "Montant"
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatCurrency(slotProps.data.total_amount))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatCurrency(slotProps.data.total_amount)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Column), {
              field: "status",
              header: "status"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Column), {
              exportable: false,
              style: { "min-width": "4rem" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Link, {
                    href: _ctx.route("user.commandes.one", [slotProps.data.order_numero])
                  }, {
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
                    createVNode(_component_Link, {
                      href: _ctx.route("user.commandes.one", [slotProps.data.order_numero])
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, [
                          createVNode("i", { class: "pi pi-pencil" })
                        ])
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Column), {
                sortable: "",
                field: "order_numero",
                header: "order_numero"
              }),
              createVNode(unref(Column), {
                field: "service.title",
                header: "TITLE"
              }),
              createVNode(unref(Column), {
                field: "total_amount",
                header: "Montant"
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(formatCurrency(slotProps.data.total_amount)), 1)
                ]),
                _: 1
              }),
              createVNode(unref(Column), {
                field: "status",
                header: "status"
              }),
              createVNode(unref(Column), {
                exportable: false,
                style: { "min-width": "4rem" }
              }, {
                body: withCtx((slotProps) => [
                  createVNode(_component_Link, {
                    href: _ctx.route("user.commandes.one", [slotProps.data.order_numero])
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, [
                        createVNode("i", { class: "pi pi-pencil" })
                      ])
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Commande/CommandeUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

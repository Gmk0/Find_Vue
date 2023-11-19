import { resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FreelanceLayout-941c173b.js";
import "./userInfo-1ade63c0.js";
import "@inertiajs/vue3";
import "pinia";
import "axios";
import "@vueuse/core";
import "./ResponsiveNavLink-79527a9d.js";
import "./MainSidebarF-0d2b34f4.js";
import "vue3-popper";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    totalPercue: String,
    commandeTotal: String,
    commandeLivre: String,
    commandeEnAttente: String,
    commandes: Array,
    solde: String
  },
  setup(__props) {
    const formatCurrency = (value) => {
      return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };
    const getSeverity = (commande) => {
      switch (commande.status) {
        case "pending":
          return "warning";
        case "completed":
          return "success";
        case "failed":
          return "danger";
        default:
          return null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_H1 = resolveComponent("H1");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_Column = resolveComponent("Column");
      const _component_Tag = resolveComponent("Tag");
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-12 gap-4 mt-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6"><div class="col-span-12 dark:bg-gray-900 card lg:col-span-8"><div class="flex flex-col justify-between px-4 mt-3 sm:flex-row sm:items-center sm:px-5"><div class="flex items-center justify-between flex-1 space-x-2 sm:flex-initial"><h2 class="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100"> Aperçu de la commande </h2></div></div><div class="grid grid-cols-2 gap-3 px-4 py-4 mt-4 sm:mt-5 sm:grid-cols-4 sm:gap-5 sm:px-5 lg:mt-6"><div class="p-4 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex justify-between space-x-1"><p class="text-xl font-semibold text-slate-700 dark:text-navy-100">${ssrInterpolate(__props.totalPercue)}</p><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><p class="mt-1 text-xs+">Revenu</p></div><div class="p-4 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex justify-between"><p class="text-xl font-semibold text-slate-700 dark:text-navy-100">${ssrInterpolate(__props.commandeTotal)}</p><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></div><p class="mt-1 text-xs+">Total</p></div><div class="p-4 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex justify-between"><p class="text-xl font-semibold text-slate-700 dark:text-navy-100">${ssrInterpolate(__props.commandeEnAttente)}</p><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><p class="mt-1 text-xs+">En attente</p></div><div class="p-4 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex justify-between"><p class="text-xl font-semibold text-slate-700 dark:text-navy-100">${ssrInterpolate(__props.commandeLivre)}</p><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg></div><p class="mt-1 text-xs+">Livré</p></div></div></div><div class="grid grid-cols-2 col-span-12 gap-4 sm:grid-cols-4 sm:gap-5 lg:col-span-4 lg:grid-cols-2 lg:gap-6"><div class="col-span-2 px-4 pb-5 bg-gray-200 dark:bg-navy-800 card sm:px-5"><div class="flex items-center justify-between py-3"><h2 class="font-medium tracking-wide text-slate-700 dark:text-navy-100"> Revenus </h2></div><div class="flex space-x-5 grow"><div class="flex flex-col w-1/2"><div class="grow"><p class="text-2xl font-semibold text-slate-700 dark:text-navy-100">${ssrInterpolate(__props.solde)}</p><a href="#" class="border-b border-dotted border-current pb-0.5 text-tiny font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"></a></div><p class="hidden mt-2 text-xs leading-normal line-clamp-3"> You have spent about 25% of your annual budget. </p></div></div></div></div><div class="col-span-12 lg:min-h-48"><div class="flex flex-col gap-2"><div class="mt-4"><div>`);
      _push(ssrRenderComponent(_component_H1, { class: "mb-4 text-lg text-gray-700 dark:text-gray-200" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dernier commande`);
          } else {
            return [
              createTextVNode("Dernier commande")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><div class="card">`);
      _push(ssrRenderComponent(_component_DataTable, {
        stripedRows: "",
        paginator: "",
        rows: 10,
        rowsPerPageOptions: [10, 20, 50, 100],
        value: __props.commandes.data,
        tableStyle: "min-width: 50rem"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pas de Commande disponible. `);
          } else {
            return [
              createTextVNode(" Pas de Commande disponible. ")
            ];
          }
        }),
        loading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Chargement de commandes ... `);
          } else {
            return [
              createTextVNode(" Chargement de commandes ... ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Column, {
              sortable: "",
              field: "order_numero",
              header: "order_numero"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "service.title",
              header: "TITLE"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "total_amount",
              header: "Montant"
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatCurrency(slotProps.data.total_amount))} $ `);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatCurrency(slotProps.data.total_amount)) + " $ ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, { header: "status" }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Tag, {
                    value: slotProps.data.status,
                    severity: getSeverity(slotProps.data)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Tag, {
                      value: slotProps.data.status,
                      severity: getSeverity(slotProps.data)
                    }, null, 8, ["value", "severity"])
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
              createVNode(_component_Column, {
                sortable: "",
                field: "order_numero",
                header: "order_numero"
              }),
              createVNode(_component_Column, {
                field: "service.title",
                header: "TITLE"
              }),
              createVNode(_component_Column, {
                field: "total_amount",
                header: "Montant"
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(formatCurrency(slotProps.data.total_amount)) + " $ ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Column, { header: "status" }, {
                body: withCtx((slotProps) => [
                  createVNode(_component_Tag, {
                    value: slotProps.data.status,
                    severity: getSeverity(slotProps.data)
                  }, null, 8, ["value", "severity"])
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
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
      _push(`</div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Dashboard/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

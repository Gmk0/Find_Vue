import { ref, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FreelanceLayout-d0e3e923.js";
import { FilterMatchMode } from "primevue/api/api.esm.js";
import "./userInfo-a25f65d4.js";
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
  __name: "Releves",
  __ssrInlineRender: true,
  props: {
    transactions: Array,
    debits: String,
    paiments: String,
    credits: String
  },
  setup(__props) {
    const props = __props;
    const filters = ref({
      status: { value: null, matchMode: FilterMatchMode.EQUALS },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const statuses = ref(["pending", "completed", "failed"]);
    const getSeverity = (transaction) => {
      switch (transaction.status) {
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
    const formatCurrency = (value) => {
      return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_Button = resolveComponent("Button");
      const _component_Column = resolveComponent("Column");
      const _component_Tag = resolveComponent("Tag");
      const _component_Dropdown = resolveComponent("Dropdown");
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Releves</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Releves</h1></div><div><div class="grid gap-4 md:grid-cols-3"><div class="px-6 py-3 bg-white rounded-lg shadow-xl dark:bg-navy-800"><div class="flex items-center justify-between"><span class="text-sm font-bold text-gray-700 dark:text-gray-200">Total credit</span></div><div class="flex items-center justify-between mt-6"><div><svg class="w-12 h-12 p-1 text-gray-600 border rounded-full bg-amber-400 border-amber-600 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div class="flex flex-col"><div class="flex items-end"><span class="text-2xl font-bold dark:text-gray-200 2xl:text-4xl">${ssrInterpolate(props.credits)}</span></div></div></div></div><div class="px-6 py-3 bg-white rounded-lg shadow-xl dark:bg-navy-800"><div class="flex items-center justify-between"><span class="text-sm font-bold dark:text-gray-200 text-gary-700">Total debit</span></div><div class="flex items-center justify-between mt-6"><div><svg class="w-12 h-12 p-1 text-gray-600 border rounded-full bg-amber-400 border-amber-600 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div class="flex flex-col"><div class="flex items-end"><span class="text-2xl font-bold dark:text-gray-200 2xl:text-4xl">${ssrInterpolate(props.debits)} $</span></div></div></div></div><div class="px-6 py-3 bg-white rounded-lg shadow-xl dark:bg-navy-800"><div class="flex items-center justify-between"><span class="text-sm font-bold text-gray-700 dark:text-gray-200">Total Paiment</span></div><div class="flex items-center justify-between mt-6"><div><svg class="w-12 h-12 p-1 text-gray-600 border rounded-full bg-amber-400 border-amber-600 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div class="flex flex-col"><div class="flex items-end"><span class="text-2xl font-bold dark:text-gray-200 2xl:text-4xl">${ssrInterpolate(props.paiments)} $</span></div></div></div></div></div></div><div class="mt-4"><div><div class="card">`);
      _push(ssrRenderComponent(_component_DataTable, {
        filters: filters.value,
        "onUpdate:filters": ($event) => filters.value = $event,
        stripedRows: "",
        removableSort: "",
        dataKey: "id",
        filterDisplay: "row",
        showGridlines: "",
        paginator: "",
        rows: 10,
        rowsPerPageOptions: [2, 10, 20, 50],
        value: props.transactions.data,
        tableStyle: "min-width: 50rem",
        globalFilterFields: ["status"],
        currentPageReportTemplate: "Documents {first} à {last} sur {totalRecords}"
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
        paginatorend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              icon: "pi pi-download",
              text: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                type: "button",
                icon: "pi pi-download",
                text: ""
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Column, {
              field: "transaction_numero",
              header: "numero"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "amount",
              sortable: "",
              header: "amount"
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatCurrency(slotProps.data.amount))} $ `);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatCurrency(slotProps.data.amount)) + " $ ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              header: "status",
              showFilterMenu: false,
              filterMatchMode: "equals",
              filterMenuStyle: { width: "8rem" }
            }, {
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
              filter: withCtx(({ filterCallback }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Dropdown, {
                    modelValue: filters.value["status"],
                    "onUpdate:modelValue": ($event) => filters.value["status"] = $event,
                    onChange: ($event) => filterCallback(),
                    options: statuses.value,
                    placeholder: "Select One",
                    class: "p-column-filter",
                    style: { "min-width": "12rem" },
                    showClear: true
                  }, {
                    option: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Tag, {
                          value: slotProps.option,
                          severity: getSeverity(slotProps.option)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Tag, {
                            value: slotProps.option,
                            severity: getSeverity(slotProps.option)
                          }, null, 8, ["value", "severity"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Dropdown, {
                      modelValue: filters.value["status"],
                      "onUpdate:modelValue": ($event) => filters.value["status"] = $event,
                      onChange: ($event) => filterCallback(),
                      options: statuses.value,
                      placeholder: "Select One",
                      class: "p-column-filter",
                      style: { "min-width": "12rem" },
                      showClear: true
                    }, {
                      option: withCtx((slotProps) => [
                        createVNode(_component_Tag, {
                          value: slotProps.option,
                          severity: getSeverity(slotProps.option)
                        }, null, 8, ["value", "severity"])
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "onChange", "options"])
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
                    href: _ctx.route("freelance.transactions.one", [slotProps.data.transaction_numero])
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
                      href: _ctx.route("freelance.transactions.one", [slotProps.data.transaction_numero])
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
                field: "transaction_numero",
                header: "numero"
              }),
              createVNode(_component_Column, {
                field: "amount",
                sortable: "",
                header: "amount"
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(formatCurrency(slotProps.data.amount)) + " $ ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                header: "status",
                showFilterMenu: false,
                filterMatchMode: "equals",
                filterMenuStyle: { width: "8rem" }
              }, {
                body: withCtx((slotProps) => [
                  createVNode(_component_Tag, {
                    value: slotProps.data.status,
                    severity: getSeverity(slotProps.data)
                  }, null, 8, ["value", "severity"])
                ]),
                filter: withCtx(({ filterCallback }) => [
                  createVNode(_component_Dropdown, {
                    modelValue: filters.value["status"],
                    "onUpdate:modelValue": ($event) => filters.value["status"] = $event,
                    onChange: ($event) => filterCallback(),
                    options: statuses.value,
                    placeholder: "Select One",
                    class: "p-column-filter",
                    style: { "min-width": "12rem" },
                    showClear: true
                  }, {
                    option: withCtx((slotProps) => [
                      createVNode(_component_Tag, {
                        value: slotProps.option,
                        severity: getSeverity(slotProps.option)
                      }, null, 8, ["value", "severity"])
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "onChange", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                exportable: false,
                style: { "min-width": "4rem" }
              }, {
                body: withCtx((slotProps) => [
                  createVNode(_component_Link, {
                    href: _ctx.route("freelance.transactions.one", [slotProps.data.transaction_numero])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Paiement/Releves.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

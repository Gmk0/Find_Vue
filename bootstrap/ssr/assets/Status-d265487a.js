import { onMounted, computed, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-7321efd4.js";
import { c as cartStore } from "./userInfo-9512d7bb.js";
import "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "vue-collapsed";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
const Status_vue_vue_type_style_index_0_scoped_3e15e9c0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Status",
  __ssrInlineRender: true,
  props: {
    transaction: Object
  },
  setup(__props) {
    const usecartStore = cartStore();
    onMounted(() => {
      usecartStore.clearCart();
    });
    computed(() => usecartStore.items);
    computed(() => usecartStore.totalCost);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-3e15e9c0${_scopeId}><div class="min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900" data-v-3e15e9c0${_scopeId}><div class="flex flex-col items-center justify-center min-h-screen py-24" data-v-3e15e9c0${_scopeId}><div class="text-center bg-white rounded-md shadow-md dark:bg-gray-800" data-v-3e15e9c0${_scopeId}><svg class="w-20 h-20 mx-auto mb-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-v-3e15e9c0${_scopeId}><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4.707-8.293a1 1 0 1 1 1.414 1.414l2.793 2.793 5.793-5.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414 0l-4.5-4.5z" data-v-3e15e9c0${_scopeId}></path></svg><h3 class="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100" data-v-3e15e9c0${_scopeId}>Paiement réussi</h3><div class="p-4 rounded-lg" data-v-3e15e9c0${_scopeId}><p class="px-6 mb-4 text-lg text-gray-800 dark:text-gray-100" data-v-3e15e9c0${_scopeId}>Votre paiement a été traité avec succès. Voici un récapitulatif de votre commande : </p><ul class="mb-4" data-v-3e15e9c0${_scopeId}><!--[-->`);
            ssrRenderList(__props.transaction.data.orders, (order) => {
              _push2(`<li class="flex justify-between px-6" data-v-3e15e9c0${_scopeId}><span class="text-lg font-medium" data-v-3e15e9c0${_scopeId}>Service : ${ssrInterpolate(order.service.title)}</span><span class="text-lg font-bold" data-v-3e15e9c0${_scopeId}>${ssrInterpolate(order.total_amount)} $</span></li>`);
            });
            _push2(`<!--]--></ul><p class="text-green-700" data-v-3e15e9c0${_scopeId}>Nous vous remercions de votre achat et espérons vous revoir bientôt !</p><div class="mt-8 space-x-4" data-v-3e15e9c0${_scopeId}><a${ssrRenderAttr("href", _ctx.route("facturation", [__props.transaction.data.transaction_numero]))} class="px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600" data-v-3e15e9c0${_scopeId}>Imprimer facture</a>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("user.commandes"),
              class: "px-4 py-2 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` voir l&#39;evolution`);
                } else {
                  return [
                    createTextVNode(" voir l'evolution")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900" }, [
                  createVNode("div", { class: "flex flex-col items-center justify-center min-h-screen py-24" }, [
                    createVNode("div", { class: "text-center bg-white rounded-md shadow-md dark:bg-gray-800" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-20 h-20 mx-auto mb-6 text-green-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4.707-8.293a1 1 0 1 1 1.414 1.414l2.793 2.793 5.793-5.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414 0l-4.5-4.5z"
                        })
                      ])),
                      createVNode("h3", { class: "mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100" }, "Paiement réussi"),
                      createVNode("div", { class: "p-4 rounded-lg" }, [
                        createVNode("p", { class: "px-6 mb-4 text-lg text-gray-800 dark:text-gray-100" }, "Votre paiement a été traité avec succès. Voici un récapitulatif de votre commande : "),
                        createVNode("ul", { class: "mb-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.transaction.data.orders, (order) => {
                            return openBlock(), createBlock("li", { class: "flex justify-between px-6" }, [
                              createVNode("span", { class: "text-lg font-medium" }, "Service : " + toDisplayString(order.service.title), 1),
                              createVNode("span", { class: "text-lg font-bold" }, toDisplayString(order.total_amount) + " $", 1)
                            ]);
                          }), 256))
                        ]),
                        createVNode("p", { class: "text-green-700" }, "Nous vous remercions de votre achat et espérons vous revoir bientôt !"),
                        createVNode("div", { class: "mt-8 space-x-4" }, [
                          createVNode("a", {
                            href: _ctx.route("facturation", [__props.transaction.data.transaction_numero]),
                            class: "px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"
                          }, "Imprimer facture", 8, ["href"]),
                          createVNode(_component_Link, {
                            href: _ctx.route("user.commandes"),
                            class: "px-4 py-2 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" voir l'evolution")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Checkout/Status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Status = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e15e9c0"]]);
export {
  Status as default
};

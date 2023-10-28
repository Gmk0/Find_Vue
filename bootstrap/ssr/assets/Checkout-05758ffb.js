import { ref, computed, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, unref, createTextVNode, withDirectives, vShow, vModelCheckbox, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-2a57e25f.js";
import { d as cartStore } from "./store-0ea3a1d1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "primevue/config/config.esm.js";
import "./ResponsiveNavLink-cc961511.js";
import "vue-collapsed";
import "pinia";
import "axios";
const Checkout_vue_vue_type_style_index_0_scoped_dd1afce3_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const usecartStore = cartStore();
    const form = ref({
      name: "",
      numero: ""
    });
    const items = computed(() => usecartStore.items);
    const totalPrice = computed(() => usecartStore.totalCost);
    const isShow = ref(false);
    const isCard = ref(false);
    const isOther = ref(false);
    const checkoutMaxi = async () => {
      if (items.value) {
        const response = await usecartStore.checkoutMaxi(form.value);
        window.location.href = response;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TextInput = resolveComponent("TextInput");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-dd1afce3${_scopeId}><div class="min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900" data-v-dd1afce3${_scopeId}><div class="px-6 md:px-12" data-v-dd1afce3${_scopeId}><div data-v-dd1afce3${_scopeId}><div class="mb-2" data-v-dd1afce3${_scopeId}></div><div class="mb-2" data-v-dd1afce3${_scopeId}><h1 class="text-5xl font-bold text-gray-600 md:text-2xl dark:text-gray-200" data-v-dd1afce3${_scopeId}>Panier</h1></div></div><div data-v-dd1afce3${_scopeId}></div>`);
            if (items.value.length > 0) {
              _push2(`<div class="w-full px-5 py-10 mx-0 text-gray-800 bg-white border-t border-b border-gray-200 rounded-md dark:bg-gray-800" data-v-dd1afce3${_scopeId}><div class="w-full" data-v-dd1afce3${_scopeId}><div class="items-start -mx-3 md:flex" data-v-dd1afce3${_scopeId}><div class="px-3 md:w-7/12 lg:pr-10" data-v-dd1afce3${_scopeId}><ul class="flex flex-col divide-y divide-gray-700" data-v-dd1afce3${_scopeId}><!--[-->`);
              ssrRenderList(items.value, (item) => {
                _push2(`<li class="flex flex-col py-6 sm:flex-row sm:justify-between" data-v-dd1afce3${_scopeId}><div class="flex w-full space-x-2 sm:space-x-4" data-v-dd1afce3${_scopeId}><img class="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500"${ssrRenderAttr("src", item.image)} alt="service" data-v-dd1afce3${_scopeId}><div class="flex flex-col justify-between w-full pb-4" data-v-dd1afce3${_scopeId}><div class="flex justify-between w-full pb-2 space-x-2" data-v-dd1afce3${_scopeId}><div class="space-y-1" data-v-dd1afce3${_scopeId}><h3 class="text-lg font-semibold leading-snug dark:text-gray-100 sm:pr-8" data-v-dd1afce3${_scopeId}>${ssrInterpolate(item.name)}</h3><p class="text-sm dark:text-gray-100" data-v-dd1afce3${_scopeId}>${ssrInterpolate(item.basic)}</p></div><div class="text-right dark:text-gray-100" data-v-dd1afce3${_scopeId}><p class="text-lg font-semibold" data-v-dd1afce3${_scopeId}>$${ssrInterpolate(item.price * item.quantity)}</p><p class="text-sm line-through" data-v-dd1afce3${_scopeId}> $</p></div></div><div class="flex text-sm divide-x dark:text-white" data-v-dd1afce3${_scopeId}><button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1" data-v-dd1afce3${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current" data-v-dd1afce3${_scopeId}><path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" data-v-dd1afce3${_scopeId}></path><rect width="32" height="200" x="168" y="216" data-v-dd1afce3${_scopeId}></rect><rect width="32" height="200" x="240" y="216" data-v-dd1afce3${_scopeId}></rect><rect width="32" height="200" x="312" y="216" data-v-dd1afce3${_scopeId}></rect><path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" data-v-dd1afce3${_scopeId}></path></svg><span data-v-dd1afce3${_scopeId}>Retirer</span></button><div data-v-dd1afce3${_scopeId}><div x-data="{ productQuantity: @json($item[&#39;quantity&#39;]) }" data-v-dd1afce3${_scopeId}><label for="Quantity" class="sr-only" data-v-dd1afce3${_scopeId}> Quantity </label><div class="flex items-center gap-1" data-v-dd1afce3${_scopeId}><button type="button"${ssrIncludeBooleanAttr(item.quantity === 1) ? " disabled" : ""} class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75" data-v-dd1afce3${_scopeId}> − </button><input disabled type="number" id="Quantity"${ssrRenderAttr("value", item.quantity)} class="h-10 w-16 rounded border-gray-200 dark:bg-gray-700 text-center [-moz-appearance:_textfield] sm:text-sm [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none" data-v-dd1afce3${_scopeId}><button type="button" class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75" data-v-dd1afce3${_scopeId}> + </button></div></div></div></div></div></div></li>`);
              });
              _push2(`<!--]--></ul><div class="pb-6 mb-6 border-b border-gray-200" data-v-dd1afce3${_scopeId}><button class="" data-v-dd1afce3${_scopeId}><label class="flex gap-1 mb-2 ml-1 text-sm font-semibold text-gray-600 dark:text-gray-200" data-v-dd1afce3${_scopeId}>Coupon de reduction code <span class="py-1.5" data-v-dd1afce3${_scopeId}><svg style="${ssrRenderStyle(!isShow.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-dd1afce3${_scopeId}><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" data-v-dd1afce3${_scopeId}></path></svg></span><span class="py-1.5" data-v-dd1afce3${_scopeId}><svg style="${ssrRenderStyle(isShow.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-dd1afce3${_scopeId}><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" data-v-dd1afce3${_scopeId}></path></svg></span></label></button><div class="flex items-end justify-end" style="${ssrRenderStyle(isShow.value ? null : { display: "none" })}" data-v-dd1afce3${_scopeId}><div class="flex-grow px-2 lg:max-w-md" data-v-dd1afce3${_scopeId}><div class="p-2" data-v-dd1afce3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TextInput, null, null, _parent2, _scopeId));
              _push2(`</div></div><div class="p-2" data-v-dd1afce3${_scopeId}><button class="block w-full max-w-xs px-5 py-2 mx-auto font-semibold text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:bg-gray-500" data-v-dd1afce3${_scopeId}>APPLIQUER</button></div></div></div><div class="pb-6 mb-6 text-gray-800 border-b border-gray-200" data-v-dd1afce3${_scopeId}><div class="flex items-center w-full mb-3" data-v-dd1afce3${_scopeId}><div class="flex-grow" data-v-dd1afce3${_scopeId}><span class="text-gray-600 dark:text-gray-200" data-v-dd1afce3${_scopeId}>Sous total</span></div><div class="pl-3" data-v-dd1afce3${_scopeId}><span class="font-semibold dark:text-gray-50" data-v-dd1afce3${_scopeId}>${ssrInterpolate(totalPrice.value)} $</span></div></div><div class="flex items-center w-full" data-v-dd1afce3${_scopeId}><div class="flex-grow" data-v-dd1afce3${_scopeId}><span class="text-gray-600 dark:text-gray-200" data-v-dd1afce3${_scopeId}>Taxes(GST)</span></div><div class="pl-3" data-v-dd1afce3${_scopeId}><span class="font-semibold dark:text-gray-50" data-v-dd1afce3${_scopeId}>$0</span></div></div></div><div class="pb-6 mb-6 text-xl text-gray-800 border-b border-gray-200 md:border-none" data-v-dd1afce3${_scopeId}><div class="flex items-center w-full" data-v-dd1afce3${_scopeId}><div class="flex-grow" data-v-dd1afce3${_scopeId}><span class="text-gray-600 dark:text-gray-200" data-v-dd1afce3${_scopeId}>Total</span></div><div class="pl-3" data-v-dd1afce3${_scopeId}><span class="text-sm font-semibold text-gray-400 dark:text-gray-20" data-v-dd1afce3${_scopeId}></span><span class="font-semibold" data-v-dd1afce3${_scopeId}>${ssrInterpolate(totalPrice.value)} $</span></div></div></div></div><div class="px-3 md:w-5/12" data-v-dd1afce3${_scopeId}><div class="w-full p-4 mb-4 font-semibold bg-white border border-gray-200 rounded-md dark:bg-gray-900" data-v-dd1afce3${_scopeId}><div class="flex flex-col gap-4" data-v-dd1afce3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TextInput, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_TextInput, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_TextInput, null, null, _parent2, _scopeId));
              _push2(`</div></div><div class="w-full mx-auto mb-6 text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900" data-v-dd1afce3${_scopeId}><div class="w-full p-3 border-b border-gray-200" data-v-dd1afce3${_scopeId}><div class="mb-5" data-v-dd1afce3${_scopeId}><label for="type1" class="flex items-center cursor-pointer" data-v-dd1afce3${_scopeId}><input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type1"${ssrIncludeBooleanAttr(Array.isArray(isCard.value) ? ssrLooseContain(isCard.value, null) : isCard.value) ? " checked" : ""} data-v-dd1afce3${_scopeId}><img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-6 ml-3" data-v-dd1afce3${_scopeId}></label></div>`);
              if (isCard.value) {
                _push2(`<div class="px-2" data-v-dd1afce3${_scopeId}><div class="relative grid grid-cols-3 gap-2 mb-3" data-v-dd1afce3${_scopeId}></div><div class="mt-4" data-v-dd1afce3${_scopeId}><button class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true" data-v-dd1afce3${_scopeId}><span data-v-dd1afce3${_scopeId}>PAYER ($)</span></button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="w-full p-6 border-b border-gray-200" data-v-dd1afce3${_scopeId}><div class="mb-5" data-v-dd1afce3${_scopeId}><label for="type2" class="flex items-center cursor-pointer" data-v-dd1afce3${_scopeId}><input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type2"${ssrIncludeBooleanAttr(Array.isArray(isOther.value) ? ssrLooseContain(isOther.value, null) : isOther.value) ? " checked" : ""} data-v-dd1afce3${_scopeId}><img src="/images/icon/maxicash.png" class="h-6 ml-3" data-v-dd1afce3${_scopeId}></label></div>`);
              if (isOther.value) {
                _push2(`<div data-v-dd1afce3${_scopeId}><form data-v-dd1afce3${_scopeId}>`);
                _push2(ssrRenderComponent(_component_TextInput, {
                  modelValue: form.value.name,
                  "onUpdate:modelValue": ($event) => form.value.name = $event
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_TextInput, {
                  modelValue: form.value.numero,
                  "onUpdate:modelValue": ($event) => form.value.numero = $event
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex flex-col gap-4 px-3 mb-3" data-v-dd1afce3${_scopeId}><button type="submit" class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-v-dd1afce3${_scopeId}> payer </button></div></form></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div></div></div></div>`);
            } else {
              _push2(`<div class="flex flex-col items-center justify-center gap-4 py-8" data-v-dd1afce3${_scopeId}><h1 class="text-2xl" data-v-dd1afce3${_scopeId}>Votre panier est vide</h1></div>`);
            }
            _push2(`</div>`);
            {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900" }, [
                  createVNode("div", { class: "px-6 md:px-12" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "mb-2" }),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("h1", { class: "text-5xl font-bold text-gray-600 md:text-2xl dark:text-gray-200" }, "Panier")
                      ])
                    ]),
                    createVNode("div"),
                    items.value.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-full px-5 py-10 mx-0 text-gray-800 bg-white border-t border-b border-gray-200 rounded-md dark:bg-gray-800"
                    }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode("div", { class: "items-start -mx-3 md:flex" }, [
                          createVNode("div", { class: "px-3 md:w-7/12 lg:pr-10" }, [
                            createVNode("ul", { class: "flex flex-col divide-y divide-gray-700" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                                return openBlock(), createBlock("li", { class: "flex flex-col py-6 sm:flex-row sm:justify-between" }, [
                                  createVNode("div", { class: "flex w-full space-x-2 sm:space-x-4" }, [
                                    createVNode("img", {
                                      class: "flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500",
                                      src: item.image,
                                      alt: "service"
                                    }, null, 8, ["src"]),
                                    createVNode("div", { class: "flex flex-col justify-between w-full pb-4" }, [
                                      createVNode("div", { class: "flex justify-between w-full pb-2 space-x-2" }, [
                                        createVNode("div", { class: "space-y-1" }, [
                                          createVNode("h3", { class: "text-lg font-semibold leading-snug dark:text-gray-100 sm:pr-8" }, toDisplayString(item.name), 1),
                                          createVNode("p", { class: "text-sm dark:text-gray-100" }, toDisplayString(item.basic), 1)
                                        ]),
                                        createVNode("div", { class: "text-right dark:text-gray-100" }, [
                                          createVNode("p", { class: "text-lg font-semibold" }, "$" + toDisplayString(item.price * item.quantity), 1),
                                          createVNode("p", { class: "text-sm line-through" }, " $")
                                        ])
                                      ]),
                                      createVNode("div", { class: "flex text-sm divide-x dark:text-white" }, [
                                        createVNode("button", {
                                          type: "button",
                                          onClick: ($event) => unref(usecartStore).removeItem(item.id),
                                          class: "flex items-center px-2 py-1 pl-0 space-x-1"
                                        }, [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 512 512",
                                            class: "w-4 h-4 fill-current"
                                          }, [
                                            createVNode("path", { d: "M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" }),
                                            createVNode("rect", {
                                              width: "32",
                                              height: "200",
                                              x: "168",
                                              y: "216"
                                            }),
                                            createVNode("rect", {
                                              width: "32",
                                              height: "200",
                                              x: "240",
                                              y: "216"
                                            }),
                                            createVNode("rect", {
                                              width: "32",
                                              height: "200",
                                              x: "312",
                                              y: "216"
                                            }),
                                            createVNode("path", { d: "M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" })
                                          ])),
                                          createVNode("span", null, "Retirer")
                                        ], 8, ["onClick"]),
                                        createVNode("div", null, [
                                          createVNode("div", { "x-data": "{ productQuantity: @json($item['quantity']) }" }, [
                                            createVNode("label", {
                                              for: "Quantity",
                                              class: "sr-only"
                                            }, " Quantity "),
                                            createVNode("div", { class: "flex items-center gap-1" }, [
                                              createVNode("button", {
                                                type: "button",
                                                disabled: item.quantity === 1,
                                                onClick: ($event) => unref(usecartStore).updateItemQuantity(item.id, item.quantity--),
                                                class: "w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                              }, " − ", 8, ["disabled", "onClick"]),
                                              createVNode("input", {
                                                disabled: "",
                                                type: "number",
                                                id: "Quantity",
                                                value: item.quantity,
                                                class: "h-10 w-16 rounded border-gray-200 dark:bg-gray-700 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                              }, null, 8, ["value"]),
                                              createVNode("button", {
                                                type: "button",
                                                onClick: ($event) => unref(usecartStore).updateItemQuantity(item.id, item.quantity++),
                                                class: "w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                              }, " + ", 8, ["onClick"])
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]);
                              }), 256))
                            ]),
                            createVNode("div", { class: "pb-6 mb-6 border-b border-gray-200" }, [
                              createVNode("button", {
                                onClick: ($event) => isShow.value = !isShow.value,
                                class: ""
                              }, [
                                createVNode("label", { class: "flex gap-1 mb-2 ml-1 text-sm font-semibold text-gray-600 dark:text-gray-200" }, [
                                  createTextVNode("Coupon de reduction code "),
                                  createVNode("span", { class: "py-1.5" }, [
                                    withDirectives((openBlock(), createBlock("svg", {
                                      class: "w-4 h-4 fill-current",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 20 20"
                                    }, [
                                      createVNode("path", { d: "M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" })
                                    ], 512)), [
                                      [vShow, !isShow.value]
                                    ])
                                  ]),
                                  createVNode("span", { class: "py-1.5" }, [
                                    withDirectives((openBlock(), createBlock("svg", {
                                      class: "w-4 h-4 fill-current",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 20 20"
                                    }, [
                                      createVNode("path", { d: "M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" })
                                    ], 512)), [
                                      [vShow, isShow.value]
                                    ])
                                  ])
                                ])
                              ], 8, ["onClick"]),
                              withDirectives(createVNode("div", { class: "flex items-end justify-end" }, [
                                createVNode("div", { class: "flex-grow px-2 lg:max-w-md" }, [
                                  createVNode("div", { class: "p-2" }, [
                                    createVNode(_component_TextInput)
                                  ])
                                ]),
                                createVNode("div", { class: "p-2" }, [
                                  createVNode("button", { class: "block w-full max-w-xs px-5 py-2 mx-auto font-semibold text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:bg-gray-500" }, "APPLIQUER")
                                ])
                              ], 512), [
                                [vShow, isShow.value]
                              ])
                            ]),
                            createVNode("div", { class: "pb-6 mb-6 text-gray-800 border-b border-gray-200" }, [
                              createVNode("div", { class: "flex items-center w-full mb-3" }, [
                                createVNode("div", { class: "flex-grow" }, [
                                  createVNode("span", { class: "text-gray-600 dark:text-gray-200" }, "Sous total")
                                ]),
                                createVNode("div", { class: "pl-3" }, [
                                  createVNode("span", { class: "font-semibold dark:text-gray-50" }, toDisplayString(totalPrice.value) + " $", 1)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center w-full" }, [
                                createVNode("div", { class: "flex-grow" }, [
                                  createVNode("span", { class: "text-gray-600 dark:text-gray-200" }, "Taxes(GST)")
                                ]),
                                createVNode("div", { class: "pl-3" }, [
                                  createVNode("span", { class: "font-semibold dark:text-gray-50" }, "$0")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "pb-6 mb-6 text-xl text-gray-800 border-b border-gray-200 md:border-none" }, [
                              createVNode("div", { class: "flex items-center w-full" }, [
                                createVNode("div", { class: "flex-grow" }, [
                                  createVNode("span", { class: "text-gray-600 dark:text-gray-200" }, "Total")
                                ]),
                                createVNode("div", { class: "pl-3" }, [
                                  createVNode("span", { class: "text-sm font-semibold text-gray-400 dark:text-gray-20" }),
                                  createVNode("span", { class: "font-semibold" }, toDisplayString(totalPrice.value) + " $", 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "px-3 md:w-5/12" }, [
                            createVNode("div", { class: "w-full p-4 mb-4 font-semibold bg-white border border-gray-200 rounded-md dark:bg-gray-900" }, [
                              createVNode("div", { class: "flex flex-col gap-4" }, [
                                createVNode(_component_TextInput),
                                createVNode(_component_TextInput),
                                createVNode(_component_TextInput)
                              ])
                            ]),
                            createVNode("div", { class: "w-full mx-auto mb-6 text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900" }, [
                              createVNode("div", { class: "w-full p-3 border-b border-gray-200" }, [
                                createVNode("div", { class: "mb-5" }, [
                                  createVNode("label", {
                                    for: "type1",
                                    class: "flex items-center cursor-pointer"
                                  }, [
                                    withDirectives(createVNode("input", {
                                      type: "checkbox",
                                      class: "w-5 h-5 text-indigo-500 form-radio",
                                      id: "type1",
                                      "onUpdate:modelValue": ($event) => isCard.value = $event,
                                      onClick: ($event) => isOther.value = false
                                    }, null, 8, ["onUpdate:modelValue", "onClick"]), [
                                      [vModelCheckbox, isCard.value]
                                    ]),
                                    createVNode("img", {
                                      src: "https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png",
                                      class: "h-6 ml-3"
                                    })
                                  ])
                                ]),
                                isCard.value ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "px-2"
                                }, [
                                  createVNode("div", { class: "relative grid grid-cols-3 gap-2 mb-3" }),
                                  createVNode("div", { class: "mt-4" }, [
                                    createVNode("button", {
                                      class: "block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
                                      "data-ripple-light": "true"
                                    }, [
                                      createVNode("span", null, "PAYER ($)")
                                    ])
                                  ])
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "w-full p-6 border-b border-gray-200" }, [
                                createVNode("div", { class: "mb-5" }, [
                                  createVNode("label", {
                                    for: "type2",
                                    class: "flex items-center cursor-pointer"
                                  }, [
                                    withDirectives(createVNode("input", {
                                      type: "checkbox",
                                      class: "w-5 h-5 text-indigo-500 form-radio",
                                      id: "type2",
                                      "onUpdate:modelValue": ($event) => isOther.value = $event,
                                      onClick: ($event) => isCard.value = false
                                    }, null, 8, ["onUpdate:modelValue", "onClick"]), [
                                      [vModelCheckbox, isOther.value]
                                    ]),
                                    createVNode("img", {
                                      src: "/images/icon/maxicash.png",
                                      class: "h-6 ml-3"
                                    })
                                  ])
                                ]),
                                isOther.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("form", {
                                    onSubmit: withModifiers(checkoutMaxi, ["prevent"])
                                  }, [
                                    createVNode(_component_TextInput, {
                                      modelValue: form.value.name,
                                      "onUpdate:modelValue": ($event) => form.value.name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_TextInput, {
                                      modelValue: form.value.numero,
                                      "onUpdate:modelValue": ($event) => form.value.numero = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "flex flex-col gap-4 px-3 mb-3" }, [
                                      createVNode("button", {
                                        type: "submit",
                                        class: "block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                      }, " payer ")
                                    ])
                                  ], 40, ["onSubmit"])
                                ])) : createCommentVNode("", true)
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col items-center justify-center gap-4 py-8"
                    }, [
                      createVNode("h1", { class: "text-2xl" }, "Votre panier est vide")
                    ]))
                  ]),
                  createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Checkout/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dd1afce3"]]);
export {
  Checkout as default
};

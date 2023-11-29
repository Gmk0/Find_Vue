import { computed, ref, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, unref, useSSRContext, withModifiers, onMounted, withDirectives, vShow } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { useForm, Link, usePage, Head } from "@inertiajs/vue3";
import { useDark, useToggle } from "@vueuse/core";
import { e as cartStore, f as useStore, a as useCategoryStore, g as useSubcategoriesStore, _ as _sfc_main$9 } from "./userInfo-2152bb8f.js";
import { Collapse } from "vue-collapsed";
import { _ as _sfc_main$8 } from "./Checkbox-a72bbed4.js";
import { _ as _sfc_main$6, a as _sfc_main$7 } from "./TextInput-14bc0530.js";
import { _ as _sfc_main$5 } from "./InputLabel-d47442f5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$4 = {
  __name: "CartComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const usecartStore = cartStore();
    const items = computed(() => usecartStore.items);
    const totalPrice = computed(() => usecartStore.totalCost);
    const visible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sidebar = resolveComponent("Sidebar");
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex card justify-content-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Sidebar, {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        position: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>CART</h2><div class="flex-1 max-h-full p-4 soft-scrollbar"${_scopeId}>`);
            if (items.value) {
              _push2(`<div class="flex-1 overflow-x-hidden overflow-y-auto"${_scopeId}><!--[-->`);
              ssrRenderList(items.value, (item) => {
                _push2(`<div class="flex items-center p-4 space-x-4"${_scopeId}><img class="object-cover w-16 h-16 rounded-lg"${ssrRenderAttr("src", item.image)} alt="Service 1"${_scopeId}><div class="flex-1"${_scopeId}><h3 class="mb-2 font-semibold text-gray-800 break-before-auto dark:text-gray-100"${_scopeId}>${ssrInterpolate(item.name)}</h3><p class="text-gray-500 dark:text-gray-100"${_scopeId}>${ssrInterpolate(item.price)} $</p><div class="mt-4"${_scopeId}><label for="Quantity" class="sr-only"${_scopeId}> Quantity </label><div class="flex items-center gap-1"${_scopeId}><button type="button"${ssrIncludeBooleanAttr(item.quantity === 1) ? " disabled" : ""} class="w-8 h-8 leading-10 text-gray-600 transition hover:opacity-75"${_scopeId}> − </button><input disabled type="number" id="Quantity"${ssrRenderAttr("value", item.quantity)} class="h-8 w-10 rounded border-gray-200 dark:bg-gray-700 text-center [-moz-appearance:_textfield] sm:text-sm [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none"${_scopeId}><button type="button" x-on:click="" class="w-8 h-8 leading-10 text-gray-600 transition hover:opacity-75"${_scopeId}> + </button></div></div></div><button class="text-gray-500 hover:text-gray-600 focus:outline-none"${_scopeId}><svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div${_scopeId}> la carte est vide </div>`);
            }
            if (totalPrice.value != 0) {
              _push2(`<div class="flex flex-col gap-4 p-4 border-t border-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("panier"),
                onClick: ($event) => visible.value = !visible.value,
                class: "block w-full px-2 py-2 text-center text-white align-middle rounded-lg select-none bg-amber-600"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Paiement ${ssrInterpolate(totalPrice.value)} $ `);
                  } else {
                    return [
                      createTextVNode(" Paiement " + toDisplayString(totalPrice.value) + " $ ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<button${_scopeId}>Clear</button></div>`);
            } else {
              _push2(`<div${_scopeId}> la carte est vide </div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("h2", null, "CART"),
              createVNode("div", { class: "flex-1 max-h-full p-4 soft-scrollbar" }, [
                items.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex-1 overflow-x-hidden overflow-y-auto"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                    return openBlock(), createBlock("div", { class: "flex items-center p-4 space-x-4" }, [
                      createVNode("img", {
                        class: "object-cover w-16 h-16 rounded-lg",
                        src: item.image,
                        alt: "Service 1"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("h3", { class: "mb-2 font-semibold text-gray-800 break-before-auto dark:text-gray-100" }, toDisplayString(item.name), 1),
                        createVNode("p", { class: "text-gray-500 dark:text-gray-100" }, toDisplayString(item.price) + " $", 1),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("label", {
                            for: "Quantity",
                            class: "sr-only"
                          }, " Quantity "),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("button", {
                              type: "button",
                              disabled: item.quantity === 1,
                              onClick: ($event) => unref(usecartStore).updateItemQuantity(item.id, item.quantity--),
                              class: "w-8 h-8 leading-10 text-gray-600 transition hover:opacity-75"
                            }, " − ", 8, ["disabled", "onClick"]),
                            createVNode("input", {
                              disabled: "",
                              type: "number",
                              id: "Quantity",
                              value: item.quantity,
                              class: "h-8 w-10 rounded border-gray-200 dark:bg-gray-700 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                            }, null, 8, ["value"]),
                            createVNode("button", {
                              type: "button",
                              "x-on:click": "",
                              onClick: ($event) => unref(usecartStore).updateItemQuantity(item.id, item.quantity++),
                              class: "w-8 h-8 leading-10 text-gray-600 transition hover:opacity-75"
                            }, " + ", 8, ["onClick"])
                          ])
                        ])
                      ]),
                      createVNode("button", {
                        onClick: ($event) => unref(usecartStore).removeItem(item.id),
                        class: "text-gray-500 hover:text-gray-600 focus:outline-none"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", { d: "M6 18L18 6M6 6l12 12" })
                        ]))
                      ], 8, ["onClick"])
                    ]);
                  }), 256))
                ])) : (openBlock(), createBlock("div", { key: 1 }, " la carte est vide ")),
                totalPrice.value != 0 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex flex-col gap-4 p-4 border-t border-gray-200"
                }, [
                  createVNode(_component_Link, {
                    href: _ctx.route("panier"),
                    onClick: ($event) => visible.value = !visible.value,
                    class: "block w-full px-2 py-2 text-center text-white align-middle rounded-lg select-none bg-amber-600"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Paiement " + toDisplayString(totalPrice.value) + " $ ", 1)
                    ]),
                    _: 1
                  }, 8, ["href", "onClick"]),
                  createVNode("button", {
                    onClick: ($event) => unref(usecartStore).clearCart()
                  }, "Clear", 8, ["onClick"])
                ])) : (openBlock(), createBlock("div", { key: 3 }, " la carte est vide "))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="site-cart lg:mr-2"><a href="#" class="site-header__cart" title="Cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-700 dark:text-white lg:block"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg><span id="CartCount" class="site-header__cart-count" data-cart-render="item_count">${ssrInterpolate(unref(usecartStore).totalItems)}</span></a></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CartComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    computed(() => store.canLogin);
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(route("login"), {
        onFinish: () => form.reset("password"),
        onSuccess: () => {
          store.loginUser();
          form.reset("password", "email");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = resolveComponent("Dialog");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(store).canLogin,
        "onUpdate:visible": ($event) => unref(store).canLogin = $event,
        closable: false,
        style: { width: "30rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" },
        position: "top",
        modal: true,
        pt: {
          mask: {
            style: "backdrop-filter: blur(2px)"
          }
        },
        draggable: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex justify-between"${_scopeId}><div class="text-gray-800 dark:text-gray-100"${_scopeId}><h1${_scopeId}>Connexion</h1></div><div${_scopeId}><button class="btn btn-sm btn-circle btn-outline"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div></div><div class="relative flex items-center p-0 overflow-hidden"${_scopeId}><div class="container z-10"${_scopeId}><div class="flex flex-wrap"${_scopeId}><div class="flex flex-col w-full max-w-full px-3 md:mx-auto md:flex-0 shrink-0"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"${_scopeId}><div class="p-2 pb-0 mb-0 bg-transparent border-b-0 md:p-6 rounded-t-2xl"${_scopeId}><h3 class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text"${_scopeId}> Content de te revoir</h3><p class="mb-0"${_scopeId}>Entrez votre email et votre mot de passe pour vous connecter</p></div><div class="flex-auto p-4 md:p-6"${_scopeId}><form role="form"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "block w-full mt-1",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "block w-full mt-1",
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between"${_scopeId}><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, {
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event,
              name: "remember"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>Se souvenir de moi</span></label></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("password.request"),
              class: "mt-4 text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-900 focus:outline-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Mot de passe oublié ? `);
                } else {
                  return [
                    createTextVNode(" Mot de passe oublié ? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-center"${_scopeId}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-0 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft gradient hover:scale-102 hover:shadow-soft-xs active:opacity-85"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}><span${_scopeId}>Connexion</span></button></div><div class="relative w-full max-w-full px-3 mt-2 text-center shrink-0"${_scopeId}><p class="z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white rounded text-slate-400"${_scopeId}> or </p></div><div class="flex flex-wrap px-3 mt-3 -mx-3 sm:px-6 xl:px-12"${_scopeId}><div class="w-4/12 max-w-full px-1 ml-auto flex-0"${_scopeId}><a class="inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="auth/facebook"${_scopeId}><svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink32"${_scopeId}><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId}><g transform="translate(3.000000, 3.000000)" fill-rule="nonzero"${_scopeId}><circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506" r="29.4882047"${_scopeId}></circle><path d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z" fill="#FFFFFF"${_scopeId}></path></g></g></svg></a></div><div class="w-4/12 max-w-full px-1 mr-auto flex-0"${_scopeId}><a class="inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="auth/google"${_scopeId}><svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId}><g transform="translate(3.000000, 2.000000)" fill-rule="nonzero"${_scopeId}><path d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267" fill="#4285F4"${_scopeId}></path><path d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667" fill="#34A853"${_scopeId}></path><path d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782" fill="#FBBC05"${_scopeId}></path><path d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769" fill="#EB4335"${_scopeId}></path></g></g></svg></a></div></div></form></div><div class="p-2 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2"${_scopeId}><p class="mx-auto mb-2 text-sm leading-normal"${_scopeId}> Vous avez déjà un compte? `);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "relative z-10 font-semibold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`S&#39;inscrire`);
                } else {
                  return [
                    createTextVNode("S'inscrire")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("div", { class: "text-gray-800 dark:text-gray-100" }, [
                    createVNode("h1", null, "Connexion")
                  ]),
                  createVNode("div", null, [
                    createVNode("button", {
                      onClick: ($event) => unref(store).loginUser(),
                      class: "btn btn-sm btn-circle btn-outline"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M6 18L18 6M6 6l12 12"
                        })
                      ]))
                    ], 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "relative flex items-center p-0 overflow-hidden" }, [
                  createVNode("div", { class: "container z-10" }, [
                    createVNode("div", { class: "flex flex-wrap" }, [
                      createVNode("div", { class: "flex flex-col w-full max-w-full px-3 md:mx-auto md:flex-0 shrink-0" }, [
                        createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border" }, [
                          createVNode("div", { class: "p-2 pb-0 mb-0 bg-transparent border-b-0 md:p-6 rounded-t-2xl" }, [
                            createVNode("h3", { class: "relative z-10 font-bold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text" }, " Content de te revoir"),
                            createVNode("p", { class: "mb-0" }, "Entrez votre email et votre mot de passe pour vous connecter")
                          ]),
                          createVNode("div", { class: "flex-auto p-4 md:p-6" }, [
                            createVNode("form", {
                              role: "form",
                              onSubmit: withModifiers(submit, ["prevent"])
                            }, [
                              createVNode("div", null, [
                                createVNode(_sfc_main$5, {
                                  for: "email",
                                  value: "Email"
                                }),
                                createVNode(_sfc_main$6, {
                                  id: "email",
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  type: "email",
                                  class: "block w-full mt-1",
                                  required: "",
                                  autofocus: "",
                                  autocomplete: "username"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_sfc_main$7, {
                                  class: "mt-2",
                                  message: unref(form).errors.email
                                }, null, 8, ["message"])
                              ]),
                              createVNode("div", { class: "mt-4" }, [
                                createVNode(_sfc_main$5, {
                                  for: "password",
                                  value: "Password"
                                }),
                                createVNode(_sfc_main$6, {
                                  id: "password",
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  type: "password",
                                  class: "block w-full mt-1",
                                  required: "",
                                  autocomplete: "current-password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_sfc_main$7, {
                                  class: "mt-2",
                                  message: unref(form).errors.password
                                }, null, 8, ["message"])
                              ]),
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("div", { class: "block mt-4" }, [
                                  createVNode("label", { class: "flex items-center" }, [
                                    createVNode(_sfc_main$8, {
                                      checked: unref(form).remember,
                                      "onUpdate:checked": ($event) => unref(form).remember = $event,
                                      name: "remember"
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Se souvenir de moi")
                                  ])
                                ]),
                                createVNode(unref(Link), {
                                  href: _ctx.route("password.request"),
                                  class: "mt-4 text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-900 focus:outline-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Mot de passe oublié ? ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              createVNode("div", { class: "text-center" }, [
                                createVNode("button", {
                                  type: "submit",
                                  class: [{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-0 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft gradient hover:scale-102 hover:shadow-soft-xs active:opacity-85"],
                                  disabled: unref(form).processing
                                }, [
                                  createVNode("span", null, "Connexion")
                                ], 10, ["disabled"])
                              ]),
                              createVNode("div", { class: "relative w-full max-w-full px-3 mt-2 text-center shrink-0" }, [
                                createVNode("p", { class: "z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white rounded text-slate-400" }, " or ")
                              ]),
                              createVNode("div", { class: "flex flex-wrap px-3 mt-3 -mx-3 sm:px-6 xl:px-12" }, [
                                createVNode("div", { class: "w-4/12 max-w-full px-1 ml-auto flex-0" }, [
                                  createVNode("a", {
                                    class: "inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75",
                                    href: "auth/facebook"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      width: "24px",
                                      height: "32px",
                                      viewBox: "0 0 64 64",
                                      version: "1.1",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink": "http://www.w3.org/1999/xlink32"
                                    }, [
                                      createVNode("g", {
                                        stroke: "none",
                                        "stroke-width": "1",
                                        fill: "none",
                                        "fill-rule": "evenodd"
                                      }, [
                                        createVNode("g", {
                                          transform: "translate(3.000000, 3.000000)",
                                          "fill-rule": "nonzero"
                                        }, [
                                          createVNode("circle", {
                                            fill: "#3C5A9A",
                                            cx: "29.5091719",
                                            cy: "29.4927506",
                                            r: "29.4882047"
                                          }),
                                          createVNode("path", {
                                            d: "M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z",
                                            fill: "#FFFFFF"
                                          })
                                        ])
                                      ])
                                    ]))
                                  ])
                                ]),
                                createVNode("div", { class: "w-4/12 max-w-full px-1 mr-auto flex-0" }, [
                                  createVNode("a", {
                                    class: "inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75",
                                    href: "auth/google"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      width: "24px",
                                      height: "32px",
                                      viewBox: "0 0 64 64",
                                      version: "1.1",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink": "http://www.w3.org/1999/xlink"
                                    }, [
                                      createVNode("g", {
                                        stroke: "none",
                                        "stroke-width": "1",
                                        fill: "none",
                                        "fill-rule": "evenodd"
                                      }, [
                                        createVNode("g", {
                                          transform: "translate(3.000000, 2.000000)",
                                          "fill-rule": "nonzero"
                                        }, [
                                          createVNode("path", {
                                            d: "M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267",
                                            fill: "#4285F4"
                                          }),
                                          createVNode("path", {
                                            d: "M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667",
                                            fill: "#34A853"
                                          }),
                                          createVNode("path", {
                                            d: "M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782",
                                            fill: "#FBBC05"
                                          }),
                                          createVNode("path", {
                                            d: "M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769",
                                            fill: "#EB4335"
                                          })
                                        ])
                                      ])
                                    ]))
                                  ])
                                ])
                              ])
                            ], 40, ["onSubmit"])
                          ]),
                          createVNode("div", { class: "p-2 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2" }, [
                            createVNode("p", { class: "mx-auto mb-2 text-sm leading-normal" }, [
                              createTextVNode(" Vous avez déjà un compte? "),
                              createVNode(unref(Link), {
                                href: _ctx.route("register"),
                                class: "relative z-10 font-semibold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("S'inscrire")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Login.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar_vue_vue_type_style_index_0_scoped_f742e34f_lang = "";
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const isDark = useDark();
    useToggle(isDark);
    useStore();
    const categoriesStore = useCategoryStore();
    useSubcategoriesStore();
    const categories = computed(() => categoriesStore.categoriesGet.categories);
    const isSSR = ref(true);
    onMounted(() => {
      isSSR.value = false;
    });
    const open = ref(false);
    const navOpen = ref(false);
    ref(false);
    const isSticky = ref(false);
    const hoverOpen = ref(false);
    const isNotHome = computed(() => {
      return page.url === "/" ? false : true;
    });
    const expandedItems = ref([]);
    const toggleAccordion = (key) => {
      if (expandedItems.value.includes(key)) {
        expandedItems.value = expandedItems.value.filter((item) => item !== key);
        console.log(expandedItems.value);
      } else {
        expandedItems.value.push(key);
      }
    };
    function handleScroll() {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 1199) {
          if (window.scrollY > 145) {
            isSticky.value = true;
          } else {
            isSticky.value = false;
          }
        }
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-[100]" }, _attrs))} data-v-f742e34f><div class="${ssrRenderClass([[
        isSticky.value ? "stickyNav fadeInDown  dark:text-white fadeInDown dark:bg-gray-800" : "",
        _ctx.$page.url === "/" ? "" : "dark:bg-gray-800 bg-white"
      ], "flex header-wrap !z-[100] classicHeader animated"])}" data-v-f742e34f><div class="w-full px-4 lg:px-12" data-v-f742e34f><div class="grid items-center justify-between w-full grid-cols-12 lg:mx-auto" data-v-f742e34f><div class="hidden logo md:col-span-2 lg:block" data-v-f742e34f><a href="" data-v-f742e34f><img src="/images/logo/find_02.png" class="hidden w-20 lg:block" alt="FInd" title="Find" data-v-f742e34f></a></div><div class="col-span-3 lg:col-span-8" data-v-f742e34f><div class="block lg:hidden" data-v-f742e34f><button class="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" x-bind:aria-label="navOpen ? &#39;Close main menu&#39; : &#39;Main menu&#39;" x-bind:aria-expanded="navOpen" data-v-f742e34f><svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" data-v-f742e34f><path class="${ssrRenderClass([{ "hidden": navOpen.value, "inline-flex": !navOpen.value }, "inline-flex"])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-f742e34f></path><path class="${ssrRenderClass([{ "hidden": !navOpen.value, "inline-flex": navOpen.value }, "hidden"])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-f742e34f></path></svg></button></div><nav class="relative grid__item" id="AccessibleNav" data-v-f742e34f><ul id="siteNav" class="site-nav medium center hidearrow" data-v-f742e34f><li class="lvl1 parent megamenu" data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "boder-b-2 border-amber-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ "text-white ": !isSticky.value && !isNotHome.value, "lg:hidden dark:!text-white": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f${_scopeId}>Accueil</span><span class="${ssrRenderClass([{ "hidden dark:!text-white": !isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f${_scopeId}>Accueil</span>`);
          } else {
            return [
              createVNode("span", {
                class: ["dark:!text-white", { "text-white ": !isSticky.value && !isNotHome.value, "lg:hidden dark:!text-white": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }]
              }, "Accueil", 2),
              createVNode("span", {
                class: ["dark:!text-white", { "hidden dark:!text-white": !isNotHome.value }]
              }, "Accueil", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="lvl1 parent z-[60] megamenu" data-v-f742e34f><a href="" data-v-f742e34f><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f>Categories</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f>Categories</span></a><div class="megamenu z-50 dark:!bg-gray-800 !pb-12 style4 soft-scrollbar" data-v-f742e34f><div data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("categories"),
        class: "mb-2 font-bold dark:text-white Text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Toutes les categories`);
          } else {
            return [
              createTextVNode("Toutes les categories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="grid grid-cols-4 dark:!text-white rounded-md grid--uniform mmWrapper" data-v-f742e34f><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<li class="grid__item lvl-1 col-md-3 col-lg-3" data-v-f742e34f>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("categoryName", category.name),
          class: "site-nav dark:!text-white lvl-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<ul class="subLinks" data-v-f742e34f><!--[-->`);
        ssrRenderList(category.subcategories, (subcategory, index) => {
          _push(`<li class="lvl-2 dark:!text-white" data-v-f742e34f>`);
          if (index < 4) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("SubcategoryName", [category.name, subcategory.name]),
              class: "site-nav dark:!text-gray-50 lvl-2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(subcategory.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(subcategory.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></li>`);
      });
      _push(`<!--]--></ul></div></li><li class="lvl1 parent dropdown" data-v-f742e34f><a href="#" data-v-f742e34f><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:text-black lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f>Freelance</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f>Freelance</span></a><ul class="dropdown dark:!bg-gray-800" data-v-f742e34f><li data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register.begin")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Devenir Freelance`);
          } else {
            return [
              createTextVNode("Devenir Freelance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("find_freelance")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Trouver un freelance`);
          } else {
            return [
              createTextVNode("Trouver un freelance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="lvl1 parent dropdown" data-v-f742e34f><a href="#" data-v-f742e34f><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f>Mission</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f>Mission</span></a><ul class="dropdown" data-v-f742e34f><li data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("createProject"),
        class: "site-nav"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Soumettre une Mission`);
          } else {
            return [
              createTextVNode("Soumettre une Mission")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="lvl1 parent dropdown" data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("Allservices")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f${_scopeId}>Services</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f${_scopeId}>Services</span>`);
          } else {
            return [
              createVNode("span", {
                class: ["dark:!text-white", { "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }]
              }, "Services", 2),
              createVNode("span", {
                class: ["dark:!text-white", { "hidden": !isNotHome.value }]
              }, "Services", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="lvl1 parent dropdown" data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f${_scopeId}>A propos</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f${_scopeId}>A propos</span>`);
          } else {
            return [
              createVNode("span", {
                class: ["dark:!text-white", { "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }]
              }, "A propos", 2),
              createVNode("span", {
                class: ["dark:!text-white", { "hidden": !isNotHome.value }]
              }, "A propos", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="dropdown" data-v-f742e34f><li data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("feedBack")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Feed back`);
          } else {
            return [
              createTextVNode("Feed back")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("about")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A propos de nous`);
          } else {
            return [
              createTextVNode("A propos de nous")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("faq")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Faq`);
          } else {
            return [
              createTextVNode("Faq")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul></nav>`);
      if (hoverOpen.value) {
        _push(`<div class="absolute z-50 hidden w-full h-16 mx-auto right-4 top-16" data-v-f742e34f><div class="w-full h-24 max-w-5xl mx-auto mt-4 bg-red-300" data-v-f742e34f></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block col-span-6 mx-auto lg:col-span-2 lg:hidden mobile-logo" data-v-f742e34f><div class="logo" data-v-f742e34f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img style="${ssrRenderStyle(!isNotHome.value ? null : { display: "none" })}" class="flex w-20 dark:hidden" src="/images/logo/find_03.png" alt="logo-find" data-v-f742e34f${_scopeId}><img style="${ssrRenderStyle(isNotHome.value ? null : { display: "none" })}" src="/images/logo/find_02.png" alt="logo-find" class="w-24" data-v-f742e34f${_scopeId}><img style="${ssrRenderStyle(!isNotHome.value ? null : { display: "none" })}" class="hidden w-24 dark:flex" src="/images/logo/find_02.png" alt="logo-find" data-v-f742e34f${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("img", {
                class: "flex w-20 dark:hidden",
                src: "/images/logo/find_03.png",
                alt: "logo-find"
              }, null, 512), [
                [vShow, !isNotHome.value]
              ]),
              withDirectives(createVNode("img", {
                src: "/images/logo/find_02.png",
                alt: "logo-find",
                class: "w-24"
              }, null, 512), [
                [vShow, isNotHome.value]
              ]),
              withDirectives(createVNode("img", {
                class: "hidden w-24 dark:flex",
                src: "/images/logo/find_02.png",
                alt: "logo-find"
              }, null, 512), [
                [vShow, !isNotHome.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center justify-end col-span-3 gap-2 lg:col-span-2" data-v-f742e34f>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<div class="flex items-center gap-4" data-v-f742e34f>`);
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
        _push(`<div class="hidden site-cart" data-v-f742e34f><button type="button" class="search-trigger" data-v-f742e34f><svg style="${ssrRenderStyle(isNotHome.value ? null : { display: "none" })}" class="${ssrRenderClass([isSticky.value ? "dark:!text-white" : "!text-white dark:!text-white", "hidden w-5 h-5 lg:block"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f742e34f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-f742e34f></path></svg><svg style="${ssrRenderStyle(!isNotHome.value ? null : { display: "none" })}" class="hidden w-5 h-5 lg:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f742e34f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-f742e34f></path></svg><svg class="block w-5 h-5 text-gray-700 dark:text-white lg:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f742e34f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-f742e34f></path></svg></button></div><div class="hidden lg:block" data-v-f742e34f>`);
        _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.$page.props.auth.user) {
        _push(`<div class="flex items-center gap-6 ml-2" data-v-f742e34f><a href="#" class="relative items-center justify-center hidden w-full h-12 px-2 mx-auto text-base bg-transparent rounded-full lg:flex group hover:scale-105 active:duration-75 active:scale-95 sm:w-max" data-v-f742e34f><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-f742e34f>Connexion</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white text-gray-800"])}" data-v-f742e34f></span></a>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("register", ["code"]),
          class: "relative items-center justify-center hidden w-full h-12 px-8 mx-auto rounded-full lg:flex bg-skin-fill group dark:bg-skin-fill hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="relative text-base font-semibold text-white dark:text-white underline-none" data-v-f742e34f${_scopeId}>S&#39;inscrire</span>`);
            } else {
              return [
                createVNode("span", { class: "relative text-base font-semibold text-white dark:text-white underline-none" }, "S'inscrire")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("register", ["code"]),
          class: "relative flex items-center justify-center h-10 px-4 mx-auto text-sm duration-300 rounded-md lg:hidden bg-gray-50 before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="relative text-base font-semibold text-amber-600" data-v-f742e34f${_scopeId}>S&#39;inscrire</span>`);
            } else {
              return [
                createVNode("span", { class: "relative text-base font-semibold text-amber-600" }, "S'inscrire")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div style="${ssrRenderStyle([
        navOpen.value ? null : { display: "none" },
        { "backdrop-filter": "blur(14px)", "-webkit-backdrop-filter": "blur(14px)" }
      ])}" class="fixed inset-0 z-[400] bg-black bg-opacity-20 lg:hidden" data-v-f742e34f></div>`);
      if (navOpen.value) {
        _push(`<div style="${ssrRenderStyle({ "backdrop-filter": "blur(14px)", "-webkit-backdrop-filter": "blur(14px)" })}" class="fixed inset-0 bottom-0 left-0 z-[500] w-10/12 overflow-auto origin-left transform shadow-lg bg-gray-50 dark:bg-gray-800 custom-scrollbar lg:hidden" data-v-f742e34f><div class="sticky top-0 z-20 flex justify-between h-24 p-2 bg-white border-b border-gray-700 dark:bg-gray-800 dark:border-gray-300" data-v-f742e34f><div class="flex p-3 mx-1" data-v-f742e34f>`);
        if (_ctx.$page.props.auth.user) {
          _push(`<div class="flex w-full text-left" data-v-f742e34f><div class="flex-shrink-0" data-v-f742e34f>`);
          if (_ctx.$page.props.auth.user.profile_photo_path != null) {
            _push(`<img class="w-12 h-12 rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)} alt="" data-v-f742e34f>`);
          } else {
            _push(`<img class="w-16 h-16 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)} alt="" data-v-f742e34f>`);
          }
          _push(`</div><div class="px-4 py-3" data-v-f742e34f><span class="block text-base text-gray-800 truncate dark:text-white" data-v-f742e34f>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span></div></div>`);
        } else {
          _push(`<div data-v-f742e34f><a href="#" class="relative flex items-center justify-center w-full h-12 px-8 mx-auto duration-300 rounded-full dark:border dark:border-white bg-skin-fill before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max" data-v-f742e34f><span class="relative text-base font-semibold text-white" data-v-f742e34f>Connexion</span></a></div>`);
        }
        _push(`</div><div class="text-left" data-v-f742e34f><button class="btn btn-sm btn-circle btn-outline" data-v-f742e34f><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f742e34f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-f742e34f></path></svg></button></div></div><div class="p-4 overflow-auto custom-scrollbar" data-v-f742e34f><div class="flex flex-col" data-v-f742e34f><div class="flex-1 border-gray-800 dark:border-white custom-scrollbar" data-v-f742e34f><div class="pt-4 pb-3" data-v-f742e34f>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("home"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f742e34f${_scopeId}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-v-f742e34f${_scopeId}></path><polyline points="9 22 9 12 15 12 15 22" data-v-f742e34f${_scopeId}></polyline></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Accueil</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "w-6 h-6",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
                  createVNode("polyline", { points: "9 22 9 12 15 12 15 22" })
                ])),
                createVNode("span", { class: "ml-2" }, "Accueil")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("register.begin"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-white hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-f742e34f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" data-v-f742e34f${_scopeId}></path></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Devenir Prestataire</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Devenir Prestataire")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="relative" data-v-f742e34f><button type="button" class="flex flex-row items-center w-full px-3 py-2 mt-1 text-lg font-medium text-left text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white focus:bg-amber-600" data-v-f742e34f><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-f742e34f><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" data-v-f742e34f></path></svg><span class="ml-2" data-v-f742e34f>Categories</span><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([{ "rotate-180": open.value, "rotate-0": !open.value }, "w-5 h-5 px-1 mt-1 transform"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f742e34f><polyline points="6 9 12 15 18 9" data-v-f742e34f></polyline></svg></button>`);
        _push(ssrRenderComponent(unref(Collapse), {
          when: open.value,
          class: "flex flex-col px-2 py-2 rounded-md shadow-xs bg-inherit"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(categories.value, (category) => {
                _push2(`<div data-v-f742e34f${_scopeId}><button class="flex items-center justify-between w-full px-3 py-2 mt-1 text-lg font-medium text-left text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white focus:bg-amber-600" data-v-f742e34f${_scopeId}><span class="ml-3" data-v-f742e34f${_scopeId}>${ssrInterpolate(category.name)}</span><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([{ "rotate-180": open.value, "rotate-0": !open.value }, "w-6 h-6 px-1 mt-1 transform"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f742e34f${_scopeId}><polyline points="6 9 12 15 18 9" data-v-f742e34f${_scopeId}></polyline></svg></button>`);
                _push2(ssrRenderComponent(unref(Collapse), {
                  when: expandedItems.value.includes(category.id),
                  class: "flex flex-col px-6 py-2 mt-2 rounded-md shadow-xs bg-inherit",
                  "aria-orientation": "vertical",
                  "aria-labelledby": "user-menu",
                  role: "menuitem"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("categoryName", category.name),
                        onClick: ($event) => navOpen.value = false,
                        class: "flex flex-row items-center px-8 py-2 text-base font-medium text-gray-800 rounded-md mxr-4 dark:text-white hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200",
                        role: "menuitem"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Tout sur ${ssrInterpolate(category.name)}`);
                          } else {
                            return [
                              createTextVNode(" Tout sur " + toDisplayString(category.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<!--[-->`);
                      ssrRenderList(category.subcategories, (subcategory) => {
                        _push3(`<div class="px-8" data-v-f742e34f${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(Link), {
                          href: _ctx.route("SubcategoryName", [category.name, subcategory.name]),
                          class: "flex flex-row items-center px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200",
                          to: { name: "sub.name", params: { name: category.name, sub: subcategory.name } }
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(subcategory.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(subcategory.name), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        createVNode(unref(Link), {
                          href: _ctx.route("categoryName", category.name),
                          onClick: ($event) => navOpen.value = false,
                          class: "flex flex-row items-center px-8 py-2 text-base font-medium text-gray-800 rounded-md mxr-4 dark:text-white hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200",
                          role: "menuitem"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tout sur " + toDisplayString(category.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "onClick"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(category.subcategories, (subcategory) => {
                          return openBlock(), createBlock("div", {
                            class: "px-8",
                            onClick: ($event) => navOpen.value = false
                          }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("SubcategoryName", [category.name, subcategory.name]),
                              class: "flex flex-row items-center px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200",
                              to: { name: "sub.name", params: { name: category.name, sub: subcategory.name } }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(subcategory.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href", "to"])
                          ], 8, ["onClick"]);
                        }), 256))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                  return openBlock(), createBlock("div", {
                    key: category.id
                  }, [
                    createVNode("button", {
                      onClick: ($event) => toggleAccordion(category.id),
                      class: "flex items-center justify-between w-full px-3 py-2 mt-1 text-lg font-medium text-left text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white focus:bg-amber-600"
                    }, [
                      createVNode("span", { class: "ml-3" }, toDisplayString(category.name), 1),
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: [{ "rotate-180": open.value, "rotate-0": !open.value }, "w-6 h-6 px-1 mt-1 transform"],
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createVNode("polyline", { points: "6 9 12 15 18 9" })
                      ], 2))
                    ], 8, ["onClick"]),
                    createVNode(unref(Collapse), {
                      when: expandedItems.value.includes(category.id),
                      class: "flex flex-col px-6 py-2 mt-2 rounded-md shadow-xs bg-inherit",
                      "aria-orientation": "vertical",
                      "aria-labelledby": "user-menu",
                      role: "menuitem"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("categoryName", category.name),
                          onClick: ($event) => navOpen.value = false,
                          class: "flex flex-row items-center px-8 py-2 text-base font-medium text-gray-800 rounded-md mxr-4 dark:text-white hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200",
                          role: "menuitem"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tout sur " + toDisplayString(category.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "onClick"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(category.subcategories, (subcategory) => {
                          return openBlock(), createBlock("div", {
                            class: "px-8",
                            onClick: ($event) => navOpen.value = false
                          }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("SubcategoryName", [category.name, subcategory.name]),
                              class: "flex flex-row items-center px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200",
                              to: { name: "sub.name", params: { name: category.name, sub: subcategory.name } }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(subcategory.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href", "to"])
                          ], 8, ["onClick"]);
                        }), 256))
                      ]),
                      _: 2
                    }, 1032, ["when"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("Allservices"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-f742e34f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" data-v-f742e34f${_scopeId}></path></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Services</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Services")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("find_freelance"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-f742e34f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" data-v-f742e34f${_scopeId}></path></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Trouver un Freelance</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Trouver un Freelance")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("createProject"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-f742e34f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" data-v-f742e34f${_scopeId}></path></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Soumettre une mission</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Soumettre une mission")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("about"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-f742e34f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" data-v-f742e34f${_scopeId}></path></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Apropos</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Apropos")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("faq"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-f742e34f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" data-v-f742e34f${_scopeId}></path></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Foire aux Questions</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Foire aux Questions")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white" aria-label="Toggle color mode" data-v-f742e34f>`);
        if (!unref(isDark)) {
          _push(`<svg class="w-5 h-5 text-gray-800" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-f742e34f><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" data-v-f742e34f></path></svg>`);
        } else {
          _push(`<svg class="w-5 h-5 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-f742e34f><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" data-v-f742e34f></path></svg>`);
        }
        if (!unref(isDark)) {
          _push(`<span class="ml-2 text-gray-800" data-v-f742e34f>Sombre</span>`);
        } else {
          _push(`<span class="ml-2 text-gray-200" data-v-f742e34f>Clair</span>`);
        }
        _push(`</button></div></div>`);
        if (_ctx.$page.props.auth.user) {
          _push(`<div class="container mt-4 border-t border-gray-800 dark:border-gray-50" data-v-f742e34f><div class="pt-2 pb-3" data-v-f742e34f>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("user.dashboard"),
            onClick: ($event) => navOpen.value = false,
            class: "flex flex-row items-center px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-gray-100 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200",
            role: "menuitem"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" data-v-f742e34f${_scopeId}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" data-v-f742e34f${_scopeId}></path></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Dashboard</span>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "w-5 h-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                  ])),
                  createVNode("span", { class: "ml-2" }, "Dashboard")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("profile.show"),
            onClick: ($event) => navOpen.value = false,
            class: "flex flex-row items-center px-2 py-2 text-base font-medium text-gray-800 rounded-md dark:text-gray-100 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:text-gray-900 focus:bg-gray-200",
            role: "menuitem"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f742e34f${_scopeId}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-f742e34f${_scopeId}></path><circle cx="12" cy="7" r="4" data-v-f742e34f${_scopeId}></circle></svg><span class="ml-2" data-v-f742e34f${_scopeId}>profile</span>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "w-6 h-6",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    createVNode("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                    createVNode("circle", {
                      cx: "12",
                      cy: "7",
                      r: "4"
                    })
                  ])),
                  createVNode("span", { class: "ml-2" }, "profile")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("user.chat"),
            onClick: ($event) => navOpen.value = false,
            class: "flex flex-row items-center px-2 py-2 font-medium text-gray-800 dark:text-gray-200 text-md focus:text-gray-900 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-600",
            role: "menuitem"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-f742e34f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" data-v-f742e34f${_scopeId}></path></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Conversation </span>`);
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
                      d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    })
                  ])),
                  createVNode("span", { class: "ml-2" }, "Conversation ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (_ctx.$page.props.auth.freelance) {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("freelance.dashboard"),
              onClick: ($event) => navOpen.value = false,
              class: "flex flex-row items-center px-2 py-2 font-medium text-gray-800 dark:text-gray-200 text-md focus:text-gray-900 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-600",
              role: "menuitem"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f742e34f${_scopeId}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-f742e34f${_scopeId}></path><circle cx="12" cy="7" r="4" data-v-f742e34f${_scopeId}></circle></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Dashboard freelance</span>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-6 h-6",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                      createVNode("circle", {
                        cx: "12",
                        cy: "7",
                        r: "4"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, "Dashboard freelance")
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`<a href="/freelance-gestion" class="flex flex-row items-center px-2 py-2 font-medium text-gray-800 dark:text-gray-200 text-md focus:text-gray-900 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-600" role="menuitem" data-v-f742e34f><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f742e34f><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-f742e34f></path><circle cx="12" cy="7" r="4" data-v-f742e34f></circle></svg><span class="ml-2" data-v-f742e34f>Dashboard freelance Pro</span></a>`);
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("freelance.chat"),
              onClick: ($event) => navOpen.value = false,
              class: "flex flex-row items-center px-2 py-2 font-medium text-gray-800 dark:text-gray-200 text-md focus:text-gray-900 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-600",
              role: "menuitem"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f742e34f${_scopeId}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-f742e34f${_scopeId}></path><circle cx="12" cy="7" r="4" data-v-f742e34f${_scopeId}></circle></svg><span class="ml-2" data-v-f742e34f${_scopeId}>Conversation freelance</span>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-6 h-6",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                      createVNode("circle", {
                        cx: "12",
                        cy: "7",
                        r: "4"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, "Conversation freelance")
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<form data-v-f742e34f><button type="submit" class="flex flex-row items-center px-4 py-2 text-red-500 text-md hover:text-red-700 hover:bg-red-100 focus:outline-none focus:text-red-700 focus:bg-red-100" data-v-f742e34f><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f742e34f><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-v-f742e34f></path><polyline points="16 17 21 12 16 7" data-v-f742e34f></polyline><line x1="21" y1="12" x2="9" y2="12" data-v-f742e34f></line></svg> Deconnexion </button></form></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f742e34f"]]);
const Footer_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const categoriesStore = useCategoryStore();
    useSubcategoriesStore();
    const categories = computed(() => categoriesStore.categoriesGet.categories);
    const isOpen = ref(false);
    const isOpen2 = ref(false);
    const isOpen3 = ref(false);
    const isOpen4 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full bg-gray-900 lg:bg-base-200"><div class="text-white bg-gray-900 border-t border-gray-800 md:hidden"><div class="container flex flex-col p-4 mx-auto overflow-hidden lg:flex-row"><div class="w-full p-2 mx-auto"><div class="relative mb-3"><h6 class="mb-0"><button class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500" data-collapse-target="animated-collapse-1"><span>Categories</span><i class="${ssrRenderClass([isOpen.value ? "rotate-180 transition-transform" : "", "absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down"])}"></i></button></h6>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: isOpen.value,
        class: "px-6 overflow-hidden collapse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="flex flex-col w-full px-4 space-y-2 text-left list-none list-inside text-gray-50"${_scopeId}><!--[-->`);
            ssrRenderList(categories.value, (category) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("categoryName", category.name),
                class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-200"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(category.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(category.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", { class: "flex flex-col w-full px-4 space-y-2 text-left list-none list-inside text-gray-50" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                  return openBlock(), createBlock("li", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("categoryName", category.name),
                      class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-200"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(category.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative mb-3"><h6 class="mb-0"><button class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500" data-collapse-target="animated-collapse-1"><span>A propos</span><i class="${ssrRenderClass([isOpen2.value ? "rotate-180 transition-transform" : "", "absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down"])}"></i></button></h6>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: isOpen2.value,
        class: "px-6 overflow-hidden collapse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="flex flex-col w-full px-4 text-left list-none text-gray-50"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("terms.show"),
              class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Privacy Policy`);
                } else {
                  return [
                    createTextVNode("Privacy Policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/contact",
              class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact`);
                } else {
                  return [
                    createTextVNode("Contact")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("terms.show"),
              class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Terms of Service`);
                } else {
                  return [
                    createTextVNode("Terms of Service")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "flex flex-col w-full px-4 text-left list-none text-gray-50" }, [
                createVNode("li", null, [
                  createVNode(unref(Link), {
                    href: _ctx.route("terms.show"),
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Privacy Policy")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("li", null, [
                  createVNode(unref(Link), {
                    href: "/contact",
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Contact")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("li", null, [
                  createVNode(unref(Link), {
                    href: _ctx.route("terms.show"),
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Terms of Service")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative hidden mb-3"><h6 class="mb-0"><button class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500" data-collapse-target="animated-collapse-1"><span>Freelance</span><i class="${ssrRenderClass([isOpen3.value ? "rotate-180 transition-transform" : "", "absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down"])}"></i></button></h6>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: isOpen3.value,
        class: "px-6 overflow-hidden collapse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="flex flex-col w-full px-4 font-thin text-left list-none text-gray-50"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/find-freelance",
              class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Trouver un Freelance`);
                } else {
                  return [
                    createTextVNode("Trouver un Freelance")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("createProject"),
              class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Mission`);
                } else {
                  return [
                    createTextVNode(" Mission")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "flex flex-col w-full px-4 font-thin text-left list-none text-gray-50" }, [
                createVNode("li", null, [
                  createVNode(unref(Link), {
                    href: "/find-freelance",
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Trouver un Freelance")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("li", null, [
                  createVNode(unref(Link), {
                    href: _ctx.route("createProject"),
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Mission")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative mb-3"><h6 class="mb-0"><button class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500" data-collapse-target="animated-collapse-1"><span>Freelance</span><i class="${ssrRenderClass([isOpen4.value ? "rotate-180 transition-transform" : "", "absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down"])}"></i></button></h6>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: isOpen4.value,
        class: "px-6 overflow-hidden collapse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="flex flex-col w-full p-0 px-4 font-thin text-left list-none text-gray-50"${_scopeId}><li${_scopeId}><a href="" class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"${_scopeId}>Freelance</a></li><li${_scopeId}><a href="" class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"${_scopeId}> Mission</a></li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "flex flex-col w-full p-0 px-4 font-thin text-left list-none text-gray-50" }, [
                createVNode("li", null, [
                  createVNode("a", {
                    href: "",
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, "Freelance")
                ]),
                createVNode("li", null, [
                  createVNode("a", {
                    href: "",
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, " Mission")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex flex-col items-center justify-center p-6 mt-4 text-gray-600 md:flex-row"><div class="flex flex-col flex-wrap gap-6 mt-6 border-t border-gray-600 sm:mt-0 sm:flex-row sm:items-center"><div class="flex gap-6 p-2"><a href="#" target="blank" class="px-2 hover:text-primary"><span class="text-lg fab fa-dribbble"></span></a><a href="https://twitter.com/find_freelance_?s=11&amp;t=qv6NIovEcQsLxmQv9mo_Zw" target="blank" aria-label="twitter" class="px-2 hover:text-primary"><span class="text-lg fab fa-twitter"></span></a><a href="https://instagram.com/find_freelance?igshid=YmMyMTA2M2Y=" target="blank" aria-label="medium" class="px-2 hover:text-primary"><span class="text-lg fab fa-instagram"></span></a><a href="#" target="blank" aria-label="twitter" class="px-2 hover:text-primary"><span class="text-lg fab fa-pinterest"></span></a><a href="https://www.facebook.com/profile.php?id=100087893680900&amp;mibextid=LQQJ4d" target="blank" aria-label="medium" class="px-2 hover:text-primary"><span class="text-lg fab fa-facebook"></span></a></div><div class="flex gap-6 mx-auto"><a href="" class="px-3 py-2 hover:text-primary"><span class="text-sm fab fa-dollar">USD</span></a></div></div><div class="flex items-center justify-between mt-2 border-t border-gray-800"><img src="/images/logo/find_02.png" alt="logo find" class="h-8"><div class="flex flex-col items-center justify-center p-3 mt-2 text-gray-600 md:flex-row">Copyright © 2023 </div></div></div></div><div class="hidden md:flex"><div class="p-10 footer bg-base-200 text-base-content"><div><img src="/images/logo/find_02.png" alt="logo find" class="h-8"><p>FIND Ltd.<br>Providing reliable tech since 2020</p></div><div><span class="footer-title">Categories</span><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("categoryName", category.name),
          class: "inline-block py-2 pl-3 pr-5 hover:text-gray-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></div></div><div><span class="footer-title">Company</span>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("about"),
        class: "link link-hover hover:text-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Apropos de nous `);
          } else {
            return [
              createTextVNode("Apropos de nous ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact"),
        class: "link link-hover hover:text-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("faq"),
        class: "link link-hover hover:text-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FaQ`);
          } else {
            return [
              createTextVNode("FaQ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><span class="footer-title">Legal</span>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("terms.show"),
        class: "link link-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Conditions d&#39;utilisation`);
          } else {
            return [
              createTextVNode("Conditions d'utilisation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("policy.show"),
        class: "link link-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Politique de confidentialité`);
          } else {
            return [
              createTextVNode("Politique de confidentialité")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "WebLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const categoriesStore = useCategoryStore();
    const subcategoriesStore = useSubcategoriesStore();
    const page = usePage();
    const titlePage = computed(() => {
      const urlPath = page.url.split("/");
      if (urlPath.length <= 1 || urlPath[1] === "") {
        return "Acceuil";
      } else {
        return urlPath[1];
      }
    });
    onMounted(() => {
      subcategoriesStore.fetchSubCategories();
      categoriesStore.fetchCategories();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-800" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Head), { title: titlePage.value }, null, _parent));
      _push(`<div class="pageWrapper">`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="min-h-screen">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/WebLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};

import { ref, computed, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-479a9465.js";
import "primevue/galleria/galleria.esm.js";
import "primevue/image/image.esm.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y } from "swiper/modules";
/* empty css                   */import TabView from "primevue/tabview/tabview.esm.js";
import TabPanel from "primevue/tabpanel/tabpanel.esm.js";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import { d as cartStore } from "./userInfo-683bc3e6.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "vue-collapsed";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
const OneService_vue_vue_type_style_index_0_scoped_74a6b005_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "OneService",
  __ssrInlineRender: true,
  props: {
    service: Object,
    otherService: Array
  },
  setup(__props) {
    const props = __props;
    useToast();
    cartStore();
    const like = ref(props.service.data.likeUser);
    const level = ref("basic");
    const service = computed(() => props.service.data);
    const price = ref(props.service.data.basic_price);
    const images = ref([]);
    for (let i = 0; i < props.service.data.files.length; i++) {
      images.value.push({
        itemImageSrc: "/storage/" + props.service.data.files[i],
        thumbnailImageSrc: "/storage/" + props.service.data.files[i],
        alt: `Description for Image ${i + 1}`,
        title: `Title ${i + 1}`
      });
    }
    ref([
      {
        breakpoint: "991px",
        numVisible: 4
      },
      {
        breakpoint: "767px",
        numVisible: 3
      },
      {
        breakpoint: "575px",
        numVisible: 1
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_Toast = resolveComponent("Toast");
      const _component_Photo = resolveComponent("Photo");
      const _component_ServiceCard = resolveComponent("ServiceCard");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-2 pt-16 bg-gray-100 md:px-6 dark:bg-gray-900" }, _attrs))} data-v-74a6b005><div class="hidden px-2" data-v-74a6b005> All/Service </div><div class="px-4 mt-4" data-v-74a6b005><nav class="flex" aria-label="Breadcrumb" data-v-74a6b005><ol class="inline-flex items-center space-x-1 md:space-x-3" data-v-74a6b005><li class="inline-flex items-center" data-v-74a6b005><a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white" data-v-74a6b005><svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-74a6b005><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" data-v-74a6b005></path></svg> Back </a></li><li aria-current="page" data-v-74a6b005>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("categories"),
        class: "hidden items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" data-v-74a6b005${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" data-v-74a6b005${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" data-v-74a6b005${_scopeId}>Services</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3 mx-1 text-gray-400",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 6 10"
              }, [
                createVNode("path", {
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "m1 9 4-4-4-4"
                })
              ])),
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page" data-v-74a6b005><div class="flex items-center" data-v-74a6b005><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" data-v-74a6b005><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" data-v-74a6b005></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" data-v-74a6b005>${ssrInterpolate(service.value.service_numero)}</span></div></li></ol></nav></div>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`<div class="container relative px-4 py-4 mx-auto" data-v-74a6b005><div class="relative flex flex-col gap-4 lg:flex-row lg:space-x-4" data-v-74a6b005><div id="card" class="relative flex-col mx-2 mb-6 lg:flex lg:order-2 lg:mb-0 lg:w-1/3" data-v-74a6b005><div class="flex lg:sticky lg:top-[8rem] flex-col gap-2 p-4 card-sticky" data-v-74a6b005><div class="p-2 bg-white rounded-md shadow-lg lg:sticky dark:bg-gray-800" data-v-74a6b005><div class="mt-2 sm:col-span-8 lg:col-span-7" data-v-74a6b005><h2 class="flex text-lg font-bold text-gray-800 truncate lg:hidden dark:text-gray-300 sm:pr-12" data-v-74a6b005>${ssrInterpolate(service.value.title)}</h2><section aria-labelledby="information-heading" class="mt-1" data-v-74a6b005><h3 id="information-heading" class="sr-only" data-v-74a6b005>Product information</h3><div class="flex justify-between my-3" data-v-74a6b005><h4 class="sr-only" data-v-74a6b005>Reviews</h4><div class="flex items-center" data-v-74a6b005><div class="flex items-center" data-v-74a6b005><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-74a6b005><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" data-v-74a6b005></path></svg><span class="text-sm font-semibold text-gray-700 dark:text-gray-100" data-v-74a6b005>(2) </span></div><p class="sr-only" data-v-74a6b005>3 out of 5 stars</p><a href="#" class="ml-3 text-sm font-medium text-amber-600 hover:text-indigo-500" data-v-74a6b005>${ssrInterpolate(service.value.orderCount)} reviews</a></div><div class="flex justify-between mt-3" data-v-74a6b005><div class="flex items-center" data-v-74a6b005><button class="flex gap-1 mr-2" data-v-74a6b005><span style="${ssrRenderStyle(!like.value ? null : { display: "none" })}" class="" data-v-74a6b005><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-74a6b005><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-74a6b005></path></svg></span><span style="${ssrRenderStyle(like.value ? null : { display: "none" })}" data-v-74a6b005><svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" data-v-74a6b005><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-74a6b005></path></svg></span></button></div><div data-v-74a6b005></div></div></div>`);
      if (service.value.premium_price && service.value.extra_price) {
        _push(`<div class="mt-4 mb-3" data-v-74a6b005><ul class="flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" data-v-74a6b005><li class="${ssrRenderClass([level.value === "Basic" ? "border-b-4 border-amber-600" : "", "w-full sm:border-r dark:border-gray-600"])}" data-v-74a6b005><button class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none" data-v-74a6b005> Basic </button></li><li class="${ssrRenderClass([level.value === "Premium" ? "border-b-4 border-amber-600" : "", "w-full sm:border-r dark:border-gray-600"])}" data-v-74a6b005><button class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none" data-v-74a6b005> Premium </button></li><li class="${ssrRenderClass([level.value === "Extra" ? "border-b-4 border-amber-600" : "", "w-full dark:border-gray-600"])}" data-v-74a6b005><button class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none" data-v-74a6b005> Extra </button></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-between gap-2 px-4" data-v-74a6b005><p class="py-2 text-lg text-gray-800" data-v-74a6b005>${ssrInterpolate(level.value)}</p><p class="text-lg font-bold text-amber-600" data-v-74a6b005>${ssrInterpolate(price.value)} $</p></div><div data-v-74a6b005><div id="" class="mt-4" data-v-74a6b005><div class="px-4" data-v-74a6b005><ul class="flex gap-4" data-v-74a6b005></ul></div></div></div></section><section aria-labelledby="options-heading" class="px-4 mt-1" data-v-74a6b005><h3 id="options-heading" class="sr-only" data-v-74a6b005>Service options</h3><div data-v-74a6b005><div class="flex justify-between mt-4" data-v-74a6b005><p class="flex gap-2 font-medium text-gray-700 dark:text-gray-100" data-v-74a6b005><span data-v-74a6b005><i class="pi pi-clock" data-v-74a6b005></i></span>`);
      if (level.value === "basic") {
        _push(`<span data-v-74a6b005>${ssrInterpolate(service.value.basic_delivery_time)}</span>`);
      } else if (level.value === "Premium") {
        _push(`<span data-v-74a6b005>${ssrInterpolate(service.value.premium_delivery_time)}</span>`);
      } else {
        _push(`<span data-v-74a6b005>${ssrInterpolate(service.value.extra_delivery_time)}</span>`);
      }
      _push(` Jours Delai </p><p class="flex gap-2 font-medium text-gray-700 dark:text-gray-100" data-v-74a6b005><span data-v-74a6b005><i class="pi pi-replay" data-v-74a6b005></i></span>`);
      if (level.value === "basic") {
        _push(`<span data-v-74a6b005>${ssrInterpolate(service.value.basic_revision)}</span>`);
      } else if (level.value === "Premium") {
        _push(`<span data-v-74a6b005>${ssrInterpolate(service.value.premium_revision)}</span>`);
      } else {
        _push(`<span data-v-74a6b005>${ssrInterpolate(service.value.extra_revision)}</span>`);
      }
      _push(` Revisions </p></div><div class="flex" data-v-74a6b005><button type="button" id="" class="flex items-center justify-center w-full gap-1 px-8 py-3 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" data-v-74a6b005><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-74a6b005><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" data-v-74a6b005></path></svg><span data-v-74a6b005>Ajouter au Panier</span></button></div></div></section></div><div class="grid w-full gap-2 p-6 bg-white rounded-lg dark:bg-gray-800" data-v-74a6b005><button data-v-74a6b005>Contacter</button></div></div></div></div><div class="w-full px-4 bg-gray-50 dark:bg-gray-800 md:w-2/3" data-v-74a6b005><div class="p-4 dark:bg-gray-800" data-v-74a6b005><div class="flex flex-col mb-4" data-v-74a6b005><div data-v-74a6b005><p class="mb-4 text-lg font-bold text-gray-700 md:text-xl dark:text-gray-200" data-v-74a6b005>${ssrInterpolate(service.value.title)}</p></div><div class="flex gap-4 mt-2" data-v-74a6b005><div class="flex flex-col gap-3 my-auto" data-v-74a6b005><a class="hidden text-base font-medium text-gray-500" data-v-74a6b005>${ssrInterpolate(service.value.freelance.nom)}</a><div class="flex flex-row gap-2" data-v-74a6b005><span class="hidden text-base font-medium" data-v-74a6b005>Niveau ${ssrInterpolate(service.value.freelance.level)}</span>`);
      if (service.value.commandeEncours != 0) {
        _push(`<span class="text-base font-medium" data-v-74a6b005><span class="text-green-600" data-v-74a6b005>${ssrInterpolate(service.value.commandeEncours)}</span> commande en cours </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mt-4" data-v-74a6b005><div class="w-10/12 rounded-lg" data-v-74a6b005>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
        effect: "fade",
        "slides-per-view": 1,
        navigation: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.service.data.files, (image, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="object-fill rounded-md h-10/12 swiper-lazy"${ssrRenderAttr("src", "/storage/" + image)}${ssrRenderAttr("alt", image)} data-v-74a6b005${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "object-fill rounded-md h-10/12 swiper-lazy",
                        src: "/storage/" + image,
                        alt: image
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.service.data.files, (image, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "object-fill rounded-md h-10/12 swiper-lazy",
                      src: "/storage/" + image,
                      alt: image
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden" data-v-74a6b005><p class="mt-4 text-lg font-bold text-gray-800 md:text-2xl dark:text-gray-200" data-v-74a6b005>${ssrInterpolate(service.value.title)}</p></div><div class="mt-8 card" data-v-74a6b005>`);
      _push(ssrRenderComponent(unref(TabView), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabPanel), { header: "INFO" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-5 min-h-64" data-v-74a6b005${_scopeId2}><div class="mb-4 prose text-gray-800 md:text-base dark:text-gray-200" data-v-74a6b005${_scopeId2}><div data-v-74a6b005${_scopeId2}>${service.value.description}</div></div><div class="grid grid-cols-2 gap-4 mb-4" data-v-74a6b005${_scopeId2}><div data-v-74a6b005${_scopeId2}><p class="font-bold text-gray-500 dark:text-gray-200" data-v-74a6b005${_scopeId2}>Support :</p><div id="support" class="text-gray-800" data-v-74a6b005${_scopeId2}><div class="px-2 mt-2" data-v-74a6b005${_scopeId2}><ul class="px-4 list-disc dark:text-gray-50" data-v-74a6b005${_scopeId2}><!--[-->`);
                  ssrRenderList(service.value.basic_support, (value, index) => {
                    _push3(`<li data-v-74a6b005${_scopeId2}>${ssrInterpolate(value)}</li>`);
                  });
                  _push3(`<!--]--></ul></div></div></div></div><div class="grid hidden grid-cols-2 gap-4 mb-4" data-v-74a6b005${_scopeId2}><div data-v-74a6b005${_scopeId2}><p class="font-bold text-gray-500 dark:text-gray-200" data-v-74a6b005${_scopeId2}>Prix :</p><p class="px-2 mt-2 text-gray-700 dark:text-gray-300" data-v-74a6b005${_scopeId2}>à partir de <span class="text-lg text-green-700" data-v-74a6b005${_scopeId2}>${ssrInterpolate(service.value.price)}</span></p></div><div data-v-74a6b005${_scopeId2}><p class="font-bold text-gray-500 dark:text-gray-200" data-v-74a6b005${_scopeId2}>Délai :</p><p class="text-gray-700 dark:text-gray-300" data-v-74a6b005${_scopeId2}>${ssrInterpolate(service.value.basic_delivery_time)} jours </p></div></div><div class="grid grid-cols-2 gap-4 mb-4" data-v-74a6b005${_scopeId2}></div><div class="grid grid-cols-2 gap-4 mb-6" data-v-74a6b005${_scopeId2}><div data-v-74a6b005${_scopeId2}><p class="font-bold text-gray-500 dark:text-gray-200" data-v-74a6b005${_scopeId2}>Besoin pour ce service :</p><div class="prose" data-v-74a6b005${_scopeId2}>${service.value.need_service}</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-5 min-h-64" }, [
                      createVNode("div", { class: "mb-4 prose text-gray-800 md:text-base dark:text-gray-200" }, [
                        createVNode("div", {
                          innerHTML: service.value.description
                        }, null, 8, ["innerHTML"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Support :"),
                          createVNode("div", {
                            id: "support",
                            class: "text-gray-800"
                          }, [
                            createVNode("div", { class: "px-2 mt-2" }, [
                              createVNode("ul", { class: "px-4 list-disc dark:text-gray-50" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(service.value.basic_support, (value, index) => {
                                  return openBlock(), createBlock("li", null, toDisplayString(value), 1);
                                }), 256))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid hidden grid-cols-2 gap-4 mb-4" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Prix :"),
                          createVNode("p", { class: "px-2 mt-2 text-gray-700 dark:text-gray-300" }, [
                            createTextVNode("à partir de "),
                            createVNode("span", { class: "text-lg text-green-700" }, toDisplayString(service.value.price), 1)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Délai :"),
                          createVNode("p", { class: "text-gray-700 dark:text-gray-300" }, toDisplayString(service.value.basic_delivery_time) + " jours ", 1)
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }),
                      createVNode("div", { class: "grid grid-cols-2 gap-4 mb-6" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Besoin pour ce service :"),
                          createVNode("div", {
                            class: "prose",
                            innerHTML: service.value.need_service
                          }, null, 8, ["innerHTML"])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TabPanel), { header: "Example" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (service.value.example != null) {
                    _push3(`<div class="grid grid-cols-1 gap-4" data-v-74a6b005${_scopeId2}><div class="p-4 bg-white rounded-md shadow dark:bg-gray-800" data-v-74a6b005${_scopeId2}><div class="flex flex-row gap-2 p-4 mb-4" data-v-74a6b005${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Swiper), {
                      modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                      effect: "fade",
                      "slides-per-view": 1,
                      navigation: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(service.value.example.image, (image, index) => {
                            _push4(ssrRenderComponent(unref(SwiperSlide), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img class="object-fill rounded-md h-10/12 swiper-lazy"${ssrRenderAttr("src", "/storage/" + image)} alt="bro" data-v-74a6b005${_scopeId4}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      class: "object-fill rounded-md h-10/12 swiper-lazy",
                                      src: "/storage/" + image,
                                      alt: "bro"
                                    }, null, 8, ["src"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(service.value.example.image, (image, index) => {
                              return openBlock(), createBlock(unref(SwiperSlide), null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "object-fill rounded-md h-10/12 swiper-lazy",
                                    src: "/storage/" + image,
                                    alt: "bro"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="p-4 mt-2 font-sans text-gray-700 dark:text-gray-200" data-v-74a6b005${_scopeId2}><div data-v-74a6b005${_scopeId2}>${service.value.example.description}</div></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    service.value.example != null ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 gap-4"
                    }, [
                      createVNode("div", { class: "p-4 bg-white rounded-md shadow dark:bg-gray-800" }, [
                        createVNode("div", { class: "flex flex-row gap-2 p-4 mb-4" }, [
                          createVNode(unref(Swiper), {
                            modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                            effect: "fade",
                            "slides-per-view": 1,
                            navigation: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(service.value.example.image, (image, index) => {
                                return openBlock(), createBlock(unref(SwiperSlide), null, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      class: "object-fill rounded-md h-10/12 swiper-lazy",
                                      src: "/storage/" + image,
                                      alt: "bro"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 1
                          }, 8, ["modules"])
                        ]),
                        createVNode("div", { class: "p-4 mt-2 font-sans text-gray-700 dark:text-gray-200" }, [
                          createVNode("div", {
                            innerHTML: service.value.example.description
                          }, null, 8, ["innerHTML"])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TabPanel), { header: "Commentaires" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-74a6b005${_scopeId2}><div class="p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600" data-v-74a6b005${_scopeId2}><p class="text-sm text-gray-700 md:text-base dark:text-gray-300" data-v-74a6b005${_scopeId2}> Hello</p><div class="flex items-center my-4" data-v-74a6b005${_scopeId2}><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-74a6b005${_scopeId2}><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" data-v-74a6b005${_scopeId2}></path></svg><span class="text-sm font-semibold text-gray-700 dark:text-gray-100" data-v-74a6b005${_scopeId2}>(3) </span></div><div data-v-74a6b005${_scopeId2}><div data-v-74a6b005${_scopeId2}></div><div data-v-74a6b005${_scopeId2}><p class="font-bold text-gray-800" data-v-74a6b005${_scopeId2}>Bro</p></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600" }, [
                        createVNode("p", { class: "text-sm text-gray-700 md:text-base dark:text-gray-300" }, " Hello"),
                        createVNode("div", { class: "flex items-center my-4" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4 mr-1 text-yellow-500 fill-current",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20"
                          }, [
                            createVNode("path", { d: "M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" })
                          ])),
                          createVNode("span", { class: "text-sm font-semibold text-gray-700 dark:text-gray-100" }, "(3) ")
                        ]),
                        createVNode("div", null, [
                          createVNode("div"),
                          createVNode("div", null, [
                            createVNode("p", { class: "font-bold text-gray-800" }, "Bro")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TabPanel), { header: "INFO" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "py-5 min-h-64" }, [
                    createVNode("div", { class: "mb-4 prose text-gray-800 md:text-base dark:text-gray-200" }, [
                      createVNode("div", {
                        innerHTML: service.value.description
                      }, null, 8, ["innerHTML"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Support :"),
                        createVNode("div", {
                          id: "support",
                          class: "text-gray-800"
                        }, [
                          createVNode("div", { class: "px-2 mt-2" }, [
                            createVNode("ul", { class: "px-4 list-disc dark:text-gray-50" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(service.value.basic_support, (value, index) => {
                                return openBlock(), createBlock("li", null, toDisplayString(value), 1);
                              }), 256))
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "grid hidden grid-cols-2 gap-4 mb-4" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Prix :"),
                        createVNode("p", { class: "px-2 mt-2 text-gray-700 dark:text-gray-300" }, [
                          createTextVNode("à partir de "),
                          createVNode("span", { class: "text-lg text-green-700" }, toDisplayString(service.value.price), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Délai :"),
                        createVNode("p", { class: "text-gray-700 dark:text-gray-300" }, toDisplayString(service.value.basic_delivery_time) + " jours ", 1)
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }),
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mb-6" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Besoin pour ce service :"),
                        createVNode("div", {
                          class: "prose",
                          innerHTML: service.value.need_service
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(TabPanel), { header: "Example" }, {
                default: withCtx(() => [
                  service.value.example != null ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-1 gap-4"
                  }, [
                    createVNode("div", { class: "p-4 bg-white rounded-md shadow dark:bg-gray-800" }, [
                      createVNode("div", { class: "flex flex-row gap-2 p-4 mb-4" }, [
                        createVNode(unref(Swiper), {
                          modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                          effect: "fade",
                          "slides-per-view": 1,
                          navigation: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(service.value.example.image, (image, index) => {
                              return openBlock(), createBlock(unref(SwiperSlide), null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "object-fill rounded-md h-10/12 swiper-lazy",
                                    src: "/storage/" + image,
                                    alt: "bro"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ]),
                          _: 1
                        }, 8, ["modules"])
                      ]),
                      createVNode("div", { class: "p-4 mt-2 font-sans text-gray-700 dark:text-gray-200" }, [
                        createVNode("div", {
                          innerHTML: service.value.example.description
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(unref(TabPanel), { header: "Commentaires" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("div", { class: "p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600" }, [
                      createVNode("p", { class: "text-sm text-gray-700 md:text-base dark:text-gray-300" }, " Hello"),
                      createVNode("div", { class: "flex items-center my-4" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-4 h-4 mr-1 text-yellow-500 fill-current",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20"
                        }, [
                          createVNode("path", { d: "M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" })
                        ])),
                        createVNode("span", { class: "text-sm font-semibold text-gray-700 dark:text-gray-100" }, "(3) ")
                      ]),
                      createVNode("div", null, [
                        createVNode("div"),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-bold text-gray-800" }, "Bro")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-4 mt-6" data-v-74a6b005><p class="mb-4 text-lg font-medium text-gray-800 dark:text-gray-200" data-v-74a6b005>À propos du freelance </p><div class="flex items-center gap-4 mb-8" data-v-74a6b005>`);
      if (service.value.user != null) {
        _push(ssrRenderComponent(_component_Photo, {
          user: service.value.user
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-74a6b005>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("profileFreelance", service.value.freelance.identifiant),
        class: "font-bold text-gray-800 dark:text-gray-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(service.value.freelance.nom)}`);
          } else {
            return [
              createTextVNode(toDisplayString(service.value.freelance.nom), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="block text-gray-700 truncate dark:text-gray-300" data-v-74a6b005>${ssrInterpolate(service.value.category.name)}</p></div></div><div class="text-base text-gray-700 dark:text-gray-100" data-v-74a6b005>${ssrInterpolate(service.value.freelance.description)}</div></div></div></div></div></div></div><div class="px-4 mt-4" data-v-74a6b005><div class="px-4" data-v-74a6b005><p class="text-lg font-bold text-gray-800 dark:text-gray-200" data-v-74a6b005>Du meme Categorie</p></div><div class="grid gap-4 px-4 py-4 mx-auto md:grid-cols-4" data-v-74a6b005><!--[-->`);
      ssrRenderList(props.otherService.data, (service2) => {
        _push(`<div data-v-74a6b005>`);
        _push(ssrRenderComponent(_component_ServiceCard, {
          service: service2,
          key: service2.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (props.otherService == null) {
        _push(`<div class="flex items-center justify-center h-64" data-v-74a6b005><span class="text-lg font-medium text-gray-500" data-v-74a6b005> Aucun élément trouvé. </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Service/OneService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OneService = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-74a6b005"]]);
export {
  OneService as default
};

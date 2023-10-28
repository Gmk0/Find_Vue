import { ref, resolveComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-2a57e25f.js";
import Galleria from "primevue/galleria/galleria.esm.js";
import Image from "primevue/image/image.esm.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y } from "swiper/modules";
/* empty css                   */import TabView from "primevue/tabview/tabview.esm.js";
import TabPanel from "primevue/tabpanel/tabpanel.esm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "primevue/config/config.esm.js";
import "./store-0ea3a1d1.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-cc961511.js";
import "vue-collapsed";
const OneService_vue_vue_type_style_index_0_scoped_b4c40e2d_lang = "";
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
    const like = ref(false);
    const level = ref("basic");
    const images = ref([]);
    for (let i = 0; i < props.service.files.length; i++) {
      images.value.push({
        itemImageSrc: "/storage/" + props.service.files[i],
        thumbnailImageSrc: "/storage/" + props.service.files[i],
        alt: `Description for Image ${i + 1}`,
        title: `Title ${i + 1}`
      });
    }
    const responsiveOptions = ref([
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
      const _component_ServiceCard = resolveComponent("ServiceCard");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-2 pt-16 bg-gray-100 md:px-6 dark:bg-gray-900" }, _attrs))} data-v-b4c40e2d><div class="hidden px-2" data-v-b4c40e2d> All/Service </div><div class="px-8" data-v-b4c40e2d><button class="px-4 py-2 text-gray-800 transition-all border rounded-lg hover:bg-amber-500 hover:text-white border-amber-500" onclick="history.back()" data-v-b4c40e2d>Retour</button></div><div class="container relative px-4 py-4 mx-auto" data-v-b4c40e2d><div class="relative flex flex-col md:flex-row md:space-x-4" data-v-b4c40e2d><div id="card" class="relative flex-col mx-2 mb-4 md:flex md:order-2 md:mb-0 md:w-1/3" data-v-b4c40e2d><div class="flex sticky top-[8rem] flex-col gap-2 px-2 pt-2 card-sticky" data-v-b4c40e2d><div class="sticky p-2 bg-white rounded-md shadow-lg dark:bg-gray-800" data-v-b4c40e2d><div class="sm:col-span-8 lg:col-span-7" data-v-b4c40e2d><h2 class="flex text-2xl font-bold text-gray-800 truncate lg:hidden dark:text-gray-300 sm:pr-12" data-v-b4c40e2d>${ssrInterpolate(__props.service.title)}</h2><section aria-labelledby="information-heading" class="mt-1" data-v-b4c40e2d><h3 id="information-heading" class="sr-only" data-v-b4c40e2d>Product information</h3><div class="flex justify-between my-3" data-v-b4c40e2d><h4 class="sr-only" data-v-b4c40e2d>Reviews</h4><div class="flex items-center" data-v-b4c40e2d><div class="flex items-center" data-v-b4c40e2d><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-b4c40e2d><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" data-v-b4c40e2d></path></svg><span class="text-sm font-semibold text-gray-700 dark:text-gray-100" data-v-b4c40e2d>(2) </span></div><p class="sr-only" data-v-b4c40e2d>3 out of 5 stars</p><a href="#" class="ml-3 text-sm font-medium text-amber-600 hover:text-indigo-500" data-v-b4c40e2d>34 reviews</a></div><div class="flex justify-between mt-3" data-v-b4c40e2d><div class="flex items-center" data-v-b4c40e2d><button class="flex gap-1 mr-2" data-v-b4c40e2d><span x-cloak style="${ssrRenderStyle(!like.value ? null : { display: "none" })}" class="" data-v-b4c40e2d><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b4c40e2d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-b4c40e2d></path></svg></span><span x-cloak style="${ssrRenderStyle(like.value ? null : { display: "none" })}" data-v-b4c40e2d><svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" data-v-b4c40e2d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-b4c40e2d></path></svg></span></button></div><div data-v-b4c40e2d></div></div></div>`);
      if (props.service.premium_price && props.service.extra_price) {
        _push(`<div class="mt-4 mb-3" data-v-b4c40e2d><ul class="flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" data-v-b4c40e2d><li class="${ssrRenderClass([level.value === "Basic" ? "border-b-4 border-amber-600" : "", "w-full sm:border-r dark:border-gray-600"])}" data-v-b4c40e2d><button class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none" data-v-b4c40e2d> Basic </button></li><li class="${ssrRenderClass([level.value === "Premium" ? "border-b-4 border-amber-600" : "", "w-full sm:border-r dark:border-gray-600"])}" data-v-b4c40e2d><button class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none" data-v-b4c40e2d> Premium </button></li><li class="${ssrRenderClass([level.value === "Extra" ? "border-b-4 border-amber-600" : "", "w-full dark:border-gray-600"])}" data-v-b4c40e2d><button class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none" data-v-b4c40e2d> Extra </button></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-between gap-2 px-4" data-v-b4c40e2d><p class="py-2 text-lg text-gray-800" data-v-b4c40e2d>${ssrInterpolate(level.value)}</p><p class="text-lg font-bold text-gray-800" data-v-b4c40e2d>500 $</p></div><div data-v-b4c40e2d><div id="" class="mt-4" data-v-b4c40e2d><div class="px-4" data-v-b4c40e2d><ul class="flex gap-4" data-v-b4c40e2d></ul></div></div></div></section><section aria-labelledby="options-heading" class="px-4 mt-1" data-v-b4c40e2d><h3 id="options-heading" class="sr-only" data-v-b4c40e2d>Service options</h3><div data-v-b4c40e2d><div class="flex justify-between mt-4" data-v-b4c40e2d><p class="flex gap-2 font-medium text-gray-700 dark:text-gray-100" data-v-b4c40e2d> icon `);
      if (level.value === "basic") {
        _push(`<span data-v-b4c40e2d>${ssrInterpolate(props.service.basic_delivery_time)}</span>`);
      } else if (level.value === "Premium") {
        _push(`<span data-v-b4c40e2d>${ssrInterpolate(props.service.premium_delivery_time)}</span>`);
      } else {
        _push(`<span data-v-b4c40e2d>${ssrInterpolate(props.service.extra_delivery_time)}</span>`);
      }
      _push(` Jours Delai </p><p class="flex gap-2 font-medium text-gray-700 dark:text-gray-100" data-v-b4c40e2d> clock `);
      if (level.value === "basic") {
        _push(`<span data-v-b4c40e2d>${ssrInterpolate(props.service.basic_revision)}</span>`);
      } else if (level.value === "Premium") {
        _push(`<span data-v-b4c40e2d>${ssrInterpolate(props.service.premium_revision)}</span>`);
      } else {
        _push(`<span data-v-b4c40e2d>${ssrInterpolate(props.service.extra_revision)}</span>`);
      }
      _push(` Revisions </p></div><div class="flex" data-v-b4c40e2d><button wire:click="add_cart()" type="button" id="" class="flex items-center justify-center w-full gap-1 px-8 py-3 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" data-v-b4c40e2d><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-b4c40e2d><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" data-v-b4c40e2d></path></svg><span wire:loading.remove wire:target="add_cart" data-v-b4c40e2d>Ajouter au Panier</span><span wire:loading wire:target="add_cart" data-v-b4c40e2d>Ajout... </span></button></div></div></section></div><div class="grid w-full gap-2 p-6 bg-white rounded-lg dark:bg-gray-800" data-v-b4c40e2d><button data-v-b4c40e2d>Contacter</button></div></div></div></div><div class="w-full px-4 bg-gray-50 dark:bg-gray-800 md:w-2/3" data-v-b4c40e2d><div class="p-4 dark:bg-gray-800" data-v-b4c40e2d><div class="flex flex-col mb-4" data-v-b4c40e2d><div data-v-b4c40e2d><p class="mb-4 text-lg font-bold text-gray-700 md:text-xl dark:text-gray-200" data-v-b4c40e2d>${ssrInterpolate(props.service.title)}</p></div><div class="flex gap-4 mt-2" data-v-b4c40e2d><div class="flex flex-col gap-3 my-auto" data-v-b4c40e2d><a class="text-base font-medium text-gray-500 underline" data-v-b4c40e2d>${ssrInterpolate(props.service.freelance.nom)}</a><div class="flex flex-row gap-2" data-v-b4c40e2d><span class="text-base font-medium" data-v-b4c40e2d>Niveau ${ssrInterpolate(props.service.freelance.level)} (3) </span><span class="text-base font-medium" data-v-b4c40e2d>3 commande en cours</span></div></div></div><div class="" data-v-b4c40e2d><div class="card" data-v-b4c40e2d>`);
      _push(ssrRenderComponent(unref(Galleria), {
        value: images.value,
        responsiveOptions: responsiveOptions.value,
        numVisible: 5,
        containerStyle: "max-width: 640px"
      }, {
        item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Image), {
              src: slotProps.item.itemImageSrc,
              alt: slotProps.item.alt,
              style: { "width": "100%" },
              preview: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Image), {
                src: slotProps.item.itemImageSrc,
                alt: slotProps.item.alt,
                style: { "width": "100%" },
                preview: ""
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        thumbnail: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", slotProps.item.thumbnailImageSrc)}${ssrRenderAttr("alt", slotProps.item.alt)} style="${ssrRenderStyle({ "width": "15%" })}" data-v-b4c40e2d${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: slotProps.item.thumbnailImageSrc,
                alt: slotProps.item.alt,
                style: { "width": "15%" }
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden" data-v-b4c40e2d><p class="mt-4 text-lg font-bold text-gray-800 md:text-2xl dark:text-gray-200" data-v-b4c40e2d>${ssrInterpolate(props.service.title)}</p></div><div class="mt-8 card" data-v-b4c40e2d>`);
      _push(ssrRenderComponent(unref(TabView), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabPanel), { header: "INFO" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-5 min-h-64" data-v-b4c40e2d${_scopeId2}><div class="mb-4 text-base text-gray-800 md:text-base dark:text-gray-200" data-v-b4c40e2d${_scopeId2}><div data-v-b4c40e2d${_scopeId2}>${props.service.description}</div></div><div class="grid grid-cols-2 gap-4 mb-4" data-v-b4c40e2d${_scopeId2}><div data-v-b4c40e2d${_scopeId2}><p class="font-bold text-gray-500 dark:text-gray-200" data-v-b4c40e2d${_scopeId2}>Support :</p><div id="support" class="text-gray-800" data-v-b4c40e2d${_scopeId2}><div class="px-2 mt-2" data-v-b4c40e2d${_scopeId2}><ul class="px-4 list-disc dark:text-gray-50" data-v-b4c40e2d${_scopeId2}><!--[-->`);
                  ssrRenderList(props.service.basic_support, (value, index) => {
                    _push3(`<li data-v-b4c40e2d${_scopeId2}>${ssrInterpolate(value)}</li>`);
                  });
                  _push3(`<!--]--></ul></div></div></div></div><div class="grid hidden grid-cols-2 gap-4 mb-4" data-v-b4c40e2d${_scopeId2}><div data-v-b4c40e2d${_scopeId2}><p class="font-bold text-gray-500 dark:text-gray-200" data-v-b4c40e2d${_scopeId2}>Prix :</p><p class="px-2 mt-2 text-gray-700 dark:text-gray-300" data-v-b4c40e2d${_scopeId2}>à partir de <span class="text-lg text-green-700" data-v-b4c40e2d${_scopeId2}>${ssrInterpolate(props.service.price)}</span></p></div><div data-v-b4c40e2d${_scopeId2}><p class="font-bold text-gray-500 dark:text-gray-200" data-v-b4c40e2d${_scopeId2}>Délai :</p><p class="text-gray-700 dark:text-gray-300" data-v-b4c40e2d${_scopeId2}>${ssrInterpolate(props.service.basic_delivery_time)} jours </p></div></div><div class="grid grid-cols-2 gap-4 mb-4" data-v-b4c40e2d${_scopeId2}></div><div class="grid grid-cols-2 gap-4 mb-6" data-v-b4c40e2d${_scopeId2}><div data-v-b4c40e2d${_scopeId2}><p class="font-bold text-gray-500 dark:text-gray-200" data-v-b4c40e2d${_scopeId2}>Besoin pour ce service :</p><div data-v-b4c40e2d${_scopeId2}>${props.service.need_service}</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-5 min-h-64" }, [
                      createVNode("div", { class: "mb-4 text-base text-gray-800 md:text-base dark:text-gray-200" }, [
                        createVNode("div", {
                          innerHTML: props.service.description
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
                                (openBlock(true), createBlock(Fragment, null, renderList(props.service.basic_support, (value, index) => {
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
                            createVNode("span", { class: "text-lg text-green-700" }, toDisplayString(props.service.price), 1)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Délai :"),
                          createVNode("p", { class: "text-gray-700 dark:text-gray-300" }, toDisplayString(props.service.basic_delivery_time) + " jours ", 1)
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }),
                      createVNode("div", { class: "grid grid-cols-2 gap-4 mb-6" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Besoin pour ce service :"),
                          createVNode("div", {
                            innerHTML: props.service.need_service
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
                  if (props.service.example != null) {
                    _push3(`<div class="grid grid-cols-1 gap-4" data-v-b4c40e2d${_scopeId2}><div class="p-4 bg-white rounded-md shadow dark:bg-gray-800" data-v-b4c40e2d${_scopeId2}><div class="flex flex-row gap-2 p-4 mb-4" data-v-b4c40e2d${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Swiper), {
                      modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                      effect: "fade",
                      "slides-per-view": 1,
                      navigation: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(props.service.example.image, (image, index) => {
                            _push4(ssrRenderComponent(unref(SwiperSlide), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img class="object-fill rounded-md h-10/12 swiper-lazy"${ssrRenderAttr("src", "/storage/" + image)} alt="bro" data-v-b4c40e2d${_scopeId4}>`);
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
                            (openBlock(true), createBlock(Fragment, null, renderList(props.service.example.image, (image, index) => {
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
                    _push3(`</div><div class="p-4 mt-2 font-sans text-gray-700 dark:text-gray-200" data-v-b4c40e2d${_scopeId2}><div data-v-b4c40e2d${_scopeId2}>${props.service.example.description}</div></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    props.service.example != null ? (openBlock(), createBlock("div", {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(props.service.example.image, (image, index) => {
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
                            innerHTML: props.service.example.description
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
                  _push3(`<div data-v-b4c40e2d${_scopeId2}><div class="p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600" data-v-b4c40e2d${_scopeId2}><p class="text-sm text-gray-700 md:text-base dark:text-gray-300" data-v-b4c40e2d${_scopeId2}> Hello</p><div class="flex items-center my-4" data-v-b4c40e2d${_scopeId2}><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-b4c40e2d${_scopeId2}><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" data-v-b4c40e2d${_scopeId2}></path></svg><span class="text-sm font-semibold text-gray-700 dark:text-gray-100" data-v-b4c40e2d${_scopeId2}>(3) </span></div><div data-v-b4c40e2d${_scopeId2}><div data-v-b4c40e2d${_scopeId2}></div><div data-v-b4c40e2d${_scopeId2}><p class="font-bold text-gray-800" data-v-b4c40e2d${_scopeId2}>Bro</p></div></div></div></div>`);
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
                    createVNode("div", { class: "mb-4 text-base text-gray-800 md:text-base dark:text-gray-200" }, [
                      createVNode("div", {
                        innerHTML: props.service.description
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
                              (openBlock(true), createBlock(Fragment, null, renderList(props.service.basic_support, (value, index) => {
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
                          createVNode("span", { class: "text-lg text-green-700" }, toDisplayString(props.service.price), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Délai :"),
                        createVNode("p", { class: "text-gray-700 dark:text-gray-300" }, toDisplayString(props.service.basic_delivery_time) + " jours ", 1)
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }),
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mb-6" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "font-bold text-gray-500 dark:text-gray-200" }, "Besoin pour ce service :"),
                        createVNode("div", {
                          innerHTML: props.service.need_service
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(TabPanel), { header: "Example" }, {
                default: withCtx(() => [
                  props.service.example != null ? (openBlock(), createBlock("div", {
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
                            (openBlock(true), createBlock(Fragment, null, renderList(props.service.example.image, (image, index) => {
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
                          innerHTML: props.service.example.description
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
      _push(`</div><div class="px-4 mt-6" data-v-b4c40e2d><p class="mb-4 text-lg font-medium text-gray-800 dark:text-gray-200" data-v-b4c40e2d>À propos du freelance </p><div class="flex items-center gap-4 mb-8" data-v-b4c40e2d><div data-v-b4c40e2d><p class="font-bold text-gray-800 dark:text-gray-300" data-v-b4c40e2d>${ssrInterpolate(props.service.freelance.nom)}</p><p class="block text-gray-700 truncate dark:text-gray-300" data-v-b4c40e2d>${ssrInterpolate(props.service.freelance.nom)}</p></div></div></div></div></div></div></div></div><div class="px-4 mt-4" data-v-b4c40e2d><div class="px-4" data-v-b4c40e2d><p class="text-lg font-bold text-gray-800 dark:text-gray-200" data-v-b4c40e2d>Du meme Categorie</p></div><div class="grid gap-4 px-4 py-4 mx-auto md:grid-cols-4" data-v-b4c40e2d><!--[-->`);
      ssrRenderList(props.otherService, (service) => {
        _push(`<div data-v-b4c40e2d>`);
        _push(ssrRenderComponent(_component_ServiceCard, {
          service,
          key: service.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (props.otherService == null) {
        _push(`<div class="flex items-center justify-center h-64" data-v-b4c40e2d><span class="text-lg font-medium text-gray-500" data-v-b4c40e2d> Aucun élément trouvé. </span></div>`);
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
const OneService = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4c40e2d"]]);
export {
  OneService as default
};

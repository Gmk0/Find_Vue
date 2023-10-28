import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-2a57e25f.js";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./FreelanceCard-1ffd4b1e.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { _ as _sfc_main$2 } from "./ServiceCard-36e9bbe7.js";
import { Navigation, Pagination, Scrollbar, EffectCube, A11y } from "swiper/modules";
/* empty css                   */import "@vueuse/core";
import "primevue/config/config.esm.js";
import "./store-0ea3a1d1.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-cc961511.js";
import "vue-collapsed";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "primevue/image/image.esm.js";
import "primevue/usetoast/usetoast.esm.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "ServiceAll",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    freelances: Array,
    servicesBest: Array
  },
  setup(__props) {
    const props = __props;
    const swiperInstance = ref(null);
    const swiperInstanceFreelances = ref(null);
    const swiperInstanceServices = ref(null);
    const onSwiperInitializedService = (swiper) => {
      swiperInstanceServices.value = swiper;
    };
    const onSwiperInitialized = (swiper) => {
      swiperInstance.value = swiper;
    };
    const onSwiperInitializedFreelance = (swiper) => {
      swiperInstanceFreelances.value = swiper;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen pt-16 mb-6" }, _attrs))}><div x-show="!isLoading" x-cloak class="flex flex-col p-2 mx-6 my-8 bg-white rounded-lg md:min-h-64 dark:bg-gray-800"><div class="mb-2"><h3 class="text-xl leading-snug text-center dark:text-gray-400 text-slate-800"> Découvrez une communauté de freelances talentueux prêts à donner vie à vos projets. Trouvez le service parfait pour vous, choisissez parmi une large sélection de compétences et laissez notre communauté de professionnels vous aider à réaliser vos rêves. </h3></div><div class=""><div class="py-4 mx-6"><div class="flex items-end justify-end mb-2"><div class="flex gap-4"><button class="w-10 h-10 p-0 rounded-full btn prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg></button><button class="w-10 h-10 p-0 rounded-full btn next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg></button></div></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "flex py-8 mb-4",
        modules: [unref(Navigation), unref(Pagination), unref(Scrollbar), unref(EffectCube), unref(A11y)],
        spaceBetween: 30,
        "space-between": 25,
        breakpoints: { 300: { slidesPerView: 1 }, 900: { slidesPerView: 3 } },
        onSwiper: onSwiperInitialized
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.categories, (category) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { class: "m-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("categoryName", [category.name]),
                      class: "flex flex-col items-center px-4 py-2.5 duration-200 border shadow-lg cursor-pointer bg-gray-50 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h4 class="mt-3 mb-1 md:text-[12px] text-[10px] font-semibold text-slate-600 duration-200 group-hover:text-white"${_scopeId3}>${ssrInterpolate(category.name)}</h4>`);
                        } else {
                          return [
                            createVNode("h4", { class: "mt-3 mb-1 md:text-[12px] text-[10px] font-semibold text-slate-600 duration-200 group-hover:text-white" }, toDisplayString(category.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Link), {
                        href: _ctx.route("categoryName", [category.name]),
                        class: "flex flex-col items-center px-4 py-2.5 duration-200 border shadow-lg cursor-pointer bg-gray-50 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"
                      }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "mt-3 mb-1 md:text-[12px] text-[10px] font-semibold text-slate-600 duration-200 group-hover:text-white" }, toDisplayString(category.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.categories, (category) => {
                return openBlock(), createBlock(unref(SwiperSlide), { class: "m-2" }, {
                  default: withCtx(() => [
                    createVNode(unref(Link), {
                      href: _ctx.route("categoryName", [category.name]),
                      class: "flex flex-col items-center px-4 py-2.5 duration-200 border shadow-lg cursor-pointer bg-gray-50 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "mt-3 mb-1 md:text-[12px] text-[10px] font-semibold text-slate-600 duration-200 group-hover:text-white" }, toDisplayString(category.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="py-8 mx-6"><div class="flex items-center justify-between px-4"><p class="text-xl font-medium text-slate-700 dark:text-navy-100"> Les Services populaire </p><div class="flex gap-4"><button class="w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg></button><button class="w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg></button></div></div><div class="mt-5">`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "flex py-8",
        modules: [unref(Navigation), unref(Pagination), unref(Scrollbar), unref(EffectCube), unref(A11y)],
        spaceBetween: 30,
        breakpoints: { 600: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 4 } },
        "space-between": 25,
        onSwiper: onSwiperInitializedService
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.servicesBest, (service) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { class: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$2, { service }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$2, { service }, null, 8, ["service"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.servicesBest, (service) => {
                return openBlock(), createBlock(unref(SwiperSlide), { class: "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$2, { service }, null, 8, ["service"])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="py-8 mx-6"><div class="flex items-center justify-between px-4"><p class="text-xl font-medium text-slate-700 dark:text-navy-100"> Les Freelance populaire </p><div class="flex gap-4"><button class="w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg></button><button class="w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg></button></div></div><div class="mt-5">`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "flex py-8",
        modules: [unref(Navigation), unref(Pagination), unref(Scrollbar), unref(EffectCube), unref(A11y)],
        spaceBetween: 30,
        breakpoints: { 500: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 4 } },
        "space-between": 25,
        onSwiper: onSwiperInitializedFreelance
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.freelances, (freelance) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { class: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, { freelance }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, { freelance }, null, 8, ["freelance"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.freelances, (freelance) => {
                return openBlock(), createBlock(unref(SwiperSlide), { class: "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, { freelance }, null, 8, ["freelance"])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col p-2 mx-4 mt-4 bg-white rounded-lg dark:bg-gray-800 md:mx-6 justify-beetwen"><div class="mb-4"><h1 class="text-xl font-bold text-gray-800 dark:text-gray-300">Services que vous pourriez aimer</h1></div><div class="grid grid-cols-1 gap-4 mx-auto lg:max-6-5xl lg:mx-auto lg:p-4 md:grid-cols-3 lg:md:grid-cols-4 md:gap-4"><!--[-->`);
      ssrRenderList(props.servicesBest, (service) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          service,
          key: service.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col items-center justify-center p-6 mx-6 mt-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 min-h-64 lg:flex-row lg:justify-start"><img src="/images/hero/team.svg" alt="Illustration de projet" class="hidden w-1/2 h-64 mb-4 rounded-md lg:mr-6 md:block lg:mb-0"><div class="text-center lg:text-left"><h2 class="mb-2 text-xl font-semibold text-gray-800">Vous ne trouvez pas ce que vous cherchez ?</h2><p class="mb-4 dark:text-gray-300">Si vous avez besoin d&#39;un service particulier, n&#39;hésitez pas à soumettre votre projet et notre communauté de freelances talentueux sera ravie de vous aider..</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("createProject"),
        class: "px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Soumettre un projet`);
          } else {
            return [
              createTextVNode("Soumettre un projet")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Service/ServiceAll.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

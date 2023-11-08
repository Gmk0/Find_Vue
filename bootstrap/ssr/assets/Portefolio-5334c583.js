import { ref, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-7321efd4.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { _ as _sfc_main$2 } from "./ServiceCard-ff571472.js";
import { Navigation, Pagination, Scrollbar, EffectCube, A11y } from "swiper/modules";
/* empty css                   */import "@inertiajs/vue3";
import "@vueuse/core";
import "./userInfo-9512d7bb.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
import "vue-collapsed";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "primevue/usetoast/usetoast.esm.js";
import "primevue/avatar/avatar.esm.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Portefolio",
  __ssrInlineRender: true,
  props: {
    freelance: Object,
    services: Array
  },
  setup(__props) {
    const props = __props;
    const swiperInstanceServices = ref(null);
    const onSwiperInitializedService = (swiper) => {
      swiperInstanceServices.value = swiper;
    };
    const showMore = ref(false);
    const truncateText = (text, length) => {
      return text.length > length ? text.slice(0, length) + "..." : text;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Photo = resolveComponent("Photo");
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen pt-16 overflow-auto" }, _attrs))}><div class="relative flex flex-col h-full bg-gray-100 dark:bg-gray-900 lg:flex-row"><aside class="relative w-full overflow-auto bg-white shadow-md dark:bg-gray-800 lg:w-4/12"><div class="sticky"><div class="px-6 overflow-y-auto scrollbar-sm"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Photo, {
        user: props.freelance.data.user,
        taille: "36"
      }, null, _parent));
      _push(`</div><h1 class="mt-4 text-lg font-bold text-gray-800 lg:text-lg xl:text-xl 2xl:text-3xl">${ssrInterpolate(props.freelance.data.prenom)} ${ssrInterpolate(props.freelance.data.nom)}</h1><h2 class="flex justify-between mt-2 text-lg font-medium text-gray-500 dark:text-gray-200"><div class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path></svg><span class="items-start text-gray-600 dark:text-gray-500"> Categories </span></div><span class="text-base text-gray-700 dark:text-gray-100">${ssrInterpolate(props.freelance.data.category.name)}</span></h2><h2 class="flex justify-between gap-1 mt-4 font-medium text-gray-800"><div class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg><span class="text-gray-600 dark:text-gray-500">Localisation</span></div><span class="text-base text-gray-700 dark:text-gray-100">${ssrInterpolate(props.freelance.data.localisation["ville"] ? props.freelance.data.localisation["ville"] : "")}</span></h2><h2 class="flex justify-between gap-2 mt-2 font-medium text-gray-500 dark:text-gray-200"><div class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-()"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg><span class="text-base text-gray-600 dark:text-gray-500">Niveau</span></div><span>${ssrInterpolate(props.freelance.data.level)}</span></h2>`);
      if (props.freelance.data.compte != null) {
        _push(`<div class="flex flex-col mt-4"><div><h1 class="text-base text-gray-600 dark:text-gray-500">Comptes Liees</h1></div><div class="flex gap-4 mt-4"><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-6 h-6 svg3" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col mt-4"><div class="text-base text-gray-600 dark:text-gray-500"><h1>Sous categorie cle</h1></div><div><div class="inline-flex flex-wrap items-center gap-3 mt-4 min:h-12 group"></div></div></div><div class="flex flex-col mt-4 lg:hidden"><div class="text-base text-gray-600 dark:text-gray-500"><h1>Competences</h1></div><div><!--[-->`);
      ssrRenderList(props.freelance.data.competences, (compt) => {
        _push(`<div class="inline-flex flex-wrap items-center gap-3 mt-4 min-h-12 group"><span data-tooltip-target="" class="items-center py-1 cursor-default px-2 rounded-md text-[12px] lg:text-[14px] font-medium border border-secondary-200 shadow-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none">${ssrInterpolate(compt.title)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col mt-4"><div class="text-base text-gray-600 dark:text-gray-500"><h1>Commande</h1></div><div class="flex justify-between mt-4"><span>Effectuer</span><span class="items-center py-1 cursor-default px-2 rounded-md text-[14px] font-medium border border-secondary-200 shadow-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none">${ssrInterpolate(props.freelance.data.commande_realiser)}</span></div><div class="flex justify-between mt-4"><span>En Cours</span><span class="items-center py-1 cursor-default px-2 rounded-md text-[14px] font-medium border border-secondary-200 shadow-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none">${ssrInterpolate(props.freelance.data.commande_encours)}</span></div></div><div class="w-full px-2 mt-8"><button type="button" class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true"> Contacter </button></div><div class="lg:h-48"></div></div></div></aside><main class="w-full p-6 rounded lg:w-8/12"><div class="mx-2 mb-4"><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"${_scopeId}></path></svg> Acceuil `);
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
              createTextVNode(" Acceuil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("find_freelance"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>Freelance</span>`);
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
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Freelance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">${ssrInterpolate(props.freelance.data.identifiant)}</span></div></li></ol></nav></div><section class="bg-white rounded-md dark:bg-gray-800"><div class="px-4 py-12 mx-auto mb-4 max-w-7xl sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><h2 class="text-lg font-bold text-center text-gray-800 xl:text-3xl md:text-xl dark:text-gray-200"> General information</h2><p class="my-8 text-gray-00 dark:text-gray-300">Apropos de Moi</p><div class="max-w-4xl mb-4 text-base text-gray-700 break-words dark:text-gray-300">`);
      if (!showMore.value) {
        _push(`<p class="">${ssrInterpolate(truncateText(props.freelance.data.description, 600))}</p>`);
      } else {
        _push(`<p>${ssrInterpolate(props.freelance.data.description)}</p>`);
      }
      if (props.freelance.data.description > 600) {
        _push(`<div><button><span style="${ssrRenderStyle(showMore.value ? null : { display: "none" })}" class="text-blue-600">Lire moins</span><span style="${ssrRenderStyle(!showMore.value ? null : { display: "none" })}" class="text-blue-600">Lire la suite</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section class="bg-gray-100 dark:bg-gray-900"><div class="px-2 py-12 mx-auto max-w-7xl sm:px-4 lg:px-4"><div class="mx-auto text-center"><h2 class="text-3xl font-bold text-gray-800">Mes Services</h2><p class="mt-4 text-gray-500 dark:text-gray-200">Voici quelques-uns des services que j&#39;ai créés sur la plateforme :</p><div class="py-8 swiper"><div class="flex items-center justify-between"><div></div><div class="flex gap-4 p-2"><button class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg></button><button class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg></button></div></div><div class="mt-5">`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "flex py-8",
        modules: [unref(Navigation), unref(Pagination), unref(Scrollbar), unref(EffectCube), unref(A11y)],
        spaceBetween: 30,
        breakpoints: { 600: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
        "space-between": 25,
        onSwiper: onSwiperInitializedService
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.services.data, (service) => {
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
              (openBlock(true), createBlock(Fragment, null, renderList(props.services.data, (service) => {
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
      _push(`</div></div></div></div></section><section class="hidden bg-white dark:bg-gray-900"><div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="max-w-4xl mx-auto text-center"><h2 class="text-3xl font-bold text-gray-800">Mes Projets</h2><p class="mt-4 text-gray-500 dark:text-gray-200">Voici quelques-uns des projets sur lesquels j&#39;ai travaillé :</p><div class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3"><div class="overflow-hidden bg-white rounded-lg shadow-lg"><a href="#"><img class="object-cover w-full h-48" src="https://via.placeholder.com/500x300" alt="Projet 1"></a><div class="p-6"><h3 class="text-lg font-bold text-gray-900"><a href="#">Nom du Projet</a></h3><p class="mt-2 text-gray-500">Description du projet</p></div></div><div class="overflow-hidden bg-white rounded-lg shadow-lg"><a href="#"><img class="object-cover w-full h-48" src="https://via.placeholder.com/500x300" alt="Projet 2"></a><div class="p-6"><h3 class="text-lg font-bold text-gray-900"><a href="#">Nom du Projet</a></h3><p class="mt-2 text-gray-500">Description du projet</p></div></div><div class="overflow-hidden bg-white rounded-lg shadow-lg"><a href="#"><img class="object-cover w-full h-48" src="https://via.placeholder.com/500x300" alt="Projet 3"></a><div class="p-6"><h3 class="text-lg font-bold text-gray-900"><a href="#">Nom du Projet</a></h3><p class="mt-2 text-gray-500">Description du projet</p></div></div></div></div></div></section><section class="p-6 mt-6 bg-gray-100 rounded-md shadow-sm dark:bg-gray-900"><div class="max-w-4xl mx-auto mb-4 text-center"><h2 class="text-3xl font-bold text-gray-800">Mes réalisations</h2><p class="mt-4 text-gray-500">Voici ce que mes clients satisfaits ont à dire :</p></div><div class="grid grid-cols-1 gap-4"></div></section></main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Freelance/Portefolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

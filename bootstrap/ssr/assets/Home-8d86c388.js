import { ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, onMounted, resolveComponent, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./WebLayout-2a57e25f.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { b as useStore } from "./store-0ea3a1d1.js";
import { Collapse } from "vue-collapsed";
import { Link } from "@inertiajs/vue3";
import { Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y, EffectCube } from "swiper/modules";
/* empty css                   */import "@vueuse/core";
import "primevue/config/config.esm.js";
import "./ResponsiveNavLink-cc961511.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "pinia";
import "axios";
const _sfc_main$1 = {
  __name: "HomeSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const results = ref([]);
    const loading = ref(false);
    const searchPerformed = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div><div class="flex flex-col w-full mt-6"><div class="relative"><form class="relative flex p-1 mb-4 bg-white shadow-2xl lg:dark:bg-white rounded-xl md:p-2"><input required${ssrRenderAttr("value", search.value)} class="w-full p-4 mr-2 text-gray-600 border-white focus:border-white rounded-xl" type="text"><button type="submit" class="px-6 py-3 ml-auto text-center transition rounded-lg bg-skin-fill"><span class="hidden font-semibold text-white md:block"> Recherche </span><svg xmlns="http://www.w3.org/2000/svg" class="w-5 mx-auto text-white md:hidden" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button></form>`);
      if (searchPerformed.value) {
        _push(`<div class="absolute w-full mt-1 overflow-y-auto bg-white border divide-y rounded-lg shadow z-[60] custom-scrollbar max-h-72">`);
        if (results.value.length > 0) {
          _push(`<div><!--[-->`);
          ssrRenderList(results.value, (result) => {
            _push(`<div>`);
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("home"),
              class: "block p-2 text-sm text-gray-800 cursor-pointer hover:bg-amber-700 hover:text-white"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(result.title)} - ${ssrInterpolate(result.category.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(result.title) + " - " + toDisplayString(result.category.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else if (loading.value) {
          _push(`<a class="block p-2 text-gray-800" href="#">Chargement en cours...</a>`);
        } else {
          _push(`<a class="block p-2 text-gray-800" href="#">Pas de résultat</a>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-center gap-4 mt-4"><div class="flex items-center space-x-2"><a href="{{route(&#39;categories&#39;)}}" class="flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full dark:border-purple-500"> Photographie</a></div><div class="flex items-center space-x-2"><a href="{{route(&#39;categories&#39;)}}" class="flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full dark:border-purple-500"> Design </a></div><div class="flex items-center space-x-2"><a href="{{route(&#39;categories&#39;)}}" class="flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full dark:border-purple-500"> Technologie</a></div></div><p class="mt-2 text-center text-gray-200 dark:text-gray-500">Catégories les plus populaires</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeSearch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Home_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const testimonialActive = ref(1);
    const faqs = ref([
      {
        question: "Qu’est ce que Find ?",
        answer: "Find est une plate-forme destinée à mettre en relation les entreprises et les particuliers demandèrent des services avec des travailleurs indépendants dans différents domaines tels que : Design et graphisme, photographie et tant d’autres . Find propose à ses travailleurs indépendants la possibilité de vendre leurs services aux entreprises et à toute personne désireuse d’un service se trouvant sur la plate-forme",
        isOpen: true
      },
      {
        question: "Que veut dire le terme Freelance ?",
        answer: "Le mot freelance est une nomenclature anglaise désignant une personne qui travaille pour elle-même sans contrat permanent avec un employeur, et qui est essentiellement son propre patron.",
        isOpen: false
      },
      {
        question: "La plate-forme est-elle gratuite ?",
        answer: "Oui la plate-forme est gratuite pour ceux qui veulent acheter un service. Pour les Freelance ( vendeurs) , ils doivent souscrire à un pack d’abonnement",
        isOpen: false
      },
      {
        question: "Comment se fait le paiement pour celui qui commande le service ?",
        answer: "Pour celui qui commande un service, il aura la possibilité de payer par Mobile money local ( M-pesa, Airtel money, Orange money soit par visa et Mastercard.",
        isOpen: false
      },
      {
        question: "Pourquoi payer avant la livraison du service ?",
        answer: "Il est essentiel d’effectuer un paiement avant la prestation du service pour certifier votre dévouement, ce qui garantit que le freelance ne travaillera pas en vain. De plus, le freelance ne recevra votre argent qu’après réception de votre commande, ce qui garantit la sécurité des deux parties.",
        isOpen: false
      }
    ]);
    const store = useStore();
    onMounted(() => {
      store.updateIsHome();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      _push(`<!--[--><div class="relative min-h-screen slideshow slideshow-wrapper pb-section sliderFull"><div class="hidden lg:block"><div class="home-slideshow">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
        effect: "fade",
        spaceBetween: 30,
        "slides-per-view": 1,
        autoplay: {
          delay: 4e3,
          disableOnInteraction: false
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative slide slideshow--medium"${_scopeId2}><div class="blur-up lazyload bg-size"${_scopeId2}><img class="blur-up lazyload bg-img" data-src="/canva/graceBrand.svg" src="/canva/graceBrand.svg" alt="graceP" title="graceP"${_scopeId2}><div class="slideshow__text-wrap slideshow__overlay classic middle"${_scopeId2}><div class="slideshow__text-content classic middle"${_scopeId2}><div class="container"${_scopeId2}><div class="wrap-caption right"${_scopeId2}><h2 class="h1 mega-title slideshow__title"${_scopeId2}></h2><span class="mega-subtitle slideshow__subtitle"${_scopeId2}></span><span class=""${_scopeId2}></span></div></div></div></div></div><div class="absolute flex flex-col floating gap-1 right-[30%] top-1/2"${_scopeId2}><h1 class="text-lg font-medium text-white"${_scopeId2}>Grace Kabila</h1><p class="text-base text-white"${_scopeId2}>Marketeuse Digital</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative slide slideshow--medium" }, [
                      createVNode("div", { class: "blur-up lazyload bg-size" }, [
                        createVNode("img", {
                          class: "blur-up lazyload bg-img",
                          "data-src": "/canva/graceBrand.svg",
                          src: "/canva/graceBrand.svg",
                          alt: "graceP",
                          title: "graceP"
                        }),
                        createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                          createVNode("div", { class: "slideshow__text-content classic middle" }, [
                            createVNode("div", { class: "container" }, [
                              createVNode("div", { class: "wrap-caption right" }, [
                                createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                                createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                                createVNode("span", { class: "" })
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "absolute flex flex-col floating gap-1 right-[30%] top-1/2" }, [
                        createVNode("h1", { class: "text-lg font-medium text-white" }, "Grace Kabila"),
                        createVNode("p", { class: "text-base text-white" }, "Marketeuse Digital")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="slide slideshow--medium"${_scopeId2}><div class="blur-up lazyload bg-size"${_scopeId2}><img class="blur-up lazyload bg-[#FFAA76]" data-src="/canva/sans.png" src="/canva/sans.png" alt="women sans" title="women sans"${_scopeId2}><div class="slideshow__text-wrap slideshow__overlay classic middle"${_scopeId2}><div class="slideshow__text-content classic middle"${_scopeId2}><div class="container"${_scopeId2}><div class="wrap-caption right"${_scopeId2}><h2 class="h1 mega-title slideshow__title"${_scopeId2}></h2><span class="mega-subtitle slideshow__subtitle"${_scopeId2}></span><span class=""${_scopeId2}></span></div></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "slide slideshow--medium" }, [
                      createVNode("div", { class: "blur-up lazyload bg-size" }, [
                        createVNode("img", {
                          class: "blur-up lazyload bg-[#FFAA76]",
                          "data-src": "/canva/sans.png",
                          src: "/canva/sans.png",
                          alt: "women sans",
                          title: "women sans"
                        }),
                        createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                          createVNode("div", { class: "slideshow__text-content classic middle" }, [
                            createVNode("div", { class: "container" }, [
                              createVNode("div", { class: "wrap-caption right" }, [
                                createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                                createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                                createVNode("span", { class: "" })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="slide slideshow--medium"${_scopeId2}><div class="blur-up lazyload bg-size"${_scopeId2}><img class="blur-up lazyload" data-src="/canva/homme.png" src="/canva/homme.png" alt="New Season Styles" title="New Season Styles"${_scopeId2}><div class="slideshow__text-wrap slideshow__overlay classic middle"${_scopeId2}><div class="slideshow__text-content classic middle"${_scopeId2}><div class="container"${_scopeId2}><div class="wrap-caption right"${_scopeId2}><h2 class="h1 mega-title slideshow__title"${_scopeId2}></h2><span class="mega-subtitle slideshow__subtitle"${_scopeId2}></span><span class=""${_scopeId2}></span></div></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "slide slideshow--medium" }, [
                      createVNode("div", { class: "blur-up lazyload bg-size" }, [
                        createVNode("img", {
                          class: "blur-up lazyload",
                          "data-src": "/canva/homme.png",
                          src: "/canva/homme.png",
                          alt: "New Season Styles",
                          title: "New Season Styles"
                        }),
                        createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                          createVNode("div", { class: "slideshow__text-content classic middle" }, [
                            createVNode("div", { class: "container" }, [
                              createVNode("div", { class: "wrap-caption right" }, [
                                createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                                createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                                createVNode("span", { class: "" })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "relative slide slideshow--medium" }, [
                    createVNode("div", { class: "blur-up lazyload bg-size" }, [
                      createVNode("img", {
                        class: "blur-up lazyload bg-img",
                        "data-src": "/canva/graceBrand.svg",
                        src: "/canva/graceBrand.svg",
                        alt: "graceP",
                        title: "graceP"
                      }),
                      createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                        createVNode("div", { class: "slideshow__text-content classic middle" }, [
                          createVNode("div", { class: "container" }, [
                            createVNode("div", { class: "wrap-caption right" }, [
                              createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                              createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                              createVNode("span", { class: "" })
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "absolute flex flex-col floating gap-1 right-[30%] top-1/2" }, [
                      createVNode("h1", { class: "text-lg font-medium text-white" }, "Grace Kabila"),
                      createVNode("p", { class: "text-base text-white" }, "Marketeuse Digital")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "slide slideshow--medium" }, [
                    createVNode("div", { class: "blur-up lazyload bg-size" }, [
                      createVNode("img", {
                        class: "blur-up lazyload bg-[#FFAA76]",
                        "data-src": "/canva/sans.png",
                        src: "/canva/sans.png",
                        alt: "women sans",
                        title: "women sans"
                      }),
                      createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                        createVNode("div", { class: "slideshow__text-content classic middle" }, [
                          createVNode("div", { class: "container" }, [
                            createVNode("div", { class: "wrap-caption right" }, [
                              createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                              createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                              createVNode("span", { class: "" })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "slide slideshow--medium" }, [
                    createVNode("div", { class: "blur-up lazyload bg-size" }, [
                      createVNode("img", {
                        class: "blur-up lazyload",
                        "data-src": "/canva/homme.png",
                        src: "/canva/homme.png",
                        alt: "New Season Styles",
                        title: "New Season Styles"
                      }),
                      createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                        createVNode("div", { class: "slideshow__text-content classic middle" }, [
                          createVNode("div", { class: "container" }, [
                            createVNode("div", { class: "wrap-caption right" }, [
                              createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                              createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                              createVNode("span", { class: "" })
                            ])
                          ])
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
      _push(`</div></div><div class="absolute top-0 left-0 w-full h-screen bg-skin-fill dark:bg-gray-800 lg:hidden"><div class="hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] absolute bottom-[-100px] md:w-[800px] md:h-[750px] lg:top-[120px] lg:right-[-100px] xl:right-0 w-[500px] h-[500px] 2xl:w-[1026px] 2xl:h-[1026px]"><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:R65m:-gradient-1)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:R65m:-gradient-2)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg></div><div class="relative w-full lg:-mt-10" id="girl"><div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="absolute top-20 left-6 floating-4"><img class="h-12 bg-white rounded-lg bg-opacity-80 sm:h-16" src="/canva/feedback.png"></div><div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" class="absolute right-24 top-28 floating"><svg class="h-16 sm:h-24" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C"></rect></g><rect x="51.35" y="44.075" width="47.3" height="44.85" rx="8" fill="white"></rect><path d="M74.5 54.425V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"></path><path d="M65.875 58.7375L65.875 78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"></path><path d="M83.125 63.9125V78.575" stroke="#F25471" stroke-width="4" stroke-linecap="round"></path><defs><filter id="filter0_d" x="0" y="0" width="149" height="149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="8"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg></div></div></div><div data-aos="fade-right" data-aos-duration="800" class="absolute top-0 left-0 z-50 px-6 py-8 mt-8 lg:col-span-6 lg:py-12 md:mb-8 xl:place-self-center xl:mt-0 lg:mb-0 lg:w-1/2"><div class="pt-[8rem] px-1"><h1 class="text-3xl font-bold text-center text-white md:text-3xl xl:text-5xl lg:text-left"> Votre satisfaction dans nos services Freelance <br></h1>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></div><div id="features" class="bg-gray-100 dark:bg-gray-900"><div data-aos="" class="z-10 max-w-6xl px-8 py-8 mx-auto overflow-hidden md:px-6"><div class="flex"><div data-aos="fade-up" data-aos-duration="500" class="w-full lg:w-5/12"><h1 class="text-slate-800 mb-4 dark:text-white text-2xl font-bold leading-snug lg:text-[40px] xl:text-[42px]"> Atteignez vos objectifs plus rapidement avec <span class="text-amber-600">FIND</span></h1><div class="grid grid-cols-1 gap-2 mx-auto md:mx-0 md:grid-cols-2"><a href="find-freelance" class="w-10/12 rounded-md mx-auto text-center bg-amber-600 px-8 py-2.5 font-semibold text-white shadow-md shadow-amber-500/20 hover:bg-amber-700 duration-200 sm:w-auto">Trouver un freelance</a><a href="registration" class="mt-4 md:mt-0 mx-auto text-center box-border w-10/12 rounded-md border border-amber-500/20 px-8 py-2.5 font-semibold text-amber-600 shadow-md shadow-amber-500/10 hover:bg-gray-100 duration-200">Dévenir freelance</a></div><div class="mt-4 mb-2 text-center"><h1 class="text-xl text-gray-500">Nos partenaires</h1></div><div class="grid grid-cols-2 gap-6 mx-6 mt-6 md:mx-0 px-auto md:gap-2 md:grid-cols-3"><img src="/images/brand/brand (1).png" alt="brand" class="w-32 h-16 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer bg-gray-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95 sm:w-36"><img src="/images/brand/influeworld.png" alt="brand" class="w-32 h-16 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer bg-gray-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95 sm:w-36"><img src="/images/brand/influnet2.jpg" alt="brand" class="w-32 h-16 px-5 py-3 bg-white border rounded-lg shadow-md cursor-pointer duration border-blue-300/20 shadow-blue-500/5 hover:scale-95 sm:w-36"><img src="/images/brand/udemy.PNG" alt="brand" class="w-32 h-16 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer bg-gray-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95 sm:w-36"><img src="/images/brand/microsoft.svg" alt="brand" class="w-32 h-16 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer bg-gray-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95 sm:w-36"><img src="/images/brand/airbnb.svg" alt="brand" class="w-32 h-16 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer bg-gray-50 md:h-none border-blue-300/20 shadow-blue-500/5 hover:scale-95 sm:w-36"></div></div><div class="hidden px-4 lg:block lg:w-1/12"></div><div data-aos="fade-left" data-aos-duration="500" class="hidden w-full px-4 lg:block md:w-6/12"><div class="lg:ml-auto lg:text-right"><div class="relative z-10 inline-block pt-11 lg:pt-0"><img src="/images/hero/women.jpeg" alt="hero div img" class="w-3/4 rounded-full lg:ml-auto"></div></div></div></div></div></div><div id="talkAbout" class="bg-white dark:bg-gray-800 lg:min-h-screen"><div class="container max-w-6xl p-4 m-4 mx-auto md:p-6"><div class="mb-10 text-center"><span class="font-medium text-amber-600">Presentation</span><h1 class="text-2xl font-bold text-slate-700 dark:text-gray-200">Ils en Parlent mieux Que nous</h1></div><div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "flex py-8",
        modules: [unref(Navigation), unref(Pagination), unref(Scrollbar), unref(EffectCube), unref(A11y)],
        effect: "cube",
        spaceBetween: 30,
        "slides-per-view": 1,
        "space-between": 25,
        pagination: { clickable: true }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "mb-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="!bg-transparent px-2 md:px-0"${_scopeId2}><div class="px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-800 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12"${_scopeId2}><div class="grid md:grid-cols-5"${_scopeId2}><div class="w-full m-2 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl"${_scopeId2}><iframe class="rounded-sm w-11/2 h-9/12 aspect-video hover:aspect-square" src="https://www.youtube.com/embed/rw_3Yv-rhZM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen${_scopeId2}></iframe></div><div class="p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8"${_scopeId2}><div class="w-20 mx-auto"${_scopeId2}><img src="images/brand/influnet.jpg" alt="company logo" loading="lazy"${_scopeId2}></div><p class="dark:text-gray-200"${_scopeId2}><span class="font-serif"${_scopeId2}></span> Find est une plateforme incontournable pour tous les demandeurs de services. J&#39;ai été impressionné par la qualité des freelances proposés. <span class="font-serif"${_scopeId2}>&quot;</span></p><h6 class="text-lg font-semibold leading-none dark:text-gray-200"${_scopeId2}>Georges Mk</h6></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "!bg-transparent px-2 md:px-0" }, [
                      createVNode("div", { class: "px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-800 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12" }, [
                        createVNode("div", { class: "grid md:grid-cols-5" }, [
                          createVNode("div", { class: "w-full m-2 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl" }, [
                            createVNode("iframe", {
                              class: "rounded-sm w-11/2 h-9/12 aspect-video hover:aspect-square",
                              src: "https://www.youtube.com/embed/rw_3Yv-rhZM",
                              frameborder: "0",
                              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowfullscreen: ""
                            })
                          ]),
                          createVNode("div", { class: "p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8" }, [
                            createVNode("div", { class: "w-20 mx-auto" }, [
                              createVNode("img", {
                                src: "images/brand/influnet.jpg",
                                alt: "company logo",
                                loading: "lazy"
                              })
                            ]),
                            createVNode("p", { class: "dark:text-gray-200" }, [
                              createVNode("span", { class: "font-serif" }),
                              createTextVNode(" Find est une plateforme incontournable pour tous les demandeurs de services. J'ai été impressionné par la qualité des freelances proposés. "),
                              createVNode("span", { class: "font-serif" }, '"')
                            ]),
                            createVNode("h6", { class: "text-lg font-semibold leading-none dark:text-gray-200" }, "Georges Mk")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "mb-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="!bg-transparent px-2 md:px-0"${_scopeId2}><div class="px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-800 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12"${_scopeId2}><div class="grid md:grid-cols-5"${_scopeId2}><div class="w-full m-2 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl"${_scopeId2}><iframe class="rounded-sm w-11/2 h-9/12 aspect-video hover:aspect-square" src="https://www.youtube.com/embed/rw_3Yv-rhZM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen${_scopeId2}></iframe></div><div class="p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8"${_scopeId2}><div class="w-20 mx-auto"${_scopeId2}><img src="images/brand/influnet.jpg" alt="company logo" loading="lazy"${_scopeId2}></div><p class="dark:text-gray-200"${_scopeId2}><span class="font-serif"${_scopeId2}></span> Find est un outil essentiel pour tous ceux qui cherchent à trouver des freelances qualifiés. La plateforme est vraiment bien conçue et facile à utiliser <span class="font-serif"${_scopeId2}>&quot;</span></p><h6 class="text-lg font-semibold leading-none dark:text-gray-200"${_scopeId2}>Ulrich Lukemba</h6></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "!bg-transparent px-2 md:px-0" }, [
                      createVNode("div", { class: "px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-800 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12" }, [
                        createVNode("div", { class: "grid md:grid-cols-5" }, [
                          createVNode("div", { class: "w-full m-2 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl" }, [
                            createVNode("iframe", {
                              class: "rounded-sm w-11/2 h-9/12 aspect-video hover:aspect-square",
                              src: "https://www.youtube.com/embed/rw_3Yv-rhZM",
                              frameborder: "0",
                              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowfullscreen: ""
                            })
                          ]),
                          createVNode("div", { class: "p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8" }, [
                            createVNode("div", { class: "w-20 mx-auto" }, [
                              createVNode("img", {
                                src: "images/brand/influnet.jpg",
                                alt: "company logo",
                                loading: "lazy"
                              })
                            ]),
                            createVNode("p", { class: "dark:text-gray-200" }, [
                              createVNode("span", { class: "font-serif" }),
                              createTextVNode(" Find est un outil essentiel pour tous ceux qui cherchent à trouver des freelances qualifiés. La plateforme est vraiment bien conçue et facile à utiliser "),
                              createVNode("span", { class: "font-serif" }, '"')
                            ]),
                            createVNode("h6", { class: "text-lg font-semibold leading-none dark:text-gray-200" }, "Ulrich Lukemba")
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
              createVNode(unref(SwiperSlide), { class: "mb-8" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "!bg-transparent px-2 md:px-0" }, [
                    createVNode("div", { class: "px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-800 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12" }, [
                      createVNode("div", { class: "grid md:grid-cols-5" }, [
                        createVNode("div", { class: "w-full m-2 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl" }, [
                          createVNode("iframe", {
                            class: "rounded-sm w-11/2 h-9/12 aspect-video hover:aspect-square",
                            src: "https://www.youtube.com/embed/rw_3Yv-rhZM",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: ""
                          })
                        ]),
                        createVNode("div", { class: "p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8" }, [
                          createVNode("div", { class: "w-20 mx-auto" }, [
                            createVNode("img", {
                              src: "images/brand/influnet.jpg",
                              alt: "company logo",
                              loading: "lazy"
                            })
                          ]),
                          createVNode("p", { class: "dark:text-gray-200" }, [
                            createVNode("span", { class: "font-serif" }),
                            createTextVNode(" Find est une plateforme incontournable pour tous les demandeurs de services. J'ai été impressionné par la qualité des freelances proposés. "),
                            createVNode("span", { class: "font-serif" }, '"')
                          ]),
                          createVNode("h6", { class: "text-lg font-semibold leading-none dark:text-gray-200" }, "Georges Mk")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "mb-8" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "!bg-transparent px-2 md:px-0" }, [
                    createVNode("div", { class: "px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-800 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12" }, [
                      createVNode("div", { class: "grid md:grid-cols-5" }, [
                        createVNode("div", { class: "w-full m-2 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl" }, [
                          createVNode("iframe", {
                            class: "rounded-sm w-11/2 h-9/12 aspect-video hover:aspect-square",
                            src: "https://www.youtube.com/embed/rw_3Yv-rhZM",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: ""
                          })
                        ]),
                        createVNode("div", { class: "p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8" }, [
                          createVNode("div", { class: "w-20 mx-auto" }, [
                            createVNode("img", {
                              src: "images/brand/influnet.jpg",
                              alt: "company logo",
                              loading: "lazy"
                            })
                          ]),
                          createVNode("p", { class: "dark:text-gray-200" }, [
                            createVNode("span", { class: "font-serif" }),
                            createTextVNode(" Find est un outil essentiel pour tous ceux qui cherchent à trouver des freelances qualifiés. La plateforme est vraiment bien conçue et facile à utiliser "),
                            createVNode("span", { class: "font-serif" }, '"')
                          ]),
                          createVNode("h6", { class: "text-lg font-semibold leading-none dark:text-gray-200" }, "Ulrich Lukemba")
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
      _push(`</div></div></div><div id="monde2" class="bg-white lg:min-h-screen dark:bg-gray-900"><div class="p-4"><div class="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16"><div class="flex-row-reverse justify-center p-4 space-y-6 bg-gray-100 rounded-lg dark:bg-gray-800 lg:p-16 md:flex md:gap-6 md:space-y-0 lg:items-center"><div data-aos="flip-left" data-aos-duration="500" class="md:5/12 lg:w-1/2"><img src="/images/services/presentation3.png" alt="image" class="rounded-lg dark:bg-gray-800 floating bg-skin-fill" loading="lazy" width="" height=""></div><div data-aos="fade-right" data-aos-duration="300" class="md:7/12 lg:w-1/2"><h2 class="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white"> Trouvez dès aujourd&#39;hui la personne idéale pour votre projet ! </h2><p class="my-4 text-gray-600 dark:text-gray-300"></p><div class="space-y-4 divide-y divide-gray-100 dark:divide-gray-800"><div class="flex gap-4 mt-4 md:items-center"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">`);
      _push(ssrRenderComponent(_component_ion_icon, {
        class: "text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2",
        name: "checkbox-outline"
      }, null, _parent));
      _push(`</div><div class="w-5/6"><h4 class="text-lg font-semibold text-gray-700 dark:text-indigo-300">Des services de haute qualité pour un prix équitable</h4><p class="text-gray-500 dark:text-gray-50">Mettez la main sur d&#39;excellents services a bon prix . Une taxation en fonction de la demande de service</p></div></div><div class="flex gap-4 pt-2 md:items-center"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">`);
      _push(ssrRenderComponent(_component_ion_icon, {
        class: "text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2",
        name: "document-text-outline"
      }, null, _parent));
      _push(`</div><div class="w-5/6"><h4 class="text-lg font-semibold text-gray-700 dark:text-teal-300">Des services efficacement fait</h4><p class="text-gray-500 dark:text-gray-50">Decouvrez les freelancers qui convient afin de travailler avec vous</p></div></div><div class="flex gap-4 mt-4 md:items-center"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">`);
      _push(ssrRenderComponent(_component_ion_icon, {
        class: "text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2",
        name: "cash-outline"
      }, null, _parent));
      _push(`</div><div class="w-5/6"><h4 class="text-lg font-semibold text-gray-700 dark:text-indigo-300">Des Paiement protégés</h4><p class="text-gray-500 dark:text-gray-50">Assurez-vous de connaître le coût total dès le départ. Votre rémunération ne sera versée que lorsque vous aurez confirmé que le travail est satisfaisant.</p></div></div><div class="flex gap-4 pt-2 md:items-center"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">`);
      _push(ssrRenderComponent(_component_ion_icon, {
        class: "text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2",
        name: "call-outline"
      }, null, _parent));
      _push(`</div><div class="w-5/6"><h4 class="text-lg font-semibold text-gray-700 dark:text-teal-300">Une Assistance 24h/24 et 7j/7</h4><p class="text-gray-500 dark:text-gray-50">Des Questions ? notre equipe d&#39;assistance est disponible 24h/24 pour vous aider à tout moment et en tout lieu</p></div></div></div></div></div></div></div></div><div id="Services" class="bg-gray-100 lg:min-h-screen dark:bg-gray-800"><div class="max-w-6xl px-8 py-6 mx-auto md:px-6"><div class="mb-10 text-center"><span class="font-medium text-amber-600">Categories</span><h1 class="text-2xl font-bold text-slate-700 dark:text-gray-200 sm:text-xl">Découvrez les Services</h1></div><div class="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 xl:gap-8"><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<div><a href="" class="flex flex-col items-center px-2 py-4 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"><img src="" class="w-20 h-20 rounded-md" alt=""><h4 class="mt-3 mb-1 md:text-[20px] text-[16px] font-semibold text-slate-600 duration-200 group-hover:text-white">${ssrInterpolate(category.name)}</h4></a></div>`);
      });
      _push(`<!--]--></div></div></div><div id="confiance" class="bg-white"><div class="px-4 py-4 mx-auto sm:mx-2 md:px-auto"><div class="container text-gray-600 dark:text-gray-300"><div class="mb-10 text-center"><span class="font-medium text-amber-600">Comentaire</span><h1 class="text-2xl font-bold text-slate-700 dark:text-gray-200 sm:text-xl">Ils avaient confiance en nous</h1></div><div class="container flex flex-col mx-auto my-10 overflow-hidden shadow-sm md:my-24 md:flex-row"><div class="relative flex flex-col justify-center w-full py-2 bg-indigo-700 md:py-24 md:w-1/2 item-center"><div class="absolute top-0 left-0 z-10 w-16 h-16 grid-indigo md:w-40 md:h-40 md:ml-20 md:mt-24"></div><div class="relative z-20 px-6 py-2 mb-0 text-2xl font-semibold leading-tight tracking-tight text-indigo-100 md:text-5xl md:py-6 md:px-1 md:w-64 md:mx-auto"><span class="md:block">Ce que</span><span class="md-block">disent</span><span class="block">nos clients !</span></div><div class="absolute bottom-0 right-0 hidden mb-4 mr-4 md:block"><button class="w-12 h-10 font-bold text-gray-500 bg-gray-100 border-r rounded-l-full focus:outline-none hover:text-indigo-500"> ← </button><button class="w-12 h-10 font-bold text-gray-500 bg-gray-100 rounded-r-full focus:outline-none hover:text-indigo-500"> → </button></div></div><div class="bg-gray-100 md:w-1/2"><div class="relative flex flex-col h-full"><div class="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12"><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-indigo-200 fill-current md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"></path></svg></div><div class="relative z-10 h-full"><div style="${ssrRenderStyle(testimonialActive.value === 1 ? null : { display: "none" })}"><p class="px-6 py-6 text-xl italic font-normal text-gray-600 serif md:px-16 md:py-10 md:text-2xl" x-show.transition="testimonialActive == 1"> Votre plateforme m&#39;a permis de trouver rapidement et facilement le freelance idéal pour mon projet. C&#39;était vraiment simple à utiliser et j&#39;ai apprécié la transparence dans le processus de sélection.&quot; </p></div><div style="${ssrRenderStyle(testimonialActive.value === 2 ? null : { display: "none" })}"><p class="px-6 py-6 text-xl italic font-normal text-gray-600 serif md:px-16 md:py-10 md:text-2xl" x-show.transition="testimonialActive == 2"> Je suis très satisfaite des résultats que j&#39;ai obtenus grâce à votre plateforme. J&#39;ai pu trouver un freelance expérimenté qui a su répondre parfaitement à mes besoins et à mes attentes. </p></div><div style="${ssrRenderStyle(testimonialActive.value === 3 ? null : { display: "none" })}"><p class="px-6 py-6 text-xl italic font-normal text-gray-600 serif md:px-16 md:py-10 md:text-2xl" x-show.transition="testimonialActive == 3"> Je recommande vivement votre plateforme à tous ceux qui cherchent à trouver des freelances de qualité. J&#39;ai été très satisfait des résultats obtenus et je n&#39;hésiterai pas à utiliser à nouveau votre service à l&#39;avenir. </p></div></div><div class="flex items-center justify-center my-4"><button class="${ssrRenderClass([{ "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600": testimonialActive.value != 1, "h-16 w-16 opacity-100 bg-indigo-600 text-white": testimonialActive.value == 1 }, "inline-block mx-2 font-bold text-center rounded-full shadow-xs focus:outline-none focus:shadow-outline"])}">JD</button><button class="${ssrRenderClass([{ "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600": testimonialActive.value != 2, "h-16 w-16 opacity-100 bg-indigo-600 text-white": testimonialActive.value == 2 }, "inline-block w-16 h-16 mx-2 font-bold text-center bg-indigo-600 rounded-full shadow-xs focus:outline-none focus:shadow-outline"])}">WM</button><button class="${ssrRenderClass([{ "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600": testimonialActive.value != 3, "h-16 w-16 opacity-100 bg-indigo-600 text-white": testimonialActive.value == 3 }, "inline-block w-12 h-12 mx-2 font-bold text-center bg-indigo-600 rounded-full shadow-xs focus:outline-none focus:shadow-outline"])}">JW</button></div><div class="flex justify-center px-6 pt-2 pb-6 md:py-6"><div class="text-center" style="${ssrRenderStyle(testimonialActive.value == 1 ? null : { display: "none" })}"><h2 class="text-sm font-bold leading-tight text-gray-700 md:text-base">Jean Dongo</h2><small class="text-xs text-gray-500 truncate md:text-sm">CEO, ABC Inc.</small></div><div class="text-center" style="${ssrRenderStyle(testimonialActive.value == 2 ? null : { display: "none" })}"><h2 class="text-sm font-bold leading-tight text-gray-700 md:text-base">William Muka </h2><small class="text-xs text-gray-500 truncate md:text-sm">CTO, Ack Corp.</small></div><div class="text-center" style="${ssrRenderStyle(testimonialActive.value == 3 ? null : { display: "none" })}"><h2 class="text-sm font-bold leading-tight text-gray-700 md:text-base">John Wata</h2><small class="text-xs text-gray-500 truncate md:text-sm">Product Manager, Fortran Corp.</small></div></div></div></div></div></div></div></div><div id="presentation" class="bg-gray-100 dark:bg-gray-950 lg:min-h-screen"><div class="max-w-6xl px-8 py-6 mx-auto md:px-4"><div class="mb-10 text-center"><span class="font-medium text-amber-600">Decouverte</span><h1 class="text-2xl font-bold text-slate-700 sm:text-3xl">FIND </h1></div><div class="flex flex-col"><div data-aos="fade-in" data-aos-duration="500" class="grid gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 xl:gap-8"><div class="flex flex-col items-center w-full px-8 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-gray-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600">`);
      _push(ssrRenderComponent(_component_ion_icon, {
        name: "people-outline",
        class: "text-[55px] text-amber-600 duration-200 group-hover:text-white"
      }, null, _parent));
      _push(`<h4 class="mt-3 mb-1 text-[20px] font-semibold text-slate-600 dark:text-white duration-200 group-hover:text-white"> +200 Freelance</h4></div><div class="flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl dark:bg-gray-800 border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600">`);
      _push(ssrRenderComponent(_component_ion_icon, {
        name: "bag-check-outline",
        class: "text-[55px] text-amber-600 duration-200 group-hover:text-white"
      }, null, _parent));
      _push(`<h4 class="mt-3 mb-1 text-[20px] font-semibold dark:text-white text-slate-600 duration-200 group-hover:text-white"> 500 Marchés </h4></div><div class="flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-gray-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600">`);
      _push(ssrRenderComponent(_component_ion_icon, {
        name: "albums-outline",
        class: "text-[55px] text-amber-600 duration-200 group-hover:text-white"
      }, null, _parent));
      _push(`<h4 class="mt-3 mb-1 text-[20px] font-semibold text-slate-600 duration-200 group-hover:text-white dark:text-white"> +10 Categories </h4></div></div><div class="p-2 bg-white border border-gray-100 dark:border-gray-700 rounded-3xl dark:bg-gray-800 dark:shadow-none md:mx-auto lg:w-10/12 xl:w-8/12"><div class="flex flex-col px-2 py-4 md:py-6"><div class="space-y-6 py-auto justify md:col-span-2 sm:p-8"><div class="px-6"><h1 class="mt-4 text-xl font-semibold text-center text-gray-800 dark:text-white">Comment S&#39;inscrire comme <span class="text-amber-800 dark:text-white">Freelance ?</span></h1></div><p class="mt-2 text-lg leading-none text-center text-gray-700 text-md dark:text-white"><span class="font-serif">&quot;</span> Apprenez à utiliser la Plateforme FIND à l&#39;aide de ces tutoriels. <span class="font-serif">&quot;</span></p></div><div class="order-2 w-full h-48 mx-2 my-4 aspect-w-16 aspect-h-9 md:col-span-3 rounded-2xl"><iframe class="w-full h-full aspect-video" src="https://www.youtube.com/embed/rw_3Yv-rhZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div></div></div></div></div><div id="faqs" class="bg-white lg:min-h-screen dark:bg-gray-800 dark:text-white"><div class="px-8 py-6 mx-auto max-w-7xl md:px-6"><div class="mb-10 text-center"><span class="font-medium text-amber-600">FAQs</span><h1 class="text-2xl font-bold dark:text-gray-50 text-slate-700 sm:text-3xl">FAQs </h1></div><div class="grid sm:grid-cols-2"><div data-aos="fade-right" data-aos-duration="1000" class="w-full px-4"><img src="/images//services/faq.png" alt="hero div img" class="rounded-full lg:ml-auto"></div><div class="w-full lg:w-11/12"><div class="px-1 py-2 text-gray-800"><div class="mt-6 text-lg leading-loose"><div><!--[-->`);
      ssrRenderList(faqs.value, (faq, index) => {
        _push(`<div><button class="${ssrRenderClass([index !== faqs.value.length - 1 && "border-b border-gray-400", "flex items-center justify-between w-full py-3 mt-4 font-bold text-gray-800 border-b dark:text-white"])}"><div class="text-left">${ssrInterpolate(faq.question)}</div><svg style="${ssrRenderStyle(!faq.isOpen ? null : { display: "none" })}" class="fill-current" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"></path></svg><svg style="${ssrRenderStyle(faq.isOpen ? null : { display: "none" })}" class="fill-current" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"></path></svg></button>`);
        _push(ssrRenderComponent(unref(Collapse), {
          when: faq.isOpen,
          class: "collapse"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="mt-2 text-sm text-gray-800 dark:text-white"${_scopeId}>${ssrInterpolate(faq.answer)}</p>`);
            } else {
              return [
                createVNode("p", { class: "mt-2 text-sm text-gray-800 dark:text-white" }, toDisplayString(faq.answer), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

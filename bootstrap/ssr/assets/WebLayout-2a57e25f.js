import { onMounted, withCtx, createVNode, openBlock, createBlock, createTextVNode, createCommentVNode, withModifiers, useSSRContext, ref, computed, resolveComponent, mergeProps, unref, toDisplayString, withDirectives, vShow, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Link, Head } from "@inertiajs/vue3";
import { useDark, useToggle } from "@vueuse/core";
import { usePrimeVue } from "primevue/config/config.esm.js";
import { a as useCategoryStore, c as useSubcategoriesStore } from "./store-0ea3a1d1.js";
import { a as _sfc_main$4, b as _sfc_main$5 } from "./ResponsiveNavLink-cc961511.js";
import { Collapse } from "vue-collapsed";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$3 = {
  __name: "userInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const PrimeVue = usePrimeVue();
    const isDark = useDark();
    useToggle(isDark);
    const toggleTheme = (current) => {
      let nextTheme = "lara-light-blue";
      if (current === "lara-light-blue")
        nextTheme = "lara-dark-blue";
      else if (current === "lara-dark-blue")
        nextTheme = "lara-light-blue";
      PrimeVue.changeTheme(current, nextTheme, "light", () => {
      });
      console.log(current, nextTheme);
    };
    onMounted(() => {
      if (isDark.value) {
        toggleTheme("lara-light-blue");
      } else {
        toggleTheme("lara-dark-blue");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"${_scopeId}>`);
            if (_ctx.$page.props.auth.user.profile_photo_path != null) {
              _push2(`<div${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></div>`);
            } else {
              _push2(`<div${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></div>`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300" }, [
                _ctx.$page.props.auth.user.profile_photo_path != null ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("img", {
                    class: "object-cover w-8 h-8 rounded-full",
                    src: "/storage/" + _ctx.$page.props.auth.user.profile_photo_path,
                    alt: _ctx.$page.props.auth.user.name
                  }, null, 8, ["src", "alt"])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("img", {
                    class: "object-cover w-8 h-8 rounded-full",
                    src: _ctx.$page.props.auth.user.profile_photo_url,
                    alt: _ctx.$page.props.auth.user.name
                  }, null, 8, ["src", "alt"])
                ]))
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Account </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              href: _ctx.route("user.dashboard")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dashboard `);
                } else {
                  return [
                    createTextVNode(" Dashboard ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasApiFeatures) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` API Tokens `);
                  } else {
                    return [
                      createTextVNode(" API Tokens ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t border-gray-200"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, { as: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Account "),
              createVNode(_sfc_main$5, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$5, {
                href: _ctx.route("user.dashboard")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Dashboard ")
                ]),
                _: 1
              }, 8, ["href"]),
              _ctx.$page.props.jetstream.hasApiFeatures ? (openBlock(), createBlock(_sfc_main$5, {
                key: 0,
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx(() => [
                  createTextVNode(" API Tokens ")
                ]),
                _: 1
              }, 8, ["href"])) : createCommentVNode("", true),
              createVNode("div", { class: "border-t border-gray-200" }),
              createVNode("form", {
                onSubmit: withModifiers(_ctx.logout, ["prevent"])
              }, [
                createVNode(_sfc_main$5, { as: "button" }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out ")
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/userInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar_vue_vue_type_style_index_0_scoped_a8c0d76d_lang = "";
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    usePrimeVue();
    const page = usePage();
    const isDark = useDark();
    useToggle(isDark);
    console.log(isDark.value);
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
      if (window.innerWidth > 1199) {
        if (window.scrollY > 145) {
          isSticky.value = true;
        } else {
          isSticky.value = false;
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartComponent = resolveComponent("CartComponent");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-[100]" }, _attrs))} data-v-a8c0d76d><div class="${ssrRenderClass([[
        isSticky.value ? "stickyNav fadeInDown  dark:text-white fadeInDown dark:bg-gray-800" : "",
        _ctx.$page.url === "/" ? "" : "dark:bg-gray-800 bg-white"
      ], "flex header-wrap !z-[100] classicHeader animated"])}" data-v-a8c0d76d><div class="w-full px-4 lg:px-12" data-v-a8c0d76d><div class="grid items-center justify-between w-full grid-cols-12 lg:mx-auto" data-v-a8c0d76d><div class="hidden logo md:col-span-2 lg:block" data-v-a8c0d76d><a href="" data-v-a8c0d76d><img src="/images/logo/find_02.png" class="hidden w-20 lg:block" alt="FInd" title="Find" data-v-a8c0d76d></a></div><div class="col-span-3 lg:col-span-8" data-v-a8c0d76d><div class="block lg:hidden" data-v-a8c0d76d><button class="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" x-bind:aria-label="navOpen ? &#39;Close main menu&#39; : &#39;Main menu&#39;" x-bind:aria-expanded="navOpen" data-v-a8c0d76d><svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" data-v-a8c0d76d><path class="${ssrRenderClass([{ "hidden": navOpen.value, "inline-flex": !navOpen.value }, "inline-flex"])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-a8c0d76d></path><path class="${ssrRenderClass([{ "hidden": !navOpen.value, "inline-flex": navOpen.value }, "hidden"])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-a8c0d76d></path></svg></button></div><nav class="relative grid__item" id="AccessibleNav" data-v-a8c0d76d><ul id="siteNav" class="site-nav medium center hidearrow" data-v-a8c0d76d><li class="lvl1 parent megamenu" data-v-a8c0d76d>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ "text-white ": !isSticky.value && !isNotHome.value, "lg:hidden dark:!text-white": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d${_scopeId}>Accueil</span><span class="${ssrRenderClass([{ "hidden dark:!text-white": !isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d${_scopeId}>Accueil</span>`);
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
      _push(`</li><li class="lvl1 parent z-[60] megamenu" data-v-a8c0d76d><a href="" data-v-a8c0d76d><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d>Categories</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d>Categories</span></a><div class="megamenu z-50 dark:!bg-gray-800 !pb-12 style4 soft-scrollbar" data-v-a8c0d76d><div data-v-a8c0d76d>`);
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
      _push(`</div><ul class="grid grid-cols-4 dark:!text-white rounded-md grid--uniform mmWrapper" data-v-a8c0d76d><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<li class="grid__item lvl-1 col-md-3 col-lg-3" data-v-a8c0d76d>`);
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
        _push(`<ul class="subLinks" data-v-a8c0d76d><!--[-->`);
        ssrRenderList(category.subcategories, (subcategory, index) => {
          _push(`<li class="lvl-2 dark:!text-white" data-v-a8c0d76d>`);
          if (index < 5) {
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
      _push(`<!--]--></ul></div></li><li class="lvl1 parent dropdown" data-v-a8c0d76d><a href="" data-v-a8c0d76d><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:text-black lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d>Freelance</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d>Freelance</span></a><ul class="dropdown" data-v-a8c0d76d><li data-v-a8c0d76d>`);
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
      _push(`</li><li data-v-a8c0d76d>`);
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
      _push(`</li></ul></li><li class="lvl1 parent dropdown" data-v-a8c0d76d><a href="#" data-v-a8c0d76d><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d>Mission</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d>Mission</span></a><ul class="dropdown" data-v-a8c0d76d><li data-v-a8c0d76d>`);
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
      _push(`</li></ul></li><li class="lvl1 parent dropdown" data-v-a8c0d76d>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("Allservices")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d${_scopeId}>Services</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d${_scopeId}>Services</span>`);
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
      _push(`</li><li class="lvl1 parent dropdown" data-v-a8c0d76d>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d${_scopeId}>Services</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-a8c0d76d${_scopeId}>Services</span>`);
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
      _push(`<ul class="dropdown" data-v-a8c0d76d><li data-v-a8c0d76d>`);
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
      _push(`</li><li data-v-a8c0d76d>`);
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
      _push(`</li><li data-v-a8c0d76d>`);
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
      _push(`</li><li data-v-a8c0d76d>`);
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
        _push(`<div class="absolute z-50 hidden w-full h-16 mx-auto right-4 top-16" data-v-a8c0d76d><div class="w-full h-24 max-w-5xl mx-auto mt-4 bg-red-300" data-v-a8c0d76d></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block col-span-6 mx-auto lg:col-span-2 lg:hidden mobile-logo" data-v-a8c0d76d><div class="logo" data-v-a8c0d76d>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img style="${ssrRenderStyle(!isNotHome.value ? null : { display: "none" })}" class="flex w-20 dark:hidden" src="/images/logo/find_03.png" alt="logo-find" data-v-a8c0d76d${_scopeId}><img style="${ssrRenderStyle(isNotHome.value ? null : { display: "none" })}" src="/images/logo/find_02.png" alt="logo-find" class="w-24" data-v-a8c0d76d${_scopeId}><img style="${ssrRenderStyle(!isNotHome.value ? null : { display: "none" })}" class="hidden w-24 dark:flex" src="/images/logo/find_02.png" alt="logo-find" data-v-a8c0d76d${_scopeId}>`);
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
      _push(`</div></div><div class="flex items-center justify-end col-span-3 gap-2 lg:col-span-2" data-v-a8c0d76d>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<div class="flex items-center gap-4" data-v-a8c0d76d>`);
        _push(ssrRenderComponent(_component_CartComponent, null, null, _parent));
        _push(`<div class="hidden site-cart" data-v-a8c0d76d><button type="button" class="search-trigger" data-v-a8c0d76d><svg style="${ssrRenderStyle(isNotHome.value ? null : { display: "none" })}" class="${ssrRenderClass([isSticky.value ? "dark:!text-white" : "!text-white dark:!text-white", "hidden w-5 h-5 lg:block"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a8c0d76d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-a8c0d76d></path></svg><svg style="${ssrRenderStyle(!isNotHome.value ? null : { display: "none" })}" class="hidden w-5 h-5 lg:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a8c0d76d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-a8c0d76d></path></svg><svg class="block w-5 h-5 text-gray-700 dark:text-white lg:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a8c0d76d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-a8c0d76d></path></svg></button></div><div class="hidden lg:block" data-v-a8c0d76d>`);
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.$page.props.auth.user) {
        _push(`<div class="flex items-center gap-6" data-v-a8c0d76d>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("login"),
          class: "hidden px-4 text-base text-white lg:flex",
          to: "/login"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` connexion `);
            } else {
              return [
                createTextVNode(" connexion ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("register"),
          class: "relative items-center justify-center hidden w-full h-12 px-8 mx-auto rounded-full lg:flex bg-skin-fill group dark:bg-skin-fill hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="relative text-base font-semibold text-white dark:text-white underline-none" data-v-a8c0d76d${_scopeId}>S&#39;inscrire</span>`);
            } else {
              return [
                createVNode("span", { class: "relative text-base font-semibold text-white dark:text-white underline-none" }, "S'inscrire")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("register"),
          class: "relative flex items-center justify-center h-10 px-4 mx-auto mr-4 text-sm duration-300 rounded-md lg:hidden bg-gray-50 before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="relative text-base font-semibold text-amber-600" data-v-a8c0d76d${_scopeId}>S&#39;inscrire</span>`);
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
      ])}" class="fixed inset-0 z-[400] bg-black bg-opacity-20 lg:hidden" data-v-a8c0d76d></div>`);
      if (navOpen.value) {
        _push(`<div style="${ssrRenderStyle({ "backdrop-filter": "blur(14px)", "-webkit-backdrop-filter": "blur(14px)" })}" class="fixed inset-0 bottom-0 left-0 z-[500] w-10/12 overflow-auto origin-left transform shadow-lg bg-gray-50 dark:bg-gray-800 custom-scrollbar lg:hidden" data-v-a8c0d76d><div class="sticky top-0 z-20 flex justify-between h-24 p-2 bg-white border-b border-gray-700 dark:bg-gray-800 dark:border-gray-300" data-v-a8c0d76d><div class="flex p-3 mx-1" data-v-a8c0d76d>`);
        if (_ctx.$page.props.auth.user) {
          _push(`<div class="flex w-full text-left" data-v-a8c0d76d><div class="flex-shrink-0" data-v-a8c0d76d>`);
          if (_ctx.$page.props.auth.user.profile_photo_path != null) {
            _push(`<img class="w-12 h-12 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_path)} alt="" data-v-a8c0d76d>`);
          } else {
            _push(`<img class="w-16 h-16 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)} alt="" data-v-a8c0d76d>`);
          }
          _push(`</div><div class="px-4 py-3" data-v-a8c0d76d><span class="block text-base text-gray-800 truncate dark:text-white" data-v-a8c0d76d>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span></div></div>`);
        } else {
          _push(`<div data-v-a8c0d76d>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "relative flex items-center justify-center w-full h-12 px-8 mx-auto duration-300 rounded-full dark:border dark:border-white bg-skin-fill before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="relative text-base font-semibold text-white" data-v-a8c0d76d${_scopeId}>Connexion</span>`);
              } else {
                return [
                  createVNode("span", { class: "relative text-base font-semibold text-white" }, "Connexion")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div><div class="text-left" data-v-a8c0d76d><button class="btn btn-sm btn-circle btn-outline" data-v-a8c0d76d><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a8c0d76d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-a8c0d76d></path></svg></button></div></div><div class="p-4 overflow-auto custom-scrollbar" data-v-a8c0d76d><div class="flex flex-col" data-v-a8c0d76d><div class="flex-1 border-gray-800 dark:border-white custom-scrollbar" data-v-a8c0d76d><div class="pt-4 pb-3" data-v-a8c0d76d>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("home"),
          class: "flex flex-row items-center px-3 py-2 text-base font-medium text-gray-800 rounded-md dark:text-white focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a8c0d76d${_scopeId}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-v-a8c0d76d${_scopeId}></path><polyline points="9 22 9 12 15 12 15 22" data-v-a8c0d76d${_scopeId}></polyline></svg><span class="ml-2" data-v-a8c0d76d${_scopeId}>Accueil</span>`);
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
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-a8c0d76d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" data-v-a8c0d76d${_scopeId}></path></svg><span class="ml-2" data-v-a8c0d76d${_scopeId}>Devenir Prestataire</span>`);
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
        _push(`<div class="relative" data-v-a8c0d76d><button type="button" class="flex flex-row items-center w-full px-3 py-2 mt-1 text-lg font-medium text-left text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white focus:bg-amber-600" data-v-a8c0d76d><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-a8c0d76d><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" data-v-a8c0d76d></path></svg><span class="ml-2" data-v-a8c0d76d>Categories</span><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([{ "rotate-180": open.value, "rotate-0": !open.value }, "w-5 h-5 px-1 mt-1 transform"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a8c0d76d><polyline points="6 9 12 15 18 9" data-v-a8c0d76d></polyline></svg></button>`);
        _push(ssrRenderComponent(unref(Collapse), {
          when: open.value,
          class: "flex flex-col px-2 py-2 rounded-md shadow-xs bg-inherit"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.categories, (category) => {
                _push2(`<div data-v-a8c0d76d${_scopeId}><button class="flex items-center justify-between w-full px-3 py-2 mt-1 text-lg font-medium text-left text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white focus:bg-amber-600" data-v-a8c0d76d${_scopeId}><span class="ml-3" data-v-a8c0d76d${_scopeId}>${ssrInterpolate(category.name)}</span><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([{ "rotate-180": open.value, "rotate-0": !open.value }, "w-6 h-6 px-1 mt-1 transform"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a8c0d76d${_scopeId}><polyline points="6 9 12 15 18 9" data-v-a8c0d76d${_scopeId}></polyline></svg></button>`);
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
                      ssrRenderList(category.sub_categories, (subcategory) => {
                        _push3(`<div class="px-8" data-v-a8c0d76d${_scopeId2}>`);
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
                        (openBlock(true), createBlock(Fragment, null, renderList(category.sub_categories, (subcategory) => {
                          return openBlock(), createBlock("div", { class: "px-8" }, [
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
                          ]);
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
                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
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
                        (openBlock(true), createBlock(Fragment, null, renderList(category.sub_categories, (subcategory) => {
                          return openBlock(), createBlock("div", { class: "px-8" }, [
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
                          ]);
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
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-a8c0d76d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" data-v-a8c0d76d${_scopeId}></path></svg><span class="ml-2" data-v-a8c0d76d${_scopeId}>Services</span>`);
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
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-a8c0d76d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" data-v-a8c0d76d${_scopeId}></path></svg><span class="ml-2" data-v-a8c0d76d${_scopeId}>Trouver un Freelancer</span>`);
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
                createVNode("span", { class: "ml-2" }, "Trouver un Freelancer")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("createProject"),
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-a8c0d76d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" data-v-a8c0d76d${_scopeId}></path></svg><span class="ml-2" data-v-a8c0d76d${_scopeId}>Soumettre une mission</span>`);
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
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-a8c0d76d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" data-v-a8c0d76d${_scopeId}></path></svg><span class="ml-2" data-v-a8c0d76d${_scopeId}>Apropos</span>`);
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
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-a8c0d76d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" data-v-a8c0d76d${_scopeId}></path></svg><span class="ml-2" data-v-a8c0d76d${_scopeId}>Foire aux Questions</span>`);
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
        _push(`<button class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md dark:text-gray-50 hover:dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:dark:text-white focus:text-white" aria-label="Toggle color mode" data-v-a8c0d76d>`);
        if (!unref(isDark)) {
          _push(`<svg class="w-5 h-5 text-gray-800" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-a8c0d76d><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" data-v-a8c0d76d></path></svg>`);
        } else {
          _push(`<svg class="w-5 h-5 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-a8c0d76d><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" data-v-a8c0d76d></path></svg>`);
        }
        if (!unref(isDark)) {
          _push(`<span class="ml-2 text-gray-800" data-v-a8c0d76d>Sombre</span>`);
        } else {
          _push(`<span class="ml-2 text-gray-200" data-v-a8c0d76d>Clair</span>`);
        }
        _push(`</button></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
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
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a8c0d76d"]]);
const Footer_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const isOpen = ref(false);
    const isOpen2 = ref(false);
    const isOpen3 = ref(false);
    const isOpen4 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full bg-gray-900 lg:bg-base-200"><div class="text-white bg-gray-900 border-t border-gray-800 md:hidden"><div class="container flex flex-col p-4 mx-auto overflow-hidden lg:flex-row"><div class="w-full p-2 mx-auto"><div class="relative mb-3"><h6 class="mb-0"><button class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500" data-collapse-target="animated-collapse-1"><span>Categories</span><i class="${ssrRenderClass([isOpen.value ? "rotate-180 transition-transform" : "", "absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down"])}"></i></button></h6>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: isOpen.value,
        class: "px-6 overflow-hidden leading-normal collapse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="flex flex-col w-full px-4 space-y-2 text-left list-none list-inside text-gray-50"${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<li${_scopeId}><a href="" class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-200"${_scopeId}>${ssrInterpolate(category.name)}</a></li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", { class: "flex flex-col w-full px-4 space-y-2 text-left list-none list-inside text-gray-50" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                  return openBlock(), createBlock("li", null, [
                    createVNode("a", {
                      href: "",
                      class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-200"
                    }, toDisplayString(category.name), 1)
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
        class: "px-6 overflow-hidden leading-normal collapse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="flex flex-col w-full px-4 text-left list-none text-gray-50"${_scopeId}><li${_scopeId}><a href="" class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"${_scopeId}>Privacy Policy</a></li><li${_scopeId}><a href="" class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"${_scopeId}>Contact</a></li><li${_scopeId}><a href="" class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"${_scopeId}>Terms of Service</a></li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "flex flex-col w-full px-4 text-left list-none text-gray-50" }, [
                createVNode("li", null, [
                  createVNode("a", {
                    href: "",
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, "Privacy Policy")
                ]),
                createVNode("li", null, [
                  createVNode("a", {
                    href: "",
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, "Contact")
                ]),
                createVNode("li", null, [
                  createVNode("a", {
                    href: "",
                    class: "inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"
                  }, "Terms of Service")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative mb-3"><h6 class="mb-0"><button class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500" data-collapse-target="animated-collapse-1"><span>Guides</span><i class="${ssrRenderClass([isOpen3.value ? "rotate-180 transition-transform" : "", "absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down"])}"></i></button></h6>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: isOpen3.value,
        class: "px-6 overflow-hidden leading-normal collapse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="flex flex-col w-full px-4 font-thin text-left list-none text-gray-50"${_scopeId}><li${_scopeId}><a href="" class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"${_scopeId}>Freelance</a></li><li${_scopeId}><a href="" class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100"${_scopeId}> Mission</a></li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "flex flex-col w-full px-4 font-thin text-left list-none text-gray-50" }, [
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
      _push(`</div><div class="relative mb-3"><h6 class="mb-0"><button class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500" data-collapse-target="animated-collapse-1"><span>Freelance</span><i class="${ssrRenderClass([isOpen4.value ? "rotate-180 transition-transform" : "", "absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down"])}"></i></button></h6>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: isOpen4.value,
        class: "px-6 overflow-hidden leading-normal collapse"
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
      ssrRenderList(__props.categories, (category) => {
        _push(`<a href="" class="link link-hover">${ssrInterpolate(category.name)}</a>`);
      });
      _push(`<!--]--></div></div><div><span class="footer-title">Company</span><a href="" class="link link-hover">Apropos de nous </a><a href="" class="link link-hover">Contact</a><a href="" class="link link-hover">FaQ</a></div><div><span class="footer-title">Legal</span><a href="" class="link link-hover">Terms of use</a><a href="" class="link link-hover">Privacy policy</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WebLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "WebLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    useDark();
    const categories = computed(() => categoriesStore.categoriesGet.categories);
    const categoriesStore = useCategoryStore();
    const subcategoriesStore = useSubcategoriesStore();
    console.log(categories.value);
    onMounted(() => {
      subcategoriesStore.fetchSubCategories();
      categoriesStore.fetchCategories();
    });
    ref([
      { name: "Debutant", id: "Debutant" },
      { name: "intermediare", id: "intermediare" },
      { name: "Expert", id: "Expert" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden bg-white dark:bg-gray-800" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(`<div class="pageWrapper">`);
      _push(ssrRenderComponent(Navbar, { categories: categories.value }, null, _parent));
      _push(`<div id=""><main class="min-h-screen">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { categories: categories.value }, null, _parent));
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

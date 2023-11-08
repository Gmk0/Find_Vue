import { computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { u as useLayoutStore, _ as _sfc_main$3, a as useCategoryStore } from "./userInfo-9512d7bb.js";
import { _ as _sfc_main$4 } from "./MainSidebarF-6ccc8fef.js";
import { usePage, Link } from "@inertiajs/vue3";
const _sfc_main$2 = {
  __name: "SidebarPanelF",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const pageName = computed(() => {
      const url = page.url.replace("/", "").replace(/\//g, ".");
      return url;
    });
    console.log(pageName.value);
    const expandedItems = ref([]);
    useLayoutStore();
    const sidebarMenu = {
      title: "Applications",
      items: [
        {
          service: {
            title: "services",
            submenu: [
              {
                title: "Ajouter un service",
                route_name: "freelance.services.creation"
              },
              {
                title: "Liste service",
                route_name: "freelance.services"
              }
            ]
          },
          commandes: {
            title: "commandes",
            submenu: [
              {
                title: "vos commandes",
                route_name: "freelance.commandes"
              }
            ]
          },
          mission: {
            title: "Missions",
            submenu: [
              {
                title: "voir  les missions",
                route_name: "freelance.missions"
              },
              {
                title: "missions postuler",
                route_name: "freelance.missions.postuler"
              },
              {
                title: "missions en cours",
                route_name: "freelance.missions.accepter"
              }
            ]
          },
          transaction: {
            title: "transaction",
            submenu: [
              {
                title: "vos transactions",
                route_name: "freelance.transactions"
              }
            ]
          },
          Paiment: {
            title: "Paiments",
            submenu: [
              {
                title: "Paiments",
                route_name: "freelance.paiements"
              },
              {
                title: "Retrait",
                route_name: "freelance.paiements.retrait"
              },
              {
                title: "Releves",
                route_name: "freelance.paiements.releves"
              }
            ]
          },
          realisation: {
            title: "realisations",
            submenu: [
              {
                title: "vos realisations",
                route_name: "freelance.realisations"
              }
            ]
          },
          profile: {
            title: "profile",
            submenu: [
              {
                title: "Profile freelance",
                route_name: "freelance.profile"
              }
            ]
          }
        }
        // ... Autres éléments du menu
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-panel" }, _attrs))}><div class="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-gray-900"><div class="flex items-center justify-between w-full h-16 pl-4 pr-1"><p class="text-base tracking-wider text-slate-800 dark:text-navy-100">${ssrInterpolate(sidebarMenu.title)}</p><button class="p-0 text-blue-600 rounded-full h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button></div><div class="h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"><!--[-->`);
      ssrRenderList(sidebarMenu.items, (menuItems, key) => {
        _push(`<!--[-->`);
        if (key > 0) {
          _push(`<div class="h-px mx-4 my-3 bg-slate-200 dark:bg-navy-500"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="flex flex-col flex-1 px-4 font-inter"><!--[-->`);
        ssrRenderList(menuItems, (menu, keyMenu) => {
          _push(`<!--[-->`);
          if (menu.submenu) {
            _push(`<li><a class="${ssrRenderClass([{
              "text-slate-800 font-semibold dark:text-navy-50": expandedItems.value.includes(keyMenu),
              "text-slate-600 dark:text-navy-200": !expandedItems.value.includes(keyMenu)
            }, "flex items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"])}"><span>${ssrInterpolate(menu.title)}</span><svg class="${ssrRenderClass([{ "rotate-90": expandedItems.value.includes(keyMenu) }, "w-4 h-4 transition-transform ease-in-out text-slate-400"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>`);
            if (expandedItems.value.includes(keyMenu)) {
              _push(`<ul><!--[-->`);
              ssrRenderList(menu.submenu, (submenu, keySubMenu) => {
                _push(`<li>`);
                _push(ssrRenderComponent(unref(Link), {
                  href: _ctx.route(submenu.route_name),
                  class: ["flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4", { "text-blue-600 dark:text-accent-light font-medium": submenu.route_name === pageName.value, "text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50": submenu.route_name !== pageName.value }]
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<div class="flex items-center space-x-2"${_scopeId}><div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"${_scopeId}></div><span${_scopeId}>${ssrInterpolate(submenu.title)}</span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode("div", { class: "h-1.5 w-1.5 rounded-full border border-current opacity-40" }),
                          createVNode("span", null, toDisplayString(submenu.title), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`</li>`);
              });
              _push(`<!--]--></ul>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</li>`);
          } else {
            _push(`<li><a${ssrRenderAttr("href", menu.route_name)} class="${ssrRenderClass([{ "text-primary dark:text-accent-light font-medium": menu.route_name === pageName.value, "text-slate-600  hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50": menu.route_name !== pageName.value }, "flex text-xs+ py-2 tracking-wide outline-none transition-colors duration-300 ease-in-out"])}">${ssrInterpolate(menu.title)}</a></li>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></ul><!--]-->`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelancePartial/SidebarPanelF.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PartialHeaderF_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "PartialHeaderF",
  __ssrInlineRender: true,
  setup(__props) {
    useLayoutStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NotificationComponent = resolveComponent("NotificationComponent");
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="header print:hidden"><div class="relative flex w-full bg-white header-container dark:bg-gray-900 print:hidden"><div class="flex items-center justify-between w-full"><div class="h-7 w-7"><button class="menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80"><span></span><span></span><span></span></button></div><div><a href="" class="flex ml-2 md:hidden"><img src="/images/logo/find_02.png" class="h-8 lg:mr-3" alt="FIND"></a></div><div class="-mr-1.5 flex items-center space-x-2"><button class="w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-600 !dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button><div><h1 class="px-2 text-lg">Freelance</h1></div>`);
      _push(ssrRenderComponent(_component_NotificationComponent, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<button class="w-8 h-8 p-0 rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button></div></div></div></nav></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelancePartial/PartialHeaderF.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FreelanceLayout",
  __ssrInlineRender: true,
  setup(__props) {
    useCategoryStore();
    const layoutStore = useLayoutStore();
    function resize() {
      if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();
      }
    }
    resize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["", { "is-sidebar-open": unref(layoutStore).SidebarExpanded }]
      }, _attrs))}><div id="root" class="flex min-h-100vh grow bg-slate-50 dark:bg-gray-950"><div class="sidebar">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="main-content pt-4 w-full px-[var(--margin-x)] pb-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelanceLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};

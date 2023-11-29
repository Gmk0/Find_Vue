import { computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext, resolveComponent, onMounted } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot } from "vue/server-renderer";
import { u as useLayoutStore, _ as _sfc_main$4, b as useSidebarPanelUser, a as useCategoryStore } from "./userInfo-2152bb8f.js";
import { _ as _sfc_main$5 } from "./MainSidebarF-0d2b34f4.js";
import { usePage, Link } from "@inertiajs/vue3";
import { useDark, useToggle } from "@vueuse/core";
const _sfc_main$3 = {
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
                route_name: "freelance.missions"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelancePartial/SidebarPanelF.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PartialHeaderF_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "PartialHeaderF",
  __ssrInlineRender: true,
  setup(__props) {
    useLayoutStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NotificationComponent = resolveComponent("NotificationComponent");
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="header print:hidden"><div class="relative flex w-full bg-white header-container dark:bg-gray-900 print:hidden"><div class="flex items-center justify-between w-full"><div class="h-7 w-7"><button class="menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80"><span></span><span></span><span></span></button></div><div><a href="" class="flex ml-2 md:hidden"><img src="/images/logo/find_02.png" class="h-8 lg:mr-3" alt="FIND"></a></div><div class="-mr-1.5 flex items-center space-x-2"><button class="w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-600 !dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button><div><h1 class="px-2 text-lg">Freelance</h1></div>`);
      _push(ssrRenderComponent(_component_NotificationComponent, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<button class="w-8 h-8 p-0 rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button></div></div></div></nav></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelancePartial/PartialHeaderF.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "OtherPanel",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    const page = usePage();
    const SidebarPanel = useSidebarPanelUser();
    const lastMessage = computed(() => SidebarPanel.lastMessageUser);
    const lastData = computed(() => SidebarPanel.lastCommandeUser);
    useToggle(isDark);
    onMounted(() => {
      SidebarPanel.fetchLastMessage(page.props.auth.user.id);
      SidebarPanel.fetchLastCommande(page.props.auth.user.id);
    });
    ref("");
    ref([]);
    const activeTab = ref("tabHome");
    const getHourFromDate = (created_at) => {
      const date = new Date(created_at);
      const hour = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hour}:${minutes}`;
    };
    const LayoutStore = useLayoutStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Photo = resolveComponent("Photo");
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(LayoutStore).RightSidebarExpanded ? null : { display: "none" }
      }, _attrs))}>`);
      if (unref(LayoutStore).RightSidebarExpanded) {
        _push(`<div><div class="fixed inset-0 z-[150] bg-slate-900/60 transition-opacity duration-200"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="fixed right-0 top-0 z-[151] h-full w-full sm:w-80">`);
      if (unref(LayoutStore).RightSidebarExpanded) {
        _push(`<div class="relative flex flex-col w-full h-full transition-transform duration-200 bg-white transform-gpu dark:bg-navy-750"><div class="flex items-center justify-between px-4 py-2"><p style="${ssrRenderStyle(activeTab.value === "tabHome" ? null : { display: "none" })}" class="flex shrink-0 items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-xs"> 1234 </span></p><p style="${ssrRenderStyle(activeTab.value === "tabProjects" ? null : { display: "none" })}" class="flex shrink-0 items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg><span class="text-xs">Commande</span></p><p style="${ssrRenderStyle(activeTab.value === "tabActivity" ? null : { display: "none" })}" class="flex shrink-0 items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-xs">Activity</span></p><button class="w-6 h-6 p-0 -mr-1 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
        if (activeTab.value === "tabHome") {
          _push(`<div x-transition:enter="transition-all duration-500 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"><div class="mt-4"></div><div class="mt-4"><h2 class="px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"> Dernier messages </h2><div class="px-2 mt-4 space-y-3"><!--[-->`);
          ssrRenderList(lastMessage.value.messages, (message) => {
            _push(`<div class="flex flex-col justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700"><div class="flex flex-col justify-between px-3 mb-2 px-auto"><div class="mb-1 line-clamp-2">`);
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("user.chat", message.conversation_id),
              class: "font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span${_scopeId}>${message.body}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      innerHTML: message.body
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div><div class="flex items-center justify-between"><div class="flex flex-col space-x-2"><div class="flex items-center gap-3 mb-4">`);
            _push(ssrRenderComponent(_component_Photo, {
              user: message.senderUser,
              taille: "12"
            }, null, _parent));
            _push(`<p class="text-xs font-medium line-clamp-1">${ssrInterpolate(message.senderUser.name)}</p></div><div><p class="text-xs font-medium line-clamp-1">${ssrInterpolate(getHourFromDate(message.created_at))}</p></div></div></div></div></div>`);
          });
          _push(`<!--]--><div> Aucun message</div></div></div><div class="px-3 mt-3"><h2 class="text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"> Settings </h2><div class="flex flex-col mt-2 space-y-2"><label class="inline-flex items-center space-x-2"><input${ssrIncludeBooleanAttr(Array.isArray(unref(isDark)) ? ssrLooseContain(unref(isDark), null) : unref(isDark)) ? " checked" : ""} class="w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white" type="checkbox"><span>Dark Mode</span></label><label class="inline-flex items-center space-x-2"><input x-model="$store.global.isMonochromeModeEnabled" class="w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white" type="checkbox"><span>Monochrome Mode</span></label></div></div><div class="hidden px-3 mt-3"><div class="p-3 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex items-center justify-between"><p><span class="font-medium text-slate-600 dark:text-navy-100">35GB</span> of 1TB </p><a href="#" class="text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">Upgrade</a></div><div class="h-2 mt-2 progress bg-slate-150 dark:bg-navy-500"><div class="w-7/12 rounded-full bg-info"></div></div></div></div><div class="h-18"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "tabProjects") {
          _push(`<div class="px-3 pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"><div class="grid grid-cols-2 gap-3"><div class="p-3 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex justify-between space-x-1"><p class="text-xl font-semibold text-slate-700 dark:text-navy-100">${ssrInterpolate(lastData.value.total)}</p><svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="w-5 h-5 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><p class="mt-1 text-xs+">Total</p></div><div class="p-3 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex justify-between"><p class="text-xl font-semibold text-slate-700 dark:text-navy-100">${ssrInterpolate(lastData.value.totalEnAttente)}</p><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></div><p class="mt-1 text-xs+">En attente</p></div></div><div class="h-18"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute flex justify-center w-full pointer-events-none bottom-4"><div class="pointer-events-auto mx-auto flex space-x-1 rounded-full border border-slate-150 bg-white px-4 py-0.5 shadow-lg dark:border-navy-700 dark:bg-navy-900"><button class="${ssrRenderClass([activeTab.value === "tabHome" && "text-primary dark:text-accent", "px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])}"><svg style="${ssrRenderStyle(activeTab.value === "tabHome" ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg><svg style="${ssrRenderStyle(activeTab.value !== "tabHome" ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></button><button class="${ssrRenderClass([activeTab.value === "tabProjects" && "text-primary dark:text-accent", "px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])}"><svg style="${ssrRenderStyle(activeTab.value === "tabProjects" ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><svg style="${ssrRenderStyle(activeTab.value !== "tabProjects" ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg></button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelancePartial/OtherPanel.vue");
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
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
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

import { withCtx, createVNode, openBlock, createBlock, unref, Fragment, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { defineStore } from "pinia";
import axios from "axios";
import { useDark, useToggle } from "@vueuse/core";
import { a as _sfc_main$1, b as _sfc_main$2 } from "./ResponsiveNavLink-79527a9d.js";
useDark();
const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
    subCategoriesbyId: [],
    subCategoriesby: []
  }),
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get("/api/fetchAll");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async fetchSubCategoriesByCategoryid(categoryid) {
      try {
        const response = await axios.get(`/api/subcategories/${categoryid}`);
        this.subCategoriesby = response.data.subcategories;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
  },
  getters: {
    categoriesGet: (state) => state.categories,
    subCategoriesGet: (state) => state.subCategoriesby
  },
  persist: true
});
const useParrainage = defineStore("useParrainage", {
  state: () => ({
    parrainagesUser: [],
    referalCode: null
  }),
  getters: {
    getReferalCode: (state) => state.referalCode,
    getUsers: (state) => state.parrainagesUser
  },
  actions: {
    async getCodeUser() {
      try {
        const response = await axios.get("/api/getCodeUser");
        this.referalCode = response.data.referral_code;
        console.log(this.referalCode);
      } catch (e) {
      }
    },
    async getAllUser() {
      try {
        const response = await axios.get("/api/getAllUserParainer");
        if (response.status === 200) {
          this.parrainagesUser = response.data.users;
          console.log(this.parrainagesUser);
        } else {
          console.log("error:" + response.status);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
});
const useStore = defineStore({
  id: "isNotHome",
  state: () => ({
    isNotHome: false,
    login: false
  }),
  actions: {
    updateIsHome() {
      this.isNotHome = false;
    },
    updateIsNotHomeTrue() {
      this.isNotHome = true;
    },
    loginUser() {
      this.login = !this.login;
    }
  },
  getters: {
    getVariable() {
      return this.isNotHome;
    },
    canLogin: (state) => state.login
  }
});
const useSubcategoriesStore = defineStore("subcategories", {
  state: () => ({
    subCategories: []
  }),
  actions: {
    async fetchSubCategories() {
      try {
        const response = await axios.get("/api/subcategoriesAll");
        this.subCategories = response.data.subCategories;
      } catch (error) {
        console.error("Erreur lors de la récupération des sous-catégories:", error);
      }
    },
    setSubCategories(subCategories) {
      this.subCategories = subCategories;
    }
  },
  getters: {
    getSubCategories() {
      return this.subCategories;
    }
  }
});
const cartStore = defineStore("cart", {
  state: () => ({
    items: [],
    status: null,
    statusPayement: [],
    payementGetLink: ""
  }),
  getters: {
    totalItems: (state) => state.items.length,
    totalCost: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    statusError: (state) => state.status,
    statusPayementGet: (state) => state.statusPayement
  },
  actions: {
    async addItem(item) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    async removeItem(itemId) {
      const index = this.items.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    async updateItemQuantity({ itemId, newQuantity }) {
      const item = this.items.find((i) => i.id === itemId);
      if (item) {
        item.quantity = newQuantity;
      }
    },
    async clearCart() {
      this.items = [];
    },
    async checkoutMaxi(data) {
      this.status = [];
      try {
        console.log(data);
        const response = await axiosClient.post("/checkout-maxi", {
          name: data.name,
          numero: data.numero,
          items: this.items,
          totalprice: this.totalCost
        });
        return response.data;
      } catch (error) {
        if (error.response.status === 422) {
          console.log(error.response.data.errors);
        }
      }
    },
    async handleMaxiStatus(data) {
      this.status = [];
      try {
        const response = await axiosClient.post("/checkout-maxi-status", {
          status: data.status,
          reference: data.reference,
          method: data.reference
          // Enlevez la virgule en trop ici
        });
        this.clearCart();
        return response.data;
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          this.status = error.response.data;
        } else {
          console.log("Une erreur inattendue s'est produite :", error);
        }
      }
    }
  },
  persist: true
});
const useLayoutStore = defineStore("userLayout", {
  state: () => ({
    isDarkModeEnabled: false,
    isMonochromeModeEnabled: false,
    isSearchbarActive: false,
    isSidebarExpanded: false,
    isRightSidebarExpanded: false,
    isRightSidebarPanel: false
  }),
  getters: {
    SidebarExpanded: (state) => state.isRightSidebarExpanded,
    RightSidebarExpanded: (state) => state.isRightSidebarPanel
  },
  actions: {
    toogleRight() {
      this.isRightSidebarExpanded = !this.isRightSidebarExpanded;
    },
    tooglePanel() {
      this.isRightSidebarPanel = !this.isRightSidebarPanel;
    },
    ToogleFalse() {
      this.isRightSidebarExpanded = false;
    },
    tooglePanelFalse() {
      this.isRightSidebarPanel = false;
    },
    ToogleTrue() {
      this.isRightSidebarExpanded = true;
    }
  }
});
const useSidebarPanelUser = defineStore("useSidebarPanelUser", {
  state: () => ({
    lastMessage: [],
    lastCommande: false,
    statusElement: []
  }),
  getters: {
    lastMessageUser: (state) => state.lastMessage,
    lastCommandeUser: (state) => state.statusElement
  },
  actions: {
    async fetchLastMessage(id) {
      try {
        const response = await axios.get(`/api/fetchLastUserMessage/${id}`);
        if (response.status === 200) {
          if (response.data.messages.length > 0) {
            this.lastMessage = response.data;
          } else {
            console.log("Aucun message trouvé.");
          }
        } else if (response.status === 203) {
          console.log("Aucun message n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des messages :", error);
      }
    },
    async fetchLastCommande(id) {
      try {
        const response = await axios.get(`/api/fetchLastCommande/${id}`);
        if (response.status === 200) {
          this.statusElement = response.data.status;
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    }
  }
});
const useNotification = defineStore("useNotification", {
  state: () => ({
    lastNotification: [],
    lastCommande: false,
    statusElement: [],
    notificationParametres: null
  }),
  getters: {
    lastNotificationGet: (state) => state.lastNotification,
    getParametres: (state) => state.notificationParametres
    // lastCommandeUser: (state) => state.statusElement,
  },
  actions: {
    async fetchLastNotification() {
      try {
        const response = await axios.get(`/api/fetchLastNotification`);
        if (response.status === 200) {
          this.lastNotification = response.data.notifications;
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    },
    async removeNotification(id) {
      try {
        const response = await axios.get(`/api/removeNotification/${id}`);
        if (response.status === 200) {
          this.fetchLastNotification();
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    },
    async getNotificationParametres() {
      try {
        const response = await axios.get("/api/getNotificationParametres");
        if (response.status == 200) {
          this.notificationParametres = response.data.userSetting;
        }
      } catch (error) {
      }
    }
  }
});
const useMissions = defineStore("useMissions", {
  state: () => ({
    missions: []
  }),
  getters: {
    missionGeters: (state) => state.missions
  },
  actions: {
    async fetchLastMission() {
      try {
        const response = await axios.get(`/api/fetchLastMissions`);
        if (response.status === 200) {
          this.missions = response.data.missions;
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    }
  }
});
const homeSetting = defineStore("homeSetting", {
  state: () => ({
    faqs: []
  }),
  getters: {
    faqsGetter: (state) => state.faqs
  },
  actions: {
    async fetchLastFaq() {
      try {
        const response = await axios.get(`/api/getLastFaq`);
        if (response.status === 200) {
          this.faqs = response.data.faqs;
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    }
  }
});
const _sfc_main = {
  __name: "userInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    const dark = useToggle(isDark);
    const ToggleDark = () => {
      dark();
    };
    const logout = () => {
      router.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="flex text-sm transition border-2 border-transparent rounded-full dark:bg-gray-800 focus:outline-none focus:border-gray-300"${_scopeId}>`);
            if (_ctx.$page.props.auth.user.profile_photo_path != null) {
              _push2(`<div${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></div>`);
            } else {
              _push2(`<div${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></div>`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "flex text-sm transition border-2 border-transparent rounded-full dark:bg-gray-800 focus:outline-none focus:border-gray-300" }, [
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
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-50"${_scopeId}> Manage Account </div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}>Profile</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, "Profile")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("user.dashboard")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> Tableau utilisateur</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                      ])),
                      createVNode("span", { class: "ml-2" }, " Tableau utilisateur")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.auth.freelance) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                href: _ctx.route("freelance.dashboard")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> Tableau Freelance</span></span>`);
                  } else {
                    return [
                      createVNode("span", { class: "flex" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "w-5 h-5",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                        ])),
                        createVNode("span", { class: "ml-2" }, " Tableau Freelance")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<a href="/freelance-gestion" class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-50 hover:bg-gray-100 hover:dark:bg-gray-700 focus:outline-none focus:bg-gray-100"${_scopeId}><span class="flex"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"${_scopeId}></path></svg><span class="ml-2"${_scopeId}> Tableau Freelance Pro</span></span></a><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("user.missions")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> Mes Mission</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, " Mes Mission")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("user.chat")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> favoris</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
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
                          d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, " favoris")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("user.chat")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> Conversation</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
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
                      createVNode("span", { class: "ml-2" }, " Conversation")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              onClick: ($event) => ToggleDark(),
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}>`);
                  if (unref(isDark)) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"${_scopeId2}></path></svg>`);
                  } else {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"${_scopeId2}></path></svg>`);
                  }
                  _push3(`<span class="ml-2"${_scopeId2}>Dark Mode</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      unref(isDark) ? (openBlock(), createBlock("svg", {
                        key: 0,
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        })
                      ])) : (openBlock(), createBlock("svg", {
                        key: 1,
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
                          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, "Dark Mode")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="border-t border-gray-200"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { as: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> Deconnexion</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, " Deconnexion")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-50" }, " Manage Account "),
              createVNode(_sfc_main$2, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, "Profile")
                  ])
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                href: _ctx.route("user.dashboard")
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                    ])),
                    createVNode("span", { class: "ml-2" }, " Tableau utilisateur")
                  ])
                ]),
                _: 1
              }, 8, ["href"]),
              _ctx.$page.props.auth.freelance ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(_sfc_main$2, {
                  href: _ctx.route("freelance.dashboard")
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                      ])),
                      createVNode("span", { class: "ml-2" }, " Tableau Freelance")
                    ])
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode("a", {
                  href: "/freelance-gestion",
                  class: "block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-50 hover:bg-gray-100 hover:dark:bg-gray-700 focus:outline-none focus:bg-gray-100"
                }, [
                  createVNode("span", { class: "flex" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                    ])),
                    createVNode("span", { class: "ml-2" }, " Tableau Freelance Pro")
                  ])
                ])
              ], 64)) : createCommentVNode("", true),
              createVNode(_sfc_main$2, {
                href: _ctx.route("user.missions")
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, " Mes Mission")
                  ])
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                href: _ctx.route("user.chat")
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
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
                        d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, " favoris")
                  ])
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                href: _ctx.route("user.chat")
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
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
                    createVNode("span", { class: "ml-2" }, " Conversation")
                  ])
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                onClick: ($event) => ToggleDark(),
                as: "button"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
                    unref(isDark) ? (openBlock(), createBlock("svg", {
                      key: 0,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      })
                    ])) : (openBlock(), createBlock("svg", {
                      key: 1,
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
                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, "Dark Mode")
                  ])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", { class: "border-t border-gray-200" }),
              createVNode("form", {
                onSubmit: withModifiers(logout, ["prevent"])
              }, [
                createVNode(_sfc_main$2, { as: "button" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, " Deconnexion")
                    ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/userInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  useCategoryStore as a,
  useSidebarPanelUser as b,
  useNotification as c,
  useParrainage as d,
  cartStore as e,
  useStore as f,
  useSubcategoriesStore as g,
  homeSetting as h,
  useMissions as i,
  useLayoutStore as u
};

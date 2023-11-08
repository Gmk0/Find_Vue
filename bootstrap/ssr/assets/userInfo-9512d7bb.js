import { withCtx, createVNode, openBlock, createBlock, createTextVNode, withModifiers, useSSRContext } from "vue";
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
const useStore = defineStore({
  id: "isNotHome",
  state: () => ({
    isNotHome: false
  }),
  actions: {
    updateIsHome() {
      this.isNotHome = false;
    },
    updateIsNotHomeTrue() {
      this.isNotHome = true;
    }
  },
  getters: {
    getVariable() {
      return this.isNotHome;
    }
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
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
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
                  _push3(` Tableau utilisateur `);
                } else {
                  return [
                    createTextVNode(" Tableau utilisateur ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("user.missions")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Mes Mission `);
                } else {
                  return [
                    createTextVNode(" Mes Mission ")
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
                  _push3(` favoris `);
                } else {
                  return [
                    createTextVNode(" favoris ")
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
                  _push3(` Conversation `);
                } else {
                  return [
                    createTextVNode(" Conversation ")
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
                  _push3(` Dark mode `);
                } else {
                  return [
                    createTextVNode(" Dark mode ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="border-t border-gray-200"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { as: "button" }, {
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
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-50" }, " Manage Account "),
              createVNode(_sfc_main$2, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                href: _ctx.route("user.dashboard")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Tableau utilisateur ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                href: _ctx.route("user.missions")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Mes Mission ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                href: _ctx.route("user.chat")
              }, {
                default: withCtx(() => [
                  createTextVNode(" favoris ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                href: _ctx.route("user.chat")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Conversation ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                onClick: ($event) => ToggleDark(),
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Dark mode ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", { class: "border-t border-gray-200" }),
              createVNode("form", {
                onSubmit: withModifiers(logout, ["prevent"])
              }, [
                createVNode(_sfc_main$2, { as: "button" }, {
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
  cartStore as c,
  useSubcategoriesStore as d,
  useStore as e,
  useLayoutStore as u
};

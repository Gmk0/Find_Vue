import { defineStore } from "pinia";
import axios from "axios";
import { useDark } from "@vueuse/core";
useDark();
const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
    subCategoriesbyId: []
  }),
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get("/api/fetchAll");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
  },
  getters: {
    categoriesGet: (state) => state.categories
  }
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
    isRightSidebarExpanded: false
  }),
  getters: {
    SidebarExpanded: (state) => state.isRightSidebarExpanded
  },
  actions: {
    toogleRight() {
      this.isRightSidebarExpanded = !this.isRightSidebarExpanded;
    },
    ToogleFalse() {
      this.isRightSidebarExpanded = false;
    },
    ToogleTrue() {
      this.isRightSidebarExpanded = true;
    }
  }
});
export {
  useCategoryStore as a,
  useSubcategoriesStore as b,
  cartStore as c,
  useStore as d,
  useLayoutStore as u
};

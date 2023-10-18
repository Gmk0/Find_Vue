import { defineStore } from 'pinia';
import axios from 'axios';





export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: []
    }),
    actions: {
        async fetchCategories() {
            try {
                const response = await axios.get('/api/fetchAll');
                this.categories = response.data;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
    },
    getters: {
        getCategoriesArray() {
            // Convertir l'objet en tableau associatif
            return Object.values(this.categories);
        }
    }
});


export const useStore = defineStore({
    id: 'isNotHome',
    state: () => ({
        isNotHome: false,
    }),
    actions: {
        updateIsHome() {
            this.isNotHome = false;
        },
        updateIsNotHomeTrue() {
            this.isNotHome = true;
        },
    },
    getters: {
        getVariable() {
            return this.isNotHome;
        },
    },
});


export const useSubcategoriesStore = defineStore('subcategories', {
    state: () => ({
        subCategories: []
    }),
    actions: {
        async fetchSubCategories() {
            try {
                const response = await axios.get('/api/subcategoriesAll'); // Assurez-vous d'ajuster l'URL
                this.subCategories = response.data.subCategories;

            } catch (error) {
                console.error('Erreur lors de la récupération des sous-catégories:', error);
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







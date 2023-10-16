<template>
    <div class="overflow-x-hidden bg-white dark:bg-gray-800">

        <Head :title="title" />

        <div class="pageWrapper">
            <Navbar :categories="categories" />

            <div id="">


                    <main  class="min-h-screen">
                        <slot />
                    </main>


            </div>


            <Footer :categories="categories" />
        </div>


    </div>
</template>

<script setup>

import { Head } from '@inertiajs/vue3';
import Navbar from '@/Layouts/Partials/Navbar.vue';
import Footer from '@/Layouts/Partials/Footer.vue';
import { onMounted, ref } from 'vue';


import { useDark } from '@vueuse/core';

import { useSubcategoriesStore, useStore } from '@/store';
import axios from 'axios';

const isDark = useDark();



defineProps({
    title: String,
});


const categories = ref([]);

const subcategoriesStore = useSubcategoriesStore();


onMounted(


    async () => {
        try {


            subcategoriesStore.fetchSubCategories();

            const response = await axios.get('/api/fetchAll');
            categories.value = response.data.categories;
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories:', error);
        }
    });



</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.3s;
}

.page-enter,
.page-leave-active {
    opacity: 0;
}
</style>

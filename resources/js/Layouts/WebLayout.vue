<template>
    <div class="overflow-x-hidden bg-white dark:bg-gray-800">

        <Head :title="title" />

        <div class="pageWrapper">
            <Navbar/>

            <div id="">


                    <main  class="min-h-screen">
                        <slot />
                    </main>


            </div>


            <Footer/>
        </div>


    </div>
</template>

<script setup>

import { Head } from '@inertiajs/vue3';
import Navbar from '@/Layouts/Partials/Navbar.vue';
import Footer from '@/Layouts/Partials/Footer.vue';
import { onMounted, ref, computed } from 'vue';


import { useDark } from '@vueuse/core';

import { useSubcategoriesStore, useCategoryStore } from '@/store/store';


const categoriesStore = useCategoryStore();
const subcategoriesStore = useSubcategoriesStore();




defineProps({
    title: String,
});

onMounted(() => {
    subcategoriesStore.fetchSubCategories();
    categoriesStore.fetchCategories();
});


//console.log(categories.value);








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

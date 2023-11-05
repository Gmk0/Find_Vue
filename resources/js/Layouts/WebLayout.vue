<template>
    <div class="overflow-x-hidden bg-white dark:bg-gray-800">

        <Head :title="titlePage" />

        <div class="pageWrapper">
            <Navbar/>

            <div id="">


            <main  class="relative min-h-screen overflow-auto ">
                <slot />
            </main>


            </div>


            <Footer/>
        </div>


    </div>
</template>

<script setup>

import { Head,usePage } from '@inertiajs/vue3';
import Navbar from '@/Layouts/Partials/Navbar.vue';
import Footer from '@/Layouts/Partials/Footer.vue';
import { onMounted, ref, computed } from 'vue';


import { useDark } from '@vueuse/core';

import { useSubcategoriesStore, useCategoryStore } from '@/store/store';


const categoriesStore = useCategoryStore();
const subcategoriesStore = useSubcategoriesStore();

const page = usePage();
const titlePage=computed(()=> {
    const urlPath=page.url.split('/');
    if(urlPath.length <=1 || urlPath[1] === '')
    {
        return 'Acceuil';
    }else{
        return urlPath[1];
    }
})


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

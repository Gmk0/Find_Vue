<template>
    <div class="bg-white dark:bg-gray-800">


        <Head :title="titlePage" />

        <div class="pageWrapper">
            <Navbar/>

            <Error />


            <main  class="min-h-screen ">

                <slot />
            </main>





            <Footer/>
        </div>

         <Login />
    </div>
</template>

<script setup>

import { Head,usePage } from '@inertiajs/vue3';
import Navbar from '@/Layouts/Partials/Navbar.vue';
import Footer from '@/Layouts/Partials/Footer.vue';
import { onMounted, computed } from 'vue';
import Login from '@/Components/Login.vue';




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



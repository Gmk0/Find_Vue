<template>
    <div>

        <div class="min-h-screen px-4 py-20 bg-gray-100 md:px-8">

            <div class="mx-2">

            </div>


            <div class="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 xl:gap-8">



                <Link v-for="category in categories" :href="route('categoryName', category.name)"
                    class="flex flex-col items-center px-2 py-4 duration-200 border shadow-lg cursor-pointer bg-gray-50 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600">
                <img src="" class="w-20 h-20 rounded-md" alt="">
                <h4
                    class="mt-3 mb-1 md:text-[20px] text-[16px]   font-semibold text-slate-600 duration-200 group-hover:text-white">
                    {{ category.name }}</h4>

                </Link>




            </div>
        </div>


    </div>
</template>






<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
// Assurez-vous d'ajuster le chemin d'importation
import { onMounted } from 'vue';


defineProps({
    categories: Array,
})




defineOptions({
    layout: WebLayout,

});



</script>
<style lang="scss" scoped></style>

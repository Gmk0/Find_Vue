<template>

    <div class="relative w-full min-h-screen py-16 pb-12 ">

        <div>
            <div class="relative h-12 lg:h-24 bg-skin-fill dark:bg-gray-600">
                    <img class="hidden object-cover w-full h-full opacity-70" src="" alt="image"
                        title="" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h1 class="text-lg font-bold text-white lg:text-4xl">{{ props.category.name }}</h1>
                    </div>
            </div>
            <div class="px-4 mt-4">
                          <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex hidden items-center">
                            <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                Acceuil
                            </a>
                            </li>

                            <li aria-current="page">
                            <Link :href="route('categories')" class="flex items-center">
                                <svg class="w-3 h-3 mx-1 hidden text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Categories</span>
                            </Link>
                            </li>
                             <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 break-before-auto dark:text-gray-400">{{ props.category.name }}</span>
                                </div>
                                </li>
                        </ol>
                        </nav>
                    </div>

            <div class="relative mt-4 ">

                  <div class="sticky top-0 z-30 grid h-auto grid-cols-12 px-4 py-2 bg-white dark:bg-gray-800 lg:z-0 lg:bg-transparent lg:relative">
                        <div class="lg:col-span-3"></div>

                       <div class="grid col-span-12 gap-4 lg:col-span-9 lg:grid-cols-12 lg:gap-2 ">
                            <div class="px-4 lg:col-span-12">

                            <TextInput v-model="form.search" class="py-3 w-full   !shadow-md" placeholder="recherche"
                                icon='search' />

                            </div>
                            <div class="flex flex-row justify-between gap-2 px-4 lg:col-span-3">
                                <div class="">
                                    <div class="block lg:hidden">

                                        <Button icon="pi pi-filter-fill" size="small"  @click="showFiltre = !showFiltre"
                                                rounded
                                                outlined
                                                aria-label="Filter" />
                                    </div>
                                </div>
                                <div class="flex gap-2 lg:hidden ">
                                    <div>
                                          <Dropdown v-model="form.orderBy" optionValue="code" :options="trieElement" showClear optionLabel="name" placeholder="Trier par"  class="w-full md:w-14rem" />

                                    </div>
                                </div>


                            </div>

                        </div>


                </div>

                <div class="grid grid-cols-12 px-4">

                     <div class="relative col-span-3 p-2">

                            <div :class="showFiltre? 'fixed inset-0    top-0  bottom-0  dark:bg-gray-800 bg-white z-[250] p-4 transition-all duration-200 w-full' : 'hidden w-full mt-0   z-20'"
                                class="overflow-x-hidden overflow-y-auto rounded-md lg:h-auto lg:block">
                                <div class="flex flex-col p-2">
                                    <h1 class="mb-2 text-lg font-bold text-gray-800">Sous category</h1>

                                    <div class="flex flex-wrap gap-2 lg:grid lg:grid-cols-1">


                                        <div v-for="subcategory in subcategories">
                                            <button @click="setCategory(subcategory.name)"

                                                :class="{'border-2 border-amber-500 dark:bg-gray-600 bg-amber-100 text-amber-700 translate-x-4': form.sub_categorie == subcategory.name, 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200': form.sub_categorie !=subcategory.name}"


                                                class="flex gap-2 p-2 transition-all transform rounded-lg shadow-sm bg-gray-50 dark: hover:translate-x-4">
                                                <img src=""
                                                    class="object-fill w-8 p-1 rounded-md" alt="">
                                                <span class="text-gray-700 dark:text-gray-50">{{ subcategory.name }}</span>
                                                <!-- Adjusted span for the number -->
                                                <span
                                                    class="ml-2 bg-white text-gray-800  px-1 py-0.5 text-[10px] rounded-full">{{subcategory.service_count }}</span>
                                            </button>
                                        </div>


                                    </div>

                                    <div class="mt-4">

                                        <h1 class="mb-4 text-lg font-bold text-gray-800">Prix</h1>
                                       <div class="w-full space-y-1 dark:text-gray-100">


                                            <div class="flex flex-col gap-2 p-2">


                                            </div>

                                            <div aria-hidden="true" class="flex justify-between px-1">
                                                <div class="flex justify-between gap-4 p-2 border">
                                                     <TextInput value="10 $" disabled class="w-1/2 rounded-md "  />
                                                  <TextInput v-model.number="form.price" placeholder=" a" class="w-1/2 rounded-md"  />
                                                </div>
                                            </div>

                                             <button v-if="form.price !=null " @click="clearPrice" class="p-2 text-gray-800 bg-gray-200 rounded-md">
                                                     Effacer
                                            </button>
                                        </div>

                                    </div>


                                    <div
                                        class="relative py-3 mt-4 mb-4 border-t border-gray-400 ">
                                        <button @click="showCategoryFilter = !showCategoryFilter"
                                            class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                            <span class="text-base dark:text-gray-100"> Niveau Freelannce</span>
                                            <svg v-show="!showCategoryFilter" class="w-4 h-4 fill-current"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path
                                                    d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                            </svg>
                                            <svg v-show="showCategoryFilter" class="w-4 h-4 fill-current"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path
                                                    d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                            </svg>
                                        </button>

                                        <Collapse :when="showCategoryFilter">

                                             <Dropdown v-model="form.level" optionValue="code" :options="cities" showClear optionLabel="name" placeholder="Choisir un niveau" class="w-full md:w-14rem" />
                                        </Collapse>

                                        <div
                                            class="relative py-3 mt-4 mb-4 border-t border-gray-400 ">
                                            <button @click="showDeliveryFilter = !showDeliveryFilter"
                                                class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                                <span class="text-base dark:text-gray-100"> Temps de livraison</span>
                                                <svg v-show="!showDeliveryFilter" class="w-4 h-4 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path
                                                        d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                                </svg>
                                                <svg v-show="showDeliveryFilter" class="w-4 h-4 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path
                                                        d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                                </svg>
                                            </button>
                                            <Collapse :when="showDeliveryFilter">

                                                <div class="m-2">

                                                     <Dropdown v-model="form.deliveryTime" :options="deliveryTime" showClear optionLabel="name" optionValue="code" placeholder="Choisir un le temps" class="w-full md:w-14rem" />


                                                </div>





                                            </Collapse>
                                        </div>

                                        <div
                                            class="relative py-3 mt-4 mb-4 border-t border-gray-400 ">
                                            <button @click="showTagFilter = !showTagFilter"
                                                class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                                <span class="text-base dark:text-gray-100"> Tag de recherche</span>
                                                <svg v-show="!showTagFilter" class="w-4 h-4 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path
                                                        d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                                </svg>
                                                <svg v-show="showTagFilter" class="w-4 h-4 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path
                                                        d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                                </svg>
                                            </button>
                                            <Collapse :when="showTagFilter">



                                                <span v-for="(tag , index) in tags"
                                                    class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full cursor-pointer"
                                                  :class="{ 'border-2 border-amber-500 bg-amber-100 text-amber-700': form.tag === tag, 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200': form.tag !== tag }"

                                                   >
                                                    {{ tag }}
                                                </span>


                                            </Collapse>
                                        </div>

                                    </div>

                                </div>

                                <div class="flex gap-4 lg:hidden">

                                    <button type="button"
                                            @click="showFiltre = !showFiltre"
                                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                appliquer
                                            </button>

                                            <button
                                            @click="showFiltre = !showFiltre"
                                            type="button"
                                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                                Fermer
                                            </button>
                                </div>

                            </div>
                            <!--End Sidebar-->
                            <!--Main Content-->


                        </div>

                           <div class="col-span-12 pt-8 lg:col-span-9">

                            <div class="flex-row-reverse justify-between hidden px-4 py-4 lg:flex">
                                <!--

                                <div class="flex gap-4 p-2 mb-4 rounded">

                                    <span class="text-sm text-amber-600">Filtres appliqués : {{ $count }}</span>


                                    <x-button.circle icon="x" wire:click='resetAll' />
                                </div>
                                -->



                                <div class=" lg:block">

                                        <Dropdown v-model="form.orderBy" optionValue="code" :options="trieElement" showClear optionLabel="name" placeholder="Trier par" size="small" class="w-full md:w-14rem" />

                                </div>
                                <div class=" lg:block">
                                         <pagination class="mt-6" :links="props.services.links" />
                                    </div>


                            </div>

                            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                                <div v-for="service in props.services.data">
                                       <ServiceCard :service="service" :key="service.id"/>

                                </div>

                                <div v-if="props.services.data.length == 0" class="flex items-center justify-center h-64">
                                    <span class="text-lg font-medium text-gray-500">
                                        Aucun élément trouvé.
                                    </span>
                                </div>






                            </div>

                            <div class="py-4">


                                <div>
                                       <pagination class="mt-6" :links="props.services.links" />


                                </div>


                            </div>

                        </div>

                </div>
                <div class="grid px-4 pt-16 lg:grid-cols-12 ">
                        <div class="hidden lg:col-span-3 lg:block">

                        </div>
                        <div class="lg:col-span-9">

                            <div class="items-center mb-4">
                                <h1 class="text-lg font-semibold text-center">Du meme Categories</h1>
                            </div>
                            <div class="flex flex-wrap gap-4">

                                <div v-for="category in categories">
                                    <Link :href="route('categoryName',category.name)"
                                        class="flex gap-2 p-2 transition-all transform bg-gray-200 rounded-lg shadow-sm dark:bg-gray-700 hover:scale-95 active:bg-amber-400 focus:bg-amber-400 focus:text-gray-50 ">

                                            <img v-if="category.illustration !=null" :src="'/storage/' + category.illustration" class="object-fill w-8 p-1 rounded-md" alt="">


                                        <span class="">{{category.name }}</span>


                                        <div
                                            class="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-gray-400 p-2 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                                            {{ category.servcies_counts }}</div>
                                    </Link>
                                </div>


                            </div>



                        </div>
                 </div>






            </div>



        </div>
    </div>
</template>






<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
import {  Link, router } from '@inertiajs/vue3';
import { useStore } from '@/store/store'; // Assurez-vous d'ajuster le chemin d'importation
import {  ref, watch } from 'vue';
import { Collapse } from 'vue-collapsed'
import pickBy from 'lodash/pickBy';
import throttle from 'lodash/throttle';
import TextInput from '@/Components/TextInput.vue';

import ServiceCard from '@/Components/ServiceCard.vue';


import Dropdown from 'primevue/dropdown';
//import Slider from 'primevue/slider';





const props = defineProps({
    services :Object,
    categories : Array,
    subcategories: Array,
    category: Object,
    filters: Object,
    tags:Array,
});

const form = ref({
    search : props.filters.search,
    sub_categorie: props.filters.search,
    price: props.filters.price,
    level: props.filters.level,
    tag: props.filters.tag,
    deliveryTime: props.filters.deliveryTime,
    orderBy: props.filters.orderBy,

});

const showDeliveryFilter =ref(false);
const showCategoryFilter = ref(true);
const showTagFilter = ref(true);
const showFiltre = ref(false);
const sous_category = ref(null);


const setCategory = (name) => {
    if (form.value.sub_categorie === name) {

        form.value.sub_categorie = '';
    } else {
        form.value.sub_categorie = name;
    }
};


const clearPrice =()=>{
    form.value.price = null;

}

const cities = ref([
    { name: 'Nouveau 1', code:'1' },
    { name: 'Nouveau 2', code: '2' },
    { name: 'Nouveau 3', code: '3'  },
    { name: 'Nouveau 4', code: '4' },

]);

const deliveryTime = ref([
    {
        name: '1-5 jours', code:'1-5'
    },
     {
        name: '5-10 jours', code: '5-10'
    },
    {
        name: ' +10 jours', code: '10-100'
    },
]);

const trieElement = ref([
    {
        name: 'Plus recent', code: 'created_at-asc'
    },
    {
        name: 'Plus ancient', code: 'created_at-desc'
    },
    {
        name: 'Prix descendant', code: 'basic_price-desc'
    },
     {
        name: 'Prix ascendant', code: 'basic_price-asc'
    },
    {
        name :'populaire' , code: 'populaire-asc'
    }
])




watch(form, throttle(() => {

    router.get(route('categoryName', props.category.name),
        pickBy(form.value),
        {
            preserveState: true,
            preserveScroll: true,
            only: ['services', 'filters']
        })
}, 3000), { deep: true, })

const store = useStore();

defineOptions({
    layout: WebLayout,

});




</script>
<style>
.collapse {
    transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}
</style>

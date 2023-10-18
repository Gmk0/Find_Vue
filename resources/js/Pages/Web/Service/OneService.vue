<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
import { useStore } from '@/store'; // Assurez-vous d'ajuster le chemin d'importation
import { onMounted, ref } from 'vue';

import Galleria from 'primevue/galleria';

import Image from 'primevue/image';


import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';




const props = defineProps({
    service: Object,
    otherService : Array,
});

const like = ref(false);
const level = ref('basic');

const images = ref([]);

for (let i = 0; i < props.service.files.length; i++) {
    images.value.push({
        itemImageSrc: '/storage/' + props.service.files[i],
        thumbnailImageSrc: '/storage/' + props.service.files[i],
        alt: `Description for Image ${i + 1}`,
        title: `Title ${i + 1}`
    });
}




const store = useStore();
const change = store.isNotHome;
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

onMounted(() => {
    // Change la valeur de isNotHome dans le store
    store.updateIsNotHomeTrue();
});


defineOptions({
    layout: WebLayout,

});



</script>

<template>
     <div class="min-h-screen py-2 pt-16 bg-gray-100 md:px-6 dark:bg-gray-900">
         <div class="px-2 hidden">
              All/Service
        </div>
        <div class="px-8">
            <button class="py-2 border text-gray-800 hover:bg-amber-500 hover:text-white transition-all px-4 border-amber-500 rounded-lg" onclick="history.back()">Retour</button>
        </div>

        <div class="container relative px-4 py-4 mx-auto">

            <div class="flex flex-col relative md:flex-row md:space-x-4">
                <div id="card" class="flex-col relative mx-2 mb-4 md:flex md:order-2 md:mb-0 md:w-1/3">
                    <div class="flex sticky top-[8rem] flex-col gap-2 px-2 pt-2 card-sticky ">

                        <div class="sticky p-2 bg-white shadow-lg rounded-md dark:bg-gray-800">

                        <div class=" sm:col-span-8 lg:col-span-7">

                                <h2 class="flex text-2xl font-bold text-gray-800 truncate lg:hidden dark:text-gray-300 sm:pr-12">
                                {{ service.title }}
                                </h2>
                            <section aria-labelledby="information-heading" class="mt-1 ">
                                    <h3 id="information-heading" class="sr-only">Product information</h3>
                                    <div class="flex justify-between my-3">
                                <h4 class="sr-only">Reviews</h4>
                                <div class="flex items-center">
                                    <div class="flex items-center">
                                        <svg class="w-4 h-4 mr-1 text-yellow-500 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" />
                                        </svg>

                                        <span
                                            class="text-sm font-semibold text-gray-700 dark:text-gray-100">(2)
                                        </span>
                                    </div>

                                    <p class="sr-only">3 out of 5 stars</p>
                                    <a href="#"
                                        class="ml-3 text-sm font-medium text-amber-600 hover:text-indigo-500">34
                                        reviews</a>
                                </div>
                                <div class="flex justify-between mt-3">
                                    <div class="flex items-center">
                                        <button class="flex gap-1 mr-2"
                                            >


                                            <span x-cloak v-show="!like" class="">
                                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>

                                            </span>
                                            <span x-cloak v-show="like">
                                                <svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </span>


                                        </button>



                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>



                            <div v-if="props.service.premium_price && props.service.extra_price " class="mt-4 mb-3">
                                <ul
                                    class="flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li class="w-full sm:border-r dark:border-gray-600" @click="level = 'Basic'"
                                        :class="level === 'Basic' ? 'border-b-4 border-amber-600' : ''">
                                        <button
                                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none">
                                            Basic
                                        </button>
                                    </li>
                                    <li class="w-full sm:border-r dark:border-gray-600" @click="level = 'Premium'"
                                        :class="level === 'Premium' ? 'border-b-4 border-amber-600' : ''">
                                        <button
                                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none">
                                            Premium
                                        </button>
                                    </li>
                                    <li class="w-full dark:border-gray-600" @click="level = 'Extra'"
                                        :class="level === 'Extra' ? 'border-b-4 border-amber-600' : ''">
                                        <button
                                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none">
                                            Extra
                                        </button>
                                    </li>
                                </ul>
                            </div>


                            <div class="flex justify-between gap-2 px-4 ">
                                <p class="py-2 text-lg text-gray-800">{{ level }} </p>
                                <p class="text-lg font-bold text-gray-800">500 $</p>
                            </div>

                            <div>
                                <div id="" class="mt-4">

                                    <div class="px-4">
                                        <ul class="flex gap-4">


                                        </ul>
                                    </div>
                                </div>

                            </div>


                            </section>

                                <section aria-labelledby="options-heading" class="px-4 mt-1">
                            <h3 id="options-heading" class="sr-only">Service options</h3>
                            <div>
                                <div class="flex justify-between mt-4">
                                    <p class="flex gap-2 font-medium text-gray-700 dark:text-gray-100">
                                        icon

                                        <span v-if="level==='basic'">
                                            {{ props.service.basic_delivery_time }}
                                        </span>

                                        <span v-else-if="level ==='Premium'" >

                                                {{ props.service.premium_delivery_time }}
                                        </span>
                                        <span v-else >
                                                {{ props.service.extra_delivery_time }}

                                        </span>




                                            Jours Delai
                                    </p>

                                    <p class="flex gap-2 font-medium text-gray-700 dark:text-gray-100">

                                        clock

                                        <span v-if="level === 'basic'">
                                                {{ props.service.basic_revision }}
                                            </span>

                                            <span v-else-if="level === 'Premium'" >

                                                    {{ props.service.premium_revision }}
                                            </span>
                                            <span v-else >
                                                    {{ props.service.extra_revision }}

                                            </span>


                                            Revisions

                                    </p>

                                </div>

                                <div class="flex">
                                    <button wire:click="add_cart()" type="button" id=""
                                        class="flex items-center justify-center w-full gap-1 px-8 py-3 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>

                                        <span wire:loading.remove wire:target='add_cart'>Ajouter
                                            au Panier</span>
                                        <span wire:loading wire:target='add_cart'>Ajout...
                                        </span>
                                    </button>
                                </div>






                            </div>
                                </section>


                        </div>
                            <div class="grid w-full gap-2 p-6 bg-white rounded-lg dark:bg-gray-800">
                            <button>Contacter</button>
                        </div>
                    </div>

                    </div>
                </div>

                <div class="w-full px-4 bg-gray-50 md:w-2/3">
                    <div class="p-4 dark:bg-gray-800">
                        <div class="flex flex-col mb-4">

                            <div>
                                <p class="mb-4 text-lg font-bold text-gray-700 md:text-xl dark:text-gray-200">
                                    {{props.service.title}}
                                </p>
                            </div>

                                <div class="flex gap-4 mt-2">

                                    <div class="flex flex-col gap-3 my-auto">
                                        <a class="text-base font-medium text-gray-500 underline">{{ props.service.freelance.nom }}</a>
                                        <div class="flex flex-row gap-2">

                                            <span class="text-base font-medium">Niveau {{ props.service.freelance.level }}

                                                (3)

                                            </span>

                                            <span class="text-base font-medium">3 commande en cours</span>

                                        </div>

                                    </div>
                                </div>
                                    <div class="">
                                        <!--
                                            <div class="w-10/12 rounded-lg">
                                                <Swiper
                                                :modules="[Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y]"
                                                effect="fade"
                                                :slides-per-view="1"
                                                navigation
                                                >
                                                <swiper-slide v-for="(image, index) in props.service.files">

                                                    <img class="object-fill rounded-md h-10/12 swiper-lazy"
                                                        :src = "'/storage/' + image"
                                                        alt="bro" />
                                                </swiper-slide>

                                            </Swiper>

                                        </div>
                                        -->

                                        <div class="card">
                                            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
                                                <template #item="slotProps">
                                                    <Image  :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" preview  />
                                                </template>
                                                <template #thumbnail="slotProps">
                                                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 15%;" />
                                                </template>
                                            </Galleria>
                                        </div>

                                    </div>


                                    <div class="hidden">
                                            <p class="mt-4 text-lg font-bold text-gray-800 md:text-2xl dark:text-gray-200">
                                        {{ props.service.title }}</p>

                                    </div>

                                    <div class="mt-8 card">
                                        <TabView>
                                            <TabPanel header="INFO">


                                                <div  class="py-5 min-h-64">
                                                    <div class="mb-4 text-base text-gray-800 md:text-base dark:text-gray-200">



                                                        <div v-html="props.service.description"></div>

                                                    </div>


                                                    <div class="grid grid-cols-2 gap-4 mb-4">
                                                        <div>
                                                            <p class="font-bold text-gray-500 dark:text-gray-200">Support :</p>
                                                            <div id="support" class="text-gray-800">
                                                                <div class="px-2 mt-2">
                                                                    <ul class="px-4 list-disc dark:text-gray-50">

                                                                        <li v-for="(value, index ) in props.service.basic_support">{{ value }}</li>


                                                                    </ul>

                                                                </div>

                                                            </div>


                                                        </div>


                                                    </div>

                                                    <div class="grid hidden grid-cols-2 gap-4 mb-4">
                                                        <div>
                                                            <p class="font-bold text-gray-500 dark:text-gray-200">Prix :</p>
                                                            <p class="px-2 mt-2 text-gray-700 dark:text-gray-300">à partir de
                                                                <span class="text-lg text-green-700">{{ props.service.price }}</span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p class="font-bold text-gray-500 dark:text-gray-200">Délai :</p>
                                                            <p class="text-gray-700 dark:text-gray-300">{{ props.service.basic_delivery_time }} jours
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="grid grid-cols-2 gap-4 mb-4">



                                                    </div>
                                                    <div class="grid grid-cols-2 gap-4 mb-6">
                                                            <div>
                                                            <p class="font-bold text-gray-500 dark:text-gray-200">Besoin pour ce service :</p>


                                                            <div v-html="props.service.need_service"></div>
                                                            </div>
                                                    </div>



                                                </div>
                                            </TabPanel>
                                            <TabPanel header="Example">


                                            <div v-if="props.service.example != null" class="grid grid-cols-1 gap-4 ">


                                                <div class="p-4 bg-white rounded-md shadow dark:bg-gray-800">
                                                    <div class="flex flex-row gap-2 p-4 mb-4">
                                                        <Swiper
                                                    :modules="[Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y]"
                                                    effect="fade"
                                                    :slides-per-view="1"
                                                    navigation
                                                    >
                                                    <swiper-slide v-for="(image, index) in props.service.example.image">

                                                        <img class="object-fill rounded-md h-10/12 swiper-lazy"
                                                            :src = "'/storage/' + image"
                                                            alt="bro" />
                                                    </swiper-slide>

                                                </Swiper>
                                                    </div>
                                                    <div class="p-4 mt-2 font-sans text-gray-700 dark:text-gray-200">
                                                        <div v-html="props.service.example.description"></div>
                                                    </div>
                                                </div>


                                            </div>
                                            </TabPanel>
                                            <TabPanel header="Commentaires">

                                                    <div>
                                                        <div class="p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600">
                                                        <p class="text-sm text-gray-700 md:text-base dark:text-gray-300">
                                                        Hello</p>

                                                        <div class="flex items-center my-4">
                                                            <svg class="w-4 h-4 mr-1 text-yellow-500 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                <path
                                                                    d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" />
                                                            </svg>

                                                            <span
                                                                class="text-sm font-semibold text-gray-700 dark:text-gray-100">(3)
                                                            </span>
                                                        </div>
                                                            <div>

                                                                <div>

                                                                </div>
                                                                <div>
                                                                        <p class="font-bold text-gray-800">Bro</p>
                                                                </div>
                                                            </div>

                                                        </div>


                                                    </div>


                                            </TabPanel>
                                        </TabView>
                                    </div>

                            <div class="px-4 mt-6">
                                <p class="mb-4 text-lg font-medium text-gray-800 dark:text-gray-200">À propos du freelance
                                </p>
                                <div class="flex items-center gap-4 mb-8">





                                    <div>
                                        <p class="font-bold text-gray-800 dark:text-gray-300">
                                            {{ props.service.freelance.nom }}</p>
                                        <p class="block text-gray-700 truncate dark:text-gray-300">
                                            {{ props.service.freelance.nom }}</p>
                                    </div>
                                </div>
                            </div>




                        </div>

                    </div>

                </div>
            </div>


        </div>

         <div class="px-4 mt-4">
            <div class="px-4">
                <p class="text-lg font-bold text-gray-800 dark:text-gray-200">Du meme Categorie</p>
            </div>


            <div class="grid gap-4 px-4 py-4 mx-auto md:grid-cols-4">

                <div v-for="service in props.otherService">
                                <ServiceCard :service="service" :key="service.id"/>

                </div>

                <div v-if="props.otherService == null" class="flex items-center justify-center h-64">
                    <span class="text-lg font-medium text-gray-500">
                        Aucun élément trouvé.
                    </span>
                </div>

            </div>
        </div>

    </div>
</template>







<style  scoped>

#card{
    position: sticky !important;
    top: 8rem !important;

}

</style>

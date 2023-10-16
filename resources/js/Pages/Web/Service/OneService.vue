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
         <div class="px-2">
              All/Service
        </div>
        <div>
            <button onclick="history.back()">Retour</button>
        </div>

        <div class="container px-4 py-4 mx-auto">

            <div>


            </div>
            <div class="w-full md:w-2/3">
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







<style lang="scss" scoped></style>

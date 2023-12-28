





<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
 // Assurez-vous d'ajuster le chemin d'importation
import { onMounted, ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import {router} from '@inertiajs/vue3';
import ServiceCard from '@/Components/ServiceCard.vue';

import { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y, EffectCube } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Collapse } from 'vue-collapsed';




const props= defineProps({
    freelance:Object,
    services: Object,
    realisations : Array,
})

const freelance= computed(()=>props.freelance.data);

const services= computed(()=>props.services.data);



const contacter = () => {

    router.post(route('user.createChat'), {
        freelance_id: props.freelance.data.id,
    })


}


defineOptions({
    layout: WebLayout,

});

const swiperInstanceServices = ref(null);
const onSwiperInitializedService = (swiper) => {
    swiperInstanceServices.value = swiper;

}

const swiperInstanceRealisation =ref(null);

const onSwiperInstanceRealisation= (swiper) => {
    swiperInstanceRealisation.value = swiper;
};

const navigateService = (direction) => {
    if (swiperInstanceServices.value) {
        if (direction === 'prev') {
            swiperInstanceServices.value.slidePrev();
        } else if (direction === 'next') {
            swiperInstanceServices.value.slideNext();
        }
    }
};

const navigateRealisation =(direction)=>{
     if (swiperInstanceRealisation.value) {
        if (direction === 'prev') {
            swiperInstanceServices.value.slidePrev();
        } else if (direction === 'next') {
            swiperInstanceRealisation.value.slideNext();
        }
    }

}

const showMore = ref(false);

const truncateText =(text, length)=> {
    return text.length > length ? text.slice(0, length) + '...' : text;
}

const toggler=ref(false);

const images = ref([]);

const open=ref(false);
const open2 = ref(false);




props.realisations.forEach((realisation) => {
    // Assuming 'media' is the name of the array within the 'realisation' object
realisation.media.forEach((media) => {

    images.value.push(media.url);

});


});






</script>


<template>
   <div class="relative min-h-screen pt-16 overflow-auto">

        <div class="relative flex flex-col bg-gray-100 dark:bg-gray-900 lg:flex-row">



            <aside class="w-full pb-4 mb-4 overflow-auto bg-white shadow-md dark:bg-gray-800 lg:w-4/12">


                 <div class="sticky top-0">

                                 <div class="flex items-center justify-center ">
                                    <Photo :user="freelance.user" taille="32" />
                                </div>
                                <div>

                                    <div class="w-full px-2 mt-8">
                                        <button type="button" @click="contacter()"
                                            class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                             data-ripple-light="true">
                                            Contacter
                                        </button>

                                    </div>
                                </div>

                            </div>

                    <div class="relative px-6 overflow-y-auto scrollbar-sm ">


                        <h1 class="mt-4 text-lg font-bold text-gray-800 lg:text-lg xl:text-xl 2xl:text-3xl">
                            {{ props.freelance.data.prenom }}
                            {{ props.freelance.data.nom }}</h1>
                        <h2 class="flex justify-between mt-2 text-base font-medium text-gray-500 dark:text-gray-200">
                            <div class="flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                                <span class="items-start text-gray-600 ">
                                    Categories
                                </span>

                            </div>

                            <span class="text-base text-gray-700 dark:text-gray-100">{{ props.freelance.data.category.name }}</span>
                        </h2>

                        <h2 class="flex justify-between gap-1 mt-4 font-medium text-gray-800 dark:text-gray-200">

                            <div class="flex gap-1">
                               <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span class="text-gray-600 ">Localisation</span>

                            </div>


                            <span class="text-base text-gray-700 dark:text-gray-100">{{ props.freelance.data.localisation['ville'] ?
                                props.freelance.data.localisation['ville'] : '' }}</span>
                        </h2>


                        <h2 class="flex justify-between gap-2 mt-2 font-medium text-gray-500 dark:text-gray-200">
                            <div class="flex gap-1 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-()">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <span class="text-gray-600 ">Niveau</span>

                            </div>

                            <span>{{ props.freelance.data.level }}</span>
                        </h2>



                        <div v-if="props.freelance.data.compte != null" class="flex flex-col mt-4">
                            <div>
                                <h1 class="text-base text-gray-600 dark:text-gray-500">Comptes Liees</h1>
                            </div>
                            <div class="flex gap-4 mt-4 ">




                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-6 h-6 svg3" viewBox="0 0 512 512">
                                        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->

                                        <path
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                    </svg></a>


                            </div>
                        </div>

                        <div class="flex flex-col mt-4">

                            <div class="text-base text-gray-600 dark:text-gray-500">
                                <h1>Sous categorie cle</h1>
                            </div>
                            <div>
                                <div class="inline-flex flex-wrap items-center gap-3 mt-4 min:h-12 group">


                                     <template v-for="(subCategory, index) in props.freelance.data.subCategorie" :key="subCategory.id">
                                        <span v-tooltip="subCategory.name"
                                                class="items-center py-1 cursor-default px-2 rounded-md text-[12px] lg:text-[14px] font-medium border border-secondary-200 shadow-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none">
                                            {{ subCategory.name }}
                                        </span>



                                        <!-- Additional check for last iteration and remaining items -->
                                        <span v-if="index === 4 && props.freelance.data.subCategorie?.length > 5"
                                                class="ml-2 text-sm text-gray-500">
                                            (+{{ props.freelance.data.subCategorie.length - 5 }} de plus)
                                        </span>
                                        </template>

                                        <!-- Handle the case where there are no subcategories -->



                                </div>
                            </div>

                        </div>

                        <div class="flex flex-col mt-4 lg:hidden">



                            <div class="text-base text-gray-600 dark:text-gray-500">
                                <h1>Competences</h1>
                            </div>
                            <div>



                                <div v-for="compt in props.freelance.data.competences" class="inline-flex flex-wrap items-center gap-3 mt-4 min-h-12 group">
                                    <span data-tooltip-target=""
                                        class="items-center py-1 cursor-default px-2 rounded-md text-[12px] lg:text-[14px] font-medium border border-secondary-200 shadow-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none">
                                        {{ compt.title }}
                                    </span>
                                </div>

                            </div>

                        </div>


                        <div class="flex flex-col mt-4">


                            <div class="text-base text-gray-600 dark:text-gray-500">
                                <h1>Commande</h1>
                            </div>


                            <div class="flex justify-between mt-4">
                                <span>Effectuer</span>
                                <span
                                    class="items-center py-1 cursor-default px-2 rounded-md text-[14px] font-medium border border-secondary-200 shadow-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none">
                                    {{ props.freelance.data.commande_realiser }}
                                </span>
                            </div>
                            <div class="flex justify-between mt-4">
                                <span>En Cours</span>
                                <span
                                    class="items-center py-1 cursor-default px-2 rounded-md text-[14px] font-medium border border-secondary-200 shadow-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none">
                                    {{ props.freelance.data.commande_encours }}
                                </span>

                            </div>


                        </div>




                        <div>
                            <div class="relative mb-3">
                                <h6 class="mb-0">
                                    <button @click="open = !open"
                                        class="relative flex items-center w-full p-4 text-base font-semibold text-left text-gray-600 transition-all ease-in border-b border-solid cursor-pointer border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                        data-collapse-target="animated-collapse-1">
                                        <span>Certification</span>
                                        <i :class="open ? 'rotate-180 transition-transform' : ''"
                                            class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                                    </button>
                                </h6>
                                <Collapse :when="open" class="overflow-hidden transition-all duration-300 ease-in-out ">
                                    <div class="p-4 text-sm leading-normal text-blue-gray-500/80">

                                        <div v-for="(certificat , index) in props.freelance.data.certificat" class="flex flex-col rounded-lg ">
                                            <div class="text-base font-bold text-gray-700 dark:text-gray-500">
                                                <div class="flex gap-2 lg:justify-between">
                                                    <span>Certifier </span>
                                                    <span
                                                        class="block text-gray-700 dark:text-gray-200">{{ certificat['certifier'] }}</span>
                                                </div>

                                            </div>
                                            <div class="text-base font-bold text-gray-700 dark:text-gray-500">
                                                <div class="flex gap-2 lg:justify-between">

                                                    <span>

                                                        Par :
                                                    </span>
                                                    <span class="block text-gray-700 dark:text-gray-200">
                                                        {{ certificat['delivrer'] }} / {{ certificat['annee'] }}

                                                    </span>
                                                </div>
                                            </div>
                                            <div class="text-base font-bold text-gray-700 dark:text-gray-500">
                                                    <div class="flex gap-2 lg:justify-between">

                                                        <span>

                                                            Année :
                                                        </span>
                                                        <span class="block text-gray-700 dark:text-gray-200">
                                                              {{ certificat['annee'] }}

                                                        </span>
                                                    </div>
                                                </div>

                                        </div>

                                    </div>
                                </Collapse>
                            </div>


                        </div>




                        <div>
                            <div  class="relative mb-3">
                                <h6 class="mb-0">
                                    <button @click="open2 = !open2"
                                        class="relative flex items-center w-full p-4 text-base font-semibold text-left text-gray-600 transition-all ease-in border-b border-solid cursor-pointer border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                        data-collapse-target="animated-collapse-1">
                                        <span>Education</span>
                                        <i :class="open2 ? 'rotate-180 transition-transform' : ''"
                                            class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                                    </button>
                                </h6>
                                <Collapse :when="open2" class="overflow-hidden transition-all duration-300 ease-in-out ">
                                    <div class="p-4 text-sm leading-normal">

                                        <div v-for="(diplome, index) in props.freelance.data.diplome" class="flex flex-col gap-4">

                                             <div class="text-base font-bold text-gray-700 dark:text-gray-500">
                                                    <div class="flex gap-2 lg:justify-between">
                                                        <span>Diplome en :</span>
                                                        <span
                                                            class="block text-gray-700 dark:text-gray-200">{{ diplome['diplome'] }}</span>
                                                    </div>

                                            </div>
                                              <div class="text-base font-bold text-gray-700 dark:text-gray-500">
                                                        <div class="flex gap-2 lg:justify-between">
                                                            <span>Institut:</span>
                                                            <span
                                                                class="block text-gray-700 dark:text-gray-200">{{ diplome['universite'] }}</span>
                                                        </div>

                                                </div>
                                                 <div class="text-base font-bold text-gray-700 dark:text-gray-500">
                                                            <div class="flex gap-2 lg:justify-between">
                                                                <span>Annee:</span>
                                                                <span
                                                                    class="block text-gray-700 dark:text-gray-200">{{diplome['annee'] }}</span>
                                                            </div>

                                                    </div>




                                        </div>
                                    </div>


                                    </Collapse>

                            </div>


                        </div>






                        <div class="lg:h-48">

                        </div>

                    </div>

         </aside>




          <main  class="w-full p-6 rounded lg:w-8/12">
             <div class="mx-2 mb-4">
                <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                    <Link :href="route('home')" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        Acceuil
                    </Link>
                </li>

                    <li aria-current="page">
                    <Link :href="route('find_freelance')" class="flex items-center">
                        <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Freelance</span>
                    </Link>
                    </li>
                     <li aria-current="page">
                        <div  class="flex items-center">
                            <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{{ props.freelance.data.identifiant }}</span>
                        </div>
                        </li>
                </ol>
                </nav>
                </div>


                <section class="bg-white rounded-md dark:bg-gray-800">
                    <div class="px-4 py-12 mx-auto mb-4 max-w-7xl sm:px-6 lg:px-8">
                        <div class="max-w-3xl mx-auto ">
                            <h2
                                class="text-lg font-bold text-center text-gray-800 xl:text-3xl md:text-xl dark:text-gray-200">
                                General
                                information</h2>
                            <p class="my-8 text-gray-00 dark:text-gray-300">Apropos de Moi</p>
                            <div
                                class="max-w-4xl mb-4 text-base text-gray-700 break-words dark:text-gray-300">
                                <template v-if="!showMore">
                                    <p class="">
                                        {{ truncateText(props.freelance.data.description,600) }}
                                    </p>

                                </template>
                                <template v-else="showMore">
                                    <p>{{ props.freelance.data.description }}</p>

                                </template>


                                <div v-if="props.freelance.data.description > 600">
                                    <button @click="showMore = !showMore">
                                        <span v-show="showMore" class="text-blue-600">Lire moins</span>
                                        <span v-show="!showMore" class="text-blue-600">Lire la suite</span>
                                    </button>

                                </div>


                            </div>
                        </div>
                     </div>

                </section>
                <section class="bg-gray-100 dark:bg-gray-800 ">
                    <div class="px-2 py-12 mx-auto max-w-7xl sm:px-4 lg:px-4">
                        <div class="mx-auto text-center ">
                            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Mes Services</h2>
                            <p class="mt-4 text-gray-500 dark:text-gray-200">Voici quelques-uns des services que j'ai créés
                                sur
                                la plateforme :</p>


                                <div class="py-8 swiper">
                                    <div class="flex items-center justify-between">

                                        <div>

                                        </div>
                                        <div class="flex gap-4 p-2">

                                            <button @click="navigateService('prev')"
                                                class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button @click="navigateService('next')"
                                                class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-5">

                                        <swiper class="flex py-8"
                                             :modules="[Navigation, Pagination, Scrollbar, EffectCube, A11y]"
                                            :spaceBetween="30"
                                            :breakpoints="{ 600: { slidesPerView: 1 }, 768: { slidesPerView: 2, }, 992: { slidesPerView: 3, } }"
                                            :space-between="25"
                                             @swiper="onSwiperInitializedService"
                                            >
                                         <swiper-slide v-for="service in services" class="">

                                         <ServiceCard :service="service" />
                                      </swiper-slide>

                                     </swiper>


                                    </div>
                                </div>
                        </div>
                    </div>
                </section>

                <section class="hidden bg-white dark:bg-gray-900">
                    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="max-w-4xl mx-auto text-center">
                            <h2 class="text-3xl font-bold text-gray-800">Mes Projets</h2>
                            <p class="mt-4 text-gray-500 dark:text-gray-200">Voici quelques-uns des projets sur lesquels
                                j'ai
                                travaillé :</p>
                            <div class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                                <div class="overflow-hidden bg-white rounded-lg shadow-lg">
                                    <a href="#">
                                        <img class="object-cover w-full h-48" src="https://via.placeholder.com/500x300"
                                            alt="Projet 1">
                                    </a>
                                    <div class="p-6">
                                        <h3 class="text-lg font-bold text-gray-900"><a href="#">Nom du Projet</a></h3>
                                        <p class="mt-2 text-gray-500">Description du projet</p>
                                    </div>
                                </div>
                                <div class="overflow-hidden bg-white rounded-lg shadow-lg">
                                    <a href="#">
                                        <img class="object-cover w-full h-48" src="https://via.placeholder.com/500x300"
                                            alt="Projet 2">
                                    </a>
                                    <div class="p-6">
                                        <h3 class="text-lg font-bold text-gray-900"><a href="#">Nom du Projet</a></h3>
                                        <p class="mt-2 text-gray-500">Description du projet</p>
                                    </div>
                                </div>
                                <div class="overflow-hidden bg-white rounded-lg shadow-lg">
                                    <a href="#">
                                        <img class="object-cover w-full h-48" src="https://via.placeholder.com/500x300"
                                            alt="Projet 3">
                                    </a>
                                    <div class="p-6">
                                        <h3 class="text-lg font-bold text-gray-900"><a href="#">Nom du Projet</a></h3>
                                        <p class="mt-2 text-gray-500">Description du projet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <!--

                <section class="bg-white dark:bg-gray-800">
                    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="max-w-4xl mx-auto text-center">
                            <h2 class="text-3xl font-bold text-gray-800">Témoignages</h2>
                            <p class="mt-4 text-gray-500">Voici ce que mes clients satisfaits ont à dire :</p>
                            <div class="mt-8 ">

                                <div class="swiper"
                                    x-init="$nextTick(() => $el._x_swiper = new Swiper($el, { slidesPerView: '2', breakpoints:{0:{slidesPerView:1,},520:{slidesPerView:1,},950:{slidesPerView:2,},1100:{slidesPerView:3,}}, spaceBetween: 15, navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' } }))">
                                    <div class="flex items-center justify-between">

                                        <div>

                                        </div>
                                        <div class="flex gap-4 p-2">

                                            <button
                                                class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-5 swiper-wrapper" x-data="{ selected: 'slide-1' }">

                                        @forelse ($commentaires as $commentaire)
                                        <div class="overflow-hidden border-b border-gray-300 rounded-lg swiper-slide dark:bg-gray-900 bg-gray-50 ">
                                            <div class="flex flex-col items-center justify-center gap-2 p-4">
                                                <p class="mt-2 text-gray-500">{{ $commentaire -> commentaires }}</p>

                                                <p class="mt-2 text-base text-gray-400 dark:text-gray-600">
                                                    Serivice: <span class="text-gray-300 dark:text-gray- 700"><a
                                                            href="">{{ $commentaire -> order -> service -> title }}</a></span>
                                                </p>

                                                <div class="flex items-center mx-auto space-x-1">
                                                    @for ($i = 1; $i <= 5; $i++) @if ($i <=$commentaire->satisfaction)
                                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        @else
                                                        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        @endif
                                                        @endfor
                                                </div>


                                                <p class="mt-2 font-medium text-gray-800">{{ $commentaire -> order -> user -> name }}</p>
                                            </div>
                                        </div>
                                        @empty

                                        @endforelse

                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </section>

                -->




                <section class="mt-6 bg-gray-100 rounded-md shadow-sm lg:p-6 dark:bg-gray-900">


                    <div class="max-w-4xl mx-auto mb-4 text-center">
                            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200">Mes réalisations</h2>
                            <p class="mt-4 text-gray-500 dark:text-gray-100">Voici ce que mes clients satisfaits ont à dire :</p>
                    </div>


                     <div class="flex items-center justify-between">

                            <div v-if="props.realisations.length !=0" class="mb-4">
                                    <button @click="toggler =!toggler"
                                        class="relative w-16 p-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:ring focus:outline-none dark:bg-gradient-to-r dark:from-indigo-500 dark:to-blue-500 dark:text-white dark:hover:from-indigo-600 dark:hover:to-blue-600 dark:focus:ring dark:focus:outline-none">
                                    <span class="sr-only">Play</span>
                                    <svg class="w-6 h-6 m-auto " fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 3l14 9-14 9V3z"></path>
                                    </svg>


                                </button>

                                <FsLightbox
                                    :toggler="toggler"
                                    :sources="images" />

                            </div>
                            <div class="flex gap-4 p-2">

                                <button @click="navigateRealisation('prev')"
                                    class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button @click="navigateRealisation('next')"
                                    class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    <div class="">


                        <div class="p-4 bg-white rounded-md shadow dark:bg-gray-800">

                                 <Swiper
                                        :modules="[Navigation,Scrollbar, Pagination,A11y]"

                                        :slides-per-view="1"
                                        navigation
                                        @swiper="onSwiperInstanceRealisation"
                                        >
                                        <swiper-slide v-for="realisation in props.realisations">


                                            <div class="my-3" v-for="media in realisation.media">
                                                <img  class="object-fill w-full rounded-md min-h-[500px]"
                                                    :src="media.url"
                                                    :alt="media.alt" />



                                            </div>


                                                <div class="p-4 mt-auto bg-gray-200 rounded-md dark:bg-gray-700">
                                                    {{realisation.description}}
                                                </div>
                                        </swiper-slide>

                                 </Swiper>




                        </div>

                    </div>
                </section>


            </main>


        </div>

    </div>
</template>

<style lang="css" scoped>

</style>

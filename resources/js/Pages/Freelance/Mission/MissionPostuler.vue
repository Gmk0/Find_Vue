<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

        <div class="flex flex-col">
            <div>
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <Link :href="route('freelance.dashboard')"
                                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Dashboard
                            </Link>
                        </li>

                        <li aria-current="page">
                            <Link :href="route('freelance.missions')" class="flex items-center">
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Mission</span>
                            </Link>
                        </li>
                          <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span
                                        class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Postuler</span>
                                </div>
                            </li>
                    </ol>
                </nav>


            </div>

            <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Mission {{ mission.mission_numero }} </h1>

        </div>
        <div>

            <div v-if="props.missionResponse !=null">
            <Message :closable="false" severity="info">Vous avez deja postuler pour cette mission</Message>
            </div>
              <div class="container py-8 lg:px-2">

            <div class="p-6 mb-3 bg-white rounded-lg shadow-md dark:bg-navy-800">
                <h2 class="mb-4 text-lg font-bold text-gray-800 dark:text-gray-50 lg:text-xl">{{ mission.title }}</h2>
                <p class="mb-4 text-gray-600 dark:text-gray-200">Description de la mission :</p>
                <p class="mb-4 leading-loose text-gray-800 dark:text-gray-50">
                    {{ mission.description }}
                </p>
                <p class="mb-4 text-gray-600 dark:text-gray-200">Détails du projet :</p>
                <ul class="mb-4 list-disc list-inside">
                    <li class="text-gray-600 dark:text-gray-200">Durée du de la mission : Du <span
                            class="font-bold text-gray-800 dark:text-gray-50">{{ mission.begin_mission}}</span> au
                        <span class="font-bold text-gray-800 dark:text-gray-50">
                            {{ mission.end_mission }}
                        </span>

                    </li>
                    <li class="mt-4 text-gray-600 dark:text-gray-200">Budget : <span
                            class="text-lg font-bold text-amber-600 ">{{ mission.budget }} $</span>
                    </li>

                </ul>
                <p class="mb-4 text-gray-600 dark:text-gray-200">Exigences de la mission :</p>
             <div v-html="mission.exigences">


             </div>
                <div class="flex flex-col gap-1 mt-4 mb-3">

                    <p class="mb-1 text-gray-600 dark:text-gray-200">Fichier Inclus :

                    </p>


                    <div v-if="mission.files !=null">
                        <div class="flex flex-col items-start justify-start py-4">

                                <div v-for="(file, index) in mission.files">

                                                                    <div v-if="!isImage(file)">
                                                                        <div class="relative group">
                                                                            <div class="flex flex-wrap items-center">
                                                                                <!-- Votre logique pour afficher le nom ou l'icône du fichier non image -->
                                                                                <p>{{ file.name }}</p> <!-- Afficher le nom du fichier non image -->
                                                                                <!-- Ou utiliser une icône spécifique pour les fichiers non image -->
                                                                                <i class="fas fa-file-alt"></i>
                                                                            </div>
                                                                            <div class="absolute top-0 right-0 mt-2 mr-2">
                                                                                <!-- Bouton pour supprimer le fichier -->

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div v-else class="flex-flex-wrap">
                                                                        <!-- Si c'est une image -->
                                                                        <div class="relative group">
                                                                            <img :src="'/storage/' + file" alt="Product Name"
                                                                                class="w-24 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80">

                                                                        </div>
                                                                    </div>
                                                                </div>
                        </div>

                    </div>

                    <p v-else>Pas de fichier inclus</p>


                </div>




                <p class="mb-4 text-lg font-extrabold text-gray-800 dark:text-gray-200">Postuler à cette mission</p>






            </div>



              <div x-cloak x-show="show" x-collapse class="p-8 mt-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:">

                <form @submit.prevent="sendMessage()" class="grid grid-cols-1 gap-4">

                    <div class="flex flex-col w-full gap-4">
                          <InputLabel for="Message" value="Message" />

                        <Textarea required v-model="form.message" rows="10"  class="w-full" placeholder="Message" />
                    </div>
                    <div>

                        <div class="flex">
                            <label class="inline-flex items-center">
                                <input type="checkbox" v-model="isOpen" class="w-5 h-5 text-gray-600 rounded-full form-checkbox"
                                    name="example" value="">
                                <span class="ml-2 text-sm text-gray-700 md:text-base dark:text-gray-300">Proposer un prix
                                </span>
                            </label>

                        </div>

                        <div v-if="isOpen" class="p-4">
                            <div class="flex">
                                <span
                                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </span>
                                <input type="number" required id="website-admin" v-model="form.budget"
                                    class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-amber-500 focus:border-amber-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                                    placeholder="Prix">
                            </div>
                        </div>


                    </div>



                    <div v-if="props.missionResponse == null" class="flex items-center justify-center">
                        <Button type="submit" label="Postuler" severity="info" />
                    </div>
                    <div v-else class="flex items-center justify-center">
                          <Button type="submit" label="Changer" severity="info" />

                    </div>
                </form>

              </div>







        </div>

        </div>

    </div>
</template>


<script setup>

import InputLabel from '@/Components/InputLabel.vue';
import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';
import { Link , useForm } from '@inertiajs/vue3';
import {ref, computed} from 'vue';

const props =defineProps({
    mission:Object,
    missionResponse:Object,
})

const isOpen = ref(false);

const form = useForm({
    message:props.missionResponse?.content,
    budget: props.mission.data.budget,
    mission_id:props.mission.data.id,
})


const sendMessage=()=>{

    form.post(route('freelance.missions.postulerSend'),{

        onError:(error)=>{
            alert(error.message);
        }
    })
}

const mission  = computed(()=> props.mission.data)
defineOptions({
    layout: FreelanceLayout,

});

const isImage = (fileName) => {
    let imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp']; // Liste des extensions d'image
    let extension = fileName.split('.').pop().toLowerCase(); // Récupérer l'extension du fichier

    return imageExtensions.includes(extension); // Vérifier si l'extension est dans la liste des extensions d'image
}

</script>

<style lang="scss" scoped></style>

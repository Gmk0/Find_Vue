


<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

        <Toast position="bottom-right" group="br" />
        <div class="flex flex-col">
            <div>
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <Link :href="route('user.dashboard')"
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
                            <Link :href="route('user.missions')" class="flex items-center">
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Edit</span>
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
                                        class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Mission</span>
                                </div>
                            </li>
                    </ol>
                </nav>


            </div>

            <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Mission Modification</h1>

        </div>

        <div>


            <form @submit.prevent="modifier()" class="p-4 mt-2 border border-gray-100 rounded-md min-h-72 ">
                            <div  class="flex flex-col mt-4 ">
                                <div class="w-full">

                                    <InputText
                                        id="name"
                                        required
                                        v-model="form.title"
                                        autofocus
                                        class="w-full"
                                        placeholder="Titre"

                                    />

                                </div>
                                <div class="w-full mt-4">

                                    <Textarea
                                    v-model="form.description"
                                    rows="4"
                                    cols="10"
                                    class="w-full" placeholder="Decrivez votre mission.data.." />

                                </div>

                                <div class="mt-4 W-full">
                                    <Dropdown v-model="form.category_id"
                                    optionValue="id"
                                    :options="category"
                                     showClear optionLabel="name"
                                      placeholder="Categories"
                                      class="!w-full" />

                                </div>

                            </div>

                             <div class="flex flex-col w-full mt-4">
                                    <div class="flex gap-8">
                                    <div class="flex w-full ">

                                            <Calendar v-model="form.dateD"
                                            class="w-full"
                                            placeholder="Date debut" />


                                    </div>
                                    <div class="flex w-full">

                                                <Calendar v-model="form.dateF"
                                                class="w-full"
                                                inputId="birth_date"

                                                placeholder="Date Fin" />


                                    </div>

                                    </div>
                                    <div class="mt-4 mb-4">
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exigences</label>
                                        <Textarea id="message"
                                        v-model="form.exigence"
                                        rows="4"
                                        cols="10"
                                        class="w-full "
                                         placeholder="Exigences pour la mission"/>
                                    </div>
                                      <div >

                                            <InputText
                                                id="name"

                                                type="text"
                                                class="block w-full mt-1"
                                                required
                                                placeholder="Budget"
                                                v-model="form.budget"

                                            />

                                        </div>
                                </div>

                               <div class="grid mt-6 lg:grid-cols-2">


                                    <div class="flex flex-col items-start justify-start py-4">
                                            <div class="flex flex-wrap mt-4 space-x-2">

                                                            <div v-for="(file,index) in mission.files">

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
                                                                            <Button @click="remove(index)" size="small" outlined icon="pi pi-trash" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-else class="flex-flex-wrap">
                                                                    <!-- Si c'est une image -->
                                                                    <div class="relative group">
                                                                        <img :src="'/storage/' + file" alt="Product Name"
                                                                            class="w-16 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80">
                                                                        <div class="absolute top-0 right-0 mt-2 mr-2">
                                                                            <!-- Bouton pour supprimer le fichier -->
                                                                            <Button @click="remove(index)" size="small" outlined icon="pi pi-trash" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                            </div>
                                     </div>



                                 <div class="lg:col-span-1 card">
                                    <Toast />
                                    <FileUpload
                                    :auto="true"
                                    @select="onSelect"
                                    @upload="onAdvancedUpload($event)"
                                    :multiple="true"
                                    accept="image/*"
                                    :maxFileSize="1000000">
                                        <template #empty>
                                            <p>Drag and drop files to here to upload.</p>
                                        </template>
                                    </FileUpload>
                                 </div>
                               </div>

                             <div class="flex justify-center mt-4">

                                <Button
                                type="submit"
                                label="Modifier"
                                outlined
                                 />

                    </div>

             </form>



        </div>


    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';

import { useToast } from "primevue/usetoast";
import { Link, useForm,router } from '@inertiajs/vue3';

import { computed, ref, inject } from 'vue';
import { useCategoryStore } from '@/store/store';



const toast= useToast();

const props = defineProps({
    mission : Object,
})
const useCategory = useCategoryStore();

const category =  computed(() => useCategory.categoriesGet.categories);;


const mission = computed(() => props.mission.data);

const form = useForm({
    title: props.mission.data.title,
    exigence: props.mission.data.exigences,
    description: props.mission.data.description,
    dateD: props.mission.data.begin_mission,
    dateF: props.mission.data.end_mission,
    budget: props.mission.data.budget,
    category_id: props.mission.data.category.id,
    mission_id: props.mission.data.id,
    image:null,
})


const modifier=()=>{


    form.post(route('missionEdit'),{
        onSuccess: ()=>{

             toast.add({ severity: 'info', summary: 'Message', detail: 'Mission modifier', group: 'br', life: 1000 });
        },
        onError:(error)=>{

            console.log(error);

        }
    })

}


const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '..' : text;
}



const remove =(index)=>{


    router.post(route('removeFileMission'),{
        file_index: index,
        mission_id: props.mission.data.id
    },{
        preserveScroll:true,
        onSuccess: () => {
            form.image=null;
            toast.add({ severity: 'info', summary: 'Message', detail: 'Photo supprimer', group: 'br', life: 1000 });
        },

    });

}


const onAdvancedUpload = () => {
   // toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

const step = ref(1);
const date = ref('');

const onSelect = (event) => {
    form.image = event.files;
};

const isImage = (fileName) => {
    let imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp']; // Liste des extensions d'image
    let extension = fileName.split('.').pop().toLowerCase(); // Récupérer l'extension du fichier

    return imageExtensions.includes(extension); // Vérifier si l'extension est dans la liste des extensions d'image
}

defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

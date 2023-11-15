<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

        <div class="flex flex-col">
            <div>
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <Link :href="$page.props.urlPrev"
                                class="inline-flex items-center px-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                                </svg>
                                <span class="ml-2">
                                    Retour


                                </span>

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
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Realisations-Ajout</span>
                            </div>
                        </li>
                    </ol>
                </nav>


            </div>

            <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Realisations Ajout</h1>

        </div>

        <div class="flex flex-col mt-4">


            <div class="">



            </div>



            <div class="grid grid-cols-1 lg:grid-cols-2 mb-6 lg:mb-0 gap-6">

                <div class="lg:col-span-2  card">

                    <Textarea v-model="form.description" class="w-full" rows="6" />

                </div>

                <div>
                     <div class="flex flex-col items-start justify-start py-4">
                            <div class="flex flex-wrap mt-4 space-x-2">

                                <div v-for="(file, index) in realisationsImage.media">


                                    <div  class="flex-flex-wrap">
                                        <!-- Si c'est une image -->
                                        <div class="relative group">
                                            <img :src="file.url" :alt="file.alt"
                                                class="w-24 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80">
                                            <div class="absolute top-0 right-0 mt-2 mr-2">
                                                <!-- Bouton pour supprimer le fichier -->
                                                <Button @click="removeOneFile(index)" size="small" outlined icon="pi pi-trash" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div class="lg:col-span-1 card">
                    <Toast />
                    <FileUpload :auto="true" @select="onSelect" :showUploadButton="false" :show-cancel-button="false"
                        :file-limit="2" ref="fileUpload" :multiple="true" accept="image/*" :maxFileSize="10000000">

                        <template #header="{ chooseCallback }">
                            <div class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center">
                                <div class="flex gap-2">
                                    <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>

                                </div>
                            </div>
                        </template>
                        <template #empty>
                            <p>Faites glisser et déposez les fichiers ici pour les télécharger.</p>
                        </template>
                    </FileUpload>
                </div>




                <div class="flex items-center justify-center lg:col-span-2">
                    <Button label="Enregistrer" @click="sendFile" />
                </div>

            </div>

        </div>

    </div>
</template>


<script setup>

import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';

import { ref, computed } from 'vue';

import { useForm, router, Link } from '@inertiajs/vue3';

defineOptions({
    layout: FreelanceLayout,

});

const props = defineProps({
    realisations: Array,
})

const realisationsImage = computed(() => props.realisations[0]);
const fileUpload = ref(null);

const form = useForm({
    image: null,
    id:props.realisations[0].id,
    description: props.realisations[0].description,
});

const onSelect = (event) => {
    form.image = event.files;
};


const removeOneFile=(id)=>
{

    router.post(route('removeOneFile'),{
        realisation_id: props.realisations[0].id,
        media_id: id,
    },{

    });
}


const sendFile = () => {


    if(form.description ==='')
    {
        return false;

    }


    form.post(route("freelance.editRealisation"), {
        onFinish: () => {

            fileUpload.value.removeUploadedFiles();
            form.reset('image');

        },
        onSuccess: () => {
            form.reset( 'image');


        },
        onError: (error) => {
            alert(error.message);
        }
    })




}




</script>

<style lang="scss" scoped></style>

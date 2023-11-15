<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

        <Toast />

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
                            <div class="flex items-center">
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Realisations</span>
                            </div>
                        </li>
                    </ol>
                </nav>


            </div>

            <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Realisations</h1>

        </div>

        <div class="flex flex-col mt-4">

            <div class="mb-4">
                <Link :href="route('freelance.realisationsAjout')">
                <Button label="Ajouter"  outlined/>

                </Link>
            </div>

            <div class="">

                 <div class="card">
                        <DataTable stripedRows paginator :rows="10" :rowsPerPageOptions="[2, 10, 20, 50]"
                            :value="realisationsImage" tableStyle="min-width: 50rem">

                            <template #empty> Pas de realisation. </template>
                            <template #loading> Loading customers data. Please wait. </template>

                            <Column sortable field="id" header="id"></Column>
                            <Column field="description" header="description"></Column>

                            <Column  header="description">

                                <template  #body="slotProps">


                                    <div v-for="image in slotProps.data.media ">
                                        <img class="w-12" :src="image.url" :alt="image.alt" />
                                    </div>
                                </template>

                            </Column>



                            <Column :exportable="false" style="min-width:4rem">
                                <template #body="slotProps">

                                    <div class="flex gap-4">
                                    <Link :href="route('freelance.realisationsEdit', slotProps.data.id)">
                                    <span><i class="pi pi-pencil"></i></span>
                                    </Link>

                                     <a href="#" @click="deleteRealisation(slotProps.data.id)" class="px-2 text-[15px]">
                                        <span><i class="pi pi-trash  text-red-600"></i></span>
                                     </a>
                                     </div>


                                </template>
                            </Column>

                        </DataTable>
                    </div>



            </div>






        </div>

    </div>
</template>


<script setup>

import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';

import {ref, computed } from 'vue';

import {router, useForm} from '@inertiajs/vue3';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

defineOptions({
    layout: FreelanceLayout,

});

const props=defineProps({
    realisations:Array,
})

const realisationsImage=computed(()=>props.realisations);

const fileUpload =ref(null);

const form= useForm({
    image:null,
    description:null,
});

const onSelect = (event) => {
    form.image = event.files;
};

const modalEffacer=ref(false);
const deleteRealisation =(id)=>{


    router.post(route('removeRealisation'),{
        id:id,
    },{

        preserveScroll:true,
    })



}

const confirm2 = (id) => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        rejectClass: 'p-button-text p-button-text',
        acceptClass: 'p-button-danger p-button-text',
        accept: () => {

            alert();
           // toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            //toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};



const sendFile=()=>{



    form.post(route("addRealisation"),{
        onFinish:()=>{

            fileUpload.value.removeUploadedFile();
            form.reset();

        },
    })




}




</script>

<style lang="scss" scoped></style>

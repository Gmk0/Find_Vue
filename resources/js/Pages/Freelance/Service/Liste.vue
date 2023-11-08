


<template>
      <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

            <Toast position="bottom-right" group="br" />
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
                                            class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Services</span>
                                    </div>
                                </li>
                        </ol>
                    </nav>
                </div>
                <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Services</h1>
            </div>

            <div>
                 <div class="card">
                        <DataTable stripedRows   paginator :rows="10" :rowsPerPageOptions="[10, 20, 50]" :value="services" tableStyle="min-width: 50rem"
                         >
                            <template #empty> No customers found. </template>
                            <template #loading> Loading customers data. Please wait. </template>

                            <Column sortable  field="service_numero" header="service_numero"></Column>

                             <Column sortable  field="title" header="title"></Column>

                            <Column field="basic_price" header="basic_price">
                             <template #body="slotProps">
                                {{ formatCurrency(slotProps.data.basic_price) }} $
                            </template>
                            </Column>
                             <Column header="files">
                            <template #body="slotProps">

                                <div class="flex gap-1" v-for="(image,index) in  slotProps.data.files">
                                <img  class="w-12 mb-2" :src="'/storage/'+ image" />

                                </div>
                            </template>
                             </Column>
                               <Column sortable  field="commandeEncours" header="Commande en cours"></Column>

                                <Column   header="is_publish">
                                    <template #body="slotProps">

                                          <InputSwitch class="mt-2" @change="publish(slotProps.data.id)" required v-model="slotProps.data.is_publish"
                                          id="titre" />

                                    </template>
                                </Column>

                             <Column :exportable="false" style="min-width:4rem">
                                <template #body="slotProps" >
                                        <div class="flex gap-4">

                                        <Link :href="route('freelance.services.edition', slotProps.data.service_numero)">
                                              <span><i class="pi pi-pencil"></i></span>
                                        </Link>

                                         <Link :href="route('freelance.services.edition', slotProps.data.service_numero)">
                                                  <span><i class="pi pi-eye"></i></span>
                                        </Link>

                                        </div>



                                </template>
                                  </Column>

                        </DataTable>
                    </div>
            </div>


        </div>
</template>

<script setup>

import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';

import {computed} from 'vue';
import { Link, router } from '@inertiajs/vue3';
import axios from 'axios';

const props=defineProps({
    services:Array
});



const publish = async (service_id) => {

    try {
        const response = await axios.post(route('freelance.services.publisher'), {
            id: service_id,
        });

    } catch (e) {

        console.log(e);
    }



}

const services=computed(()=> props.services.data)

defineOptions({
    layout: FreelanceLayout,

});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

</script>

<style lang="css" scoped></style>

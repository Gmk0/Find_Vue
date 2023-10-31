


<template>

   <div class="flex flex-col min-h-screen gap-6 mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

    <div class="flex flex-col">
        <div>
            <nav class="py-2">
        <ul class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-100">
    <li>
        <Link :href="route('home')"  class="">Commande</Link>

    </li>
    <li>
        <span class="mx-2 text-base">></span>
    </li>

        <li class="text-gray-700 dark:text-gray-200">
            Liste

        </li>
    </ul>
            </nav>
        </div>

        <h1 class="text-3xl font-bold text-black dark:text-white">Commandes</h1>

    </div>

    <div>


    </div>




    <div class="mt-4">
        <div>
            <div class="card">
                <DataTable stripedRows   paginator :rows="2" :rowsPerPageOptions="[2, 10, 20, 50]" :value="commandes.data" tableStyle="min-width: 50rem"
                 >

            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>

                    <Column sortable  field="order_numero" header="order_numero"></Column>
                    <Column field="service.title" header="TITLE"></Column>
                    <Column field="total_amount" header="Montant">
                     <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.total_amount) }}
                    </template>
                    </Column>
                    <Column field="status" header="status"></Column>
                     <Column :exportable="false" style="min-width:4rem">
                        <template #body="slotProps">
                            <Link :href="route('user.commandes.one',[slotProps.data.order_numero])">
                                <span><i class="pi pi-pencil"></i></span>
                            </Link>


                        </template>
                          </Column>

                </DataTable>
            </div>
        </div>
    </div>

    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
//import ColumnGroup from 'primevue/columngroup';   // optional
//import Row from 'primevue/row';
//import Paginator from 'primevue/paginator';
//import Button from 'primevue/button';


defineProps({
    commandes : Array
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}


defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

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
                            <div class="flex items-center">
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Releves</span>
                            </div>
                        </li>
                    </ol>
                </nav>


            </div>

            <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Releves</h1>

        </div>
        <div>
            <div  class="grid gap-4 md:grid-cols-3">
            <div class="px-6 py-3 bg-white rounded-lg shadow-xl dark:bg-navy-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-bold text-gray-700 dark:text-gray-200 ">Total credit</span>

                </div>
                <div class="flex items-center justify-between mt-6">
                    <div>
                        <svg class="w-12 h-12 p-1 text-gray-600 border rounded-full bg-amber-400 border-amber-600 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-end">
                            <span class="text-2xl font-bold dark:text-gray-200 2xl:text-4xl">{{ props.credits }}</span>

                        </div>
                    </div>
                </div>
            </div>
            <div class="px-6 py-3 bg-white rounded-lg shadow-xl dark:bg-navy-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-bold dark:text-gray-200 text-gary-700">Total debit</span>

                </div>
                <div class="flex items-center justify-between mt-6">
                    <div>
                        <svg class="w-12 h-12 p-1 text-gray-600 border rounded-full bg-amber-400 border-amber-600 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-end">
                            <span class="text-2xl font-bold dark:text-gray-200 2xl:text-4xl">{{ props.debits }} $</span>

                        </div>
                    </div>
                </div>
            </div>
            <div class="px-6 py-3 bg-white rounded-lg shadow-xl dark:bg-navy-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-bold text-gray-700 dark:text-gray-200">Total Paiment</span>

                </div>
                <div class="flex items-center justify-between mt-6">
                    <div>
                        <svg class="w-12 h-12 p-1 text-gray-600 border rounded-full bg-amber-400 border-amber-600 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-end">
                            <span class="text-2xl font-bold dark:text-gray-200 2xl:text-4xl">{{ props.paiments }} $</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

          <div class="mt-4">

                    <div>

                        <div class="card">
                            <DataTable  v-model:filters="filters" stripedRows removableSort dataKey="id" filterDisplay="row"    showGridlines   paginator :rows="10" :rowsPerPageOptions="[2, 10, 20, 50]" :value="props.transactions.data" tableStyle="min-width: 50rem"
                             :globalFilterFields="['status']"
                              currentPageReportTemplate="Documents {first} à {last} sur {totalRecords}"
                            >

                                <template #empty> No customers found. </template>
                                <template #loading> Loading customers data. Please wait. </template>
                                 <template #paginatorend>
                                    <Button type="button" icon="pi pi-download" text />
                                 </template>

                                <Column   field="transaction_numero" header="numero"></Column>

                                <Column field="amount" sortable header="amount">
                                 <template #body="slotProps">
                                    {{ formatCurrency(slotProps.data.amount) }} $
                                </template>
                                </Column>

                                <Column  header="status" :showFilterMenu="false" filterMatchMode="equals" :filterMenuStyle="{ width: '8rem' }" >
                                        <template #body="slotProps">
                                        <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data)"/>

                                        </template>
                                         <template #filter="{filterCallback}">



                                            <Dropdown v-model="filters['status']" @change="filterCallback()"  :options="statuses" placeholder="Select One" class="p-column-filter" style="min-width: 12rem" :showClear="true">
                                                <template #option="slotProps">
                                                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                                                </template>
                                            </Dropdown>
                                        </template>


                                </Column>
                                 <Column :exportable="false" style="min-width:4rem">
                                    <template #body="slotProps">

                                        <Link :href="route('freelance.transactions.one', [slotProps.data.transaction_numero])">
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

import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';

import { ref } from 'vue';
import { FilterMatchMode, FilterOperator  } from 'primevue/api';


defineOptions({
    layout: FreelanceLayout,

});

const filters = ref({
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});

const props= defineProps({
    transactions:Array,
    debits:String,
    paiments:String,
    credits:String,


})

const statuses = ref(['pending', 'completed', 'failed']);

const getSeverity = (transaction) => {
    switch (transaction.status) {
        case 'pending':
            return 'warning';
            break;
        case 'completed':
            return 'success';
            break;

        case 'failed':
            return 'danger';
            break;
        default:
            return null;

    }
}

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

</script>

<style lang="scss" scoped></style>

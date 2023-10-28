


<template>
    <div>

        <div class="flex flex-col">

            <div>
            <h1 class="text-lg font-semibold text-gray-800 lg:text-2xl dark:text-gray-100 ">Commandes</h1>
            </div>


        </div>
        <div class="mt-8">

            {{ commandes }}

        </div>



    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';

import Paginator from 'primevue/paginator';

defineProps({
    commandes : Array
});


defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

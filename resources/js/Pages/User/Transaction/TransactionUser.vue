


<template>
    <div class="flex flex-col min-h-screen gap-6 mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

            <div class="flex flex-col">
                <div>
                    <nav class="py-2">
                <ul class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-100">
            <li>
                <Link :href="route('home')"  class="">Transaction</Link>

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

                <h1 class="text-3xl font-bold text-black dark:text-white">Transactions</h1>

            </div>


    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';


defineProps(['transactions']);


defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

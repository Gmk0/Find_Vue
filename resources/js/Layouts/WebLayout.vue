<template>
    <div class="bg-white dark:bg-gray-800">

        <Head :title="title" />

        <div class="pageWrapper">
            <Navbar />

            <div id="page-content">

                <transition name="page" mode="out-in" appear>
                    <main :key="$page.url" class="container min-h-screen">
                        <slot />
                    </main>
                </transition>

            </div>


            <Footer />
        </div>


    </div>
</template>

<script setup>

import { Head } from '@inertiajs/vue3';
import Navbar from '@/Layouts/Partials/Navbar.vue';
import Footer from '@/Layouts/Partials/Footer.vue';
import { onMounted, ref } from 'vue';

defineProps({
    title: String,
});



</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.3s;
}

.page-enter,
.page-leave-active {
    opacity: 0;
}
</style>

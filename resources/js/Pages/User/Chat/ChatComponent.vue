

<script setup>

import ChatLayout from '@/Layouts/ChatLayout.vue';
import MainSidebarUser from '@/Layouts/UserPartial/MainSidebarUser.vue';

import ChatComponentUser from '@/Components/ChatComponentUser.vue';

import BodyMessage from '@/Components/BodyMessage.vue';

defineOptions({
    layout: ChatLayout,

});


</script>


<template>

    <div class="flex overflow-hidden min-h-100vh grow dark:bg-navy-900">


        <div class="overflow-hidden">
            <div class="sidebar print:hidden">
                <!-- Main Sidebar -->

                 <MainSidebarUser />
                <!-- Sidebar Panel -->


                <ChatComponentUser />



            </div>
        </div>

        <BodyMessage />




    </div>


</template>



<style scoped></style>

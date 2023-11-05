

<script setup>

import ChatLayout from '@/Layouts/ChatLayout.vue';
import MainSidebarUser from '@/Layouts/UserPartial/MainSidebarUser.vue';

import ChatComponentUser from '@/Components/ChatComponentUser.vue';

import BodyMessage from '@/Components/BodyMessage.vue';

defineOptions({
    layout: ChatLayout,

});


defineProps({
    conversations:Array,
    messages:Array,
    chat:Object,
    user:Object,
})

</script>


<template>
    <div class="flex overflow-hidden min-h-100vh grow dark:bg-navy-900">
        <div class="overflow-hidden">
            <div class="sidebar print:hidden">
                <!-- Main Sidebar -->

                 <MainSidebarUser />
                <!-- Sidebar Panel -->




                <ChatComponentUser :Conversations="conversations" />




            </div>
        </div>

        <BodyMessage :messages="messages" :chatId="chat?.id" :user="user"/>




    </div>


</template>



<style scoped></style>

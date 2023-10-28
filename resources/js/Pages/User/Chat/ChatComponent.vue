

<script setup>

import ChatLayout from '@/Layouts/ChatLayout.vue';
import MainSidebarUser from '@/Layouts/UserPartial/MainSidebarUser.vue';


defineOptions({
    layout: ChatLayout,

});


</script>


<template>
    <div>
    <div class="flex overflow-hidden min-h-100vh grow bg-slate-50 dark:bg-navy-900" x-cloak>


        <div class="overflow-hidden">
            <div class="sidebar print:hidden">
                <!-- Main Sidebar -->

                 <MainSidebarUser />
                <!-- Sidebar Panel -->




            </div>
        </div>





    </div>

    </div>
</template>



<style scoped></style>

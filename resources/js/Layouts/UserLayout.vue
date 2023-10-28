<script setup>

import { useLayoutStore } from '@/store/store';

import { onMounted } from 'vue';
import MainSidebarUser from '@/Layouts/UserPartial/MainSidebarUser.vue';
import SidebarPanelUser from '@/Layouts/UserPartial/SidebarPanelUser.vue';
import PartialHeaderUser from '@/Layouts/UserPartial/PartialHeaderUser.vue';
import OtherPanelUser from '@/Layouts/UserPartial/OtherPanelUser.vue';

//const categoryStore = useCategoryStore();
const layoutStore = useLayoutStore();
//const userStore = useAuthStore();




function resize() {
    if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();

    } else {



    }
}

resize();


</script>

<template>
    <div class="" :class="{ 'is-sidebar-open': layoutStore.SidebarExpanded }">





        <!-- Page Wrapper -->
        <div id="root" class="flex min-h-100vh grow bg-slate-50 dark:bg-navy-900">
            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Main Sidebar -->
                <MainSidebarUser />


                <!-- Sidebar Panel -->

                <SidebarPanelUser />
            </div>

            <!-- App Header -->
            <PartialHeaderUser />

            <!-- Mobile Searchbar -->




            <OtherPanelUser />

            <div class="main-content pt-4 w-full px-[var(--margin-x)] pb-8">
                <slot></slot>

            </div>



        </div>











    </div>
</template>




<style >

</style>

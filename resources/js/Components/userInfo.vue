<template>
    <div>
         <Dropdown align="right" width="48">
                    <template #trigger>
                        <button  class="flex text-sm transition border-2 border-transparent rounded-full dark:bg-gray-800 focus:outline-none focus:border-gray-300">

                            <div v-if="$page.props.auth.user.profile_photo_path != null">
                                   <img class="object-cover w-8 h-8 rounded-full" :src="'/storage/'+ $page.props.auth.user.profile_photo_path" :alt="$page.props.auth.user.name">

                            </div>
                            <div v-else>
                                  <img class="object-cover w-8 h-8 rounded-full" :src="$page.props.auth.user.profile_photo_url" :alt="$page.props.auth.user.name">
                            </div>

                        </button>


                    </template>

                        <template #content>
                            <!-- Account Management -->
                            <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-50">
                                Manage Account
                            </div>

                            <DropdownLink :href="route('profile.show')">
                                Profile
                            </DropdownLink>
                               <DropdownLink :href="route('user.dashboard')">
                                    Tableau utilisateur
                                </DropdownLink>
                                   <DropdownLink :href="route('user.missions')">
                                        Mes Mission
                                    </DropdownLink>

                                     <DropdownLink :href="route('user.chat')">
                                                favoris
                                        </DropdownLink>

                                     <DropdownLink :href="route('user.chat')">
                                            Conversation
                                    </DropdownLink>


                                <DropdownLink @click="ToggleDark()" as="button">
                                        Dark mode
                                </DropdownLink>

                            <div class="border-t border-gray-200" />

                            <!-- Authentication -->
                            <form @submit.prevent="logout">
                                <DropdownLink as="button">
                                    Log Out
                                </DropdownLink>
                            </form>
                        </template>
            </Dropdown>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import { useCategoryStore, useStore } from '@/store/store';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';

import { useDark ,useToggle } from '@vueuse/core';

//import { usePrimeVue } from 'primevue/config';

//const PrimeVue = usePrimeVue();



const isDark = useDark();



const dark= useToggle(isDark);

const ToggleDark =()=>{

        dark();


} ;




const logout = () => {
    router.post(route('logout'));
};



</script>

<style lang="scss" scoped>

</style>

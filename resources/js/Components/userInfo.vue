<template>
    <div>
         <Dropdown align="right" width="48">
                    <template #trigger>
                        <button  class="flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300">

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
                            <div class="block px-4 py-2 text-xs text-gray-400">
                                Manage Account
                            </div>

                            <DropdownLink :href="route('profile.show')">
                                Profile
                            </DropdownLink>
                               <DropdownLink :href="route('user.dashboard')">
                                    Dashboard
                                </DropdownLink>





                            <DropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">
                                API Tokens
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
import { ref, watch, computed, onMounted } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import { useCategoryStore, useStore } from '@/store/store';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';

import { useDark ,useToggle } from '@vueuse/core';

import { usePrimeVue } from 'primevue/config';

const PrimeVue = usePrimeVue();



const isDark = useDark();



const dark= useToggle(isDark);

const ToggleDark =()=>{

        dark();

    if(isDark.value){


        toggleTheme("lara-light-blue")
    }else{
         toggleTheme("lara-dark-blue")
    }
} ;


const toggleTheme = (current) => {

    let nextTheme = 'lara-light-blue';
    let linkElement ='light';

    if (current === 'lara-light-blue') nextTheme = 'lara-dark-blue';
    else if (current === 'lara-dark-blue') nextTheme = 'lara-light-blue';

    PrimeVue.changeTheme(current, nextTheme, 'light', () => { });

    console.log(current ,nextTheme);


}

onMounted(() => {
   if (isDark.value) {


        toggleTheme("lara-light-blue")
    } else {
        toggleTheme("lara-dark-blue")
    }
});

</script>

<style lang="scss" scoped>

</style>

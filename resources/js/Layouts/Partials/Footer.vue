<template>
    <div>

        <div class="w-full bg-gray-900 lg:bg-base-200">

        <div class="text-white bg-gray-900 border-t border-gray-800 md:hidden">

            <!-- Footer Middle -->
            <div class="container flex flex-col p-4 mx-auto overflow-hidden lg:flex-row">
                <div class="w-full p-2 mx-auto">


                    <div  class="relative mb-3">
                        <h6 class="mb-0">
                            <button @click="handleCollapse"
                                class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                data-collapse-target="animated-collapse-1">
                                <span>Categories</span>
                                <i :class="isOpen ? 'rotate-180 transition-transform' : ''"
                                    class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                            </button>
                        </h6>
                         <Collapse :when="isOpen" class="px-6 overflow-hidden  collapse">


                                <ul class="flex flex-col w-full px-4 space-y-2 text-left list-none list-inside text-gray-50">


                                    <li v-for="category in categories">
                                        <Link :href="route('categoryName', category.name)"
                                            class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-200">{{category.name}}</Link>
                                    </li>


                                </ul>


                        </Collapse>

                    </div>


                    <div  class="relative mb-3">
                        <h6 class="mb-0">
                            <button @click="handleCollapse2"
                                class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                data-collapse-target="animated-collapse-1">
                                <span>A propos</span>
                                <i :class="isOpen2 ? 'rotate-180 transition-transform' : ''"
                                    class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                            </button>
                        </h6>

                        <Collapse :when="isOpen2" class="px-6 overflow-hidden  collapse">


                                <ul class="flex flex-col w-full px-4 text-left list-none text-gray-50">
                                    <li><Link :href="route('terms.show')"                                            class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">Privacy
                                            Policy</Link></li>
                                    <li><Link href="/contact"
                                            class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100 ">Contact</Link>
                                    </li>

                                    <li> <Link :href="route('terms.show')"
                                            class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">Terms
                                            of
                                            Service</Link></li>
                                </ul>
                         </Collapse>


                    </div>

                    <div  class="relative hidden mb-3">
                            <h6 class="mb-0">
                                <button @click="handleCollapse3"
                                    class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                    data-collapse-target="animated-collapse-1">
                                    <span>Freelance</span>
                                    <i :class="isOpen3 ? 'rotate-180 transition-transform' : ''"
                                        class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                                </button>
                            </h6>
                              <Collapse :when="isOpen3" class="px-6 overflow-hidden  collapse">


                                    <ul class="flex flex-col w-full px-4 font-thin text-left list-none text-gray-50">
                                        <li><Link href="/find-freelance"
                                                class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">Trouver un Freelance</Link>
                                        </li>
                                        <li><Link :href="route('createProject')"
                                                class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">
                                                Mission</Link>
                                        </li>

                                    </ul>
                             </Collapse>

                    </div>
                    <div  class="relative mb-3">
                        <h6 class="mb-0">
                            <button @click="handleCollapse4"
                                class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                data-collapse-target="animated-collapse-1">
                                <span>Freelance</span>
                                <i :class="isOpen4 ? 'rotate-180 transition-transform' : ''"
                                    class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                            </button>
                        </h6>

                        <Collapse :when="isOpen4" class="px-6 overflow-hidden  collapse">


                                  <ul class="flex flex-col w-full p-0 px-4 font-thin text-left list-none text-gray-50">
                                        <li><a href=""
                                                class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">Freelance</a>
                                        </li>
                                        <li><a href=""
                                                class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">
                                                Mission</a>
                                        </li>

                                    </ul>
                        </Collapse>
                    </div>



                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="flex flex-col items-center justify-center p-6 mt-4 text-gray-600 md:flex-row">

                <div
                    class="flex flex-col flex-wrap gap-6 mt-6 border-t border-gray-600 sm:mt-0 sm:flex-row sm:items-center">


                    <div class="flex gap-6 p-2">
                        <a href="#" target="blank" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-dribbble"></span>
                        </a>
                        <a href="https://twitter.com/find_freelance_?s=11&t=qv6NIovEcQsLxmQv9mo_Zw" target="blank"
                            aria-label="twitter" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-twitter"></span>
                        </a>
                        <a href="https://instagram.com/find_freelance?igshid=YmMyMTA2M2Y=" target="blank"
                            aria-label="medium" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-instagram"></span>
                        </a>


                        <a href="#" target="blank" aria-label="twitter" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-pinterest"></span>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100087893680900&mibextid=LQQJ4d" target="blank"
                            aria-label="medium" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-facebook"></span>
                        </a>


                    </div>
                    <div class="flex gap-6 mx-auto ">

                        <a href="" class="px-3 py-2 hover:text-primary">

                            <span class="text-sm fab fa-dollar">USD</span>
                        </a>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-2 border-t border-gray-800">
                    <img src="/images/logo/find_02.png" alt="logo find" class="h-8" />
                    <div class="flex flex-col items-center justify-center p-3 mt-2 text-gray-600 md:flex-row">Copyright ©
                        2023
                    </div>
                </div>



            </div>
        </div>

        <!-- FOOTER 2 DESKTOP -->

        <div class="hidden md:flex">
            <div class="p-10 footer bg-base-200 text-base-content">
                <div>

                    <img src="/images/logo/find_02.png" alt="logo find" class="h-8" />
                    <p>FIND Ltd.<br />Providing reliable tech since 2020</p>
                </div>
                <div>
                    <span class="footer-title">Categories</span>
                    <div class="grid grid-cols-2 gap-4">


                       <li v-for="category in categories">
                                            <Link :href="route('categoryName', category.name)"
                                                class="inline-block py-2 pl-3 pr-5 hover:text-gray-200">{{ category.name }}</Link>
                                        </li>



                    </div>

                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link :href="route('about')"  class="link link-hover hover:text-gray-200">Apropos de nous </Link>
                    <Link :href="route('contact')"  class="link link-hover hover:text-gray-200">Contact</Link>
                    <Link :href="route('faq')"  class="link link-hover hover:text-gray-200">FaQ</Link>

                </div>
                <div>

                    <span class="footer-title">Legal</span>
                    <Link :href="route('terms.show')" class="link link-hover">Conditions d'utilisation</Link>
                    <Link :href="route('policy.show')" class="link link-hover">Politique de confidentialité</Link>


                </div>
            </div>

        </div>



        <!-- Footer Middle -->


        <!-- Footer Bottom -->

    </div>


    </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import axios from 'axios';

import { Collapse } from 'vue-collapsed';


import { useSubcategoriesStore, useCategoryStore } from '@/store/store';


const categoriesStore = useCategoryStore();
const subcategoriesStore = useSubcategoriesStore();

const categories = computed(() => categoriesStore.categoriesGet.categories);



const isOpen = ref(false);

function handleCollapse() {
    isOpen.value = !isOpen.value
};
const isOpen2 = ref(false);

function handleCollapse2() {
    isOpen2.value = !isOpen2.value
};
const isOpen3 = ref(false);

function handleCollapse3() {
    isOpen3.value = !isOpen3.value
};
const isOpen4 = ref(false);

function handleCollapse4() {
    isOpen4.value = !isOpen4.value
};




</script>


<style>
.collapse {
    transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}
</style>

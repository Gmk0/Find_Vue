<template>
       <div class="md:grid md:grid-cols-1 md:gap-6">
            <div class="md:col-span-1 flex justify-between">
                <div class="px-4 sm:px-0">
                   <h3 class="text-lg font-medium dark:text-gray-50 text-gray-900">
                    Paramètres de notifications
                    </h3>

                    <p class="mt-1 text-sm dark:text-gray-100 text-gray-600">
                    Restez informé(e) sur les dernières opportunités! Personnalisez vos notifications et profitez d'avantages exclusifs en mettant à jour votre profil.
                    </p>

                </div>


            </div>

                <div class="mt-5 md:mt-0 md:col-span-2 rounded-md">
                    <div class="p-4 space-y-4 bg-white  dark:bg-gray-800">


                    <div class="flex items-center">




                        <div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" v-model="userParamaitres.push_notifications_enabled" @change='toogle()'>
                                <div
                                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                </div>
                                <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Recevoir des notifications par push</span>
                            </label>
                        </div>


                    </div>

                    <div class="flex items-center">

                        <div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" v-model="userParamaitres.email_notifications_enabled" @change='toogle()'>
                                <div
                                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                </div>
                                <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Recevoir des notifications par email
                                    </span>
                            </label>
                        </div>


                    </div>

                    <div class="flex items-center">

                        <div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" v-model="userParamaitres.number_notifications_enabled" @change='toogle()'>
                                <div
                                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                </div>
                                <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Recevoir des notifications par telephone
                                </span>
                            </label>
                        </div>


                    </div>
                    <div class="flex items-center">

                        <div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" v-model="userParamaitres.send_invoice_enabled"  @change='toogle()'>
                                <div
                                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                </div>
                                <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Recevoir les facture par
                                    telephone
                                </span>
                            </label>
                        </div>


                    </div>



                </div>
                </div>


        </div>

</template>

<script setup>
import {ref, computed } from 'vue';

import { useNotification } from '@/store/store';

import { router } from '@inertiajs/vue3';


const notification= useNotification();

const userParamaitres=computed(()=> notification.getParametres);

const toogle=()=>{

    router.post(route('updateNotificationParametres'), userParamaitres.value,{
        preserveScroll:true,
        onSuccess:()=>{
            notification.getNotificationParametres();
        },
        onError:(error)=>{
            console.log(error.messages);
        }
    })


}
</script>

<style lang="scss" scoped>

</style>

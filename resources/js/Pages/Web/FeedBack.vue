<template>
    <div class="min-h-screen pt-16 mx-auto max-w-7xl lg:px-8">

        <section class="relative  overflow-hidden bg-gray-100 dark:bg-gray-900 pt-8 pb-12  lg:pb-[90px]">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-[20px] max-w-[520px] text-center lg:mb-20">
                            <span class="block mb-2 text-lg font-semibold tracking-wide uppercase text-amber-600">
                                Feedback
                            </span>
                            <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-2xl">
                                Votre Avis Compte
                            </h2>
                            <p class="text-base text-body-color">
                                Besoin de plus d'information contacter nou
                            </p>
                        </div>
                    </div>
                </div>
                 <div class="max-w-6xl px-8 pt-8 mx-auto">

            <div class="grid grid-cols-2 mb-4">
                <div class="flex flex-col gap-4">

                     <TextInput
                        id="nom"

                        type="text"
                        placeholder="Nom"
                        class="block w-full mt-1"
                        required />
                        <TextInput
                            id="nom"
                            v-model="form.password"
                            type="text"
                            placeholder="Email"
                            class="block w-full mt-1"
                            required />



                    <div class="col-span-2">
                        <textarea
                        name="message"
                        required
                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Message">
                    </textarea>

                    </div>
                    <div>
                       <ButtonMt>
                        <span>Envoyer</span>
                       </ButtonMt>
                    </div>


                </div>
                <div class="px-4">

                        <div class="bg-white rounded-lg dark:bg-gray-700">

                            <div class="">
                                <div class="max-w-xl p-6 mx-auto mt-5 border rounded-lg">
                                    <p class="mb-4 text-lg font-bold text-center">Vous avez utilisé FIND pour faire une différence
                                        dans la vie des personnes et contribuer à répondre à leurs besoins.</p>
                                    <p class="mb-4 text-center">Partagez votre expérience et aidez-nous à améliorer nos efforts pour créer une
                                        expérience encore plus positive pour nos utilisateurs.</p>
                                    <p class="mb-6 text-center">Votre feedback est précieux pour nous et pour ceux qui cherchent à trouver
                                        des solutions et à faciliter leur quotidien.</p>
                                </div>

                            </div>
                        </div>


                </div>

            </div>
            <hr>

            <div class="pt-8 ">

                <div>
                    <h1 class="text-center text-gray-700 dark:text-gray-200">Les Avis</h1>
                </div>

                <div class="grid pt-4 lg:grid-cols-2">



                </div>



            </div>








        </div>

            </div>

        </section>
    </div>
</template>






<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
// Assurez-vous d'ajuster le chemin d'importation
import { onMounted } from 'vue';

import { useForm } from '@inertiajs/vue3';

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';

import TextInput from '@/Components/TextInput.vue';




const form = useForm({
    name: '',
    email: '',
    message: '',
});


defineOptions({
    layout: WebLayout,

});

const contacter = () => {

   // alert('ok');

};


</script>
<style lang="scss" scoped></style>

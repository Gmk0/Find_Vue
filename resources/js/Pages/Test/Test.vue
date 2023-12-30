<template>
    <div class="min-h-screen py-20 ">
        <div class="container relative hidden px-4 py-4 overflow-auto bg-gray-200">
                    <div class="sticky flex items-center justify-center py-12 mx-auto">
                        <h1 class="text-5xl">Cultiver, Concevoir & S'Éclater</h1>
                    </div>
            <div class="top-0 flex px-4 mt-auto sticky-test">
                    <div class="flex flex-wrap justify-end gap-4">
                        <div v-for="i in 5" :key="i">
                            <a class="text-lg font-bold text-gray-400 transition border-b-2 border-transparent cursor-pointer hover:text-gray-700 hover:border-b-2 hover:border-amber-500 hover:shadow-md">Programmation & Tech</a>
                        </div>
                    </div>
            </div>


        </div>



        <div class="px-6 pt-20">test

            <form class="flex flex-col gap-6" @submit.prevent="submit">

                <div>
                    <MazTextarea required v-model="form.message">

                    </MazTextarea>
                </div>

                <MazBtn type="submit">
                    valider
                </MazBtn>

            </form>


      </div>



    </div>
</template>






<script setup>

import WebLayout from '@/Layouts/WebLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';
import { ref, onBeforeUnmount, onMounted } from 'vue';

import MazBtn from 'maz-ui/components/MazBtn'
import MazStepper from 'maz-ui/components/MazStepper'

import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'

import MazInput from 'maz-ui/components/MazInput';
import MazSelect from 'maz-ui/components/MazSelect'

const selectedValue = ref()

// Assurez-vous d'ajuster le chemin d'importation
//import { onMounted } from 'vue';

const phone=ref('333333');

const form=useForm({
    message:'',
});

const submit=()=>{
    form.post('/testPhone', {

        onSuccess: () => {
            alert('ok');
        },
        onError: (error) => {
            alert(error.message);

        }
    });

}



const filtres = ref(false);
const isMobile = ref(false);

const toggleVisibility = () => {
    if (isMobile.value) {
        changeT.value = !changeT.value;
    }
};



const handleResize = () => {
    //isMobile.value = window.innerWidth <= 768;
    if(window.innerWidth <= 768)
    filtres.value=false;

    // ajustez la valeur en fonction de votre définition de mobile
};

onMounted(() => {
    isMobile.value = window.innerWidth <= 768;
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});



defineOptions({
    layout: WebLayout,

});



</script>
<style>

.sticky-test{
    position:sticky;
    top:0;

}
</style>

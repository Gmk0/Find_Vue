

<template>

     <div class="md:grid md:grid-cols-1 md:gap-6">
            <div class="flex justify-between md:col-span-1">
            <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
                  Boostez vos Avantages avec le Parrainage!
                </h3>

                <p class="mt-1 text-sm text-gray-600 dark:text-gray-100">
                       <span class="dark:text-gray-50">Mettez à jour votre profil et votre adresse e-mail pour débloquer des avantages exclusifs grâce à notre programme de parrainage. Invitez vos amis à rejoindre et profitez ensemble des opportunités exceptionnelles qui vous attendent!</span>
                </p>
            </div>


        </div>

            <div class="mt-5 rounded-md md:mt-0 md:col-span-2">
                <div>
                    <div class="px-4 py-5 bg-white shadow dark:bg-gray-900 sm:p-6">
                        <div class="">
                        <div v-if="!skeleton" class="mb-6">
                            <h2 v-if="codeParainage != null" class="mb-2 text-2xl font-bold dark:text-gray-100">Votre code Parainage : <span class="dark:text-gray-50 ">{{ codeParainage }}</span></h2>

                            <div v-else class="flex flex-col gap-4">
                                <p class="text-base text-gray-800 dark:text-gray-50">Vous n'avez pas encore de code de parainage veuillez en generer Un</p>

                                <div>
                                <Button :loading="loading" @click="genererCode()" label="Generer un code de parainage" outlined />
                                </div>

                            </div>

                            <Button v-if="codeParainage != null"  label="Partager" @click="modelShare()" outlined />
                        </div>
                        <div>

                        </div>

                         <div v-if="skeleton" class="p-4 border-round border-1 surface-border surface-card">
                                    <ul class="p-0 m-0 list-none">
                                        <li v-for="i in 4" :key="i" class="mb-3">
                                            <div class="flex">
                                                <Skeleton shape="circle" size="4rem" class="mr-2 dark:!bg-gray-200"></Skeleton>
                                                <div class="align-self-center" style="flex: 1">
                                                    <Skeleton width="100%" class="mb-2 dark:!bg-gray-200"></Skeleton>
                                                    <Skeleton width="75%" class="dark:!bg-gray-200"></Skeleton>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                            </div>

                        <div v-else>
                        <div v-if="utilisateurParainer.length > 0" class="mt-4">
                                <div class="py-4">
                                    <h1 class="text-base dark:text-gray-100">Utilisateurs Parrainés</h1>
                                </div>
                                <div v-for="user in utilisateurParainer" :key="user.id" class="flex items-center mt-4">
                                    <Photo :user="user" />
                                    <div class="ml-4">
                                        <a href="" class="text-sm text-gray-600 dark:text-gray-300">{{ user.name }}</a>
                                    </div>
                                </div>
                                <div v-if="utilisateurParainer.length >= 10" class="mt-4">
                                    <p class="text-green-500">Félicitations! Vous avez parrainé 10 utilisateurs et vous avez gagné un cadeau spécial!</p>
                                </div>
                                 <div class="mt-4" v-else>
                                    <p>Parrainez encore {{ 10 - utilisateurParainer.length }} utilisateurs pour recevoir un cadeau spécial!</p>
                                </div>
                        </div>

                        </div>




                        </div>

                    </div>
                </div>

            </div>

             <Dialog v-model:visible="modal"


             :style="{ width: '25rem' }"
             :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
             position="center"
                :modal="true"
              header="Partager"

             :draggable="false"
             >

             <div class="flex flex-col">



                <div class="flex flex-row py-2 overflow-auto scrollbar-sm">
                     <button   v-for="network in networks" class="flex flex-col items-center p-2">
                    <ShareNetwork class="p-4 text-white rounded-full"

                        :network="network.network"
                        :key="network.network"
                        :style="{ backgroundColor: network.color }"
                        :url="sharing.url"
                        :title="sharing.title"
                        :description="sharing.description"
                        :quote="sharing.quote"
                        :hashtags="sharing.hashtags"
                        :twitterUser="sharing.twitterUser">
                    <i :class="network.icon"></i>

                    </ShareNetwork>
                    <span class="p-2 ">{{ network.name }}</span>
                </button>

                </div>
                <div class="flex gap-2 mt-4">
                    <div class="w-[80%]">
                        <TextInput v-model="link" class="block w-full mt-1" />

                    </div>
                    <div class="w-[20%]">
                        <Button label="copier"  v-clipboard:copy="link"
                         v-clipboard:success="onCopy"
                         v-clipboard:error="onError"
                         size="small" outlined />
                    </div>
                </div>

             </div>

            </Dialog>
        </div>
</template>
<script setup>

import {computed ,ref, onMounted, watch } from 'vue';

import {useParrainage} from '@/store/store';
import axios from 'axios';






import TextInput from '@/Components/TextInput.vue';
import FormSection from '@/Components/FormSection.vue';

import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';

import Skeleton from 'primevue/skeleton';


const parrainageStore = useParrainage();
const codeParainage = computed(()=> parrainageStore.getReferalCode);
const utilisateurParainer= computed(() => parrainageStore.getUsers);

const loading=ref(false);

const skeleton = ref(true);

onMounted(async () => {
    // Simulez une pause pour montrer le skeleton


    parrainageStore.getCodeUser();
    parrainageStore.getAllUser();

     //skeleton.value = false;

    setTimeout(() => {
        skeleton.value = false;
    }, 2000); // 2 secondes, ajustez selon vos besoins

    // Votre logique de chargement réel ici...
});


const genererCode= async ()=>{

    try{
        loading.value=true;
          const response = await axios.post('/api/generate-code-parainage');

          if(response.status == 200)
          {
            parrainageStore.getCodeUser();

          }else{
            alert('error lors de la generation du code');
          }

            loading.value = false;

    }catch(e){

          loading.value = false;
        console.log(e);
    }






}


const link=ref("");
const modal= ref(false);

watch((codeParainage)=>{

    link.value = route('auth.register', parrainageStore.getReferalCode);

})
const modelShare=()=>{

    modal.value = !modal.value;
}

const onCopy = (e) => {
    alert('You just copied: ' + e.text)
}
const onError = (e) => {
    alert('Failed to copy texts')
}
const  networks= [

    { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' },
    { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
    { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' },
    { network: 'messenger', name: 'Messenger', icon: 'fab fah fa-lg fa-facebook-messenger', color: '#0084ff' },

    { network: 'sms', name: 'SMS', icon: 'far fah fa-lg fa-comment-dots', color: '#333333' },
    { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },

    { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },

    { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },


]
 const sharing= {
        url: parrainageStore.getReferalCode,
        title: 'Rejoignez-nous sur FIND!.',
        description: 'Inscrivez-vous sur Find Freelance et découvrez un monde d\'opportunités.Utilisez mon lien de parrainage pour une inscription rapide et facile!.',
        quote: 'Explorez de nouvelles opportunités et élargissez vos horizons sur Find Freelance. Rejoignez-moi dès maintenant!',
        hashtags: 'Freelance, Opportunités,Photographies,Design,Progammation',
        twitterUser:'Find Freelance'

      }

</script>



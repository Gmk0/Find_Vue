<template>
  <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

       <Toast position="bottom-right" group="br" />
            <div class="flex flex-col">
                <div>
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                                <Link :href="route('freelance.dashboard')"
                                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Dashboard
                                </Link>
                            </li>
                            <li aria-current="page">
                                    <Link :href="route('freelance.commandes')" class="flex items-center">
                                        <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span
                                            class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Commande</span>
                                    </Link>
                                </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span
                                        class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{{ commande.order_numero }}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>


                </div>

                <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Commandes Gestion</h1>

            </div>

            <div>



                 <div class="lg:mx-auto lg:max-w-8xl">


                <!-- Contenu de la section -->
                <div class="relative overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <!-- Informations sur la commande -->
                    <div class="grid grid-cols-1 px-6 py-4 md:grid-cols-2 ">
                        <p class="mb-2 text-lg text-gray-800 font-inter dark:text-gray-200">Commande
                            #{{ commande.order_numero }}
                        </p>
                        <p class="mb-2 text-lg "> <span class="text-gray-600 dark:text-gray-300">Service : </span>
                            <span class="text-lg text-gray-800 dark:text-gray-200">{{ commande.service.title }}</span>
                        </p>
                        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Date de commande : {{ commande.created_at }}
                        </p>
                        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Date de livraison :
                            <span class="text-green-600">{{ commande.feedback.delai_livraison_estimee}}</span>
                        </p>

                        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Paiement : <span
                                class="font-bold text-green-600">{{ commande.status }}</span>
                        </p>
                        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Versement :


                            <span v-if="commande.is_paid !=null" class="text-green-500 px-1.5 py-0.5 rounded-lg ">{{ commande.is_paid}}</span>

                            <span v-else class="text-red-300 px-1.5 py-0.5 rounded-lg ">en Attente</span>



                        </p>
                        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">statut :

                            <span v-if="commande.feedback.etat =='Livré'" class="font-bold text-green-600">{{ commande.feedback.etat }}</span>

                            <span v-else class="font-bold text-yellow-200">{{ commande.feedback.etat }}</span>


                        </p>

                        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Progression : <span
                                class="font-bold text-green-600">{{ commande.progress }} %</span>
                        </p>


                    </div>

                    <div class="px-6 py-4 bcommande-t bcommande-gray-200">
                        <p class="mb-2 text-lg text-gray-800">Client </p>
                        <div class="flex items-center">
                            <Photo :user="commande.user" />
                            <div class="ml-4">
                                <p class="text-sm text-gray-600 dark:text-gray-300">{{ commande.user.name }}</p>
                                <p class="text-sm text-gray-600 dark:text-gray-300">
                                    {{ commande.user.email }}</p>
                            </div>
                        </div>
                    </div>

                    <div x-data="{open:false}" class="px-6 py-4 bcommande-t bcommande-gray-200">

                        <h2 class="mb-4 text-lg font-semibold">Gestion de Commande</h2>




                        <div v-if="commande.feedback.etat == 'Livré' && commande.progress == 100"  >
                            <h1 class="mb-4 text-gray-800 dark:text-gray-200">Vous avez deja livrer (realiser) la commande</h1>

                            <div class="mb-4">
                                <h1 class="text-gray-800 dark:text-gray-200">Le Feedback du client</h1>
                            </div>
                            <div class="p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-700">

                                <p class="text-sm text-gray-700 md:text-base dark:text-gray-300">
                                    {{ commande.feedback.commentaires ?
                                        commande.feedback.commentaires : 'pas de commentaire' }}</p>

                                <div class="flex items-center my-4">
                                    <svg class="w-4 h-4 mr-1 text-yellow-500 fill-current"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" />
                                    </svg>

                                    <span
                                        class="text-sm font-semibold text-gray-700 dark:text-gray-100">({{ commande.feedback.satisfaction ? commande.feedback.satisfaction : 0 }})
                                    </span>
                                </div>
                                <div class="flex items-center gap-3 mb-4">


                                    <Photo :user="commande.user" />

                                    <p class="font-bold text-gray-800 dark:text-gray-100">{{ commande.user.name }}</p>
                                </div>
                                <div class="flex gap-4">

                                    <div v-if="commande.feedback.commentaires !=null" >
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" class="sr-only peer"  @change='publier()'>
                                            <div
                                                class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:bcommande-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:bcommande-gray-300 after:bcommande after:rounded-full after:h-5 after:w-5 after:transition-all dark:bcommande-gray-600 peer-checked:bg-blue-600">
                                            </div>
                                            <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Publier</span>
                                        </label>
                                    </div>






                                    <div class="mb-2">
                                        <!--

                                        <x-filament::icon-button icon="heroicon-m-pencil" tooltip="Effacer" wire:click="modifier()" />

                                        -->
                                    </div>



                                </div>
                            </div>


                        </div>



                        <div v-else class="">
                            <div class="grid gap-4 mb-4 lg:grid-cols-3">

                                  <div>
                                    <Dropdown v-model="form.etat"

                                     :options="etat"
                                    optionValue="name"
                                    showClear optionLabel="name"
                                    placeholder="Etat de la commande"
                                    class="!w-full" />
                                </div>

                                 <div>
                                        <Dropdown v-model="form.progression"

                                        :options="percent"
                                        optionLabel="name"
                                        optionValue="code"
                                        placeholder="pourcentage"
                                        showClear


                                        class="!w-full" />

                                        <InputError :message="form.errors.progression" />
                                    </div>

                                 <div class="w-full">
                                        <Calendar v-model="form.delai" placeholder="date de livraison" class="w-full" />



                                    </div>



                            </div>

                              <div class="flex items-center justify-center">
                                <Button @click="addElement()" label="Soumettre" /></div>









                        </div>



                    </div>





                    <div class="w-full p-4 bg-white rounded-lg shadow-md bcommande-t bcommande-gray-200 dark:bg-gray-800">



                        <form @submit.prevent="savedRapport()"  class="flex flex-col p-3 space-y-4">

                            <label class="text-sm font-semibold" for="progress">Rapport d'avancement</label>


                            <Textarea required v-model="rapport.description" />
                               <InputError :message="rapport.errors.description" />

                            <button type="submit"
                                class="self-end px-4 py-2 mb-3 text-white bg-blue-500 rounded-md">
                                <span>Soumettre</span>
                                </button>
                        </form>




                        <div>
                            <div x-data="{open:false}" class="relative mb-3">
                                <h6 class="mb-0">
                                    <button @click="open = !open"
                                        class="relative flex items-center w-full p-4 text-base font-semibold text-left text-gray-600 transition-all ease-in cursor-pointer bcommande-b bcommande-solid bcommande-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                        data-collapse-target="animated-collapse-1">
                                        <span>Rapport Envoyer</span>
                                        <i :class="open ? 'rotate-180 transition-transform' : ''"
                                            class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                                    </button>
                                </h6>

                                <Collapse  :when="open" >

                                    <div  class="p-4 mb-3 text-sm leading-normal rapport">

                                        <template v-for="rapport in props.commande.data.rapports">


                                        <div class="p-3 bcommande-b bcommande-gray-400">
                                            <div class="mb-3 text-base text-gray-600 cursor-pointer dark:text-gray-300">{{ rapport.description }}
                                            </div>
                                            <Span
                                                class="mt-4 text-sm text-gray-500">{{ rapport.created_at}}</Span>

                                                <div x-collapse x-show="show" class="p-2">


                                                </div>
                                        </div>
                                           </template>



                                    </div>



                               </Collapse>

                            </div>


                        </div>



                    </div>




                </div>
            </div>
            </div>

    </div>
</template>


<script setup>

    import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';

    import {computed ,ref} from 'vue';

    import { router, usePage,useForm } from '@inertiajs/vue3';

    import { useToast } from "primevue/usetoast";


    const toast = useToast();

    const props = defineProps({
        commande:Object
    })

    const rapport = useForm({
        description:'',
        order_id: props.commande.data.id,
    });


    const form =useForm({
        etat:props.commande.data.feedback.etat,
        progression: props.commande.data.progress,
        delai:props.commande.data.feedback.delai_livraison_estimee,
        order_id : props.commande.data.id,
    })

    const open =ref(false);

    const addElement =()=>{


        form.post(route('commande.feedback'),{
            preserveScroll: true,
            preserveState : true,
            onSuccess:()=>{
                 toast.add({ severity: 'success', summary: 'Message', detail:'Feedback enviyer avec success', group: 'br', life: 3000 });

            },
            onError:(error)=>{




                  toast.add({ severity: 'error', summary: 'Message', detail: error.message, group: 'br', life: 3000 });

            }
        })
    }

    const savedRapport=()=>{

        rapport.post(route('commande.rapport'),{
            preserveScroll: true,
            onSuccess:()=>{

                rapport.reset();
                toast.add({ severity: 'info', summary: 'Message', detail: 'Rapport envoyer', group: 'br', life: 3000 });


            },
            onError:(error)=>{
                  if (error.message != null) {
                toast.add({ severity: 'error', summary: 'Message', detail: error.message, group: 'br', life: 3000 });
                }

            }
        })
    }

    const etat = ref([
    { name: 'En attente de traitement', code: 'En attente de traitement' },
    { name: 'En cours de préparation', code: 'En cours de préparation' },
    { name: 'En transit', code: 'En transit' },
    { name: 'Livré', code: 'Livré' },]);



    const percent = ref([
    { name: '10 %', code: 10 },
     { name: '30 %', code: 30 },
    { name: '50 %', code: 50 },
    { name: '70 %', code: 70 },
    { name: '90 %', code: 90 },
       { name: '100 %', code: 100 },

    ]);







    const commande=computed(()=> props.commande.data);

    defineOptions({
    layout: FreelanceLayout,

});

</script>

<style lang="scss" scoped>

</style>

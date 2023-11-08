<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

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
                            <div class="flex items-center">
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Paiement</span>
                            </div>
                        </li>
                    </ol>
                </nav>


            </div>

            <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Retrait</h1>

        </div>
           <div>

                  <div class="container mx-auto bg-white rounded-lg dark:bg-gray-900 ">

                <div class="max-w-6xl p-4 mx-auto ">
                    <h1 class="mb-4 text-2xl font-bold text-center">Paiement</h1>

                    <div class="mb-4">
                        <h2 class="mb-2 text-lg font-semibold">Montant total disponible pour le retrait :</h2>


                        <div
                            class="relative flex flex-col !w-48 p-3 overflow-hidden swiper-slide h-28 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600">
                            <div class="grow">

                            </div>
                            <div class="text-white">
                                <p class="text-lg font-semibold tracking-wide">
                                    300
                                </p>
                                <p class="mt-1 text-xs font-medium">

                                </p>
                            </div>
                            <div class="absolute top-0 right-0 w-16 h-16 -m-3 mask is-reuleaux-triangle bg-white/20">
                            </div>
                        </div>
                    </div>

                    <div class="mb-4 text-lg">
                        <h2 class="mb-2 font-semibold">Modalités de retrait :</h2>
                        <p class="mb-4">Taux de pourcentage pour le retrait : 5%</p>
                        <p class="mb-4">Veuillez noter les règles suivantes pour effectuer un retrait :</p>
                        <ul class="pl-6 mb-4 text-lg list-disc">
                            <li>Le montant minimum pour effectuer un retrait est de 10$.</li>
                            <li>Le retrait sera effectué selon la méthode de paiement sélectionnée.</li>
                            <li>Les frais de transaction peuvent s'appliquer selon la méthode de paiement choisie.</li>

                        </ul>
                        <p>Voici les étapes pour effectuer un retrait :</p>
                        <ol class="pl-6 text-lg list-decimal">
                            <li>Assurez-vous d'avoir suffisamment de fonds disponibles pour le retrait.</li>
                            <li>Sélectionnez la méthode de retrait préférée dans le menu déroulant ci-dessous.</li>
                            <li>Entrez le montant que vous souhaitez retirer dans le champ prévu à cet effet.</li>
                            <li>Cliquez sur le bouton "Demander le retrait" pour soumettre votre demande.</li>

                        </ol>

                        <div class="mt-6">
                            <h2 class="mb-2 text-lg font-semibold">Méthodes de retrait :</h2>
                            <div class="flex items-center mb-4">
                                <input wire:model="choix" type="radio" id="paypal" name="methode_retrait"
                                    value="maxi_cash" class="mr-2" />
                                <label for="paypal">Maxi Cash</label>
                            </div>
                            <div class="flex items-center mb-4">
                                <input wire:model="choix" type="radio" id="virement" name="methode_retrait"
                                    value="virement" class="mr-2" />
                                <label for="virement">Virement bancaire</label>
                            </div>

                            <div class="flex items-center mb-4">
                                <input type="radio" wire:model="choix" id="carte_bancaire" name="methode_retrait"
                                    value="carte_bancaire" class="mr-2" />
                                <label for="carte_bancaire">Carte bancaire</label>
                            </div>
                            <div class="p-2 lg:w-1/2">
                                <x-errors only='choix' />
                            </div>


                            <div>
                                <x-button positive wire:click="choixRetrait()" label="Proceder au Retrait"></x-button>
                            </div>
                        </div>
                    </div>
                </div>


                <!--
            @if($maxiCash)

            <div class="p-4 mt-2 lg:w-1/2">


                <div>
                    <h1>Maxi cash</h1>
                </div>


                <div class="flex flex-col gap-4">
                    <x-inputs.currency placeholder="Montant" icon="currency-dollar" thousands="." decimal="," precision="4"
                        wire:model="montant_maxi" />

                    <x-inputs.phone mask="['(+243) ####-###-###']" placeholder="0844720350" label="Numero"
                        wire:model="mobile_maxi" />

                    <x-inputs.password label="Mot de passe" wire:model="mot_de_passe" />

                    <div>
                        <x-button label="Retirer" spinner="RetraitMaxi" wire:click="RetraitMaxi()" primary />
                    </div>
                </div>
            </div>

            @endif
            -->


                <!--
            <div class="p-2 mt-2 lg:w-1/2">


                <div>
                    <h1>Carte Bancaire</h1>
                </div>


                <div class="flex flex-col gap-4">
                    <x-inputs.currency placeholder="Montant" icon="currency-dollar" thousands="." decimal="," precision="4"
                        wire:model="montant_carte" />


                    <x-inputs.maskable wire:model="compte_bancaire" label="Card" mask="['####-####-####-####']"
                        placeholder="424242442424242" />

                    <x-inputs.password label="Mot de passe" wire:model="mot_de_passe" />

                    <div>
                        <x-button label="Retirer" spinner="demanderRetraitCarte" wire:click="demanderRetraitCarte()"
                            primary />
                    </div>
                </div>
            </div>
            -->







            </div>

            </div>


    </div>
</template>


<script setup>

import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';


defineOptions({
    layout: FreelanceLayout,

});

</script>

<style lang="scss" scoped></style>

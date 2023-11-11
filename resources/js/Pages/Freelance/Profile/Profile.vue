<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 md:p-6 md:max-w-7xl l px-auto bg-inherit">

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
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Profile</span>
                            </div>
                        </li>
                    </ol>
                </nav>


            </div>

            <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Profile</h1>

        </div>
        <div>
           <div class="w-full">
            <TabView>
                <TabPanel header="Header I">
                    <div class="min-h-screen">

                        <div class="flex items-center justify-center">
                             <div class="">

                                        <div  class="">

                                            <input
                                                ref="photoInput"
                                                type="file"
                                                class="hidden"
                                                @change="updatePhotoPreview"
                                            >


                                         <div v-show="!photoPreview" class="mt-2">

                                            <img v-if="$page.props.auth.user.profile_photo_path != null" :src="'/storage/' + $page.props.auth.user.profile_photo_path" :alt="$page.props.auth.user.name" class="object-cover rounded-full w-28 h-28">


                                            <img v-else :src="$page.props.auth.profile_photo_url" :alt="$page.props.auth.user.name" class="object-cover rounded-full w-28 h-28">
                                        </div>
                                        <div v-show="photoPreview" class="mt-2">
                                            <span
                                                class="block bg-center bg-no-repeat bg-cover rounded-full w-28 h-28"
                                                :style="'background-image: url(\'' + photoPreview + '\');'"
                                            />
                                        </div>

                                        <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                                            Changer
                                        </SecondaryButton>
                                     </div>

                                        </div>


                        </div>

                        <form  @submit.prevent="changePart" class="grid gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">




                            <div class="w-full">
                                <InputLabel  value="Nom"/>
                                <InputText required v-model="form.nom" class="w-full" />
                                  <InputError :message="form.errors.nom"/>
                            </div>
                             <div class="w-full">
                                <InputLabel value="Prenom" />
                                <InputText required v-model="form.prenom" class="w-full" />
                                  <InputError :message="form.errors.prenom"/>
                            </div>
                             <div class="">
                                 <InputLabel  value="Experience"/>
                                    <Dropdown
                                    v-model="form.experience"
                                    :options="experienceAnnee"
                                    required

                                    optionValue="id"
                                    optionLabel="name"
                                    placeholder="Experience"
                                    class="!w-full" />
                                    <InputError :message="form.errors.experience"/>
                                </div>

                            <div class="col-span-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div>
                                    <InputLabel value="adresse" />
                                        <InputText required v-model="form.localisation.addresse" class="w-full" />


                                     </div>
                                         <div>
                                            <InputLabel value="commune" />
                                                <InputText required v-model="form.localisation.commune" class="w-full" />

                                        </div>
                                    <div>
                                    <InputLabel value="ville" />
                                        <InputText  required v-model="form.localisation.ville"  class="w-full" />

                                    </div>
                                </div>
                            </div>
                            <div class="col-span-3">

                                <div>
                                     <InputLabel value="Description" />
                                    <Textarea class="w-full" required  v-model="form.description" />
                                </div>

                            </div>
                            <div class="flex items-center justify-center col-span-3">
                                    <Button type="submit"  label="Modifier" />


                            </div>





                        </form>

                    </div>
                </TabPanel>
                <TabPanel header="Diplome & Certificat">

                <div class="col-span-3 px-4">

                    <div  class="flex flex-col mb-2">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <div
                                        class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50 dark:bg-gray-900">
                                                <tr>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                        Diplomee En
                                                    </th>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                        Universite
                                                    </th>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                        Annee
                                                    </th>
                                                    <th scope="col" class="relative px-6 py-3">


                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800">
                                                <tr v-for="(educ, index) in freelance.diplome">
                                                    <td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap">
                                                        {{ educ['diplome'] }}
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">

                                                            {{ educ['universite'] }}
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">

                                                            {{ educ['annee'] }}

                                                    </td>

                                                    <td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">


                                                            <button @click="ModifierEducation(index)" class="btn btn-sm btn-circle btn-outline">

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                    </svg>

                                                            </button>

                                                            <button @click="removeElement(index, 'education')" class="btn btn-sm btn-circle btn-outline">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                                </button>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-center mt-4">
                                <Button  @click="educationModal=!educationModal" outlined size="small" label="Ajouter" />

                            </div>

                    </div>
                    </div>
                      <hr />


                     <div class="flex flex-col mt-6 mb-2">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <div
                                            class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                            <table class="min-w-full divide-y divide-gray-200">
                                                <thead class="bg-gray-50 dark:bg-gray-900">
                                                    <tr>
                                                        <th scope="col"
                                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                            Certifier En
                                                        </th>
                                                        <th scope="col"
                                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                            Delivrer par
                                                        </th>
                                                        <th scope="col"
                                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                            Annee
                                                        </th>
                                                        <th scope="col" class="relative px-6 py-3">


                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800">
                                                    <tr v-for="(certif, index) in freelance.certificat">
                                                        <td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap">
                                                            {{ certif['certifier'] }}
                                                        </td>
                                                        <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">

                                                                {{ certif['delivrer'] }}
                                                        </td>
                                                        <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">

                                                                {{ certif['annee'] }}

                                                        </td>

                                                        <td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">


                                                                <button @click="ModifierCertification(index)" class="btn btn-sm btn-circle btn-outline">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                        </svg>

                                                                </button>

                                                                <button @click="removeElement(index, 'certification')" class="btn btn-sm btn-circle btn-outline">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                                    </button>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex items-center justify-center mt-4">
                                    <Button size="small"  @click="certfierModal =!certfierModal"  outlined label="Ajouter" />

                                </div>
                    </div>
                      <hr />

                    <div class="flex flex-col mt-6 mb-2">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div
                                    class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50 dark:bg-gray-900">
                                            <tr>
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                    Langue parler
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                    Niveau
                                                </th>

                                                <th scope="col" class="relative px-6 py-3">


                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800">
                                            <tr v-for="(lang, index) in freelance.langue">
                                                <td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap">
                                                    {{ lang['langue'] }}
                                                </td>
                                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">

                                                        {{ lang['level'] }}
                                                </td>

                                                <td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">


                                                        <button @click="ModifierLangue(index)" class="btn btn-sm btn-circle btn-outline">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>

                                                        </button>

                                                        <button @click="removeElement(index, 'langue')" class="btn btn-sm btn-circle btn-outline">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                            </button>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center mt-4">
                            <Button size="small"  @click="langueModal = !langueModal"  outlined label="Ajouter" />
                        </div>
                    </div>

                    <hr />

                     <div class="flex flex-col mt-6 mb-2 ">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div
                                    class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50 dark:bg-gray-900">
                                            <tr>
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                    Compte
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                    Lien
                                                </th>

                                                <th scope="col" class="relative px-6 py-3">


                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800">
                                            <tr v-for="(compt, index) in freelance.comptes">
                                                <td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap">
                                                    {{ compt['compte'] }}
                                                </td>
                                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">

                                                        {{ compt['lien'] }}
                                                </td>

                                                <td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">


                                                        <button @click="ModifierComptes(index)" class="btn btn-sm btn-circle btn-outline">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>

                                                        </button>

                                                        <button @click="removeElement(index, 'comptes')" class="btn btn-sm btn-circle btn-outline">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                            </button>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center mt-4">
                            <Button size="small"  @click="comptesModal = !comptesModal"  outlined label="Ajouter" />
                        </div>
                    </div>

                      <hr />

                         <div class="flex flex-col mt-6 mb-2 ">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <div
                                        class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50 dark:bg-gray-900">
                                                <tr>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                        Competences
                                                    </th>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                        Niveau
                                                    </th>

                                                    <th scope="col" class="relative px-6 py-3">


                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800">
                                                <tr v-for="(skill, index) in freelance.competences">
                                                    <td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap">
                                                        {{ skill['skill'] }}
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">

                                                            {{ skill['level'] }}
                                                    </td>

                                                    <td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">


                                                            <button @click="ModifierCompetences(index)" class="btn btn-sm btn-circle btn-outline">

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                    </svg>

                                                            </button>

                                                            <button @click="removeElement(index, 'competences')" class="btn btn-sm btn-circle btn-outline">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                                </button>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-center mt-4">
                                <Button size="small"  @click="skillModal = !skillModal"  outlined label="Ajouter" />
                            </div>
                        </div>
                </TabPanel>

            </TabView>
        </div>
        </div>

        <div>
             <Dialog v-model:visible="certfierModal" position="bottom" modal header="Confirmer Comannde Finis"
                :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <form @submit.prevent="addCertification" class="flex flex-col w-full mt-4">
                    <div class="grid gap-4 lg:grid-cols-3">
                         <div>
                            <InputLabel value="Certivier en" />
                            <InputText required v-model="certification.certifier" class="w-full" />
                        </div>
                         <div>
                            <InputLabel value="Delivrer par" />
                            <InputText required v-model="certification.delivrer" class="w-full" />
                        </div>
                                 <div>

                                <InputLabel value="Annee" />
                                    <Dropdown
                                placeholder="annee"
                                class="!w-[8rem]"
                                :options="anneeSelected"
                                v-model="certification.annee" />
                                </div>

                    </div>
                    <div class="flex items-center justify-center gap-4 mt-4">

                        <Button v-if="!editCertificatioButton" type="submit" :class="{'opacity-0': certification.processing}" outlined severity="success" label="Ajouter" />

                        <Button v-else type="button" @click="modifierCertificationForm" outlined severity="success" label="Modifier" />


                        <Button outlined severity="warning" @click="certfierModal =!certfierModal" label="Annuler" />
                    </div>
                </form>

            </Dialog>
             <Dialog v-model:visible="educationModal" position="bottom" modal header="Confirmer Comannde Finis"
                    :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                    <form @submit.prevent="addEducation" class="flex flex-col w-full mt-4">
                        <div class="grid gap-4 lg:grid-cols-3">
                             <div>
                                <InputLabel value="Diplomer en" />
                                <InputText required v-model="education.diplome" class="w-full" />
                            </div>
                             <div>
                                <InputLabel value="Universite de " />
                                <InputText required v-model="education.universite" class="w-full" />
                            </div>
                                     <div>

                                    <InputLabel value="Annee" />
                                        <Dropdown
                                    placeholder="annee"
                                    class="!w-[8rem]"
                                    :options="anneeSelected"
                                    v-model="education.annee" />
                                    </div>

                        </div>
                        <div class="flex items-center justify-center gap-4 mt-4">
                           <Button v-if="!editEducationButton" type="submit" outlined severity="success" label="Ajouter" />

                             <Button v-else type="button" @click="modifierEducationForm"  outlined severity="success" label="Modifier" />

                             <Button outlined severity="warning" @click="educationModalReset()" label="Annuler" />
                        </div>
                    </form>

            </Dialog>


             <Dialog v-model:visible="langueModal" position="bottom" modal header="Langue "
                        :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                        <form @submit.prevent="addLangue" class="flex flex-col w-full mt-4">
                            <div class="grid gap-4 lg:grid-cols-2">


                                 <div class="w-full">
                                                          <Dropdown
                                                            v-model="langueParler.langue"
                                                            :options="languagesArray"

                                                            filter

                                                             size="small"
                                                            optionValue="name"
                                                            optionLabel="name"
                                                             placeholder="Langue"
                                                            class="w-full " />


                                                    </div>

                                                    <div class="w-full">

                                                    <Dropdown
                                                        v-model="langueParler.level"
                                                        :options="levelSelector"

                                                        optionValue="id" optionLabel="name"
                                                         placeholder="Niveau"
                                                        class="w-full border border-gray-300 md:w-8rem" />

                                                    </div>

                            </div>
                            <div class="flex items-center justify-center gap-4 mt-4">
                               <Button v-if="!editLangueButton" type="submit" outlined severity="success" label="Ajouter" />

                                 <Button v-else type="button" @click="modifierLangueForm"  outlined severity="success" label="Modifier" />

                                 <Button outlined severity="warning" @click="langueModalReset()" label="Annuler" />
                            </div>
                        </form>

            </Dialog>
             <Dialog v-model:visible="skillModal" position="bottom" modal header="Modification Competences"
                        :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                        <form @submit.prevent="addCompetences" class="flex flex-col w-full mt-4">
                            <div class="grid gap-4 lg:grid-cols-2">
                                 <div>
                                    <InputLabel value="competences" />
                                    <InputText required v-model="skillUser.skill" class="w-full" />
                                </div>

                                 <div>
                                    <InputLabel value="Niveau" />
                                    <Dropdown
                                        v-model="skillUser.level"
                                        :options="levelSelector"
                                            size="small"
                                        optionValue="id" optionLabel="name"
                                            placeholder="Experience"
                                        class="w-full" />

                                    </div>


                            </div>
                            <div class="flex items-center justify-center gap-4 mt-4">
                               <Button v-if="!editSkillButton" type="submit" outlined severity="success" label="Ajouter" />

                                 <Button v-else type="button" @click="modifierSkillForm"  outlined severity="success" label="Modifier" />

                                 <Button outlined severity="warning" @click="skillModalReset()" label="Annuler" />
                            </div>
                        </form>

            </Dialog>
             <Dialog v-model:visible="comptesModal" position="bottom" modal header="Modification du comptes"
                        :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                        <form @submit.prevent="addComptes" class="flex flex-col w-full mt-4">
                            <div class="grid gap-4 lg:grid-cols-2">

                                     <div class="w-full">
                                                <Dropdown v-model="comptes.compte"
                                                :options="comptesSelector"
                                                optionLabel="name"
                                                optionValue="name"
                                                placeholder="Selectionner un compte"
                                                class="w-full">
                                                    <template #option="slotProps">
                                                    <div class="flex gap-4 align-items-center">
                                                        <img :alt="slotProps.option.label"
                                                            :src="slotProps.option.code" style="width: 20px" />
                                                        <div>{{ slotProps.option.name }}</div>
                                                    </div>
                                                </template>

                                            </Dropdown>
                                        </div>
                                        <div>
                                                <InputText
                                                class="block w-full"
                                                v-model="comptes.lien"
                                                    />
                                        </div>


                            </div>
                            <div class="flex items-center justify-center gap-4 mt-4">
                               <Button v-if="!editCompteButton" type="submit" outlined severity="success" label="Ajouter" />

                                 <Button v-else type="button" @click="modifierComptesForm"  outlined severity="success" label="Modifier" />

                                 <Button outlined severity="warning" @click="comptesModalReset()" label="Annuler" />
                            </div>
                        </form>

            </Dialog>
        </div>

    </div>
</template>


<script setup>

import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import SecondaryButton from '@/components/SecondaryButton.vue';

import {router, useForm} from '@inertiajs/vue3';
import InputLabel from '@/Components/InputLabel.vue';

import { useToast } from "primevue/usetoast";

import {ref, computed,onMounted } from "vue";



defineOptions({
    layout: FreelanceLayout,

});
const toast = useToast();

const props = defineProps({
    freelance: Object
});

const freelance = computed(()=> props.freelance);


const educationModal =ref(false);

const certfierModal = ref(false);
const editCertificatioButton = ref(false);
const certificationIndex = ref('');

const langueModal = ref(false);
const editLangueButton = ref(false);
const langueIndex = ref('');

const comptesModal = ref(false);
const editCompteButton = ref(false);
const compteIndex = ref('');

const skillModal = ref(false);
const editSkillButton = ref(false);
const skillIndex = ref('');


const editEducationButton =ref(false);
const educationIndex = ref('');

const educationModalReset=()=>{
    educationModal.value = false;
    editEducationButton.value = false;
}

const certification = useForm({
    certifier:'',
    delivrer:'',
    annee:'',
});

const langueParler = useForm({
    langue: '',
    level: '',
});

const comptes = useForm({
    compte: '',
    lien: '',
});

const skillUser = useForm({
    skill: '',
    level: '',
});

const langueModalReset =()=>{

    langueIndex.value='';
    langueParler.reset();
    editLangueButton.value=false;
    langueModal.value=false;
}
const skillModalReset = () => {

    skillIndex.value = '';
    skillModal.value = false;
    editSkillButton.value = false;
    skillUser.reset();
}
const comptesModalReset = () => {
    comptes.reset();
    compteIndex.value = '';
    comptesModal.value = false;
    editCompteButton.value =false;
}



const addLangue = () => {
    langueParler.post(route('addLangue'), {
        onSuccess: () => {
          langueModalReset();
        },
        preserveScroll: true
        ,
        onError: () => {
            langueParler.reset();

        },
    })

}


const addComptes = () => {
    comptes.post(route('addComptes'), {
        onSuccess: () => {
            comptes.reset();
            comptesModal.value = false;
        },
        preserveScroll: true
        ,
        onError: (error) => {
            comptes.reset();

        },
    })

}

const addCompetences = () => {
    skillUser.post(route('addCompetences'), {
        onSuccess: () => {
            skillUser.reset();
            skillModal.value = false;
        },
        preserveScroll: true
        ,
        onError: () => {
            skillUser.reset();

        },
    })

}



const addCertification=()=>{
    certification.post(route('addCertification'),{
        onSuccess:()=>{
           certification.reset();
           certfierModal.value=false;
        },
        preserveScroll :true
        ,
        onError:()=>{
            certification.reset();

        },
    })

}



const addEducation = () => {
    education.post(route('addEducation'), {
        onSuccess: () => {
            education.reset();
            educationModal.value = false;
        },
        preserveScroll: true
        ,
        onError: () => {
            education.reset();

        },
    })

}

const education = useForm({
    diplome: '',
    universite: '',
    annee: '',

})

const ModifierEducation =(index)=>{


    //alert(index);
     // Affectez la valeur de 'certifier' de freelance.certificat à certification.certifier
     education.diplome = freelance.value.diplome[index]['diplome'];
      education.universite = freelance.value.diplome[index]['universite'];
      education.annee =freelance.value.diplome[index]['annee'];
      educationIndex.value=index;

      editEducationButton.value =true,



    // Définissez la propriété 'value' à true
    educationModal.value = true;
}

const ModifierCompetences=(index)=>{
    skillUser.skill = freelance.value.competences[index]['skill'];
    skillUser.level = freelance.value.competences[index]['level'];
    skillIndex.value = index;
    skillModal.value = true;
    editSkillButton.value = true;
}

const ModifierComptes = (index) => {
    comptes.compte = freelance.value.comptes[index]['compte'];
    comptes.lien = freelance.value.comptes[index]['lien'];
    compteIndex.value = index;
    comptesModal.value = true;
    editCompteButton.value = true;
}
const ModifierLangue = (index) => {
    langueParler.langue = freelance.value.langue[index]['langue'];
    langueParler.level = freelance.value.langue[index]['level'];
    langueIndex.value = index;
    langueModal.value = true;
    editLangueButton.value = true;
}




const modifierSkillForm =()=>{

        if(!skillUser.skill && !skillUser.level)
        {
            return false;
        }
     router.post(route('editCompetences'), {
        data: {
            skill: skillUser.skill,
            level: skillUser.level,
        },
        index: skillIndex.value,
    }, {
        onSuccess: () => {
            skillUser.reset();
            skillModal.value = false;
            skillIndex.value = '';
            editSkillButton.value = false;
        },
        preserveScroll: true
        ,
        onError: () => {
            alert('Veuillez remplir tout les champs');

        },
    })

}
const modifierComptesForm = () => {


    router.post(route('editComptes'), {
        data: {
            compte: comptes.compte,
            lien: comptes.lien,
        },
        index: compteIndex.value,
    }, {
        onSuccess: () => {
            comptesModalReset();
        },
        preserveScroll: true
        ,
        onError: (error) => {
            alert('Veuillez remplir tout les champs'+ error.message);

        },
    })

}

const modifierLangueForm =()=>{

     router.post(route('editLangue'), {
        data: {
            langue: langueParler.langue,
            level: langueParler.level,
        },
        index: langueIndex.value,
    }, {
        onSuccess: () => {
            langueModalReset();
        },
        preserveScroll: true
        ,
        onError: (error) => {
            alert('Veuillez remplir tout les champs' + error.message);

        },
    })


}

const modifierEducationForm =()=>{


     router.post(route('editEducation'),{
        data: {
            diplome:  education.diplome,
            universite: education.universite,
            annee: education.annee,
        },
        index: educationIndex.value,
     }, {
        onSuccess: () => {
            education.reset();
            educationModal.value = false;
            educationIndex.value = '';
            editEducationButton.value = false;
        },
        preserveScroll: true
        ,
        onError: () => {
            education.reset();

        },
    })

}
const modifierCertificationForm = () => {

    router.post(route('editCertification'), {
        data: {
            certifier: certification.certifier,
            delivrer: certification.delivrer,
            annee: certification.annee,
        },
        index: certificationIndex.value,
    }, {
        onSuccess: () => {
            certification.reset();
            certfierModal.value = false;
            certificationIndex.value = '';
            editCertificatioButton.value = false;
        },
        preserveScroll: true
        ,
        onError: () => {
            education.reset();

        },
    })

}
const ModifierCertification = (index) => {
      // Affectez la valeur de 'certifier' de freelance.certificat à certification.certifier
    certification.certifier = freelance.value.certificat[index]['certifier'];
    certification.delivrer = freelance.value.certificat[index]['delivrer'];
    certification.annee = freelance.value.certificat[index]['annee'];
    certificationIndex.value = index;
    // Définissez la propriété 'value' à true
    editCertificatioButton.value = true;
    certfierModal.value = true;

}














const removeElement= (index, element) => {

        router.post(route('removeElement'),{
            element: element,
            index: index,
        },{
            onSuccess:()=>{

            },
            onError:(error)=>{
                alert(error.message)

            },
            preserveScroll:true,
        });





};
const form = useForm({
    nom:  props.freelance.nom,
    id: props.freelance.id,
    prenom: props.freelance.prenom,
    description: props.freelance.description,
    langue: props.freelance.langue,
    diplome: props.freelance.diplome,
    certificat: props.freelance.certificat,
    site: props.freelance.site,
    experience: props.freelance.experience,
    competences: props.freelance.competences,
    taux_journalier: props.freelance.taux_journalier,
    comptes: props.freelance.comptes,
    sub_categorie: props.freelance.sub_categorie,
    localisation: props.freelance.localisation,
    category_id: props.freelance.category_id,
    level: 1,
});

const d = new Date();
let year = d.getFullYear();
const anneeSelected = ref([]);

for (let index = 1999; index < year; index++) {
    anneeSelected.value.push(index);
}


const changePart =()=>{


    form.post(route('addProfilePartOne'),{
        onSuccess:()=>{

            toast.add({ severity: 'info', summary: 'Message', detail: 'Modification reussie', group: 'br', life: 1000 });
        },
        onError:(error)=>{
            alert(error.message);

        }
    })

}


const experienceAnnee = ref([
    { name: '0 a 2 ans', id: '0-2 ans' },
    { name: '2 a 5 ans', id: '2-5 ans' },
    { name: '+ 7 ans', id: '+ 7 ans' },
]);
const levelSelector = ref([
    { name: 'Debutant', id: 'Debutant' },
    { name: 'intermediare', id: 'intermediare' },
    { name: 'Expert', id: 'Expert' },
]);


const comptesSelector = ref([
    { name: 'twitter', code: '/images/logo/X.webp' },
    { name: 'Facebook', code: '/images/logo/X.webp' },
    { name: 'Tiktok', code: '/images/logo/tiktok.png' },

]);



onMounted(() => {

    getWorldLanguages();
});





const languagesArray = ref([]);
function getWorldLanguages() {
    // Effectuer la requête GET vers l'API restcountries
    return axios.get('https://restcountries.com/v3/all')
        .then(response => {
            const data = response.data;
            const uniqueLanguagesSet = new Set();

            // Parcourir la liste des pays et ajouter leurs langues à l'ensemble temporaire
            data.forEach(country => {
                if (country.languages) {
                    Object.entries(country.languages).forEach(([id, language]) => {
                        // Utilisez l'ISO 639-1 code de langue comme identifiant
                        uniqueLanguagesSet.add(language);
                    });
                }
            });

            // Convertir l'ensemble temporaire en un tableau d'objets
            const uniqueLanguagesArray = Array.from(uniqueLanguagesSet).map(language => ({
                language,
                name: language // Vous pouvez remplacer 'id' par le nom de la langue si vous le souhaitez
            }));

            // Transformez l'ensemble en un tableau et renvoyez-le
            languagesArray.value = uniqueLanguagesArray;

            console.log(languagesArray.value);
            //return languagesArray;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des langues', error);
            languagesArray.value = [];
        });
}


const image = useForm({
    _method: 'PUT',
    photo: null
});

const photoPreview = ref(null);
const photoInput = ref(null);
const selectNewPhoto = () => {
    photoInput.value.click();
};
const updatePhotoPreview = () => {
    const photo = photoInput.value.files[0];

    if (!photo) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        photoPreview.value = e.target.result;
    };

    reader.readAsDataURL(photo);


    image.photo = photoInput.value.files[0];
    image.post(route('updateProfileUser'), {
        onSuccess: () => {
            console.log('La requête a réussi.');
            // Ajoutez ici le code que vous souhaitez exécuter en cas de succès
        },
        onError: (errors) => {
            console.log('La requête a échoué avec des erreurs :', errors);
            // Ajoutez ici le code que vous souhaitez exécuter en cas d'échec
        },
        preserveScroll: true,


    });


};


</script>

<style lang="scss" scoped></style>




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
                                <Link :href="route('freelance.services')" class="flex items-center">
                                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span
                                        class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Services</span>
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
                                                class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Creation</span>
                                        </div>
                                    </li>
                            </ol>
                        </nav>
                    </div>
                    <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Services Creation</h1>
                </div>

                  <form @submit.prevent="creation()" class="grid grid-cols-1 gap-4 p-4 mt-2 border border-gray-100 rounded-md min-h-72 ">


                        <div class="grid grid-cols-2 gap-2">
                              <div class="w-full col-span-1 mb-4">
                               <InputLabel for="titre" value="titre" />

                               <InputText required v-model="form.title" class="w-full" id="titre" />

                            </div>
                            <div class="col-span-1 mb-4">
                                    <InputLabel for="titre" value="Tags de recherche" />
                                  <Chips v-model="form.tag" placeholder="Tags pour facileter la recherche" class="w-full" id="tag" />
                            </div>

                        </div>

                            <div class="grid grid-cols-2 gap-2">

                                <div class="mt-4 W-full">
                                <Dropdown v-model="category"
                                optionValue="id"
                                required
                                :options="categories"
                                showClear optionLabel="name"
                                placeholder="Categories"
                                class="!w-full" />

                                <InputError class="mt-2" :message="form.errors.category_id" />
                                </div>

                                <div class="mt-4 W-full">
                                        <MultiSelect v-model="form.sub_categorie"
                                        optionValue="id"
                                        :options="subcategories"
                                            showClear optionLabel="name"
                                            placeholder="Sous categorie"
                                            class="!w-full" />

                                        <InputError class="mt-2" :message="form.errors.sub_categorie" />
                                </div>
                            </div>

                        <div class="grid grid-cols-2 gap-2">

                                <div class="w-full col-span-1 mb-4">
                                    <InputLabel for="titre" value="Prix" />
                                    <InputNumber showButtons v-model="form.basic_price" placeholder="Prix du service" class="w-full" inputId="Prix" />

                                    <InputError class="mt-2" :message="form.errors.basic_price" />
                                    </div>
                                <div class="w-full col-span-1 mb-4">
                                <InputLabel for="revision" value="Revision" />
                                <InputNumber showButtons v-model="form.basic_revision" class="w-full" placeholder="nombre de revision pour ce prix" id="titre" />
                                   <InputError class="mt-2" :message="form.errors.basic_revision" />
                                </div>
                         </div>
                            <div class="grid grid-cols-2 gap-2 mt-4">

                                    <div class="w-full col-span-2 mb-4">
                                        <InputLabel for="description" value="Description" />
                                            <Editor required
                                            :formats="null"
                                             v-model="form.description"
                                             class="mt-2"
                                             placeholder="une Description pour ce service"
                                             editorStyle="height: 250px"
                                               />

                                        <InputError class="mt-2" :message="form.errors.description" />
                                        </div>
                                    <div class="w-full col-span-2 mb-4">
                                    <InputLabel for="titre" value="Besoin" />


                                                <Editor required
                                                 v-model="form.need_service"
                                                 class="mt-2"
                                                 ceholder="vous besoin de quoi pour la realisation de ce service"
                                                 editorStyle="height: 250px"
                                                   />
                                                   <InputError class="mt-2" :message="form.errors.need_service" />

                                    </div>
                                 </div>
                                    <div class="grid grid-cols-2 gap-2 mt-4">

                                        <div class="w-full col-span-2 mb-4">
                                            <InputLabel for="titre" value="titre" />
                                            <FileUpload
                                             :showCancelButton="false"
                                            :auto="true"
                                            fileLimit="3"
                                            @clear="clearAll()"
                                            @select="onSelect"
                                            @upload="onAdvancedUpload($event)"
                                            :multiple="true"
                                            accept="image/*"
                                            :maxFileSize="1000000">
                                                <template #empty>
                                                    <p>Drag and drop files to here to upload.</p>
                                                </template>
                                            </FileUpload>

                                            <InputError class="mt-2" :message="form.errors.files" />

                                        </div>



                                    <div class="w-full col-span-2 mb-4">
                                        <InputLabel for="titre" value="titre" />

                                         <FileUpload
                                         :showCancelButton="false"
                                                :auto="true"
                                                fileLimit="3"
                                                @select="onSelectExample"
                                                @upload="onAdvancedUpload($event)"
                                                :multiple="true"
                                                accept="image/*"
                                                :maxFileSize="1000000">
                                                    <template #empty>
                                                        <p>Drag and drop files to here to upload.</p>
                                                    </template>
                                            </FileUpload>
                                            <div class="mt-4">
                                            <InputText v-model="form.description_example" placeholder="titre de l'example" class="w-full" id="titre" />
                                            </div>
                                    </div>
                            </div>

                             <div class="grid grid-cols-2 gap-2">

                                    <div class="w-full col-span-1 mb-4">
                                        <InputLabel for="support" value="support" />
                                        <Chips required v-model="form.basic_support" placeholder="Le support du service" class="w-full mt-2" id="support" />

                                          <InputError class="mt-2" :message="form.errors.basic_support" />
                                    </div>
                                    <div class="w-full col-span-1 mb-4">
                                    <InputLabel for="titre" value="titre" />
                                    <InputText v-model="form.video_url" placeholder="lien d'une video du  service" class="w-full mt-2" id="titre" />
                                    </div>
                             </div>
                              <div class="grid grid-cols-2 gap-2">

                                        <div class="w-full col-span-1 mb-4">
                                            <InputLabel for="temps" value="Temps" />
                                            <InputNumber required v-model="form.basic_delivery_time" showButtons placeholder="Temps de livraison" class="w-full mt-2" id="titre" />

                                        </div>
                                        <div class="w-full col-span-1 mb-4">
                                        <InputLabel for="titre" value="titre" />

                                         <Dropdown required v-model="form.delivery_time_unit"
                                            optionValue="id"
                                            :options="unitTime"
                                         showClear optionLabel="name"
                                         placeholder="Unite de temps en heures ou jours"
                                         class="!w-full mt-2" />

                                    </div>
                            </div>
                            <div class="grid grid-cols-2 gap-2">

                            <div class="w-full col-span-1 mb-4">
                                <InputLabel for="titre" value="Publier" />
                                <InputSwitch class="mt-2" required v-model="form.is_publish" id="titre" />
                                </div>

                            </div>


                            <div>
                                <Button type="submit" label="Soumettre" />
                            </div>


                  </form>


            </div>
</template>

<script setup>

import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';

import { computed, ref, watch } from 'vue';



import { useSubcategoriesStore, useCategoryStore } from '@/store/store';


const categoriesStore = useCategoryStore();

const category=ref('');

const form = useForm({
    title: '',
    tag: null,
    basic_price:0,
    basic_revision :0,
    need_service :'',
    sub_category:null,
    description :'',
    files: null,
    example: null,
    description_example:'',
    category_id:'',
    sub_categorie:null,
    video_url: '',
    basic_support : null,
    basic_delivery_time :0,
    delivery_time_unit :'',
    is_publish: false,

})


const unitTime = ref([
    { name: 'jour(s)', id: 'jour(s)' },
    { name: 'heure(s)', id: 'heure(s)' },
]);




const creation=()=>{

    form.post(route('freelance.services.post'),{
        onSuccess: ()=>form.reset(),
        onError: (error)=>{
            console.log(error);
        }
    });

}





const categories = computed(() => categoriesStore.categoriesGet.categories);

const subcategories = computed(() => categoriesStore.subCategoriesGet);

const fetchSubcategories = async ()=>{
    categoriesStore.fetchSubCategoriesByCategoryid(category.value)
};

watch(category, () => {

    form.category_id = category.value;
    fetchSubcategories();
});


const onSelectExample=(event)=>{
     form.example = event.files;

}

const onSelect=(event)=>{

      form.files = event.files;
}
const photo = ref(null)




defineOptions({
    layout: FreelanceLayout,

});


</script>

<style lang="css" scoped></style>




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
                                                class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">  {{ props.service.data.service_numero }}</span>
                                        </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Modifier</h1>
                </div>

                <div>
                       <Panel header="Service information" toggleable class="mt-8">

                       <form @submit.prevent="edition()" class="grid grid-cols-1 gap-4 p-4 border rounded-md dark:border-gray-300 min-h-72 ">


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
                                    showClear
                                    optionLabel="name"
                                    placeholder="Categories"
                                    class="!w-full" />

                                    <InputError class="mt-2" :message="form.errors.category_id" />
                                    </div>

                                    <div class="mt-4 W-full">
                                            <MultiSelect v-model="form.sub_category"
                                            optionValue="id"
                                            :options="subcategories"
                                            showClear optionLabel="name"
                                            placeholder="Sous categorie"
                                            class="!w-full" />

                                            <InputError class="mt-2" :message="form.errors.sub_category" />
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
                      </Panel>





                    <Panel header="Image" toggleable class="mt-8">

                        <div>
                              <div class="flex flex-wrap mt-4 space-x-2">
                                <div v-for="(file, index) in files">
                                   <div class="relative group">
                                    <img :src="'/storage/' + file" alt="Product Name"
                                        class="w-16 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80">
                                    <div class="absolute top-0 right-0 mt-2 mr-2">
                                        <!-- Bouton pour supprimer le fichier -->
                                        <Button @click="remove(index)" size="small" outlined icon="pi pi-trash" />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                       <div class="grid grid-cols-2 gap-2 mt-4">
                        <div class="w-full col-span-2 mb-4">
                            <InputLabel for="titre" class="mb-4" value="Image" />
                            <FileUpload
                                :showCancelButton="false"
                            :auto="true"
                            class=""
                            :fileLimit="3"
                            @select="onSelect"
                            @upload="onAdvancedUpload($event)"

                            :multiple="true"
                            accept="image/*"
                            :maxFileSize="1000000">
                                <template #empty>
                                    <p>Drag and drop files to here to upload.</p>
                                </template>
                            </FileUpload>



                        </div>
                        </div>

                        <div>
                            <Button @click="addImage()" label="Changer" />
                        </div>
                    </Panel>









                </div>


            </div>
</template>

<script setup>

import FreelanceLayout from '@/Layouts/FreelanceLayout.vue';



import { Link, useForm, router  } from '@inertiajs/vue3';

import { computed, ref, watch } from 'vue';

import { useToast } from "primevue/usetoast";


const toast = useToast();



import { useSubcategoriesStore, useCategoryStore } from '@/store/store';


const props = defineProps({
    service: Object
});

const categoriesStore = useCategoryStore();

const category = ref(props.service.data.category_id);

//console.log(props.service.data.sub_category);

const files = computed(()=>props.service.data.files);

const form = useForm({
    title: props.service.data.title,
    tag: props.service.data.tag,
    basic_price: parseInt(props.service.data.basic_price),
    basic_revision: props.service.data.basic_revision,
    need_service: props.service.data.need_service,
    sub_category: props.service.data.sub_category?.map(value => parseInt(value)),
    description: props.service.data.description,
    category_id: props.service.data.category_id,
    sub_categorie: props.service.data.sub_category,
    video_url: props.service.data.video_url,
    basic_support: props.service.data.basic_support,
    basic_delivery_time: props.service.data.basic_delivery_time,
    delivery_time_unit: props.service.data.delivery_time_unit,
    is_publish: props.service.data.is_publish,
    service_id: props.service.data.id,

})


const unitTime = ref([
    { name: 'jour(s)', id: 'jour(s)' },
    { name: 'heure(s)', id: 'heure(s)' },
]);





const edition = () => {

    form.post(route('freelance.services.edition.save'), {
        onSuccess: () =>{
             toast.add({ severity: 'info', summary: 'Message', detail: 'Modification reuissie', group: 'br', life: 1000 });
        },
        onError: (error) => {
           toast.add({ severity: 'error', summary: 'Message', detail: error.message, group: 'br', life: 3000 });
        }
    });

}





const categories = computed(() => categoriesStore.categoriesGet.categories);

const subcategories = computed(() => categoriesStore.subCategoriesGet);

const fetchSubcategories = async () => {
    categoriesStore.fetchSubCategoriesByCategoryid(category.value)
};

watch(category, () => {

    form.category_id = category.value;
    fetchSubcategories();
});


const filesSend =useForm({
    files:null,
    service_id : props.service.data.id,
});

const clearAll = () => {

}

const addImage=()=>{

    if(filesSend.files != null)
    {
        filesSend.post(route('addImageService'),{

            onFinish:()=> clearAll(),
            preserveScroll:true,
        })
    }else{
         toast.add({ severity: 'error', summary: 'Message', detail: 'veuillez choisir une photo', group: 'br', life: 1000 });
       // alert('');
    };

}

const onSelectExample = (event) => {
    form.example = event.files;

}

const onSelect = (event) => {
    filesSend.files = event.files;
}

const remove =(index)=>{

    router.post(route('removeFileService'), {
        file_index: index,
        service_id: props.service.data.id
    }, {
        preserveScroll: true,
        onSuccess: () => {
            toast.add({ severity: 'info', summary: 'Message', detail: 'Photo supprimer', group: 'br', life: 1000 });
        },
        onError: (error)=>{
           // alert(error.message);

             toast.add({ severity: 'error', summary: 'Message', detail: error.message, group: 'br', life: 1000 });
        }

    });
}

defineOptions({
    layout: FreelanceLayout,

});


</script>

<style lang="css" scoped></style>

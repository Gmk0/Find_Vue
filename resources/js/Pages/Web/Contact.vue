<template>
    <div>

    </div>
</template>






<script setup>
    import WebLayout from '@/Layouts/WebLayout.vue';
    import { useStore } from '@/store'; // Assurez-vous d'ajuster le chemin d'importation
import { onMounted } from 'vue';


    const store = useStore();
    const change = store.isNotHome;

    onMounted(() => {
    // Change la valeur de isNotHome dans le store
    store.updateIsNotHomeTrue();
    });


    defineOptions({
    layout: WebLayout,

});



</script>
<style lang="scss" scoped>

</style>

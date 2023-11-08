<template>
    <div>
        <div>



        <img v-if="user.profile_photo_path !=null"
        :class="`w-${taille} h-full  object-cover rounded-full`"
            :src="'/storage/' + user.profile_photo_path" alt="">

        <img v-else
       :class="`w-${taille} h-${taille}  object-cover rounded-full`"
        :src="user.profile_photo_url"
            alt="">


    </div>


    </div>
</template>

<script setup>

defineProps({
    user : Object,
    taille :  {
        type: String,
        default: '12',
    }
});

</script>

<style lang="scss" scoped>

</style>

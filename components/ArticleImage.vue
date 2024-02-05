<template>
    <h6 class="mx-auto mb-[1.875rem] flex flex-col">
        <img class="rounded-lg mb-[0.625rem]" :src="image" alt="" srcset="">
        <span class="source-text">{{source}}</span>
        <!--tailwind @apply class-->
    </h6>
</template>

<script setup>
    const {image, source} = defineProps(['image', 'source'])
</script>

<style lang="scss" scoped>

</style>
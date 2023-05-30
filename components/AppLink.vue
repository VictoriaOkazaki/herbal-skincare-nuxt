<template>
    <a v-if="link.href.startsWith('#')" :href="link.href"
        @click.prevent="smoothScrollToSection(link.href.substring(1))">
        {{link.title}}
    </a>
    <NuxtLink v-else :to="link.href">{{link.title}}</NuxtLink>
</template>

<script setup lang="ts">
    import { ILink } from '~~/types';

    defineProps({
        link: {
            type: Object as PropType<ILink>,
            required: true
        }
    })
</script>

<style lang="scss" scoped>

</style>
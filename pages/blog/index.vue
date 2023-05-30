<template>
    <Header :links="links" />
    <Blog />
    <!-- <div v-for="blog in blogs">
        <h3>{{blog.title}}</h3>
        <img :src="blog.src" width="100"/>
        <NuxtLink :to="`/blog/${blog.id}`">Full page</NuxtLink>
    </div> -->
</template>

<script setup lang="ts">
import { ILink } from '~~/types';

const links: ILink[] = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Catalogue',
        href: '#'
    },
    {
        title: 'Blog',
        href: '/blog'
    }
];

const blogs = useBlogs();
</script>

<style lang="scss" scoped>

</style>
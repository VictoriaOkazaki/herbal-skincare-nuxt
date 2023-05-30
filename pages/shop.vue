<template>
    <Header :links="links" />
    <Catalog :itemsCount="12" />
</template>

<script lang="ts" setup>
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
</script>

<style lang="scss" scoped>

</style>
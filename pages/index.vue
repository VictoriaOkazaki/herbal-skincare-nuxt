<template>
    <div class="container hero">
        <Header :links="links" />
        <Hero />
    </div>
    <main class="main">
        <About />
        <Catalog :goToCatalogPage="true" :itemsCount="goodsCount" />
        <Blog :goToBlogPage="true" />
        <Contacts />
        <Form />
    </main>
</template>

<script lang="ts" setup>
import { useWindowSizes } from '~~/hooks/useWindowSizes';
import { ILink } from '~~/types';

const links: ILink[] = [
    {
        title: 'Home',
        href: '#'
    },
    {
        title: 'About us',
        href: '#about'
    },
    {
        title: 'Catalogue',
        href: '#catalog'
    },
    {
        title: 'Blog',
        href: '#blog'
    },
    {
        title: 'Contacts',
        href: '#contacts'
    }
];

const { width: screenWidth } = useWindowSizes();

const goodsCount = computed(() => {
    const onMobile = screenWidth.value < 760;
    return onMobile ? 4 : 8;
})
</script>

<style lang="scss" scoped>
.hero {
    background-image: url(/images/home-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.main {
    flex: 1 0 auto;
}
</style>
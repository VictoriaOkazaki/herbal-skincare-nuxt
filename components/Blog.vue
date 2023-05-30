<template>
    <section class="blog" id="blog">
        <div class="container">
            <div class="blog__inner">
                <h2 class="blog__title">take a cup of coffee and read our blog☕</h2>
                <ul class="blog__articles">
                    <li v-for="article in currentItems" :key="article.id" class="blog__articles-item">
                        <NuxtLink class="blog__articles-link" :to="'/blog/' + article.id">
                            <span class="blog__articles-date">{{ article.date }}</span>
                            <img :src="article.src" alt="" class="blog__articles-img">
                            <h3 class="blog__articles-title">{{ article.title }}</h3>
                            <p class="blog__articles-text">{{ article.text }}</p>
                            <div class="blog__articles-read">read more</div>
                        </NuxtLink>
                    </li>
                </ul>
                <NuxtLink v-if="goToBlogPage" class="btn" to="/blog">read more</NuxtLink>
                <a v-else v-show="canIncreaseShowCount" @click="increaseCurShowCount" href="#" class="btn">show more</a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useShowMore } from '~~/hooks/useShowMore';

defineProps<{
    goToBlogPage?: boolean
}>()

const articles = useBlogs()

const itemsCount = computed(() => 4);

const {
    currentItems,
    canIncreaseShowCount,
    increaseCurShowCount
} = useShowMore(itemsCount, articles);
</script>

<style lang="scss" scoped>
.blog {
    margin-top: 80px;

    &__inner {
        @extend %section-inner;
    }

    &__title {
        @extend %title;
        width: 50%;
    }

    &__articles {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: 80px 0;
        grid-gap: 42px;
    }

    &__articles-item a {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__articles-date {
        font-family: 'Raleway', sans-serif;
        font-style: italic;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: $second-font-color;
        margin-bottom: 30px;
    }

    &__articles-img {
        &:hover {
            filter: opacity(0.5) sepia(.4) saturate(.6) hue-rotate(10deg);
        }
    }

    &__articles-title {
        @extend %good-title;
        text-align: center;
        margin: 30px 0;
    }

    &__articles-text {
        @extend %text-font;
    }

    &__articles-read {
        font-family: 'Raleway', sans-serif;
        font-style: italic;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: $second-font-color;
        margin-top: 30px;
    }
}</style>
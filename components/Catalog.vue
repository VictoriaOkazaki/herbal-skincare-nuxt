<template>
    <section class="catalog" id="catalog">
        <div class="container"
            style="background-image: url(/images/goods/catalog-bg.jpg);background-repeat: no-repeat;background-size: cover;">
            <div class="catalog__inner">
                <h2 class="catalog__title">go on and enjoy shopping here💚</h2>
                <ul class="catalog__filters">
                    <li v-for="option in filterOptions" class="catalog__filters-item" @click="changeFilter(option.type)"
                        :class="{ 'catalog__filters-item--active': filter === option.type }">
                        {{ option.title }}
                    </li>
                </ul>
                <transition-group name="show" class="catalog__goods" tag="ul">
                    <li v-for="good in currentItems" :key="good.id" @click.stop="onGoodClick(good)"
                        class="catalog__goods-item">
                        <div class="catalog__goods-link">
                            <img :src="good.src" alt="" class="catalog__goods-img">
                            <h4 class="catalog__goods-title">{{ good.title }}</h4>
                            <p class="catalog__goods-price">{{ good.price }} $</p>
                            <a href="#" class="catalog__goods-cart-add">
                                <img src="/images/goods/cart.svg" alt="cart" class="catalog__goods-cart">
                            </a>
                        </div>
                    </li>
                </transition-group>
                <NuxtLink v-if="goToCatalogPage" to="/shop" class="btn">shop more</NuxtLink>
                <a v-else v-show="canIncreaseShowCount" @click="increaseCurShowCount" class="btn">show more</a>
            </div>
        </div>
    </section>
    <AddGoodModal :is-open="activeGood !== null" :close="() => activeGood = null" />
    
</template>

<script setup lang="ts">
import { useCartTools } from '~~/hooks/useCartTools';
import { useFilter, FilterTypes } from '~~/hooks/useFilter';
import { useShowMore } from '~~/hooks/useShowMore';
import { IGood } from '~~/types'

const props = defineProps<{
    goToCatalogPage?: boolean,
    itemsCount: number
}>()

type FilterOption = {
    type: FilterTypes,
    title: string
}

const filterOptions: FilterOption[] = [
    {
        type: 'all',
        title: 'all'
    },
    {
        type: 'bath',
        title: 'bath & hygiene'
    },
    {
        type: 'decor',
        title: 'decorative cosmetics'
    },
    {
        type: 'antiage',
        title: 'anti-age'
    }
]

const { filter, changeFilter, filteredGoods } = useFilter()
const { activeGood } = useCartTools()
const onGoodClick = (good: IGood) => {
    activeGood.value = good
}

const itemsCount = computed(() => props.itemsCount);

const {
    currentItems,
    canIncreaseShowCount,
    increaseCurShowCount,
    setStartShowCount
} = useShowMore(itemsCount, filteredGoods);

watch(filter, () => {
    setStartShowCount();
});

</script>

<style lang="scss">
.catalog {
    margin-top: 80px;

    &__inner {
        @extend %section-inner;
    }

    &__title {
        @extend %title;
        width: 50%;
    }

    &__filters {
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 42px;
    }

    &__filters-item {
        border: 1px solid $main-font-color;
        padding: 26px 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 22px;
        text-align: center;
        text-transform: uppercase;
        color: $main-font-color;
    }

    &__filters-item--active {
        border: none;
        background-image: linear-gradient(0deg, rgba(153, 165, 141, 0.4), rgba(153, 165, 141, 0.4));
        background-color: #F93E04;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 24px;
        color: #ffffff;
    }

    &__goods {
        width: 100%;
        margin: 60px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    &__goods-item {
        border: 1px solid $second-font-color;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
        padding: 50px 0 10px;
        width: 21%;
        margin: 21px;

        &:hover {
            background: rgba(153, 165, 141, 0.62);
        }
    }

    &__goods-img {
        height: 400px;
    }

    &__goods-title {
        @extend %good-title;
        margin-top: 80px;
    }

    &__goods-price {
        font-family: 'Raleway', sans-serif;
        font-style: italic;
        font-weight: 300;
        font-size: 22px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
        color: $second-font-color;
        margin-top: 20px;
    }

    &__goods-cart-add {
        position: absolute;
        bottom: 0;
        right: 0;

        :hover {
            transition-duration: 400ms;
            transform: scale(0.8) translateX(-10px);
            background: none;
        }
    }
}

/* catalog filters animation*/
.show-leave-active {
    animation: hide .4s ease 0s 1 normal forwards;
    transform-origin: center;
}

.show-enter-active {
    animation: show .4s ease 0s 1 normal forwards;
    transform-origin: center;
}

@keyframes hide {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
        width: 0;
        height: 0;
        margin: 0;
    }
}

@keyframes show {
    0% {
        transform: scale(0);
        width: 0;
        height: 0;
        margin: 0;
    }

    100% {
        transform: scale(1);
    }
}
</style>
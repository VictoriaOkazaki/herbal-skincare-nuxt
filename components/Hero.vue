<template>
    <section class="home" id="home">
        <p class="home__side-text">organic, ethically made and great for your skin</p>
        <div class="home__offer">
            <h1 class="home__title">herbal scincare both science and nature for your beauty</h1>
            <p class="home__text">Check out our herbal skin care selection for the very best in unique or custom, handmade pieces from our bath & beauty shops. Herbfarmacy products are great – organic and brilliant for sensitive and dry skin. </p>
            <a href="#catalog" class="btn" id="home-btn" @click.prevent="smoothScrollToSection('catalog')">
                shop now
            </a>
            <img src="/images/home-img.png" alt="" class="home__img">
        </div>
        <div class="home__right">
            <img src="/images/tube.png" alt="tube" class="home__right-tube">
            <a href="#catalog" class="home__right-arrow" @click.prevent="smoothScrollToSection('catalog')">
                <img src="/images/arrow.svg" alt="to bottom arrow" class="home__right-arrow-img">
            </a>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        justify-content: space-between;
        margin-bottom: 80px;
        &__side-text {
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 22px;
            line-height: 26px;
            color: $main-font-color;
            text-transform: uppercase;
            writing-mode: vertical-rl;
            opacity: 50%;
            margin-top: 160px;
        }
        &__offer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            margin-top: 80px;
        }
        &__title {
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 50px;
            line-height: 60px;
            text-align: center;
            color: $main-font-color;
            text-transform: uppercase;
        }
        &__text {
            @extend %text-font;
            margin: 50px 0;
        }
        &__img {
            margin-top: 40px;
        }
        &__right {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            width: 48px;
        }
        &__right-tube {
            opacity: 50%;
            position: absolute;
            top: 30%;
            left: 10%;
            width: 48px;
        }
        &__right-arrow {
            opacity: 0.5;
            position: absolute;
            top: 85%;
            left: 20%;
            width: 26px;
            :hover {
                transform: translateY(10px);
                opacity: 1;
            }
        }
    }
</style>
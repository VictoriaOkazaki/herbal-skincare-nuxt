<template>
    <header>
        <div class="header__inner">
        <NuxtLink to="/">
            <span class="header__logo">h&s</span>
        </NuxtLink>
        <nav class="header__menu">
            <ul class="header__menu-list">
                <li v-for="link in links" class="header__menu-item">
                    <AppLink :link="link"/>
                </li>
            </ul>
        </nav>
        <a @click="cartModalOpen = true" class="header__cart">
            <img src="/images/cart.svg" alt="cart" class="header__img">
            <span v-if="cart.length != 0" class="header__cart-amount">{{cart.length}}</span>
        </a>
        <button class="burger" id="burger" @click="burgerMenuOpen = true">
            <img src="/images/burger.svg" alt="burger button" class="burger__img">
        </button>
        </div>
    </header>
    <BurgerMenu :isOpen="burgerMenuOpen" :close="() => burgerMenuOpen = false" :links="links"/>
    <CartModal :isCartOpen="cartModalOpen" :closeCart="() => cartModalOpen = false" />
</template>

<script lang="ts" setup>
    import { useCartTools } from '~~/hooks/useCartTools';
import { ILink } from '~~/types';

    defineProps({
        links: {
            type: Array as PropType<ILink[]>,
            required: true
        }
    })

    const cart = useCart()

    const { cartModalOpen } = useCartTools()

    const burgerMenuOpen = ref(false)

</script>

<style lang="scss" scoped>
    .header {
        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            position: relative;
            z-index: 20;
        }
        &__logo {
            @extend %logo-font;
            font-size: 40px;
            line-height: 66px;
            text-transform: uppercase;
        }
        &__menu {
            width: 50%;
        }
        &__menu-list{
            display: flex;
            justify-content: space-between;
        }
        &__menu-item a{
            @extend %menu-font;
            &:hover {
                text-decoration: underline;
                opacity: .5;
            }
        }
        &__img {
            width: 32px;
            height: 32px;
        }
        &__cart {
            position: relative;
        }
        &__cart-amount {
            border-radius: 100%;
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 60%;
            width: 18px;
            height: 18px;
            text-align: center;
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            opacity: 0.8;
            color: $main-font-color;
        }
    }

    /* burger menu */
    @keyframes slidein {
        from {
            margin-left: 100%;
            width: 300%;
        }
    
        to {
            margin-left: 0%;
            width: 100%;
        }
    }
    .burger {
        display: none;
        z-index: 10;
    }
    .burger__window {
        display: none;
    }
    .burger__window--active {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        position: fixed;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        animation: 2s alternate slidein;
    }
    .burger__inner {
        height: 100vh;
    }
    .burger__menu-container {
        margin-top: 100px;
        position: relative;
        height: 317px;
        background-image: url(../images/circle.svg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width:  760px) {
        .burger {
            display: block;
            background: none;
            border: none;
            position: absolute;
            right: 0;
            top: 20%;
        }
        
        .burger__menu-contacts {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        .burger__menu-tube {
            transform: rotateZ(90deg);
            width: 17px;
            margin-bottom: 40px;
        }
        .burger__contacts-link {
            margin-bottom: 20px;
        }
        .burger__social-img {
            width: 18px;
            height: 18px;
        }
        .burger__social {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 20px;
        }
    }
</style>
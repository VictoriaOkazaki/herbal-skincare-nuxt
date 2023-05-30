<template>
    <div class="burger__window" :class="{ 'burger__window--active': isOpen }">
        <div class="container">
          <div class="burger__inner">
            <div class="burger__menu-container">
              <nav class="burger__menu">
                <ul class="header__menu-list">
                    <li v-for="link in links" class="header__menu-item">
                        <AppLink @click="() => close()" :link="link"/>
                    </li>
                </ul>
              </nav>
            </div>
            <div class="burger__menu-contacts">
              <img src="/images/tube.png" alt="" class="burger__menu-tube">
              <a href="tel:6624882708" class="contacts__link burger__contacts-link">662-488-2708</a>
              <a href="mailto:info@hns.com" class="contacts__link burger__contacts-link">info@hns.com</a>
              <ul class="burger__social">
                <li v-for="socialItem in socialMedia" class="contacts__social-item">
                    <a :href="socialItem.href" target="_blank" class="contacts__social-link">
                        <img :src="socialItem.src" :alt="socialItem.alt" class="burger__social-img">
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ILink } from '~~/types';

    defineProps({
        links: {
            type: Array as PropType<ILink[]>,
            required: true
        },
        isOpen: {
            required: true,
            type: Boolean
        },
        close: {
            required: true,
            type: Function
        }
    })

    const socialMedia = useSocialMedia()
</script>

<style lang="scss" scoped>
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

    .contacts {
        &__social {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 40px;
        }
        &__social-item {
            &:hover {
                opacity: 0.5;
            }
        }
        &__social-img {
            width: 30px;
            height: 30px;
        }
    }

    .header__menu-list {
        flex-direction: column;
        align-items: center;
    }

    .header__menu-item {
        text-transform: uppercase;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
    }
</style>
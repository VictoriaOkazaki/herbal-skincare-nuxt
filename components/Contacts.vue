<template>
    <section class="contacts" id="contacts">
        <div class="container">
            <div class="contacts__inner">
                <h2 class="contacts__title">our contacts</h2>
                <ul class="contacts__list">
                    <li class="contacts__item">
                        <h4 class="contacts__item-title">adress</h4>
                        <span class="contacts__adress">912 Lake View Street
                            Manahawkin, NJ 08050</span>
                    </li>
                    <li class="contacts__item">
                        <h4 class="contacts__item-title">phone</h4>
                        <a href="tel:6624882708" class="contacts__link">662-488-2708</a>
                    </li>
                    <li class="contacts__item">
                        <h4 class="contacts__item-title">email</h4>
                        <a href="mailto:info@hns.com" class="contacts__link">info@hns.com</a>
                    </li>
                    <li class="contacts__item">
                        <h4 class="contacts__item-title">social media</h4>
                        <ul class="contacts__social">
                            <li class="contacts__social-item" v-for="link in socialLinks">
                                <a :href="link.href" target="_blank" class="contacts__social-link">
                                    <img :src="link.src" :alt="link.alt" class="contacts__social-img">
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="contacts__images">
                    <div class="contacts__images-1">
                        <img src="/images/contacts/circle.svg" alt="" class="contacts__img contacts__img-circle">
                        <img src="/images/contacts/img-1.jpg" alt="" class="contacts__img">
                    </div>
                    <div class="contacts__images-2">
                        <img src="/images/contacts/img-2.jpg" alt="" class="contacts__img contacts__img-2">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const socialLinks = useSocialMedia()
</script>

<style lang="scss" scoped>
.contacts {
    margin-top: 40px;

    &__inner {
        @extend %section-inner;
    }

    &__title {
        @extend %title;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 60px;
        margin: 80px 0;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__item-title {
        @extend %good-title;
        margin-bottom: 30px;
    }

    &__adress {
        @extend %text-font;
    }

    &__link {
        @extend %text-font;
        text-decoration: underline;

        &:hover {
            opacity: 0.5;
        }
    }

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

    &__images {
        display: flex;
    }

    &__images-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 42px;
    }

    &__img-2 {
        height: 100%;
    }

    &__img-circle {
        width: 360px;
        margin-bottom: 50px;
    }
}
</style>
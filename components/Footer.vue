<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
            <div class="footer__container">
                <a href="#">
                    <img src="/images/logo.svg" alt="" class="footer__logo">
                </a>
                <p class="footer__copyright">H&S Co. 2022 All rights reserved</p>
            </div>
            <a class="footer__to-top" @click.prevent="scrollOnTopOfPage(true)">
                <img src="/images/to-top.svg" alt="" class="footer__to-top-img">
            </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .footer {
        margin-top: 80px;
        &__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            padding-bottom: 40px;
        }
        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__copyright {
            position: absolute;
            left: 50%;
        }
        &__to-top {
            &:hover {
                transition-duration: 400ms;
                transform: translateY(-30px);
            }
        }
    }
</style>
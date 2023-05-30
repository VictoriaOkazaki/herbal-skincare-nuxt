<template>
    <section class="about" id="about">
        <div class="container">
            <div class="about__inner">
                <h2 class="about__title">we have been on the market for 15 years</h2>
                <p class="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div>
                    <ul class="about__statistics">
                        <li class="about__statistics-item">
                            <h5 class="about__statistics-text">30 cities</h5>
                        </li>
                        <li class="about__statistics-item">
                            <h5 class="about__statistics-text">6 partners</h5>
                        </li>
                        <li class="about__statistics-item">
                            <h5 class="about__statistics-text">150 shops</h5>
                        </li>
                        <li class="about__statistics-item">
                            <h5 class="about__statistics-text">5 plants</h5>
                        </li>
                    </ul>
                </div>
                <ul class="about__info">
                    <li v-for="elem in info" class="about__info-item">
                        <img :src="elem.src" alt="" class="about__info-img">
                        <p class="about__info-text">{{elem.text}}</p>
                    </li>
                </ul>
                <div class="about__circle">
                    <img src="/images/about/circle.svg" alt="" class="about__circle-img">
                </div>
                <div class="about__form-container">
                    <h3 class="about__form-title">Want keep up to date on all the latest <br> trends and offers? <br>
                        Sign up below.</h3>
                    <form action="" class="about__form">
                        <input type="email" class="about__form-input" placeholder="Email">
                        <button class="about__form-btn">
                            <img src="/images/about/arrow.svg" alt="" class="about__form-arrow">
                        </button>
                    </form>
                </div>
                <ul class="about__advantages">
                    <li v-for="elem in advantages" class="about__advantages-item">
                        <img :src="elem.src" :alt="elem.alt" class="about__advantages-img">
                        <p class="about__advantages-text">{{elem.text}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
    const info = useAboutInfo()
    const advantages = useAboutAdvantages()
</script>

<style lang="scss" scoped>
    .about {
        &__inner {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        padding: 80px 0;

        &__title {
            @extend %title;
            margin: 80px 0;
            width: 50%;
        }

        &__text {
            @extend %text-font;
            margin-bottom: 80px;
            width: 80%;
        }

        &__statistics {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin-bottom: 80px;
        }

        &__statistics-item {
            position: relative;
            background-image: url(../images/about/stat-1.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            width: 246px;
            height: 176px;
        }

        &__statistics-text {
            @extend %good-title;
            position: absolute;
            top: 40%;
            left: 35%;
            width: 100%;
        }

        &__info {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 40px;
            margin-bottom: 80px;
        }

        &__info-text {
            font-family: 'Raleway', sans-serif;
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: $main-font-color;
            margin-top: 30px;
            text-transform: uppercase;
        }

        &__circle {
            display: flex;
            align-items: center;
        }

        &__form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 80px;
        }

        &__form {
            display: flex;
            margin: 80px 0;
        }

        &__form-title {
            @extend %good-title;
            text-align: center;
        }

        &__form-input {
            padding: 27px 18px 27px;
            font-family: 'Raleway', sans-serif;
            font-size: 20px;
            line-height: 23.5px;
            color: rgba(0, 0, 0, 0.5);
            border: $main-font-color 1px solid;
            width: 670px;
        }

        &__form-btn {
            background-image: linear-gradient(180deg, #654B34 0%, rgba(193, 107, 31, 0.6) 57.14%);
            border: none;
            padding: 20px 56px;
            transition: all .4s ease;

            &:hover {
                background-image: linear-gradient(180deg, rgba(77, 57, 39, 0.81) 16.67%, rgba(202, 111, 31, 0.78) 83.33%);
            }
        }

        &__advantages {
            display: flex;
        }

        &__advantages-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__advantages-img {
            height: 70px;
        }

        &__advantages-text {
            font-family: 'Raleway', sans-serif;
            font-weight: 500px;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: $main-font-color;
            text-transform: uppercase;
            margin-top: 20px;
            width: 282px;
        }
    }
</style>
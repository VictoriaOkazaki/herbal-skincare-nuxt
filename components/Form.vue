<template>
    <section class="form">
        <div class="container">
            <div class="form__inner">
                <h2 class="form__title">get in touch with us</h2>
                <p class="form__text">Still have any questions to us? Fill the form below and our manager will contact you
                    in 30 minutes.</p>
                <form action="" class="form__form">
                    <input type="text" class="form__input" name="fname" placeholder="First name">
                    <input type="text" class="form__input" name="lname" placeholder="Last name">
                    <input type="email" class="form__input" name="email" placeholder="Email">
                    <input type="tel" class="form__input" name="phone" placeholder="Phone">
                    <input type="submit" value="send" class="btn">
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.form {
    &__inner {
        @extend %section-inner;
    }

    &__title {
        @extend %title;
    }

    &__text {
        @extend %text-font;
        margin-top: 80px;
        width: 50%;
    }

    &__form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px 45px;
        margin-top: 80px;
    }

    &__input {
        border: 1px solid $main-font-color;
        padding: 27px 14px 27px;
        color: rgba(0, 0, 0, 0.5);

        &::placeholder {
            color: rgba(0, 0, 0, 0.5);
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
        }
    }
}

input.btn {
    margin: 40px auto;
    grid-column: 1 / span 2;
}</style>
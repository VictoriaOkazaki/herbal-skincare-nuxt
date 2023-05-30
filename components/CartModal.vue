<template>
    <Modal :isOpen="isCartOpen" :close="closeCart">
        <div class="cart__goods">
            <div v-if="isCartEmpty" class="cart__empty">Cart is empty</div>
            <div v-for="good in cart" class="cart__good">
                <img :src="good.src" alt="" class="cart__good-img">
                <div class="cart__good-details">
                    <h5 class="cart__good-title">{{ good.title }}</h5>
                    <span class="cart__good-text">Volume: {{ good.volume }} ml, Skin type: {{
                        good.type
                    }}</span>
                    <span class="cart__good-text">Amount: {{ good.count }}, {{
                        good.price * good.count
                    }}$</span>
                </div>
                <button @click="deleteGood(good)" class="cart__good-btn">
                    <img src="/images/delete-good.svg" alt="delete good" class="cart__good-btn-img">
                </button>
            </div>
        </div>
        <div class="popup__amount">
            <h5 class="popup__amount-title">total:</h5>
            <span class="popup__amount-price">{{ totalCartPrice }} $</span>
            <button class="popup__amount-btn" @click="placeOrder" :style="{ opacity: isCartEmpty ? 0.5 : 1 }">
                <span class="popup__amount-add">place an order</span>
                <img src="/images/card.svg" alt="card" class="popup__amount-img">
            </button>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import { useCartTools } from '~~/hooks/useCartTools';

defineProps({
    isCartOpen: {
        type: Boolean,
        required: true
    },
    closeCart: {
        type: Function,
        required: true
    }
})

const { deleteGood, totalCartPrice, isCartEmpty, cart } = useCartTools()

const placeOrder = () => {
    if (isCartEmpty.value) return;
    window.location.replace('/pay');
}
</script>

<style lang="scss" scoped>
.popup__good {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 34%;
}

.popup__good-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
    color: $main-font-color;
}

.popup__good-price {
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
    color: $second-font-color;
    margin-top: 10px;
}

.popup__good-img {
    height: 240px;
    margin: 60px 0;
}

.popup__good-text {
    // width: 34%;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: $main-font-color;
}

.popup__filters {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.popup__filters-inputs {
    display: flex;
    margin-bottom: 30px;
}

.popup__filters-label {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    color: $main-font-color;
    margin-bottom: 20px;
}

.popup__filters-input {
    visibility: hidden;
    position: absolute;
}

.popup__filters-input+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }
}

.popup__filters-input+label::before {
    content: " ";
    display: inline-block;
    margin-right: 2px;
    vertical-align: baseline;
    border-radius: 100%;
    width: 18px;
    height: 18px;
    background-color: rgba(153, 165, 141, 0.62);
    cursor: pointer;
}

.popup__filters-input:checked+label img {
    display: block;
    position: absolute;
    top: -10%;
    left: 0;
}

.popup__filters-input+label {
    position: relative;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: $main-font-color;

    img {
        display: none;
        transition: all .3s ease;
    }
}

.popup__filters-number {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.popup__filters-btn {
    background-color: rgba(153, 165, 141, 0.62);
    border-radius: 100%;
    border: none;
    width: 18px;
    height: 18px;
    padding: 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup__filters-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    text-align: center;
    color: $main-font-color;
}

.popup__amount {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 50px;
    right: 14%;
    margin-top: 20px;
}

.popup__amount-title,
.popup__amount-price {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: $second-font-color;

}

.popup__amount-price {
    font-style: italic;
    margin-left: 15px;
}

.popup__amount-btn {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    margin-left: 70px;
}

.popup__amount-add {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    color: rgba(44, 48, 43, 0.86);
}

.popup__amount-img {
    width: 38px;
    height: 38px;
    margin-left: 8px;
}

/* cart */
.cart__empty {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  line-height: 18px;
}
.cart__goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 434px;
  overflow-y: auto;
}
.cart__good {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 40px;
  width: 295px;
  &:nth-child(even) {
    margin-right: 0;
  }
}
.cart__good-img {
  height: 86px;
  max-width: 37px;
}
.cart__good-details {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
}
.cart__good-title,
.cart__good-text {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  color: $main-font-color;
}
.cart__good-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
}
.cart__good-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 10px;
}
.cart__good-btn {
  background: none;
  border: none;
}
.cart__good-btn-img {
  width: 30px;
  height: 30px;
}
</style>
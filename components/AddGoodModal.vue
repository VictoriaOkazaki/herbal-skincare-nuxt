<template>
    <Modal :isOpen="isOpen" :close="close">
        <div v-if="activeGood" class="popup__good">
            <h4 class="popup__good-title">{{ activeGood.title }}</h4>
            <p class="popup__good-price">{{ activeGood.price }} $</p>
            <img :src="activeGood.src" alt="" class="popup__good-img">
            <p class="popup__good-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div class="popup__filters">
            <label class="popup__filters-label">volume</label>
            <div class="popup__filters-inputs">
                <input class="popup__filters-input" type="radio" id="400ml" name="volume" value="400"
                    :checked="radioVolume === '400'" @click="radioVolume = '400'"/>
                <label for="400ml"> 400ml
                    <img src="/images/check.svg" alt="">
                </label>
                <input class="popup__filters-input" type="radio" id="800ml" name="volume" value="800"
                    :checked="radioVolume === '800'" @click="radioVolume = '800'" />
                <label for="800ml"> 800ml
                    <img src="/images/check.svg" alt="">
                </label>
            </div>
            <label class="popup__filters-label">skin type</label>
            <div class="popup__filters-inputs">
                <input class="popup__filters-input" type="radio" id="normal" name="skin-type" value="normal"
                    :checked="radioType === 'normal'" @click="radioType = 'normal'" />
                <label for="normal"> normal
                    <img src="/images/check.svg" alt="">
                </label>
                <input class="popup__filters-input" type="radio" id="dry" name="skin-type" value="dry"
                    :checked="radioType === 'dry'" @click="radioType = 'dry'" />
                <label for="dry"> dry
                    <img src="/images/check.svg" alt="">
                </label>
                <input class="popup__filters-input" type="radio" id="sensitive" name="skin-type" value="sensitive"
                    :checked="radioType === 'sensitive'" @click="radioType = 'sensitive'" />
                <label for="sensitive"> sensitive
                    <img src="/images/check.svg" alt="">
                </label>
            </div>
            <div class="popup__filters-number">
                <label class="popup__filters-label">amount</label>
                <button class="popup__filters-btn" id="popup-plus" @click="plusGoodCounter">
                    <img src="/images/plus.svg" alt="plus" class="poup__filters-img">
                </button>
                <h5 class="popup__filters-title">{{ goodCounter }}</h5>
                <button class="popup__filters-btn" id="popup-minus" @click="minusGoodCounter">
                    <img src="/images/minus.svg" alt="minus" class="poup__filters-img">
                </button>
            </div>
        </div>
        <div class="popup__amount">
            <h5 class="popup__amount-title">total:</h5>
            <span class="popup__amount-price">{{ totalPrice }} $</span>
            <button class="popup__amount-btn" @click.stop="addGoodToCart">
                <span class="popup__amount-add">add to cart</span>
                <img src="/images/goods/cart.svg" alt="cart" class="popup__amount-img">
            </button>
        </div>
    </Modal>
    <GoToCartModal :is-open="openGoToCart" :close="() => openGoToCart = false" />
</template>

<script setup lang="ts">import { useCartTools } from '~~/hooks/useCartTools';

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    close: {
        type: Function,
        required: true
    }
})

const { addGood, activeGood, cart } = useCartTools()

const openGoToCart = ref(false)

const addGoodToCart = () => {
    const goodInCart = cart.value.find(good => {
        return good.id === activeGood.value?.id && good.volume === radioVolume.value &&
            good.type === radioType.value;
    });
    if (goodInCart) {
        goodInCart.count += goodCounter.value;
    } else if (activeGood.value) {
        addGood({
            ...activeGood.value,
            count: goodCounter.value,
            volume: radioVolume.value,
            type: radioType.value
        })
    }
    props.close()
    openGoToCart.value = true
}

const goodCounter = ref(1)
const radioVolume = ref('400')
const radioType = ref('normal')

watch(computed(() => props.isOpen), (value) => {
    if (!value) {
        goodCounter.value = 1;
        radioVolume.value = '400';
        radioType.value = 'normal';
    }
})

const totalPrice = computed(() => {
    if (activeGood.value === null) {
        return 0;
    }
    return activeGood.value.price * goodCounter.value;
})

const plusGoodCounter = () => {
    goodCounter.value++;
}

const minusGoodCounter = () => {
    if (goodCounter.value > 1) {
        goodCounter.value--;
    }
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
</style>
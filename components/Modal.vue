<template>
    <ClientOnly>
        <div class="popup" :class="{ 'popup-show': isOpen }">
            <div class="popup__overlay">
                <div class="popup__body" :class="{ 'popup__body-small': isSmall }" v-click-outside="clickOutside">
                    <a v-if="useClose" href="#" class="popup__close" @click="close()">
                        <img src="/images/close.svg" alt="close button" class="popup__close-img">
                    </a>
                    <slot />
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    close: {
        type: Function,
        required: true
    },
    useClose: {
        type: Boolean,
        default: true
    },
    isSmall: {
        type: Boolean,
        default: false
    },
})

const clickOutside = () => {
    if (!props.useClose) {
        props.close()
    }
}
</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    z-index: 30;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;
}

.popup__overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.86);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-show {
    display: block;
}

.popup__body {
    padding-top: 0;
    width: 68%;
    height: 85%;
    background-color: #ffffff;
    padding: 40px 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.popup__close {
    position: absolute;
    top: 15px;
    right: 15px;
}
.popup__body-small {
  height: 35%;
  width: 35%;
  align-items: center;
  padding: 10px 10px !important;
}
</style>
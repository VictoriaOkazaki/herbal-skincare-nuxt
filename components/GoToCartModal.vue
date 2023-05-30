<template>
    <Modal :isOpen="isOpen" :close="close" :useClose="false" :isSmall="true">
        <div class="good-added__inner">
            <span class="good-added__text">Item has been successfully added to cart 💚</span>
            <div class="good-added__btns">
              <button @click="openCart" class="modal-btn">go to cart</button>
              <button @click="close()" class="modal-btn btn-2">back to shop</button>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import { useCartTools } from '~~/hooks/useCartTools';

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
const { cartModalOpen } = useCartTools()
const openCart = () => {
    props.close()
    cartModalOpen.value = true
}
</script>

<style lang="scss" scoped>
.good-added {
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  &__btns {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    justify-content: space-evenly;
    width: 100%;
  }
  &__text {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: $main-font-color;
  }
}
.modal-btn {
  font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #ffffff;
    background-image: linear-gradient(180deg, #654B34 0%, rgba(193, 107, 31, 0.6) 57.14%);
    border-radius: 50px;
    padding: 8px 12px;
    width: 150px;
	  text-align: center;
	  border: none;
	  transition: all .4s ease;
	  &:hover {
		  background-image: linear-gradient(180deg, rgba(77, 57, 39, 0.81) 16.67%, rgba(202, 111, 31, 0.78) 83.33%);
	  }
}
.btn-2 {
  background: none;
  color: $main-font-color;
  border: 1px solid $main-font-color;
  &:hover {
    background: none;
  }
}
</style>
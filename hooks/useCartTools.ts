import { ICartGood, IGood } from "~~/types"

const cartModalOpen = ref(false)
const activeGood = ref<IGood | null>(null)

export const useCartTools = () => {
    const cart = useCart()

    const deleteGood = (good: ICartGood) => {
        cart.value = cart.value.filter(el => el.id !== good.id)
    }

    const addGood = (good: ICartGood) => {
        cart.value = [...cart.value, good]
    }

    const totalCartPrice = computed(() => {
        let res = 0;
        for (const good of cart.value) {
            res += good.price * good.count;
        }
        return res;
    })

    const isCartEmpty = computed(() => {
        return cart.value.length === 0
    })

    return { deleteGood, totalCartPrice, isCartEmpty, cart, addGood, activeGood, cartModalOpen }
}
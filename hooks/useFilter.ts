import { IGood } from "~~/types"

export type FilterTypes = 'all' | 'bath' | 'decor' | 'antiage'

export const useFilter = () => {
    const filter = ref<FilterTypes>('all')
    const goods = useGoods()
    const changeFilter = (value: FilterTypes) => {
        filter.value = value
    }
    const filteredGoods = computed<IGood[]>(() => {
        if (filter.value === 'all') return goods.value
        return goods.value.filter(el => el.filter === filter.value)
    })
    return { filter, changeFilter, filteredGoods }
}
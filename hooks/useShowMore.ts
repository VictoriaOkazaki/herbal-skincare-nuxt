export function useShowMore<T>(increaseShowCount: Ref<number>, items: Ref<T[]>) {
    const curShowCount = ref(increaseShowCount.value);

    const currentItems = computed(() => {
        const endIndex = items.value.length < curShowCount.value ? items.value.length : curShowCount.value;
        return items.value.slice(0, endIndex);
    });

    const canIncreaseShowCount = computed(() => {
        return curShowCount.value < items.value.length;
    });

    const increaseCurShowCount = () => {
        curShowCount.value += increaseShowCount.value;
    };

    const setStartShowCount = () => {
        curShowCount.value = increaseShowCount.value;
    };

    watch(increaseShowCount, () => {
        setStartShowCount();
    });

    return { currentItems, increaseCurShowCount, canIncreaseShowCount, setStartShowCount };
}

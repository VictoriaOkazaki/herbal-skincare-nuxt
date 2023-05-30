<template>
    <div>
        <p>Error</p>
        <p v-if="uiError.statusCode">Status code: {{ uiError.statusCode }}</p>
        <p v-if="uiError.statusMessage">Status message: {{ uiError.statusMessage }}</p>
        <p v-if="uiError.message">Error message: {{ uiError.message }}</p>
    </div>
</template>

<script setup lang="ts">
    import { NuxtError } from '#app';

    const props = defineProps({
        error: {
            required: true,
            type: Object as PropType<string | Partial<NuxtError>>
        }
    })

    const messageError = typeof props.error === 'string' ? props.error as string : ''
    const nuxtError = typeof props.error !== 'string' ? props.error as NuxtError : null

    const uiError = {
        statusCode: nuxtError?.statusCode || '',
        statusMessage: nuxtError?.statusMessage || '',
        message: nuxtError?.message || messageError || 'Unknown Error'
    }
</script>

<style lang="scss" scoped>

</style>
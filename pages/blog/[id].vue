<template>
    <div>
        Single blog page {{blog?.title}}
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()
    const blog = useBlog(Number(route.params.id))

    if (!blog) {
        throw createError({ statusCode: 404, statusMessage: 'Blog not found', fatal: true })
    }
</script>

<style lang="scss" scoped>

</style>
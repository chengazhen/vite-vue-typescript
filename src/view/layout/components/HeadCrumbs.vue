<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: currentPage.path }">{{ currentPage.name }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { watchEffect, reactive } from 'vue';
import { useRoute, type RouteLocationNormalized } from 'vue-router'


const route: RouteLocationNormalized = useRoute()
const currentPage = reactive<{ path: string, name: string }>({
    path: '',
    name: ''
})

watchEffect(() => {
    currentPage.path = route.fullPath
    currentPage.name = route.meta.name
})
</script>

<style scoped>
</style>
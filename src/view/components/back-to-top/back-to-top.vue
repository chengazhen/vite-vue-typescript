<template>
    <div v-for="(item) in num" :key="item">{{ item }}</div>
    <BackTop />
</template>

<script setup lang="ts">
import BackTop from '@/components/BackTop.vue'
import { onMounted, onUnmounted } from 'vue';
const num = 300
onMounted(() => {
    const dom: HTMLElement | null = document.querySelector('.el-main')
    if (dom) {
        dom.style.overflow = "visible"
    }
})

onUnmounted(() => {
    const dom: HTMLElement | null = document.querySelector('.el-main')
    if (dom) {
        dom.style.overflow = "auto"
    }
})
</script>

<style>
</style>
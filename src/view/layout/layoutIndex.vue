<template>
    <el-container>
        <el-aside width="200px">
            <LeftNav />
        </el-aside>
        <el-container>
            <el-header>
                <HeadCrumbs />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import LeftNav from './components/LeftNav.vue'
import HeadCrumbs from './components/HeadCrumbs.vue';
import { userStore } from '@/stores/user';
const store = userStore()
console.log(store.$state);

</script>

<style scoped>
.el-container {
    height: 100%;
}
.el-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
</style>
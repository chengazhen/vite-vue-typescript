<template>
    <el-container>
        <el-aside width="200px">
            <LeftNav />
        </el-aside>
        <el-container>
            <el-header>
                <!-- <top /> -->
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import LeftNav from './components/LeftNav.vue'
</script>

<style scoped>
.el-container {
    height: 100%;
}
</style>
<template>
    <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        :collapse="false"
        :router="true"
    >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/dashboard">面板</el-menu-item>
        <el-menu-item index="/orderList">订单(分页组件)</el-menu-item>
        <el-menu-item index="/components/back-to-top">返回顶部</el-menu-item>
        <el-menu-item index="/components/pan-thumb">小组件</el-menu-item>
        <el-menu-item index="/components/count-to">count-to</el-menu-item>
        <!-- <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>Navigator One</span>
            </template>
            <el-menu-item-group>
                <template #title>
                    <span>Group One</span>
                </template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>-->
    </el-menu>
</template>

<script lang="ts" setup>
import { useRoute, type RouteLocationNormalized } from 'vue-router';
const route: RouteLocationNormalized = useRoute()
const defaultActive: string = route.fullPath


</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}
</style>

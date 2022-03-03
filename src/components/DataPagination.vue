<template>
    <div class="pagination-wrapper">
        <el-pagination
            v-model:page-size="pageSize"
            :small="true"
            v-model:current-page="current"
            :background="true"
            layout="sizes, total, prev, pager, next"
            :total="props.total"
            :page-sizes="[20, 40, 60, 80]"
        ></el-pagination>
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick } from 'vue';

interface propsType {
    pageSize?: number,
    total: number,
    currentPage?: number,
}
const props = withDefaults(defineProps<propsType>(), {
    pageSize: 20,
    total: 40,
    currentPage: 1
})

const emits = defineEmits(['update:pageSize', 'update:currentPage', 'change'])

const change = () => {
    nextTick(() => {
        emits('change', { page: current.value, size: pageSize.value })
    })
}

const current = computed<number>({
    get: () => props.currentPage, set(value) {
        emits('update:currentPage', value)
        change()
    }
})

const pageSize = computed({
    get: () => props.pageSize, set(value) {
        emits('update:pageSize', value)
        change()
    }
})


</script>

<style scoped>
.pagination-wrapper {
    background: #fff;
    padding: 32px 16px;
}
</style>
<template>
    <el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
        <el-table-column prop="restaurant_name" label="restaurant_name" width="180" />
        <el-table-column prop="formatted_created_at" label="formatted_created_at" width="180" />
    </el-table>
    <DataPagination
        v-model:currentPage="params.offset"
        v-model:pageSize="params.limit"
        :total="total"
        @change="change"
    />
    <BackTopVue :visibility-height="300" :back-position="50" />
</template>

<script setup lang="ts">
import BackTopVue from '@/components/BackTop.vue';
import { getOrderList } from '@/api/response';
import { onMounted, ref, reactive } from 'vue';
import DataPagination from '@/components/DataPagination.vue'
const params = reactive<{ limit: number, offset: number }>({
    limit: 20,
    offset: 0
})

interface tableItem {
    restaurant_name: string
    formatted_created_at: string
}

const tableData = ref<tableItem[]>([])
const total = ref<number>(0)
const loading = ref<boolean>(false)


const getData = async () => {
    loading.value = true
    try {
        const { data } = await getOrderList(params)
        if (data instanceof Array) {
            tableData.value = data
            total.value = data.length
        }
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    getData()
})


const change = () => {
    getData()
}

// for (const item of tableData.value) {
//     if (item.formatted_created_at)
// }
</script>

<style scoped>
</style>
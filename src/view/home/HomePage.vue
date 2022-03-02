<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="username" label="username" width="180" />
    <el-table-column prop="city" label="city" width="180" />
    <el-table-column prop="registe_time" label="registe_time" />
  </el-table>
</template>

<script setup lang="ts">
import { userList } from '@/api/response';
import { onMounted, ref } from 'vue';

interface tableDataType {
  username: string,
  city: string,
  registe_time: string
}
const tableData = ref<tableDataType[]>([])



onMounted(async () => {
  const { data } = await userList({ offset: 0, limit: 20 })
  if (data) {
    tableData.value = data
  }

})

</script>

<style scoped>
</style>
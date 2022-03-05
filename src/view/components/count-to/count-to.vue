<template>
  <div>
    <countTo :start-val="startValue" :end-val="endValue" ref="countToRef" :autoplay="false" />
    <div>
      <el-button type="primary" @click="start">开始</el-button>
      <el-button type="primary" @click="pause">暂停</el-button>
    </div>

    <div class="input-wrapper">
      <span>开始:</span>
      <el-input-number v-model="startValue" :min="0" />
    </div>
    <div class="input-wrapper">
      <span>结束:</span>
      <el-input-number v-model="endValue" :min="0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import countTo from '@/components/CountTo/CountTo.vue'
import { ref } from 'vue'
type countToType = InstanceType<typeof countTo>
const countToRef = ref<countToType>()

const startValue = ref<number>(0)
const endValue = ref<number>(0)

const start = () => {
  countToRef.value?.start()
}
const pause = () => {
  countToRef.value?.pause()
}

</script>

<style scoped>
.input-wrapper {
  display: flex;
  margin-top: 12px;
  align-items: center;
}
span {
  white-space: nowrap;
}
</style>

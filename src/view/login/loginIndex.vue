<template>
  <div class="login-wrapper">
    <h2>登录</h2>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="user_name">
        <el-input v-model="ruleForm.user_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api/response';
import { useRouter, type Router } from 'vue-router';
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { ElForm } from 'element-plus'

type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  user_name: '2235790610',
  password: '147852369'
})

const rules = reactive({
  user_name: [{ required: true, trigger: 'blur' }],
  password: [{ required: true, trigger: 'blur' }],
})

const router: Router = useRouter()

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const { data } = await login(ruleForm)
      if (data.status === 1) {
        ElMessage(data.success)
        router.replace('/')
      }
      console.log('error submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">
.login-wrapper {
  text-align: center;
  max-width: 400px;
  margin: 120px auto 0;
}
</style>

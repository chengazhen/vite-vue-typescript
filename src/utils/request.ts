import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios'

import { ElMessage } from 'element-plus'

// 声明接口数据返回类型
import type { response } from '@/typing'
const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  withCredentials: true,
  timeout: 50000
})

request.interceptors.request.use((config: AxiosRequestConfig) => {
  // config.headers = Object.assign(config.headers || {}, { token: 'token' })
  return config
})

request.interceptors.response.use(
  (response: AxiosResponse<response>) => {
    const { data } = response
    if (data instanceof Array || data.status === 1) {
      return response
    } else {
      ElMessage({
        showClose: true,
        message: data.message,
        type: 'error'
      })
      return Promise.reject(data.message)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default request

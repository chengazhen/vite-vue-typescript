import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios'

// 声明接口数据返回类型
type response = {
  message?: string
  code: string
  data?: any
}

const request: AxiosInstance = axios.create({
  url: import.meta.env.VITE_HOST,
  withCredentials: false,
  timeout: 5000
})

request.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = Object.assign(config.headers || {}, { token: 'token' })
  config.params = Object.assign(config.params, {
    key: 'e94ce65c8da94aa69947f2dc1d268596'
  })
  return config
})

request.interceptors.response.use(
  (response: AxiosResponse<response>) => {
    const { data } = response
    if (data.code === '200') {
      return response
    } else {
      return Promise.reject(data.message)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default request

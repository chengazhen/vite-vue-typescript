import type { AxiosPromise } from 'axios'
import request from '@/utils/request'

type response = {
  code: string
  data?: any
  message?: string
}

type params = {
  location: string
}

/**
 * @description:请求数据api
 * @param {*} AxiosPromise
 * @return {*}
 */
export const getData = (params: params): AxiosPromise<response> =>
  request({ url: 'https://devapi.qweather.com/v7/weather/now', params })

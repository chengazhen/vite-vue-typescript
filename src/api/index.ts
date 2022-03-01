import request from '@/utils/request'
import type { AxiosPromise } from 'axios'
// import type { cityType } from './types'

interface cityType {
  range: string
}

interface weatherType {
  location: string
}

export const getTop = <T>(params: cityType): AxiosPromise<T> =>
  request({
    url: 'https://geoapi.qweather.com/v2/city/top',
    params
  })

export const getWeather = <T>(params: weatherType): AxiosPromise<T> =>
  request({
    url: 'https://devapi.qweather.com/v7/weather/now',
    params
  })

import type { AxiosPromise } from 'axios'
import request from '@/utils/request'
import type { response } from '@/typing'

interface loginParams {
  user_name: string
  password: string
}

/**
 * @description: 登录接口
 * @param {loginParams} data
 * @return {*}
 */
export const login = <T>(data: loginParams): AxiosPromise<T & response> =>
  request({ url: '/admin/login', data, method: 'post' })

interface userListParams {
  limit: number
  offset: number
}

/**
 * @description: 获取用户列表
 * @param {loginParams} params
 * @return {*}
 */
export const userList = <T>(
  params: userListParams
): AxiosPromise<T & response> =>
  request({ url: '/v1/users/list', params, method: 'get' })


interface orderListParams {
  limit: number
  offset: number
}
/**
* @description: 获取用户列表
* @param {loginParams} params
* @return {*}
*/
export const getOrderList = <T>(
  params: orderListParams
): AxiosPromise<T & response> =>
  request({ url: '/bos/orders', params, method: 'get' })


export const getUserinfo = (): AxiosPromise<response> => request({ url: "/admin/info", method: "get" })

export const getAdminCount = (date: string): AxiosPromise<response> => request({ url: `/statis/admin/${date}/count`, method: "get" })
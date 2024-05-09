/*
 * @Author: Wanko
 * @Date: 2024-04-15 21:40:07
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-17 00:53:56
 * @Description:
 */
import axios from 'axios'

import { baseURL } from '@/config'

const service = axios.create({
  baseURL
})

service.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      const { config, data, headers } = res
      const { raw, error } = config
      if (raw) {
        // 返回原始数据, 加上headers
        return Object.assign({}, data, { headers })
      } else {
        const { code, data: result, message } = data

        if (!+code) {
          // 业务响应成功
          return result
        } else if (code === 9999) {
          // 其他类型的错误
        } else {
          if (error) {
            // 手动处理 错误
            return Promise.reject(data)
          } else {
            // 自动打印错误
            console.warn(message)
            return data
          }
        }
      }
    }
  },
  (error) => {
    console.warn(error)
    if (error.response) {
      const { message } = error.response.data
      return Promise.reject(message)
    } else {
      return Promise.reject(error.message)
    }
  }
)

function request(options = {}) {
  const { method = 'get', data } = options
  if (method.toLowerCase() === 'get') {
    options.params = data
  }
  return service(options)
}

;['get', 'post', 'put', 'delete', 'patch'].forEach((method) => {
  request[method] = (url, data, options) => {
    return service({
      url,
      method,
      data,
      ...options
    })
  }
})
export default request

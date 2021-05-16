/*
 * @Description: 封装请求方法
 * @Author: cpp
 * @Date: 2021-05-16 15:26:46
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 18:31:10
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\api\axios.js
 */
import axios from 'axios'
// 设置请求头和超时时间
const BAES_URL = 'http://127.0.0.1/'
const instance = axios.create({
  baseURL: BAES_URL,
  timeout: 1000,
  // withCredentials: true,
  // 自定义header注意 res.header要加上改字段
  // res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Env, TigOrigin')
  headers: {
    'Env': 'dev',
    'TigOrigin': 'TIG'
  }
})

const pendingRequest = new Map()

// 封装请求拦截器
instance.interceptors.request.use(
  config => {
    console.log('请求响应', config)
    removePendingRequest(config) // 检查是否存在重复请求，若存在则取消已发的请求
    addPendingRequest(config) // 把当前请求添加到pendingRequest对象中
    return config
  },
  err => {
    return Promise.error(err)
  }
)

// 封装响应拦截器
instance.interceptors.response.use(
  res => {
    console.log('响应成功', res)
    removePendingRequest(res.config)
    if (res.status === 200) {
      if(res.data.code === 401) {
        console.log('鉴权有问题')
      }
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  err => {
    removePendingRequest(err.config)
    if (axios.isCancel) {
      console.log('已取消的重复请求', err.message)
    }
    return Promise.reject(err)
  }
)

export default instance

function generateReqKey(config) {
  if (config && config.url && config.method) {
    const { method, url } = config
    return [method, url].join(
      '&'
    )
  }
}

function addPendingRequest(config) {
  const requestKey = generateReqKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel)
      }
    })
}

function removePendingRequest(config) {
  const requestKey = generateReqKey(config)
  if (pendingRequest.has(requestKey)) {
    const cancel = pendingRequest.get(requestKey)
    cancel(requestKey)
    pendingRequest.delete(requestKey)
  }
}
/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-16 15:34:17
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 17:47:00
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\api\api.js
 */
import API from './axios'

// http
export function httpGet({
  url,
  params,
  token
}) {
  return new Promise((resolve, reject) => {
    return API.get(url, {
      params,
      cancelToken: token
    }).then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// post
export function httpPost({
  url,
  data = {},
  params = {}
}) {
  return new Promise((resolve, reject) => {
    return API({
      url,
      method: 'POST',
      data,
      params
    }).then(res => {
      if (res && res.data) {
        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
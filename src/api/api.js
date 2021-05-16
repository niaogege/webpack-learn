/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-16 15:34:17
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 16:15:41
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\api\api.js
 */
import API from './axios'

// http
export function httpGet({
  url,
  params
}) {
  return new Promise((resolve, reject) => {
    return API.get(url, {
      params
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
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
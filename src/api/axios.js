/*
 * @Description: 封装请求方法
 * @Author: cpp
 * @Date: 2021-05-16 15:26:46
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 16:20:52
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\api\axios.js
 */
import axios from 'axios'
console.log('env', process)
// 设置请求头和超时时间
const instance = axios.create({
  baseURL: 'http://127.0.0.1/',
  timeout: 1000,
  // withCredentials: true,
  headers: {
    'Env': 'dev',
    'TigOrigin': 'TIG'
  }
})

export default instance
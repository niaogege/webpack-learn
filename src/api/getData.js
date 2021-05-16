/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-16 16:02:02
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 17:20:32
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\api\getData.js
 */

import {httpGet, httpPost} from './api'
export const getList = (params = {}) => httpGet({
  url: 'list',
  params
})
export const changeList = (data = {}, params = {}) => httpPost({
  url: 'changeList',
  data,
  params
})

export const getError = () => httpPost({
  url: 'error'
})


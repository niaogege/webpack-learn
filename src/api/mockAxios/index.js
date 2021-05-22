/*
 * @Description: 模拟axios
 * @Author: cpp
 * @Date: 2021-05-16 18:30:14
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 21:30:38
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\api\mockAxios\index.js
 */
export class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorsManage,
      response: new InterceptorsManage
    }
  }
  request(config) {
    return new Promise((resolve) => {
      const {url = '', method = 'get', data = {}} = config
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true)
      xhr.onload = function() {
        resolve(xhr.responseText)
      }
      xhr.send(data)
    })
  }
}
export function CreateAxiosFn() {
  let axios = new Axios()
  let req = axios.request.bind(axios)
  utils.extend(req, Axios.prototype, axios)
  utils.extend(req, axios)
  return req
}

const methodsArr = ['get', 'delete', 'head', 'post', 'options']
methodsArr.forEach(met => {
  Axios.prototype[met] = function() {
    if (['get', 'delete', 'head', 'options'].includes(met)) {
      return this.request({
        method: met,
        url: arguments[0],
        ...arguments[1] || {}
      })
    } else {
      return this.request({
        method: met,
        url: arguments[0],
        data: arguments[1],
        ...arguments[2] || {}
      })
    }
  }
})

const utils = {
  extend(a, b, context) {
    for(let key in b) {
      if (Object.hasOwnProperty.call(b, key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context)
        } else {
          a[key] = b[key]
        }
      }
      
    }
  }
}
// 构造拦截器

class InterceptorsManage {
  constructor() {
    this.handlers = []
  }
  use(fullfilled, rejected) {
    this.handlers.push({
      fullfilled,
      rejected
    })
  }
}
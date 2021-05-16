/*
 * @Description: 模拟axios
 * @Author: cpp
 * @Date: 2021-05-16 18:30:14
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 18:45:44
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\api\mockAxios\index.js
 */
export class Axios {
  constructor() {

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

const uilts = {
  extend(a, b, context) {
    
  }
}
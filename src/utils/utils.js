/*
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-14 09:35:44
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-15 09:29:52
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\utils\utils.js
 */
// @ts-check
/**
 * @param {any[]} arr
 */
export function flat(arr) {
  return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flat(cur) : cur), [])
}
// 手写new
/**
 * @param {object} con
 * @param {any[]} rest
 */
export function mockNew(con, ...rest) {
  var obj = Object.create(con)
  const res = obj.apply(this, rest)
  return res instanceof Object ? res : obj
}
// 手写apply
export function mockApply(con, rest) {
  var context = con || window
  context['fn'] = this
  var res = context['fn'](...rest)
  delete context['fn']
  return res
}
// 手写call
export function mockCall(con, ...rest) {
  var context = con || window
  context['fn'] = this
  var res = context['fn'](...rest)
  delete context['fn']
  return res
}
// bind
export function  mockBind(con, rest) {
  var self = this
  var fNop = function(){}
  var fBound = function (...rest2) {
    var arg = [...rest, ...rest2]
    self.apply(this instanceof self ? this: con,  arg)
  }
  fNop.prototype = this.prototype
  fBound.prototype = new fNop()
  return fBound
}
// 模拟实现鹏promise
export class MockPromise {
  constructor(exc) {
    this.data = undefined
    this.cbs = []
    const resolve = function (data) {
      this.data = data
      setTimeout(() => {
        this.cbs.forEach(cb => {
          cb(data)
        })
      })
    }
    exc(resolve)
  }
  then(fulfilled) {
    return new MockPromise((resolve) => {
      this.cbs.push(() => {
        const data = fulfilled(this.data)
        if(data instanceof MockPromise) {
          return data.then(resolve)
        } else {
          return resolve(data)
        }
      })
    })
  }
}

// all
MockPromise.myAll = function(arr) {
  return new MockPromise((resolve, reject) => {
    var res = []
    for(let [index, item] of arr.entries()) {
      return MockPromise.resolve(item).then(
        success => {
          res.push(success)
          if(index === arr.length - 1) {
            resolve(res)
          }
        },
        error => {
          reject(error)
        }
      )
    }
  })
}
// 防抖实现
export function debounce(fn, wait) {
  var timeFn
  return function(arg) {
    var self = this
    if(timeFn) {
      clearTimeout(timeFn)
    }
    timeFn = setTimeout(() => {
      fn.apply(self, arg)
    }, wait)
  }
}
// 节流
/**
 * @param {{ apply: (arg0: any, arg1: any) => void; }} fn
 * @param {number} wait
 */
export function throttle(fn, wait) {
  var pre = 0
  return function(arg) {
    var now = new Date().getTime()
    var self = this
    if (now - pre > wait) {
      fn.apply(self, arg)
      pre = now
    }
  }
}
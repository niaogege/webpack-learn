/*
 * @Author: cpp
 * @Date: 2021-02-28 17:07:12
 * @LastEditors: cpp
 * @LastEditTime: 2021-03-14 19:07:46
 * @FilePath: \webpack-learn\src\sort\sort.js
 */
import {defaultCompare, Compare, swap} from '../utils'
export const bubbleSort = (arr) => {
  const {length} = arr
  // let flag = false
  if (length < 2) {
    return arr
  }
  for(let i = 0; i < length; i ++) {
    // flag = false
    for(let j = 0; j < length - 1 - i; j ++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        // flag = true
      }
    }
    // if (!flag) break
  }
  return arr
}
export const createNonSortedArray = (size) => {
  const array = []
  for(let i = size; i > 0; i --) {
    array.push(i)
  }
  return array
}
// 选择排序 找到数据结构中的最小的那个并将放到首位，接着找第二个放到第二位ccc
export const selectionBubble = (arr) => {
  const {length} = arr
  let indexMin
  for(let i = 0; i < length - 1; i ++) {
    indexMin = i
    for (let j = i; j < length; j ++) {
      console.log('j', j, 'indexMin', indexMin)
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    if( i !== indexMin) {
      swap(arr, i, indexMin)
    }
  }
  return arr
}
// 插入排序 当前的往前面开始排序  存储sscs
export const insertionSort = (arr) => {
  const len = arr.length
  let temp
  for (let i = 1; i < len; i ++) {
    let j = i
    temp = arr[i]
    while( j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j --
    }
    arr[j] = temp
  }
  return arr
} 
// 归并排序 ????
export const mergeSort = (arr) => {
  if (arr.length > 1) {
    const len = arr.length
    const middle = Math.floor(len/2)
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle, length))
    arr = merge(left, right)
  }
  return arr 
}
const merge = (left, right) => {
  let i = 0
  let j = 0
  const res = []
  while(i < left.length && j < right.length) {
    res.push(
      left[i] < right[j] ? left[i ++] : right[j ++]
    )
  }
  return [...res, ...(i < left.length ? left.slice(i) : right.slice(j))]
}
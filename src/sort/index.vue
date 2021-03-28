<!--
 * @Author: cpp
 * @Date: 2021-02-27 18:47:01
 * @LastEditors: cpp
 * @LastEditTime: 2021-03-28 17:22:34
 * @FilePath: \webpack-learn\src\sort\index.vue
-->
<template>
  <div>
    排序算法
    <section>
      <h3>冒泡排序</h3>
      <div>
        bubbleArray: {{bubbleArray}}
      </div>
    </section>
    <section>
      <h3>选择排序</h3>
      <div>
        selectArray: {{selectArray}}
      </div>
    </section>
    <section>
      <h3>插入排序</h3>
      <div>
        insertArray: {{insertArray}}
      </div>
    </section>
    <section id='sortInsert' >
      <h3 >插入排序</h3>
      <div>
        insertArray: {{insertArray}}
      </div>
      <p id='test' > DOM 节点作为键名 </p>
    </section>
  </div>
</template>
<script>
import {
  createNonSortedArray,
  bubbleSort, 
  selectionBubble,
  insertionSort,
  mergeSort
} from './sort'
let weakMap = new WeakMap()
export default {
  data() {
    return {
      bubbleArray: [],
      selectArray: [],
      insertArray: [],
      mergeArray: [],
      elements: {
        text: null
      },
    }
  },
  mounted() {
    let array = createNonSortedArray(5)
    console.log('array', array)
    this.bubbleArray = bubbleSort(array)
    // this.selectArray = selectionBubble(array)
    this.insertArray = insertionSort(array)
    
    // this.elements = {
    //   text: document.getElementById('test')
    // }
    weakMap.set(
      document.getElementById('test'),
      'TestTest'
    )
    document.getElementById('test').addEventListener('click', () => {
      // this.elements.text.innerHTML = weakMap.get(this.elements.text)
      document.getElementById('test').innerHTML = '1111'
      this.cancel()
    }, false)
  },
  methods: {
    removeText() {
      document.getElementById('sortInsert').removeChild(document.getElementById('test'))
    },
    cancel() {
      this.removeText()
      console.log('cancel WeakSet', weakMap)
    }
  },
}
</script>

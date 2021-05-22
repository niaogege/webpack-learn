<!--
 * @Author: cpp
 * @Date: 2021-02-27 18:47:01
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-22 22:15:23
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\sort\index.vue
-->
<template>
  <div>
    排序算法stor 
    mapState {{name}} - {{path}}
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
    <section @click='changeName'>
      改变姓名 命名空间  - {{$store.state.name}}
    </section>
    <section @click='changeAction'> 
      action 模块的触发
    </section>
    <section>
      <h2>{{$store.getters.getterTitle}}</h2>
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
// import {createNamespacedHelpers} from 'vuex'
import { mapState } from '../../store/mockVuex/store.js'
// const {mapState, mapActions, mapGetters} = createNamespacedHelpers('AModule')
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
  computed: {
    ...mapState(['name', 'path']),
  },
  mounted() {
    let array = createNonSortedArray(5)
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
    console.log('Sort Mounted', this, this.$store, this.$store.getters.getterTitle)
  },
  methods: {
    // ...mapActions([
    //   'AllAction',
    //   'actionA'
    // ]),
    removeText() {
      document.getElementById('sortInsert').removeChild(document.getElementById('test'))
    },
    cancel() {
      this.removeText()
      console.log('cancel WeakSet', weakMap)
    },
    changeName() {
      this.$store.commit('CHANGE_NAME', 'changeName sort 模块内提交全局')
    },
    changeAction() {
      this.$store.dispatch('AllAction', {
        data: 'from Sort'
      })
    }
  },
}
</script>

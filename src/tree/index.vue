<!--
 * @Author: cpp
 * @Date: 2021-02-15 17:09:21
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-23 21:45:07
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\tree\index.vue
-->

<template>
  <div>
    <h3 @click='displayDialog'>
    tree 点击显示弹框 --{{title}}
    </h3>
    <section v-if="true">
      never give up
      <div>{{tree}}</div>
    </section>
    <div id="mount-point"></div>
  </div>
</template>
<script>
import BinarySearchTree from './main'
import {myMixin} from './myMixin.js'
// import Vue from 'vue'
// var Profile = Vue.extend({
//   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })
// // 创建 Profile 实例，并挂载到一个元素上。
// new Profile().$mount('#mount-point')
console.log('myMixin', myMixin)
export default {
  mixins: [myMixin],
  data() {
    return {
      // title: '寒假还剩5天',
      tree: {}
    }
  },
  methods: {
    displayDialog() {
      this.$showDialog({
        title: '测试弹窗',
        confirmText: '希望弹出窗口正确调用',
        cancelVisible: false,
      })
    }
  },
  mounted() {
    console.log('Parent Mounted')
    const tree = new BinarySearchTree()
    tree.insert(7)
    tree.insert(5)
    tree.insert(9)
    tree.insert(8)
    tree.insert(10)
    // tree.insert(13);
    // tree.insert(12);
    // tree.insert(14);
    // tree.insert(20);
    // tree.insert(18);
    // tree.insert(25);
    
    // tree.insert(6);
    window.tree = this.tree = tree
    // 中序
    const InOrderarr = []
    const printNode = (val) => {
      InOrderarr.push(val)
    }
    tree.inOrderTraverse(printNode)
    console.log('InOrderarr 中序遍历', InOrderarr)
    // 先序
    const preOrderarr = []
    const pushNode = (val) => {
      preOrderarr.push(val)
    }
    tree.preOrderTraverse(pushNode)
    console.log('preOrderarr 先序遍历', preOrderarr)
    // 后序
    const postOderarr = []
    const postNode = (val) => {
      postOderarr.push(val)
    }
    tree.postOrderTraverse(postNode)
    console.log('postOrder 后序遍历', postOderarr)
    console.log(`最小值${tree.min().key}, 最大值${tree.max().key}`)

    // 搜索特定的值
    const isHas = tree.search(35)
    console.log('搜索特定的值5 是否存在', isHas)
    console.log('tree', tree)
  }
}
</script>
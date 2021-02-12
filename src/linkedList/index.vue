<!--
 * @Author: cpp
 * @Date: 2021-02-12 15:27:07
 * @LastEditors: cpp
 * @LastEditTime: 2021-02-12 17:11:42
 * @FilePath: \vue_studyd:\learn\webpack-learn\src\linkedList\index.vue
-->
<template>
  <div>
    <h1>{{title}}</h1>
    <section v-for='(item, index) in practice' :key="item.id">
      <h3> {{index}}.{{item.name}}</h3>
      <div>
        <span>
          {{item.id}}: {{sortList}}
        </span>
      </div>
    </section>
  </div>
</template>
<script>
import {LinkedList, DoublyLinkedList, SortedLinkedList} from './main.js'

export default {
  data() {
    return {
      title: '链表基础知识',
      sortList: {}, // 排序
      practice: [
        {
          name: '排序链表',
          id: 'sortList'
        },
        {
          name: '反向链表',
          id: 'reverseList'
        },
        {
          name: '链表内是否存在环',
          id: 'circularList'
        }
      ]
    }
  },
  mounted() {
    console.log('this', this);
    // 排序链表
    const sortList = new SortedLinkedList()
    sortList.insert(15, 0)
    sortList.insert(20, 2)
    sortList.insert(10, 1)
    sortList.insert(33, 3)
    console.log('sortList', sortList);
    window.sortList = this.sortList = sortList
    // 两两交换
    const reverse = new LinkedList()
    reverse.push(1)
    reverse.push(2)
    reverse.push(3)
    reverse.push(4)
    window.reverse = reverse
    console.log('reverse', reverse);
  }
}
</script>
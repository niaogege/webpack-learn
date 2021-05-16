<!--
 * @Author: cpp
 * @Date: 2021-02-12 15:27:07
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-15 19:25:05
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\linkedList\index.vue
-->
<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- 改造后的{{allTitle}} -->
    <section v-for="(item, index) in practice" :key="item.id">
      <h3>{{ index + 1 }}.{{ item.name }}</h3>
      <div>
        <span v-if="item.id === 'sortList'"> {{ item.id }}: {{ sortList }} </span>
        <span v-if="item.id === 'reverseList'"> {{ item.id }}: {{ reverseList }} </span>
        <span v-if="item.id === 'circularList'"> {{ item.id }}: {{ circularList }} </span>
      </div>
    </section>
  </div>
</template>
<script>
import { LinkedList, DoublyLinkedList, SortedLinkedList } from './main'

export default {
  data() {
    return {
      title: '链表基础知识',
      list: [
        {
          name: 'cppp',
        },
        1,
      ],
      sortList: {}, // 排序
      reverseList: {}, // 反向
      circularList: {}, // 环
      practice: [
        {
          name: '排序链表',
          id: 'sortList',
        },
        {
          name: '反向链表',
          id: 'reverseList',
        },
        {
          name: '链表内是否存在环',
          id: 'circularList',
        },
      ],
      l1: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 4,
            next: undefined
          }
        }
      },
      l2: {
        val: 1,
        next: {
          val: 3,
          next: {
            val: 4,
            next: undefined
          }
        }
      },
      total: {
        val: 1,
        next: {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 3,
              next: {
                val: 4,
                next: {
                  val: 4,
                  next: undefined
                }
              }
            }
          }
        }
      }
    }
  },
  // computed: {
  //   allTitle() {
  //     return this.title + 'cpp'
  //   }
  // },
  methods: {
    test() {
      console.log('this', this)
    }, 
    mergeTwoList(l1,l2) {
      // 根据俩个列表里的单个节点val对应比较大小
      // 链表如何遍历
      if(l1 === null) return l2
      if(l2 === null) return l1
      if(l1.val < l2.val) {
        l1.next = this.mergeTwoList(l1.next, l2)
        return l1
      } else {
        l2.next = this.mergeTwoList(l1, l2.next)
        return l2
      }
    }
  },
  mounted() {
    console.log('this', this)
    // // 排序链表
    const sortList = new SortedLinkedList()
    sortList.insert(15, 0)
    sortList.insert(20, 12)
    sortList.insert(10, 1)
    sortList.insert(33, 3)
    sortList.insert(33, 3)
    console.log('sortList', sortList)
    window.sortList = this.sortList = sortList
    // // 两两交换
    // const reverse = new LinkedList()
    // reverse.push(3)
    // reverse.push(2)
    // reverse.push(0)
    // reverse.push(-4)
    // reverse.push(2)
    // // reverse.push(0)
    // // reverse.push(-4)
    // window.reverse = this.reverseList = this.circularList = reverse
    // console.log('reverse', reverse)
  },
}
</script>

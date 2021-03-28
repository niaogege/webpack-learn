<!--
 * @Author: cpp
 * @Date: 2021-02-13 19:04:16
 * @LastEditors: cpp
 * @LastEditTime: 2021-03-14 18:14:59
 * @FilePath: \webpack-learn\src\main\index.vue
-->
<template>
  <div>
    <h3>
    主要学习内容
    </h3>
    <section>
      <h4> 链表 linkedList </h4>
      <div>
        <p @click='linkToLink'>
        点击前往
        </p>
      </div>
    </section>
    <section>
      <h4> 树 Tree </h4>
      <div>
         <p @click='linkToTree'>
        点击前往
        </p>
      </div>
    </section>
        <section>
      <h4> 排序 sort </h4>
      <div>
         <p @click='linkToSort'>
        点击前往
        </p>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: '寒假还剩5天'
    }
  },
  methods: {
    linkToLink() {
      this.$router.push({
        path: 'linkedList'
      })
    },
    linkToTree() {
      this.$router.push({
        path: 'tree'
      })
    },
    linkToSort() {
      this.$router.push({
        path: 'sort'
      })
    }
  },
  mounted() {
    console.log('朱组件入口')
  }
}
</script>
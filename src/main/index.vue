<!--
 * @Author: cpp
 * @Date: 2021-02-13 19:04:16
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-23 20:08:36
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\main\index.vue
-->
<template>
  <div>
    <h3>
    主要学习内容{{title}}
    </h3>
    <section>
      <h4> 链表 linkedList </h4>
      <div>
        <p @click='linkToLink'>
        点击前往
        </p>
      </div>
      <h4> 树 Tree </h4>
      <div>
         <p @click='linkToTree'>
        点击前往
        </p>
      </div>
      <h4> 排序 sort </h4>
      <div>
         <p @click='linkToSort'>
        点击前往
        </p>
      </div>
       <h4> LRU keepAlive </h4>
      <div>
         <p @click='linkToKeepAlive'>
        点击前往 keep-alive
        </p>
      </div>
      <h4> Http </h4>
      <div>
         <p @click='linkToAxios'>
        点击前往 Axios
        </p>
      </div>
      <h4> Source </h4>
      <div>
         <p @click='linkToSource'>
        点击前往 Source
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
    },
    linkToKeepAlive() {
      this.$router.push({
        path: 'keepalive'
      })
    },
    linkToAxios() {
      this.$router.push({
        path: 'http'
      })
    },
    linkToSource() {
      this.$router.push({
        path: 'source'
      })
    }
  },
  // mounted() {
  //   console.log('朱组件入口')
  // }
}
</script>
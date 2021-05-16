<!--
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-05 12:14:59
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 16:19:17
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\http\index.vue
-->
<template>
  <div>
    <div>
      age component age {{source}}
    </div>
    <section>
      post-{{post}}
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import {getList, changeList} from '../api/getData'

export default {
  data() {
    return {
      source: {},
      post: {}
    }
  },
  mounted() {
    // this.getHttp()
    // this.getPost()
    this.getAll()
  },
  methods: {
    getUserData() {
      return getList({count: 1})
    },
    getUserPostData() {
      return changeList({
        data: {
          name: 'cpp'
        },
        params: {
          page: 2
        }
      })
    },
    getAll() {
      axios.all([
        this.getUserData(),
        this.getUserPostData()
      ]).then(axios.spread((res1, res2) => {
        if (res1 && res1.data) {
          this.source = res1.data
        }
        if (res2) {
          this.post = res2
        }
      }))
    }
  }
}
</script>
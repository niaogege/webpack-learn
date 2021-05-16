<!--
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-05 12:14:59
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-16 17:50:41
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\http\index.vue
-->
<template>
  <div>
    <section>
      <h3>Axios 取消重复请求示例</h3>
      <button @click="sendRequest">发起请求</button>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import {getList, changeList, getError} from '../api/getData'

export default {
  data() {
    return {
      source: [],
      post: {}
    }
  },
  mounted() {
    // this.getHttp()
    // this.getPost()
    // this.getAll()
    // this.getCancel()
    // this.getCancel()
    // source.cancel('主动取消请求去去去')
    // setTimeout(() => {
    //   console.log('source', source)
    // }, 50)
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
    getErrorData() {
      return getError()
    },
    getAll() {
      axios.all([
        this.getUserData(),
        this.getUserPostData(),
        // this.getErrorData()
      ]).then(axios.spread((res1, res2) => {
        if (res1 && res1.data) {
          this.source = res1.data
        }
        if (res2) {
          this.post = res2
        }
      }))
    },
    async sendRequest() {
      const res = await getList({count: 1})
      this.source.push(res)
    }
  }
}
</script>
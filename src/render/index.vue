<!--
 * @Author: your name
 * @Date: 2020-11-17 17:26:26
 * @LastEditTime: 2021-05-02 21:43:15
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\render\index.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-11-15 19:47:42
 * @LastEditTime: 2020-11-17 17:16:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \plugin-cppd:\learn\webpack-learn\src\components\name.vue
-->
<template>
  <div>
    Test 组件-{{name}}
    <!-- <section>
      <span id='text'>{{title}}</span>
      <button @click='changeData'>
        ChangeData
      </button>
    </section>
    <section>
      <input type="text" v-model="modelValue">
      <input type="text"
        v-bind:value="modelVal"
        v-on:input='modelVal = $event.target.value'
      >
    </section> -->
    <section>
      <!-- <ChildComp v-model="message" /> -->
      <ChildComp  v-bind:value="message" v-on:input='(e) => message = e' />
    </section>
  </div>
</template>
<script>
import ChildComp from './child'
export default {
  components: {
    ChildComp
  },
  name: 'Test',
  props: {
    name: {
      type: String,
      default: '这是 test 组件'
    }
  }, 
  data() {
    return {
      title: 'cpp',
      modelValue: '测试Model语法糖',
      modelVal: 'modelVal copy',
      message: 'Test test'
    }
  },
  watch: {
    message(newVal, oldVal) {
      console.log('watch', newVal, oldVal)
    }
  },
  methods: {
    changeData() {
      this.title = 'come on'
      const textContent = document.getElementById('text').textContent
      console.log('before', this.title, textContent)
      this.$nextTick(() => {
        const textContent = document.getElementById('text').textContent
        console.log('nextTick', this.title, textContent)
      })
    }
  },
  mounted() {
    // console.log('333');
  }
}
</script>

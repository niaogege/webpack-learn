<!--
 * @Author: your name
 * @Date: 2020-11-15 19:47:42
 * @LastEditTime: 2021-05-02 21:34:02
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\render\child.vue
-->
<template>
  <div>
    <input 
      type="text"
      v-bind:value='value' 
      v-on:input='onMessage'
    />
  </div>
</template>
<script>
export default {
  name: 'nameComponent',
  // props: ['name'],
  // model: {
  //   prop: 'message',
  //   event: 'input'
  // },
  props: {
    value: {
      type: String,
      default: 'child 子组件'
    }
  }, 
  methods: {
    onMessage(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

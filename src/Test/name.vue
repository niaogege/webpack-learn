<!--
 * @Author: your name
 * @Date: 2020-11-15 19:47:42
 * @LastEditTime: 2021-02-12 15:36:50
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \vue_studyd:\learn\webpack-learn\src\Test\name.vue
-->
<template>
  <div>
    name 组件-{{name}}
  </div>
</template>
<script>
export default {
  name: 'nameComponent',
  // props: ['name'],
  props: {
    name: {
      type: String,
      default: '这是 name 组件'
    }
  }
}
</script>

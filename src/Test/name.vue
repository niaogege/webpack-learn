<!--
 * @Author: your name
 * @Date: 2020-11-15 19:47:42
 * @LastEditTime: 2021-12-30 18:11:26
 * @LastEditors: Chendapeng
 * @Description: In User Settings Edit
 * @FilePath: \plugin-cppd:\learn\webpack-learn\src\Test\name.vue
-->
<template>
  <div>
    name 组件-{{name}}
  </div>
</template>
<script>
export default {
  props: ['name'],
  mounted() {
    console.log('111');
  }
}
</script>

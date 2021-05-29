<!--
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-23 20:04:44
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-23 20:21:08
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\source\extend\index.vue
-->
<template>
  <div>
    <div id="mount-point">111ccc</div>
  </div>
</template>
<script>
import Vue from 'vue'
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')
export default {
  mounted() {
    console.log('this Source', this)
  }
}
</script>
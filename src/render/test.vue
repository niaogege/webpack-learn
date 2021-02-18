<!--
 * @Author: your name
 * @Date: 2020-11-17 17:26:26
 * @LastEditTime: 2021-02-14 15:14:34
 * @LastEditors: cpp
 * @Description: In User Settings Edit
 * @FilePath: \vue_studyd:\learn\webpack-learn\src\render\test.vue
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
    <section>
      <span id='text'>{{title}}</span>
      <button @click='changeData'>
        ChangeData
      </button>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Test',
  props: {
    name: {
      type: String,
      default: '这是 test 组件'
    }
  }, 
  data() {
    return {
      title: 'cpp'
    }
  },
  methods: {
    changeData() {
      this.title = 'come on';
      const textContent = document.getElementById('text').textContent
      console.log('before', this.title, textContent);
      this.$nextTick(() => {
        const textContent = document.getElementById('text').textContent
        console.log('nextTick', this.title, textContent);
      })
    }
  },
  mounted() {
    // console.log('333');
  }
}
</script>

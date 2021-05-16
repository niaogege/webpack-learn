<!--
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-05 12:13:38
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-05 17:48:28
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\keepAlive\index.vue
-->
<template>
  <div>
    <H2>keep Alive component</H2>
    <section>
      <div @click="currentView = 'Name'">
        this is Name component
      </div>
      <div @click="currentView = 'Age'">
        this is Age component
      </div>
      <div @click="currentView = 'Sex'">
        this is Sex component
      </div>
    </section>
    <keep-alive :include="['Age', 'Name']" :max='1'>
      <component
        :is='currentView'
      >
      </component>
    </keep-alive>

    <!-- <keep-alive>
      <Name v-if="currentView === 'Name'"/>
      <Age v-if="currentView === 'Age'"/>
    </keep-alive> -->
  </div>
</template>
<script>
import Name from './component/name'
import Age from './component/age'
import Sex from './component/sex'
export default {
  components: {
    Name,
    Age,
    Sex
  },
  data() {
    return {
      currentView: 'Age'
    }
  },
  mounted() {
    console.log('Keep Alive', this)
  }
}
</script>
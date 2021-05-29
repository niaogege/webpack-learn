<!--
 * @Description: 
 * @Author: cpp
 * @Date: 2021-05-23 20:30:39
 * @LastEditors: cpp
 * @LastEditTime: 2021-05-23 20:47:02
 * @FilePath: \vite-project-based:\learn\webpack-learn\src\components\dialog\main.vue
-->
<template>
  <div v-if="show" ref="modal" class="ek-modal_wrap">
    <div class="ek-modal-content">
      <div class="modal-title-wrap">
        <div class="modal-title">{{ title }}</div>
        <slot name="description"></slot>
      </div>
      <div class="modal-button">
        <a v-if="confirmVisible" class="contral-btn confirm-btn" href="javascript:;" @click="confirm">{{
          confirmText
        }}</a>
        <a v-if="cancleVisible" class="contral-btn cancle-btn" href="javascript:;" @click="cancle">{{ cancleText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      title: '', // 标题
      confirmText: '确定', // 确认文字
      confirmVisible: true, // 是否展示确认按钮
      onConfirm: () => { // 确认执行函数
        this.$emit('confirm')
      }, 
      cancleText: '取消', // 取消文字
      cancleVisible: true, // 是否展示取消按钮
      onCancle: () => { // 取消执行函数
        this.$emit('cancle')
      } 
    }
  },
  methods: {
    confirm() {
      this.onConfirm()
      this.close()
    },
    cancle() {
      this.onCancle()
      this.close()
    },
    close() {
      this.show= false
      if (this.$refs.modal) {
        this.$refs.modal.remove() // 关闭时候直接移除当前元素
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .ek-modal_wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    font-size: 28px;
    background: rgba(0, 0, 0, 0.7);
    .ek-modal-content {
      position: fixed;
      top: 50%;
      left: 50%;
      min-width: 7.2rem;
      overflow-x: hidden;
      overflow-y: hidden;
      text-align: center;
      background-color: white;
      border-top-left-radius: 0.266667rem;
      border-top-right-radius: 0.266667rem;
      border-bottom-right-radius: 0.266667rem;
      border-bottom-left-radius: 0.266667rem;
      transform: translate(-50%, -50%);
      .modal-title-wrap {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: center;
        min-height: 55px;
        padding: 0 20px;
        color: #333;
      }
      .modal-title {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: center;
        min-height: 100px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-weight: 600px;
        line-height: 50px;
        color: #333;
      }
      .modal-button {
        display: flex;
        line-height: 1;
        color: #333;
        border-top-color: #e7e7e7;
        border-top-style: solid;
        border-top-width: 1px;
        & > a {
          color: #333;
        }
        .contral-btn {
          flex-basis: 0%;
          flex-grow: 1;
          flex-shrink: 1;
          font-weight: 600px;
          line-height: 3;
          text-align: center;
          &.cancle-btn {
            border-left-color: #e7e7e7;
            border-left-style: solid;
            border-left-width: 1px;
          }
        }
      }
    }
  }
  </style>
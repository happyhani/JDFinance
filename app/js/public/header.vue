<template lang="html">
  <div :class="$style.header">
    <span :class="$style.left">
      <!-- 如果不是spa页面可以使用a标签，在vue中使用router-link触发路由 -->
      <em>注册</em>&nbsp;|&nbsp;<em>登录</em>

    </span>
    <!-- btn组件 插槽 -->
    <btn :class="$style.btnDownLoad">APP下载</btn>
  </div>
</template>

<script>
import btn from '../core/btn.vue'
export default {
  components: {
    btn,
  },
}
</script>

<style lang="scss" module>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0; /* 这里的目的是 width是100%  */
  height: 100px;
  line-height: 100px;
  color: #666;
  font-size: 32px;
  background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
  background-size: auto 50%;
  .left {
    height: 30px;
    margin: 17px 0 0 18px;
    font-size: 28px;
    line-height: 30px;
  }
  .btnDownLoad {
    float: right;
    min-width: 120px;
    height: 56px;
    line-height: 56px;
    margin: 28px 24px 0 0;
    padding: 0;
    font-size: 24px;
    border-width: 0;
    border-radius: 4px;
  }
}
</style>

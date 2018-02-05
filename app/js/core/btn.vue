<template lang="html">
    <div :class="[btnClass]">
        <slot/>
    </div>
</template>

<script>
export default {
    // 实现继承：当默认样式满足不了时，可以通过自定义类名去覆盖他的样式
    // 通过 插槽 实现html文本
    // 属性传递：
    props: {
      type: String,
      default: ""
    },
    data() {
      return {
        btnClass: 'btn' // 这么写可以后期不再关心模板
      }
    }
}
</script>

<style lang="scss">
@import '../../css/element.scss'
.btn {
  @include btn;
}
</style>

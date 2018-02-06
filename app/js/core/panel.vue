<template lang="html">
    <section :class="[panelClass, cname]">
        <h4>-{{ title }}-</h4>
        <!-- 插槽，是用的时候使用标签嵌套进去，就可以实现内部的内容 -->
         <slot/>
    </section>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            panelClass: "panel",
        }
    },
}
</script>

<style lang="scss">
@import '../../css/element.scss';
.panel {
  @include panel;
}

</style>

<template lang="html">
    <Panel :class="$style.panel">
        <ul :class="$style.content">
            <li>a</li>
        </ul>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  // @include panel;
  &>h4 {
    display: none;
  }
  .content {
    @include list; // 就是纵向的，不需要写参数
  }
}
</style>

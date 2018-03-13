<template lang="html">
    <Panel title="新人优惠券" :class="$style.panel">
      <router-link :to="{ name: 'money' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270" alt="">
      </router-link>
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
  &>h4 {
    display: none;
  }
  img {
    width: 100%;
  }
}
</style>

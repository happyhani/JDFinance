<template lang="html">
    <Panel title="理财专享" :class="$style.panel">
      <router-link :to="{ name: 'money' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240" alt="">
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
    padding-bottom: 40px;
  }
}
</style>

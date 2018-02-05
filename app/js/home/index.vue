<template lang="html">
    <div>
      <Heador/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
export default {
  components: {
    Heador,
  },
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    color: red;
    font-size: 80px;
  }
</style>

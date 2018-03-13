<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Coupon/>
        <Choose/>
        <Zhuanxiang/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./mslider.vue"
import Coupon from "./coupon.vue"
import Choose from "./choose.vue"
import Zhuanxiang from "./zhuanxiang.vue"


export default {
    components: {
        Heador,
        Slider,
        Footor,
        Navbar,
        Coupon,
        Choose,
        Zhuanxiang,
    },
}
</script>

<style lang="scss" module>
</style>

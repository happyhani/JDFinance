<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"></Slider>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                href: "money",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
            },
            {
                href: "money",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t10405/120/2592801005/36022/d8f57852/59f97c14Nfb960073.png?width=750&height=400",
            },
            {
                href: "money",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400",
            }],
        }
    },
}
</script>
<style lang="scss">
.swiper-pagination-bullets {
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    background: #00f;
  }
}
</style>
<style lang="scss" module>
@import '../../css/element.scss';
.slider {
  margin-top: 120px;
  img {
    width: 100%;
  }
}
</style>

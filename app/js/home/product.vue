<template lang="html">
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.arrow">更多尖货 ></div>
            <Slider :options="options" :items="items" cname="product-slider"></Slider>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import Slider from "../core/slider.vue"
export default {
    components: {
        Panel,
        Slider,
    },
    data() {
        return {
            items: [{
                href: "home", // 修改为真正的路由
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14761/57/2177261730/49189/717a1c58/5a7846fcN9dd1fe09.jpg?width=335&height=421",
            },
            {
                href: "home", // 修改为真正的路由
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14860/350/2164532413/39513/41b260d4/5a72e5c2N95212bfa.jpg?width=335&height=421",
            },
            {
                href: "home", // 修改为真正的路由
                src: "//img12.360buyimg.com/jrpmobile/jfs/t19189/78/412279407/50765/35866492/5a72e5d4Nc3d96002.jpg?width=335&height=421",
            },
            {
                href: "home", // 修改为真正的路由
                src: "//img12.360buyimg.com/jrpmobile/jfs/t17506/112/423288292/45039/ba638e28/5a72e986N9a577e50.jpg?width=335&height=421",
            },
            {
                href: "home", // 修改为真正的路由
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14761/57/2177261730/49189/717a1c58/5a7846fcN9dd1fe09.jpg?width=335&height=421",
            },
            {
                href: "home", // 修改为真正的路由
                src: "//img12.360buyimg.com/jrpmobile/jfs/t17506/112/423288292/45039/ba638e28/5a72e986N9a577e50.jpg?width=335&height=421",
            }],
            options: {
                slidesPerView: 2.3, // 一屏有几张图片
                spaceBetween: 30,
                freeMode: true,
            },
        }
    },
}
</script>

<style lang="scss">
// 第三方模块的样式 我们控制不了。所以不用module
.product-slider {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px;
    .swiper-slide {
      a{
        display: inline-block;
        width: 100%;
      }
      img{
        width: 100%;
        display: block;
        height: 314px;
        border: 1px solid #fafafa;
      }
    }
  }
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  .content {
    padding-bottom: 40px;
    position: relative;
    .arrow {
      position: absolute;
      top: -70px;
      right: 20px;
      font-size: 28px;
      color: #999;
    }
  }
}
</style>

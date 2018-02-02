<template lang="html">
    <section :class="[cname]">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.href">
              <!-- 触发路由的时候使用这个 -->
                <router-link :to="{ name: item.href }">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination">指示器，这样可配置，判断一下</div>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        options: {
            type: Object,
            default() {
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    notNextTick: false,
                }
            },
        },
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss">
// loader是找不到路径的，需要加上~
@import '~swiper/dist/css/swiper.css'

</style>

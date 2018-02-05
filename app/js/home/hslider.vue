<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"></Slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <!-- 1/将图片地址作为key 2/点击了图片往哪跳转item.href -->
                <router-link :to="{ name: item.href }">
                  <img :src="item.img" :alt="item.title"/>
                  <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
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
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16462/292/2008164629/23310/8e11dce1/5a745bd4N750c0c17.jpg?width=750&height=320",
            },
            {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16939/74/391551939/49655/aad0554e/5a745bb9Nb7d85a33.jpg?width=750&height=320",
            },
            {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t17047/307/393154862/30711/ff7ec448/5a745bf9Nd86a2418.jpg?width=750&height=320",
            }],
            enters: [{
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                title: "优惠券",
            },
            {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                title: "领红包",
            },
            {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                title: "抢钢镚",
            },
            {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132",
                title: "领京豆",
            },
            {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                title: "白条提额",
            }],

        }
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.slider {
  margin-top: 120px;
  img {
    width: 100%;
  }
}
.list {
  @include list(row);
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;  //两端对齐
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      margin-top: 12px;
      font-size: 26px;
      color: #666;
    }
  }
}
</style>

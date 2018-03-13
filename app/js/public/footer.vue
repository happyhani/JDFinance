<template lang="html">
    <Panel title="公司信息" :class="$style.panel">
        <ul :class="$style.content">
            <li>
              <router-link :to="{ name: '' }">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: '' }">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                <p>客户端</p>
              </router-link>
              <router-link :to="{ name: '' }">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
                <p>触屏版</p>
              </router-link>
              <router-link :to="{ name: '' }">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
                <p>电脑版</p>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: '' }">
                <p>Copyright &copy; 2004-2018 京东JD.com 版权所有</p>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: '' }">
                <p>投资有风险，购买需谨慎</p>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: '' }">
                <p>京东金融平台服务协议</p>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: '' }">
                <p>京东金融隐私政策</p>
              </router-link>
            </li>
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
  margin-bottom: 100px;
  &>h4 {
    display: none;
  }
  .content {
    @include list; // 就是纵向的，不需要写参数
    background: #f5f5f5;
    li {
      text-align: center;
      &:first-child {
        img {
          width: 100%;
        }
      }
    }
    li:nth-child(2) {
      @include list(row);
      padding-top: 40px;
      padding-bottom: 20px;
      box-sizing: border-box;
      a {
        width: 33.3333333%;
        height: 142px;
        img {
          width: 90px;
          height: 90px;
        }
        p {
          margin-top: 12px;
          font-size: 26px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    li:nth-child(n+3) {
      p {
        box-sizing: border-box;
        padding: 24px 32px;
        border-top: 1px solid #ddd;
        font-size: 24px;
        line-height: 1.6;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>

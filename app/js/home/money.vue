<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
              <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }}<span>{{ item.type }}</span></dt>
                <dd>{{ item.rate  }}</dd>
                <dd>{{ item.details }}</dd>
             </dl>
             <!-- 自己的： -->
             <!-- <div :class="$style.item" v-for="item in items" :key="item.title">
              <router-link :to="{ name: 'home' }">
                   <h4>{{ item.title }}<span>{{ item.type }}</span></h4>
                   <p :class="$style.red">{{ item.rate }}</p>
                   <p :class="$style.grey">{{ item.details }}</p>
              </router-link>
            </div> -->
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                title: "定期理财",
                type: "理财首选",
                rate: "5.60%",
                details: "历史年化回报率",
            },
            {
                title: "小白理财",
                type: "理财首选",
                rate: "4.22%",
                details: "7日年化收益率",
            },
            {
                title: "月月盈",
                type: "养老保障",
                rate: "5%",
                details: "7日年化收益率",
            },
            {
                title: "小白基金",
                type: "天天赚钱",
                rate: "4.27%",
                details: "7日年化收益率",
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel {
  .content {
    @include list(row);
    justify-content: space-around;
    box-sizing: border-box;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 0px;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      // margin-top: -208px;
      position: relative;
      top: -208px;
    }
    .item {
      position: relative;
      width: 50%;
      padding: 34px 16px;
      box-sizing: border-box;
      &:after {
        content: "";
        width: 1px;
        height: 136px;
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -68px;
        border-right: 1px solid #eee;
      }
      &:nth-child(2n) {
        &:after {
          display: none;
        }
      }
      dt {
        height: 42px;
        line-height: 42px;
        font-weight: 700;
        font-size: 30px;
        color: #333;
        span {
          margin-left: 2px;
          padding: 0 8px;
          border: 1px solid #ff5155;
          font-size: 22px;
          color: #ff5155;
          vertical-align: 1px;
        }
      }
      dd {
        &:nth-child(2) {
          height: 58px;
          line-height: 58px;
          font-weight: 700;
          font-size: 44px;
          color: #FF5155;
        }
        &:nth-child(3) {
          height: 34px;
          line-height: 34px;
          font-size: 24px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>

<template>
<div class="cinema">
  <div class="cinema-search">上海</div>
  <div class="cinema-wrap">
    <ul class="cinema-ul">
      <li class="cinema-li" v-for="(item , index) in cinemalist" :key="index">
        <div class="li-1">{{item.title}}</div>
        <div class="li-2">{{item.location}}</div>
        <div class="li-3">
          <p v-for="(cap , index) in item.labels" :key="index+1000">{{cap}}</p>
        </div>
        <div class="li-4"></div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
//引入接口
import {
  getCinema
} from "../../../utils/api";

//引入 滑动模块
import BetterScroll from 'better-scroll';

export default {
  data() {
    return {
      cinemalist: []
    }
  },
  methods: {
    async getCinemadata() {
      const res = await getCinema();
      console.log(res);
      //把返回的结果赋值分别保存下来
      this.cinemalist = res.result;
      //等待上面数据加载完成
      await this.$nextTick(() => {
        let bs = new BetterScroll(".cinema-wrap", {
          crollY: true
        })
      })
    }
  },

  mounted() {
    //调用 获取接口的数据
    this.getCinemadata()
  },

}
</script>

<style lang="scss" scoped>
.cinema {
  position: absolute;
  top: 94px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;

  .cinema-search {
    width: 100%;
    height: 44px;
    border: 1px solid black;
    position: absolute;
    z-index: 20;
    background: white;
  }

  .cinema-wrap {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 48px;
    // background: green;

    .cinema-ul {
      .cinema-li {
        padding: 13px 15px 13px 0;
        margin-left: 15px;
        background-color: #fff;
        position: relative;
        overflow: hidden;

        .li-1 {
          font-size: 16px;
        }

        .li-2 {
          font-size: 13px;
        }

        .li-3 {
          line-height: 17px;
          margin-top: 4px;
          margin-bottom: 4px;
          overflow: hidden;
          font-size: 9.6px;
          display: flex;

          p {
            padding: 2px;
            border: 1px solid black;
          }
        }
      }
    }
  }
}
</style>

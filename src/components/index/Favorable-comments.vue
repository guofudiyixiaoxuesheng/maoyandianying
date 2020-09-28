<template>
<div class="fc">
  <div class="top-ratae">
    <p title="title">
      最受好评电影
    </p>

    <div class="ul-wrap">
      <div class="top-ratae-list">

        <div class="top-ratae-li" v-for="item in moviesList" :key='item.id' @click="detail(item.id)">
          <img :src="item.img" alt="">
          <p>观众评分</p>
          <span>{{item.title}}</span>
        </div>

      </div>
    </div>
  </div>
  <!-- 中间部分 -->
  <main class="main-div">
    <div class="main-li">
      <div class="main-li-main" v-for=" (item , index ) in twomovieList" :key="index">
        <img :src="item.img | format" alt="">
        <div class="details">
          <div class="details-1">
            <p>{{item.nm}}</p>
            <span></span>
          </div>
          <div class="details-2">观众评分</div>
          <div class="details-3">主演</div>
          <div class="details-4">今天多少家影院播放xxx场</div>
          <button>购票</button>
        </div>
      </div>
    </div>
    <p v-if="twomovieList.length >= total">人家是有底线的</p>
  </main>

</div>
</template>

<script>
//引入滚动模块
import BetterScroll from 'better-scroll';

export default {
  props: ['moviesList', 'twomovieList', "total"], //接收 列表的 数据
  data() {
    return {}
  },
  watch: {
    async moviesList() {
      await this.$nextTick(() => {
        let bs = new BetterScroll('.ul-wrap', {
          scrollX: true,
          scrollY: false,
          click: true,
        })
      })
    },
  },
  methods: {
    detail(id) {
      this.$router.push("/detail/" + id)
    }

  },
  //转义部分
  filters: {
    format(value) {
      return value.replace('\/w\.h', '')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

.fc {
  width: 100%;
  // height: 200px;
  margin-bottom: 48px;
  ;
  background-color: #f5f5f5;

  .top-ratae {
    padding: 12px 0 12px 15px;
    background-color: #fff;
    margin-bottom: 10px;

    p {
      margin: 0;
      font-size: 14px;
      color: #333;
      margin-bottom: 12px;
    }

    .ul-wrap {
      width: 100%;
      height: 140px;
      overflow: hidden;

      .top-ratae-list {
        display: inline-flex;

        .top-ratae-li {
          display: inline-block;
          width: 85px;
          overflow: hidden;
          margin-right: 10px;
          position: relative;
          flex-shrink: 0;

          img {
            display: block;
            width: 85px;
            height: 114px;
            background: #000;
          }

          p {
            width: 85px;
            height: 35px;
            position: absolute;
            top: 80px;
          }

          span {
            width: 85px;
            margin: 0;
            font-size: 13px;
            color: #222;
            margin-bottom: 3px;
          }
        }
      }
    }

  }

  //main div 部分
  .main-div {
    background-color: #f5f5f5;
    width: 100%;
    margin-top: 5px;

    .main-li {
      padding-left: 15px;
      background-color: #fff;
    }

    .main-li-main {
      width: 100%;
      height: 114px;
      // background: yellowgreen;
      display: flex;
      align-items: center;

      >img {
        display: block;
        height: 90px;
        width: 64px;
      }

      .details {
        margin-left: 5px;
        width: 270px;
        height: 86.2px;
        position: relative;

        .details-1 {
          max-height: 24px;
          margin-bottom: 7px;
          line-height: 24px;
          overflow: hidden;

          p {
            font-size: 17px;
            color: #333;
            font-weight: 700;
            padding-right: 5px;
            flex-shrink: 1;
          }
        }

        .details-2 {
          font-size: 13px;
          color: #666;
          margin-top: 6px;
          line-height: 15px;
        }

        .details-3 {
          font-size: 13px;
          color: #666;
          margin-top: 6px;
          line-height: 15px;
        }

        .details-4 {
          margin-top: 6px;
          line-height: 15px;
          font-size: 13px;
          color: #666;
        }

        button {
          position: absolute;
          right: 0;
          transform: translateY(-50%);
          top: 50%;
          width: 47px;
          height: 27px;
          line-height: 28px;
          text-align: center;
          box-sizing: border-box;
          background-color: #f03d37;
          color: #fff;
          border-radius: 4px;
          white-space: nowrap;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

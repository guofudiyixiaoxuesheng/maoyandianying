<template>
<section class="people">
  <div class="people-top">
    <span class="people-top-span">演职人员</span>
    <div class="people-top-all">
      <a>全部 > </a>
    </div>
  </div>
  <div class="people-warp">
    <ul class="people-ul">
      <li class="people-li" v-for="(item , index) in actorList" :key="index">
        <img :src="item.pic" alt="">
        <span>{{item.name}}</span>
        <p>{{item.role}}</p>
      </li>
    </ul>
  </div>

</section>
</template>

<script>
// import BScroll from '@better-scroll/core';
//引入滑动模块
import BetterScroll from 'better-scroll';

export default {
  props: ['actorList'],
  watch: {
    async actorList() {
      await this.$nextTick(() => {
        let bs = new BetterScroll(".people-warp", {
          scrollX: true,
          scrollY: false,
          click: true,
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.people {
  width: 100%;
  margin: 18px 0 15px;
  // height: 300px;

  .people-top {
    display: flex;
    justify-content: space-between;

    .people-top-span {
      font-size: 15px;
    }

    .people-top-all {
      font-size: 12px;

      a {
        color: white;
      }
    }
  }

  .people-warp {
    margin-top: 10px;
    width: 100%;
    height: 150px;
    overflow: hidden;

    .people-ul {
      display: inline-flex;

      .people-li {
        display: inline-block;
        width: 80px;
        height: 150px;
        margin-right: 6px;

        img {
          width: 80px;
          height: 112px;
        }

        span {
          display: block;
          font-size: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        p {
          font-size: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          text-align: center;
        }

        // position: relative;
        // flex-shrink: 0;

      }
    }
  }
}
</style>

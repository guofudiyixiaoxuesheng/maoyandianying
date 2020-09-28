<template>
<div class="star-warp">
  <div class="star-left">
    <!--无色-->
    <div class="img1">
      <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-not-graded.png" alt="" v-for=" index in 5" :key="index+10">
    </div>

    <!-- 半色 -->
    <div class="img2">
      <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-half-graded.png" alt="" v-for="index in half" :key="index+100">
    </div>
    <!-- 全色 -->
    <div class="img3">
      <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-full-graded.png" alt="" v-for="index in all" :key="index+1000">
    </div>
  </div>
  <div class="star-right">{{score}}分</div>
</div>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rescore: 0, //评分
    }
  },
  computed: {
    half: function () { //半色的评分
      return Math.round(this.score / 2)
    },
    all: function () {
      return parseInt(this.score / 2)
    }
  },
}
</script>

<style lang="scss" scoped>
.star-warp {
  display: flex;

  .star-left {
    position: relative;

    .img1 {
      position: absolute;
      display: flex;
      align-items: center;
      top: 3px;
    }

    .img2 {
      position: absolute;
      display: flex;
      align-items: center;
      top: 3px;
    }

    .img3 {
      position: absolute;
      display: flex;
      align-items: center;
      top: 3px;
    }

    img {
      width: 9px;
      margin-right: 3px;
    }
  }

  .star-right {
    position: absolute;
    left: 120px;
    color: #FAAF00;
  }
}
</style>

<template>
<header class="my-header">
  <h2>猫眼电影</h2>
  <span class="iconfont icon-xuanxiang" v-on:click="add"></span>
  <ul id="ullist" v-show="show">
    <li v-for="(item, index) in ullist" :key="index">
      {{item}}
    </li>
  </ul>
</header>
</template>

<script>
export default {
  data() {
    return {
      ullist: ['首页', '榜单', '热点', '商城'],
      show: false
    };
  },
  methods: {
    add() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

.my-header {
  width: 100%;
  height: 50px;
  background: $them-color;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;

  h2 {
    font-weight: 400;
  }

  .icon-xuanxiang {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    font-size: 20px
  }

  ul {
    position: absolute;
    top: 46px;
    right: 12px;
    width: 110px;
    background-color: #fff;
    z-index: 5;

    li {
      width: 100px;
      height: 44.8px;
      color: black;
      text-align: center;
      line-height: 44.8px;
      font-size: 15px;
    }
  }
}
</style>

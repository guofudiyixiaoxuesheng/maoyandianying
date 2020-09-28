<template>
<div id="app">
  <my-header></my-header>
  <!--  <div class="wrap">
    <div>
      <my-tabs></my-tabs>
      <favora-blecomments :moviesList="moviesList" :twomovieList="twomovieList"></favora-blecomments>
    </div>
  </div>-->
  <router-view></router-view>
  <my-foot></my-foot>
</div>
</template>

<script>
//头部
import MyHeader from "./components/index/Header";

//引入底部文件
import MyFoot from "./components/index/MyFoot";

//引入获取数据方法

export default {

  components: {
    MyHeader,
    MyFoot,
  },
}
</script>

<style lang="scss" scoped>
// #app {

//   //  padding-top:50px;
//   .wrap {
//     position: absolute;
//     top: 50px;
//     bottom: 50px;
//     left: 0;
//     right: 0;
//     overflow: hidden;
//   }
// }
</style>

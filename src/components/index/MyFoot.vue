<template>
<footer>
  <!--    <div class="my-foot-li" v-for="(item , index) in footnm" :key="index" @click="add(index)" 
    v-bind:class="{active:colorn==index}">
      <span class="iconfont" :class="item.cn"></span>
      <span class="icnname">{{item.name}}</span>
    </div>
 -->
  <router-link v-for="(item , index) in footnm" :key="index" :to="item.url" class="my-foot-li" active-class="active" tag="li">
    <span class="iconfont" :class="item.cn"></span>
    <span class="icnname">{{item.name}}</span>
  </router-link>
</footer>
</template>

<script>
export default {

  data() {
    return {
      footnm: [{
          name: "电影/影院",
          cn: "icon-dianying",
          url: "/hot"
        }, {
          name: "视频",
          cn: "icon-shipin",
          url: "/shipin"
        },
        {
          name: "小视频",
          cn: "icon-shipin1",
          url: "/xiaoshipin"
        }, {
          name: "演出",
          cn: "icon-piaoquan",
          url: "/yanchu"
        }, {
          name: "我的",
          cn: "icon-wode",
          url: "/wode"
        }
      ],
      colorn: 0
    }
  },
  methods: {
    add(i) {
      this.colorn = i;
      console.log(i)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

footer {
  height: 48px;
  width: 100%;
  background: white;
  position: fixed;
  bottom: 0;
  display: flex;

  .my-foot-li {
    width: 75px;
    height: 48px;

    // background: chocolate;
    .iconfont {
      font-size: 25px;
      text-align: center;
      display: block;
    }

    .icnname {
      display: block;
      font-size: 12px;
      text-align: center;
    }

  }
}

.active {
  color: red !important;
}
</style>

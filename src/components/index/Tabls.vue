<template>
<nav>
  <div class="left">
    <p @click="tocity()">{{city}} *</p>
    <img src="" alt="">
  </div>
  <ul class="content">
    <li v-for="(item , index) in arr" :key="index" @click="add(index,item.url)" :class="{active:show==index}">{{item.title}}</li>
  </ul>
  <div class="right">
    <span class="iconfont icon-fangdajing"></span>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      // arr: ['热映', '影院', '待映', '经典电影'],
      arr: [{
          title: "热映",
          url: "/hot"
        },
        {
          title: "影院",
          url: "/cinema"
        },
        {
          title: "待映",
          url: "/reflected"
        },
        {
          title: "经典电影",
          url: "/classic"
        },
      ],
      show: 0
    }
  },
  methods: {
    add(i, url) {
      this.show = i;
      this.$router.push(url)
    },
    tocity() {
      this.$router.push("/cites")
    },
  },
  computed: {
    city() {
      return this.$store.state.name
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

nav {
  display: flex;
  position: fixed;
  top: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  // background: chartreuse;

  .left {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 15px;
    height: 44px;
    width: 50px;

    p {
      line-height: 44px;
      width: 100%;
      text-align: center;
    }
  }

  .content {
    height: 44px;

    li {
      float: left;
      font-size: 15px;
      height: 44px;
      line-height: 44px;
      margin: 0 5px;
    }
  }

  .right {
    position: absolute;
    right: 0;
    height: 44px;
    width: 44px;

    span {
      width: 100%;
      height: 100%;
      line-height: 44px;
      color: red;
      font-size: 18px;
    }
  }

  .active {
    font-size: 20px !important;
    font-weight: block !important;
  }
}
</style>

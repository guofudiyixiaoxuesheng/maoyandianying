<template>
<div class="detail-wrap">
  <div class="left">
    <img :src="starPic" alt="" v-for="item in num" :key="item">
  </div>
  <div class="content">
    <div class="bg">
      <div class="yellow" :style="{width: item / evaluate * 100 +'%' }"></div>
    </div>
  </div>
  <div class="right">
    <span>
      {{item / evaluate * 100  | format}}
    </span>
  </div>
</div>
</template>

<script>
export default {
  props: ['item', 'evaluate', 'starPic', 'num'],
  data() {
    return {}
  },
  methods: {},
  filters: {
    format(value) {
      return value.toFixed(2) + "%";
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-wrap {
  width: 187px;
  height: 17px;
  display: flex;

  .left {
    width: 35px;
    height: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      width: 5px;
      margin: 0 1px;
    }
  }

  .content {
    width: 100px;
    height: 5px;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    .bg {
      width: 100px;
      height: 5px;
      margin: 0 5px;
      background: #ccc;
      position: relative;

      .yellow {
        position: absolute;
        top: 0;
        left: 0;
        background: orange;
        height: 100%;
      }
    }
  }

  .right {
    width: 34px;
    height: 5px;
    font-size: 5px;
  }
}
</style>

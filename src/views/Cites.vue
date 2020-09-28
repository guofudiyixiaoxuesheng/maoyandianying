<template>
<div class="city-warp">
  <!-- 热门城市 -->
  <div class="hotTop">
    热门城市
  </div>
  <div class="hotCities" v-if="list.length">
    <span v-for="(item, index) in list[0].cities" :key="index" @click="handleClick(item)">
      {{ item.name }}
    </span>
  </div>
  <van-index-bar :index-list="indexList">
    <!--    <van-index-anchor index="A" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />

    <van-index-anchor index="B" />
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />
-->
    <div v-for="(item ,index) in list" :key="index">
      <template v-if="item.prefix !== 'hotCities'">
        <van-index-anchor :index="item.prefix | toup" />
        <van-cell :title="it.name" v-for="(it , ix) in item.cities" :key="ix+100" @click="handleClick(it)" />
      </template>
    </div>
  </van-index-bar>
</div>
</template>

<script>
//引入 城市列表数据接口
import {
  getCitiesList
} from "../utils/api";
export default {
  data() {
    return {
      // indexList: ["A", "B"], //组件的 右侧字母索引
      list: [] //数据
    }
  },
  mounted() {
    this.getCities();
  },
  computed: {
    indexList() {
      let arr = [];
      for (let i = 1; i < this.list.length; i++) {
        arr.push(this.list[i].prefix.toUpperCase());
      }
      return arr;
    }
  },
  methods: {
    async getCities() {
      const res = await getCitiesList();
      //把数据赋值给数组
      this.list = res;
      console.log(res);
    },
    handleClick(it) {
      console.log(it)
      this.$store.commit("changecity", {
        name: it.name,
        damaiId: it.damaiId,
        cityId: it.cityId
      })
      this.$router.go(-1);
    }
  },
  filters: {
    toup(value) {
      return value.toUpperCase();
    }
  },

}
</script>

<style lang="scss" scoped>
.city-warp {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 20;
}

.hotTop {
  z-index: 1;
  box-sizing: border-box;
  padding: 0 0.42667rem;
  color: #323233;
  font-weight: 500;
  font-size: 0.37333rem;
  line-height: 0.85333rem;
  background-color: transparent;
}

.hotCities {
  background: #fff;
  overflow: hidden;
}

.hotCities span {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}
</style>

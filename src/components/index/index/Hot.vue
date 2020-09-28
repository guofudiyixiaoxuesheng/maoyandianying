<template>
<div class="wrap">
  <div>
    <favora-blecomments :moviesList="moviesList" :twomovieList="twomovieList" :total="total"></favora-blecomments>
  </div>
</div>
</template>

<script>
//数据列表
import FavoraBlecomments from "../Favorable-comments";

// 引入better-scroll 滚动模块
import BetterScroll from 'better-scroll';

//引入获取数据方法
let bs;
import {
  getTopRated,
  getIndexList,
  pullUpLoadList,
} from "../../../utils/api";

export default {
  data() {
    return {
      moviesList: [], //数据\
      twomovieList: [],
      twomovieIds: [], //所有数据的ID 第二列表的
      index: 12, //表示下一次截取id的索引（位置）
      total: 0 //数据条数的总长度
    }
  },
  components: {
    FavoraBlecomments,
  },
  mounted() {
    this.getTopRatedList();
    this.getnextIndexList();
  },
  methods: {
    //用于获取下拉数据的方法
    async pullUpLoad() {
      //创建一个ids  从this.index截取 id
      const ids = this.twomovieIds.slice(this.index, this.index + 10); //每次获取的ID
      const str = ids.join(); //下拉是需要获取的 id
      const res = await pullUpLoadList({ //api 中的方法
        ids: str,
      });
      this.index += 10; //等数据获取结束 把元数据+10
      // console.log(11)
      this.twomovieList = this.twomovieList.concat(res.result);
      // console.log(res.result);
      // console.log(this.twomovieList.length);
      // console.log(this.total);
      // console.log(this.twomovieList.length < this.total);
    },
    async getTopRatedList() {
      const res = await getTopRated();
      this.moviesList = res.result.result;
    },
    async getnextIndexList() {
      const res = await getIndexList();
      //获取 本次数据的ID
      this.twomovieIds = res.result.movieIds;
      this.twomovieList = res.result.movieList;
      this.total = res.result.total;
      await this.$nextTick(() => {
        bs = new BetterScroll('.wrap', {
          crollY: true,
          click: true,
          //允许上拉加载
          pullUpLoad: true
        })

        bs.on('pullingUp', async () => { //下拉执行函数

          //在拉动页面之前做个判断  当前总长度是否等于 数据的总长度
          if (this.twomovieList.length < this.total) {
            // console.log(this.twomovieIds);
            await this.pullUpLoad();
            //上面执行完毕 再重新执行下一次
            bs.finishPullUp();
            bs.refresh(); //刷新页面
          }
        })

      })
    },
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  top: 94px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>

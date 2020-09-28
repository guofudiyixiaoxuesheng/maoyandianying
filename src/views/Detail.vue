<template>
<div class="detail-score">
  <main class="hei">
    <header class="title">
      猫眼电影 > {{movieInfo.nm}}
    </header>

    <section class="info">
      <img :src="movieInfo.img" alt="" class="poster">
      <article>
        <p class="info-first">{{movieInfo.nm}}</p>
        <p>{{movieInfo.enm}}</p>
        <p>
          <span v-for="(item , index) in movieInfo.tags" :key="index">{{item}}{{index-1>0?" ":" / "}}</span>
        </p>
        <p class="star">
          <span v-for="(item , index) in movieInfo.star" :key="index">{{item}}{{index-1>0?" ":" / "}}</span>
        </p>
        <p class="showtime">
          {{movieInfo.showTime}}
        </p>
        <div class="twobtn">
          <button>想看</button>
          <button>看过</button>
        </div>
      </article>
    </section>
    <!--中间部分 -->
    <section class="praies">
      <div class="top">
        <span>{{praise.watched}}人看过</span>
        <span>{{praise.wish}}人想看</span>
      </div>
      <div class="buttom">
        <div class="praises-left">
          <div class="praises-left-top">{{praise.score}}</div>
          <div class="praises-left-buttom">{{praise.evaluate}}评价过</div>
        </div>
        <div>
          <detail-score v-for="(item , index) in praise.mark" :key="index" :item="item" :evaluate='praise.evaluate' :starPic="praise.starPic" :num="5-index"></detail-score>
        </div>
      </div>
    </section>

    <!--第三部分 -->
    <section class="intro">
      <div class="intro-top">
        <span class="intro-top-span">简介</span>
        <div class="intro-top-div">
          <span @click="pshow">{{show ? "展开" : "收起" }}</span>
          <span v-show="show">∨</span>
          <span v-show="!show">∧</span>
        </div>
      </div>
      <p class="intro-p" :class="{activefont:show}">{{movieInfo.content}}</p>
    </section>

    <!-- 第四部分-->
    <my-sdblock :actorList="movieInfo.actorList"></my-sdblock>
  </main>
  <main class="bai">
    <div class="phrase">
      <h3>短评</h3>
      <div class="phrase-li" v-for="(item , index) in discuss" :key="index">
        <img :src="imgurl" alt="">
        <div class="phrase-main">
          <div class="phrase-main-top">
            <div class="phrase-main-top-left">
              <p>{{item.name}}</p>
              <star-warp :score="item.score"></star-warp>
            </div>
            <div class="phrase-main-top-right">
            </div>
          </div>
          <div class="phrase-main-content"> {{item.content}}</div>
          <div class="phrase-main-buttom">
            <p>{{item.time}}</p>
            <button>{{item.commentsNum}}回复</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import DetailScore from "../components/index/detail/Score.vue";
//详情页滑块组件
import MySdblock from "../components/index/detail/Block.vue";

//头像
import imgurl from "../assets/people.jpg";

//星星评分组件
import StarWarp from "../components/index/detail/stat.vue";

//1 引入数据接口
import {
  getMovieInfo
} from "../utils/api";
export default {
  components: {
    DetailScore,
    MySdblock,
    StarWarp
  },
  data() {
    return {
      movieInfo: {}, //影片信息
      discuss: [], //评论信息
      praise: {}, //评分信息

      //简介的问题内容
      show: true,

      //头像
      imgurl: imgurl

    }
  },
  //2 调用数据接口
  mounted() {
    this.getMovieuse();
  },
  methods: {
    async getMovieuse() {
      const res = await getMovieInfo({
        id: this.$route.params.id
      });
      this.movieInfo = res.movieInfo;
      this.discuss = res.discuss;
      this.praise = res.praise;
      console.log(res);
    },

    //内容展示
    pshow() {
      this.show = !this.show;
      console.log(this.show)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/style/var.scss";
@import "../assets/style/reset.scss";

.detail-score {
  color: #FFFFFF;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  // bottom: 0;因为内容变大 写死了
  margin: auto;
  background-color: #385266;
  z-index: 20;

  .hei {
    padding: 21px 16px;

    header {
      margin-bottom: 15px;
      color: #ccc;
      font-size: 14px;
    }

    .info {
      width: 100%;
      height: 138px;
      display: flex;

      .poster {
        width: 100px;
        height: 138px;
        margin-right: 10px;

      }

      article {
        font-size: 14px;
        width: 243px;

        .info-first {
          font-size: 20px;
        }

        .star {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .twobtn {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;

          :first-child {
            display: flex;
            justify-content: center;
            align-items: center;
            background: hsla(0, 0%, 100%, .35);
            box-shadow: 0 0.02rem 0.08rem 0 rgba(0, 0, 0, .1);
            border-radius: .08rem;
            font-size: 14px;
            width: 110px;
            height: 30px;
            color: #fff;
          }

          :last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            background: hsla(0, 0%, 100%, .35);
            box-shadow: 0 0.02rem 0.08rem 0 rgba(0, 0, 0, .1);
            border-radius: .08rem;
            font-size: 14px;
            width: 110px;
            height: 30px;
            color: #fff;
          }
        }
      }
    }

    .praies {
      width: 100%;
      height: 176px;
      margin-top: 15px;
      padding: 10px 12px;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, .2);
      box-shadow: 0 0 0.06rem 0 hsla(0, 0%, 100%, .03);
      font-size: 14px;
      color: #fff;

      .top {
        display: flex;
        justify-content: flex-end;

        span {
          margin: 0 10px;

        }

      }

      .buttom {
        display: flex;
        padding: 20px 0;
        align-items: center;
        justify-content: center;
      }

      .praises-left {
        width: 65px;
        height: 54.4px;
        margin-right: 20px;

        .praises-left-top {
          font-size: 34px;
          color: #FFB400;
        }

        .praises-left-buttom {
          font-size: 5px;
        }
      }
    }

    .intro {
      padding-top: 16px;

      .intro-top {
        display: flex;
        justify-content: space-between;

        .intro-top-span {
          font-size: 15px;
        }

        .intro-top-div {
          font-size: 12px;
        }
      }

      .intro-p {
        margin: 7px 0;
        font-size: 15px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        line-height: 27px;
      }

      .activefont {
        -webkit-line-clamp: 3;
      }
    }
  }

  .bai {
    width: 100%;
    padding: 21px 0;

    .phrase {
      background-color: #fff;
      border-top-left-radius: .2rem;
      border-top-right-radius: .2rem;
      overflow: hidden;
      margin-top: -.24rem;
      position: relative;

      h3 {
        padding: 13px 16px 14px;
        font-size: 15px;
        color: #000;
      }

      .phrase-li {
        padding: 0 15px 15px;
        display: flex;

        img {
          display: inline-block;
          width: 35px;
          height: 35px;
          background: grey;
        }

        .phrase-main {
          margin-left: 11px;
          color: #000;

          //评论上部分
          .phrase-main-top {
            display: flex;
            align-items: center;

            .phrase-main-top-left {
              font-size: 12px
            }
          }

          .phrase-main-content {
            font-size: 15px;
            line-height: 25px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 7;
            text-overflow: ellipsis;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
            margin-top: 15px;
          }

          .phrase-main-buttom {
            margin-top: 10px;
            display: flex;

            p {
              font-size: 12px;
            }

            button {
              font-size: 12px;
              display: inline-block;
              background: #eef1f6;
              border-radius: 3px;
              text-align: center;
              color: #5a7cab;
              margin-left: 5px;
              border: none;
            }
          }
        }

      }
    }

  }

}
</style>

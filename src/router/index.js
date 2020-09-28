//引入 vue 跟 vueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

// 去除重复点击时的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//使用
Vue.use(VueRouter)

//定义路由表

const routes = [
  {
    //重定向
    path:"/",
    redirect:"/hot"
  },
  {
    path:"/hot",
    component: () => import("../views/Index1.vue"),
    meta:{title:"猫眼首页"},
    children:[
      {
        path:"/hot",
        component:()=> import("../components/index/index/Hot.vue"),
        meta:{title:"猫眼推荐"},
      },
      {
        path:"/cinema",
        component:()=> import("../components/index/index/Cinema.vue"),
        meta:{title:"猫眼影院"},
      },
      {
        path:"/reflected",
        component:()=> import("../components/index/index/Reflected.vue"),
        meta:{title:"猫眼待映"},
      },
      {
        path:"/classic",
        component:()=> import("../components/index/index/Classic.vue"),
        meta:{title:"猫眼经典电影"},
      }
    ]
  }
  ,{
    path:"/shipin",
    component: () => import("../views/Shipin.vue"),
    meta:{title:"猫眼视频"},
  },
  {
    path:"/xiaoshipin",
    component: () => import("../views/Xiaoshipin.vue"),
    meta:{title:"猫眼小视频"},
  },
  {
    path:"/yanchu",
    component: () => import("../views/Yanchu.vue"),
    meta:{title:"猫眼演出"},
  },
  {
    path:"/wode",
    component: () => import("../views/Wode.vue"),
    meta:{title:"猫眼——我的"},
  },
  {
    path:'/detail/:id',
    component: () => import("../views/Detail.vue"),
    meta:{title:"猫眼详情页"},
  },
  {
    path:"/cites",
    component: () => import("../views/Cites.vue"),
    meta:{title:"猫眼电影_请选择城市"}
  },
  {
    path:"*",
    component: () => import("../views/NotFinde.vue"),
    meta:{title:"猫眼电影"},
  },
];

//实例化 路由表
const router =  new VueRouter({
  routes
});


  router.beforeEach((to, from, next) => {

    if(to.meta.title){
      document.title = to.meta.title;
      next();
    }
    document.title = to.meta.title;
    next();
})
export default router;
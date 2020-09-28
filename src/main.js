import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//引入 vant ui
import Vant from 'vant';



//关闭开发环境的提示信息
Vue.config.productionTip = false;

//引入resect文件
import "./assets/style/reset.scss";

//引入 vant css
import 'vant/lib/index.css';
Vue.use(Vant);

//引入 flexible
import "amfe-flexible";

//引入矢量图
import "./assets/font/iconfont.css"

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

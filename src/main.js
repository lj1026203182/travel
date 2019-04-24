// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick
import fastClick from 'fastclick'
// 引用css重置
import './assets/styles/reset.css'
// 引入1像素边框解决方案的css
import './assets/styles/border.css'
import { NavBar, Toast, Icon } from 'vant'
// 引入iconfont
import './assets/styles/iconfont.css'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 使用fastClick
fastClick.attach(document.body)
Vue.use(NavBar)
  .use(Toast)
  .use(Icon)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'

// 一级
import Home from '../components/home/Home.vue'

// 城市路由
import City from '../components/city/City.vue'

// 主页动态路由
import Detail from '../components/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 滚动行为,每次进入新的路由都会在顶部(0,0)的位置出现
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

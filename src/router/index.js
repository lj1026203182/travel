import Vue from 'vue'
import Router from 'vue-router'

// 一级
import Home from '../components/home/Home.vue'

// 城市路由
import City from '../components/city/City.vue'

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
    }
  ]
})

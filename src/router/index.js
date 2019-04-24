import Vue from 'vue'
import Router from 'vue-router'

// 一级
import Home from '../components/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

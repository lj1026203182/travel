<template>
  <div>
    <!-- 脑壳部分 -->
    <Homeheader></Homeheader>
    <!-- 轮播图 -->
    <Swiper :lists="swiperList"></Swiper>
    <!-- icons -->
    <Icons :icons="iconList"></Icons>
    <!-- 推荐部分 -->
    <Recommend :lists="recommendList"></Recommend>
    <!-- 周末去哪儿部分 -->
    <Weekend :list="weekendList"></Weekend>
  </div>
</template>

<script>
import Homeheader from './subcomponents/Header';
import Swiper from './subcomponents/Swiper';
import Icons from './subcomponents/Icons';
import Recommend from './subcomponents/Recommend';
import Weekend from './subcomponents/Weekend';
import axios from 'axios';
export default {
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {  //发送axios请求,父组件把请求来的值传给子组件,而不是子组件分别请求,使得性能提高
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(res => {
        // console.log(res.data)
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
          // console.log(this.iconList)
        }
      }).catch(err => {
        alert('失败')
      })
    }
  },
  components: {
    Homeheader,
    Swiper,
    Icons,
    Recommend,
    Weekend
  }
}
</script>

<style scoped>
</style>

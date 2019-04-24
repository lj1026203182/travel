<template>
  <div>
    <!-- 脑壳部分 -->
    <Homeheader></Homeheader>
    <!-- 轮播图 -->
    <Swiper></Swiper>
    <!-- icons -->
    <Icons></Icons>
    <!-- 推荐部分 -->
    <Recommend></Recommend>
    <!-- 周末去哪儿部分 -->
    <Weekend></Weekend>
  </div>
</template>

<script>
import Homeheader from './subcomponents/Header'
import Swiper from './subcomponents/Swiper';
import Icons from './subcomponents/Icons';
import Recommend from './subcomponents/Recommend';
import Weekend from './subcomponents/Weekend';
export default {
  data () {
    return {

    }
  },
  methods: {

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

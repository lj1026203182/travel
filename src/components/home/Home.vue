<template>
  <div>
    <!-- 脑壳部分 -->
    <Homeheader></Homeheader>
    <!-- 轮播图 -->
    <Swiper></Swiper>
    <!-- icons -->
    <Icons></Icons>
  </div>
</template>

<script>
import Homeheader from './subcomponents/Header'
import Swiper from './subcomponents/Swiper';
import Icons from './subcomponents/Icons';
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
    Icons
  }
}
</script>

<style scoped>
</style>

<template>
  <div>
    <!-- 脑壳部分 -->
    <Homeheader></Homeheader>
    <!-- 轮播图 -->
    <Swiper></Swiper>
  </div>
</template>

<script>
import Homeheader from './subcomponents/Header'
import Swiper from './subcomponents/Swiper';
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    Homeheader,
    Swiper
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in lists" :key="item.id">
        <img :src="item.imgUrl" class="swipe-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,//让轮播循环
        // autoplay: true
      }
    }
  },
  props: {
    lists: Array
  },
  methods: {

  },
  computed: {
    showSwiper () {
      //进入页面以第一张图展示
      return this.lists.length
    }
  },
}
</script>

<style lang="stylus" scoped>
.swiper >>>.swiper-pagination-bullet-active {
  background: #fff;
}

.swiper {
  width: 100%;
  height: 0;
  padding-bottom: 27.5%;
  overflow: hidden;

  .swipe-img {
    width: 100%;
  }
}
</style>

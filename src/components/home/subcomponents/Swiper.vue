<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in swiperList" :key="item.id">
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
        loop: true  //让轮播循环
      },
      swiperList: [{
        id: 1,
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/ad0e87bbf175a2d3999ada53eacf2e55.jpg_750x200_30f6dbce.jpg'
      }, {
        id: 2,
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/d34604519146db28dbf45c5df191e290.jpg_750x200_5974a3a5.jpg'
      }, {
        id: 3,
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/335e28ba33773fadb8042a95286aefe5.jpg_750x200_099b8c93.jpg'
      }]
    }
  },
  methods: {

  },
  components: {

  }
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

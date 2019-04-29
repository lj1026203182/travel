<template>
  <div class="container" @click="handeGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,//让轮播循环
        observer: true,
        observeParents: true
      },
    }
  },
  props: {
    // imgs: {
    //   type: Array,
    //   default () {
    //     return []
    //   }
    // },
    gallaryImgs: Array
  },
  methods: {
    handeGallaryClick () {
      this.$emit('close')
    }
  },
  components: {

  },
}
</script>

<style lang="stylus" scoped>
.container>>>.swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  z-index: 99;

  .wrapper {
    width: 100%;
    height: 0;
    // overflow: hidden;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      position: absolute;
      right: 0;
      left: 0;
      bottom: -2.5rem;
    }
  }
}
</style>

<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/1810/36/36ed80c6e147d019a3.img.png_600x330_e27d197e.png"
        @click.stop="handleImg"
      >
      <div class="banner-info">
        <div class="banner-title">重庆两江夜游</div>
        <div class="banner-number">2</div>
      </div>
    </div>
    <gallary :imgs="imgs" v-show="flag" @close="handeGallaryClick"></gallary>
  </div>
</template>

<script>
import Gallary from '../../../common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1411/61/d06c5e611e23919dc22eb0c1511dc6f2.water.jpg_350x240_1c573254.jpg',
        'http://img1.qunarzz.com/sight/p0/1501/f0/f0f513f30a8bb891.water.jpg_350x240_4a450482.jpg'],
      flag: false
    }
  },
  methods: {
    handleImg () {
      this.flag = !this.flag
    },
    handeGallaryClick () {
      this.flag = !this.flag
    }
  },
  components: {
    Gallary
  }
}
</script>

<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  color: #fff;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    line-height: 0.32rem;
    display: flex;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      padding-left: 0.1rem;
    }

    .banner-number {
      padding: 0 0.4rem;
      line-height: 0.32rem;
      border-radius: 0.4rem;
      background-color: rgba(0, 0, 0, 0.7);
      font-size: 0.28rem;
    }
  }
}
</style>

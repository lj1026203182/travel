<template>
  <div class="icons">
    <!-- 类似的轮播图效果 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in pages" :key="index">
        <div class="icon" v-for="(item, index1) in pages[index]" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc">
            <p>{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        autoplay: false  //自动轮播取消
      }
    }
  },
  props: {
    icons: Array
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
// 引入 多余的字将显示...隐藏效果
@import '../../../assets/styles/mixins.styl';

.icons {
  margin-top: 0.1rem;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;

  // background-color: #f00;
  .icon {
    width: 25%;
    float: left;
    // background-color: #0f0;
    padding-bottom: 25%;
    position: relative;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      padding: 0.1rem;
    }

    .icon-img-content {
      height: 100%;
      display: block;
      margin: 0 auto;
    }

    p {
      line-height: 0.44rem;
      text-align: center;
      color: #212121;
      font-size: 0.28rem;
      ellipsis();
    }
  }
}
</style>


<template>
  <div>
    <div class="detail-abs" @click="goToHome" v-show="flag">
      <van-icon name="arrow-left" size="0.3rem" class="icon"/>
    </div>
    <div class="detail-fixed" v-show="!flag" :style="opacityStyle">
      <van-nav-bar
        title="景点详情"
        left-text="返回"
        left-arrow
        class="detail-fixed-back"
        @click-left="onClickLeft"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      flag: true,
      opacityStyle: {   //样式的绑定是个对象
        opacity: 0
      }
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    onClickLeft () {
      this.$router.push('/')
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 40) {
        let opacity = top / 90
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.flag = false
      } else {
        this.flag = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  //由于是对window的监控  需要取消
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="stylus" scoped>
.detail-abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.7rem;
  background-color: rgba(255, 255, 225, 0.4);
  border-radius: 50%;
  text-align: center;
}

.detail-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #fff;

  .detail-fixed-back {
    opacity: 0.9;
  }
}
</style>

<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchEnd="handleTouchEnd"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>

<script>

export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null //节流,性能优化
    }
  },
  updated () {
    this.startY = this.$refs["A"][0].offsetTop
  },
  computed: {
    letters () {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // console.log(this.touchStatus)
          // const startY = this.$refs["A"][0].offsetTop  //性能优化
          // console.log(startY)
          //先定出A的距离头部的距离,再定出手指按压字母距离顶部的距离,两者相减除以字母的高度17.6,取整便是字母的索引
          const currentY = e.touches[0].clientY - 65
          // console.log(currentY)
          const Y = (currentY - this.startY) / 17.6
          // console.log(Y)
          const index = Math.floor(Y)
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)


      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  components: {

  }
}
</script>
<style lang="stylus" scoped>
.list {
  // background-color: #f0f;
  width: 0.4rem;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    list-style: none;
    text-align: center;
    line-height: 0.36rem;
    color: #26a2ff;
  }
}
</style>


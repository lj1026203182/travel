<template>
  <div class="city" ref="wrapper">
    <div>
      <div class="area">
        <!-- 当前城市 -->
        <div class="area-title">您的位置</div>
        <div class="area-location">
          <div class="btn-wrapper">
            <div class="btn">北京</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="hot-city">
        <div class="hot-titl">热门城市</div>
        <div class="area-location">
          <div class="btn-wrapper" v-for="(item, index) in hotcities" :key="item.id">
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 选择部分 -->
      <div v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="chose">{{key}}</div>
        <div class="tiem-list">
          <div class="item" v-for="(list, index) in item" :key="item.id">{{list.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    // console.log(this.scroll)
  },
  props: {
    hotcities: Array,
    cities: Object,
    letter: String
  },
  data () {
    return {

    }
  },
  watch: {
    letter () {
      // console.log(this.letter)
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }

    }
  },
  methods: {

  },
}
</script>

<style lang="stylus" scoped>
.city {
  overflow: hidden;
  position: absolute;
  top: 1.3rem;
  left: 0;
  right: 0;
  bottom: 0;
  // height: 100%;
  // background-color: #f00;
}

.area, .hot-city, .chose {
  line-height: 0.5rem;
  font-size: 0.24rem;
  // border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ccc;
  text-indent: 1em;
  color: #666;
  background-color: #eee;
}

.area-location {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
  background-color: #fff;

  .btn-wrapper {
    width: 33.33%;
    float: left;

    .btn {
      margin: 0 0 0.08rem 0.15rem;
      line-height: 0.4rem;
      text-align: center;
      border: 1px solid #26a2ff;
      text-indent: 0;
      padding: 0.07rem;
      font-size: 0.25rem;
      font-weight: 500;
      border-radius: 0.05rem;
      color: #26a2ff;
    }
  }
}

.item {
  line-height: 0.66rem;
  text-indent: 1em;
  font-weight: 600;
  font-size: 0.26rem;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
</style>

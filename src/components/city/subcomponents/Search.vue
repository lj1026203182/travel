<template>
  <div>
    <div class="input">
      <input type="text" placeholder="输入城市名或拼音" v-model="keyword">
    </div>

    <div class="search-content" ref="scroll" v-show="keyword">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="item.id"
          class="border-bottom search-item"
          @click="handleClickCity(item.name)"
        >{{item.name}}</li>
        <li class="border-bottom search-item" v-if="!this.list.length">没得这个东西</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: '',
  data () {
    return {
      keyword: '',
      list: [],
      tiemr: null
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleClickCity (city) {
      this.$store.dispatch('changeCity', city);
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.tiemr) {
        clearInterval(timer)
      }
      if (!this.keyword) {
        return this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        //先遍历cities 先检查keyword是否存在于cities之中  indexOf
        for (let i in this.cities) {
          this.cities[i].forEach(element => {   //element就是this.cities[i]
            if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
              result.push(element)
            }
          });

        }

        this.list = result
      }, 100)



    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.scroll, { mouseWheel: true, click: true, tap: true })
  },
}
</script>

<style lang="stylus" scoped>
.input {
  background-color: #26a2ff;
  height: 0.5rem;
  position: relative;

  input {
    line-height: 0.5rem;
    width: 6rem;
    position: absolute;
    top: -0.1rem;
    left: 0.2rem;
    border-radius: 0.05rem;
    text-align: center;
    color: #666;
    font-size: 0.26rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
  }
}

.search-content {
  position: absolute;
  top: 1.3rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #eee;
  z-index: 1;
  overflow: hidden;

  .search-item {
    line-height: 0.5rem;
    background-color: #fff;
    padding-left: 0.2rem;
    font-weight: 600;
    font-size: 0.26rem;
  }
}
</style>

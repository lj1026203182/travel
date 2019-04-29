<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  data () {
    return {

    }
  },
  props: {
    list: Array
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding-left: 0.2rem;
}

.item-icon {
  position: relative;
  top: 0.08rem;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}

.item-children {
  padding: 0.2rem;
}
</style>

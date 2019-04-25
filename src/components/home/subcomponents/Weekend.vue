<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <!-- 内容部分 -->
    <ul class="item">
      <li v-for="(item, index) in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt>
        </div>
        <div class="item-list">
          <p class="item-info">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
@import '../../../assets/styles/mixins.styl';

.recommend-title {
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
  letter-spacing: 1px;
  font-weight: 600;
}

.item {
  width: 100%;
  // overflow: hidden;
  height: 3.6rem;
  display: flex;
  flex-flow: column;

  .item-img-wrapper {
    height: 2.4rem;
    overflow: hidden;
    box-sizing: border-box;

    .item-img {
      width: 100%;
    }
  }

  .item-list {
    flex: 1;

    .item-info {
      font-size: 0.28rem;
      color: #212121;
      margin: 0.2rem 0.3rem;
      ellipsis();
    }

    .item-desc {
      font-size: 0.26rem;
      color: #616161;
      margin: 0.2rem 0.3rem;
      ellipsis();
    }
  }
}
</style>

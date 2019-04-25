<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) in lists" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-des">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommed',
  data () {
    return {

    }
  },
  props: {
    lists: Array
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
  letter-spacing: 2px;
  font-weight: 600;
}

.item {
  overflow: hidden;
  height: 2.4rem;
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;

  .item-img {
    width: 2rem;
  }

  .item-info {
    flex: 1;
    min-width: 0; // 当字多...无法出现时

    .item-title {
      font-size: 0.32rem;
      font-weight: 600;
      padding: 10px;
      ellipsis();
    }

    .item-des {
      font-size: 0.28rem;
      padding: 0 10px;
      color: #666;
      ellipsis();
    }

    .item-btn {
      padding: 5px;
      margin: 16px 10px;
      background-color: #ff9300;
      border-radius: 0.6rem;
      font-size: 0.26rem;
      color: #fff;
      font-weight: 600;
      line-height: 0.44rem;
    }
  }
}
</style>

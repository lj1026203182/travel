<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) in recommendList" :key="item.id">
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
      recommendList: [{
        id: '1',
        imgUrl: "http://img1.qunarzz.com/sight/p0/1710/86/862fb9c710b0b18a3.img.jpg_200x200_1d3346d3.jpg",
        title: '南温泉索滑道',
        desc: '南温泉公'
      }, {
        id: '2',
        imgUrl: "http://img1.qunarzz.com/sight/p0/1810/36/36ed80c6e147d019a3.img.png_200x200_212fa958.png",
        title: '重庆两江夜游',
        desc: '不览夜景，未到重庆'
      }, {
        id: '3',
        imgUrl: "http://img1.qunarzz.com/sight/p0/1805/d1/d104b7ec6826de79a3.img.jpg_200x200_47aed401.jpg",
        title: '重庆杜莎夫人蜡像馆',
        desc: '随买随用'
      }]
    }
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

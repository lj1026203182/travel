<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <!-- 内容部分 -->
    <ul class="item">
      <li v-for="(item, index) in weekList" :key="item.id">
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
      weekList: [{
        id: '1',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/4c/33ad31d025fef.jpg_r_640x214_7821b813.jpg',
        title: '重庆夜景大赏',
        desc: '享巴渝特色，赏两江风光，感受不一样的重庆夜景！'
      }, {
        id: '2',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
        title: '重庆必打卡',
        desc: '重庆，非去不可'
      }, {
        id: '3',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg',
        title: '重庆大美古镇',
        desc: '行走重庆最美古镇，让你瞬间穿越千年'
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

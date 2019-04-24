<template>
  <div class="icons">
    <!-- 类似的轮播图效果 -->
    <swiper>
      <!-- 第一页,循环出8个icon -->
      <swiper-slide>
        <div class="icon" v-for="(item, index) in iconList" :key="item.iconUrl">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl" :alt="item.iconText">
            <p>{{item.iconText}}</p>
          </div>
        </div>
      </swiper-slide>
      <!-- 第二也的循环 两个iocn -->
      <swiper-slide>
        <div class="icon" v-for="(item, index) in iconList2" :key="item.iconUrl">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl" :alt="item.iconText">
            <p>{{item.iconText}}</p>
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
      iconList: [{
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        iconText: '景点门票'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        iconText: '一日游'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        iconText: '重庆必游'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        iconText: '演出'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        iconText: '动植物园'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
        iconText: '两江夜游'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        iconText: '神秘武隆'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
        iconText: '当地特色'
      }],
      iconList2: [{
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
        iconText: '奥陶纪'
      }, {
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
        iconText: '重庆欢乐谷'
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
.icons {
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  background-color: #f00;

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
    }
  }
}
</style>


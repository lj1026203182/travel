<template>
  <div id="header">
    <van-nav-bar left-text="返回" left-arrow right-text="按钮">
      <van-icon name="arrow-down" slot="right"/>
    </van-nav-bar>
    <input type="text" placeholder="请输入城市/景点/游玩主题" id="input">
    <router-link to="/city" id="city">城市</router-link>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {
      Toast('返回');
    },
    onClickRight () {
      Toast('按钮');
    }
  },
  components: {

  }
}
</script>

<style scoped>
#header {
  position: relative;
}
#input {
  line-height: 0.5rem;
  width: 3.2rem;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-45%);
  z-index: 1;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 0.1rem;
  font-size: 12px;
  text-indent: 1em;
}
#city {
  line-height: 0.5rem;
  position: absolute;
  top: 11px;
  right: 30px;
  z-index: 1;
  font-weight: 500;
  color: #1989fa;
}
</style>

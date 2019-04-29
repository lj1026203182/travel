<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <DetailHeader></DetailHeader>
    <detail-list :list="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './subcompontents/Banner'
import DetailHeader from './subcompontents/Header'
import DetailList from './subcompontents/List'
export default {
  name: 'detail',
  data () {
    return {
      categoryList: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []

    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json?id=', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        res = res.data
        console.log(res)
        //判断data不为空,防止报错
        if (res.ret && res.data) {
          const data = res.data
          this.categoryList = data.categoryList
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
        }

      }).catch(err => {
        alert('失败')
      })
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>

<template>
  <div>
    <!-- 头部header部分 -->
    <CityHeader></CityHeader>
    <!-- 搜索部分 -->
    <CitySearch :cities="cities"></CitySearch>
    <!-- 城市列表部分 -->
    <city-list :hotcities="hotcities" :cities="cities" :letter="letter"></city-list>
    <!-- abcd数字列表 -->
    <CityAlphabet :cities="cities" @change="handleLetterChange"></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from './subcomponents/Header';
import CitySearch from './subcomponents/Search';
import CityList from './subcomponents/List';
import CityAlphabet from './subcomponents/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      hotcities: [],
      cities: {},
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(res => {
        // console.log(res)
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.hotcities = data.hotCities
          this.cities = data.cities
          // console.log(data)
        }
      }).catch(err => {
        alert('失败')
      })
    },
    handleLetterChange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }

}
</script>

<style lang="stylus" scoped></style>

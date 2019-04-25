<template>
  <div>
    <!-- 头部header部分 -->
    <CityHeader></CityHeader>
    <!-- 搜索部分 -->
    <CitySearch></CitySearch>
    <!-- 城市列表部分 -->
    <city-list></city-list>
    <!-- abcd数字列表 -->
    <CityAlphabet></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from './subcomponents/Header';
import CitySearch from './subcomponents/Search';
import CityList from './subcomponents/List';
import CityAlphabet from './subcomponents/Alphabet'

export default {
  name: 'City',
  data () {
    return {

    }
  },
  methods: {

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

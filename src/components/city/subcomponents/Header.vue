<template>
  <div class="header">
    <mt-header title="城市选择">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
.header {
  line-height: 0.86rem;
  text-align: center;
}
</style>

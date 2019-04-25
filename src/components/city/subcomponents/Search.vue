<template>
  <div>
    <div class="input">
      <input type="text" placeholder="输入城市名或拼音">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
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
.input {
  background-color: #26a2ff;
  height: 0.5rem;
  position: relative;

  input {
    line-height: 0.5rem;
    width: 6rem;
    position: absolute;
    top: -0.1rem;
    left: 0.2rem;
    border-radius: 0.05rem;
    text-align: center;
    color: #666;
    font-size: 0.26rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
  }
}
</style>

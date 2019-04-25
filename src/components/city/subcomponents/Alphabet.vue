<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
  </ul>
</template>

<script>

export default {
  name: 'Alphabet',
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
.list {
  // background-color: #f0f;
  width: 0.4rem;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    list-style: none;
    text-align: center;
    line-height: 0.36rem;
    color: #26a2ff;
  }
}
</style>


<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Week 11
      </div>
      <div class="slide-content">
        Part 2: EV3 MicroPython
      </div>
    </div>
    <img src="@/static/day2.png" class="img">
  </div>
</template>

<script>
export default {
  layout: 'slide',
  transition: 'fadein',
  computed: {
    visible () {
      const res = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
      const subsequence = this.$store.state.current.subsequence
      for (let i = 0; i < subsequence; ++i) {
        res[i] = true
      }
      return res
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-size: 140% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262626;
}

.box {
  width: 40%;
  background: #262626;
  padding: 5vmin;
  color: white;
}

.img {
  width: 60%;
}

</style>

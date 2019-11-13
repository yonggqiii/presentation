<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Programming Platform
      </div>
      <div class="slide-content">
        <strong>Coursemology</strong><br>
        Curated exercises to help students understand concepts better<br>
        Gamified platform used widely in NUS School of Computing
      </div>
    </div>
    <img src="@/static/coursemo.png" class="img">
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
  display: flex;
  justify-content: center;
  align-items: center;

}

.box {
  padding: 5vmin;
}

.img {
  width: 50%;
}

</style>

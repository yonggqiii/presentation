<template>
  <div class="container">
    <div class="box">
      <h1>What happened?</h1>
    </div>
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
  background-image: url("/whathappened.png");
  background-size: 140% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  background: white;
  opacity: 0.9;
  padding: 5vmin;
  font-family: Raleway;
  font-size: 6vmin;
}

</style>

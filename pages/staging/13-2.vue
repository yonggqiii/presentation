<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Week 3 - 7
      </div>
      <div class="slide-content">
        <ul>
          <li>Sourcing for project sponsors</li>
          <li>Emailed 50 schools</li>
          <li>Challenges faced: unsuitable time period, non-replies</li>
          <li>Took longer than expected</li>
        </ul>
      </div>
    </div>
    <div style="width: 60%;">
      <img src="@/static/email1.png" class="img">
      <img src="@/static/email2.png" alt="logo" class="img">
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262626;

}

.box {
  height: 100%;
  background: #262626;
  padding: 5vmin;
  color: white;
  padding-top: 30vmin;
}

.img {
  width: 100%;
}

</style>

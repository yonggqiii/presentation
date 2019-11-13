<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Week 8 - 10
      </div>
      <div class="slide-content">
        Project sponsor postponing the sessions,
        again and again
        <ul>
          <li>Final Examinations</li>
          <li>Post Exam Activites</li>
        </ul>
      </div>
    </div>
    <img src="@/static/messages.png" class="img">
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
  height: 100%;
  padding: 5vmin;
  color: white;
  padding-top: 30vmin;
}

.img {
  width: 50%;
}

</style>

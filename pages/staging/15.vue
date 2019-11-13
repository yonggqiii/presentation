<template>
  <div class="container">
    <img src="@/static/poster.png" class="img">

    <div class="box">
      <div class="slide-title">
        Alternative Plans (Week 8 - 11)
      </div>
      <div class="slide-content">
        <u>Conducting an activity in NUS campus to teach Robotics</u>
        <ul>
          <li>New Project Sponsor (Us)</li>
          <li>Liaise with NUS department for email blast</li>
          <li>Liaise with School of Computing for Robots</li>
          <li>Changing syllabus to fit NUS students</li>
        </ul>
      </div>
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
  background-size: 140% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  height: 100%;
  padding: 5vmin;
  padding-top: 30vmin;
}

.img {
  height: 100%;
}

</style>

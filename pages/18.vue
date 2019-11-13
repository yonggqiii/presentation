<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Week 11
      </div>
      <div class="slide-content">
        <ul>
          <li>Lesson 1 survey results</li>
          <li>Alter syllabus and teaching methods a little</li>
        </ul>
      </div>
    </div>
    <div style="width: 40%;">
      <img src="@/static/survey1.png" class="img">
      <img src="@/static/survey2.png" alt="logo" class="img">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'view',
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
  width: 100%;
}

</style>

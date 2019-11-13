<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Syllabus Consultant
      </div>
      <div class="slide-content">
        <strong>Dr Henry Chia</strong><br>
        Senior Lecturer in NUS SoC for more than 10 years<br>
        Well versed in teaching programming methodology and support for peer and collaborative learning<br>
        Has taught almost all ISE students
      </div>
    </div>
    <img src="@/static/henry.png" class="img">
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

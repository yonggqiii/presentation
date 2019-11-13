<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Project Consultant
      </div>
      <div class="slide-content">
        <strong>Dr Brenda Cheang</strong><br>
        Course Instructor<br>
        Worked closely with her for advice on managing the project
      </div>
    </div>
    <img src="@/static/bren.png" class="img">
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

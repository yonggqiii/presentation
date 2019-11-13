<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Week 2
      </div>
      <div class="slide-content">
        <ul>
          <li>Project Ideation</li>
          <li>Discussion with Group</li>
        </ul>
      </div>
    </div>
    <img src="@/static/us.png" class="img">
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
  height: 100%;
}

</style>

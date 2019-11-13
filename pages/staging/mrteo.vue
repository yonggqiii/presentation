<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Project Sponsor - Hai Sing Catholic
      </div>
      <div class="slide-content">
        <strong>Mr Teo Yee Ming</strong><br>
        Singaporean of the Year 2018<br>
        Hai Sing Catholic has won the middle-school category in the world’s biggest VEX Robotics World Championship in 2012, 2013, 2015, 2017
      </div>
    </div>
    <img src="@/static/mrteo.png" class="img">
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

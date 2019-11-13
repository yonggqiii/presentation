<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        After much persistence...
      </div>
    </div>
    <img src="@/static/msg.png" class="img">
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
  background-image: url("/book.png");
  background-size: 140% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  padding: 5vmin;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 3vmin;
}

.img {
  width: 40%;
  padding-top: 20%;
}

</style>

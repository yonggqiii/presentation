<template>
  <div class="container">
    <div class="slide-title" style="margin-top: 30%;">
      PROJECT INTRODUCTION
    </div>
    <hr>
    <div class="slide-content" style="margin: auto;">
      PROJECT TEAM
    </div>
    <div class="spacer" />
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
hr {
  width: 60%;
  animation: expand 1s ease-in-out;
  margin-left: 10%;
  border: 6px solid rgb(149, 166, 180);
  border-radius: 6px;
  margin: 10px 0;
}

@keyframes expand {
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
}

* {
  transition: opacity 500ms ease-in-out;
}

.container {
  padding-left: 10%;
  width: 100%;
  height: 100%;
  color: black;
}

.hidden {
  opacity: 0;
}

</style>

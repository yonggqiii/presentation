<template>
  <div class="container">
    <div class="slide-title" style="margin-top: 30%;">
      PROJECT PLANNING
    </div>
    <hr>
    <div class="slide-content">
      <span style="color: #888888; padding-right: 5%;">WORK BREAKDOWN</span>
      <span style="color: #888888; padding-right: 5%;">TIMELINE</span>
      <strong>QUALITY MANAGEMENT</strong>
    </div>
    <div class="footer">
      <div class="footer-item" style="color: rgb(73, 67, 63)">
        INTRODUCTION
      </div>
      <div class="footer-item" style="color: rgb(56, 63, 71)">
        <strong>PLANNING</strong>
      </div>
      <div class="footer-item" style="color: rgb(56, 83, 54)">
        EXECUTION
      </div>
      <div class="footer-item" style="color: #999999">
        SUMMARY
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
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20%;
  width: 100%;
  text-align: center;
}

.footer-item {
  width: 20%;
  font-size: 2vmin;
}

hr {
  width: 80%;
  animation: expand 1s ease-in-out;
  margin: 3vmin 0 3vmin 10%;
  border-top: 1vmin solid rgb(56, 63, 71);
  border-bottom: none;
  border-left:none;
  border-right: none;
}
.slide-title {
  margin-left: 10%;
  width: 80%;
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;
}

.slide-content {
  margin-left: 10%;
}

@keyframes expand {
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}

* {
  transition: opacity 500ms ease-in-out;
}

.container {
  width: 100%;
  height: 100%;
  color: black;
}

.hidden {
  opacity: 0;
}

</style>

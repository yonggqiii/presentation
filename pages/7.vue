<template>
  <div class="container">
    <div style="background: #262626; color: white; width: 70%; padding: 4vmin;" class="meow" :class="{'hidden': !visible[1]}">
      <div class="slide-title">
        <u>Project Selected</u>
      </div>
      <div class="slide-content">
        Teaching basic EV3 Python programming to secondary school
        students in a fun and enriching way so that they will be
        interested to learn programming in the future.
      </div>
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
.meow {
  opacity: 0.95;
}
.slide-content {
  font-size: 3.5vmin;
}
ol {
  padding-left: 5%;
}

* {
  transition: opacity 500ms ease-in-out;
}

.container {
  padding: 5%;
  width: 100%;
  height: 100%;
  background-image: url("/ev3.png");
  background-size: 120% 100%;
  display: flex;
  align-items: center;
}

.hidden {
  opacity: 0;
}

  .slide-title {
    font-size: 7vmin;
    font-weight: bold;
    font-family: Raleway;
  }

  .slide-content {
    font-family: Didact Gothic;
    font-size: 4vmin;
  }
@media (orientation: portrait) {
  .slide-title {
    font-size: 6vmin;
    font-weight: bold;
    font-family: Raleway;
  }

  .slide-content {
    font-family: Didact Gothic;
    font-size: 4.5vmin;
  }
}

</style>

<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Syllabus Depth
      </div>
      <div class="slide-content">
        <ul>
          <li :class="{'hidden': !visible[1]}">
            Advice from Prof. Henry from NUS SoC to ensure topics covered are good
          </li>
          <li :class="{'hidden': !visible[2]}">
            Advice from Sqkii and Peatree for technical aid and industry knowledge
          </li>
          <li :class="{'hidden': !visible[3]}">
            Usage of Coursemology's platform to test understanding of concepts in a gamified and interactive manner
          </li>
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
* {
  transition: opacity 0.5s ease-in-out;
}

.hidden {
  opacity: 0;
}

.container {
  width: 100%;
  height: 100%;
  background-image: url("/ev32.png");
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  background: rgba(255, 255, 255, 0.8);
  padding: 5vmin;
}

.img {
  height: 100%;
}

</style>

<template>
  <div class="container">
    <div class="slide-title">
      SCOPE
    </div>
    <div class="spacer" />
    <div class="slide-content">
      <p :class="{'hidden': !visible[1]}">
        Project Introduction<br>
      </p>
      <p :class="{'hidden': !visible[2]}">
        Project Planning
      </p>
      <p :class="{'hidden': !visible[3]}">
        Project Execution
      </p>
      <p :class="{'hidden': !visible[4]}">
        Project Summary
      </p>
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
* {
  transition: opacity 500ms ease-in-out;
}

.container {
  width: 100%;
  height: 100%;
  padding: 20%;
  color: black;
  overflow: hidden;
  background-image: url("/penandpaper.png");
  background-size: 130% 130%;
}

.hidden {
  opacity: 0;
}

</style>

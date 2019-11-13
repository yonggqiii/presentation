<template>
  <div class="container">
    <div class="slide-title">
      LESSONS LEARNT
    </div>
    <div class="spacer" />
    <div class="spacer" />
    <div class="slide-content">
      <p :class="{'hidden': !visible[1]}">
        Documentation<br>
      </p>
      <p :class="{'hidden': !visible[2]}">
        Communication
      </p>
      <p :class="{'hidden': !visible[3]}">
        Time Management
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
  padding: 10%;
  text-align: center;
  color: black;
  overflow: hidden;
  background-image: url("/notebook.png");
  background-size: 130% 130%;
  background-position: 15% 15%;
}

.hidden {
  opacity: 0;
}

</style>

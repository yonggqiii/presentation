<template>
  <div class="container">
    <div class="slide-title">
      Hello
    </div>
    <div class="spacer" />
    <div class="slide-content">
      <p :class="{'hidden': !visible[1]}">
        How are you doing today? Are you able to see the slides being updated
        in real-time?
      </p>
      <p :class="{'hidden': !visible[2]}">
        If you are, great! Otherwise, let me know and I will debug this!
      </p>
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
  transition: opacity 500ms ease-in-out;
}
.container {
  width: 100%;
  height: 100%;
  padding: 3%;
  color: white;
}

.hidden {
  opacity: 0;
}

</style>

<template>
  <div class="container">
    <div style="background-image: linear-gradient(to bottom, rgba(255,255,255, 1), rgba(255,255,255, 0) 100%); height: 90%;padding: 5%;">
      <div class="slide-title">
        Project Selection Criteria
      </div>
      <div class="spacer" />
      <div class="slide-content">
        <ol>
          <li :class="{'hidden': !visible[1]}">
            The project shall leave a lasting impact-value generated.
          </li>
          <li :class="{'hidden': !visible[2]}">
            The project shall be something the group is passionate about.
          </li>
          <li :class="{'hidden': !visible[3]}">
            The project shall be something the group has expertise in doing.
          </li>
          <li :class="{'hidden': !visible[4]}">
            The project shall be completed before week 12 of the school semester.
          </li>
        </ol>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: black;
  background-image: url("/postits.png");
  background-size: 100% 100%;
}

.hidden {
  opacity: 0;
}

</style>

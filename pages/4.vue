<template>
  <div class="container">
    <div class="two-elements">
      <div class="members">
        <div class="slide-title">
          Project Team
        </div>
        <div class="spacer" />
        <div class="slide-content">
          <ul>
            <li><strong>Foo Yong Qi</strong> - Project Lead</li>
            <li><strong>Tan Wang Ren</strong> - Syllabus Creator</li>
            <li><strong>Lim Si Yeon</strong> - Syllabus Creator</li>
            <li><strong>Valavan Rajarajan</strong> Main Instructor</li>
            <li><strong>Lim Xiu Qing</strong> - Business Development</li>
            <li><strong>Esmonde Tan</strong> - Business Development</li>
            <li><strong>Sutaveraya Suratanakavikul</strong> - Operations</li>
          </ul>
        </div>
      </div>
      <img src="@/static/team.png" alt="logo" class="team-image">
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
ul {
  list-style-type: none;
}
.members {
  width: 100%;
}
.team-image {
  width: 50vmin;
}

.slide-content {
  font-size: 3vmin;
}

.slide-title {
  font-size: 5vmin;
}

@media (orientation: portrait) {
  .slide-content {
    font-size: 2.5vmin;
  }
}

* {
  transition: opacity 500ms ease-in-out;
}

.container {
  width: 100%;
  height: 100%;
  color: black;
  padding: 5%;
}

</style>

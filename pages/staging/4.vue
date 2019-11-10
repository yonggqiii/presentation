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
            <li><strong>Foo Yong Qi</strong> Project Leader</li>
            <li><strong>Foo Yong Qi</strong> Project Leader</li>
            <li><strong>Foo Yong Qi</strong> Project Leader</li>
            <li><strong>Foo Yong Qi</strong> Project Leader</li>
            <li><strong>Foo Yong Qi</strong> Project Leader</li>
            <li><strong>Foo Yong Qi</strong> Project Leader</li>
            <li><strong>Foo Yong Qi</strong> Project Leader</li>
          </ul>
        </div>
      </div>
      <img src="@/static/team.png" alt="logo" class="team-image">
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
ul {
  list-style-type: none;
}
.members {
  width: 100%;
}
.team-image {
  width: 50vmin;
}

.two-elements {
  height: 100%;
  padding: 5vmin;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

* {
  transition: opacity 500ms ease-in-out;
}

.container {
  width: 100%;
  height: 100%;
  color: black;
}

</style>

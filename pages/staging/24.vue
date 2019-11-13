<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Lessons Learnt
      </div>
      <div class="slide-content">
        <ul>
          <li :class="{'hidden': !visible[1]}">
            <strong>Documentation</strong><br>Protecting self and stakeholders - Project was almost unable to be carried out.
          </li>
          <li :class="{'hidden': !visible[2]}">
            <strong>Communication</strong><br>Differing expectations with project sponsor - Expectations and objectives were not communicated well.
          </li>
          <li :class="{'hidden': !visible[3]}">
            <strong>Time Management</strong><br>Producting quality content - School work amidst carrying out project
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
.container {
  width: 100%;
  height: 100%;
  background-image: url("/plant.png");
  background-size: 140% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 60%;
  background: rgba(255, 255, 255, 0.8);
  padding: 5vmin;
  border-radius: 3vmin;
}

.img {
  width: 100%;
}

.hidden {
  opacity: 0;
}

</style>

<template>
  <div class="container">
    <div class="box">
      <div class="slide-title">
        Team Strength
      </div>
      <div class="slide-content">
        <ul>
          <li :class="{'hidden': !visible[1]}">
            Entire team is proficient in python3
          </li>
          <li :class="{'hidden': !visible[2]}">
            Yong Qi and Valavan are tutors in NUS SoC who have taught more than 200 undergraduates between them, with prior competitive robotics experience
          </li>
          <li :class="{'hidden': !visible[3]}">
            Wang Ren is an esteemed tutor to students of all ages with his own tuition centre, Knowledge Bank
          </li>
        </ul>
      </div>
    </div>
    <div style="width: 40%; height: 100%; display: flex; flex-direction: column; justify-content: center;">
      <img :class="{'hidden': !visible[2]}" src="@/static/vlv.png" class="img">
      <img :class="{'hidden': !visible[2]}" src="@/static/yq.jpeg" alt="logo" class="img">
      <img :class="{'hidden': !visible[3]}" src="@/static/wangren.jpeg" alt="logo" class="img wr">
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
  transition: opacity 0.5s ease-in-out;
}

.hidden {
  opacity: 0;
}
.container {
  width: 100%;
  height: 100%;
  background-size: 140% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 60%;
  padding: 5vmin;
}

.img {
  width: 100%;
  height: 30%;
  object-fit: cover;
}

.wr {
  object-position: 0% 0%;
}

</style>

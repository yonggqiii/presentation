<template>
  <div class="container">
    <div class="slide-title">
      Project Stakeholders
    </div>
    <div class="slide-content">
      <ul>
        <li class="meow" :class="{'hidden': !visible[1]}">
          <strong>Project Sponsor</strong><br>
          Mr Teo Yee Ming<br>
          Teacher-In-Charge | Hai Sing Catholic School Robotics
        </li>
        <li class="meow" :class="{'hidden': !visible[2]}">
          <strong>Project Managers</strong><br>
          IE4240 Group I
        </li>
        <li class="meow" :class="{'hidden': !visible[3]}">
          <strong>Project Consultant</strong><br>
          Dr. Brenda Cheang<br>
          <del>Cher</del> IE4240 Lecturer | National University of Singapore
        </li>
        <li class="meow" :class="{'hidden': !visible[4]}">
          <strong>Syllabus Consultant</strong><br>
          Dr. Henry Chia<br>
          Senior Lecturer | National University of Singapore
        </li>
        <li class="meow" :class="{'hidden': !visible[5]}">
          <strong>Technical / Industry Consultants</strong><br>
          Mr Eleazar Lim<br>
          Co-founder, CTO | Sqkii<br><br>
          Mr Andrew Wee<br>Co-founder, CXO | peatree
        </li>
        <li class="meow" :class="{'hidden': !visible[6]}">
          <strong>Programming Platform</strong><br>
          Coursemology
        </li>
      </ul>
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
.meow {
  opacity: 0.95;
}
ul {
  padding-left: 0%;
  list-style-type: none;
}

li {
  margin-bottom: 3vmin;
}

* {
  transition: opacity 500ms ease-in-out;
}

.container {
  padding: 5%;
  width: 100%;
  height: 100%;
  background-image: url("/career-consultant-1.jpg");
  background-size: 130% 100%;
}

.hidden {
  opacity: 0;
}

  .slide-title {
    font-size: 5vmin;
    font-weight: bold;
    font-family: Raleway;
  }

  .slide-content {
    font-family: Didact Gothic;
    font-size: 2.5vmin;
  }
@media (orientation: portrait) {
  .slide-title {
    font-size: 4vmin;
    font-weight: bold;
    font-family: Raleway;
  }

  .slide-content {
    font-family: Didact Gothic;
    font-size: 2vmin;
  }
}

</style>

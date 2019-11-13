<template>
  <div class="container">
    <div class="slide-title">
      Project Sponsor Selection
    </div>
    <div class="spacer" />
    <div class="slide-content">
      <table :class="{'hidden': !visible[1]}">
        <tr :class="{'hidden': !visible[1]}">
          <th>Criterion</th>
          <th>Singapore Schools</th>
          <th>Community Centres</th>
        </tr>

        <tr :class="{'hidden': !visible[1]}">
          <td>Age Range</td>
          <td :class="{'bad': visible[5]}">
            13 - 16
          </td>
          <td :class="{'good': visible[5]}">
            13 - 70
          </td>
        </tr>

        <tr :class="{'hidden': !visible[2]}">
          <td>Resources needed</td>
          <td :class="{'good': visible[5]}">
            Computer labs and robots readily available
          </td>
          <td :class="{'bad': visible[5]}">
            Need to source for a venue and logistics to conduct lessons
          </td>
        </tr>

        <tr :class="{'hidden': !visible[3]}">
          <td>Execution speed</td>
          <td :class="{'good': visible[5]}">
            Faster as decision can be made by the school
          </td>
          <td :class="{'bad': visible[5]}">
            Longer as there will be a need to wait for approval
          </td>
        </tr>
        <tr :class="{'hidden': !visible[4]}">
          <td>Value created</td>
          <td :class="{'good': visible[5]}">
            Learning a new skill<br>Give students a glimpse of what programming is<br>Training for robotics competitions
          </td>
          <td :class="{'bad': visible[5]}">
            Learning a new skill
          </td>
        </tr>
      </table>
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
.bad {
  background: rgb(255, 98, 98);
}

.good {
  background: rgb(147, 250, 147);
}

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
  padding: 5%;
  width: 100%;
  height: 100%;
  color: black;
  background-image: url("/classroom.jpg");
  background-size: 100% 100%;
}

.hidden {
  opacity: 0;
}
th, td {
  margin: 0;
  border: 0.4vmin solid rgb(71, 68, 62);
  border-collapse: collapse;
  background: white;
  opacity: 0.6;
  transition: background 1s ease-in-out;
}
  .slide-title {
    font-size: 5.5vmin;
    font-weight: bold;
    font-family: Raleway;
  }

  .slide-content {
    font-family: Didact Gothic;
    font-size: 3vmin;
  }
@media (orientation: portrait) {
  .slide-title {
    font-size: 4.5vmin;
    font-weight: bold;
    font-family: Raleway;
  }

  .slide-content {
    font-family: Didact Gothic;
    font-size: 2.5vmin;
  }
}

</style>

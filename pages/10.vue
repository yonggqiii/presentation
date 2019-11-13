<template>
  <div class="container">
    <div class="slide-title">
      Proposed Timeline
    </div>
    <div class="spacer" />
    <div class="slide-content">
      <table style="margin: auto">
        <tr class="th">
          <th>
            Week
          </th>
          <th>
            Deliverables
          </th>
          <th>
            Remarks
          </th>
        </tr>
        <tr class="r1">
          <td>2</td>
          <td>Project Initialisation</td>
          <td />
        </tr>

        <tr class="r2">
          <td>3 - 6</td>
          <td>Contacting Stakeholders, drafting Project Charter, Project Management Plan</td>
          <td>Approval of Plans by Project Sponsor</td>
        </tr>

        <tr class="r1">
          <td>6 - 7</td>
          <td>Completion of Syllabus</td>
          <td>Approval of Syllabus by Project Sponsor</td>
        </tr>

        <tr class="r2">
          <td>8</td>
          <td>Execution - Part 1</td>
          <td>Basic Python Programming</td>
        </tr>

        <tr class="r1">
          <td>9</td>
          <td>Execution - Part 2</td>
          <td>Basic Python Programming</td>
        </tr>

        <tr class="r2">
          <td>10</td>
          <td>Execution - Part 3</td>
          <td>EV3 MicroPython</td>
        </tr>

        <tr class="r1">
          <td>11</td>
          <td>Execution - Part 4<br>Completed analytics of survey results</td>
          <td>EV3 MicroPython</td>
        </tr>
        <tr class="r2">
          <td>12</td>
          <td>Individual Reflections and Report Writing</td>
          <td>Buffer for project completion</td>
        </tr>

        <tr class="r1">
          <td>13</td>
          <td>Report submission and presentation</td>
          <td>
            <strong>TODAY</strong>
          </td>
        </tr>
      </table>
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

.th {
  background: #9ccf9f;
}

.r1 {
  background: rgb(143, 174, 199);
}

.r2 {
  background:rgb(125, 131, 165);
}

.container {
  padding: 5%;
  width: 100%;
  height: 100%;
  color: black;
  background-image: url("/timeline.png");
  background-size: 180% 100%;
  background-position: center;
}

.hidden {
  opacity: 0;
}

table {
  opacity: 0.8;
  width: 90%;
}
td {
  border-collapse: collapse;
  opacity: 0.8;
}
  .slide-title {
    font-size: 5.5vmin;
    font-weight: bold;
    font-family: Raleway;
    text-align: center;
  }

  .slide-content {
    width: 100%;
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
    font-size: 2vmin;
  }
}

</style>

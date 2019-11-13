<template>
  <div class="container">
    <div class="slide-title">
      Work Breakdown Structure
    </div>
    <div class="spacer" />
    <div class="slide-content">
      <table style="margin: auto">
        <tr>
          <td colspan="6" class="row1">
            <strong>Teaching EV3 Python</strong>
          </td>
        </tr>

        <tr>
          <td colspan="6" class="row2">
            Project Lead
          </td>
        </tr>

        <tr>
          <td colspan="3" class="row3">
            <strong>Execution</strong>
          </td>
          <td colspan="3" class="row3">
            <strong>Planning</strong>
          </td>
        </tr>

        <tr>
          <td class="row4">
            Instructor
          </td>
          <td class="row4">
            Syllabus 1
          </td>
          <td class="row4">
            Syllabus 2
          </td>
          <td class="row4">
            Biz Dev 1
          </td>
          <td class="row4">
            Biz Dev 2
          </td>
          <td class="row4">
            Operations
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

.row1{
  background: rgb(147, 250, 147);
  animation: appear1 1s ease-in-out;
}

.row2{
  background: rgb(138, 228, 190);
  animation: appear2 1.2s ease-in-out;
}

.row3 {
  background: rgb(138, 207, 228);
  animation: appear3 1.3s ease-in-out;
}

.row4 {
  background: rgb(138, 184, 228);
  animation: appear4 1.4s ease-in-out;
}

@keyframes appear1 {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes appear2 {
  0% { opacity: 0; }
  60% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes appear3 {
  0% { opacity: 0; }
  70% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes appear4 {
  0% { opacity: 0; }
  80% { opacity: 0; }
  100% { opacity: 1; }
}

* {
  transition: opacity 500ms ease-in-out;
}

.container {
  padding: 5%;
  width: 100%;
  height: 100%;
  color: black;
}

.hidden {
  opacity: 0;
}

table {
  width: 90%;
}
td {
  border-collapse: collapse;
  opacity: 0.8;
  text-align: center;
  border-radius: 3vmin;
  padding: 4vmin 1vmin;
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

<template>
  <div class="container">
    <div id="scene">
<div data-depth="0.2" left="-150px" class="layer">
        <img src="@/static/coding.png" class="bg">
      </div>

      <div data-depth="0.8" class="layer" style="padding: 10vmin 0 0 10vmin;">
        <div class="company-container">
          <div>
            <img id="peatree" src="@/static/logo.svg" alt="logo">
          </div>
          <div style="display: flex; align-items: center" class="company-name">
            <span style="font-family: Roboto Mono">peatree</span>
          </div>
        </div>
      </div>

      <div style="padding: 60vmin 0 0 calc(50vmin + 20vw)" data-depth="0.8" class="layer">
        <div class="company-container">
          <div>
            <img class="coylogo" src="@/static/sqkii_logo.png" alt="logo">
          </div>
          <div style="display: flex; align-items: center" class="company-name">
            <span style="font-family: Dancing Script; color: #ffc152">Sqkii</span>
          </div>
        </div>
      </div>

      <div style="padding: 50vmin 0 0 calc(5vmin)" data-depth="0.8" class="layer">
        <div class="company-container">
          <div>
            <img class="coylogo" src="@/static/coursemology.svg" alt="logo">
          </div>
          <div style="display: flex; align-items: center" class="company-name">
            <span style="font-family: Didact Gothic; color: rgb(194, 194, 194)">Coursemology</span>
          </div>
        </div>
      </div>

      <div style="padding: 5vmin 0 0 calc(65vmin)" data-depth="0.8" class="layer">
        <div class="company-container">
          <div>
            <img class="coylogo" src="@/static/Co-Brand-SoC-H.png" alt="logo">
          </div>
        </div>
      </div>

      <div id="title-container" data-depth="2" class="layer">
        <div id="title">
          <h1>PYTHON FOR EV3</h1>
          <p>
            IE4240 Group 1
          </p>
          <br><br>
        </div>
      </div>

      <div style="padding-top: 50vmin; padding-left: 10vmin;" data-depth="3" class="layer">
        <span class="typewriter">{{ typetext }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Parallax from 'parallax-js'

/* Constants for the typewriter */
const TIME_TO_TYPE_EACH_CHAR = 70
const TIME_TO_DELETE_EACH_CHAR = 30
const TIME_TEXT_IS_SHOWN = 5000
const TIME_TO_PUSH_ADDITIONAL_MESSAGES = 30000
const TIME_BEFORE_NEXT_MESSAGE_IS_SHOWN = 500

export default {
  layout: 'slide',
  transition: 'fadein',
  data () {
    return {
      prompters: [
        'May the bell curve be in our favour',
        'Head to ie4240.web.app',
        'This was built with Python (totally)'
      ],
      prompterIndex: 0,
      typetext: ''
    }
  },
  computed: {
    /**
     * currtypetext The full string of text to be displayed by the
     *              typewriter.
     */
    currtypetext () {
      return this.prompters[this.prompterIndex]
    }
  },
  mounted () {
    const scene = document.getElementById('scene')
    const meow = new Parallax(scene)
    console.log(meow)
    /* Beginning the typewriter text */
    this.prompter()
    /* Inserting extra messages after 30s */
    setTimeout(() => {
      this.prompters.push('Sorry for making you wait.')
      this.prompters.push('The speaker is clearly an idiot')
      this.prompters.push('But we should still get that A tho')
    }, TIME_TO_PUSH_ADDITIONAL_MESSAGES)
  },
  beforeDestroy () {
    clearTimeout(this.prompter)
    clearTimeout(this.unprompt)
  },
  methods: {
    prompter () {
      if (this.typetext.length < this.prompters[this.prompterIndex].length) {
        this.typetext = this.prompters[this.prompterIndex].substring(0, this.typetext.length + 1)
        setTimeout(this.prompter, TIME_TO_TYPE_EACH_CHAR)
        return
      }
      setTimeout(this.unprompt, TIME_TEXT_IS_SHOWN)
    },
    /**
     * Removing the last letter of the typewriter.
     */
    unprompt () {
      if (this.typetext.length === 0) {
        this.prompterIndex++
        if (this.prompterIndex >= this.prompters.length) {
          this.prompterIndex = 0
        }
        setTimeout(this.prompter, TIME_BEFORE_NEXT_MESSAGE_IS_SHOWN)
        return
      }
      this.typetext = this.typetext.substring(0, this.typetext.length - 1)
      setTimeout(this.unprompt, TIME_TO_DELETE_EACH_CHAR)
    }
  }
}
</script>
<style scoped>
#sqkii-container {
  padding: calc(100vmin - 260px) 0 0 calc(100vmin - 100px);
}

#title-container {
  padding-top: 30vmin;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.container {
  height: 100%;
  width: 100%;
  color: white;
  transition: transform 1s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
}

.bg {
  object-fit: cover;
  height: 120%;
  width: 120%;
  position: relative;
  left: -10%;
  top: -10%;
}

h1 {
  font-family: Raleway;
}

p {
  font-family: Didact Gothic;
}

.layer {
  width: 100%;
  height: 100%;
}

#scene {
  height: 100%;
  width: 100%;
}

#title {
  margin: auto;
  text-align: center;
}

.company-container {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  z-index: 7;
}

.company-name {
  padding-left: 16px;
  font-size: 5vmin;
}

#peatree {
  width: 15vmin;
  animation: spin 2s linear infinite;
}

.coylogo {
  height: 15vmin;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.typewriter {
  font-size: 4vmin;
  color: rgb(243, 228, 177);
  border-right: .15em solid #fdfbf3; /* The typwriter cursor */
  animation: blink-caret .75s step-end infinite;
  font-family: Roboto Mono;
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #b3ffe6; }
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:150%;
  height:150%;
  display:block;
}

@media(max-width: 1080px) {
  .logos {
    width: 80px;
  }
}

</style>

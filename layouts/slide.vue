<template>
  <div class="background">
    <div class="slide">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Mono'
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Dancing+Script&display=swap'
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway&display=swap'
      }
    ],
    transition: 'fadein'
  },
  data () {
    return {
      current: '1/1'
    }
  },
  mounted () {
    this.resize()
    const s = this.$route.path.split('/')
    this.current = s[2] + '/1'
    this.init()
    window.addEventListener('resize', this.resize)
    window.addEventListener('click', this.goNext)
    window.addEventListener('keydown', this.handleKey)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('click', this.goNext)
    window.removeEventListener('keydown', this.handleKey)
  },
  methods: {
    async init () {
      const seq = await db.collection('sequence').doc('sequence').get()
      const currDocRef = await db.collection('sequence').doc('current')
      this.sequence = seq.data().sequence
      this.currDocRef = currDocRef
      this.pushCurr()
    },
    resize () {
      const slide = document.getElementsByClassName('slide')[0]
      const width = window.innerWidth
      const height = window.innerHeight
      // Portrait mode.
      if (width * 3 / 4 <= height) {
        slide.style.cssText = 'width: 100vw; height: calc(100vw * 3 / 4)'
      } else {
        slide.style.cssText = 'width: calc(100vh * 4 / 3); height: 100vh'
      }
    },

    handleKey (e) {
      if (!e.isTrusted) {
        return
      }
      const lookupTable = {
        'ArrowRight': 'next',
        'ArrowDown': 'next',
        'ArrowUp': 'prev',
        'ArrowLeft': 'prev'
      }
      if (lookupTable[e.key] === 'next') {
        this.goNext()
      } else if (lookupTable[e.key] === 'prev') {
        this.goBack()
      }
    },

    goBack () {
      const curr = this.sequence.indexOf(this.current)
      if (curr - 1 >= 0) {
        this.current = this.sequence[curr - 1]
        this.pushCurr()
      }
    },

    goNext () {
      const curr = this.sequence.indexOf(this.current)
      if (curr + 1 < this.sequence.length) {
        this.current = this.sequence[curr + 1]
        this.pushCurr()
      }
    },

    pushCurr () {
      const page = this.current.split('/')[0]
      const s = this.$route.path.split('/')
      const currPage = s[2]
      if (currPage !== page) {
        this.$router.push('/staging/' + page)
      }
      this.$store.dispatch('current/setCurrent', this.current)
      this.currDocRef.set({ current: this.current })
    }
  }
}
</script>
<style>
.background {
  display: flex;
  align-items: center;
  background: black;
  height: 100vh;
  width: 100vw;
}

.slide {
  margin: 0 auto;
  overflow: hidden;
  background-image: radial-gradient(circle farthest-side, #171f25,  black);
}

h1 {
  font-size: 7vmin;
}

p {
  font-size: 3.5vmin;
}

.slide-title {
  font-size: 7vmin;
  font-weight: bold;
  font-family: Raleway;
}

.slide-content {
  font-family: Didact Gothic;
}

.fadein-enter-active,
.fadein-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 400ms;
}

.fadein-enter,
.fadein-leave-to {
  opacity: 0;
}

.spacer {
  height: 5vmin;
}

</style>

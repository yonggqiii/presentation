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
  computed: {
    current () {
      return this.$store.state.current.page
    }
  },
  watch: {
    current: {
      handler () {
        const pageNo = this.$store.state.current.page.split('/')[0]
        this.$router.push('/' + pageNo)
      }
    }
  },
  mounted () {
    this.resize()
    this.init()
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },

  methods: {
    async init () {
      const currDocRef = await db.collection('sequence').doc('current')
      currDocRef.onSnapshot((doc) => {
        this.$store.dispatch('current/setCurrent', doc.data().current)
      })
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

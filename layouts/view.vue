<template>
  <div class="background">
    <div class="slide" :class="{'cool': theme==='cool'}">
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
    },
    theme () {
      const lookUpTable = {
        'work-breakdown': 'cool',
        '9': 'cool',
        'timeline': 'cool',
        '10': 'cool',
        '11': 'cool',
        '13': 'dark',
        '14': 'dark',
        '17': 'dark',
        '18': 'dark',
        '19': 'dark',
        '20': 'dark'
      }
      const a = this.current ? lookUpTable[this.current.split('/')[0]] : 'default'
      return a
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

</style>

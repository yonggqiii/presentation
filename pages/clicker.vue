<template>
  <div style="background: black;height: 100vh;width: 100vw; display: flex; flex-direction: column; justify-content; center; align-items: center">
    <div style="color: white; font-size: 5vmin; font-family: Roboto">
      {{ meow }}
    </div>
    <div class="prev" @click="prev" />
    <div class="next" @click="next" />
  </div>
</template>
<script>
import { db } from '@/plugins/firebase'
export default {
  data () {
    return {
      currentRef: db.doc('sequence/current'),
      meow: ''
    }
  },
  async asyncData () {
    const seqRef = await db.doc('sequence/sequence').get()
    return {
      sequence: seqRef.data().sequence
    }
  },
  methods: {
    async getCurr () {
      const curr = await this.currentRef.get()
      return curr.data().current
    },
    async prev () {
      const meow = await this.getCurr()
      let i = this.sequence.indexOf(meow)
      i--
      if (i < 0) {
        return
      }
      this.currentRef.update({ current: this.sequence[i] }).then((x) => {
        this.meow = this.sequence[i]
      })
    },
    async next () {
      const meow = await this.getCurr()
      let i = this.sequence.indexOf(meow)
      i++
      if (i >= this.sequence.length) {
        return
      }
      this.currentRef.update({ current: this.sequence[i] }).then((x) => {
        this.meow = this.sequence[i]
      })
    }
  }
}
</script>
<style scoped>
.prev {
  width: 30vmin;
  height: 30vmin;
  border-radius: 100%;
  background: rgb(255, 78, 78);
  margin: auto;
}
.next {
  width: 30vmin;
  height: 30vmin;
  border-radius: 100%;
  background: rgb(95, 250, 95);
  margin: auto;
}
.next:focus,
.prev:focus {
  background: white;
}
</style>

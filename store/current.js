export const state = () => ({
  page: null,
  subsequence: null
})

export const getters = {
  page (state) {
    return state.page
  },

  subsequence (state) {
    return state.subsequence
  }
}

export const mutations = {
  setCurrent (state, payload) {
    const meow = payload.split('/')
    state.page = meow[0]
    state.subsequence = meow[1]
  }
}

export const actions = {
  setCurrent ({ commit }, payload) {
    commit('setCurrent', payload)
  }
}

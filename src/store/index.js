import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ratingTag: [],
    logoImg: ''
  },
  mutations: {
    addTag(state, payLoad) {
      if (state.ratingTag.length == 0) {
        state.ratingTag = (payLoad)
      }
    },
    addLogoImg(state, payLoad) {
      state.logoImg = payLoad
    }
  }
})

export default store
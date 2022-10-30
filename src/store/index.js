import { createStore } from "vuex"

const store = createStore({
  state: {
    points: 0
  },

  mutations: {
    updatepoints(state, payload) {
      state.points = state.points + payload
    }
  }

})

export default store

import { createStore } from "vuex"

const store = createStore({
  state: {
    user: null,
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('le state user est modifié ici',state.user)
    }
  }

})

export default store

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
  },

  actions: {
    signup(context, { email, password}) {
      console.log('---------signup action---------')
      setTimeout(() => {
        context.commit('setUser', { email, password })
      }, 3000)
    }
  }

})

export default store

import { createStore } from "vuex"

import { auth } from '@/firebase/config'
import {
  createUserWithEmailAndPassword , 

} from 'firebase/auth'

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
    async signup(context, { email, password}) {
      console.log('---------signup action---------')

      const res = await createUserWithEmailAndPassword(auth, email, password) 
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete signup ')
      }
    }
  }

})

export default store

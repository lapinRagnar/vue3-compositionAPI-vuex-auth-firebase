import { createStore } from "vuex"

import { auth } from '@/firebase/config'
import {
  createUserWithEmailAndPassword , 
  signInWithEmailAndPassword,
  signOut,

} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('le state user est modifié ici dans la mutations', state, state.user)
    }
  },

  actions: {
    
    async signup(context, { email, password}) {

      console.log('---------signup action---------')

      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log('resultat signup', res) 

      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete signup ')
      }

    },

    async login(context, { email, password }) {

      console.log('---------login action---------')

      const res = await signInWithEmailAndPassword(auth, email, password) 

      console.log('resultat login', res) 

      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete login ')
      }

    },

    async logout(context) {
      console.log('------------------logout() action -------------------')

      const res = await signOut(auth)
      context.commit('setUser', null)
      console.log('dans logout', res )
    }

  }

})

export default store

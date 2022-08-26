import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    name: null,
    email: null,
    type: null
  }),
  persist: true,
  getters: {
    getId: state => state.id,
    getName: state => state.name,
    getEmail: state => state.email,
    getType: state => state.type
  },

  actions: {
    async getCsrfCookie () {
      try {
        await api.get('/v1/sanctum/csrf-cookie')
      } catch (error) {
        if (error) throw error
      }
    },
    async login (email, password) {
      try {
        await api.post('/v1/auth/login', { email, password })
      } catch (error) {
        if (error) throw error
      }
    },
    async fetchUser () {
      try {
        return await api.get('/v1/user')
      } catch (error) {
        if (error) throw error
      }
    },
    setUser (payload) {
      if (payload.id) this.id = payload.id
      if (payload.name) this.name = payload.name
      if (payload.email) this.email = payload.email
      if (payload.type) this.type = payload.type
    },
    clearUser () {
      this.id = this.name = this.email = this.type = null
    }
  }
})

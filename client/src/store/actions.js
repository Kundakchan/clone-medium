import { HTTP } from '@/plugins/axios'

export default {
  async APP_INIT ({ commit }) {
    try {
      const response = await HTTP.get('posts')
      commit('setList', response.data)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async ADD_LIKE ({ commit }, payload) {
    try {
      const response = await HTTP.put(`posts/${payload.id}`, payload)
      commit('addLike', response.data)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async DELETE_ARTICLE ({ commit }, payload) {
    try {
      await HTTP.delete(`posts/${payload}`)
      commit('deleteArticle', payload)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async ADD_ARTICLE ({ commit }, payload) {
    try {
      const response = await HTTP.post('posts/', payload)
      commit('addArticle', response.data)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async UPDATE_ARTICLE ({ commit }, payload) {
    try {
      const response = await HTTP.put(`posts/${payload.id}`, payload)
      commit('updateArticle', response.data)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async USER_LOGIN ({ commit }, payload) {
    try {
      const response = await HTTP.get('users')
      const user = response.data.find(item => item.login === payload.email && String(item.password) === String(payload.password))
      commit('setUser', user)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async USER_REGISTRATION ({ commit }, payload) {
    try {
      const response = await HTTP.post('users/', payload)
      commit('setUser', response.data)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async LOGOUT ({ commit }) {
    try {
      commit('deleteUser')
    } catch (error) {
      console.error(error.message)
      throw error
    }
  }
}

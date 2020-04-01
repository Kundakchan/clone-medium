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
  async USER_LOGIN ({ commit, dispatch }, payload) {
    try {
      const response = await HTTP.get('users')
      const user = response.data.find(item => item.login === payload.email && String(item.password) === String(payload.password))
      commit('setUser', user)
      if (!sessionStorage.getItem('user')) {
        await dispatch('ADD_USER_STORAGE', user)
      }
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async USER_REGISTRATION ({ commit, dispatch }, payload) {
    try {
      const response = await HTTP.post('users/', payload)
      commit('setUser', response.data)
      if (!sessionStorage.getItem('user')) {
        await dispatch('ADD_USER_STORAGE', response.data)
      }
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async LOGOUT ({ commit }) {
    try {
      sessionStorage.removeItem('user')
      if (!sessionStorage.getItem('user')) commit('deleteUser')
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  async ADD_USER_STORAGE ({ dispatch }, payload) {
    const storage = await dispatch('STORAGE_TEST', 'sessionStorage')
    if (storage) {
      sessionStorage.setItem('user', JSON.stringify(payload))
    } else {
      console.error('Ваш браузер не поддержует технологию "sessionStorage"')
    }
  },
  STORAGE_TEST ({ commit }, payload) {
    try {
      const storage = window[payload]
      const x = '_test__storage_'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch {
      return false
    }
  }
}

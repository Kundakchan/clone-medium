export default {
  setList (state, payload) {
    state.list = payload
  },
  addLike (state, payload) {
    const index = state.list.findIndex(item => item.id === payload.id)
    state.list[index].claps = payload.claps
  },
  deleteArticle (state, payload) {
    const index = state.list.findIndex(item => item.id === payload)
    state.list.splice(index, 1)
  },
  addArticle (state, payload) {
    state.list.push(payload)
  },
  updateArticle (state, payload) {
    const index = state.list.findIndex(item => item.id === payload.id)
    for (const item in state.list[index]) {
      state.list[index][item] = payload[item]
    }
  },
  setUser (state, payload) {
    state.user = payload
  },
  deleteUser (state) {
    state.user = null
  }
}

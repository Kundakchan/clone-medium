export default {
  getList: state => state.list,
  getArticle: state => id => {
    return state.list.find(item => item.id === id)
  },
  getArticleIndex: state => id => {
    return state.list.findIndex(item => item.id === id)
  },
  getUser: state => state.user,
  checUser: state => state.user !== null,
  checReader: state => state.user.role === 'reader',
  checWriter: state => state.user.role === 'writer',
  getArticlesUser: state => id => {
    return state.list.filter(item => item.userId === id)
  }
}

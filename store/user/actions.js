export default{
  SET_USER({ commit }, user) {
    commit('CHANGE_USER', user)
  },
  SET_TRANSLATE({ commit }, translate) {
    commit('CHANGE_TRANSLATE', translate)
  }
}
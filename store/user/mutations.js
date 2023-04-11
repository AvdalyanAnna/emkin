export default {
  CHANGE_USER(state, user) {
    localStorage.setItem('user', JSON.stringify(user))
    state.user = user
  },
  CHANGE_TRANSLATE(state, translate) {
    localStorage.setItem('translate', JSON.stringify(translate))
    state.translate = translate
  }
}


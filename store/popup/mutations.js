export default {
  CHANGE_POPUP_GLOBAL(state, global) {
    state.global = global
  },
  CHANGE_POPUP_LOCAL(state, info) {
    state.localModal = info
  },
  CHANGE_POPUP_AVATAR(state, info) {
    state.avatarModal = info
  },
  CHANGE_POPUP_LANG(state, info) {
    state.lang = info
  },
  CHANGE_POPUP_CONTACTS(state, info) {
    state.contacts = info
  },
  CHANGE_POPUP_SUPPORT(state, info) {
    state.support = info
  },
  CHANGE_POPUP_THANK(state, info) {
    state.thank = info
  },
  CHANGE_POPUP_LOGIN(state, info) {
    state.LOGIN = info
  }
}


import addProduct from "~/misc/pages/addProduct";

export default {
  CHANGE_PAGE_REGISTRATION(state, data) {
    state.registration = data
  },
  CHANGE_PAGE_SETTINGS(state, data) {
    state.settings = data
  },
  CHANGE_PAGE_DONE(state, data) {
    state.registerDone = data
  },
  CHANGE_PAGE_REGISTRATION_CONFIRM(state, data) {
    state.registerConfirm = data
  },
  CHANGE_PAGE_RESET(state, data) {
    state.reset = data
  },
  CHANGE_PAGE_FAVORITE(state, data) {
    state.favorite = data
  },
  CHANGE_MY_ADVERTISES(state, data) {
    state.myAdvertises = data
  },
  CHANGE_PAGE_HOME(state, data) {
    state.home = data
  },
  CHANGE_PAGE_CATALOG(state, data) {
    state.catalog = data
  },
  CHANGE_PAGE_PRODUCT_DERAILS(state, data) {
    state.productDetails = data
  },
  CHANGE_PAGE_MENU_DEFAULT(state, data) {
    state.menuDefault = data
  },
  CHANGE_PAGE_MENU_AUTH(state, data) {
    state.menuAuth = data
  },
  CHANGE_PAGE_ADD_PRODUCT(state, data) {
    state.addProduct = data
  },
  CHANGE_PAGE_MODAL_TARIFF(state, data) {
    state.modalTariff = data
  },
  CHANGE_PAGE_MODAL_STATISTIC(state, data) {
    state.modalStatistic = data
  },
  CHANGE_PAGE_NOTIFICATIONS(state, data) {
    state.notifications = data
  },
  CHANGE_PAGE_MODAL_MENU(state, data) {
    state.modalMenu = data
  },
  CHANGE_PAGE_PASSWORD_ERROR(state, data) {
    state.passwordError = data
  },
}


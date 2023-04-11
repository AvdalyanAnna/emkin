import Vue from 'vue'
import AuthApi from '~/misc/api/authApi'
import api from '~/misc/api/api'
import chat from '~/misc/api/chat'
import {cloneDeep} from 'lodash';

Vue.prototype.$authApi = AuthApi
Vue.prototype.$api = api
Vue.prototype.$chat = chat
Vue.prototype.$changeRoute = function (str = '/') {
  let route = str
  if (this.$i18n.locale !== 'en') route = `/${this.$i18n.locale}${str}`
  return route
}

Vue.prototype.$galleryList = function (list) {
  return list
}
Vue.prototype.$galleryListNew = function (list, src) {
  let array = cloneDeep(list)
  if (src) array.push({link: true, src})
  return array
}

Vue.prototype.$categoryBreadcrumbs = function (info) {
  const breadcrumbs = []
  let cat = info
  console.log({info})
  while (cat) {
    if (cat.parentCategories && cat.parentCategories.length > 0) cat = cat.parentCategories[0];
    else cat = null
    if (cat) breadcrumbs.unshift(cat)
  }
  return breadcrumbs
}

export default ({app}, inject) => {
  inject('authApi', AuthApi)
  inject('api', api)
  inject('chat', chat)
  inject('changeRoute', function (str = '/') {
    let route = str
    if (this.$i18n.locale !== 'en') route = `/${this.$i18n.locale}${str}`
    return route
  })
}

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});


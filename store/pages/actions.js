export default {
   SET_PAGE_REGISTRATION({commit}) {
    let page_key = 'register'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_REGISTRATION', JSON.parse(content))
        })
  },
   SET_PAGE_PAGE_SETTINGS({commit}) {
    let page_key = 'settings'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_SETTINGS', JSON.parse(content))
        })
  },
  SET_PAGE_DONE({commit}) {
    let page_key = 'other-register-done'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_DONE', JSON.parse(content))
        })
  },
  SET_PAGE_REGISTRATION_CONFIRM({commit} ) {
    let page_key = 'other-confirm'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_REGISTRATION_CONFIRM', JSON.parse(content))
        })
  },
  SET_PAGE_RESET({commit} ) {
    let page_key = 'other-reset'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_RESET', JSON.parse(content))
        })
  },
  SET_PAGE_PASSWORD_ERROR({commit}) {
    let page_key = 'other-password-error'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_PASSWORD_ERROR', JSON.parse(content))
        })
  },
  SET_PAGE_FAVORITE({commit}) {
    return new Promise((resolve, reject) => {
      let page_key = 'favorites'
      const url = this.$getQuery({page_key})
      this.$axios.$get(`${this.$api.page}?${url}`)
          .then(({data: {content}}) => {
            if(content)  commit('CHANGE_PAGE_FAVORITE', JSON.parse(content))
            resolve(true);
          })
    })
  },
  SET_PAGE_HOME({commit}) {
    let page_key = 'home'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_HOME', JSON.parse(content))
        })
  },
  SET_PAGE_CATALOG({commit}) {
    let page_key = 'catalog'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_CATALOG', JSON.parse(content))
        })
  },
  SET_PAGE_PRODUCT_DERAILS({commit}) {
    let page_key = 'product-details'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_PRODUCT_DERAILS', JSON.parse(content))
        })
  },
  SET_PAGE_MENU_DEFAULT({commit}, ) {
    let page_key = 'menu-default'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_MENU_DEFAULT', JSON.parse(content))
        })
  },
  SET_PAGE_MENU_AUTH({commit}) {
    let page_key = 'menu-auth'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_MENU_AUTH', JSON.parse(content))
        })
  },
  SET_MY_ADVERTISES({commit}) {
    let page_key = 'my-advertises'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_MY_ADVERTISES', JSON.parse(content))
        })
  },
  SET_PAGE_ADD_PRODUCT({commit}) {
    let page_key = 'add-product'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_ADD_PRODUCT', JSON.parse(content))
        })
  },
  SET_PAGE_MODAL_TARIFF({commit}) {
    let page_key = 'modal-tariffs'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_MODAL_TARIFF',JSON.parse(content))
        })
  },
  SET_PAGE_MODAL_STATISTIC({commit}) {
    let page_key = 'modal-statistics'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_MODAL_STATISTIC', JSON.parse(content))
        })
  },
  SET_PAGE_MODAL_MENU({commit}) {
    let page_key = 'menu-mobile'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_MODAL_MENU', JSON.parse(content))
        })
  },
  SET_PAGE_NOTIFICATIONS({commit}) {
    let page_key = 'notifications'
    const url = this.$getQuery({page_key})
    this.$axios.$get(`${this.$api.page}?${url}`)
        .then(({data: {content}})=> {
          if(content)  commit('CHANGE_PAGE_NOTIFICATIONS', JSON.parse(content))
        })
  }
}

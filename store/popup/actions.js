export default {
  async SET_POPUP_GLOBAL({commit}, locale = 'en') {
    let type = 'popup',
        page_key = 'modal-global'
    // if (locale !== 'en') page_key += `-${locale}`
    const url = this.$getQuery({page_key,  type})
    this.$axios.setHeader('Accept-Language', locale || 'en')
    this.$axios.$get(`${this.$api.page}?${url}`).then(({data: {content}}) => {
      if(content)  commit('CHANGE_POPUP_GLOBAL',   JSON.parse(content))
    })
  },
  async SET_POPUP_LOCAL({commit}, locale = 'en') {
    let type = 'popup',
        page_key = 'city'
    // if (locale !== 'en') page_key += `-${locale}`
    const url = this.$getQuery({page_key,  type})
    this.$axios.setHeader('Accept-Language', locale || 'en')


    const {data:{content}} = await this.$axios.$get(`${this.$api.page}?${url}`)
    if(content)  commit('CHANGE_POPUP_LOCAL',   JSON.parse(content))

  },
  async SET_POPUP_AVATAR({commit}, locale = 'en') {
    let type = 'popup',
        page_key = 'picture'
    // if (locale !== 'en') page_key += `-${locale}`
    const url = this.$getQuery({page_key,  type})
    this.$axios.setHeader('Accept-Language', locale || 'en')


    const {data: {content}} = await this.$axios.$get(`${this.$api.page}?${url}`)
    if(content)  commit('CHANGE_POPUP_AVATAR',   JSON.parse(content))

  },
  async SET_POPUP_LANG({commit}, locale = 'en') {
    let type = 'popup',
        page_key = 'lang'
    // if (locale !== 'en') page_key += `-${locale}`
    const url = this.$getQuery({page_key,  type})
    this.$axios.setHeader('Accept-Language', locale || 'en')

    const {data: {content}} = await this.$axios.$get(`${this.$api.page}?${url}`)
    if(content)  commit('CHANGE_POPUP_LANG',   JSON.parse(content))

  },
  async SET_POPUP_CONTACTS({commit}, locale = 'en') {
    let type = 'popup',
        page_key = 'modal-contacts'
    // if (locale !== 'en') page_key += `-${locale}`
    const url = this.$getQuery({page_key,  type})
    this.$axios.setHeader('Accept-Language', locale || 'en')
    const {data: {content}} = await this.$axios.$get(`${this.$api.page}?${url}`)
    if(content)  commit('CHANGE_POPUP_CONTACTS',   JSON.parse(content))

  },
  async SET_POPUP_SUPPORT({commit}, locale = 'en') {
    let type = 'popup',
        page_key = 'modal-support'
    // if (locale !== 'en') page_key += `-${locale}`
    const url = this.$getQuery({page_key,  type})
    this.$axios.setHeader('Accept-Language', locale || 'en')


    const {data: {content}} = await this.$axios.$get(`${this.$api.page}?${url}`)
    if(content)  commit('CHANGE_POPUP_SUPPORT',   JSON.parse(content))

  },
  async SET_POPUP_THANK({commit}, locale = 'en') {
    let type = 'popup',
        page_key = 'modal-thanks'
    // if (locale !== 'en') page_key += `-${locale}`
    const url = this.$getQuery({page_key,  type})
    this.$axios.setHeader('Accept-Language', locale || 'en')


    const {data: {content}} = await this.$axios.$get(`${this.$api.page}?${url}`)
    if(content)  commit('CHANGE_POPUP_THANK',   JSON.parse(content))
  },
  async SET_POPUP_LOGIN({commit}, locale = 'en') {
    let type = 'front_design',
        page_key = 'login'
    // if (locale !== 'en') page_key += `-${locale}`
    const url = this.$getQuery({page_key,  type})
    this.$axios.setHeader('Accept-Language', locale || 'en')

    const {data: {content}} = await this.$axios.$get(`${this.$api.page}?${url}`)
    if(content)  commit('CHANGE_POPUP_LOGIN',   JSON.parse(content))

  }
}
import {filter, withField} from "~/mixins/helpers/products";

export default {
  async SET_CATEGORIES({commit, state}, lang = 'en') {
    let filter = `filter=id;name;slug;order`
    let search = `search=search=status:1,0;parent_category:0&searchFields=name->${lang}:like`
    let withFields = `with=picture;allSubCategories`
    let order = `orderBy=order&sortedBy=asc`
    let api = `${this.$api.categories}?${search}&${withFields}&${order}`

    if (state.categories.length === 0) await this.$axios.$get(api).then(({data}) => commit('CHANGE_CATEGORIES', data))

  },
  async SET_CATEGORIES_NEW({commit, state}, lang = 'en') {
    let filter = `filter=id;name;slug;order`
    let search = `search=search=status:1,0;parent_category:0&searchFields=name->${lang}:like`
    let withFields = `with=picture;allSubCategories`
    let order = `orderBy=order&sortedBy=asc`
    let api = `${this.$api.categories}?${search}&${withFields}&${order}`

    await this.$axios.$get(api).then(({data}) => commit('CHANGE_CATEGORIES', data))

  },
   SET_CATEGORY({commit}, slug) {
    return new Promise((resolve, reject) => {
       this.$axios.$get(`${this.$api.categories}/${slug}`)
        .then(({data}) => {
          commit('CHANGE_CATEGORY', data)
          resolve( data)
        })
    })
  },
  async SET_CATEGORY_NULL({commit}) {
    commit('CHANGE_CATEGORY', {})
  },
  async SET_ALL_FILTERS({commit}, filters) {
    commit('CHANGE_ALL_FILTERS', filters)
  },
  SET_FILTERS({commit, state}, categoryId = false) {
    if (categoryId === 0) {
      commit('CHANGE_FILTERS', [])
    } else {
      this.$axios.$get(`${this.$api.filters}?category_id=${categoryId || state.category.id}&orderBy=order&sortedBy=desc`)
        .then(({data}) => commit('CHANGE_FILTERS', data))
    }
  },
  SET_FILTERS_CHANGE({commit, state}, res) {
    commit('CHANGE_FILTERS', res)
  },
  SET_CATEGORY_PRODUCTS({commit, state}, routeStr) {
    return new Promise((resolve, reject) => {
      let {filters, productSort = 'orderBy=id&sortedBy=desc', lang = 'en'} = state.allFilters
      let loaded = undefined;
      if (!filters['answers.id']) {
        let res = []
        const answersRoute = routeStr.query.answers
        if (typeof answersRoute === 'string') {
          res = [answersRoute]
        } else {
          res = answersRoute
        }
        filters['answers.id'] = res
      }
      let orderBy = routeStr.query.orderBy
      let sortedBy = routeStr.query.sortedBy
      if (sortedBy && orderBy) productSort = `orderBy=${orderBy}&sortedBy=${sortedBy}`
      else productSort = 'orderBy=id&sortedBy=desc'
      let search = {
        // category_id: state.category.id,
        ...filters
      }

      let api = `${this.$api.products}?page=${state.page}&per_page=${state.per_page || 10}&${withField}&searchJoin=and`;
      const $getQuery = this.$getQuery(search, true)
      api += '&search=status:1,0'
      if ($getQuery !== '') api += ';' + $getQuery
      if (productSort) api += `&${productSort}`
      if (state.category.id) api += `&category_id=${state.category.id}`
      this.$axios.$get(api)
        .then(({data, meta: {current_page, last_page}}) => {
          commit('CHANGE_PAGE', current_page + 1)
          commit('CHANGE_CATEGORY_PRODUCTS', data)
          commit('CHANGE_LAST_PAGE', last_page)
          loaded = current_page < last_page
          resolve(loaded);
        })
        .catch(error => reject(error));
    });
  },
  SET_CATEGORY_PRODUCTS_PAGE({commit}) {
    commit('CHANGE_PAGE', 1)
  },
  SET_CATEGORIES_ACTIVE({commit, state}, number = 0) {
    commit('CHANGE_CATEGORY_NUMBER', number)
  }
}

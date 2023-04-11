import {withField} from "~/mixins/helpers/products";
import {cloneDeep} from 'lodash';

export default {
  SET_SEARCH_MIL({commit}, mil) {
    commit('CHANGE_SEARCH_MIL', mil)
  },
  SET_SEARCH_CATEGORY({commit}, categoryId) {
    commit('CHANGE_SEARCH_CATEGORY', categoryId)
  },
  SET_SEARCH_CATEGORY_ID({commit}, category) {
    commit('CHANGE_SEARCH_CATEGORY_ID', category)
    return true
  },
  SET_SEARCH_ANSWERS_IDS({commit}, {value, index}) {
    if (!value.checked) {
      commit('ADD_SEARCH_ANSWERS_IDS', {value, index})
    } else {
      commit('REMOVE_SEARCH_ANSWERS_IDS', {value, index})
    }
    // commit('CHANGE_SEARCH_ANSWERS_IDS', {value, index})
  },

  SET_SEARCH_CITY({commit}, city) {
    commit('CHANGE_SEARCH_CITY', city)
  },
  SET_GLOBAL_SEARCH_ANSWERS({commit},) {
    commit('CHANGE_GLOBAL_SEARCH_ANSWERS')
  },
  SET_SEARCH_PRODUCTS({commit, state}) {
    // let search = cloneDeep(state.search)
    let search = {}
    if (state.searchText) search.search_text = cloneDeep(state.searchText)
    if (state.search.mil) search.mil = cloneDeep(state.search.mil.key)
    if (state.city && (state.city.id !== 0 || state.city.id !== 'c1')) {
      search.city_id = cloneDeep(state.city.id)
    }
    if (state.search.costFrom || state.search.costTo) search.price = `${state.search.costFrom || 0},${state.search.costTo || state.search.costFrom}`
    if (state.search.answersFiltersIds) search.answersFiltersIds = JSON.stringify(cloneDeep(state.search.answersFiltersIds))
    search.page = 1
    return search
    // this.$router.push({query: {...search}})
  },
  SEARCH_PRODUCTS({commit, state}, categoryId) {
    if (!state.productsLoading) {
      commit('CHANGE_PRODUCTS_LOADING', true)
      let search = {}

      let productSort = state.sorts[state.sort]

      search.mil = state.search.mil.key
      search.search_text = state.searchText
      if (state.search.costFrom || state.search.costTo) search.price = `${state.search.costFrom || 0},${state.search.costTo || state.search.costFrom}`
      if (state.search.city && state.search.city.id && !(state.search.city.id === 0 || state.search.city.id === 'c1')) {
        search.city_id = state.search.city.id
      }
      let filters = null
      if (state.search.answersFiltersIds) {
        filters = JSON.stringify(Object.values(state.search.answersFiltersIds))
      }
      // if (state.search.answersFiltersIds) search.answersFiltersIds = JSON.stringify(state.search.answersFiltersIds)
      let api = `${this.$api.products}?page=${state.page}&per_page=${state.per_page}&${withField}&searchJoin=and`;
      const $getQuery = this.$getQuery(search, true)
      api += '&search=status:1,0'
      if ($getQuery !== '') api += ';' + $getQuery
      if (productSort) api += `&${productSort}`
     if(categoryId){
        api += `&category_id=${categoryId}`
        if (filters && filters !== '[]') api += `&filters=${filters}`
     }else if (state.search.category_id) {
        api += `&category_id=${state.search.category_id}`
        if (filters && filters !== '[]') api += `&filters=${filters}`

      }

      this.$axios.$get(api)
        .then(({data, meta: {current_page, last_page}}) => {
          commit('SEARCH_PRODUCTS', data)
          commit('CHANGE_TOTAL_PAGE', last_page)
        })
        .catch(error => console.log(error))
        .finally(() => {
          commit('CHANGE_PRODUCTS_LOADING', false)
          // commit('CHANGE_GET_PRODUCTS', false)
        })
      return true

    }


  },
  SEARCH_PRODUCTS_NULL({commit}) {
    commit('SEARCH_PRODUCTS',[])
  }
}

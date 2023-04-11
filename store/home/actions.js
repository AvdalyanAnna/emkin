import {filter, withField, vip, noVip} from "~/mixins/helpers/products";

export default {
  async SET_VIP_PRODUCTS({commit},city = null) {
    const sort='orderBy=id&sortedBy=desc'
    let api = `${this.$api.products}?per_page=10&page=1&${sort}&${filter}&${withField}&searchJoin=and&${vip}`;
    if(city && city.id !== 'c1') api += `;city_id:${city.id}`
    await this.$axios.$get(api)
        .then(({data}) => commit('CHANGE_VIP_PRODUCTS', data))
  },
  SET_PRODUCTS_PAGE({commit}) {
    commit('CHANGE_PAGE',  1)
  },
  SET_PRODUCTS_NULL({commit}) {
    commit('CHANGE_PRODUCTS_NULL')
  },
  SET_PRODUCTS({commit, state},city = null) {
    return new Promise((resolve, reject) => {
      let loaded = undefined;
      const sort='orderBy=id&sortedBy=desc'
      let api = `${this.$api.products}?per_page=${state.per_page || 10}&page=${state.page}&${sort}&${filter}&${withField}&searchJoin=and&${noVip}`;
      if(city && city.id !== 'c1') api += `;city_id:${city.id}`
      this.$axios.$get(api)
          .then(({data, meta: {current_page, last_page}}) => {
            commit('CHANGE_PRODUCTS', data, current_page)
            commit('CHANGE_PAGE', current_page + 1)
            commit('CHANGE_LAST_PAGE', last_page)
            loaded = current_page < last_page
            resolve(loaded);
          })
          .catch(error => reject(error));
    });
  },
  SET_BANNERS({commit}) {
    this.$axios.$get(this.$api.commercialBusCart).then(({data}) => {
      commit('CHANGE_BANNERS', data)
    })
  },
  SET_USER_BANNERS({commit}) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(this.$api.commercialUserBusCart).then(({data}) => {
        commit('CHANGE_USER_BANNERS', data)
        resolve(true);
      })
    });
  },
}

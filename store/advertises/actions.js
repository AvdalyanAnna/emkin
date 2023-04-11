export default {
  SET_ADVERTISES({commit, state}, {sort, status}) {
    return new Promise((resolve, reject) => {
      let loaded = undefined;
      let api = `${this.$api.user.advertises}&per_page=${state.per_page}&page=${state.page}&${sort}&searchFields=status:in&search=status:`;
      if(+status === 1) api +=`0,1`
      else api+=status
      this.$axios.$get(api)
          .then(({data, meta: {current_page, last_page}}) => {
            data.forEach(i => {
              i.checked = false
            })
            commit('CHANGE_ADVERTISES', data, current_page)
            commit('CHANGE_PAGE', current_page + 1)
            commit('CHANGE_LAST_PAGE', last_page)
            loaded = current_page < last_page
            resolve(loaded);
          })
          .catch(error => reject(error));
    });
  },
  SET_ADVERTISES_CHECKED({commit, state}, index) {
    commit('CHANGE_ADVERTISES_CHECKED', index)
  },
  SET_DEACTIVATE_OR_ACTIVE({commit, state}, {i, status}) {
    let advertises = typeof i === 'object' ? i : [i]
    this.$axios.$put(`${this.$api.productsAction}/${status}`,
        {advertises})
        .then(() => {
          // commit('CHANGE_ADVERTISES_CHECKED_REMOVE_ITEM', state.advertises[i].id)
          advertises.forEach(id => {
            const getIndex = state.advertises.findIndex(item => id === item.id)
            commit('CHANGE_ADVERTISES_REMOVE_ITEM', getIndex)
          })
          commit('CHANGE_ADVERTISES_CHECKED_ALL')

          // commit('CHANGE_ADVERTISES_REMOVE_ITEM', i)
        })
  },
  SET_GO_TO_MODERATION({commit, state}, item) {
    this.$axios.$put(`/products/${item.slug}`, {status: 0})
        .then(() => {
          const getIndex = state.advertises.findIndex(i => item.id === i.id)
          commit('CHANGE_ADVERTISES_REMOVE_ITEM', getIndex)
        })
  },
  SET_CHANGE_STATUS({commit, state}, {status, i}) {
    const advertises = i ? [i] : state.checkedList
    this.$axios.$put(`${this.$api.productsAction}/${status}`, {advertises})
        .then(() => {
          advertises.forEach(id => {
            const getIndex = state.advertises.findIndex(item => id === item.id)
            commit('CHANGE_ADVERTISES_REMOVE_ITEM', getIndex)
          })
          commit('CHANGE_ADVERTISES_CHECKED_ALL')
        })
  },
  SET_ADVERTISES_CHECKED_ALL({commit, state}, flag = false) {
    commit('CHANGE_ADVERTISES_CHECKED_ALL', flag)
  },
  SET_ADVERTISES_PAGE({commit}, page = 1) {
    commit('CHANGE_PAGE', page)
  },
}

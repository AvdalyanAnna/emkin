export default {
  SET_LOCATION({commit}, {city,user = false}) {
    commit('CHANGE_LOCATION', city)
   if(!user) localStorage.setItem('city', JSON.stringify(city))
  },
  SET_USER_LOCATION({commit}, user) {
    localStorage.removeItem('city')
    let res = {}
    if(user.country === 1){
      res.id = 'c1'
      res.namw = 'All of America'
    } else{
      if (user.city) {
        res.id = user.city.id
        res.name = user.city.name
        res.state_id = user.city.state.id
        res.state_minimal_select = {
          id:user.city.state.id,
          name:user.city.state.name,
        }
      }
      if (user.latitude) res.latitude = user.latitude
      if (user.longitude) res.longitude = user.longitude
    }
    commit('CHANGE_LOCATION', res)
  },
  SET_LOCATION_STATES({commit, state}) {
    if (state.locationStates.length === 0) {
      this.$axios.$get(`${this.$api.countries.states}?filter=id;name`)
        .then(({data}) => commit('CHANGE_LOCATION_STATES', data))
        .catch(e => console.log(e))
    }

  },
  SET_LOCATION_STATE({commit, state}, val) {
    commit('CHANGE_LOCATION_CITY_PAGE', 1)
    commit('CHANGE_LOCATION_STATE', val)
  },
  SET_LOCATION_CITY({commit, state}, val) {
    commit('CHANGE_LOCATION_CITY', val)
  },
  SET_LOCATION_CITIES: function ({commit, state}) {
    return new Promise((resolve, reject) => {
      let loaded = undefined;
      let api = `${this.$api.countries.search}&page=${state.locationCityPage}`
      if (state.locationState) api += `&search=state_id:${state.locationState.state_id || state.locationState.id}`
      this.$axios.$get(api)
        .then(({data, meta: {current_page, last_page}}) => {
          commit('CHANGE_LOCATION_CITIES', data, current_page)
          commit('CHANGE_LOCATION_CITY_PAGE', current_page + 1)
          loaded = current_page < last_page
          resolve(loaded);
        })
        .catch(error => reject(error));
    })
  },
  SET_LOCATION_CITIES_SEARCH_PAGE: function ({commit}, page) {
    commit('CHANGE_LOCATION_CITY_SEARCH_PAGE', page)
  },
  SET_LOCATION_CITIES_PAGE: function ({commit}, page) {
    commit('CHANGE_LOCATION_CITY_PAGE', page)
  },
  SET_LOCATION_CITIES_SEARCH: function ({commit, state}, search) {
    return new Promise((resolve, reject) => {
      let loaded = undefined;
      let api = `${this.$api.countries.search}&page=${state.searchCityPage}&search=name:${search}`
      return this.$axios.$get(api)
        .then(({data, meta: {current_page, last_page}}) => {
          commit('CHANGE_LOCATION_CITY_SEARCH_PAGE', current_page)
          commit('CHANGE_LOCATION_CITIES_SEARCH', data, current_page)
          commit('CHANGE_LOCATION_CITY_SEARCH_PAGE_LAST', last_page)
          loaded = current_page < last_page
          resolve(loaded);
        })

    })
  }
}

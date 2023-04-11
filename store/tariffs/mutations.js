export default {
  CHANGE_GROUP(state, group) {
    state.group = group
  },
  CHANGE_TARIFFS(state, data) {
    state.tariffs = []
    data.forEach(item => {
      const tariffs = item
      tariffs.description = JSON.parse(tariffs.description)
      state.tariffs.push(tariffs)
    })
  },
  CHANGE_GROUP_ACTIVE(state, active){
    state.active = active
  }
}


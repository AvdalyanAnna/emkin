export default {
  async SET_TARIFFS({commit, dispatch}) {
    try {
      const groupResponse = await this.$axios.$get(this.$api.commercialPeriod);
      commit('CHANGE_GROUP', groupResponse.data);
      dispatch('SET_GROUP_ACTIVE', 0)
    } catch (error) {
      console.log(error);
    }
  },

  async SET_GROUP_ACTIVE({commit, state}, active = 0) {
    try {
      commit('CHANGE_GROUP_ACTIVE', active)
      const tariffsResponse = await this.$axios.$get(`${this.$api.commercialUser}period_of_stay_id:${state.group[state.active].id}`);
      commit('CHANGE_TARIFFS', tariffsResponse.data);
    } catch (error) {
      console.log(error);
    }
  },
}

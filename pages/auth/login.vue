<template></template>
<script>
export default {
  middleware: ['ghost'],
  mounted() {
    this.$auth.strategy.token.set( this.$route.query.token || null)
    this.$auth.fetchUser().catch( () =>  this.$auth.logout());
    localStorage.setItem('user', 0)
    this.$axios.$get(this.$api.user.favorites).then(res => {
      localStorage.setItem('favourites',res.data.favorites)
    })
    this.$router.push(this.$changeRoute('/announcements'))
  }
}
</script>

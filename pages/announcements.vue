<template lang="pug">
  main.main
    section-annoucements
    modal-tariff-status(:status="status" @close="closeModal")
</template>

<script>
export default {
  layout: 'back',
  data() {
    return {
      status: null
    }
  },
  mounted() {
   this.getStatus()
  },
  methods:{
    closeModal(){
      this.$router.push('/announcements')
    },
    getStatus(){
      const status = this.$route.query.status
      if (status) {
        this.status = status
        this.$root.$emit('bv::show::modal', 'modal-tariff-status')
      }
    }
  }
}
</script>

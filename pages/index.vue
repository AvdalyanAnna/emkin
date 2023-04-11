<template lang="pug">
  main.main.home
    section-search(:content="PAGE_HOME")
    section.section-categories
      section-categories(:category="{title: PAGE_HOME.vip.title,list:VIP_PRODUCTS}")
      section-categories.big(v-if="!pageLoading" :category="{title: PAGE_HOME.recommend.title, list:this.PRODUCTS}" isRecommend @fetchMoreData="handleLoadMore")

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import pageTranslate from "@/mixins/pageTranslate";
export default {
  data() {
    return {
      pageLoading: true,
    }
  },
  mixins:[pageTranslate],
  computed: {
    ...mapGetters({
      PAGE_HOME: 'pages/PAGE_HOME',
      VIP_PRODUCTS: 'home/VIP_PRODUCTS',
      PRODUCTS: 'home/PRODUCTS',
      LOCATION: 'location/LOCATION',
    })
  },
  watch:{
    async LOCATION() {
      await this.openPage()
    }
  },
  async created() {
    if(!this.$auth.loggedIn) await this.openPage()
  },
  methods: {
    ...mapActions({
      SET_PAGE_HOME: 'pages/SET_PAGE_HOME',
      SET_VIP_PRODUCTS: 'home/SET_VIP_PRODUCTS',
      SET_PRODUCTS_PAGE: 'home/SET_PRODUCTS_PAGE',
      SET_PRODUCTS: 'home/SET_PRODUCTS',
      SET_PRODUCTS_NULL: 'home/SET_PRODUCTS_NULL',
    }),
    getPageTranslate() {
       this.SET_PAGE_HOME()
    },
    async openPage(){
      try {
        await this.SET_VIP_PRODUCTS(this.LOCATION);
        await this.SET_PRODUCTS_PAGE();
        this.SET_PRODUCTS_NULL();
        await this.SET_PRODUCTS(this.LOCATION);
      } finally {
        this.pageLoading = false
      }
    },
    handleLoadMore($state) {
      this.SET_PRODUCTS(this.LOCATION)
          .then(loadState => {
            if (loadState) $state.loaded()
            else $state.complete()
          })
    }
  }
}
</script>

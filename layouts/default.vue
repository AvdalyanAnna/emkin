<template lang="pug">
  .container.container-page(:class="[{'kmg-fix':!categoryScroll},{'catalogPage':catalogPage}]")
    part-header.header-web( fixed :small="$auth.loggedIn" :categoryScroll="categoryScroll")
    Nuxt
    part-footer
    part-mobile-menu
    modal-card
    modal-search(v-if="!$screen.st")
    modal-location
    modal-languages
    template(v-if="!$auth.loggedIn")
      modal-login
</template>
<script>
export default {
  data() {
    return {
      categoryScroll: true,
      catalogPage: false,
    }
  },
  created() {
    this.categoryPage()
  },
  watch:{
    '$route': {
      handler: async function (slug) {
        let res = this.$route.path
        let catalog = res.match('catalog')
        if (catalog)  this.catalogPage = true
        else this.catalogPage = false
      },
      deep: true,
      immediate: true
    },
  },
  methods:{
    categoryPage() {
      let res = this.$route.path
      let catalog = res.match('catalog')
      if (catalog) {
        this.catalogPage = true
        let lastScrollTop = 0;

        window.addEventListener('scroll',  () => {
          const currentScrollTop = window.scrollY || window.pageYOffset;
          if (currentScrollTop >50 && currentScrollTop > lastScrollTop) {
            this.categoryScroll = false
          } else {
            this.categoryScroll = true
          }

          lastScrollTop = currentScrollTop;
        });

      }
    }
  }
}
</script>

<style lang="scss">
.header.header_fixed .header__inner{
  transition: 0.3s all;
  @include large-mobile {
    height: 61px;
  }
}
.container-page{
  &.kmg-fix.catalogPage{
    .header.header_fixed .header__inner{
      top: -87px;
      @include large-mobile {
        top: -60px;
      }
    }
    .section-catalog__fixed{
      top: 0;
    }
  }
}
</style>

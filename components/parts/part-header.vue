<template lang="pug">
  header.header(:class="Mods")
    .header__inner(:class="[{active:scrolled},{'border-header':hasBorder}]")
      .header__wrap.wrap
        .header__row.flex.flex_vertical.flex_justify
          .header__column.header__column_left.flex.flex_vertical
            NuxtLink.header__logo(:to="$changeRoute()")
              img(src="~/assets/img/logo.svg")
            .select__head.header__lang(v-b-modal.modal-location)
              svg-icon.button-primary__icon(name="location" :class="`button-primary__icon_location`")
              span {{ locationText }}
          .header__colum.header__colum-full.header-search
            div(v-if="scrolled && $screen.st")
              //part-search-category.section-search__form.search-form-header(
              //  v-if="$screen.st"
              //  @search="searchProducts"
              //  withOutCategory withOutMil withOutCity
              //)
          .header__column.header__column_right.flex.flex_vertical
            button-action.header__favorite(v-if="!$auth.loggedIn" :class="favColor" :to="$changeRoute('/favorites')" content="<strong>Избранное</strong>" v-tippy)
            item-profile.header__profile(name="profileMenu" )
            tippy.tippy-hide(to="profileMenu" interactive
            :animate-fill="false"
              distant="7"
              theme="light"
              animation="fade"
              trigger="mouseenter"
              arrow placement="bottom-start")
              part-profile-menu
            button-primary.header__add(@click.native.prevent="addAdvert" light) Add advertise
            //header__nav(v-if="!$auth.loggedIn")
            //  NuxtLink.header__login.link.p(to="#" v-b-modal.modal-login) Login
            //  span  /
            //  NuxtLink.header__reg.link.p(to="/auth/registration") Registration

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import favorite from "@/mixins/favorite";
import pageTranslate from "@/mixins/pageTranslate";
import {decodeQuery, encodeQuery} from "@/mixins/helpers/search";

export default {
  props: {
    back: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    showSearch: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
  },
  mixins: [favorite, pageTranslate],
  data() {
    return {
      scrolled: false,
      hasBorder: false,
    }
  },

  computed: {
    Mods() {
      return {
        'header_back': this.back,
        'header_small': this.small,
        'header_fixed': this.fixed,
        'header_show_search': this.showSearch,
      }
    },
    ...mapGetters({
      POPUP_LOCAL: 'popup/POPUP_LOCAL',
      LOCATION: 'location/LOCATION',
      FAVOURITES: 'favourites/FAVOURITES',
    }),
    locationText() {
      let text = this.POPUP_LOCAL.title
      if (this.LOCATION) {
        if (this.LOCATION.id === 'c1') text = 'All of America'
        else text = this.LOCATION.name
      }
      return text
    }
  },
  mounted() {
    if (navigator.platform.match('Mac') !== null) {
      document.body.setAttribute('class', 'OSX');
    }
    if (this.fixed) {
      window.addEventListener("scroll", () => {
        this.hasBorder = document.documentElement.scrollTop > 0
        this.scrolled = document.documentElement.scrollTop >= 400
      })

    }

    if (this.$auth.loggedIn) this.SET_USER_LOCATION(this.$auth.user)
  },
  methods: {
    ...mapActions({
      SET_POPUP_GLOBAL: 'popup/SET_POPUP_GLOBAL',
      SET_USER_LOCATION: 'location/SET_USER_LOCATION',
      SET_PAGE_PRODUCT_DERAILS: 'pages/SET_PAGE_PRODUCT_DERAILS',
    }),
    getPageTranslate() {
      this.SET_POPUP_GLOBAL()
      this.SET_PAGE_PRODUCT_DERAILS()
    },
    searchProducts(filter) {
      const query = decodeQuery(this.$route.query.data)
      if (!query.search_text) {
        this.$router.push(`${this.$changeRoute('/catalog')}?${encodeQuery(filter)}`)
      }
    },
    addAdvert() {
      if (this.$auth.loggedIn) {
        this.$router.push("/create-ad")
      } else {
        this.$bvModal.show("modal-login")
        this.$router.push(this.$changeRoute('/create-ad'))
      }
    },

  }
}
</script>


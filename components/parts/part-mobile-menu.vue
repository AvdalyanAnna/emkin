<template lang="pug">
  .mobile-menu
    .mobile-menu__list.flex.flex_vertical.flex_justify
      .mobile-menu__item
        button-action.mobile-menu__btn.active(icon="home" :to="$changeRoute()")
      .mobile-menu__item
        button-action.mobile-menu__btn(icon="search" @click.native.prevent="showSearchModal")
      .mobile-menu__item
        button-action.mobile-menu__btn(icon="add" @click.native.prevent="addAdvert")
      .mobile-menu__item
        button-action.mobile-menu__btn(icon="heart" :to="$changeRoute(!$auth.loggedIn ?  '/favorites' : '/favorites-ad')")
      .mobile-menu__item
        item-profile.mobile-menu__profile(:active="showMenu" @toggle="ToggleClass")
    modal-menu(@closeToggle="closeClass")
</template>

<script>
export default {
  data() {
    return {
      active: false,
      showSearch: false,
      showMenu: false
    }
  },
  watch:{
    showMenu(val){
      // console.log(val)
      this.$root.$emit(`bv::${!this.showMenu ? 'hide' : 'show'}::modal`, 'modal-menu')
    }
  },
  methods: {
    addAdvert() {
      if (this.$auth.loggedIn) {
        this.$router.push("/create-ad")
      } else {
        this.$bvModal.show("modal-login")
        this.$router.push(this.$changeRoute('/create-ad'))
      }
    },
    showSearchModal() {
      this.$root.$emit(`bv::${this.showSearch ? 'hide' : 'show'}::modal`, 'modal-search')
      this.showSearch = !this.showSearch
    },
    ToggleClass() {
      this.showMenu = !this.showMenu
    },
    closeClass() {
      this.showMenu = false
    }

  }
}
</script>

<style lang="scss">
.mobile-menu {
  position: fixed;
  bottom: -2px;
  left: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #DDE1E3;
  padding: 0 22rem;
  z-index: 999;
  display: none;
  @include small-tablet {
    display: block;
  }

  &__list {
    min-height: 48rem;
  }

  &__btn {
    width: 30rem;
    height: 30rem;
  }
}
</style>

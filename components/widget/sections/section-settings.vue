<template lang="pug">
  section.settings
    .settings__row
      .settings__column.settings__column_left
        part-profile-box.settings__profile-box(:avatar="userAvatar" isLocation)
      .settings__column.settings__column_right
        h1.section-notifications__title.h3 {{title}}
        .settings__nav
          part-back-nav.settings__nav-wrap(:nav="nav")
        slot

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Settings"
    },
    list: {
      type: Array,
      default: () => ([])
    },
    blacklist: {
      type: Array,
      default: () => ([])
    },
    nav: {
      type: Array,
      default: () => ([])
    },
  },

  data() {
    return {
      form: {},
      modalTitle: '',
      isShow:false,
    }
  },
  computed:{
    userAvatar(){
      return this.$auth.user.avatar
    }
  },
  methods: {
    changePhone(info) {
      this.modalTitle = "Phone"
      this.form = info
      this.sandCode()
    },
    resetCode() {
      this.sandCode()
    },
    closeEdit() {
      this.form = {}
      this.$root.$emit('bv::hide::modal', 'modal-confirm')
      this.isShow = false
    },
    changeEmail(info) {
      this.modalTitle = "Email"
      this.form = info
      this.sandCode('email')
    },
    sandCode(){
      this.isShow = true
      this.$axios.$put('users/settings/change/send-email-phone', this.form)
        .catch(res=>{ })
      this.$root.$emit('bv::show::modal', 'modal-confirm')
    }
  }
}
</script>

<style lang="scss">
.settings {
  padding: 44rem 0 80rem 0;

  @include large-mobile {
    padding: 13rem 0 60rem 0;
  }

  &__row {
    display: flex;

    @include large-tablet {
      flex-wrap: wrap;
    }
  }

  &__column {
    &_left {
      width: 310rem;
      min-width: 310rem;
    }

    &_right {
      width: 100%;
      margin-left: 70rem;
      padding-top: 20rem;
    }

    @include large-tablet {
      width: 100%;
      &_right {
        margin-left: 0;
        margin-top: 30rem;
        padding-top: 0;
      }
    }
  }

  &__nav {
    margin-top: 30rem;
    margin-left: -20rem;

    &-wrap {
      padding-left: 20rem;
    }

    @include large-tablet {
      margin-left: 0;
      &-wrap {
        padding-left: 0;
      }
    }
  }

  &__item {
    margin-top: 60rem;

    @include large-mobile {
      margin-top: 40rem;
    }
  }

  &__field {
    padding: 20rem;
    margin-left: -20rem;
    border-bottom: 1px solid $light-gray;

    @include small-desktop {
      padding-right: 0;
    }

    @include large-tablet {
      padding: 15rem 0;
      margin-left: 0;
    }

    @include large-mobile {
      padding: 27rem 0 20rem 0;
    }
  }

  &__blacklist {
    padding-top: 20rem;

    &-item {
      padding: 20rem;
      margin-left: -20rem;
      border-bottom: 1px solid $light-gray;
    }

    @include small-desktop {
      &-item {
        padding-right: 0;
      }
    }

    @include large-tablet {
      &-item {
        padding: 20rem 0;
        margin-left: 0;
      }
    }

    @include large-mobile {
      padding-top: 12rem;
      &-item {
        padding: 15rem 0;
      }
    }
  }

  &__not-found {
    margin-top: 150rem;

    @include large-mobile {
      margin-top: 0;
    }
  }
}
</style>

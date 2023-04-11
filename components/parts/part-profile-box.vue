<template lang="pug">
  .profile-box
    module-user-info(
      :avatar="avatar"
      :name="`${$auth.user.first_name} ${$auth.user.last_name}`"
      :about="about"
      :isLocation="isLocation"
      big
      edit
    )
      modal-avatar(:avatar="avatar ? avatar.original_full_url : ''" )
    .profile-box__img
      set-img(:default-img="require(`~/assets/img/${img}`)")
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "settings__img.png"
    },
    avatar: {
      type: Object,
      default: {}
    },
    name: {
      type: String,
      default: "Alexandr Bairamov"
    },
    about: {
      type: String,
      default: "New Your, Rochester "
    },
    isLocation: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="scss">
.profile-box {
  border: 1px solid $light-gray;
  padding: 38rem 20rem 0 20rem;
  border-radius: 20rem;
  overflow: hidden;

  @include large-tablet {
    padding: 30rem;
  }

  @include large-mobile {
    padding: 15rem;
  }

  &__img {
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-bottom: -3px;
    margin-top: 47rem;

    img {
      width: 100%;
      object-fit: cover;
    }

    @include large-tablet {
      display: none;
    }
  }
}
</style>

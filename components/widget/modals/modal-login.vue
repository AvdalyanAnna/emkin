<template lang="pug">
  b-modal(
    id="modal-login"
    ref="login"
    size="login-size"
    modal-class="modal-login"
    body-class="modal-login__body"
    header-class="modal-login__header"
    footer-class="modal-login__footer"
    centered
    @show="openModal"
    @hidden="closeModal"
  )

    template(#modal-header='{ close }')
      button-close.modal__close(@click.native='close()')
    h3.modal-login__title.h3 {{ POPUP_LOGIN.sing }}
    login-form(@close="closeLogin" :content="POPUP_LOGIN")
    .modal-login__with
      .modal-login__with-text.p {{POPUP_LOGIN.loginWith}}
      .modal-login__with-buttons.flex
        button-primary.modal-login__with-btn(border icon="facebook" @click.prevent.native="socialAuth('facebook')") Facebook
        button-primary.modal-login__with-btn(border @click.prevent.native="socialAuth('google')")
          set-img(img-class="button-primary__icon" :default-img="require(`~/assets/img/gmail.png`)")
          | Gmail
    template(#modal-footer='{ close }')
      button-primary.modal-login__btn.modal-login__btn_reg(light @click.native.prevent="goRegistration()" ) {{POPUP_LOGIN.registration}}


</template>

<script>
import getConstructorPage from "@/mixins/getConstructorPage";
import {mapActions, mapGetters} from "vuex";

export default {
  middleware: ['ghost'],
  props: {
    title: {
      type: String,
      default: 'Sign in'
    },
  },
  computed: {
    ...mapGetters({
      POPUP_LOGIN: 'popup/POPUP_LOGIN'
    })
  },
  watch: {
    '$i18n.locale'(val) {
      this.SET_POPUP_LOGIN(this.$i18n.locale)
    },
  },
  mounted() {
    localStorage.removeItem('auth.redirect')  
  },
  methods: {
    ...mapActions({
      SET_POPUP_LOGIN: 'popup/SET_POPUP_LOGIN',
    }),
    openModal() {
      this.SET_POPUP_LOGIN(this.$i18n.lang)
    },
    socialAuth(social) {
      this.$auth.loginWith(social)
    },
    closeLogin() {
      this.$bvModal.hide('modal-login')
    },
    goRegistration() {
      this.closeLogin()
      this.$goRegister()
    },
    closeModal() {
      localStorage.removeItem('auth.redirect')
    }
  }
}
</script>

<style lang="scss">
.modal-login {

  @include large-mobile {
    //padding-left: 15px !important;
    .modal-content {
      padding-bottom: 40rem;
      border-radius:15rem 15rem 0   0;

    }
    //.modal-form {
    //  align-items: center;
    //}
    //.modal-dialog {
    //  align-items: center;
    //}
  }

  &__title {
    text-align: center;
  }

  &__form {
    margin-top: 30rem;
  }

  &__field {
    &:not(:first-child) {
      margin-top: 20rem;
    }
  }

  &__link {
    line-height: .8;
    display: inline-flex;
    margin-top: 10rem;
    font-weight: 600;
  }

  &__btn {
    width: 100%;

    &_login {
      margin-top: 30rem;
    }
  }

  &__with {
    margin-top: 50rem;
    text-align: center;

    &-text {
      line-height: .8;
    }

    &-buttons {
      padding-top: 20rem;
      @include items(2, 5);
    }
  }

  &__footer {
    margin-top: 30rem;
    padding-top: 34rem;
  .button-primary__icon {
    width: 18rem;
    height: 14rem;
  }
  }
}
</style>
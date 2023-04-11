<template lang="pug">
  form.modal-login__form(action="/registration")
    .modal-login__field
      form-input.modal-login__input(
        :placeholder="content.username.placeholder || 'Enter the login'" name="email"
        v-model.trim.lazy="form.confirmation_auth"
        @input="changeEmail"
        :error="$v.form.confirmation_auth.$error || confirmation_authError ||  errors"
      )
    .modal-login__field
      form-input.modal-login__input(
        :placeholder="content.password.placeholder || 'Enter the password'" name="password"
        :icon="isPassword ? 'eyeHide' : 'eyeShow' "
        :type="isPassword ? 'password':'text'"
        @click="isPassword = !isPassword"
        v-model.trim.lazy="form.password"
        @input="changePassword"
        :error="$v.form.password.$error ||  errors.hasOwnProperty('password') ||  errors"
      )
      nuxt-link.modal-login__link.color-blue(to="" @click.prevent.native="close()") {{content.forget}}
    button-primary.modal-login__btn.modal-login__btn_login(blue @click.prevent.native="login") {{content.login}}
</template>

<script>
import loginValidation from "@/mixins/auth/loginValidation";
import {mapActions} from "vuex";

export default {
  props: {
    content: {
      type: Object,
      default: {}
    }
  },
  mixins: [loginValidation],
  data() {
    return {
      errors: false,
      isPassword: true
    }
  },
  methods: {
    ...mapActions({
      ADD_CONVERSATION: 'chat/ADD_CONVERSATION',
      SET_USER_LOCATION:'location/SET_USER_LOCATION',
      SET_LOGIN_FAV_PRODUCTS: 'favourites/SET_LOGIN_FAV_PRODUCTS'

    }),
    changeEmail() {
      this.errors = false
      this.$v.form.confirmation_auth.$touch()
    },
    changePassword() {
      this.errors = false
      this.$v.form.password.$touch()
    },
    login() {
      this.$v.form.$touch()
      if (!this.$v.form.$error && !this.confirmation_authError) {
        localStorage.setItem('user', 0)
        this.$auth.loginWith('laravelSanctum', {data: this.form})
          .then((e) => {
            this.$auth.strategy.token.set(e.data.data.access_token);
            this.SET_LOGIN_FAV_PRODUCTS(this.$auth.user.favorites_ids)
            this.SET_USER_LOCATION(this.$auth.user)
            if (this.$route.path.search('auth')) {
              this.$router.push(this.$changeRoute('/'))
            }
            const message = localStorage.getItem('send_message')
            if (message) {
              this.ADD_CONVERSATION(JSON.parse(message));
              localStorage.removeItem('send_message')
            }
            const redirect = localStorage.getItem('auth.redirect')
            if (redirect) {
              this.$router.push(redirect)
            }
            this.errors = false
            this.$emit('close')
          })
          .catch(({response}) => this.errors = true)
      }
    },
    close() {
      this.$emit('close')
      this.$router.push('/auth/reset')
    }
  }
}
</script>

<template lang="pug">
  section-registration.reset-page(:title="PAGE_RESET.title" )
    .registration-form__desc.p.color-gray
      | {{ PAGE_RESET.description }}

    auth-email-phone(
      :error="$v.form.confirmation_auth.$error || confirmation_authError ||  errors.hasOwnProperty('email')||  errors.hasOwnProperty('phone')"
      @error="(val) => confirmation_authError = val"
      @input="changeConfirmAuth"
      :valid="$v.form.confirmation_auth.$dirty"
      :email="PAGE_RESET.email.email"
      :phoneText="PAGE_RESET.email.phone"
      :placeholder="PAGE_RESET.email.placeholder"
    )

    template(v-slot:bottom)
      button-primary.registration-form__btn(blue  @click.prevent.native="send") {{ PAGE_RESET.button }}
      .registration-form__question
        | {{ PAGE_RESET.text }}
        br
        a.link.color-blue(href="#" v-b-modal.modal-login) {{ PAGE_RESET.link }}


</template>

<script>
import {required} from "vuelidate/lib/validators";
import {mapActions, mapGetters} from "vuex";
import {isValidPhoneNumber, parsePhoneNumber} from "libphonenumber-js";
import getConstructorPage from "@/mixins/getConstructorPage";

export default {
  layout: 'default_small',
  middleware: ['ghost'],
  mixins: [getConstructorPage],
  data() {
    return {
      content: {
        title: 'Password recovery',
        description: 'Enter the email address you used when you joined and we’ll send you instructions to reset your password.',
        email: {
          label: 'Phone or mail',
          placeholder: 'Enter your phone number or email',
        },
        button: 'Send',
        text: 'Do you already have a profile?',
        link: 'Log in',
      },
      type: 'front_design',
      page_key: 'other-reset',
      form: {
        confirmation_auth: '',
        token: Math.floor(Math.random() * 10000000)
      },
      loading: false,
      confirmation_authError: false,
      errors: {},
    }
  },
  validations: {
    form: {
      confirmation_auth: {required},
    }
  },
  computed: {
    ...mapGetters({
      USER: 'user/USER',
      PAGE_RESET: 'pages/PAGE_RESET'
    })
  },
  created() {
    this.getPage()
  },
  methods: {
    ...mapActions({
      SET_USER: 'user/SET_USER',
      SET_PAGE_RESET: 'pages/SET_PAGE_RESET'
    }),
    getPage() {
      this.SET_PAGE_RESET(this.$i18n.locale)
    },
    changeConfirmAuth(val) {
      this.form.confirmation_auth = val
      this.$v.form.confirmation_auth.$touch()
    },
    send() {
      this.$v.form.$touch()
      if (!this.$v.form.$error && !this.confirmation_authError) {
        this.loading = true
        this.$axios.$post(this.$authApi.resetCode, this.form).then(({status}) => {
          if (status === 'Success') {
            this.errors = {}
            this.SET_USER(this.form)
            this.$router.push(`/auth/reset-password-confirm?token=${this.form.token}`)
          }
        }).catch(({response}) => this.errors = response.data.errors || {}).finally(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>

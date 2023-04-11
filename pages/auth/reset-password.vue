<template lang="pug">
  section-registration(:title="content.title")
    .registration-form__desc.p.color-gray
      | {{content.description}}

    .registration-form__field
      label.registration-form__label.p.b {{content.password.label}}
      form-input(
        :placeholder="content.password.placeholder"
        :icon="isPassword ? 'eyeHide' : 'eyeShow'"
        :type="isPassword ? 'password':'text'"
        @click="isPassword = !isPassword"
        v-model.trim.lazy="form.password"
        @input="recommendedPassword(form.password)"
        :error="$v.form.password.$error ||  ((errors.hasOwnProperty('password') && errors.password) || recommendedError)"
        :valid="$v.form.password.$dirty && !$v.form.password.$error"
      )
      .input-error-text.color-red.pt-2  {{  $v.form.password.$dirty ?  recommendedErrorText : '' }}
      recommended-password(
        :recommended="recommended"
        :recommendedType="recommendedType"
        :recommendedPasswordCount="recommendedPasswordCount"
      )
    .registration-form__field
      label.registration-form__label.p.b {{content.rePassword.label}}
      form-input(
        :placeholder="content.rePassword.placeholder"
        :icon="isPasswordConfirm ? 'eyeHide' : 'eyeShow'"
        :type="isPasswordConfirm ? 'password':'text'"
        @click="isPasswordConfirm = !isPasswordConfirm"
        v-model.trim.lazy="form.password_confirmation"
        @input="$v.form.password_confirmation.$touch()"
        :error="$v.form.password_confirmation.$error ||  errors.hasOwnProperty('password')"
        :valid="$v.form.password_confirmation.$dirty && !$v.form.password_confirmation.$error"
      )

    template(v-slot:bottom)
      button-primary.registration-form__btn(blue @click.prevent.native="reset") {{content.button}}
      .registration-form__question
        | {{content.text}}
        br
        a.link.color-blue(href="#" v-b-modal.modal-login ) {{content.link}}


</template>

<script>
import {minLength, sameAs, required} from "vuelidate/lib/validators";
import recommendedPassword from "@/mixins/auth/recommendedPassword";
import getConstructorPage from "@/mixins/getConstructorPage";

export default {
  layout: 'default_small',
  middleware: ['ghost'],
  data() {
    return {
      type: 'front_design',
      page_key: 'other-recovery',
      content: {
        title: 'Password recovery',
        description: 'Enter your phone number or email',
        password: {
          label: 'New password',
          placeholder: 'Enter the password',
        },
        rePassword: {
          label: 'Repeat the password',
          placeholder: 'Enter the password',
        },
        button: 'Send',
        text: 'Do you already have a profile?',
        link: 'Log in',
      },
      form: {
        password: '',
        password_confirmation: '',
      },
      errors: {},
      isPassword: true,
      isPasswordConfirm: true,
    }
  },
  mixins: [recommendedPassword,getConstructorPage],
  validations: {
    form: {
      password: {required, minLength: minLength(8)},
      password_confirmation: {sameAsPassword: sameAs('password')}
    }
  },
  mounted() {
    const token = localStorage.getItem('reset-token')
    if (!token || token === '0') this.$goRegister()
  },
  methods: {
    reset() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        const token = localStorage.getItem('reset-token')
        this.$axios.setToken(token, 'Bearer')
        this.$axios.$put(this.$authApi.resetPassword, this.form).then(res => {
          if (res.status === 'Success') {
            localStorage.setItem('reset-token', 0)
            this.$axios.setToken(false)
            this.$router.push('/')
          }
        })
      }
    }
  }
}
</script>

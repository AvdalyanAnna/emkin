<template lang="pug">
  .edit-field.settings__field
    .edit-field___wrap(v-if="edit")
      .edit-field__row
        .edit-field__column.edit-field__column_left
          .edit-field__label.color-gray.p  {{content.currentPassword.label}}
        .edit-field__column.edit-field__column_center
          form-input(
            v-model="form.current_password"
            :placeholder="content.currentPassword.placeholder"
            @click="isPassword1 = !isPassword1"
            @input="changePasswordCorrent"
            :icon="isPassword1 ? 'eyeHide' : 'eyeShow' "
            :type="isPassword1 ? 'password':'text'"
            :error="current_password_error || $v.form.current_password.$error  "
            :valid="!current_password_error && $v.form.current_password.$dirty && !$v.form.current_password.$error"
          )

        .edit-field__column.edit-field__column_right
          .edit-field__nav
            .edit-field__nav-item
              .edit-field__link.color-gray(@click="closeEdit")
                svg-icon.edit-field__icon.edit-field__icon-close(name="close")
            .edit-field__nav-item
              .edit-field__link.color-blue(@click="saveEdit")
                svg-icon.edit-field__icon.edit-field__icon-checked(name="check")
      .edit-field__row
        .edit-field__column.edit-field__column_left
          .edit-field__label.color-gray.p {{ content.password.label}}
        .edit-field__column.edit-field__column_center
          form-input.pb-4(
            v-model="form.password"
            :placeholder="content.password.placeholder"
            @click="isPassword2 = !isPassword2"
            @input="recommendedPassword(form.password)"
            :icon="isPassword2 ? 'eyeHide' : 'eyeShow' "
            :type="isPassword2 ? 'password':'text'"
            :error="current_password_error || $v.form.password.$dirty && ($v.form.password.$error || recommendedError) "
            :valid="!current_password_error && $v.form.password.$dirty && !$v.form.password.$error"
          )
          .input-error-text.color-red.pt-4.p {{  $v.form.password.$dirty ?  recommendedErrorText : '' }}
          recommended-password(
            class="pt-4 pb-2"
            :recommended="recommended"
            :recommendedType="recommendedType"
            :recommendedPasswordCount="recommendedPasswordCount"
          )
      .edit-field__row
        .edit-field__column.edit-field__column_left
          .edit-field__label.color-gray.p  {{ content.newPassword.label}}
        .edit-field__column.edit-field__column_center
          form-input(
            v-model="form.password_confirmation"
            :placeholder="content.newPassword.placeholder"
            @click="isPassword3 = !isPassword3"
            @input="$v.form.password_confirmation.$touch()"
            :error="current_password_error || $v.form.password_confirmation.$error"
            :valid="!current_password_error && $v.form.password_confirmation.$dirty && !$v.form.password_confirmation.$error"
            :icon="isPassword3 ? 'eyeHide' : 'eyeShow' "
            :type="isPassword3 ? 'password':'text'"
          )

    .edit-field__row(v-else)
      .edit-field__column.edit-field__column_left
        .edit-field__label.color-gray.p {{content.password.label}}
      .edit-field__column.edit-field__column_center
        .edit-field__placeholder.h4 ••••••••••
      .edit-field__column.edit-field__column_right
        .edit-field__nav.mobile-hidden
          .edit-field__nav-item
            .edit-field__link.color-blue(@click="showEdit")
              svg-icon.edit-field__icon(name="edit")
        .edit-field__nav.mobile-visible
          .edit-field__nav-item
            .edit-field__link.color-blue(@click="$bvModal.show(`fieldPassword`)")
              svg-icon.edit-field__icon(name="edit")
    modal-field(id="fieldPassword" title="Safety" @save="saveEdit")
      .modal-field__list
        .modal-field__item
          .modal-field__label {{content.currentPassword.label}}
          form-input.modal-field__input(
            v-model="form.current_password"
            :placeholder="content.currentPassword.placeholder"
            @click="isPassword1 = !isPassword1"
            @input="changePasswordCorrent"
            :icon="isPassword1 ? 'eyeHide' : 'eyeShow' "
            :type="isPassword1 ? 'password':'text'"
            :error="current_password_error || $v.form.current_password.$error  "
            :valid="!current_password_error && $v.form.current_password.$dirty && !$v.form.current_password.$error"
          )
        .modal-field__item
          .modal-field__label {{content.password.label}}
          form-input.modal-field__input(
            v-model="form.password"
            :placeholder="content.password.placeholder"
            @click="isPassword2 = !isPassword2"
            @input="recommendedPassword(form.password)"
            :icon="isPassword2 ? 'eyeHide' : 'eyeShow' "
            :type="isPassword2 ? 'password':'text'"
            :error="current_password_error || $v.form.password.$dirty && ($v.form.password.$error || recommended.lowerCaseLetters || recommended.upperCaseLetters || recommended.numbers || recommended.symbols) "
            :valid="!current_password_error && $v.form.password.$dirty && !$v.form.password.$error"
          )
        .modal-field__item
          .modal-field__label {{content.newPassword.label}}
          form-input.modal-field__input(
            v-model="form.password_confirmation"
            :placeholder="content.newPassword.placeholder"
            @click="isPassword3 = !isPassword3"
            @input="()=>{ this.$v.form.password_confirmation.$touch(); this.current_password_error = false }"
            :error="current_password_error || $v.form.password_confirmation.$error && $v.form.password_confirmation.$error && $v.form.password.$error"
            :valid="!current_password_error && $v.form.password_confirmation.$dirty && !$v.form.password_confirmation.$error "
            :icon="isPassword3 ? 'eyeHide' : 'eyeShow' "
            :type="isPassword3 ? 'password':'text'"
          )
    modal-thank
    modal-delete(title="Error" withOutBtn)
    modal-confirm(:info="form" :isShow="isShow" @reset="resetCode" @error="openErrorModal()" @success="closeEdit" )
</template>

<script>
import recommendedPassword from "@/mixins/auth/recommendedPassword";
import {minLength, required, sameAs} from "vuelidate/lib/validators";

export default {
  props: {
    content: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      edit: false,
      form: {
        current_password: '',
        password: '',
        password_confirmation: '',
      },
      current_password_error: false,
      isPassword1: true,
      isPassword2: true,
      isPassword3: true,
      isShow: false,
    }
  },
  mixins: [recommendedPassword],
  validations: {
    form: {
      current_password: {required, minLength: minLength(8)},
      password: {required, minLength: minLength(8)},
      password_confirmation: {required, sameAsPassword: sameAs('password')}
    }
  },
  watch: {
    form(val) {
    }
  },
  methods: {
    openErrorModal(){
      this.$bvModal.show(`modal-delete`)
    },
    changePasswordCorrent() {
      this.$v.form.current_password.$touch()
      this.current_password_error = false
    },
    showEdit() {
      this.edit = true;
    },
    closeEdit() {
      this.edit = false;
      this.$v.form.$reset()
      this.form = {
        current_password: '',
        password: '',
        password_confirmation: '',
      }
      this.isShow = false
    },
    resetCode() {
      if (!this.$v.form.$error && this.recommendedErrorCount === 5) {
        this.$axios.$post('/users/notifications/confirmation-send', {
          confirmation_auth: this.$auth.user.email || this.$auth.user.phone
        })
      }
    },
    saveEdit() {
      this.$v.form.$touch()
      if (!this.$v.form.$error && this.recommendedErrorCount === 5) {
        this.$axios.$post('/users/notifications/confirmation-send', {
          confirmation_auth: this.$auth.user.email || this.$auth.user.phone
        }).then(res => {
          this.isShow = true
          this.$root.$emit('bv::show::modal', 'modal-confirm')
        })
      }
    }
  }

}
</script>

<style scoped>

</style>

<template lang="pug">
  .edit-field.settings__field
    .edit-field__row
      .edit-field__column.edit-field__column_left
        .edit-field__label.color-gray.p {{content.email.label}}
      .edit-field__column.edit-field__column_center
        form-input(
          v-model="value"
          :value="value"
          :name="name"
          :placeholder="content.email.placeholder"
          :type="type"
          :error="!notError"
          v-if="edit"
        )
        .edit-field__placeholder.h4(v-else) {{value}}
      .edit-field__column.edit-field__column_right
        .edit-field__nav.mobile-hidden(v-if="edit")
          modal-confirm(
            :info="{confirmation_auth: this.value}"
            :isShow="isShow" :title="`Confirm your Email`"
            :repeatTime=repeatTime
            @reset="resetCode"
            @success="successEdit"
            changeUserInfo
          )
          .edit-field__nav-item
            .edit-field__link.color-gray(@click="closeEdit")
              svg-icon.edit-field__icon.edit-field__icon-close(name="close")
          .edit-field__nav-item
            .edit-field__link.color-blue(@click="closeSave")
              svg-icon.edit-field__icon.edit-field__icon-checked(name="check")
        .edit-field__nav.mobile-hidden(v-else)
          .edit-field__nav-item
            .edit-field__link.color-blue(@click="showEdit")
              svg-icon.edit-field__icon(name="edit")
        .edit-field__nav.mobile-visible
          .edit-field__nav-item
            .edit-field__link.color-blue(@click="$bvModal.show(`${modalName}`)")
              svg-icon.edit-field__icon(name="edit")
    modal-field(:id="modalName" title="Notifications" @save="closeSave" )
      .modal-field__list
        .modal-field__item
          .modal-field__label {{content.email.label}}
          form-input.modal-field__input(
            v-model="value"
            :name="name"
            :placeholder="content.email.placeholder"
            :type="type"
            :error="!notError"
          )
        modal-thank
        modal-confirm(
          :info="{confirmation_auth: this.value}"
          :isShow="isShow" :title="`Confirm your Email`"
          :repeatTime=repeatTime
          @reset="resetCode"
          @success="successEdit"
          changeUserInfo
        )
</template>

<script>
export default {
  props: {
    content:{
      type:Object,
      default: {}
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      placeholder: 'Bari56@mail.ru',
      value: this.$auth.user.email,
      type: "email",
      name: "email",
      modalName: 'email',
      notError: true,
      isShow: false,
      oldValue: this.$auth.user.email
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.notError = val.length > 2
        if (this.modalName === 'email') this.notError = this.$validateEmail(val)
        if (val === this.oldValue) this.notError = false
      }
    }
  },
  methods: {
    showEdit() {
      this.$emit('edit', true);
      this.notError = true;
      this.oldValue = this.value
    },
    closeEdit() {
      this.$emit('edit', false);
      this.value = this.oldValue
    },
    successEdit() {
      this.$emit('edit', false);
      this.$root.$emit('bv::hide::modal', 'modal-field')
    },
    resetCode() {
      this.sandCode()
    },
    closeSave() {
      let form = {}
      form[this.modalName] = this.value
      if (this.notError && this.value !== this.oldValue) {
        this.changeEmail({confirmation_auth: this.value})
      } else {
        this.notError = false
      }
    },
    changeEmail(info) {
      this.modalTitle = "Email"
      this.form = info
      this.sandCode()
    },
    sandCode() {
      this.isShow = true
      this.$axios.$put('users/settings/change/send-email-phone', this.form)
          .then(() => this.$root.$emit('bv::show::modal', 'modal-confirm'))
          .catch(() => this.notError = false)
    }
  }

}
</script>

<style scoped>

</style>

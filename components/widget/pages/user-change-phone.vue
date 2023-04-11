<template lang="pug">
  .edit-field.settings__field
    .edit-field__row
      .edit-field__column.edit-field__column_left
        .edit-field__label.color-gray.p {{content.phone.label}}
      .edit-field__column.edit-field__column_center
        .edit-field__placeholder.edit-field__column_center-phone
          form-select-lang.favorites-ad__select( :disabled="!edit" @search="searchPhones" @input="changeActivePhone" lang  :items="phone" v-model="activePhone" :value="activePhone" noBorder)
          .check-field__phone.edit-field__column_center-phone__text
            .check-field__phone-code {{activePhone.code}}
            input.check-field__phone-input(:placeholder="activePhone.phone" :disabled="!edit"  v-model="value" v-mask="activePhone.phone")

          //span.edit-field__column_center-phone__text {{value}} - 1
      .edit-field__column.edit-field__column_right
        .edit-field__nav.mobile-hidden(v-if="edit")
          modal-confirm(
            :info="{confirmation_auth: this.value}"
            :isShow="isShow" :title="`Confirm your Phone`"
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
    modal-field(:id="modalName" title="Notifications" )
      .modal-field__list
        .modal-field__item
          .modal-field__label {{content.phone.label}}
          form-input.modal-field__input(
            v-model="value"
            :name="name"
            :placeholder="content.phone.placeholder"
            :type="type"
            :error="!notError"
          )
        modal-confirm(
          :info="info"
          :isShow="isShow" :title="`Confirm your Phone`"
          :repeatTime=repeatTime
          @reset="resetCode"
          @success="successEdit"
          changeUserInfo
        )
        modal-thank
</template>

<script>
import {parsePhoneNumber, isValidPhoneNumber} from 'libphonenumber-js'
import phoneList from "@/misc/phone.json";

export default {
  props: {
    content: {
      type: Object,
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
      value: this.$auth.user.phone_view,
      type: "text",
      name: "phone",
      modalName: 'phone',
      notError: true,
      isShow: false,
      oldValue: this.$auth.user.phone_view,
      phone: phoneList,
      activePhone: phoneList[190],
      info:{
        confirmation_auth: this.value,
        phone_view:''
      }
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.notError = val.length > 2
        // if (!isValidPhoneNumber(val, 'US')) this.notError = false
        if (val === this.oldValue) this.notError = false
      }
    },
  },
  mounted() {
    this.getActivePhoneItem()
  },
  methods: {
    getActivePhoneItem() {
      if (this.oldValue) {
        let phone = this.oldValue.split(' ')
        for (let i = 0; i < phoneList.length; i++) {
        let str = this.phone[i].code.substring(1)
        let reg = new RegExp(str)
        if (reg.test(phone[0]) && phone[0].length === str.length) {
          this.activePhone = phoneList[i]
          this.value = phone[1]
          this.oldValue = phone[1]
        }
      }
      }
    },
    searchPhones(val) {
      if (val === '') {
        this.phone = phoneList
      } else {
        const phone = []
        this.phone.forEach(item => {
          const reg = new RegExp(val, 'gi');
          if (reg.test(item.name) || reg.test(item.code)) phone.push(item)
        })
        this.phone = phone
      }

    },
    changeActivePhone(val) {
      this.myInputModel = ''
      this.activePhone = val
    },
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
      form[this.modalName] = `${this.activePhone.code}-${this.value}`
      if (this.notError && this.value !== this.oldValue) {
        const confirmation_auth = parsePhoneNumber(`${this.activePhone.code} ${this.value}`).number.substring(1)
        this.info = {
          confirmation_auth: confirmation_auth,
          phone_view:`${this.activePhone.code} ${this.value}`
        }
        this.changePhone({confirmation_auth})
      } else {
        this.notError = false
      }
    },
    changePhone(info) {
      this.modalTitle = "Phone"
      this.form = info
      this.sandCode()
    },
    sandCode() {
      this.isShow = true
      this.$axios.$put('users/settings/change/send-email-phone', this.form)
          .then(res => {
            this.$root.$emit('bv::show::modal', 'modal-confirm')
          }).catch(res => {
        this.notError = false
      })
    }
  }

}
</script>

<style lang="scss">
.edit-field__column_right{
  z-index: 999;
}


.edit-field__column_center-phone {
  position: relative;
  overflow: visible !important;
  padding-left: 48px !important;
  input:disabled{
    background: #fff;
  }
  .lang-title {
    max-width: 115px !important;
  }
  &__text {
    margin-left: 15px;
  }
}

.settings{
  .edit-field__column_center-phone__text{
    margin-left: 15px;
  }
}
</style>

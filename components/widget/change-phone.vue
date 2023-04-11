<template lang="pug">
  .edit-field__column(:class="[{isBorder:true},{error:error || isError}]")
    .edit-field__placeholder.edit-field__column_center-phone
      form-select-lang.favorites-ad__select(  @search="searchPhones" @input="changeActivePhone" lang  :items="phone" v-model="activePhone" :value="activePhone" noBorder)
      .check-field__phone.edit-field__column_center-phone__text
        .check-field__phone-code {{activePhone.code}}
        input.check-field__phone-input(:placeholder="activePhone.phone"    v-model="value" v-mask="activePhone.phone")
</template>

<script>
import {parsePhoneNumber, isValidPhoneNumber} from 'libphonenumber-js'
import phoneList from "@/misc/phone.json";

export default {
  props: {
    border: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    phoneNumber: {
      type: String,
      default: false
    }
  },
  data() {
    return {
      value: this.phoneNumber || this.$auth.user.phone_view,
      error: false,
      isShow: false,
      oldValue: this.phoneNumber || this.$auth.user.phone_view,
      phone: phoneList,
      activePhone: phoneList[190],
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.error =  this.activePhone.phone.length !== val.length
        this.$emit('input', `${this.activePhone.code} ${val}`)
        this.$emit('error', this.activePhone.phone.length === val.length)
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
            this.value = this.phoneNumber.substring(str.length + 1) || this.$auth.user.phone_view.substring(str.length + 1)
            this.oldValue = this.phoneNumber.substring(str.length + 1) || this.$auth.user.phone_view.substring(str.length + 1)
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
  }

}
</script>

<style lang="scss">
.isBorder {
  border: 1px solid #D2D2D7;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 10rem;

  .edit-field__column_center-phone {
    width: 100%;
  }

  .lang-select .select__body {
    left: -22px;
  }
}
.isBorder.error{
  border-color: $red;
}

.edit-field__column_right {
  z-index: 999;
}

.edit-field__column_center-phone {
  position: relative;
  overflow: visible !important;

  input:disabled {
    background: #fff;
  }

  .lang-title {
    max-width: 115px !important;
  }

  &__text {
    margin-left: 58px;
    @include large-mobile{
      margin-left: 0 !important;
      padding-left: 0;
    }
  }
}
</style>
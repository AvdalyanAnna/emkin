<template lang="pug">
  b-modal(
    id="modal-create3"
    size="create-size"
    modal-class="modal-create"
    body-class="modal-create__body"
    header-class="modal-create__header"
    footer-class="modal-create__footer"
    centered
    @show="openModal"
  )

    template(#modal-header='{ close }')
      button-close.modal__close.modal__close-header(@click.native='close()')
    form.form-create( v-if="category")
      .form-create__fields
        .form-create__field.form-create__field_first
          .form-create__column.form-create__column_left
            .form-create__label.form-create__label_mobile.h4 {{content.mainCategory.title}}
          .form-create__column.form-create__column_right
            button-category.form-create__category(
              :img="category.picture?category.picture.original_full_url:''"
              :text="category.name"
              :editText="content.mainCategory.edit"
              edit
              v-b-modal.modal-create
            )
          .form-create__column.form-create__column_left
          .form-create__column.form-create__column_right
            .form-create__nav.flex.flex_justify
              .form-create__breadcrumbs.color-blue.p
                span.form-create__breadcrumbs-item(v-for="(item,index) in breadcrumbs" :key="index") {{item.name}}
              button-link-arrow.form-create__link-all(@click.prevent.native="$emit('openModalCategory')") {{content.mainCategory.all}}
        .form-create__field(v-for="(item,index) in filters" :key="index")
          .form-create__column.form-create__column_left
            .form-create__label.h4 {{item.name}}
            .form-create__text.p.color-gray   {{content.mainCategory.recommended}}
          .form-create__column.form-create__column_right
            form-select-filter.form-create__select(:value="answers[index]" v-model="answers[index]" @input="(val)=>changeAnswers(val,index)"  :items="item.answers" default)
        .form-create__field
          .form-create__column.form-create__column_left
            .form-create__label.h4 {{content.mainCategory.link.label}}
          .form-create__column.form-create__column_right
            form-input.form-create__input(
              :placeholder="content.mainCategory.link.placeholder"
              name="YoutubeLink"
              type="url"
              v-model="form.link"
              @input=" getId()"
              :error="$v.form.link.$error && !link"
            )
        .form-create__field(v-if="!$v.form.link.$error && link ")
          iframe(
            class="form-create-youTube"
            :src="`https://www.youtube.com/embed/${link}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          )
        .form-create__field
          .form-create__column.form-create__column_left
            .form-create__label.h4 {{content.mainCategory.address.label}}
          .form-create__column.form-create__column_right
            form-select-city(:key="openModalKey" :selectText="content.mainCategory.selected" :value="city" :error="cityError" @input="changeCity")
        .form-create__field(v-if="city")
          form-input.form-create__input.w-100(
            :placeholder="content.mainCategory.address.placeholder"
            :key="keyAddress"
            name="link"
            type="type"
            v-model="address"
            @keyup="getCoordinates()"
            @input="$v.form.address.$touch()"
            :error="$v.form.address.$error || addressErrorGoogle"
          )
          .form-create__field-map
            google-map(draggable @changeLocation="changeLocation" :lat="city.latitude" :lng="city.longitude")

        .form-create__field
          .form-create__column.form-create__column_left
            .form-create__label.h4 {{content.mainCategory.phone.label}}
          .form-create__column.form-create__column_right(v-if="form.contacts !== 2")
            change-phone(v-if="form.contacts !== 2" @input="(val) =>form.contact_phone = val" :isError="phoneError" :phoneNumber="form.contact_phone" @error="changePhoneError")
          .form-create__column.form-create__column_left(v-if="form.contacts !== 2")
          .form-create__column.form-create__column_right
            .form-create__checkboxes.flex(:class="{'pt-0':form.contacts === 2}")
              form-checkbox.form-create__checkbox(
                :checked="form.contacts === item.status"
                @change="changePhoneStatus(item.status)"
                v-for="(item,index) in content.mainCategory.phone.list"
                :key="index"
                v-tippy="{content:`<div class='form-create__column-tippy'>${item.info}</div>`,placement:'bottom-start'}"
              )
                .p.color-gray {{item.text}}
        .form-create__field
          .form-create__column.form-create__column_left
            .form-create__label.h4 {{content.mainCategory.renewal.label}}
          .form-create__column.form-create__column_right
            form-radio-switch(:checked="form.auto_renewal"  v-tippy="{content:`<div class='form-create__column-tippy'>${content.mainCategory.renewal.info}</div>`,placement:'bottom-end'}"  @change="form.auto_renewal = form.auto_renewal === 0 ? 1 : 0") {{content.mainCategory.renewal.placeholder}}
          .form-create__column.form-create__column_left
          .form-create__column.form-create__column_right
      .form-create__bottom.flex.flex_vertical.flex_justify
    template(#modal-footer='{ close }')
      //button-close.modal__close.modal__close_footer(@click.native='close()')
      .modal-create__footer-row(v-if="errorArray")
        .alert-error.w-100(v-for="(item,key) in Object.values(errorArray)" :key="key") {{item[0]}}
      .modal-create__footer-row.flex.flex_justify
        button-primary.modal-create__cancel.modal-create__cancel_desktop(border @click.native='close()') {{content.mainCategory.buttons.cancel}}
        .modal-create__footer-buttons.flex
          button-primary.modal-create__footer-btn(gray  :loading="loadingDraft" @click.native="addProduct(5)") {{content.mainCategory.buttons.draft}}
          button-primary.modal-create__footer-btn(blue :loading="loading"  @click.native="addProduct()") {{content.mainCategory.buttons.save}}
</template>

<script>
import {url, requiredIf} from "vuelidate/lib/validators";
import {getIdFromUrl} from 'vue-youtube'

export default {
  props: {
    originForm: {
      type: Object,
      default: {}
    },
    originAnswers: {
      type: Array,
      default: {}
    },
    content: {
      type: Object,
      default: {}
    },
    category: {
      type: Object,
      default: {}
    },
    getCity: {
      type: Object,
      default: null
    },
    breadcrumbs: {
      type: Array,
      default: []
    },
    addressError: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingDraft: {
      type: Boolean,
      default: false
    },
    errorArray: {
      type: [Object, Array],
      default: (() => null)
    }
  },
  data() {
    return {
      openModalKey: 0,
      cityError: false,
      phoneError: false,
      addressErrorGoogle: false,
      filters: [],
      answers: this.originAnswers,
      address: '',
      city: this.getCity,
      form: this.originForm,
      keyAddress: 0
    }
  },
  computed: {
    link() {
      if (this.form.link === '' || this.form.link === undefined) return false
      else return getIdFromUrl(this.form.link)
    }
  },
  validations: {
    form: {
      link: {url},
      address: {
        required: requiredIf(function () {
          return this.city && this.city.id
        }),
      },
    }
  },
  watch: {
    async address(val) {
      this.form.address = val
    },

    async category() {
      await this.getCategories()
    },
  },
  methods: {
    async getCategories() {
      const filterField = `filter=id;name;order`
      const withField = `with=answers`
      const order = `orderBy=order&sortedBy=desc`
      await this.$axios.$get(`${this.$api.filters}?category_id=${this.category.id}&${order}`)
        .then(({data}) => {
          this.filters = data
          this.answers = []
          this.form.answers = []
          this.filters.forEach(item => {
            this.answers.push(item.answers[0].name)
            this.form.answers.push(item.answers[0].id)
          })
        })
    },
    getId() {
      this.$v.form.link.$touch()
    },
    changePhoneStatus(status) {
      this.form.contacts = status
      if (status === 2) this.phoneError = false
    },
    changeLocation({latitude, longitude, address}) {
      this.form.latitude = latitude
      this.form.longitude = longitude
      this.form.address = address
      this.address = address
      this.keyAddress++
      this.addressErrorGoogle = false
    },
    changePhoneError(val) {
      this.phoneError = !val
    },
    async getCoordinates() {
      try {
        if (this.address !== '') {
          this.addressErrorGoogle = false
          const activeCity = `${this.city.name} ${this.city.state_minimal_select.name}`
          const key = 'AIzaSyAfzsHDpPK39W0RJ2hKQ234fq6bD3w-G3E'
          const response = await this.$axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${activeCity} ${this.address}&key=${key}`)
          const {lat, lng} = response.data.results[0].geometry.location
          this.city.latitude = lat
          this.city.longitude = lng
        }
      } catch (error) {
        this.addressErrorGoogle = true
      }
    },
    changeCity(val) {
      this.cityError = false
      this.address = ''
      this.form.address = ''
      this.city = val
      this.form.city_id = val.id || 1
      this.form.latitude = val.latitude
      this.form.longitude = val.longitude
      this.keyAddress++
    },
    hasAddress(val) {
      this.$axios.get(`https://nominatim.openstreetmap.org/search?q=${val}&format=json`)
        .then(res => {
          if (res.data.length > 0) {
            this.$emit('addressError', false)
            const {lat, lon} = res.data[0]
            this.form.latitude = lat
            this.form.longitude = lon
            this.$axios.$get(`/check-city?latitude=${lat}&longitude=${lon}`)
              .then(({data: {city}}) => {
                if (city) {
                  this.form.city_id = city.id || 1
                } else this.$emit('addressError', true)
              })
          } else {
            this.$emit('addressError', true)
          }
        })
    },
    changeAnswers(val, index) {
      this.answers[index] = val
      this.form.answers[index] = val.id
    },
    openModal() {
      this.$v.form.$reset()
      this.address = this.originForm.address
      this.form = this.originForm
      const order = `orderBy=order&sortedBy=desc`
      this.$axios.$get(`${this.$api.filters}?category_id=${this.category.id}&${order}`)
        .then(({data}) => {
          this.filters = []
          this.answers = []
          if (this.originAnswers.length > 0) {
            this.originAnswers.forEach((elem) => {
              data.forEach(item => {
                const index = item.answers.find(i => elem.id === i.id)
                if (index) {
                  this.answers.push(index)
                  this.filters.push(item)
                }
              })
            })
          } else {
            this.filters = data
            this.filters.forEach(item => this.answers.push(item.answers[0]))
          }
        })
      this.openModalKey++
    },
    addProduct(status = 0) {
      this.$v.form.$touch()
      if (this.form.contacts !== 2 && this.form.contact_phone.length === 0) this.phoneError = true
      if (!this.city) this.cityError = true
      if (!this.$v.form.$error && !this.addressError && !this.addressErrorGoogle && !this.phoneError && !this.cityError) {
        const form = {
          ...this.form,
          status
        }
        this.$emit('close', form)
      }
    },
  }
}
</script>

<style lang="scss">
@import '~/assets/сss/components/modal-create.scss';

.modal__close-header {
  @include large-mobile {
    display: flex !important;
  }
}

.form-create {
  &__field {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &:not(:first-child) {
      margin-top: 40rem;
    }

    @include large-mobile {
      display: block;
      &:not(:first-child) {
        margin-top: 20rem;
      }
      &_first {
        padding-bottom: 20rem;
        border-bottom: 1px solid $light-gray;
      }
    }
  }

  &__column {
    &_left {
      width: 33.75%
    }

    &_right {
      width: 66.25%;
    }

    @include large-mobile {
      width: 100%;
    }
  }

  &__nav {
    margin-top: 23rem;

    @include large-mobile {
      margin-top: 30rem;
    }
  }

  &__breadcrumbs {
    line-height: 1;

    &-item {
      &:not(:first-child) {
        &:before {
          content: ' / '
        }
      }
    }

    @include large-mobile {
      font-size: 16rem;
      width: 100%;
    }
  }

  &__link-all {
    @include large-mobile {
      margin-top: 17rem;
    }
  }

  &__label {
    font-family: 'Gilroy';
    font-weight: 600;
    @include large-mobile {
      font-size: 16rem;
      &_mobile {
        font-size: 20rem;
      }
    }
  }

  &__text {
    margin-top: 8rem;
    line-height: 1;

    @include large-mobile {
      margin-top: 5rem;
    }
  }

  &__select {
    @include large-mobile {
      margin-top: 15rem;
    }
  }

  &__input {
    @include large-mobile {
      margin-top: 10rem;
    }
  }

  &__checkboxes {
    padding-top: 20rem;
    @include large-mobile {
      padding-top: 5rem;
    }
  }

  &__checkbox {
    margin-right: 30rem;
    margin-top: 10rem;

    &:last-child {
      margin-right: 0;
    }

    @include large-mobile {
      margin-top: 15rem;
      margin-right: 0;
      width: 100%;
    }
  }

  &__category {
    @include large-mobile {
      margin-top: 20rem;
    }
  }
}

.form-create__field-map {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-top: 28px;

  #map {
    height: inherit;
  }
}

.form-create__column-tippy {
  max-width: 150px;
  width: 100%;
  text-align: left;
}

.form-create-youTube {
  width: 100%;
  height: 400px;
  border-radius: 10px;
}
</style>

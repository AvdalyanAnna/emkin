<template lang="pug">
  section-registration.done-page(
    v-if="PAGE_REGISTER_DONE"
    :title="`${PAGE_REGISTER_DONE.welcome} ${ $auth.user.first_name}! ${PAGE_REGISTER_DONE.welcome2}`"
    ref="registrationForm"
    :img="{left:'done1.png',right:'done2.png'}"
  )
    .registration-form__desc.p.color-gray
      | {{PAGE_REGISTER_DONE.desc}}
    modal-avatar-user(:img="img" @change="changeAvatar")
    module-add-avatar.registration-form__add-avatar(
      :img="img"
      :error="errorFile"
      @click.native.prevent="$bvModal.show('modal-avatar-user')"
      :title="PAGE_REGISTER_DONE.avatar.title"
      name="file-no-go"
    )
      | {{PAGE_REGISTER_DONE.avatar.desc}}
    input(type="hidden" name="_method" value="PUT")
    .alert-error(v-if="error") {{error[0]}}
    .registration-form__field
      label.registration-form__label.p.b {{PAGE_REGISTER_DONE.where}}
      form-input.no-disabled(:value="LOCATION ? LOCATION.name :  POPUP_LOCAL.title" @click.prevent.native="openLocationModal" :error="cityError" disabled name="first_name")
        .input__edit.p.color-blue(v-b-modal.modal-location) {{PAGE_REGISTER_DONE.edit}}

    form-checkbox.registration-form__checkbox(
      :checked="form.remember"
      :class="{error:$v.form.remember.$error }"
      @change="form.remember = !form.remember"
      @input="$v.form.remember.$touch()"
      :error="$v.form.remember.$error"
    ) {{PAGE_REGISTER_DONE.checkbox}}

    template(v-slot:bottom)
      .registration-form__buttons.flex.flex_justify
        button-primary.registration-form__btn(gray @click.prevent.native="skip") {{PAGE_REGISTER_DONE.skip}}
        button-primary.registration-form__btn(blue @click.prevent.native="next" :loading="loadingBtn") {{PAGE_REGISTER_DONE.next}}

</template>

<script>
import registrationDone from "@/mixins/auth/registrationDone";
import {mapActions, mapGetters} from "vuex";

export default {
  layout: 'default_small',
  data() {
    return {
      img: '',
      loadingBtn: false,
      error: null,
      cityError: null,
      errorFile: false,
      blob: ''
    }
  },
  middleware: ['auth'],
  mixins: [registrationDone],
  mounted() {
    this.sendFavorite()
  },
  watch: {
    LOCATION() {
      this.cityError = false
    }
  },
  computed: {
    ...mapGetters({
      FAVOURITES: 'favourites/FAVOURITES',
      POPUP_LOCAL: 'popup/POPUP_LOCAL',
      LOCATION: 'location/LOCATION',
      PAGE_REGISTER_DONE: 'pages/PAGE_REGISTER_DONE'
    })
  },
  created() {
    this.getPage()
  },
  methods: {
    ...mapActions({
      SET_ADD_FAVOURITE: 'favourites/SET_ADD_FAVOURITE',
      SET_PAGE_DONE: 'pages/SET_PAGE_DONE'
    }),
    openLocationModal(){
      this.$bvModal.show('modal-location')
    },
    changeAvatar(val) {
      this.errorFile = null
      let urlCreator = window.URL || window.webkitURL;
      this.img = urlCreator.createObjectURL(val);
      this.blob = val
    },
    getPage() {
      this.SET_PAGE_DONE(this.$i18n.locale)
    },
    next() {
      this.$v.form.$touch()
      if (this.blob === '') {
        this.errorFile = true
      }
      if (  !this.LOCATION) this.cityError = true
      if (!this.$v.form.$error && this.blob !== '' && !this.errorFile && !this.loadingBtn && !this.cityError) {
        this.loadingBtn = true
        const form = new FormData(this.$refs.registrationForm.$el.querySelector('form'))
        form.append(
            "file",
            this.blob,
            "myImageName.png"
        );
        this.$axios.$post(this.$authApi.settings, form)
            .then(() => {
              this.error = false
              this.$auth.fetchUser().catch(() => this.$auth.logout());
              this.$router.push(this.$changeRoute('/announcements'))
            })
            .catch(({response}) => this.error = response.data.errors.file)
            .finally(() => this.loadingBtn = false)
      }
    },
    skip() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.$router.push(this.$changeRoute('/announcements'))
      }
    },
    sendFavorite() {
      this.SET_ADD_FAVOURITE({id: null, to: null, auth: this.$auth.loggedIn})
    }
  }
}
</script>


<style lang="scss">
.no-disabled {
  input:disabled {
    border: 1px solid $light-gray;
    background: #fff;
    color: #062439;

    &::placeholder {
      color: #062439;
    }

    &.input_error {
      border: 1px solid $red;
    }
  }
}

.registration {
  .alert-error {
    margin-top: 20px;
  }
}
</style>

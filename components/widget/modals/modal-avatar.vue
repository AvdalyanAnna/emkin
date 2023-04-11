<template lang="pug">
  b-modal(
    id="modal-avatar"
    ref="modal-avatar"
    size="photo-size"
    modal-class="modal-avatar"
    body-class="modal-avatar__body"
    header-class="modal-avatar__header"
    footer-class="modal-avatar__footer"
    @hide="closeModal"
    @show="openModal"
    centered
  )

    template(#modal-header='{ close }')
      button-close.modal__close(@click.native='close()')
    h3.modal-avatar__title.h3 {{ POPUP_AVATAR.title }}
    p.alert-error(v-if="errorText && error" ) {{errorText}}
    form(ref="send-form" id="send-form" )
      cropper.add-avatar__btn-full(v-if="!flag" stencil-component="circle-stencil" ref="cropper" class="example-cropper" :src="img")
      input(type="hidden" name="_method" value="PUT")
      button-photo.add-avatar__btn-full(v-if="flag" :img="img" :error="error" :name="name" @change="changeImg")
    template(#modal-footer='{ close }')
      .modal-avatar__buttons.flex
        div
        button-primary.modal-avatar__btn(small gray @click.native='closeModal()') {{POPUP_GLOBAL.close}}
        button-primary.modal-avatar__btn(small blue :loading="loading" @click.native='save()') {{POPUP_GLOBAL.save}}
</template>
<script>
import {Cropper, CircleStencil} from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    Cropper, CircleStencil
  },
  props: {
    title: {
      type: String,
      default: 'Change Profile Picture'
    },
    user: {
      type: String,
      default: 'Alexandr'
    },
    avatar: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      img: this.$auth.user.avatar ? this.$auth.user.avatar.original_full_url : '',
      name: 'file',
      error: false,
      errorText: '',
      flag: true,
      loading: false
    }
  },
  async created() {
    await this.getPage()
  },
  watch:{
    async '$i18n.locale'(val){
      await this.getPage()
    },
  },
  computed: {
    ...mapGetters({
      POPUP_GLOBAL: 'popup/POPUP_GLOBAL',
      POPUP_AVATAR: 'popup/POPUP_AVATAR',
    })
  },
  methods: {
    ...mapActions({
      SET_POPUP_GLOBAL: 'popup/SET_POPUP_GLOBAL',
      SET_POPUP_AVATAR: 'popup/SET_POPUP_AVATAR',
    }),
    async getPage() {
      let locale = this.$i18n.locale
      await this.SET_POPUP_GLOBAL(locale)
      await this.SET_POPUP_AVATAR(locale)
    },
    openModal(){
      this.img=this.avatar
      this.flag = true
    },
    closeModal() {
      this.img = ''
      this.$refs['modal-avatar'].hide();
      this.error = false
      this.errorText = ''
    },
    changeImg(val) {
      this.error = false
      this.errorText = ''
      this.flag = false
      this.img = val
      // const result = this.$refs.cropper.getResult();
      // console.log(result)
      // console.log(this.$refs.cropper)
      // const newTab = window.open();
      // // for testing open the result in a new tab
      // newTab.document.body.innerHTML = `<img src="${result.canvas.toDataURL(
      //     "image/jpeg"
      // )}"></img>`;
    },
    save() {
      if (this.img !== '' && !this.loading) {
        this.loading = true;
        const {canvas} = this.$refs.cropper.getResult();
        if (canvas) {
          const formData = new FormData();
          canvas.toBlob(async blob => {
            formData.append(
                "file",
                blob,
                "myImageName.png"
            );
            formData.append("path", "/theKoiIsAwesome");
            formData.append("_method", "PUT");
            this.$axios.$post('/users/settings', formData).then((res) => {
              this.$auth.fetchUser().catch(() => this.$auth.logout());
              this.closeModal()
            }).catch(({response:{data:{errors}}}) => {
              this.error = true
              this.errorText = errors.file[0]
            }).finally(() => {
              this.loading = false
            })
          }, "image/png");
        }
      } else {
        this.error = true
      }
    }
  }
}
</script>


<style lang="scss">
.modal-avatar {
  .modal-dialog {
    max-width: 737px;
    width: 100%;
  }

  &__buttons {
    @include items(3, 5);
  }

  .button-photo__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    max-width: 100%;
    img {
      max-height: 100%;
    }
  }

  &__footer {
    padding: 0;
    margin-top: 20rem;
    display: block;
    border: none;
  }

  .add-avatar__btn-full {
    margin: 24rem 0 20rem;
    height: 550px;
    border-radius: 16px;
    width: 100%;
    overflow: hidden;

    .vue-advanced-cropper__foreground {
      opacity: 0.2;
    }

    .button-photo__wrap {
      border-radius: 16px;
      border-width: 2px;

      svg {
        width: 56px;
        height: 56px;
      }


    }
  }
}
.modal-avatar .alert-error{
  margin-top: 20px;
}
</style>

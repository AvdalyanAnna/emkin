<template lang="pug">
  b-modal(
    id="modal-languages"
    ref="modal-languages"
    size="languages"
    modal-class="modal-languages"
    body-class="modal-languages__body"
    header-class="modal-languages__header"
    footer-class="modal-languages__footer"
    @hide="closeModal"
  @show="openModal"
    centered
  )

    template(#modal-header='{ close }')
      button-close.modal__close(@click.native='closeModal()')
    h3.modal-languages__title.h3 {{ POPUP_LANG.title }}
    .modal-languages__info
      .modal-languages__info-left
        .modal-languages__info-title {{ POPUP_LANG.subTitle }}
        .modal-languages__info-desc {{ POPUP_LANG.desc }}
      .modal-languages__info-right
        form-radio-switch(:checked="translateGoogle" @change="changeTranslate")

    .modal-languages__list.flex
      .modal-languages__item(
        v-for="item in $i18n.locales"
        :key="item.id"
        :class="{active: item.code === lang}"
        @click="changeLanguage(item.code)"
      )
        .modal-languages__lang {{item.name}}
        .modal-languages__lang-small {{item.native}}
    template(#modal-footer='{ close }')
      .modal-languages__buttons.flex
        div
        div
        button-primary.modal-languages__btn(small blue @click.native='save()') {{POPUP_GLOBAL.save}}

</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: 'Language and region'
    },
  },
  data() {
    return {
      translateGoogle: +localStorage.getItem('translate') || 0,
      lang: this.$i18n.locale,
    }
  },
  computed: {
    ...mapGetters({
      POPUP_GLOBAL: 'popup/POPUP_GLOBAL',
      POPUP_LANG: 'popup/POPUP_LANG'
    })
  },
  watch: {
    '$i18n.locale'(val) {
      this.SET_POPUP_LANG(this.$i18n.locale)
    },
  },
  methods: {
    ...mapActions({
      SET_TRANSLATE: 'user/SET_TRANSLATE',
      SET_POPUP_LANG: 'popup/SET_POPUP_LANG',
    }),
    openModal() {
      this.SET_POPUP_LANG(this.$i18n.locale)
    },
    changeLanguage(code) {
      this.lang = code
    },
    changeTranslate() {
      this.translateGoogle = !this.translateGoogle ? 1 : 0
    },
    closeModal() {
      this.translateGoogle = +localStorage.getItem('translate') || 0
      this.$refs['modal-languages'].hide();
    },
    save() {
      this.SET_TRANSLATE(this.translateGoogle)
      this.$i18n.setLocale(this.lang)
      this.$refs['modal-languages'].hide();
    },
  }
}
</script>
<style lang="scss">
.modal-languages {
  padding: 0;

  &.modal-dialog {
    max-width: 632px;
    width: 100%;
  }

  .modal-content {
    padding: 50rem;
    @include large-mobile {
      padding: 30rem 20rem;
    }
  }

  .modal__close {
    width: 34rem;
    height: 34rem;
  }

  &__title {
    font-weight: 500;
    font-family: 'Atyp Display';
  }

  &__footer {
    padding: 0;
    border: 0;
    margin-top: 20rem;
    display: block;
  }


  &__buttons {
    @include items(3, 1);
  }

  &__info {
    background: #F4F3F4;
    border-radius: 10rem;
    padding: 18rem 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 22rem 0 25rem;

    &-title {
      font-weight: 600;
      font-size: 17rem;
      line-height: 100%;
      color: $default;
      margin-bottom: 7rem;
    }

    &-desc {
      font-weight: 500;
      font-size: 14px;
      line-height: 100%;
      color: $gray;
    }

  }

  &__list {
    @include items(3, 8);
    @include large-mobile {
      @include items(2, 4);

    }
  }

  &__item {
    padding: 20px;
    border: 1px solid #F4F3F4;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    @include large-mobile {
      padding: 14px;
    }

    &:hover,
    &.active {
      border-color: #556DEE;
    }
  }

  &__lang {
    font-weight: 600;
    font-size: 17rem;
    line-height: 100%;
    color: #062439;
    margin-bottom: 5rem;

    &-small {
      font-weight: 500;
      font-size: 14rem;
      line-height: 70%;
      color: #6E6E73;
    }
  }
}
</style>

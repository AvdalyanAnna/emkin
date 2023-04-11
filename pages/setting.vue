<template lang="pug">
  main.main
    section-settings(:title="PAGE_SETTINGS.title" :nav="PAGE_SETTINGS.nav" )
      .settings__list
        .settings__item
          .settings__item-title.h3 {{PAGE_SETTINGS.username}}
            part-edit-field.settings__field(
              v-for="(field, i) in fields"
              :key="i"
              :label="field.label"
              v-model="field.value"
              :name="field.name"
              :type="field.type"
              :placeholder="field.placeholder"
              :modalName="field.modalName"
              :groupName="field.groupName"
              v-if="!field.option"
              :editText="PAGE_SETTINGS.edit"
              :saveText="PAGE_SETTINGS.save"
              :cancelText="PAGE_SETTINGS.cancel"
            )
        .settings__item
          .settings__item-title.h3 {{PAGE_SETTINGS.notifications}}
          user-change-email(:content="PAGE_SETTINGS"  :edit="changeEmail" @edit="(val)=>changeEmail=val")
          user-change-phone(:content="PAGE_SETTINGS"  :edit="changePhone" @edit="(val)=>changePhone=val")
        .settings__item
          .settings__item-title.h3 {{PAGE_SETTINGS.language}}
          part-edit-select.settings__field(
            v-for="(field, i) in langFields"
            :key="i"
            :label="field.label"
            :value="field.value"
            :name="field.name"
            :type="field.type"
            :topPosition="field.topPosition"
            :placeholder="field.placeholder"
            :modalName="field.modalName"
            :groupName="field.groupName"
            :items="getCode($i18n.locales)"
            v-if="field.option === 'select'"
            :editText="PAGE_SETTINGS.edit"
            :saveText="PAGE_SETTINGS.save"
            :cancelText="PAGE_SETTINGS.cancel"
          )
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import pageTranslate from "@/mixins/pageTranslate";

export default {
  layout: 'back',
  data() {
    return {
      type: 'back_design',
      page_key: 'settings',
      changeEmail: false,
      changePhone: false,
    }
  },
  mixins: [pageTranslate],
  computed: {
    fields() {
      return [
        {
          groupName: 'Username',
          label: this.PAGE_SETTINGS.fName.label,
          placeholder: this.PAGE_SETTINGS.fName.placeholder,
          value: this.$auth.user.first_name,
          modalName: 'first_name'
        },
        {
          groupName: 'Username',
          label: this.PAGE_SETTINGS.lName.label,
          placeholder: this.PAGE_SETTINGS.lName.placeholder,
          value: this.$auth.user.last_name,
          modalName: 'last_name'
        }
      ]
    },
    langFields() {
      return [
        {
          groupName: 'Language',
          label: this.PAGE_SETTINGS.lang.label,
          value: this.$i18n.locale,
          option: 'select',
          topPosition: true,
          modalName: 'fieldLanguage'
        }
      ]
    },
    ...mapGetters({
      PAGE_SETTINGS: 'pages/PAGE_SETTINGS'
    })
  },
  watch: {

    changePhone(val) {
      if (val === true) this.changeEmail = false
    },
    changeEmail(val) {
      if (val === true) this.changePhone = false
    }
  },
  methods: {
    ...mapActions({
      SET_PAGE_PAGE_SETTINGS: 'pages/SET_PAGE_PAGE_SETTINGS'
    }),
    getPageTranslate() {
      this.SET_PAGE_PAGE_SETTINGS()
    },
    /**
     * @description Функция getCode фильтрует массив элементов и возвращает массив кодов тех элементов,
     * чей код отличается от текущей локали.
     * @param {Array} array
     * @return {Array}
     */
    getCode(array) {
      return array.filter(item => item.code !== this.$i18n.locale).map(item => item.code);
    }
  }
}
</script>

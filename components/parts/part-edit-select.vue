<template lang="pug">
  .edit-field
    .edit-field__row
      .edit-field__column.edit-field__column_left
        .edit-field__label.color-gray.p {{label}}
      .edit-field__column.edit-field__column_center
        form-select(
          :name="name"
          :value="value"
          v-model="value"
          :items="items"
          default
          :top="topPosition"
          v-if="edit"
        )
        .edit-field__placeholder.h4(v-else) {{value}}
      .edit-field__column.edit-field__column_right
        .edit-field__nav.mobile-hidden(v-if="edit")
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
    modal-field(:id="modalName" :title="groupName")
      .modal-field__list
        .modal-field__item
          .modal-field__label {{label}}
          form-select.modal-field__input(
            :name="name"
            :value="value"
            v-model="value"
            :items="items"
            default
            :top="topPosition"
          )

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label name'
    },
    name: {
      type: String,
      default: 'name'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Eng'
    },
    type: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => ([
        'Ukr',
        'Ru'
      ])
    },
    topPosition: {
      type: Boolean,
      default: false
    },
    modalName: {
      type: String,
      default: ''
    },
    groupName: {
      type: String,
      default: ''
    },
    editText: {
      type: String,
      default: 'Edit'
    },
    saveText: {
      type: String,
      default: 'Save'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
  },
  data() {
    return {
      edit: false,
      oldValue: null,
    }
  },
  methods: {
    showEdit() {
      this.edit = true;
    },

    closeEdit() {
      this.edit = false;
      this.value = this.oldValue
    },
    closeSave() {
      this.$i18n.setLocale(this.value)
      this.edit = false;
    },
  }
}
</script>

<style lang="scss">
@import '~/assets/сss/components/edit-field.scss';
</style>

<template lang="pug">
  b-modal(
    id="modal-statistic"
    ref="modal-statistic"
    size="statistic-size"
    modal-class="modal-statistic"
    body-class="modal-statistic__body"
    header-class="modal-statistic__header"
    footer-class="modal-statistic__footer"
    centered
    @hide="closeModal"
    :hide-footer="true"
  )

    template(#modal-header='{ close }')
      button-close.modal__close(@click.native='closeModal')
    h3.modal-statistic__title.h3 {{PAGE_MODAL_STATISTIC.title}}
    .modal-statistic__table
      table
        thead
          tr
            th {{PAGE_MODAL_STATISTIC.name}}
            th {{PAGE_MODAL_STATISTIC.description}}
            th {{PAGE_MODAL_STATISTIC.title}}
        tbody(v-if="STATISTIC")
          tr
            td
              button-action.modal-statistic__title(icon="favorites" :text="PAGE_MODAL_STATISTIC.list[0].title" small blue)
            td
              .modal-statistic__desc {{PAGE_MODAL_STATISTIC.list[0].text}}
            td
              .modal-statistic__number.color-blue.h3 {{STATISTIC.favorite}}
          tr
            td
              button-action.modal-statistic__title(icon="view" :text="PAGE_MODAL_STATISTIC.list[1].title" small blue)
            td
              .modal-statistic__desc {{PAGE_MODAL_STATISTIC.list[1].text}}
            td
              .modal-statistic__number.color-blue.h3  {{STATISTIC.view}}
          tr
            td
              button-action.modal-statistic__title(icon="call" :text="PAGE_MODAL_STATISTIC.list[2].title" small blue)
            td
              .modal-statistic__desc {{PAGE_MODAL_STATISTIC.list[2].text}}
            td
              .modal-statistic__number.color-blue.h3  {{STATISTIC.call}}
          //td(
          //	v-for="(column, i) in row.list" :key="i"
          //)
          //	button-action.modal-statistic__title(:icon="column.icon" :text="column.name" small blue v-if="column.name")
          //	.modal-statistic__desc(v-if="column.desc") {{column.desc}}
          //	.modal-statistic__number.color-blue.h3(v-if="column.number") {{column.number}}

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: 'Statistics'
    },
    head: {
      type: Array,
      default: () => ([
        'Name',
        'Description',
        'Statistics'
      ]),
    },
  },
  computed:{
    ...mapGetters({
      PAGE_MODAL_STATISTIC: 'pages/PAGE_MODAL_STATISTIC',
      STATISTIC:'product/STATISTIC'
    })
  },
  created() {
    this.SET_PAGE_MODAL_STATISTIC(this.$i18n.locale || 'en')
  },
  watch: {
    '$i18n.locale'(val) {
      this.SET_PAGE_MODAL_STATISTIC(this.$i18n.locale)
    }
  },
  methods:{
    ...mapActions({
      SET_PAGE_MODAL_STATISTIC: 'pages/SET_PAGE_MODAL_STATISTIC',
      SET_STATISTIC: 'product/SET_STATISTIC'
    }),
    closeModal(){
      this.SET_STATISTIC(null)
      this.$root.$emit('bv::hide::modal', 'modal-statistic')
    }
  }
}
</script>

<style lang="scss">
.modal-statistic {
  .modal-content {
    padding: 50rem;
  }

  &__title {
    font-weight: 600;
  }

  &__table {
    margin-top: 20rem;
    font-size: 16rem;
    line-height: 1.2;

    table, tr, thead, tbody, th, td {
      border-collapse: collapse;
    }

    table {
      width: 100%;
    }

    td, th {
      vertical-align: top;

      &:first-child {
        width: 20%;
      }

      &:nth-child(2) {
        width: 63%;
        padding-left: 20rem;
        padding-right: 20rem;
      }

      &:last-child {
        width: 17%;
        text-align: right;
      }
    }

    th {
      font-weight: 500;
      color: $gray;
      padding-bottom: 10rem;
    }

    tr:not(:last-child) {
      td {
        padding-bottom: 30rem;
      }
    }

    td {
      padding-top: 14rem;
      border-top: 1px solid $light-gray;
    }
  }

  &__number {
    font-family: 'Atyp Display';
    font-weight: 600;
  }
}
</style>
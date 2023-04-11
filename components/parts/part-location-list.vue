<template lang="pug">
  .modal-location__list-item
    .modal-location__list-header
      .modal-location__list-title {{title}}
      .modal-location__list-helper(v-if="!withOutAuth" @click="$emit('help')") {{POPUP_LOCAL.automatically}}
    .modal-location__item(
      v-for="(item,index) in list"
      :key="'new-key-' + index"
      @click="$emit('state',item)"
      :class="{active:active === item.id}"
    )
      template(v-if="item.name") {{item.name}}
      template(v-else) All of America
      span(v-if="showState") {{ item.state_minimal_select.name}}
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: 'State'
    },
    active: {
      type: [Number,String],
      default: 0
    },
    list: {
      type: [Array, Object],
      default: []
    },
    showState: {
      type: Boolean,
      default: false
    },
    withOutAuth:{
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      POPUP_LOCAL: 'popup/POPUP_LOCAL',
    })
  },
  methods: {}
}
</script>

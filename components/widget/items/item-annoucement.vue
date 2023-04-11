<template lang="pug">
  .item-annoucement(:class="Mods")
    .item-annoucement__row
      .item-annoucement__column.item-annoucement__column_left
        form-checkbox.item-annoucement__checkbox(:checked="item.checked" @change.native="$emit('checked')")
        NuxtLink.item-annoucement__preview(:to="$changeRoute(`/product/${item.slug}`)")
          set-img(img-class="object-fit" :src="item.gallery[0]" :default-img="require('assets/img/default-product.jpg')")
        .item-annoucement__info(v-if="small")
          NuxtLink.item-annoucement__title.h4.text-wrap(:to="$changeRoute(`/product/${item.slug}`)") {{item.name}}
          .item-annoucement__desc
            .item-annoucement__text(v-if="user")
              span.color-gray User: &nbsp;
              | {{user}}
            .item-annoucement__text(v-if="category")
              span.color-gray Category: &nbsp;
              | {{category}}
          .item-annoucement__footer.flex.flex_vertical.flex_justify
            .item-annoucement__status {{ item.status }}
            .item-annoucement__footer-date  {{ getDate }}
        .item-annoucement__info(v-else)
          .item-annoucement__name
            NuxtLink.item-annoucement__title.h4.text-wrap(:to="$changeRoute(`/product/${item.slug}`)") {{ item.name }}
          .item-annoucement__price.tablet-visible {{ showPrice }}
          .item-annoucement__days.color-gray.tablet-visible(v-if="getDays>=0")
            | {{left}}:
            span.color-blue {{  getDays }} {{days}}
          .item-annoucement__distance.color-gray.h6(v-if="distance") {{distance}} {{ PAGE_PRODUCT_DERAILS.km }}
          .item-annoucement__date.color-gray.h6 {{ getDate }}
          .item-annoucement__nav.flex
            button-medium.item-annoucement__nav-btn(:to="$changeRoute('/chat')" icon="chatBorder") {{buttons.chat}}
            button-medium.item-annoucement__nav-btn(v-if="$status.active === item.status" icon="closeBig" white @click.native.prevent="$emit('deactivate')") {{buttons.deactivation}}
            button-medium.item-annoucement__nav-btn(v-if="$status.noActive === item.status" white @click.native.prevent="$emit('active')") {{buttons.active}}
            button-medium.item-annoucement__nav-btn(v-if="$status.draft === item.status" white @click.native.prevent="$emit('moderation')") {{buttons.active}}
          part-statistic.item-annoucement__statistic.tablet-visible(:statistics="statistics" light)

      .item-annoucement__column.item-annoucement__column_right
        .item-annoucement__price.tablet-hidden {{ showPrice }}
        part-statistic.item-annoucement__statistic.tablet-hidden(:statistics="statistics" light)
        .item-annoucement__bottom.flex.flex_justify
          .item-annoucement__bottom-column
            button-medium.item-annoucement__bottom-btn.tablet-hidden(icon="chart" @click.prevent.native="$emit('statistics')") {{ PAGE_MODAL_STATISTIC.title }}
          .item-annoucement__bottom-column.flex
            button-medium.item-annoucement__bottom-btn.tablet-hidden(icon="zipper" v-b-modal.modal-tariffs blue) {{buttons.saleFaster}}
            .item-annoucement__more-inner
              tippy(placement="bottom-end" trigger="click")
                template(v-slot:trigger)
                  button-medium.item-annoucement__more(icon="dots" border square )
                .item-annoucement__bottom-column.item-annoucement__bottom-column-inner.d-flex.flex-column.text-start.align-items-start
                  button-medium.annoucement-panel__btn.ml-0(white :to="$changeRoute(`/create-ad/${item.slug}`)" ) {{buttons.settings}}
                  button-medium.annoucement-panel__btn.ml-0(v-if="$status.active === item.status" white @click.native.prevent="$emit('deactivate')") {{buttons.deactivation}}
                  button-medium.annoucement-panel__btn.ml-0(v-if="item.status === 2" white @click.native.prevent="$emit('active')") {{buttons.active}}
                  button-medium.annoucement-panel__btn.ml-0(v-if="item.status === 5" white @click.native.prevent="$emit('moderation')") {{buttons.active}}
                  button-medium.annoucement-panel__btn.ml-0(v-if="item.status !== $status.draft" white @click.native.prevent="$emit('draft')") {{buttons.draft}}
                  button-medium.annoucement-panel__btn.ml-0(white @click.native.prevent="$emit('deleteAdvertis')") {{buttons.delete}}


</template>

<script>
import {formatDistance, subDays, format} from 'date-fns'
import {numberWithSpaces} from 'assets/js/functions';
import distanceMixin from "@/mixins/distanceMixin";
import {mapGetters, mapActions} from "vuex";
import moment from "moment";

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    buttons: {
      type: Object,
      required: true
    },
    left: {
      type: String,
      default: "left"
    },
    days: {
      type: String,
      default: "days"
    },
    user: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: ""
    },
    small: {
      type: Boolean,
      default: false
    },
    coordinates: {
      type: Object,
      default: {}
    },
    activeTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      formatDistance,
      subDays,
      format,
      phone: false,
      numberWithSpaces
    }
  },
  computed: {
    ...mapGetters({
      PAGE_PRODUCT_DERAILS: 'pages/PAGE_PRODUCT_DERAILS',
      PAGE_MY_ADVERTISES: 'pages/PAGE_MY_ADVERTISES',
      PAGE_MODAL_STATISTIC: 'pages/PAGE_MODAL_STATISTIC'
    }),
    Mods() {
      return {
        'item-annoucement_small': this.small
      }
    },
    statistics() {
      return [
        {
          icon: 'favorites',
          name: `${this.PAGE_MY_ADVERTISES.banner.favorites}`,
          number: this.item.added_favorites
        },
        {
          icon: 'view',
          name: `${this.PAGE_MY_ADVERTISES.banner.view}`,
          number: this.item.show_details
        },
        {
          icon: 'call',
          name: `${this.PAGE_MY_ADVERTISES.banner.call}`,
          number: this.item.show_phone
        }
      ]
    },
    showPrice() {
      if (this.item && this.item.price_policy === 1) return `$ ${this.numberWithSpaces(this.item.price)}`
      if (this.item && this.item.price_policy === 2) return "Exchange"
      return "Free"
    },
    getDate() {
      const start = moment(this.item.inactively_date, 'YYYY-MM-DD HH:mm:ss').subtract('30', 'days').format('DD.MM.YYYY')
      // const start = this.format(this.subDays(new Date(this.item.inactively_date), 30), 'dd.MM.yyyy');
      const end = moment(this.item.inactively_date, 'YYYY-MM-DD HH:mm:ss').format('DD.MM.YYYY')
      // const end = this.format(new Date(this.item.inactively_date), 'dd.MM.yyyy')
      return `${start} - ${end}`
    },
    getDays() {
      moment.lang(this.$i18n.locale)
      const dateB = moment(this.item.inactively_date, 'YYYY-MM-DD HH:mm:ss'),
        dateC = moment(new Date());
      return dateB.diff(dateC, 'days')
    },
  },
  mixins: [distanceMixin],
  methods: {
    ...mapActions({
      SET_CHANGE_STATUS: 'advertises/SET_CHANGE_STATUS',
    }),
    showPhone() {
      this.phone = true;
      this.$axios.$post(`${this.$api.user.statistics}${this.item.slug}/phone-view`)
    },
  }
}
</script>

<template lang="pug">
  .section-categories__wrap.wrap(v-if="category.list.length > 0")
    .section-categories__category
      h2.section-categories__title.h3 {{ category.title }}
      .section-categories__list.flex
        template(v-for="(item, i) in category.list")
          .section-categories__column(v-if="isRecommend && i % showItem === 0 && i !== 0 && getItem(i) < HOME_BANNERS.length")
            item-card-premium.section-categories__item(
              v-if="HOME_BANNERS.length > 0 "
              :item="HOME_BANNERS[getItem(i) || 0]"
            )
          .section-categories__column(:key="i")
            item-card.section-categories__item(
              :name="item.name "
              :city="item.city.name"
              :contacts="item.contacts"
              :coordinates="{longitude:item.longitude,latitude:item.latitude}"
              :date="item.created_at"
              :phoneNumber="item.contact_phone"
              :price="item.price"
              :price-policy="item.price_policy"
              :status="item.type"
              :to="item.slug"
              :author_id="item.author.id"
              :author_full_name="item.author.full_name"
              :id="item.id"
              :gallery="item.gallery"
              @show="openProductModal(i,category.list)"
            )
        infinite-loading(:distance="20" @infinite="infinite")
          div(slot="no-results")
          div(slot="no-more")
          div(slot="spinner")
</template>

<script>
import openProductModal from "@/mixins/openProductModal";
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    category: {
      type: Object,
      default: () => ({
        title: '',
        list: []
      })
    },
    status: {
      type: String,
      default: ''
    },
    isRecommend: {
      type: Boolean,
      default: false
    }
  },
  mixins: [openProductModal],
  created() {
    this.getBanners()
  },
  computed: {
    ...mapGetters({
      HOME_BANNERS: 'home/HOME_BANNERS'
    }),
    showItem() {
      return 4
    }
  },
  methods: {
    ...mapActions({
      SET_BANNERS: 'home/SET_BANNERS'
    }),
    infinite($state) {
      this.$emit('fetchMoreData', $state);
    },
    getItem(i) {
      return i / this.showItem - 1
    },
    getBanners() {
      if (this.isRecommend) this.SET_BANNERS()
    }
  }
}
</script>


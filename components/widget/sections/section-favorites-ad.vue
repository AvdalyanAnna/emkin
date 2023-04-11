<template lang="pug">
  section.favorites-ad
    h1.favorites-ad__title.h3 {{PAGE_FAVORITE.title}}
    part-back-nav.favorites-ad__nav(:nav="PAGE_FAVORITE.nav")
      .back-nav__buttons.flex
        .back-nav__sort
          //form-select-array.favorites-ad__select(:label="PAGE_FAVORITE.sortBy" :items="sortList" v-model="sort" @input="changeSort" :value="sort" noBorder)
          form-select-sort-index.favorites-ad__select(:label="PAGE_FAVORITE.sortBy" :items="sortList" v-model="sort" @input="changeSort" :value="sort" noBorder)
        module-grid-switch.back-nav__grid-switch
    .section-categories__list.favorites-ad__list.flex(:class="{'list-inline':PRODUCT_CART_TYPE}")
      item-card.favorites-ad__item(
        v-for="(item, i) in FAVOURITES_PRODUCT"
        :key="i"
        :name="item.name"
        :contacts="item.contacts"
        :city="item.city.name"
        :coordinates="{longitude:item.longitude,latitude:item.latitude}"
        :date="item.created_at"
        :showDetails="item.show_details"
        :phoneNumber="item.contact_phone"
        :desc="item.description"
        :user="item.author"
        :price="item.price"
        :price-policy="item.price_policy"
        :status="item.type"
        :to="item.slug"
        :id="item.id"
        favoritesProduct
        :author_id="item.author.id"
        :author_full_name="item.author.full_name"
        :author_avatar="item.author.avatar?item.author.avatar.original_full_url:''"
        :gallery="item.gallery"
        @show="openProductModal(i,FAVOURITES_PRODUCT)"
        :inline="PRODUCT_CART_TYPE"
      )
      infinite-loading(:distance="20" :identifier="infiniteId" ref="infiniteLoading" @infinite="getProducts")
        div(slot="no-results")
        div(slot="no-more")
        div(slot="spinner")
    .section-notifications__center(v-if="FAVOURITES_PRODUCT.length === 0 && !loadingPage")
      part-not-notification.section-notifications__not-notification
    //button-primary.favorites-ad__more(gray) Show more
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import openProductModal from "@/mixins/openProductModal";
import pageTranslate from "@/mixins/pageTranslate";
export default {
  data() {
    return {
      infiniteId:0,
      loadingPage:false,
      list: [],
      sort: 0,
    };
  },
  mixins: [openProductModal,pageTranslate],
  computed: {
    ...mapGetters({
      FAVOURITES: 'favourites/FAVOURITES',
      FAVOURITES_PRODUCT: 'favourites/FAVOURITES_PRODUCT',
      PAGE_FAVORITE: 'pages/PAGE_FAVORITE',
      PRODUCT_CART_TYPE: 'product/PRODUCT_CART_TYPE'
    }),
    sortList(){
      return [
        {
          label: this.PAGE_FAVORITE.sortList[0].label,
          text: this.PAGE_FAVORITE.sortList[0].text,
          value: 'orderBy=id&sortedBy=desc'
        },
        {
          label: this.PAGE_FAVORITE.sortList[1].label,
          text: this.PAGE_FAVORITE.sortList[1].text,
          value: 'orderBy=id&sortedBy=asc'
        },
        {
          label: this.PAGE_FAVORITE.sortList[2].label,
          text: this.PAGE_FAVORITE.sortList[2].text,
          value: 'orderBy=price&sortedBy=desc'
        },
        {
          label: this.PAGE_FAVORITE.sortList[3].label,
          text: this.PAGE_FAVORITE.sortList[3].text,
          value: 'orderBy=price&sortedBy=asc'
        }
      ]
    },
  },
  watch: {
  },
  created() {
    // this.getPage()
  },
  beforeDestroy() {
    this.SET_FAVOURITES__NULL()
  },
  methods: {
    ...mapActions({
      SET_PAGE_FAVORITE: 'pages/SET_PAGE_FAVORITE',
      SET_FAVOURITES__NULL: 'favourites/SET_FAVOURITES__NULL',
      SET_FAVOURITES_PRODUCT: 'favourites/SET_FAVOURITES_PRODUCT',
      SET_FAVOURITES_PAGE: 'favourites/SET_FAVOURITES_PAGE',
    }),
    getPageTranslate(){
      this.SET_PAGE_FAVORITE()
    },
    changeSort() {
      this.infiniteId++
      this.SET_FAVOURITES_PAGE()
      this.SET_FAVOURITES__NULL()
      this.getProducts()
    },
    getPage() {
      this.SET_FAVOURITES_PAGE()
      this.getProducts()
    },
    getProducts() {
      const sort = this.PAGE_FAVORITE.sortList[this.sort]
      this.SET_FAVOURITES_PRODUCT(sort.value).finally(()=>this.loadingPage === true)
    }
  }
}
</script>


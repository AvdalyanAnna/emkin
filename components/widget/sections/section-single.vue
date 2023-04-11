<template lang="pug">
  section.section-single(v-if="load && DETAIL")
    .wrap
      part-search-category.section-single__form(v-if="$screen.st" @search="searchProducts")
      .section-single__row.flex.flex_justify
        .section-single__column.section-single__column_content

          part-single-gallery.section-single__gallery(:TestImages="$galleryListNew(DETAIL.gallery,DETAIL.link)" openImages)
          part-single-content.section-single__part(:description="DETAIL.description" :content="PAGE_PRODUCT_DERAILS" :answers="DETAIL.answers")

          part-single-map.section-single__part.section-single__part_map(
            :addr="DETAIL.address"
            :coordinates="{latitude:DETAIL.latitude,longitude:DETAIL.longitude}"
          )

          client-only
            div.section-single__part.section-single__part_user(v-if="!$screen.lt")
              module-user-info.single-sidebar__user(
                :avatar="DETAIL.author"
                :content="`<strong>${DETAIL.author.phone ? 'Phone /': ''}  ${DETAIL.author.email ? 'Еmail confirmed': ''}</strong>`"
                :name="DETAIL.author.full_name"
                :about="`${PAGE_PRODUCT_DERAILS.registered} ${DETAIL.author.registered}`"
                :verified=" DETAIL.author.verified_at !== null "
              )

              button-border.section-single__other(icon="other-posts" v-b-modal.users-adds) {{PAGE_PRODUCT_DERAILS.openModalBtn}}

          part-single-recommend.section-single__part(
            :recommendTitle="PAGE_PRODUCT_DERAILS.recommend"
            :moreText="PAGE_PRODUCT_DERAILS.showMoreProduct"
            v-if="RECOMEND.length > 0"
            :products="RECOMEND"
            @more="moreProducts"
            :showMore="LAST_PAGE_RECOMEND > CURRENT_PAGE_RECOMEND "
          )

        .section-single__column.section-single__column_sidebar(v-if="DETAIL")

          part-single-sidebar.section-single__info(
            v-if="DETAIL"
            :id="DETAIL.id"
            :title="DETAIL.name"
            :cost="cost"
            :user="DETAIL.author"
            :info="DETAIL"
            :contacts="DETAIL.contacts"
            :phoneNumber="DETAIL.contact_phone"
            :products="USER_PRODUCT.active.length + USER_PRODUCT.noActive.length || 0"
          )
    modal-users-adds(:userId="DETAIL.author.id" )

</template>

<script>
import {numberWithSpaces} from "~/assets/js/functions"
import {mapActions, mapGetters} from "vuex";

export default {
  data() {

    return {
      page: 1,
      tag: [
        {
          text: 'Active',
          counter: 0,
          active: true,
          to: '#'
        },
        {
          text: 'Non active',
          counter: 0,
          to: '#'
        }
      ],
      load: false,
      numberWithSpaces
    }
  },
  computed: {
    ...mapGetters({
      DETAIL: 'product/DETAIL',
      RECOMEND: 'product/RECOMEND',
      LAST_PAGE_RECOMEND: 'product/LAST_PAGE_RECOMEND',
      CURRENT_PAGE_RECOMEND: 'product/CURRENT_PAGE_RECOMEND',
      USER_PRODUCT: 'product/USER_PRODUCT',
      DETAIL_ACTIVE: 'product/DETAIL_ACTIVE',
      PAGE_PRODUCT_DERAILS: 'pages/PAGE_PRODUCT_DERAILS'
    }),
    cost() {
      if (this.DETAIL.price_policy === 1) return `$ ${this.numberWithSpaces(this.DETAIL.price)}`
      if (this.DETAIL.price_policy === 2) return "Exchange"
      return "Free"
    }
  },
  async mounted() {
    this.load = true
    this.page = 1
    await this.SET_DETAIL(this.$route.params.slug)
    await this.SET_RECOMEND(this.DETAIL.category.id)
    await this.SET_USER_PRODUCTS()
    this.tag[0].counter = this.USER_PRODUCT.active.length
    this.tag[1].counter = this.USER_PRODUCT.noActive.length
  },
  methods: {
    ...mapActions({
      SET_DETAIL: 'product/SET_DETAIL',
      SET_RECOMEND: 'product/SET_RECOMEND',
      SET_MORE_RECOMEND: 'product/SET_MORE_RECOMEND',
      SET_USER_PRODUCTS: 'product/SET_USER_PRODUCTS',
    }),
    async moreProducts() {
      await this.SET_MORE_RECOMEND(this.DETAIL.category.id)
    },
    changeActiveTag(index) {
      this.tag.forEach((item, i) => item.active = i === index)
    },
    searchProducts(filter) {
      this.$router.push({path: '/catalog', query: {...filter}})
    }
  }
}
</script>

<style lang="scss">
.section-single {

  padding-bottom: 50rem;

  @include large-mobile {
    padding-bottom: 10rem;
  }

  &__form {
    margin-bottom: 40rem;

    @include large-mobile {
      display: none !important;
    }
  }

  &__user {
    margin-bottom: 30rem;

    @include large-mobile {
      margin-bottom: 18rem;
    }
  }

  &__gallery {
    margin-bottom: 70rem;

    @include small-tablet {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }

  &__info {
    position: sticky;
    top: 110rem;
    @include small-tablet {
      position: relative;
      top: 0;
      margin-top: 59.973545%;

      border-bottom: 1px solid #D2D2D7;
      margin-bottom: 50rem;

    }

    @include large-mobile {
      padding-top: 20rem;
      padding-bottom: 10rem;
      margin-bottom: 30rem;
      margin-top: div(250, 345) * 100%;
    }

    // max-height: calc(100vh - 40rem);
  }

  &__column {
    &_content {
      width: div(1001, 1400) * 100%;
      padding-right: 20rem;
    }

    &_sidebar {
      width: div(399, 1400) * 100%;
      padding-bottom: 50rem;
    }

    @include small-tablet {
      width: 100%;
      padding-right: 0;
      padding-bottom: 0;
    }
  }

  &__row {
    @include small-tablet {
      position: relative;
      flex-direction: column-reverse;
    }
  }

  &__part {
    padding-bottom: 50rem;

    &:not(:last-child) {
      margin-bottom: 50rem;
      border-bottom: 1px solid #D2D2D7;
    }

    @include small-tablet {
      &_map {
        &:not(:last-child) {
          border-bottom: none;
          padding-bottom: 0;
        }
      }
    }

    @include large-mobile {
      padding-bottom: 40rem;
      &:not(:last-child) {
        margin-bottom: 40rem;
      }

      &_map {
        &:not(:last-child) {
          margin-bottom: 30rem;
        }
      }

      &_user {
        &:not(:last-child) {
          margin-bottom: 50rem;
          padding-bottom: 0;
          border-bottom: none;
        }
      }
    }
  }
}
</style>

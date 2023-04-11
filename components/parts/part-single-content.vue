<template lang="pug">
  .single-content
    h3.single-content__heading.h3 {{PAGE_PRODUCT_DERAILS.description}}

    ul.single-content__list.color-gray.flex.flex_vertical.p
      li.single-content__list-item(v-for="(item, i) in answers" :key="i")
        | {{  item.filter.name  }}
        b {{ item.name }}

    .single-content__content.content.h4
      p  {{!readMore === false ? description : description.slice(0,310)+'...'}}
      span.single-content__more.blue-link.p(v-if="description.split('').length > 310" @click="readMore = !readMore")  {{readMore === false ? content.moreDesc : content.hideDesc}}
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    description: {
      type: String
    },
    answers: {
      type: Array,
      default: []
    },
    content: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      readMore: false,
    }
  },
  computed:{
    ...mapGetters({
      PAGE_PRODUCT_DERAILS:'pages/PAGE_PRODUCT_DERAILS'
    })}
}
</script>

<style lang="scss">
.single-content {


  &__content {
    line-height: 150%;
    font-weight: 400;
    padding-right: 45rem;


    & > * {
      &:not(:last-child) {
        margin-bottom: 28rem;
      }
    }

    @include small-tablet {
      padding-right: 0;
    }

    @include large-mobile {
      line-height: 21rem;

      & > * {
        &:not(:last-child) {
          margin-bottom: 20rem;
        }
      }
    }
  }

  &__more {
    margin-top: 30rem;
    cursor: pointer;

    @include large-mobile {
      margin-top: 20rem;
    }
  }

  &__heading {
    margin-bottom: 30rem;
  }

  &__list {
    margin-bottom: 15rem;

    &-item {
      display: block;
      margin-right: 30rem;

      margin-bottom: 15rem;
    }

    b {
      color: #212D38;
      margin-left: 10rem;
    }

    @include large-mobile {
      margin-bottom: 10rem;

      &-item {
        margin-bottom: 10rem;
      }
    }
  }
}
</style>

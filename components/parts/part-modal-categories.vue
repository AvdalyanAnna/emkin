<template lang="pug">
  .modal-categories.css-scrollbar(v-if="categories.length > 0")
    .modal-categories__category-left
      .modal-categories__category(
        v-for="(category, i) in categories"
        @mouseover="$emit('active',i)"
        :key="i" :class="{active:active === i}"
      )
        h2.modal-categories__title.h5 {{category.name}}
        svg-icon.modal-categories__back(name="arrowRight")
    .modal-categories__category-right(v-if="categories[active]")
      NuxtLink.modal-categories__title.h3(:to="`/catalog/${$changeRoute(categories[active].slug)}`")
        | {{categories[active].name}}
        //span 122 товара
      .modal-categories__category-right__list(v-if="categories[active].allSubCategories.length > 0")
        .modal-categories__category-right__item(v-for="(category, i) in categories[active].allSubCategories" :key="i")
          NuxtLink.modal-categories__category-right__title.h5(:to="$changeRoute(`/catalog/${categories[active].slug}/${category.slug}`)") {{category.name}}
          ul.modal-categories__category-right__category(v-if="category.allSubCategories.length > 0")
            li.modal-categories__category-right__category-item(v-for="(item, i) in category.allSubCategories" :key="i")
              NuxtLink(:to="$changeRoute(`/catalog/${categories[active].slug}/${category.slug}/${item.slug}`)") {{ item.name}}
        //NuxtLink.modal-categories__link(:to="item.slug") {{ item }}
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => ([])
    },
    active: {
      type: Number,
      default: 0
    }
  },
}
</script>

<style lang="scss">
.tippy-tooltip {
  max-width: fit-content !important;
}

.modal-categories {
  padding-bottom: 10rem;
  margin-top: 0rem;
  width: 1390rem;
  max-height: 570rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 30rem;
  margin-right: -30rem;
  text-align: left;
  font-size: 14rem;
  line-height: 1;
  display: flex;

  &__back {
    position: absolute;
    right: 21px;
    width: 10px;
    height: 10px;
    fill: none;
    stroke: #062439;
    stroke-width: 3px;
    transition: 0.3s;
  }

  &__category {
    padding: 16rem 35rem 16rem 16rem;
    margin-bottom: 12px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    &:hover, &.active {
      background: #F5F5F7;
    }


    &-left {
      border-right: 1px solid #E7E8EA;
      max-width: 320px;
      padding-right: 15px;
      margin-left: -5px;
      padding-left: 5px;
    }

    &-right {
      width: calc(100% - 320px);
      padding: 24px 48px;

      .h3 {
        font-weight: 600;
        margin-bottom: 48px;
        cursor: pointer;
        display: block;
        &:hover {
          color:inherit;
        }

        span {
          margin-left: 20px;
          color: #6E6E73;
          font-size: 14px;
          font-weight: 500;
        }
      }

      &__list {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px 40px;
        justify-content: space-between;
      }

      &__item {
        max-width: 230px;
      }

      &__title {
        margin-bottom: 20px;
        cursor: pointer;
        transition: 0.3s;
        display: block;
        &:hover {
          text-decoration: underline;
          color:inherit;
        }
      }

      &__category {
        list-style: none;

        &-item {
          margin-bottom: 18px;
          color: #A5A5A5;
          font-size: 16px;
          font-weight: 400;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            color: #062439 ;
          }
          a{
            color:inherit;
          }

          &:nth-last-child(1) {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  &__list {
    list-style: none;
    margin-top: 15rem;
  }

  &__item {
    display: block;

    &:not(:first-child) {
      margin-top: 15rem;
    }
  }

  &__link {
    display: block;
    transition: ease .12s;
    color: $gray;

    &:hover {
      color: $blue;
    }
  }
}
</style>

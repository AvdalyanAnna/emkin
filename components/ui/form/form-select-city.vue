<template lang="pug">
  .select.select-city(:class="Mods" v-click-outside="closeList")
    .select__label.p.color-gray(v-if="label") {{ label }}
    .select__wrap
      input.select__input(type="hidden" :name="name" :value="currentValue")
      .select__head( @click="toggleList")
        .select__value.select__value-checked(v-if="currentValue.name")
          | {{currentValue.name}}
          span {{currentValue.state_minimal_select.name}}
        .select__value(v-else) {{selectText}}
        .select__arrow
          svg-icon(name="arrowDown" viewBox="0 0 11 7")
      transition(name="DropDown")
        .select__body(v-if="listOn")
          .select__search
            form-input(v-model="search" @input="searchCity" name="search" placeholder="Search" icon="search" )
          .select__list.css-scrollbar
            .select__item(v-for="(item, i) in items" :key="i" @click="changeValue(item)")
              label.select__btn
                input.select__btn-input(
                  type="radio"
                  :name="name"
                  :value="item"
                  @change="closeList(); updateValue();"
                  v-model="currentValue"
                )
                span.select__btn-text
                  |{{ item.name }}
                  span {{item.state_minimal_select.name}}

            infinite-loading(:distance="20" :identifier="infiniteId" ref="infiniteLoading" @infinite="getCity")
              div(slot="no-results")
              div(slot="no-more")
              div(slot="spinner")
          slot

</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  props: {
    value: {
      type: [Object,Boolean],
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    selectText: {
      type: String,
      default: 'Selected'
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      listOn: false,
      currentValue: this.value || {},
      items: [],
      search: '',
      infiniteId: 1,
      page: 1,
      per_page: 20
    };
  },

  computed: {
    Mods() {
      return {
        'select_error': this.error,
      }
    }
  },
  methods: {
    toggleList() {
      this.listOn = !this.listOn;
    },
    closeList() {
      this.listOn = false;
    },
    updateValue(e) {
      this.$emit('input', this.currentValue)
    },
    changeValue(item) {
      this.currentValue = item
      this.closeList()
      this.$emit('input', this.currentValue)
    },
    searchCity(){
      this.page = 1
      this.items = []
      this.infiniteId++
    },
    getCity($state) {
      let api = `/search-cities?search=name:${this.search}&orderBy=order;id&sortedBy=desc;asc&with=state_minimal_select&searchJoin=and&page=${this.page }&per_page=${this.per_page}`
      this.$axios.$get(api)
          .then(({data, meta: {current_page, last_page}}) => {
            if(current_page === 1)  this.items =data
            else this.items.push(...data)
            this.page = current_page + 1
            if (current_page < last_page) $state.loaded()
            else $state.complete()
          })
          .catch(error => console.log(error));
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
.select {
  position: relative;
  display: inline-flex;
  align-items: center;

  &_lang {
    .select {
      &__head {
        height: 40rem;
        font-size: 17rem;
        color: $default;
        font-weight: 600;
      }

      &__arrow {
        stroke: $default;
        margin-left: 5rem;
      }
    }

    @include large-mobile {
      .select {
        &__head {
          height: 20rem;
          font-size: 14rem;
        }
      }
    }
  }

  &_big {
    .select {
      &__head {
        font-size: 17rem;
        color: $default;
        font-weight: 600;
      }

      &__arrow {
        stroke: $default;
        margin-left: 14rem;
      }
    }

    @include large-mobile {
      .select {
        &__head {
          height: 20rem;
          font-size: 14rem;
        }
      }
    }
  }

  &_border-right {
    .select {
      &__head {
        border-left: 0;
        border-right: 1px solid $light-gray;
      }
    }
  }

  &_no-border {
    font-size: 17rem;
    font-weight: 600;

    .select {
      &__head {
        height: auto;
        padding: 0 15rem;
        height: auto;
        border: 0;
        color: $default;
      }

      &__arrow {
        margin-left: 6rem;
      }

      &__list {
        left: -15rem;
      }
    }
  }

  &_default {
    height: 60rem;
    display: flex;
    font-size: 17rem;
    font-weight: 500;
    font-family: 'Gilroy';

    .select {
      &__wrap {
        width: 100%;
        height: 100%;
      }

      &__head {
        height: 100%;
        border: 1px solid $light-gray;
        border-radius: 10rem;
        padding: 15rem 20rem;
        width: 100%;
      }

      &__body {
        width: 100%;
        border-radius: 10rem;
        margin-top: 5px;
      }

      &__btn {
        color: $gray;
      }
    }
  }

  &_top {
    .select {
      &__body {
        top: auto;
        bottom: 100%;
        margin-bottom: 5px;
      }
    }
  }

  @include large-mobile {
    &_no-border {
      .select {
        &__head {
          padding: 0 5rem;
          height: auto;
          border: 0;
        }

        &__list {
          left: -15rem;
        }
      }
    }
    &_default {
      height: 50rem;
    }
  }

  &__label {
    @include large-mobile {
      padding-bottom: 1px;
    }
  }

  &__wrap {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__head {
    border-left: 1px solid $light-gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56rem;
    color: $gray;
    padding: 0 30rem;
    cursor: pointer;
    white-space: nowrap;

    @include small-tablet {
      padding: 0 20rem;
    }

    @include large-mobile {
      height: 20rem;
      font-size: 14rem;
      padding: 0;
      border: 0;
    }
  }

  &__color {
    width: 10rem;
    height: 10rem;
    flex-shrink: 0;
    margin-right: 10rem;
    border-radius: 10px;
    display: inline-flex;

    &.red {
      background: $red;
    }

    &.blue {
      background: $blue;
    }

    &.brown {
      background: $brown;
    }

    &.green {
      background: $green;
    }
  }

  &__value {
    margin-right: auto;
  }

  &__arrow {
    flex-shrink: 0;
    margin-left: 5px;
    width: 11rem;
    height: 7rem;
    fill: none;
    stroke: $gray;
    stroke-width: 2;
    margin-left: 18rem;

    @include small-tablet {
      margin-left: 10rem;
    }

    @include large-mobile {
      width: 9rem;
      height: 6rem;
    }
  }

  &__body {
    position: absolute;
    top: 100%;
    margin-top: 10rem;
    z-index: 100;
    left: 0;
    width: calc(100% + 30rem);
    background: #fff;
    padding: 10rem;
    border: 1px solid #D2D2D7;
    border-radius: 5px 5px 15rem 15rem;
  }

  &__btn {
    cursor: pointer;
    display: block;

    &-input {
      display: none;

      &:checked {
        & + .select__btn-text {
          background: #F5F5F7;
          color: $default;
        }
      }
    }

    &-text {
      padding: 10rem 20rem;
      border-radius: 5px;
      transition: ease .2s;
      display: block;
      font-size: 17rem;

      &:hover {
        color: $blue;
      }
    }

    @include large-mobile {
      &-text {
        font-size: 14rem;
        padding: 8rem 10rem;
      }
    }
  }
}
.select-city{
  &.select_error{
    .select__head{
      border-color: $red;
    }
  }
  .select__search{
    .input__icon{
      stroke: #D2D2D7;
    }
  }
  .select__list{
    margin-top: 10px;
  }
  .select__item .select__btn-text{
    padding: 15px ;
    @include large-mobile{
      padding: 10px;
    }
    &:hover{
      background: #F5F5F7;
      color: $default;
    }
  }
  .select__head{
    border: 1px solid #D2D2D7;
    border-radius: 10rem;
    height: 60px;
    padding: 0 20px;
    @include large-mobile{
      height: 50px !important;
      margin-top: 10px;
      padding: 0 15px;
    }
  }
  .select__body{
    width: 100%;
  }
  &,.select__wrap,.select__head{
    width: 100%;

  }
  .select__value-checked{
    color: $default;
    span{
      font-size: 14px;
      color: #6E6E73;
      padding-left: 10px;
    }
    @include large-mobile{
      font-size: 14px;
      span{
        font-size: 12px;
      }
    }
  }
  .select__value,
  .select__btn-text{
    font-size: 18px;
    span{
      font-size: 14px;
      color: #6E6E73;
      padding-left: 10px;
    }
    @include large-mobile{
      font-size: 16px;
      span{
        font-size: 14px;
      }
    }
  }
}
</style>
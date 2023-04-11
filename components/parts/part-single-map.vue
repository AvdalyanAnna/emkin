<template lang="pug">
  .single-map
    .single-map__head
      .single-map__row.flex.flex_justify.flex_bottom
        .single-map__info
          h3.single-map__title.h3 {{PAGE_PRODUCT_DERAILS.onMap}}
          .single-map__addr.h4.color-gray(v-if="!IsOpened") {{ addr }}

        button-toggle.single-map__toggle(
          @click.native="ToggleMapView"
          :active="IsOpened"
        ) {{ ButtonLabel }}

      part-icon-list.single-map__list(:list="fields" v-if="IsOpened")

    .single-map__bottom(v-if="IsOpened")
      google-map(:lat="coordinates.latitude" :lng="coordinates.longitude")
</template>

<script>
import {mapGetters} from "vuex";
import distanceMixin from "@/mixins/distanceMixin";

export default {
  props: {
    coordinates: {
      type: Object,
      default: {}
    },
    longitude: {
      type: [String, Number]
    },
    latitude: {
      type: [String, Number]
    },
    addr: {
      type: String,
      default: 'New Your, 45 Broadway #520 100341'
    }
  },
  data() {
    return {
      IsOpened: false,
    }
  },
  mixins: [distanceMixin],
  computed: {
    ButtonLabel() {
      return this.IsOpened ? this.PAGE_PRODUCT_DERAILS.hideMap || "Hide map" : this.PAGE_PRODUCT_DERAILS.more || "Show map";
    },
    fields() {
      let array = [
        {
          text: this.addr,
          icon: "map-field.svg"
        }
      ]
      if (this.distance) {
        array.push({
          text: `${this.distance} ${this.PAGE_PRODUCT_DERAILS.km || 'km near you'}`,
          icon: "distance-field.svg"
        })
      }
      return array
    },
    ...mapGetters({
      PAGE_PRODUCT_DERAILS: 'pages/PAGE_PRODUCT_DERAILS'
    })
  },

  methods: {
    ToggleMapView() {
      this.IsOpened = !this.IsOpened
    }
  }
}
</script>

<style lang="scss">
.single-map {

  &__title {
    margin-right: 30rem;
    margin-bottom: 15rem;
  }

  &__toggle {
    margin-bottom: 15rem;

    @include large-mobile {
      position: absolute;
      left: 0;
      bottom: 0;

      margin-bottom: 0;
    }
  }

  &__addr {
    margin-top: 20rem;
    font-family: 'Gilroy';
    font-weight: normal;
    margin-bottom: 15rem;

    @include large-mobile {
      font-size: 14rem;
      line-height: 120%;
      margin-bottom: 20rem;
    }
  }

  &__row {
    margin-bottom: -15rem;

    @include large-mobile {
      display: block;
      margin-bottom: 0;

    }
  }

  &__head {
    @include large-mobile {
      position: relative;
      padding-bottom: 15rem;
      margin-bottom: 20rem;
    }
  }

  &__image {
    border-radius: 10rem;

    @include large-mobile {
      height: 300rem;
      object-fit: cover;
    }
  }

  &__list {
    margin-top: 30rem;
    margin-bottom: 15rem;

    @include large-mobile {
      margin-bottom: 17rem;
    }
  }
}

#map {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
}
</style>

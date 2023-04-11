<template lang="pug">
  .user-info(:class="Mods")
    .user-info__avatar
      .user-info__avatar-img
        set-img(img-class="object-fit" :src="avatar" :default-img="require('~/assets/img/user.jpg')")
      slot

      .user-info__edit(v-if="edit" v-b-modal.modal-avatar)
        svg-icon(name="edit")
    .user-info__data
      .user-info__name.h5(v-if="name")
        | {{ name }}
        part-verified.user-info__verified(v-if="verified" :content="content")
      //.user-info__about.color-gray(v-b-modal.modal-location) {{LOCATION ? LOCATION.state_minimal_select.name + ', '+ LOCATION.name :  POPUP_LOCAL.title }}
      .user-info__about.color-gray(v-if="!isLocation") {{about}}
      .user-info__about.color-gray(v-else v-b-modal.modal-location) {{ locationText }}
      .user-info__confimed(v-if="vertical")
        .user-info__confimed-icon
          img(src="~/assets/img/verified.svg")
        .user-info__confimed-text(v-html="content")
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    avatar: {
      type: [Object, String]
    },
    name: {
      type: String
    },
    about: {
      type: String
    },
    verified: {
      type: Boolean
    },
    isLocation: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean
    },
    big: {
      type: Boolean
    },
    edit: {
      type: Boolean
    },
    content: {
      type: String,
      default: '<strong>Phone / Еmail confirmed</strong>'
    },
    user: {
      type: Object,
      default: () => { }
    }
  },
  computed: {
    Mods() {
      return {
        'user-info_vertical': this.vertical,
        'user-info_big': this.big,
      }
    },
    ...mapGetters({
      POPUP_LOCAL: 'popup/POPUP_LOCAL',
      LOCATION: 'location/LOCATION'
    }),
    locationText() {
      let text = this.POPUP_LOCAL.title
      if (this.LOCATION) {
        if (this.LOCATION.id === 'c1') text = 'All of America'
        else text = `${this.LOCATION.name} , ${this.LOCATION.state_minimal_select.name}`
      }
      return text
    }
  }
}
</script>

<style lang="scss">
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @include min-large-mobile {
    &_vertical {
      .user-info {
        &__verified {
          display: none;
        }

        &__data {
          display: flex;
          align-items: center;
        }

        &__about {
          margin-top: 0;
          margin-left: 20rem;
        }
      }
    }
  }

  &_big {
    text-align: center;
    display: block;

    .user-info {
      &__avatar {
        width: 165rem;
        margin: 0 auto 0 auto;
      }

      &__data {
        margin-top: 32rem;
      }

      &__name {
        font-size: 26rem;
      }

      &__about {
        font-size: 18rem;
        line-height: 1.5;
        color: rgba(6, 36, 57, 0.5);
        margin-top: 10rem;
      }
    }

    @include large-tablet {
      text-align: left;
      display: flex;
      margin: 0;
      .user-info {
        &__avatar {
          width: 120rem;
        }

        &__data {
          margin-left: 20rem;
          margin-top: 0;
        }
      }

    }

    @include large-mobile {
      .user-info {
        &__avatar {
          width: 63rem;
        }

        &__name {
          font-size: 20rem;
        }

        &__about {
          margin-top: 5rem;
          font-size: 14rem;
          line-height: 1;
        }
      }
    }
  }

  &__edit {
    width: 38rem;
    height: 38rem;
    border-radius: 100%;
    background: $blue;
    position: absolute;
    right: 11rem;
    bottom: -6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: #fff;
      width: 16rem;
      height: 16rem;
    }

    @include large-mobile {
      width: 24rem;
      height: 24rem;
      right: -2rem;
      bottom: 0;
      svg {
        width: 10rem;
        height: 10rem;
      }
    }
  }

  &__avatar {
    flex: 0 0 auto;
    width: 38rem;
    margin-right: 10rem;
    position: relative;

    &:before {
      padding-top: 100%;
      content: '';
      display: block;
    }

    img {
      border-radius: 50%;
    }
  }

  &__name {
    max-width: 200px;
    @extend %text-overflow;
  }

  &__about {
    // margin-top: 10rem;
    font-weight: 500;
    margin-top: 5rem;

    // line-height: 1em;

    // @extend %text-overflow;

    @include large-mobile {
      font-size: 14rem;
      line-height: 1em;
      margin-top: 6rem;
    }
  }

  &__verified {
    margin-left: 3rem;
    @include large-mobile {
      margin-left: 11rem;
    }
  }

  &__data {
    flex: 1 1 auto;
  }

  &__confimed {
    display: flex;
    align-items: center;
    margin-left: 20rem;

    &-icon {
      width: 12rem;
      height: 12rem;
      margin-right: 10rem;
    }

    @include large-mobile {
      display: none;
    }
  }
}
</style>

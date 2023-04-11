<template lang="pug">
  .button-photo(:class="{error:error}")
    input.button-photo__input(:name="name" accept=".jpeg, .jpg, .png, .svg, .gif, .webp" ref="file" id="file" type="file" @change="getFileObject")
    .button-photo__wrap.button-photo__wrap_img(v-if="img")
      .button-photo__img
        set-img(:src="img" :default-img="img")
      .button-photo__edit
        svg-icon(name="editSmall")
    .button-photo__wrap(v-else)
      svg-icon(name="camera" viewBox="0 0 24 24")

</template>

<script>
export default {
  data() {
    return {
      newImg: null
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'file'
    },
    img: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    getFileObject(event) {
      this.$emit('file', event.target.files[0]);
      const input = this.$refs.file
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => this.$emit('change', e.target.result);
        reader.readAsDataURL(input.files[0]);
      }
    }
  }
}
</script>

<style lang="scss">

.button-photo {
  position: relative;
  display: inline-flex;
  width: 120rem;
  height: 120rem;
  flex-shrink: 0;
  cursor: pointer;

  &.error .button-photo__wrap,
  &.error .button-photo__wrap_img {
    border-color: $red;
    svg{
      fill: $red;
    }
  }
;

  @include min-large-mobile {
    &:hover {
      .button-photo {
        &__wrap {
          border-color: $blue;

          svg {
            fill: $blue;
          }
        }
      }
    }
  }

  @include large-mobile {
    width: 96rem;
    height: 96rem;
  }

  &__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  &__wrap {
    width: 100%;
    height: 100%;
    border: 1px dashed $dark-gray;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease .15s;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 1px;
      top: 1px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border-radius: 100%;
    }

    svg {
      width: 24rem;
      height: 24rem;
      fill: #9A9A9A;
      position: relative;
      z-index: 2;
      transition: ease .1s;
    }

    &_img {
      border: 1px solid $light-gray;

      &:before {
        display: none;
      }
    }

    @include large-mobile {
      svg {
        fill: $default;
      }
    }
  }

  &__img {
    max-width: 90%;
    width: 100%;
    height: 90%;
    border-radius: inherit;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
   
  }

  &__edit {
    position: absolute;
    right: 1px;
    bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $blue;
    border-radius: 100%;
    width: 34rem;
    height: 34rem;


    svg {
      fill: #fff !important;
      width: 16rem;
      height: 16rem;
    }

    @include large-mobile {
      right: -3px;
    }
  }
}
.button-photo.add-avatar__btn {
  .button-photo__wrap{
    background-image: url("@/assets/img/border.png");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 100px;
    border: none;
  }
  &.error  .button-photo__wrap{
    background-image: url("@/assets/img/border-red.png");
  }
  &:hover .button-photo__wrap{
    background-image: url("@/assets/img/border-blue.png");
  }
}
</style>
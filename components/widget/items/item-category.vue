<template lang="pug">
  NuxtLink.item-category(:to="$changeRoute(to)")
    span.item-category__img
      //img(v-if="img.original_full_url" :src="img.original_full_url")
      set-img(v-if="img && img.original_full_url" :src="img" :default-img="img.original_full_url" small)
      .item-category__icon(v-else)
        svg-icon(name="grid")
    span.item-category__text.p(v-html="text")
    slot
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      default: () =>({})
    },
    to: {
      type: String,
      default: "#"
    },
    text: {
      type: String,
      default: "All categories "
    }
  }
}
</script>

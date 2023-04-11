<template lang="pug">
  main.main
    section-support(
      v-if="loading"
      :content="content"
      :background_images="background_images"
    )
</template>

<script>
import getConstructorPage from "@/mixins/getConstructorPage";

export default {
  data() {
    return {
      type: 'front_design',
      page_key: 'support',
    }
  },
  mixins: [getConstructorPage]
}
</script>

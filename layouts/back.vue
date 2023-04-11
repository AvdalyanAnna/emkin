<template lang="pug">
  .container
    .container__row
      .container__column.container__column_left
        part-back-sidebar
      .container__column.container__column_right
        .container__inner
          part-header(back :login="$auth.$state.loggedIn" showSearch :small="$auth.$state.loggedIn")
        Nuxt
        part-mobile-menu
        modal-search
        modal-location
        modal-languages
        modal-card
</template>
<script>
export default {
  middleware: ['auth'],
  head: {
    bodyAttrs: {
      class: 'admin'
    }
  }
}
</script>
<style lang="scss">
.admin {
  overflow: hidden;

  .back-sidebar__body {
    overflow: auto;

    &::-webkit-scrollbar {
      opacity: 0;
      width: 0;
    }
  }

  .container__column_right {
    height: 100vh;
    overflow: auto;

    @include large-mobile{
      height: 100%;
      overflow: auto;
      position: fixed;
      padding-bottom: 48px;
      width: 100vw;
      left: 0;
      overflow-x: hidden;
    }
  }
}

.admin.modal-open {
  .container__column_right {
    overflow: hidden;
  }
}
</style>

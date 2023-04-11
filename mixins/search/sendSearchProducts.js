import {encodeQuery} from "~/mixins/helpers/search";
import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions({
      SET_SEARCH_PRODUCTS: 'search/SET_SEARCH_PRODUCTS',
    }),
    searchProducts() {
      this.SET_SEARCH_PRODUCTS().then(search => {
        const path = this.$route.path.search('catalog') !== -1 ? this.$route.path : '/catalog'
        this.$router.push(`${path}?${encodeQuery(search)}`)
      })
    },
  }
}

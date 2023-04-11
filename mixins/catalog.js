import {mapActions, mapGetters, mapMutations} from "vuex";
import {cloneDeep} from 'lodash';
import {decodeQuery, encodeQuery} from "~/mixins/helpers/search";

export default {
  data() {
    return {
      apiFilter: null,
      answers: [],
      productKey: 0,
      pageLoading: false,
      resetFiltersKey: 0
    }
  },
  computed: {
    ...mapGetters({
      PAGE_CATALOG: 'pages/PAGE_CATALOG',
      PRODUCT_CART_TYPE: 'product/PRODUCT_CART_TYPE',
      PRODUCTS:'search/PRODUCTS',
      PRODUCTS_LOADING:'search/PRODUCTS_LOADING',
      SORT:'search/SORT',
      GET_PRODUCTS: 'search/GET_PRODUCTS',
      SEARCH_ANSWERS_IDS: 'search/SEARCH_ANSWERS_IDS',
    }),
    counter(){
      return this.SEARCH_ANSWERS_IDS.length
    },
    canGetProducts: {
      get() {
        return this.GET_PRODUCTS
      },
      set(val) {
        this.CHANGE_GET_PRODUCTS(val)
      }
    },
    sortList() {
      return [
        {
          label: this.PAGE_CATALOG.sortList[0].label,
          text: this.PAGE_CATALOG.sortList[0].text,
          value: 'orderBy=id&sortedBy=desc'
        },
        {
          label: this.PAGE_CATALOG.sortList[1].label,
          text: this.PAGE_CATALOG.sortList[1].text,
          value: 'orderBy=id&sortedBy=asc'
        },
        {
          label: this.PAGE_CATALOG.sortList[2].label,
          text: this.PAGE_CATALOG.sortList[2].text,
          value: 'orderBy=price&sortedBy=desc'
        },
        {
          label: this.PAGE_CATALOG.sortList[3].label,
          text: this.PAGE_CATALOG.sortList[3].text,
          value: 'orderBy=price&sortedBy=asc'
        }
      ]
    },
    sort: {
      get() {
        return this.SORT
      },
      set(val) {

        this.CHANGE_SORT(val)
      }
    },
  },
  destroyed() {
    this.SEARCH_PRODUCTS_NULL()
  },
  watch: {
    '$route': {
      handler: async function (slug) {
        const sort = decodeQuery(this.$route.query.data)
        if (sort.orderBy && sort.sortedBy) {
          this.sortList.forEach((item,index) => {
            let order = this.getSort(item.value)
            if (order.orderBy === sort.orderBy && order.sortedBy === sort.sortedBy) {
              this.sort = index
              this.sortKey++
            }
          })
        }
        // if(this.GET_PRODUCTS === true){
        //   this.handleLoadMore()
        // }
      },
      deep: true,
      immediate: true
    },
    GET_PRODUCTS(val) {
      // console.log(val)
      // if(val === true){
      //   this.handleLoadMore()
      // }
    }
  },
  async created() {
    this.SET_PAGE_CATALOG()
    // await this.openPage()
  },
  methods: {
    ...mapActions({
      SET_PAGE_CATALOG: 'pages/SET_PAGE_CATALOG',
      SEARCH_PRODUCTS: 'search/SEARCH_PRODUCTS',
      SEARCH_PRODUCTS_NULL: 'search/SEARCH_PRODUCTS_NULL',
    }),
    ...mapMutations({
      CHANGE_SORT: 'search/CHANGE_SORT',
    }),
    handleLoadMore($state){
      this.SEARCH_PRODUCTS(this.$route.query).then(res => {
        this.canGetProducts = false
      })
        // .then(loadState => {
        //   if (loadState) $state.loaded()
        //   else $state.complete()
        // })
    },
    getSort(val) {
      let obj = {}
      let order = val.split('&')
      obj.orderBy = order[0].split('=')[1]
      obj.sortedBy = order[1].split('=')[1]
      return obj
    },
    changeSort(){
      const order = this.getSort(this.sortList[this.sort].value)
      const query = decodeQuery(this.$route.query.data)
      query.orderBy = order.orderBy
      query.sortedBy = order.sortedBy
      const path = this.$route.path
      this.$router.push(`${path}?${encodeQuery(query)}`)
      this.sortKey++
    }
  }
}

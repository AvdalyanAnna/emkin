import {mapActions, mapGetters, mapMutations} from "vuex";
import {decodeQuery} from '@/mixins/helpers/search.js'

export default {

  data() {
    return {
      openSearchList: false,
      citySearch: '',
      getCategory: false,
    }
  },
  computed: {
    ...mapGetters({
      SEARCH: 'search/SEARCH',
      CITY: 'search/CITY',
      MILS: 'search/MILS',
      MIL: 'search/MIL',
      CITY_SEARCH: 'search/CITY_SEARCH',
      SEARCH_TEXT: 'search/SEARCH_TEXT',
      OPEN_PAGE: 'search/OPEN_PAGE',
      GET_PRODUCTS: 'search/GET_PRODUCTS',
      COST_FROM: 'search/COST_FROM',
      COST_TO: 'search/COST_TO',
    }),
    searchObject: {
      get() {
        return this.SEARCH
      },
      set(val) {
        this.CHANGE_SEARCH(val)
      }
    },
    mil: {
      get() {
        return this.MIL
      },
      set(val) {
        this.CHANGE_MIL(val)
      }
    },
    search: {
      get() {
        return this.SEARCH_TEXT
      },
      set(val) {
        this.CHANGE_SEARCH_TEXT(val)
      }
    },
    openPageStatus: {
      get() {
        return this.OPEN_PAGE
      },
      set(val) {
        this.CHANGE_OPEN_PAGE(val)
      }
    },
    canGetProducts: {
      get() {
        return this.GET_PRODUCTS
      },
      set(val) {
        this.CHANGE_GET_PRODUCTS(val)
      }
    },
    costTo: {
      get() {
        return this.COST_TO
      },
      set(val) {
        this.CHANGE_COST_TO(val)
      }
    },
    costFrom: {
      get() {
        return this.COST_FROM
      },
      set(val) {
        this.CHANGE_COST_FROM(val)
      }
    },
  },
  watch: {
    '$route': {
      handler: async function (slug) {
        const routeParams = slug.params.pathMatch
        if (!this.openPageStatus) {
          this.openPageStatus = true
          this.canGetProducts = false
          this.openSearchPage().then(() => {
            if (routeParams) {
              const slug = routeParams.split('/')
              this.SET_CATEGORY(slug[slug.length - 1]).then((category) => {
                this.getProductsList(category.id)
                this.canGetProducts = true
                this.openPageStatus = false
              })
            } else {
              this.getProductsList()
              this.canGetProducts = true
              this.openPageStatus = false
            }

          })
        }
      },
      deep: true,
      immediate: true
    },
    citySearch(city) {
      if (this.openSearchList) {
        const ref = this.$refs.infiniteLoading
        if (ref) this.$refs.infiniteLoading.stateChanger.reset()
        this.SET_CITIES_PAGE(1).then(() => {
          this.loading = true
          let str = this.CITY.name !== city ? city : ''
          this.SET_CITIES(`name:${str}`).then(() => {
            this.loading = false
          })
        })
      }
    },
    CATEGORY(category) {
      this.SET_SEARCH_CATEGORY_ID(category).then(() => this.canGetProducts = true)
      this.SET_FILTERS(category.id)

    }
  },
  created() {
    this.SET_CATEGORIES(this.$i18n.lang);
  },
  methods: {
    ...mapMutations({
      CHANGE_SEARCH: 'search/CHANGE_SEARCH',
      CHANGE_MIL: 'search/CHANGE_MIL',
      CHANGE_CITY_SEARCH: 'search/CHANGE_CITY_SEARCH',
      CHANGE_SEARCH_TEXT: 'search/CHANGE_SEARCH_TEXT',
      CHANGE_OPEN_PAGE: 'search/CHANGE_OPEN_PAGE',
      CHANGE_GET_PRODUCTS: 'search/CHANGE_GET_PRODUCTS',
      CHANGE_COST_TO: 'search/CHANGE_COST_TO',
      CHANGE_COST_FROM: 'search/CHANGE_COST_FROM',
      GET_SEARCH_ANSWERS_IDS: 'search/GET_SEARCH_ANSWERS_IDS',
      CHANGE_PAGE: 'search/CHANGE_PAGE',
      CHANGE_ITEM_SEARCH_ANSWERS_IDS: 'search/CHANGE_ITEM_SEARCH_ANSWERS_IDS',

    }),
    ...mapActions({
      SET_CATEGORIES: 'category/SET_CATEGORIES',
      SET_SEARCH_MIL: 'search/SET_SEARCH_MIL',
      SET_SEARCH_CITY: 'search/SET_SEARCH_CITY',
      SET_CATEGORY: 'category/SET_CATEGORY',
      SET_SEARCH_CATEGORY_ID: 'search/SET_SEARCH_CATEGORY_ID',
      SEARCH_PRODUCTS: 'search/SEARCH_PRODUCTS',
      SET_FILTERS: 'category/SET_FILTERS',

    }),
    openSearchPage() {
      return new Promise((resolve, reject) => {
        const query = decodeQuery(this.$route.query.data)
        this.openPageChangeMil(query.mil)
        this.openPageChangeCity(query)
        this.openPageChangeSearch(query)
        this.openPageChangeFilters(query)

        const price = query.price
        if (price) {
          const prices = price.split(',')
          this.costFrom = prices[0]
          this.costTo = prices[1]
          this.key++
        } else {
          this.costFrom = ''
          this.costTo = ''
          this.key++
        }
        this.CHANGE_PAGE(query.page || 1)
        resolve(true)
      })

    },
    openPageChangeMil(mil) {
      if (mil) {
        const findMil = this.MILS.find(item => item.key === mil)
        if (findMil) {
          this.mil = findMil.text
          this.SET_SEARCH_MIL(findMil)
        } else {
          this.mil = '50 mil'
          this.SET_SEARCH_MIL({text: '50 mi', key: '50'})
        }
      } else {
        this.mil = '50 mil'
        this.SET_SEARCH_MIL({text: '50 mi', key: '50'})
      }
    },
    openPageChangeCity(query) {
      if (query.city_id) {
        this.cityIdQuery = query.city_id
        this.$axios.$get(`${this.$api.countries.search}id:${query.city_id}`)
          .then(({data}) => {
            const city = data[0]
            this.SET_SEARCH_CITY(city)
            this.citySearch = city.name
          })
      } else {
        this.SET_SEARCH_CITY(this.LOCATION)
        if (this.LOCATION) this.citySearch = this.LOCATION.name || 'All of America'
      }
    },
    openPageChangeSearch(query) {
      const search = query.search_text
      if (search) this.search = search
      else this.search = ''
    },
    openPageChangeFilters(query) {
      const answersFiltersIds = query.answersFiltersIds
      if (answersFiltersIds) this.GET_SEARCH_ANSWERS_IDS(JSON.parse(answersFiltersIds))
      else this.GET_SEARCH_ANSWERS_IDS({})
    },
    changeMil(mil) {
      const findMil = this.MILS.find(item => item.text === mil)
      if (findMil) {
        this.mil = findMil.text
        this.SET_SEARCH_MIL(findMil)
        this.searchProducts()
      }
    },
    changeCityItem(val) {
      this.SET_SEARCH_CITY(val)
      this.citySearch = val.name
      this.searchProducts()
    },
    clearCities(val) {
      this.SET_SEARCH_CITY({id: 0, name: ''})
      this.citySearch = ''
    },
    getProductsList(categoryId) {
      const isPageCatalog = this.$route.path.search('catalog') !== -1
      if (isPageCatalog) {
        this.SEARCH_PRODUCTS(categoryId).then(res => {
          this.canGetProducts = false
        })
      }
    }
  }
}

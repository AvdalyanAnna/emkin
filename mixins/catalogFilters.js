import {mapActions, mapGetters, mapMutations} from "vuex";
import {cloneDeep, findIndex} from 'lodash';
import {encodeQuery} from "~/mixins/helpers/search";

export default {
  data() {
    return {
      // answersIds: [],
      filterForm: {
        category: {},
        answers: [],
        answersIds: [],
      },
      activeFilter: null,
      resetFiltersKey: 0
    }
  },
  computed: {
    ...mapGetters({
      CATEGORY_FILTERS: 'category/CATEGORY_FILTERS',
      COST_FROM: 'search/COST_FROM',
      COST_TO: 'search/COST_TO',
      SEARCH_ANSWERS_IDS: 'search/SEARCH_ANSWERS_IDS',
      SEARCH_CATEGORY: 'search/SEARCH_CATEGORY',
      CATEGORY: 'category/CATEGORY',
    }),
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
    allFilters() {
      let filters = cloneDeep(this.CATEGORY_FILTERS)
      let newFilters = []
      filters.forEach((item) => {
        let subTitle = []
        item.answers.forEach((answer) => {
          let ids = cloneDeep(this.answersIds || [])
          if (ids.length > 0) {
            let ok = findIndex(ids, (item) => +item === answer.id)
            if (ok >= 0) subTitle.push(answer.name)
            answer.checked = ok >= 0
          } else {
            answer.checked = false
          }
        })
        newFilters.push({...item, subTitle})
      })
      this.resetFiltersKey++
      return newFilters
    },
    answersIds: {
      get() {
        return this.SEARCH_ANSWERS_IDS
      },
      set(val) {
        // this.CHANGE_SEARCH_ANSWERS_IDS(val)
      }
    }
  },
  watch: {
    '$route': {
      handler: function (slug) {
        const route = this.$route.query.answers || []
        const answers = this.$route.query.answers
        if (answers) {
          let res = []
          if (typeof answers === 'string') {
            res = [answers]
          } else {
            res = answers
          }
          this.filterForm.answersIds = res
          this.answersIds = res

          let filters = cloneDeep(this.ALL_FILTERS)
          filters.filters['answers.id'] = this.filterForm.answersIds
          filters.filters.answers = this.filterForm.answersIds
          this.SET_ALL_FILTERS(filters)
          this.resetFiltersKey++
        }
      },
      deep: true,
      immediate: true
    },
    CATEGORY(category) {
      this.activeCategory = cloneDeep(category)
      // this.SET_SEARCH_CATEGORY_ID(category.id)
      // this.SET_FILTERS(category.id)
    }
  },
  async created() {
  },
  methods: {
    ...mapActions({
      SET_FILTERS_CHANGE: 'category/SET_FILTERS_CHANGE',
      SET_ALL_FILTERS: 'category/SET_ALL_FILTERS',
      SET_CATEGORY_NULL: 'category/SET_CATEGORY_NULL',
      SET_FILTERS: 'category/SET_FILTERS',
      SET_SEARCH_CATEGORY_ID: 'search/SET_SEARCH_CATEGORY_ID',
      SET_SEARCH_ANSWERS_IDS: 'search/SET_SEARCH_ANSWERS_IDS',
      SET_SEARCH_PRODUCTS: 'search/SET_SEARCH_PRODUCTS',
      SET_GLOBAL_SEARCH_ANSWERS: 'search/SET_GLOBAL_SEARCH_ANSWERS',
    }),
    ...mapMutations({
      CHANGE_COST_TO: 'search/CHANGE_COST_TO',
      CHANGE_COST_FROM: 'search/CHANGE_COST_FROM',
      GET_SEARCH_ANSWERS_IDS: 'search/GET_SEARCH_ANSWERS_IDS',
      CHANGE_ITEM_SEARCH_ANSWERS_IDS: 'search/CHANGE_ITEM_SEARCH_ANSWERS_IDS',
    }),
    blurCostTo() {
      if (this.costFrom !== '' && +this.costFrom > +this.costTo) {
        this.costTo = this.costFrom
        this.key++
      }
    },
    blurCostFrom() {
      if (this.costTo !== '' && +this.costTo < +this.costFrom) {
        this.costFrom = this.costTo
        this.key++
      }
    },
    changeAnswersItem({value, index}) {
      this.SET_SEARCH_ANSWERS_IDS({value, index})
    },
    readyFilter() {
      if (this.step === 1 && this.modalShow === 1) {
        this.readyFilterCategory()
      } else if (this.step === 1 && this.modalShow === 2) {
        this.readyFilterAnswers()
      } else {
        this.readyFilterAll()
      }
    },
    readyFilterAllBtn() {
      this.saveFilter()
      this.readyFilterAll()
    },
    readyFilterAnswers() {
      this.CHANGE_ITEM_SEARCH_ANSWERS_IDS({value: this.answersList, index: this.activeFilter.index})
      this.step = 0
      this.modalShow = 0
      this.answersList = []
      this.activeFilter = null
      // let ans = cloneDeep(this.answersIds)
      // this.filterForm.answersIds = ans
      // let res = cloneDeep(this.CATEGORY_FILTERS)
      // let answers = this.answersIds
      // res.forEach((item) => {
      //   item.answers.forEach((answer) => {
      //     answer.checked = answers.findIndex(i => i === answer.id) >= 0
      //   })
      // })
      // let filters = cloneDeep(this.ALL_FILTERS)
      // filters.filters['answers.id'] = ans
      // filters.filters.answers = ans
      // this.SET_ALL_FILTERS(filters)
      // this.SET_FILTERS_CHANGE(res)

      //
      // let path = this.filterForm.category.to || this.$route.path
      // let {price} = this.ALL_FILTERS.filters
      // let query = cloneDeep(this.$route.query)
      // query.price = price
      // query.answers = answers
      // this.$router.push({path, query})
    },
    clearAnswers() {
      this.GET_SEARCH_ANSWERS_IDS({})
    },
    readyFilterCategory() {
      // this.filterForm.category = cloneDeep(this.activeCategory)
      this.SET_SEARCH_CATEGORY_ID(this.activeCategory)
      this.SET_FILTERS(this.activeCategory.id)
      this.step = 0
      this.modalShow = 0
      this.clearAnswers()
    },
    readyFilterAll() {
      let path = this.$changeRoute('/catalog')
      if (this.SEARCH_CATEGORY.id !== 0) path = this.SEARCH_CATEGORY.to || this.$route.path
      this.SET_SEARCH_PRODUCTS().then(query => {
        this.$router.push(`${path}?${encodeQuery(query)}`)
        this.$bvModal.hide('modal-catalog-filter')
      })
    },


    resetAnswers() {
      this.CHANGE_ITEM_SEARCH_ANSWERS_IDS({value: [], index: this.activeFilter.index})
      this.step = 0
      this.modalShow = 0
      this.answersList = []
      this.activeFilter = null
    },
    resetFilter() {
      if (this.step === 1 && this.modalShow === 1) {
        this.activeCategory = {id: 0}
        this.SET_SEARCH_CATEGORY_ID({id:''})
        this.SET_FILTERS(0)
      } else if (this.step === 1 && this.modalShow === 2) {
        this.resetAnswers()
      } else {
        this.costFrom = ''
        this.costTo = ''
        this.activeCategory = {id: 0}
        this.SET_SEARCH_CATEGORY_ID({id:''})
        this.SET_FILTERS(0)
          this.$router.push(this.$changeRoute('/catalog'))
        this.$bvModal.hide('modal-catalog-filter')
      }
    },
    saveFilter() {
      this.SET_GLOBAL_SEARCH_ANSWERS()
    }
  }
}

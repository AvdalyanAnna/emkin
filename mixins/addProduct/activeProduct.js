import {mapGetters} from "vuex";

export default {
  data() {
    return {
      serverFiles: [],
      serverFilesLength: 0,
      allFiles: [],
      activeCategoryParentId: 0,
    }
  },
  computed: {
    ...mapGetters({
      LOCATION: 'location/LOCATION',
    }),
    getFiles() {
      return this.$collect(this.allFiles).sortBy('order_column').all()
    }
  },
  async mounted() {
    const slug = this.$route.params.product
    if (slug) await this.getActiveProduct(slug)
    else {
      const city = this.LOCATION
      if (city && city.id !== 'c1') {
        this.form.city_id = city.id
        this.form.latitude = city.latitude
        this.form.longitude = city.longitude
        this.city = city
        this.city.latitude = city.latitude
        this.city.longitude = city.longitude
        const key = 'AIzaSyAfzsHDpPK39W0RJ2hKQ234fq6bD3w-G3E'
        this.$axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${city.latitude},${city.longitude}&key=${key}`).then(({data: {results}}) => {
          this.form.address = results[0].formatted_address
        })
      }
    }

    this.allFiles = [...this.serverFiles, ...this.files]

  },
  methods: {
    async getActiveProduct(slug) {
      const {data} = await this.$axios.$get(`/products/${slug}?with=category;author.avatar;gallery;city.state_minimal_select;answers.filter`)
      const form = {
        id: data.id,
        name: data.name,
        description: data.description,
        price: data.price,
        available_cost: data.available_cost || 0,
        price_policy: data.price_policy || 1,
        answers: [],
        link: data.link,
        address: data.address,
        contact_phone: data.contact_phone,
        contacts: data.contacts,
        auto_renewal: data.auto_renewal,
        city_id: data.city.id,
        latitude: data.latitude,
        longitude: data.longitude,
      }
      this.city = data.city
      this.city.latitude = data.latitude
      this.city.longitude = data.longitude
      this.serverFiles = data.gallery
      this.serverFilesLength = data.gallery.length
      this.answers = data.answers
      const filterField = `filter=id;slug;name;parent_id`
      const withField = `with=picture;allSubCategories;parentCategories.allSubCategories`
      const category = await this.$axios.$get(`/categories?searchFields=id:=&search=${data.category.id}&${filterField}&${withField}`)
      this.category = category.data[0]
      if (this.category.parentCategories) this.activeCategoryParentId = this.category.id
      this.breadcrumbs = this.$categoryBreadcrumbs(category.data[0])
      data.answers.forEach(item => form.answers.push(item.id))
      this.form = form
      this.active = this.content.form.nav.findIndex(item => item.status === data.price_policy)
      this.step = 2
    }
  }
}

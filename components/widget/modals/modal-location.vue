<template lang="pug">
  b-modal(
    id="modal-location"
    ref="modal-location"
    size="languages"
    modal-class="modal-location"
    body-class="modal-location__body"
    header-class="modal-location__header"
    footer-class="modal-location__footer"
    @hide="closeModal"
    @show="openModal"
    centered
  )
    template(#modal-header='{ close }')
      button-close.modal__close(@click.native='closeModal()')
    template(v-if="POPUP_LOCAL")
      h3.modal-location__title.h3 {{ POPUP_LOCAL.title }}
      transition(name="page")
        .alert-error(v-if="error && error !== ''" ) {{ error }}
        .alert-error(v-if="locationError") Can't take location
        .alert-error(v-else-if="locationErrorCity") Can't take city
      .modal-location__search(v-if="!editCity")
        form-input(v-model="search" @input="searchCity" name="search" :placeholder="POPUP_LOCAL.search" icon="search" )
      .modal-location__list.css-scrollbar
        template(v-if="editCity")
          part-location-head(@change="backStep()")
          div(v-if="LOCATION_CITY && LOCATION_CITY.id !== 'c1'")
            form-input.form-create__input.w-100(
              placeholder="Address"
              :key="keyAddress"
              type="type"
              v-model="address"
              @keyup="getCoordinates()"
            )
            .form-create__field-map
              google-map(draggable @changeLocation="changeLocation" :lat="newCity.latitude" :lng="newCity.longitude")
        div(v-else-if="canChangeState && search === ''")
          part-location-head( withoutCity @change="backStep('canChangeState')")
        template(v-if="(!editCity && canChangeState) || search !== ''")
          part-location-list(
            :list="search === '' ? LOCATION_CITIES : LOCATION_CITIES_SEARCH"
            withOutAuth
            :active="1|| 0"
            @state="changeCity"
            :showState="search !== ''"
            :content="POPUP_LOCAL"
            :title="POPUP_LOCAL.city"
          )
          div(v-if="search === '' ? LOCATION_CITIES.length === 0 : LOCATION_CITIES_SEARCH.length === 0") {{POPUP_LOCAL.noData}}
          infinite-loading(v-if="LOCATION_CITIES.length > 0 || LOCATION_CITIES_SEARCH.length > 0" :distance="100" ref="infiniteLoading" @infinite="infinite")
            div(slot="no-results")
            div(slot="no-more")
            div(slot="spinner")
        part-location-list(
          v-if="!canChangeState && search === ''"
          :list="LOCATION_STATES"
          @help="detectLocation" @state="changeState"
          @edit="changeState"
          :active="LOCATION_STATE ? LOCATION_STATE.id : 0"
          :title="POPUP_LOCAL.state"
        )
    template(#modal-footer='{ close }')
      .modal-location__buttons.flex
        div
        button-primary.modal-location__btn(small gray @click.native='closeModal()') {{POPUP_GLOBAL.close || 'close'}}
        button-primary.modal-location__btn(small blue @click.native='save()') {{POPUP_GLOBAL.save || 'save'}}

</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import modalLocation from "@/mixins/modalLocation";
import {cloneDeep} from 'lodash';

export default {
  data() {
    return {
      keyAddress: 0,
      address: '',
      search: '',
      stateList: null,
      state: null,
      stateName: '',
      canChangeState: false,
      editCity: false,
      error: '',
      locationError: false,
      locationErrorCity: false,
      newCity: {
        latitude: 0,
        longitude: 0,
      }
    }
  },
  mixins: [modalLocation],
  watch: {
    editCity(flag) {
      if (!flag) {
        this.CHANGE_LOCATION_CITY_SEARCH_PAGE_FIRST()
        this.SET_LOCATION_CITIES()
      }
    },
    '$i18n.locale'(val) {
      this.SET_POPUP_LOCAL(this.$i18n.locale)
    },
  },
  computed: {
    ...mapGetters({
      LOCATION: 'location/LOCATION',
      LOCATION_STATES: 'location/LOCATION_STATES',
      LOCATION_STATE: 'location/LOCATION_STATE',
      LOCATION_CITIES: 'location/LOCATION_CITIES',
      LOCATION_CITIES_SEARCH: 'location/LOCATION_CITIES_SEARCH',
      LOCATION_CITY: 'location/LOCATION_CITY',
      POPUP_GLOBAL: 'popup/POPUP_GLOBAL',
      POPUP_LOCAL: 'popup/POPUP_LOCAL',
      CITY_LAST_PAGE: 'location/CITY_LAST_PAGE',
      CITY_PAGE: 'location/CITY_PAGE',
    })
  },
  methods: {
    ...mapActions({
      SET_LOCATION: 'location/SET_LOCATION',
      SET_LOCATION_STATES: 'location/SET_LOCATION_STATES',
      SET_LOCATION_STATE: 'location/SET_LOCATION_STATE',
      SET_LOCATION_CITIES: 'location/SET_LOCATION_CITIES',
      SET_LOCATION_CITIES_SEARCH: 'location/SET_LOCATION_CITIES_SEARCH',
      SET_LOCATION_CITIES_SEARCH_PAGE: 'location/SET_LOCATION_CITIES_SEARCH_PAGE',
      SET_LOCATION_CITIES_PAGE: 'location/SET_LOCATION_CITIES_PAGE',
      SET_LOCATION_CITY: 'location/SET_LOCATION_CITY',
      SET_POPUP_LOCAL: 'popup/SET_POPUP_LOCAL',
    }),
    ...mapMutations({
      CHANGE_LOCATION_CITY_SEARCH_PAGE_FIRST: 'location/CHANGE_LOCATION_CITY_SEARCH_PAGE_FIRST'
    }),
  backStep(val){
   if(val === 'canChangeState') {
     this.canChangeState = false
   }else{
     if(this.LOCATION_CITY.id === 'c1') this.canChangeState = false
     this.editCity = false
   }
  },
    async getCoordinates() {
      if (this.address !== '') {
        const activeCity = `${this.newCity.name} ${this.newCity.state_minimal_select.name}`
        const key = 'AIzaSyAfzsHDpPK39W0RJ2hKQ234fq6bD3w-G3E'
        const response = await this.$axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${activeCity} ${this.address}&key=${key}`)
        const {lat, lng} = response.data.results[0].geometry.location
        this.newCity.latitude = lat
        this.newCity.longitude = lng
      }

    },
    changeLocation({latitude, longitude, address}) {
      this.newCity.latitude = latitude
      this.newCity.longitude = longitude
      this.address = address
      this.keyAddress++
    },
    searchCity() {
      this.CHANGE_LOCATION_CITY_SEARCH_PAGE_FIRST()
      const ref = this.$refs.infiniteLoading
      if (ref) this.$refs.infiniteLoading.stateChanger.reset()
      this.SET_LOCATION_CITIES_SEARCH(this.search)

    },
    changeState(val) {
      if(val.id === 'c1'){
        this.canChangeState = true
        this.editCity = true
        this.newCity = val
        this.SET_LOCATION_STATE(val)
        this.SET_LOCATION_CITY(val)
      }else{
        const ref = this.$refs.infiniteLoading
        if (ref) this.$refs.infiniteLoading.stateChanger.reset()
        this.SET_LOCATION_STATE(val)
        this.canChangeState = true
        const key ='AIzaSyAfzsHDpPK39W0RJ2hKQ234fq6bD3w-G3E'
        this.$axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${val.latitude},${val.longitude}&key=${key}`).then(( {data:{results}})=>{
          this.address = results[0].formatted_address
          this.$sentryReady().then((sentry) => sentry.captureMessage(JSON.stringify({address:this.address})))
        })
        this.SET_LOCATION_CITIES()
      }

    },
    openModal() {
      this.SET_LOCATION_STATES()
      this.SET_POPUP_LOCAL(this.$i18n.locale)
      this.locationErrorCity = false
      this.locationError = false
      if (this.LOCATION) {
          this.SET_LOCATION_STATE(this.LOCATION)
        this.canChangeState = true
        this.editCity = true
        this.changeCity(this.LOCATION)
        const key ='AIzaSyAfzsHDpPK39W0RJ2hKQ234fq6bD3w-G3E'
        this.$axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.LOCATION_CITY.latitude},${this.LOCATION_CITY.longitude}&key=${key}`).then(( {data:{results}})=>{
          this.address = results[0].formatted_address
        })
      }
    },
    changeCity(val) {
      this.newCity = cloneDeep(val)
      this.SET_LOCATION_CITY(val)
      this.changeState(val)
      this.editCity = true
      this.error = null
      this.search = ''

    },
    closeModal() {
      this.search = ''
      this.error = ''
      this.canChangeState = false
      this.$bvModal.hide('modal-location')
    },
    save() {
      if (this.newCity && (this.newCity.name || this.newCity.id === 'c1')) {
        this.search = ''
        this.SET_LOCATION({city:this.newCity,user:this.$auth.loggedIn})
        if (this.$auth.loggedIn) {
          let array = {}
          if(this.newCity.id === 'c1'){
            array = {
              country: 1
            }
          }else{
            array = {
              city_id: this.newCity.id,
              country: 0,
              latitude: ""+this.newCity.latitude,
              longitude: ""+this.newCity.longitude,
            }
          }
          this.$axios.$put(this.$api.settings, array)
        }
        this.$bvModal.hide('modal-location')
      } else {
        this.error = "Haven't State or City"
      }
    },
    getApi() {
      if (this.search !== '') return this.SET_LOCATION_CITIES_SEARCH(this.search)
      else return this.SET_LOCATION_CITIES()
    },
    infinite($state) {

      if (this.CITY_PAGE >= this.CITY_LAST_PAGE) $state.complete()

      this.SET_LOCATION_CITIES_SEARCH_PAGE(this.CITY_PAGE + 1)

      this.getApi()
        .then(loadState => {
          if (loadState) $state.loaded()
          else $state.complete()
        })


    }
  }
}
</script>
<style lang="scss">
.modal-location {
  padding: 0;

  &.modal-dialog {
    max-width: 632px;
    width: 100%;
  }

  .modal-content {
    padding: 50rem;
    @include large-mobile {
      padding: 30rem 20rem;
    }
  }

  .modal__close {
    width: 34rem;
    height: 34rem;
  }

  &__title {
    font-weight: 500;
    margin-bottom: 25px;
    font-family: 'Atyp Display';
  }

  &__error {
    margin-top: 10px;
  }

  &__footer {
    padding: 0;
    border: 0;
    margin-top: 20rem;
    display: block;
  }


  &__buttons {
    @include items(3, 5);
  }

  &__search {
    margin: 30rem 0 25rem;

    .input__icon {
      width: 14rem;
      height: 14rem;
      margin-top: -7rem;
      fill: #6E6E73;
    }

  }

  &__list {
    max-height: 469px;
    height: 55vh;


    &-edit {
      padding: 6px 12px;
      background: #FFFFFF;
      border-radius: 4px;
      color: #556DEE;
      font-size: 17rem;
      line-height: 100%;
      @include large-mobile {
        font-size: 14rem;
      }
    }

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 17rem;
      line-height: 100%;
      margin-bottom: 25rem;
      padding: 0 20rem;
      @include large-mobile {
        font-size: 14rem;
      }
    }

    &-active {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #F5F5F7;
      font-size: 20px;
      line-height: 120%;
      margin-bottom: 20px;
      @include large-mobile {
        font-size: 16rem;
      }
    }

    &-title {
      color: #9A9A9A;
    }

    &-helper {
      color: #556DEE;
      cursor: pointer;
    }

    &-item {
      padding-bottom: 20rem;
      margin-bottom: 30rem;
      border-bottom: 1rem solid #D2D2D7;

      &:nth-last-child(1) {
        margin-bottom: 0;
        border-bottom: none;
      }
    }

  }

  &__item {
    padding: 15rem 20rem;
    font-size: 20rem;
    line-height: 120%;
    color: #062439;
    border-radius: 5rem;
    transition: 0.3s;
    cursor: pointer;
    @include large-mobile {
      font-size: 16rem;
    }

    &.active,
    &:hover {
      background: #F5F5F7;
    }

    span {
      font-weight: 400;
      font-size: 17px;
      color: #6E6E73;
      padding-left: 10px;
      @include large-mobile {
        font-size: 14rem;
      }
    }

  }

}
</style>

export default {
  methods:{
    /**
     * detectLocation() - функция, которая определяет местоположение пользователя
     */
    detectLocation() {
      this.$sentryReady().then((sentry) => sentry.captureMessage('start 1'))
      if (navigator.geolocation){
        this.$sentryReady().then((sentry) => sentry.captureMessage('start 2'))
        navigator.geolocation.getCurrentPosition(
            this.geoLocationSuccess,
            this.geoLocationError,
            {timeout: 10000}
        );
      } else {
        this.$sentryReady().then((sentry) => sentry.captureMessage('start 3'))
        this.locationError = true
      }
    },
    /**
     * geoLocationSuccess() - функция, которая получает координаты пользователя и отправляет запрос на сервер
     * @param pos
     */
     geoLocationSuccess(pos) {
      let latitude = pos.coords.latitude,
        longitude = pos.coords.longitude;

      this.$sentryReady().then((sentry) => sentry.captureMessage(JSON.stringify({pos})))
      this.$axios.get("https://nominatim.openstreetmap.org/reverse?format=json&accept-language=en&&lat=" + latitude + "&lon=" + longitude).then(res => {
        let city = res.data.address.city || res.data.address.town || res.data.address.county || res.data.address.village || res.data.address.country;
        let state = res.data.address.state;
        this.$sentryReady().then((sentry) => sentry.captureMessage(JSON.stringify(res)))
        this.$axios.$get(`/check-city?latitude=${latitude}&longitude=${longitude}&city=${city}&state=${state}`)
          .then(({data}) => {
            this.$sentryReady().then((sentry) => sentry.captureMessage(JSON.stringify(data)))
            let url = `/search-cities?with=state&searchJoin=and&search=`
            if (data.city) {
              url+=`id:${data.city.id}`
            } else {
              url+=`name:${city};state.name:${state}&searchFields=name:=;state.name:=`
            }
            this.$axios.$get(url).then(({data}) => {
              this.$sentryReady().then((sentry) => sentry.captureMessage(JSON.stringify({search:data})))
              if(data.length === 0) {
                this.locationErrorCity = true
              }else{
                this.city = data[0]
                this.city.state_minimal_select = {
                  name: data[0].state.name,
                  id: data[0].state.id
                }
                this.locationErrorCity = false
                this.locationError = false
                this.error = false
                this.editCity = true
                this.state = data[0].state
                this.stateName = data[0].state.name
                this.SET_LOCATION_STATE(data[0].state)
                this.SET_LOCATION_CITY(this.city)
                this.canChangeState = true
                this.editCity = true
                this.newCity = {...this.city,latitude,longitude}
                const key ='AIzaSyAfzsHDpPK39W0RJ2hKQ234fq6bD3w-G3E'
                this.$axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`).then(( {data:{results}})=>{
                  this.address = results[0].formatted_address
                  this.$sentryReady().then((sentry) => sentry.captureMessage(JSON.stringify({address:this.address})))
                })
              }
            }).catch(() => this.locationErrorCity = true)
          }).catch(() => this.locationErrorCity = true)
      });


    },
    geoLocationError(error) {
      this.$sentryReady().then((sentry) => sentry.captureMessage(JSON.stringify({error})))

      this.locationError = true
    },
  }
}

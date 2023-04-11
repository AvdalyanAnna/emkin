import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      LOCATION: 'location/LOCATION'
    }),
    /**
     * distance() - функция, возвращающая расстояние между двумя точками
     * @returns {boolean|*}
     */
    distance() {
      let productCoordinates = this.coordinates,
        myCoordinates = this.LOCATION,
        res = false
      if (myCoordinates) {
        if (typeof myCoordinates === 'string') myCoordinates = JSON.parse(myCoordinates)
        // если id не равен c1, то вычисляется расстояние между двумя точками
        if (myCoordinates.id !== 'c1' && myCoordinates.latitude && myCoordinates.longitude) {
          let distance = this.getDistance(myCoordinates, productCoordinates)
          if (typeof distance === 'number') res = this.getMills(distance)
        }
      }
      return res
    },
  },
  methods: {
    /**
     * @description - функция, возвращающая расстояние между двумя точками
     * @param origins
     * @param destinations
     * @returns {boolean|*}
     */
    getDistance(origins, destinations) {
      try {
        let origin = new google.maps.LatLng(parseFloat(origins.latitude), parseFloat(origins.longitude));
        let destination = new google.maps.LatLng(parseFloat(destinations.latitude), parseFloat(destinations.longitude));
        return google.maps.geometry.spherical.computeDistanceBetween(origin, destination)
      } catch (e) {
        return false
      }
    },
    /**
     * @description - функция, возвращающая расстояние в милях
     * @param distance
     * @returns {string,number}
     */
    getMills(distance) {
      let res = distance * 0.000621371;
      return res.toFixed(1)
    }
  }
}

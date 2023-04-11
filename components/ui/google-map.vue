<template lang="pug">
  client-only
    gmap-map(
      :zoom="14"
      :center="{lat: +lat,lng: +lng}"
      map-type-id='terrain'
      class='map' id='map'
      :options="mapOptions"
    )
      gmap-marker(:position="{lat: +lat,lng: +lng}" :draggable="draggable" @dragend="onMarkerDragEnd"  :icon="require('@/assets/img/mapIcon.png')")
      gmap-circle(v-if="!draggable" :center="{lat: +lat,lng: +lng}"  :options="options" :radius="200")
</template>

<script>

export default {
  props: {
    lng: {
      type: [String, Number]
    },
    lat: {
      type: [String, Number]
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options:{
        strokeColor:'#556DEE',
        fillColor:'#556DEE',
        fillOpacity:0.14,
        strokeOpacity:1,
        strokeWeight:2,
        visible:true
      },
      mapOptions: {
        zoom: 16,
        disableDefaultUI: true,
        styles: []
      },
    }
  },
  methods: {
    onMarkerDragEnd(event) {
      const latitude = event.latLng.lat()
      const longitude = event.latLng.lng()
      this.getAddress({latitude, longitude})
    },
    async getAddress({latitude, longitude}) {
      try {
        const key ='AIzaSyAfzsHDpPK39W0RJ2hKQ234fq6bD3w-G3E'
        const {data:{results}} = await this.$axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`)
        const address = results[0].formatted_address
        this.$emit('changeLocation', {latitude, longitude,address})
      } catch (error) {
        console.log(error)
      }
    },
  }
}
</script>


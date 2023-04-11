import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAfzsHDpPK39W0RJ2hKQ234fq6bD3w-G3E',
    libraries: ['geometry','places']
  }
})


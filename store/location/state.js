export default () => ({
  locationStates:[],
  locationState:null,
  locationCities:[],
  locationCity:null,
  locationCityPage:1,
  searchCities:[],
  searchCityPage:0,
  searchCityPageLast:1,
  location: localStorage.getItem('city') ? JSON.parse(localStorage.getItem('city')) : null,
})



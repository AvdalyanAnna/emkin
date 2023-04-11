export default () => ({
  cities: [],
  citiesRecomendation: [],
  city: typeof window !== 'undefined' &&  localStorage.getItem('city') ?JSON.parse( localStorage.getItem('city')) : {},
  page:1,
  lastPage: 10,
  per_page: 5,
})



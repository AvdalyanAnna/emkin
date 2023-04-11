export default  () => ({
  user: null,
  translate: typeof window !== 'undefined' ? +localStorage.getItem('translate') : 0,
})



export default function ({ $axios, $auth, redirect, store,i18n }) {
  $axios.onRequest((config) => {
    config.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Language': i18n.localeProperties.code,
    }
  })

  $axios.onError((error) => {
    if (error.response.status === 500) {
      // redirect('/error')
    }
  })
}

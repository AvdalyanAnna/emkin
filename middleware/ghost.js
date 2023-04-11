export default ({ app, redirect }) => {
  if(app.$auth.user)  return redirect('/')
}

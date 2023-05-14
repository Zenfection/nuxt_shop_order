export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()
  const pathRequresAuth = ['/account', '/cart', '/checkout', '/orders']
  if (pathRequresAuth.includes(to.path) && !user.value) {
    return navigateTo('/login')
  }
})

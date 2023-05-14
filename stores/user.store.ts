import { User, CartItem, OrderItem } from '../utils/types'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    cart: [] as CartItem[],
    orders: [] as OrderItem[],
    token: null as string | null,
  }),

  persist: true,

  getters: {
    isAuthenticated: (state): boolean => !!state.token,
    totalMoney: (state): number =>
      state.cart.reduce((total, item) => {
        const discountPrice =
          item.product.price -
          (item.product.price * item.product.discount) / 100
        return total + discountPrice * item.amount
      }, 0),
    totalAmount: (state): number =>
      state.cart.reduce((total, item) => total + item.amount, 0),
  },

  actions: {
    async login(username: string, password: string): Promise<boolean> {
      const data = { username, password }
      try {
        const response = await UserService.login(data)
        if (response.value.status === 'success') {
          // success
          const userData = response.value.user
          const {
            _id,
            username,
            fullname,
            email,
            phone,
            address,
            province,
            district,
            ward,
            token,
          } = userData
          this.user = {
            _id,
            username,
            fullname,
            email,
            phone,
            address,
            province,
            district,
            ward,
            token,
          }

          return true
        }
        return false
      } catch (error) {
        // console.log(error);
        return false
      }
    },

    logout(): void {
      this.user = null
      this.token = null
    },

    setCart(cart: CartItem[]): void {
      this.cart = cart
    },

    clearCart(): void {
      this.cart = []
    },

    setOrder(orders: OrderItem[]): void {
      this.orders = orders
    },
  },
})

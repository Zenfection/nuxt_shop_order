import { User, CartItem, OrderItem } from "../utils/types";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
        cart: [] as CartItem[],
        orders: [] as OrderItem[],
    }),

    getters: {
        isAuthenticated: (state): boolean => !!state.user,
        totalMoney: (state): number =>
            state.cart.reduce((total, item) => {
                const discountPrice = item.product.price - (item.product.price * item.product.discount) / 100;
                return total + discountPrice * item.amount;
            }, 0),
        totalAmount: (state): number =>
            state.cart.reduce((total, item) => total + item.amount, 0),

    },

    actions: {
        // async login2(username: string, password: string): Promise<boolean>{
        //     const data = {username, password}
        //     try {
        //         const response = await UserService.login(data) as any
        //         if (response.user) {  // success
        //             alert('Đăng nhập thành công')
        //             this.login(response.user)
        //             return true
        //         } else {
        //             alert('Sai Tài Khoản Mật Khẩu')
        //             return false
        //         }
        //     } catch (error) {
        //         alert('Đăng nhập thất bại')
        //         console.log(error)
        //         return false
        //     }
        // },

        login(user: User): void {
            const { _id, username, fullname, email, phone, address, province, district, ward, token } = user

            this.user = { _id, username, fullname, email, phone, address, province, district, ward, token }

            const item = {
                value: user,
                expire: new Date().getTime() + 1 * 24 * 60 * 60 * 1000, // 1 days
            }
            window.localStorage.setItem('user', JSON.stringify(item));
        },

        logout(): void {
            this.user = null
            window.localStorage.removeItem('user')
        },

        setCart(cart: CartItem[]): void {
            this.cart = cart;
        },

        clearCart(): void {
            this.cart = [];
        },

        setOrder(orders: OrderItem[]): void {
            this.orders = orders;
        },

        restoreState(): boolean {
            try {
                const item = window.localStorage.getItem('user')
                if (item) {
                    const parsedItem = JSON.parse(item)
                    if (parsedItem.expire < Date.now()) {
                        window.localStorage.removeItem('user')
                        this.user = null
                        return false
                    }
                    this.user = parsedItem.value
                    return true
                } else {
                    this.user = null
                    return false
                }
            } catch (error) {
                console.log('Error restoring state:', error)
                return false
            }
        }
    }

});

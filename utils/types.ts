interface Category {
    _id: string
    category: string
    title: string
    image: string
    active: boolean
}

interface Product {
    _id: string
    name: string
    description: string
    price: number
    ranking: number
    image: string
    quantity: number
    discount: number
    category: string
}

interface FilterProduct {
    category?: string
    keyword?: string
    page?: number
    view?: string
}

interface User {
    _id: string
    username: string
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    province?: string | null
    district?: string | null
    ward?: string | null
    token: string
}

interface CartItem {
    _id: string
    amount: number
    id_product: string
    product: Product
}

interface Customer {
    fullname: string
    email: string
    phone: string
    address: string
    province: string
    district: string
    ward: string
}

interface ProductInOrder {
    id: string
    amount: number
    discount: number
    price: number
    image: string
    name: string
}

interface OrderItem {
    _id: string
    customer: Customer
    orderID: string
    order_date: string
    products: ProductInOrder[]
    status: number
    total_price: number
    username: string
}

export type { Category, Product, FilterProduct, User, CartItem, OrderItem }
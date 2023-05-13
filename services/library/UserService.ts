import { User, CartItem } from "~/utils/types"
import BaseService from "./BaseService"

interface LoginData {
    username: string
    password: string
}

export default class UserService extends BaseService {
    constructor() {
        super('users')
    }

    public async login(data: LoginData): Promise<any> {
        return await this.post(`/login`, data)
    }


    public async updateUser(data: User): Promise<any> {
        return await this.patch(`/update`, data)
    }

    //* CART
    public async getCart(data: object): Promise<CartItem[]> {
        return await this.post(`/getcart`, data)
    }

    public async addCart(data: any): Promise<any> {
        return await this.post(`/addcart`, data)
    }

    public async removeCart(data: any): Promise<any> {
        return await this.post(`/removecart`, data)
    }
}

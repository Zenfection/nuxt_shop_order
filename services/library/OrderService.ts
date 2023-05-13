import { OrderItem } from "~/utils/types"
import BaseService from "./BaseService"

export default class OrderService extends BaseService {
    constructor() {
        super('/orders')
    }

    async getOrderAll(data: OrderItem[]) {
        return await this.post(`${this.baseUrl}/`, data)
    }

    async getOrderDetail(data: OrderItem) {
        return await this.post(`${this.baseUrl}/${data._id}`, data)
    }

    async createOrder(data: OrderItem) {
        return await this.post(`${this.baseUrl}/create`, data)
    }
}
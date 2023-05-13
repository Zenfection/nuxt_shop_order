import { Product } from "~/utils/types"
import BaseService from "./BaseService"

export default class ProductService extends BaseService {
    constructor() {
        super('/products')
    }

    async getAll() {
        return await this.get<Product[]>(this.baseUrl)
    }

    async getFilter({
        filter,
        limit,
        page,
        keyword,
        category,
    }: {
        filter?: string
        limit?: number
        page?: number
        keyword?: string
        category?: string
    }) {
        let url = `${this.baseUrl}?`

        if (!!filter) url += `filter=${filter}&`
        if (!!limit) url += `limit=${limit}&`
        if (!!page) url += `page=${page}&`
        if (!!keyword) url += `keyword=${keyword}&`
        if (!!category) url += `category=${category}&`

        // Remove trailing &
        url = url.replace(/&$/, "")
        return await this.get<Product[]>(url)
    }

    async getDetail(id: string) {
        return await this.get<Product>(`${this.baseUrl}/${id}`)
    }
}
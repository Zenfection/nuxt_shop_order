import { Category } from "~/utils/types"
import BaseService from "./BaseService"

export default class CategoryService extends BaseService {
    static getAll: any
    constructor() {
        super('/categories')
    }

    async getAll() {
        return await this.get<Category[]>('/')
    }
}
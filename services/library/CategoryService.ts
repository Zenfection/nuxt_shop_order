import BaseService from './BaseService'
import { Category } from '~/utils/types'

export default class CategoryService extends BaseService {
  static getAll: any
  constructor() {
    super('/categories')
  }

  async getAll() {
    return await this.get<Category[]>('/')
  }
}

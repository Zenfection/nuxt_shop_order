import CategoryService from './library/CategoryService'
import OrderService from './library/OrderService'
import UserService from './library/UserService'
import ProductService from './library/ProductService'
import PCVNService from './library/PCVNService'

const UserServiceInstance = new UserService()
const CategoryServiceInstance = new CategoryService()
const OrderServiceInstance = new OrderService()
const ProductServiceInstance = new ProductService()
const PCVNServiceInstance = new PCVNService(
  'https://provinces.open-api.vn/api/'
)

export {
  CategoryServiceInstance as CategoryService,
  OrderServiceInstance as OrderService,
  UserServiceInstance as UserService,
  ProductServiceInstance as ProductService,
  PCVNServiceInstance as PCVNService,
}

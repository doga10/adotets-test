import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddProductController } from '@/main/factories/controllers/product/add-product/add-product-controller-factory'
import { makeLoadProductByIdController } from '@/main/factories/controllers/product/load-product-by-id/load-product-by-id-controller-factory'
import { makeSaveProductController } from '@/main/factories/controllers/product/save-product/save-product-controller-factory'
import { makeDeleteProductController } from '@/main/factories/controllers/product/delete-product/delete-product-controller-factory'
import { makeLoadProductsController } from '@/main/factories/controllers/product/load-products/load-products-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/products', adaptRoute(makeLoadProductsController()))
  router.post('/products', adaptRoute(makeAddProductController()))
  router.get('/products/:productId', adaptRoute(makeLoadProductByIdController()))
  router.get('/products/:productId', adaptRoute(makeLoadProductByIdController()))
  router.put('/products/:productId', adaptRoute(makeSaveProductController()))
  router.delete('/products/:productId', adaptRoute(makeDeleteProductController()))
}

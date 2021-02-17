const router = require('express').Router();
const productsControllers = require('../controllers/products');
const { body } = require('express-validator');

router.get('/products/:productId', productsControllers.getProduct);

router.post(
  '/products', 
  [
    body('productData.productType')
      .notEmpty()  
      .isString(),
    body('productData.price')
      .notEmpty()
      .isNumeric(),
    body('productData.cols')
      .isInt(),
    body('productData.title')
      .notEmpty()  
      .isString(),
    body('productData.imageUrl')
      .isURL(),
    body('productData.description')
      .notEmpty()
      .isString(),
    body('productData.categoryId')
      .isNumeric(),
    body('token')
      .isJWT()
  ],
  productsControllers.postProduct
);

router.get('/products', productsControllers.getProductsByCriteria);

router.delete(
  '/products/:productId',
  [
    body('productId')
      .isInt(),
    body('token')
      .isJWT()
  ],
  productsControllers.deleteProduct
);

router.put(
  '/products/:productId',
  [
    body('productData.productType')
      .notEmpty()  
      .isString(),
    body('productData.price')
      .notEmpty()
      .isNumeric(),
    body('productData.oldPrice')
      .notEmpty()
      .isNumeric(),
    body('productData.cols')
      .notEmpty()
      .isInt(),
    body('productData.title')
      .notEmpty()  
      .isString(),
    body('productData.description')
      .notEmpty()
      .isString(),
    body('productData.categoryId')
      .isInt(),
    body('token')
      .isJWT()
  ],
  productsControllers.editProduct
);

module.exports = router;
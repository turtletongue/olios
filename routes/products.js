const router = require('express').Router();
const productsControllers = require('../controllers/products');

router.get('/products/:productId', productsControllers.getProduct);

router.post('/products', productsControllers.postProduct);

router.get('/products', productsControllers.getProductsByCriteria);

router.delete('/products/:productId', productsControllers.deleteProduct);

router.put('/products/:productId', productsControllers.editProduct)

module.exports = router;
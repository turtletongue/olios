const router = require('express').Router();
const productsControllers = require('../controllers/products');

router.get('/products/:productId', productsControllers.getProduct);

router.post('/products', productsControllers.postProduct);

router.get('/products', productsControllers.getAllProducts);

module.exports = router;
const router = require('express').Router();
const categoriesControllers = require('../controllers/categories');

router.post('/categories', categoriesControllers.postCategories);

router.get('/categories', categoriesControllers.getCategories);

router.get('/categories/:categoryId', categoriesControllers.getCategoryProducts);

module.exports = router;
const router = require('express').Router();
const categoriesControllers = require('../controllers/categories');

router.get('/categories', categoriesControllers.getCategories);

router.post('/categories/:categoryId', categoriesControllers.getCategoryProducts);

module.exports = router;
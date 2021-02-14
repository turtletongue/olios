const router = require('express').Router();
const categoriesControllers = require('../controllers/categories');

router.post('/categories', categoriesControllers.postCategories);

router.get('/categories', categoriesControllers.getCategories);

router.post('/categories/:categoryId', categoriesControllers.getCategoryProducts);

router.put('/categories/:categoryId', categoriesControllers.editCategory);

router.delete('/categories/:categoryId', categoriesControllers.deleteCategory);

module.exports = router;
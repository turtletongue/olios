const Category = require('../models/category');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ message: 'Success!', categories });
  } catch (err) {
    const error = new Error();
    error.statusCode = 400;
    next(error);
  }
}

exports.getCategoryProducts = async (req, res) => {
  const { categoryId } = req.params;
  const { numberOfProducts } = req.body;
  try {
    const category = await Category.findByPk(categoryId);
    const products = await category.getProducts({ limit: numberOfProducts });
    res.status(200).json({ message: 'Success!', products });
  } catch (err) {
    const error = new Error();
    error.statusCode = 400;
    next(error);
  }
}
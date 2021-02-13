const Category = require('../models/category');
const Product = require('../models/product');

exports.postProduct = async (req, res) => {
  const { categoryId, price, oldPrice, size, cols, title, imageUrl, path, description, productType } = req.body;
  try {
    const category = await Category.findByPk(categoryId);
    await category.createProduct({
      productType,
      price,
      oldPrice,
      size,
      cols,
      title,
      imageUrl,
      path,
      description
    });
    res.status(200).json({ message: 'Success!' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Some error occured.' });
  }
}

exports.getProduct = async (req, res) => {
  const { productId } = req.body;
  try {
    const product = await Product.findByPk(productId);
    res.status(200).json({ message: 'Success!', product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Some error occured.' });
  }
}

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ message: 'Success!', products });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Some error occured.' });
  }
}
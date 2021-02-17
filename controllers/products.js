const jwt = require('jsonwebtoken');
const Category = require('../models/category');
const Product = require('../models/product');

exports.postProduct = async (req, res) => {
  const { productData: {
    categoryId,
    price,
    cols,
    title,
    imageUrl,
    description,
    productType
  }, token } = req.body;
  try {
    const isAuth = jwt.verify(token, process.env.JWT_SECRET);
    if (!isAuth.email) {
      return res.status(403).json({ error: 'Not allowed.' });
    }
    const category = await Category.findByPk(categoryId);
    const product = await category.createProduct({
      productType,
      price,
      cols,
      title,
      imageUrl,
      description
    });
    product.path = `${category.path}/${product.id}`;
    await product.save();
    res.status(200).json({ message: 'Success!' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Some error occured.' });
  }
}

exports.getProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(200).json({ message: 'Success!', product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Some error occured.' });
  }
}

exports.getProductsByCriteria = async (req, res) => {
  const { q } = req.query;
  try {
    if (q === '') return res.status(200).json({ message: 'Input is empty.', products: [] });
    const products = await Product.findAll();
    const foundedProducts = products.filter(p =>
      p.title.toLowerCase().includes(q.toLowerCase())
      ||
      p.productType.toLowerCase().includes(q.toLowerCase())
    );
    res.status(200).json({ message: 'Success!', products: foundedProducts });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Some error occured.' });
  }
}

exports.deleteProduct = async (req, res) => {
  const { productId, token } = req.body;
  try {
    const isAuth = jwt.verify(token, process.env.JWT_SECRET);
    if (!isAuth.email) {
      return res.status(403).json({ error: 'Not allowed.' });
    }
    const product = await Product.findByPk(productId);
    await product.destroy();
    res.status(200).json({ message: 'Success!' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Some error occured.' });
  }
}

exports.editProduct = async (req, res) => {
  const { productData: {
    categoryId,
    price,
    oldPrice,
    cols,
    title,
    imageUrl,
    description,
    productType
  }, token } = req.body;
  const { productId } = req.params;
  try {
    const isAuth = jwt.verify(token, process.env.JWT_SECRET);
    if (!isAuth.email) {
      return res.status(403).json({ error: 'Not allowed.' });
    }
    const product = await Product.findByPk(productId);
    product.categoryId = categoryId;
    product.price = price;
    product.oldPrice = oldPrice;
    product.cols = cols;
    product.title = title;
    if (imageUrl) {
      product.imageUrl = imageUrl;
    }
    product.description = description;
    product.productType = productType;
    await product.save();
    res.status(200).json({ message: 'Success!' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Some error occured.' });
  }
}
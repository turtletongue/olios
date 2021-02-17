const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const Category = require('../models/category');
const Product = require('../models/product');

exports.postProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error();
      error.statusCode = 400;
      error.msg = 'Validation failed.';
      next(error);
    }
    const { productData: {
      categoryId,
      price,
      cols,
      title,
      imageUrl,
      description,
      productType
    }, token } = req.body;
    const isAuth = jwt.verify(token, process.env.JWT_SECRET);
    if (!isAuth.email) {
      const error = new Error();
      error.statusCode = 403;
      error.msg = 'Not allowed';
      next(error);
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
  } catch (err) {
    console.log(err);
    const error = new Error();
    error.statusCode = 400;
    next(error);
  }
}

exports.getProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByPk(productId);
    if (!product) {
      const error = new Error();
      error.statusCode = 404;
      error.msg = 'Product not found.';
      next(error);
    }
    res.status(200).json({ message: 'Success!', product });
  } catch (err) {
    const error = new Error();
    error.statusCode = 400;
    next(error);
  }
}

exports.getProductsByCriteria = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (q === '') return res.status(200).json({ message: 'Input is empty.', products: [] });
    const products = await Product.findAll();
    const foundedProducts = products.filter(p =>
      p.title.toLowerCase().includes(q.toLowerCase())
      ||
      p.productType.toLowerCase().includes(q.toLowerCase())
    );
    res.status(200).json({ message: 'Success!', products: foundedProducts });
  } catch (err) {
    const error = new Error();
    error.statusCode = 400;
    next(error);
  }
}

exports.deleteProduct = async (req, res, next) => {
  try {
    const { productId, token } = req.body;
    const isAuth = jwt.verify(token, process.env.JWT_SECRET);
    if (!isAuth.email) {
      const error = new Error();
      error.statusCode = 403;
      error.msg = 'Not allowed';
      next(error);
    }
    const product = await Product.findByPk(productId);
    await product.destroy();
    res.status(200).json({ message: 'Success!' });
  } catch (err) {
    const error = new Error();
    error.statusCode = 400;
    next(error);
  }
}

exports.editProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error();
      error.statusCode = 400;
      error.msg = 'Validation failed.';
      next(error);
    }
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
    const isAuth = jwt.verify(token, process.env.JWT_SECRET);
    if (!isAuth.email) {
      const error = new Error();
      error.statusCode = 403;
      error.msg = 'Not allowed';
      next(error);
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
  } catch (err) {
    const error = new Error();
    error.statusCode = 400;
    next(error);
  }
}
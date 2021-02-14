const Category = require('../models/category');

exports.postCategories = async (req, res) => {
  const { name, path, imageUrl } = req.body;
  try {
    await Category.create({ name, path, imageUrl });
    res.status(200).json({ message: 'Success!' });
  } catch (error) {
    res.status(400).json({ message: 'Some error occured.' });
  }
}

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ message: 'Success!', categories });
  } catch (error) {
    res.status(400).json({ message: 'Some error occured.' });
  }
}

exports.getCategoryProducts = async (req, res) => {
  const { categoryId } = req.params;
  const { numberOfProducts } = req.body;
  try {
    const category = await Category.findByPk(categoryId);
    const products = await category.getProducts({ limit: numberOfProducts });
    res.status(200).json({ message: 'Success!', products });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Some error occured.' });
  }
}

exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findByPk(categoryId);
    await category.destroy();
    res.status(200).json({ message: 'Success!' });
  } catch (error) {
    res.status(400).json({ message: 'Some error occured.' });
  }
}

exports.editCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name, path, imageUrl } = req.body;
  try {
    const category = await Category.findByPk(categoryId);
    category.name = name;
    category.path = path;
    category.imageUrl = imageUrl;
    await category.save();
    res.status(200).json({ message: 'Success!' });
  } catch (error) {
    res.status(400).json({ message: 'Some error occured.' });
  }
}
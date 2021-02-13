const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

const app = express();

const sequelize = require('./util/database');
const Product = require('./models/product');
const Category = require('./models/category');

const port = process.env.PORT || 5000;

const paymentRoutes = require('./routes/payment');
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');

app.use(compression());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.use('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use(paymentRoutes);
app.use(categoriesRoutes);
app.use(productsRoutes);

Product.belongsTo(Category, {constraints: true, onDelete: 'CASCADE' });
Category.hasMany(Product);

sequelize.sync()
  .then(result => {
    app.listen(port, error => {
      if (error) throw error;
      console.log(`App started on port ${port}`);
    })
  })
  .catch(console.log);
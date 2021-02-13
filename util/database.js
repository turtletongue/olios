const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('new_schema', 'root', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
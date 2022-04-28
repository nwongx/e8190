const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DATABASE_URL ||
  `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_SECRET}@localhost:5432/messenger`, {
  logging: false
});

module.exports = db;

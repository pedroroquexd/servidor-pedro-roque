const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite", // Nome do arquivo do banco de dados SQLite
});

module.exports = sequelize;

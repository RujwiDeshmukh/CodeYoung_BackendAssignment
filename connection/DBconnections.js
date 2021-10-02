const dbConfig = require("../config/DBconfig");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.User, dbConfig.Password, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: 3306,
  operationAlias: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

module.exports = sequelize;

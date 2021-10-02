require("dotenv").config();

module.exports = {
  HOST: "127.0.0.1",
  User: "root",
  Password: "Rujwi@2524",
  DB: "translationtextdb",
  dialect: "mysql",
  port: "3306",
  pool: {
    max: 25,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

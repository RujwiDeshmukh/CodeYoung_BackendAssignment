const Sequelize = require("sequelize");

const DBconnections = require("../connection/DBconnections");

const Translator = DBconnections.define("Translator", {
  
  translationId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allownull: false,
    autoIncrement: true,
  },
  toLanguage: {
    type: Sequelize.STRING,
    allownull: false,
  },
  fromLanguage: {
    type: Sequelize.STRING,
    allownull: false,
  },
  text: {
    type: Sequelize.STRING,
    allownull: false,
  },
  translatedText: {
    type: Sequelize.STRING,
    allownull: false,
  },
  createdAt: {
    type: Sequelize.DATEONLY,
    allownull: false,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: Sequelize.DATEONLY,
    allownull: false,
    defaultValue: new Date(),
  },
});

module.exports = Translator;

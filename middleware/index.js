const translate = require("translate-google");

const Translations = require("../models/translationschema");

const sequelize = require("../connection/DBconnections");

const getTranslatedResponse = (req, res) => {
  const { from, to, text } = req.body;

  sequelize
    .query(
      "CALL getTranslatedResponse(:fromLanguage ,:toLanguage, :text) ",
      {
        replacements: { fromLanguage: from, toLanguage: to, text: text },
      }
    )
    .then((data) => {
      if (data && data.length > 0) {
        res.status(200).json({
          message: "Text Translated Successfully!! ",
          translatedText: data[0].translatedText,
        });
      } else {
        translate(text, { from: from, to: to }).then((data) => {
          DBconnections.query(
            "CALL addTranslatedResponse(:fromLanguage, :toLanguage, :text )",
            {
              replacements: {
                fromLanguage: from,
                toLanguage: to,
                text: text,
                translatedText: data,
              },
            }
          )
            .then((data) => {
              res.status(200).json({
                message: "Text Translated Succesfully!! ",
                translatedText: data,
              });
            })
            .catch((err) => {
              console.log(err, "Error Occurred !!");
            });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};


module.exports = { getTranslatedResponse} ;
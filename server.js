require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");
const DBconnection = require("./connection/DBconnections");

const app = express();

app.use(cors());

app.use(bodyParser.json());

DBconnection.sync();

app.use("/", routes);

app.listen(() => {
  console.log("Server running on port ", process.env.PORT);
});

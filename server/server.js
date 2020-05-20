const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");

const models = require("./models");
const schema = require("./schema/schema");
const dbConnection = require("./config/dbConn");
const webpackConfig = require("../webpack.config.js");

dotenv.config({ path: "./config/config.env" });

dbConnection();

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;

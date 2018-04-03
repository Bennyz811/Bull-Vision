var path = require("path");

const env = process.env.NODE_ENV;

module.exports = {
  entry: "./src/bull.js",
  mode: env || "development",
  output: {
    filename: "./bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", "*"]
  }
};

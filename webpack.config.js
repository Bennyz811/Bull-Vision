var path = require("path");

const env = process.env.NODE_ENV;

module.exports = {
  entry: "./src/bull.js",
  mode: env || 'development',
  output: {
    filename: "./bundle.js"
  },
    module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
     ]
 },
  devtool: "source-map",
  resolve: {
    extensions: [".js", "*"]
  }
};

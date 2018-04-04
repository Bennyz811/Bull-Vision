var path = require("path");

const env = process.env.NODE_ENV;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/bull.js"],
  mode: env || "development",
  output: {
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ['transform-async-to-generator'],
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".js", "*"]
  }
};

const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    // index: 'index.html', //預設會自己去抓
    contentBase: "./dist",
    open: true,
    hot: true,
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   { from: "./src/app.js", to: path.resolve(__dirname, "dist") }
    // ]),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebPackPlugin({
      template: "./public/index.html"
      //   filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
    // publicPath:'/'
  }
};

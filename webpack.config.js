const path = require("path");

const webpack = require("webpack");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "[name].[hash].js",
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./docs"),
    open: true,
    compress: true,
    hot: true,
    port: process.env.PORT,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "WEBPACK",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),

    // clean after build
    new CleanWebpackPlugin(),

    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },

      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },

      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true, // clear previous bundle
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/i,
        use: "babel-loader",
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};

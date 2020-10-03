const path = require("path");
const webpack = require("webpack");
const TerserJsPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    modules: ["react", "react-dom", "react-router-dom"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].dll.js",
    library: "[name]",
  },
  optimization: {
    minimizer: [new TerserJsPlugin(), new OptimizeCssAssetsPlugin()],
  },
  mode: "production",
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json"), //referencia a la libreria dll
    }),
  ],
};

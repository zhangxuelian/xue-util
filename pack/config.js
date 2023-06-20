const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

let config = {
  mode: "production",
  devtool: "eval-source-map",
  entry: {
    main: ["babel-polyfill", path.resolve(__dirname, "../util/test.js")]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, `../dist`),
    publicPath: "./"
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;

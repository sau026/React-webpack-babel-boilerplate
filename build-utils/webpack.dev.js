const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.development"),
    }),
  ],
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "[name].js",
    chunkFilename: "js/[name].js",
  },
  devtool: "eval-source-map",
};

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    })
  ],
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[chunkhash].js",
  },
  devtool: 'source-map',
};
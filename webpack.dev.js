const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000,
    compress: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(true),
    }),
  ],
});

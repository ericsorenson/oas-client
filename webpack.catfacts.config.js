const config = require('./webpack.config');

module.exports = {
  ...config,
  devServer: {
    compress: false,
    historyApiFallback: true,
    hot: false,
    https: false,
    port: 3456,
  },
  output: {
    clean: true,
    filename: '[name].[fullhash].js',
    path: __dirname + '/dist/catfacts',
  },
};

const config = require('./webpack.config');

module.exports = {
  ...config,
  devServer: {
    compress: false,
    historyApiFallback: true,
    hot: false,
    https: false,
    port: 2345,
  },
  output: {
    clean: true,
    filename: '[name].[fullhash].js',
    path: __dirname + '/dist/users',
  },
};

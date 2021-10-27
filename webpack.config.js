const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    compress: false,
    historyApiFallback: true,
    hot: false,
    https: false,
    port: 1234,
  },
  entry: {
    index: './src/views/app.tsx',
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.pug$/i,
        use: ['pug-loader'],
      },
    ],
  },
  output: {
    clean: true,
    filename: '[name].[fullhash].js',
    path: __dirname + '/dist',
  },
  plugins: [
    new HtmlWebpackPugPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      publicPath: '/',
      template: './src/views/index.pug',
    }),
  ],
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
};

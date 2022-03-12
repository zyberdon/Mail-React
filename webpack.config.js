const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';
console.log('current mode ', mode);

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HTMLWebpackPlugin({
    template: './public/index.html',
  }),
];
module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
      static: './dist',
    },
    plugins:plugins,
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [ "style-loader",
        "css-loader",
        "postcss-loader",]
      },
    ],
    },
  };
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: {
      home: resolve('src/main/app.js'),
  },
  output: {
    filename: 'js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
        { test: /\.vue$/, use: 'vue-loader' },
        { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: 'src/main/view/home.html',
        chunks: ['home'],
        filename: path.resolve(__dirname, './dist/html/index.html'),
    }),
  ]
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.module\.css$/, 
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true, 
            },
          },
        ],
      },
      {
        test: /\.css$/, 
        exclude: /\.module\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
  ]
};
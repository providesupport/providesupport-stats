const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/PSstatsAPI.js',
  output: {
    filename: 'PSstatsAPI.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'PSstatsAPI',
    libraryTarget: 'umd',
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [
          path.resolve(__dirname, '../node_modules'),
          path.resolve(__dirname, '../tests')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  plugins: [new ESLintPlugin({
    files: 'src'
  })],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8081
  }
};
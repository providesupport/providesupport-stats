const path = require('path');

module.exports = {
  entry: './src/PSstatsAPI.js',
  output: {
    filename: 'PSstatsAPI.js',
    path: path.resolve(__dirname, './dist'),
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
  mode: 'production',
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      hash: true,
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        exclude: /\.inline.svg$/,
        use: {
          loader: 'url-loader?limit=100&name=images/[name].[ext]'
        }
      },
      {
        test: /\.inline.svg$/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  { 
                    removeTitle: true,
                    removeComments: true
                  }
                ],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  }
};

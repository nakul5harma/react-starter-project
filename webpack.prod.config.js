/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: __dirname + '/public',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loaders: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.(scss)|.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [precss, autoprefixer];
                },
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: ['file-loader?name=images/[name].[ext]', 'image-webpack-loader'],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new ExtractTextPlugin('site.css'),
  ],
};

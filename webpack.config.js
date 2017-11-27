const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: './app/index.js',
    externals: {
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/'
    },

    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
        { test: /\.svg$/, use: 'file-loader' },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
      ]
    },

    resolve: {
        modules: [path.resolve(__dirname, 'app'), "node_modules"]
    },

    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'app/index.html'
      })
    ]
  };
  
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new CopyWebpackPlugin([ { from: 'app/images' }]),  
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    )
  }
  
  module.exports = config;
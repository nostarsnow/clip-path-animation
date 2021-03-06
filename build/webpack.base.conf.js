/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const copyWebpackPlugin = require('copy-webpack-plugin')
const rules = require('./webpack.rules')
const config = require('./config')
module.exports = {
  context: path.resolve(__dirname, './'),
  output: {
    path: path.resolve(__dirname, config.path.dist),
    publicPath: '/',
    filename: '[name]'
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.less'],
    alias: {
      //'jquery': path.resolve(__dirname, '../src/common/plugins/jquery/jquery-1.11.1.js'),
      '@': path.resolve(__dirname, '../src'),
      'src': path.resolve(__dirname, '../src'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'static': path.resolve(__dirname, '../src/static'),
      'common': path.resolve(__dirname, '../src/common'),
      'js': path.resolve(__dirname, '../src/common/js'),
      'css': path.resolve(__dirname, '../src/common/css'),
      'tpls': path.resolve(__dirname, '../src/common/tpls'),
      'plugins': path.resolve(__dirname, '../src/common/plugins'),
      'sprite': path.resolve(__dirname, '../src/common/css/_import/_sprite'),
      'config': path.resolve(__dirname, '../src/common/css/_import/index.scss'),
      'img': path.resolve(__dirname, '../src/common/img'),
      'fonts': path.resolve(__dirname, '../src/common/fonts'),
      'medias': path.resolve(__dirname, '../src/common/medias'),
      'node': path.resolve(__dirname, '../node_modules')
    }
  },
  module: {
    rules: rules.rules
  },
  stats: {
    children: false,
    reasons: false,
    modules: false,
    cached: false,
    cachedAssets: false,
    chunks: false,
    colors: true,
    entrypoints: false
  },
  plugins: [
    ...rules.plugins,
    // 静态资源输出
    new copyWebpackPlugin([{
      from: config.path.static,
      to: config.path.dist
    }]),
    new webpack.DefinePlugin(config.globals),
    /*new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })*/
  ]
}
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './resources/assets/typescript/polyfills.ts',
    'vendor': './resources/assets/typescript/vendor.ts',
    'app': './resources/assets/typescript/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
    // https://webpack.github.io/docs/usage-with-bower.html
    modulesDirectories: ["node_modules", "bower_components"]
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  ]
};

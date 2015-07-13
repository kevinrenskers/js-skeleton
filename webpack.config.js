/*eslint no-var:0 */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var rimraf = require('rimraf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var packageJson = require('./package.json');
var assign = require('lodash.assign');

var isDev = process.env.NODE_ENV !== 'production';
var useHash = false;
var clearBeforeBuild = true;
var config;

var htmlOptions = {
  template: 'node_modules/html-webpack-template/index.html',
  title: 'Hello React & Redux!',
  appMountId: 'app',
  minify: {
    removeComments: true,
    collapseWhitespace: true
  }
};

function buildFilename(pack, hash, ext) {
  var middle;
  if (hash) {
    middle = ext === 'css' ? '[contenthash]' : '[hash]';
  } else {
    middle = pack.version;
  }

  return [pack.name, middle, (ext || 'js')].join('.');
}

config = {
  entry: ['./src/app'],

  output: {
    path: path.join(__dirname, 'public'),
    filename: isDev ? 'bundle.js' : buildFilename(packageJson, useHash, 'js'),
    cssFilename: isDev ? 'bundle.css' : buildFilename(packageJson, useHash, 'css')
  },

  plugins: [
    new HtmlWebpackPlugin(htmlOptions),
    new HtmlWebpackPlugin(assign({}, htmlOptions, {filename: '200.html'}))
  ],

  module: {
    loaders: []
  }
};

if (isDev) {
  config.devServer = {
    port: 3000,
    historyApiFallback: true,
    host: 'localhost',
    hot: true
  };

  config.entry.unshift(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  );

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.SourceMapDevToolPlugin(
      '[file].map', null,
      '[absolute-resource-path]', '[absolute-resource-path]'
    )
  );

  config.module.loaders.push(
    {
      test: /(\.js$)|(\.jsx$)/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css?sourceMap', 'cssnext?sourceMap']
    }
  );
} else {
  // clear out output folder if so configured
  if (clearBeforeBuild) {
    rimraf.sync(config.output.path);
    fs.mkdirSync(config.output.path);
  }

  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),

    new ExtractTextPlugin(config.output.cssFilename, {
      allChunks: true
    }),

    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  );

  config.module.loaders.push(
    {
      test: /(\.js$)|(\.jsx$)/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!cssnext')
    }
  );
}

module.exports = config;

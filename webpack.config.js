/*eslint no-var:0 */

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var webpack = require('webpack');
var HtmlPlugin = require('./lib/html-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var packageJson = require('./package.json');

// figure out if we're running `webpack` or `webpack-dev-server`
// we'll use this as the default for `isDev`
var isDev = process.argv[1].indexOf('webpack-dev-server') !== -1;

var useHash = false;
var clearBeforeBuild = true;
var config;

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
    filename: isDev ? 'app.js' : buildFilename(packageJson, useHash, 'js'),
    cssFilename: isDev ? 'app.css' : buildFilename(packageJson, useHash, 'css')
  },

  plugins: [
    new HtmlPlugin({
      html: function(data) {
        return {
          '200.html': data.defaultTemplate(),
          'index.html': data.defaultTemplate()
        };
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /(\.js$)|(\.jsx$)/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      }
    ]
  }
};

if (isDev) {
  config.devtool = 'eval';

  config.devServer = {
    port: 3000,
    info: false,
    historyApiFallback: true,
    host: 'localhost',
    hot: true
  };

  config.entry.unshift(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server'
  );

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );

  config.module.loaders.push(
    {
      test: /\.css$/,
      loaders: ['style', 'css?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'cssnext']
    }
  );

  config.cssnext = {};
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
    })
  );

  // extract in production
  config.module.loaders.push(
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?module&importLoaders=1&localIdentName=[hash:base64]!cssnext')
    }
  );

  config.cssnext = {
    compress: true
  };
}

module.exports = config;

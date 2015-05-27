/*eslint no-var:0 */

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('./lib/html-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var packageJson = require('./package.json');

var isDev = process.env.NODE_ENV !== 'production';
var useHash = false;
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

  resolve: {
    extensions: ['', '.js', '.json']
  },

  plugins: [],

  module: {
    loaders: [
      {
        test: /(\.js$)|(\.jsx$)/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader?limit=10000'
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
    new HtmlPlugin({
      html: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );

  config.module.loaders[0].loaders.unshift('react-hot');

  config.module.loaders.push(
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!cssnext-loader'
    }
  );

  config.cssnext = {};
} else {
  config.plugins.push(
    new HtmlPlugin({
      html: function(data) {
        return {
          '200.html': data.defaultTemplate(),
          'index.html': data.defaultTemplate()
        };
      }
    }),
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

  // extract in production
  config.module.loaders.push(
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
    }
  );

  config.cssnext = {
    compress: true
  };
}

module.exports = config;

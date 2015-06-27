/*eslint no-var:0 */

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('./lib/html-plugin');
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

function getHtml(data) {
  return data.defaultTemplate({
    title: 'Hello Riot!',
    base: '/'
  });
}

config = {
  context: path.join(__dirname, 'src'),
  entry: ['./index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: isDev ? 'bundle.js' : buildFilename(packageJson, useHash, 'js'),
    cssFilename: isDev ? 'bundle.css' : buildFilename(packageJson, useHash, 'css')
  },

  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),

    new HtmlPlugin({
      html: function html(data) {
        return {
          'index.html': getHtml(data),
          '200.html': getHtml(data)
        };
      }
    })
  ],

  module: {
    preLoaders: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loaders: ['riotjs']
      }
    ],
    loaders: [
      {
        test: /\.js|\.tag$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },

  cssnext: {
    browsers: 'last 2 versions',
    plugins: [
      require('postcss-nested')
    ]
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
    'webpack/hot/dev-server'
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

  // extract in production
  config.module.loaders.push(
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!cssnext')
    }
  );
}

module.exports = config;

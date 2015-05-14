/*eslint no-var:0 */

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var cssvars = require('postcss-custom-properties');
var cssimport = require('postcss-import');
var cssmerge = require('postcss-merge-rules');
var nested = require('postcss-nested');
var HtmlPlugin = require('./lib/html-plugin');
var getPackage = require('./lib/get-package');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

function buildFilename(pack, hash, ext) {
  var middle;
  if (hash) {
    middle = ext === 'css' ? '[contenthash]' : '[hash]';
  } else {
    middle = pack.version;
  }

  return [pack.name, middle, (ext || 'js')].join('.');
}

var config = {
  entry: ['./src/app'],

  output: {
    path: path.join(__dirname, 'public'),
    filename: isDev ? 'app.js' : buildFilename(getPackage(null), false, 'js')
  },

  resolve: {
    extensions: ['', '.js', '.json']
  },

  plugins: [
    new HtmlPlugin({
      html: true
    })
  ],

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
    'webpack/hot/only-dev-server'
  );

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]);

  config.module.loaders[0].loaders.unshift('react-hot');

  config.module.loaders.push(
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }
  );

  config.postcss = [
    cssimport(),
    nested(),
    cssvars(),
    autoprefixer({browsers: ['last 2 versions']})
  ];
} else {
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
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    }
  );

  config.postcss = [
    cssimport(),
    nested(),
    cssvars(),
    cssmerge(),
    autoprefixer({browsers: ['last 2 versions']}),
    mqpacker(),
    csswring()
  ];
}

module.exports = config;

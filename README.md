# JavaScript SPA skeleton

[![js-standard-style](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)

A simple JavaScript Single Page Application skeleton, very much a work in progress.

## Current features:

* Written using the [AirBbB code style](https://github.com/airbnb/javascript), checked with ESLint
* Uses [Ampersand.js](https://ampersandjs.com) for everything except the view layer
* Uses [React](http://facebook.github.io/react/) for the views
* Uses ES6 and JSX via [Babel](https://babeljs.io)
* Uses webpack with webpack-dev-server and react-hot-loader
* Uses PostCSS with the imports, nested, vars and autoprefixer plugins
* Creates minified builds
* Uses simple NPM scripts instead of Gulp or Grunt
* Uses [Surge](https://surge.sh) to deploy the public folder 

## Usage:

* `npm run start` to start a local development server with hot reloading
* `npm run build` to create a static build to the public folder
* `npm run deploy` to deploy the public folder using Surge

## Looking into using: 

* Gulp, [Browserify](http://browserify.org), [watchify](https://github.com/substack/watchify) and [babelify](https://github.com/babel/babelify) instead of webpack.
  Webpack has some nice features (hello requiring css!) and completely replaces a build system like Gulp, but its config is an eye sore.
  While I could run watchify from the command line without using a build system, I still need Gulp for PostCSS, since it doesn't have a watch mode. 
  [Fast browserify builds with watchify](https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md) recipe.
* [Riot](https://muut.com/riotjs/) instead of React. Uses a custom tags system. 
  [Riotify](https://github.com/jhthorsen/riotify) for Browserify, or [riotjs-loader](https://github.com/esnunes/riotjs-loader) for webpack.
* [Deku](https://github.com/segmentio/deku) instead of React. Uses JSX.
* [Mithril](http://lhorie.github.io/mithril/) instead of Ampersand.js and React. Uses JSX.

## Credits

* https://github.com/HenrikJoreteg/hjs-webpack
* http://learn.humanjavascript.com/react-ampersand

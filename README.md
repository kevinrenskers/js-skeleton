# JavaScript SPA skeleton - ampersand-react-webpack

[![js-standard-style](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)

* Written using the [AirBnB code style](https://github.com/airbnb/javascript), checked with ESLint
* Uses [Ampersand.js](https://ampersandjs.com) for everything except the view layer
* Uses [React](http://facebook.github.io/react/) for the views
* Uses ES6 and JSX via [Babel](https://babeljs.io)
* Uses webpack with webpack-dev-server and react-hot-loader
* Uses PostCSS with the imports, nested, vars and autoprefixer plugins
* Creates minified builds
* Uses simple NPM scripts instead of Gulp or Grunt
* Uses [Surge](https://surge.sh) to deploy the public folder 

Deployed to http://ampersand-react-webpack.surge.sh.

## Usage

* `npm run start` to start a local development server with hot reloading
* `npm run test` to lint the code
* `npm run build` to create a static build to the public folder
* `npm run deploy` to deploy the public folder using Surge

## Thoughts

* React is kind of nice. Not convinced about JSX, but there's a big community and lots of resources.
* Using ampersand-router in a React app means you need to create some kind of Link component,
  otherwise you'll get full page reloads.
* JavaScript build is 141 KB. That's a lot for such a simple app.
* Webpack.. hate the config, but like the fact that I don't need Gulp. I also like that I can import CSS styles.

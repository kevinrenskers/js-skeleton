# JavaScript SPA skeleton - riot-webpack

[![js-standard-style](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)

* Written using the [AirBnB code style](https://github.com/airbnb/javascript), checked with ESLint
* Uses ES6 via [Babel](https://babeljs.io)
* Uses webpack with webpack-dev-server
* Creates minified builds
* Uses simple NPM scripts instead of Gulp or Grunt
* Uses [Surge](https://surge.sh) to deploy the public folder 

Deployed to http://riot-webpack.surge.sh.

Note that for this experiment I've used LessCSS because that's what we use at work and
I wanted to find out how easily we could move our existing AngularJS + Gulp setup over
to Webpack without introducing other changes (like cssnext, local css, etc).

## Usage

* `npm run start` to start a local development server with hot reloading
* `npm run test` to lint the code
* `npm run build` to create a static build to the public folder
* `npm run deploy` to deploy the public folder using Surge

## Thoughts

Stay tuned...

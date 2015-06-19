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

* Repeating items with the each attribute is a lot easier to me then React or Deku's
  array map function to return HTML (via JSX)
* Scoped (local) CSS is supported directly by Riot itself. It works pretty great but
  it skips all the great webpack features because you're not using their loaders:
  extract the CSS to a external stylesheet, autoprefixer, etc.
* It depends on the ProvidePlugin to make Riot globally available, as the .tag files
  compile down to JS that uses `riot.tag`. Not ideal.
* With React and Deku you have JS code that includes (generates) HTML code. 
  With Riot you have HTML (the .tag file) that includes JS. Check 
  [The fundamental difference between Riot and React](http://blog.srackham.com/posts/riot-es6-webpack-apps/)
  for more info. This is the main cause of the previous point.

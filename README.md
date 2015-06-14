# JavaScript SPA skeleton - angularjs-webpack

[![js-standard-style](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)

* Written using the [AirBnB code style](https://github.com/airbnb/javascript), checked with ESLint
* Uses [UI-Router](https://github.com/angular-ui/ui-router) for the router
* Uses ES6 and JSX via [Babel](https://babeljs.io)
* Uses webpack with webpack-dev-server
* Creates minified builds
* Uses simple NPM scripts instead of Gulp or Grunt
* Uses [Surge](https://surge.sh) to deploy the public folder 

Deployed to http://angularjs-webpack.surge.sh.

## Usage

* `npm run start` to start a local development server with hot reloading
* `npm run test` to lint the code
* `npm run build` to create a static build to the public folder
* `npm run deploy` to deploy the public folder using Surge

## Thoughts

I've been building a pretty large and complex AngularJS app for more then a year now, 
without using any module system, written in ES5 and using a pretty complicated Gulp
setup. This was an exercise to see what a very simple app would look like in a more
modern way.
 
It's a lot better then our current setup, I pretty much love it. The only thing I'm not 
too sure of still is the webpack config, it's still a beast. Also compared to Deku and 
React building the index.html file is a bit more complicated because of the tags needed
for AngularJS, initial HTML, etc. I'm sure I could find a better way then the HtmlPlugin
that's currently used.

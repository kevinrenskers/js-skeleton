# JavaScript SPA skeleton - angularjs-browserify

[![js-standard-style](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)

* Written using the [AirBnB code style](https://github.com/airbnb/javascript), checked with ESLint
* Uses AngularJS 1.4
* Uses [UI-Router](https://github.com/angular-ui/ui-router) for the router
* Uses ES6 via [Babel](https://babeljs.io)
* Uses browserify, watchify, and gulp
* Creates minified builds
* Uses [Surge](https://surge.sh) to deploy the public folder 

Deployed to http://angularjs-browserify.surge.sh.

## Usage

* `gulp start` to start a local development server with hot reloading
* `gulp build` to create a static build to the public folder
* `npm run test` to lint the code
* `npm run deploy` to deploy the public folder using Surge

## Thoughts

After using webpack for the last 3 experiments I really wanted to use browserify next. 
I actually think that this has become way more complicated. Yes, the webpack config is
comples, but this gulpfile and many more packages working together really isn't that 
much better. You also loose some of the features, like CSS imports. Yes, this is
possible with browserify, but I couldn't find out how to write the CSS into its own
external file, instead it's always part of the JS bundle. This not not ideal (consider
parallel loading of resources for example).

In the end, I think webpack is the way to go, but I'd love to get feedback on how to
simplify this setup and have the same features as well.

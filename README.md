# JavaScript SPA skeleton - deku-cssnext-webpack

[![js-standard-style](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)

* Written using the [AirBnB code style](https://github.com/airbnb/javascript), checked with ESLint
* Uses [page.js](https://github.com/visionmedia/page.js) for the router
* Uses [Deku](https://github.com/dekujs/deku) for the views
* Uses ES6 and JSX via [Babel](https://babeljs.io)
* Uses webpack with webpack-dev-server
* Uses cssnext
* Creates minified builds
* Uses simple NPM scripts instead of Gulp or Grunt
* Uses [Surge](https://surge.sh) to deploy the public folder 

Deployed to http://deku-cssnext-webpack.surge.sh.

## Usage

* `npm run start` to start a local development server with hot reloading
* `npm run test` to lint the code
* `npm run build` to create a static build to the public folder
* `npm run deploy` to deploy the public folder using Surge

## Thoughts

* Deku is kinda nice, definitely a lot smaller then React. App went down from 141 KB to 31 KB.
* Not sure about this current `export default {propTypes, initialState, render}` syntax I used, let's look into exporting an object instead.
* Deku's docs are pretty much non-existent, found it a lot harder to get started with this then React. But once you get started,
it's so small, not a lot to learn.
* Nice to get rid of Ampersand, replace it with page.js.
* Replacing postcss + a ton of plugins with simply cssnext was a good move. I loose the nested syntax but that's not a good idea to
use anyway. I should really look into local-scoped css, and [oocs](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/).
See also [this](https://blog.colepeters.com/on-writing-real-css-again/).

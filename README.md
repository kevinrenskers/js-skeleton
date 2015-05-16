# JavaScript SPA research

Looking into frameworks, libraries and build systems to use. Very much a work in progress.

Each experiment will have a similar output, a very simple hello world page. They must all use a router to display the
"home" page, have auto-reloading enabled in dev mode and produce minified ready-to-deploy producion builds with one
command.

## Current branches with experiments

* [ampersand-react-webpack](https://github.com/kevinrenskers/js-skeleton/tree/ampersand-react-webpack)

## Going to look into 

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

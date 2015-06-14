# JavaScript SPA research

Looking into frameworks, libraries and build systems to use. Very much a work in progress.

Each experiment will have a similar output, a very simple hello world page with an input field that simply 
renders its contents below it, and a separate page showing a very simple todo list. They must all use a router, 
have auto-reloading enabled in dev mode and produce minified ready-to-deploy producion builds with one
command.

## Finished experiments

1. [ampersand-react-webpack](https://github.com/kevinrenskers/js-skeleton/tree/ampersand-react-webpack) ([blog post](http://www.mixedcase.nl/articles/2015/05/17/research-front-end-part-1/))
2. [deku-cssnext-webpack](https://github.com/kevinrenskers/js-skeleton/tree/deku-cssnext-webpack) ([blog post](http://www.mixedcase.nl/articles/2015/05/31/research-front-end-part-2/))
3. [angularjs-webpack](https://github.com/kevinrenskers/js-skeleton/tree/angularjs-webpack)
4. [angularjs-browserify](https://github.com/kevinrenskers/js-skeleton/tree/angularjs-browserify)

## Future experiments 

* Gulp, [Browserify](http://browserify.org), [watchify](https://github.com/substack/watchify) and [babelify](https://github.com/babel/babelify) instead of webpack.
  Webpack has some nice features (hello requiring css!) and completely replaces a build system like Gulp, but its config is an eye sore.
  While I could run watchify from the command line without using a build system, I still need Gulp for cssnext, since it doesn't have a watch mode.
  [Fast browserify builds with watchify](https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md) recipe.
* [Riot](https://muut.com/riotjs/). Uses a custom tags system. 
  [Riotify](https://github.com/jhthorsen/riotify) for Browserify, or [riotjs-loader](https://github.com/esnunes/riotjs-loader) for webpack.
* [Mithril](http://lhorie.github.io/mithril/). Uses JSX.
* [Angular 2](https://angular.io).
* [Aurelia](http://aurelia.io).
* [Cycle](https://github.com/staltz/cycle). Uses JSX. Fully reactive and functional.

## Credits

* https://github.com/HenrikJoreteg/hjs-webpack
* http://learn.humanjavascript.com/react-ampersand
* https://muut.com/riotjs/compare.html

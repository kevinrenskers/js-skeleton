/*eslint no-var:0 */

var path = require('path');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var sourceFile = './src/index.js';
var tmpFolder = './src/.tmp';
var destFolder = './public';
var destFileName = './bundle.js';

gulp.task('watch-js', function() {
  var bundler = watchify(browserify({
    entries: [sourceFile],
    insertGlobals: true,
    cache: {},
    packageCache: {},
    ignoreMissing: true,
    fullPaths: true,
    debug: true
  }));

  function rebundle() {
    return bundler.bundle()
      .on('error', $.util.log.bind($.util, 'Browserify Error'))
      .pipe(source(destFileName))
      .pipe(gulp.dest(tmpFolder));
  }

  bundler.on('update', rebundle);

  return rebundle();
});

gulp.task('build-js', function() {
  var bundler = browserify({
    entries: [sourceFile],
    insertGlobals: true,
    cache: {},
    packageCache: {},
    ignoreMissing: true,
    fullPaths: true,
    debug: false
  });

  return bundler.bundle()
    .on('error', $.util.log.bind($.util, 'Browserify Error'))
    .pipe(source(destFileName))
    .pipe(buffer())
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest(tmpFolder));
});

gulp.task('less', function() {
  return gulp.src('src/assets/style.less')
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.autoprefixer('last 2 versions'))
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest(tmpFolder));
});

gulp.task('watch', ['less', 'watch-js'], function() {
  $.livereload.listen();
  gulp.watch('src/**/*.less', ['less']);

  // Reload the server on file changes
  gulp.watch(['src/.tmp/*.*', 'src/index.html']).on('change', $.livereload.changed);
});

gulp.task('connect', function(callback) {
  var connect = require('connect');
  var http = require('http');
  var server;

  var app = connect();
  app.use(require('morgan')('dev'));
  app.use(require('compression')());
  app.use(require('connect-modrewrite')(['^[^\\.]*$ /index.html [L]']));
  app.use(require('connect-livereload')());
  app.use(require('serve-static')(path.join(__dirname, 'src'), { maxAge: 1 }));

  server = http.createServer(app).listen(8080);

  server.on('error', function(error) {
    $.util.log($.util.colors.underline($.util.colors.red('ERROR')) + ' Unable to start server!');
    callback(error); // we couldn't start the server, so report it and quit gulp
  });

  server.on('listening', function() {
    var address = server.address();
    var host = address.address === '0.0.0.0' || '::' ? 'localhost' : address.address;
    var url = 'http://' + host + ':' + address.port;
    $.util.log('Started dev server at ' + $.util.colors.magenta(url));
    callback(); // we're done with this task for now
  });
});

gulp.task('start', ['connect', 'watch']);

gulp.task('clean', function(cb) {
  var del = require('del');
  del([tmpFolder, destFolder], cb);
});

gulp.task('dist-index', function() {
  var assets = $.useref.assets();

  return gulp.src('src/index.html')
    .pipe(assets)

    // CSS
    .pipe($.if('*.css', $.minifyCss({keepSpecialComments: 0})))

    // Rev the JS and CSS files
    .pipe($.rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())

    // HTML
    .pipe($.if('*.html', $.minifyHtml({empty: true, quotes: true, spare: true})))

    // Output Files
    .pipe(gulp.dest(destFolder));
});

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    ['build-js', 'less'],
    'dist-index',
    callback
  );
});

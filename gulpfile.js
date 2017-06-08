const gulp = require('gulp');
const webpack = require('webpack-stream');
const livereload = require('gulp-livereload');
const gulpServer = require('gulp-live-server');


gulp.task('connect', function() {
  var server = gulpServer.new('./server.js');
  server.start();
});

gulp.task('webpack', function() {
  gulp.src('app/app.jsx')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task("watch", function(){
	livereload.listen();
	gulp.watch("app/components/*.jsx", ["webpack"])

});

gulp.task("all", ["connect", "webpack", "watch"]);

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const nodemon = require('gulp-nodemon');

gulp.task('browserify', brows);

function brows() {
  return browserify('./index.jsx')
  .transform('babelify', {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('gulpBundle.js'))
  .pipe(gulp.dest('./build/'));
}

gulp.task('default', ['browserify']);
const gulp = require('gulp')
const path = require('path');
const del = require('del');
const babel = require('gulp-babel')
const ts = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');

function clean() {
  return del('./lib/**');
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  });
  return gulp
    .src(['src/**/*.ts'])
    .pipe(tsProject)
    .pipe(gulp.dest('lib/es/'));
}

function buildCJS() {
  return gulp
    .src(['lib/es/**/*.js'])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }),
    )
    .pipe(gulp.dest('lib/cjs/'));
}

function buildUMD() {
  return gulp
    .src(['lib/es/index.js'])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-umd'],
      }),
    )
    .pipe(gulp.dest('lib/umd/'));
}

exports.default = gulp.series(
  clean,
  buildES,
  gulp.parallel(buildCJS, buildUMD),
);


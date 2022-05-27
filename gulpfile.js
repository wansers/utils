const gulp = require('gulp')
const path = require('path');
const del = require('del');
const babel = require('gulp-babel')
const ts = require('gulp-typescript');
const through = require('through2');
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

function generatePackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString();
        const parsed = JSON.parse(rawJSON);
        delete parsed.scripts;
        delete parsed.devDependencies;
        delete parsed.publishConfig;
        delete parsed.files;
        const stringified = JSON.stringify(parsed, null, 2);
        file.contents = Buffer.from(stringified);
        cb(null, file);
      }),
    )
    .pipe(gulp.dest('./lib/'));
}

exports.default = gulp.series(
  clean,
  buildES,
  gulp.parallel(buildCJS, buildUMD, generatePackageJSON),
);


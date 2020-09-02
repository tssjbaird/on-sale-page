‘use strict’;

const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

sass.compiler = require('node-sass');gulp.task('sass', function () {   return gulp.src('./scss/*.scss')
   .pipe(concat('custom.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./dist/'));});

function watch() {
    browserSync.init({
        server: {
           baseDir: "./",
           index: "./index.html"
        }
    });
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./pages/*.html').on('change',browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload);
    gulp.watch('./css/*.css').on('change', browserSync.reload);
}

exports.watch = watch;
const browserSync = require('browser-sync').create();
const gulp = require('gulp');

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
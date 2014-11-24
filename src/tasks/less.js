module.exports = function (gulp, config, handleError) {

    var less = require('gulp-less');
    var sourcemaps = require('gulp-sourcemaps');
    var minifyCSS = require('gulp-minify-css');
    var rename = require("gulp-rename");
    var reload = require('browser-sync').reload;
    var notify = require("gulp-notify");

    gulp.task('less', function () {
        gulp.src(config.less.src)
            .pipe(sourcemaps.init())
            .pipe(less())
            .on('error', handleError)
            .pipe(minifyCSS())
            .pipe(rename('main.min.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.less.dest))
            .pipe(reload({ stream: true }))
            .pipe(notify({ title: config.title, message: config.less.msg }))
    });

}
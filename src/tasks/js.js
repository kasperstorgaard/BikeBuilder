module.exports = function (gulp, config, handleError) {
    var sourcemaps = require('gulp-sourcemaps');
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var ngAnnotate = require('gulp-ng-annotate');
    var reload = require('browser-sync').reload;
    var notify = require("gulp-notify");

    gulp.task('js:vendor', function () {
        gulp.src(require('../' + config.js.vendor.map))
            .pipe(sourcemaps.init())
            .pipe(concat(config.js.vendor.min))
            .pipe(uglify({ mangle: config.env.prod }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.js.vendor.dest))
            .pipe(reload({ stream: true }))
            .pipe(notify({ title: config.title, message: config.js.vendor.msg }));
    });

    gulp.task('js:website', function () {
        gulp.src(config.js.website.src)
            .pipe(sourcemaps.init())
            .pipe(concat(config.js.website.min))
            .pipe(ngAnnotate())
            .on('error', handleError)
            .pipe(uglify({ mangle: config.env.prod }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.js.website.dest))
            .pipe(reload({ stream: true }))
            .pipe(notify({ title: config.title, message: config.js.website.msg }));
    });
}
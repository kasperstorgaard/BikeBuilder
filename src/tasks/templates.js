module.exports = function (gulp, config) {

    var templateCache = require('gulp-angular-templatecache');
    var reload = require('browser-sync').reload;
    var notify = require("gulp-notify");

    gulp.task('js:templates', function () {
        gulp.src(config.js.templates.src)
            .pipe(templateCache({ module: config.js.templates.module }))
            .pipe(gulp.dest(config.js.templates.dest))
            .pipe(reload({ stream: true }))
            .pipe(notify({ title: config.title, message: config.js.templates.msg }));
    });
}
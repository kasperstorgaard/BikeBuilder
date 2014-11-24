module.exports = function (gulp, config, handleError) {

    var reload = require('browser-sync').reload;
    var notify = require("gulp-notify");

    gulp.task('views:updated', function () {
        gulp.src(config.views.src)
            .pipe(reload({ stream: true }))
            .pipe(notify({ title: config.title, message: config.views.msg }));
    });
}
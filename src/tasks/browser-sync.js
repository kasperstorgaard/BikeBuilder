module.exports = function (gulp, config) {
    var browserSync = require('browser-sync')

    gulp.task('browser-sync', function () {
        browserSync({
            proxy: "local.bikebuilder"
        });
    });
}
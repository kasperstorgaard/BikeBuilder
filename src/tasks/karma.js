module.exports = function (gulp, configPath) {
    var karma = require('karma');
    var server = karma.server;

    gulp.task('karma:start', function (done) {
        server.start({
            configFile: configPath
        }, done);
    });
}
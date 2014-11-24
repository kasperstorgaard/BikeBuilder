module.exports = function (gulp, config, handleError) {
    var karma = require('karma');
    var server = karma.server;
    var runner = karma.runner;

    gulp.task('karma:start', function (done) {
        server.start({
            configFile: __dirname + '/' + config.karma.configFile
        }, done);
    });
}
module.exports = function (gulp, configPath, handleError) {
    var exec = require('child_process').exec;
    var karma = require('karma');
    var server = karma.server;

    gulp.task('karma:start', function () {
        exec('gulp karma:childrun', function (err, stdout, stderr) { })
            .on('error', handleError);
    });

    gulp.task('karma:childrun', function (done) {
        console.log(configPath);
        server.start({
            configFile: configPath
        }, done);
    });
}
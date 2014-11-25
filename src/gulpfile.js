/// <vs SolutionOpened='serve' />
var gulp = require('gulp');

function handleError(error) {
    console.log(error.toString());
    this.emit('end');
}

var config = require('./gulpconfig.json');
var karmaPath = __dirname + '/' + config.karma.configPath;

require('./tasks/browser-sync.js')(gulp, config);
require('./tasks/templates.js')(gulp, config, handleError)
require('./tasks/js.js')(gulp, config, handleError);
require('./tasks/karma.js')(gulp, karmaPath, handleError);
require('./tasks/less.js')(gulp, config, handleError);
require('./tasks/views.js')(gulp, config, handleError);

//----------------------------------------//
gulp.task('serve', ['less', 'js:templates', 'js:vendor', 'js:website','browser-sync'], function () {
    gulp.watch(config.less.watch, ['less']);
    gulp.watch(config.js.website.src, ['js:website']);
    gulp.watch(config.js.vendor.map, ['js:vendor']);
    gulp.watch(config.js.templates.src, ['js:templates', 'js:website']);
    gulp.watch(config.views.src, ['views:updated']);
});

gulp.task('default', ['serve']);
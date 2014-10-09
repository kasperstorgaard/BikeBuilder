/// <vs SolutionOpened='serve' />
var gulp = require('gulp');
var karma = require('karma');
var server = karma.server;
var runner = karma.runner;
var notify = require("gulp-notify");
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

var paths = {
    less: 'content/less/**/*.less',
    css: 'content/css',
    mainLess: 'content/less/main.less',
    karmaConfig: 'scripts/test/config/karma.conf.js'
};

function swallowError(error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}

//_________________ JS ___________________//
gulp.task('js:vendor', function () {
    var mapJSON = require('./scripts/vendor/map.json');
    gulp.src(mapJSON)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write({ sourceRoot: '/Scripts/vendor' }))
        .pipe(gulp.dest('scripts'))
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: BikeBuilder', message: 'vendor scripts updated' }));
});

gulp.task('js:main', function () {
    var mapJSON = require('./scripts/website/map.json');
    console.log(mapJSON);
    gulp.src(mapJSON)
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write({sourceRoot: '/Scripts/website'}))
        .pipe(gulp.dest('scripts'))
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: BikeBuilder', message: 'website scripts updated' }));
});


//________________ KARMA _________________//
gulp.task('karma:start', function (done) {
    server.start({
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        configFile: __dirname + '/' + paths.karmaConfig
    }, done);
});

//_________________ LESS _________________//
gulp.task('less', function () {
    gulp.src(paths.mainLess)
        .pipe(sourcemaps.init())
        .pipe(less())
        .on('error', swallowError)
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write({ sourceRoot: '/Content/less' }))
        .pipe(gulp.dest(paths.css))
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: BikeBuilder', message: 'css updated' }));
});

//_____________ BROWSER SYNC _____________//
gulp.task('browser-sync', function () {
    browserSync({
        proxy: "local.bikebuilder"
    });
});

//_____________ VIEWS ___________________//
gulp.task('views:updated', function () {
    gulp.src(paths.mainLess)
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: BikeBuilder', message: 'views updated' }));
});

//----------------------------------------//
gulp.task('serve', ['less', 'js:vendor', 'js:main', 'browser-sync'], function () {
    gulp.watch(paths.less, ['less']);
    gulp.watch(['scripts/website/**/*.js', 'scripts/website/map.json'], ['js:main']);
    gulp.watch(['scripts/vendor/**/*.js', 'scripts/vendor/map.json'], ['js:vendor', 'js:main']);
    gulp.watch('views/**/*.cshtml', ['views:updated']);
});

gulp.task('default', ['serve']);
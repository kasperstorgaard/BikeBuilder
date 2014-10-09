/// <vs />
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
var path = require('path');
var shell = require('gulp-shell')

var paths = {
    js: {
        vendor: [
            'scripts/vendor/AngularJs/angular.js',
            'scripts/vendor/AngularJs/angular-animate.js',
            'scripts/vendor/Angular-strap/angular-strap.js',
            'scripts/vendor/Angular-strap/angular-strap.tpl.js',
            'scripts/vendor/lodash/lodash.js'
        ],
        main: [
            'scripts/website/main.js',
            'scripts/website/services/*.js',
            'scripts/website/configs/*.js',
            'scripts/website/directives/*.js',
            'scripts/website/controllers/*.js'
        ]
    },
    less: 'content/less/**/*.less',
    css: 'content/css',
    mainLess: 'content/less/main.less',
    karmaConfig: 'scripts/test/config/karma.conf.js'
};

//_________________ JS ___________________//
gulp.task('js:vendor', function () {
    gulp.src(paths.js.vendor)
        .pipe(sourcemaps.init())
            .pipe(concat('vendor.min.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('scripts'));
});

gulp.task('js:main', function () {
    gulp.src(paths.js.main)
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(ngAnnotate({
            'add': true,
            'remove': true
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('scripts'))
        .pipe(reload({ stream: true }))
        .pipe(notify('scripts updated'));
});


//________________ KARMA _________________//
gulp.task('karma:start', function (done) {
    server.start({
        configFile: __dirname + '/' + paths.karmaConfig
    }, done);
});

//_________________ LESS _________________//
gulp.task('less', function () {
    gulp.src(paths.mainLess)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.css))
        .pipe(reload({ stream: true }))
        .pipe(notify('css updated'));
});

//_____________ BROWSER SYNC _____________//
gulp.task('browser-sync', function () {
    browserSync({
        proxy: "local.bikebuilder"
    });
});

//----------------------------------------//
gulp.task('serve', ['less', 'js:vendor', 'js:main', 'browser-sync'], function () {
    gulp.watch(paths.less, ['less']);
    gulp.watch('scripts/website/**/*.js', ['js:main'], function () {
        console.log('js changed!');
    });
});

gulp.task('default', ['serve']);
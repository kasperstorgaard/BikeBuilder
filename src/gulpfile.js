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
var templateCache = require('gulp-angular-templatecache');
var fs = require('fs');
var util = require('util');

var paths = {
    css: 'content/css',
    js: 'scripts/website/**/*.js',
    karmaConfig: 'scripts/test/config/karma.conf.js',
    less: 'content/less/**/*.less',
    mainLess: 'content/less/main.less',
    maps: { website: 'scripts/website/map.json', vendor: 'scripts/vendor/map.json' },
    templates: 'scripts/website/templates/**/*.tpl.html',
    views: 'views/**/*.cshtml'
};

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}

function readJSONFile(path) {
    var file = fs.readFileSync(path, 'utf8');
    var str = file.toString();
    while (str.charCodeAt(0) == 65279) {
        str = str.substr(1);
    }
    return JSON.parse(str);
}

var env = {
    dev: true,
    prod: false
};

//_________________ JS ___________________//
gulp.task('js', ['js:templates', 'js:vendor', 'js:main']);

gulp.task('js:templates', function () {
    gulp.src(paths.templates)
        .pipe(templateCache({module: 'bikeBuilder'}))
        .pipe(gulp.dest('scripts/website/templates'))
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: BikeBuilder', message: 'templates updated' }));
});

gulp.task('js:vendor', function () {
    var mapJSON = readJSONFile('./scripts/vendor/map.json');
    gulp.src(mapJSON)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.js'))
        .pipe(uglify({ mangle: env.prod }))
        .pipe(sourcemaps.write({ sourceRoot: './vendor' }))
        .pipe(gulp.dest('scripts'))
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: BikeBuilder', message: 'vendor scripts updated' }));
});

gulp.task('js:main', function () {
    gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(ngAnnotate())
        .on('error', swallowError)
        .pipe(uglify({ mangle: env.prod }))
        .pipe(sourcemaps.write({ sourceRoot: './website' }))
        .pipe(gulp.dest('scripts'))
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: BikeBuilder', message: 'website scripts updated' }));
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
        .on('error', swallowError)
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write({ sourceRoot: '/Content/less'}))
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
gulp.task('serve', ['less', 'js', 'browser-sync'], function () {
    gulp.watch(paths.less, ['less']);
    gulp.watch([paths.js, paths.maps.website], ['js:main']);
    gulp.watch([paths.maps.vendor], ['js:vendor', 'js:main']);
    gulp.watch([paths.templates], ['js:templates', 'js:main']);
    gulp.watch('views/**/*.cshtml', ['views:updated']);
});

gulp.task('default', ['serve']);
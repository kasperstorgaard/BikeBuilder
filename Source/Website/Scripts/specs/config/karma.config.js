module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            '../../main.min.js',
            '../../vendor/angularJs/angular-mocks.js',
            '../*.spec.js',
            '../**/*.spec.js'
        ],
        preprocessors: {

        },
        logLevel: config.LOG_INFO,
        colors: true,
        browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE'],
        singleRun: true,
        autoWatch: false,
        background: true,
        reporters: ['progress', 'growl', 'html'],
        htmlReporter: {
            outputDir: 'scripts/reports/karma',
            templatePath: 'scripts/specs/config/jasmine_template.html'
        },
        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-growl-reporter',
            'karma-jasmine',
            "karma-html-reporter"
        ]
    });
};

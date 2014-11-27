module.exports = function (config) {
    config.set({
        browsers: ['Chrome', 'Firefox'],
        frameworks: ['jasmine'],
        files: [
            '../../vendor.min.js',

            '../../website/main.js',
            '../../website/services/**/*.js',
            '../../website/controllers/**/*.js',
            '../../website/directives/**/*.js',
            '../../website/templates/templates.js',

            '../../vendor/angularJs/angular-mocks.js',
            '../**/*.spec.js'
        ],
        reporters: ['progress', 'growl', 'html' , 'coverage'],
        htmlReporter: {
            outputDir: __dirname + '/../karma_html',
            templatePath: __dirname+'/jasmine_template.html'
        },
        preprocessors: {
            '../../website/main.js': 'coverage',
            '../../website/services/**/*.js': 'coverage',
            '../../website/controllers/**/*.js': 'coverage',
            '../../website/directives/**/*.js': 'coverage',
            '../../website/templates/templates.js': 'coverage'
        },
        coverageReporter: {
            type : 'html',
            dir : '../karma_coverage/'
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-growl-reporter',
            'karma-html-reporter',
            'karma-coverage',
            'karma-jasmine'
        ]
    });
};
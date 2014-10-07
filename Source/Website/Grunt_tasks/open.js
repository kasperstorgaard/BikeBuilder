'use strict';
module.exports = function open(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-open');
    // Options
    return {
        karma : {
            path:function () {
                var reports = grunt.file.expand('scripts/reports/karma/PhantomJS*/index.html');
                return reports[reports.length - 1].toString();
            },
        },
        jshint : {
            path:'scripts/reports/jshint/jshint-report.html'
        },
        plato : {
            path:'scripts/reports/plato/index.html'
        }
    };
};
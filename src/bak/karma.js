'use strict';

module.exports = function(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-karma');

    // Options
    return {
        unit: {
            configFile: 'scripts/specs/config/karma.conf.js', background: true
        },
        std: {
            browsers: ['PhantomJS'],
            configFile: 'scripts/specs/config/karma.conf.js'
        },
        watch: {
            configFile: 'scripts/specs/config/karma.conf.js', singleRun: false, background: true
        }
    };
};
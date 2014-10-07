'use strict';

module.exports = function(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-karma');

    // Options
    return {
        unit: {
            configFile: 'scripts/specs/config/karma.config.js'
        },
        std: {
            browsers: ['PhantomJS'],
            configFile: 'scripts/specs/config/karma.config.js'
        }
    };
};
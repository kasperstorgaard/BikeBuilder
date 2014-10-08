'use strict';

module.exports = function (grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-shell');

    // Options
    return {
        startKarmaWatch: {
            command: 'grunt karma:unit:start watch'
        }
    };
};
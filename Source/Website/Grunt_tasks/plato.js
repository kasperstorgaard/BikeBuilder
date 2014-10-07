'use strict';
module.exports = function plato(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-plato');
    // Options
    return {
        options: {
            jshint: grunt.file.readJSON('scripts/.jshintrc')
        },
        js: {
            files: {
                'scripts/reports/plato': ['scripts/website/**/*.js', 'scripts/website/*.js', 'scripts/specs/*.js' ]
            }
        }
    };
};

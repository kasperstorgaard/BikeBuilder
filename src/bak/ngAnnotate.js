'use strict';
module.exports = function ngAnnotate(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-ng-annotate');
    // Options
    return {
        options: {
            singleQuotes: true,
        },
        angular: {
            files: {
                'scripts/main.annotated.js': [
                    'scripts/website/main.js',
                    'scripts/website/services/*.js',
                    'scripts/website/configs/*.js',
                    'scripts/website/directives/*.js',
                    'scripts/website/controllers/*.js'
                ]
            }

        }
    };
};

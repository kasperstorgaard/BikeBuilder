'use strict';
module.exports = function autoprefixer(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-autoprefixer');
    // Options
    return {
        options: {
            // Task-specific options go here.
        },

        // prefix the specified file
        prefix: {
            options: {
                // Target-specific options go here.
            },
            src: 'content/css/main.css',
            dest: 'content/css/main.min.css'
        }

    };
};

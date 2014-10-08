'use strict';
module.exports = function uglify(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Options
    return {
        all: {
            options: {
                sourceMap: true,
                mangle: true
            },
            files: {
                'scripts/main.min.js': [
                    'scripts/vendor/AngularJs/angular.js',
                    'scripts/vendor/AngularJs/angular-animate.js',
                    'scripts/vendor/Angular-strap/angular-strap.js',
                    'scripts/vendor/Angular-strap/angular-strap.tpl.js',
                    'scripts/vendor/lodash/lodash.js',
                    'scripts/main.annotated.js'],
                
            }
        }
    };
};

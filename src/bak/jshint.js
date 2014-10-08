'use strict';


module.exports = function jshint(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Options
	return {
        report: {
            src: [
              'scripts/website/**/*.js',
              'scripts/website/*.js'
            ],
	        options: {
	            jshintrc: 'scripts/.jshintrc',
	            reporter: require('jshint-html-reporter'),
	            reporterOutput: 'scripts/reports/jshint/jshint-report.html'
	        }
        },
        std: {
            src: [
	            'scripts/website/**/*.js',
                'scripts/website/*.js'
            ],
            options: {
                jshintrc: 'scripts/.jshintrc',
            }
        }
	};
};

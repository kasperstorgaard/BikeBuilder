/// <vs BeforeBuild='default' AfterBuild='test' />
/*global module */
'use strict';
module.exports = function (grunt) {
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('grunt_tasks'),
        verbose: true
    }, (function (err) { console.log(err); }));
    
    grunt.registerTask('default', ['less', 'autoprefixer', 'jshint:std', 'ngAnnotate', 'uglify']);
    grunt.registerTask('test', ['jshint:report', 'open:jshint', 'karma:unit', 'open:karma', 'plato', 'open:plato']);
    grunt.registerTask('fasttest', ['jshint:report', 'karma:std',  'plato']);
    grunt.registerTask('build', ['less', 'autoprefixer', 'ngAnnotate', 'uglify']);
    grunt.registerTask('simpletest', ['ngAnnotate', 'uglify', 'karma:std']);
    grunt.registerTask('watch', ['watch']);
};

module.exports = function(grunt) {
    //Config Grunt plugins ===============================
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Configure JSHint
        jshint: {
            all: ['Gruntfile.js', 'public/src/js/**/*.js', 'api/**/*.js'],
            options: {
                reporter: require('jshint-stylish')
            }
        },

        // Configure a mochaTest task 
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    //captureFile: 'results.txt', // Optionally capture the reporter output to a file 
                    quiet: false, // Optionally suppress output to standard out (defaults to false) 
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
                },
            src: ['test/**/*.js']
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'mochaTest']);

    //Load Grunt plugins ===============================
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

};
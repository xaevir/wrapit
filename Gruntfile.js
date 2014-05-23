module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          'public/css/*.less',
        ],
        tasks: ['less']
      },
    },
    less: {
      development: {
        files: {
          'public/css/main.css': 'public/css/main.less'
        }
      },
    },
    browserSync: {
      files: {
        src : 'public/css/main.css'
      },
      options: {
        watchTask: true
      }
    },
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Register the default tasks.
  grunt.registerTask('default', ['browserSync', 'watch']);
};

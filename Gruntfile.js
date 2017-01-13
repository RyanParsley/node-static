module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['*.scss'],
          dest: 'dist/assets/css',
          ext: '.css'
        }]
      }
    },
    pug: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: [ {
          cwd: "src",
          src: "**/*.pug",
          dest: "dist",
          expand: true,
          ext: ".html"
        } ]
      }
    }
  });

  // Load the plugin that loads the plugins
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['pug', 'sass']);

};

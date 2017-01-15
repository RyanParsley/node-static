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
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/scripts/main.js'],
        dest: 'dist/assets/scripts/main.js',
      },
    },
    pug: {
      compile: {
        options: {
          data: {
            title: "Data Works!",
            nav: grunt.file.readJSON('src/data/nav.json'),
            debug: false
          }
        },
        files: [ {
          cwd: "src/pages",
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
  grunt.registerTask('default', ['pug', 'sass', 'concat']);

};

module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    watch:{
      options: {
        livereload: true,
        spawn: false
      },
      // files:['site/**'],
      files:['*.html', '*.scss', '*.css', 'js/**'],
      tasks:['sass']
      // spawn: false

    },

     sass: {
      options: {
            sourceMap: true
        },
    dist: {
      files: {
        'css/style.css': 'main.scss'
      }
    }
  },
  cssmin: {
  target: {
    files:  [{
      expand: true,
      cwd: 'css',
      src: 'style.css',
      dest: 'css/',
      ext: '.min.css'
    }]
  }
},

uglify: {
    my_target: {
      files: {
        'js/app.min.js': ['js/app.js']
      }
    }
  },

  imagemin: {
    png: {
      options: {
        optimizationLevel: 7
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'img-raw',
          src: ['*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: 'img/',
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'img-raw',
          src: ['*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: 'img/',
          ext: '.jpg'
        }
      ]
    }
  },

  connect: {
    server: {
      options: {
        port: 8000,
        // base: './site',
        base: '.',
        hostname: 'localhost',
        protocol: 'http',
        livereload: true,
        app: 'Firefox',
        // open: 'true'
      }
    }
  },

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('server',[  'connect', 'cssmin', 'uglify', 'watch', 'imagemin' ]);
  };

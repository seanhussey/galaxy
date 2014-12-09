module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'public/galaxy/galaxy.css' : 'public/galaxy/galaxy.scss',
					'public/css/docs.css' : 'public/css/docs.scss',
					'public/css/home.css' : 'public/css/home.scss'
				}
			}
		},

		watch: {
			css: {
				files: 'public/*.jade',
				tasks: ['sass']
			}
		},

		browserSync: {
		    bsFiles: {
		        src : 'public/galaxy/galaxy.css'
		    },
		    options: {
		        server: {
		            baseDir: "./"
		        }
		    }
		},

		  harp: {
		    server: {
		      server: true,
		      source: 'src'
		    },
		    dist: {
		      source: 'src',
		      dest: 'build'
		    }
		  },

	  uglify: {
	    my_target: {
	      files: {
	        'public/galaxy/galaxy.min.css': ['public/galaxy/galaxy.css']
	      }
	    }
	  },

	browserSync: {
	    bsFiles: {
	        src : 'public/*'
	    },
	    options: {
	    	proxy: 'localhost:9000',
	    	watchTask: true
	    }
	},

	  harp: {
    server: {
      server: true,
      source: 'src'
    },
    dist: {
      source: 'src',
      dest: 'build'
    }
  }

	});

	// Load the task
	grunt.loadNpmTasks('grunt-notify');

	// This is required if you use any options.
	grunt.task.run('notify_hooks');

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-harp');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}
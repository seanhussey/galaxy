module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'galaxy.css' : 'galaxy.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 version']
			},
			dist: {
				files: [{
					src: 'galaxy.css',
					dest: 'galaxy.css'
				}]
			}
		},
		watch: {
			css: {
				files: 'galaxy/*.scss',
				tasks: ['sass', 'autoprefixer']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['sass', 'autoprefixer', 'watch']);
}

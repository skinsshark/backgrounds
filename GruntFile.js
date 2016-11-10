module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['resources/js/**/*.js'],
				dest: '<%= pkg.name %>.js'
			},
			deps: {
				src: [
					'bower_components/modernizr/modernizr.js',
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/bootstrap.js',
					'bower_components/angularjs/angular.min.js',
				],
				dest: '<%= pkg.name %>-deps.js'
			},
			css: {
				src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
						'resources/css/styles.css'
				],
				dest: 'resources/css/<%= pkg.name %>.css'
			},
			move: {
				src: ['bower_components/angularjs/angular.min.js.map'],
				dest: 'angular.min.js.map'
			}
		},

		sass: {
			dev: {
				files: {
					'resources/css/styles.css': 'resources/css/styles.scss'
				}
			}
		},

		watch: {
			scripts: {
				files: ['resources/js/**/*.js'],
				tasks: ['concat:dist']
			},
			styles: {
				files: ['resources/css/*.scss'],
				tasks: ['sass']
			}
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ngdocs');

	//tasks
	grunt.registerTask('default', 'Default Task Alias', ['build']);

	grunt.registerTask('build', 'Build the application', 
		['sass:dev',
		'concat'
		]);
}
module.exports = function(grunt) {
	// Project configuration. 
	grunt.initConfig({
	  watch: {
	  	sass: {
	  		files: ['assets/stylesheets/*.scss'],
	  		tasks: ['sass','cssmin'],
	  	}
	  },

	  sass: {
	    dist: {
	      files: {
	      	'assets/stylesheets/bootstrap.css' : 'assets/stylesheets/bootstrap.scss',
	      	'assets/stylesheets/styles.css' : 'assets/stylesheets/styles.scss'
	      }
	    }
	  },

	  cssmin: {
	  	my_target: {
	  		files: [{
	  			expand: true,
	  			cwd: 'assets/stylesheets/',
	  			src: ['*.css', '!*.min.css'],
	  			dest: 'assets/stylesheets/',
	  			ext: '.min.css'
	  		}]
	  	}
	  }

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('jquery.transit');
};
// https://github.com/gruntjs/grunt-sass
module.exports = {
	options: {
		sourceMap: true,
		includePaths: require( 'node-neat' ).includePaths
	},
	theme: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>scss/',
				src: '*.scss',
				dest: '<%= paths.tmp %>',
				ext: '.css'
			}
		]
	}
};

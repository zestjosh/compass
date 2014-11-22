// https://github.com/sindresorhus/grunt-sass
module.exports = {
	options: {
		includePaths: require( 'node-neat' ).includePaths,
		sourceMap: true,
		outputStyle: 'expanded'
	},
	theme: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>scss/',
				src: 'style.scss',
				dest: '<%= paths.tmp %>',
				ext: '.css'
			}
		]
	},
	editorstyle: {
		options: {
			sourcemap: 'none',
			lineNumbers: false,
			banner:
				'/*!\n' +
				'<%= pkg.theme.name %> Editor Styles\n' +
				'Version: <%= pkg.version %>\n' +
				'*/\n'
		},
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>scss/',
				src: 'editor-style.scss',
				dest: '<%= paths.tmp %>',
				ext: '.css'
			}
		]
	}
};

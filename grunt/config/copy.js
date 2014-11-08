// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
	css: {
		files: [
			{
				cwd: '<%= paths.tmp %>',
				expand: true,
				flatten: true,
				src: ['style*.css', 'style*.map'],
				dest: '<%= paths.theme %>',
				filter: 'isFile'
			}
		]
	},
	vendorcss: {
		files: [
			{
				expand: true,
				flatten: true,
				src: [
					'<%= paths.bower %>genericons/genericons.css'
				],
				dest: '<%= paths.theme %>css/',
				filter: 'isFile'
			}
		]
	},
	font: {
		files: [
			{
				expand: true,
				flatten: true,
				src: [
					'<%= paths.bower %>genericons/Genericons.eot',
					'<%= paths.bower %>genericons/Genericons.svg',
					'<%= paths.bower %>genericons/Genericons.ttf',
					'<%= paths.bower %>genericons/Genericons.woff'
				],
				dest: '<%= paths.theme %>font/'
			}
		]
	},
	hybridcore: {
		files: [
			{
				cwd: '<%= paths.composer %>justintadlock/hybrid-core',
				expand: true,
				src: ['**/*'],
				dest: '<%= paths.hybridCore %>'
			}
		]
	},
	flagshiplibrary: {
		files: [
			{
				cwd: '<%= paths.composer %>flagshipwp/flagship-library',
				expand: true,
				src: ['**/*'],
				dest: '<%= paths.theme %>includes/vendor/flagship-library'
			}
		]
	},
	themehookalliance: {
		files: [
			{
				cwd: '<%= paths.composer %>zamoose/themehookalliance',
				expand: true,
				src: ['tha-theme-hooks.php'],
				dest: '<%= paths.theme %>includes/vendor/'
			}
		]
	},
	images: {
		files: [
			{
				cwd: '<%= paths.tmp %>images',
				expand: true,
				flatten: true,
				src: ['*', '!screenshot.png'],
				dest: '<%= paths.theme %>images',
				filter: 'isFile'
			}
		]
	},
	screenshot: {
		files: [
			{
				cwd: '<%= paths.tmp %>images',
				expand: true,
				flatten: true,
				src: ['screenshot.png'],
				dest: '<%= paths.theme %>',
				filter: 'isFile'
			}
		]
	}
};

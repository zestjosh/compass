// https://github.com/alappe/grunt-phpmd
module.exports = {
	options: {
		reportFormat: 'text',
		reportFile: '<%= paths.logs %>phpmd.log',
		strict: true,
		rulesets: 'phpmd.xml',
		exclude: 'hybrid-core,includes/vendor'
	},
	theme: {
		dir: '<%= paths.theme %>'
	}
};

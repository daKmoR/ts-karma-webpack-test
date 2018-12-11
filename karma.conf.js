const webpackConfig = require('./webpack.config');
delete webpackConfig.entry;

module.exports = function(config) {
	config.set({
		basePath: '.',
		frameworks: ['mocha', 'webpack'],
		files: [
			'src/*.spec.ts'
		],
		preprocessors: {
			['src/*.spec.ts']: 'webpack'
		},
		browsers: ['ChromeHeadless'],
		webpack: webpackConfig
	});
};
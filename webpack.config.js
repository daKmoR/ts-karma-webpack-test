const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/foo.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{ test: /\.ts$/, use: 'awesome-typescript-loader' }
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	}
};

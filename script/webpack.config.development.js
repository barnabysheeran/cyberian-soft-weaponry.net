const { outputConfig, optimisationConfig, moduleConfig, pluginsConfig } = require('./webpack.config.common.js');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',

	entry: './src/js/index.js',

    devServer: {
		open: true,
		hot: true,
	},

    output: outputConfig,
	optimization: optimisationConfig,
    module: moduleConfig,
    plugins: pluginsConfig,
};
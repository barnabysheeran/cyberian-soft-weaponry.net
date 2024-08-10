const { outputConfig, optimisationConfig, moduleConfig, pluginsConfig } = require('./webpack.config.common.js');

module.exports = {
	mode: 'production',
	devtool: false,

	entry: './src/js/index.js',

    output: outputConfig,
	optimization: optimisationConfig,
    module: moduleConfig,
    plugins: pluginsConfig,
};
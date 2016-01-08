const webpack = require('webpack'),
	  path    = require('path')

module.exports = {
	context: path.join(__dirname, "./client"),
	entry: {
		jsx: './index.jsx',
		html: './index.html',
		vendor: ['react']
	},
	output: {
		path: path.join(__dirname, './static'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: [
					'react-hot',
					'babel-loader'
				]
			},
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
		})
	],
	devServer: {
		contentBase: './client',
		hot: true
	}
}
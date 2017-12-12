const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	devServer: {
		open: 'chrome',
		port: 3000
	},
	devtool: "heap-module-eval-source-map",
	entry: {
		app: './src/app.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'js/[name][hash].js',
		sourceMapFilename: "js/[name].map"
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)?$/,
				// exclude: /(node_modules|bower_components)/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'env', 'stage-3']
          }
				}
			},
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
			{
				test: /\.(woff|woff2)$/,
				use: [
					'file-loader'
				]
			}
			// {
			// 	test: /\.(woff?.+|woff2?.+)$/,
			// 	use: 'file-loader?name=assets/[name]-[hash].[ext]'
			// },
			// {
			// 	test: /\.(png|gif|jpg|svg)$/,
			// 	use: [
			// 		'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
			// 	],
			// 	include: staticSourcePath
			// }
			// {
			// 	test: /\.(jpg|png|svg)$/,
			// 	include: /img/,
			// 	use: ExtractTextPlugin.extract({
			// 		use: 'file-loader?limit=30000&name=[name]-[hash].[ext]'
			// 		// use: 'file-loader'
			// 	})
			// },
			// {
			// 	test: /\.(woff|woff2)$/,
			// 	include: /fonts/,
			// 	use: ExtractTextPlugin.extract({
			// 		use: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			// 	})
			// },
		]
	},
	resolve: {
		modules: ['node_modules'],
		extensions: [".js", ".json", ".jsx", ".css", ".scss", ".sass", "*"]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/public/index.html',
			filename: "index.html",
			chunks: ["app", "bundle"],
			minify: {
				collapseWhitespace: false,
				collapseInlineTagWhitespace : false,
				removeComments: true,
				removeRedundantAttributes: true
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'bundle',
			filename: 'js/bundle.js',
			children: true,
			minChunks: 2
		}),
    new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({filename: 'css/[name].css'}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.HashedModuleIdsPlugin()
	]
};


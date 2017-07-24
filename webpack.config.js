// https://github.com/diegohaz/arc/wiki/Webpack
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devServer = require('@webpack-blocks/dev-server2')
const splitVendor = require('webpack-blocks-split-vendor')
const happypack = require('webpack-blocks-happypack')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const {
	addPlugins, createConfig, entryPoint, env, setOutput,
	sourceMaps, defineConstants, webpack,
} = require('@webpack-blocks/webpack2')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 2075
const sourceDir = process.env.SOURCE || 'src'
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')

const babel = () => () => ({
	module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
		],
	},
})

const assets = () => () => ({
	module: {
		rules: [
			{ test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/, loader: 'url-loader?limit=8000' },
			// { test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']}
			{ test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']}
		],
	},
})

const resolveModules = modules => () => ({
	resolve: {
		modules: [].concat(modules, ['node_modules']),
	},
})

const config = createConfig([
	// externals({
	// 	"react": "React",
	// 	"react-dom": "ReactDOM",
	// 	"lodash": "lodash"
	// }),
	entryPoint({
		app: sourcePath,
	}),
	setOutput({
		filename: '[name].js',
		path: outputPath,
		publicPath,
	}),
	defineConstants({
		'process.env.NODE_ENV': process.env.NODE_ENV,
		'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
	}),
	addPlugins([
	//  new BundleAnalyzer({
	//      analyzerMode: 'static',
	//      openAnalyzer: false
	//  }),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(process.cwd(), 'public/index.html'),
		}),
	]),
	happypack([
		babel(),
	]),
	assets(),
	resolveModules(sourceDir),

	env('development', [
		devServer({
			contentBase: 'public',
			stats: 'errors-only',
			historyApiFallback: { index: publicPath },
			headers: { 'Access-Control-Allow-Origin': '*' },
			host,
			port,
		}),
		sourceMaps(),
		addPlugins([
			new webpack.NamedModulesPlugin(),
		]),
	]),

	env('production', [
		splitVendor(),
		addPlugins([
			new webpack.optimize.UglifyJsPlugin({
				compress: { warnings: false },
				comments: false,
				sourceMap: false
			}),
		]),
	]),
])

module.exports = config

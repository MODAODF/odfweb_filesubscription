const path = require('path')
const webpackConfig = require('@nextcloud/webpack-vue-config')

webpackConfig.entry = {
    plugin: path.join(__dirname, 'src', 'plugin.js'),
	tabview: path.join(__dirname, 'src', 'tabview.js'),
	sharedfile: path.join(__dirname, 'src', 'sharedfile.js'),
}

webpackConfig.module.rules = [
    {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
        enforce: 'pre'
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader'
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    },
    {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader'
    }
]

module.exports = webpackConfig
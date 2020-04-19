const { resolve } = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const SvgStorePlugin = require('webpack-svgstore-plugin');

const config = {
    entry: './src/index.js',

    output: {
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.js',
    },

    devServer: {
        contentBase: resolve(__dirname, 'public'),
        historyApiFallback: true,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    resolve: {
        alias: {
            components: resolve(__dirname, 'src/components/'),
            views: resolve(__dirname, 'src/views/'),
        },
        extensions: ['.js', '.vue', '.json'],
    },

    plugins: [
        new VueLoaderPlugin(),
        new SvgStorePlugin({
            svgoOptions: {
                plugins: [
                    { removeUselessStrokeAndFill: true },
                    { removeTitle: true },
                ],
            },
            prefix: '',
        }),
    ],
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        config.devtool = 'none';
    }

    return config;
};

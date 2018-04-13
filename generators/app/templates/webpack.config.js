const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (env, argv) {
    return {
        mode: 'development',
        entry: {
            app: `./src/index.${env.lang}`,
            framer: './src/framer/framer-fix.js',
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: '[name].bundle.js',
        },
        devServer: {
            contentBase: path.resolve(__dirname, "public"),
            compress: true,
            port: 9000
        },
        module: {
            rules: [
                {
                    test: /\.coffee$/,
                    loader: 'coffee-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|framer)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babel-preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                { from: 'src/index.html' },
                { from: 'src/framer/images', to: 'framer/images' },
                { from: 'src/assets', to: 'assets' },
            ]),
        ],
        resolve: {
            extensions: [".web.coffee", ".web.js", ".coffee", ".js"]
        }
    };
};

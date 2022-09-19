const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

module.exports = {

    output: {
        publicPath: "https://mfremote-e872c.firebaseapp.com/",
    },

    mode: 'development',
    devServer: {
        port: 8083,
    },
    module: {
        rules: [
            {
                test: /\.js?$/,

                exclude: /node_modules/,

                loader:
                    'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'REMOTE',
                filename:
                    'remoteEntry.js',

                exposes: {
                    './App':
                        './src/App',
                },
                shared: {
                    ...deps,
                    react: {
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    "react-dom": {
                        singleton: true,
                        requiredVersion: deps["react-dom"],
                    },
                },
            }
        ),
        new HtmlWebpackPlugin({
            template:
                './public/index.html',
        }),
    ],
};

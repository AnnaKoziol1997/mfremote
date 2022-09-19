const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
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
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};

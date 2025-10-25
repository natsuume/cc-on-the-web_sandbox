const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    popup: path.resolve(__dirname, 'src', 'popup', 'popup.ts'),
    background: path.resolve(__dirname, 'src', 'background', 'background.ts'),
    content: path.resolve(__dirname, 'src', 'content', 'content.ts'),
    options: path.resolve(__dirname, 'src', 'options', 'options.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'manifest.json',
          to: 'manifest.json'
        },
        {
          from: 'popup/*.html',
          to: 'popup/[name][ext]'
        },
        {
          from: 'popup/*.css',
          to: 'popup/[name][ext]'
        },
        {
          from: 'options/*.html',
          to: 'options/[name][ext]'
        },
        {
          from: 'icons',
          to: 'icons',
          noErrorOnMissing: true
        },
      ],
    }),
  ],
};

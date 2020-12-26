const path = require('path')
const resolve = (_path) => path.resolve(__dirname, _path)
module.exports = {
  mode: 'production',
  entry: resolve('../src/main'),
  output: {
    path: resolve('../lib'),
    filename: '[name].js',
    library: 'mwp-util',
    libraryTarget: 'umd'
  },
  resolve: {
    symlinks: false
  },
  node: {
    fs: 'empty'
  },
  module: {
    unknownContextCritical : false,
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
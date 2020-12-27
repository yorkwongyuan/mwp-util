const path = require('path')
const resolve = (_path) => path.resolve(__dirname, _path)
const entryConfig = require(resolve('../common.js'))
module.exports = {
  mode: 'production',
  entry: entryConfig,
  watch: true,
  output: {
    publicPath: './',
    path: resolve('../lib'),
    filename: '[name].js',
    library: 'mwp-util',
    chunkFilename: 'js/[name].js',
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
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 0,
  //     maxSize: 1,
  //     maxInitialRequests: 2,
  //     name: false,
  //     minChunks: 1,
  //     cacheGroups: {
  //       default: {
  //         minChunks: 1,
  //         reuseExistingChunk: false
  //       }
  //     }
  //   }
  // }
}
// const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'cheap-source-map',
  devServer: {
    port: 3000
  }
  // module: {
  //   rules: [
  //     {
  //       test:/\.js$/,
  //       use: 'babel-loader'
  //     }
  //   ]
  // },
  // plugins: [
  //    new UglifyJSPlugin()
  //  ]
};
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode:'development',
  entry: {
      app:'./src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
  plugins:[
      new HtmlWebpackPlugin({
          title:'开发环境'
      }),
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ],
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true
  }
}

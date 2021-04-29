const HTMLWebpackPlugin = require('html-webpack-plugin')

const path = require('path'); // invocar libreria - concatena el directorio 
module.exports = {
  entry: './src/app/index.js',
  mode: 'development',
 /*  watch:true, */
  devServer: {
    port: 9000,
    open:true
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin(
      {
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }
    )
  ]
};

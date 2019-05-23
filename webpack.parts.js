
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: true,
    overlay: true
  }
})

exports.page = ({
  name = '',
  title = ''
} = {}) => ({
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: `views/pages/${name}.hbs`,
      title
    })
  ]
})

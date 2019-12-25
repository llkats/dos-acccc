
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
  data = {},
  enLang,
  name = '',
  outputDir = '',
  assetPath = '../public',
  linkPath = '',
  title = 'Welcome to Alameda County Census 2020'
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
      filename: `${outputDir}${enLang || name}.html`,
      template: `views/pages/${name}.hbs`,
      data: {
        assetPath,
        linkPath,
        title,
        ...data
      }
    })
  ]
})

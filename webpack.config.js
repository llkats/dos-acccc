// const { promisify } = require('util')
const path = require('path')
const merge = require('webpack-merge')

const parts = require('./webpack.parts')
const languageData = require('./data/copy/landing-page-copy.json')

const commonConfig = merge([{
  entry: './public/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname)
  }
}])

const productionConfig = merge([])

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  })
])

module.exports = (env, argv) => {
  const config =
    argv.mode === 'production' ? productionConfig : developmentConfig

  const pages = [
    parts.page({
      name: 'index',
      data: {
        assetPath: './public',
        languageData,
        linkPath: config === 'production' ? '/dos-acccc' : '',
        title: 'Welcome to Alameda County Census 2020'
      }
    })
  ]

  return pages.map(page =>
    merge(commonConfig, config, page, { mode: argv.mode })
  )
}

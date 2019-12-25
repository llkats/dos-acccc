// const { promisify } = require('util')
const path = require('path')
const merge = require('webpack-merge')

const parts = require('./webpack.parts')
const languageData = require('./data/copy/landing-page-copy.json')

const buildSecondaryPages = (dir, mode, templateName) => {
  return languageData.languages.map((data) => {
  // return [languageData.languages[0]].map((data) => {
    return parts.page({
      enLang: data.language,
      name: templateName,
      outputDir: `${templateName}/`,
      data,
      linkPath: mode === 'production' ? '/dos-acccc' : '' // for correct GitHub Pages linking, supply the repo name
    })
  })
}

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
  const moreInfoDir = './data/more-info'
  const moreInfoPages = buildSecondaryPages(moreInfoDir, argv.mode, 'more-info')

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
    }),
    ...moreInfoPages
  ]

  return pages.map(page =>
    merge(commonConfig, config, page, { mode: argv.mode })
  )
}

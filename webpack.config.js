// const { promisify } = require('util')
const path = require('path')
const merge = require('webpack-merge')

const languageData = require('./data/copy/landing-page-copy.json')

const parts = require('./webpack.parts')

const buildSecondaryPages = (dir, mode, templateName) => {

  return languageData.languages.map((data) => {
    return parts.page({
      enLang: data.language,
      name: templateName,
      outputDir: `${templateName}/`,
      data: {
        ...data,
        // TODO: move next line into something clever with production config and mapping
        linkPath: mode === 'production' ? '/dos-acccc' : '' // for correct GitHub Pages linking, supply the repo name
      }
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

  const pages = [
    parts.page({
      name: 'index',
      title: 'landing',
      assetPath: './public',
      data: {
        languageData,
        linkPath: 'dos-acccc' // for correct GitHub Pages linking, supply the repo name
      }
    }),
    ...moreInfoPages
  ]

  const config =
    argv.mode === 'production' ? productionConfig : developmentConfig

  return pages.map(page =>
    merge(commonConfig, config, page, { mode: argv.mode })
  )
}

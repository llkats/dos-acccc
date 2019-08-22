// const { promisify } = require('util')
const path = require('path')
const fs = require('fs')
const merge = require('webpack-merge')

const primaryLanguageData = require('./data/primary-languages')
const secondaryLanguageData = require('./data/secondary-languages')

const parts = require('./webpack.parts')

const buildMoreInfoPages = (dir, templateName) => {
  const files = fs.readdirSync(dir)

  return files.map((file) => {
    const filePath = path.resolve(__dirname, 'data/more-info', file)
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    return parts.page({
      enLang: data.meta.enLang,
      name: templateName,
      outputDir: 'more-info/',
      data
    })
  })
}

const buildResourcesPages = (dir, templateName) => {
  const files = fs.readdirSync(dir)

  return files.map((file) => {
    const filePath = path.resolve(__dirname, 'data/resources', file)
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    return parts.page({
      enLang: data.meta.enLang,
      name: templateName,
      outputDir: 'resources/',
      data
    })
  })
}

const commonConfig = merge([{
  entry: './src/index.js',
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

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode })
  }

  return merge(commonConfig, developmentConfig, { mode })
}

module.exports = (mode) => {
  const moreInfoDir = './data/more-info'
  const moreInfoPages = buildMoreInfoPages(moreInfoDir, 'more-info')

  const resourcesDir = './data/resources'
  const resourcesPages = buildResourcesPages(resourcesDir, 'resources')

  const pages = [
    parts.page({
      name: 'index',
      title: 'landing',
      assetPath: './public',
      data: {
        primaryLanguages: primaryLanguageData,
        secondaryLanguages: secondaryLanguageData
      }
    }),
    ...moreInfoPages,
    ...resourcesPages
  ]

  const config =
    mode === 'production' ? productionConfig : developmentConfig

  return pages.map(page =>
    merge(commonConfig, config, page, { mode })
  )
}

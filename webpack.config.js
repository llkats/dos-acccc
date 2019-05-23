const merge = require('webpack-merge')
const path = require('path')

const parts = require('./webpack.parts')

const commonConfig = merge([{
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
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

module.exports = mode => {
  const pages = [
    parts.page({ name: 'landing-page', title: 'landing' }),
    parts.page({ name: 'more-info', title: 'more info' }),
    parts.page({ name: 'resources', title: 'additional resources' })
  ]
  const config =
    mode === 'production' ? productionConfig : developmentConfig

  return pages.map(page =>
    merge(commonConfig, config, page, { mode })
  )
}

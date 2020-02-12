const fs = require('fs')
const path = require('path')
const util = require('util')
const csv = require('csvtojson')

const writeFile = util.promisify(fs.writeFile)

const convertJsonToReadableJson = (data) => {
  if (!data) {
    console.error('error: data is undefined')
    return false
  }

  const languages = data.map((row, i) => {
    const enLanguage = row.enLanguage || row['Language']

    return {
      language: row.languageName || row['Language Name (in Native Script)'],
      enName: enLanguage,
      enLowercase: enLanguage.toLowerCase(),
      linkToGoogleDrive: row.link || row['Link to Google Drive']
    }
  })

  return JSON.stringify({
    languages
  })
}

async function main () {
  const filename = process.argv[2]
  const outputName = process.argv[3] || 'output.json'

  if (path.extname(filename) !== '.csv') {
    console.error('error: must supply a .csv file to convert')
    return false
  }

  csv({ flatKeys: true })
    .fromFile(filename)
    .then((data) => {
      writeFile(outputName, convertJsonToReadableJson(data))
    })
}

main()

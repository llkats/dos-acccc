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

  let primaryLanguages = []
  let secondaryLanguages = []
  data.forEach((language, i) => {
    const { Language, ...words } = language

    const mainPagePlacement = {
      language: words['Language Name (in Native Script)'],
      enName: Language,
      enLowercase: Language.toLowerCase(),
      linkToGoogleDrive: words['Link to Google Drive']
    }

    if (words['Page Position'] === 'Top') {
      primaryLanguages.push(mainPagePlacement)
    } else {
      secondaryLanguages.push(mainPagePlacement)
    }
  })

  return JSON.stringify({
    primaryLanguages,
    secondaryLanguages
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

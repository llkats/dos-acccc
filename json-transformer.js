const fs = require('fs')
const path = require('path')
const util = require('util')

const camelcase = require('camelcase')
const csv = require('csvtojson')

const writeFile = util.promisify(fs.writeFile)

const convertJsonToReadableJson = (data) => {
  if (!data) {
    console.error('error: data is undefined')
    return false
  }

  return JSON.stringify(
    data.map((language, i) => {
      const { Language, ...words } = language
      const processedWords = Object.keys(words).map(key => {
        const value = words[key]

        if (key === '2020 Census') {
          return {
            census2020: value
          }
        }

        const parensRegex = /\(|\)/g
        if (key.match(parensRegex)) {
          return {
            [camelcase(key.replace(parensRegex, ''))]: value
          }
        }

        return {
          [camelcase(key)]: value
        }
      })

      return {
        language: Language,
        words: processedWords
      }
    })
  )
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

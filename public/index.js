import List from 'list.js'

// list.js: https://listjs.com/docs/
const languagesList = new List('languages-list',
  {
    valueNames: [
      'language',
      {
        name: 'enlang',
        attr: 'data-enlang'
      }
    ]
  }
)

import List from 'list.js'

// const secondaryLangs = {{{ secondaryLanguagesJSON }}}
const langs = []

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

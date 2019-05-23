import List from 'list.js'

// const secondaryLangs = {{{ secondaryLanguagesJSON }}}
const secondaryLangs = []

// list.js: https://listjs.com/docs/
const languagesList = new List('secondary-languages-list',
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

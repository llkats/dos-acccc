ACCC 
=================

This project was first prototyped at the Open Oakland Day of Service 2019. Continued development occurs as part of the Open Oakland Brigade.

Kiosk Landing Page
------------

This landing page is intended to be a portal for the 2020 Census administered by Alameda County. It will be accessible at locations where a computer or tablet is provided to the public and is intended to introduce people to the Census and offer information about why the Census is important to complete, as well as resources and guides on how to complete the Census. It is intended to be welcoming to people for whom English is not their first language.

## Development

Install instructions WIP.

1. Clone or fork the repo
1. `npm install`
1. `npm run start` -- starts a dev server
1. ????
1. Profit!!! (jk probably bugs)

Static files are compiled to the `docs` folder.

## Publish

The page is published as a static GitHub page at https://llkats.github.io/dos-acccc/. It will publish automatically on a merge to master.

## Contributions

TBD, but roughly:
1. create a new branch against master
1. make changes
1. test your changes locally
1. open a PR (write moar here)
1. ping @llkats for a review

### Dependencies
- [ExpressJS](https://expressjs.com/)
- [Handlebars](http://handlebarsjs.com/)
- [USDWS Design System](https://designsystem.digital.gov)
- [List.js](https://listjs.com)

### Programming Todos
- templates
  - ~~introduce templates~~
  - ~~pass language in path to /more-info/:language page and render appropriate JSON file, falling back to English if no match~~
  - ~create "additional resources" template and generate based on language~
  - prerender all templates with a build step and investigate caching
- accessibility audits
  - accessibility will be of primary concern
  - all efforts should be made to adhere to WCAG standards
- browser testing
  - test in a wide range of browsers, especially Internet Explorer and Edge, and iOS tablet-size screens
- version control
  - ~maybe move to github~
- hosting
  - ~somewhere other than glitch?~

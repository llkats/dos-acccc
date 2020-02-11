ACCC
=================

This project was first prototyped at the Open Oakland Day of Service 2019. Continued development occurs as part of the Open Oakland Brigade.

Kiosk Landing Page
------------

This landing page is intended to be a portal for the 2020 Census administered by Alameda County. It will be accessible at locations where a computer or tablet is provided to the public and is intended to introduce people to the Census and offer information about why the Census is important to complete, as well as resources and guides on how to complete the Census. It is intended to be welcoming to people for whom English is not their first language.

## Development

Install instructions WIP.

1. Clone or fork the repo
1. `cd dos-acccc`: change directories into the project folder
1. `npm install`: install dependencies
1. `cp landing-page-copy-example.json data/landing-page-copy.json`: copy the example json file to the `data/` folder
1. `npm run start`: start a dev server and open the local site in a browser

There are three types of HTML generated: the main `index.html` page, which links to `more-info` pages in all available languages, which link to `resources` pages in all available languages. Static assets like fonts, images, and CSS stylesheets are located in the `public` folder.

Pages in `more-info` or `resources` folders are only generated if corresponding well-formed config files are present in the `data` folder. There are hella broken links throughout at the moment, and secondary language buttons don't even work at all right now.

### Directory Structure
```
.
├── data
├── node_modules
├── public                        // static assets + CSS and JS
│    ├── fonts
│    ├── img
│    ├── styles                   // edit CSS styles here
│    └── index.js                 // edit JS here
├── views
│    ├── layouts
│    │   └── base.hbs             // base template for all of the pages, doctype, <head>, and <body>
│    ├── index.hbs
├── ...                           // gitignore, package*.json, webpack config files
├── json-transformer.js           // generation script for landing page content
├── landing-page-copy-example.csv   // example of CSV that json-transformer.js can ingest
├── landing-page-copy-example.json  // example of JSON output from json-transformer.js
├── index.html                    // AUTO-GENERATED, DO NOT EDIT: main entry page
└── main.js                       // AUTO-GENERATED, DO NOT EDIT: compiled js from public/index.js
```

## Home Page Content Generation

Given a CSV file (generated from a Google Sheets) file, `npm run build-json` will create a json file in the `data/` folder.

## Publish

The page is published as a static GitHub page at https://llkats.github.io/dos-acccc/. It will publish automatically on a merge to master.

## Contributions

TBD, but roughly:
1. create a new branch against master
1. make changes
1. test your changes locally
1. open a PR (write moar here)
1. ping @llkats for a review

### Generating Landing Page Copy

Copy is provided in a Google Sheets document (ask @llkats for the link if you need access).

1. Export the latest document as a CSV and save it as `data/copy/landing-page-copy.csv`.
2. Transform the CSV into a JSON file with the following json-transformer script.

```
npm run build-json
```

### Dependencies
- [ExpressJS](https://expressjs.com/)
- [Handlebars](http://handlebarsjs.com/)
- [USDWS Design System](https://designsystem.digital.gov)
- [List.js](https://listjs.com)

### Resources
- this was a good article on Handlebars partials: https://cloudfour.com/thinks/the-hidden-power-of-handlebars-partials/
- [Survive JS - Webpack](https://survivejs.com/webpack/), particularly the chapters on [supporting multiple pages](https://survivejs.com/webpack/output/multiple-pages/) and [composing configuration](https://survivejs.com/webpack/developing/composing-configuration/)

### Programming Todos
- templates
  - ~~introduce templates~~
  - ~~pass language in path to /more-info/:language page and render appropriate JSON file, falling back to English if no match~~
  - ~~create "additional resources" template and generate based on language~~
  - ~~prerender all templates with a build step and investigate caching~~
- accessibility audits
  - accessibility will be of primary concern
  - all efforts should be made to adhere to WCAG standards
- browser testing
  - test in a wide range of browsers, especially Internet Explorer and Edge, and iOS tablet-size screens
- version control
  - ~maybe move to github~
- hosting
  - ~somewhere other than glitch?~

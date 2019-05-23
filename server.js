const fs = require('fs');
const express = require('express');
const hbs  = require('express-handlebars');

const primaryLangs = require('./data/primary-languages.json').primaryLanguages;
const secondaryLangs = require('./data/secondary-languages.json').secondaryLanguages;

const moreInfoDir = './data/more-info/';
const moreInfoData = {};

const moreInfoFiles = fs.readdirSync(moreInfoDir, (err, files) => {
  if (err) console.log(err, 'more info directory error')
})

moreInfoFiles.forEach((file) => {
  const data = fs.readFileSync(`${moreInfoDir}${file}`, 'utf8')
  // console.log(data)
  const language = file.replace(/.json/, '')
  // console.log(language)
  moreInfoData[language] = JSON.parse(data);
})

// console.log(moreInfoData['spanish'])

const app = express();

app.engine( 'hbs', hbs({ 
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'hbs');
app.use('/scripts', express.static(__dirname + '/node_modules/list.js/dist/'));
app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  response.render('index', {
    primaryLanguages: primaryLangs,
    secondaryLanguages: secondaryLangs,
    secondaryLanguagesJSON: JSON.stringify(secondaryLangs)
  });
});

app.get('/more-info/:language', function(request, response) {
  const languageData = moreInfoData[request.params.language] || moreInfoData['english'];
  console.log(languageData)
  response.render('more-info.hbs', languageData);
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

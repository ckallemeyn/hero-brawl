const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
const request = require('request');
const TOKEN = require('../config').API_TOKEN;
const fs = require('fs')
const path = require('path')
let getHeroes = require('./helpers/heroAPI').getHeroes;
// const getHeroes = require('./helpers/heroAPI').getHeroes;

app.use(express.static('public/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => { console.log(`app is listening on port ${port}`) });

app.get('/hero', (req, res) => {
  getHeroes(heroName='Yoda', function(error, response, body) {
    if (error) {
      console.error('error in getHeroes func in server', error);
    } else {
      let heroInfo = JSON.parse(body);
      let heroData = heroInfo.results[0];
      console.log(heroData)
      res.json(heroData);
      res.end();
    }
  });
});




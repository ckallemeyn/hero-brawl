const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
const request = require('request');
const TOKEN = require('../config').API_TOKEN;
const fs = require('fs');
const path = require('path');
const { db } = require('../db/index.js')
const { getHeroes } = require('./helpers/heroAPI');

app.use(express.static('public/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => { console.log(`app is listening on port ${port}`) });


app.get('/hero/:name', (req, res) => {

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
app.post('/hero', (req, res) => {
  let { query, username } = req.body;
  console.log('found the body', req.body);
  getHeroes(query, function(error, response, body) {
    if (error) {
      console.error('error in getHeroes func in server', error);
      res.status(404).send(error);
    } else {
      let heroInfo = JSON.parse(body);
      let heroData = heroInfo.results[0];
      console.log(heroData)
      // need to add Database Insert query here

      res.status(201).json(heroData);
    }
  });
});




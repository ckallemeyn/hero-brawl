const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
const request = require('request');
const TOKEN = require('../config').API_TOKEN;
const fs = require('fs');
const path = require('path');
const { db } = require('../db/index.js')
const { getHeroes } = require('./helpers/heroAPI.js');
const { nameToId } = require('./helpers/heroUtils.js');

app.use(express.static('public/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => { console.log(`app is listening on port ${port}`) });

app.get('/stats/:hero', (req, res) => {
  const { hero } = req.params;
  const heroId = nameToId(hero);
  // make api call with id
  getHeroes(heroId, (error, response, body) => {
    if (error) {
      console.error('Unable to get hero', error);
      res.status(404).send(error);
    }
    let data = JSON.parse(body);
    res.status(200).json(data);
  });
});

app.get('/hero/:username', (req, res) => {
  const { username } = req.params;
  const qs =`SELECT name, intelligence, strength, speed, durability, power, combat, image FROM heroes, users WHERE username = ?`;
  db.query(qs, username, (error, results, fields) => {
    if (error) {
      console.error('Could not retrieve data from db', error);
      res.status(404).send(error);
    }
    if (results) {
      console.log('SUCCESS You retrieved the data', results);
      res.status(200).json(results);
    }
  });
});

// Refactor Later to shorten code
app.post('/hero', (req, res) => {
  const { heroName, username } = req.body;
  const heroId = nameToId(heroName);
  console.log('Found Hero ID on server', )
  getHeroes(heroId, function(error, response, body) {
    if (error) {
      console.error('error in getHeroes func in server', error);
      res.status(404).send(error);
    } else {
      let data = JSON.parse(body);
      console.log('Here is the data', data)
      const { name, powerstats, image: { url } } = data;
      const stats = Object.values(powerstats);
      const params = [ name, ...stats, url, username ];
      // This can be refactored in a database file and imported in:
      let qs = `INSERT INTO heroes(name, intelligence, strength, speed, durability, power, combat, image, user_id) VALUES (?,?,?,?,?,?,?,?,(SELECT id FROM users WHERE username=?))`;
      db.query(qs, params, (error, results, fields) => {
        if (error) {
          console.error('unable to insert data: ', error);
          res.status(404).send(error);
        }
        if (results !== undefined) {
          console.log('SUCCESS!', results);
          res.sendStatus(201);
        }
      });
    }
  });


});




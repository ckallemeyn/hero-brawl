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
  const { name } = req.params;
  
});

// Refactor Later to shorten code
app.post('/hero', (req, res) => {
  const { query, username } = req.body;
  console.log('found the body', req.body);
  getHeroes(query, function(error, response, body) {
    if (error) {
      console.error('error in getHeroes func in server', error);
      res.status(404).send(error);
    } else {
      let data = JSON.parse(body);
      const [{ name, powerstats, image: { url } }] = data.results;
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




const axios = require('axios');
const request = require('request');
const TOKEN = require('../../config.js').API_TOKEN;

const getHeroes = (heroName, callback) => {
  let options = {
    url: `https://superheroapi.com/api/${TOKEN}/search/Yoda`,
    headers: {
      'User-Agent': 'request',
    },
    agentOptions: {
      host: 'superheroapi.com',
      port: 443,
      rejectUnauthorized: false
    }
  };
  request(options, callback)
};

module.exports = { getHeroes }

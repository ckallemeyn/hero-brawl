const axios = require('axios');
const request = require('request');
const TOKEN = require('../../config.js').API_TOKEN;

const getHeroes = (heroName, next) => {
  let options = {
    url: `https://superheroapi.com/api/${TOKEN}/search/${heroName}`,
    headers: {
      'User-Agent': 'request',
    },
    agentOptions: {
      host: 'superheroapi.com',
      port: 443,
      rejectUnauthorized: false
    }
  };
  request(options, next)
};

module.exports = { getHeroes }

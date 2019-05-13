const axios = require('axios');
const request = require('request');
const { API_TOKEN } = require('../../config.js');

const getHeroes = (id, next) => {
console.log('found the id in getHeros func', id)
  let options = {
    url: `https://superheroapi.com/api/${API_TOKEN}/${id}`,
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

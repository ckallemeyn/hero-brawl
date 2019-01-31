const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const port = 4000;

app.use(express.static('public/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => { console.log(`app is listening on port ${port}`) });


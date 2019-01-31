const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const port = 4000;

app.listen(port, () => {console.log(`app is listening on port ${port}`)})

const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/config.js');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
const express = require("express");
const app = express()
const config = require('./config')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(config.port, () => {
    console.log(`API REST en http://localhost:${config.port}/`);
  });

const express = require("express");
const bodyParser = require('body-parser');


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(2500, () => {
    console.log('API REST en http://localhost:2500');
  });
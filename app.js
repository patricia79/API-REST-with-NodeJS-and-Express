const express = require("express");
const app = express()
const config = require('./config')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.post('./playerPost', playerController);

app.get('/playerGet',(req, res) => {
    try {
      res.status(200).json({ name: `${req.params.name}`});
    } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  })
app.listen(config.port, () => {
    console.log(`API REST en http://localhost:${config.port}/`);
  })
// esto me da un undefined, lo sé
const express = require("express");
const bodyParser = require('body-parser');

const app = express()
const config = require('./config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/product',(req, res) => {
    try {
      res.status(200).json({ product:['earphones', 'laptop','mouse']});
    } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  })

  
 
  app.post('/api/product',(req, res) => {
    try {
      console.log(req.body);
      res.status(200).json({message: 'the product has been received correctly'});
    } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  })// aqui no consigo que se me vea el body con el json de keys y values que le he puesto en el postman

/*
sagradafamilia@udance.es
  app.get ('/api/product/:productId',(req, res) => {
  })


  app.put ('/api/product/:productId',(req, res) => {
  })

  app.delete ('/api/product/:productId',(req, res) => {
  })
*/


// port 2500

app.listen(config.port, () => {
  console.log(`API REST en http://localhost:${config.port}/`);
});
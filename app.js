'use strict'

const express = require("express");
//const bodyParser = require('body-parser');
const mongoose = require('mongoose')
app.use(express.json());
const Product = require('./models/product')

const app = express()
const config = require('./config')

/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));*/ 

/*
app.get ('/api/product/:productId',(req, res) => {

  let productId = req.params.productId

  Product.findById(productId, (err, product) => {

  /* en cas d'objectes que valor i clau tinguin el mateix nom, nomes es posa un
  res.status(200).send({product: product})
  res.status(200).send({product})
}) 
  if (!product) { return res.status(404).send({message:`
  the product doesn't exist`})}// si el producte no existeix


  if (err) { return res.status(500).send({message:`
  error when making the request ${err}`})} 
})*/


  app.get('/api/product',(req, res) => {
    try {
      let pr
      res.status(200).json({ product:['earphones', 'laptop','mouse']});
    } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  })  

  app.post('/api/product',(req, res) => {
    try {
      console.log('POST /api/product');
      console.log(req.body);

      let product0 = new Product()

      product0.name = req.body.name
      product0.price = req.body.price
      product0.picture = req.body.picture
      product0.category = req.body.category
      product0.description = req.body.description

product0.save((err, productStored) => {

  if (err) { res.status(500).send({message: 'Error saving to database: ${err}'})
  res.status(200).send({product0: productStored})
}
}
)
    } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  })// aqui no consigo que se me vea el body con el json de keys y values que le he puesto en el postman

 res.status(200).json({message: 'the product has been received correctly'});


  app.put ('/api/product/:productId',(req, res) => {
  })

  app.delete ('/api/product/:productId',(req, res) => {
  })
*/

// shop es el nombre de la base de datos
mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
  if (err) {return console.log(`Error connecting to database: ${err}`);}
  console.log('Database connection established...');
  //conexion a la base de datos establecida
  // port 2500
  app.listen(config.port, () => {
    console.log(`API REST en http://localhost:${config.port}/`);
  });
})

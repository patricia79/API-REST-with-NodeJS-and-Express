'use strict'

const express = require("express");
//const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express()
const config = require('./config')

const ProductCtrl = require('./controller/product')

app.use(express.json());
/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));*/ 


app.get('/api/product', ProductCtrl.getProducts)  


app.get ('/api/product/:productId',(req, res) => {

    let productId = req.params.productId
  
    Product.findById(productId, (err, product) => {
    try { res.status(200).json({product: product})} //devuelve un json con un producto 
     catch { if (err) {return res.status(500).json({message:`error when making the request ${err}`})} 
     if(!productId) {return res.status(404).json({message: `the product doesn't exist`})}}
     })})
  /* en cas d'objectes que valor i clau tinguin el mateix nom, nomes es posa un
  res.status(200).json({product: product})
  res.status(200).json({product})}) */


  

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

  if (err) { res.status(500).json({message: `Error saving to database: ${err}`})
  res.status(200).send({product0: productStored})
}})} catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  })// aqui no consigo que se me vea el body con el json de keys y values que le he puesto en el postman



  app.put ('/api/product/:productId',(req, res) => {
    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId, update , (err, productUpdated) => {
      if (err) { res.status(500).json({message: `Error updating product: ${err}`})}
      res.status(200).json({ product: productUpdated});
    })
    })

  app.delete ('/api/product/:productId',(req, res) => {
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
      if (err) { res.status(500).json({message: `Error deleting product: ${err}`})}
      product.remove(err => {
        if (err) { res.status(500).json({message: `Error deleting product: ${err}`})}
        res.status(200).json({message: 'the product has been successfully removed'});
      })
  })})


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
//let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
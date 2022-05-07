'use strict'

const express = require("express");
//const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express()
const config = require('./config')

const productCtrl = require('./controller/product')

app.use(express.json());
/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));*/ 

app.get('/api/product', productCtrl.getProducts)  
app.get ('/api/product/:productId', productCtrl.getProduct)
app.post('/api/product', productCtrl.saveProduct)// aqui no consigo que se me vea el body con el json de keys y values que le he puesto en el postman
app.put ('/api/product/:productId', productCtrl.updateProduct)
app.delete ('/api/product/:productId', productCtrl.deleteProduct)


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
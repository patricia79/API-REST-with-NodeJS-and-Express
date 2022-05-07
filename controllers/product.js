'use strict'


const Product = require('./models/product')

function getProduct (req, res) {
    let productId = req.params.productId
  
    Product.findById(productId, (err, product) => {
    try { res.status(200).json({product: product})} //devuelve un json con un producto 
     catch { if (err) {return res.status(500).json({message:`error when making the request ${err}`})} 
     if(!productId) {return res.status(404).json({message: `the product doesn't exist`})}}
     })
}

function getProducts (req, res) {
    Product.find({}, (err, products) => {
        if (err) {return res.status(500).json({message:`error when making the request ${err}`})}
        if(!products) {return res.status(404).json({message: `the products do not exist`})}
      })
      res.status(200).json({ products: []})
}

function saveProduct(req, res) {
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

}

function updateProduct (req, res) {
    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId, update , (err, productUpdated) => {
      if (err) { res.status(500).json({message: `Error updating product: ${err}`})}
      res.status(200).json({ product: productUpdated});
    })
}

function deleteProduct (req, res) {
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
      if (err) { res.status(500).json({message: `Error deleting product: ${err}`})}
      product.remove(err => {
        if (err) { res.status(500).json({message: `Error deleting product: ${err}`})}
        res.status(200).json({message: 'the product has been successfully removed'});
      })
  })
}

 /* en cas d'objectes que valor i clau tinguin el mateix nom, nomes es posa un
  res.status(200).json({product: product})
  res.status(200).json({product})}) */

exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}
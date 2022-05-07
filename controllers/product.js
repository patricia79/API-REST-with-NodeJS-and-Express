'use strict'


const Product = require('./models/product')

function getProduct (id) {
   
}

function getProducts (req, res) {
    Product.find({}, (err, products) => {
        if (err) {return res.status(500).json({message:`error when making the request ${err}`})}
        if(!products) {return res.status(404).json({message: `the products do not exist`})}
      })
      res.status(200).json({ products: []})
}

function updateProduct (id) {

}

function deleteProduct (id) {

}

exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}
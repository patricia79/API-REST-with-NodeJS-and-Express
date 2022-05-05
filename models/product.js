'use strict'

const mongoose= require('mongoose')
const Schema= mongoose.Schema

const ProductSchema = Schema ({

name: String,
price: { Number , default: 0 },
picture:String,
category:{ String , enum: ['computers', 'phones', 'accesories'] },
description: String

})

mongoose.model('Product', ProductSchema)

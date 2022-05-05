'use strict'

const mongoose= require('mongoose')
const Schema= mongoose.Schema

const PlayerSchema = new Schema({
    
name: String,
price: { Number , default: 0 },
picture:String,
category:{ String , enum: ['computers', 'phones', 'accesories'] },
description: String,
  name: {
        type: String,
        unique: true,
        required: [true, 'Name is required']
    },
    date: String,
    totalGames: {
        type: Number,
        default: 0
    },
    gamesWon: {
        type: Number,
        default: 0
    },
    wonRate: {
        type: Number,
        default: 0
    },
    playHistory: [Object]
},
    { versionKey: false });


    mongoose.model('Player', PlayerSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bidSchema = new Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    location: {
        type: String
    },
    image: {
        type: String
    },
    userId: {
        type: String
    },
    createdDate: {
        type: String
    },
    id: {
        type: String
    }
}, { timestamps: true })



const BidDetail = mongoose.model('Bid', bidSchema)
module.exports = BidDetail